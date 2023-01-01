import { EventEmitter, Event, Disposable } from "vscode";
import {
    DisposableStore,
    SafeDisposable,
} from "./vscode/base/common/lifecycle";
import { LinkedList } from "./vscode/base/common/linkedList";

export class Emitter<T> implements EventEmitter<T> {
    protected _listeners?: LinkedList<Listener<T>>;
    private _disposed: boolean = false;
    private _event?: Event<T>;
    private _deliveryQueue?: EventDeliveryQueue;

    get event(): Event<T> {
        if (this._event) {
            return this._event;
        }
        this._event = (
            callback: (e: T) => any,
            thisArgs?: any,
            disposables?: Disposable[]
        ): Disposable => {
            if (!this._listeners) {
                this._listeners = new LinkedList();
            }

            const listener = new Listener(callback, thisArgs);
            const removeListener = this._listeners.push(listener);

            const result = listener.subscription.set(() => {
                if (!this._disposed) {
                    removeListener();
                }
            });

            if (disposables instanceof DisposableStore) {
                disposables.add(result);
            } else if (Array.isArray(disposables)) {
                disposables.push(result);
            }

            return result;
        };
        return this._event;
    }

    fire(event: T): void {
        if (this._listeners) {
            // put all [listener,event]-pairs into delivery queue
            // then emit all event. an inner/nested event might be
            // the driver of this

            if (!this._deliveryQueue) {
                this._deliveryQueue = new PrivateEventDeliveryQueue();
            }

            for (const listener of this._listeners) {
                this._deliveryQueue.push(this, listener, event);
            }

            this._deliveryQueue.deliver();
        }
    }

    dispose() {
        if (!this._disposed) {
            this._disposed = true;

            // It is bad to have listeners at the time of disposing an emitter, it is worst to have listeners keep the emitter
            // alive via the reference that's embedded in their disposables. Therefore we loop over all remaining listeners and
            // unset their subscriptions/disposables. Looping and blaming remaining listeners is done on next tick because the
            // the following programming pattern is very popular:
            //
            // const someModel = this._disposables.add(new ModelObject()); // (1) create and register model
            // this._disposables.add(someModel.onDidChange(() => { ... }); // (2) subscribe and register model-event listener
            // ...later...
            // this._disposables.dispose(); disposes (1) then (2): don't warn after (1) but after the "overall dispose" is done

            if (this._listeners) {
                this._listeners.clear();
            }
        }
    }
}

class Listener<T> {
    readonly subscription = new SafeDisposable();

    constructor(
        readonly callback: (e: T) => void,
        readonly callbackThis: any | undefined,
        readonly stack?: Stacktrace | undefined
    ) {}

    invoke(e: T) {
        this.callback.call(this.callbackThis, e);
    }
}

class Stacktrace {
    static create() {
        return new Stacktrace(new Error().stack ?? "");
    }

    private constructor(readonly value: string) {}

    print() {
        console.warn(this.value.split("\n").slice(2).join("\n"));
    }
}

export class EventDeliveryQueue {
    protected _queue = new LinkedList<EventDeliveryQueueElement>();

    get size(): number {
        return this._queue.size;
    }

    push<T>(emitter: Emitter<T>, listener: Listener<T>, event: T): void {
        this._queue.push(
            new EventDeliveryQueueElement(emitter, listener, event)
        );
    }

    clear<T>(emitter: Emitter<T>): void {
        const newQueue = new LinkedList<EventDeliveryQueueElement>();
        for (const element of this._queue) {
            if (element.emitter !== emitter) {
                newQueue.push(element);
            }
        }
        this._queue = newQueue;
    }

    deliver(): void {
        while (this._queue.size > 0) {
            const element = this._queue.shift()!;
            try {
                element.listener.invoke(element.event);
            } catch (e) {
                console.error(e);
            }
        }
    }
}

/**
 * An `EventDeliveryQueue` that is guaranteed to be used by a single `Emitter`.
 */
class PrivateEventDeliveryQueue extends EventDeliveryQueue {
    override clear<T>(emitter: Emitter<T>): void {
        // Here we can just clear the entire linked list because
        // all elements are guaranteed to belong to this emitter
        this._queue.clear();
    }
}

class EventDeliveryQueueElement<T = any> {
    constructor(
        readonly emitter: Emitter<T>,
        readonly listener: Listener<T>,
        readonly event: T
    ) {}
}

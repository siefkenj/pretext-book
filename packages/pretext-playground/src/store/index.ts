import { createStore, createTypedHooks } from "easy-peasy";
import { PlaygroundModel, playgroundStore } from "./model";

const store = createStore<PlaygroundModel>(playgroundStore);

const typedHooks = createTypedHooks<PlaygroundModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export { store };

#!/bin/bash

for i in ./examples/fragments/*ptx; do
	echo "Compiling $i"
	./compile-example.sh "$i" ./examples/rendered/
done
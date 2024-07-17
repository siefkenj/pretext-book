#!/bin/bash

# How to use:
# Run this script with no arguments to compile everything in
#   /packages/docs/examples/fragments/*.ptx into
#   /packages/docs/examples/rendered/*.html and *.raw.html
# but only if the source file is newer than the .raw.html file.
# Run this script with --force to compile everything, regardless of timestamps.

OUTFOLDER="./examples/rendered"
for INFILE in ./examples/fragments/*ptx; do
	OUTFILE="$OUTFOLDER/$(basename $INFILE)"
	OUTFILE="${OUTFILE%.ptx}.raw.html"
	if [[ "$1" == "--force" ]] || [[ "$INFILE" -nt "$OUTFILE" ]]; then
		echo "Compiling $INFILE"
		echo "       -> $OUTFILE"
		./compile-example.sh "$INFILE" $OUTFOLDER/
	else
		echo "Skipping $INFILE"
		echo "         (compiled version already up to date)"
	fi
done

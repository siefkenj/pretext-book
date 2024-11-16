#!/bin/bash

TMP_DIR=./tmp_schema_update

#FRAGMENT_FILE_PATH=$1
## if $FRAGMENT_FILE_PATH is not set, print usage information
#if [ -z "$FRAGMENT_FILE_PATH" ]; then
#  echo "Usage: ./update-schema-from-master.sh"
#  exit 1
#fi

mkdir -p $TMP_DIR
pushd $TMP_DIR
rm -rf *
git clone https://github.com/siefkenj/relax-ng-to-typescript.git
wget https://raw.githubusercontent.com/PreTeXtBook/pretext/refs/heads/master/schema/pretext.rng

# Now we generate the types. This part is a little weird because vite-node things the root is .. even though
# we are in the tmp directory.
npx vite-node  $TMP_DIR/relax-ng-to-typescript/scripts/generate-typescript.ts -- -g $TMP_DIR/pretext.rng -o $TMP_DIR/

HAS_DIFF=$(diff ./generated-grammar.ts ../src/assets/generated-grammar.ts)
if [ -z "$HAS_DIFF" ]; then
  echo "No changes detected."
else
  echo "Changes detected. Update schema with"
  echo "cp $TMP_DIR/generated-grammar.ts ./src/assets/generated-grammar.ts"
  echo "cp $TMP_DIR/generated-types.ts ./src/assets/generated-types.ts"
fi


#MAIN_PTX=$(npx pretext-fragment --fragment-file "$FRAGMENT_FILE_PATH" --template "$ARTICLE_TEMPLATE")
#
#echo "Rendering the following pretext file:"
#echo "$MAIN_PTX"
#
## A hard-coded version of a fragment file. Uncomment to force the use of this file.
##
##IFS='' read -r -d '' MAIN_PTX <<"EOF"
##<?xml version="1.0" encoding="UTF-8"?><pretext xml:id="FRAGMENT_PARENT_ID__2">
##    <article xml:id="FRAGMENT_PARENT_ID__1">
##        <chapter xml:id="FRAGMENT_PARENT_ID__0"><p>Some text.</p></chapter>
##    </article>
##</pretext>
##EOF
#
#
## Make a basic project for the pretext-cli
#mkdir -p $TMP_DIR
#echo "$PUBLICATION_PTX" > $TMP_DIR/publication.ptx
#echo "$PROJECT_PTX" > $TMP_DIR/project.ptx
#echo "$MAIN_PTX" > $TMP_DIR/main.ptx
#echo "$REQUIREMENTS_TXT" > $TMP_DIR/requirements.txt
#
#pushd $TMP_DIR
#python3 -c "from pretext.core import validate; validate('./main.ptx', 'main.jing', '')"
#cat main.jing
#pretext build web --clean
#
## find the rendered fragment and extract it
## The file we want to extract has the form `FRAGMENT_PARENT_ID__##.html` where ## is the smallest number
#FRAGMENT_FILE=$(find output -name "FRAGMENT_PARENT_ID__*.html" | sort -V | head -n 1)
#
## get the base name of the fragment file without the extension
#FRAGMENT_BASENAME=$(basename "$FRAGMENT_FILE_PATH")
#FRAGMENT_BASENAME="${FRAGMENT_BASENAME%.*}"
#OUT_FILE="$FRAGMENT_BASENAME.html"
#
#
#echo "Extracting fragment from $FRAGMENT_FILE"
#OUT=$(npx pretext-fragment --extract-from-html-file "$FRAGMENT_FILE" --pretty-print)
#RAW=$(cat "$FRAGMENT_FILE")
#popd > /dev/null
#echo "$OUT" > "$TARGET_DIR/$OUT_FILE"
#echo "$RAW" > "$TARGET_DIR/${OUT_FILE%.*}.raw.html"
#echo "Saved fragment to $TARGET_DIR/$OUT_FILE"

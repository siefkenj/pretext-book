#!/bin/bash

TMP_DIR=./tmp_fragment_compile

FRAGMENT_FILE_PATH=$1
# if $FRAGMENT_FILE_PATH is not set, print usage information
if [ -z "$FRAGMENT_FILE_PATH" ]; then
  echo "Usage: ./basic-compile.sh <fragment-file-path> [target-dir]"
  echo "  <fragment-file-path> is the path to the fragment file to compile"
  echo "  [target-dir] is the directory to save the compiled fragment to. If not set, defaults to $TMP_DIR"
  exit 1
fi

TARGET_DIR=$2
# if $TARGET_DIR is not set, use $TMP_DIR
TARGET_DIR=${TARGET_DIR:-$TMP_DIR}

IFS='' read -r -d '' PROJECT_PTX <<"EOF"
<?xml version="1.0" encoding="utf-8"?>
<project ptx-version="2" source="." publication=".">
  <targets>
    <target name="web" format="html" />
  </targets>
</project>
EOF

IFS='' read -r -d '' PUBLICATION_PTX <<"EOF"
<?xml version="1.0" encoding="UTF-8"?>
<publication>
	<source>
		<directories external="./assets" generated="./generated-assets" />
	</source>
</publication>
EOF

IFS='' read -r -d '' REQUIREMENTS_TXT <<"EOF"
pretext == 2.9.1
EOF


IFS='' read -r -d '' ARTICLE_TEMPLATE <<"EOF"
<?xml version="1.0" encoding="UTF-8" ?>
<pretext>
    <article>
        <title></title>
        <FRAGMENT />
    </article>
</pretext>
EOF

MAIN_PTX=$(npx pretext-fragment --fragment-file "$FRAGMENT_FILE_PATH" --template "$ARTICLE_TEMPLATE")

echo "Rendering the following pretext file:"
echo "$MAIN_PTX"

# A hard-coded version of a fragment file. Uncomment to force the use of this file.
#
#IFS='' read -r -d '' MAIN_PTX <<"EOF"
#<?xml version="1.0" encoding="UTF-8"?><pretext xml:id="FRAGMENT_PARENT_ID__2">
#    <article xml:id="FRAGMENT_PARENT_ID__1">
#        <chapter xml:id="FRAGMENT_PARENT_ID__0"><p>Some text.</p></chapter>
#    </article>
#</pretext>
#EOF


# Make a basic project for the pretext-cli
mkdir -p $TMP_DIR
echo "$PUBLICATION_PTX" > $TMP_DIR/publication.ptx
echo "$PROJECT_PTX" > $TMP_DIR/project.ptx
echo "$MAIN_PTX" > $TMP_DIR/main.ptx
echo "$REQUIREMENTS_TXT" > $TMP_DIR/requirements.txt

pushd $TMP_DIR
python3 -c "from pretext.core import validate; validate('./main.ptx', 'main.jing', '')"
cat main.jing
pretext build web --clean

# find the rendered fragment and extract it
# The file we want to extract has the form `FRAGMENT_PARENT_ID__##.html` where ## is the smallest number
FRAGMENT_FILE=$(find output -name "FRAGMENT_PARENT_ID__*.html" | sort -V | head -n 1)

# get the base name of the fragment file without the extension
FRAGMENT_BASENAME=$(basename "$FRAGMENT_FILE_PATH")
FRAGMENT_BASENAME="${FRAGMENT_BASENAME%.*}"
OUT_FILE="$FRAGMENT_BASENAME.html"


echo "Extracting fragment from $FRAGMENT_FILE"
OUT=$(npx pretext-fragment --extract-from-html-file "$FRAGMENT_FILE" --pretty-print)
RAW=$(cat "$FRAGMENT_FILE")
popd > /dev/null
echo "$OUT" > "$TARGET_DIR/$OUT_FILE"
echo "$RAW" > "$TARGET_DIR/${OUT_FILE%.*}.raw.html"
echo "Saved fragment to $TARGET_DIR/$OUT_FILE"

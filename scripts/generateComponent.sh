#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Usage: $0 <ComponentName>"
  exit 1
fi

COMPONENT_NAME=$1
COMPONENT_DIR="src/components/$COMPONENT_NAME"
TSX_FILE="$COMPONENT_DIR/$COMPONENT_NAME.tsx"
SCSS_FILE="$COMPONENT_DIR/$COMPONENT_NAME.module.scss"
INDEX_FILE="src/components/index.ts"
EXPORT_STATEMENT="export * from './$COMPONENT_NAME/$COMPONENT_NAME';"

# Create directory
mkdir -p "$COMPONENT_DIR"

# Create TypeScript file
echo "import styles from './$COMPONENT_NAME.module.scss';

export function $COMPONENT_NAME() {
    return <h1>Hello from $COMPONENT_NAME</h1>;
}" > "$TSX_FILE"

# Create empty SCSS file
touch "$SCSS_FILE"

# Add export statement to the end of index.ts
echo -e "\n$EXPORT_STATEMENT" >> "$INDEX_FILE"

echo "Component '$COMPONENT_NAME' generated successfully at $COMPONENT_DIR."
#!/bin/bash
echo "Current working directory: $(pwd)"
echo "Looking for dist/index.js..."
if [ -f "dist/index.js" ]; then
    echo "Found dist/index.js, starting server..."
    node dist/index.js
elif [ -f "src/dist/index.js" ]; then
    echo "Found src/dist/index.js, starting server..."
    node src/dist/index.js
else
    echo "Cannot find index.js file. Directory contents:"
    find . -name "index.js" -type f
    exit 1
fi

#!/bin/bash

if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null ; then
    echo "Running"
else
    echo "ERROR! Not running"
    exit 1
fi

#!/bin/bash
npm install
cp ./node_modules/java/build/jvm_dll_path.json .
./node_modules/.bin/electron-rebuild
mv jvm_dll_path.json ./node_modules/java/build/
electron-packager .
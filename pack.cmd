@echo off
call npm install
copy node_modules\java\build\jvm_dll_path.json .
call node_modules\.bin\electron-rebuild
move jvm_dll_path.json node_modules\java\build\
call electron-packager .
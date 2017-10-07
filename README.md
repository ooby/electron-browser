## java-electron-browser (JEB)

This is fork of [electron-browser](https://github.com/pfrazee/electron-browser) made to support [Java bindings](https://github.com/joeferner/node-java)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

![./screenshot.png](./screenshot.png)

### Prerequisites

**IMPORTANT** All node-java [requirements](https://github.com/joeferner/node-java#installation) must be satisfied

1. Windows x86/x64
2. [Visual C++ 2015 build tools](http://landinghub.visualstudio.com/visual-cpp-build-tools)
3. [Python 2.7](https://www.python.org/ftp/python/2.7.14/python-2.7.14.msi)
4. node.js x86/x64, npm v5.2.0 - `npm i -g npm@5.2.0`
5. [JDK x86/x64](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), v9 is not supported
6. electron-packager - `npm i -g electron-packager`
7. `python`, `javac` in `PATH`
8. node-gyp - `npm i -g node-gyp`
9. modify `config/config.json` file as below:
```json
{
    "defaults": {
        "location": "https://argunov.com" // Homepage URL
    }
}
```

### Build instructions

```bash
git clone https://github.com/ooby/java-electron-browser
cd electron-browser
npm install
cp ./node_modules/java/build/jvm_dll_path.json .
./node_modules/.bin/electron-rebuild
mv jvm_dll_path.json ./node_modules/java/build/
electron-packager .
```

Also, you can use one of build scripts `pack.cmd` or `pack.sh`

### Run for test or development

```bash
npm install
cp ./node_modules/java/build/jvm_dll_path.json .
./node_modules/.bin/electron-rebuild
mv jvm_dll_path.json ./node_modules/java/build/
npm start
```
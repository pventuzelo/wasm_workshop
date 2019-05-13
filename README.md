# Reversing WebAssembly Module 101

NorthSec 2019 ["Reversing WebAssembly Module 101"](https://nsec.io/session/2019-reversing-webassembly-module-101.html) Workshop

WebAssembly (WASM) is a new binary format currently supported by all major browsers (Firefox, Chrome, WebKit /Safari and Microsoft Edge) and executed inside JS scripts. It is already used for malicious purposes like Cryptojacking and can be found inside some web-browsers addons.

In this workshop, I will first introduce WebAssembly concepts and why it’s consider as a “game changer for the web”. Secondly, I will expose different techniques (Static/Dynamic analysis) and tools (Octopus, Wasabi, ...) to perform a WebAssembly module analysis. Finally, we will hands-on with basic examples (crackmes) and go throws some real-life cryptominer and web-browsers plugins using WebAssembly module. Along the talk, I will only used open source tools.

# Tools installation

## install a compatible web-browser
* [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [Google Chrome](https://www.google.com/chrome/)

## install octopus locally
```
# Security Analysis tool for WebAssembly module and Blockchain Smart Contracts
git clone https://github.com/quoscient/octopus
```
Follow the installation [here](https://github.com/quoscient/octopus#quick-start)

## install wasmer
```
# Universal WebAssembly runtime
# https://github.com/wasmerio/wasmer
curl https://get.wasmer.io -sSfL | sh
```

## install python & pip3
```
sudo apt install python3 python3-pip
```

## install pywasm & python-ext-wasm
```
# WebAssembly interpreter written in pure Python
# https://github.com/mohanson/pywasm
pip3 install pywasm

# Python library to run WebAssembly binaries.
# https://github.com/wasmerio/python-ext-wasm
pip3 install wasmer
```

## install wabt
```
# WABT: The WebAssembly Binary Toolkit
git clone --recursive https://github.com/WebAssembly/wabt
cd wabt
```
Follow the installation [here](https://github.com/WebAssembly/wabt#building-using-cmake-directly-linux-and-macos)

# Exercices

## Crackmes
### FlareOn5 2018 
TODO
### Bsides Ottawa CTF wall1
TODO

## Cryptominer
TODO

## Firefox addons
TODO
# Reversing WebAssembly Module 101 Workshop

**WebAssembly (WASM) is a new binary format currently supported by all major browsers** (Firefox, Chrome, WebKit /Safari and Microsoft Edge) and executed inside JS scripts. It is already used for malicious purposes like Cryptojacking and can be found inside some web-browsers addons.

In this workshop, I will first introduce WebAssembly concepts and why it’s consider as a “game changer for the web”. Secondly, I will expose different techniques (**Static/Dynamic analysis**) and tools (**Octopus, Wasabi, ...**) to perform a WebAssembly module analysis. Finally, we will hands-on with basic examples (**crackmes**) and go throws some real-life **cryptominer** and **web-browsers plugins** using WebAssembly module. Along the talk, I will only used open source tools.

# Outline
- Introduction
- WebAssembly Basics
- WebAssembly Runtime VM
- Module dissection
- Reversing wasm module
- Dynamic analysis
- Cryptominers
- Conclusion

# Conferences
- [NorthSec 2019](https://nsec.io/session/2019-reversing-webassembly-module-101.html)
- [Hack.lu 2019](https://2019.hack.lu/talks/#reversing-webassembly-module-101)

# Tools installation

## Install a compatible web-browser
* [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [Google Chrome](https://www.google.com/chrome/)

## Install octopus locally
```
# Security Analysis tool for WebAssembly module and Blockchain Smart Contracts
git clone https://github.com/quoscient/octopus
```
Follow the installation guide [here](https://github.com/quoscient/octopus#quick-start)

## Install wasmer
```
# Universal WebAssembly runtime
# https://github.com/wasmerio/wasmer
curl https://get.wasmer.io -sSfL | sh
```

## Install python & pip3
```
sudo apt install python3 python3-pip
```

## Install pywasm & python-ext-wasm
```
# WebAssembly interpreter written in pure Python
# https://github.com/mohanson/pywasm
pip3 install pywasm

# Python library to run WebAssembly binaries.
# https://github.com/wasmerio/python-ext-wasm
pip3 install wasmer
```

## Install wasabi
```
# A dynamic analysis framework for WebAssembly programs.
# install over docker: https://github.com/danleh/wasabi#alternative-setup-via-docker
git clone https://github.com/danleh/wasabi
```

## Install wabt
```
# WABT: The WebAssembly Binary Toolkit
git clone --recursive https://github.com/WebAssembly/wabt
cd wabt
```
Follow the installation guide [here](https://github.com/WebAssembly/wabt#building-using-cmake-directly-linux-and-macos)

OR you can used the wasm2wat [online demo](https://webassembly.github.io/wabt/demo/wasm2wat/)


# Exercices

## Crackmes

### OTTAWA BSIDES CTF2018: THE WALL #1
```
ctf/wall1
```

### FlareOn5 2018 
```
cd ctf/FlareOn5
```

## Cryptominer
```
cd cryptonight
```

## Firefox addons
```
cd firefox_addons/ublock
```

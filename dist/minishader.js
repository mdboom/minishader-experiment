(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MS"] = factory();
	else
		root["MS"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/color-maps.js":
/*!***************************!*\
  !*** ./src/color-maps.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const colorMaps = {
    inferno:  new Uint8Array([186, 54, 85, 188, 55, 84, 189, 56, 83, 191, 56, 82, 192, 57, 81, 194, 58, 80, 195, 59, 79, 197, 60, 78, 198, 61, 77, 199, 62, 76, 201, 63, 75, 202, 64, 74, 203, 65, 73, 205, 66, 72, 206, 67, 71, 207, 68, 70, 209, 69, 69, 210, 70, 68, 211, 71, 67, 213, 72, 65, 214, 73, 64, 215, 74, 63, 216, 76, 62, 217, 77, 61, 219, 78, 60, 220, 79, 59, 221, 81, 57, 222, 82, 56, 223, 83, 55, 224, 85, 54, 225, 86, 53, 226, 87, 51, 227, 89, 50, 228, 90, 49, 229, 91, 48, 230, 93, 47, 231, 94, 45, 232, 96, 44, 233, 97, 43, 234, 99, 42, 235, 100, 40, 236, 102, 39, 237, 103, 38, 237, 105, 37, 238, 106, 35, 239, 108, 34, 240, 110, 33, 241, 111, 32, 241, 113, 30, 242, 114, 29, 243, 116, 28, 243, 118, 26, 244, 119, 25, 244, 121, 24, 245, 123, 22, 246, 125, 21, 246, 126, 20, 247, 128, 18, 247, 130, 17, 248, 132, 16, 248, 133, 14, 248, 135, 13, 249, 137, 12, 249, 139, 11, 250, 141, 9, 250, 142, 8, 250, 144, 8, 251, 146, 7, 251, 148, 6, 251, 150, 6, 251, 152, 6, 252, 153, 6, 252, 155, 6, 252, 157, 6, 252, 159, 7, 252, 161, 7, 252, 163, 8, 252, 165, 10, 252, 167, 11, 252, 169, 13, 252, 170, 14, 252, 172, 16, 252, 174, 18, 252, 176, 20, 252, 178, 22, 252, 180, 24, 252, 182, 26, 252, 184, 28, 252, 186, 30, 251, 188, 33, 251, 190, 35, 251, 192, 37, 251, 194, 40, 250, 196, 42, 250, 198, 45, 250, 200, 47, 249, 202, 50, 249, 204, 52, 249, 206, 55, 248, 208, 58, 248, 210, 61, 247, 212, 63, 247, 214, 66, 246, 216, 69, 246, 217, 73, 245, 219, 76, 245, 221, 79, 244, 223, 82, 244, 225, 86, 244, 227, 89, 243, 229, 93, 243, 231, 97, 242, 233, 101, 242, 234, 105, 242, 236, 109, 242, 238, 113, 242, 239, 117, 242, 241, 121, 242, 243, 125, 243, 244, 130, 243, 245, 134, 244, 247, 138, 245, 248, 142, 246, 249, 146, 247, 251, 150, 248, 252, 154, 249, 253, 157, 251, 254, 161, 253, 255, 165]),
    viridis: new Uint8Array([32, 143, 140, 32, 144, 140, 32, 145, 140, 31, 146, 140, 31, 147, 139, 31, 148, 139, 31, 149, 139, 31, 150, 139, 30, 151, 138, 30, 152, 138, 30, 153, 138, 30, 153, 138, 30, 154, 137, 30, 155, 137, 30, 156, 137, 30, 157, 136, 30, 158, 136, 30, 159, 136, 30, 160, 135, 31, 161, 135, 31, 162, 134, 31, 163, 134, 32, 164, 133, 32, 165, 133, 33, 166, 133, 33, 167, 132, 34, 167, 132, 35, 168, 131, 35, 169, 130, 36, 170, 130, 37, 171, 129, 38, 172, 129, 39, 173, 128, 40, 174, 127, 41, 175, 127, 42, 176, 126, 43, 177, 125, 44, 177, 125, 46, 178, 124, 47, 179, 123, 48, 180, 122, 50, 181, 122, 51, 182, 121, 53, 183, 120, 54, 184, 119, 56, 185, 118, 57, 185, 118, 59, 186, 117, 61, 187, 116, 62, 188, 115, 64, 189, 114, 66, 190, 113, 68, 190, 112, 69, 191, 111, 71, 192, 110, 73, 193, 109, 75, 194, 108, 77, 194, 107, 79, 195, 105, 81, 196, 104, 83, 197, 103, 85, 198, 102, 87, 198, 101, 89, 199, 100, 91, 200, 98, 94, 201, 97, 96, 201, 96, 98, 202, 95, 100, 203, 93, 103, 204, 92, 105, 204, 91, 107, 205, 89, 109, 206, 88, 112, 206, 86, 114, 207, 85, 116, 208, 84, 119, 208, 82, 121, 209, 81, 124, 210, 79, 126, 210, 78, 129, 211, 76, 131, 211, 75, 134, 212, 73, 136, 213, 71, 139, 213, 70, 141, 214, 68, 144, 214, 67, 146, 215, 65, 149, 215, 63, 151, 216, 62, 154, 216, 60, 157, 217, 58, 159, 217, 56, 162, 218, 55, 165, 218, 53, 167, 219, 51, 170, 219, 50, 173, 220, 48, 175, 220, 46, 178, 221, 44, 181, 221, 43, 183, 221, 41, 186, 222, 39, 189, 222, 38, 191, 223, 36, 194, 223, 34, 197, 223, 33, 199, 224, 31, 202, 224, 30, 205, 224, 29, 207, 225, 28, 210, 225, 27, 212, 225, 26, 215, 226, 25, 218, 226, 24, 220, 226, 24, 223, 227, 24, 225, 227, 24, 228, 227, 24, 231, 228, 25, 233, 228, 25, 236, 228, 26, 238, 229, 27, 241, 229, 28, 243, 229, 30, 246, 230, 31, 248, 230, 33, 250, 230, 34])
}

/* harmony default export */ __webpack_exports__["default"] = (colorMaps);

/***/ }),

/***/ "./src/decompress-frame.js":
/*!*********************************!*\
  !*** ./src/decompress-frame.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return decompressFrame; });
function decompressFrame(data, nframes, height, width, iframe, output, cmap, alpha=255) {
    if (iframe >= nframes) {
        return;
    }
    const view = new DataView(data.buffer);
    const offset = view.getUint32(12 + iframe * 4, false);
    const input = new Uint8Array(data.buffer, offset);
    let i = 0;
    let j = 0;
    let size = height * width * 4;
    let values = {};
    while (j < size) {
        var x = input[i++];
        if (x & 0x80) {
            x = x & 0x7f;
            values[x] = cmap[(x * 3)];
            for (var k = 0; k < 3; ++k) {
                output[j++] = cmap[(x * 3) + k];
            }
            output[j++] = alpha;
        } else {
            for (var k = 0; k < x * 4; ++k) {
                output[j++] = 0x00;
            }
        }
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: minishader, loadBinary, colorMaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _minishader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minishader */ "./src/minishader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minishader", function() { return _minishader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _load_binary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-binary */ "./src/load-binary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadBinary", function() { return _load_binary__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _color_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-maps */ "./src/color-maps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorMaps", function() { return _color_maps__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),

/***/ "./src/load-binary.js":
/*!****************************!*\
  !*** ./src/load-binary.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadBinary; });
function loadBinary(url) {
    return new Promise((resolve, reject) => {
        function onLoad() {
            const data = new Uint8Array(this.response)
            const view = new DataView(this.response)
            const nframes =  view.getUint32(0, false)
            const height = view.getUint32(4, false)
            const width = view.getUint32(8, false)
            resolve({data, nframes, height, width})
        }
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', onLoad);
        xhr.addEventListener('error', (err) => {
            reject(new Error(err.msg))
        })
        xhr.responseType = 'arraybuffer';
        xhr.open('GET', url);
        xhr.send();
    })
}

/***/ }),

/***/ "./src/minishader.js":
/*!***************************!*\
  !*** ./src/minishader.js ***!
  \***************************/
/*! exports provided: draw, incrementFrame, decrementFrame, startFunction, stopFunction, goToFrameFunction, nextFrameFunction, previousFrameFunction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementFrame", function() { return incrementFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementFrame", function() { return decrementFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFunction", function() { return startFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopFunction", function() { return stopFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToFrameFunction", function() { return goToFrameFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextFrameFunction", function() { return nextFrameFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousFrameFunction", function() { return previousFrameFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return minishader; });
/* harmony import */ var _validate_arguments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate-arguments */ "./src/validate-arguments.js");
/* harmony import */ var _color_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-maps */ "./src/color-maps.js");
/* harmony import */ var _decompress_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decompress-frame */ "./src/decompress-frame.js");



const MINISHADER_CLASS = 'minishader-canvas'

function createCanvasElement({width, height, background}) {
    const canvas = document.createElement("canvas");
    const MULT = .8
    canvas.className = MINISHADER_CLASS;
    canvas.setAttribute("height", height);
    canvas.setAttribute("width", width);
    console.log(canvas.clientWidth)
    canvas.setAttribute("style", `width: ${width * MULT}px; height ${height * MULT}px`);
    if (background) {
        canvas.style.background = `url('${background}')`
        canvas.style.backgroundSize = `${width* MULT}px ${height * MULT}px`
    }
    return canvas
}

// used internally to draw the next frame.
function draw(map) {
    const { data, width, height, colorMap, canvas, currentFrame, totalFrames } = map
    let outputBuffer = new Uint8ClampedArray(height * width * 4);
    // atm this mutates outputBuffer.
    Object(_decompress_frame__WEBPACK_IMPORTED_MODULE_2__["default"])(data, totalFrames, width, height, currentFrame, outputBuffer, colorMap, 255);
    // take the mutated outputBuffer and turn it into an image.
    var imageData = new ImageData(outputBuffer, width, height);
    var ctx = canvas.getContext("2d");
    ctx.putImageData(imageData, 0, 0);
    map.onDraw(currentFrame);
}

function incrementFrame(currentFrame, totalFrames) {
    return (currentFrame === totalFrames - 1) ? 0 : currentFrame + 1
}

function decrementFrame(currentFrame, totalFrames) {
    return (currentFrame === 0) ? totalFrames - 1 : currentFrame - 1
}

function startFunction(map) {
    return function start() {
        map.isRunning = true
        map.interval = setInterval(() => {
            map.currentFrame = incrementFrame(map.currentFrame, map.totalFrames)
            draw(map)
        }, 20)
        return map
    }
}
function stopFunction(map) {
    return function stop() {
        const { interval } = map;
        clearInterval(map.interval)
        map.interval = undefined
        map.isRunning = false
        return map
    }
}

function goToFrameFunction(map) {
    return function goToFrame(f) {
        const { totalFrames } = map;
        if (f > totalFrames - 1) {
            throw new Error('requested a frame that is out of bounds')
        }
        map.currentFrame = f
        draw(map)
        return map
    }
}

function nextFrameFunction(map) {
    return function nextFrame() {
        map.currentFrame = incrementFrame(map.currentFrame, map.totalFrames)
        draw(map)
        return map
    }
}

function previousFrameFunction(map) {
    return function previousFrame() {
        map.currentFrame = decrementFrame(map.currentFrame, map.totalFrames)
        draw(map)
    }
}

function minishader(userArgs) {
    const args = Object(_validate_arguments__WEBPACK_IMPORTED_MODULE_0__["default"])(userArgs)

    const map = {}

    map.interval = undefined
    map.data = args.data
    map.width = args.width
    map.height = args.height
    map.background = args.background
    map.colorMap = args.colorMap || _color_maps__WEBPACK_IMPORTED_MODULE_1__["default"].viridis

    map.currentFrame = args.startAtFrame
    map.totalFrames = args.totalFrames
    map.onDraw = args.onDraw
    map.isRunning = args.isRunning

    map.canvas = createCanvasElement(map)
    
    const parent = document.querySelector(args.target)

    parent.appendChild(map.canvas)

    map.start = startFunction(map)
    map.stop = stopFunction(map)
    map.goToFrame = goToFrameFunction(map)
    map.nextFrame = nextFrameFunction(map)
    map.previousFrame = previousFrameFunction(map)
    draw(map)
    return map;
}


/***/ }),

/***/ "./src/validate-arguments.js":
/*!***********************************!*\
  !*** ./src/validate-arguments.js ***!
  \***********************************/
/*! exports provided: DEFAULT_ARGUMENTS, REQUIRED_FIELDS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ARGUMENTS", function() { return DEFAULT_ARGUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUIRED_FIELDS", function() { return REQUIRED_FIELDS; });
const DEFAULT_ARGUMENTS = {
    width: 800,
    height: 800,
    isRunning: false,
    startAtFrame: 0
}

const REQUIRED_FIELDS = new Set(['target', 'data'])

const validateArguments = (args) => {
    if (args === undefined || typeof args !== 'object') throw new Error('args must be an object')
    const keys = Object.keys(args)
    REQUIRED_FIELDS.forEach((k) => {
        if (!keys.includes(k)) throw new Error(`missing required argument ${k}`)
    })
    const newArgs = Object.assign({}, DEFAULT_ARGUMENTS, args)
    return newArgs
}

/* harmony default export */ __webpack_exports__["default"] = (validateArguments);

/***/ })

/******/ });
});
//# sourceMappingURL=minishader.js.map
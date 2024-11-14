/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/event-emitter.ts":
/*!******************************!*\
  !*** ./src/event-emitter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventEmitter: () => (/* binding */ EventEmitter)\n/* harmony export */ });\nclass EventEmitter {\n    constructor() {\n        this.event = {};\n    }\n    addEvent(eventName, listener) {\n        if (!this.event[eventName]) {\n            this.event[eventName] = [];\n        }\n        this.event[eventName].push(listener);\n    }\n    removeEvent(eventName, listener) {\n        const listeners = this.event[eventName];\n        if (!listeners)\n            return;\n        this.event[eventName] = this.event[eventName].filter((event) => event !== listener);\n        if (this.event[eventName].length === 0) {\n            delete this.event[eventName];\n        }\n    }\n    removeAllEvens() {\n        this.event = {};\n    }\n    emitEvent(eventName, ...args) {\n        const listeners = this.event[eventName];\n        if (listeners) {\n            this.event[eventName].forEach((event) => event(...args));\n        }\n    }\n    emitEventOnce(eventName, ...args) {\n        const listeners = this.event[eventName];\n        if (listeners) {\n            this.event[eventName].forEach((event) => event(...args));\n            delete this.event[eventName];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://ts_base/./src/event-emitter.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-emitter */ \"./src/event-emitter.ts\");\n\nclass EventTest {\n    constructor() {\n        this.eventEmitter = new _event_emitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();\n        this.setEvents();\n    }\n    setEvents() {\n        this.eventEmitter.addEvent('newEvent1', this.newEvent1);\n        this.eventEmitter.addEvent('newEvent2', this.newEvent2);\n    }\n    newEvent1() {\n        console.log('イベント1発火');\n    }\n    newEvent2() {\n        console.log('イベント2発火');\n    }\n}\nconst eventTest = new EventTest();\neventTest;\n\n\n//# sourceURL=webpack://ts_base/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
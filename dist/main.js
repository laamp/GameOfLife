/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  background-color: #222222;\\n  font-family: \\\"Ubuntu\\\", sans-serif;\\n  color: #7e57c2;\\n}\\n\\nfooter {\\n  width: 1100px;\\n  margin: 10px auto 0 auto;\\n}\\n\\ncanvas {\\n  width: 800px;\\n  height: 600px;\\n  box-shadow: 0 0 10px 0 #8a51d4a9;\\n  border-radius: 2px;\\n}\\n\\nh1 {\\n  margin: 0;\\n  padding: 8px 0 12px 0;\\n  text-align: center;\\n  min-width: 1100px;\\n}\\n\\np {\\n  margin: 0;\\n}\\n\\nfooter p {\\n  margin-bottom: 5px;\\n}\\n\\nfooter a {\\n  color: #7e57c2;\\n}\\n\\nfooter a:hover {\\n  color: #1565c0;\\n}\\n\\nbutton {\\n  border: none;\\n  font-family: \\\"Ubuntu\\\", sans-serif;\\n  font-size: 1em;\\n  padding: 8px 0;\\n  color: #bc96ff;\\n  background-color: #484848;\\n  box-shadow: 0 0 10px 0 #00000033;\\n  outline: none;\\n}\\n\\nbutton:active {\\n  box-shadow: none;\\n  transform: translateY(2px);\\n  background-color: #3f3f3f;\\n}\\n\\n#content {\\n  width: 1100px;\\n  margin: 0 auto;\\n  display: flex;\\n}\\n\\n#controls {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 0 0 10px;\\n  padding: 12px;\\n  width: 100%;\\n  border-radius: 2px;\\n  background-color: #2f2f2f;\\n  box-shadow: 0 0 10px 0 #00000033;\\n}\\n\\n#controls > * {\\n  margin: 0 0 12px 0;\\n}\\n\\n#footer-content {\\n  width: max-content;\\n  padding: 12px;\\n  border-radius: 2px;\\n  background-color: #2f2f2f;\\n  box-shadow: 0 0 10px 0 #00000033;\\n}\\n\\n.block {\\n  background-color: #7e57c2;\\n}\\n\\n#glider-example {\\n  width: 60px;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n#spaceship-example {\\n  width: 100px;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n#glider-example div,\\n#spaceship-example div {\\n  width: 18px;\\n  height: 18px;\\n  margin: 1px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\ncontent = content.__esModule ? content.default : content;\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/js/util.js\");\n\n\nclass Game {\n  constructor(canvas) {\n    this.gameStates = [\"PAUSED\", \"PLAYING\", \"RESET\"];\n    this.state = this.gameStates[0];\n\n    // setup game variables\n    this.gridXSize = 32;\n    this.squareWidth = _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenWidth / this.gridXSize;\n    this.gridYSize = 24;\n    this.squareHeight = _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenHeight / this.gridYSize;\n    this.grid = [];\n    this.setupGrid();\n    this.fps = 10;\n    this.color = \"#8a51d4\";\n\n    // setup canvas\n    this.canvas = canvas;\n    this.canvas.width = _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenWidth;\n    this.canvas.height = _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenHeight;\n    this.ctx = canvas.getContext(\"2d\");\n\n    // interface setup\n\n    // play/pause button\n    this.playButton = document.querySelector(\"#play\");\n    this.playButton.addEventListener(\"click\", () => {\n      if (this.state === \"PLAYING\") {\n        this.state = this.gameStates[0];\n        this.playButton.innerHTML = \"Paused\";\n      } else if (this.state === \"PAUSED\") {\n        this.state = this.gameStates[1];\n        this.playButton.innerHTML = \"Playing\";\n      }\n    });\n\n    // reset button\n    this.resetButton = document.querySelector(\"#reset\");\n    this.resetButton.addEventListener(\"click\", () => {\n      this.state = this.gameStates[0];\n      this.playButton.innerHTML = \"Paused\";\n      this.setupGrid();\n      this.render();\n    });\n\n    // x dimension slider\n    this.xSlider = document.querySelector(\"#x-amount\");\n    this.xSlider.value = this.gridXSize;\n    this.xSlider.addEventListener(\"change\", () => {\n      this.gridXSize = this.xSlider.value;\n      this.squareWidth = _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenWidth / this.gridXSize;\n      this.state = this.gameStates[0];\n      this.playButton.innerHTML = \"Paused\";\n      this.setupGrid();\n      this.render();\n    });\n\n    // y dimension slider\n    this.ySlider = document.querySelector(\"#y-amount\");\n    this.ySlider.value = this.gridYSize;\n    this.ySlider.addEventListener(\"change\", () => {\n      this.gridYSize = this.ySlider.value;\n      this.squareHeight = _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenHeight / this.gridYSize;\n      this.state = this.gameStates[0];\n      this.playButton.innerHTML = \"Paused\";\n      this.setupGrid();\n      this.render();\n    });\n\n    // speed slider\n    this.speedSlider = document.querySelector(\"#speed\");\n    this.speedSlider.value = this.fps;\n    this.speedSlider.addEventListener(\"change\", () => {\n      this.fps = this.speedSlider.value;\n      this.fpsInterval = 1000 / this.fps;\n      this.then = Date.now();\n    });\n\n    // color picker\n    this.colorSlider = document.querySelector(\"#color-picker\");\n    this.colorSlider.value = this.color;\n    this.colorSlider.addEventListener(\"change\", () => {\n      this.color = this.colorSlider.value;\n    });\n\n    // interaction with grid\n    this.clickGrid = this.clickGrid.bind(this);\n    this.canvas.addEventListener(\"click\", this.clickGrid);\n\n    // setup animation\n    this.fpsInterval = 1000 / this.fps;\n    this.then = Date.now();\n    this.animate = this.animate.bind(this);\n    this.animate();\n  }\n\n  animate() {\n    // how much time passed since this was last called?\n    let now = Date.now();\n    const timeElapsed = now - this.then;\n\n    // update if enough time passed\n    if (timeElapsed > this.fpsInterval) {\n      this.then = now - (timeElapsed % this.fpsInterval);\n      if (this.state === \"PLAYING\") {\n        this.calculateNextGrid();\n      }\n      this.render();\n    }\n\n    requestAnimationFrame(this.animate);\n  }\n\n  render() {\n    // clear canvas before drawing\n    this.ctx.clearRect(0, 0, _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenWidth, _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenHeight);\n\n    // draw the grid\n    this.drawGrid();\n  }\n\n  setupGrid() {\n    let newGrid = [];\n\n    // populate the 2d array that represent the grid\n    for (let cols = 0; cols < this.gridXSize; cols++) {\n      let newCol = [];\n      for (let rows = 0; rows < this.gridYSize; rows++) {\n        // start with random shapes\n        if (Math.random() > 0.4) newCol.push(true);\n      }\n      newGrid.push(newCol);\n    }\n\n    this.grid = newGrid;\n  }\n\n  drawGrid() {\n    for (let x = 0; x < this.gridXSize; x++) {\n      for (let y = 0; y < this.gridYSize; y++) {\n        if (this.grid[x][y]) {\n          this.ctx.fillStyle = this.color;\n          this.ctx.fillRect(\n            x * this.squareWidth,\n            y * this.squareHeight,\n            this.squareWidth,\n            this.squareHeight\n          );\n        }\n      }\n    }\n  }\n\n  clickGrid(e) {\n    // make sure the game is paused\n    this.state = this.gameStates[0];\n    this.playButton.innerHTML = \"Paused\";\n\n    const xPos = Math.floor((e.offsetX / _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenWidth) * this.gridXSize);\n    const yPos = Math.floor(\n      (e.offsetY / _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].screenHeight) * this.gridYSize\n    );\n\n    this.grid[xPos][yPos] = !this.grid[xPos][yPos];\n    this.render();\n  }\n\n  calculateNextGrid() {\n    let newGrid = [];\n\n    // make a blank grid\n    for (let i = 0; i < this.gridXSize; i++) {\n      let newCol = [];\n      for (let j = 0; j < this.gridYSize; j++) {\n        newCol.push(\"x\");\n      }\n      newGrid.push(newCol);\n    }\n\n    for (let x = 0; x < this.gridXSize; x++) {\n      for (let y = 0; y < this.gridYSize; y++) {\n        let neighbors = this.countNeighbors(x, y);\n\n        // rules for life here\n        if (this.grid[x][y]) {\n          if (neighbors < 2) {\n            newGrid[x][y] = false; // die from underpopulation\n          } else if (neighbors > 3) {\n            newGrid[x][y] = false; // die from overpopulation\n          } else {\n            newGrid[x][y] = true; // lives to next round\n          }\n        } else {\n          if (neighbors === 3) {\n            newGrid[x][y] = true; // new life\n          } else {\n            newGrid[x][y] = false; // stays dead\n          }\n        }\n      }\n    }\n\n    this.grid = newGrid;\n  }\n\n  countNeighbors(col, row) {\n    let neighbors = 0;\n\n    if (this.grid[col - 1]) {\n      if (this.grid[col - 1][row]) neighbors++;\n      if (this.grid[col - 1][row - 1]) neighbors++;\n      if (this.grid[col - 1][row + 1]) neighbors++;\n    }\n\n    if (this.grid[col + 1]) {\n      if (this.grid[col + 1][row]) neighbors++;\n      if (this.grid[col + 1][row - 1]) neighbors++;\n      if (this.grid[col + 1][row + 1]) neighbors++;\n    }\n\n    if (this.grid[col][row - 1]) neighbors++;\n    if (this.grid[col][row + 1]) neighbors++;\n\n    return neighbors;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index */ \"./src/css/index.css\");\n/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector(\"canvas\");\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! exports provided: globals, randomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globals\", function() { return globals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomColor\", function() { return randomColor; });\nconst globals = {\n    screenWidth: 800,\n    screenHeight: 600\n};\n\nconst randomColor = () => {\n    const vals = [\n        \"0\", \"1\", \"2\", \"3\",\n        \"4\", \"5\", \"6\", \"7\",\n        \"8\", \"9\", \"A\", \"B\",\n        \"C\", \"D\", \"E\", \"F\"\n    ];\n\n    const randR =\n        vals[Math.floor(Math.random() * vals.length)] +\n        vals[Math.floor(Math.random() * vals.length)];\n    const randG =\n        vals[Math.floor(Math.random() * vals.length)] +\n        vals[Math.floor(Math.random() * vals.length)];\n    const randB =\n        vals[Math.floor(Math.random() * vals.length)] +\n        vals[Math.floor(Math.random() * vals.length)];\n\n    return (\"#\" + randR + randG + randB);\n};\n\n\n//# sourceURL=webpack:///./src/js/util.js?");

/***/ })

/******/ });
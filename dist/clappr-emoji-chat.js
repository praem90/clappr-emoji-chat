(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["EmojiChatPlugin"] = factory(require("clappr"));
	else
		root["EmojiChatPlugin"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_clappr__) {
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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://EmojiChatPlugin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/emoji.scss":
/*!************************!*\
  !*** ./src/emoji.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n@font-face {\\n  font-family: NotoColorEmoji;\\n  font-weight: 400;\\n  src: url(https://cdn.glitch.com/61908de1-dd0a-4359-a54b-6cb6d41bb5fd%2FNotoColorEmoji.ttf?1513108808150) format(\\\"truetype\\\"); }\\n\\n.emojis-container {\\n  position: absolute;\\n  left: 0;\\n  height: 100%;\\n  z-index: 1;\\n  background-color: rgba(0, 0, 0, 0.7); }\\n  .emojis-container .emojis-list {\\n    margin: auto 0;\\n    display: block !important; }\\n  .emojis-container .emojis-list {\\n    list-style: none; }\\n  .emojis-container.bottom-center {\\n    width: 100%;\\n    height: auto;\\n    bottom: 5px; }\\n    .emojis-container.bottom-center .emojis-list {\\n      margin: 0 auto;\\n      display: -webkit-box !important;\\n      display: flex !important; }\\n    .emojis-container.bottom-center .emoji-list-item {\\n      float: left;\\n      padding: 0 0.5rem; }\\n  @media screen and (min-width: 720px) {\\n    .emojis-container .emoji-icon {\\n      font-size: 2rem; } }\\n  .emojis-container .emoji-icon {\\n    font-size: 1.2rem;\\n    font-family: \\\"Noto Color Emoji\\\", NotoColorEmoji;\\n    cursor: pointer; }\\n    .emojis-container .emoji-icon.emoji-icon-love::after {\\n      content: \\\"💓\\\"; }\\n    .emojis-container .emoji-icon.emoji-icon-eye::after {\\n      content: \\\"👁\\\"; }\\n    .emojis-container .emoji-icon.emoji-icon-wow::after {\\n      content: \\\"😮\\\"; }\\n    .emojis-container .emoji-icon.emoji-icon-haha::after {\\n      content: \\\"😆\\\"; }\\n    .emojis-container .emoji-icon.emoji-icon-like::after {\\n      content: \\\"👍\\\"; }\\n    .emojis-container .emoji-icon.emoji-icon-sad::after {\\n      content: \\\"😞\\\"; }\\n    .emojis-container .emoji-icon.emoji-icon-angry::after {\\n      content: \\\"😠\\\"; }\\n  .emojis-container .emoji-list-item {\\n    position: relative;\\n    padding: 0 0.5rem; }\\n    .emojis-container .emoji-list-item:hover {\\n      -webkit-transform: scale(1.4);\\n              transform: scale(1.4); }\\n    .emojis-container .emoji-list-item [class$=\\\"count\\\"] {\\n      display: block;\\n      color: #fff; }\\n    .emojis-container .emoji-list-item .view_count {\\n      color: #fff; }\\n      .emojis-container .emoji-list-item .view_count::before {\\n        content: \\\"👁 \\\"; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack://EmojiChatPlugin/./src/emoji.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _clappr = __webpack_require__(/*! clappr */ \"clappr\");\n\nvar _template = _interopRequireDefault(__webpack_require__(/*! ./template.html */ \"./src/template.html\"));\n\nvar _emoji = _interopRequireDefault(__webpack_require__(/*! ./emoji.scss */ \"./src/emoji.scss\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar EmojiChatPlugin =\n/*#__PURE__*/\nfunction (_UICorePlugin) {\n  _inherits(EmojiChatPlugin, _UICorePlugin);\n\n  _createClass(EmojiChatPlugin, [{\n    key: \"name\",\n    get: function get() {\n      return 'EmojiChatPlugin';\n    }\n  }, {\n    key: \"template\",\n    get: function get() {\n      return (0, _clappr.template)(_template[\"default\"]);\n    }\n  }, {\n    key: \"defaults\",\n    get: function get() {\n      return {\n        emojis: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],\n        bottom: false\n      };\n    }\n  }, {\n    key: \"events\",\n    get: function get() {\n      return {\n        'click .emoji-icon': 'emojiClick',\n        'mouseenter .emoji-icon': 'rotateEmoji'\n      };\n    }\n  }, {\n    key: \"attributes\",\n    get: function get() {\n      return {\n        \"class\": 'emojis-container animated faster d-flex rounded ' + (this.options.emojiChat && this.options.emojiChat.bottom ? 'bottom-center' : '')\n      };\n    }\n  }]);\n\n  function EmojiChatPlugin(options) {\n    _classCallCheck(this, EmojiChatPlugin);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(EmojiChatPlugin).call(this, options));\n  }\n\n  _createClass(EmojiChatPlugin, [{\n    key: \"emojiClick\",\n    value: function emojiClick(e) {\n      e.preventDefault();\n      var zoomOutClass = this.options.emojiChat.bottom ? 'zoomOutUp' : 'zoomOutRight';\n      var el = $(e.target).addClass(zoomOutClass);\n      setTimeout(function () {\n        return el.removeClass(zoomOutClass);\n      }, 1000);\n\n      if (this.options.emojiChat && this.options.emojiChat.onClick) {\n        this.options.emojiChat.onClick(el.data('emoji'));\n      }\n    }\n  }, {\n    key: \"rotateEmoji\",\n    value: function rotateEmoji(e) {\n      $(e.target).addClass('rotateIn');\n      setTimeout(function () {\n        return $(e.target).removeClass('rotateIn');\n      }, 1000);\n    }\n  }, {\n    key: \"updateEmojiCount\",\n    value: function updateEmojiCount(emoji, count) {\n      var badge = this.$el.find('.emoji-icon-' + emoji + '-count');\n\n      if (badge) {\n        badge.html(count);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"updateViewCount\",\n    value: function updateViewCount(count) {\n      var badge = this.$el.find('.view_count');\n\n      if (badge) {\n        badge.html(count);\n      }\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      this.$el.show();\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.$el.hide();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.options.emojiChat = Object.assign({}, this.defaults, this.options.emojiChat || {});\n      this.$el.hide();\n      this.core.$el.append(_clappr.Styler.getStyleFor(_emoji[\"default\"]));\n      this.$el.html(this.template(this.options.emojiChat));\n      this.core.$el.append(this.$el);\n      this.$el.show();\n      return this;\n    }\n  }]);\n\n  return EmojiChatPlugin;\n}(_clappr.UICorePlugin);\n\nexports[\"default\"] = EmojiChatPlugin;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://EmojiChatPlugin/./src/index.js?");

/***/ }),

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<ul class=\\\"emojis-list list-unstyled\\\"> <li class=\\\"emoji-list-item m-0 my-auto\\\"><span class=\\\"view_count d-block\\\">0</span></li> <% for (var i = 0; i < emojis.length; i++) { %> <li class=\\\"emoji-list-item d-flex m-0 mb-1\\\"><div class=m-auto><span class=\\\"d-inline-block emoji-icon emoji-icon-<%= emojis[i] %> animated\\\" data-emoji=\\\"<%= emojis[i] %>\\\"></span><span class=\\\"emoji-icon-<%= emojis[i] %>-count\\\">0</span></div></li> <% }; %> </ul>\";\n\n//# sourceURL=webpack://EmojiChatPlugin/./src/template.html?");

/***/ }),

/***/ "clappr":
/*!******************************************************************************************!*\
  !*** external {"amd":"clappr","commonjs":"clappr","commonjs2":"clappr","root":"Clappr"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_clappr__;\n\n//# sourceURL=webpack://EmojiChatPlugin/external_%7B%22amd%22:%22clappr%22,%22commonjs%22:%22clappr%22,%22commonjs2%22:%22clappr%22,%22root%22:%22Clappr%22%7D?");

/***/ })

/******/ });
});
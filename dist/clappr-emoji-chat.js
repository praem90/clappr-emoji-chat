(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["Clappr"], factory);
	else if(typeof exports === 'object')
		exports["EmojiChatPlugin"] = factory(require("Clappr"));
	else
		root["EmojiChatPlugin"] = factory(root["Clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _clappr=__webpack_require__(1);var _templateHtml=__webpack_require__(2);var _templateHtml2=_interopRequireDefault(_templateHtml);__webpack_require__(3);var EmojiChatPlugin=(function(_UICorePlugin){_inherits(EmojiChatPlugin,_UICorePlugin);_createClass(EmojiChatPlugin,[{key:'name',get:function get(){return 'EmojiChatPlugin';}},{key:'template',get:function get(){return (0,_clappr.template)(_templateHtml2['default']);}},{key:'defaults',get:function get(){return {emojis:['like','love','haha','wow','sad','angry'],bottom:false};}},{key:'events',get:function get(){return {'click .emoji-icon':'emojiClick','mouseenter .emoji-icon':'rotateEmoji'};}},{key:'attributes',get:function get(){return {'class':'emojis-container animated faster d-flex rounded ' + (this.options.emojiChat.bottom?'bottom-center':'')};}}]);function EmojiChatPlugin(options){_classCallCheck(this,EmojiChatPlugin);_get(Object.getPrototypeOf(EmojiChatPlugin.prototype),'constructor',this).call(this,options);}_createClass(EmojiChatPlugin,[{key:'emojiClick',value:function emojiClick(e){e.preventDefault();var zoomOutClass=this.options.emojiChat.bottom?'zoomOutUp':'zoomOutRight';var el=$(e.target).addClass(zoomOutClass);setTimeout(function(){return el.removeClass(zoomOutClass);},1000);if(this.options.emojiChat && this.options.emojiChat.onClick){this.options.emojiChat.onClick(el.data('emoji'));}}},{key:'rotateEmoji',value:function rotateEmoji(e){$(e.target).addClass('rotateIn');setTimeout(function(){return $(e.target).removeClass('rotateIn');},1000);}},{key:'updateEmojiCount',value:function updateEmojiCount(emoji,count){var badge=this.$el.find('.emoji-icon-' + emoji + '-count');if(badge){badge.html(count);}return this;}},{key:'updateViewCount',value:function updateViewCount(count){var badge=this.$el.find('.view_count');if(badge){badge.html(count);}}},{key:'show',value:function show(){this.$el.show();}},{key:'hide',value:function hide(){this.$el.hide();}},{key:'render',value:function render(){this.options.emojiChat = Object.assign({},this.defaults,this.options.emojiChat || {});this.$el.hide();this.$el.html(this.template(this.options.emojiChat));this.core.$el.append(this.$el);this.$el.show();return this;}}]);return EmojiChatPlugin;})(_clappr.UICorePlugin);exports['default'] = EmojiChatPlugin;module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = "<ul class=\"emojis-list list-unstyled\">\n    <li class=\"emoji-list-item m-0\"><span class=\"view_count d-block\">0</span></li>\n    <% for (var i = 0; i < emojis.length; i++) { %>\n      <li class=\"emoji-list-item d-flex m-0 mb-1\"><div class=\"m-auto\"><span class=\"d-inline-block emoji-icon emoji-icon-<%= emojis[i] %> animated\" data-emoji=\"<%= emojis[i] %>\"></span><span class=\"emoji-icon-<%= emojis[i] %>-count\">0</span></div></li>\n    <% }; %>\n</ul>";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./emoji.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./emoji.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: NotoColorEmoji;\n  font-weight: 400;\n  src: url(https://cdn.glitch.com/61908de1-dd0a-4359-a54b-6cb6d41bb5fd%2FNotoColorEmoji.ttf?1513108808150) format(\"truetype\"); }\n\n.emojis-container {\n  position: absolute;\n  left: 0;\n  height: 100vh;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.7); }\n  .emojis-container .emojis-list {\n    margin: auto 0;\n    display: block !important; }\n  .emojis-container .emojis-list {\n    list-style: none; }\n  .emojis-container.bottom-center {\n    width: 100%;\n    height: auto;\n    bottom: 5px; }\n    .emojis-container.bottom-center .emojis-list {\n      margin: 0 auto;\n      display: flex !important; }\n    .emojis-container.bottom-center .emoji-list-item {\n      float: left;\n      padding: 0 0.5rem; }\n  @media screen and (min-width: 720px) {\n    .emojis-container .emoji-icon {\n      font-size: 2rem; } }\n  .emojis-container .emoji-icon {\n    font-size: 1.2rem;\n    font-family: \"Noto Color Emoji\", NotoColorEmoji;\n    cursor: pointer; }\n    .emojis-container .emoji-icon.emoji-icon-love::after {\n      content: \"\\1F493\"; }\n    .emojis-container .emoji-icon.emoji-icon-eye::after {\n      content: \"\\1F441\"; }\n    .emojis-container .emoji-icon.emoji-icon-wow::after {\n      content: \"\\1F62E\"; }\n    .emojis-container .emoji-icon.emoji-icon-haha::after {\n      content: \"\\1F606\"; }\n    .emojis-container .emoji-icon.emoji-icon-like::after {\n      content: \"\\1F44D\"; }\n    .emojis-container .emoji-icon.emoji-icon-sad::after {\n      content: \"\\1F61E\"; }\n    .emojis-container .emoji-icon.emoji-icon-angry::after {\n      content: \"\\1F620\"; }\n  .emojis-container .emoji-list-item {\n    position: relative;\n    padding: 0 0.5rem; }\n    .emojis-container .emoji-list-item:hover {\n      transform: scale(1.4); }\n    .emojis-container .emoji-list-item [class$=\"count\"] {\n      display: block;\n      color: #fff; }\n    .emojis-container .emoji-list-item .view_count {\n      color: #fff; }\n      .emojis-container .emoji-list-item .view_count::before {\n        content: \"\\1F441   \"; }\n", ""]);

	// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/ // css base code, injected by the css-loader
	"use strict";module.exports = function(){var list=[]; // return the list of modules as css string
	list.toString = function toString(){var result=[];for(var i=0;i < this.length;i++) {var item=this[i];if(item[2]){result.push("@media " + item[2] + "{" + item[1] + "}");}else {result.push(item[1]);}}return result.join("");}; // import a list of modules into the list
	list.i = function(modules,mediaQuery){if(typeof modules === "string")modules = [[null,modules,""]];var alreadyImportedModules={};for(var i=0;i < this.length;i++) {var id=this[i][0];if(typeof id === "number")alreadyImportedModules[id] = true;}for(i = 0;i < modules.length;i++) {var item=modules[i]; // skip already imported module
	// this implementation is not 100% perfect for weird media query combinations
	//  when a module is imported multiple times with different media queries.
	//  I hope this will never occur (Hey this way we have smaller bundles)
	if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]){if(mediaQuery && !item[2]){item[2] = mediaQuery;}else if(mediaQuery){item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";}list.push(item);}}};return list;};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ])
});
;
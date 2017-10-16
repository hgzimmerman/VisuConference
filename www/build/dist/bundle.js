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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        }
        else {
            cachedSetTimeout = defaultSetTimout;
        }
    }
    catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        }
        else {
            cachedClearTimeout = defaultClearTimeout;
        }
    }
    catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
}());
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    }
    catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        }
        catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    }
    catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        }
        catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    }
    else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}
function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() { }
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) { return []; };
process.binding = function (name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function () { return '/'; };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (process.env.NODE_ENV !== 'production') {
    var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
        Symbol.for &&
        Symbol.for('react.element')) ||
        0xeac7;
    var isValidElement = function (object) {
        return typeof object === 'object' &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE;
    };
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __webpack_require__(50)(isValidElement, throwOnDirectAccess);
}
else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = __webpack_require__(53)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
    var list = [];
    // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media " + item[2] + "{" + content + "}";
            }
            else {
                return content;
            }
        }).join("");
    };
    // import a list of modules into the list
    list.i = function (modules, mediaQuery) {
        if (typeof modules === "string")
            modules = [[null, modules, ""]];
        var alreadyImportedModules = {};
        for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (typeof id === "number")
                alreadyImportedModules[id] = true;
        }
        for (i = 0; i < modules.length; i++) {
            var item = modules[i];
            // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            //  when a module is imported multiple times with different media queries.
            //  I hope this will never occur (Hey this way we have smaller bundles)
            if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                    item[2] = mediaQuery;
                }
                else if (mediaQuery) {
                    item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                }
                list.push(item);
            }
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || '';
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
}
// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
    return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(41);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */
(function () {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg)
                continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            }
            else if (Array.isArray(arg)) {
                classes.push(classNames.apply(null, arg));
            }
            else if (argType === 'object') {
                for (var key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
        return classes.join(' ');
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = classNames;
    }
    else if (true) {
        // register as 'classnames', consistent with npm package name
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return classNames;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {
        window.classNames = classNames;
    }
}());


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTetherAttachments = getTetherAttachments;
exports.getScrollbarWidth = getScrollbarWidth;
exports.setScrollbarWidth = setScrollbarWidth;
exports.isBodyOverflowing = isBodyOverflowing;
exports.getOriginalBodyPadding = getOriginalBodyPadding;
exports.conditionallyUpdateScrollbar = conditionallyUpdateScrollbar;
exports.mapToCssModules = mapToCssModules;
exports.omit = omit;
function getTetherAttachments(placement) {
    var attachments = {};
    switch (placement) {
        case 'top':
        case 'top center':
            attachments = {
                attachment: 'bottom center',
                targetAttachment: 'top center'
            };
            break;
        case 'bottom':
        case 'bottom center':
            attachments = {
                attachment: 'top center',
                targetAttachment: 'bottom center'
            };
            break;
        case 'left':
        case 'left center':
            attachments = {
                attachment: 'middle right',
                targetAttachment: 'middle left'
            };
            break;
        case 'right':
        case 'right center':
            attachments = {
                attachment: 'middle left',
                targetAttachment: 'middle right'
            };
            break;
        case 'top left':
            attachments = {
                attachment: 'bottom left',
                targetAttachment: 'top left'
            };
            break;
        case 'top right':
            attachments = {
                attachment: 'bottom right',
                targetAttachment: 'top right'
            };
            break;
        case 'bottom left':
            attachments = {
                attachment: 'top left',
                targetAttachment: 'bottom left'
            };
            break;
        case 'bottom right':
            attachments = {
                attachment: 'top right',
                targetAttachment: 'bottom right'
            };
            break;
        case 'right top':
            attachments = {
                attachment: 'top left',
                targetAttachment: 'top right'
            };
            break;
        case 'right bottom':
            attachments = {
                attachment: 'bottom left',
                targetAttachment: 'bottom right'
            };
            break;
        case 'left top':
            attachments = {
                attachment: 'top right',
                targetAttachment: 'top left'
            };
            break;
        case 'left bottom':
            attachments = {
                attachment: 'bottom right',
                targetAttachment: 'bottom left'
            };
            break;
        default:
            attachments = {
                attachment: 'top center',
                targetAttachment: 'bottom center'
            };
    }
    return attachments;
}
var tetherAttachements = exports.tetherAttachements = ['top', 'bottom', 'left', 'right', 'top left', 'top center', 'top right', 'right top', 'right middle', 'right bottom', 'bottom right', 'bottom center', 'bottom left', 'left top', 'left middle', 'left bottom'];
// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
function getScrollbarWidth() {
    var scrollDiv = document.createElement('div');
    // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
}
function setScrollbarWidth(padding) {
    document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
}
function isBodyOverflowing() {
    return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
    return parseInt(window.getComputedStyle(document.body, null).getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
    var scrollbarWidth = getScrollbarWidth();
    // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L420
    var fixedContent = document.querySelectorAll('.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed')[0];
    var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
    if (isBodyOverflowing()) {
        setScrollbarWidth(bodyPadding + scrollbarWidth);
    }
}
function mapToCssModules(className, cssModule) {
    if (!cssModule)
        return className;
    return className.split(' ').map(function (c) {
        return cssModule[c] || c;
    }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
function omit(obj, omitKeys) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
        if (omitKeys.indexOf(key) === -1) {
            result[key] = obj[key];
        }
    });
    return result;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MessageStoreActionEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWindow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatwindow_css__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatwindow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__chatwindow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_input_ChatInput__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_container_MessageContainer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__networking_fetchText__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_util__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var MessageStoreActionEnum;
(function (MessageStoreActionEnum) {
    MessageStoreActionEnum[MessageStoreActionEnum["ADD_MESSAGE"] = 0] = "ADD_MESSAGE";
    MessageStoreActionEnum[MessageStoreActionEnum["TOGGLE_FLAG_MESSAGE"] = 1] = "TOGGLE_FLAG_MESSAGE";
    MessageStoreActionEnum[MessageStoreActionEnum["EDIT_MESSAGE"] = 2] = "EDIT_MESSAGE";
    MessageStoreActionEnum[MessageStoreActionEnum["DELETE_MESSAGE"] = 3] = "DELETE_MESSAGE";
})(MessageStoreActionEnum = MessageStoreActionEnum || (MessageStoreActionEnum = {}));
var messageStore = Object(__WEBPACK_IMPORTED_MODULE_5_redux__["b" /* createStore */])(function (state, action) {
    switch (action.type) {
        case MessageStoreActionEnum.ADD_MESSAGE:
            var newList_1 = state.listOfMessages.slice(0); // copy the existing list
            newList_1.push(action.message);
            // This currently adds a network-request message whenever a normal message is entered, it is an end goal for the network requests to happen when another event triggers it (ie a button, or detecting voice).
            __WEBPACK_IMPORTED_MODULE_6__networking_fetchText__["a" /* Networking */].fetchTrumpText().then(function (message) {
                newList_1.push(message);
                var messageScrollingSection = document.getElementById("Messages");
                if (messageScrollingSection != null) {
                    messageScrollingSection.scrollTop = messageScrollingSection.scrollHeight;
                }
            });
            return { listOfMessages: newList_1 };
        case MessageStoreActionEnum.TOGGLE_FLAG_MESSAGE:
            var existingMatchingMessage = state.listOfMessages.find(function (element) {
                return element.uuid === action.message.uuid;
            });
            if (!Object(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(existingMatchingMessage)) {
                existingMatchingMessage.flagged = !existingMatchingMessage.flagged;
                var newList1 = state.listOfMessages.slice(0); // copy the existing list
                return { listOfMessages: newList1 };
            }
            else {
                return { listOfMessages: state.listOfMessages };
            }
        case MessageStoreActionEnum.EDIT_MESSAGE:
            var existingM = state.listOfMessages.find(function (element) {
                return element.uuid === action.message.uuid;
            });
            if (!Object(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(existingM)) {
                existingM.text = action.message.text;
                var newList2 = state.listOfMessages.slice(0); // copy the existing list
                return { listOfMessages: newList2 };
            }
            else {
                return { listOfMessages: state.listOfMessages };
            }
        default:
            return state;
    }
}, { listOfMessages: []
});
var ChatWindow = /** @class */ (function (_super) {
    __extends(ChatWindow, _super);
    function ChatWindow(props) {
        return _super.call(this, props) || this;
    }
    ChatWindow.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_redux__["a" /* Provider */], { store: messageStore },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ChatWindow" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__message_container_MessageContainer__["a" /* ConnectedMessageContainer */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "BottomContainer" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__chat_input_ChatInput__["a" /* ChatInput */], null)))));
    };
    return ChatWindow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
        descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
} } return function (Constructor, protoProps, staticProps) { if (protoProps)
    defineProperties(Constructor.prototype, protoProps); if (staticProps)
    defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _screenReaderStyles = __webpack_require__(54);
var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) {
    if (keys.indexOf(i) >= 0)
        continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
    target[i] = obj[i];
} return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
    _inherits(FontAwesome, _React$Component);
    function FontAwesome() {
        _classCallCheck(this, FontAwesome);
        var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));
        _this.displayName = 'FontAwesome';
        return _this;
    }
    _createClass(FontAwesome, [{
            key: 'render',
            value: function render() {
                var _props = this.props, border = _props.border, cssModule = _props.cssModule, className = _props.className, fixedWidth = _props.fixedWidth, flip = _props.flip, inverse = _props.inverse, name = _props.name, pulse = _props.pulse, rotate = _props.rotate, size = _props.size, spin = _props.spin, stack = _props.stack, _props$tag = _props.tag, tag = _props$tag === undefined ? 'span' : _props$tag, ariaLabel = _props.ariaLabel, props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);
                var classNames = [];
                if (cssModule) {
                    classNames.push(cssModule['fa']);
                    classNames.push(cssModule['fa-' + name]);
                    size && classNames.push(cssModule['fa-' + size]);
                    spin && classNames.push(cssModule['fa-spin']);
                    pulse && classNames.push(cssModule['fa-pulse']);
                    border && classNames.push(cssModule['fa-border']);
                    fixedWidth && classNames.push(cssModule['fa-fw']);
                    inverse && classNames.push(cssModule['fa-inverse']);
                    flip && classNames.push(cssModule['fa-flip-' + flip]);
                    rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
                    stack && classNames.push(cssModule['fa-stack-' + stack]);
                }
                else {
                    classNames.push('fa');
                    classNames.push('fa-' + name);
                    size && classNames.push('fa-' + size);
                    spin && classNames.push('fa-spin');
                    pulse && classNames.push('fa-pulse');
                    border && classNames.push('fa-border');
                    fixedWidth && classNames.push('fa-fw');
                    inverse && classNames.push('fa-inverse');
                    flip && classNames.push('fa-flip-' + flip);
                    rotate && classNames.push('fa-rotate-' + rotate);
                    stack && classNames.push('fa-stack-' + stack);
                }
                // Add any custom class names at the end.
                className && classNames.push(className);
                return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
            }
        }]);
    return FontAwesome;
}(_react2.default.Component);
FontAwesome.propTypes = {
    ariaLabel: _propTypes2.default.string,
    border: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    cssModule: _propTypes2.default.object,
    fixedWidth: _propTypes2.default.bool,
    flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
    inverse: _propTypes2.default.bool,
    name: _propTypes2.default.string.isRequired,
    pulse: _propTypes2.default.bool,
    rotate: _propTypes2.default.oneOf([90, 180, 270]),
    size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
    spin: _propTypes2.default.bool,
    stack: _propTypes2.default.oneOf(['1x', '2x']),
    tag: _propTypes2.default.string
};
exports.default = FontAwesome;
module.exports = exports['default'];


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUserMessage; });
var uuid = __webpack_require__(55);
var AppUserMessage = /** @class */ (function () {
    function AppUserMessage() {
        this.text = "";
        this.user = -1;
        this.flagged = false;
        this.uuid = uuid.create().toString();
        this.editedBy = [];
    }
    AppUserMessage.fromIncomingUserMessage = function (message) {
        var m = {
            text: message.text,
            user: message.user,
            flagged: false,
            uuid: uuid.create().toString(),
            editedBy: []
        };
        return m;
    };
    AppUserMessage.fromUserGeneratedText = function (text) {
        var m = {
            text: text,
            user: 0,
            flagged: false,
            uuid: uuid.create().toString(),
            editedBy: []
        };
        return m;
    };
    return AppUserMessage;
}());



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */
function makeEmptyFunction(arg) {
    return function () {
        return arg;
    };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() { };
emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
    return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
};
module.exports = emptyFunction;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
var validateFormat = function validateFormat(format) { };
if (process.env.NODE_ENV !== 'production') {
    validateFormat = function validateFormat(format) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    };
}
function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        }
        else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function () {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
}
module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* unused harmony export Container */
/* unused harmony export Row */
/* unused harmony export Col */
/* unused harmony export Navbar */
/* unused harmony export NavbarBrand */
/* unused harmony export NavbarToggler */
/* unused harmony export Nav */
/* unused harmony export NavItem */
/* unused harmony export NavDropdown */
/* unused harmony export NavLink */
/* unused harmony export Breadcrumb */
/* unused harmony export BreadcrumbItem */
/* unused harmony export Button */
/* unused harmony export ButtonDropdown */
/* unused harmony export ButtonGroup */
/* unused harmony export ButtonToolbar */
/* unused harmony export Dropdown */
/* unused harmony export DropdownItem */
/* unused harmony export DropdownMenu */
/* unused harmony export DropdownToggle */
/* unused harmony export Fade */
/* unused harmony export Badge */
/* unused harmony export Card */
/* unused harmony export CardLink */
/* unused harmony export CardGroup */
/* unused harmony export CardDeck */
/* unused harmony export CardColumns */
/* unused harmony export CardBlock */
/* unused harmony export CardFooter */
/* unused harmony export CardHeader */
/* unused harmony export CardImg */
/* unused harmony export CardImgOverlay */
/* unused harmony export CardSubtitle */
/* unused harmony export CardText */
/* unused harmony export CardTitle */
/* unused harmony export Popover */
/* unused harmony export PopoverContent */
/* unused harmony export PopoverTitle */
/* unused harmony export Progress */
/* unused harmony export Modal */
/* unused harmony export ModalHeader */
/* unused harmony export ModalBody */
/* unused harmony export ModalFooter */
/* unused harmony export TetherContent */
/* unused harmony export Tooltip */
/* unused harmony export Table */
/* unused harmony export ListGroup */
/* unused harmony export Form */
/* unused harmony export FormFeedback */
/* unused harmony export FormGroup */
/* unused harmony export FormText */
/* unused harmony export Input */
/* unused harmony export InputGroup */
/* unused harmony export InputGroupAddon */
/* unused harmony export InputGroupButton */
/* unused harmony export Label */
/* unused harmony export Media */
/* unused harmony export Pagination */
/* unused harmony export PaginationItem */
/* unused harmony export PaginationLink */
/* unused harmony export TabContent */
/* unused harmony export TabPane */
/* unused harmony export Jumbotron */
/* unused harmony export Collapse */
/* unused harmony export ListGroupItem */
/* unused harmony export ListGroupItemText */
/* unused harmony export ListGroupItemHeading */
/* unused harmony export UncontrolledAlert */
/* unused harmony export UncontrolledButtonDropdown */
/* unused harmony export UncontrolledDropdown */
/* unused harmony export UncontrolledNavDropdown */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UncontrolledTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isobject__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isobject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isobject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isfunction__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isfunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isfunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap_tether__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap_tether___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap_tether__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_tonumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_transition_group__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_transition_group__);









function getTetherAttachments(placement) {
    var attachments = {};
    switch (placement) {
        case 'top':
        case 'top center':
            attachments = {
                attachment: 'bottom center',
                targetAttachment: 'top center'
            };
            break;
        case 'bottom':
        case 'bottom center':
            attachments = {
                attachment: 'top center',
                targetAttachment: 'bottom center'
            };
            break;
        case 'left':
        case 'left center':
            attachments = {
                attachment: 'middle right',
                targetAttachment: 'middle left'
            };
            break;
        case 'right':
        case 'right center':
            attachments = {
                attachment: 'middle left',
                targetAttachment: 'middle right'
            };
            break;
        case 'top left':
            attachments = {
                attachment: 'bottom left',
                targetAttachment: 'top left'
            };
            break;
        case 'top right':
            attachments = {
                attachment: 'bottom right',
                targetAttachment: 'top right'
            };
            break;
        case 'bottom left':
            attachments = {
                attachment: 'top left',
                targetAttachment: 'bottom left'
            };
            break;
        case 'bottom right':
            attachments = {
                attachment: 'top right',
                targetAttachment: 'bottom right'
            };
            break;
        case 'right top':
            attachments = {
                attachment: 'top left',
                targetAttachment: 'top right'
            };
            break;
        case 'right bottom':
            attachments = {
                attachment: 'bottom left',
                targetAttachment: 'bottom right'
            };
            break;
        case 'left top':
            attachments = {
                attachment: 'top right',
                targetAttachment: 'top left'
            };
            break;
        case 'left bottom':
            attachments = {
                attachment: 'bottom right',
                targetAttachment: 'bottom left'
            };
            break;
        default:
            attachments = {
                attachment: 'top center',
                targetAttachment: 'bottom center'
            };
    }
    return attachments;
}
var tetherAttachements = ['top', 'bottom', 'left', 'right', 'top left', 'top center', 'top right', 'right top', 'right middle', 'right bottom', 'bottom right', 'bottom center', 'bottom left', 'left top', 'left middle', 'left bottom'];
// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
function getScrollbarWidth() {
    var scrollDiv = document.createElement('div');
    // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
}
function setScrollbarWidth(padding) {
    document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
}
function isBodyOverflowing() {
    return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
    return parseInt(window.getComputedStyle(document.body, null).getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
    var scrollbarWidth = getScrollbarWidth();
    // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L420
    var fixedContent = document.querySelectorAll('.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed')[0];
    var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
    if (isBodyOverflowing()) {
        setScrollbarWidth(bodyPadding + scrollbarWidth);
    }
}
function mapToCssModules(className, cssModule) {
    if (!cssModule)
        return className;
    return className.split(' ').map(function (c) {
        return cssModule[c] || c;
    }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
function omit(obj, omitKeys) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
        if (omitKeys.indexOf(key) === -1) {
            result[key] = obj[key];
        }
    });
    return result;
}
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var defineProperty = function (obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    }
    else {
        obj[key] = value;
    }
    return obj;
};
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var objectWithoutProperties = function (obj, keys) {
    var target = {};
    for (var i in obj) {
        if (keys.indexOf(i) >= 0)
            continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
        target[i] = obj[i];
    }
    return target;
};
var possibleConstructorReturn = function (self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var propTypes = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    fluid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps = {
    tag: 'div'
};
var Container = function Container(props) {
    var className = props.className, cssModule = props.cssModule, fluid = props.fluid, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'fluid', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, fluid ? 'container-fluid' : 'container'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
var propTypes$1 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    noGutters: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$1 = {
    tag: 'div'
};
var Row = function Row(props) {
    var className = props.className, cssModule = props.cssModule, noGutters = props.noGutters, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'noGutters', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Row.propTypes = propTypes$1;
Row.defaultProps = defaultProps$1;
var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]);
var columnProps = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
        size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
        push: stringOrNumberProp,
        pull: stringOrNumberProp,
        offset: stringOrNumberProp
    })]);
var propTypes$2 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    widths: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};
var defaultProps$2 = {
    tag: 'div',
    widths: colWidths
};
var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
    if (colSize === true || colSize === '') {
        return isXs ? 'col' : 'col-' + colWidth;
    }
    else if (colSize === 'auto') {
        return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
    }
    return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};
var Col = function Col(props) {
    var className = props.className, cssModule = props.cssModule, widths = props.widths, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);
    var colClasses = [];
    widths.forEach(function (colWidth, i) {
        var columnProp = props[colWidth];
        if (!i && columnProp === undefined) {
            columnProp = true;
        }
        delete attributes[colWidth];
        if (!columnProp) {
            return;
        }
        var isXs = !i;
        var colClass = void 0;
        if (__WEBPACK_IMPORTED_MODULE_3_lodash_isobject___default()(columnProp)) {
            var _classNames;
            var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
            colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
            colClasses.push(mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'push' + colSizeInterfix + columnProp.push, columnProp.push || columnProp.push === 0), defineProperty(_classNames, 'pull' + colSizeInterfix + columnProp.pull, columnProp.pull || columnProp.pull === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
        }
        else {
            colClass = getColumnSizeClass(isXs, colWidth, columnProp);
            colClasses.push(colClass);
        }
    });
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, colClasses), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Col.propTypes = propTypes$2;
Col.defaultProps = defaultProps$2;
var propTypes$3 = {
    light: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    inverse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    full: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    fixed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    sticky: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    role: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    toggleable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};
var defaultProps$3 = {
    tag: 'nav',
    toggleable: false
};
var getToggleableClass = function getToggleableClass(toggleable) {
    if (toggleable === false) {
        return false;
    }
    else if (toggleable === true || toggleable === 'xs') {
        return 'navbar-toggleable';
    }
    return 'navbar-toggleable-' + toggleable;
};
var Navbar = function Navbar(props) {
    var _classNames;
    var toggleable = props.toggleable, className = props.className, cssModule = props.cssModule, light = props.light, inverse = props.inverse, full = props.full, fixed = props.fixed, sticky = props.sticky, color = props.color, Tag = props.tag, attributes = objectWithoutProperties(props, ['toggleable', 'className', 'cssModule', 'light', 'inverse', 'full', 'fixed', 'sticky', 'color', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'navbar', getToggleableClass(toggleable), (_classNames = {
        'navbar-light': light,
        'navbar-inverse': inverse
    }, defineProperty(_classNames, 'bg-' + color, color), defineProperty(_classNames, 'navbar-full', full), defineProperty(_classNames, 'fixed-' + fixed, fixed), defineProperty(_classNames, 'sticky-' + sticky, sticky), _classNames)), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Navbar.propTypes = propTypes$3;
Navbar.defaultProps = defaultProps$3;
var propTypes$4 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$4 = {
    tag: 'a'
};
var NavbarBrand = function NavbarBrand(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'navbar-brand'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
NavbarBrand.propTypes = propTypes$4;
NavbarBrand.defaultProps = defaultProps$4;
var propTypes$5 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    left: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
var defaultProps$5 = {
    tag: 'button',
    type: 'button'
};
var navbarToggleIcon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon' });
var NavbarToggler = function NavbarToggler(props) {
    var className = props.className, cssModule = props.cssModule, children = props.children, right = props.right, left = props.left, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'right', 'left', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'navbar-toggler', right && 'navbar-toggler-right', left && 'navbar-toggler-left'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }), children || navbarToggleIcon);
};
NavbarToggler.propTypes = propTypes$5;
NavbarToggler.defaultProps = defaultProps$5;
var propTypes$6 = {
    tabs: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    pills: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    vertical: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    navbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$6 = {
    tag: 'ul'
};
var Nav = function Nav(props) {
    var className = props.className, cssModule = props.cssModule, tabs = props.tabs, pills = props.pills, vertical = props.vertical, navbar = props.navbar, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabs', 'pills', 'vertical', 'navbar', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, navbar ? 'navbar-nav' : 'nav', {
        'nav-tabs': tabs,
        'nav-pills': pills,
        'flex-column': vertical
    }), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Nav.propTypes = propTypes$6;
Nav.defaultProps = defaultProps$6;
var propTypes$7 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$7 = {
    tag: 'li'
};
var NavItem = function NavItem(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'nav-item'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
NavItem.propTypes = propTypes$7;
NavItem.defaultProps = defaultProps$7;
var propTypes$10 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    arrow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    tether: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    tetherRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$10 = {
    isOpen: false,
    tetherRef: function tetherRef() { }
};
var TetherContent = function (_React$Component) {
    inherits(TetherContent, _React$Component);
    function TetherContent(props) {
        classCallCheck(this, TetherContent);
        var _this = possibleConstructorReturn(this, (TetherContent.__proto__ || Object.getPrototypeOf(TetherContent)).call(this, props));
        _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }
    createClass(TetherContent, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.handleProps();
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                if (this.props.isOpen !== prevProps.isOpen) {
                    this.handleProps();
                }
                else if (this._element) {
                    // rerender
                    this.renderIntoSubtree();
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.hide();
            }
        }, {
            key: 'getTarget',
            value: function getTarget() {
                var target = this.props.tether.target;
                if (__WEBPACK_IMPORTED_MODULE_5_lodash_isfunction___default()(target)) {
                    return target();
                }
                return target;
            }
        }, {
            key: 'getTetherConfig',
            value: function getTetherConfig() {
                var config = _extends({}, this.props.tether);
                config.element = this._element;
                config.target = this.getTarget();
                return config;
            }
        }, {
            key: 'handleDocumentClick',
            value: function handleDocumentClick(e) {
                var container = this._element;
                if (e.target === container || !container.contains(e.target)) {
                    this.toggle();
                }
            }
        }, {
            key: 'handleProps',
            value: function handleProps() {
                if (this.props.isOpen) {
                    this.show();
                }
                else {
                    this.hide();
                }
            }
        }, {
            key: 'hide',
            value: function hide() {
                document.removeEventListener('click', this.handleDocumentClick, true);
                if (this._element) {
                    document.body.removeChild(this._element);
                    __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.unmountComponentAtNode(this._element);
                    this._element = null;
                }
                if (this._tether) {
                    this._tether.destroy();
                    this._tether = null;
                    this.props.tetherRef(this._tether);
                }
            }
        }, {
            key: 'show',
            value: function show() {
                document.addEventListener('click', this.handleDocumentClick, true);
                this._element = document.createElement('div');
                this._element.className = this.props.className;
                document.body.appendChild(this._element);
                this.renderIntoSubtree();
                this._tether = new __WEBPACK_IMPORTED_MODULE_6_reactstrap_tether___default.a(this.getTetherConfig());
                this.props.tetherRef(this._tether);
                this._tether.position();
                this._element.childNodes[0].focus();
            }
        }, {
            key: 'toggle',
            value: function toggle(e) {
                if (this.props.disabled) {
                    return e && e.preventDefault();
                }
                return this.props.toggle();
            }
        }, {
            key: 'renderIntoSubtree',
            value: function renderIntoSubtree() {
                __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
            }
        }, {
            key: 'renderChildren',
            value: function renderChildren() {
                var _props = this.props, children = _props.children, style = _props.style;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children, { style: style });
            }
        }, {
            key: 'render',
            value: function render() {
                return null;
            }
        }]);
    return TetherContent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
TetherContent.propTypes = propTypes$10;
TetherContent.defaultProps = defaultProps$10;
var propTypes$11 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
    right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$11 = {
    tag: 'div'
};
var contextTypes = {
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};
var DropdownMenu = function DropdownMenu(props, context) {
    var className = props.className, cssModule = props.cssModule, right = props.right, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'dropdown-menu', { 'dropdown-menu-right': right }), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { tabIndex: '-1', 'aria-hidden': !context.isOpen, role: 'menu', className: classes }));
};
DropdownMenu.propTypes = propTypes$11;
DropdownMenu.defaultProps = defaultProps$11;
DropdownMenu.contextTypes = contextTypes;
/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
var propTypes$9 = {
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    dropup: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    group: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    tether: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$9 = {
    isOpen: false,
    tag: 'div'
};
var childContextTypes = {
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};
var defaultTetherConfig = {
    classPrefix: 'bs-tether',
    classes: { element: 'dropdown', enabled: 'show' },
    constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
var Dropdown = function (_React$Component) {
    inherits(Dropdown, _React$Component);
    function Dropdown(props) {
        classCallCheck(this, Dropdown);
        var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
        _this.addEvents = _this.addEvents.bind(_this);
        _this.getTetherConfig = _this.getTetherConfig.bind(_this);
        _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
        _this.removeEvents = _this.removeEvents.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }
    createClass(Dropdown, [{
            key: 'getChildContext',
            value: function getChildContext() {
                return {
                    toggle: this.props.toggle,
                    isOpen: this.props.isOpen
                };
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.handleProps();
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                if (this.props.isOpen !== prevProps.isOpen) {
                    this.handleProps();
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.removeEvents();
            }
        }, {
            key: 'getTetherTarget',
            value: function getTetherTarget() {
                var container = __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this);
                return container.querySelector('[data-toggle="dropdown"]');
            }
        }, {
            key: 'getTetherConfig',
            value: function getTetherConfig(childProps) {
                var _this2 = this;
                var target = function target() {
                    return _this2.getTetherTarget();
                };
                var vElementAttach = 'top';
                var hElementAttach = 'left';
                var vTargetAttach = 'bottom';
                var hTargetAttach = 'left';
                if (childProps.right) {
                    hElementAttach = 'right';
                    hTargetAttach = 'right';
                }
                if (this.props.dropup) {
                    vElementAttach = 'bottom';
                    vTargetAttach = 'top';
                }
                return _extends({}, defaultTetherConfig, {
                    attachment: vElementAttach + ' ' + hElementAttach,
                    targetAttachment: vTargetAttach + ' ' + hTargetAttach,
                    target: target
                }, this.props.tether);
            }
        }, {
            key: 'addEvents',
            value: function addEvents() {
                document.addEventListener('click', this.handleDocumentClick, true);
            }
        }, {
            key: 'removeEvents',
            value: function removeEvents() {
                document.removeEventListener('click', this.handleDocumentClick, true);
            }
        }, {
            key: 'handleDocumentClick',
            value: function handleDocumentClick(e) {
                var container = __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this);
                if (container.contains(e.target) && container !== e.target) {
                    return;
                }
                this.toggle();
            }
        }, {
            key: 'handleProps',
            value: function handleProps() {
                if (this.props.tether) {
                    return;
                }
                if (this.props.isOpen) {
                    this.addEvents();
                }
                else {
                    this.removeEvents();
                }
            }
        }, {
            key: 'toggle',
            value: function toggle(e) {
                if (this.props.disabled) {
                    return e && e.preventDefault();
                }
                return this.props.toggle();
            }
        }, {
            key: 'renderChildren',
            value: function renderChildren() {
                var _this3 = this;
                var _props = this.props, tether = _props.tether, children = _props.children, attrs = objectWithoutProperties(_props, ['tether', 'children']);
                attrs.toggle = this.toggle;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(children), function (child) {
                    if (tether && child.type === DropdownMenu) {
                        var tetherConfig = _this3.getTetherConfig(child.props);
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TetherContent, _extends({}, attrs, { tether: tetherConfig }), child);
                    }
                    return child;
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var _classNames;
                var _omit = omit(this.props, ['toggle', 'tether']), className = _omit.className, cssModule = _omit.cssModule, dropup = _omit.dropup, group = _omit.group, size = _omit.size, Tag = _omit.tag, isOpen = _omit.isOpen, attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'group', 'size', 'tag', 'isOpen']);
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, (_classNames = {
                    'btn-group': group
                }, defineProperty(_classNames, 'btn-group-' + size, !!size), defineProperty(_classNames, 'dropdown', !group), defineProperty(_classNames, 'show', isOpen), defineProperty(_classNames, 'dropup', dropup), _classNames)), cssModule);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, {
                    className: classes
                }), this.renderChildren());
            }
        }]);
    return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
Dropdown.propTypes = propTypes$9;
Dropdown.defaultProps = defaultProps$9;
Dropdown.childContextTypes = childContextTypes;
var propTypes$8 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$8 = {
    tag: 'li'
};
var NavDropdown = function NavDropdown(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'nav-item'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown, _extends({}, attributes, { tag: Tag, className: classes }));
};
NavDropdown.propTypes = propTypes$8;
NavDropdown.defaultProps = defaultProps$8;
var propTypes$12 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    getRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    href: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
var defaultProps$12 = {
    tag: 'a'
};
var NavLink = function (_React$Component) {
    inherits(NavLink, _React$Component);
    function NavLink(props) {
        classCallCheck(this, NavLink);
        var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    createClass(NavLink, [{
            key: 'onClick',
            value: function onClick(e) {
                if (this.props.disabled) {
                    e.preventDefault();
                    return;
                }
                if (this.props.href === '#') {
                    e.preventDefault();
                }
                if (this.props.onClick) {
                    this.props.onClick(e);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props, className = _props.className, cssModule = _props.cssModule, active = _props.active, Tag = _props.tag, getRef = _props.getRef, attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'getRef']);
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'nav-link', {
                    disabled: attributes.disabled,
                    active: active
                }), cssModule);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { ref: getRef, onClick: this.onClick, className: classes }));
            }
        }]);
    return NavLink;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
NavLink.propTypes = propTypes$12;
NavLink.defaultProps = defaultProps$12;
var propTypes$13 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$13 = {
    tag: 'ol'
};
var Breadcrumb = function Breadcrumb(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'breadcrumb'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Breadcrumb.propTypes = propTypes$13;
Breadcrumb.defaultProps = defaultProps$13;
var propTypes$14 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$14 = {
    tag: 'li'
};
var BreadcrumbItem = function BreadcrumbItem(props) {
    var className = props.className, cssModule = props.cssModule, active = props.active, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
BreadcrumbItem.propTypes = propTypes$14;
BreadcrumbItem.defaultProps = defaultProps$14;
var propTypes$15 = {
    active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    outline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    getRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$15 = {
    color: 'secondary',
    tag: 'button'
};
var Button = function (_React$Component) {
    inherits(Button, _React$Component);
    function Button(props) {
        classCallCheck(this, Button);
        var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    createClass(Button, [{
            key: 'onClick',
            value: function onClick(e) {
                if (this.props.disabled) {
                    e.preventDefault();
                    return;
                }
                if (this.props.onClick) {
                    this.props.onClick(e);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props, active = _props.active, block = _props.block, className = _props.className, cssModule = _props.cssModule, color = _props.color, outline = _props.outline, size = _props.size, Tag = _props.tag, getRef = _props.getRef, attributes = objectWithoutProperties(_props, ['active', 'block', 'className', 'cssModule', 'color', 'outline', 'size', 'tag', 'getRef']);
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'btn', 'btn' + (outline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);
                if (attributes.href && Tag === 'button') {
                    Tag = 'a';
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({
                    type: Tag === 'button' && attributes.onClick ? 'button' : undefined
                }, attributes, {
                    className: classes,
                    ref: getRef,
                    onClick: this.onClick
                }));
            }
        }]);
    return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
Button.propTypes = propTypes$15;
Button.defaultProps = defaultProps$15;
var propTypes$16 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
var ButtonDropdown = function ButtonDropdown(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown, _extends({ group: true }, props));
};
ButtonDropdown.propTypes = propTypes$16;
var propTypes$17 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    'aria-label': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    role: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    vertical: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
var defaultProps$16 = {
    tag: 'div',
    role: 'group'
};
var ButtonGroup = function ButtonGroup(props) {
    var className = props.className, cssModule = props.cssModule, size = props.size, vertical = props.vertical, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'vertical', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ButtonGroup.propTypes = propTypes$17;
ButtonGroup.defaultProps = defaultProps$16;
var propTypes$18 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    'aria-label': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    role: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
var defaultProps$17 = {
    tag: 'div',
    role: 'toolbar'
};
var ButtonToolbar = function ButtonToolbar(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'btn-toolbar'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ButtonToolbar.propTypes = propTypes$18;
ButtonToolbar.defaultProps = defaultProps$17;
var propTypes$19 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    divider: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    header: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
var contextTypes$1 = {
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
var defaultProps$18 = {
    tag: 'button',
    toggle: true
};
var DropdownItem = function (_React$Component) {
    inherits(DropdownItem, _React$Component);
    function DropdownItem(props) {
        classCallCheck(this, DropdownItem);
        var _this = possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));
        _this.onClick = _this.onClick.bind(_this);
        _this.getTabIndex = _this.getTabIndex.bind(_this);
        return _this;
    }
    createClass(DropdownItem, [{
            key: 'onClick',
            value: function onClick(e) {
                if (this.props.disabled || this.props.header || this.props.divider) {
                    e.preventDefault();
                    return;
                }
                if (this.props.onClick) {
                    this.props.onClick(e);
                }
                if (this.props.toggle) {
                    this.context.toggle();
                }
            }
        }, {
            key: 'getTabIndex',
            value: function getTabIndex() {
                if (this.props.disabled || this.props.header || this.props.divider) {
                    return '-1';
                }
                return '0';
            }
        }, {
            key: 'render',
            value: function render() {
                var tabIndex = this.getTabIndex();
                var _omit = omit(this.props, ['toggle']), className = _omit.className, cssModule = _omit.cssModule, divider = _omit.divider, Tag = _omit.tag, header = _omit.header, active = _omit.active, props = objectWithoutProperties(_omit, ['className', 'cssModule', 'divider', 'tag', 'header', 'active']);
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, {
                    disabled: props.disabled,
                    'dropdown-item': !divider && !header,
                    active: active,
                    'dropdown-header': header,
                    'dropdown-divider': divider
                }), cssModule);
                if (Tag === 'button') {
                    if (header) {
                        Tag = 'h6';
                    }
                    else if (divider) {
                        Tag = 'div';
                    }
                    else if (props.href) {
                        Tag = 'a';
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({
                    type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
                }, props, {
                    tabIndex: tabIndex,
                    className: classes,
                    onClick: this.onClick
                }));
            }
        }]);
    return DropdownItem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
DropdownItem.propTypes = propTypes$19;
DropdownItem.defaultProps = defaultProps$18;
DropdownItem.contextTypes = contextTypes$1;
var propTypes$20 = {
    caret: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    'data-toggle': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    'aria-haspopup': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    split: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    nav: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
var defaultProps$19 = {
    'data-toggle': 'dropdown',
    'aria-haspopup': true,
    color: 'secondary'
};
var contextTypes$2 = {
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
var DropdownToggle = function (_React$Component) {
    inherits(DropdownToggle, _React$Component);
    function DropdownToggle(props) {
        classCallCheck(this, DropdownToggle);
        var _this = possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call(this, props));
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    createClass(DropdownToggle, [{
            key: 'onClick',
            value: function onClick(e) {
                if (this.props.disabled) {
                    e.preventDefault();
                    return;
                }
                if (this.props.nav && !this.props.tag) {
                    e.preventDefault();
                }
                if (this.props.onClick) {
                    this.props.onClick(e);
                }
                this.context.toggle();
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props, className = _props.className, color = _props.color, cssModule = _props.cssModule, caret = _props.caret, split = _props.split, nav = _props.nav, tag = _props.tag, props = objectWithoutProperties(_props, ['className', 'color', 'cssModule', 'caret', 'split', 'nav', 'tag']);
                var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, {
                    'dropdown-toggle': caret || split,
                    'dropdown-toggle-split': split,
                    active: this.context.isOpen,
                    'nav-link': nav
                }), cssModule);
                var children = props.children || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'sr-only' }, ariaLabel);
                var Tag = void 0;
                if (nav && !tag) {
                    Tag = 'a';
                    props.href = '#';
                }
                else if (!tag) {
                    Tag = Button;
                    props.color = color;
                }
                else {
                    Tag = tag;
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, props, {
                    className: classes,
                    onClick: this.onClick,
                    'aria-haspopup': 'true',
                    'aria-expanded': this.context.isOpen,
                    children: children
                }));
            }
        }]);
    return DropdownToggle;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
DropdownToggle.propTypes = propTypes$20;
DropdownToggle.defaultProps = defaultProps$19;
DropdownToggle.contextTypes = contextTypes$2;
var propTypes$21 = {
    baseClass: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    baseClassIn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    transitionAppearTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    transitionEnterTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    transitionLeaveTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    transitionAppear: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    transitionEnter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    transitionLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    onLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onEnter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
var defaultProps$20 = {
    tag: 'div',
    baseClass: 'fade',
    baseClassIn: 'show',
    transitionAppearTimeout: 0,
    transitionEnterTimeout: 0,
    transitionLeaveTimeout: 0,
    transitionAppear: true,
    transitionEnter: true,
    transitionLeave: true
};
var Fade = function (_React$Component) {
    inherits(Fade, _React$Component);
    function Fade(props) {
        classCallCheck(this, Fade);
        var _this = possibleConstructorReturn(this, (Fade.__proto__ || Object.getPrototypeOf(Fade)).call(this, props));
        _this.state = {
            mounted: !props.transitionAppear
        };
        _this.onLeave = _this.onLeave.bind(_this);
        _this.onEnter = _this.onEnter.bind(_this);
        _this.timers = [];
        return _this;
    }
    createClass(Fade, [{
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.timers.forEach(function (timer) {
                    return clearTimeout(timer);
                });
            }
        }, {
            key: 'onEnter',
            value: function onEnter(cb) {
                var _this2 = this;
                return function () {
                    cb();
                    if (_this2.props.onEnter) {
                        _this2.props.onEnter();
                    }
                };
            }
        }, {
            key: 'onLeave',
            value: function onLeave(cb) {
                var _this3 = this;
                return function () {
                    cb();
                    if (_this3.props.onLeave) {
                        _this3.props.onLeave();
                    }
                };
            }
        }, {
            key: 'componentWillAppear',
            value: function componentWillAppear(cb) {
                if (!this.props.transitionAppear) {
                    this.onEnter(cb)();
                }
                this.timers.push(setTimeout(this.onEnter(cb), this.props.transitionAppearTimeout));
            }
        }, {
            key: 'componentDidAppear',
            value: function componentDidAppear() {
                this.setState({
                    mounted: true
                });
            }
        }, {
            key: 'componentWillEnter',
            value: function componentWillEnter(cb) {
                if (!this.props.transitionEnter) {
                    this.onEnter(cb)();
                }
                this.timers.push(setTimeout(this.onEnter(cb), this.props.transitionEnterTimeout));
            }
        }, {
            key: 'componentDidEnter',
            value: function componentDidEnter() {
                this.setState({
                    mounted: true
                });
            }
        }, {
            key: 'componentWillLeave',
            value: function componentWillLeave(cb) {
                this.setState({
                    mounted: false
                });
                if (!this.props.transitionLeave) {
                    this.onLeave(cb)();
                }
                this.timers.push(setTimeout(this.onLeave(cb), this.props.transitionLeaveTimeout));
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props, baseClass = _props.baseClass, baseClassIn = _props.baseClassIn, className = _props.className, cssModule = _props.cssModule, Tag = _props.tag;
                var attributes = omit(this.props, Object.keys(propTypes$21));
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, baseClass, this.state.mounted ? baseClassIn : false), cssModule);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
            }
        }]);
    return Fade;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
Fade.propTypes = propTypes$21;
Fade.defaultProps = defaultProps$20;
var propTypes$22 = {
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    pill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$21 = {
    color: 'default',
    pill: false,
    tag: 'span'
};
var Badge = function Badge(props) {
    var className = props.className, cssModule = props.cssModule, color = props.color, pill = props.pill, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Badge.propTypes = propTypes$22;
Badge.defaultProps = defaultProps$21;
var propTypes$23 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    inverse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    outline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$22 = {
    tag: 'div'
};
var Card = function Card(props) {
    var className = props.className, cssModule = props.cssModule, color = props.color, block = props.block, inverse = props.inverse, outline = props.outline, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'block', 'inverse', 'outline', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card', inverse ? 'card-inverse' : false, block ? 'card-block' : false, color ? 'card' + (outline ? '-outline' : '') + '-' + color : false), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Card.propTypes = propTypes$23;
Card.defaultProps = defaultProps$22;
var propTypes$24 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$23 = {
    tag: 'div'
};
var CardGroup = function CardGroup(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-group'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardGroup.propTypes = propTypes$24;
CardGroup.defaultProps = defaultProps$23;
var propTypes$25 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$24 = {
    tag: 'div'
};
var CardDeck = function CardDeck(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-deck'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardDeck.propTypes = propTypes$25;
CardDeck.defaultProps = defaultProps$24;
var propTypes$26 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$25 = {
    tag: 'div'
};
var CardColumns = function CardColumns(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-columns'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardColumns.propTypes = propTypes$26;
CardColumns.defaultProps = defaultProps$25;
var propTypes$27 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$26 = {
    tag: 'div'
};
var CardBlock = function CardBlock(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-block'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardBlock.propTypes = propTypes$27;
CardBlock.defaultProps = defaultProps$26;
var propTypes$28 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    getRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$27 = {
    tag: 'a'
};
var CardLink = function CardLink(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, getRef = props.getRef, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'getRef']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-link'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { ref: getRef, className: classes }));
};
CardLink.propTypes = propTypes$28;
CardLink.defaultProps = defaultProps$27;
var propTypes$29 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$28 = {
    tag: 'div'
};
var CardFooter = function CardFooter(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-footer'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardFooter.propTypes = propTypes$29;
CardFooter.defaultProps = defaultProps$28;
var propTypes$30 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$29 = {
    tag: 'div'
};
var CardHeader = function CardHeader(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-header'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardHeader.propTypes = propTypes$30;
CardHeader.defaultProps = defaultProps$29;
var propTypes$31 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$30 = {
    tag: 'img'
};
var CardImg = function CardImg(props) {
    var className = props.className, cssModule = props.cssModule, top = props.top, bottom = props.bottom, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'top', 'bottom', 'tag']);
    var cardImgClassName = 'card-img';
    if (top) {
        cardImgClassName = 'card-img-top';
    }
    if (bottom) {
        cardImgClassName = 'card-img-bottom';
    }
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, cardImgClassName), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardImg.propTypes = propTypes$31;
CardImg.defaultProps = defaultProps$30;
var propTypes$32 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$31 = {
    tag: 'div'
};
var CardImgOverlay = function CardImgOverlay(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-img-overlay'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardImgOverlay.propTypes = propTypes$32;
CardImgOverlay.defaultProps = defaultProps$31;
var propTypes$33 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$32 = {
    tag: 'h6'
};
var CardSubtitle = function CardSubtitle(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-subtitle'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardSubtitle.propTypes = propTypes$33;
CardSubtitle.defaultProps = defaultProps$32;
var propTypes$34 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$33 = {
    tag: 'p'
};
var CardText = function CardText(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-text'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardText.propTypes = propTypes$34;
CardText.defaultProps = defaultProps$33;
var propTypes$35 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$34 = {
    tag: 'h4'
};
var CardTitle = function CardTitle(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-title'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
CardTitle.propTypes = propTypes$35;
CardTitle.defaultProps = defaultProps$34;
var propTypes$36 = {
    placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(tetherAttachements),
    target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tether: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    tetherRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
var defaultProps$35 = {
    isOpen: false,
    placement: 'bottom',
    toggle: function toggle() { }
};
var defaultTetherConfig$1 = {
    classPrefix: 'bs-tether',
    classes: {
        element: false,
        enabled: 'show'
    },
    constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
var Popover = function (_React$Component) {
    inherits(Popover, _React$Component);
    function Popover(props) {
        classCallCheck(this, Popover);
        var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));
        _this.getTetherConfig = _this.getTetherConfig.bind(_this);
        return _this;
    }
    createClass(Popover, [{
            key: 'getTetherConfig',
            value: function getTetherConfig() {
                var attachments = getTetherAttachments(this.props.placement);
                return _extends({}, defaultTetherConfig$1, attachments, {
                    target: '#' + this.props.target
                }, this.props.tether);
            }
        }, {
            key: 'render',
            value: function render() {
                if (!this.props.isOpen) {
                    return null;
                }
                var tetherConfig = this.getTetherConfig();
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('popover-inner', this.props.className), this.props.cssModule);
                var attributes = omit(this.props, Object.keys(propTypes$36));
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TetherContent, {
                    className: mapToCssModules('popover', this.props.cssModule),
                    tether: tetherConfig,
                    tetherRef: this.props.tetherRef,
                    isOpen: this.props.isOpen,
                    toggle: this.props.toggle
                }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({}, attributes, { className: classes })));
            }
        }]);
    return Popover;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
Popover.propTypes = propTypes$36;
Popover.defaultProps = defaultProps$35;
var propTypes$37 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$36 = {
    tag: 'h3'
};
var PopoverTitle = function PopoverTitle(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'popover-title'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
PopoverTitle.propTypes = propTypes$37;
PopoverTitle.defaultProps = defaultProps$36;
var propTypes$38 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$37 = {
    tag: 'div'
};
var PopoverContent = function PopoverContent(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'popover-content'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
PopoverContent.propTypes = propTypes$38;
PopoverContent.defaultProps = defaultProps$37;
var propTypes$39 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    bar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    multi: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
    max: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
    animated: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    striped: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    barClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$38 = {
    tag: 'div',
    value: 0,
    max: 100
};
var Progress = function Progress(props) {
    var children = props.children, className = props.className, barClassName = props.barClassName, cssModule = props.cssModule, value = props.value, max = props.max, animated = props.animated, striped = props.striped, color = props.color, bar = props.bar, multi = props.multi, Tag = props.tag, attributes = objectWithoutProperties(props, ['children', 'className', 'barClassName', 'cssModule', 'value', 'max', 'animated', 'striped', 'color', 'bar', 'multi', 'tag']);
    var percent = __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber___default()(value) / __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber___default()(max) * 100;
    var progressClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'progress'), cssModule);
    var progressBarClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
    var ProgressBar = multi ? children : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: progressBarClasses,
        style: { width: percent + '%' },
        role: 'progressbar',
        'aria-valuenow': value,
        'aria-valuemin': '0',
        'aria-valuemax': max,
        children: children
    });
    if (bar) {
        return ProgressBar;
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: progressClasses, children: ProgressBar }));
};
Progress.propTypes = propTypes$39;
Progress.defaultProps = defaultProps$38;
var propTypes$40 = {
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    autoFocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    keyboard: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    backdrop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['static'])]),
    onEnter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onExit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    wrapClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    modalClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    backdropClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    contentClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    fade: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    zIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    backdropTransitionTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    backdropTransitionAppearTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    backdropTransitionEnterTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    backdropTransitionLeaveTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    modalTransitionTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    modalTransitionAppearTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    modalTransitionEnterTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    modalTransitionLeaveTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
var propsToOmit = Object.keys(propTypes$40);
var defaultProps$39 = {
    isOpen: false,
    autoFocus: true,
    backdrop: true,
    keyboard: true,
    zIndex: 1050,
    fade: true,
    modalTransitionTimeout: 300,
    backdropTransitionTimeout: 150
};
var Modal = function (_React$Component) {
    inherits(Modal, _React$Component);
    function Modal(props) {
        classCallCheck(this, Modal);
        var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
        _this.originalBodyPadding = null;
        _this.isBodyOverflowing = false;
        _this.togglePortal = _this.togglePortal.bind(_this);
        _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
        _this.handleEscape = _this.handleEscape.bind(_this);
        _this.destroy = _this.destroy.bind(_this);
        _this.onEnter = _this.onEnter.bind(_this);
        _this.onExit = _this.onExit.bind(_this);
        return _this;
    }
    createClass(Modal, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                if (this.props.isOpen) {
                    this.togglePortal();
                }
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                if (this.props.isOpen !== prevProps.isOpen) {
                    // handle portal events/dom updates
                    this.togglePortal();
                }
                else if (this._element) {
                    // rerender portal
                    this.renderIntoSubtree();
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.onExit();
            }
        }, {
            key: 'onEnter',
            value: function onEnter() {
                if (this.props.onEnter) {
                    this.props.onEnter();
                }
            }
        }, {
            key: 'onExit',
            value: function onExit() {
                this.destroy();
                if (this.props.onExit) {
                    this.props.onExit();
                }
            }
        }, {
            key: 'handleEscape',
            value: function handleEscape(e) {
                if (this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
                    this.props.toggle();
                }
            }
        }, {
            key: 'handleBackdropClick',
            value: function handleBackdropClick(e) {
                if (this.props.backdrop !== true)
                    return;
                var container = this._dialog;
                if (e.target && !container.contains(e.target) && this.props.toggle) {
                    this.props.toggle();
                }
            }
        }, {
            key: 'hasTransition',
            value: function hasTransition() {
                if (this.props.fade === false) {
                    return false;
                }
                return this.props.modalTransitionTimeout > 0;
            }
        }, {
            key: 'togglePortal',
            value: function togglePortal() {
                if (this.props.isOpen) {
                    if (this.props.autoFocus) {
                        this._focus = true;
                    }
                    this.show();
                    if (!this.hasTransition()) {
                        this.onEnter();
                    }
                }
                else {
                    this.hide();
                    if (!this.hasTransition()) {
                        this.onExit();
                    }
                }
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (this._element) {
                    __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.unmountComponentAtNode(this._element);
                    document.body.removeChild(this._element);
                    this._element = null;
                }
                // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
                var classes = document.body.className.replace(/(^| )modal-open( |$)/, ' ');
                document.body.className = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes).trim(), this.props.cssModule);
                setScrollbarWidth(this.originalBodyPadding);
            }
        }, {
            key: 'hide',
            value: function hide() {
                this.renderIntoSubtree();
            }
        }, {
            key: 'show',
            value: function show() {
                var classes = document.body.className;
                this._element = document.createElement('div');
                this._element.setAttribute('tabindex', '-1');
                this._element.style.position = 'relative';
                this._element.style.zIndex = this.props.zIndex;
                this.originalBodyPadding = getOriginalBodyPadding();
                conditionallyUpdateScrollbar();
                document.body.appendChild(this._element);
                document.body.className = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes, 'modal-open'), this.props.cssModule);
                this.renderIntoSubtree();
            }
        }, {
            key: 'renderModalDialog',
            value: function renderModalDialog() {
                var _this2 = this;
                var attributes = omit(this.props, propsToOmit);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({
                    className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal-dialog', this.props.className, defineProperty({}, 'modal-' + this.props.size, this.props.size)), this.props.cssModule),
                    role: 'document',
                    ref: function ref(c) {
                        return _this2._dialog = c;
                    }
                }, attributes), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal-content', this.props.contentClassName), this.props.cssModule)
                }, this.props.children));
            }
        }, {
            key: 'renderIntoSubtree',
            value: function renderIntoSubtree() {
                __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
                // check if modal should receive focus
                if (this._focus) {
                    this._dialog.parentNode.focus();
                    this._focus = false;
                }
            }
        }, {
            key: 'renderChildren',
            value: function renderChildren() {
                var _props = this.props, wrapClassName = _props.wrapClassName, modalClassName = _props.modalClassName, backdropClassName = _props.backdropClassName, cssModule = _props.cssModule, isOpen = _props.isOpen, backdrop = _props.backdrop, modalTransitionTimeout = _props.modalTransitionTimeout, backdropTransitionTimeout = _props.backdropTransitionTimeout;
                var modalAttributes = {
                    onClickCapture: this.handleBackdropClick,
                    onKeyUp: this.handleEscape,
                    style: { display: 'block' },
                    tabIndex: '-1'
                };
                if (this.hasTransition()) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_transition_group__["TransitionGroup"], { component: 'div', className: mapToCssModules(wrapClassName) }, isOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Fade, _extends({
                        key: 'modal-dialog',
                        onEnter: this.onEnter,
                        onLeave: this.onExit,
                        transitionAppearTimeout: typeof this.props.modalTransitionAppearTimeout === 'number' ? this.props.modalTransitionAppearTimeout : modalTransitionTimeout,
                        transitionEnterTimeout: typeof this.props.modalTransitionEnterTimeout === 'number' ? this.props.modalTransitionEnterTimeout : modalTransitionTimeout,
                        transitionLeaveTimeout: typeof this.props.modalTransitionLeaveTimeout === 'number' ? this.props.modalTransitionLeaveTimeout : modalTransitionTimeout,
                        cssModule: cssModule,
                        className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal', modalClassName), cssModule)
                    }, modalAttributes), this.renderModalDialog()), isOpen && backdrop && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Fade, {
                        key: 'modal-backdrop',
                        transitionAppearTimeout: typeof this.props.backdropTransitionAppearTimeout === 'number' ? this.props.backdropTransitionAppearTimeout : backdropTransitionTimeout,
                        transitionEnterTimeout: typeof this.props.backdropTransitionEnterTimeout === 'number' ? this.props.backdropTransitionEnterTimeout : backdropTransitionTimeout,
                        transitionLeaveTimeout: typeof this.props.backdropTransitionLeaveTimeout === 'number' ? this.props.backdropTransitionLeaveTimeout : backdropTransitionTimeout,
                        cssModule: cssModule,
                        className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal-backdrop', backdropClassName), cssModule)
                    }));
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: mapToCssModules(wrapClassName) }, isOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({
                    className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal', 'show', modalClassName), cssModule)
                }, modalAttributes), this.renderModalDialog()), isOpen && backdrop && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal-backdrop', 'show', backdropClassName), cssModule)
                }));
            }
        }, {
            key: 'render',
            value: function render() {
                return null;
            }
        }]);
    return Modal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
Modal.propTypes = propTypes$40;
Modal.defaultProps = defaultProps$39;
var propTypes$41 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    wrapTag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
var defaultProps$40 = {
    tag: 'h4',
    wrapTag: 'div'
};
var ModalHeader = function ModalHeader(props) {
    var closeButton = void 0;
    var className = props.className, cssModule = props.cssModule, children = props.children, toggle = props.toggle, Tag = props.tag, WrapTag = props.wrapTag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'modal-header'), cssModule);
    if (toggle) {
        closeButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { type: 'button', onClick: toggle, className: 'close', 'aria-label': 'Close' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { 'aria-hidden': 'true' }, String.fromCharCode(215)));
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrapTag, _extends({}, attributes, { className: classes }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, { className: mapToCssModules('modal-title', cssModule) }, children), closeButton);
};
ModalHeader.propTypes = propTypes$41;
ModalHeader.defaultProps = defaultProps$40;
var propTypes$42 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$41 = {
    tag: 'div'
};
var ModalBody = function ModalBody(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'modal-body'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ModalBody.propTypes = propTypes$42;
ModalBody.defaultProps = defaultProps$41;
var propTypes$43 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$42 = {
    tag: 'div'
};
var ModalFooter = function ModalFooter(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'modal-footer'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ModalFooter.propTypes = propTypes$43;
ModalFooter.defaultProps = defaultProps$42;
var propTypes$44 = {
    placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(tetherAttachements),
    target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tether: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    tetherRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    autohide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    delay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({ show: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, hide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number }), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number])
};
var DEFAULT_DELAYS = {
    show: 0,
    hide: 250
};
var defaultProps$43 = {
    isOpen: false,
    placement: 'bottom',
    delay: DEFAULT_DELAYS,
    autohide: true,
    toggle: function toggle() { }
};
var defaultTetherConfig$2 = {
    classPrefix: 'bs-tether',
    classes: {
        element: false,
        enabled: 'show'
    },
    constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
var Tooltip = function (_React$Component) {
    inherits(Tooltip, _React$Component);
    function Tooltip(props) {
        classCallCheck(this, Tooltip);
        var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
        _this.addTargetEvents = _this.addTargetEvents.bind(_this);
        _this.getTarget = _this.getTarget.bind(_this);
        _this.getTetherConfig = _this.getTetherConfig.bind(_this);
        _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
        _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        _this.onMouseOverTooltip = _this.onMouseOverTooltip.bind(_this);
        _this.onMouseLeaveTooltip = _this.onMouseLeaveTooltip.bind(_this);
        _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_this);
        _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_this);
        _this.show = _this.show.bind(_this);
        _this.hide = _this.hide.bind(_this);
        return _this;
    }
    createClass(Tooltip, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this._target = this.getTarget();
                this.addTargetEvents();
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.removeTargetEvents();
            }
        }, {
            key: 'onMouseOverTooltip',
            value: function onMouseOverTooltip() {
                if (this._hideTimeout) {
                    this.clearHideTimeout();
                }
                this._showTimeout = setTimeout(this.show, this.getDelay('show'));
            }
        }, {
            key: 'onMouseLeaveTooltip',
            value: function onMouseLeaveTooltip() {
                if (this._showTimeout) {
                    this.clearShowTimeout();
                }
                this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
            }
        }, {
            key: 'onMouseOverTooltipContent',
            value: function onMouseOverTooltipContent() {
                if (this.props.autohide) {
                    return;
                }
                if (this._hideTimeout) {
                    this.clearHideTimeout();
                }
            }
        }, {
            key: 'onMouseLeaveTooltipContent',
            value: function onMouseLeaveTooltipContent() {
                if (this.props.autohide) {
                    return;
                }
                if (this._showTimeout) {
                    this.clearShowTimeout();
                }
                this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
            }
        }, {
            key: 'getDelay',
            value: function getDelay(key) {
                var delay = this.props.delay;
                if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
                    return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
                }
                return delay;
            }
        }, {
            key: 'getTarget',
            value: function getTarget() {
                var target = this.props.target;
                if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
                    return target;
                }
                return document.getElementById(target);
            }
        }, {
            key: 'getTetherConfig',
            value: function getTetherConfig() {
                var attachments = getTetherAttachments(this.props.placement);
                return _extends({}, defaultTetherConfig$2, attachments, {
                    target: this.getTarget
                }, this.props.tether);
            }
        }, {
            key: 'show',
            value: function show() {
                if (!this.props.isOpen) {
                    this.clearShowTimeout();
                    this.toggle();
                }
            }
        }, {
            key: 'hide',
            value: function hide() {
                if (this.props.isOpen) {
                    this.clearHideTimeout();
                    this.toggle();
                }
            }
        }, {
            key: 'clearShowTimeout',
            value: function clearShowTimeout() {
                clearTimeout(this._showTimeout);
                this._showTimeout = undefined;
            }
        }, {
            key: 'clearHideTimeout',
            value: function clearHideTimeout() {
                clearTimeout(this._hideTimeout);
                this._hideTimeout = undefined;
            }
        }, {
            key: 'handleDocumentClick',
            value: function handleDocumentClick(e) {
                if (e.target === this._target || this._target.contains(e.target)) {
                    if (this._hideTimeout) {
                        this.clearHideTimeout();
                    }
                    if (!this.props.isOpen) {
                        this.toggle();
                    }
                }
            }
        }, {
            key: 'addTargetEvents',
            value: function addTargetEvents() {
                this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
                this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
                document.addEventListener('click', this.handleDocumentClick, true);
            }
        }, {
            key: 'removeTargetEvents',
            value: function removeTargetEvents() {
                this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
                this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
                document.removeEventListener('click', this.handleDocumentClick, true);
            }
        }, {
            key: 'toggle',
            value: function toggle(e) {
                if (this.props.disabled) {
                    return e && e.preventDefault();
                }
                return this.props.toggle();
            }
        }, {
            key: 'render',
            value: function render() {
                if (!this.props.isOpen) {
                    return null;
                }
                var attributes = omit(this.props, Object.keys(propTypes$44));
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tooltip-inner', this.props.className), this.props.cssModule);
                var tetherConfig = this.getTetherConfig();
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TetherContent, {
                    className: 'tooltip',
                    tether: tetherConfig,
                    tetherRef: this.props.tetherRef,
                    isOpen: this.props.isOpen,
                    toggle: this.toggle
                }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({}, attributes, {
                    className: classes,
                    onMouseOver: this.onMouseOverTooltipContent,
                    onMouseLeave: this.onMouseLeaveTooltipContent
                })));
            }
        }]);
    return Tooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
Tooltip.propTypes = propTypes$44;
Tooltip.defaultProps = defaultProps$43;
var propTypes$45 = {
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    bordered: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    striped: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    inverse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    hover: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    reflow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    responsive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    responsiveTag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};
var defaultProps$44 = {
    tag: 'table',
    responsiveTag: 'div'
};
var Table = function Table(props) {
    var className = props.className, cssModule = props.cssModule, size = props.size, bordered = props.bordered, striped = props.striped, inverse = props.inverse, hover = props.hover, reflow = props.reflow, responsive = props.responsive, Tag = props.tag, ResponsiveTag = props.responsiveTag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'bordered', 'striped', 'inverse', 'hover', 'reflow', 'responsive', 'tag', 'responsiveTag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, striped ? 'table-striped' : false, inverse ? 'table-inverse' : false, hover ? 'table-hover' : false, reflow ? 'table-reflow' : false), cssModule);
    var table = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
    if (responsive) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ResponsiveTag, { className: 'table-responsive' }, table);
    }
    return table;
};
Table.propTypes = propTypes$45;
Table.defaultProps = defaultProps$44;
var propTypes$46 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    flush: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$45 = {
    tag: 'ul'
};
var ListGroup = function ListGroup(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, flush = props.flush, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'flush']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ListGroup.propTypes = propTypes$46;
ListGroup.defaultProps = defaultProps$45;
var propTypes$47 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    inline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    getRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$46 = {
    tag: 'form'
};
var Form = function Form(props) {
    var className = props.className, cssModule = props.cssModule, inline = props.inline, Tag = props.tag, getRef = props.getRef, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'tag', 'getRef']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, inline ? 'form-inline' : false), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { ref: getRef, className: classes }));
};
Form.propTypes = propTypes$47;
Form.defaultProps = defaultProps$46;
var propTypes$48 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$47 = {
    tag: 'div'
};
var FormFeedback = function FormFeedback(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'form-control-feedback'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
FormFeedback.propTypes = propTypes$48;
FormFeedback.defaultProps = defaultProps$47;
var propTypes$49 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    row: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    check: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$48 = {
    tag: 'div'
};
var FormGroup = function FormGroup(props) {
    var className = props.className, cssModule = props.cssModule, row = props.row, disabled = props.disabled, color = props.color, check = props.check, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'row', 'disabled', 'color', 'check', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, color ? 'has-' + color : false, row ? 'row' : false, check ? 'form-check' : 'form-group', check && disabled ? 'disabled' : false), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
FormGroup.propTypes = propTypes$49;
FormGroup.defaultProps = defaultProps$48;
var propTypes$50 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    inline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$49 = {
    tag: 'small'
};
var FormText = function FormText(props) {
    var className = props.className, cssModule = props.cssModule, inline = props.inline, color = props.color, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'color', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
FormText.propTypes = propTypes$50;
FormText.defaultProps = defaultProps$49;
/* eslint react/prefer-stateless-function: 0 */
var propTypes$51 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    getRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    static: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    addon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$50 = {
    tag: 'p',
    type: 'text'
};
var Input = function (_React$Component) {
    inherits(Input, _React$Component);
    function Input() {
        classCallCheck(this, Input);
        return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }
    createClass(Input, [{
            key: 'render',
            value: function render() {
                var _props = this.props, className = _props.className, cssModule = _props.cssModule, type = _props.type, size = _props.size, state = _props.state, tag = _props.tag, addon = _props.addon, staticInput = _props.static, getRef = _props.getRef, attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'size', 'state', 'tag', 'addon', 'static', 'getRef']);
                var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
                var fileInput = type === 'file';
                var textareaInput = type === 'textarea';
                var selectInput = type === 'select';
                var Tag = selectInput || textareaInput ? type : 'input';
                var formControlClass = 'form-control';
                if (staticInput) {
                    formControlClass = formControlClass + '-static';
                    Tag = tag;
                }
                else if (fileInput) {
                    formControlClass = formControlClass + '-file';
                }
                else if (checkInput) {
                    if (addon) {
                        formControlClass = null;
                    }
                    else {
                        formControlClass = 'form-check-input';
                    }
                }
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, state ? 'form-control-' + state : false, size ? 'form-control-' + size : false, formControlClass), cssModule);
                if (Tag === 'input') {
                    attributes.type = type;
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { ref: getRef, className: classes }));
            }
        }]);
    return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
Input.propTypes = propTypes$51;
Input.defaultProps = defaultProps$50;
var propTypes$52 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$51 = {
    tag: 'div'
};
var InputGroup = function InputGroup(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, size = props.size, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'size']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'input-group', size ? 'input-group-' + size : null), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
InputGroup.propTypes = propTypes$52;
InputGroup.defaultProps = defaultProps$51;
var propTypes$53 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$52 = {
    tag: 'div'
};
var InputGroupAddon = function InputGroupAddon(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'input-group-addon'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
InputGroupAddon.propTypes = propTypes$53;
InputGroupAddon.defaultProps = defaultProps$52;
var propTypes$54 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    groupClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    groupAttributes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$53 = {
    tag: 'div'
};
var InputGroupButton = function InputGroupButton(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, children = props.children, groupClassName = props.groupClassName, groupAttributes = props.groupAttributes, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'children', 'groupClassName', 'groupAttributes']);
    if (typeof children === 'string') {
        var groupClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(groupClassName, 'input-group-btn'), cssModule);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, groupAttributes, { className: groupClasses }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Button, _extends({}, attributes, { className: className, children: children })));
    }
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'input-group-btn'), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes, children: children }));
};
InputGroupButton.propTypes = propTypes$54;
InputGroupButton.defaultProps = defaultProps$53;
var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp$1 = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]);
var columnProps$1 = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
        size: stringOrNumberProp$1,
        push: stringOrNumberProp$1,
        pull: stringOrNumberProp$1,
        offset: stringOrNumberProp$1
    })]);
var propTypes$55 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    hidden: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    check: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    inline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    for: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    xs: columnProps$1,
    sm: columnProps$1,
    md: columnProps$1,
    lg: columnProps$1,
    xl: columnProps$1
};
var defaultProps$54 = {
    tag: 'label'
};
var Label = function Label(props) {
    var className = props.className, cssModule = props.cssModule, hidden = props.hidden, Tag = props.tag, check = props.check, inline = props.inline, disabled = props.disabled, size = props.size, htmlFor = props.for, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'tag', 'check', 'inline', 'disabled', 'size', 'for']);
    var colClasses = [];
    colSizes.forEach(function (colSize) {
        var columnProp = props[colSize];
        delete attributes[colSize];
        if (columnProp && columnProp.size) {
            var _classNames;
            colClasses.push(mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()((_classNames = {}, defineProperty(_classNames, 'col-' + colSize + '-' + columnProp.size, columnProp.size), defineProperty(_classNames, 'push-' + colSize + '-' + columnProp.push, columnProp.push), defineProperty(_classNames, 'pull-' + colSize + '-' + columnProp.pull, columnProp.pull), defineProperty(_classNames, 'offset-' + colSize + '-' + columnProp.offset, columnProp.offset), _classNames))), cssModule);
        }
        else if (columnProp) {
            colClasses.push('col-' + colSize + '-' + columnProp);
        }
    });
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, hidden ? 'sr-only' : false, check ? 'form-check-' + (inline ? 'inline' : 'label') : false, check && inline && disabled ? 'disabled' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false, !check && !colClasses.length ? 'form-control-label' : false), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
};
Label.propTypes = propTypes$55;
Label.defaultProps = defaultProps$54;
var propTypes$56 = {
    body: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    heading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    left: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    list: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    middle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    object: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
var Media = function Media(props) {
    var body = props.body, bottom = props.bottom, className = props.className, cssModule = props.cssModule, heading = props.heading, left = props.left, list = props.list, middle = props.middle, object = props.object, right = props.right, tag = props.tag, top = props.top, attributes = objectWithoutProperties(props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);
    var defaultTag = void 0;
    if (heading) {
        defaultTag = 'h4';
    }
    else if (left || right) {
        defaultTag = 'a';
    }
    else if (object) {
        defaultTag = 'img';
    }
    else if (list) {
        defaultTag = 'ul';
    }
    else {
        defaultTag = 'div';
    }
    var Tag = tag || defaultTag;
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, {
        'media-body': body,
        'media-heading': heading,
        'media-left': left,
        'media-right': right,
        'media-top': top,
        'media-bottom': bottom,
        'media-middle': middle,
        'media-object': object,
        'media-list': list,
        media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
    }), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Media.propTypes = propTypes$56;
var propTypes$57 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};
var defaultProps$55 = {
    tag: 'ul'
};
var Pagination = function Pagination(props) {
    var className = props.className, cssModule = props.cssModule, size = props.size, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Pagination.propTypes = propTypes$57;
Pagination.defaultProps = defaultProps$55;
var propTypes$58 = {
    active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};
var defaultProps$56 = {
    tag: 'li'
};
var PaginationItem = function PaginationItem(props) {
    var active = props.active, className = props.className, cssModule = props.cssModule, disabled = props.disabled, Tag = props.tag, attributes = objectWithoutProperties(props, ['active', 'className', 'cssModule', 'disabled', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'page-item', {
        active: active,
        disabled: disabled
    }), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
PaginationItem.propTypes = propTypes$58;
PaginationItem.defaultProps = defaultProps$56;
var propTypes$59 = {
    'aria-label': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    next: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    previous: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};
var defaultProps$57 = {
    tag: 'a'
};
var PaginationLink = function PaginationLink(props) {
    var className = props.className, cssModule = props.cssModule, next = props.next, previous = props.previous, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'next', 'previous', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'page-link'), cssModule);
    var defaultAriaLabel = void 0;
    if (previous) {
        defaultAriaLabel = 'Previous';
    }
    else if (next) {
        defaultAriaLabel = 'Next';
    }
    var ariaLabel = props['aria-label'] || defaultAriaLabel;
    var defaultCaret = void 0;
    if (previous) {
        defaultCaret = '\xAB';
    }
    else if (next) {
        defaultCaret = '\xBB';
    }
    var children = props.children;
    if (previous || next) {
        children = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                'aria-hidden': 'true',
                key: 'caret'
            }, children || defaultCaret), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                className: 'sr-only',
                key: 'sr'
            }, ariaLabel)];
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, {
        className: classes,
        'aria-label': ariaLabel
    }), children);
};
PaginationLink.propTypes = propTypes$59;
PaginationLink.defaultProps = defaultProps$57;
var propTypes$60 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    activeTab: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$58 = {
    tag: 'div'
};
var childContextTypes$1 = {
    activeTabId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
var TabContent = function (_Component) {
    inherits(TabContent, _Component);
    function TabContent(props) {
        classCallCheck(this, TabContent);
        var _this = possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props));
        _this.state = {
            activeTab: _this.props.activeTab
        };
        return _this;
    }
    createClass(TabContent, [{
            key: 'getChildContext',
            value: function getChildContext() {
                return {
                    activeTabId: this.state.activeTab
                };
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (this.state.activeTab !== nextProps.activeTab) {
                    this.setState({
                        activeTab: nextProps.activeTab
                    });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props, className = _props.className, cssModule = _props.cssModule, Tag = _props.tag;
                var attributes = omit(this.props, Object.keys(propTypes$60));
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tab-content', className), cssModule);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
            }
        }]);
    return TabContent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
TabContent.propTypes = propTypes$60;
TabContent.defaultProps = defaultProps$58;
TabContent.childContextTypes = childContextTypes$1;
var propTypes$61 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    tabId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
var defaultProps$59 = {
    tag: 'div'
};
var contextTypes$3 = {
    activeTabId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
function TabPane(props, context) {
    var className = props.className, cssModule = props.cssModule, tabId = props.tabId, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabId', 'tag']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tab-pane', className, { active: tabId === context.activeTabId }), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
}
TabPane.propTypes = propTypes$61;
TabPane.defaultProps = defaultProps$59;
TabPane.contextTypes = contextTypes$3;
var propTypes$62 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    fluid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
var defaultProps$60 = {
    tag: 'div'
};
var Jumbotron = function Jumbotron(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, fluid = props.fluid, attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'fluid']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
Jumbotron.propTypes = propTypes$62;
Jumbotron.defaultProps = defaultProps$60;
var FirstChild = function FirstChild(_ref) {
    var children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(children)[0] || null;
};
var propTypes$63 = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    closeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    transitionAppearTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    transitionEnterTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    transitionLeaveTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
var defaultProps$61 = {
    color: 'success',
    isOpen: true,
    tag: 'div',
    transitionAppearTimeout: 150,
    transitionEnterTimeout: 150,
    transitionLeaveTimeout: 150
};
var Alert = function Alert(props) {
    var className = props.className, closeClassName = props.closeClassName, cssModule = props.cssModule, Tag = props.tag, color = props.color, isOpen = props.isOpen, toggle = props.toggle, children = props.children, transitionAppearTimeout = props.transitionAppearTimeout, transitionEnterTimeout = props.transitionEnterTimeout, transitionLeaveTimeout = props.transitionLeaveTimeout, attributes = objectWithoutProperties(props, ['className', 'closeClassName', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transitionAppearTimeout', 'transitionEnterTimeout', 'transitionLeaveTimeout']);
    var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);
    var closeClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('close', closeClassName), cssModule);
    var alert = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes, role: 'alert' }), toggle ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { type: 'button', className: closeClasses, 'aria-label': 'Close', onClick: toggle }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { 'aria-hidden': 'true' }, '\xD7')) : null, children);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_transition_group__["CSSTransitionGroup"], {
        component: FirstChild,
        transitionName: {
            appear: 'fade',
            appearActive: 'show',
            enter: 'fade',
            enterActive: 'show',
            leave: 'fade',
            leaveActive: 'out'
        },
        transitionAppear: transitionAppearTimeout > 0,
        transitionAppearTimeout: transitionAppearTimeout,
        transitionEnter: transitionEnterTimeout > 0,
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeave: transitionLeaveTimeout > 0,
        transitionLeaveTimeout: transitionLeaveTimeout
    }, isOpen ? alert : null);
};
Alert.propTypes = propTypes$63;
Alert.defaultProps = defaultProps$61;
var SHOW = 'SHOW';
var SHOWN = 'SHOWN';
var HIDE = 'HIDE';
var HIDDEN = 'HIDDEN';
var propTypes$64 = {
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    navbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    delay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({ show: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, hide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number }), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
    onOpened: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onClosed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
var DEFAULT_DELAYS$1 = {
    show: 350,
    hide: 350
};
var defaultProps$62 = {
    isOpen: false,
    tag: 'div',
    delay: DEFAULT_DELAYS$1,
    onOpened: function onOpened() { },
    onClosed: function onClosed() { }
};
var Collapse = function (_Component) {
    inherits(Collapse, _Component);
    function Collapse(props) {
        classCallCheck(this, Collapse);
        var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));
        _this.state = {
            collapse: props.isOpen ? SHOWN : HIDDEN,
            height: null
        };
        _this.element = null;
        return _this;
    }
    createClass(Collapse, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                var _this2 = this;
                var willOpen = nextProps.isOpen;
                var collapse = this.state.collapse;
                if (willOpen && collapse === HIDDEN) {
                    // will open
                    this.setState({ collapse: SHOW }, function () {
                        // the height transition will work after class "collapsing" applied
                        _this2.setState({ height: _this2.getHeight() });
                        _this2.transitionTag = setTimeout(function () {
                            _this2.setState({
                                collapse: SHOWN,
                                height: null
                            });
                        }, _this2.getDelay('show'));
                    });
                }
                else if (!willOpen && collapse === SHOWN) {
                    // will hide
                    this.setState({ height: this.getHeight() }, function () {
                        _this2.setState({
                            collapse: HIDE,
                            height: _this2.getHeight()
                        }, function () {
                            _this2.setState({ height: 0 });
                        });
                    });
                    this.transitionTag = setTimeout(function () {
                        _this2.setState({
                            collapse: HIDDEN,
                            height: null
                        });
                    }, this.getDelay('hide'));
                }
                // else: do nothing.
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps, prevState) {
                if (this.state.collapse === SHOWN && prevState && prevState.collapse !== SHOWN) {
                    this.props.onOpened();
                }
                if (this.state.collapse === HIDDEN && prevState && prevState.collapse !== HIDDEN) {
                    this.props.onClosed();
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                clearTimeout(this.transitionTag);
            }
        }, {
            key: 'getDelay',
            value: function getDelay(key) {
                var delay = this.props.delay;
                if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
                    return isNaN(delay[key]) ? DEFAULT_DELAYS$1[key] : delay[key];
                }
                return delay;
            }
        }, {
            key: 'getHeight',
            value: function getHeight() {
                return this.element.scrollHeight;
            }
        }, {
            key: 'render',
            value: function render() {
                var _this3 = this;
                var _omit = omit(this.props, ['isOpen', 'delay', 'onOpened', 'onClosed']), navbar = _omit.navbar, className = _omit.className, cssModule = _omit.cssModule, Tag = _omit.tag, attributes = objectWithoutProperties(_omit, ['navbar', 'className', 'cssModule', 'tag']);
                var _state = this.state, collapse = _state.collapse, height = _state.height;
                var collapseClass = void 0;
                switch (collapse) {
                    case SHOW:
                        collapseClass = 'collapsing';
                        break;
                    case SHOWN:
                        collapseClass = 'collapse show';
                        break;
                    case HIDE:
                        collapseClass = 'collapsing';
                        break;
                    case HIDDEN:
                        collapseClass = 'collapse';
                        break;
                    default:
                        // HIDDEN
                        collapseClass = 'collapse';
                }
                var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
                var style = height === null ? null : { height: height };
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, {
                    style: _extends({}, attributes.style, style),
                    className: classes,
                    ref: function ref(c) {
                        _this3.element = c;
                    }
                }));
            }
        }]);
    return Collapse;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Collapse.propTypes = propTypes$64;
Collapse.defaultProps = defaultProps$62;
var propTypes$65 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    action: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
var defaultProps$63 = {
    tag: 'li'
};
var handleDisabledOnClick = function handleDisabledOnClick(e) {
    e.preventDefault();
};
var ListGroupItem = function ListGroupItem(props) {
    var className = props.className, Tag = props.tag, active = props.active, disabled = props.disabled, action = props.action, color = props.color, attributes = objectWithoutProperties(props, ['className', 'tag', 'active', 'disabled', 'action', 'color']);
    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item');
    // Prevent click event when disabled.
    if (disabled) {
        attributes.onClick = handleDisabledOnClick;
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ListGroupItem.propTypes = propTypes$65;
ListGroupItem.defaultProps = defaultProps$63;
var propTypes$66 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
var defaultProps$64 = {
    tag: 'h5'
};
var ListGroupItemHeading = function ListGroupItemHeading(props) {
    var className = props.className, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'tag']);
    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'list-group-item-heading');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ListGroupItemHeading.propTypes = propTypes$66;
ListGroupItemHeading.defaultProps = defaultProps$64;
var propTypes$67 = {
    tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
var defaultProps$65 = {
    tag: 'p'
};
var ListGroupItemText = function ListGroupItemText(props) {
    var className = props.className, Tag = props.tag, attributes = objectWithoutProperties(props, ['className', 'tag']);
    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'list-group-item-text');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ListGroupItemText.propTypes = propTypes$67;
ListGroupItemText.defaultProps = defaultProps$65;
var Component$1 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component;
var components = {
    UncontrolledAlert: Alert,
    UncontrolledButtonDropdown: ButtonDropdown,
    UncontrolledDropdown: Dropdown,
    UncontrolledNavDropdown: NavDropdown,
    UncontrolledTooltip: Tooltip
};
Object.keys(components).forEach(function (key) {
    var Tag = components[key];
    var defaultValue = Tag === Alert;
    var Uncontrolled = function (_Component) {
        inherits(Uncontrolled, _Component);
        function Uncontrolled(props) {
            classCallCheck(this, Uncontrolled);
            var _this = possibleConstructorReturn(this, (Uncontrolled.__proto__ || Object.getPrototypeOf(Uncontrolled)).call(this, props));
            _this.state = { isOpen: defaultValue };
            _this.toggle = _this.toggle.bind(_this);
            return _this;
        }
        createClass(Uncontrolled, [{
                key: 'toggle',
                value: function toggle() {
                    this.setState({ isOpen: !this.state.isOpen });
                }
            }, {
                key: 'render',
                value: function render() {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
                }
            }]);
        return Uncontrolled;
    }(Component$1);
    Uncontrolled.displayName = key;
    components[key] = Uncontrolled;
});
var UncontrolledAlert = components.UncontrolledAlert;
var UncontrolledButtonDropdown = components.UncontrolledButtonDropdown;
var UncontrolledDropdown = components.UncontrolledDropdown;
var UncontrolledNavDropdown = components.UncontrolledNavDropdown;
var UncontrolledTooltip = components.UncontrolledTooltip;



/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
    }
    /* eslint-enable no-console */
    try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
        /* eslint-disable no-empty */
    }
    catch (e) { }
    /* eslint-enable no-empty */
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(93);



/** `Object#toString` result references. */
var objectTag = '[object Object]';
/** Used for built-in method references. */
var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
        return false;
    }
    var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
}
/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var g;
// This works in non-strict mode
g = (function () {
    return this;
})();
try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
}
catch (e) {
    // This works if the window reference is available
    if (typeof window === "object")
        g = window;
}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports = g;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyFunction = __webpack_require__(10);
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var warning = emptyFunction;
if (process.env.NODE_ENV !== 'production') {
    var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        }
        catch (x) { }
    };
    warning = function warning(condition, format) {
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (format.indexOf('Failed Composite propType: ') === 0) {
            return; // Ignore CompositeComponent proptype check.
        }
        if (!condition) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }
            printWarning.apply(undefined, [format].concat(args));
        }
    };
}
module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _CSSTransitionGroup = __webpack_require__(64);
var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);
var _TransitionGroup = __webpack_require__(20);
var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
module.exports = {
    TransitionGroup: _TransitionGroup2.default,
    CSSTransitionGroup: _CSSTransitionGroup2.default
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _chainFunction = __webpack_require__(65);
var _chainFunction2 = _interopRequireDefault(_chainFunction);
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _warning = __webpack_require__(66);
var _warning2 = _interopRequireDefault(_warning);
var _ChildMapping = __webpack_require__(67);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propTypes = {
    component: _propTypes2.default.any,
    childFactory: _propTypes2.default.func,
    children: _propTypes2.default.node
};
var defaultProps = {
    component: 'span',
    childFactory: function childFactory(child) {
        return child;
    }
};
var TransitionGroup = function (_React$Component) {
    _inherits(TransitionGroup, _React$Component);
    function TransitionGroup(props, context) {
        _classCallCheck(this, TransitionGroup);
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
        _this.performAppear = function (key, component) {
            _this.currentlyTransitioningKeys[key] = true;
            if (component.componentWillAppear) {
                component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
            }
            else {
                _this._handleDoneAppearing(key, component);
            }
        };
        _this._handleDoneAppearing = function (key, component) {
            if (component.componentDidAppear) {
                component.componentDidAppear();
            }
            delete _this.currentlyTransitioningKeys[key];
            var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
            if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
                // This was removed before it had fully appeared. Remove it.
                _this.performLeave(key, component);
            }
        };
        _this.performEnter = function (key, component) {
            _this.currentlyTransitioningKeys[key] = true;
            if (component.componentWillEnter) {
                component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
            }
            else {
                _this._handleDoneEntering(key, component);
            }
        };
        _this._handleDoneEntering = function (key, component) {
            if (component.componentDidEnter) {
                component.componentDidEnter();
            }
            delete _this.currentlyTransitioningKeys[key];
            var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
            if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
                // This was removed before it had fully entered. Remove it.
                _this.performLeave(key, component);
            }
        };
        _this.performLeave = function (key, component) {
            _this.currentlyTransitioningKeys[key] = true;
            if (component.componentWillLeave) {
                component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
            }
            else {
                // Note that this is somewhat dangerous b/c it calls setState()
                // again, effectively mutating the component before all the work
                // is done.
                _this._handleDoneLeaving(key, component);
            }
        };
        _this._handleDoneLeaving = function (key, component) {
            if (component.componentDidLeave) {
                component.componentDidLeave();
            }
            delete _this.currentlyTransitioningKeys[key];
            var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
            if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
                // This entered again before it fully left. Add it again.
                _this.keysToEnter.push(key);
            }
            else {
                _this.setState(function (state) {
                    var newChildren = _extends({}, state.children);
                    delete newChildren[key];
                    return { children: newChildren };
                });
            }
        };
        _this.childRefs = Object.create(null);
        _this.state = {
            children: (0, _ChildMapping.getChildMapping)(props.children)
        };
        return _this;
    }
    TransitionGroup.prototype.componentWillMount = function componentWillMount() {
        this.currentlyTransitioningKeys = {};
        this.keysToEnter = [];
        this.keysToLeave = [];
    };
    TransitionGroup.prototype.componentDidMount = function componentDidMount() {
        var initialChildMapping = this.state.children;
        for (var key in initialChildMapping) {
            if (initialChildMapping[key]) {
                this.performAppear(key, this.childRefs[key]);
            }
        }
    };
    TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
        var prevChildMapping = this.state.children;
        this.setState({
            children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
        });
        for (var key in nextChildMapping) {
            var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
            if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
                this.keysToEnter.push(key);
            }
        }
        for (var _key in prevChildMapping) {
            var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
            if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
                this.keysToLeave.push(_key);
            }
        }
        // If we want to someday check for reordering, we could do it here.
    };
    TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
        var _this2 = this;
        var keysToEnter = this.keysToEnter;
        this.keysToEnter = [];
        keysToEnter.forEach(function (key) {
            return _this2.performEnter(key, _this2.childRefs[key]);
        });
        var keysToLeave = this.keysToLeave;
        this.keysToLeave = [];
        keysToLeave.forEach(function (key) {
            return _this2.performLeave(key, _this2.childRefs[key]);
        });
    };
    TransitionGroup.prototype.render = function render() {
        var _this3 = this;
        // TODO: we could get rid of the need for the wrapper node
        // by cloning a single child
        var childrenToRender = [];
        var _loop = function _loop(key) {
            var child = _this3.state.children[key];
            if (child) {
                var isCallbackRef = typeof child.ref !== 'string';
                var factoryChild = _this3.props.childFactory(child);
                var ref = function ref(r) {
                    _this3.childRefs[key] = r;
                };
                process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;
                // Always chaining the refs leads to problems when the childFactory
                // wraps the child. The child ref callback gets called twice with the
                // wrapper and the child. So we only need to chain the ref if the
                // factoryChild is not different from child.
                if (factoryChild === child && isCallbackRef) {
                    ref = (0, _chainFunction2.default)(child.ref, ref);
                }
                // You may need to apply reactive updates to a child as it is leaving.
                // The normal React way to do it won't work since the child will have
                // already been removed. In case you need this behavior you can provide
                // a childFactory function to wrap every child, even the ones that are
                // leaving.
                childrenToRender.push(_react2.default.cloneElement(factoryChild, {
                    key: key,
                    ref: ref
                }));
            }
        };
        for (var key in this.state.children) {
            _loop(key);
        }
        // Do not forward TransitionGroup props to primitive DOM nodes
        var props = _extends({}, this.props);
        delete props.transitionLeave;
        delete props.transitionName;
        delete props.transitionAppear;
        delete props.transitionEnter;
        delete props.childFactory;
        delete props.transitionLeaveTimeout;
        delete props.transitionEnterTimeout;
        delete props.transitionAppearTimeout;
        delete props.component;
        return _react2.default.createElement(this.props.component, props, childrenToRender);
    };
    return TransitionGroup;
}(_react2.default.Component);
TransitionGroup.displayName = 'TransitionGroup';
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;
exports.default = TransitionGroup;
module.exports = exports['default'];

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;
    return function (props) {
        // If the transition is enabled
        if (props[enabledPropName]) {
            // If no timeout duration is provided
            if (props[timeoutPropName] == null) {
                return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
                // If the duration isn't a number
            }
            else if (typeof props[timeoutPropName] !== 'number') {
                return new Error(timeoutPropName + ' must be a number (in milliseconds)');
            }
        }
        return null;
    };
}
var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
        enter: _propTypes2.default.string,
        leave: _propTypes2.default.string,
        active: _propTypes2.default.string
    }), _propTypes2.default.shape({
        enter: _propTypes2.default.string,
        enterActive: _propTypes2.default.string,
        leave: _propTypes2.default.string,
        leaveActive: _propTypes2.default.string,
        appear: _propTypes2.default.string,
        appearActive: _propTypes2.default.string
    })]);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
        descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
} } return function (Constructor, protoProps, staticProps) { if (protoProps)
    defineProperties(Constructor.prototype, protoProps); if (staticProps)
    defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames = __webpack_require__(5);
var _classnames2 = _interopRequireDefault(_classnames);
var _utils = __webpack_require__(6);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) {
    if (keys.indexOf(i) >= 0)
        continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
    target[i] = obj[i];
} return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propTypes = {
    active: _propTypes2.default.bool,
    block: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    outline: _propTypes2.default.bool,
    tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    getRef: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    onClick: _propTypes2.default.func,
    size: _propTypes2.default.string,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    cssModule: _propTypes2.default.object
};
var defaultProps = {
    color: 'secondary',
    tag: 'button'
};
var Button = function (_React$Component) {
    _inherits(Button, _React$Component);
    function Button(props) {
        _classCallCheck(this, Button);
        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    _createClass(Button, [{
            key: 'onClick',
            value: function onClick(e) {
                if (this.props.disabled) {
                    e.preventDefault();
                    return;
                }
                if (this.props.onClick) {
                    this.props.onClick(e);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props, active = _props.active, block = _props.block, className = _props.className, cssModule = _props.cssModule, color = _props.color, outline = _props.outline, size = _props.size, Tag = _props.tag, getRef = _props.getRef, attributes = _objectWithoutProperties(_props, ['active', 'block', 'className', 'cssModule', 'color', 'outline', 'size', 'tag', 'getRef']);
                var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'btn', 'btn' + (outline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);
                if (attributes.href && Tag === 'button') {
                    Tag = 'a';
                }
                return _react2.default.createElement(Tag, _extends({
                    type: Tag === 'button' && attributes.onClick ? 'button' : undefined
                }, attributes, {
                    className: classes,
                    ref: getRef,
                    onClick: this.onClick
                }));
            }
        }]);
    return Button;
}(_react2.default.Component);
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
exports.default = Button;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
        descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
} } return function (Constructor, protoProps, staticProps) { if (protoProps)
    defineProperties(Constructor.prototype, protoProps); if (staticProps)
    defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactDom = __webpack_require__(14);
var _reactDom2 = _interopRequireDefault(_reactDom);
var _classnames = __webpack_require__(5);
var _classnames2 = _interopRequireDefault(_classnames);
var _reactTransitionGroup = __webpack_require__(19);
var _Fade = __webpack_require__(75);
var _Fade2 = _interopRequireDefault(_Fade);
var _utils = __webpack_require__(6);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
}
else {
    obj[key] = value;
} return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propTypes = {
    isOpen: _propTypes2.default.bool,
    autoFocus: _propTypes2.default.bool,
    size: _propTypes2.default.string,
    toggle: _propTypes2.default.func,
    keyboard: _propTypes2.default.bool,
    backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),
    onEnter: _propTypes2.default.func,
    onExit: _propTypes2.default.func,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    wrapClassName: _propTypes2.default.string,
    modalClassName: _propTypes2.default.string,
    backdropClassName: _propTypes2.default.string,
    contentClassName: _propTypes2.default.string,
    fade: _propTypes2.default.bool,
    cssModule: _propTypes2.default.object,
    zIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    backdropTransitionTimeout: _propTypes2.default.number,
    backdropTransitionAppearTimeout: _propTypes2.default.number,
    backdropTransitionEnterTimeout: _propTypes2.default.number,
    backdropTransitionLeaveTimeout: _propTypes2.default.number,
    modalTransitionTimeout: _propTypes2.default.number,
    modalTransitionAppearTimeout: _propTypes2.default.number,
    modalTransitionEnterTimeout: _propTypes2.default.number,
    modalTransitionLeaveTimeout: _propTypes2.default.number
};
var propsToOmit = Object.keys(propTypes);
var defaultProps = {
    isOpen: false,
    autoFocus: true,
    backdrop: true,
    keyboard: true,
    zIndex: 1050,
    fade: true,
    modalTransitionTimeout: 300,
    backdropTransitionTimeout: 150
};
var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);
    function Modal(props) {
        _classCallCheck(this, Modal);
        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
        _this.originalBodyPadding = null;
        _this.isBodyOverflowing = false;
        _this.togglePortal = _this.togglePortal.bind(_this);
        _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
        _this.handleEscape = _this.handleEscape.bind(_this);
        _this.destroy = _this.destroy.bind(_this);
        _this.onEnter = _this.onEnter.bind(_this);
        _this.onExit = _this.onExit.bind(_this);
        return _this;
    }
    _createClass(Modal, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                if (this.props.isOpen) {
                    this.togglePortal();
                }
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                if (this.props.isOpen !== prevProps.isOpen) {
                    // handle portal events/dom updates
                    this.togglePortal();
                }
                else if (this._element) {
                    // rerender portal
                    this.renderIntoSubtree();
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.onExit();
            }
        }, {
            key: 'onEnter',
            value: function onEnter() {
                if (this.props.onEnter) {
                    this.props.onEnter();
                }
            }
        }, {
            key: 'onExit',
            value: function onExit() {
                this.destroy();
                if (this.props.onExit) {
                    this.props.onExit();
                }
            }
        }, {
            key: 'handleEscape',
            value: function handleEscape(e) {
                if (this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
                    this.props.toggle();
                }
            }
        }, {
            key: 'handleBackdropClick',
            value: function handleBackdropClick(e) {
                if (this.props.backdrop !== true)
                    return;
                var container = this._dialog;
                if (e.target && !container.contains(e.target) && this.props.toggle) {
                    this.props.toggle();
                }
            }
        }, {
            key: 'hasTransition',
            value: function hasTransition() {
                if (this.props.fade === false) {
                    return false;
                }
                return this.props.modalTransitionTimeout > 0;
            }
        }, {
            key: 'togglePortal',
            value: function togglePortal() {
                if (this.props.isOpen) {
                    if (this.props.autoFocus) {
                        this._focus = true;
                    }
                    this.show();
                    if (!this.hasTransition()) {
                        this.onEnter();
                    }
                }
                else {
                    this.hide();
                    if (!this.hasTransition()) {
                        this.onExit();
                    }
                }
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (this._element) {
                    _reactDom2.default.unmountComponentAtNode(this._element);
                    document.body.removeChild(this._element);
                    this._element = null;
                }
                // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
                var classes = document.body.className.replace(/(^| )modal-open( |$)/, ' ');
                document.body.className = (0, _utils.mapToCssModules)((0, _classnames2.default)(classes).trim(), this.props.cssModule);
                (0, _utils.setScrollbarWidth)(this.originalBodyPadding);
            }
        }, {
            key: 'hide',
            value: function hide() {
                this.renderIntoSubtree();
            }
        }, {
            key: 'show',
            value: function show() {
                var classes = document.body.className;
                this._element = document.createElement('div');
                this._element.setAttribute('tabindex', '-1');
                this._element.style.position = 'relative';
                this._element.style.zIndex = this.props.zIndex;
                this.originalBodyPadding = (0, _utils.getOriginalBodyPadding)();
                (0, _utils.conditionallyUpdateScrollbar)();
                document.body.appendChild(this._element);
                document.body.className = (0, _utils.mapToCssModules)((0, _classnames2.default)(classes, 'modal-open'), this.props.cssModule);
                this.renderIntoSubtree();
            }
        }, {
            key: 'renderModalDialog',
            value: function renderModalDialog() {
                var _this2 = this;
                var attributes = (0, _utils.omit)(this.props, propsToOmit);
                return _react2.default.createElement('div', _extends({
                    className: (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-dialog', this.props.className, _defineProperty({}, 'modal-' + this.props.size, this.props.size)), this.props.cssModule),
                    role: 'document',
                    ref: function ref(c) {
                        return _this2._dialog = c;
                    }
                }, attributes), _react2.default.createElement('div', {
                    className: (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-content', this.props.contentClassName), this.props.cssModule)
                }, this.props.children));
            }
        }, {
            key: 'renderIntoSubtree',
            value: function renderIntoSubtree() {
                _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
                // check if modal should receive focus
                if (this._focus) {
                    this._dialog.parentNode.focus();
                    this._focus = false;
                }
            }
        }, {
            key: 'renderChildren',
            value: function renderChildren() {
                var _props = this.props, wrapClassName = _props.wrapClassName, modalClassName = _props.modalClassName, backdropClassName = _props.backdropClassName, cssModule = _props.cssModule, isOpen = _props.isOpen, backdrop = _props.backdrop, modalTransitionTimeout = _props.modalTransitionTimeout, backdropTransitionTimeout = _props.backdropTransitionTimeout;
                var modalAttributes = {
                    onClickCapture: this.handleBackdropClick,
                    onKeyUp: this.handleEscape,
                    style: { display: 'block' },
                    tabIndex: '-1'
                };
                if (this.hasTransition()) {
                    return _react2.default.createElement(_reactTransitionGroup.TransitionGroup, { component: 'div', className: (0, _utils.mapToCssModules)(wrapClassName) }, isOpen && _react2.default.createElement(_Fade2.default, _extends({
                        key: 'modal-dialog',
                        onEnter: this.onEnter,
                        onLeave: this.onExit,
                        transitionAppearTimeout: typeof this.props.modalTransitionAppearTimeout === 'number' ? this.props.modalTransitionAppearTimeout : modalTransitionTimeout,
                        transitionEnterTimeout: typeof this.props.modalTransitionEnterTimeout === 'number' ? this.props.modalTransitionEnterTimeout : modalTransitionTimeout,
                        transitionLeaveTimeout: typeof this.props.modalTransitionLeaveTimeout === 'number' ? this.props.modalTransitionLeaveTimeout : modalTransitionTimeout,
                        cssModule: cssModule,
                        className: (0, _utils.mapToCssModules)((0, _classnames2.default)('modal', modalClassName), cssModule)
                    }, modalAttributes), this.renderModalDialog()), isOpen && backdrop && _react2.default.createElement(_Fade2.default, {
                        key: 'modal-backdrop',
                        transitionAppearTimeout: typeof this.props.backdropTransitionAppearTimeout === 'number' ? this.props.backdropTransitionAppearTimeout : backdropTransitionTimeout,
                        transitionEnterTimeout: typeof this.props.backdropTransitionEnterTimeout === 'number' ? this.props.backdropTransitionEnterTimeout : backdropTransitionTimeout,
                        transitionLeaveTimeout: typeof this.props.backdropTransitionLeaveTimeout === 'number' ? this.props.backdropTransitionLeaveTimeout : backdropTransitionTimeout,
                        cssModule: cssModule,
                        className: (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-backdrop', backdropClassName), cssModule)
                    }));
                }
                return _react2.default.createElement('div', { className: (0, _utils.mapToCssModules)(wrapClassName) }, isOpen && _react2.default.createElement('div', _extends({
                    className: (0, _utils.mapToCssModules)((0, _classnames2.default)('modal', 'show', modalClassName), cssModule)
                }, modalAttributes), this.renderModalDialog()), isOpen && backdrop && _react2.default.createElement('div', {
                    className: (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-backdrop', 'show', backdropClassName), cssModule)
                }));
            }
        }, {
            key: 'render',
            value: function render() {
                return null;
            }
        }]);
    return Modal;
}(_react2.default.Component);
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
exports.default = Modal;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames = __webpack_require__(5);
var _classnames2 = _interopRequireDefault(_classnames);
var _utils = __webpack_require__(6);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) {
    if (keys.indexOf(i) >= 0)
        continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
    target[i] = obj[i];
} return target; }
var propTypes = {
    tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    wrapTag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    toggle: _propTypes2.default.func,
    className: _propTypes2.default.string,
    cssModule: _propTypes2.default.object,
    children: _propTypes2.default.node
};
var defaultProps = {
    tag: 'h4',
    wrapTag: 'div'
};
var ModalHeader = function ModalHeader(props) {
    var closeButton = void 0;
    var className = props.className, cssModule = props.cssModule, children = props.children, toggle = props.toggle, Tag = props.tag, WrapTag = props.wrapTag, attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag']);
    var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'modal-header'), cssModule);
    if (toggle) {
        closeButton = _react2.default.createElement('button', { type: 'button', onClick: toggle, className: 'close', 'aria-label': 'Close' }, _react2.default.createElement('span', { 'aria-hidden': 'true' }, String.fromCharCode(215)));
    }
    return _react2.default.createElement(WrapTag, _extends({}, attributes, { className: classes }), _react2.default.createElement(Tag, { className: (0, _utils.mapToCssModules)('modal-title', cssModule) }, children), closeButton);
};
ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
exports.default = ModalHeader;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames = __webpack_require__(5);
var _classnames2 = _interopRequireDefault(_classnames);
var _utils = __webpack_require__(6);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) {
    if (keys.indexOf(i) >= 0)
        continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
    target[i] = obj[i];
} return target; }
var propTypes = {
    tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    className: _propTypes2.default.string,
    cssModule: _propTypes2.default.object
};
var defaultProps = {
    tag: 'div'
};
var ModalBody = function ModalBody(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'modal-body'), cssModule);
    return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;
exports.default = ModalBody;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* unused harmony reexport createProvider */
/* unused harmony reexport connectAdvanced */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);

var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});
var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(28);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) {
    if (keys.indexOf(i) >= 0)
        continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
    target[i] = obj[i];
} return target; }





var hotReloadingVersion = 0;
var dummyState = {};
function noop() { }
function makeSelectorStateful(sourceSelector, store) {
    // wrap the selector in an object that tracks its results between runs.
    var selector = {
        run: function runComponentSelector(props) {
            try {
                var nextProps = sourceSelector(store.getState(), props);
                if (nextProps !== selector.props || selector.error) {
                    selector.shouldComponentUpdate = true;
                    selector.props = nextProps;
                    selector.error = null;
                }
            }
            catch (error) {
                selector.shouldComponentUpdate = true;
                selector.error = error;
            }
        }
    };
    return selector;
}
function connectAdvanced(
    /*
      selectorFactory is a func that is responsible for returning the selector function used to
      compute new props from state, props, and dispatch. For example:
         export default connectAdvanced((dispatch, options) => (state, props) => ({
          thing: state.things[props.thingId],
          saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
        }))(YourComponent)
       Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
      outside of their selector as an optimization. Options passed to connectAdvanced are passed to
      the selectorFactory, along with displayName and WrappedComponent, as the second argument.
       Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
      props. Do not use connectAdvanced directly without memoizing results between calls to your
      selector, otherwise the Connect component will re-render on every state or props change.
    */
    selectorFactory) {
    var _contextTypes, _childContextTypes;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$getDisplayName = _ref.getDisplayName, getDisplayName = _ref$getDisplayName === undefined ? function (name) {
        return 'ConnectAdvanced(' + name + ')';
    } : _ref$getDisplayName, _ref$methodName = _ref.methodName, methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName, _ref$renderCountProp = _ref.renderCountProp, renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp, _ref$shouldHandleStat = _ref.shouldHandleStateChanges, shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat, _ref$storeKey = _ref.storeKey, storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey, _ref$withRef = _ref.withRef, withRef = _ref$withRef === undefined ? false : _ref$withRef, connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);
    var subscriptionKey = storeKey + 'Subscription';
    var version = hotReloadingVersion++;
    var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
    var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);
    return function wrapWithConnect(WrappedComponent) {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));
        var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        var displayName = getDisplayName(wrappedComponentName);
        var selectorFactoryOptions = _extends({}, connectOptions, {
            getDisplayName: getDisplayName,
            methodName: methodName,
            renderCountProp: renderCountProp,
            shouldHandleStateChanges: shouldHandleStateChanges,
            storeKey: storeKey,
            withRef: withRef,
            displayName: displayName,
            wrappedComponentName: wrappedComponentName,
            WrappedComponent: WrappedComponent
        });
        var Connect = function (_Component) {
            _inherits(Connect, _Component);
            function Connect(props, context) {
                _classCallCheck(this, Connect);
                var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
                _this.version = version;
                _this.state = {};
                _this.renderCount = 0;
                _this.store = props[storeKey] || context[storeKey];
                _this.propsMode = Boolean(props[storeKey]);
                _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
                __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
                _this.initSelector();
                _this.initSubscription();
                return _this;
            }
            Connect.prototype.getChildContext = function getChildContext() {
                var _ref2;
                // If this component received store from props, its subscription should be transparent
                // to any descendants receiving store+subscription from context; it passes along
                // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
                // Connect to control ordering of notifications to flow top-down.
                var subscription = this.propsMode ? null : this.subscription;
                return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
            };
            Connect.prototype.componentDidMount = function componentDidMount() {
                if (!shouldHandleStateChanges)
                    return;
                // componentWillMount fires during server side rendering, but componentDidMount and
                // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
                // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
                // To handle the case where a child component may have triggered a state change by
                // dispatching an action in its componentWillMount, we have to re-run the select and maybe
                // re-render.
                this.subscription.trySubscribe();
                this.selector.run(this.props);
                if (this.selector.shouldComponentUpdate)
                    this.forceUpdate();
            };
            Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
                this.selector.run(nextProps);
            };
            Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
                return this.selector.shouldComponentUpdate;
            };
            Connect.prototype.componentWillUnmount = function componentWillUnmount() {
                if (this.subscription)
                    this.subscription.tryUnsubscribe();
                this.subscription = null;
                this.notifyNestedSubs = noop;
                this.store = null;
                this.selector.run = noop;
                this.selector.shouldComponentUpdate = false;
            };
            Connect.prototype.getWrappedInstance = function getWrappedInstance() {
                __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
                return this.wrappedInstance;
            };
            Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
                this.wrappedInstance = ref;
            };
            Connect.prototype.initSelector = function initSelector() {
                var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
                this.selector = makeSelectorStateful(sourceSelector, this.store);
                this.selector.run(this.props);
            };
            Connect.prototype.initSubscription = function initSubscription() {
                if (!shouldHandleStateChanges)
                    return;
                // parentSub's source should match where store came from: props vs. context. A component
                // connected to the store via props shouldn't use subscription from context, or vice versa.
                var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
                this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));
                // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
                // the middle of the notification loop, where `this.subscription` will then be null. An
                // extra null check every change can be avoided by copying the method onto `this` and then
                // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
                // listeners logic is changed to not call listeners that have been unsubscribed in the
                // middle of the notification loop.
                this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
            };
            Connect.prototype.onStateChange = function onStateChange() {
                this.selector.run(this.props);
                if (!this.selector.shouldComponentUpdate) {
                    this.notifyNestedSubs();
                }
                else {
                    this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
                    this.setState(dummyState);
                }
            };
            Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
                // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
                // needs to notify nested subs. Once called, it unimplements itself until further state
                // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
                // a boolean check every time avoids an extra method call most of the time, resulting
                // in some perf boost.
                this.componentDidUpdate = undefined;
                this.notifyNestedSubs();
            };
            Connect.prototype.isSubscribed = function isSubscribed() {
                return Boolean(this.subscription) && this.subscription.isSubscribed();
            };
            Connect.prototype.addExtraProps = function addExtraProps(props) {
                if (!withRef && !renderCountProp && !(this.propsMode && this.subscription))
                    return props;
                // make a shallow copy so that fields added don't leak to the original selector.
                // this is especially important for 'ref' since that's a reference back to the component
                // instance. a singleton memoized selector would then be holding a reference to the
                // instance, preventing the instance from being garbage collected, and that would be bad
                var withExtras = _extends({}, props);
                if (withRef)
                    withExtras.ref = this.setWrappedInstance;
                if (renderCountProp)
                    withExtras[renderCountProp] = this.renderCount++;
                if (this.propsMode && this.subscription)
                    withExtras[subscriptionKey] = this.subscription;
                return withExtras;
            };
            Connect.prototype.render = function render() {
                var selector = this.selector;
                selector.shouldComponentUpdate = false;
                if (selector.error) {
                    throw selector.error;
                }
                else {
                    return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
                }
            };
            return Connect;
        }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);
        Connect.WrappedComponent = WrappedComponent;
        Connect.displayName = displayName;
        Connect.childContextTypes = childContextTypes;
        Connect.contextTypes = contextTypes;
        Connect.propTypes = contextTypes;
        if (process.env.NODE_ENV !== 'production') {
            Connect.prototype.componentWillUpdate = function componentWillUpdate() {
                var _this2 = this;
                // We are hot reloading!
                if (this.version !== version) {
                    this.version = version;
                    this.initSelector();
                    // If any connected descendants don't hot reload (and resubscribe in the process), their
                    // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
                    // listeners, this does mean that the old versions of connected descendants will still be
                    // notified of state changes; however, their onStateChange function is a no-op so this
                    // isn't a huge deal.
                    var oldListeners = [];
                    if (this.subscription) {
                        oldListeners = this.subscription.listeners.get();
                        this.subscription.tryUnsubscribe();
                    }
                    this.initSubscription();
                    if (shouldHandleStateChanges) {
                        this.subscription.trySubscribe();
                        oldListeners.forEach(function (listener) {
                            return _this2.subscription.listeners.subscribe(listener);
                        });
                    }
                }
            };
        }
        return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
    };
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* unused harmony reexport combineReducers */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* unused harmony reexport applyMiddleware */
/* unused harmony reexport compose */






/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() { }
if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
    Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
    INIT: '@@redux/INIT'
    /**
     * Creates a Redux store that holds the state tree.
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @param {Function} reducer A function that returns the next state tree, given
     * the current state tree and the action to handle.
     *
     * @param {any} [preloadedState] The initial state. You may optionally specify it
     * to hydrate the state from the server in universal apps, or to restore a
     * previously serialized user session.
     * If you use `combineReducers` to produce the root reducer function, this must be
     * an object with the same shape as `combineReducers` keys.
     *
     * @param {Function} [enhancer] The store enhancer. You may optionally specify it
     * to enhance the store with third-party capabilities such as middleware,
     * time travel, persistence, etc. The only store enhancer that ships with Redux
     * is `applyMiddleware()`.
     *
     * @returns {Store} A Redux store that lets you read the state, dispatch actions
     * and subscribe to changes.
     */
};
function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.');
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
    }
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */
    function getState() {
        return currentState;
    }
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */
    function subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error('Expected listener to be a function.');
        }
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
        };
    }
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */
    function dispatch(action) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
            throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
        }
        if (typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
        }
        if (isDispatching) {
            throw new Error('Reducers may not dispatch actions.');
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        }
        finally {
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */
    function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
            throw new Error('Expected the nextReducer to be a function.');
        }
        currentReducer = nextReducer;
        dispatch({ type: ActionTypes.INIT });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */
    function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe(observer) {
                if (typeof observer !== 'object') {
                    throw new TypeError('Expected the observer to be an object.');
                }
                function observeState() {
                    if (observer.next) {
                        observer.next(getState());
                    }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return { unsubscribe: unsubscribe };
            }
        }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
            return this;
        }, _ref;
    }
    // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({ type: ActionTypes.INIT });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(87);

/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;
/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
    }
    /* eslint-enable no-console */
    try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
        /* eslint-disable no-empty */
    }
    catch (e) { }
    /* eslint-enable no-empty */
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
        return function (arg) {
            return arg;
        };
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(function (a, b) {
        return function () {
            return a(b.apply(undefined, arguments));
        };
    });
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(36);

function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch, options) {
        var constant = getConstant(dispatch, options);
        function constantSelector() {
            return constant;
        }
        constantSelector.dependsOnOwnProps = false;
        return constantSelector;
    };
}
// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, _ref) {
        var displayName = _ref.displayName;
        var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
            return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
        };
        // allow detectFactoryAndVerify to get ownProps
        proxy.dependsOnOwnProps = true;
        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
            proxy.mapToProps = mapToProps;
            proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
            var props = proxy(stateOrDispatch, ownProps);
            if (typeof props === 'function') {
                proxy.mapToProps = props;
                proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
                props = proxy(stateOrDispatch, ownProps);
            }
            if (process.env.NODE_ENV !== 'production')
                Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);
            return props;
        };
        return proxy;
    };
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(15);


function verifyPlainObject(value, displayName, methodName) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
        Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
    }
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
module.exports = __webpack_require__(117);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_css__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_MyNavbar__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_window_ChatWindow__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__side_nav_SideNav__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





// import "tether";
// import "popper.js";

var logo = __webpack_require__(116);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "App" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__navbar_MyNavbar__["a" /* MyNavbar */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "Container" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__side_nav_SideNav__["a" /* SideNav */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__chat_window_ChatWindow__["a" /* ChatWindow */], null))));
    };
    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./App.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./App.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".App {\n  display: flex;\n  flex-direction: column;\n  /*text-align: center;*/\n  min-height: 100%;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 80px;\n}\n\n.App-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.App-intro {\n  font-size: large;\n}\n\n@keyframes App-logo-spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.Container {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: row;\n}\n\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
    // get current location
    var location = typeof window !== "undefined" && window.location;
    if (!location) {
        throw new Error("fixUrls requires window.location");
    }
    // blank or null?
    if (!css || typeof css !== "string") {
        return css;
    }
    var baseUrl = location.protocol + "//" + location.host;
    var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
    // convert each url(...)
    /*
    This regular expression is just a way to recursively match brackets within
    a string.

     /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
       (  = Start a capturing group
         (?:  = Start a non-capturing group
             [^)(]  = Match anything that isn't a parentheses
             |  = OR
             \(  = Match a start parentheses
                 (?:  = Start another non-capturing groups
                     [^)(]+  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         [^)(]*  = Match anything that isn't a parentheses
                     \)  = Match a end parentheses
                 )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
     \)  = Match a close parens

     /gi  = Get all matches, not the first.  Be case insensitive.
     */
    var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
        // strip quotes (if they exist)
        var unquotedOrigUrl = origUrl
            .trim()
            .replace(/^"(.*)"$/, function (o, $1) { return $1; })
            .replace(/^'(.*)'$/, function (o, $1) { return $1; });
        // already a full url? no change
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
            return fullMatch;
        }
        // convert the url to a full url
        var newUrl;
        if (unquotedOrigUrl.indexOf("//") === 0) {
            //TODO: should we add protocol?
            newUrl = unquotedOrigUrl;
        }
        else if (unquotedOrigUrl.indexOf("/") === 0) {
            // path should be relative to the base url
            newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
        }
        else {
            // path should be relative to current directory
            newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
        }
        // send back the fixed url(...)
        return "url(" + JSON.stringify(newUrl) + ")";
    });
    // send back the fixed css
    return fixedCss;
};


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNavbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyNavbar_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyNavbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MyNavbar_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var NavbarState = /** @class */ (function () {
    function NavbarState() {
    }
    return NavbarState;
}());
var MyNavbar = /** @class */ (function (_super) {
    __extends(MyNavbar, _super);
    function MyNavbar(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            collapsed: false
        };
        return _this;
    }
    MyNavbar.prototype.toggle = function () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    MyNavbar.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "MyNavbar" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "navbar navbar-inverse bg-inverse fixed-top" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "navbar-brand", href: "#" }, "VisuConference"))));
    };
    return MyNavbar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./MyNavbar.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./MyNavbar.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".MyNavbar {\n  display: flex;\n  flex: 0 0 50px;\n}", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./chatwindow.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./chatwindow.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".ChatWindow {\n  border: solid 4px;\n  display:flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  /*background-color: aqua;*/\n  /*background-color: #ff91AF; */\n}\n\n.BottomContainer {\n  flex: 0 1 auto;\n}\n\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChatInput_css__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChatInput_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ChatInput_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_window_ChatWindow__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatypes_message__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ChatInput = /** @class */ (function (_super) {
    __extends(ChatInput, _super);
    function ChatInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: "" };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    ChatInput.prototype.componentDidMount = function () {
        var _this = this;
        this.unsubscribe = this.context.store.subscribe(function () { return _this.forceUpdate(); });
    };
    ChatInput.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    ChatInput.prototype.handleChange = function (event) {
        this.setState({ value: event.currentTarget.value });
    };
    ChatInput.prototype.handleSubmit = function (event) {
        event.preventDefault();
        // Only send the message if it contains text
        if (this.state.value !== "") {
            // Reset the input box
            this.setState({ value: "" });
            // send the message
            this.context.store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_2__chat_window_ChatWindow__["b" /* MessageStoreActionEnum */].ADD_MESSAGE,
                message: __WEBPACK_IMPORTED_MODULE_4__datatypes_message__["a" /* AppUserMessage */].fromUserGeneratedText(this.state.value)
            });
        }
    };
    ChatInput.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ChatInput" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: this.handleSubmit, className: "d-flex" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: "form-control", type: "text", placeholder: "Chat", value: this.state.value, onChange: this.handleChange }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "btn-group dropup" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: "btn btn-secondary dropdown-toggle dropdown-toggle-split", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "sr-only" }, "Toggle Dropdown")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "dropdown-menu" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_fontawesome__, { style: { color: "red" }, name: "dot-circle-o" })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "submit", className: "btn btn-secondary" }, "Send")))));
    };
    ChatInput.contextTypes = {
        store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
    };
    return ChatInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./ChatInput.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./ChatInput.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".Inline {\n  display: inline;\n}\n\n.FullWidth {\n  width: 100%;\n}\n\n.FlexContainer {\n  display: flex;\n  flex-direction: row;\n}\n\n.FlexInput {\n  flex: 0 0 auto;\n}\n\n.FlexButton {\n  flex: 0 0 30px;\n}\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(11);
var warning = __webpack_require__(18);
var assign = __webpack_require__(51);
var ReactPropTypesSecret = __webpack_require__(12);
var checkPropTypes = __webpack_require__(52);
module.exports = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */
    var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
    };
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        }
        else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/
    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
        this.message = message;
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                        'Use `PropTypes.checkPropTypes()` to call them. ' +
                        'Read more at http://fb.me/use-check-prop-types');
                }
                else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] &&
                        // Avoid spamming the console because they are often not actionable except for lib authors
                        manualPropTypeWarningCount < 3) {
                        warning(false, 'You are manually calling a React.PropTypes validation ' +
                            'function for the `%s` prop on `%s`. This is deprecated ' +
                            'and will throw in the standalone `prop-types` package. ' +
                            'You may be seeing this warning due to a third-party PropTypes ' +
                            'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            }
            else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunction.thatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
            return emptyFunction.thatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for (var key in propValue) {
                if (propValue.hasOwnProperty(key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
            return emptyFunction.thatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
                    'received %s at index %s.', getPostfixForTypeWarning(checker), i);
                return emptyFunction.thatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                    return null;
                }
            }
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (!checker) {
                    continue;
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from
            // props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
                var checker = shapeTypes[key];
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                        '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                        '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch (typeof propValue) {
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while (!(step = iterator.next()).done) {
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    }
                    else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while (!(step = iterator.next()).done) {
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                }
                else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            }
            else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !==
            'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    }
    catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
    var invariant = __webpack_require__(11);
    var warning = __webpack_require__(18);
    var ReactPropTypesSecret = __webpack_require__(12);
    var loggedTypeFailures = {};
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
        for (var typeSpecName in typeSpecs) {
            if (typeSpecs.hasOwnProperty(typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                }
                catch (ex) {
                    error = ex;
                }
                warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
                }
            }
        }
    }
}
module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(11);
var ReactPropTypesSecret = __webpack_require__(12);
module.exports = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
            // It is still safe when called from React.
            return;
        }
        invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use PropTypes.checkPropTypes() to call them. ' +
            'Read more at http://fb.me/use-check-prop-types');
    }
    ;
    shim.isRequired = shim;
    function getShim() {
        return shim;
    }
    ;
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim
    };
    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0px',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0px, 0px, 0px, 0px)',
    border: '0px'
};
module.exports = exports['default'];


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/*
 * UUID-js: A js library to generate and parse UUIDs, TimeUUIDs and generate
 * TimeUUID based on dates for range selections.
 * @see http://www.ietf.org/rfc/rfc4122.txt
 **/
function UUIDjs() {
}
;
UUIDjs.maxFromBits = function (bits) {
    return Math.pow(2, bits);
};
UUIDjs.limitUI04 = UUIDjs.maxFromBits(4);
UUIDjs.limitUI06 = UUIDjs.maxFromBits(6);
UUIDjs.limitUI08 = UUIDjs.maxFromBits(8);
UUIDjs.limitUI12 = UUIDjs.maxFromBits(12);
UUIDjs.limitUI14 = UUIDjs.maxFromBits(14);
UUIDjs.limitUI16 = UUIDjs.maxFromBits(16);
UUIDjs.limitUI32 = UUIDjs.maxFromBits(32);
UUIDjs.limitUI40 = UUIDjs.maxFromBits(40);
UUIDjs.limitUI48 = UUIDjs.maxFromBits(48);
// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
// @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
UUIDjs.randomUI04 = function () {
    return getRandomInt(0, UUIDjs.limitUI04 - 1);
};
UUIDjs.randomUI06 = function () {
    return getRandomInt(0, UUIDjs.limitUI06 - 1);
};
UUIDjs.randomUI08 = function () {
    return getRandomInt(0, UUIDjs.limitUI08 - 1);
};
UUIDjs.randomUI12 = function () {
    return getRandomInt(0, UUIDjs.limitUI12 - 1);
};
UUIDjs.randomUI14 = function () {
    return getRandomInt(0, UUIDjs.limitUI14 - 1);
};
UUIDjs.randomUI16 = function () {
    return getRandomInt(0, UUIDjs.limitUI16 - 1);
};
UUIDjs.randomUI32 = function () {
    return getRandomInt(0, UUIDjs.limitUI32 - 1);
};
UUIDjs.randomUI40 = function () {
    return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 40 - 30)) * (1 << 30);
};
UUIDjs.randomUI48 = function () {
    return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 48 - 30)) * (1 << 30);
};
UUIDjs.paddedString = function (string, length, z) {
    string = String(string);
    z = (!z) ? '0' : z;
    var i = length - string.length;
    for (; i > 0; i >>>= 1, z += z) {
        if (i & 1) {
            string = z + string;
        }
    }
    return string;
};
UUIDjs.prototype.fromParts = function (timeLow, timeMid, timeHiAndVersion, clockSeqHiAndReserved, clockSeqLow, node) {
    this.version = (timeHiAndVersion >> 12) & 0xF;
    this.hex = UUIDjs.paddedString(timeLow.toString(16), 8)
        + '-'
        + UUIDjs.paddedString(timeMid.toString(16), 4)
        + '-'
        + UUIDjs.paddedString(timeHiAndVersion.toString(16), 4)
        + '-'
        + UUIDjs.paddedString(clockSeqHiAndReserved.toString(16), 2)
        + UUIDjs.paddedString(clockSeqLow.toString(16), 2)
        + '-'
        + UUIDjs.paddedString(node.toString(16), 12);
    return this;
};
UUIDjs.prototype.toString = function () {
    return this.hex;
};
UUIDjs.prototype.toURN = function () {
    return 'urn:uuid:' + this.hex;
};
UUIDjs.prototype.toBytes = function () {
    var parts = this.hex.split('-');
    var ints = [];
    var intPos = 0;
    for (var i = 0; i < parts.length; i++) {
        for (var j = 0; j < parts[i].length; j += 2) {
            ints[intPos++] = parseInt(parts[i].substr(j, 2), 16);
        }
    }
    return ints;
};
UUIDjs.prototype.equals = function (uuid) {
    if (!(uuid instanceof UUID)) {
        return false;
    }
    if (this.hex !== uuid.hex) {
        return false;
    }
    return true;
};
UUIDjs.getTimeFieldValues = function (time) {
    var ts = time - Date.UTC(1582, 9, 15);
    var hm = ((ts / 0x100000000) * 10000) & 0xFFFFFFF;
    return { low: ((ts & 0xFFFFFFF) * 10000) % 0x100000000,
        mid: hm & 0xFFFF, hi: hm >>> 16, timestamp: ts };
};
UUIDjs._create4 = function () {
    return new UUIDjs().fromParts(UUIDjs.randomUI32(), UUIDjs.randomUI16(), 0x4000 | UUIDjs.randomUI12(), 0x80 | UUIDjs.randomUI06(), UUIDjs.randomUI08(), UUIDjs.randomUI48());
};
UUIDjs._create1 = function () {
    var now = new Date().getTime();
    var sequence = UUIDjs.randomUI14();
    var node = (UUIDjs.randomUI08() | 1) * 0x10000000000 + UUIDjs.randomUI40();
    var tick = UUIDjs.randomUI04();
    var timestamp = 0;
    var timestampRatio = 1 / 4;
    if (now != timestamp) {
        if (now < timestamp) {
            sequence++;
        }
        timestamp = now;
        tick = UUIDjs.randomUI04();
    }
    else if (Math.random() < timestampRatio && tick < 9984) {
        tick += 1 + UUIDjs.randomUI04();
    }
    else {
        sequence++;
    }
    var tf = UUIDjs.getTimeFieldValues(timestamp);
    var tl = tf.low + tick;
    var thav = (tf.hi & 0xFFF) | 0x1000;
    sequence &= 0x3FFF;
    var cshar = (sequence >>> 8) | 0x80;
    var csl = sequence & 0xFF;
    return new UUIDjs().fromParts(tl, tf.mid, thav, cshar, csl, node);
};
UUIDjs.create = function (version) {
    version = version || 4;
    return this['_create' + version]();
};
UUIDjs.fromTime = function (time, last) {
    last = (!last) ? false : last;
    var tf = UUIDjs.getTimeFieldValues(time);
    var tl = tf.low;
    var thav = (tf.hi & 0xFFF) | 0x1000; // set version '0001'
    if (last === false) {
        return new UUIDjs().fromParts(tl, tf.mid, thav, 0, 0, 0);
    }
    else {
        return new UUIDjs().fromParts(tl, tf.mid, thav, 0x80 | UUIDjs.limitUI06, UUIDjs.limitUI08 - 1, UUIDjs.limitUI48 - 1);
    }
};
UUIDjs.firstFromTime = function (time) {
    return UUIDjs.fromTime(time, false);
};
UUIDjs.lastFromTime = function (time) {
    return UUIDjs.fromTime(time, true);
};
UUIDjs.fromURN = function (strId) {
    var r, p = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i;
    if ((r = p.exec(strId))) {
        return new UUIDjs().fromParts(parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16), parseInt(r[4], 16), parseInt(r[5], 16), parseInt(r[6], 16));
    }
    return null;
};
UUIDjs.fromBytes = function (ints) {
    if (ints.length < 5) {
        return null;
    }
    var str = '';
    var pos = 0;
    var parts = [4, 2, 2, 2, 6];
    for (var i = 0; i < parts.length; i++) {
        for (var j = 0; j < parts[i]; j++) {
            var octet = ints[pos++].toString(16);
            if (octet.length == 1) {
                octet = '0' + octet;
            }
            str += octet;
        }
        if (parts[i] !== 6) {
            str += '-';
        }
    }
    return UUIDjs.fromURN(str);
};
UUIDjs.fromBinary = function (binary) {
    var ints = [];
    for (var i = 0; i < binary.length; i++) {
        ints[i] = binary.charCodeAt(i);
        if (ints[i] > 255 || ints[i] < 0) {
            throw new Error('Unexpected byte in binary data.');
        }
    }
    return UUIDjs.fromBytes(ints);
};
// Aliases to support legacy code. Do not use these when writing new code as
// they may be removed in future versions!
UUIDjs.new = function () {
    return this.create(4);
};
UUIDjs.newTS = function () {
    return this.create(1);
};
module.exports = UUIDjs;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MessageContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectedMessageContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_bubble_MessageBubble__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MessageContainer_css__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MessageContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MessageContainer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(27);




var MessageContainer = function (props) {
    var messages = props.messages;
    var bubbles = messages.map(function (message, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__message_bubble_MessageBubble__["a" /* MessageBubble */], { key: index, message: message });
    });
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "MessageContainer", id: "Messages" }, bubbles));
};
var mapStateToProps = function (state) { return ({
    messages: state.listOfMessages
}); };
var ConnectedMessageContainer = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, {})(MessageContainer);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBubble; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MessageBubble_css__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MessageBubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MessageBubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_message_modal_and_button_EditMessageModalAndButton__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datatypes_message__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_window_ChatWindow__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var MessageBubble = /** @class */ (function (_super) {
    __extends(MessageBubble, _super);
    function MessageBubble(props) {
        var _this = _super.call(this, props) || this;
        _this.message = props.message;
        _this.flagMessage = _this.flagMessage.bind(_this);
        return _this;
    }
    MessageBubble.prototype.flagMessage = function () {
        var toBeFlagged = new __WEBPACK_IMPORTED_MODULE_5__datatypes_message__["a" /* AppUserMessage */]();
        toBeFlagged.uuid = this.message.uuid;
        this.context.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_6__chat_window_ChatWindow__["b" /* MessageStoreActionEnum */].TOGGLE_FLAG_MESSAGE,
            message: toBeFlagged
        });
    };
    MessageBubble.prototype.render = function () {
        var bubble;
        var flaggedClass = "";
        if (this.message.flagged) {
            flaggedClass = " Flagged"; // Append the flagged status to the css classes
        }
        if (this.message.user === 0) {
            bubble = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "MessageBubbleContainerRightWrapper" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "MessageBubbleVerticalAlignment" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__edit_message_modal_and_button_EditMessageModalAndButton__["a" /* EditMessageModalAndButton */], { message: this.message }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "MessageBubble GreenPill" }, this.message.text))));
        }
        else {
            // its someone else
            bubble = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "MessageBubbleContainerLeftWrapper" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "MessageBubbleVerticalAlignment" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "MessageBubble BluePill" + flaggedClass }, this.message.text),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "Icon", id: "TooltipLeft-" + this.message.uuid, onClick: this.flagMessage },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_fontawesome__, { name: "flag" })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* UncontrolledTooltip */], { placement: "right", target: "TooltipLeft-" + this.message.uuid }, "Flag message for changes."))));
        }
        return (bubble);
    };
    MessageBubble.contextTypes = {
        store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
    };
    return MessageBubble;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./MessageBubble.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./MessageBubble.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".MessageBubble {\n  font-size: medium;\n  padding: .4em .6em;\n  word-wrap: break-word;\n  white-space: normal;\n  max-width: 36vw;\n  text-align: left;\n  display: inline-block;\n  border-radius: 10px;\n  border: solid 1.5px;\n}\n\n.Flagged {\n  border: 2.5px solid indianred;\n}\n\n.GreenPill {\n  background-color: mediumseagreen;\n  display: inline-block;\n}\n\n.BluePill {\n  background-color: #7f9ab4;\n  display: inline-block;\n}\n\n.MessageBubbleContainerRightWrapper{\n  display: block;\n  margin: .2em;\n  text-align: right;\n}\n.MessageBubbleContainerLeftWrapper{\n  display: block;\n  margin: .2em;\n  text-align: left;\n}\n\n.MessageBubbleVerticalAlignment{\n  display: inline-flex;\n  align-items: center;\n}\n\n.Icon {\n  padding-left: 10px;\n  padding-right: 10px;\n  display: inline;\n  vertical-align: middle;\n}\n\n", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
    // Avoid a V8 JIT bug in Chrome 19-20.
    // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
module.exports = isObject;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
/** `Object#toString` result references. */
var funcTag = '[object Function]', genTag = '[object GeneratorFunction]';
/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8 which returns 'object' for typed array constructors, and
    // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
module.exports = isFunction;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*! tether 1.3.4 */
(function (f) { if (true) {
    module.exports = f();
}
else if (typeof define === "function" && define.amd) {
    define([], f);
}
else {
    var g;
    if (typeof window !== "undefined") {
        g = window;
    }
    else if (typeof global !== "undefined") {
        g = global;
    }
    else if (typeof self !== "undefined") {
        g = self;
    }
    else {
        g = this;
    }
    g.Tether = f();
} })(function () {
    var define, module, exports;
    return (function e(t, n, r) { function s(o, u) { if (!n[o]) {
        if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a)
                return require(o, !0);
            if (i)
                return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
        }
        var l = n[o] = { exports: {} };
        t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e); }, l, l.exports, e, t, n, r);
    } return n[o].exports; } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)
        s(r[o]); return s; })({ 1: [function (require, module, exports) {
                'use strict';
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                var _utils = require('./utils');
                var _utils2 = _interopRequireDefault(_utils);
                var _TetherBase$Utils = _utils2['default'].Utils;
                var getBounds = _TetherBase$Utils.getBounds;
                var updateClasses = _TetherBase$Utils.updateClasses;
                var defer = _TetherBase$Utils.defer;
                _utils2['default'].modules.push({
                    position: function position(_ref) {
                        var _this = this;
                        var top = _ref.top;
                        var left = _ref.left;
                        var _cache = this.cache('element-bounds', function () {
                            return getBounds(_this.element);
                        });
                        var height = _cache.height;
                        var width = _cache.width;
                        var targetPos = this.getTargetBounds();
                        var bottom = top + height;
                        var right = left + width;
                        var abutted = [];
                        if (top <= targetPos.bottom && bottom >= targetPos.top) {
                            ['left', 'right'].forEach(function (side) {
                                var targetPosSide = targetPos[side];
                                if (targetPosSide === left || targetPosSide === right) {
                                    abutted.push(side);
                                }
                            });
                        }
                        if (left <= targetPos.right && right >= targetPos.left) {
                            ['top', 'bottom'].forEach(function (side) {
                                var targetPosSide = targetPos[side];
                                if (targetPosSide === top || targetPosSide === bottom) {
                                    abutted.push(side);
                                }
                            });
                        }
                        var allClasses = [];
                        var addClasses = [];
                        var sides = ['left', 'top', 'right', 'bottom'];
                        allClasses.push(this.getClass('abutted'));
                        sides.forEach(function (side) {
                            allClasses.push(_this.getClass('abutted') + '-' + side);
                        });
                        if (abutted.length) {
                            addClasses.push(this.getClass('abutted'));
                        }
                        abutted.forEach(function (side) {
                            addClasses.push(_this.getClass('abutted') + '-' + side);
                        });
                        defer(function () {
                            if (!(_this.options.addTargetClasses === false)) {
                                updateClasses(_this.target, addClasses, allClasses);
                            }
                            updateClasses(_this.element, addClasses, allClasses);
                        });
                        return true;
                    }
                });
            }, { "./utils": 5 }], 2: [function (require, module, exports) {
                'use strict';
                var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break;
                    }
                }
                catch (err) {
                    _d = true;
                    _e = err;
                }
                finally {
                    try {
                        if (!_n && _i['return'])
                            _i['return']();
                    }
                    finally {
                        if (_d)
                            throw _e;
                    }
                } return _arr; } return function (arr, i) { if (Array.isArray(arr)) {
                    return arr;
                }
                else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                }
                else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance');
                } }; })();
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                var _utils = require('./utils');
                var _utils2 = _interopRequireDefault(_utils);
                var _TetherBase$Utils = _utils2['default'].Utils;
                var getBounds = _TetherBase$Utils.getBounds;
                var extend = _TetherBase$Utils.extend;
                var updateClasses = _TetherBase$Utils.updateClasses;
                var defer = _TetherBase$Utils.defer;
                var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
                function getBoundingRect(tether, to) {
                    if (to === 'scrollParent') {
                        to = tether.scrollParents[0];
                    }
                    else if (to === 'window') {
                        to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
                    }
                    if (to === document) {
                        to = to.documentElement;
                    }
                    if (typeof to.nodeType !== 'undefined') {
                        (function () {
                            var node = to;
                            var size = getBounds(to);
                            var pos = size;
                            var style = getComputedStyle(to);
                            to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
                            // Account any parent Frames scroll offset
                            if (node.ownerDocument !== document) {
                                var win = node.ownerDocument.defaultView;
                                to[0] += win.pageXOffset;
                                to[1] += win.pageYOffset;
                                to[2] += win.pageXOffset;
                                to[3] += win.pageYOffset;
                            }
                            BOUNDS_FORMAT.forEach(function (side, i) {
                                side = side[0].toUpperCase() + side.substr(1);
                                if (side === 'Top' || side === 'Left') {
                                    to[i] += parseFloat(style['border' + side + 'Width']);
                                }
                                else {
                                    to[i] -= parseFloat(style['border' + side + 'Width']);
                                }
                            });
                        })();
                    }
                    return to;
                }
                _utils2['default'].modules.push({
                    position: function position(_ref) {
                        var _this = this;
                        var top = _ref.top;
                        var left = _ref.left;
                        var targetAttachment = _ref.targetAttachment;
                        if (!this.options.constraints) {
                            return true;
                        }
                        var _cache = this.cache('element-bounds', function () {
                            return getBounds(_this.element);
                        });
                        var height = _cache.height;
                        var width = _cache.width;
                        if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
                            var _lastSize = this.lastSize;
                            // Handle the item getting hidden as a result of our positioning without glitching
                            // the classes in and out
                            width = _lastSize.width;
                            height = _lastSize.height;
                        }
                        var targetSize = this.cache('target-bounds', function () {
                            return _this.getTargetBounds();
                        });
                        var targetHeight = targetSize.height;
                        var targetWidth = targetSize.width;
                        var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
                        this.options.constraints.forEach(function (constraint) {
                            var outOfBoundsClass = constraint.outOfBoundsClass;
                            var pinnedClass = constraint.pinnedClass;
                            if (outOfBoundsClass) {
                                allClasses.push(outOfBoundsClass);
                            }
                            if (pinnedClass) {
                                allClasses.push(pinnedClass);
                            }
                        });
                        allClasses.forEach(function (cls) {
                            ['left', 'top', 'right', 'bottom'].forEach(function (side) {
                                allClasses.push(cls + '-' + side);
                            });
                        });
                        var addClasses = [];
                        var tAttachment = extend({}, targetAttachment);
                        var eAttachment = extend({}, this.attachment);
                        this.options.constraints.forEach(function (constraint) {
                            var to = constraint.to;
                            var attachment = constraint.attachment;
                            var pin = constraint.pin;
                            if (typeof attachment === 'undefined') {
                                attachment = '';
                            }
                            var changeAttachX = undefined, changeAttachY = undefined;
                            if (attachment.indexOf(' ') >= 0) {
                                var _attachment$split = attachment.split(' ');
                                var _attachment$split2 = _slicedToArray(_attachment$split, 2);
                                changeAttachY = _attachment$split2[0];
                                changeAttachX = _attachment$split2[1];
                            }
                            else {
                                changeAttachX = changeAttachY = attachment;
                            }
                            var bounds = getBoundingRect(_this, to);
                            if (changeAttachY === 'target' || changeAttachY === 'both') {
                                if (top < bounds[1] && tAttachment.top === 'top') {
                                    top += targetHeight;
                                    tAttachment.top = 'bottom';
                                }
                                if (top + height > bounds[3] && tAttachment.top === 'bottom') {
                                    top -= targetHeight;
                                    tAttachment.top = 'top';
                                }
                            }
                            if (changeAttachY === 'together') {
                                if (tAttachment.top === 'top') {
                                    if (eAttachment.top === 'bottom' && top < bounds[1]) {
                                        top += targetHeight;
                                        tAttachment.top = 'bottom';
                                        top += height;
                                        eAttachment.top = 'top';
                                    }
                                    else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
                                        top -= height - targetHeight;
                                        tAttachment.top = 'bottom';
                                        eAttachment.top = 'bottom';
                                    }
                                }
                                if (tAttachment.top === 'bottom') {
                                    if (eAttachment.top === 'top' && top + height > bounds[3]) {
                                        top -= targetHeight;
                                        tAttachment.top = 'top';
                                        top -= height;
                                        eAttachment.top = 'bottom';
                                    }
                                    else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
                                        top += height - targetHeight;
                                        tAttachment.top = 'top';
                                        eAttachment.top = 'top';
                                    }
                                }
                                if (tAttachment.top === 'middle') {
                                    if (top + height > bounds[3] && eAttachment.top === 'top') {
                                        top -= height;
                                        eAttachment.top = 'bottom';
                                    }
                                    else if (top < bounds[1] && eAttachment.top === 'bottom') {
                                        top += height;
                                        eAttachment.top = 'top';
                                    }
                                }
                            }
                            if (changeAttachX === 'target' || changeAttachX === 'both') {
                                if (left < bounds[0] && tAttachment.left === 'left') {
                                    left += targetWidth;
                                    tAttachment.left = 'right';
                                }
                                if (left + width > bounds[2] && tAttachment.left === 'right') {
                                    left -= targetWidth;
                                    tAttachment.left = 'left';
                                }
                            }
                            if (changeAttachX === 'together') {
                                if (left < bounds[0] && tAttachment.left === 'left') {
                                    if (eAttachment.left === 'right') {
                                        left += targetWidth;
                                        tAttachment.left = 'right';
                                        left += width;
                                        eAttachment.left = 'left';
                                    }
                                    else if (eAttachment.left === 'left') {
                                        left += targetWidth;
                                        tAttachment.left = 'right';
                                        left -= width;
                                        eAttachment.left = 'right';
                                    }
                                }
                                else if (left + width > bounds[2] && tAttachment.left === 'right') {
                                    if (eAttachment.left === 'left') {
                                        left -= targetWidth;
                                        tAttachment.left = 'left';
                                        left -= width;
                                        eAttachment.left = 'right';
                                    }
                                    else if (eAttachment.left === 'right') {
                                        left -= targetWidth;
                                        tAttachment.left = 'left';
                                        left += width;
                                        eAttachment.left = 'left';
                                    }
                                }
                                else if (tAttachment.left === 'center') {
                                    if (left + width > bounds[2] && eAttachment.left === 'left') {
                                        left -= width;
                                        eAttachment.left = 'right';
                                    }
                                    else if (left < bounds[0] && eAttachment.left === 'right') {
                                        left += width;
                                        eAttachment.left = 'left';
                                    }
                                }
                            }
                            if (changeAttachY === 'element' || changeAttachY === 'both') {
                                if (top < bounds[1] && eAttachment.top === 'bottom') {
                                    top += height;
                                    eAttachment.top = 'top';
                                }
                                if (top + height > bounds[3] && eAttachment.top === 'top') {
                                    top -= height;
                                    eAttachment.top = 'bottom';
                                }
                            }
                            if (changeAttachX === 'element' || changeAttachX === 'both') {
                                if (left < bounds[0]) {
                                    if (eAttachment.left === 'right') {
                                        left += width;
                                        eAttachment.left = 'left';
                                    }
                                    else if (eAttachment.left === 'center') {
                                        left += width / 2;
                                        eAttachment.left = 'left';
                                    }
                                }
                                if (left + width > bounds[2]) {
                                    if (eAttachment.left === 'left') {
                                        left -= width;
                                        eAttachment.left = 'right';
                                    }
                                    else if (eAttachment.left === 'center') {
                                        left -= width / 2;
                                        eAttachment.left = 'right';
                                    }
                                }
                            }
                            if (typeof pin === 'string') {
                                pin = pin.split(',').map(function (p) {
                                    return p.trim();
                                });
                            }
                            else if (pin === true) {
                                pin = ['top', 'left', 'right', 'bottom'];
                            }
                            pin = pin || [];
                            var pinned = [];
                            var oob = [];
                            if (top < bounds[1]) {
                                if (pin.indexOf('top') >= 0) {
                                    top = bounds[1];
                                    pinned.push('top');
                                }
                                else {
                                    oob.push('top');
                                }
                            }
                            if (top + height > bounds[3]) {
                                if (pin.indexOf('bottom') >= 0) {
                                    top = bounds[3] - height;
                                    pinned.push('bottom');
                                }
                                else {
                                    oob.push('bottom');
                                }
                            }
                            if (left < bounds[0]) {
                                if (pin.indexOf('left') >= 0) {
                                    left = bounds[0];
                                    pinned.push('left');
                                }
                                else {
                                    oob.push('left');
                                }
                            }
                            if (left + width > bounds[2]) {
                                if (pin.indexOf('right') >= 0) {
                                    left = bounds[2] - width;
                                    pinned.push('right');
                                }
                                else {
                                    oob.push('right');
                                }
                            }
                            if (pinned.length) {
                                (function () {
                                    var pinnedClass = undefined;
                                    if (typeof _this.options.pinnedClass !== 'undefined') {
                                        pinnedClass = _this.options.pinnedClass;
                                    }
                                    else {
                                        pinnedClass = _this.getClass('pinned');
                                    }
                                    addClasses.push(pinnedClass);
                                    pinned.forEach(function (side) {
                                        addClasses.push(pinnedClass + '-' + side);
                                    });
                                })();
                            }
                            if (oob.length) {
                                (function () {
                                    var oobClass = undefined;
                                    if (typeof _this.options.outOfBoundsClass !== 'undefined') {
                                        oobClass = _this.options.outOfBoundsClass;
                                    }
                                    else {
                                        oobClass = _this.getClass('out-of-bounds');
                                    }
                                    addClasses.push(oobClass);
                                    oob.forEach(function (side) {
                                        addClasses.push(oobClass + '-' + side);
                                    });
                                })();
                            }
                            if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
                                eAttachment.left = tAttachment.left = false;
                            }
                            if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
                                eAttachment.top = tAttachment.top = false;
                            }
                            if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
                                _this.updateAttachClasses(eAttachment, tAttachment);
                                _this.trigger('update', {
                                    attachment: eAttachment,
                                    targetAttachment: tAttachment
                                });
                            }
                        });
                        defer(function () {
                            if (!(_this.options.addTargetClasses === false)) {
                                updateClasses(_this.target, addClasses, allClasses);
                            }
                            updateClasses(_this.element, addClasses, allClasses);
                        });
                        return { top: top, left: left };
                    }
                });
            }, { "./utils": 5 }], 3: [function (require, module, exports) {
                'use strict';
                var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break;
                    }
                }
                catch (err) {
                    _d = true;
                    _e = err;
                }
                finally {
                    try {
                        if (!_n && _i['return'])
                            _i['return']();
                    }
                    finally {
                        if (_d)
                            throw _e;
                    }
                } return _arr; } return function (arr, i) { if (Array.isArray(arr)) {
                    return arr;
                }
                else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                }
                else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance');
                } }; })();
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                var _utils = require('./utils');
                var _utils2 = _interopRequireDefault(_utils);
                _utils2['default'].modules.push({
                    position: function position(_ref) {
                        var top = _ref.top;
                        var left = _ref.left;
                        if (!this.options.shift) {
                            return;
                        }
                        var shift = this.options.shift;
                        if (typeof this.options.shift === 'function') {
                            shift = this.options.shift.call(this, { top: top, left: left });
                        }
                        var shiftTop = undefined, shiftLeft = undefined;
                        if (typeof shift === 'string') {
                            shift = shift.split(' ');
                            shift[1] = shift[1] || shift[0];
                            var _shift = shift;
                            var _shift2 = _slicedToArray(_shift, 2);
                            shiftTop = _shift2[0];
                            shiftLeft = _shift2[1];
                            shiftTop = parseFloat(shiftTop, 10);
                            shiftLeft = parseFloat(shiftLeft, 10);
                        }
                        else {
                            shiftTop = shift.top;
                            shiftLeft = shift.left;
                        }
                        top += shiftTop;
                        left += shiftLeft;
                        return { top: top, left: left };
                    }
                });
            }, { "./utils": 5 }], 4: [function (require, module, exports) {
                /* globals performance */
                'use strict';
                Object.defineProperty(exports, '__esModule', {
                    value: true
                });
                var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break;
                    }
                }
                catch (err) {
                    _d = true;
                    _e = err;
                }
                finally {
                    try {
                        if (!_n && _i['return'])
                            _i['return']();
                    }
                    finally {
                        if (_d)
                            throw _e;
                    }
                } return _arr; } return function (arr, i) { if (Array.isArray(arr)) {
                    return arr;
                }
                else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                }
                else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance');
                } }; })();
                var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } } return function (Constructor, protoProps, staticProps) { if (protoProps)
                    defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    defineProperties(Constructor, staticProps); return Constructor; }; })();
                var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) {
                    var object = _x6, property = _x7, receiver = _x8;
                    _again = false;
                    if (object === null)
                        object = Function.prototype;
                    var desc = Object.getOwnPropertyDescriptor(object, property);
                    if (desc === undefined) {
                        var parent = Object.getPrototypeOf(object);
                        if (parent === null) {
                            return undefined;
                        }
                        else {
                            _x6 = parent;
                            _x7 = property;
                            _x8 = receiver;
                            _again = true;
                            desc = parent = undefined;
                            continue _function;
                        }
                    }
                    else if ('value' in desc) {
                        return desc.value;
                    }
                    else {
                        var getter = desc.get;
                        if (getter === undefined) {
                            return undefined;
                        }
                        return getter.call(receiver);
                    }
                } };
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                } }
                function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
                    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
                var _utils = require('./utils');
                var _utils2 = _interopRequireDefault(_utils);
                require('./constraint');
                require('./abutment');
                require('./shift');
                var _TetherBase$Utils = _utils2['default'].Utils;
                var getScrollParents = _TetherBase$Utils.getScrollParents;
                var getBounds = _TetherBase$Utils.getBounds;
                var getOffsetParent = _TetherBase$Utils.getOffsetParent;
                var extend = _TetherBase$Utils.extend;
                var addClass = _TetherBase$Utils.addClass;
                var removeClass = _TetherBase$Utils.removeClass;
                var updateClasses = _TetherBase$Utils.updateClasses;
                var defer = _TetherBase$Utils.defer;
                var flush = _TetherBase$Utils.flush;
                var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
                var removeUtilElements = _TetherBase$Utils.removeUtilElements;
                var Evented = _TetherBase$Utils.Evented;
                function within(a, b) {
                    var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
                    return a + diff >= b && b >= a - diff;
                }
                var transformKey = (function () {
                    if (typeof document === 'undefined') {
                        return '';
                    }
                    var el = document.createElement('div');
                    var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
                    for (var i = 0; i < transforms.length; ++i) {
                        var key = transforms[i];
                        if (el.style[key] !== undefined) {
                            return key;
                        }
                    }
                })();
                var tethers = [];
                var position = function position() {
                    tethers.forEach(function (tether) {
                        tether.position(false);
                    });
                    flush();
                };
                function now() {
                    if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
                        return performance.now();
                    }
                    return +new Date();
                }
                (function () {
                    var lastCall = null;
                    var lastDuration = null;
                    var pendingTimeout = null;
                    var tick = function tick() {
                        if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
                            // We voluntarily throttle ourselves if we can't manage 60fps
                            lastDuration = Math.min(lastDuration - 16, 250);
                            // Just in case this is the last event, remember to position just once more
                            pendingTimeout = setTimeout(tick, 250);
                            return;
                        }
                        if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
                            // Some browsers call events a little too frequently, refuse to run more than is reasonable
                            return;
                        }
                        if (pendingTimeout != null) {
                            clearTimeout(pendingTimeout);
                            pendingTimeout = null;
                        }
                        lastCall = now();
                        position();
                        lastDuration = now() - lastCall;
                    };
                    if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
                        ['resize', 'scroll', 'touchmove'].forEach(function (event) {
                            window.addEventListener(event, tick);
                        });
                    }
                })();
                var MIRROR_LR = {
                    center: 'center',
                    left: 'right',
                    right: 'left'
                };
                var MIRROR_TB = {
                    middle: 'middle',
                    top: 'bottom',
                    bottom: 'top'
                };
                var OFFSET_MAP = {
                    top: 0,
                    left: 0,
                    middle: '50%',
                    center: '50%',
                    bottom: '100%',
                    right: '100%'
                };
                var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
                    var left = attachment.left;
                    var top = attachment.top;
                    if (left === 'auto') {
                        left = MIRROR_LR[relativeToAttachment.left];
                    }
                    if (top === 'auto') {
                        top = MIRROR_TB[relativeToAttachment.top];
                    }
                    return { left: left, top: top };
                };
                var attachmentToOffset = function attachmentToOffset(attachment) {
                    var left = attachment.left;
                    var top = attachment.top;
                    if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
                        left = OFFSET_MAP[attachment.left];
                    }
                    if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
                        top = OFFSET_MAP[attachment.top];
                    }
                    return { left: left, top: top };
                };
                function addOffset() {
                    var out = { top: 0, left: 0 };
                    for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
                        offsets[_key] = arguments[_key];
                    }
                    offsets.forEach(function (_ref) {
                        var top = _ref.top;
                        var left = _ref.left;
                        if (typeof top === 'string') {
                            top = parseFloat(top, 10);
                        }
                        if (typeof left === 'string') {
                            left = parseFloat(left, 10);
                        }
                        out.top += top;
                        out.left += left;
                    });
                    return out;
                }
                function offsetToPx(offset, size) {
                    if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
                        offset.left = parseFloat(offset.left, 10) / 100 * size.width;
                    }
                    if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
                        offset.top = parseFloat(offset.top, 10) / 100 * size.height;
                    }
                    return offset;
                }
                var parseOffset = function parseOffset(value) {
                    var _value$split = value.split(' ');
                    var _value$split2 = _slicedToArray(_value$split, 2);
                    var top = _value$split2[0];
                    var left = _value$split2[1];
                    return { top: top, left: left };
                };
                var parseAttachment = parseOffset;
                var TetherClass = (function (_Evented) {
                    _inherits(TetherClass, _Evented);
                    function TetherClass(options) {
                        var _this = this;
                        _classCallCheck(this, TetherClass);
                        _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
                        this.position = this.position.bind(this);
                        tethers.push(this);
                        this.history = [];
                        this.setOptions(options, false);
                        _utils2['default'].modules.forEach(function (module) {
                            if (typeof module.initialize !== 'undefined') {
                                module.initialize.call(_this);
                            }
                        });
                        this.position();
                    }
                    _createClass(TetherClass, [{
                            key: 'getClass',
                            value: function getClass() {
                                var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
                                var classes = this.options.classes;
                                if (typeof classes !== 'undefined' && classes[key]) {
                                    return this.options.classes[key];
                                }
                                else if (this.options.classPrefix) {
                                    return this.options.classPrefix + '-' + key;
                                }
                                else {
                                    return key;
                                }
                            }
                        }, {
                            key: 'setOptions',
                            value: function setOptions(options) {
                                var _this2 = this;
                                var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
                                var defaults = {
                                    offset: '0 0',
                                    targetOffset: '0 0',
                                    targetAttachment: 'auto auto',
                                    classPrefix: 'tether'
                                };
                                this.options = extend(defaults, options);
                                var _options = this.options;
                                var element = _options.element;
                                var target = _options.target;
                                var targetModifier = _options.targetModifier;
                                this.element = element;
                                this.target = target;
                                this.targetModifier = targetModifier;
                                if (this.target === 'viewport') {
                                    this.target = document.body;
                                    this.targetModifier = 'visible';
                                }
                                else if (this.target === 'scroll-handle') {
                                    this.target = document.body;
                                    this.targetModifier = 'scroll-handle';
                                }
                                ['element', 'target'].forEach(function (key) {
                                    if (typeof _this2[key] === 'undefined') {
                                        throw new Error('Tether Error: Both element and target must be defined');
                                    }
                                    if (typeof _this2[key].jquery !== 'undefined') {
                                        _this2[key] = _this2[key][0];
                                    }
                                    else if (typeof _this2[key] === 'string') {
                                        _this2[key] = document.querySelector(_this2[key]);
                                    }
                                });
                                addClass(this.element, this.getClass('element'));
                                if (!(this.options.addTargetClasses === false)) {
                                    addClass(this.target, this.getClass('target'));
                                }
                                if (!this.options.attachment) {
                                    throw new Error('Tether Error: You must provide an attachment');
                                }
                                this.targetAttachment = parseAttachment(this.options.targetAttachment);
                                this.attachment = parseAttachment(this.options.attachment);
                                this.offset = parseOffset(this.options.offset);
                                this.targetOffset = parseOffset(this.options.targetOffset);
                                if (typeof this.scrollParents !== 'undefined') {
                                    this.disable();
                                }
                                if (this.targetModifier === 'scroll-handle') {
                                    this.scrollParents = [this.target];
                                }
                                else {
                                    this.scrollParents = getScrollParents(this.target);
                                }
                                if (!(this.options.enabled === false)) {
                                    this.enable(pos);
                                }
                            }
                        }, {
                            key: 'getTargetBounds',
                            value: function getTargetBounds() {
                                if (typeof this.targetModifier !== 'undefined') {
                                    if (this.targetModifier === 'visible') {
                                        if (this.target === document.body) {
                                            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
                                        }
                                        else {
                                            var bounds = getBounds(this.target);
                                            var out = {
                                                height: bounds.height,
                                                width: bounds.width,
                                                top: bounds.top,
                                                left: bounds.left
                                            };
                                            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
                                            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
                                            out.height = Math.min(innerHeight, out.height);
                                            out.height -= 2;
                                            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
                                            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
                                            out.width = Math.min(innerWidth, out.width);
                                            out.width -= 2;
                                            if (out.top < pageYOffset) {
                                                out.top = pageYOffset;
                                            }
                                            if (out.left < pageXOffset) {
                                                out.left = pageXOffset;
                                            }
                                            return out;
                                        }
                                    }
                                    else if (this.targetModifier === 'scroll-handle') {
                                        var bounds = undefined;
                                        var target = this.target;
                                        if (target === document.body) {
                                            target = document.documentElement;
                                            bounds = {
                                                left: pageXOffset,
                                                top: pageYOffset,
                                                height: innerHeight,
                                                width: innerWidth
                                            };
                                        }
                                        else {
                                            bounds = getBounds(target);
                                        }
                                        var style = getComputedStyle(target);
                                        var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
                                        var scrollBottom = 0;
                                        if (hasBottomScroll) {
                                            scrollBottom = 15;
                                        }
                                        var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
                                        var out = {
                                            width: 15,
                                            height: height * 0.975 * (height / target.scrollHeight),
                                            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
                                        };
                                        var fitAdj = 0;
                                        if (height < 408 && this.target === document.body) {
                                            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
                                        }
                                        if (this.target !== document.body) {
                                            out.height = Math.max(out.height, 24);
                                        }
                                        var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
                                        out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
                                        if (this.target === document.body) {
                                            out.height = Math.max(out.height, 24);
                                        }
                                        return out;
                                    }
                                }
                                else {
                                    return getBounds(this.target);
                                }
                            }
                        }, {
                            key: 'clearCache',
                            value: function clearCache() {
                                this._cache = {};
                            }
                        }, {
                            key: 'cache',
                            value: function cache(k, getter) {
                                // More than one module will often need the same DOM info, so
                                // we keep a cache which is cleared on each position call
                                if (typeof this._cache === 'undefined') {
                                    this._cache = {};
                                }
                                if (typeof this._cache[k] === 'undefined') {
                                    this._cache[k] = getter.call(this);
                                }
                                return this._cache[k];
                            }
                        }, {
                            key: 'enable',
                            value: function enable() {
                                var _this3 = this;
                                var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                                if (!(this.options.addTargetClasses === false)) {
                                    addClass(this.target, this.getClass('enabled'));
                                }
                                addClass(this.element, this.getClass('enabled'));
                                this.enabled = true;
                                this.scrollParents.forEach(function (parent) {
                                    if (parent !== _this3.target.ownerDocument) {
                                        parent.addEventListener('scroll', _this3.position);
                                    }
                                });
                                if (pos) {
                                    this.position();
                                }
                            }
                        }, {
                            key: 'disable',
                            value: function disable() {
                                var _this4 = this;
                                removeClass(this.target, this.getClass('enabled'));
                                removeClass(this.element, this.getClass('enabled'));
                                this.enabled = false;
                                if (typeof this.scrollParents !== 'undefined') {
                                    this.scrollParents.forEach(function (parent) {
                                        parent.removeEventListener('scroll', _this4.position);
                                    });
                                }
                            }
                        }, {
                            key: 'destroy',
                            value: function destroy() {
                                var _this5 = this;
                                this.disable();
                                tethers.forEach(function (tether, i) {
                                    if (tether === _this5) {
                                        tethers.splice(i, 1);
                                    }
                                });
                                // Remove any elements we were using for convenience from the DOM
                                if (tethers.length === 0) {
                                    removeUtilElements();
                                }
                            }
                        }, {
                            key: 'updateAttachClasses',
                            value: function updateAttachClasses(elementAttach, targetAttach) {
                                var _this6 = this;
                                elementAttach = elementAttach || this.attachment;
                                targetAttach = targetAttach || this.targetAttachment;
                                var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
                                if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
                                    // updateAttachClasses can be called more than once in a position call, so
                                    // we need to clean up after ourselves such that when the last defer gets
                                    // ran it doesn't add any extra classes from previous calls.
                                    this._addAttachClasses.splice(0, this._addAttachClasses.length);
                                }
                                if (typeof this._addAttachClasses === 'undefined') {
                                    this._addAttachClasses = [];
                                }
                                var add = this._addAttachClasses;
                                if (elementAttach.top) {
                                    add.push(this.getClass('element-attached') + '-' + elementAttach.top);
                                }
                                if (elementAttach.left) {
                                    add.push(this.getClass('element-attached') + '-' + elementAttach.left);
                                }
                                if (targetAttach.top) {
                                    add.push(this.getClass('target-attached') + '-' + targetAttach.top);
                                }
                                if (targetAttach.left) {
                                    add.push(this.getClass('target-attached') + '-' + targetAttach.left);
                                }
                                var all = [];
                                sides.forEach(function (side) {
                                    all.push(_this6.getClass('element-attached') + '-' + side);
                                    all.push(_this6.getClass('target-attached') + '-' + side);
                                });
                                defer(function () {
                                    if (!(typeof _this6._addAttachClasses !== 'undefined')) {
                                        return;
                                    }
                                    updateClasses(_this6.element, _this6._addAttachClasses, all);
                                    if (!(_this6.options.addTargetClasses === false)) {
                                        updateClasses(_this6.target, _this6._addAttachClasses, all);
                                    }
                                    delete _this6._addAttachClasses;
                                });
                            }
                        }, {
                            key: 'position',
                            value: function position() {
                                var _this7 = this;
                                var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                                // flushChanges commits the changes immediately, leave true unless you are positioning multiple
                                // tethers (in which case call Tether.Utils.flush yourself when you're done)
                                if (!this.enabled) {
                                    return;
                                }
                                this.clearCache();
                                // Turn 'auto' attachments into the appropriate corner or edge
                                var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
                                this.updateAttachClasses(this.attachment, targetAttachment);
                                var elementPos = this.cache('element-bounds', function () {
                                    return getBounds(_this7.element);
                                });
                                var width = elementPos.width;
                                var height = elementPos.height;
                                if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
                                    var _lastSize = this.lastSize;
                                    // We cache the height and width to make it possible to position elements that are
                                    // getting hidden.
                                    width = _lastSize.width;
                                    height = _lastSize.height;
                                }
                                else {
                                    this.lastSize = { width: width, height: height };
                                }
                                var targetPos = this.cache('target-bounds', function () {
                                    return _this7.getTargetBounds();
                                });
                                var targetSize = targetPos;
                                // Get an actual px offset from the attachment
                                var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
                                var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
                                var manualOffset = offsetToPx(this.offset, { width: width, height: height });
                                var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
                                // Add the manually provided offset
                                offset = addOffset(offset, manualOffset);
                                targetOffset = addOffset(targetOffset, manualTargetOffset);
                                // It's now our goal to make (element position + offset) == (target position + target offset)
                                var left = targetPos.left + targetOffset.left - offset.left;
                                var top = targetPos.top + targetOffset.top - offset.top;
                                for (var i = 0; i < _utils2['default'].modules.length; ++i) {
                                    var _module2 = _utils2['default'].modules[i];
                                    var ret = _module2.position.call(this, {
                                        left: left,
                                        top: top,
                                        targetAttachment: targetAttachment,
                                        targetPos: targetPos,
                                        elementPos: elementPos,
                                        offset: offset,
                                        targetOffset: targetOffset,
                                        manualOffset: manualOffset,
                                        manualTargetOffset: manualTargetOffset,
                                        scrollbarSize: scrollbarSize,
                                        attachment: this.attachment
                                    });
                                    if (ret === false) {
                                        return false;
                                    }
                                    else if (typeof ret === 'undefined' || typeof ret !== 'object') {
                                        continue;
                                    }
                                    else {
                                        top = ret.top;
                                        left = ret.left;
                                    }
                                }
                                // We describe the position three different ways to give the optimizer
                                // a chance to decide the best possible way to position the element
                                // with the fewest repaints.
                                var next = {
                                    // It's position relative to the page (absolute positioning when
                                    // the element is a child of the body)
                                    page: {
                                        top: top,
                                        left: left
                                    },
                                    // It's position relative to the viewport (fixed positioning)
                                    viewport: {
                                        top: top - pageYOffset,
                                        bottom: pageYOffset - top - height + innerHeight,
                                        left: left - pageXOffset,
                                        right: pageXOffset - left - width + innerWidth
                                    }
                                };
                                var doc = this.target.ownerDocument;
                                var win = doc.defaultView;
                                var scrollbarSize = undefined;
                                if (doc.body.scrollWidth > win.innerWidth) {
                                    scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
                                    next.viewport.bottom -= scrollbarSize.height;
                                }
                                if (doc.body.scrollHeight > win.innerHeight) {
                                    scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
                                    next.viewport.right -= scrollbarSize.width;
                                }
                                if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
                                    // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
                                    next.page.bottom = doc.body.scrollHeight - top - height;
                                    next.page.right = doc.body.scrollWidth - left - width;
                                }
                                if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
                                    (function () {
                                        var offsetParent = _this7.cache('target-offsetparent', function () {
                                            return getOffsetParent(_this7.target);
                                        });
                                        var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
                                            return getBounds(offsetParent);
                                        });
                                        var offsetParentStyle = getComputedStyle(offsetParent);
                                        var offsetParentSize = offsetPosition;
                                        var offsetBorder = {};
                                        ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
                                            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
                                        });
                                        offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
                                        offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
                                        if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
                                            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                                                // We're within the visible part of the target's scroll parent
                                                var scrollTop = offsetParent.scrollTop;
                                                var scrollLeft = offsetParent.scrollLeft;
                                                // It's position relative to the target's offset parent (absolute positioning when
                                                // the element is moved to be a child of the target's offset parent).
                                                next.offset = {
                                                    top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                                                    left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                                                };
                                            }
                                        }
                                    })();
                                }
                                // We could also travel up the DOM and try each containing context, rather than only
                                // looking at the body, but we're gonna get diminishing returns.
                                this.move(next);
                                this.history.unshift(next);
                                if (this.history.length > 3) {
                                    this.history.pop();
                                }
                                if (flushChanges) {
                                    flush();
                                }
                                return true;
                            }
                            // THE ISSUE
                        }, {
                            key: 'move',
                            value: function move(pos) {
                                var _this8 = this;
                                if (!(typeof this.element.parentNode !== 'undefined')) {
                                    return;
                                }
                                var same = {};
                                for (var type in pos) {
                                    same[type] = {};
                                    for (var key in pos[type]) {
                                        var found = false;
                                        for (var i = 0; i < this.history.length; ++i) {
                                            var point = this.history[i];
                                            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                                                found = true;
                                                break;
                                            }
                                        }
                                        if (!found) {
                                            same[type][key] = true;
                                        }
                                    }
                                }
                                var css = { top: '', left: '', right: '', bottom: '' };
                                var transcribe = function transcribe(_same, _pos) {
                                    var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
                                    var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
                                    if (gpu !== false) {
                                        var yPos = undefined, xPos = undefined;
                                        if (_same.top) {
                                            css.top = 0;
                                            yPos = _pos.top;
                                        }
                                        else {
                                            css.bottom = 0;
                                            yPos = -_pos.bottom;
                                        }
                                        if (_same.left) {
                                            css.left = 0;
                                            xPos = _pos.left;
                                        }
                                        else {
                                            css.right = 0;
                                            xPos = -_pos.right;
                                        }
                                        css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';
                                        if (transformKey !== 'msTransform') {
                                            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
                                            // but IE9 doesn't support 3d transforms and will choke.
                                            css[transformKey] += " translateZ(0)";
                                        }
                                    }
                                    else {
                                        if (_same.top) {
                                            css.top = _pos.top + 'px';
                                        }
                                        else {
                                            css.bottom = _pos.bottom + 'px';
                                        }
                                        if (_same.left) {
                                            css.left = _pos.left + 'px';
                                        }
                                        else {
                                            css.right = _pos.right + 'px';
                                        }
                                    }
                                };
                                var moved = false;
                                if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
                                    css.position = 'absolute';
                                    transcribe(same.page, pos.page);
                                }
                                else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
                                    css.position = 'fixed';
                                    transcribe(same.viewport, pos.viewport);
                                }
                                else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
                                    (function () {
                                        css.position = 'absolute';
                                        var offsetParent = _this8.cache('target-offsetparent', function () {
                                            return getOffsetParent(_this8.target);
                                        });
                                        if (getOffsetParent(_this8.element) !== offsetParent) {
                                            defer(function () {
                                                _this8.element.parentNode.removeChild(_this8.element);
                                                offsetParent.appendChild(_this8.element);
                                            });
                                        }
                                        transcribe(same.offset, pos.offset);
                                        moved = true;
                                    })();
                                }
                                else {
                                    css.position = 'absolute';
                                    transcribe({ top: true, left: true }, pos.page);
                                }
                                if (!moved) {
                                    var offsetParentIsBody = true;
                                    var currentNode = this.element.parentNode;
                                    while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
                                        if (getComputedStyle(currentNode).position !== 'static') {
                                            offsetParentIsBody = false;
                                            break;
                                        }
                                        currentNode = currentNode.parentNode;
                                    }
                                    if (!offsetParentIsBody) {
                                        this.element.parentNode.removeChild(this.element);
                                        this.element.ownerDocument.body.appendChild(this.element);
                                    }
                                }
                                // Any css change will trigger a repaint, so let's avoid one if nothing changed
                                var writeCSS = {};
                                var write = false;
                                for (var key in css) {
                                    var val = css[key];
                                    var elVal = this.element.style[key];
                                    if (elVal !== val) {
                                        write = true;
                                        writeCSS[key] = val;
                                    }
                                }
                                if (write) {
                                    defer(function () {
                                        extend(_this8.element.style, writeCSS);
                                        _this8.trigger('repositioned');
                                    });
                                }
                            }
                        }]);
                    return TetherClass;
                })(Evented);
                TetherClass.modules = [];
                _utils2['default'].position = position;
                var Tether = extend(TetherClass, _utils2['default']);
                exports['default'] = Tether;
                module.exports = exports['default'];
            }, { "./abutment": 1, "./constraint": 2, "./shift": 3, "./utils": 5 }], 5: [function (require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', {
                    value: true
                });
                var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } } return function (Constructor, protoProps, staticProps) { if (protoProps)
                    defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    defineProperties(Constructor, staticProps); return Constructor; }; })();
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                } }
                var TetherBase = { modules: [] };
                var zeroElement = null;
                // Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
                // if the element lies within a nested document (<frame> or <iframe>-like).
                function getActualBoundingClientRect(node) {
                    var boundingRect = node.getBoundingClientRect();
                    // The original object returned by getBoundingClientRect is immutable, so we clone it
                    // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
                    var rect = {};
                    for (var k in boundingRect) {
                        rect[k] = boundingRect[k];
                    }
                    if (node.ownerDocument !== document) {
                        var _frameElement = node.ownerDocument.defaultView.frameElement;
                        if (_frameElement) {
                            var frameRect = getActualBoundingClientRect(_frameElement);
                            rect.top += frameRect.top;
                            rect.bottom += frameRect.top;
                            rect.left += frameRect.left;
                            rect.right += frameRect.left;
                        }
                    }
                    return rect;
                }
                function getScrollParents(el) {
                    // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                    var computedStyle = getComputedStyle(el) || {};
                    var position = computedStyle.position;
                    var parents = [];
                    if (position === 'fixed') {
                        return [el];
                    }
                    var parent = el;
                    while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
                        var style = undefined;
                        try {
                            style = getComputedStyle(parent);
                        }
                        catch (err) { }
                        if (typeof style === 'undefined' || style === null) {
                            parents.push(parent);
                            return parents;
                        }
                        var _style = style;
                        var overflow = _style.overflow;
                        var overflowX = _style.overflowX;
                        var overflowY = _style.overflowY;
                        if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
                            if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
                                parents.push(parent);
                            }
                        }
                    }
                    parents.push(el.ownerDocument.body);
                    // If the node is within a frame, account for the parent window scroll
                    if (el.ownerDocument !== document) {
                        parents.push(el.ownerDocument.defaultView);
                    }
                    return parents;
                }
                var uniqueId = (function () {
                    var id = 0;
                    return function () {
                        return ++id;
                    };
                })();
                var zeroPosCache = {};
                var getOrigin = function getOrigin() {
                    // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
                    // jitter as the user scrolls that messes with our ability to detect if two positions
                    // are equivilant or not.  We place an element at the top left of the page that will
                    // get the same jitter, so we can cancel the two out.
                    var node = zeroElement;
                    if (!node) {
                        node = document.createElement('div');
                        node.setAttribute('data-tether-id', uniqueId());
                        extend(node.style, {
                            top: 0,
                            left: 0,
                            position: 'absolute'
                        });
                        document.body.appendChild(node);
                        zeroElement = node;
                    }
                    var id = node.getAttribute('data-tether-id');
                    if (typeof zeroPosCache[id] === 'undefined') {
                        zeroPosCache[id] = getActualBoundingClientRect(node);
                        // Clear the cache when this position call is done
                        defer(function () {
                            delete zeroPosCache[id];
                        });
                    }
                    return zeroPosCache[id];
                };
                function removeUtilElements() {
                    if (zeroElement) {
                        document.body.removeChild(zeroElement);
                    }
                    zeroElement = null;
                }
                ;
                function getBounds(el) {
                    var doc = undefined;
                    if (el === document) {
                        doc = document;
                        el = document.documentElement;
                    }
                    else {
                        doc = el.ownerDocument;
                    }
                    var docEl = doc.documentElement;
                    var box = getActualBoundingClientRect(el);
                    var origin = getOrigin();
                    box.top -= origin.top;
                    box.left -= origin.left;
                    if (typeof box.width === 'undefined') {
                        box.width = document.body.scrollWidth - box.left - box.right;
                    }
                    if (typeof box.height === 'undefined') {
                        box.height = document.body.scrollHeight - box.top - box.bottom;
                    }
                    box.top = box.top - docEl.clientTop;
                    box.left = box.left - docEl.clientLeft;
                    box.right = doc.body.clientWidth - box.width - box.left;
                    box.bottom = doc.body.clientHeight - box.height - box.top;
                    return box;
                }
                function getOffsetParent(el) {
                    return el.offsetParent || document.documentElement;
                }
                function getScrollBarSize() {
                    var inner = document.createElement('div');
                    inner.style.width = '100%';
                    inner.style.height = '200px';
                    var outer = document.createElement('div');
                    extend(outer.style, {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        pointerEvents: 'none',
                        visibility: 'hidden',
                        width: '200px',
                        height: '150px',
                        overflow: 'hidden'
                    });
                    outer.appendChild(inner);
                    document.body.appendChild(outer);
                    var widthContained = inner.offsetWidth;
                    outer.style.overflow = 'scroll';
                    var widthScroll = inner.offsetWidth;
                    if (widthContained === widthScroll) {
                        widthScroll = outer.clientWidth;
                    }
                    document.body.removeChild(outer);
                    var width = widthContained - widthScroll;
                    return { width: width, height: width };
                }
                function extend() {
                    var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    var args = [];
                    Array.prototype.push.apply(args, arguments);
                    args.slice(1).forEach(function (obj) {
                        if (obj) {
                            for (var key in obj) {
                                if (({}).hasOwnProperty.call(obj, key)) {
                                    out[key] = obj[key];
                                }
                            }
                        }
                    });
                    return out;
                }
                function removeClass(el, name) {
                    if (typeof el.classList !== 'undefined') {
                        name.split(' ').forEach(function (cls) {
                            if (cls.trim()) {
                                el.classList.remove(cls);
                            }
                        });
                    }
                    else {
                        var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
                        var className = getClassName(el).replace(regex, ' ');
                        setClassName(el, className);
                    }
                }
                function addClass(el, name) {
                    if (typeof el.classList !== 'undefined') {
                        name.split(' ').forEach(function (cls) {
                            if (cls.trim()) {
                                el.classList.add(cls);
                            }
                        });
                    }
                    else {
                        removeClass(el, name);
                        var cls = getClassName(el) + (' ' + name);
                        setClassName(el, cls);
                    }
                }
                function hasClass(el, name) {
                    if (typeof el.classList !== 'undefined') {
                        return el.classList.contains(name);
                    }
                    var className = getClassName(el);
                    return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
                }
                function getClassName(el) {
                    // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
                    // completely separately SVGAnimatedString base classes
                    if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
                        return el.className.baseVal;
                    }
                    return el.className;
                }
                function setClassName(el, className) {
                    el.setAttribute('class', className);
                }
                function updateClasses(el, add, all) {
                    // Of the set of 'all' classes, we need the 'add' classes, and only the
                    // 'add' classes to be set.
                    all.forEach(function (cls) {
                        if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
                            removeClass(el, cls);
                        }
                    });
                    add.forEach(function (cls) {
                        if (!hasClass(el, cls)) {
                            addClass(el, cls);
                        }
                    });
                }
                var deferred = [];
                var defer = function defer(fn) {
                    deferred.push(fn);
                };
                var flush = function flush() {
                    var fn = undefined;
                    while (fn = deferred.pop()) {
                        fn();
                    }
                };
                var Evented = (function () {
                    function Evented() {
                        _classCallCheck(this, Evented);
                    }
                    _createClass(Evented, [{
                            key: 'on',
                            value: function on(event, handler, ctx) {
                                var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
                                if (typeof this.bindings === 'undefined') {
                                    this.bindings = {};
                                }
                                if (typeof this.bindings[event] === 'undefined') {
                                    this.bindings[event] = [];
                                }
                                this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
                            }
                        }, {
                            key: 'once',
                            value: function once(event, handler, ctx) {
                                this.on(event, handler, ctx, true);
                            }
                        }, {
                            key: 'off',
                            value: function off(event, handler) {
                                if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
                                    return;
                                }
                                if (typeof handler === 'undefined') {
                                    delete this.bindings[event];
                                }
                                else {
                                    var i = 0;
                                    while (i < this.bindings[event].length) {
                                        if (this.bindings[event][i].handler === handler) {
                                            this.bindings[event].splice(i, 1);
                                        }
                                        else {
                                            ++i;
                                        }
                                    }
                                }
                            }
                        }, {
                            key: 'trigger',
                            value: function trigger(event) {
                                if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
                                    var i = 0;
                                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                        args[_key - 1] = arguments[_key];
                                    }
                                    while (i < this.bindings[event].length) {
                                        var _bindings$event$i = this.bindings[event][i];
                                        var handler = _bindings$event$i.handler;
                                        var ctx = _bindings$event$i.ctx;
                                        var once = _bindings$event$i.once;
                                        var context = ctx;
                                        if (typeof context === 'undefined') {
                                            context = this;
                                        }
                                        handler.apply(context, args);
                                        if (once) {
                                            this.bindings[event].splice(i, 1);
                                        }
                                        else {
                                            ++i;
                                        }
                                    }
                                }
                            }
                        }]);
                    return Evented;
                })();
                TetherBase.Utils = {
                    getActualBoundingClientRect: getActualBoundingClientRect,
                    getScrollParents: getScrollParents,
                    getBounds: getBounds,
                    getOffsetParent: getOffsetParent,
                    extend: extend,
                    addClass: addClass,
                    removeClass: removeClass,
                    hasClass: hasClass,
                    updateClasses: updateClasses,
                    defer: defer,
                    flush: flush,
                    uniqueId: uniqueId,
                    Evented: Evented,
                    getScrollBarSize: getScrollBarSize,
                    removeUtilElements: removeUtilElements
                };
                exports['default'] = TetherBase;
                module.exports = exports['default'];
            }, {}] }, {}, [4])(4);
});


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** Used as references for various `Number` constants. */
var NAN = 0 / 0;
/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;
/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag);
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
}
module.exports = toNumber;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _TransitionGroup = __webpack_require__(20);
var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
var _CSSTransitionGroupChild = __webpack_require__(68);
var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);
var _PropTypes = __webpack_require__(22);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propTypes = {
    transitionName: _PropTypes.nameShape.isRequired,
    transitionAppear: _propTypes2.default.bool,
    transitionEnter: _propTypes2.default.bool,
    transitionLeave: _propTypes2.default.bool,
    transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
    transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
    transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};
var defaultProps = {
    transitionAppear: false,
    transitionEnter: true,
    transitionLeave: true
};
var CSSTransitionGroup = function (_React$Component) {
    _inherits(CSSTransitionGroup, _React$Component);
    function CSSTransitionGroup() {
        var _temp, _this, _ret;
        _classCallCheck(this, CSSTransitionGroup);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
            return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
                name: _this.props.transitionName,
                appear: _this.props.transitionAppear,
                enter: _this.props.transitionEnter,
                leave: _this.props.transitionLeave,
                appearTimeout: _this.props.transitionAppearTimeout,
                enterTimeout: _this.props.transitionEnterTimeout,
                leaveTimeout: _this.props.transitionLeaveTimeout
            }, child);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // We need to provide this childFactory so that
    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
    // leave while it is leaving.
    CSSTransitionGroup.prototype.render = function render() {
        return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
    };
    return CSSTransitionGroup;
}(_react2.default.Component);
CSSTransitionGroup.displayName = 'CSSTransitionGroup';
CSSTransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;
exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function chain() {
    var len = arguments.length;
    var args = [];
    for (var i = 0; i < len; i++)
        args[i] = arguments[i];
    args = args.filter(function (fn) { return fn != null; });
    if (args.length === 0)
        return undefined;
    if (args.length === 1)
        return args[0];
    return args.reduce(function (current, next) {
        return function chainedFunction() {
            current.apply(this, arguments);
            next.apply(this, arguments);
        };
    });
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var warning = function () { };
if (process.env.NODE_ENV !== 'production') {
    warning = function (condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' +
                'message argument');
        }
        if (format.length < 10 || (/^[s\W]*$/).test(format)) {
            throw new Error('The warning format should be able to uniquely identify this ' +
                'warning. Please, use a more descriptive format than: ' + format);
        }
        if (!condition) {
            var argIndex = 0;
            var message = 'Warning: ' +
                format.replace(/%s/g, function () {
                    return args[argIndex++];
                });
            if (typeof console !== 'undefined') {
                console.error(message);
            }
            try {
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
            }
            catch (x) { }
        }
    };
}
module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
var _react = __webpack_require__(0);
/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
    if (!children) {
        return children;
    }
    var result = {};
    _react.Children.map(children, function (child) {
        return child;
    }).forEach(function (child) {
        result[child.key] = child;
    });
    return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
        if (next.hasOwnProperty(key)) {
            return next[key];
        }
        return prev[key];
    }
    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = {};
    var pendingKeys = [];
    for (var prevKey in prev) {
        if (next.hasOwnProperty(prevKey)) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        }
        else {
            pendingKeys.push(prevKey);
        }
    }
    var i = void 0;
    var childMapping = {};
    for (var nextKey in next) {
        if (nextKeysPending.hasOwnProperty(nextKey)) {
            for (i = 0; i < nextKeysPending[nextKey].length; i++) {
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
            }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    }
    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _addClass = __webpack_require__(69);
var _addClass2 = _interopRequireDefault(_addClass);
var _removeClass = __webpack_require__(71);
var _removeClass2 = _interopRequireDefault(_removeClass);
var _requestAnimationFrame = __webpack_require__(72);
var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);
var _properties = __webpack_require__(73);
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactDom = __webpack_require__(14);
var _PropTypes = __webpack_require__(22);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var events = [];
if (_properties.transitionEnd)
    events.push(_properties.transitionEnd);
if (_properties.animationEnd)
    events.push(_properties.animationEnd);
function addEndListener(node, listener) {
    if (events.length) {
        events.forEach(function (e) {
            return node.addEventListener(e, listener, false);
        });
    }
    else {
        setTimeout(listener, 0);
    }
    return function () {
        if (!events.length)
            return;
        events.forEach(function (e) {
            return node.removeEventListener(e, listener, false);
        });
    };
}
var propTypes = {
    children: _propTypes2.default.node,
    name: _PropTypes.nameShape.isRequired,
    // Once we require timeouts to be specified, we can remove the
    // boolean flags (appear etc.) and just accept a number
    // or a bool for the timeout flags (appearTimeout etc.)
    appear: _propTypes2.default.bool,
    enter: _propTypes2.default.bool,
    leave: _propTypes2.default.bool,
    appearTimeout: _propTypes2.default.number,
    enterTimeout: _propTypes2.default.number,
    leaveTimeout: _propTypes2.default.number
};
var CSSTransitionGroupChild = function (_React$Component) {
    _inherits(CSSTransitionGroupChild, _React$Component);
    function CSSTransitionGroupChild() {
        var _temp, _this, _ret;
        _classCallCheck(this, CSSTransitionGroupChild);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
            if (_this.props.appear) {
                _this.transition('appear', done, _this.props.appearTimeout);
            }
            else {
                done();
            }
        }, _this.componentWillEnter = function (done) {
            if (_this.props.enter) {
                _this.transition('enter', done, _this.props.enterTimeout);
            }
            else {
                done();
            }
        }, _this.componentWillLeave = function (done) {
            if (_this.props.leave) {
                _this.transition('leave', done, _this.props.leaveTimeout);
            }
            else {
                done();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
        this.classNameAndNodeQueue = [];
        this.transitionTimeouts = [];
    };
    CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
        this.unmounted = true;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.transitionTimeouts.forEach(function (timeout) {
            clearTimeout(timeout);
        });
        this.classNameAndNodeQueue.length = 0;
    };
    CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
        var node = (0, _reactDom.findDOMNode)(this);
        if (!node) {
            if (finishCallback) {
                finishCallback();
            }
            return;
        }
        var className = this.props.name[animationType] || this.props.name + '-' + animationType;
        var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
        var timer = null;
        var removeListeners = void 0;
        (0, _addClass2.default)(node, className);
        // Need to do this to actually trigger a transition.
        this.queueClassAndNode(activeClassName, node);
        // Clean-up the animation after the specified delay
        var finish = function finish(e) {
            if (e && e.target !== node) {
                return;
            }
            clearTimeout(timer);
            if (removeListeners)
                removeListeners();
            (0, _removeClass2.default)(node, className);
            (0, _removeClass2.default)(node, activeClassName);
            if (removeListeners)
                removeListeners();
            // Usually this optional callback is used for informing an owner of
            // a leave animation and telling it to remove the child.
            if (finishCallback) {
                finishCallback();
            }
        };
        if (timeout) {
            timer = setTimeout(finish, timeout);
            this.transitionTimeouts.push(timer);
        }
        else if (_properties.transitionEnd) {
            removeListeners = addEndListener(node, finish);
        }
    };
    CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
        var _this2 = this;
        this.classNameAndNodeQueue.push({
            className: className,
            node: node
        });
        if (!this.rafHandle) {
            this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
                return _this2.flushClassNameAndNodeQueue();
            });
        }
    };
    CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
        if (!this.unmounted) {
            this.classNameAndNodeQueue.forEach(function (obj) {
                // This is for to force a repaint,
                // which is necessary in order to transition styles when adding a class name.
                /* eslint-disable no-unused-expressions */
                obj.node.scrollTop;
                /* eslint-enable no-unused-expressions */
                (0, _addClass2.default)(obj.node, obj.className);
            });
        }
        this.classNameAndNodeQueue.length = 0;
        this.rafHandle = null;
    };
    CSSTransitionGroupChild.prototype.render = function render() {
        var props = _extends({}, this.props);
        delete props.name;
        delete props.appear;
        delete props.enter;
        delete props.leave;
        delete props.appearTimeout;
        delete props.enterTimeout;
        delete props.leaveTimeout;
        delete props.children;
        return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
    };
    return CSSTransitionGroupChild;
}(_react2.default.Component);
CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';
CSSTransitionGroupChild.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addClass;
var _hasClass = __webpack_require__(70);
var _hasClass2 = _interopRequireDefault(_hasClass);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function addClass(element, className) {
    if (element.classList)
        element.classList.add(className);
    else if (!(0, _hasClass2.default)(element))
        element.className = element.className + ' ' + className;
}
module.exports = exports['default'];


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hasClass;
function hasClass(element, className) {
    if (element.classList)
        return !!className && element.classList.contains(className);
    else
        return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function removeClass(element, className) {
    if (element.classList)
        element.classList.remove(className);
    else
        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _inDOM = __webpack_require__(21);
var _inDOM2 = _interopRequireDefault(_inDOM);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;
var getKey = function getKey(vendor, k) {
    return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};
if (_inDOM2.default) {
    vendors.some(function (vendor) {
        var rafKey = getKey(vendor, 'request');
        if (rafKey in window) {
            cancel = getKey(vendor, 'cancel');
            return raf = function raf(cb) {
                return window[rafKey](cb);
            };
        }
    });
}
/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
    var curr = new Date().getTime(), ms = Math.max(0, 16 - (curr - prev)), req = setTimeout(fn, ms);
    prev = curr;
    return req;
}
compatRaf = function compatRaf(cb) {
    return raf(cb);
};
compatRaf.cancel = function (id) {
    window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;
var _inDOM = __webpack_require__(21);
var _inDOM2 = _interopRequireDefault(_inDOM);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var transform = 'transform';
var prefix = void 0, transitionEnd = void 0, animationEnd = void 0;
var transitionProperty = void 0, transitionDuration = void 0, transitionTiming = void 0, transitionDelay = void 0;
var animationName = void 0, animationDuration = void 0, animationTiming = void 0, animationDelay = void 0;
if (_inDOM2.default) {
    var _getTransitionPropert = getTransitionProperties();
    prefix = _getTransitionPropert.prefix;
    exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
    exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
    exports.transform = transform = prefix + '-' + transform;
    exports.transitionProperty = transitionProperty = prefix + '-transition-property';
    exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
    exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
    exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';
    exports.animationName = animationName = prefix + '-animation-name';
    exports.animationDuration = animationDuration = prefix + '-animation-duration';
    exports.animationTiming = animationTiming = prefix + '-animation-delay';
    exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}
exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
    transform: transform,
    end: transitionEnd,
    property: transitionProperty,
    timing: transitionTiming,
    delay: transitionDelay,
    duration: transitionDuration
};
function getTransitionProperties() {
    var style = document.createElement('div').style;
    var vendorMap = {
        O: function O(e) {
            return 'o' + e.toLowerCase();
        },
        Moz: function Moz(e) {
            return e.toLowerCase();
        },
        Webkit: function Webkit(e) {
            return 'webkit' + e;
        },
        ms: function ms(e) {
            return 'MS' + e;
        }
    };
    var vendors = Object.keys(vendorMap);
    var transitionEnd = void 0, animationEnd = void 0;
    var prefix = '';
    for (var i = 0; i < vendors.length; i++) {
        var vendor = vendors[i];
        if (vendor + 'TransitionProperty' in style) {
            prefix = '-' + vendor.toLowerCase();
            transitionEnd = vendorMap[vendor]('TransitionEnd');
            animationEnd = vendorMap[vendor]('AnimationEnd');
            break;
        }
    }
    if (!transitionEnd && 'transitionProperty' in style)
        transitionEnd = 'transitionend';
    if (!animationEnd && 'animationName' in style)
        animationEnd = 'animationend';
    style = null;
    return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMessageModalAndButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap_lib_Button__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap_lib_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap_lib_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap_lib_Modal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap_lib_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap_lib_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap_lib_ModalHeader__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap_lib_ModalHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_reactstrap_lib_ModalHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap_lib_ModalBody__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap_lib_ModalBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap_lib_ModalBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap_lib_ModalFooter__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap_lib_ModalFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap_lib_ModalFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datatypes_message__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_window_ChatWindow__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// import "./AddUserModalAndButton.css";









var EditMessageModalAndButton = /** @class */ (function (_super) {
    __extends(EditMessageModalAndButton, _super);
    function EditMessageModalAndButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            modal: false,
            text: props.message.text,
            uuid: props.message.uuid
        };
        _this.toggle = _this.toggle.bind(_this);
        _this.editMessage = _this.editMessage.bind(_this);
        _this.editAndClose = _this.editAndClose.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    EditMessageModalAndButton.prototype.componentDidMount = function () {
        var _this = this;
        this.unsubscribe = this.context.store.subscribe(function () { return _this.forceUpdate(); });
    };
    EditMessageModalAndButton.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    EditMessageModalAndButton.prototype.toggle = function () {
        this.setState({
            modal: !this.state.modal
        });
    };
    EditMessageModalAndButton.prototype.editMessage = function () {
        var toBeEdited = new __WEBPACK_IMPORTED_MODULE_8__datatypes_message__["a" /* AppUserMessage */]();
        toBeEdited.text = this.state.text;
        toBeEdited.uuid = this.state.uuid;
        this.context.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_9__chat_window_ChatWindow__["b" /* MessageStoreActionEnum */].EDIT_MESSAGE,
            message: toBeEdited
        });
    };
    EditMessageModalAndButton.prototype.editAndClose = function () {
        this.editMessage();
        this.toggle();
    };
    EditMessageModalAndButton.prototype.handleChange = function (event) {
        this.setState({ text: event.currentTarget.value });
    };
    EditMessageModalAndButton.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "Icon", onClick: this.toggle, id: "EditMessageButton" + this.state.uuid },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_fontawesome__, { name: "pencil" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* UncontrolledTooltip */], { placement: "left", target: "EditMessageButton" + this.state.uuid }, "Edit Message"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_reactstrap_lib_Modal___default.a, { isOpen: this.state.modal, toggle: this.toggle },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_reactstrap_lib_ModalHeader___default.a, { toggle: this.toggle }, "Edit Message"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_reactstrap_lib_ModalBody___default.a, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("textarea", { rows: 5, style: { width: "100%", backgroundColor: "gainsboro", color: "#242424" }, value: this.state.text, onChange: this.handleChange })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_reactstrap_lib_ModalFooter___default.a, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_reactstrap_lib_Button___default.a, { onClick: this.editAndClose, color: "success" }, "Save"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_reactstrap_lib_Button___default.a, { onClick: this.toggle, color: "danger" }, "Cancel")))));
    };
    EditMessageModalAndButton.contextTypes = {
        store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
    };
    return EditMessageModalAndButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
        descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
} } return function (Constructor, protoProps, staticProps) { if (protoProps)
    defineProperties(Constructor.prototype, protoProps); if (staticProps)
    defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames = __webpack_require__(5);
var _classnames2 = _interopRequireDefault(_classnames);
var _utils = __webpack_require__(6);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propTypes = {
    baseClass: _propTypes2.default.string,
    baseClassIn: _propTypes2.default.string,
    tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    className: _propTypes2.default.string,
    cssModule: _propTypes2.default.object,
    transitionAppearTimeout: _propTypes2.default.number,
    transitionEnterTimeout: _propTypes2.default.number,
    transitionLeaveTimeout: _propTypes2.default.number,
    transitionAppear: _propTypes2.default.bool,
    transitionEnter: _propTypes2.default.bool,
    transitionLeave: _propTypes2.default.bool,
    onLeave: _propTypes2.default.func,
    onEnter: _propTypes2.default.func
};
var defaultProps = {
    tag: 'div',
    baseClass: 'fade',
    baseClassIn: 'show',
    transitionAppearTimeout: 0,
    transitionEnterTimeout: 0,
    transitionLeaveTimeout: 0,
    transitionAppear: true,
    transitionEnter: true,
    transitionLeave: true
};
var Fade = function (_React$Component) {
    _inherits(Fade, _React$Component);
    function Fade(props) {
        _classCallCheck(this, Fade);
        var _this = _possibleConstructorReturn(this, (Fade.__proto__ || Object.getPrototypeOf(Fade)).call(this, props));
        _this.state = {
            mounted: !props.transitionAppear
        };
        _this.onLeave = _this.onLeave.bind(_this);
        _this.onEnter = _this.onEnter.bind(_this);
        _this.timers = [];
        return _this;
    }
    _createClass(Fade, [{
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.timers.forEach(function (timer) {
                    return clearTimeout(timer);
                });
            }
        }, {
            key: 'onEnter',
            value: function onEnter(cb) {
                var _this2 = this;
                return function () {
                    cb();
                    if (_this2.props.onEnter) {
                        _this2.props.onEnter();
                    }
                };
            }
        }, {
            key: 'onLeave',
            value: function onLeave(cb) {
                var _this3 = this;
                return function () {
                    cb();
                    if (_this3.props.onLeave) {
                        _this3.props.onLeave();
                    }
                };
            }
        }, {
            key: 'componentWillAppear',
            value: function componentWillAppear(cb) {
                if (!this.props.transitionAppear) {
                    this.onEnter(cb)();
                }
                this.timers.push(setTimeout(this.onEnter(cb), this.props.transitionAppearTimeout));
            }
        }, {
            key: 'componentDidAppear',
            value: function componentDidAppear() {
                this.setState({
                    mounted: true
                });
            }
        }, {
            key: 'componentWillEnter',
            value: function componentWillEnter(cb) {
                if (!this.props.transitionEnter) {
                    this.onEnter(cb)();
                }
                this.timers.push(setTimeout(this.onEnter(cb), this.props.transitionEnterTimeout));
            }
        }, {
            key: 'componentDidEnter',
            value: function componentDidEnter() {
                this.setState({
                    mounted: true
                });
            }
        }, {
            key: 'componentWillLeave',
            value: function componentWillLeave(cb) {
                this.setState({
                    mounted: false
                });
                if (!this.props.transitionLeave) {
                    this.onLeave(cb)();
                }
                this.timers.push(setTimeout(this.onLeave(cb), this.props.transitionLeaveTimeout));
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props, baseClass = _props.baseClass, baseClassIn = _props.baseClassIn, className = _props.className, cssModule = _props.cssModule, Tag = _props.tag;
                var attributes = (0, _utils.omit)(this.props, Object.keys(propTypes));
                var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, baseClass, this.state.mounted ? baseClassIn : false), cssModule);
                return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
            }
        }]);
    return Fade;
}(_react2.default.Component);
Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;
exports.default = Fade;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(2);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames = __webpack_require__(5);
var _classnames2 = _interopRequireDefault(_classnames);
var _utils = __webpack_require__(6);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) {
    if (keys.indexOf(i) >= 0)
        continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
    target[i] = obj[i];
} return target; }
var propTypes = {
    tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    className: _propTypes2.default.string,
    cssModule: _propTypes2.default.object
};
var defaultProps = {
    tag: 'div'
};
var ModalFooter = function ModalFooter(props) {
    var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
    var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'modal-footer'), cssModule);
    return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
};
ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;
exports.default = ModalFooter;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./MessageContainer.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./MessageContainer.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".MessageContainer {\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  height: 0;\n}", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export createProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(15);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
    if (didWarnAboutReceivingStore) {
        return;
    }
    didWarnAboutReceivingStore = true;
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}
function createProvider() {
    var _Provider$childContex;
    var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
    var subKey = arguments[1];
    var subscriptionKey = subKey || storeKey + 'Subscription';
    var Provider = function (_Component) {
        _inherits(Provider, _Component);
        Provider.prototype.getChildContext = function getChildContext() {
            var _ref;
            return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
        };
        function Provider(props, context) {
            _classCallCheck(this, Provider);
            var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
            _this[storeKey] = props.store;
            return _this;
        }
        Provider.prototype.render = function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
        };
        return Provider;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
    if (process.env.NODE_ENV !== 'production') {
        Provider.prototype.componentWillReceiveProps = function (nextProps) {
            if (this[storeKey] !== nextProps.store) {
                warnAboutReceivingStore();
            }
        };
    }
    Provider.propTypes = {
        store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
        children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
    };
    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);
    return Provider;
}
/* harmony default export */ __webpack_exports__["a"] = (createProvider());

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    defineProperty(targetComponent, key, descriptor);
                }
                catch (e) { }
            }
        }
        return targetComponent;
    }
    return targetComponent;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
var invariant = function (condition, format, a, b, c, d, e, f) {
    if (process.env.NODE_ENV !== 'production') {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' +
                'for the full error message and additional helpful warnings.');
        }
        else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function () { return args[argIndex++]; }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
var CLEARED = null;
var nullListeners = {
    notify: function notify() { }
};
function createListenerCollection() {
    // the current/next pattern is copied from redux's createStore code.
    // TODO: refactor+expose that code to be reusable here?
    var current = [];
    var next = [];
    return {
        clear: function clear() {
            next = CLEARED;
            current = CLEARED;
        },
        notify: function notify() {
            var listeners = current = next;
            for (var i = 0; i < listeners.length; i++) {
                listeners[i]();
            }
        },
        get: function get() {
            return next;
        },
        subscribe: function subscribe(listener) {
            var isSubscribed = true;
            if (next === current)
                next = current.slice();
            next.push(listener);
            return function unsubscribe() {
                if (!isSubscribed || current === CLEARED)
                    return;
                isSubscribed = false;
                if (next === current)
                    next = current.slice();
                next.splice(next.indexOf(listener), 1);
            };
        }
    };
}
var Subscription = function () {
    function Subscription(store, parentSub, onStateChange) {
        _classCallCheck(this, Subscription);
        this.store = store;
        this.parentSub = parentSub;
        this.onStateChange = onStateChange;
        this.unsubscribe = null;
        this.listeners = nullListeners;
    }
    Subscription.prototype.addNestedSub = function addNestedSub(listener) {
        this.trySubscribe();
        return this.listeners.subscribe(listener);
    };
    Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
        this.listeners.notify();
    };
    Subscription.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.unsubscribe);
    };
    Subscription.prototype.trySubscribe = function trySubscribe() {
        if (!this.unsubscribe) {
            this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
            this.listeners = createListenerCollection();
        }
    };
    Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
            this.listeners.clear();
            this.listeners = nullListeners;
        }
    };
    return Subscription;
}();



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(103);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) {
    if (keys.indexOf(i) >= 0)
        continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
    target[i] = obj[i];
} return target; }






/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */
function match(arg, factories, name) {
    for (var i = factories.length - 1; i >= 0; i--) {
        var result = factories[i](arg);
        if (result)
            return result;
    }
    return function (dispatch, options) {
        throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
    };
}
function strictEqual(a, b) {
    return a === b;
}
// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$connectHOC = _ref.connectHOC, connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF, _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro, _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor, _ref$selectorFactory = _ref.selectorFactory, selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;
    return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
        var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}, _ref2$pure = _ref2.pure, pure = _ref2$pure === undefined ? true : _ref2$pure, _ref2$areStatesEqual = _ref2.areStatesEqual, areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual, _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual, areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua, _ref2$areStatePropsEq = _ref2.areStatePropsEqual, areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq, _ref2$areMergedPropsE = _ref2.areMergedPropsEqual, areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE, extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);
        var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
        var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
        var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
        return connectHOC(selectorFactory, _extends({
            // used in error messages
            methodName: 'connect',
            // used to compute Connect's displayName from the wrapped component's displayName.
            getDisplayName: function getDisplayName(name) {
                return 'Connect(' + name + ')';
            },
            // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
            shouldHandleStateChanges: Boolean(mapStateToProps),
            // passed through to selectorFactory
            initMapStateToProps: initMapStateToProps,
            initMapDispatchToProps: initMapDispatchToProps,
            initMergeProps: initMergeProps,
            pure: pure,
            areStatesEqual: areStatesEqual,
            areOwnPropsEqual: areOwnPropsEqual,
            areStatePropsEqual: areStatePropsEqual,
            areMergedPropsEqual: areMergedPropsEqual
        }, extraOptions));
    };
}
/* harmony default export */ __webpack_exports__["a"] = (createConnect());


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    else {
        return x !== x && y !== y;
    }
}
function shallowEqual(objA, objB) {
    if (is(objA, objB))
        return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length)
        return false;
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(35);


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
    return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
    return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
        return { dispatch: dispatch };
    }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
    return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* bindActionCreators */])(mapDispatchToProps, dispatch);
    }) : undefined;
}
/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(90);



/** `Object#toString` result references. */
var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
        ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
        : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}
/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(88);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();
/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(17)))

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(32);

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;
/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    }
    catch (e) { }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        }
        else {
            delete value[symToStringTag];
        }
    }
    return result;
}
/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
    return nativeObjectToString.call(value);
}
/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(92);

/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);
/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
    return function (arg) {
        return func(transform(arg));
    };
}
/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _ponyfill = __webpack_require__(97);
var _ponyfill2 = _interopRequireDefault(_ponyfill);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
var root; /* global window */
if (typeof self !== 'undefined') {
    root = self;
}
else if (typeof window !== 'undefined') {
    root = window;
}
else if (typeof global !== 'undefined') {
    root = global;
}
else if (true) {
    root = module;
}
else {
    root = Function('return this')();
}
var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17), __webpack_require__(96)(module)))

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = function (module) {
    if (!module.webpackPolyfill) {
        module.deprecate = function () { };
        module.paths = [];
        // module.parent = undefined by default
        if (!module.children)
            module.children = [];
        Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function () {
                return module.l;
            }
        });
        Object.defineProperty(module, "id", {
            enumerable: true,
            get: function () {
                return module.i;
            }
        });
        module.webpackPolyfill = 1;
    }
    return module;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
    var result;
    var _Symbol = root.Symbol;
    if (typeof _Symbol === 'function') {
        if (_Symbol.observable) {
            result = _Symbol.observable;
        }
        else {
            result = _Symbol('observable');
            _Symbol.observable = result;
        }
    }
    else {
        result = '@@observable';
    }
    return result;
}
;


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(33);



function getUndefinedStateErrorMessage(key, action) {
    var actionType = action && action.type;
    var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
    return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
    if (reducerKeys.length === 0) {
        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
        return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
    }
    var unexpectedKeys = Object.keys(inputState).filter(function (key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function (key) {
        unexpectedKeyCache[key] = true;
    });
    if (unexpectedKeys.length > 0) {
        return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
    }
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function (key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });
        if (typeof initialState === 'undefined') {
            throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
        }
        var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
        if (typeof reducer(undefined, { type: type }) === 'undefined') {
            throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
        }
    });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (process.env.NODE_ENV !== 'production') {
            if (typeof reducers[key] === 'undefined') {
                Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
            }
        }
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    var unexpectedKeyCache = void 0;
    if (process.env.NODE_ENV !== 'production') {
        unexpectedKeyCache = {};
    }
    var shapeAssertionError = void 0;
    try {
        assertReducerShape(finalReducers);
    }
    catch (e) {
        shapeAssertionError = e;
    }
    return function combination() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];
        if (shapeAssertionError) {
            throw shapeAssertionError;
        }
        if (process.env.NODE_ENV !== 'production') {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
                Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
            }
        }
        var hasChanged = false;
        var nextState = {};
        for (var _i = 0; _i < finalReducerKeys.length; _i++) {
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                var errorMessage = getUndefinedStateErrorMessage(_key, action);
                throw new Error(errorMessage);
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
    return function () {
        return dispatch(actionCreator.apply(undefined, arguments));
    };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== 'object' || actionCreators === null) {
        throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    }
    var keys = Object.keys(actionCreators);
    var boundActionCreators = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(34);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
    for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
        middlewares[_key] = arguments[_key];
    }
    return function (createStore) {
        return function (reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var _dispatch = store.dispatch;
            var chain = [];
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch(action) {
                    return _dispatch(action);
                }
            };
            chain = middlewares.map(function (middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);
            return _extends({}, store, {
                dispatch: _dispatch
            });
        };
    };
}


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(35);

function whenMapStateToPropsIsFunction(mapStateToProps) {
    return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
    return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
        return {};
    }) : undefined;
}
/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(36);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, _ref) {
        var displayName = _ref.displayName, pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual;
        var hasRunOnce = false;
        var mergedProps = void 0;
        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
            var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
            if (hasRunOnce) {
                if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps))
                    mergedProps = nextMergedProps;
            }
            else {
                hasRunOnce = true;
                mergedProps = nextMergedProps;
                if (process.env.NODE_ENV !== 'production')
                    Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
            }
            return mergedProps;
        };
    };
}
function whenMergePropsIsFunction(mergeProps) {
    return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
    return !mergeProps ? function () {
        return defaultMergeProps;
    } : undefined;
}
/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(104);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) {
    if (keys.indexOf(i) >= 0)
        continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
    target[i] = obj[i];
} return target; }

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
    return function impureFinalPropsSelector(state, ownProps) {
        return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
    };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
    var areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual;
    var hasRunAtLeastOnce = false;
    var state = void 0;
    var ownProps = void 0;
    var stateProps = void 0;
    var dispatchProps = void 0;
    var mergedProps = void 0;
    function handleFirstCall(firstState, firstOwnProps) {
        state = firstState;
        ownProps = firstOwnProps;
        stateProps = mapStateToProps(state, ownProps);
        dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        hasRunAtLeastOnce = true;
        return mergedProps;
    }
    function handleNewPropsAndNewState() {
        stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps)
            dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewProps() {
        if (mapStateToProps.dependsOnOwnProps)
            stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps)
            dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewState() {
        var nextStateProps = mapStateToProps(state, ownProps);
        var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
        stateProps = nextStateProps;
        if (statePropsChanged)
            mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleSubsequentCalls(nextState, nextOwnProps) {
        var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
        var stateChanged = !areStatesEqual(nextState, state);
        state = nextState;
        ownProps = nextOwnProps;
        if (propsChanged && stateChanged)
            return handleNewPropsAndNewState();
        if (propsChanged)
            return handleNewProps();
        if (stateChanged)
            return handleNewState();
        return mergedProps;
    }
    return function pureFinalPropsSelector(nextState, nextOwnProps) {
        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
}
// TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.
function finalPropsSelectorFactory(dispatch, _ref2) {
    var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);
    var mapStateToProps = initMapStateToProps(dispatch, options);
    var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    var mergeProps = initMergeProps(dispatch, options);
    if (process.env.NODE_ENV !== 'production') {
        Object(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
    }
    var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
    return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(15);

function verify(selector, methodName, displayName) {
    if (!selector) {
        throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
    }
    else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
        if (!selector.hasOwnProperty('dependsOnOwnProps')) {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
        }
    }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
    verify(mapStateToProps, 'mapStateToProps', displayName);
    verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
    verify(mergeProps, 'mergeProps', displayName);
}


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Networking; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datatypes_message__ = __webpack_require__(9);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Networking;
(function (Networking) {
    function fetchTrumpText() {
        return __awaiter(this, void 0, void 0, function () {
            var response, incomingMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:8000/trump/4")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        incomingMessage = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__datatypes_message__["a" /* AppUserMessage */].fromIncomingUserMessage(incomingMessage)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    Networking.fetchTrumpText = fetchTrumpText;
})(Networking = Networking || (Networking = {}));


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;
exports.format = function (f) {
    if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function (x) {
        if (x === '%%')
            return '%';
        if (i >= len)
            return x;
        switch (x) {
            case '%s': return String(args[i++]);
            case '%d': return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                }
                catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
            str += ' ' + x;
        }
        else {
            str += ' ' + inspect(x);
        }
    }
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function (fn, msg) {
    // Allow for deprecating things in the process of starting up.
    if (isUndefined(global.process)) {
        return function () {
            return exports.deprecate(fn, msg).apply(this, arguments);
        };
    }
    if (process.noDeprecation === true) {
        return fn;
    }
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) {
                throw new Error(msg);
            }
            else if (process.traceDeprecation) {
                console.trace(msg);
            }
            else {
                console.error(msg);
            }
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var debugs = {};
var debugEnviron;
exports.debuglog = function (set) {
    if (isUndefined(debugEnviron))
        debugEnviron = process.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
            var pid = process.pid;
            debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        }
        else {
            debugs[set] = function () { };
        }
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3)
        ctx.depth = arguments[2];
    if (arguments.length >= 4)
        ctx.colors = arguments[3];
    if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
    }
    else if (opts) {
        // got an "options" object
        exports._extend(ctx, opts);
    }
    // set default options
    if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
    if (isUndefined(ctx.depth))
        ctx.depth = 2;
    if (isUndefined(ctx.colors))
        ctx.colors = false;
    if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
    if (ctx.colors)
        ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    'bold': [1, 22],
    'italic': [3, 23],
    'underline': [4, 24],
    'inverse': [7, 27],
    'white': [37, 39],
    'grey': [90, 39],
    'black': [30, 39],
    'blue': [34, 39],
    'cyan': [36, 39],
    'green': [32, 39],
    'magenta': [35, 39],
    'red': [31, 39],
    'yellow': [33, 39]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str +
            '\u001b[' + inspect.colors[style][1] + 'm';
    }
    else {
        return str;
    }
}
function stylizeNoColor(str, styleType) {
    return str;
}
function arrayToHash(array) {
    var hash = {};
    array.forEach(function (val, idx) {
        hash[val] = true;
    });
    return hash;
}
function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect &&
        value &&
        isFunction(value.inspect) &&
        // Filter out the util module, it's inspect function is special
        value.inspect !== exports.inspect &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
        return primitive;
    }
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
    }
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value)
        && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
    }
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
            return formatError(value);
        }
    }
    var base = '', array = false, braces = ['{', '}'];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
    }
    // Make dates with properties first say the date
    if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
    }
    // Make error with message first say the error
    if (isError(value)) {
        base = ' ' + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
        if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        else {
            return ctx.stylize('[Object]', 'special');
        }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    }
    else {
        output = keys.map(function (key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value))
        return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if (isNumber(value))
        return ctx.stylize('' + value, 'number');
    if (isBoolean(value))
        return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value))
        return ctx.stylize('null', 'null');
}
function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        }
        else {
            output.push('');
        }
    }
    keys.forEach(function (key) {
        if (!key.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
    });
    return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
        if (desc.set) {
            str = ctx.stylize('[Getter/Setter]', 'special');
        }
        else {
            str = ctx.stylize('[Getter]', 'special');
        }
    }
    else {
        if (desc.set) {
            str = ctx.stylize('[Setter]', 'special');
        }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
    }
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
            }
            else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf('\n') > -1) {
                if (array) {
                    str = str.split('\n').map(function (line) {
                        return '  ' + line;
                    }).join('\n').substr(2);
                }
                else {
                    str = '\n' + str.split('\n').map(function (line) {
                        return '   ' + line;
                    }).join('\n');
                }
            }
        }
        else {
            str = ctx.stylize('[Circular]', 'special');
        }
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
            return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        }
        else {
            name = name.replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }
    return name + ': ' + str;
}
function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function (prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0)
            numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) {
        return braces[0] +
            (base === '' ? '' : base + '\n ') +
            ' ' +
            output.join(',\n  ') +
            ' ' +
            braces[1];
    }
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
    return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === 'number';
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === 'string';
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
function isError(e) {
    return isObject(e) &&
        (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
function isFunction(arg) {
    return typeof arg === 'function';
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null ||
        typeof arg === 'boolean' ||
        typeof arg === 'number' ||
        typeof arg === 'string' ||
        typeof arg === 'symbol' || // ES6 symbol
        typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__(107);
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function () {
    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(108);
exports._extend = function (origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add))
        return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
        origin[keys[i]] = add[keys[i]];
    }
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17), __webpack_require__(1)))

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object'
        && typeof arg.copy === 'function'
        && typeof arg.fill === 'function'
        && typeof arg.readUInt8 === 'function';
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    };
}
else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () { };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    };
}


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SideNav_css__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SideNav_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SideNav_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_user_modal_and_button_AddUserModalAndButton__ = __webpack_require__(112);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SideNav = /** @class */ (function (_super) {
    __extends(SideNav, _super);
    function SideNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SideNav.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "Sidenav" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "SideNavTitle" }, "Connected Users"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "UnorderedList" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "UserListElement YourUserElement" }, "You"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "UserListElement OtherUserElement" }, "User 2"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "UserListElement" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__add_user_modal_and_button_AddUserModalAndButton__["a" /* AddUserModalAndButton */], null))))));
    };
    return SideNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./SideNav.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./SideNav.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".Sidenav {\n  border: solid 4px;\n  display:flex;\n  flex: 0 0 300px;\n  flex-direction: column;\n  /* background-color: aquamarine; */\n}\n\n.SideNavTitle {\n  text-align: center;\n  font-size: larger;\n  border-bottom: solid 2px;\n  background-color: gainsboro;\n}\n\n.UserListElement {\n  border-bottom: solid 2px;\n  list-style-type: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.YourUserElement {\n  background: linear-gradient(90deg, gainsboro, mediumseagreen );\n}\n\n.OtherUserElement {\n  background: linear-gradient(90deg, gainsboro, #7f9ab4 );\n}\n\n\n.UnorderedList {\n  padding-left: 0;\n}\n\n", ""]);

// exports


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserModalAndButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AddUserModalAndButton_css__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AddUserModalAndButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AddUserModalAndButton_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap_lib_Button__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap_lib_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap_lib_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap_lib_Modal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap_lib_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_reactstrap_lib_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap_lib_ModalHeader__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap_lib_ModalHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap_lib_ModalHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap_lib_ModalBody__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap_lib_ModalBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap_lib_ModalBody__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var AddUserModalAndButton = /** @class */ (function (_super) {
    __extends(AddUserModalAndButton, _super);
    function AddUserModalAndButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            modal: false
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }
    AddUserModalAndButton.prototype.toggle = function () {
        this.setState({
            modal: !this.state.modal
        });
    };
    AddUserModalAndButton.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_reactstrap_lib_Button___default.a, { onClick: this.toggle, className: "AddUserIcon", id: "AddUser" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_fontawesome__, { name: "plus" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_reactstrap__["a" /* UncontrolledTooltip */], { placement: "top", target: "AddUser" }, "Invite Users"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_reactstrap_lib_Modal___default.a, { isOpen: this.state.modal, toggle: this.toggle },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_reactstrap_lib_ModalHeader___default.a, { toggle: this.toggle }, "Invite Users"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_reactstrap_lib_ModalBody___default.a, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "Share this link to invite another user to this chat:"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ShareLink" }, "VisuConference.com/chatrooms/12345")))));
    };
    return AddUserModalAndButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./AddUserModalAndButton.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./AddUserModalAndButton.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".AddUserIcon {\n  /*text-align: center;*/\n  width: 100%;\n}\n\n.ShareLink {\n  text-align: center;\n  font-size: larger;\n}", ""]);

// exports


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
}
(function ($) {
    var version = $.fn.jquery.split(' ')[0].split('.');
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
})(jQuery);
(function () {
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    } } return function (Constructor, protoProps, staticProps) { if (protoProps)
        defineProperties(Constructor.prototype, protoProps); if (staticProps)
        defineProperties(Constructor, staticProps); return Constructor; }; }();
    function _possibleConstructorReturn(self, call) { if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    } }
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): util.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Util = function ($) {
        /**
         * ------------------------------------------------------------------------
         * Private TransitionEnd Helpers
         * ------------------------------------------------------------------------
         */
        var transition = false;
        var MAX_UID = 1000000;
        var TransitionEndEvent = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
            // shoutout AngusCroll (https://goo.gl/pxwQGp)
        };
        function toType(obj) {
            return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }
        function isElement(obj) {
            return (obj[0] || obj).nodeType;
        }
        function getSpecialTransitionEndEvent() {
            return {
                bindType: transition.end,
                delegateType: transition.end,
                handle: function handle(event) {
                    if ($(event.target).is(this)) {
                        return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
                    }
                    return undefined;
                }
            };
        }
        function transitionEndTest() {
            if (window.QUnit) {
                return false;
            }
            var el = document.createElement('bootstrap');
            for (var name in TransitionEndEvent) {
                if (el.style[name] !== undefined) {
                    return {
                        end: TransitionEndEvent[name]
                    };
                }
            }
            return false;
        }
        function transitionEndEmulator(duration) {
            var _this = this;
            var called = false;
            $(this).one(Util.TRANSITION_END, function () {
                called = true;
            });
            setTimeout(function () {
                if (!called) {
                    Util.triggerTransitionEnd(_this);
                }
            }, duration);
            return this;
        }
        function setTransitionEndSupport() {
            transition = transitionEndTest();
            $.fn.emulateTransitionEnd = transitionEndEmulator;
            if (Util.supportsTransitionEnd()) {
                $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
            }
        }
        /**
         * --------------------------------------------------------------------------
         * Public Util Api
         * --------------------------------------------------------------------------
         */
        var Util = {
            TRANSITION_END: 'bsTransitionEnd',
            getUID: function getUID(prefix) {
                do {
                    // eslint-disable-next-line no-bitwise
                    prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
                } while (document.getElementById(prefix));
                return prefix;
            },
            getSelectorFromElement: function getSelectorFromElement(element) {
                var selector = element.getAttribute('data-target');
                if (!selector || selector === '#') {
                    selector = element.getAttribute('href') || '';
                }
                try {
                    var $selector = $(selector);
                    return $selector.length > 0 ? selector : null;
                }
                catch (error) {
                    return null;
                }
            },
            reflow: function reflow(element) {
                return element.offsetHeight;
            },
            triggerTransitionEnd: function triggerTransitionEnd(element) {
                $(element).trigger(transition.end);
            },
            supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(transition);
            },
            typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
                for (var property in configTypes) {
                    if (configTypes.hasOwnProperty(property)) {
                        var expectedTypes = configTypes[property];
                        var value = config[property];
                        var valueType = value && isElement(value) ? 'element' : toType(value);
                        if (!new RegExp(expectedTypes).test(valueType)) {
                            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
                        }
                    }
                }
            }
        };
        setTransitionEndSupport();
        return Util;
    }(jQuery);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): alert.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Alert = function ($) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'alert';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.alert';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 150;
        var Selector = {
            DISMISS: '[data-dismiss="alert"]'
        };
        var Event = {
            CLOSE: 'close' + EVENT_KEY,
            CLOSED: 'closed' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            ALERT: 'alert',
            FADE: 'fade',
            SHOW: 'show'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var Alert = function () {
            function Alert(element) {
                _classCallCheck(this, Alert);
                this._element = element;
            }
            // getters
            // public
            Alert.prototype.close = function close(element) {
                element = element || this._element;
                var rootElement = this._getRootElement(element);
                var customEvent = this._triggerCloseEvent(rootElement);
                if (customEvent.isDefaultPrevented()) {
                    return;
                }
                this._removeElement(rootElement);
            };
            Alert.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._element = null;
            };
            // private
            Alert.prototype._getRootElement = function _getRootElement(element) {
                var selector = Util.getSelectorFromElement(element);
                var parent = false;
                if (selector) {
                    parent = $(selector)[0];
                }
                if (!parent) {
                    parent = $(element).closest('.' + ClassName.ALERT)[0];
                }
                return parent;
            };
            Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
                var closeEvent = $.Event(Event.CLOSE);
                $(element).trigger(closeEvent);
                return closeEvent;
            };
            Alert.prototype._removeElement = function _removeElement(element) {
                var _this2 = this;
                $(element).removeClass(ClassName.SHOW);
                if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
                    this._destroyElement(element);
                    return;
                }
                $(element).one(Util.TRANSITION_END, function (event) {
                    return _this2._destroyElement(element, event);
                }).emulateTransitionEnd(TRANSITION_DURATION);
            };
            Alert.prototype._destroyElement = function _destroyElement(element) {
                $(element).detach().trigger(Event.CLOSED).remove();
            };
            // static
            Alert._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var $element = $(this);
                    var data = $element.data(DATA_KEY);
                    if (!data) {
                        data = new Alert(this);
                        $element.data(DATA_KEY, data);
                    }
                    if (config === 'close') {
                        data[config](this);
                    }
                });
            };
            Alert._handleDismiss = function _handleDismiss(alertInstance) {
                return function (event) {
                    if (event) {
                        event.preventDefault();
                    }
                    alertInstance.close(this);
                };
            };
            _createClass(Alert, null, [{
                    key: 'VERSION',
                    get: function get() {
                        return VERSION;
                    }
                }]);
            return Alert;
        }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */
        $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = Alert._jQueryInterface;
        $.fn[NAME].Constructor = Alert;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Alert._jQueryInterface;
        };
        return Alert;
    }(jQuery);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): button.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Button = function ($) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'button';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.button';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var ClassName = {
            ACTIVE: 'active',
            BUTTON: 'btn',
            FOCUS: 'focus'
        };
        var Selector = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: 'input',
            ACTIVE: '.active',
            BUTTON: '.btn'
        };
        var Event = {
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
            FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var Button = function () {
            function Button(element) {
                _classCallCheck(this, Button);
                this._element = element;
            }
            // getters
            // public
            Button.prototype.toggle = function toggle() {
                var triggerChangeEvent = true;
                var addAriaPressed = true;
                var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];
                if (rootElement) {
                    var input = $(this._element).find(Selector.INPUT)[0];
                    if (input) {
                        if (input.type === 'radio') {
                            if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                                triggerChangeEvent = false;
                            }
                            else {
                                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];
                                if (activeElement) {
                                    $(activeElement).removeClass(ClassName.ACTIVE);
                                }
                            }
                        }
                        if (triggerChangeEvent) {
                            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                                return;
                            }
                            input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
                            $(input).trigger('change');
                        }
                        input.focus();
                        addAriaPressed = false;
                    }
                }
                if (addAriaPressed) {
                    this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
                }
                if (triggerChangeEvent) {
                    $(this._element).toggleClass(ClassName.ACTIVE);
                }
            };
            Button.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._element = null;
            };
            // static
            Button._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    if (!data) {
                        data = new Button(this);
                        $(this).data(DATA_KEY, data);
                    }
                    if (config === 'toggle') {
                        data[config]();
                    }
                });
            };
            _createClass(Button, null, [{
                    key: 'VERSION',
                    get: function get() {
                        return VERSION;
                    }
                }]);
            return Button;
        }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */
        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
            event.preventDefault();
            var button = event.target;
            if (!$(button).hasClass(ClassName.BUTTON)) {
                button = $(button).closest(Selector.BUTTON);
            }
            Button._jQueryInterface.call($(button), 'toggle');
        }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
            var button = $(event.target).closest(Selector.BUTTON)[0];
            $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = Button._jQueryInterface;
        $.fn[NAME].Constructor = Button;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Button._jQueryInterface;
        };
        return Button;
    }(jQuery);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): carousel.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Carousel = function ($) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'carousel';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.carousel';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 600;
        var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
        var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
        var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
        var Default = {
            interval: 5000,
            keyboard: true,
            slide: false,
            pause: 'hover',
            wrap: true
        };
        var DefaultType = {
            interval: '(number|boolean)',
            keyboard: 'boolean',
            slide: '(boolean|string)',
            pause: '(string|boolean)',
            wrap: 'boolean'
        };
        var Direction = {
            NEXT: 'next',
            PREV: 'prev',
            LEFT: 'left',
            RIGHT: 'right'
        };
        var Event = {
            SLIDE: 'slide' + EVENT_KEY,
            SLID: 'slid' + EVENT_KEY,
            KEYDOWN: 'keydown' + EVENT_KEY,
            MOUSEENTER: 'mouseenter' + EVENT_KEY,
            MOUSELEAVE: 'mouseleave' + EVENT_KEY,
            TOUCHEND: 'touchend' + EVENT_KEY,
            LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            CAROUSEL: 'carousel',
            ACTIVE: 'active',
            SLIDE: 'slide',
            RIGHT: 'carousel-item-right',
            LEFT: 'carousel-item-left',
            NEXT: 'carousel-item-next',
            PREV: 'carousel-item-prev',
            ITEM: 'carousel-item'
        };
        var Selector = {
            ACTIVE: '.active',
            ACTIVE_ITEM: '.active.carousel-item',
            ITEM: '.carousel-item',
            NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
            INDICATORS: '.carousel-indicators',
            DATA_SLIDE: '[data-slide], [data-slide-to]',
            DATA_RIDE: '[data-ride="carousel"]'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var Carousel = function () {
            function Carousel(element, config) {
                _classCallCheck(this, Carousel);
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = false;
                this._isSliding = false;
                this.touchTimeout = null;
                this._config = this._getConfig(config);
                this._element = $(element)[0];
                this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];
                this._addEventListeners();
            }
            // getters
            // public
            Carousel.prototype.next = function next() {
                if (!this._isSliding) {
                    this._slide(Direction.NEXT);
                }
            };
            Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
                // Don't call next when the page isn't visible
                if (!document.hidden) {
                    this.next();
                }
            };
            Carousel.prototype.prev = function prev() {
                if (!this._isSliding) {
                    this._slide(Direction.PREV);
                }
            };
            Carousel.prototype.pause = function pause(event) {
                if (!event) {
                    this._isPaused = true;
                }
                if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
                    Util.triggerTransitionEnd(this._element);
                    this.cycle(true);
                }
                clearInterval(this._interval);
                this._interval = null;
            };
            Carousel.prototype.cycle = function cycle(event) {
                if (!event) {
                    this._isPaused = false;
                }
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }
                if (this._config.interval && !this._isPaused) {
                    this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
                }
            };
            Carousel.prototype.to = function to(index) {
                var _this3 = this;
                this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
                var activeIndex = this._getItemIndex(this._activeElement);
                if (index > this._items.length - 1 || index < 0) {
                    return;
                }
                if (this._isSliding) {
                    $(this._element).one(Event.SLID, function () {
                        return _this3.to(index);
                    });
                    return;
                }
                if (activeIndex === index) {
                    this.pause();
                    this.cycle();
                    return;
                }
                var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;
                this._slide(direction, this._items[index]);
            };
            Carousel.prototype.dispose = function dispose() {
                $(this._element).off(EVENT_KEY);
                $.removeData(this._element, DATA_KEY);
                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null;
            };
            // private
            Carousel.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, Default, config);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            };
            Carousel.prototype._addEventListeners = function _addEventListeners() {
                var _this4 = this;
                if (this._config.keyboard) {
                    $(this._element).on(Event.KEYDOWN, function (event) {
                        return _this4._keydown(event);
                    });
                }
                if (this._config.pause === 'hover') {
                    $(this._element).on(Event.MOUSEENTER, function (event) {
                        return _this4.pause(event);
                    }).on(Event.MOUSELEAVE, function (event) {
                        return _this4.cycle(event);
                    });
                    if ('ontouchstart' in document.documentElement) {
                        // if it's a touch-enabled device, mouseenter/leave are fired as
                        // part of the mouse compatibility events on first tap - the carousel
                        // would stop cycling until user tapped out of it;
                        // here, we listen for touchend, explicitly pause the carousel
                        // (as if it's the second time we tap on it, mouseenter compat event
                        // is NOT fired) and after a timeout (to allow for mouse compatibility
                        // events to fire) we explicitly restart cycling
                        $(this._element).on(Event.TOUCHEND, function () {
                            _this4.pause();
                            if (_this4.touchTimeout) {
                                clearTimeout(_this4.touchTimeout);
                            }
                            _this4.touchTimeout = setTimeout(function (event) {
                                return _this4.cycle(event);
                            }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
                        });
                    }
                }
            };
            Carousel.prototype._keydown = function _keydown(event) {
                if (/input|textarea/i.test(event.target.tagName)) {
                    return;
                }
                switch (event.which) {
                    case ARROW_LEFT_KEYCODE:
                        event.preventDefault();
                        this.prev();
                        break;
                    case ARROW_RIGHT_KEYCODE:
                        event.preventDefault();
                        this.next();
                        break;
                    default:
                        return;
                }
            };
            Carousel.prototype._getItemIndex = function _getItemIndex(element) {
                this._items = $.makeArray($(element).parent().find(Selector.ITEM));
                return this._items.indexOf(element);
            };
            Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
                var isNextDirection = direction === Direction.NEXT;
                var isPrevDirection = direction === Direction.PREV;
                var activeIndex = this._getItemIndex(activeElement);
                var lastItemIndex = this._items.length - 1;
                var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;
                if (isGoingToWrap && !this._config.wrap) {
                    return activeElement;
                }
                var delta = direction === Direction.PREV ? -1 : 1;
                var itemIndex = (activeIndex + delta) % this._items.length;
                return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
            };
            Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
                var targetIndex = this._getItemIndex(relatedTarget);
                var fromIndex = this._getItemIndex($(this._element).find(Selector.ACTIVE_ITEM)[0]);
                var slideEvent = $.Event(Event.SLIDE, {
                    relatedTarget: relatedTarget,
                    direction: eventDirectionName,
                    from: fromIndex,
                    to: targetIndex
                });
                $(this._element).trigger(slideEvent);
                return slideEvent;
            };
            Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
                if (this._indicatorsElement) {
                    $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
                    var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];
                    if (nextIndicator) {
                        $(nextIndicator).addClass(ClassName.ACTIVE);
                    }
                }
            };
            Carousel.prototype._slide = function _slide(direction, element) {
                var _this5 = this;
                var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
                var activeElementIndex = this._getItemIndex(activeElement);
                var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
                var nextElementIndex = this._getItemIndex(nextElement);
                var isCycling = Boolean(this._interval);
                var directionalClassName = void 0;
                var orderClassName = void 0;
                var eventDirectionName = void 0;
                if (direction === Direction.NEXT) {
                    directionalClassName = ClassName.LEFT;
                    orderClassName = ClassName.NEXT;
                    eventDirectionName = Direction.LEFT;
                }
                else {
                    directionalClassName = ClassName.RIGHT;
                    orderClassName = ClassName.PREV;
                    eventDirectionName = Direction.RIGHT;
                }
                if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
                    this._isSliding = false;
                    return;
                }
                var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
                if (slideEvent.isDefaultPrevented()) {
                    return;
                }
                if (!activeElement || !nextElement) {
                    // some weirdness is happening, so we bail
                    return;
                }
                this._isSliding = true;
                if (isCycling) {
                    this.pause();
                }
                this._setActiveIndicatorElement(nextElement);
                var slidEvent = $.Event(Event.SLID, {
                    relatedTarget: nextElement,
                    direction: eventDirectionName,
                    from: activeElementIndex,
                    to: nextElementIndex
                });
                if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {
                    $(nextElement).addClass(orderClassName);
                    Util.reflow(nextElement);
                    $(activeElement).addClass(directionalClassName);
                    $(nextElement).addClass(directionalClassName);
                    $(activeElement).one(Util.TRANSITION_END, function () {
                        $(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);
                        $(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);
                        _this5._isSliding = false;
                        setTimeout(function () {
                            return $(_this5._element).trigger(slidEvent);
                        }, 0);
                    }).emulateTransitionEnd(TRANSITION_DURATION);
                }
                else {
                    $(activeElement).removeClass(ClassName.ACTIVE);
                    $(nextElement).addClass(ClassName.ACTIVE);
                    this._isSliding = false;
                    $(this._element).trigger(slidEvent);
                }
                if (isCycling) {
                    this.cycle();
                }
            };
            // static
            Carousel._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = $.extend({}, Default, $(this).data());
                    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
                        $.extend(_config, config);
                    }
                    var action = typeof config === 'string' ? config : _config.slide;
                    if (!data) {
                        data = new Carousel(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === 'number') {
                        data.to(config);
                    }
                    else if (typeof action === 'string') {
                        if (data[action] === undefined) {
                            throw new Error('No method named "' + action + '"');
                        }
                        data[action]();
                    }
                    else if (_config.interval) {
                        data.pause();
                        data.cycle();
                    }
                });
            };
            Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
                var selector = Util.getSelectorFromElement(this);
                if (!selector) {
                    return;
                }
                var target = $(selector)[0];
                if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
                    return;
                }
                var config = $.extend({}, $(target).data(), $(this).data());
                var slideIndex = this.getAttribute('data-slide-to');
                if (slideIndex) {
                    config.interval = false;
                }
                Carousel._jQueryInterface.call($(target), config);
                if (slideIndex) {
                    $(target).data(DATA_KEY).to(slideIndex);
                }
                event.preventDefault();
            };
            _createClass(Carousel, null, [{
                    key: 'VERSION',
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: 'Default',
                    get: function get() {
                        return Default;
                    }
                }]);
            return Carousel;
        }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */
        $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
        $(window).on(Event.LOAD_DATA_API, function () {
            $(Selector.DATA_RIDE).each(function () {
                var $carousel = $(this);
                Carousel._jQueryInterface.call($carousel, $carousel.data());
            });
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = Carousel._jQueryInterface;
        $.fn[NAME].Constructor = Carousel;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Carousel._jQueryInterface;
        };
        return Carousel;
    }(jQuery);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): collapse.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Collapse = function ($) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'collapse';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.collapse';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 600;
        var Default = {
            toggle: true,
            parent: ''
        };
        var DefaultType = {
            toggle: 'boolean',
            parent: 'string'
        };
        var Event = {
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            SHOW: 'show',
            COLLAPSE: 'collapse',
            COLLAPSING: 'collapsing',
            COLLAPSED: 'collapsed'
        };
        var Dimension = {
            WIDTH: 'width',
            HEIGHT: 'height'
        };
        var Selector = {
            ACTIVES: '.show, .collapsing',
            DATA_TOGGLE: '[data-toggle="collapse"]'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var Collapse = function () {
            function Collapse(element, config) {
                _classCallCheck(this, Collapse);
                this._isTransitioning = false;
                this._element = element;
                this._config = this._getConfig(config);
                this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
                var tabToggles = $(Selector.DATA_TOGGLE);
                for (var i = 0; i < tabToggles.length; i++) {
                    var elem = tabToggles[i];
                    var selector = Util.getSelectorFromElement(elem);
                    if (selector !== null && $(selector).filter(element).length > 0) {
                        this._triggerArray.push(elem);
                    }
                }
                this._parent = this._config.parent ? this._getParent() : null;
                if (!this._config.parent) {
                    this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                }
                if (this._config.toggle) {
                    this.toggle();
                }
            }
            // getters
            // public
            Collapse.prototype.toggle = function toggle() {
                if ($(this._element).hasClass(ClassName.SHOW)) {
                    this.hide();
                }
                else {
                    this.show();
                }
            };
            Collapse.prototype.show = function show() {
                var _this6 = this;
                if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
                    return;
                }
                var actives = void 0;
                var activesData = void 0;
                if (this._parent) {
                    actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));
                    if (!actives.length) {
                        actives = null;
                    }
                }
                if (actives) {
                    activesData = $(actives).data(DATA_KEY);
                    if (activesData && activesData._isTransitioning) {
                        return;
                    }
                }
                var startEvent = $.Event(Event.SHOW);
                $(this._element).trigger(startEvent);
                if (startEvent.isDefaultPrevented()) {
                    return;
                }
                if (actives) {
                    Collapse._jQueryInterface.call($(actives), 'hide');
                    if (!activesData) {
                        $(actives).data(DATA_KEY, null);
                    }
                }
                var dimension = this._getDimension();
                $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
                this._element.style[dimension] = 0;
                if (this._triggerArray.length) {
                    $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
                }
                this.setTransitioning(true);
                var complete = function complete() {
                    $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
                    _this6._element.style[dimension] = '';
                    _this6.setTransitioning(false);
                    $(_this6._element).trigger(Event.SHOWN);
                };
                if (!Util.supportsTransitionEnd()) {
                    complete();
                    return;
                }
                var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                var scrollSize = 'scroll' + capitalizedDimension;
                $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                this._element.style[dimension] = this._element[scrollSize] + 'px';
            };
            Collapse.prototype.hide = function hide() {
                var _this7 = this;
                if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
                    return;
                }
                var startEvent = $.Event(Event.HIDE);
                $(this._element).trigger(startEvent);
                if (startEvent.isDefaultPrevented()) {
                    return;
                }
                var dimension = this._getDimension();
                this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + 'px';
                Util.reflow(this._element);
                $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
                if (this._triggerArray.length) {
                    for (var i = 0; i < this._triggerArray.length; i++) {
                        var trigger = this._triggerArray[i];
                        var selector = Util.getSelectorFromElement(trigger);
                        if (selector !== null) {
                            var $elem = $(selector);
                            if (!$elem.hasClass(ClassName.SHOW)) {
                                $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
                            }
                        }
                    }
                }
                this.setTransitioning(true);
                var complete = function complete() {
                    _this7.setTransitioning(false);
                    $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
                };
                this._element.style[dimension] = '';
                if (!Util.supportsTransitionEnd()) {
                    complete();
                    return;
                }
                $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
            };
            Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
                this._isTransitioning = isTransitioning;
            };
            Collapse.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null;
            };
            // private
            Collapse.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, Default, config);
                config.toggle = Boolean(config.toggle); // coerce string values
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            };
            Collapse.prototype._getDimension = function _getDimension() {
                var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
                return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
            };
            Collapse.prototype._getParent = function _getParent() {
                var _this8 = this;
                var parent = $(this._config.parent)[0];
                var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                $(parent).find(selector).each(function (i, element) {
                    _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
                });
                return parent;
            };
            Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
                if (element) {
                    var isOpen = $(element).hasClass(ClassName.SHOW);
                    if (triggerArray.length) {
                        $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
                    }
                }
            };
            // static
            Collapse._getTargetFromElement = function _getTargetFromElement(element) {
                var selector = Util.getSelectorFromElement(element);
                return selector ? $(selector)[0] : null;
            };
            Collapse._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var $this = $(this);
                    var data = $this.data(DATA_KEY);
                    var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);
                    if (!data && _config.toggle && /show|hide/.test(config)) {
                        _config.toggle = false;
                    }
                    if (!data) {
                        data = new Collapse(this, _config);
                        $this.data(DATA_KEY, data);
                    }
                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };
            _createClass(Collapse, null, [{
                    key: 'VERSION',
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: 'Default',
                    get: function get() {
                        return Default;
                    }
                }]);
            return Collapse;
        }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */
        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            if (!/input|textarea/i.test(event.target.tagName)) {
                event.preventDefault();
            }
            var $trigger = $(this);
            var selector = Util.getSelectorFromElement(this);
            $(selector).each(function () {
                var $target = $(this);
                var data = $target.data(DATA_KEY);
                var config = data ? 'toggle' : $trigger.data();
                Collapse._jQueryInterface.call($target, config);
            });
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = Collapse._jQueryInterface;
        $.fn[NAME].Constructor = Collapse;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Collapse._jQueryInterface;
        };
        return Collapse;
    }(jQuery);
    /* global Popper */
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): dropdown.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Dropdown = function ($) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
            throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
        }
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'dropdown';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.dropdown';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
        var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
        var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
        var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
        var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
        var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
        var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + '|' + ARROW_DOWN_KEYCODE + '|' + ESCAPE_KEYCODE);
        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            CLICK: 'click' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
            KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY,
            KEYUP_DATA_API: 'keyup' + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            DISABLED: 'disabled',
            SHOW: 'show',
            DROPUP: 'dropup',
            MENURIGHT: 'dropdown-menu-right',
            MENULEFT: 'dropdown-menu-left'
        };
        var Selector = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: '.dropdown form',
            MENU: '.dropdown-menu',
            NAVBAR_NAV: '.navbar-nav',
            VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
        };
        var AttachmentMap = {
            TOP: 'top-start',
            TOPEND: 'top-end',
            BOTTOM: 'bottom-start',
            BOTTOMEND: 'bottom-end'
        };
        var Default = {
            placement: AttachmentMap.BOTTOM,
            offset: 0,
            flip: true
        };
        var DefaultType = {
            placement: 'string',
            offset: '(number|string)',
            flip: 'boolean'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var Dropdown = function () {
            function Dropdown(element, config) {
                _classCallCheck(this, Dropdown);
                this._element = element;
                this._popper = null;
                this._config = this._getConfig(config);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
                this._addEventListeners();
            }
            // getters
            // public
            Dropdown.prototype.toggle = function toggle() {
                if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
                    return;
                }
                var parent = Dropdown._getParentFromElement(this._element);
                var isActive = $(this._menu).hasClass(ClassName.SHOW);
                Dropdown._clearMenus();
                if (isActive) {
                    return;
                }
                var relatedTarget = {
                    relatedTarget: this._element
                };
                var showEvent = $.Event(Event.SHOW, relatedTarget);
                $(parent).trigger(showEvent);
                if (showEvent.isDefaultPrevented()) {
                    return;
                }
                var element = this._element;
                // for dropup with alignment we use the parent as popper container
                if ($(parent).hasClass(ClassName.DROPUP)) {
                    if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
                        element = parent;
                    }
                }
                this._popper = new Popper(element, this._menu, this._getPopperConfig());
                // if this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
                    $('body').children().on('mouseover', null, $.noop);
                }
                this._element.focus();
                this._element.setAttribute('aria-expanded', true);
                $(this._menu).toggleClass(ClassName.SHOW);
                $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
            };
            Dropdown.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(this._element).off(EVENT_KEY);
                this._element = null;
                this._menu = null;
                if (this._popper !== null) {
                    this._popper.destroy();
                }
                this._popper = null;
            };
            Dropdown.prototype.update = function update() {
                this._inNavbar = this._detectNavbar();
                if (this._popper !== null) {
                    this._popper.scheduleUpdate();
                }
            };
            // private
            Dropdown.prototype._addEventListeners = function _addEventListeners() {
                var _this9 = this;
                $(this._element).on(Event.CLICK, function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    _this9.toggle();
                });
            };
            Dropdown.prototype._getConfig = function _getConfig(config) {
                var elementData = $(this._element).data();
                if (elementData.placement !== undefined) {
                    elementData.placement = AttachmentMap[elementData.placement.toUpperCase()];
                }
                config = $.extend({}, this.constructor.Default, $(this._element).data(), config);
                Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
                return config;
            };
            Dropdown.prototype._getMenuElement = function _getMenuElement() {
                if (!this._menu) {
                    var parent = Dropdown._getParentFromElement(this._element);
                    this._menu = $(parent).find(Selector.MENU)[0];
                }
                return this._menu;
            };
            Dropdown.prototype._getPlacement = function _getPlacement() {
                var $parentDropdown = $(this._element).parent();
                var placement = this._config.placement;
                // Handle dropup
                if ($parentDropdown.hasClass(ClassName.DROPUP) || this._config.placement === AttachmentMap.TOP) {
                    placement = AttachmentMap.TOP;
                    if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
                        placement = AttachmentMap.TOPEND;
                    }
                }
                else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
                    placement = AttachmentMap.BOTTOMEND;
                }
                return placement;
            };
            Dropdown.prototype._detectNavbar = function _detectNavbar() {
                return $(this._element).closest('.navbar').length > 0;
            };
            Dropdown.prototype._getPopperConfig = function _getPopperConfig() {
                var popperConfig = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: {
                            offset: this._config.offset
                        },
                        flip: {
                            enabled: this._config.flip
                        }
                    }
                    // Disable Popper.js for Dropdown in Navbar
                };
                if (this._inNavbar) {
                    popperConfig.modifiers.applyStyle = {
                        enabled: !this._inNavbar
                    };
                }
                return popperConfig;
            };
            // static
            Dropdown._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;
                    if (!data) {
                        data = new Dropdown(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };
            Dropdown._clearMenus = function _clearMenus(event) {
                if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
                    return;
                }
                var toggles = $.makeArray($(Selector.DATA_TOGGLE));
                for (var i = 0; i < toggles.length; i++) {
                    var parent = Dropdown._getParentFromElement(toggles[i]);
                    var context = $(toggles[i]).data(DATA_KEY);
                    var relatedTarget = {
                        relatedTarget: toggles[i]
                    };
                    if (!context) {
                        continue;
                    }
                    var dropdownMenu = context._menu;
                    if (!$(parent).hasClass(ClassName.SHOW)) {
                        continue;
                    }
                    if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
                        continue;
                    }
                    var hideEvent = $.Event(Event.HIDE, relatedTarget);
                    $(parent).trigger(hideEvent);
                    if (hideEvent.isDefaultPrevented()) {
                        continue;
                    }
                    // if this is a touch-enabled device we remove the extra
                    // empty mouseover listeners we added for iOS support
                    if ('ontouchstart' in document.documentElement) {
                        $('body').children().off('mouseover', null, $.noop);
                    }
                    toggles[i].setAttribute('aria-expanded', 'false');
                    $(dropdownMenu).removeClass(ClassName.SHOW);
                    $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
                }
            };
            Dropdown._getParentFromElement = function _getParentFromElement(element) {
                var parent = void 0;
                var selector = Util.getSelectorFromElement(element);
                if (selector) {
                    parent = $(selector)[0];
                }
                return parent || element.parentNode;
            };
            Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
                if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
                    return;
                }
                var parent = Dropdown._getParentFromElement(this);
                var isActive = $(parent).hasClass(ClassName.SHOW);
                if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
                    if (event.which === ESCAPE_KEYCODE) {
                        var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
                        $(toggle).trigger('focus');
                    }
                    $(this).trigger('click');
                    return;
                }
                var items = $(parent).find(Selector.VISIBLE_ITEMS).get();
                if (!items.length) {
                    return;
                }
                var index = items.indexOf(event.target);
                if (event.which === ARROW_UP_KEYCODE && index > 0) {
                    // up
                    index--;
                }
                if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
                    // down
                    index++;
                }
                if (index < 0) {
                    index = 0;
                }
                items[index].focus();
            };
            _createClass(Dropdown, null, [{
                    key: 'VERSION',
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: 'Default',
                    get: function get() {
                        return Default;
                    }
                }, {
                    key: 'DefaultType',
                    get: function get() {
                        return DefaultType;
                    }
                }]);
            return Dropdown;
        }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */
        $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            event.preventDefault();
            event.stopPropagation();
            Dropdown._jQueryInterface.call($(this), 'toggle');
        }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
            e.stopPropagation();
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = Dropdown._jQueryInterface;
        $.fn[NAME].Constructor = Dropdown;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Dropdown._jQueryInterface;
        };
        return Dropdown;
    }(jQuery);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): modal.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Modal = function ($) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'modal';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.modal';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 300;
        var BACKDROP_TRANSITION_DURATION = 150;
        var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
        var Default = {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: true
        };
        var DefaultType = {
            backdrop: '(boolean|string)',
            keyboard: 'boolean',
            focus: 'boolean',
            show: 'boolean'
        };
        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            FOCUSIN: 'focusin' + EVENT_KEY,
            RESIZE: 'resize' + EVENT_KEY,
            CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
            KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
            MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
            MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
            BACKDROP: 'modal-backdrop',
            OPEN: 'modal-open',
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            DIALOG: '.modal-dialog',
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
            NAVBAR_TOGGLER: '.navbar-toggler'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var Modal = function () {
            function Modal(element, config) {
                _classCallCheck(this, Modal);
                this._config = this._getConfig(config);
                this._element = element;
                this._dialog = $(element).find(Selector.DIALOG)[0];
                this._backdrop = null;
                this._isShown = false;
                this._isBodyOverflowing = false;
                this._ignoreBackdropClick = false;
                this._originalBodyPadding = 0;
                this._scrollbarWidth = 0;
            }
            // getters
            // public
            Modal.prototype.toggle = function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            };
            Modal.prototype.show = function show(relatedTarget) {
                var _this10 = this;
                if (this._isTransitioning) {
                    return;
                }
                if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                    this._isTransitioning = true;
                }
                var showEvent = $.Event(Event.SHOW, {
                    relatedTarget: relatedTarget
                });
                $(this._element).trigger(showEvent);
                if (this._isShown || showEvent.isDefaultPrevented()) {
                    return;
                }
                this._isShown = true;
                this._checkScrollbar();
                this._setScrollbar();
                $(document.body).addClass(ClassName.OPEN);
                this._setEscapeEvent();
                this._setResizeEvent();
                $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
                    return _this10.hide(event);
                });
                $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
                    $(_this10._element).one(Event.MOUSEUP_DISMISS, function (event) {
                        if ($(event.target).is(_this10._element)) {
                            _this10._ignoreBackdropClick = true;
                        }
                    });
                });
                this._showBackdrop(function () {
                    return _this10._showElement(relatedTarget);
                });
            };
            Modal.prototype.hide = function hide(event) {
                var _this11 = this;
                if (event) {
                    event.preventDefault();
                }
                if (this._isTransitioning || !this._isShown) {
                    return;
                }
                var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
                if (transition) {
                    this._isTransitioning = true;
                }
                var hideEvent = $.Event(Event.HIDE);
                $(this._element).trigger(hideEvent);
                if (!this._isShown || hideEvent.isDefaultPrevented()) {
                    return;
                }
                this._isShown = false;
                this._setEscapeEvent();
                this._setResizeEvent();
                $(document).off(Event.FOCUSIN);
                $(this._element).removeClass(ClassName.SHOW);
                $(this._element).off(Event.CLICK_DISMISS);
                $(this._dialog).off(Event.MOUSEDOWN_DISMISS);
                if (transition) {
                    $(this._element).one(Util.TRANSITION_END, function (event) {
                        return _this11._hideModal(event);
                    }).emulateTransitionEnd(TRANSITION_DURATION);
                }
                else {
                    this._hideModal();
                }
            };
            Modal.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(window, document, this._element, this._backdrop).off(EVENT_KEY);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._scrollbarWidth = null;
            };
            Modal.prototype.handleUpdate = function handleUpdate() {
                this._adjustDialog();
            };
            // private
            Modal.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, Default, config);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            };
            Modal.prototype._showElement = function _showElement(relatedTarget) {
                var _this12 = this;
                var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    // don't move modals dom position
                    document.body.appendChild(this._element);
                }
                this._element.style.display = 'block';
                this._element.removeAttribute('aria-hidden');
                this._element.scrollTop = 0;
                if (transition) {
                    Util.reflow(this._element);
                }
                $(this._element).addClass(ClassName.SHOW);
                if (this._config.focus) {
                    this._enforceFocus();
                }
                var shownEvent = $.Event(Event.SHOWN, {
                    relatedTarget: relatedTarget
                });
                var transitionComplete = function transitionComplete() {
                    if (_this12._config.focus) {
                        _this12._element.focus();
                    }
                    _this12._isTransitioning = false;
                    $(_this12._element).trigger(shownEvent);
                };
                if (transition) {
                    $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
                }
                else {
                    transitionComplete();
                }
            };
            Modal.prototype._enforceFocus = function _enforceFocus() {
                var _this13 = this;
                $(document).off(Event.FOCUSIN) // guard against infinite focus loop
                    .on(Event.FOCUSIN, function (event) {
                    if (document !== event.target && _this13._element !== event.target && !$(_this13._element).has(event.target).length) {
                        _this13._element.focus();
                    }
                });
            };
            Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
                var _this14 = this;
                if (this._isShown && this._config.keyboard) {
                    $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
                        if (event.which === ESCAPE_KEYCODE) {
                            event.preventDefault();
                            _this14.hide();
                        }
                    });
                }
                else if (!this._isShown) {
                    $(this._element).off(Event.KEYDOWN_DISMISS);
                }
            };
            Modal.prototype._setResizeEvent = function _setResizeEvent() {
                var _this15 = this;
                if (this._isShown) {
                    $(window).on(Event.RESIZE, function (event) {
                        return _this15.handleUpdate(event);
                    });
                }
                else {
                    $(window).off(Event.RESIZE);
                }
            };
            Modal.prototype._hideModal = function _hideModal() {
                var _this16 = this;
                this._element.style.display = 'none';
                this._element.setAttribute('aria-hidden', true);
                this._isTransitioning = false;
                this._showBackdrop(function () {
                    $(document.body).removeClass(ClassName.OPEN);
                    _this16._resetAdjustments();
                    _this16._resetScrollbar();
                    $(_this16._element).trigger(Event.HIDDEN);
                });
            };
            Modal.prototype._removeBackdrop = function _removeBackdrop() {
                if (this._backdrop) {
                    $(this._backdrop).remove();
                    this._backdrop = null;
                }
            };
            Modal.prototype._showBackdrop = function _showBackdrop(callback) {
                var _this17 = this;
                var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';
                if (this._isShown && this._config.backdrop) {
                    var doAnimate = Util.supportsTransitionEnd() && animate;
                    this._backdrop = document.createElement('div');
                    this._backdrop.className = ClassName.BACKDROP;
                    if (animate) {
                        $(this._backdrop).addClass(animate);
                    }
                    $(this._backdrop).appendTo(document.body);
                    $(this._element).on(Event.CLICK_DISMISS, function (event) {
                        if (_this17._ignoreBackdropClick) {
                            _this17._ignoreBackdropClick = false;
                            return;
                        }
                        if (event.target !== event.currentTarget) {
                            return;
                        }
                        if (_this17._config.backdrop === 'static') {
                            _this17._element.focus();
                        }
                        else {
                            _this17.hide();
                        }
                    });
                    if (doAnimate) {
                        Util.reflow(this._backdrop);
                    }
                    $(this._backdrop).addClass(ClassName.SHOW);
                    if (!callback) {
                        return;
                    }
                    if (!doAnimate) {
                        callback();
                        return;
                    }
                    $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                }
                else if (!this._isShown && this._backdrop) {
                    $(this._backdrop).removeClass(ClassName.SHOW);
                    var callbackRemove = function callbackRemove() {
                        _this17._removeBackdrop();
                        if (callback) {
                            callback();
                        }
                    };
                    if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                        $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                    }
                    else {
                        callbackRemove();
                    }
                }
                else if (callback) {
                    callback();
                }
            };
            // ----------------------------------------------------------------------
            // the following methods are used to handle overflowing modals
            // todo (fat): these should probably be refactored out of modal.js
            // ----------------------------------------------------------------------
            Modal.prototype._adjustDialog = function _adjustDialog() {
                var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                if (!this._isBodyOverflowing && isModalOverflowing) {
                    this._element.style.paddingLeft = this._scrollbarWidth + 'px';
                }
                if (this._isBodyOverflowing && !isModalOverflowing) {
                    this._element.style.paddingRight = this._scrollbarWidth + 'px';
                }
            };
            Modal.prototype._resetAdjustments = function _resetAdjustments() {
                this._element.style.paddingLeft = '';
                this._element.style.paddingRight = '';
            };
            Modal.prototype._checkScrollbar = function _checkScrollbar() {
                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth();
            };
            Modal.prototype._setScrollbar = function _setScrollbar() {
                var _this18 = this;
                if (this._isBodyOverflowing) {
                    // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
                    //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
                    // Adjust fixed content padding
                    $(Selector.FIXED_CONTENT).each(function (index, element) {
                        var actualPadding = $(element)[0].style.paddingRight;
                        var calculatedPadding = $(element).css('padding-right');
                        $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this18._scrollbarWidth + 'px');
                    });
                    // Adjust navbar-toggler margin
                    $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
                        var actualMargin = $(element)[0].style.marginRight;
                        var calculatedMargin = $(element).css('margin-right');
                        $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this18._scrollbarWidth + 'px');
                    });
                    // Adjust body padding
                    var actualPadding = document.body.style.paddingRight;
                    var calculatedPadding = $('body').css('padding-right');
                    $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + 'px');
                }
            };
            Modal.prototype._resetScrollbar = function _resetScrollbar() {
                // Restore fixed content padding
                $(Selector.FIXED_CONTENT).each(function (index, element) {
                    var padding = $(element).data('padding-right');
                    if (typeof padding !== 'undefined') {
                        $(element).css('padding-right', padding).removeData('padding-right');
                    }
                });
                // Restore navbar-toggler margin
                $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
                    var margin = $(element).data('margin-right');
                    if (typeof margin !== 'undefined') {
                        $(element).css('margin-right', margin).removeData('margin-right');
                    }
                });
                // Restore body padding
                var padding = $('body').data('padding-right');
                if (typeof padding !== 'undefined') {
                    $('body').css('padding-right', padding).removeData('padding-right');
                }
            };
            Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
                // thx d.walsh
                var scrollDiv = document.createElement('div');
                scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                document.body.appendChild(scrollDiv);
                var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            };
            // static
            Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);
                    if (!data) {
                        data = new Modal(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config](relatedTarget);
                    }
                    else if (_config.show) {
                        data.show(relatedTarget);
                    }
                });
            };
            _createClass(Modal, null, [{
                    key: 'VERSION',
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: 'Default',
                    get: function get() {
                        return Default;
                    }
                }]);
            return Modal;
        }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */
        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            var _this19 = this;
            var target = void 0;
            var selector = Util.getSelectorFromElement(this);
            if (selector) {
                target = $(selector)[0];
            }
            var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());
            if (this.tagName === 'A' || this.tagName === 'AREA') {
                event.preventDefault();
            }
            var $target = $(target).one(Event.SHOW, function (showEvent) {
                if (showEvent.isDefaultPrevented()) {
                    // only register focus restorer if modal will actually get shown
                    return;
                }
                $target.one(Event.HIDDEN, function () {
                    if ($(_this19).is(':visible')) {
                        _this19.focus();
                    }
                });
            });
            Modal._jQueryInterface.call($(target), config, this);
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = Modal._jQueryInterface;
        $.fn[NAME].Constructor = Modal;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Modal._jQueryInterface;
        };
        return Modal;
    }(jQuery);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): scrollspy.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var ScrollSpy = function ($) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'scrollspy';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.scrollspy';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var Default = {
            offset: 10,
            method: 'auto',
            target: ''
        };
        var DefaultType = {
            offset: 'number',
            method: 'string',
            target: '(string|element)'
        };
        var Event = {
            ACTIVATE: 'activate' + EVENT_KEY,
            SCROLL: 'scroll' + EVENT_KEY,
            LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            DROPDOWN_ITEM: 'dropdown-item',
            DROPDOWN_MENU: 'dropdown-menu',
            ACTIVE: 'active'
        };
        var Selector = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: '.active',
            NAV_LIST_GROUP: '.nav, .list-group',
            NAV_LINKS: '.nav-link',
            LIST_ITEMS: '.list-group-item',
            DROPDOWN: '.dropdown',
            DROPDOWN_ITEMS: '.dropdown-item',
            DROPDOWN_TOGGLE: '.dropdown-toggle'
        };
        var OffsetMethod = {
            OFFSET: 'offset',
            POSITION: 'position'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var ScrollSpy = function () {
            function ScrollSpy(element, config) {
                var _this20 = this;
                _classCallCheck(this, ScrollSpy);
                this._element = element;
                this._scrollElement = element.tagName === 'BODY' ? window : element;
                this._config = this._getConfig(config);
                this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.LIST_ITEMS + ',') + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                $(this._scrollElement).on(Event.SCROLL, function (event) {
                    return _this20._process(event);
                });
                this.refresh();
                this._process();
            }
            // getters
            // public
            ScrollSpy.prototype.refresh = function refresh() {
                var _this21 = this;
                var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
                var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
                var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                var targets = $.makeArray($(this._selector));
                targets.map(function (element) {
                    var target = void 0;
                    var targetSelector = Util.getSelectorFromElement(element);
                    if (targetSelector) {
                        target = $(targetSelector)[0];
                    }
                    if (target) {
                        var targetBCR = target.getBoundingClientRect();
                        if (targetBCR.width || targetBCR.height) {
                            // todo (fat): remove sketch reliance on jQuery position/offset
                            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
                        }
                    }
                    return null;
                }).filter(function (item) {
                    return item;
                }).sort(function (a, b) {
                    return a[0] - b[0];
                }).forEach(function (item) {
                    _this21._offsets.push(item[0]);
                    _this21._targets.push(item[1]);
                });
            };
            ScrollSpy.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(this._scrollElement).off(EVENT_KEY);
                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null;
            };
            // private
            ScrollSpy.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, Default, config);
                if (typeof config.target !== 'string') {
                    var id = $(config.target).attr('id');
                    if (!id) {
                        id = Util.getUID(NAME);
                        $(config.target).attr('id', id);
                    }
                    config.target = '#' + id;
                }
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            };
            ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            };
            ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            };
            ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            };
            ScrollSpy.prototype._process = function _process() {
                var scrollTop = this._getScrollTop() + this._config.offset;
                var scrollHeight = this._getScrollHeight();
                var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
                if (this._scrollHeight !== scrollHeight) {
                    this.refresh();
                }
                if (scrollTop >= maxScroll) {
                    var target = this._targets[this._targets.length - 1];
                    if (this._activeTarget !== target) {
                        this._activate(target);
                    }
                    return;
                }
                if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                    this._activeTarget = null;
                    this._clear();
                    return;
                }
                for (var i = this._offsets.length; i--;) {
                    var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);
                    if (isActiveTarget) {
                        this._activate(this._targets[i]);
                    }
                }
            };
            ScrollSpy.prototype._activate = function _activate(target) {
                this._activeTarget = target;
                this._clear();
                var queries = this._selector.split(',');
                queries = queries.map(function (selector) {
                    return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
                });
                var $link = $(queries.join(','));
                if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
                    $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
                    $link.addClass(ClassName.ACTIVE);
                }
                else {
                    // Set triggered link as active
                    $link.addClass(ClassName.ACTIVE);
                    // Set triggered links parents as active
                    // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                    $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ', ' + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);
                }
                $(this._scrollElement).trigger(Event.ACTIVATE, {
                    relatedTarget: target
                });
            };
            ScrollSpy.prototype._clear = function _clear() {
                $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
            };
            // static
            ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;
                    if (!data) {
                        data = new ScrollSpy(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };
            _createClass(ScrollSpy, null, [{
                    key: 'VERSION',
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: 'Default',
                    get: function get() {
                        return Default;
                    }
                }]);
            return ScrollSpy;
        }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */
        $(window).on(Event.LOAD_DATA_API, function () {
            var scrollSpys = $.makeArray($(Selector.DATA_SPY));
            for (var i = scrollSpys.length; i--;) {
                var $spy = $(scrollSpys[i]);
                ScrollSpy._jQueryInterface.call($spy, $spy.data());
            }
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = ScrollSpy._jQueryInterface;
        $.fn[NAME].Constructor = ScrollSpy;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return ScrollSpy._jQueryInterface;
        };
        return ScrollSpy;
    }(jQuery);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): tab.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Tab = function ($) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'tab';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.tab';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 150;
        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            DROPDOWN_MENU: 'dropdown-menu',
            ACTIVE: 'active',
            DISABLED: 'disabled',
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            DROPDOWN: '.dropdown',
            NAV_LIST_GROUP: '.nav, .list-group',
            ACTIVE: '.active',
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: '.dropdown-toggle',
            DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var Tab = function () {
            function Tab(element) {
                _classCallCheck(this, Tab);
                this._element = element;
            }
            // getters
            // public
            Tab.prototype.show = function show() {
                var _this22 = this;
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
                    return;
                }
                var target = void 0;
                var previous = void 0;
                var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
                var selector = Util.getSelectorFromElement(this._element);
                if (listElement) {
                    previous = $.makeArray($(listElement).find(Selector.ACTIVE));
                    previous = previous[previous.length - 1];
                }
                var hideEvent = $.Event(Event.HIDE, {
                    relatedTarget: this._element
                });
                var showEvent = $.Event(Event.SHOW, {
                    relatedTarget: previous
                });
                if (previous) {
                    $(previous).trigger(hideEvent);
                }
                $(this._element).trigger(showEvent);
                if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
                    return;
                }
                if (selector) {
                    target = $(selector)[0];
                }
                this._activate(this._element, listElement);
                var complete = function complete() {
                    var hiddenEvent = $.Event(Event.HIDDEN, {
                        relatedTarget: _this22._element
                    });
                    var shownEvent = $.Event(Event.SHOWN, {
                        relatedTarget: previous
                    });
                    $(previous).trigger(hiddenEvent);
                    $(_this22._element).trigger(shownEvent);
                };
                if (target) {
                    this._activate(target, target.parentNode, complete);
                }
                else {
                    complete();
                }
            };
            Tab.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._element = null;
            };
            // private
            Tab.prototype._activate = function _activate(element, container, callback) {
                var _this23 = this;
                var active = $(container).find(Selector.ACTIVE)[0];
                var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);
                var complete = function complete() {
                    return _this23._transitionComplete(element, active, isTransitioning, callback);
                };
                if (active && isTransitioning) {
                    $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                }
                else {
                    complete();
                }
                if (active) {
                    $(active).removeClass(ClassName.SHOW);
                }
            };
            Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
                if (active) {
                    $(active).removeClass(ClassName.ACTIVE);
                    var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];
                    if (dropdownChild) {
                        $(dropdownChild).removeClass(ClassName.ACTIVE);
                    }
                    active.setAttribute('aria-expanded', false);
                }
                $(element).addClass(ClassName.ACTIVE);
                element.setAttribute('aria-expanded', true);
                if (isTransitioning) {
                    Util.reflow(element);
                    $(element).addClass(ClassName.SHOW);
                }
                else {
                    $(element).removeClass(ClassName.FADE);
                }
                if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
                    var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
                    if (dropdownElement) {
                        $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
                    }
                    element.setAttribute('aria-expanded', true);
                }
                if (callback) {
                    callback();
                }
            };
            // static
            Tab._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var $this = $(this);
                    var data = $this.data(DATA_KEY);
                    if (!data) {
                        data = new Tab(this);
                        $this.data(DATA_KEY, data);
                    }
                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };
            _createClass(Tab, null, [{
                    key: 'VERSION',
                    get: function get() {
                        return VERSION;
                    }
                }]);
            return Tab;
        }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */
        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            event.preventDefault();
            Tab._jQueryInterface.call($(this), 'show');
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = Tab._jQueryInterface;
        $.fn[NAME].Constructor = Tab;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Tab._jQueryInterface;
        };
        return Tab;
    }(jQuery);
    /* global Popper */
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): tooltip.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Tooltip = function ($) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
            throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
        }
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'tooltip';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.tooltip';
        var EVENT_KEY = '.' + DATA_KEY;
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 150;
        var CLASS_PREFIX = 'bs-tooltip';
        var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');
        var DefaultType = {
            animation: 'boolean',
            template: 'string',
            title: '(string|element|function)',
            trigger: 'string',
            delay: '(number|object)',
            html: 'boolean',
            selector: '(string|boolean)',
            placement: '(string|function)',
            offset: '(number|string)',
            container: '(string|element|boolean)',
            fallbackPlacement: '(string|array)'
        };
        var AttachmentMap = {
            AUTO: 'auto',
            TOP: 'top',
            RIGHT: 'right',
            BOTTOM: 'bottom',
            LEFT: 'left'
        };
        var Default = {
            animation: true,
            template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
            trigger: 'hover focus',
            title: '',
            delay: 0,
            html: false,
            selector: false,
            placement: 'top',
            offset: 0,
            container: false,
            fallbackPlacement: 'flip'
        };
        var HoverState = {
            SHOW: 'show',
            OUT: 'out'
        };
        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            INSERTED: 'inserted' + EVENT_KEY,
            CLICK: 'click' + EVENT_KEY,
            FOCUSIN: 'focusin' + EVENT_KEY,
            FOCUSOUT: 'focusout' + EVENT_KEY,
            MOUSEENTER: 'mouseenter' + EVENT_KEY,
            MOUSELEAVE: 'mouseleave' + EVENT_KEY
        };
        var ClassName = {
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            TOOLTIP: '.tooltip',
            TOOLTIP_INNER: '.tooltip-inner',
            ARROW: '.arrow'
        };
        var Trigger = {
            HOVER: 'hover',
            FOCUS: 'focus',
            CLICK: 'click',
            MANUAL: 'manual'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var Tooltip = function () {
            function Tooltip(element, config) {
                _classCallCheck(this, Tooltip);
                // private
                this._isEnabled = true;
                this._timeout = 0;
                this._hoverState = '';
                this._activeTrigger = {};
                this._popper = null;
                // protected
                this.element = element;
                this.config = this._getConfig(config);
                this.tip = null;
                this._setListeners();
            }
            // getters
            // public
            Tooltip.prototype.enable = function enable() {
                this._isEnabled = true;
            };
            Tooltip.prototype.disable = function disable() {
                this._isEnabled = false;
            };
            Tooltip.prototype.toggleEnabled = function toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            };
            Tooltip.prototype.toggle = function toggle(event) {
                if (event) {
                    var dataKey = this.constructor.DATA_KEY;
                    var context = $(event.currentTarget).data(dataKey);
                    if (!context) {
                        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                        $(event.currentTarget).data(dataKey, context);
                    }
                    context._activeTrigger.click = !context._activeTrigger.click;
                    if (context._isWithActiveTrigger()) {
                        context._enter(null, context);
                    }
                    else {
                        context._leave(null, context);
                    }
                }
                else {
                    if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
                        this._leave(null, this);
                        return;
                    }
                    this._enter(null, this);
                }
            };
            Tooltip.prototype.dispose = function dispose() {
                clearTimeout(this._timeout);
                $.removeData(this.element, this.constructor.DATA_KEY);
                $(this.element).off(this.constructor.EVENT_KEY);
                $(this.element).closest('.modal').off('hide.bs.modal');
                if (this.tip) {
                    $(this.tip).remove();
                }
                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                this._activeTrigger = null;
                if (this._popper !== null) {
                    this._popper.destroy();
                }
                this._popper = null;
                this.element = null;
                this.config = null;
                this.tip = null;
            };
            Tooltip.prototype.show = function show() {
                var _this24 = this;
                if ($(this.element).css('display') === 'none') {
                    throw new Error('Please use show on visible elements');
                }
                var showEvent = $.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    $(this.element).trigger(showEvent);
                    var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);
                    if (showEvent.isDefaultPrevented() || !isInTheDom) {
                        return;
                    }
                    var tip = this.getTipElement();
                    var tipId = Util.getUID(this.constructor.NAME);
                    tip.setAttribute('id', tipId);
                    this.element.setAttribute('aria-describedby', tipId);
                    this.setContent();
                    if (this.config.animation) {
                        $(tip).addClass(ClassName.FADE);
                    }
                    var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;
                    var attachment = this._getAttachment(placement);
                    this.addAttachmentClass(attachment);
                    var container = this.config.container === false ? document.body : $(this.config.container);
                    $(tip).data(this.constructor.DATA_KEY, this);
                    if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
                        $(tip).appendTo(container);
                    }
                    $(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new Popper(this.element, tip, {
                        placement: attachment,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Selector.ARROW
                            }
                        },
                        onCreate: function onCreate(data) {
                            if (data.originalPlacement !== data.placement) {
                                _this24._handlePopperPlacementChange(data);
                            }
                        },
                        onUpdate: function onUpdate(data) {
                            _this24._handlePopperPlacementChange(data);
                        }
                    });
                    $(tip).addClass(ClassName.SHOW);
                    // if this is a touch-enabled device we add extra
                    // empty mouseover listeners to the body's immediate children;
                    // only needed because of broken event delegation on iOS
                    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                    if ('ontouchstart' in document.documentElement) {
                        $('body').children().on('mouseover', null, $.noop);
                    }
                    var complete = function complete() {
                        if (_this24.config.animation) {
                            _this24._fixTransition();
                        }
                        var prevHoverState = _this24._hoverState;
                        _this24._hoverState = null;
                        $(_this24.element).trigger(_this24.constructor.Event.SHOWN);
                        if (prevHoverState === HoverState.OUT) {
                            _this24._leave(null, _this24);
                        }
                    };
                    if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
                        $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
                    }
                    else {
                        complete();
                    }
                }
            };
            Tooltip.prototype.hide = function hide(callback) {
                var _this25 = this;
                var tip = this.getTipElement();
                var hideEvent = $.Event(this.constructor.Event.HIDE);
                var complete = function complete() {
                    if (_this25._hoverState !== HoverState.SHOW && tip.parentNode) {
                        tip.parentNode.removeChild(tip);
                    }
                    _this25._cleanTipClass();
                    _this25.element.removeAttribute('aria-describedby');
                    $(_this25.element).trigger(_this25.constructor.Event.HIDDEN);
                    if (_this25._popper !== null) {
                        _this25._popper.destroy();
                    }
                    if (callback) {
                        callback();
                    }
                };
                $(this.element).trigger(hideEvent);
                if (hideEvent.isDefaultPrevented()) {
                    return;
                }
                $(tip).removeClass(ClassName.SHOW);
                // if this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support
                if ('ontouchstart' in document.documentElement) {
                    $('body').children().off('mouseover', null, $.noop);
                }
                this._activeTrigger[Trigger.CLICK] = false;
                this._activeTrigger[Trigger.FOCUS] = false;
                this._activeTrigger[Trigger.HOVER] = false;
                if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
                    $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                }
                else {
                    complete();
                }
                this._hoverState = '';
            };
            Tooltip.prototype.update = function update() {
                if (this._popper !== null) {
                    this._popper.scheduleUpdate();
                }
            };
            // protected
            Tooltip.prototype.isWithContent = function isWithContent() {
                return Boolean(this.getTitle());
            };
            Tooltip.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
                $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
            };
            Tooltip.prototype.getTipElement = function getTipElement() {
                return this.tip = this.tip || $(this.config.template)[0];
            };
            Tooltip.prototype.setContent = function setContent() {
                var $tip = $(this.getTipElement());
                this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
                $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
            };
            Tooltip.prototype.setElementContent = function setElementContent($element, content) {
                var html = this.config.html;
                if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
                    // content is a DOM node or a jQuery
                    if (html) {
                        if (!$(content).parent().is($element)) {
                            $element.empty().append(content);
                        }
                    }
                    else {
                        $element.text($(content).text());
                    }
                }
                else {
                    $element[html ? 'html' : 'text'](content);
                }
            };
            Tooltip.prototype.getTitle = function getTitle() {
                var title = this.element.getAttribute('data-original-title');
                if (!title) {
                    title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
                }
                return title;
            };
            // private
            Tooltip.prototype._getAttachment = function _getAttachment(placement) {
                return AttachmentMap[placement.toUpperCase()];
            };
            Tooltip.prototype._setListeners = function _setListeners() {
                var _this26 = this;
                var triggers = this.config.trigger.split(' ');
                triggers.forEach(function (trigger) {
                    if (trigger === 'click') {
                        $(_this26.element).on(_this26.constructor.Event.CLICK, _this26.config.selector, function (event) {
                            return _this26.toggle(event);
                        });
                    }
                    else if (trigger !== Trigger.MANUAL) {
                        var eventIn = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSEENTER : _this26.constructor.Event.FOCUSIN;
                        var eventOut = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSELEAVE : _this26.constructor.Event.FOCUSOUT;
                        $(_this26.element).on(eventIn, _this26.config.selector, function (event) {
                            return _this26._enter(event);
                        }).on(eventOut, _this26.config.selector, function (event) {
                            return _this26._leave(event);
                        });
                    }
                    $(_this26.element).closest('.modal').on('hide.bs.modal', function () {
                        return _this26.hide();
                    });
                });
                if (this.config.selector) {
                    this.config = $.extend({}, this.config, {
                        trigger: 'manual',
                        selector: ''
                    });
                }
                else {
                    this._fixTitle();
                }
            };
            Tooltip.prototype._fixTitle = function _fixTitle() {
                var titleType = _typeof(this.element.getAttribute('data-original-title'));
                if (this.element.getAttribute('title') || titleType !== 'string') {
                    this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
                    this.element.setAttribute('title', '');
                }
            };
            Tooltip.prototype._enter = function _enter(event, context) {
                var dataKey = this.constructor.DATA_KEY;
                context = context || $(event.currentTarget).data(dataKey);
                if (!context) {
                    context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                    $(event.currentTarget).data(dataKey, context);
                }
                if (event) {
                    context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
                }
                if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
                    context._hoverState = HoverState.SHOW;
                    return;
                }
                clearTimeout(context._timeout);
                context._hoverState = HoverState.SHOW;
                if (!context.config.delay || !context.config.delay.show) {
                    context.show();
                    return;
                }
                context._timeout = setTimeout(function () {
                    if (context._hoverState === HoverState.SHOW) {
                        context.show();
                    }
                }, context.config.delay.show);
            };
            Tooltip.prototype._leave = function _leave(event, context) {
                var dataKey = this.constructor.DATA_KEY;
                context = context || $(event.currentTarget).data(dataKey);
                if (!context) {
                    context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                    $(event.currentTarget).data(dataKey, context);
                }
                if (event) {
                    context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
                }
                if (context._isWithActiveTrigger()) {
                    return;
                }
                clearTimeout(context._timeout);
                context._hoverState = HoverState.OUT;
                if (!context.config.delay || !context.config.delay.hide) {
                    context.hide();
                    return;
                }
                context._timeout = setTimeout(function () {
                    if (context._hoverState === HoverState.OUT) {
                        context.hide();
                    }
                }, context.config.delay.hide);
            };
            Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
                for (var trigger in this._activeTrigger) {
                    if (this._activeTrigger[trigger]) {
                        return true;
                    }
                }
                return false;
            };
            Tooltip.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, this.constructor.Default, $(this.element).data(), config);
                if (config.delay && typeof config.delay === 'number') {
                    config.delay = {
                        show: config.delay,
                        hide: config.delay
                    };
                }
                if (config.title && typeof config.title === 'number') {
                    config.title = config.title.toString();
                }
                if (config.content && typeof config.content === 'number') {
                    config.content = config.content.toString();
                }
                Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
                return config;
            };
            Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
                var config = {};
                if (this.config) {
                    for (var key in this.config) {
                        if (this.constructor.Default[key] !== this.config[key]) {
                            config[key] = this.config[key];
                        }
                    }
                }
                return config;
            };
            Tooltip.prototype._cleanTipClass = function _cleanTipClass() {
                var $tip = $(this.getTipElement());
                var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
                if (tabClass !== null && tabClass.length > 0) {
                    $tip.removeClass(tabClass.join(''));
                }
            };
            Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(data.placement));
            };
            Tooltip.prototype._fixTransition = function _fixTransition() {
                var tip = this.getTipElement();
                var initConfigAnimation = this.config.animation;
                if (tip.getAttribute('x-placement') !== null) {
                    return;
                }
                $(tip).removeClass(ClassName.FADE);
                this.config.animation = false;
                this.hide();
                this.show();
                this.config.animation = initConfigAnimation;
            };
            // static
            Tooltip._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;
                    if (!data && /dispose|hide/.test(config)) {
                        return;
                    }
                    if (!data) {
                        data = new Tooltip(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };
            _createClass(Tooltip, null, [{
                    key: 'VERSION',
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: 'Default',
                    get: function get() {
                        return Default;
                    }
                }, {
                    key: 'NAME',
                    get: function get() {
                        return NAME;
                    }
                }, {
                    key: 'DATA_KEY',
                    get: function get() {
                        return DATA_KEY;
                    }
                }, {
                    key: 'Event',
                    get: function get() {
                        return Event;
                    }
                }, {
                    key: 'EVENT_KEY',
                    get: function get() {
                        return EVENT_KEY;
                    }
                }, {
                    key: 'DefaultType',
                    get: function get() {
                        return DefaultType;
                    }
                }]);
            return Tooltip;
        }();
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = Tooltip._jQueryInterface;
        $.fn[NAME].Constructor = Tooltip;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Tooltip._jQueryInterface;
        };
        return Tooltip;
    }(jQuery);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): popover.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var Popover = function ($) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'popover';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.popover';
        var EVENT_KEY = '.' + DATA_KEY;
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var CLASS_PREFIX = 'bs-popover';
        var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');
        var Default = $.extend({}, Tooltip.Default, {
            placement: 'right',
            trigger: 'click',
            content: '',
            template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
        });
        var DefaultType = $.extend({}, Tooltip.DefaultType, {
            content: '(string|element|function)'
        });
        var ClassName = {
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            TITLE: '.popover-header',
            CONTENT: '.popover-body'
        };
        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            INSERTED: 'inserted' + EVENT_KEY,
            CLICK: 'click' + EVENT_KEY,
            FOCUSIN: 'focusin' + EVENT_KEY,
            FOCUSOUT: 'focusout' + EVENT_KEY,
            MOUSEENTER: 'mouseenter' + EVENT_KEY,
            MOUSELEAVE: 'mouseleave' + EVENT_KEY
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */
        };
        var Popover = function (_Tooltip) {
            _inherits(Popover, _Tooltip);
            function Popover() {
                _classCallCheck(this, Popover);
                return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
            }
            // overrides
            Popover.prototype.isWithContent = function isWithContent() {
                return this.getTitle() || this._getContent();
            };
            Popover.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
                $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
            };
            Popover.prototype.getTipElement = function getTipElement() {
                return this.tip = this.tip || $(this.config.template)[0];
            };
            Popover.prototype.setContent = function setContent() {
                var $tip = $(this.getTipElement());
                // we use append for html objects to maintain js events
                this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
                this.setElementContent($tip.find(Selector.CONTENT), this._getContent());
                $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
            };
            // private
            Popover.prototype._getContent = function _getContent() {
                return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
            };
            Popover.prototype._cleanTipClass = function _cleanTipClass() {
                var $tip = $(this.getTipElement());
                var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
                if (tabClass !== null && tabClass.length > 0) {
                    $tip.removeClass(tabClass.join(''));
                }
            };
            // static
            Popover._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;
                    if (!data && /destroy|hide/.test(config)) {
                        return;
                    }
                    if (!data) {
                        data = new Popover(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };
            _createClass(Popover, null, [{
                    key: 'VERSION',
                    // getters
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: 'Default',
                    get: function get() {
                        return Default;
                    }
                }, {
                    key: 'NAME',
                    get: function get() {
                        return NAME;
                    }
                }, {
                    key: 'DATA_KEY',
                    get: function get() {
                        return DATA_KEY;
                    }
                }, {
                    key: 'Event',
                    get: function get() {
                        return Event;
                    }
                }, {
                    key: 'EVENT_KEY',
                    get: function get() {
                        return EVENT_KEY;
                    }
                }, {
                    key: 'DefaultType',
                    get: function get() {
                        return DefaultType;
                    }
                }]);
            return Popover;
        }(Tooltip);
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */
        $.fn[NAME] = Popover._jQueryInterface;
        $.fn[NAME].Constructor = Popover;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Popover._jQueryInterface;
        };
        return Popover;
    }(jQuery);
})();


/***/ }),
/* 116 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/hzimmerman/code/VisuConference/www/src/logo.svg Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 841.9 595.3\">\n|     <g fill=\"#61DAFB\">\n|         <path d=\"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z\"/>");

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./font-awesome.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./font-awesome.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url(" + __webpack_require__(119) + ");src:url(" + __webpack_require__(120) + "?#iefix&v=4.7.0) format('embedded-opentype'),url(" + __webpack_require__(121) + ") format('woff2'),url(" + __webpack_require__(122) + ") format('woff'),url(" + __webpack_require__(123) + ") format('truetype'),url(" + __webpack_require__(124) + "#fontawesomeregular) format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\F000\"}.fa-music:before{content:\"\\F001\"}.fa-search:before{content:\"\\F002\"}.fa-envelope-o:before{content:\"\\F003\"}.fa-heart:before{content:\"\\F004\"}.fa-star:before{content:\"\\F005\"}.fa-star-o:before{content:\"\\F006\"}.fa-user:before{content:\"\\F007\"}.fa-film:before{content:\"\\F008\"}.fa-th-large:before{content:\"\\F009\"}.fa-th:before{content:\"\\F00A\"}.fa-th-list:before{content:\"\\F00B\"}.fa-check:before{content:\"\\F00C\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\F00D\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-search-minus:before{content:\"\\F010\"}.fa-power-off:before{content:\"\\F011\"}.fa-signal:before{content:\"\\F012\"}.fa-gear:before,.fa-cog:before{content:\"\\F013\"}.fa-trash-o:before{content:\"\\F014\"}.fa-home:before{content:\"\\F015\"}.fa-file-o:before{content:\"\\F016\"}.fa-clock-o:before{content:\"\\F017\"}.fa-road:before{content:\"\\F018\"}.fa-download:before{content:\"\\F019\"}.fa-arrow-circle-o-down:before{content:\"\\F01A\"}.fa-arrow-circle-o-up:before{content:\"\\F01B\"}.fa-inbox:before{content:\"\\F01C\"}.fa-play-circle-o:before{content:\"\\F01D\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\F01E\"}.fa-refresh:before{content:\"\\F021\"}.fa-list-alt:before{content:\"\\F022\"}.fa-lock:before{content:\"\\F023\"}.fa-flag:before{content:\"\\F024\"}.fa-headphones:before{content:\"\\F025\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-up:before{content:\"\\F028\"}.fa-qrcode:before{content:\"\\F029\"}.fa-barcode:before{content:\"\\F02A\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-book:before{content:\"\\F02D\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-print:before{content:\"\\F02F\"}.fa-camera:before{content:\"\\F030\"}.fa-font:before{content:\"\\F031\"}.fa-bold:before{content:\"\\F032\"}.fa-italic:before{content:\"\\F033\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-right:before{content:\"\\F038\"}.fa-align-justify:before{content:\"\\F039\"}.fa-list:before{content:\"\\F03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\\F03B\"}.fa-indent:before{content:\"\\F03C\"}.fa-video-camera:before{content:\"\\F03D\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\F03E\"}.fa-pencil:before{content:\"\\F040\"}.fa-map-marker:before{content:\"\\F041\"}.fa-adjust:before{content:\"\\F042\"}.fa-tint:before{content:\"\\F043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\F044\"}.fa-share-square-o:before{content:\"\\F045\"}.fa-check-square-o:before{content:\"\\F046\"}.fa-arrows:before{content:\"\\F047\"}.fa-step-backward:before{content:\"\\F048\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-backward:before{content:\"\\F04A\"}.fa-play:before{content:\"\\F04B\"}.fa-pause:before{content:\"\\F04C\"}.fa-stop:before{content:\"\\F04D\"}.fa-forward:before{content:\"\\F04E\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-step-forward:before{content:\"\\F051\"}.fa-eject:before{content:\"\\F052\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-times-circle:before{content:\"\\F057\"}.fa-check-circle:before{content:\"\\F058\"}.fa-question-circle:before{content:\"\\F059\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-times-circle-o:before{content:\"\\F05C\"}.fa-check-circle-o:before{content:\"\\F05D\"}.fa-ban:before{content:\"\\F05E\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\F064\"}.fa-expand:before{content:\"\\F065\"}.fa-compress:before{content:\"\\F066\"}.fa-plus:before{content:\"\\F067\"}.fa-minus:before{content:\"\\F068\"}.fa-asterisk:before{content:\"\\F069\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-gift:before{content:\"\\F06B\"}.fa-leaf:before{content:\"\\F06C\"}.fa-fire:before{content:\"\\F06D\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\F071\"}.fa-plane:before{content:\"\\F072\"}.fa-calendar:before{content:\"\\F073\"}.fa-random:before{content:\"\\F074\"}.fa-comment:before{content:\"\\F075\"}.fa-magnet:before{content:\"\\F076\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-retweet:before{content:\"\\F079\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-arrows-v:before{content:\"\\F07D\"}.fa-arrows-h:before{content:\"\\F07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\F080\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-key:before{content:\"\\F084\"}.fa-gears:before,.fa-cogs:before{content:\"\\F085\"}.fa-comments:before{content:\"\\F086\"}.fa-thumbs-o-up:before{content:\"\\F087\"}.fa-thumbs-o-down:before{content:\"\\F088\"}.fa-star-half:before{content:\"\\F089\"}.fa-heart-o:before{content:\"\\F08A\"}.fa-sign-out:before{content:\"\\F08B\"}.fa-linkedin-square:before{content:\"\\F08C\"}.fa-thumb-tack:before{content:\"\\F08D\"}.fa-external-link:before{content:\"\\F08E\"}.fa-sign-in:before{content:\"\\F090\"}.fa-trophy:before{content:\"\\F091\"}.fa-github-square:before{content:\"\\F092\"}.fa-upload:before{content:\"\\F093\"}.fa-lemon-o:before{content:\"\\F094\"}.fa-phone:before{content:\"\\F095\"}.fa-square-o:before{content:\"\\F096\"}.fa-bookmark-o:before{content:\"\\F097\"}.fa-phone-square:before{content:\"\\F098\"}.fa-twitter:before{content:\"\\F099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\F09A\"}.fa-github:before{content:\"\\F09B\"}.fa-unlock:before{content:\"\\F09C\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-feed:before,.fa-rss:before{content:\"\\F09E\"}.fa-hdd-o:before{content:\"\\F0A0\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bell:before{content:\"\\F0F3\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-hand-o-right:before{content:\"\\F0A4\"}.fa-hand-o-left:before{content:\"\\F0A5\"}.fa-hand-o-up:before{content:\"\\F0A6\"}.fa-hand-o-down:before{content:\"\\F0A7\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-globe:before{content:\"\\F0AC\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-filter:before{content:\"\\F0B0\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-group:before,.fa-users:before{content:\"\\F0C0\"}.fa-chain:before,.fa-link:before{content:\"\\F0C1\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-flask:before{content:\"\\F0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\\F0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\\F0C5\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\F0C7\"}.fa-square:before{content:\"\\F0C8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\F0C9\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-underline:before{content:\"\\F0CD\"}.fa-table:before{content:\"\\F0CE\"}.fa-magic:before{content:\"\\F0D0\"}.fa-truck:before{content:\"\\F0D1\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-plus:before{content:\"\\F0D5\"}.fa-money:before{content:\"\\F0D6\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-columns:before{content:\"\\F0DB\"}.fa-unsorted:before,.fa-sort:before{content:\"\\F0DC\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\F0DD\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\F0DE\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-linkedin:before{content:\"\\F0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\F0E2\"}.fa-legal:before,.fa-gavel:before{content:\"\\F0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\F0E4\"}.fa-comment-o:before{content:\"\\F0E5\"}.fa-comments-o:before{content:\"\\F0E6\"}.fa-flash:before,.fa-bolt:before{content:\"\\F0E7\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\F0EA\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-exchange:before{content:\"\\F0EC\"}.fa-cloud-download:before{content:\"\\F0ED\"}.fa-cloud-upload:before{content:\"\\F0EE\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-bell-o:before{content:\"\\F0A2\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cutlery:before{content:\"\\F0F5\"}.fa-file-text-o:before{content:\"\\F0F6\"}.fa-building-o:before{content:\"\\F0F7\"}.fa-hospital-o:before{content:\"\\F0F8\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-beer:before{content:\"\\F0FC\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angle-down:before{content:\"\\F107\"}.fa-desktop:before{content:\"\\F108\"}.fa-laptop:before{content:\"\\F109\"}.fa-tablet:before{content:\"\\F10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\F10B\"}.fa-circle-o:before{content:\"\\F10C\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-spinner:before{content:\"\\F110\"}.fa-circle:before{content:\"\\F111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\F112\"}.fa-github-alt:before{content:\"\\F113\"}.fa-folder-o:before{content:\"\\F114\"}.fa-folder-open-o:before{content:\"\\F115\"}.fa-smile-o:before{content:\"\\F118\"}.fa-frown-o:before{content:\"\\F119\"}.fa-meh-o:before{content:\"\\F11A\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-keyboard-o:before{content:\"\\F11C\"}.fa-flag-o:before{content:\"\\F11D\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-terminal:before{content:\"\\F120\"}.fa-code:before{content:\"\\F121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\F122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\F123\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-crop:before{content:\"\\F125\"}.fa-code-fork:before{content:\"\\F126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\F127\"}.fa-question:before{content:\"\\F128\"}.fa-info:before{content:\"\\F129\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-superscript:before{content:\"\\F12B\"}.fa-subscript:before{content:\"\\F12C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-shield:before{content:\"\\F132\"}.fa-calendar-o:before{content:\"\\F133\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-rocket:before{content:\"\\F135\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-html5:before{content:\"\\F13B\"}.fa-css3:before{content:\"\\F13C\"}.fa-anchor:before{content:\"\\F13D\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-bullseye:before{content:\"\\F140\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-rss-square:before{content:\"\\F143\"}.fa-play-circle:before{content:\"\\F144\"}.fa-ticket:before{content:\"\\F145\"}.fa-minus-square:before{content:\"\\F146\"}.fa-minus-square-o:before{content:\"\\F147\"}.fa-level-up:before{content:\"\\F148\"}.fa-level-down:before{content:\"\\F149\"}.fa-check-square:before{content:\"\\F14A\"}.fa-pencil-square:before{content:\"\\F14B\"}.fa-external-link-square:before{content:\"\\F14C\"}.fa-share-square:before{content:\"\\F14D\"}.fa-compass:before{content:\"\\F14E\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\F150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\F151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\F152\"}.fa-euro:before,.fa-eur:before{content:\"\\F153\"}.fa-gbp:before{content:\"\\F154\"}.fa-dollar:before,.fa-usd:before{content:\"\\F155\"}.fa-rupee:before,.fa-inr:before{content:\"\\F156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\F157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\F158\"}.fa-won:before,.fa-krw:before{content:\"\\F159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\F15A\"}.fa-file:before{content:\"\\F15B\"}.fa-file-text:before{content:\"\\F15C\"}.fa-sort-alpha-asc:before{content:\"\\F15D\"}.fa-sort-alpha-desc:before{content:\"\\F15E\"}.fa-sort-amount-asc:before{content:\"\\F160\"}.fa-sort-amount-desc:before{content:\"\\F161\"}.fa-sort-numeric-asc:before{content:\"\\F162\"}.fa-sort-numeric-desc:before{content:\"\\F163\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-youtube-square:before{content:\"\\F166\"}.fa-youtube:before{content:\"\\F167\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-youtube-play:before{content:\"\\F16A\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-instagram:before{content:\"\\F16D\"}.fa-flickr:before{content:\"\\F16E\"}.fa-adn:before{content:\"\\F170\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitbucket-square:before{content:\"\\F172\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-long-arrow-down:before{content:\"\\F175\"}.fa-long-arrow-up:before{content:\"\\F176\"}.fa-long-arrow-left:before{content:\"\\F177\"}.fa-long-arrow-right:before{content:\"\\F178\"}.fa-apple:before{content:\"\\F179\"}.fa-windows:before{content:\"\\F17A\"}.fa-android:before{content:\"\\F17B\"}.fa-linux:before{content:\"\\F17C\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-skype:before{content:\"\\F17E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-trello:before{content:\"\\F181\"}.fa-female:before{content:\"\\F182\"}.fa-male:before{content:\"\\F183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\F184\"}.fa-sun-o:before{content:\"\\F185\"}.fa-moon-o:before{content:\"\\F186\"}.fa-archive:before{content:\"\\F187\"}.fa-bug:before{content:\"\\F188\"}.fa-vk:before{content:\"\\F189\"}.fa-weibo:before{content:\"\\F18A\"}.fa-renren:before{content:\"\\F18B\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-arrow-circle-o-right:before{content:\"\\F18E\"}.fa-arrow-circle-o-left:before{content:\"\\F190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\F191\"}.fa-dot-circle-o:before{content:\"\\F192\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\F195\"}.fa-plus-square-o:before{content:\"\\F196\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-slack:before{content:\"\\F198\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-openid:before{content:\"\\F19B\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\F19C\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\F19D\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-google:before{content:\"\\F1A0\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-digg:before{content:\"\\F1A6\"}.fa-pied-piper-pp:before{content:\"\\F1A7\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-language:before{content:\"\\F1AB\"}.fa-fax:before{content:\"\\F1AC\"}.fa-building:before{content:\"\\F1AD\"}.fa-child:before{content:\"\\F1AE\"}.fa-paw:before{content:\"\\F1B0\"}.fa-spoon:before{content:\"\\F1B1\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-automobile:before,.fa-car:before{content:\"\\F1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\\F1BA\"}.fa-tree:before{content:\"\\F1BB\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-database:before{content:\"\\F1C0\"}.fa-file-pdf-o:before{content:\"\\F1C1\"}.fa-file-word-o:before{content:\"\\F1C2\"}.fa-file-excel-o:before{content:\"\\F1C3\"}.fa-file-powerpoint-o:before{content:\"\\F1C4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\F1C5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\F1C6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\F1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\F1C8\"}.fa-file-code-o:before{content:\"\\F1C9\"}.fa-vine:before{content:\"\\F1CA\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\F1CD\"}.fa-circle-o-notch:before{content:\"\\F1CE\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\F1D0\"}.fa-ge:before,.fa-empire:before{content:\"\\F1D1\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-git:before{content:\"\\F1D3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\F1D4\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-qq:before{content:\"\\F1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\F1D7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\F1D8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\F1D9\"}.fa-history:before{content:\"\\F1DA\"}.fa-circle-thin:before{content:\"\\F1DB\"}.fa-header:before{content:\"\\F1DC\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-sliders:before{content:\"\\F1DE\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\F1E3\"}.fa-tty:before{content:\"\\F1E4\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-plug:before{content:\"\\F1E6\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-newspaper-o:before{content:\"\\F1EA\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bell-slash-o:before{content:\"\\F1F7\"}.fa-trash:before{content:\"\\F1F8\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-at:before{content:\"\\F1FA\"}.fa-eyedropper:before{content:\"\\F1FB\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-area-chart:before{content:\"\\F1FE\"}.fa-pie-chart:before{content:\"\\F200\"}.fa-line-chart:before{content:\"\\F201\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-bicycle:before{content:\"\\F206\"}.fa-bus:before{content:\"\\F207\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-angellist:before{content:\"\\F209\"}.fa-cc:before{content:\"\\F20A\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\F20B\"}.fa-meanpath:before{content:\"\\F20C\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-dashcube:before{content:\"\\F210\"}.fa-forumbee:before{content:\"\\F211\"}.fa-leanpub:before{content:\"\\F212\"}.fa-sellsy:before{content:\"\\F213\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-diamond:before{content:\"\\F219\"}.fa-ship:before{content:\"\\F21A\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-street-view:before{content:\"\\F21D\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-venus:before{content:\"\\F221\"}.fa-mars:before{content:\"\\F222\"}.fa-mercury:before{content:\"\\F223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-venus-double:before{content:\"\\F226\"}.fa-mars-double:before{content:\"\\F227\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-neuter:before{content:\"\\F22C\"}.fa-genderless:before{content:\"\\F22D\"}.fa-facebook-official:before{content:\"\\F230\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-server:before{content:\"\\F233\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-times:before{content:\"\\F235\"}.fa-hotel:before,.fa-bed:before{content:\"\\F236\"}.fa-viacoin:before{content:\"\\F237\"}.fa-train:before{content:\"\\F238\"}.fa-subway:before{content:\"\\F239\"}.fa-medium:before{content:\"\\F23A\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\F23B\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-opencart:before{content:\"\\F23D\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:\"\\F240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\F242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\F244\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-sticky-note-o:before{content:\"\\F24A\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-clone:before{content:\"\\F24D\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-hourglass-o:before{content:\"\\F250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\F251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\F255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\F256\"}.fa-hand-scissors-o:before{content:\"\\F257\"}.fa-hand-lizard-o:before{content:\"\\F258\"}.fa-hand-spock-o:before{content:\"\\F259\"}.fa-hand-pointer-o:before{content:\"\\F25A\"}.fa-hand-peace-o:before{content:\"\\F25B\"}.fa-trademark:before{content:\"\\F25C\"}.fa-registered:before{content:\"\\F25D\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-safari:before{content:\"\\F267\"}.fa-chrome:before{content:\"\\F268\"}.fa-firefox:before{content:\"\\F269\"}.fa-opera:before{content:\"\\F26A\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-tv:before,.fa-television:before{content:\"\\F26C\"}.fa-contao:before{content:\"\\F26D\"}.fa-500px:before{content:\"\\F26E\"}.fa-amazon:before{content:\"\\F270\"}.fa-calendar-plus-o:before{content:\"\\F271\"}.fa-calendar-minus-o:before{content:\"\\F272\"}.fa-calendar-times-o:before{content:\"\\F273\"}.fa-calendar-check-o:before{content:\"\\F274\"}.fa-industry:before{content:\"\\F275\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-map-o:before{content:\"\\F278\"}.fa-map:before{content:\"\\F279\"}.fa-commenting:before{content:\"\\F27A\"}.fa-commenting-o:before{content:\"\\F27B\"}.fa-houzz:before{content:\"\\F27C\"}.fa-vimeo:before{content:\"\\F27D\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-fonticons:before{content:\"\\F280\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-edge:before{content:\"\\F282\"}.fa-credit-card-alt:before{content:\"\\F283\"}.fa-codiepie:before{content:\"\\F284\"}.fa-modx:before{content:\"\\F285\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-usb:before{content:\"\\F287\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-scribd:before{content:\"\\F28A\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-pause-circle-o:before{content:\"\\F28C\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stop-circle-o:before{content:\"\\F28E\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-hashtag:before{content:\"\\F292\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-percent:before{content:\"\\F295\"}.fa-gitlab:before{content:\"\\F296\"}.fa-wpbeginner:before{content:\"\\F297\"}.fa-wpforms:before{content:\"\\F298\"}.fa-envira:before{content:\"\\F299\"}.fa-universal-access:before{content:\"\\F29A\"}.fa-wheelchair-alt:before{content:\"\\F29B\"}.fa-question-circle-o:before{content:\"\\F29C\"}.fa-blind:before{content:\"\\F29D\"}.fa-audio-description:before{content:\"\\F29E\"}.fa-volume-control-phone:before{content:\"\\F2A0\"}.fa-braille:before{content:\"\\F2A1\"}.fa-assistive-listening-systems:before{content:\"\\F2A2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\F2A3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\F2A4\"}.fa-glide:before{content:\"\\F2A5\"}.fa-glide-g:before{content:\"\\F2A6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\F2A7\"}.fa-low-vision:before{content:\"\\F2A8\"}.fa-viadeo:before{content:\"\\F2A9\"}.fa-viadeo-square:before{content:\"\\F2AA\"}.fa-snapchat:before{content:\"\\F2AB\"}.fa-snapchat-ghost:before{content:\"\\F2AC\"}.fa-snapchat-square:before{content:\"\\F2AD\"}.fa-pied-piper:before{content:\"\\F2AE\"}.fa-first-order:before{content:\"\\F2B0\"}.fa-yoast:before{content:\"\\F2B1\"}.fa-themeisle:before{content:\"\\F2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\F2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\F2B4\"}.fa-handshake-o:before{content:\"\\F2B5\"}.fa-envelope-open:before{content:\"\\F2B6\"}.fa-envelope-open-o:before{content:\"\\F2B7\"}.fa-linode:before{content:\"\\F2B8\"}.fa-address-book:before{content:\"\\F2B9\"}.fa-address-book-o:before{content:\"\\F2BA\"}.fa-vcard:before,.fa-address-card:before{content:\"\\F2BB\"}.fa-vcard-o:before,.fa-address-card-o:before{content:\"\\F2BC\"}.fa-user-circle:before{content:\"\\F2BD\"}.fa-user-circle-o:before{content:\"\\F2BE\"}.fa-user-o:before{content:\"\\F2C0\"}.fa-id-badge:before{content:\"\\F2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\F2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\F2C3\"}.fa-quora:before{content:\"\\F2C4\"}.fa-free-code-camp:before{content:\"\\F2C5\"}.fa-telegram:before{content:\"\\F2C6\"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:\"\\F2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\F2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\F2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\F2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\F2CB\"}.fa-shower:before{content:\"\\F2CC\"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:\"\\F2CD\"}.fa-podcast:before{content:\"\\F2CE\"}.fa-window-maximize:before{content:\"\\F2D0\"}.fa-window-minimize:before{content:\"\\F2D1\"}.fa-window-restore:before{content:\"\\F2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\F2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\F2D4\"}.fa-bandcamp:before{content:\"\\F2D5\"}.fa-grav:before{content:\"\\F2D6\"}.fa-etsy:before{content:\"\\F2D7\"}.fa-imdb:before{content:\"\\F2D8\"}.fa-ravelry:before{content:\"\\F2D9\"}.fa-eercast:before{content:\"\\F2DA\"}.fa-microchip:before{content:\"\\F2DB\"}.fa-snowflake-o:before{content:\"\\F2DC\"}.fa-superpowers:before{content:\"\\F2DD\"}.fa-wpexplorer:before{content:\"\\F2DE\"}.fa-meetup:before{content:\"\\F2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}\n", ""]);

// exports


/***/ }),
/* 119 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/hzimmerman/code/VisuConference/www/node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0 Unexpected character '�' (1:1)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/hzimmerman/code/VisuConference/www/node_modules/font-awesome/fonts/fontawesome-webfont.eot Unexpected character '�' (1:1)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/hzimmerman/code/VisuConference/www/node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 Unexpected character '\u0000' (1:4)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/hzimmerman/code/VisuConference/www/node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0 Unexpected character '\u0000' (1:4)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/hzimmerman/code/VisuConference/www/node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0 Unexpected character '\u0000' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/hzimmerman/code/VisuConference/www/node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0 Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <?xml version=\"1.0\" standalone=\"no\"?>\n| <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\" >\n| <svg>");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
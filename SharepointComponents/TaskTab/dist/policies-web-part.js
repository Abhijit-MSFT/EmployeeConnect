define("fc2baa3e-0297-4bd1-8dbf-d70666d0e734_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-loader","@microsoft/sp-webpart-base","PoliciesWebPartStrings","jquery"], function(__WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_loader__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__, __WEBPACK_EXTERNAL_MODULE_PoliciesWebPartStrings__, __WEBPACK_EXTERNAL_MODULE_jquery__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/webparts/policies/PoliciesWebPart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/webparts/policies/PoliciesWebPart.js":
/*!**************************************************!*\
  !*** ./lib/webparts/policies/PoliciesWebPart.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "@microsoft/sp-core-library");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "@microsoft/sp-webpart-base");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PoliciesWebPart.module.scss */ "./lib/webparts/policies/PoliciesWebPart.module.scss.js");
/* harmony import */ var PoliciesWebPartStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! PoliciesWebPartStrings */ "PoliciesWebPartStrings");
/* harmony import */ var PoliciesWebPartStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(PoliciesWebPartStrings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-loader */ "@microsoft/sp-loader");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var PoliciesWebPart = /** @class */ (function (_super) {
    __extends(PoliciesWebPart, _super);
    function PoliciesWebPart() {
        var _this = _super.call(this) || this;
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#heading2,#heading3,#heading4").hide();
            var selector = "div a";
            // $(selector).on("click",()=> {
            //   $(selector).removeClass("active");
            //   $(this).addClass("active");
            // });
            jquery__WEBPACK_IMPORTED_MODULE_5__(selector).on("click", function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__(selector).removeClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_5__(_this).addClass("active");
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__(".HR").on("click", function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__("#heading2,#heading3,#heading4").hide();
                jquery__WEBPACK_IMPORTED_MODULE_5__("#heading1").show();
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__(".PB").on("click", function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__("#heading1,#heading3,#heading4").hide();
                jquery__WEBPACK_IMPORTED_MODULE_5__("#heading2").show();
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__(".IT").on("click", function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__("#heading1,#heading2,#heading4").hide();
                jquery__WEBPACK_IMPORTED_MODULE_5__("#heading3").show();
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__(".RO").on("click", function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__("#heading1,#heading2,#heading3").hide();
                jquery__WEBPACK_IMPORTED_MODULE_5__("#heading4").show();
            });
        });
        return _this;
    }
    PoliciesWebPart.prototype.render = function () {
        var cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__["SPComponentLoader"].loadCss(cssURL);
        this.domElement.innerHTML = "\n      <div class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].policies + "\" id=\"accordion\">\n        <div class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container + "\">\n          <div class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row + "\">\n            <div class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].column1 + "\">\n              <div class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].sidebar + "\">\n                <a\n                  class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"] + " accordion-toggle\"\n                  data-toggle=\"collapse\"\n                   data-parent=\"#accordion\"\n                  data-target=\"#hr\" aria-expanded=\"false\"\n                  href=\"#heading1\"\n                  >\n                  <span class=\"HR\">Human resources</span>\n                  </a>\n                      <div id='hr' class=\"panel-collapse\">\n                        <div class=\"service\">Service</div>\n                      </div>\n\n                  <a class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" href=\"#heading2\">\n                    <span class=\"PB\">Pay & Benefits</span>\n                  </a>\n                  <a class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" href=\"#heading3\">\n                    <span class=\"IT\">IT facilities</span>\n                  </a>\n                  <a class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" href=\"#heading4\">\n                    <span class=\"RO\">Retail operations</span>\n                  </a>\n                </div>\n            </div>\n             <div class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].column2 + "\">\n                <div class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].content + "\">\n                  <div id=\"heading1\">\n                      <div class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].head + "\">\n                          <h4>Human Resource Policies</h4>\n                          This document contains all policies-related information for employees.\n                          Please contact your HR representative for any queries.\n                      </div>\n                        <h6 class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].subheading + "\">1.1 Annual Leave</h6>\n                          <p class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].subsubheading + "\">\n                            Important guidelines for the annual leave policy are listed below:\n                          </p>\n                              <ul class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].bulletpts + "\">\n                                <li>\n                                  All employees are entitled to a total of 15 annual leaves during the\n                                  calendar year\n                                </li>\n                                <li>\n                                  The annual leave cycle is based on calendar year (January 1 to\n                                  December 31)\n                                </li>\n                                <li>\n                                  Weekly off/holidays falling during the leave period are excluded\n                                  from the number of leave days taken\n                                </li>\n                                <li>\n                                  Only 5 unused annual leaves can be carried forward to the next\n                                  calendar year\n                                </li>\n                                <li>\n                                  Employees who join during the course of the year will receive annual\n                                  leaves on a pro-rated basis\n                                </li>\n                                <li>\n                                  If an employee leaves during the leave cycle and has taken more\n                                  leaves than the eligibility, the excess leaves taken will be\n                                  adjusted against the full and final settlement\n                                </li>\n                                <li>\n                                  All employees need to apply for leaves using the designated vacation\n                                  tool\n                                </li>\n                                <li>\n                                  All annual leaves must be approved by managers before the leave\n                                  period begins\n                                </li>\n                              </ul>\n                                    <h6 class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].subheading + "\">1.2 Sick Leave</h6>\n                                        <p class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].subsubheading + "\">\n                                          Important guidelines for the sick leave policy are listed below:\n                                        </p>\n                                            <ul class=\"" + _PoliciesWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].bulletpts + "\">\n                                              <li>\n                                                All employees are entitled to a total of 12 sick leaves during the\n                                                calendar year\n                                              </li>\n                                              <li>\n                                                The sick leave cycle is based on calendar year (January 1 to\n                                                December 31)\n                                              </li>\n                                              <li>\n                                                Weekly off/holidays falling during the leave period are excluded\n                                                from the number of leave days taken\n                                              </li>\n                                              <li>\n                                                Unused sick leaves cannot be carried forward to the next calendar\n                                                year\n                                              </li>\n                                              <li>\n                                                Employees who join during the course of the year will receive sick\n                                                leaves on a pro-rated basis\n                                              </li>\n                                              <li>\n                                                If an employee leaves during the leave cycle and has taken more\n                                                leaves than the eligibility, the excess leaves taken will be\n                                                adjusted against the full and final settlement\n                                              </li>\n                                              <li>\n                                                All employees need to apply for sick leaves using the designated\n                                                vacation tool after re-joining work\n                                              </li>\n                                              <li>\n                                                If an employee takes more than 5 consecutive sick leaves, he/she\n                                                will be required to furnish a medical certificate\n                                              </li>\n                                            </ul>\n                      </div>\n                      <div id=\"heading2\">.</div>\n                      <div id=\"heading3\">..</div>\n                      <div id=\"heading4\">...</div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(PoliciesWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    PoliciesWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: PoliciesWebPartStrings__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: PoliciesWebPartStrings__WEBPACK_IMPORTED_MODULE_3__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])("description", {
                                    label: PoliciesWebPartStrings__WEBPACK_IMPORTED_MODULE_3__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return PoliciesWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (PoliciesWebPart);


/***/ }),

/***/ "./lib/webparts/policies/PoliciesWebPart.module.css":
/*!**********************************************************!*\
  !*** ./lib/webparts/policies/PoliciesWebPart.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!./PoliciesWebPart.module.css */ "./node_modules/css-loader/index.js?!./lib/webparts/policies/PoliciesWebPart.module.css");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "./lib/webparts/policies/PoliciesWebPart.module.scss.js":
/*!**************************************************************!*\
  !*** ./lib/webparts/policies/PoliciesWebPart.module.scss.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PoliciesWebPart.module.css */ "./lib/webparts/policies/PoliciesWebPart.module.css");
var styles = {
    policies: 'policies_f7973fde',
    container: 'container_f7973fde',
    row: 'row_f7973fde',
    column1: 'column1_f7973fde',
    'ms-Grid': 'ms-Grid_f7973fde',
    column2: 'column2_f7973fde',
    sidebar: 'sidebar_f7973fde',
    active: 'active_f7973fde',
    content: 'content_f7973fde',
    head: 'head_f7973fde',
    subheading: 'subheading_f7973fde',
    subsubheading: 'subsubheading_f7973fde',
    bulletpts: 'bulletpts_f7973fde',
    hrdetails: 'hrdetails_f7973fde',
    hr: 'hr_f7973fde'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./lib/webparts/policies/PoliciesWebPart.module.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./lib/webparts/policies/PoliciesWebPart.module.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".policies_f7973fde .container_f7973fde{width:auto;margin:0 auto}.policies_f7973fde .row_f7973fde{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000}.policies_f7973fde .row_f7973fde:after,.policies_f7973fde .row_f7973fde:before{display:table;content:\"\";line-height:0}.policies_f7973fde .row_f7973fde:after{clear:both}.policies_f7973fde .column1_f7973fde{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .policies_f7973fde .column1_f7973fde{float:left}[dir=rtl] .policies_f7973fde .column1_f7973fde{float:right}.policies_f7973fde .column1_f7973fde .ms-Grid_f7973fde{padding:0}@media (min-width:640px){.policies_f7973fde .column1_f7973fde{width:25%}}.policies_f7973fde .column2_f7973fde{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .policies_f7973fde .column2_f7973fde{float:left}[dir=rtl] .policies_f7973fde .column2_f7973fde{float:right}.policies_f7973fde .column2_f7973fde .ms-Grid_f7973fde{padding:0}@media (min-width:640px){.policies_f7973fde .column2_f7973fde{width:75%}}.policies_f7973fde .sidebar_f7973fde{margin:0;padding:0;width:auto;background-color:#f3f2f1;height:100vh;overflow:auto}.policies_f7973fde .sidebar_f7973fde a{display:block;color:#a9a8a7;padding:8px;padding-left:30px;text-decoration:none}.policies_f7973fde a.active_f7973fde{background-color:#e3e2eb;color:#000;font-weight:700;cursor:pointer}.policies_f7973fde a.active_f7973fde .sidebar_f7973fde{color:#000}.policies_f7973fde .sidebar_f7973fde a:hover:not(.active_f7973fde){background-color:#e3e2eb;color:#000}.policies_f7973fde div.content_f7973fde{margin-left:auto;padding:auto;width:auto}.policies_f7973fde .head_f7973fde{margin-bottom:20px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.policies_f7973fde .subheading_f7973fde{margin-top:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.policies_f7973fde .subsubheading_f7973fde{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin:0}.policies_f7973fde .bulletpts_f7973fde{font-size:14px}.policies_f7973fde .hrdetails_f7973fde{margin-left:15%}.policies_f7973fde #hr_f7973fde{display:none}@media (max-width:425px){.policies_f7973fde #hr_f7973fde{display:block}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "@microsoft/sp-core-library":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__;

/***/ }),

/***/ "@microsoft/sp-loader":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_loader__;

/***/ }),

/***/ "@microsoft/sp-webpart-base":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__;

/***/ }),

/***/ "PoliciesWebPartStrings":
/*!*****************************************!*\
  !*** external "PoliciesWebPartStrings" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_PoliciesWebPartStrings__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ })});;
//# sourceMappingURL=policies-web-part.js.map
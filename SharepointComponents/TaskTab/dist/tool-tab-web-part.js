define("d2865084-ab74-41f5-9cf0-afac7226c9df_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-loader","@microsoft/sp-webpart-base","ToolTabWebPartStrings","bootstrap","jquery"], function(__WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_loader__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__, __WEBPACK_EXTERNAL_MODULE_ToolTabWebPartStrings__, __WEBPACK_EXTERNAL_MODULE_bootstrap__, __WEBPACK_EXTERNAL_MODULE_jquery__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/webparts/toolTab/ToolTabWebPart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/webparts/toolTab/ToolTabWebPart.js":
/*!************************************************!*\
  !*** ./lib/webparts/toolTab/ToolTabWebPart.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "@microsoft/sp-core-library");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "@microsoft/sp-webpart-base");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolTabWebPart.module.scss */ "./lib/webparts/toolTab/ToolTabWebPart.module.scss.js");
/* harmony import */ var ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ToolTabWebPartStrings */ "ToolTabWebPartStrings");
/* harmony import */ var ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_3__);
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






__webpack_require__(/*! bootstrap */ "bootstrap");
var ToolTabWebPart = /** @class */ (function (_super) {
    __extends(ToolTabWebPart, _super);
    function ToolTabWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolTabWebPart.prototype.render = function () {
        var cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__["SPComponentLoader"].loadCss(cssURL);
        this.domElement.innerHTML = "\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].toolTab + " id=\"accordion\"\">\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row + "\">\n        <div class=\"col-12\" >\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].HR + " ar accordion-toggle\"\n                  data-toggle=\"collapse\"\n                  data-parent=\"#accordion\"\n                  data-target=\"#HRtools\" aria-expanded=\"false\"\n                  >Human Resources\n                </div>\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].P10 + " panel-collapse\" id=\"HRtools\">\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Create business letter</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                  Create a business letter within a predesigned color and\n                  template.\n                </p>\n              </div>\n              </div>\n\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Create ticket</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                For all HR tickets, the ticket type is being set as Employee Support.\n                </p>\n              </div>\n              </div>\n\n              <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Request leave</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                Request leave and check your status in the Leave application.\n                </p>\n              </div>\n              </div>\n\n              <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">View policies</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                Identify the purpose and objectives of Humana Resources department.\n                </p>\n              </div>\n              </div>\n\n\n              <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].HR + " ar accordion-toggle\"\n              data-toggle=\"collapse\"\n              data-parent=\"#accordion\"\n              data-target=\"#Pay-benefits\" aria-expanded=\"false\"\n              >Pay and benefits\n            </div>\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].P10 + " panel-collapse\" id=\"Pay-benefits\">\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n          <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n            ></span>\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Download payslip</div>\n            <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n            Create a business letter within a predesigned color and template.\n            </p>\n          </div>\n          </div>\n\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n          <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n            ></span>\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Create finance ticket</div>\n            <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n            For all HR tickets, the ticket type is being set as Employee Support.\n            </p>\n          </div>\n          </div>\n\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n          <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n            ></span>\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Submit benefits claim</div>\n            <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n            Request leave and check your status in the Leave application.\n            </p>\n          </div>\n          </div>\n\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n          <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n            ></span>\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">View benefits policies</div>\n            <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n            Identify the purpose and objectives of Humana Resources department.\n            </p>\n          </div>\n          </div>\n\n\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].HR + " ar accordion-toggle\"\n          data-toggle=\"collapse\"\n          data-parent=\"#accordion\"\n          data-target=\"#itandfacilities\" aria-expanded=\"false\"\n          >IT and facilities\n        </div>\n  <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].P10 + " panel-collapse\" id=\"itandfacilities\">\n    <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n      <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n        ></span>\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Raise IT Support Ticket</div>\n        <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n        Create a business letter within a predesigned color and template.\n        </p>\n      </div>\n      </div>\n\n    <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n      <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n        ></span>\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Visitor wi-fi request</div>\n        <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n        For all HR tickets, the ticket type is being set as Employee Support.\n        </p>\n      </div>\n      </div>\n\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n      <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n        ></span>\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Event IT Support request</div>\n        <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n        Request leave and check your status in the Leave application.\n        </p>\n      </div>\n      </div>\n\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n      <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n        ></span>\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Cafeteria service app</div>\n        <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n        Identify the purpose and objectives of Humana Resources department.\n        </p>\n      </div>\n      </div>\n\n\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].HR + " ar accordion-toggle\"\n                  data-toggle=\"collapse\"\n                  data-parent=\"#accordion\"\n                  data-target=\"#retail-operations\" aria-expanded=\"false\"\n                  >Retail operations\n                </div>\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].P10 + " panel-collapse\" id=\"retail-operations\">\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Inventory request</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                Create a business letter within a predesigned color and template.\n                </p>\n              </div>\n              </div>\n\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Timesheet</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                For all HR tickets, the ticket type is being set as Employee Support.\n                </p>\n              </div>\n              </div>\n\n              <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Store info</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                Request leave and check your status in the Leave application.\n                </p>\n              </div>\n              </div>\n\n              </div>\n          </div>\n          </div>\n      </div>";
    };
    Object.defineProperty(ToolTabWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    ToolTabWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_3__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])("description", {
                                    label: ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_3__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ToolTabWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (ToolTabWebPart);


/***/ }),

/***/ "./lib/webparts/toolTab/ToolTabWebPart.module.css":
/*!********************************************************!*\
  !*** ./lib/webparts/toolTab/ToolTabWebPart.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!./ToolTabWebPart.module.css */ "./node_modules/css-loader/index.js?!./lib/webparts/toolTab/ToolTabWebPart.module.css");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "./lib/webparts/toolTab/ToolTabWebPart.module.scss.js":
/*!************************************************************!*\
  !*** ./lib/webparts/toolTab/ToolTabWebPart.module.scss.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ToolTabWebPart.module.css */ "./lib/webparts/toolTab/ToolTabWebPart.module.css");
var styles = {
    toolTab: 'toolTab_aa6e60a8',
    row: 'row_aa6e60a8',
    column: 'column_aa6e60a8',
    'ms-Grid': 'ms-Grid_aa6e60a8',
    HR: 'HR_aa6e60a8',
    PB: 'PB_aa6e60a8',
    RO: 'RO_aa6e60a8',
    IF: 'IF_aa6e60a8',
    P10: 'P10_aa6e60a8',
    shadowsm: 'shadowsm_aa6e60a8',
    card: 'card_aa6e60a8',
    cbody: 'cbody_aa6e60a8',
    CBL: 'CBL_aa6e60a8',
    CT: 'CT_aa6e60a8',
    RL: 'RL_aa6e60a8',
    VP: 'VP_aa6e60a8',
    DP: 'DP_aa6e60a8',
    CFT: 'CFT_aa6e60a8',
    SBC: 'SBC_aa6e60a8',
    VBP: 'VBP_aa6e60a8',
    RIST: 'RIST_aa6e60a8',
    GWR: 'GWR_aa6e60a8',
    EISR: 'EISR_aa6e60a8',
    CSA: 'CSA_aa6e60a8',
    IR: 'IR_aa6e60a8',
    timesheet: 'timesheet_aa6e60a8',
    SI: 'SI_aa6e60a8',
    CBLdes: 'CBLdes_aa6e60a8',
    CTdes: 'CTdes_aa6e60a8',
    RLdes: 'RLdes_aa6e60a8',
    VPdes: 'VPdes_aa6e60a8',
    Pdes: 'Pdes_aa6e60a8',
    FTdes: 'FTdes_aa6e60a8',
    BCdes: 'BCdes_aa6e60a8',
    ISTdes: 'ISTdes_aa6e60a8',
    GRdes: 'GRdes_aa6e60a8',
    ISRdes: 'ISRdes_aa6e60a8',
    CSAdes: 'CSAdes_aa6e60a8',
    IRdes: 'IRdes_aa6e60a8',
    timesheetdes: 'timesheetdes_aa6e60a8',
    SIdes: 'SIdes_aa6e60a8',
    createicon: 'createicon_aa6e60a8',
    'ticket-creation': 'ticket-creation_aa6e60a8',
    'leave-request': 'leave-request_aa6e60a8',
    policies: 'policies_aa6e60a8',
    'download-payslip': 'download-payslip_aa6e60a8',
    'create-finance-tkt': 'create-finance-tkt_aa6e60a8',
    'submit-benefits': 'submit-benefits_aa6e60a8',
    support: 'support_aa6e60a8',
    'wife-request': 'wife-request_aa6e60a8',
    'event-support': 'event-support_aa6e60a8',
    'cafe-service': 'cafe-service_aa6e60a8',
    Inventory: 'Inventory_aa6e60a8',
    'RO-timesheet': 'RO-timesheet_aa6e60a8',
    'Ro-SI': 'Ro-SI_aa6e60a8'
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

/***/ "./node_modules/css-loader/index.js?!./lib/webparts/toolTab/ToolTabWebPart.module.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./lib/webparts/toolTab/ToolTabWebPart.module.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:Teams Assets;src:url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format(\"woff\"),url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format(\"woff2\");font-style:normal}.toolTab_aa6e60a8 .row_aa6e60a8{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px}.toolTab_aa6e60a8 .row_aa6e60a8:after,.toolTab_aa6e60a8 .row_aa6e60a8:before{display:table;content:\"\";line-height:0}.toolTab_aa6e60a8 .row_aa6e60a8:after{clear:both}.toolTab_aa6e60a8 .column_aa6e60a8{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .toolTab_aa6e60a8 .column_aa6e60a8{float:left}[dir=rtl] .toolTab_aa6e60a8 .column_aa6e60a8{float:right}.toolTab_aa6e60a8 .column_aa6e60a8 .ms-Grid_aa6e60a8{padding:0}@media (min-width:640px){.toolTab_aa6e60a8 .column_aa6e60a8{width:100%}}@media (min-width:1024px){[dir=ltr] .toolTab_aa6e60a8 .column_aa6e60a8{left:16.66667%}[dir=rtl] .toolTab_aa6e60a8 .column_aa6e60a8{right:16.66667%}}@media (min-width:640px){[dir=ltr] .toolTab_aa6e60a8 .column_aa6e60a8{left:8.33333%}[dir=rtl] .toolTab_aa6e60a8 .column_aa6e60a8{right:8.33333%}}.toolTab_aa6e60a8 .HR_aa6e60a8,.toolTab_aa6e60a8 .IF_aa6e60a8,.toolTab_aa6e60a8 .PB_aa6e60a8,.toolTab_aa6e60a8 .RO_aa6e60a8{font-size:16px;font-weight:700;font-family:Segoe UI;cursor:pointer;margin:1% 0}.toolTab_aa6e60a8 .P10_aa6e60a8{padding-top:10px;padding-bottom:40px}.toolTab_aa6e60a8 .shadowsm_aa6e60a8{-webkit-box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.toolTab_aa6e60a8 .card_aa6e60a8{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;width:22%;height:20%;display:inline-block;margin-right:15px;cursor:pointer;font-family:Segoe UI;font-size:16px}.toolTab_aa6e60a8 .cbody_aa6e60a8{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.toolTab_aa6e60a8 .CBL_aa6e60a8,.toolTab_aa6e60a8 .CFT_aa6e60a8,.toolTab_aa6e60a8 .CSA_aa6e60a8,.toolTab_aa6e60a8 .CT_aa6e60a8,.toolTab_aa6e60a8 .DP_aa6e60a8,.toolTab_aa6e60a8 .EISR_aa6e60a8,.toolTab_aa6e60a8 .GWR_aa6e60a8,.toolTab_aa6e60a8 .IR_aa6e60a8,.toolTab_aa6e60a8 .RIST_aa6e60a8,.toolTab_aa6e60a8 .RL_aa6e60a8,.toolTab_aa6e60a8 .SBC_aa6e60a8,.toolTab_aa6e60a8 .SI_aa6e60a8,.toolTab_aa6e60a8 .timesheet_aa6e60a8,.toolTab_aa6e60a8 .VBP_aa6e60a8,.toolTab_aa6e60a8 .VP_aa6e60a8{font-weight:600;padding-top:6px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.toolTab_aa6e60a8 .BCdes_aa6e60a8,.toolTab_aa6e60a8 .CBLdes_aa6e60a8,.toolTab_aa6e60a8 .CSAdes_aa6e60a8,.toolTab_aa6e60a8 .CTdes_aa6e60a8,.toolTab_aa6e60a8 .FTdes_aa6e60a8,.toolTab_aa6e60a8 .GRdes_aa6e60a8,.toolTab_aa6e60a8 .IRdes_aa6e60a8,.toolTab_aa6e60a8 .ISRdes_aa6e60a8,.toolTab_aa6e60a8 .ISTdes_aa6e60a8,.toolTab_aa6e60a8 .Pdes_aa6e60a8,.toolTab_aa6e60a8 .RLdes_aa6e60a8,.toolTab_aa6e60a8 .SIdes_aa6e60a8,.toolTab_aa6e60a8 .timesheetdes_aa6e60a8,.toolTab_aa6e60a8 .VPdes_aa6e60a8{padding-top:6px;color:#adacac;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;width:auto}.toolTab_aa6e60a8 .cafe-service_aa6e60a8,.toolTab_aa6e60a8 .create-finance-tkt_aa6e60a8,.toolTab_aa6e60a8 .createicon_aa6e60a8,.toolTab_aa6e60a8 .download-payslip_aa6e60a8,.toolTab_aa6e60a8 .event-support_aa6e60a8,.toolTab_aa6e60a8 .Inventory_aa6e60a8,.toolTab_aa6e60a8 .leave-request_aa6e60a8,.toolTab_aa6e60a8 .policies_aa6e60a8,.toolTab_aa6e60a8 .Ro-SI_aa6e60a8,.toolTab_aa6e60a8 .RO-timesheet_aa6e60a8,.toolTab_aa6e60a8 .submit-benefits_aa6e60a8,.toolTab_aa6e60a8 .support_aa6e60a8,.toolTab_aa6e60a8 .ticket-creation_aa6e60a8,.toolTab_aa6e60a8 .wife-request_aa6e60a8{font-family:Teams Assets;font-size:22px}@media (max-width:425px){.toolTab_aa6e60a8 .card_aa6e60a8{width:100%}}", ""]);

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

/***/ "ToolTabWebPartStrings":
/*!****************************************!*\
  !*** external "ToolTabWebPartStrings" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ToolTabWebPartStrings__;

/***/ }),

/***/ "bootstrap":
/*!****************************!*\
  !*** external "bootstrap" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_bootstrap__;

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
//# sourceMappingURL=tool-tab-web-part.js.map
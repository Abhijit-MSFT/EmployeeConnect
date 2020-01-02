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
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/teams-js */ "./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js");
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ToolTabWebPartStrings */ "ToolTabWebPartStrings");
/* harmony import */ var ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-loader */ "@microsoft/sp-loader");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
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
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__["SPComponentLoader"].loadCss(cssURL);
        this.domElement.innerHTML = "\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].toolTab + "\" id=\"accordion\">\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row + "\">\n        <div class=\"col-12\" >\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].HR + " ar accordion-toggle\"\n                  data-toggle=\"collapse\"\n                  data-parent=\"#accordion\"\n                  data-target=\"#HRtools\" aria-expanded=\"false\"\n                  >Human Resources\n                </div>\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].P10 + " panel-collapse\" id=\"HRtools\">\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Create business letter</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                  Create a business letter within a predesigned color and\n                  template.\n                </p>\n              </div>\n              </div>\n\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + " id=\"createTicket\">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Create ticket</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                For all HR tickets, the ticket type is being set as Employee Support.\n                </p>\n              </div>\n              </div>\n\n              <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Request leave</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                Request leave and check your status in the Leave application.\n                </p>\n              </div>\n              </div>\n\n              <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">View policies</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                Identify the purpose and objectives of HR department.\n                </p>\n              </div>\n              </div>\n\n\n              <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].HR + " ar accordion-toggle\"\n              data-toggle=\"collapse\"\n              data-parent=\"#accordion\"\n              data-target=\"#Pay-benefits\" aria-expanded=\"false\"\n              >Pay and benefits\n            </div>\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].P10 + " panel-collapse\" id=\"Pay-benefits\">\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n          <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n            ></span>\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Download payslip</div>\n            <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n            View online pay slips and full payment histories.\n            </p>\n          </div>\n          </div>\n\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n          <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n            ></span>\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Create finance ticket</div>\n            <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n            Open a support ticket with the Finance and Operations support.\n            </p>\n          </div>\n          </div>\n\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n          <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n            ></span>\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Submit benefits claim</div>\n            <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n            Submit a claim from your account to start the process.\n            </p>\n          </div>\n          </div>\n\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n          <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n            ></span>\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">View benefits policies</div>\n            <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n            Read common queries about servicing your policy.\n            </p>\n          </div>\n          </div>\n\n\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].HR + " ar accordion-toggle\"\n          data-toggle=\"collapse\"\n          data-parent=\"#accordion\"\n          data-target=\"#itandfacilities\" aria-expanded=\"false\"\n          >IT and facilities\n        </div>\n  <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].P10 + " panel-collapse\" id=\"itandfacilities\">\n    <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n      <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n        ></span>\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Raise IT Support Ticket</div>\n        <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n        Submit your support case to review and respond.\n        </p>\n      </div>\n      </div>\n\n    <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n      <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + " id=\"visitorRequest\">\n        <span\n          alt-name=\"create letter\"\n          class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n        ></span>\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Submit Visitor Request</div>\n        <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n        Fill a request form for short-term visitors.\n        </p>\n      </div>\n      </div>\n\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n      <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n        ></span>\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Event IT Support request</div>\n        <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n        Fill out this form to request any equiepment for events.\n        </p>\n      </div>\n      </div>\n\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n      <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n        ></span>\n        <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Cafeteria service app</div>\n        <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n        Emloyee can order and pay here without waiting in long queue. </p>\n      </div>\n      </div>\n\n\n      <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].HR + " ar accordion-toggle\"\n                  data-toggle=\"collapse\"\n                  data-parent=\"#accordion\"\n                  data-target=\"#retail-operations\" aria-expanded=\"false\"\n                  >Retail operations\n                </div>\n          <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].P10 + " panel-collapse\" id=\"retail-operations\">\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Inventory request</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                Inventory form to request supplies.\n                </p>\n              </div>\n              </div>\n\n            <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Timesheet</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                Weekly Timesheet setup.\n                  </p>\n              </div>\n              </div>\n\n              <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card + " " + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].shadowsm + "\">\n              <div class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].createicon + "\n                ></span>\n                <div class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBL + "\">Store info</div>\n                <p class=\"" + _ToolTabWebPart_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CBLdes + "\">\n                Your store information.\n                </p>\n              </div>\n              </div>\n\n              </div>\n          </div>\n          </div>\n      </div>";
        this._setButtonEventHandlers();
    };
    ToolTabWebPart.prototype._setButtonEventHandlers = function () {
        var _this = this;
        this.domElement
            .querySelector("#createTicket")
            .addEventListener("click", function () {
            _this.createTicket();
        });
        this.domElement
            .querySelector("#visitorRequest")
            .addEventListener("click", function () {
            _this.visitorRequest();
        });
    };
    ToolTabWebPart.prototype.createTicket = function () {
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__["initialize"]();
        var taskInfo = {
            title: null,
            height: null,
            width: null,
            url: null,
            card: null,
            fallbackUrl: null,
            completionBotId: null
        };
        taskInfo.url =
            "https://employeeconnect-9566.azurewebsites.net/createticket";
        taskInfo.title = "Create Ticket";
        taskInfo.height = 510;
        taskInfo.width = 430;
        taskInfo.fallbackUrl = taskInfo.url;
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__["tasks"].startTask(taskInfo, this.submitHandler);
    };
    ToolTabWebPart.prototype.visitorRequest = function () {
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__["initialize"]();
        var taskInfo = {
            title: null,
            height: null,
            width: null,
            url: null,
            card: null,
            fallbackUrl: null,
            completionBotId: null
        };
        taskInfo.url =
            "https://employeeconnect-9566.azurewebsites.net/visitorregistration";
        taskInfo.title = "Visitor Request";
        taskInfo.height = 510;
        taskInfo.width = 430;
        taskInfo.fallbackUrl = taskInfo.url;
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__["tasks"].startTask(taskInfo, this.submitHandler);
    };
    ToolTabWebPart.prototype.submitHandler = function (err, result) {
        if (result.action == "ticketcomplete") {
            var taskInfo = {
                height: null,
                width: null,
                url: null,
                fallbackUrl: null
            };
            taskInfo.url =
                "https://employeeconnect-9566.azurewebsites.net/ticketcomplete?ticketNoId=" +
                    result.ticketNo +
                    "&description=" +
                    result.TDescription +
                    "&category=" +
                    result.TCategory +
                    "&priority=" +
                    result.TPriority;
            taskInfo.height = 510;
            taskInfo.width = 430;
            taskInfo.fallbackUrl = taskInfo.url;
            _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__["tasks"].startTask(taskInfo);
        }
        if (result.action == "createTicket") {
            var taskInfo = {
                height: null,
                width: null,
                url: null,
                fallbackUrl: null
            };
            taskInfo.url =
                "https://employeeconnect-9566.azurewebsites.net/createticket";
            taskInfo.height = "medium";
            taskInfo.width = "medium";
            taskInfo.fallbackUrl = taskInfo.url;
            _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__["tasks"].startTask(taskInfo, this.submitHandler);
        }
        if (result.action == "sendrequest") {
            var taskInfo = {
                height: null,
                width: null,
                url: null,
                fallbackUrl: null
            };
            taskInfo.url =
                "https://employeeconnect-9566.azurewebsites.net/sendrequest?=" +
                    result.vDate +
                    "&Time=" +
                    result.vTime;
            taskInfo.height = "medium";
            taskInfo.width = "medium";
            taskInfo.fallbackUrl = taskInfo.url;
            _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__["tasks"].startTask(taskInfo);
        }
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
                        description: ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])("description", {
                                    label: ToolTabWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["DescriptionFieldLabel"]
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
    toolTab: 'toolTab_7fddd82e',
    grid1: 'grid1_7fddd82e',
    heading: 'heading_7fddd82e',
    grid2: 'grid2_7fddd82e',
    row: 'row_7fddd82e',
    column: 'column_7fddd82e',
    'ms-Grid': 'ms-Grid_7fddd82e',
    HR: 'HR_7fddd82e',
    PB: 'PB_7fddd82e',
    RO: 'RO_7fddd82e',
    IF: 'IF_7fddd82e',
    P10: 'P10_7fddd82e',
    shadowsm: 'shadowsm_7fddd82e',
    card: 'card_7fddd82e',
    cbody: 'cbody_7fddd82e',
    CBL: 'CBL_7fddd82e',
    CT: 'CT_7fddd82e',
    RL: 'RL_7fddd82e',
    VP: 'VP_7fddd82e',
    DP: 'DP_7fddd82e',
    CFT: 'CFT_7fddd82e',
    SBC: 'SBC_7fddd82e',
    VBP: 'VBP_7fddd82e',
    RIST: 'RIST_7fddd82e',
    GWR: 'GWR_7fddd82e',
    EISR: 'EISR_7fddd82e',
    CSA: 'CSA_7fddd82e',
    IR: 'IR_7fddd82e',
    timesheet: 'timesheet_7fddd82e',
    SI: 'SI_7fddd82e',
    CBLdes: 'CBLdes_7fddd82e',
    CTdes: 'CTdes_7fddd82e',
    RLdes: 'RLdes_7fddd82e',
    VPdes: 'VPdes_7fddd82e',
    Pdes: 'Pdes_7fddd82e',
    FTdes: 'FTdes_7fddd82e',
    BCdes: 'BCdes_7fddd82e',
    ISTdes: 'ISTdes_7fddd82e',
    GRdes: 'GRdes_7fddd82e',
    ISRdes: 'ISRdes_7fddd82e',
    CSAdes: 'CSAdes_7fddd82e',
    IRdes: 'IRdes_7fddd82e',
    timesheetdes: 'timesheetdes_7fddd82e',
    SIdes: 'SIdes_7fddd82e',
    createicon: 'createicon_7fddd82e'
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

/***/ "./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(1))},function(t,e,n){"use strict";var i=this&&this.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&(n[i[o]]=t[i[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var o="1.4.2";function r(t){for(var e="^",n=t.split("."),i=0;i<n.length;i++)e+=(i>0?"[.]":"")+n[i].replace("*","[^/^.]+");return e+="$"}var a=function(t){for(var e="",n=0;n<t.length;n++)e+=(0===n?"":"|")+r(t[n]);return new RegExp(e)}(["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"]),s={},u={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};!function(t){var e,n,i,o=function(){return function(){this.enabled=!0}}();t.MenuItem=o,function(t){t.dropDown="dropDown",t.popOver="popOver"}(t.MenuListType||(t.MenuListType={})),s.navBarMenuItemPress=function(t){e&&e(t)||(_(),W(f,"handleNavBarMenuItemPress",[t]))},s.actionMenuItemPress=function(t){n&&n(t)||(_(),W(f,"handleActionMenuItemPress",[t]))},s.setModuleView=function(t){i&&i(t)||(_(),W(f,"viewConfigItemPress",[t]))},t.setUpViews=function(t,e){_(),i=e,W(f,"setUpViews",[t])},t.setNavBarMenu=function(t,n){_(),e=n,W(f,"setNavBarMenu",[t])},t.showActionMenu=function(t,e){_(),n=e,W(f,"showActionMenu",[t])}}(e.menus||(e.menus={}));var c,f,l,d,h,v,g,p,m,y,b,w,k,T=!1,C=!1,O=[],M=[],S=0,E={},I=!1;function P(){window.print()}function x(t){_(),p=t,t&&W(f,"registerHandler",["themeChange"])}function H(t){_(),m=t,t&&W(f,"registerHandler",["fullScreen"])}function N(t){_(),y=t,t&&W(f,"registerHandler",["backButton"])}function U(){_();var t=W(f,"navigateBack",[]);E[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function j(t){_(),b=t,t&&W(f,"registerHandler",["beforeUnload"])}function _(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!T)throw new Error("The library has not yet been initialized");if(v&&t&&t.length>0){for(var n=!1,i=0;i<t.length;i++)if(t[i]===v){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+v+"' context")}}function B(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===c||n!==c.location.origin&&!a.test(n.toLowerCase())||(L(e,n),e===f?A(t):e===d&&D(t))}}function L(t,e){f&&t!==f?d&&t!==d||(d=t,h=e):(f=t,l=e),f&&f.closed&&(f=null,l=null),d&&d.closed&&(d=null,h=null),R(f),R(d)}function A(t){if("id"in t.data){var e=t.data,n=E[e.id];n&&(n.apply(null,e.args),delete E[e.id])}else if("func"in t.data){e=t.data;var i=s[e.func];i&&i.apply(this,e.args)}}function D(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=s[e.func];if(n){var i=n.apply(this,e.args);i&&J(d,e.id,Array.isArray(i)?i:[i])}else{var o=W(f,e.func,e.args);E[o]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];d&&J(d,e.id,t)}}}}function F(t){return t===f?O:t===d?M:[]}function z(t){return t===f?l:t===d?h:null}function R(t){for(var e=z(t),n=F(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function V(t,e){var n=c.setInterval(function(){0===F(t).length&&(clearInterval(n),e())},100)}function W(t,e,n){var i=K(e,n);if(C)c&&c.nativeInterface&&c.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var o=z(t);t&&o?t.postMessage(i,o):F(t).push(i)}return i.id}function J(t,e,n){var i=q(e,n),o=z(t);t&&o&&t.postMessage(i,o)}function K(t,e){return{id:S++,func:t,args:e||[]}}function q(t,e){return{id:t,args:e||[]}}s.themeChange=function(t){p&&p(t);d&&W(d,"themeChange",[t])},s.fullScreenChange=function(t){m&&m(t)},s.backButtonPress=function(){y&&y()||U()},s.beforeUnload=function(){var t=function(){W(f,"readyToUnload",[])};b&&b(t)||t()},s.changeSettings=function(){w&&w()},e.initialize=function(t){if(void 0===t&&(t=window),!T){T=!0;var e=function(t){return B(t)};(f=(c=t).parent!==c.self?c.parent:c.opener)?c.addEventListener("message",e,!1):(C=!0,window.onNativeMessage=A);try{l="*";var n=W(f,"initialize",[o]);E[n]=function(t,e){v=t,g=e}}finally{l=null}this._uninitialize=function(){v&&(x(null),H(null),N(null),j(null)),v===u.settings&&k.registerOnSaveHandler(null),v===u.remove&&k.registerOnRemoveHandler(null),C||c.removeEventListener("message",e,!1),T=!1,f=null,l=null,O=[],d=null,h=null,M=[],S=0,E={},v=null,g=null,C=!1}}},e._uninitialize=function(){},e.enablePrintCapability=function(){I||(I=!0,_(),document.addEventListener("keydown",function(t){(t.ctrlKey||t.metaKey)&&80===t.keyCode&&(P(),t.cancelBubble=!0,t.preventDefault(),t.stopImmediatePropagation())}))},e.print=P,e.getContext=function(t){_();var e=W(f,"getContext");E[e]=t},e.registerOnThemeChangeHandler=x,e.registerFullScreenHandler=H,e.registerBackButtonHandler=N,e.navigateBack=U,e.registerBeforeUnloadHandler=j,e.registerChangeSettingsHandler=function(t){_(u.content),w=t,t&&W(f,"registerHandler",["changeSettings"])},e.navigateCrossDomain=function(t){_(u.content,u.settings,u.remove,u.task);var e=W(f,"navigateCrossDomain",[t]);E[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},e.getTabInstances=function(t,e){_();var n=W(f,"getTabInstances",[e]);E[n]=t},e.getUserJoinedTeams=function(t,e){_();var n=W(f,"getUserJoinedTeams",[e]);E[n]=t},e.getMruTabInstances=function(t,e){_();var n=W(f,"getMruTabInstances",[e]);E[n]=t},e.shareDeepLink=function(t){_(u.content),W(f,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])},e.openFilePreview=function(t){_(u.content);var e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];W(f,"openFilePreview",e)},e.showNotification=function(t){_(u.content);var e=[t.message,t.notificationType];W(f,"showNotification",e)},e.executeDeepLink=function(t){_(u.content);var e=W(f,"executeDeepLink",[t]);E[e]=function(t,e){if(!t)throw new Error(e)}},e.uploadCustomApp=function(t){_();var e=W(f,"uploadCustomApp",[t]);E[e]=function(t,e){if(!t)throw new Error(e)}},e.navigateToTab=function(t){_();var e=W(f,"navigateToTab",[t]);E[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(t){var e,n;s["settings.save"]=function(t){var n=new i(t);e?e(n):n.notifySuccess()},s["settings.remove"]=function(){var t=new o;n?n(t):t.notifySuccess()},t.setValidityState=function(t){_(u.settings,u.remove),W(f,"settings.setValidityState",[t])},t.getSettings=function(t){_(u.content,u.settings,u.remove);var e=W(f,"settings.getSettings");E[e]=t},t.setSettings=function(t){_(u.content,u.settings);var e=W(f,"settings.setSettings",[t]);E[e]=function(t,e){if(!t)throw new Error(e)}},t.registerOnSaveHandler=function(t){_(u.settings),e=t,t&&W(f,"registerHandler",["save"])},t.registerOnRemoveHandler=function(t){_(u.remove),n=t,t&&W(f,"registerHandler",["remove"])};var i=function(){function t(t){this.notified=!1,this.result=t||{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),W(f,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),W(f,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}();var o=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),W(f,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),W(f,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(k=e.settings||(e.settings={})),function(t){var e,n;function i(){r();try{d&&d.close()}finally{d=null,h=null}}function o(t){e=t,i();var n=e.width||600,o=e.height||400;n=Math.min(n,c.outerWidth-400),o=Math.min(o,c.outerHeight-200);var r=document.createElement("a");r.href=e.url;var s=void 0!==c.screenLeft?c.screenLeft:c.screenX,u=void 0!==c.screenTop?c.screenTop:c.screenY;s+=c.outerWidth/2-n/2,u+=c.outerHeight/2-o/2,(d=c.open(r.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+u+", left="+s+", width="+n+", height="+o))?a():l("FailedToOpenWindow")}function r(){n&&(clearInterval(n),n=0),delete s.initialize,delete s.navigateCrossDomain}function a(){r(),n=c.setInterval(function(){if(!d||d.closed)l("CancelledByUser");else{var t=h;try{h="*",W(d,"ping")}finally{h=t}}},100),s.initialize=function(){return[u.authentication,g]},s.navigateCrossDomain=function(t){return!1}}function l(t){try{e&&e.failureCallback&&e.failureCallback(t)}finally{e=null,i()}}function v(t,e,n){if(t){var i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=p(i.href,"result",n)),c.location.assign(p(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=p(i.href,"reason",n)),c.location.assign(p(i.href,"authFailure",""))))}}function p(t,e,n){var i=t.indexOf("#"),o=-1===i?"#":t.substr(i);return o=o+"&"+e+(""!==n?"="+n:""),(t=-1===i?t:t.substr(0,i))+o}s["authentication.authenticate.success"]=function(t){try{e&&e.successCallback&&e.successCallback(t)}finally{e=null,i()}},s["authentication.authenticate.failure"]=l,t.registerAuthenticationHandlers=function(t){e=t},t.authenticate=function(t){var n=void 0!==t?t:e;if(_(u.content,u.settings,u.remove,u.task),"desktop"===g||"android"===g||"ios"===g){var i=document.createElement("a");i.href=n.url;var r=W(f,"authentication.authenticate",[i.href,n.width,n.height]);E[r]=function(t,e){t?n.successCallback(e):n.failureCallback(e)}}else o(n)},t.getAuthToken=function(t){_();var e=W(f,"authentication.getAuthToken",[t.resources]);E[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.getUser=function(t){_();var e=W(f,"authentication.getUser");E[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.notifySuccess=function(t,e){v(e,"result",t),_(u.authentication),W(f,"authentication.authenticate.success",[t]),V(f,function(){return setTimeout(function(){return c.close()},200)})},t.notifyFailure=function(t,e){v(e,"reason",t),_(u.authentication),W(f,"authentication.authenticate.failure",[t]),V(f,function(){return setTimeout(function(){return c.close()},200)})}}(e.authentication||(e.authentication={})),e.sendCustomMessage=function(t,e){return _(),W(f,t,e)},function(t){t.startTask=function(t,e){_(u.content);var n=W(f,"tasks.startTask",[t]);E[n]=e},t.updateTask=function(t){_(u.content,u.task),t.width,t.height;var e=i(t,["width","height"]);if(Object.keys(e).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");W(f,"tasks.updateTask",[t])},t.submitTask=function(t,e){_(u.content,u.task),W(f,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}}(e.tasks||(e.tasks={})),e.getChatMembers=function(t){_();var e=W(f,"getChatMembers");E[e]=t}}])});

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
exports.push([module.i, "@font-face{font-family:Teams Assets;src:url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format(\"woff\"),url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format(\"woff2\");font-style:normal}@media (max-width:768px){.toolTab_7fddd82e .grid1_7fddd82e,.toolTab_7fddd82e .grid2_7fddd82e,.toolTab_7fddd82e .heading_7fddd82e{display:none!important}}.toolTab_7fddd82e .row_7fddd82e{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px}.toolTab_7fddd82e .row_7fddd82e:after,.toolTab_7fddd82e .row_7fddd82e:before{display:table;content:\"\";line-height:0}.toolTab_7fddd82e .row_7fddd82e:after{clear:both}.toolTab_7fddd82e .column_7fddd82e{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .toolTab_7fddd82e .column_7fddd82e{float:left}[dir=rtl] .toolTab_7fddd82e .column_7fddd82e{float:right}.toolTab_7fddd82e .column_7fddd82e .ms-Grid_7fddd82e{padding:0}@media (min-width:640px){.toolTab_7fddd82e .column_7fddd82e{width:100%}}@media (min-width:1024px){[dir=ltr] .toolTab_7fddd82e .column_7fddd82e{left:16.66667%}[dir=rtl] .toolTab_7fddd82e .column_7fddd82e{right:16.66667%}}@media (min-width:640px){[dir=ltr] .toolTab_7fddd82e .column_7fddd82e{left:8.33333%}[dir=rtl] .toolTab_7fddd82e .column_7fddd82e{right:8.33333%}}.toolTab_7fddd82e .HR_7fddd82e,.toolTab_7fddd82e .IF_7fddd82e,.toolTab_7fddd82e .PB_7fddd82e,.toolTab_7fddd82e .RO_7fddd82e{font-size:16px;font-family:Segoe UI;cursor:pointer;margin:1% 0;margin-top:24px;margin-bottom:-5px;font-size:14px;font-weight:700;color:#333}.toolTab_7fddd82e .P10_7fddd82e{padding-top:10px;padding-bottom:40px}.toolTab_7fddd82e .shadowsm_7fddd82e{-webkit-box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.toolTab_7fddd82e .card_7fddd82e{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;width:22%;height:20%;display:inline-block;margin-right:15px;cursor:pointer;font-family:Segoe UI;font-size:16px}.toolTab_7fddd82e .cbody_7fddd82e{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.toolTab_7fddd82e .CBL_7fddd82e,.toolTab_7fddd82e .CFT_7fddd82e,.toolTab_7fddd82e .CSA_7fddd82e,.toolTab_7fddd82e .CT_7fddd82e,.toolTab_7fddd82e .DP_7fddd82e,.toolTab_7fddd82e .EISR_7fddd82e,.toolTab_7fddd82e .GWR_7fddd82e,.toolTab_7fddd82e .IR_7fddd82e,.toolTab_7fddd82e .RIST_7fddd82e,.toolTab_7fddd82e .RL_7fddd82e,.toolTab_7fddd82e .SBC_7fddd82e,.toolTab_7fddd82e .SI_7fddd82e,.toolTab_7fddd82e .timesheet_7fddd82e,.toolTab_7fddd82e .VBP_7fddd82e,.toolTab_7fddd82e .VP_7fddd82e{font-weight:600;padding-top:6px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.toolTab_7fddd82e .BCdes_7fddd82e,.toolTab_7fddd82e .CBLdes_7fddd82e,.toolTab_7fddd82e .CSAdes_7fddd82e,.toolTab_7fddd82e .CTdes_7fddd82e,.toolTab_7fddd82e .FTdes_7fddd82e,.toolTab_7fddd82e .GRdes_7fddd82e,.toolTab_7fddd82e .IRdes_7fddd82e,.toolTab_7fddd82e .ISRdes_7fddd82e,.toolTab_7fddd82e .ISTdes_7fddd82e,.toolTab_7fddd82e .Pdes_7fddd82e,.toolTab_7fddd82e .RLdes_7fddd82e,.toolTab_7fddd82e .SIdes_7fddd82e,.toolTab_7fddd82e .timesheetdes_7fddd82e,.toolTab_7fddd82e .VPdes_7fddd82e{padding-top:6px;color:#adacac;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;width:auto}.toolTab_7fddd82e .createicon_7fddd82e{font-family:Teams Assets;font-size:22px}@media (max-width:425px){.toolTab_7fddd82e .card_7fddd82e{width:100%}}", ""]);

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
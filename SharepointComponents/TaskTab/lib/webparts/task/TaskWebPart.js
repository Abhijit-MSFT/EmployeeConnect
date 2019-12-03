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
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, PropertyPaneTextField } from "@microsoft/sp-webpart-base";
import { SPHttpClient } from "@microsoft/sp-http";
import styles from "./TaskWebPart.module.scss";
import * as strings from "TaskWebPartStrings";
import * as microsoftTeams from "@microsoft/teams-js";
import { SPComponentLoader } from "@microsoft/sp-loader";
microsoftTeams.initialize();
import "jquery";
import "bootstrap";
require("bootstrap");
var TaskTabWebPart = /** @class */ (function (_super) {
    __extends(TaskTabWebPart, _super);
    function TaskTabWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Rendering TaskList data
    TaskTabWebPart.prototype._getTaskListData = function () {
        //Rest API to call SharePoint list
        var requestURL = this.context.pageContext.web.absoluteUrl;
        return this.context.spHttpClient
            .get(requestURL + "/_api/web/lists/GetByTitle('TaskList')/items", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    //Getting Invoice List Data
    TaskTabWebPart.prototype._getInvoiceListData = function () {
        //Rest API to call SharePoint list
        var requestURL = this.context.pageContext.web.absoluteUrl;
        return this.context.spHttpClient
            .get(requestURL + "/_api/web/lists/GetByTitle('InvoiceList')/items", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    //Rendering task List
    TaskTabWebPart.prototype._renderTaskList = function (items) {
        var html = "";
        items.forEach(function (item) {
            html += "\n            <tr>\n              <th scope=\"row\">" + item.PoNumber + "</th>\n              <td>-</td>\n              <td>" + item.VendorName + "</td>\n              <td>" + item.InvoiceNo + "</td>\n              <td>&#8377; " + item.TotalAmount + "</td>\n              <td id=\"buttonReview\" name=\"buttonReview\" class=\"" + styles.review + "\" id='review'>Review</td>\n            </tr>\n";
        });
        var listContainer = this.domElement.querySelector("#spTaskListContainer");
        listContainer.innerHTML = html;
    };
    //Rendering Invoice List
    TaskTabWebPart.prototype._renderInvoiceList = function (items) {
        var html = "";
        items.forEach(function (item) {
            html += "\n            <tr>\n              <th scope=\"row\">" + item.Invoiceno_x002e_ + "</th>\n              <td>" + item.POno_x002e_ + "</td>\n              <td>--</td>\n              <td>" + item.Vendorname + "</td>\n              <td>" + item.Vendorno_x002e_ + "</td>\n               <td>&#8377; " + item.Amount + "</td>\n              <td id=\"buttonReview\" name=\"buttonReview\" class=\"" + styles.review + "\" id='review'>Review</td>\n            </tr>\n";
        });
        var listContainer = this.domElement.querySelector("#spInvoiceListContainer");
        listContainer.innerHTML = html;
    };
    TaskTabWebPart.prototype._renderListAsync = function () {
        var _this = this;
        this._getTaskListData().then(function (response) {
            _this._renderTaskList(response.value);
        });
        //}
    };
    TaskTabWebPart.prototype._renderInvoiceListAsync = function () {
        var _this = this;
        this._getInvoiceListData().then(function (response) {
            _this._renderInvoiceList(response.value);
        });
        //}
    };
    TaskTabWebPart.prototype.render = function () {
        var cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
        SPComponentLoader.loadCss(cssURL);
        this.domElement.innerHTML = "\n     <div class=\"" + styles.taskTab + "\">\n           <div class=\"" + styles.heading + "\"> Pending Submissions </div>\n              <div class=\"" + styles.row + "\">\n                <div class=\"" + styles.grid1 + "\">\n                  <span class=\"" + styles.title + "\">12 Days of pending timesheet</span>\n                  <div>\n                  <a href=\"https://aka.ms/spfx\" class=\"" + styles.button + "\">\n                    <span class=\"" + styles.label + "\">Timesheet</span>\n                  </a>\n                  </div>\n                </div>\n                 <div class=\"" + styles.grid2 + "\">\n                  <span class=\"" + styles.title + "\">$25,000 Unreconciled expenses</span>\n                  <div>\n                  <a href=\"https://aka.ms/spfx\" class=\"" + styles.button + "\">\n                    <span class=\"" + styles.label + "\">Expenses</span>\n                  </a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"" + styles.row + "\">\n              <div class=\"" + styles.heading + "\"> Pending Approvals </div>\n   <div class=\"panel-group\" id=\"accordion\">\n                <div class=\"" + styles.panel + "\">\n                      <div class=\"" + styles.subheading + "\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">Purchased Order (" + this._renderTaskList.length + ")</div>\n                  <div id=\"collapse1\" class=\"panel-collapse collapse\">\n                    <div>\n                    <table class=\"table table-bordered\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\">PoNumber</th>\n                          <th scope=\"col\">Description</th>\n                          <th scope=\"col\">VendorName</th>\n                          <th scope=\"col\">VendorNo</th>\n                          <th scope=\"col\">TotalAmount</th>\n                          <th scope=\"col\"></th>\n                        </tr>\n                      </thead>\n                        <tbody id=\"spTaskListContainer\">\n                          " + this._renderListAsync() + "\n                        </tbody>\n                    </table>\n                    </div>\n                    </div>\n       </div>\n                    <div class=\"" + styles.panel + "\">\n                          <div class=\"" + styles.subheading + "\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">Invoice (" + this._renderInvoiceList.length + ")\n          </div>\n                      <div id=\"collapse2\" class=\"panel-collapse collapse in\">\n                        <div>\n                          <table class=\"table table-bordered\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">InvoiceNo</th>\n                              <th scope=\"col\">PoNumber</th>\n                              <th scope=\"col\">Description</th>\n                              <th scope=\"col\">VendorName</th>\n                              <th scope=\"col\">VendorNo</th>\n                              <th scope=\"col\">Amount</th>\n                              <th scope=\"col\"></th>\n                            </tr>\n                          </thead>\n                          <tbody id=\"spInvoiceListContainer\">\n                            " + this._renderInvoiceListAsync() + "\n                          </tbody>\n                        </table>\n                        </div>\n                      </div>\n                    </div>\n            <div class=\"" + styles.panel + "\">\n                   <div class=\"" + styles.subheading + "\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">Inventory (0)</div>\n              <div id=\"collapse3\" class=\"panel-collapse collapse\">\n                <div>\n                <table class=\"table table-bordered\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">InvoiceNo</th>\n                              <th scope=\"col\">PoNumber</th>\n                              <th scope=\"col\">Description</th>\n                              <th scope=\"col\">VendorName</th>\n                              <th scope=\"col\">VendorNo</th>\n                              <th scope=\"col\">Amount</th>\n                              <th scope=\"col\"></th>\n                            </tr>\n                          </thead>\n                          <tbody id=\"spInvoiceListContainer\">\n                            " + this._renderInvoiceListAsync() + "\n                          </tbody>\n                        </table>\n                </div>\n              </div>\n            </div>\n   </div>\n   </div>\n   </div>\n </div>";
    };
    TaskTabWebPart.prototype._setButtonEventHandlers = function () {
        var _this = this;
        this.domElement
            .querySelector("#buttonReview")
            .addEventListener("click", function () {
            var PONumber = 739254;
            var vendorNo = 97547;
            var taskInfo = {
                InvoiceNo: null,
                height: null,
                width: null,
                url: null,
                fallbackUrl: null
            };
            debugger;
            //taskInfo.title = "Purchase Order";
            taskInfo.height = "medium";
            taskInfo.width = "medium";
            taskInfo.url =
                "https://employeeconnect-9566.azurewebsites.net" +
                    "/purchaseorder?poNumber=" +
                    PONumber +
                    "&vendorno=" +
                    vendorNo;
            taskInfo.height = "medium";
            taskInfo.width = "medium";
            // Set fallback URL
            taskInfo.fallbackUrl = taskInfo.url;
            microsoftTeams.tasks.startTask(taskInfo, _this.submitHandler);
        });
    };
    TaskTabWebPart.prototype.submitHandler = function (err, result) {
        if (result.action == "podecline") {
            var taskInfo = {
                InvoiceNo: null,
                height: null,
                width: null,
                url: null,
                fallbackUrl: null
            };
            taskInfo.url =
                "https://employeeconnect-9566.azurewebsites.net" +
                    "/podecline?poNo=" +
                    result.poNumber +
                    "&POreason=" +
                    result.reason +
                    "&POComment=" +
                    result.comment;
            taskInfo.height = "small";
            taskInfo.width = "small";
            // Set fallback URL
            taskInfo.fallbackUrl = taskInfo.url;
            microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
        }
        if (result.action == "decline") {
            debugger;
            var taskInfo = {
                //   title: null,
                height: null,
                width: null,
                url: null
            };
            taskInfo.url =
                "https://employeeconnect-9566.azurewebsites.net" +
                    "/declined?poNo=" +
                    result.PONo;
            taskInfo.height = "small";
            taskInfo.width = "small";
            // Set fallback URL
            //    taskInfo.fallbackUrl = taskInfo.url;
            microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
        }
        if (result.action == "cancelPo") {
            microsoftTeams.tasks.submitTask();
        }
        if (result.action == "closePending") {
            microsoftTeams.tasks.submitTask();
        }
        if (result.action == "donedecline") {
            microsoftTeams.tasks.submitTask();
        }
    };
    Object.defineProperty(TaskTabWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    TaskTabWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return TaskTabWebPart;
}(BaseClientSideWebPart));
export default TaskTabWebPart;
//# sourceMappingURL=TaskWebPart.js.map
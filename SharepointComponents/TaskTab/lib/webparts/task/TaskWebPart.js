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
        var _this = _super.call(this) || this;
        SPComponentLoader.loadCss("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
        return _this;
    }
    //Rendering TaskList data
    TaskTabWebPart.prototype._getTaskListData = function () {
        //Rest API to call SharePoint list
        var requestURL = this.context.pageContext.web.absoluteUrl;
        return this.context.spHttpClient
            .get(requestURL + "/_api/web/lists/GetByTitle('PurchaseOrders')/items", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    //Get PO Details List
    // private _getPODetailList(): Promise<ISPPODetail> {
    //   //Rest API to call SharePoint list
    //   var requestURL = this.context.pageContext.web.absoluteUrl;
    //   return this.context.spHttpClient
    //     .get(
    //       requestURL + `/_api/web/lists/GetByTitle('PODetails')/items`,
    //       SPHttpClient.configurations.v1
    //     )
    //     .then((response: SPHttpClientResponse) => {
    //       return response.json();
    //     });
    // }
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
    TaskTabWebPart.prototype.updatePOStatus = function (items) {
        items.forEach(function (item) {
            if (item.PoStatus == "Approved") {
                item.PoStatus = "Declined";
            }
            else if (item.PoStatus == "Pending") {
                item.PoStatus = "Declined";
            }
        });
    };
    //Rendering task List
    TaskTabWebPart.prototype._renderTaskList = function (items) {
        var _this = this;
        var html = "";
        var poNumber = this.domElement.getElementsByTagName("tr");
        var vendorNo = this.domElement.getElementsByTagName("tr");
        //  poCount = items.length;
        items.forEach(function (item) {
            if (item.PoStatus == "pending") {
                html += "\n            <tr>\n              <td scope=\"row\" class=\"poNumber\">" + item.PoNumber + "</td>\n              <td>" + item.Description + "</td>\n              <td>" + item.VendorName + "</td>\n              <td id=\"vendorNo\">" + item.InvoiceNo + "</td>\n              <td>&#8377; " + item.TotalAmount + "</td>\n              <td id=\"buttonReview\" name=\"buttonReview\" value=" + item.PoNumber + " alt=" + item.InvoiceNo + " class=\"" + styles.review + " reviewButton\" id='review'>Review</td>\n              </tr>\n";
                //this._setButtonEventHandlers();
            }
        });
        //const reviewButton:Element = this.domElement.querySelector(".reviewButton");
        var listContainer = this.domElement.querySelector("#spTaskListContainer");
        console.log(html);
        console.log(listContainer.innerHTML);
        listContainer.innerHTML = html;
        listContainer.addEventListener("click", function () {
            //this.showEvent(this);
            _this.submitPurchaseOrder(event);
        });
    };
    //Rendering Invoice List
    TaskTabWebPart.prototype._renderInvoiceList = function (items) {
        var _this = this;
        var html = "";
        // invoiceCount = items.length;
        items.forEach(function (item) {
            if (item.PoStatus == "pending") {
                html += "\n            <tr>\n              <td scope=\"row\">" + item.Invoiceno_x002e_ + "</td>\n              <td id=\"poNumber\">" + item.POno_x002e_ + "</td>\n              <td>" + item.Description + "</td>\n              <td>" + item.Vendorname + "</td>\n              <td id=\"vendorNo\">" + item.Vendorno_x002e_ + "</td>\n               <td>&#8377; " + item.Amount + "</td>\n\n               <td id=\"buttonReview\" name=\"buttonReview\"  value = " + item.POno_x002e_ + " alt=" + item.Vendorno_x002e_ + " class=\"" + styles.review + " reviewButton\" id='review'>Review</td>\n\n               </tr>\n";
                //this._setButtonEventHandlers();
            }
        });
        //const reviewButton:Element = this.domElement.querySelector(".reviewButton");
        var listContainer = this.domElement.querySelector("#spInvoiceListContainer");
        console.log(html);
        console.log(listContainer.innerHTML);
        listContainer.innerHTML = html;
        listContainer.addEventListener("click", function () {
            //this.showEvent(this);
            _this.submitPurchaseOrder(event);
        });
        //this._setButtonEventHandlers();
    };
    TaskTabWebPart.prototype._renderListAsync = function () {
        var _this = this;
        this._getTaskListData().then(function (response) {
            _this._renderTaskList(response.value);
            _this.updatePOStatus(response.value);
        });
        //}
    };
    TaskTabWebPart.prototype._renderInvoiceListAsync = function () {
        var _this = this;
        this._getInvoiceListData().then(function (response) {
            _this._renderInvoiceList(response.value);
            //this.updatePOStatus(response.value);
        });
        //}
    };
    TaskTabWebPart.prototype.render = function () {
        var cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
        SPComponentLoader.loadCss(cssURL);
        this.domElement.innerHTML = "\n     <div class=\"" + styles.taskTab + "\">\n           <div class=\"" + styles.heading + "\"> Pending Submissions </div>\n              <div class=\"" + styles.row + "\">\n                <div class=\"" + styles.grid1 + "\">\n                  <span class=\"" + styles.title + "\">12 Days of pending timesheet</span>\n                  <div>\n                  <div class=\"" + styles.button + "\">\n                    <span class=\"" + styles.label + "\" id=\"full-timesheet\">Timesheet</span>\n                  </div>\n                  </div>\n                </div>\n                 <div class=\"" + styles.grid2 + "\">\n                  <span class=\"" + styles.title + "\">$25,000 Unreconciled expenses</span>\n                  <div>\n                  <a href=\"https://aka.ms/spfx\" class=\"" + styles.button + "\">\n                    <span class=\"" + styles.label + "\">Expenses</span>\n                  </a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"" + styles.row + "\">\n              <div class=\"" + styles.heading + "\"> Pending Approvals </div>\n   <div class=\"panel-group\" id=\"accordion\">\n                <div class=\"" + styles.panel + "\">\n                      <div class=\"" + styles.subheading + "\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">Purchased Orders</div>\n                  <div id=\"collapse1\" class=\"panel-collapse collapse\">\n                    <div>\n                    <table class=\"table table-bordered\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\">PoNumber</th>\n                          <th scope=\"col\">Description</th>\n                          <th scope=\"col\">VendorName</th>\n                          <th scope=\"col\">VendorNo</th>\n                          <th scope=\"col\">TotalAmount</th>\n                          <th scope=\"col\"></th>\n                        </tr>\n                      </thead>\n                        <tbody id=\"spTaskListContainer\">\n                          " + this._renderListAsync() + "\n                        </tbody>\n                    </table>\n                    </div>\n                    </div>\n       </div>\n                    <div class=\"" + styles.panel + "\">\n                          <div class=\"" + styles.subheading + "\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">Invoice\n          </div>\n                      <div id=\"collapse2\" class=\"panel-collapse collapse in\">\n                        <div>\n                          <table class=\"table table-bordered\" style=\"position:relative;top:-16px;\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">InvoiceNo</th>\n                              <th scope=\"col\">PoNumber</th>\n                              <th scope=\"col\">Description</th>\n                              <th scope=\"col\">VendorName</th>\n                              <th scope=\"col\">VendorNo</th>\n                              <th scope=\"col\">Amount</th>\n                              <th scope=\"col\"></th>\n                            </tr>\n                          </thead>\n                          <tbody id=\"spInvoiceListContainer\">\n                            " + this._renderInvoiceListAsync() + "\n                          </tbody>\n                        </table>\n                        </div>\n                      </div>\n                    </div>\n            <div class=\"" + styles.panel + "\">\n                   <div class=\"" + styles.subheading + "\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">Inventory (0)</div>\n              <div id=\"collapse3\" class=\"panel-collapse collapse\">\n                <div>\n                <table class=\"table table-bordered\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">InvoiceNo</th>\n                              <th scope=\"col\">PoNumber</th>\n                              <th scope=\"col\">Description</th>\n                              <th scope=\"col\">VendorName</th>\n                              <th scope=\"col\">VendorNo</th>\n                              <th scope=\"col\">Amount</th>\n                              <th scope=\"col\"></th>\n                            </tr>\n                          </thead>\n                          <tbody id=\"spInvoiceListContainer\">\n                            " + this._renderInvoiceListAsync() + "\n                          </tbody>\n                        </table>\n                </div>\n              </div>\n            </div>\n   </div>\n   </div>\n   </div>\n </div>";
    };
    TaskTabWebPart.prototype._setButtonEventHandlers = function () {
        var _this = this;
        var button = document.body.querySelector("#full-timesheet");
        button.addEventListener("click", function () {
            _this.pendingDates();
        });
    };
    TaskTabWebPart.prototype.pendingDates = function () {
        var taskInfoObj = {
            url: null,
            width: null,
            height: null,
            fallback: null
        };
        taskInfoObj.url =
            "https://employeeconnect-9566.azurewebsites.net/pendingdates";
        taskInfoObj.height = "1500";
        taskInfoObj.width = "950";
        taskInfoObj.fallback = taskInfoObj.url;
        microsoftTeams.tasks.startTask(taskInfoObj, this.submitHandler);
    };
    TaskTabWebPart.prototype.submitPurchaseOrder = function (event) {
        console.log(event);
        var PONumber = event.srcElement.attributes[2].value;
        var vendorNo = event.srcElement.attributes[3].value;
        var taskInfo = {
            InvoiceNo: null,
            height: null,
            width: null,
            url: null,
            fallbackUrl: null
        };
        taskInfo.url =
            "https://employeeconnect-9566.azurewebsites.net" +
                "/purchaseorder?poNumber=" +
                PONumber +
                "&vendorno=" +
                vendorNo;
        taskInfo.height = "900";
        taskInfo.width = "600";
        taskInfo.fallbackUrl = taskInfo.url;
        microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
        //this.updatePOStatus();
    };
    TaskTabWebPart.prototype.getLatestItemId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.context.spHttpClient
                .get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('PurchaseOrders')/items?$orderby=Id desc&$top=1&$select=id", SPHttpClient.configurations.v1, {
                headers: {
                    Accept: "application/json;odata=nometadata",
                    "odata-version": ""
                }
            })
                .then(function (response) {
                return response.json();
            }, function (error) {
                reject(error);
            })
                .then(function (response) {
                if (response.value.length === 0) {
                    resolve(-1);
                }
                else {
                    resolve(response.value[0].Id);
                }
            });
        });
    };
    //Update Po Status
    TaskTabWebPart.prototype.updatePoStatus = function (updateObj) {
        var _this = this;
        var latestItemId = undefined;
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error("No items found in the list");
            }
            latestItemId = itemId;
            console.log("Loading information about item ID: " + itemId + "...");
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('PurchaseOrders')/items(" + latestItemId + ")?$select=Title,Id", SPHttpClient.configurations.v1, {
                headers: {
                    Accept: "application/json;odata=nometadata",
                    "odata-version": ""
                }
            });
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (item) {
            //  console.log(`Item ID1: ${item.Id}, Title: ${item.Title}`);
            //item.NotificaitionTime = updateObj;
            var body = JSON.stringify({
                PoStatus: updateObj.PoStatus
            });
            console.log(body);
            _this.context.spHttpClient
                .post(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists(guid%27326cdbd1-840e-4ee7-be55-4019301c2126%27)/items(" + latestItemId + ")", SPHttpClient.configurations.v1, {
                headers: {
                    Accept: "application/json;odata=nometadata",
                    "Content-type": "application/json;odata=nometadata",
                    "odata-version": "",
                    "IF-MATCH": "*",
                    "X-HTTP-Method": "MERGE"
                },
                body: body
            })
                .then(function (response) {
                console.log("Item with ID: " + latestItemId + " successfully updated");
            }, function (error) {
                console.log("Error updating item: " + error);
            });
        });
    };
    TaskTabWebPart.prototype.submitHandler = function (err, result) {
        this.updatePoStatus(result.PoStatus);
        if (result.action == "podecline") {
            var taskInfo = {
                InvoiceNo: null,
                height: null,
                width: null,
                url: null,
                fallbackUrl: null
            };
            taskInfo.url =
                "https://employeeconnect-9566.azurewebsites.net/podecline?poNo=" +
                    result.poNumber +
                    "&POreason=" +
                    result.reason +
                    "&POComment=" +
                    result.comment;
            taskInfo.height = "400";
            taskInfo.width = "367";
            // Set fallback URL
            taskInfo.fallbackUrl = taskInfo.url;
            microsoftTeams.tasks.startTask(taskInfo);
            // this.updatePOStatus(result.action);
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
        else {
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
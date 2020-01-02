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
import styles from "./ToolTabWebPart.module.scss";
import * as microsoftTeams from "@microsoft/teams-js";
import * as strings from "ToolTabWebPartStrings";
import { SPComponentLoader } from "@microsoft/sp-loader";
import "jquery";
require("bootstrap");
var ToolTabWebPart = /** @class */ (function (_super) {
    __extends(ToolTabWebPart, _super);
    function ToolTabWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolTabWebPart.prototype.render = function () {
        var cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
        SPComponentLoader.loadCss(cssURL);
        this.domElement.innerHTML = "\n      <div class=\"" + styles.toolTab + "\" id=\"accordion\">\n        <div class=\"" + styles.row + "\">\n        <div class=\"col-12\" >\n          <div class=\"" + styles.HR + " ar accordion-toggle\"\n                  data-toggle=\"collapse\"\n                  data-parent=\"#accordion\"\n                  data-target=\"#HRtools\" aria-expanded=\"false\"\n                  >Human Resources\n                </div>\n          <div class=\"" + styles.P10 + " panel-collapse\" id=\"HRtools\">\n            <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n              <div class=" + styles.cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + styles.createicon + "\n                ></span>\n                <div class=\"" + styles.CBL + "\">Create business letter</div>\n                <p class=\"" + styles.CBLdes + "\">\n                  Create a business letter within a predesigned color and\n                  template.\n                </p>\n              </div>\n              </div>\n\n            <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n              <div class=" + styles.cbody + " id=\"createTicket\">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + styles.createicon + "\n                ></span>\n                <div class=\"" + styles.CBL + "\">Create ticket</div>\n                <p class=\"" + styles.CBLdes + "\">\n                For all HR tickets, the ticket type is being set as Employee Support.\n                </p>\n              </div>\n              </div>\n\n              <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n              <div class=" + styles.cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + styles.createicon + "\n                ></span>\n                <div class=\"" + styles.CBL + "\">Request leave</div>\n                <p class=\"" + styles.CBLdes + "\">\n                Request leave and check your status in the Leave application.\n                </p>\n              </div>\n              </div>\n\n              <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n              <div class=" + styles.cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + styles.createicon + "\n                ></span>\n                <div class=\"" + styles.CBL + "\">View policies</div>\n                <p class=\"" + styles.CBLdes + "\">\n                Identify the purpose and objectives of HR department.\n                </p>\n              </div>\n              </div>\n\n\n              <div class=\"" + styles.HR + " ar accordion-toggle\"\n              data-toggle=\"collapse\"\n              data-parent=\"#accordion\"\n              data-target=\"#Pay-benefits\" aria-expanded=\"false\"\n              >Pay and benefits\n            </div>\n      <div class=\"" + styles.P10 + " panel-collapse\" id=\"Pay-benefits\">\n        <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n          <div class=" + styles.cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + styles.createicon + "\n            ></span>\n            <div class=\"" + styles.CBL + "\">Download payslip</div>\n            <p class=\"" + styles.CBLdes + "\">\n            View online pay slips and full payment histories.\n            </p>\n          </div>\n          </div>\n\n        <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n          <div class=" + styles.cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + styles.createicon + "\n            ></span>\n            <div class=\"" + styles.CBL + "\">Create finance ticket</div>\n            <p class=\"" + styles.CBLdes + "\">\n            Open a support ticket with the Finance and Operations support.\n            </p>\n          </div>\n          </div>\n\n          <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n          <div class=" + styles.cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + styles.createicon + "\n            ></span>\n            <div class=\"" + styles.CBL + "\">Submit benefits claim</div>\n            <p class=\"" + styles.CBLdes + "\">\n            Submit a claim from your account to start the process.\n            </p>\n          </div>\n          </div>\n\n          <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n          <div class=" + styles.cbody + ">\n            <span\n              alt-name=\"create letter\"\n              class=" + styles.createicon + "\n            ></span>\n            <div class=\"" + styles.CBL + "\">View benefits policies</div>\n            <p class=\"" + styles.CBLdes + "\">\n            Read common queries about servicing your policy.\n            </p>\n          </div>\n          </div>\n\n\n          <div class=\"" + styles.HR + " ar accordion-toggle\"\n          data-toggle=\"collapse\"\n          data-parent=\"#accordion\"\n          data-target=\"#itandfacilities\" aria-expanded=\"false\"\n          >IT and facilities\n        </div>\n  <div class=\"" + styles.P10 + " panel-collapse\" id=\"itandfacilities\">\n    <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n      <div class=" + styles.cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + styles.createicon + "\n        ></span>\n        <div class=\"" + styles.CBL + "\">Raise IT Support Ticket</div>\n        <p class=\"" + styles.CBLdes + "\">\n        Submit your support case to review and respond.\n        </p>\n      </div>\n      </div>\n\n    <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n      <div class=" + styles.cbody + " id=\"visitorRequest\">\n        <span\n          alt-name=\"create letter\"\n          class=" + styles.createicon + "\n        ></span>\n        <div class=\"" + styles.CBL + "\">Submit Visitor Request</div>\n        <p class=\"" + styles.CBLdes + "\">\n        Fill a request form for short-term visitors.\n        </p>\n      </div>\n      </div>\n\n      <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n      <div class=" + styles.cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + styles.createicon + "\n        ></span>\n        <div class=\"" + styles.CBL + "\">Event IT Support request</div>\n        <p class=\"" + styles.CBLdes + "\">\n        Fill out this form to request any equiepment for events.\n        </p>\n      </div>\n      </div>\n\n      <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n      <div class=" + styles.cbody + ">\n        <span\n          alt-name=\"create letter\"\n          class=" + styles.createicon + "\n        ></span>\n        <div class=\"" + styles.CBL + "\">Cafeteria service app</div>\n        <p class=\"" + styles.CBLdes + "\">\n        Emloyee can order and pay here without waiting in long queue. </p>\n      </div>\n      </div>\n\n\n      <div class=\"" + styles.HR + " ar accordion-toggle\"\n                  data-toggle=\"collapse\"\n                  data-parent=\"#accordion\"\n                  data-target=\"#retail-operations\" aria-expanded=\"false\"\n                  >Retail operations\n                </div>\n          <div class=\"" + styles.P10 + " panel-collapse\" id=\"retail-operations\">\n            <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n              <div class=" + styles.cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + styles.createicon + "\n                ></span>\n                <div class=\"" + styles.CBL + "\">Inventory request</div>\n                <p class=\"" + styles.CBLdes + "\">\n                Inventory form to request supplies.\n                </p>\n              </div>\n              </div>\n\n            <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n              <div class=" + styles.cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + styles.createicon + "\n                ></span>\n                <div class=\"" + styles.CBL + "\">Timesheet</div>\n                <p class=\"" + styles.CBLdes + "\">\n                Weekly Timesheet setup.\n                  </p>\n              </div>\n              </div>\n\n              <div class=\"" + styles.card + " " + styles.shadowsm + "\">\n              <div class=" + styles.cbody + ">\n                <span\n                  alt-name=\"create letter\"\n                  class=" + styles.createicon + "\n                ></span>\n                <div class=\"" + styles.CBL + "\">Store info</div>\n                <p class=\"" + styles.CBLdes + "\">\n                Your store information.\n                </p>\n              </div>\n              </div>\n\n              </div>\n          </div>\n          </div>\n      </div>";
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
        microsoftTeams.initialize();
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
        microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
    };
    ToolTabWebPart.prototype.visitorRequest = function () {
        microsoftTeams.initialize();
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
        microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
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
            microsoftTeams.tasks.startTask(taskInfo);
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
            microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
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
            microsoftTeams.tasks.startTask(taskInfo);
        }
    };
    Object.defineProperty(ToolTabWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    ToolTabWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return ToolTabWebPart;
}(BaseClientSideWebPart));
export default ToolTabWebPart;
//# sourceMappingURL=ToolTabWebPart.js.map
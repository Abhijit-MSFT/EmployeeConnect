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
        this.domElement.innerHTML = "\n      <div class=\"" + styles.toolTab + "\">\n        <div class=\"" + styles.container + "\">\n        <div class=\"" + styles.row + "\">\n        <div class=\"" + styles.column + "\" id=\"accordion\">\n          <div class=\"HR ar accordion-toggle\"\n                  data-toggle=\"collapse\"\n                  data-parent=\"#accordion\"\n                  data-target=\"#HRtools\" aria-expanded=\"false\"\n                  >Human Resources\n                </div>\n          <div class=\"P-10 panel-collapse\" id=\"HRtools\">\n            <div class=\"card shadow-sm custom-card-first-row\">\n              <div class=\"card-body\">\n                <span\n                  alt-name=\"create letter\"\n                  class=\"HR-tabs create-icon\"\n                ></span>\n                <div class=\"CBL\">Create business letter</div>\n                <p class=\"CBL-des\">\n                  Create a business letter within a predesigned color and\n                  template.\n                </p>\n              </div>\n            </div>\n            <div class=\"card shadow-sm custom-card-first-row-one\" data-toggle=\"modal\"\n                data-target=\"#create-ticket\">\n              <div class=\"card-body\">\n                <span\n                  alt-name=\"ticket-creation\"\n                  class=\"HR-tabs ticket-creation\"\n                >\n                </span>\n                <div class=\"CT\">Create ticket</div>\n                <p class=\"CT-des\">\n                  For all HR tickets, the ticket type is being set as Employee\n                  Support.\n                </p>\n              </div>\n            </div>\n            <div class=\"card shadow-sm custom-card-first-row-two\">\n              <div class=\"card-body\">\n                <span\n                  alt-name=\"leave-request\"\n                  class=\"HR-tabs leave-request\"\n                ></span>\n                <div class=\"RL\">Request leave</div>\n                <p class=\"RL-des\">\n                  Request leave and check your status in the Leave application.\n                </p>\n              </div>\n            </div>\n            <div class=\"card shadow-sm custom-card-first-row-three\">\n              <div class=\"card-body\">\n                <span alt-name=\"policies\" class=\"HR-tabs policies\"></span>\n                <div class=\"VP\">View policies</div>\n                <p class=\"VP-des\">\n                  Identify the purpose and objectives of Humana Resources\n                  department.\n                </p>\n              </div>\n            </div>\n          </div>\n      </div>\n      </div>";
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
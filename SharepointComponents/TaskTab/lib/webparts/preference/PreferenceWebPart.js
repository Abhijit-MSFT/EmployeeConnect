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
import styles from "./PreferenceWebPart.module.scss";
import * as strings from "PreferenceWebPartStrings";
import * as microsoftTeams from "@microsoft/teams-js";
import { SPComponentLoader } from "@microsoft/sp-loader";
import * as $ from "jquery";
microsoftTeams.initialize();
var PreferencesTabWebPart = /** @class */ (function (_super) {
    __extends(PreferencesTabWebPart, _super);
    function PreferencesTabWebPart() {
        var _this = _super.call(this) || this;
        SPComponentLoader.loadCss("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
        // tslint:disable-next-line:no-function-expression
        $(document).ready(function () {
            $("#news-update").click(function () {
                if ($(this).prop("checked") == true) {
                    $(".radio, #drop1").prop("disabled", false);
                }
                else if ($(this).prop("checked") == false) {
                    $(".radio,#drop1").prop("disabled", true);
                }
            });
            $("#news-update2").click(function () {
                if ($(this).prop("checked") == true) {
                    $(".radio1, #drop2").prop("disabled", false);
                }
                else if ($(this).prop("checked") == false) {
                    $(".radio1, #drop2").prop("disabled", true);
                }
            });
        });
        return _this;
    }
    PreferencesTabWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.preferencesTab + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column1 + "\">\n              <span class=\"" + styles.title + "\">News</span>\n            </div>\n\n            <div class=\"" + styles.column2 + "\">\n              <div class=\"" + styles.rules + "\">Pick 5 or more topics for news updates\n              </div>\n               <button type=\"button\" class=\"" + styles.showmore + "\">Show News</button>\n\n             <div class=\"" + styles.columnheight + "\">\n                <label for=\"Business\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Business.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" checked name=\"Business\" id=\"Business\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Business</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"Travel\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Travel.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Travel\" id=\"Travel\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Travel</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Design\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Design.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Design\" id=\"Design\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Design</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Technology\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Technology.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" checked name=\"Technology\" id=\"Technology\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Technology</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Media\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Media.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Media\" id=\"Media\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Media</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Economy\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Economy.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Economy\" id=\"Economy\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Economy</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"CS\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/CS.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"CS\" id=\"CS\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">CS</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"Market\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Market.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Market\" id=\"Market\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Market</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Finance\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Finance.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Finance\" id=\"Finance\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Finance</div>\n                    </div>\n              </div>\n               <br/>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Enterprise\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Enterprise.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Enterprise\" id=\"Enterprise\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Enterprise</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Software\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Software.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" checked name=\"Software\" id=\"Software\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Software</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Art\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Art.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Art\" id=\"Art\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Art</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Animation\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Animation.gif\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Animation\" id=\"Animation\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Animation</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"Culture\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Culture.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" checked name=\"Culture\" id=\"Culture\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Culture</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"Health\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Health.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Health\" id=\"Health\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Health</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Creative\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Creative.png\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Creative\" id=\"Creative\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Creative</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"IT\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/IT.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"IT\" id=\"IT\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">IT</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Data\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Data.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Data\" id=\"Data\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Data</div>\n                    </div>\n              </div>\n              <div class=\"" + styles.explore + "\">Explore more categories</div>\n              <div class=\"" + styles.switcht + "\">\n              <label class=\"" + styles.switch + "\">\n                <input type=\"checkbox\" id='news-update' checked />\n                <span class=\"" + styles.slider + "\"></span>\n              </label>\n              <span class=\"" + styles.newsupdates + "\" id='news-update'>Send notifications about news updates</span>\n            </div>\n            <div class=\"" + styles.notify + "\">Notify me at</div>\n\n            <form class=\"" + styles.allradio + "\" id=\"radioButtonTask\"'>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\" class=\"radio\"/>\n                <span class=\"" + styles.textalign + "\">Beginning of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\" class=\"radio\"/>\n                <span class=\"" + styles.textalign + "\">End of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" checked name=\"radio\" class=\"radio\"/>\n                <span class=\"" + styles.textalign + "\">Set a preferred time </span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <select class=\"" + styles.datecontrol + "\" id='drop1'>\n                <option selected>9:00 am</option>\n                <option>Option 2</option>\n              </select>\n              <span class=\"chevron-down\"></span>  <!--added here-->\n            </form><br/>\n\n              </div>\n          </div>\n\n            <div class=\"" + styles.row2 + "\">\n            <div class=\"" + styles.column1 + "\">\n              <span class=\"" + styles.title + "\">Events & trainings</span>\n            </div>\n\n <div class=\"" + styles.column2 + "\">\n  <button type=\"button\" class=\"" + styles.showmore + "\">Show Events & trainings</button>\n            <div class=\"" + styles.switcht + "\">\n              <label class=\"" + styles.switch + "\">\n                <input type=\"checkbox\" id='news-update2' checked />\n                <span class=\"" + styles.slider + "\"></span>\n              </label>\n              <span class=\"" + styles.newsupdates + "\">Send notifications about new events & training</span>\n            </div>\n            <div class=\"" + styles.notify + "\">Notify me at</div>\n\n            <form class=\"" + styles.allradio + "\">\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\" class=\"radio1\"/>\n                <span class=\"" + styles.textalign + "\">Beginning of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\" class=\"radio1\"/>\n                <span class=\"" + styles.textalign + "\">End of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" checked name=\"radio\" class=\"radio1\"/>\n                <span class=\"" + styles.textalign + "\">Set a preferred time </span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <select class=\"" + styles.datecontrol + "\" id=\"drop2\">\n                <option selected>4:30 pm</option>\n                <option>Option 2</option>\n              </select>\n              <span class=\"chevron-down\"></span>  <!--added here-->\n            </form> <br/>\n\n            </div>\n              </div>\n\n              <div class=\"" + styles.row3 + "\">\n            <div class=\"" + styles.column1 + "\">\n              <span class=\"" + styles.title + "\">Task reminders</span>\n            </div>\n\n <div class=\"" + styles.column2 + "\">\n  <button type=\"button\" class=\"" + styles.showmore + "\">Show Task reminders</button>\n            <div class=\"" + styles.notify + "\">Notify me at</div>\n\n            <form class=\"" + styles.allradio + "\">\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" checked name=\"radio\" />\n                <span class=\"" + styles.textalign + "\">Beginning of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\" />\n                <span class=\"" + styles.textalign + "\">End of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\" />\n                <span class=\"" + styles.textalign + "\">Set a preferred time </span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n            </form><br/>\n\n            </div>\n              </div>\n\n            </div>\n\n        </div>\n      </div>\n      ";
    };
    Object.defineProperty(PreferencesTabWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    PreferencesTabWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return PreferencesTabWebPart;
}(BaseClientSideWebPart));
export default PreferencesTabWebPart;
//# sourceMappingURL=PreferenceWebPart.js.map
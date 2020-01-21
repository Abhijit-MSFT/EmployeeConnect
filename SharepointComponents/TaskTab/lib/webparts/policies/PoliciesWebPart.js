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
import styles from "./PoliciesWebPart.module.scss";
import * as strings from "PoliciesWebPartStrings";
import { SPComponentLoader } from "@microsoft/sp-loader";
import * as $ from "jquery";
var PoliciesWebPart = /** @class */ (function (_super) {
    __extends(PoliciesWebPart, _super);
    function PoliciesWebPart() {
        var _this = _super.call(this) || this;
        $(document).ready(function () {
            $("#heading2,#heading3,#heading4").hide();
            var selector = "div a";
            // $(selector).on("click",()=> {
            //   $(selector).removeClass("active");
            //   $(this).addClass("active");
            // });
            $(selector).on("click", function () {
                $(selector).removeClass("active");
                $(_this).addClass("active");
            });
            $(".HR").on("click", function () {
                $("#heading2,#heading3,#heading4").hide();
                $("#heading1").show();
            });
            // $(".PB").on("click", () => {
            //   $("#heading1,#heading3,#heading4").hide();
            //   $("#heading2").show();
            // });
            // $(".IT").on("click", () => {
            //   $("#heading1,#heading2,#heading4").hide();
            //   $("#heading3").show();
            // });
            // $(".RO").on("click", () => {
            //   $("#heading1,#heading2,#heading3").hide();
            //   $("#heading4").show();
            // });
        });
        return _this;
    }
    PoliciesWebPart.prototype.render = function () {
        var cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
        SPComponentLoader.loadCss(cssURL);
        this.domElement.innerHTML = "\n      <div class=\"" + styles.policies + "\" id=\"accordion\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column1 + "\">\n              <div class=\"" + styles.sidebar + "\">\n                <a\n                  class=\"" + styles.active + " accordion-toggle\"\n                  data-toggle=\"collapse\"\n                   data-parent=\"#accordion\"\n                  data-target=\"#hr\" aria-expanded=\"false\"\n                  href=\"#heading1\"\n                  >\n                  <span class=\"HR\">Human resources</span>\n                  </a>\n\n                        <div class=\"" + styles.service + "\">\n                      <div class=\"" + styles.head + "\">\n                          <h4>Human Resource Policies</h4>\n                          This document contains all policies-related information for employees.\n                          Please contact your HR representative for any queries.\n                      </div>\n                        <h6 class=\"" + styles.subheading + "\">1.1 Annual Leave</h6>\n                          <p class=\"" + styles.subsubheading + "\">\n                            Important guidelines for the annual leave policy are listed below:\n                          </p>\n                              <ul class=\"" + styles.bulletpts + "\">\n                                <li>\n                                  All employees are entitled to a total of 15 annual leaves during the\n                                  calendar year\n                                </li>\n                                <li>\n                                  The annual leave cycle is based on calendar year (January 1 to\n                                  December 31)\n                                </li>\n                                <li>\n                                  Weekly off/holidays falling during the leave period are excluded\n                                  from the number of leave days taken\n                                </li>\n                                <li>\n                                  Only 5 unused annual leaves can be carried forward to the next\n                                  calendar year\n                                </li>\n                                <li>\n                                  Employees who join during the course of the year will receive annual\n                                  leaves on a pro-rated basis\n                                </li>\n                                <li>\n                                  If an employee leaves during the leave cycle and has taken more\n                                  leaves than the eligibility, the excess leaves taken will be\n                                  adjusted against the full and final settlement\n                                </li>\n                                <li>\n                                  All employees need to apply for leaves using the designated vacation\n                                  tool\n                                </li>\n                                <li>\n                                  All annual leaves must be approved by managers before the leave\n                                  period begins\n                                </li>\n                              </ul>\n                                    <h6 class=\"" + styles.subheading + "\">1.2 Sick Leave</h6>\n                                        <p class=\"" + styles.subsubheading + "\">\n                                          Important guidelines for the sick leave policy are listed below:\n                                        </p>\n                                            <ul class=\"" + styles.bulletpts + "\">\n                                              <li>\n                                                All employees are entitled to a total of 12 sick leaves during the\n                                                calendar year\n                                              </li>\n                                              <li>\n                                                The sick leave cycle is based on calendar year (January 1 to\n                                                December 31)\n                                              </li>\n                                              <li>\n                                                Weekly off/holidays falling during the leave period are excluded\n                                                from the number of leave days taken\n                                              </li>\n                                              <li>\n                                                Unused sick leaves cannot be carried forward to the next calendar\n                                                year\n                                              </li>\n                                              <li>\n                                                Employees who join during the course of the year will receive sick\n                                                leaves on a pro-rated basis\n                                              </li>\n                                              <li>\n                                                If an employee leaves during the leave cycle and has taken more\n                                                leaves than the eligibility, the excess leaves taken will be\n                                                adjusted against the full and final settlement\n                                              </li>\n                                              <li>\n                                                All employees need to apply for sick leaves using the designated\n                                                vacation tool after re-joining work\n                                              </li>\n                                              <li>\n                                                If an employee takes more than 5 consecutive sick leaves, he/she\n                                                will be required to furnish a medical certificate\n                                              </li>\n                                            </ul>\n                      </div>\n                  <a class=\"" + styles + "\" href=\"#heading2\">\n                    <span class=\"PB\">Pay & Benefits</span>\n                  </a>\n                  <a class=\"" + styles + "\" href=\"#heading3\">\n                    <span class=\"IT\">IT facilities</span>\n                  </a>\n                  <a class=\"" + styles + "\" href=\"#heading4\">\n                    <span class=\"RO\">Retail operations</span>\n                  </a>\n                </div>\n            </div>\n             <div class=\"" + styles.column2 + "\">\n                <div class=\"" + styles.content + "\">\n                  <div id=\"heading1\">\n                      <div class=\"" + styles.head + "\">\n                          <h4>Human Resource Policies</h4>\n                          This document contains all policies-related information for employees.\n                          Please contact your HR representative for any queries.\n                      </div>\n                        <h6 class=\"" + styles.subheading + "\">1.1 Annual Leave</h6>\n                          <p class=\"" + styles.subsubheading + "\">\n                            Important guidelines for the annual leave policy are listed below:\n                          </p>\n                              <ul class=\"" + styles.bulletpts + "\">\n                                <li>\n                                  All employees are entitled to a total of 15 annual leaves during the\n                                  calendar year\n                                </li>\n                                <li>\n                                  The annual leave cycle is based on calendar year (January 1 to\n                                  December 31)\n                                </li>\n                                <li>\n                                  Weekly off/holidays falling during the leave period are excluded\n                                  from the number of leave days taken\n                                </li>\n                                <li>\n                                  Only 5 unused annual leaves can be carried forward to the next\n                                  calendar year\n                                </li>\n                                <li>\n                                  Employees who join during the course of the year will receive annual\n                                  leaves on a pro-rated basis\n                                </li>\n                                <li>\n                                  If an employee leaves during the leave cycle and has taken more\n                                  leaves than the eligibility, the excess leaves taken will be\n                                  adjusted against the full and final settlement\n                                </li>\n                                <li>\n                                  All employees need to apply for leaves using the designated vacation\n                                  tool\n                                </li>\n                                <li>\n                                  All annual leaves must be approved by managers before the leave\n                                  period begins\n                                </li>\n                              </ul>\n                                    <h6 class=\"" + styles.subheading + "\">1.2 Sick Leave</h6>\n                                        <p class=\"" + styles.subsubheading + "\">\n                                          Important guidelines for the sick leave policy are listed below:\n                                        </p>\n                                            <ul class=\"" + styles.bulletpts + "\">\n                                              <li>\n                                                All employees are entitled to a total of 12 sick leaves during the\n                                                calendar year\n                                              </li>\n                                              <li>\n                                                The sick leave cycle is based on calendar year (January 1 to\n                                                December 31)\n                                              </li>\n                                              <li>\n                                                Weekly off/holidays falling during the leave period are excluded\n                                                from the number of leave days taken\n                                              </li>\n                                              <li>\n                                                Unused sick leaves cannot be carried forward to the next calendar\n                                                year\n                                              </li>\n                                              <li>\n                                                Employees who join during the course of the year will receive sick\n                                                leaves on a pro-rated basis\n                                              </li>\n                                              <li>\n                                                If an employee leaves during the leave cycle and has taken more\n                                                leaves than the eligibility, the excess leaves taken will be\n                                                adjusted against the full and final settlement\n                                              </li>\n                                              <li>\n                                                All employees need to apply for sick leaves using the designated\n                                                vacation tool after re-joining work\n                                              </li>\n                                              <li>\n                                                If an employee takes more than 5 consecutive sick leaves, he/she\n                                                will be required to furnish a medical certificate\n                                              </li>\n                                            </ul>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(PoliciesWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    PoliciesWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return PoliciesWebPart;
}(BaseClientSideWebPart));
export default PoliciesWebPart;
//# sourceMappingURL=PoliciesWebPart.js.map
import { Version } from "@microsoft/sp-core-library";

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./PoliciesWebPart.module.scss";
import * as strings from "PoliciesWebPartStrings";
import { SPComponentLoader } from "@microsoft/sp-loader";
import * as $ from "jquery";

export interface IPoliciesWebPartProps {
  description: string;
}

export default class PoliciesWebPart extends BaseClientSideWebPart<
  IPoliciesWebPartProps
> {
  public constructor() {
    super();
    $(document).ready(() => {
      $("#heading2,#heading3,#heading4").hide();
      var selector = "div a";
      // $(selector).on("click",()=> {
      //   $(selector).removeClass("active");
      //   $(this).addClass("active");
      // });
      $(selector).on("click", () => {
        $(selector).removeClass("active");
        $(this).addClass("active");
      });

      $(".HR").on("click", () => {
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
  }

  public render(): void {
    let cssURL =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";

    SPComponentLoader.loadCss(cssURL);

    this.domElement.innerHTML = `
      <div class="${styles.policies}" id="accordion">
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.column1}">
              <div class="${styles.sidebar}">
                <a
                  class="${styles.active} accordion-toggle"
                  data-toggle="collapse"
                   data-parent="#accordion"
                  data-target="#hr" aria-expanded="false"
                  href="#heading1"
                  >
                  <span class="HR">Human resources</span>
                  </a>

                        <div class="${styles.service}">
                      <div class="${styles.head}">
                          <h4>Human Resource Policies</h4>
                          This document contains all policies-related information for employees.
                          Please contact your HR representative for any queries.
                      </div>
                        <h6 class="${styles.subheading}">1.1 Annual Leave</h6>
                          <p class="${styles.subsubheading}">
                            Important guidelines for the annual leave policy are listed below:
                          </p>
                              <ul class="${styles.bulletpts}">
                                <li>
                                  All employees are entitled to a total of 15 annual leaves during the
                                  calendar year
                                </li>
                                <li>
                                  The annual leave cycle is based on calendar year (January 1 to
                                  December 31)
                                </li>
                                <li>
                                  Weekly off/holidays falling during the leave period are excluded
                                  from the number of leave days taken
                                </li>
                                <li>
                                  Only 5 unused annual leaves can be carried forward to the next
                                  calendar year
                                </li>
                                <li>
                                  Employees who join during the course of the year will receive annual
                                  leaves on a pro-rated basis
                                </li>
                                <li>
                                  If an employee leaves during the leave cycle and has taken more
                                  leaves than the eligibility, the excess leaves taken will be
                                  adjusted against the full and final settlement
                                </li>
                                <li>
                                  All employees need to apply for leaves using the designated vacation
                                  tool
                                </li>
                                <li>
                                  All annual leaves must be approved by managers before the leave
                                  period begins
                                </li>
                              </ul>
                                    <h6 class="${styles.subheading}">1.2 Sick Leave</h6>
                                        <p class="${styles.subsubheading}">
                                          Important guidelines for the sick leave policy are listed below:
                                        </p>
                                            <ul class="${styles.bulletpts}">
                                              <li>
                                                All employees are entitled to a total of 12 sick leaves during the
                                                calendar year
                                              </li>
                                              <li>
                                                The sick leave cycle is based on calendar year (January 1 to
                                                December 31)
                                              </li>
                                              <li>
                                                Weekly off/holidays falling during the leave period are excluded
                                                from the number of leave days taken
                                              </li>
                                              <li>
                                                Unused sick leaves cannot be carried forward to the next calendar
                                                year
                                              </li>
                                              <li>
                                                Employees who join during the course of the year will receive sick
                                                leaves on a pro-rated basis
                                              </li>
                                              <li>
                                                If an employee leaves during the leave cycle and has taken more
                                                leaves than the eligibility, the excess leaves taken will be
                                                adjusted against the full and final settlement
                                              </li>
                                              <li>
                                                All employees need to apply for sick leaves using the designated
                                                vacation tool after re-joining work
                                              </li>
                                              <li>
                                                If an employee takes more than 5 consecutive sick leaves, he/she
                                                will be required to furnish a medical certificate
                                              </li>
                                            </ul>
                      </div>
                  <a class="${styles}" href="#heading2">
                    <span class="PB">Pay & Benefits</span>
                  </a>
                  <a class="${styles}" href="#heading3">
                    <span class="IT">IT facilities</span>
                  </a>
                  <a class="${styles}" href="#heading4">
                    <span class="RO">Retail operations</span>
                  </a>
                </div>
            </div>
             <div class="${styles.column2}">
                <div class="${styles.content}">
                  <div id="heading1">
                      <div class="${styles.head}">
                          <h4>Human Resource Policies</h4>
                          This document contains all policies-related information for employees.
                          Please contact your HR representative for any queries.
                      </div>
                        <h6 class="${styles.subheading}">1.1 Annual Leave</h6>
                          <p class="${styles.subsubheading}">
                            Important guidelines for the annual leave policy are listed below:
                          </p>
                              <ul class="${styles.bulletpts}">
                                <li>
                                  All employees are entitled to a total of 15 annual leaves during the
                                  calendar year
                                </li>
                                <li>
                                  The annual leave cycle is based on calendar year (January 1 to
                                  December 31)
                                </li>
                                <li>
                                  Weekly off/holidays falling during the leave period are excluded
                                  from the number of leave days taken
                                </li>
                                <li>
                                  Only 5 unused annual leaves can be carried forward to the next
                                  calendar year
                                </li>
                                <li>
                                  Employees who join during the course of the year will receive annual
                                  leaves on a pro-rated basis
                                </li>
                                <li>
                                  If an employee leaves during the leave cycle and has taken more
                                  leaves than the eligibility, the excess leaves taken will be
                                  adjusted against the full and final settlement
                                </li>
                                <li>
                                  All employees need to apply for leaves using the designated vacation
                                  tool
                                </li>
                                <li>
                                  All annual leaves must be approved by managers before the leave
                                  period begins
                                </li>
                              </ul>
                                    <h6 class="${styles.subheading}">1.2 Sick Leave</h6>
                                        <p class="${styles.subsubheading}">
                                          Important guidelines for the sick leave policy are listed below:
                                        </p>
                                            <ul class="${styles.bulletpts}">
                                              <li>
                                                All employees are entitled to a total of 12 sick leaves during the
                                                calendar year
                                              </li>
                                              <li>
                                                The sick leave cycle is based on calendar year (January 1 to
                                                December 31)
                                              </li>
                                              <li>
                                                Weekly off/holidays falling during the leave period are excluded
                                                from the number of leave days taken
                                              </li>
                                              <li>
                                                Unused sick leaves cannot be carried forward to the next calendar
                                                year
                                              </li>
                                              <li>
                                                Employees who join during the course of the year will receive sick
                                                leaves on a pro-rated basis
                                              </li>
                                              <li>
                                                If an employee leaves during the leave cycle and has taken more
                                                leaves than the eligibility, the excess leaves taken will be
                                                adjusted against the full and final settlement
                                              </li>
                                              <li>
                                                All employees need to apply for sick leaves using the designated
                                                vacation tool after re-joining work
                                              </li>
                                              <li>
                                                If an employee takes more than 5 consecutive sick leaves, he/she
                                                will be required to furnish a medical certificate
                                              </li>
                                            </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}

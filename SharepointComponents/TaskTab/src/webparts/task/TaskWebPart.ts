import {
  Version,
  Environment,
  EnvironmentType
} from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import styles from "./TaskWebPart.module.scss";
import * as strings from "TaskWebPartStrings";

import * as microsoftTeams from "@microsoft/teams-js";
import { SPComponentLoader } from "@microsoft/sp-loader";
microsoftTeams.initialize();
import "jquery";
require("bootstrap");

export interface ITaskTabWebPartProps {
  description: string;
}

// // //Getting the  SharePoint list data
export interface ISPTaskLists {
  value: ISPTaskList[];
}

export interface ISPTaskList {
  PoNumber: string;
  Description: string;
  InvoiceNo: string;
  VendorName: string;
  VendorNo: string;
  TotalAmount: string;
  PoStatus: string;
  // Review;
}

export interface ISPInvoiceLists {
  value: ISInvoiceList[];
}

export interface ISInvoiceList {
  Invoiceno_x002e_: string;
  POno_x002e_: string;
  Description: string;
  Vendorname: string;
  Vendorno_x002e_: string;
  Amount: string;
  // Review;
}
export default class TaskTabWebPart extends BaseClientSideWebPart<
  ITaskTabWebPartProps
> {
  public constructor() {
    super();
    SPComponentLoader.loadCss(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    );
  }

  //Rendering TaskList data
  private _getTaskListData(): Promise<ISPTaskLists> {
    //Rest API to call SharePoint list
    var requestURL = this.context.pageContext.web.absoluteUrl;
    return this.context.spHttpClient
      .get(
        requestURL + `/_api/web/lists/GetByTitle('TaskList')/items`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  //Getting Invoice List Data
  private _getInvoiceListData(): Promise<ISPInvoiceLists> {
    //Rest API to call SharePoint list
    var requestURL = this.context.pageContext.web.absoluteUrl;
    return this.context.spHttpClient
      .get(
        requestURL + `/_api/web/lists/GetByTitle('InvoiceList')/items`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  //Rendering task List
  private _renderTaskList(items: ISPTaskList[]): void {
    let html: string = "";
    items.forEach((item: ISPTaskList) => {
      html += `
            <tr>
              <th scope="row">${item.PoNumber}</th>
              <td>-</td>
              <td>${item.VendorName}</td>
              <td>${item.InvoiceNo}</td>
              <td>&#8377; ${item.TotalAmount}</td>
              <td id="buttonReview" name="buttonReview" class="${styles.review}" id='review'>Review</td>
            </tr>
`;
    });

    const listContainer: Element = this.domElement.querySelector(
      "#spTaskListContainer"
    );
    listContainer.innerHTML = html;
  }
  //Rendering Invoice List
  private _renderInvoiceList(items: ISInvoiceList[]): void {
    let html: string = "";
    items.forEach((item: ISInvoiceList) => {
      html += `
            <tr>
              <th scope="row">${item.Invoiceno_x002e_}</th>
              <td>${item.POno_x002e_}</td>
              <td>--</td>
              <td>${item.Vendorname}</td>
              <td>${item.Vendorno_x002e_}</td>
               <td>&#8377; ${item.Amount}</td>
              <td id="buttonReview" name="buttonReview" class="${styles.review}" id='review'>Review</td>
            </tr>
`;
    });

    const listContainer: Element = this.domElement.querySelector(
      "#spInvoiceListContainer"
    );
    listContainer.innerHTML = html;
  }

  private _renderListAsync(): void {
    this._getTaskListData().then(response => {
      this._renderTaskList(response.value);
    });
    //}
  }

  private _renderInvoiceListAsync(): void {
    this._getInvoiceListData().then(response => {
      this._renderInvoiceList(response.value);
    });
    //}
  }


  public render(): void {
    //existing code
    this.domElement.innerHTML += `
      <div class="${styles.taskTab}">
       <div class="${styles.heading}"> Pending Submissions </div>
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.grid1}">
              <span class="${styles.title}">12 Days of pending timesheet</span>
              <div>
              <a href="https://aka.ms/spfx" class="${styles.button}">
                <span class="${styles.label}">Timesheet</span>
              </a>
              </div>
            </div>
             <div class="${styles.grid2}">
              <span class="${styles.title}">$25,000 Unreconciled expenses</span>
              <div>
              <a href="https://aka.ms/spfx" class="${styles.button}">
                <span class="${styles.label}">Expenses</span>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div class="${styles.row}">
        <div class="${styles.heading}"> Pending Approvals </div>
         <div class="${styles.subheading}">Purchased Order (${
      this._renderTaskList.length
    })</div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">PoNumber</th>
              <th scope="col">Description</th>
              <th scope="col">VendorName</th>
              <th scope="col">VendorNo</th>
              <th scope="col">TotalAmount</th>
              <th scope="col"></th>
            </tr>
          </thead>
            <tbody id="spTaskListContainer">
              ${this._renderListAsync()}
            </tbody>
        </table>
        </div>
          <div class="${styles.subheading}">Invoice (${
      this._renderInvoiceList.length
    })
      </div>
         <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">InvoiceNo</th>
              <th scope="col">PoNumber</th>
              <th scope="col">Description</th>
              <th scope="col">VendorName</th>
              <th scope="col">VendorNo</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="spInvoiceListContainer">
            ${this._renderInvoiceListAsync()}
          </tbody>
        </table>
      <div class="${styles.subheading}">Inventory (0)</div>
       </div>

       <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>`;
    // this._setButtonEventHandlers();
  }
  private _setButtonEventHandlers(): void {
    this.domElement
      .querySelector("#buttonReview")
      .addEventListener("click", () => {
        var PONumber = 739254;
        var vendorNo = 97547;
        let taskInfo = {
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
        microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
      });
  }
  private submitHandler(err, result) {
    if (result.action == "podecline") {
      let taskInfo = {
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
      let taskInfo = {
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

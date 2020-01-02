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
import {
  SPHttpClient,
  SPHttpClientResponse,
  SPHttpClientConfiguration
} from "@microsoft/sp-http";
import styles from "./TaskWebPart.module.scss";
import * as strings from "TaskWebPartStrings";
import * as microsoftTeams from "@microsoft/teams-js";
import { SPComponentLoader } from "@microsoft/sp-loader";
import { IframeHTMLAttributes } from "react";
microsoftTeams.initialize();
let poCount = 0;
let invoiceCount = 0;
let renderFlag = true;
export interface ITaskTabWebPartProps {
  description: string;
  POLength: number;
  InvoiceLentgh: number;
}

export interface ISPPOLists {
  value: ISPPODetail[];
}
export interface ISPPODetail {
  PONumber: string;
  InvoiceNo: string;
  ItemCode: string;
  ItemDescription: string;
  UnitPrice: string;
  Quantity: string;
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
  Title?: string;
  Id: number;
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
  Title?: string;
  Id: number;
  // Review;
}
export default class TaskTabWebPart extends BaseClientSideWebPart<
  ITaskTabWebPartProps
> {
  public constructor() {
    super();
    SPComponentLoader.loadCss(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    );
  }
  //Rendering TaskList data
  private _getTaskListData(): Promise<ISPTaskLists> {
    //Rest API to call SharePoint list
    var requestURL = this.context.pageContext.web.absoluteUrl;
    return this.context.spHttpClient
      .get(
        requestURL + `/_api/web/lists/GetByTitle('PurchaseOrders')/items`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  //Get PO Details List

  private _getPODetailList(): Promise<ISPPODetail> {
    //Rest API to call SharePoint list
    var requestURL = this.context.pageContext.web.absoluteUrl;
    return this.context.spHttpClient
      .get(
        requestURL + `/_api/web/lists/GetByTitle('PODetails')/items`,
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
    let poNumber = this.domElement.getElementsByTagName("tr");
    let vendorNo = this.domElement.getElementsByTagName("tr");
    poCount = items.length;
    items.forEach((item: ISPTaskList) => {
      html += `
            <tr>
              <td scope="row" class="poNumber">${item.PoNumber}</td>
              <td>${item.Description}</td>
              <td>${item.VendorName}</td>
              <td id="vendorNo">${item.InvoiceNo}</td>
              <td>&#8377; ${item.TotalAmount}</td>
              <td id="buttonReview" name="buttonReview" value=${item.PoNumber} alt=${item.InvoiceNo} class="${styles.review} reviewButton" id='review'>Review</td>
              </tr>
`;
      //this._setButtonEventHandlers();
    });

    //const reviewButton:Element = this.domElement.querySelector(".reviewButton");

    const listContainer: Element = this.domElement.querySelector(
      "#spTaskListContainer"
    );

    console.log(html);
    console.log(listContainer.innerHTML);
    listContainer.innerHTML = html;
    listContainer.addEventListener("click", () => {
      //this.showEvent(this);
      this.submitPurchaseOrder(event);
    });
  }

  //Rendering Invoice List
  private _renderInvoiceList(items: ISInvoiceList[]): void {
    let html: string = "";
    invoiceCount = items.length;
    items.forEach((item: ISInvoiceList) => {
      html += `
            <tr>
              <td scope="row">${item.Invoiceno_x002e_}</td>
              <td id="poNumber">${item.POno_x002e_}</td>
              <td>${item.Description}</td>
              <td>${item.Vendorname}</td>
              <td id="vendorNo">${item.Vendorno_x002e_}</td>
               <td>&#8377; ${item.Amount}</td>

               <td id="buttonReview" name="buttonReview"  value = ${item.POno_x002e_} alt=${item.Vendorno_x002e_} class="${styles.review} reviewButton" id='review'>Review</td>

               </tr>
`;
      //this._setButtonEventHandlers();
    });

    //const reviewButton:Element = this.domElement.querySelector(".reviewButton");

    const listContainer: Element = this.domElement.querySelector(
      "#spInvoiceListContainer"
    );

    console.log(html);
    console.log(listContainer.innerHTML);
    listContainer.innerHTML = html;
    listContainer.addEventListener("click", () => {
      //this.showEvent(this);
      this.submitPurchaseOrder(event);
    });
    //this._setButtonEventHandlers();
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
       <div class="${
         styles.heading
       }" style="padding-bottom: 20px !important;" id="${
      styles.ps
    }"> Pending submissions </div>
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.grid1}">
              <span class="${styles.title}">12 Days of pending timesheet</span>
              <div>
              <a class="${styles.button}">
                <span id="full-timesheet" class="${
                  styles.label
                }">Fill timesheet ></span>
              </a>
              </div>
            </div>
             <div class="${styles.grid2}">
              <span class="${styles.title}">$25,000 Unreconciled expenses</span>
              <div>
              <a href="https://aka.ms/spfx" class="${styles.button}">
                <span class="${styles.label}">Sumbit expenses ></span>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div class="${styles.row}">
        <div class="${styles.headingPending}"> Pending approvals </div>
         <div class="${styles.subheading}">Purchased order (${poCount})</div>
        <table class="${styles.container} table">
          <thead>
            <tr>
              <th scope="col">Po no.</th>
              <th scope="col"></th>
              <th scope="col">Description</th>
              <th scope="col">Vendor name</th>
              <th scope="col">Vendor no.</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
            <tbody id="spTaskListContainer">
               ${this._renderListAsync()}
            </tbody>
        </table>
        </div>
          <div class="${styles.subheading}">Invoice (${invoiceCount})
      </div>

         <table class="table">
          <thead>
            <tr>
              <th scope="col">Invoice no.</th>
              <th scope="col">Po no.</th>
              <th scope="col">Description</th>
              <th scope="col">Vendor name</th>
              <th scope="col">Vendor no.</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="spInvoiceListContainer">
            ${this._renderInvoiceListAsync()}

          </tbody>
        </table>
      <div class="${styles.subheading}">Inventory (0)</div>
       </div>`;
    this._setButtonEventHandlers();
  }

  private _setButtonEventHandlers(): void {
    let button = document.body.querySelector("#full-timesheet");
    button.addEventListener("click", () => {
      this.pendingDates();
    });
  }
  private pendingDates() {
    let taskInfoObj = {
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
  }
  private submitPurchaseOrder(event) {
    let PONumber = event.srcElement.attributes[2].value;
    let vendorNo = event.srcElement.attributes[3].value;
    let taskInfo = {
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
    this.deleteItem();
  }

  private getLatestItemId(): Promise<number> {
    return new Promise<number>(
      (
        resolve: (itemId: number) => void,
        reject: (error: any) => void
      ): void => {
        this.context.spHttpClient
          .get(
            `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('PurchaseOrders')/items?$orderby=Id desc&$top=1&$select=id`,
            SPHttpClient.configurations.v1,
            {
              headers: {
                Accept: "application/json;odata=nometadata",
                "odata-version": ""
              }
            }
          )
          .then(
            (
              response: SPHttpClientResponse
            ): Promise<{ value: { Id: number }[] }> => {
              return response.json();
            },
            (error: any): void => {
              reject(error);
            }
          )
          .then((response: { value: { Id: number }[] }): void => {
            if (response.value.length === 0) {
              resolve(-1);
            } else {
              resolve(response.value[0].Id);
            }
          });
      }
    );
  }
  //Update the existing list item
  private UpdateListItem() {
    let poNumber: number = undefined;
    let etag: string = undefined;
    this.context.spHttpClient.get(
      `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle("PurchaseOrders")/items(848930)`,
      SPHttpClient.configurations.v1,
      {
        headers: {
          Accept: "application/json;oData=nometadat",
          "odata-version": ""
        }
      }
    );
  }

  // private ReadListItem(){
  //   let poNumber:number = undefined;
  //   poNumber = 848930;
  //   this.context.spHttpClient.get(`${this.context.pageContext.absoluteUrl}/_api/web/lists/getByTitle("TaskList")/Items(848930)`,
  //   SPHttpClient.configurations.v1,
  //   Headers:{
  //     'Accept':'application/json;oData=nometadat',
  //     'odata-version':''
  //   });
  // }
  private deleteItem(): void {
    // this.updateStatus("Loading latest items...");
    let latestItemId: number = undefined;
    let etag: string = undefined;
    this.getLatestItemId()
      .then(
        (itemId: number): Promise<SPHttpClientResponse> => {
          if (itemId === -1) {
            throw new Error("No items found in the list");
          }

          latestItemId = itemId;
          // this.updateStatus(
          //   `Loading information about item ID: ${latestItemId}...`
          // );
          return this.context.spHttpClient.get(
            `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('PurchaseOrders')/items(${latestItemId})?$select=Id`,
            SPHttpClient.configurations.v1,
            {
              headers: {
                Accept: "application/json;odata=nometadata",
                "odata-version": ""
              }
            }
          );
        }
      )
      .then(
        (response: SPHttpClientResponse): Promise<ISPTaskList> => {
          etag = response.headers.get("ETag");
          return response.json();
        }
      )
      .then(
        (item: ISPTaskList): Promise<SPHttpClientResponse> => {
          //this.updateStatus(`Deleting item with ID: ${latestItemId}...`);
          return this.context.spHttpClient.post(
            `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('PurchaseOrders')/items(${latestItemId})`,
            SPHttpClient.configurations.v1,
            {
              headers: {
                Accept: "application/json;odata=nometadata",
                "Content-type": "application/json;odata=verbose",
                "odata-version": "",
                "IF-MATCH": etag,
                "X-HTTP-Method": "DELETE"
              }
            }
          );
        }
      )
      .then(
        (response: SPHttpClientResponse): void => {
          // this.updateStatus(
          //   `Item with ID: ${latestItemId} successfully deleted`
          // );
        },
        (error: any): void => {
          //this.updateStatus(`Error deleting item: ${error}`);
        }
      );
  }
  public submitHandler(err, result) {
    if (result.action == "podecline") {
      let taskInfo = {
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
    }

    if (result.action == "cancelPo") {
      microsoftTeams.tasks.submitTask();
    }

    if (result.action == "closePending") {
      microsoftTeams.tasks.submitTask();
    }
    if (result.action == "donedecline") {
      microsoftTeams.tasks.submitTask();
    } else {
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

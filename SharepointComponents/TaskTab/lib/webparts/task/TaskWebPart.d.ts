import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
import "jquery";
import "bootstrap";
export interface ITaskTabWebPartProps {
    description: string;
}
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
    PoStatus: string;
    Amount: string;
}
export default class TaskTabWebPart extends BaseClientSideWebPart<ITaskTabWebPartProps> {
    constructor();
    private _getTaskListData;
    private _getInvoiceListData;
    private updatePOStatus;
    private _renderTaskList;
    private _renderInvoiceList;
    private _renderListAsync;
    private _renderInvoiceListAsync;
    render(): void;
    private _setButtonEventHandlers;
    private pendingDates;
    private submitPurchaseOrder;
    private getLatestItemId;
    updatePoStatus(updateObj: any): void;
    submitHandler(err: any, result: any): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=TaskWebPart.d.ts.map
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
import "jquery";
export interface IToolTabWebPartProps {
    description: string;
}
export default class ToolTabWebPart extends BaseClientSideWebPart<IToolTabWebPartProps> {
    [x: string]: any;
    render(): void;
    _setButtonEventHandlers(): void;
    private createTicket;
    private visitorRequest;
    submitHandler(err: any, result: any): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ToolTabWebPart.d.ts.map
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
import "jquery";
export interface IToolTabWebPartProps {
    description: string;
}
export default class ToolTabWebPart extends BaseClientSideWebPart<IToolTabWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ToolTabWebPart.d.ts.map
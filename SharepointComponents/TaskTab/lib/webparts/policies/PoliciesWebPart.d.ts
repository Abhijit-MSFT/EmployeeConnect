import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
export interface IPoliciesWebPartProps {
    description: string;
}
export default class PoliciesWebPart extends BaseClientSideWebPart<IPoliciesWebPartProps> {
    constructor();
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=PoliciesWebPart.d.ts.map
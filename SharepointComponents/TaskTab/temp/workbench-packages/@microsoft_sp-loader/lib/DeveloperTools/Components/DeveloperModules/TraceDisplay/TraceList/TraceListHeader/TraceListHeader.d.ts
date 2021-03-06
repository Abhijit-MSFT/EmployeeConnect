/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceListHeader.tsx
 * Sub-component for TraceList. The header displays the currently selected filters.
 */
import * as React from 'react';
import { ITraceFilter } from '../../../../../Stores/TraceDisplayStore';
/**
 * Holds the state of displayed dropdowns that are shown
 * after clicking the filter icon for a particular column header.
 * By default all of the filter overlays are not displayed.
 *
 * Ex: clicking the filter icon for 'level' shows a dropdown
 * overlay that lets the user select with levels that would
 * like displayed in the TraceList.
 */
export interface IFilterToggles {
    level: false;
    scope: false;
    source: false;
}
export interface ITraceListHeaderState {
    filterToggles: IFilterToggles;
}
export interface ITraceListHeaderProps {
    filters: ITraceFilter;
}
export interface IFormEvent {
    target: {
        name: string;
        checked: boolean;
    };
}
export default class TraceListHeader extends React.Component<ITraceListHeaderProps, ITraceListHeaderState> {
    constructor(props: ITraceListHeaderProps);
    render(): React.ReactElement<ITraceListHeaderProps>;
    /**
     * Returns the current display style for the dropdown filter overlays.
     */
    private _getFilterStyleForColumn;
    /**
     * Inverts the display status (None or Block) for the dropdown overlay column
     * that has the corresponding title of the param 'columnID'. Leaves all other
     * dropdown overlays unchanged.
     *
     * Ex: If columnId is 'level' and the current overlay display style is 'None', then the
     * display style for the level overlay will be changed to 'Block' and the other overlays
     * ('scope', 'source') will remain as is.
     */
    private _toggleFilterStateForColumn;
    private _handleFilterChange;
}
//# sourceMappingURL=TraceListHeader.d.ts.map
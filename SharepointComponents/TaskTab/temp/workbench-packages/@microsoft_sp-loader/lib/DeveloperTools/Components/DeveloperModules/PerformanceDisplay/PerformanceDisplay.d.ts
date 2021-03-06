/**
 * @file PerformanceDisplay.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
import * as React from 'react';
import { IPerfItem } from '../../../DataProviders/PerformanceDisplayStateProvider';
export interface IPerformanceDisplayState {
    /**
     * Objects that contain the data points that will be displayed
     */
    perfItems: IPerfItem[];
    /**
     * Integer value representing the total loading time percieved by the user
     */
    eupl: number;
    /**
     * Integer value that gives the time in ms that the page started loading, measured from navigation start
     */
    startTime: number;
    /**
     * If an error has occurred, this will be set to a message detailing the nature of the error
     * The value is undefined if no error occured.
     */
    errorMessage?: string;
}
export interface IPerformanceDisplayProps {
}
export default class PerformanceDisplay extends React.Component<IPerformanceDisplayProps, IPerformanceDisplayState> {
    constructor(props: IPerformanceDisplayProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{}>;
    private _setState;
}
//# sourceMappingURL=PerformanceDisplay.d.ts.map
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceDisplayStore.ts
 */
import { _LogEvent } from '@microsoft/sp-diagnostics';
import BaseStore from './BaseStore';
export interface IMultiFilter {
    none: boolean;
    [key: string]: boolean;
}
export declare enum LogLevel {
    all = 0,
    verbose = 1,
    info = 2,
    warning = 3,
    error = 4
}
export interface ITraceFilter {
    level: IMultiFilter;
    source: IMultiFilter;
    scope: IMultiFilter;
}
/**
 *  Implementation for managing the data of user-selected filters and all trace data
 *  for a TraceDisplay.
 */
export declare class TraceDisplayStore extends BaseStore {
    private static _instance;
    private _traces;
    private _filter;
    static readonly instance: TraceDisplayStore;
    readonly traces: _LogEvent[];
    readonly currentFilter: ITraceFilter;
    constructor();
    applyTraceFilter(filter: ITraceFilter): void;
}
declare const _default: TraceDisplayStore;
export default _default;
//# sourceMappingURL=TraceDisplayStore.d.ts.map
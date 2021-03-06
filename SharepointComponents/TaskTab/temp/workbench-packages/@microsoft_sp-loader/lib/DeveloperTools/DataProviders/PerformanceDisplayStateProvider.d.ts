/**
 * @file PerformanceDisplayStore.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
import { IPerformanceDisplayState } from './../Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay';
/**
 * Interface to represent API calls obtained from the RumOne data
 */
export interface IAPICall {
    /**
     * String value that gives the duration in miliseconds of the API call
     */
    duration: number;
    /**
     * String that gives an ISO date value for the start time of the API call
     * Example: '2016-08-05T19:09:20.192Z'
     */
    startTime: number;
    /**
     * String that gives an ISO date value for the end time of the API call
     */
    endTime: number;
    /**
     * String that gives the name of the entity that made the API call
     * Example: httpClient
     */
    name: string;
}
/**
 * Interface to represent each performance data point
 */
export interface IPerfItem {
    /**
     * String ID that comes from the value given in the JSON data
     */
    id: string;
    /**
     *  Readable name to be displayed in the table to users
     */
    name: string;
    /**
     *  Start time in miliseconds of the event
     */
    startVal: number;
    /**
     *  Duration of the event in miliseconds.
     */
    duration: number;
    /**
     *  Loading time breakdown for web parts. Will be undefined for items that aren't web parts.
     */
    breakdown?: IWebPartBreakdown;
}
/**
 * Breakdown of web part loading time
 */
export interface IWebPartBreakdown {
    /**
     * Start and duration of the render time of the web part
     */
    render: IPerfTiming;
    /**
     * Array of API call response times
     */
    dataFetch?: IPerfTiming[];
    /**
     * Start and duration of module loading time
     */
    modulesLoaded?: IPerfTiming;
    /**
     * Start and duration of the web part initialization time
     */
    init?: IPerfTiming;
    /**
     * Start and duration of the web part loading delayed period
     */
    lazyLoading?: IPerfTiming;
}
/**
 * Used for performance data points to indicate when the loading started and how long it lasted.
 */
export interface IPerfTiming {
    /**
     * Time in miliseconds that the event started
     */
    startVal: number;
    /**
     * Time in miliseconds the the event lasted
     */
    duration: number;
}
/**
 * User Percieved Loading breakdown data
 */
export interface IEUPLBreakdown {
    /**
     * Time in miliseconds that the application took to initialize
     */
    appStart: number;
    /**
     * Time in miliseconds that it took to start sp-loader
     */
    spLoaderStart: number;
    /**
     * Time in miliseconds it took for the server to respond from the W3cNavigationStart event
     */
    w3cResponseEnd: number;
}
/**
 * This function parses through performance data and puts together some performance data (IPerfItem) objects for the
 * component to display. If errors are encountered, the _errorMessage variable is set and the function returns an
 * empty array. The component checks for the presence of an error message to determine if something went wrong.
 */
export declare function getState(): IPerformanceDisplayState;
//# sourceMappingURL=PerformanceDisplayStateProvider.d.ts.map
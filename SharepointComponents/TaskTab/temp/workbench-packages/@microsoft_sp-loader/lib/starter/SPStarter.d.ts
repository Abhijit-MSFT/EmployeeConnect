import { IBrowserCompatibility } from '@microsoft/sp-core-library';
import { IPreloadedData } from '../interfaces/IPreloadedData';
import { IDebugData } from '../debug/DebugManager';
/**
 * Provides information about a loader error.
 * Used with handleError() in order to present UI friendly error information.
 * @internal
 */
export interface IErrorInformation {
    /**
     * User friendly message for the error.
     * It should not include technical details, but a way for the user to work around the problem.
     * An example of that: "Please refresh the page" or "Please update your browser to the last version"
     */
    message: string;
    /**
     * Original error.
     */
    error?: Error;
    /**
     * Correlation id
     */
    correlationId?: string;
    /**
     * Operation that failed. This is used by our diagnostics.
     */
    operationName?: string;
}
/**
 * Bootstrapper for the application
 * @internal
 */
export default class SPStarter {
    private static _bundledComponents;
    private static _isTelemetryLoggingInRealTime;
    private static _realTimeProcessingWaitTime;
    /**
     * Sets a map with the bundled components. These components will be added to the component loader
     * during initialization, so they won't need to be loaded afterwards.
     * The map is of the form `componentId: string -> component: Object`
     *
     * @internal
     */
    static _setBundledComponents(bundledComponents: {
        [id: string]: Object;
    }): void;
    /**
     * This is called by the page scripts to start loading the framework. Do not call it from your own code.
     *
     * @param handleFailure - Error handler function provided by the server to execute if there is SPFx can't be loaded.
     *  It may redirect to an error page or log error data in the console.
     * @param debugData - This parameter is used when the loader initializes a debug loader and
     *  should never be provided by any external callers.
     */
    static start<TApplication>(preloadedData: IPreloadedData, handleFailure: (errorInformation: IErrorInformation) => void, debugData?: IDebugData): Promise<TApplication>;
    /**
     * Returns the support level for the browser.
     *
     * There are some specific browsers that we know don't work with SPFx, and some
     * features that the browser needs to support for SPFx. In those cases the page
     * shouldn't even try to load.
     *
     * This is intended to be called by the page scripts before start.
     * There is no need, and no use, to call it from your own code.
     */
    static getBrowserCompatibility(): IBrowserCompatibility;
    private static _logDataInRealTime;
    /**
     * Returns the bundled components variable, after checking it exists.
     * If it doesn't exist, it throws an error as SPFx cannot be initialized without it.
     */
    private static _getBundledComponents;
    private static _initializeEnvironment;
    private static _initializeTelemetry;
    private static _initializeFlightsAndKillswitches;
    private static _isQueryParameterTrue;
    private static _isConsoleLogEnabled;
    private static _isTelemetryDisabled;
    private static _useRequireJs;
    private static handleError;
    private static _isRedirectDisabled;
    private static _consoleErrorHandleFailure;
    private static _errorAspxHandleFailure;
    private static _extractCompletenessCallbackEndpoint;
}
//# sourceMappingURL=SPStarter.d.ts.map
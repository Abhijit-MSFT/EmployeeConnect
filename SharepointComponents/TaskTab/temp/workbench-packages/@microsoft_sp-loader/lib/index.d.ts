/**
 * The SharePoint Framework loader
 *
 * @remarks
 * Built on familiar standards such as RequireJS and WebPack,
 * the loader is the first part of the SharePoint Framework to load on a page.
 * It manages versioning and loading of client-side components.
 *
 * @packagedocumentation
 */
export { SPComponentLoader } from './loader/SPComponentLoader';
export { IDebugData as _IDebugData } from './debug/DebugManager';
export { ISPComponentLoader as _ISPComponentLoader } from './interfaces/ISPComponentLoader';
export { ILoadScriptOptions } from './interfaces/ILoadScriptOptions';
export { default as _SPStarter, IErrorInformation as _IErrorInformation } from './starter/SPStarter';
export { IPreloadedData as _IPreloadedData, IPreloadedCustomAction as _IPreloadedCustomAction } from './interfaces/IPreloadedData';
export { default as _SPLoaderFlights } from './utilities/SPLoaderFlights';
export { default as _ManifestStore, IManifestStoreEntry as _IManifestStoreEntry } from './stores/ManifestStore';
export { default as _ManifestProvider } from './stores/ManifestProvider';
//# sourceMappingURL=index.d.ts.map
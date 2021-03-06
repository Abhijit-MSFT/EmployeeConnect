/**
 * @file DeveloperToolsTab.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
import * as React from 'react';
import { IDeveloperToolsCompPropBase } from '../../DeveloperTools/IDeveloperToolsTab';
import { IDeveloperToolsTab } from '../IDeveloperToolsTab';
/**
 * Represents a developer tools tab. The developer console can be invoked with the "CTRL+F12"
 *  key combination.
 *
 * @internal
 */
export default class DeveloperToolsTab {
    private _title;
    private _componentInitializer;
    private _componentInitializerPromise;
    private _isLoading;
    private _component;
    private _loadError;
    constructor(parameters: IDeveloperToolsTab);
    readonly title: string;
    loadComponent: () => Promise<void>;
    readonly isLoading: boolean;
    readonly component: React.ComponentClass<IDeveloperToolsCompPropBase>;
    readonly loadError: Error;
}
//# sourceMappingURL=DeveloperToolsTab.d.ts.map
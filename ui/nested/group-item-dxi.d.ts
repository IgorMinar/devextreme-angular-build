/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from 'devextreme-angular/core';
import { CollectionNestedOption } from 'devextreme-angular/core';
export declare class DxiGroupItemComponent extends CollectionNestedOption {
    alignByColumn: boolean;
    column: string;
    customizeText: Function;
    displayFormat: string;
    name: string;
    showInColumn: string;
    showInGroupFooter: boolean;
    skipEmptyValues: boolean;
    summaryType: string;
    valueFormat: DevExpress.ui.format | string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiGroupItemModule {
}

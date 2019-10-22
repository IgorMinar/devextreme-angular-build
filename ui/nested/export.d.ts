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
import { NestedOptionHost } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
export declare class DxoExportComponent extends NestedOption {
    backgroundColor: string;
    enabled: boolean;
    fileName: string;
    formats: Array<string>;
    margin: number;
    printingEnabled: boolean;
    proxyUrl: string;
    allowExportSelectedData: boolean;
    customizeExcelCell: Function;
    excelFilterEnabled: boolean;
    excelWrapTextEnabled: boolean;
    ignoreExcelErrors: boolean;
    texts: {
        exportAll?: string;
        exportSelectedRows?: string;
        exportTo?: string;
    };
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoExportModule {
}

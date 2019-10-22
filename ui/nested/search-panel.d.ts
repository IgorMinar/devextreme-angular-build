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
import { EventEmitter } from '@angular/core';
import { NestedOptionHost } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
export declare class DxoSearchPanelComponent extends NestedOption {
    highlightCaseSensitive: boolean;
    highlightSearchText: boolean;
    placeholder: string;
    searchVisibleColumnsOnly: boolean;
    text: string;
    visible: boolean;
    width: number;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    textChange: EventEmitter<string>;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSearchPanelModule {
}

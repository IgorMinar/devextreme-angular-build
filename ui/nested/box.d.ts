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
import { EventEmitter, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from 'devextreme-angular/core';
import { DxoBoxOptions } from './base/box-options';
import { DxiItemComponent } from './item-dxi';
export declare class DxoBoxComponent extends DxoBoxOptions {
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemsChange: EventEmitter<Array<string | any | {
        baseSize?: number | string;
        box?: DevExpress.ui.dxBoxOptions;
        disabled?: boolean;
        html?: string;
        ratio?: number;
        shrink?: number;
        template?: any;
        text?: string;
        visible?: boolean;
    }>>;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoBoxModule {
}

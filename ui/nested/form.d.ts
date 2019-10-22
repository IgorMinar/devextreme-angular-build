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
import { NestedOptionHost } from 'devextreme-angular/core';
import { DxoFormOptions } from './base/form-options';
import { DxiItemComponent } from './item-dxi';
export declare class DxoFormComponent extends DxoFormOptions {
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    formDataChange: EventEmitter<any>;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFormModule {
}

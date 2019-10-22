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
import { DxoFilterBuilderOptions } from './base/filter-builder-options';
import { DxiCustomOperationComponent } from './custom-operation-dxi';
import { DxiFieldComponent } from './field-dxi';
export declare class DxoFilterBuilderComponent extends DxoFilterBuilderOptions {
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueChange: EventEmitter<any>;
    protected readonly _optionPath: string;
    customOperationsChildren: QueryList<DxiCustomOperationComponent>;
    fieldsChildren: QueryList<DxiFieldComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFilterBuilderModule {
}

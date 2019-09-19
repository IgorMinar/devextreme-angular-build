/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { EventEmitter, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiDataGridColumn } from './base/data-grid-column-dxi';
import { DxiButtonComponent } from './button-dxi';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
export declare class DxiColumnComponent extends DxiDataGridColumn {
    /**
     * A handler for the filterValueChange event.
     */
    filterValueChange: EventEmitter<any>;
    /**
     * A handler for the filterValuesChange event.
     */
    filterValuesChange: EventEmitter<Array<any>>;
    /**
     * A handler for the groupIndexChange event.
     */
    groupIndexChange: EventEmitter<number>;
    /**
     * A handler for the selectedFilterOperationChange event.
     */
    selectedFilterOperationChange: EventEmitter<string>;
    /**
     * A handler for the sortIndexChange event.
     */
    sortIndexChange: EventEmitter<number>;
    /**
     * A handler for the sortOrderChange event.
     */
    sortOrderChange: EventEmitter<string>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the visibleIndexChange event.
     */
    visibleIndexChange: EventEmitter<number>;
    protected readonly _optionPath: string;
    buttonsChildren: QueryList<DxiButtonComponent>;
    columnsChildren: QueryList<DxiColumnComponent>;
    validationRulesChildren: QueryList<DxiValidationRuleComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiColumnModule {
}

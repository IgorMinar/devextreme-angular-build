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

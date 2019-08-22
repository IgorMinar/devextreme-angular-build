import { EventEmitter, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFilterBuilderOptions } from './base/filter-builder-options';
import { DxiCustomOperationComponent } from './custom-operation-dxi';
import { DxiFieldComponent } from './field-dxi';
export declare class DxoFilterBuilderComponent extends DxoFilterBuilderOptions {
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<any>;
    protected readonly _optionPath: string;
    customOperationsChildren: QueryList<DxiCustomOperationComponent>;
    fieldsChildren: QueryList<DxiFieldComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFilterBuilderModule {
}

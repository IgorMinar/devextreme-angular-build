import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoPivotGridDataSource } from './base/pivot-grid-data-source';
import { DxiFieldComponent } from './field-dxi';
export declare class DxoDataSourceComponent extends DxoPivotGridDataSource {
    protected readonly _optionPath: string;
    fieldsChildren: QueryList<DxiFieldComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoDataSourceModule {
}

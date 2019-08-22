import { NestedOptionHost } from '../../core/nested-option';
import { DxiFilterBuilderField } from './base/filter-builder-field-dxi';
export declare class DxiFieldComponent extends DxiFilterBuilderField {
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiFieldModule {
}

import { NestedOptionHost } from '../../core/nested-option';
import { DxiFilterBuilderCustomOperation } from './base/filter-builder-custom-operation-dxi';
export declare class DxiCustomOperationComponent extends DxiFilterBuilderCustomOperation {
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiCustomOperationModule {
}

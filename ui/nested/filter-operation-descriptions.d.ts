import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoFilterOperationDescriptionsComponent extends NestedOption {
    between: string;
    contains: string;
    endsWith: string;
    equal: string;
    greaterThan: string;
    greaterThanOrEqual: string;
    isBlank: string;
    isNotBlank: string;
    lessThan: string;
    lessThanOrEqual: string;
    notContains: string;
    notEqual: string;
    startsWith: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFilterOperationDescriptionsModule {
}
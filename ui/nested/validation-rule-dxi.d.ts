import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiValidationRuleComponent extends CollectionNestedOption {
    message: string;
    trim: boolean;
    type: string;
    ignoreEmptyValue: boolean;
    max: Date | number;
    min: Date | number;
    reevaluate: boolean;
    validationCallback: Function;
    comparisonTarget: Function;
    comparisonType: string;
    pattern: RegExp | string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiValidationRuleModule {
}

import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormSimpleItem } from './base/form-simple-item';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
export declare class DxoFormItemComponent extends DxoFormSimpleItem {
    protected readonly _optionPath: string;
    validationRulesChildren: QueryList<DxiValidationRuleComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFormItemModule {
}

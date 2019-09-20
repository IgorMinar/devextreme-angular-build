/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
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

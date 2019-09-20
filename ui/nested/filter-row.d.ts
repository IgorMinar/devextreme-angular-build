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
import { NestedOption } from '../../core/nested-option';
export declare class DxoFilterRowComponent extends NestedOption {
    applyFilter: string;
    applyFilterText: string;
    betweenEndText: string;
    betweenStartText: string;
    operationDescriptions: {
        between?: string;
        contains?: string;
        endsWith?: string;
        equal?: string;
        greaterThan?: string;
        greaterThanOrEqual?: string;
        lessThan?: string;
        lessThanOrEqual?: string;
        notContains?: string;
        notEqual?: string;
        startsWith?: string;
    };
    resetOperationText: string;
    showAllText: string;
    showOperationChooser: boolean;
    visible: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFilterRowModule {
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { NestedOption } from 'devextreme-angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoFilterBuilderOptions extends NestedOption {
    accessKey: string;
    activeStateEnabled: boolean;
    allowHierarchicalFields: boolean;
    customOperations: Array<DevExpress.ui.dxFilterBuilderCustomOperation>;
    disabled: boolean;
    elementAttr: any;
    fields: Array<DevExpress.ui.dxFilterBuilderField>;
    filterOperationDescriptions: {
        between?: string;
        contains?: string;
        endsWith?: string;
        equal?: string;
        greaterThan?: string;
        greaterThanOrEqual?: string;
        isBlank?: string;
        isNotBlank?: string;
        lessThan?: string;
        lessThanOrEqual?: string;
        notContains?: string;
        notEqual?: string;
        startsWith?: string;
    };
    focusStateEnabled: boolean;
    groupOperationDescriptions: {
        and?: string;
        notAnd?: string;
        notOr?: string;
        or?: string;
    };
    groupOperations: Array<string>;
    height: number | Function | string;
    hint: string;
    hoverStateEnabled: boolean;
    maxGroupLevel: number;
    onContentReady: Function;
    onDisposing: Function;
    onEditorPrepared: Function;
    onEditorPreparing: Function;
    onInitialized: Function;
    onOptionChanged: Function;
    onValueChanged: Function;
    rtlEnabled: boolean;
    tabIndex: number;
    value: any;
    visible: boolean;
    width: number | Function | string;
}

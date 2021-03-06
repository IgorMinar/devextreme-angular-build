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
export declare abstract class DxoFormOptions extends NestedOption {
    accessKey: string;
    activeStateEnabled: boolean;
    alignItemLabels: boolean;
    alignItemLabelsInAllGroups: boolean;
    colCount: number | string;
    colCountByScreen: {
        lg?: number;
        md?: number;
        sm?: number;
        xs?: number;
    };
    customizeItem: Function;
    disabled: boolean;
    elementAttr: any;
    focusStateEnabled: boolean;
    formData: any;
    height: number | Function | string;
    hint: string;
    hoverStateEnabled: boolean;
    items: Array<DevExpress.ui.dxFormSimpleItem | DevExpress.ui.dxFormGroupItem | DevExpress.ui.dxFormTabbedItem | DevExpress.ui.dxFormEmptyItem | DevExpress.ui.dxFormButtonItem>;
    labelLocation: string;
    minColWidth: number;
    onContentReady: Function;
    onDisposing: Function;
    onEditorEnterKey: Function;
    onFieldDataChanged: Function;
    onInitialized: Function;
    onOptionChanged: Function;
    optionalMark: string;
    readOnly: boolean;
    requiredMark: string;
    requiredMessage: string;
    rtlEnabled: boolean;
    screenByWidth: Function;
    scrollingEnabled: boolean;
    showColonAfterLabel: boolean;
    showOptionalMark: boolean;
    showRequiredMark: boolean;
    showValidationSummary: boolean;
    tabIndex: number;
    validationGroup: string;
    visible: boolean;
    width: number | Function | string;
}

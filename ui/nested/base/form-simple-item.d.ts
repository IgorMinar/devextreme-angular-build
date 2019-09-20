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
import { NestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoFormSimpleItem extends NestedOption {
    colSpan: number;
    cssClass: string;
    dataField: string;
    editorOptions: any;
    editorType: string;
    helpText: string;
    isRequired: boolean;
    itemType: string;
    label: {
        alignment?: string;
        location?: string;
        showColon?: boolean;
        text?: string;
        visible?: boolean;
    };
    name: string;
    template: any;
    validationRules: Array<DevExpress.ui.RequiredRule | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule | DevExpress.ui.EmailRule>;
    visible: boolean;
    visibleIndex: number;
}

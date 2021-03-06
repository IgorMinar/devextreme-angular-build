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
import { CollectionNestedOption } from 'devextreme-angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxiButtonGroupItem extends CollectionNestedOption {
    disabled: boolean;
    html: string;
    icon: string;
    template: any;
    text: string;
    title: string;
    visible: boolean;
    onClick: Function | string;
    type: string;
    baseSize: number | string;
    box: DevExpress.ui.dxBoxOptions;
    ratio: number;
    shrink: number;
    hint: string;
    beginGroup: boolean;
    closeMenuOnClick: boolean;
    items: Array<DevExpress.ui.dxContextMenuItem | DevExpress.ui.dxFormSimpleItem | DevExpress.ui.dxFormGroupItem | DevExpress.ui.dxFormTabbedItem | DevExpress.ui.dxFormEmptyItem | DevExpress.ui.dxFormButtonItem | DevExpress.ui.dxMenuItem | DevExpress.ui.dxTreeViewItem>;
    selectable: boolean;
    selected: boolean;
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
    validationRules: Array<DevExpress.ui.RequiredRule | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule | DevExpress.ui.EmailRule>;
    visibleIndex: number;
    alignItemLabels: boolean;
    caption: string;
    colCount: number;
    colCountByScreen: {
        lg?: number;
        md?: number;
        sm?: number;
        xs?: number;
    };
    tabPanelOptions: DevExpress.ui.dxTabPanelOptions;
    tabs: Array<any | {
        alignItemLabels?: boolean;
        badge?: string;
        colCount?: number;
        colCountByScreen?: {
            lg?: number;
            md?: number;
            sm?: number;
            xs?: number;
        };
        disabled?: boolean;
        icon?: string;
        items?: Array<DevExpress.ui.dxFormSimpleItem | DevExpress.ui.dxFormGroupItem | DevExpress.ui.dxFormTabbedItem | DevExpress.ui.dxFormEmptyItem | DevExpress.ui.dxFormButtonItem>;
        tabTemplate?: any;
        template?: any;
        title?: string;
    }>;
    badge: string;
    tabTemplate: any;
    alignment: string;
    buttonOptions: DevExpress.ui.dxButtonOptions;
    horizontalAlignment: string;
    verticalAlignment: string;
    imageAlt: string;
    imageSrc: string;
    formatName: string;
    formatValues: Array<string | number | boolean>;
    locateInMenu: string;
    location: string | Array<any | {
        col?: number;
        colspan?: number;
        row?: number;
        rowspan?: number;
        screen?: string;
    }>;
    menuItemTemplate: any;
    options: any;
    showText: string;
    widget: string;
    key: string;
    showChevron: boolean;
    menuTemplate: any;
    heightRatio: number;
    widthRatio: number;
    expanded: boolean;
    hasItems: boolean;
    parentId: number | string;
}

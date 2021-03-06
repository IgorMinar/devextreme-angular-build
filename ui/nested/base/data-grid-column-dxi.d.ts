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
export declare abstract class DxiDataGridColumn extends CollectionNestedOption {
    alignment: string;
    allowEditing: boolean;
    allowExporting: boolean;
    allowFiltering: boolean;
    allowFixing: boolean;
    allowGrouping: boolean;
    allowHeaderFiltering: boolean;
    allowHiding: boolean;
    allowReordering: boolean;
    allowResizing: boolean;
    allowSearch: boolean;
    allowSorting: boolean;
    autoExpandGroup: boolean;
    buttons: Array<string | DevExpress.ui.dxDataGridColumnButton | DevExpress.ui.dxTreeListColumnButton>;
    calculateCellValue: Function;
    calculateDisplayValue: Function | string;
    calculateFilterExpression: Function;
    calculateGroupValue: Function | string;
    calculateSortValue: Function | string;
    caption: string;
    cellTemplate: any;
    columns: Array<DevExpress.ui.dxDataGridColumn | string | DevExpress.ui.dxTreeListColumn>;
    cssClass: string;
    customizeText: Function;
    dataField: string;
    dataType: string;
    editCellTemplate: any;
    editorOptions: any;
    encodeHtml: boolean;
    falseText: string;
    filterOperations: string | Array<string>;
    filterType: string;
    filterValue: any;
    filterValues: Array<any>;
    fixed: boolean;
    fixedPosition: string;
    format: DevExpress.ui.format | string;
    formItem: DevExpress.ui.dxFormSimpleItem;
    groupCellTemplate: any;
    groupIndex: number;
    headerCellTemplate: any;
    headerFilter: {
        allowSearch?: boolean;
        dataSource?: DevExpress.data.DataSourceOptions | Function | Array<any>;
        groupInterval?: number | string;
        height?: number;
        searchMode?: string;
        width?: number;
    };
    hidingPriority: number;
    isBand: boolean;
    lookup: {
        allowClearing?: boolean;
        dataSource?: DevExpress.data.DataSourceOptions | DevExpress.data.Store | Function | Array<any>;
        displayExpr?: Function | string;
        valueExpr?: string;
    };
    minWidth: number;
    name: string;
    ownerBand: number;
    renderAsync: boolean;
    selectedFilterOperation: string;
    setCellValue: Function;
    showEditorAlways: boolean;
    showInColumnChooser: boolean;
    showWhenGrouped: boolean;
    sortIndex: number;
    sortingMethod: Function;
    sortOrder: string;
    trueText: string;
    type: string;
    validationRules: Array<DevExpress.ui.RequiredRule | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule | DevExpress.ui.EmailRule>;
    visible: boolean;
    visibleIndex: number;
    width: number | string;
}

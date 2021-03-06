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
export declare abstract class DxoPivotGridDataSource extends NestedOption {
    fields: Array<any | {
        allowCrossGroupCalculation?: boolean;
        allowExpandAll?: boolean;
        allowFiltering?: boolean;
        allowSorting?: boolean;
        allowSortingBySummary?: boolean;
        area?: string;
        areaIndex?: number;
        calculateCustomSummary?: Function;
        calculateSummaryValue?: Function;
        caption?: string;
        customizeText?: Function;
        dataField?: string;
        dataType?: string;
        displayFolder?: string;
        expanded?: boolean;
        filterType?: string;
        filterValues?: Array<any>;
        format?: DevExpress.ui.format | string;
        groupIndex?: number;
        groupInterval?: number | string;
        groupName?: string;
        headerFilter?: {
            allowSearch?: boolean;
            height?: number;
            width?: number;
        };
        isMeasure?: boolean;
        precision?: number;
        runningTotal?: string;
        selector?: Function;
        showGrandTotals?: boolean;
        showTotals?: boolean;
        showValues?: boolean;
        sortBy?: string;
        sortBySummaryField?: string;
        sortBySummaryPath?: Array<number | string>;
        sortingMethod?: Function;
        sortOrder?: string;
        summaryDisplayMode?: string;
        summaryType?: string;
        visible?: boolean;
        width?: number;
        wordWrapEnabled?: boolean;
    }>;
    filter: any;
    onChanged: Function;
    onFieldsPrepared: Function;
    onLoadError: Function;
    onLoadingChanged: Function;
    remoteOperations: boolean;
    retrieveFields: boolean;
    store: DevExpress.data.Store | DevExpress.data.StoreOptions | DevExpress.data.XmlaStore | DevExpress.data.XmlaStoreOptions | {
        type?: string;
    } | Array<any>;
}

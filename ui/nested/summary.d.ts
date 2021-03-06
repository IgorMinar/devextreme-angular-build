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
import { QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
import { DxiGroupItemComponent } from './group-item-dxi';
import { DxiTotalItemComponent } from './total-item-dxi';
export declare class DxoSummaryComponent extends NestedOption {
    calculateCustomSummary: Function;
    groupItems: Array<any | {
        alignByColumn?: boolean;
        column?: string;
        customizeText?: Function;
        displayFormat?: string;
        name?: string;
        showInColumn?: string;
        showInGroupFooter?: boolean;
        skipEmptyValues?: boolean;
        summaryType?: string;
        valueFormat?: DevExpress.ui.format | string;
    }>;
    recalculateWhileEditing: boolean;
    skipEmptyValues: boolean;
    texts: {
        avg?: string;
        avgOtherColumn?: string;
        count?: string;
        max?: string;
        maxOtherColumn?: string;
        min?: string;
        minOtherColumn?: string;
        sum?: string;
        sumOtherColumn?: string;
    };
    totalItems: Array<any | {
        alignment?: string;
        column?: string;
        cssClass?: string;
        customizeText?: Function;
        displayFormat?: string;
        name?: string;
        showInColumn?: string;
        skipEmptyValues?: boolean;
        summaryType?: string;
        valueFormat?: DevExpress.ui.format | string;
    }>;
    protected readonly _optionPath: string;
    groupItemsChildren: QueryList<DxiGroupItemComponent>;
    totalItemsChildren: QueryList<DxiTotalItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSummaryModule {
}

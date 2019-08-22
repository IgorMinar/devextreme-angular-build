import { QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
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

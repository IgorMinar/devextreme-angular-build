import { EventEmitter, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoBoxOptions } from './base/box-options';
import { DxiItemComponent } from './item-dxi';
export declare class DxoBoxComponent extends DxoBoxOptions {
    /**
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<Array<string | any | {
        baseSize?: number | string;
        box?: DevExpress.ui.dxBoxOptions;
        disabled?: boolean;
        html?: string;
        ratio?: number;
        shrink?: number;
        template?: any;
        text?: string;
        visible?: boolean;
    }>>;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoBoxModule {
}

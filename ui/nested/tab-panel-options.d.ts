import { EventEmitter, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoTabPanelOptions } from './base/tab-panel-options';
import { DxiItemComponent } from './item-dxi';
export declare class DxoTabPanelOptionsComponent extends DxoTabPanelOptions {
    /**
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<Array<string | any | {
        badge?: string;
        disabled?: boolean;
        html?: string;
        icon?: string;
        tabTemplate?: any;
        template?: any;
        text?: string;
        title?: string;
    }>>;
    /**
     * A handler for the selectedIndexChange event.
     */
    selectedIndexChange: EventEmitter<number>;
    /**
     * A handler for the selectedItemChange event.
     */
    selectedItemChange: EventEmitter<any>;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoTabPanelOptionsModule {
}

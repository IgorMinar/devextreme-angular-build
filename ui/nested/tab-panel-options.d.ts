/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
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

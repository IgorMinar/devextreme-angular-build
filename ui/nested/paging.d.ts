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
import { EventEmitter } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoPagingComponent extends NestedOption {
    enabled: boolean;
    pageIndex: number;
    pageSize: number;
    /**
     * A handler for the pageIndexChange event.
     */
    pageIndexChange: EventEmitter<number>;
    /**
     * A handler for the pageSizeChange event.
     */
    pageSizeChange: EventEmitter<number>;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoPagingModule {
}

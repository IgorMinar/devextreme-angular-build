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
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoHeaderFilterComponent extends NestedOption {
    allowSearch: boolean;
    dataSource: DevExpress.data.DataSourceOptions | Function | Array<any>;
    groupInterval: number | string;
    height: number;
    searchMode: string;
    width: number;
    searchTimeout: number;
    texts: {
        cancel?: string;
        emptyValue?: string;
        ok?: string;
    };
    visible: boolean;
    showRelevantValues: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoHeaderFilterModule {
}

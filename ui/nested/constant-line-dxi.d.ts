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
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiConstantLineComponent extends CollectionNestedOption {
    color: string;
    dashStyle: string;
    displayBehindSeries: boolean;
    extendAxis: boolean;
    label: {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        position?: string;
        text?: string;
        verticalAlignment?: string;
        visible?: boolean;
    } | {
        font?: DevExpress.viz.Font;
        text?: string;
        visible?: boolean;
    };
    paddingLeftRight: number;
    paddingTopBottom: number;
    value: Date | number | string;
    width: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiConstantLineModule {
}

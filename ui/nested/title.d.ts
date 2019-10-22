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
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
export declare class DxoTitleComponent extends NestedOption {
    font: DevExpress.viz.Font;
    horizontalAlignment: string;
    margin: {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    } | number;
    placeholderSize: number;
    subtitle: string | {
        font?: DevExpress.viz.Font;
        offset?: number;
        text?: string;
    } | {
        font?: DevExpress.viz.Font;
        offset?: number;
        text?: string;
        textOverflow?: string;
        wordWrap?: string;
    };
    text: string;
    verticalAlignment: string;
    textOverflow: string;
    wordWrap: string;
    alignment: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoTitleModule {
}

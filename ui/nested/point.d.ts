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
import { NestedOptionHost } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
export declare class DxoPointComponent extends NestedOption {
    border: {
        color?: string;
        visible?: boolean;
        width?: number;
    };
    color: string;
    hoverMode: string;
    hoverStyle: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        size?: number;
    };
    image: string | {
        height?: number | {
            rangeMaxPoint?: number;
            rangeMinPoint?: number;
        };
        url?: string | {
            rangeMaxPoint?: string;
            rangeMinPoint?: string;
        };
        width?: number | {
            rangeMaxPoint?: number;
            rangeMinPoint?: number;
        };
    } | {
        height?: number;
        url?: string;
        width?: number;
    };
    selectionMode: string;
    selectionStyle: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        size?: number;
    };
    size: number;
    symbol: string;
    visible: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoPointModule {
}

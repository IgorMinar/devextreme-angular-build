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
import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiRangeComponent } from './range-dxi';
export declare class DxoRangeContainerComponent extends NestedOption {
    backgroundColor: string;
    offset: number;
    orientation: string;
    palette: string | Array<string>;
    paletteExtensionMode: string;
    ranges: Array<any | {
        color?: string;
        endValue?: number;
        startValue?: number;
    }>;
    width: number | {
        end?: number;
        start?: number;
    };
    horizontalOrientation: string;
    verticalOrientation: string;
    protected readonly _optionPath: string;
    rangesChildren: QueryList<DxiRangeComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoRangeContainerModule {
}

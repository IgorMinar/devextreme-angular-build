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
import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiSeriesComponent } from './series-dxi';
export declare class DxoChartComponent extends NestedOption {
    barGroupPadding: number;
    barGroupWidth: number;
    barWidth: number;
    bottomIndent: number;
    commonSeriesSettings: any;
    dataPrepareSettings: {
        checkTypeForAllData?: boolean;
        convertToAxisDataType?: boolean;
        sortingMethod?: boolean | Function;
    };
    equalBarWidth: boolean;
    maxBubbleSize: number;
    minBubbleSize: number;
    negativesAsZeroes: boolean;
    palette: string | Array<string>;
    paletteExtensionMode: string;
    series: any | Array<any>;
    seriesTemplate: {
        customizeSeries?: Function;
        nameField?: string;
    };
    topIndent: number;
    useAggregation: boolean;
    valueAxis: {
        inverted?: boolean;
        logarithmBase?: number;
        max?: number;
        min?: number;
        type?: string;
        valueType?: string;
    };
    protected readonly _optionPath: string;
    seriesChildren: QueryList<DxiSeriesComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoChartModule {
}

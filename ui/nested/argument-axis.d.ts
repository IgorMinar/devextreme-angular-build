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
import { EventEmitter, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiBreakComponent } from './break-dxi';
import { DxiConstantLineComponent } from './constant-line-dxi';
import { DxiStripComponent } from './strip-dxi';
export declare class DxoArgumentAxisComponent extends NestedOption {
    aggregationGroupWidth: number;
    aggregationInterval: number | string | {
        days?: number;
        hours?: number;
        milliseconds?: number;
        minutes?: number;
        months?: number;
        quarters?: number;
        seconds?: number;
        weeks?: number;
        years?: number;
    };
    allowDecimals: boolean;
    argumentType: string;
    axisDivisionFactor: number;
    breaks: Array<DevExpress.viz.ScaleBreak>;
    breakStyle: {
        color?: string;
        line?: string;
        width?: number;
    };
    categories: Array<number | string | Date>;
    color: string;
    constantLines: Array<any | {
        color?: string;
        dashStyle?: string;
        displayBehindSeries?: boolean;
        extendAxis?: boolean;
        label?: {
            font?: DevExpress.viz.Font;
            horizontalAlignment?: string;
            position?: string;
            text?: string;
            verticalAlignment?: string;
            visible?: boolean;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        value?: Date | number | string;
        width?: number;
    } | {
        color?: string;
        dashStyle?: string;
        displayBehindSeries?: boolean;
        extendAxis?: boolean;
        label?: {
            font?: DevExpress.viz.Font;
            text?: string;
            visible?: boolean;
        };
        value?: Date | number | string;
        width?: number;
    }>;
    constantLineStyle: {
        color?: string;
        dashStyle?: string;
        label?: {
            font?: DevExpress.viz.Font;
            horizontalAlignment?: string;
            position?: string;
            verticalAlignment?: string;
            visible?: boolean;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        width?: number;
    } | {
        color?: string;
        dashStyle?: string;
        label?: {
            font?: DevExpress.viz.Font;
            visible?: boolean;
        };
        width?: number;
    };
    discreteAxisDivisionMode: string;
    endOnTick: boolean;
    grid: {
        color?: string;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    holidays: Array<Date | string | number>;
    hoverMode: string;
    inverted: boolean;
    label: {
        alignment?: string;
        customizeHint?: Function;
        customizeText?: Function;
        displayMode?: string;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        indentFromAxis?: number;
        overlappingBehavior?: string;
        rotationAngle?: number;
        staggeringSpacing?: number;
        textOverflow?: string;
        visible?: boolean;
        wordWrap?: string;
    } | {
        customizeHint?: Function;
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        indentFromAxis?: number;
        overlappingBehavior?: string;
        visible?: boolean;
    };
    logarithmBase: number;
    max: Date | number | string;
    maxValueMargin: number;
    min: Date | number | string;
    minorGrid: {
        color?: string;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    minorTick: {
        color?: string;
        length?: number;
        opacity?: number;
        shift?: number;
        visible?: boolean;
        width?: number;
    };
    minorTickCount: number;
    minorTickInterval: number | string | {
        days?: number;
        hours?: number;
        milliseconds?: number;
        minutes?: number;
        months?: number;
        quarters?: number;
        seconds?: number;
        weeks?: number;
        years?: number;
    };
    minValueMargin: number;
    minVisualRangeLength: number | string | {
        days?: number;
        hours?: number;
        milliseconds?: number;
        minutes?: number;
        months?: number;
        quarters?: number;
        seconds?: number;
        weeks?: number;
        years?: number;
    };
    opacity: number;
    placeholderSize: number;
    position: string;
    singleWorkdays: Array<Date | string | number>;
    strips: Array<any | {
        color?: string;
        endValue?: Date | number | string;
        label?: {
            font?: DevExpress.viz.Font;
            horizontalAlignment?: string;
            text?: string;
            verticalAlignment?: string;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        startValue?: Date | number | string;
    } | {
        color?: string;
        endValue?: Date | number | string;
        label?: {
            font?: DevExpress.viz.Font;
            text?: string;
        };
        startValue?: Date | number | string;
    }>;
    stripStyle: {
        label?: {
            font?: DevExpress.viz.Font;
            horizontalAlignment?: string;
            verticalAlignment?: string;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
    } | {
        label?: {
            font?: DevExpress.viz.Font;
        };
    };
    tick: {
        color?: string;
        length?: number;
        opacity?: number;
        shift?: number;
        visible?: boolean;
        width?: number;
    };
    tickInterval: number | string | {
        days?: number;
        hours?: number;
        milliseconds?: number;
        minutes?: number;
        months?: number;
        quarters?: number;
        seconds?: number;
        weeks?: number;
        years?: number;
    };
    title: string | {
        alignment?: string;
        font?: DevExpress.viz.Font;
        margin?: number;
        text?: string;
        textOverflow?: string;
        wordWrap?: string;
    };
    type: string;
    valueMarginsEnabled: boolean;
    visible: boolean;
    visualRange: DevExpress.viz.VizRange | Array<number | string | Date>;
    visualRangeUpdateMode: string;
    wholeRange: DevExpress.viz.VizRange | Array<number | string | Date>;
    width: number;
    workdaysOnly: boolean;
    workWeek: Array<number>;
    firstPointOnStartAngle: boolean;
    originValue: number;
    period: number;
    startAngle: number;
    /**
     * A handler for the visualRangeChange event.
     */
    visualRangeChange: EventEmitter<DevExpress.viz.VizRange | Array<number | string | Date>>;
    protected readonly _optionPath: string;
    breaksChildren: QueryList<DxiBreakComponent>;
    constantLinesChildren: QueryList<DxiConstantLineComponent>;
    stripsChildren: QueryList<DxiStripComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoArgumentAxisModule {
}

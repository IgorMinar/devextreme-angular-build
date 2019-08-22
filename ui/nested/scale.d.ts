import { QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiBreakComponent } from './break-dxi';
export declare class DxoScaleComponent extends NestedOption {
    allowDecimals: boolean;
    customMinorTicks: Array<number>;
    customTicks: Array<number>;
    endValue: number | Date | string;
    label: {
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        hideFirstOrLast?: string;
        indentFromTick?: number;
        overlappingBehavior?: string;
        useRangeColors?: boolean;
        visible?: boolean;
    } | {
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        indentFromTick?: number;
        overlappingBehavior?: string;
        useRangeColors?: boolean;
        visible?: boolean;
    } | {
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        overlappingBehavior?: string;
        topIndent?: number;
        visible?: boolean;
    };
    minorTick: {
        color?: string;
        length?: number;
        opacity?: number;
        visible?: boolean;
        width?: number;
    } | {
        color?: string;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
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
    orientation: string;
    scaleDivisionFactor: number;
    startValue: number | Date | string;
    tick: {
        color?: string;
        length?: number;
        opacity?: number;
        visible?: boolean;
        width?: number;
    } | {
        color?: string;
        opacity?: number;
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
    horizontalOrientation: string;
    verticalOrientation: string;
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
    breaks: Array<DevExpress.viz.ScaleBreak>;
    breakStyle: {
        color?: string;
        line?: string;
        width?: number;
    };
    categories: Array<number | string | Date>;
    endOnTick: boolean;
    holidays: Array<Date | string | number>;
    logarithmBase: number;
    marker: {
        label?: {
            customizeText?: Function;
            format?: DevExpress.ui.format | string;
        };
        separatorHeight?: number;
        textLeftIndent?: number;
        textTopIndent?: number;
        topIndent?: number;
        visible?: boolean;
    };
    maxRange: number | string | {
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
    minorTickCount: number;
    minRange: number | string | {
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
    placeholderHeight: number;
    showCustomBoundaryTicks: boolean;
    singleWorkdays: Array<Date | string | number>;
    type: string;
    valueType: string;
    workdaysOnly: boolean;
    workWeek: Array<number>;
    protected readonly _optionPath: string;
    breaksChildren: QueryList<DxiBreakComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoScaleModule {
}

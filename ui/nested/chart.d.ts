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

import { NestedOptionHost } from '../../core/nested-option';
import { DxiChartSeries } from './base/chart-series-dxi';
export declare class DxiSeriesComponent extends DxiChartSeries {
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiSeriesModule {
}

import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoAggregationIntervalComponent extends NestedOption {
    days: number;
    hours: number;
    milliseconds: number;
    minutes: number;
    months: number;
    quarters: number;
    seconds: number;
    weeks: number;
    years: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoAggregationIntervalModule {
}

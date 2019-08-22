import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiSortByGroupSummaryInfoComponent extends CollectionNestedOption {
    groupColumn: string;
    sortOrder: string;
    summaryItem: number | string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiSortByGroupSummaryInfoModule {
}

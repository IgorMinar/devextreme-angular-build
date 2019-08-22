import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoGroupingComponent extends NestedOption {
    allowCollapsing: boolean;
    autoExpandAll: boolean;
    contextMenuEnabled: boolean;
    expandMode: string;
    texts: {
        groupByThisColumn?: string;
        groupContinuedMessage?: string;
        groupContinuesMessage?: string;
        ungroup?: string;
        ungroupAll?: string;
    };
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoGroupingModule {
}

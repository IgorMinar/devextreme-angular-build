import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoSmallValuesGroupingComponent extends NestedOption {
    groupName: string;
    mode: string;
    threshold: number;
    topCount: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSmallValuesGroupingModule {
}

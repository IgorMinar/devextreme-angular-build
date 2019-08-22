import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoFilterRowComponent extends NestedOption {
    applyFilter: string;
    applyFilterText: string;
    betweenEndText: string;
    betweenStartText: string;
    operationDescriptions: {
        between?: string;
        contains?: string;
        endsWith?: string;
        equal?: string;
        greaterThan?: string;
        greaterThanOrEqual?: string;
        lessThan?: string;
        lessThanOrEqual?: string;
        notContains?: string;
        notEqual?: string;
        startsWith?: string;
    };
    resetOperationText: string;
    showAllText: string;
    showOperationChooser: boolean;
    visible: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFilterRowModule {
}

import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoRemoteOperationsComponent extends NestedOption {
    filtering: boolean;
    grouping: boolean;
    groupPaging: boolean;
    paging: boolean;
    sorting: boolean;
    summary: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoRemoteOperationsModule {
}

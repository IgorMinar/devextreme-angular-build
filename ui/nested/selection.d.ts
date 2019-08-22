import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoSelectionComponent extends NestedOption {
    allowSelectAll: boolean;
    deferred: boolean;
    mode: string;
    selectAllMode: string;
    showCheckBoxesMode: string;
    recursive: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSelectionModule {
}

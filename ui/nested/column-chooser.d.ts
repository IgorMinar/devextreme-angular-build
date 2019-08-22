import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoColumnChooserComponent extends NestedOption {
    allowSearch: boolean;
    emptyPanelText: string;
    enabled: boolean;
    height: number;
    mode: string;
    searchTimeout: number;
    title: string;
    width: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoColumnChooserModule {
}

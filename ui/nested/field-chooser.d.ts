import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoFieldChooserComponent extends NestedOption {
    allowSearch: boolean;
    applyChangesMode: string;
    enabled: boolean;
    height: number;
    layout: number | string;
    searchTimeout: number;
    texts: {
        allFields?: string;
        columnFields?: string;
        dataFields?: string;
        filterFields?: string;
        rowFields?: string;
    };
    title: string;
    width: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFieldChooserModule {
}

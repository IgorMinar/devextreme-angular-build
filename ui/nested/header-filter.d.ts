import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoHeaderFilterComponent extends NestedOption {
    allowSearch: boolean;
    dataSource: DevExpress.data.DataSourceOptions | Function | Array<any>;
    groupInterval: number | string;
    height: number;
    searchMode: string;
    width: number;
    searchTimeout: number;
    texts: {
        cancel?: string;
        emptyValue?: string;
        ok?: string;
    };
    visible: boolean;
    showRelevantValues: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoHeaderFilterModule {
}

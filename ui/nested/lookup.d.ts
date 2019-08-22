import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoLookupComponent extends NestedOption {
    allowClearing: boolean;
    dataSource: DevExpress.data.DataSourceOptions | DevExpress.data.Store | Function | Array<any>;
    displayExpr: Function | string;
    valueExpr: string | Function;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoLookupModule {
}

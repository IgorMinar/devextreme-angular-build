import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiResourceComponent extends CollectionNestedOption {
    allowMultiple: boolean;
    colorExpr: string;
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    displayExpr: Function | string;
    fieldExpr: string;
    label: string;
    useColorAsDefault: boolean;
    valueExpr: Function | string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiResourceModule {
}

import { CollectionNestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxiHtmlEditorMention extends CollectionNestedOption {
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | Array<string>;
    displayExpr: Function | string;
    itemTemplate: any;
    marker: string;
    minSearchLength: number;
    searchExpr: Function | Array<Function>;
    searchTimeout: number;
    template: any;
    valueExpr: Function | string;
}

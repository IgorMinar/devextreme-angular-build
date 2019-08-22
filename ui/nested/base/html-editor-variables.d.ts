import { NestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoHtmlEditorVariables extends NestedOption {
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string>;
    escapeChar: string | Array<string>;
}

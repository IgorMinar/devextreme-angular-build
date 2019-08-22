import { NestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoBoxOptions extends NestedOption {
    align: string;
    crossAlign: string;
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>;
    direction: string;
    disabled: boolean;
    elementAttr: any;
    height: number | Function | string;
    hoverStateEnabled: boolean;
    itemHoldTimeout: number;
    items: Array<string | any | {
        baseSize?: number | string;
        box?: DevExpress.ui.dxBoxOptions;
        disabled?: boolean;
        html?: string;
        ratio?: number;
        shrink?: number;
        template?: any;
        text?: string;
        visible?: boolean;
    }>;
    itemTemplate: any;
    onContentReady: Function;
    onDisposing: Function;
    onInitialized: Function;
    onItemClick: Function | string;
    onItemContextMenu: Function;
    onItemHold: Function;
    onItemRendered: Function;
    onOptionChanged: Function;
    rtlEnabled: boolean;
    visible: boolean;
    width: number | Function | string;
}

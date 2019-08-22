import { NestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoHtmlEditorToolbar extends NestedOption {
    container: Element | JQuery;
    items: Array<DevExpress.ui.dxHtmlEditorToolbarItem | string>;
}

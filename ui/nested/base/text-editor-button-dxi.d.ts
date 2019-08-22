import { CollectionNestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxiTextEditorButton extends CollectionNestedOption {
    location: string;
    name: string;
    options: DevExpress.ui.dxButtonOptions;
    cssClass: string;
    hint: string;
    icon: string;
    onClick: Function | string;
    template: any;
    text: string;
    visible: boolean | Function;
}

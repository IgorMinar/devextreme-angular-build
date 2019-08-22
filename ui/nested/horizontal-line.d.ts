import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoHorizontalLineComponent extends NestedOption {
    color: string;
    dashStyle: string;
    label: {
        backgroundColor?: string;
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        visible?: boolean;
    };
    opacity: number;
    visible: boolean;
    width: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoHorizontalLineModule {
}

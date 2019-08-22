import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoGroupComponent extends NestedOption {
    border: {
        color?: string;
        width?: number;
    };
    color: string;
    headerHeight: number;
    hoverEnabled: boolean;
    hoverStyle: {
        border?: {
            color?: string;
            width?: number;
        };
        color?: string;
    };
    label: {
        font?: DevExpress.viz.Font;
        textOverflow?: string;
        visible?: boolean;
    };
    selectionStyle: {
        border?: {
            color?: string;
            width?: number;
        };
        color?: string;
    };
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoGroupModule {
}

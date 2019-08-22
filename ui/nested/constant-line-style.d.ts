import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoConstantLineStyleComponent extends NestedOption {
    color: string;
    dashStyle: string;
    label: {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        position?: string;
        verticalAlignment?: string;
        visible?: boolean;
    } | {
        font?: DevExpress.viz.Font;
        position?: string;
        visible?: boolean;
    } | {
        font?: DevExpress.viz.Font;
        visible?: boolean;
    };
    paddingLeftRight: number;
    paddingTopBottom: number;
    width: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoConstantLineStyleModule {
}

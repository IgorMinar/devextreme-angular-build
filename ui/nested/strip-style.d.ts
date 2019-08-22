import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoStripStyleComponent extends NestedOption {
    label: {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        verticalAlignment?: string;
    } | {
        font?: DevExpress.viz.Font;
    };
    paddingLeftRight: number;
    paddingTopBottom: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoStripStyleModule {
}

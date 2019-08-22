import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiStripComponent extends CollectionNestedOption {
    color: string;
    endValue: Date | number | string;
    label: {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        text?: string;
        verticalAlignment?: string;
    } | {
        font?: DevExpress.viz.Font;
        text?: string;
    };
    paddingLeftRight: number;
    paddingTopBottom: number;
    startValue: Date | number | string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiStripModule {
}

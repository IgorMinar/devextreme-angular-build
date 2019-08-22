import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiConstantLineComponent extends CollectionNestedOption {
    color: string;
    dashStyle: string;
    displayBehindSeries: boolean;
    extendAxis: boolean;
    label: {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        position?: string;
        text?: string;
        verticalAlignment?: string;
        visible?: boolean;
    } | {
        font?: DevExpress.viz.Font;
        text?: string;
        visible?: boolean;
    };
    paddingLeftRight: number;
    paddingTopBottom: number;
    value: Date | number | string;
    width: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiConstantLineModule {
}

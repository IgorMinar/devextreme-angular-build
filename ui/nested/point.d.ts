import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoPointComponent extends NestedOption {
    border: {
        color?: string;
        visible?: boolean;
        width?: number;
    };
    color: string;
    hoverMode: string;
    hoverStyle: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        size?: number;
    };
    image: string | {
        height?: number | {
            rangeMaxPoint?: number;
            rangeMinPoint?: number;
        };
        url?: string | {
            rangeMaxPoint?: string;
            rangeMinPoint?: string;
        };
        width?: number | {
            rangeMaxPoint?: number;
            rangeMinPoint?: number;
        };
    } | {
        height?: number;
        url?: string;
        width?: number;
    };
    selectionMode: string;
    selectionStyle: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        size?: number;
    };
    size: number;
    symbol: string;
    visible: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoPointModule {
}

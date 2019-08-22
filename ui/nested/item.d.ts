import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoItemComponent extends NestedOption {
    border: {
        color?: string;
        visible?: boolean;
        width?: number;
    };
    hoverStyle: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        hatching?: {
            direction?: string;
            opacity?: number;
            step?: number;
            width?: number;
        };
    };
    selectionStyle: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        hatching?: {
            direction?: string;
            opacity?: number;
            step?: number;
            width?: number;
        };
    };
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoItemModule {
}

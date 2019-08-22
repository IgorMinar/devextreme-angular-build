import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoNodeComponent extends NestedOption {
    border: {
        color?: string;
        visible?: boolean;
        width?: number;
    };
    color: string;
    hoverStyle: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        hatching?: {
            direction?: string;
            opacity?: number;
            step?: number;
            width?: number;
        };
        opacity?: number;
    };
    opacity: number;
    padding: number;
    width: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoNodeModule {
}

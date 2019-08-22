import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoHoverStyleComponent extends NestedOption {
    border: {
        color?: string;
        dashStyle?: string;
        visible?: boolean;
        width?: number;
    } | {
        color?: string;
        visible?: boolean;
        width?: number;
    } | {
        color?: string;
        width?: number;
    };
    color: string;
    dashStyle: string;
    hatching: {
        direction?: string;
        opacity?: number;
        step?: number;
        width?: number;
    };
    width: number;
    size: number;
    opacity: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoHoverStyleModule {
}

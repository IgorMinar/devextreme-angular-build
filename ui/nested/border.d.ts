import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoBorderComponent extends NestedOption {
    color: string;
    cornerRadius: number;
    dashStyle: string;
    opacity: number;
    visible: boolean;
    width: number;
    bottom: boolean;
    left: boolean;
    right: boolean;
    top: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoBorderModule {
}

import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoShadowComponent extends NestedOption {
    blur: number;
    color: string;
    offsetX: number;
    offsetY: number;
    opacity: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoShadowModule {
}

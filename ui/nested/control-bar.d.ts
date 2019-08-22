import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoControlBarComponent extends NestedOption {
    borderColor: string;
    color: string;
    enabled: boolean;
    horizontalAlignment: string;
    margin: number;
    opacity: number;
    verticalAlignment: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoControlBarModule {
}

import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoColumnFixingComponent extends NestedOption {
    enabled: boolean;
    texts: {
        fix?: string;
        leftPosition?: string;
        rightPosition?: string;
        unfix?: string;
    };
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoColumnFixingModule {
}

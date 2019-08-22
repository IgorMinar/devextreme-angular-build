import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoShowFirstSubmenuModeComponent extends NestedOption {
    delay: number | {
        hide?: number;
        show?: number;
    };
    name: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoShowFirstSubmenuModeModule {
}

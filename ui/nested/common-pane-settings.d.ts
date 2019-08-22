import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoCommonPaneSettingsComponent extends NestedOption {
    backgroundColor: string;
    border: {
        bottom?: boolean;
        color?: string;
        dashStyle?: string;
        left?: boolean;
        opacity?: number;
        right?: boolean;
        top?: boolean;
        visible?: boolean;
        width?: number;
    };
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoCommonPaneSettingsModule {
}

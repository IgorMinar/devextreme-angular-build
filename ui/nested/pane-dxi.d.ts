import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiPaneComponent extends CollectionNestedOption {
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
    name: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiPaneModule {
}

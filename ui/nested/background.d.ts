import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoBackgroundComponent extends NestedOption {
    color: string;
    image: {
        location?: string;
        url?: string;
    };
    visible: boolean;
    borderColor: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoBackgroundModule {
}

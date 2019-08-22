import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoKeyboardNavigationComponent extends NestedOption {
    editOnKeyPress: boolean;
    enterKeyAction: string;
    enterKeyDirection: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoKeyboardNavigationModule {
}

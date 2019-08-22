import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoPagerComponent extends NestedOption {
    allowedPageSizes: Array<number>;
    infoText: string;
    showInfo: boolean;
    showNavigationButtons: boolean;
    showPageSizeSelector: boolean;
    visible: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoPagerModule {
}

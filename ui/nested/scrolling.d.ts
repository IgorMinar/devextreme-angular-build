import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoScrollingComponent extends NestedOption {
    columnRenderingMode: string;
    mode: string;
    preloadEnabled: boolean;
    rowRenderingMode: string;
    scrollByContent: boolean;
    scrollByThumb: boolean;
    showScrollbar: string;
    useNative: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoScrollingModule {
}

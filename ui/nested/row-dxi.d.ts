import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiRowComponent extends CollectionNestedOption {
    baseSize: number | string;
    ratio: number;
    screen: string;
    shrink: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiRowModule {
}

import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiLocationComponent extends CollectionNestedOption {
    lat: number;
    lng: number;
    col: number;
    colspan: number;
    row: number;
    rowspan: number;
    screen: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiLocationModule {
}

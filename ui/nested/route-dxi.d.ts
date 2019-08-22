import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiLocationComponent } from './location-dxi';
export declare class DxiRouteComponent extends CollectionNestedOption {
    color: string;
    locations: Array<any | {
        lat?: number;
        lng?: number;
    }>;
    mode: string;
    opacity: number;
    weight: number;
    protected readonly _optionPath: string;
    locationsChildren: QueryList<DxiLocationComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiRouteModule {
}

import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiLocationComponent } from './location-dxi';
export declare class DxiMarkerComponent extends CollectionNestedOption {
    iconSrc: string;
    location: string | Array<number | {
        lat?: number;
        lng?: number;
    }>;
    onClick: Function;
    tooltip: string | {
        isShown?: boolean;
        text?: string;
    };
    protected readonly _optionPath: string;
    locationChildren: QueryList<DxiLocationComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiMarkerModule {
}

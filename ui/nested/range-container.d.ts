import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiRangeComponent } from './range-dxi';
export declare class DxoRangeContainerComponent extends NestedOption {
    backgroundColor: string;
    offset: number;
    orientation: string;
    palette: string | Array<string>;
    paletteExtensionMode: string;
    ranges: Array<any | {
        color?: string;
        endValue?: number;
        startValue?: number;
    }>;
    width: number | {
        end?: number;
        start?: number;
    };
    horizontalOrientation: string;
    verticalOrientation: string;
    protected readonly _optionPath: string;
    rangesChildren: QueryList<DxiRangeComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoRangeContainerModule {
}
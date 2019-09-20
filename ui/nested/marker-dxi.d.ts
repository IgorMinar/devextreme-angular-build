/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
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

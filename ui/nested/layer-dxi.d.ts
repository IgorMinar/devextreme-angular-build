/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from 'devextreme-angular/core';
import { CollectionNestedOption } from 'devextreme-angular/core';
export declare class DxiLayerComponent extends CollectionNestedOption {
    borderColor: string;
    borderWidth: number;
    color: string;
    colorGroupingField: string;
    colorGroups: Array<number>;
    customize: Function;
    dataField: string;
    dataSource: any | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
    elementType: string;
    hoveredBorderColor: string;
    hoveredBorderWidth: number;
    hoveredColor: string;
    hoverEnabled: boolean;
    label: {
        dataField?: string;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
    };
    maxSize: number;
    minSize: number;
    name: string;
    opacity: number;
    palette: string | Array<string>;
    paletteSize: number;
    selectedBorderColor: string;
    selectedBorderWidth: number;
    selectedColor: string;
    selectionMode: string;
    size: number;
    sizeGroupingField: string;
    sizeGroups: Array<number>;
    type: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiLayerModule {
}

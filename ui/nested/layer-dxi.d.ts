import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
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

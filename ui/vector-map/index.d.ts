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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxVectorMap from 'devextreme/viz/vector_map';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxiLayerComponent } from 'devextreme-angular/ui/nested';
import { DxiLegendComponent } from 'devextreme-angular/ui/nested';
/**
 * The VectorMap is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
 */
export declare class DxVectorMapComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxVectorMap;
    /**
     * Specifies the options for the map background.
     */
    background: {
        borderColor?: string;
        color?: string;
    };
    /**
     * Specifies the positioning of a map in geographical coordinates.
     */
    bounds: Array<number>;
    /**
     * Specifies the geographical coordinates of the center for a map.
     */
    center: Array<number>;
    /**
     * Configures the control bar.
     */
    controlBar: {
        borderColor?: string;
        color?: string;
        enabled?: boolean;
        horizontalAlignment?: string;
        margin?: number;
        opacity?: number;
        verticalAlignment?: string;
    };
    /**
     * Specifies whether the widget responds to the user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures the exporting and printing features.
     */
    export: {
        backgroundColor?: string;
        enabled?: boolean;
        fileName?: string;
        formats?: Array<string>;
        margin?: number;
        printingEnabled?: boolean;
        proxyUrl?: string;
    };
    /**
     * Specifies options for VectorMap widget layers.
     */
    layers: Array<any | {
        borderColor?: string;
        borderWidth?: number;
        color?: string;
        colorGroupingField?: string;
        colorGroups?: Array<number>;
        customize?: Function;
        dataField?: string;
        dataSource?: any | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        elementType?: string;
        hoveredBorderColor?: string;
        hoveredBorderWidth?: number;
        hoveredColor?: string;
        hoverEnabled?: boolean;
        label?: {
            dataField?: string;
            enabled?: boolean;
            font?: DevExpress.viz.Font;
        };
        maxSize?: number;
        minSize?: number;
        name?: string;
        opacity?: number;
        palette?: string | Array<string>;
        paletteSize?: number;
        selectedBorderColor?: string;
        selectedBorderWidth?: number;
        selectedColor?: string;
        selectionMode?: string;
        size?: number;
        sizeGroupingField?: string;
        sizeGroups?: Array<number>;
        type?: string;
    }>;
    /**
     * Configures map legends.
     */
    legends: Array<any | {
        backgroundColor?: string;
        border?: {
            color?: string;
            cornerRadius?: number;
            dashStyle?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        columnCount?: number;
        columnItemSpacing?: number;
        customizeHint?: Function;
        customizeItems?: Function;
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        itemsAlignment?: string;
        itemTextPosition?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        markerColor?: string;
        markerShape?: string;
        markerSize?: number;
        orientation?: string;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        rowCount?: number;
        rowItemSpacing?: number;
        source?: {
            grouping?: string;
            layer?: string;
        };
        title?: string | {
            font?: DevExpress.viz.Font;
            horizontalAlignment?: string;
            margin?: {
                bottom?: number;
                left?: number;
                right?: number;
                top?: number;
            };
            placeholderSize?: number;
            subtitle?: string | {
                font?: DevExpress.viz.Font;
                offset?: number;
                text?: string;
            };
            text?: string;
            verticalAlignment?: string;
        };
        verticalAlignment?: string;
        visible?: boolean;
    }>;
    /**
     * Configures the loading indicator.
     */
    loadingIndicator: {
        backgroundColor?: string;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
        show?: boolean;
        text?: string;
    };
    /**
     * Specifies a map's maximum zoom factor.
     */
    maxZoomFactor: number;
    /**
     * Disables the panning capability.
     */
    panningEnabled: boolean;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies the map projection.
     */
    projection: any;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the widget's size in pixels.
     */
    size: {
        height?: number;
        width?: number;
    };
    /**
     * Sets the name of the theme the widget uses.
     */
    theme: string;
    /**
     * Configures the widget's title.
     */
    title: string | {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        placeholderSize?: number;
        subtitle?: string | {
            font?: DevExpress.viz.Font;
            offset?: number;
            text?: string;
            textOverflow?: string;
            wordWrap?: string;
        };
        text?: string;
        textOverflow?: string;
        verticalAlignment?: string;
        wordWrap?: string;
    };
    /**
     * Configures tooltips.
     */
    tooltip: {
        arrowLength?: number;
        border?: {
            color?: string;
            dashStyle?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        container?: Element | JQuery;
        cornerRadius?: number;
        customizeTooltip?: Function;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
        opacity?: number;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        shadow?: {
            blur?: number;
            color?: string;
            offsetX?: number;
            offsetY?: number;
            opacity?: number;
        };
        zIndex?: number;
    };
    /**
     * Specifies whether the map should respond to touch gestures.
     */
    touchEnabled: boolean;
    /**
     * Specifies whether or not the map should respond when a user rolls the mouse wheel.
     */
    wheelEnabled: boolean;
    /**
     * Specifies a number that is used to zoom a map initially.
     */
    zoomFactor: number;
    /**
     * Disables the zooming capability.
     */
    zoomingEnabled: boolean;
    /**
     * A function that is executed each time the center coordinates are changed.
     */
    onCenterChanged: EventEmitter<any>;
    /**
     * A function that is executed when any location on the map is clicked or tapped.
     */
    onClick: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function that is executed when the widget's rendering has finished.
     */
    onDrawn: EventEmitter<any>;
    /**
     * A function that is executed after the widget is exported.
     */
    onExported: EventEmitter<any>;
    /**
     * A function that is executed before the widget is exported.
     */
    onExporting: EventEmitter<any>;
    /**
     * A function that is executed before a file with exported widget is saved to the user's local storage.
     */
    onFileSaving: EventEmitter<any>;
    /**
     * A function that is executed when an error or warning occurs.
     */
    onIncidentOccurred: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a layer element is selected or selection is canceled.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a tooltip becomes hidden.
     */
    onTooltipHidden: EventEmitter<any>;
    /**
     * A function that is executed when a tooltip appears.
     */
    onTooltipShown: EventEmitter<any>;
    /**
     * A function that is executed each time the zoom factor is changed.
     */
    onZoomFactorChanged: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    backgroundChange: EventEmitter<{
        borderColor?: string;
        color?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    boundsChange: EventEmitter<Array<number>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    centerChange: EventEmitter<Array<number>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    controlBarChange: EventEmitter<{
        borderColor?: string;
        color?: string;
        enabled?: boolean;
        horizontalAlignment?: string;
        margin?: number;
        opacity?: number;
        verticalAlignment?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    exportChange: EventEmitter<{
        backgroundColor?: string;
        enabled?: boolean;
        fileName?: string;
        formats?: Array<string>;
        margin?: number;
        printingEnabled?: boolean;
        proxyUrl?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    layersChange: EventEmitter<Array<any | {
        borderColor?: string;
        borderWidth?: number;
        color?: string;
        colorGroupingField?: string;
        colorGroups?: Array<number>;
        customize?: Function;
        dataField?: string;
        dataSource?: any | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        elementType?: string;
        hoveredBorderColor?: string;
        hoveredBorderWidth?: number;
        hoveredColor?: string;
        hoverEnabled?: boolean;
        label?: {
            dataField?: string;
            enabled?: boolean;
            font?: DevExpress.viz.Font;
        };
        maxSize?: number;
        minSize?: number;
        name?: string;
        opacity?: number;
        palette?: string | Array<string>;
        paletteSize?: number;
        selectedBorderColor?: string;
        selectedBorderWidth?: number;
        selectedColor?: string;
        selectionMode?: string;
        size?: number;
        sizeGroupingField?: string;
        sizeGroups?: Array<number>;
        type?: string;
    }>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    legendsChange: EventEmitter<Array<any | {
        backgroundColor?: string;
        border?: {
            color?: string;
            cornerRadius?: number;
            dashStyle?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        columnCount?: number;
        columnItemSpacing?: number;
        customizeHint?: Function;
        customizeItems?: Function;
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        itemsAlignment?: string;
        itemTextPosition?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        markerColor?: string;
        markerShape?: string;
        markerSize?: number;
        orientation?: string;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        rowCount?: number;
        rowItemSpacing?: number;
        source?: {
            grouping?: string;
            layer?: string;
        };
        title?: string | {
            font?: DevExpress.viz.Font;
            horizontalAlignment?: string;
            margin?: {
                bottom?: number;
                left?: number;
                right?: number;
                top?: number;
            };
            placeholderSize?: number;
            subtitle?: string | {
                font?: DevExpress.viz.Font;
                offset?: number;
                text?: string;
            };
            text?: string;
            verticalAlignment?: string;
        };
        verticalAlignment?: string;
        visible?: boolean;
    }>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    loadingIndicatorChange: EventEmitter<{
        backgroundColor?: string;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
        show?: boolean;
        text?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    maxZoomFactorChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    panningEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    projectionChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    sizeChange: EventEmitter<{
        height?: number;
        width?: number;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    themeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    titleChange: EventEmitter<string | {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        placeholderSize?: number;
        subtitle?: string | {
            font?: DevExpress.viz.Font;
            offset?: number;
            text?: string;
            textOverflow?: string;
            wordWrap?: string;
        };
        text?: string;
        textOverflow?: string;
        verticalAlignment?: string;
        wordWrap?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    tooltipChange: EventEmitter<{
        arrowLength?: number;
        border?: {
            color?: string;
            dashStyle?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        container?: Element | JQuery;
        cornerRadius?: number;
        customizeTooltip?: Function;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
        opacity?: number;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        shadow?: {
            blur?: number;
            color?: string;
            offsetX?: number;
            offsetY?: number;
            opacity?: number;
        };
        zIndex?: number;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    touchEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    wheelEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    zoomFactorChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    zoomingEnabledChange: EventEmitter<boolean>;
    layersChildren: QueryList<DxiLayerComponent>;
    legendsChildren: QueryList<DxiLegendComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxVectorMap;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxVectorMapModule {
}

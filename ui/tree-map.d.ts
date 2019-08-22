import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxTreeMap from 'devextreme/viz/tree_map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The TreeMap is a widget that displays hierarchical data by using nested rectangles.
 */
export declare class DxTreeMapComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTreeMap;
    /**
     * Specifies the name of the data source field that provides nested items for a group. Applies to hierarchical data sources only.
     */
    childrenField: string;
    /**
     * Specifies the name of the data source field that provides colors for tiles.
     */
    colorField: string;
    /**
     * Manages the color settings.
     */
    colorizer: {
        colorCodeField?: string;
        colorizeGroups?: boolean;
        palette?: string | Array<string>;
        paletteExtensionMode?: string;
        range?: Array<number>;
        type?: string;
    };
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
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
     * Configures groups.
     */
    group: {
        border?: {
            color?: string;
            width?: number;
        };
        color?: string;
        headerHeight?: number;
        hoverEnabled?: boolean;
        hoverStyle?: {
            border?: {
                color?: string;
                width?: number;
            };
            color?: string;
        };
        label?: {
            font?: DevExpress.viz.Font;
            textOverflow?: string;
            visible?: boolean;
        };
        selectionStyle?: {
            border?: {
                color?: string;
                width?: number;
            };
            color?: string;
        };
    };
    /**
     * Specifies whether tiles and groups change their style when a user pauses on them.
     */
    hoverEnabled: boolean;
    /**
     * Specifies the name of the data source field that provides IDs for items. Applies to plain data sources only.
     */
    idField: string;
    /**
     * Specifies whether the user will interact with a single tile or its group.
     */
    interactWithGroup: boolean;
    /**
     * Specifies the name of the data source field that provides texts for tile and group labels.
     */
    labelField: string;
    /**
     * Specifies the layout algorithm.
     */
    layoutAlgorithm: Function | string;
    /**
     * Specifies the direction in which the items will be laid out.
     */
    layoutDirection: string;
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
     * Specifies how many hierarchical levels must be visualized.
     */
    maxDepth: number;
    /**
     * Specifies the name of the data source field that provides parent IDs for items. Applies to plain data sources only.
     */
    parentField: string;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Use the tile.label.textOverflow option instead.
     */
    resolveLabelOverflow: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether a single or multiple nodes can be in the selected state simultaneously.
     */
    selectionMode: string;
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
     * Configures tiles.
     */
    tile: {
        border?: {
            color?: string;
            width?: number;
        };
        color?: string;
        hoverStyle?: {
            border?: {
                color?: string;
                width?: number;
            };
            color?: string;
        };
        label?: {
            font?: DevExpress.viz.Font;
            textOverflow?: string;
            visible?: boolean;
            wordWrap?: string;
        };
        selectionStyle?: {
            border?: {
                color?: string;
                width?: number;
            };
            color?: string;
        };
    };
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
     * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
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
        format?: DevExpress.ui.format | string;
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
     * Specifies the name of the data source field that provides values for tiles.
     */
    valueField: string;
    /**
     * A function that is executed when a node is clicked or tapped.
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
     * A function that is executed when a user drills up or down.
     */
    onDrill: EventEmitter<any>;
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
     * A function that is executed after the pointer enters or leaves a node.
     */
    onHoverChanged: EventEmitter<any>;
    /**
     * A function that is executed when an error or warning occurs.
     */
    onIncidentOccurred: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed only once, after the nodes are initialized.
     */
    onNodesInitialized: EventEmitter<any>;
    /**
     * A function that is executed before the nodes are displayed and each time the collection of active nodes is changed.
     */
    onNodesRendering: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a node is selected or selection is canceled.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the childrenFieldChange event.
     */
    childrenFieldChange: EventEmitter<string>;
    /**
     * A handler for the colorFieldChange event.
     */
    colorFieldChange: EventEmitter<string>;
    /**
     * A handler for the colorizerChange event.
     */
    colorizerChange: EventEmitter<{
        colorCodeField?: string;
        colorizeGroups?: boolean;
        palette?: string | Array<string>;
        paletteExtensionMode?: string;
        range?: Array<number>;
        type?: string;
    }>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the exportChange event.
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
     * A handler for the groupChange event.
     */
    groupChange: EventEmitter<{
        border?: {
            color?: string;
            width?: number;
        };
        color?: string;
        headerHeight?: number;
        hoverEnabled?: boolean;
        hoverStyle?: {
            border?: {
                color?: string;
                width?: number;
            };
            color?: string;
        };
        label?: {
            font?: DevExpress.viz.Font;
            textOverflow?: string;
            visible?: boolean;
        };
        selectionStyle?: {
            border?: {
                color?: string;
                width?: number;
            };
            color?: string;
        };
    }>;
    /**
     * A handler for the hoverEnabledChange event.
     */
    hoverEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the idFieldChange event.
     */
    idFieldChange: EventEmitter<string>;
    /**
     * A handler for the interactWithGroupChange event.
     */
    interactWithGroupChange: EventEmitter<boolean>;
    /**
     * A handler for the labelFieldChange event.
     */
    labelFieldChange: EventEmitter<string>;
    /**
     * A handler for the layoutAlgorithmChange event.
     */
    layoutAlgorithmChange: EventEmitter<Function | string>;
    /**
     * A handler for the layoutDirectionChange event.
     */
    layoutDirectionChange: EventEmitter<string>;
    /**
     * A handler for the loadingIndicatorChange event.
     */
    loadingIndicatorChange: EventEmitter<{
        backgroundColor?: string;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
        show?: boolean;
        text?: string;
    }>;
    /**
     * A handler for the maxDepthChange event.
     */
    maxDepthChange: EventEmitter<number>;
    /**
     * A handler for the parentFieldChange event.
     */
    parentFieldChange: EventEmitter<string>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the redrawOnResizeChange event.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * A handler for the resolveLabelOverflowChange event.
     */
    resolveLabelOverflowChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the selectionModeChange event.
     */
    selectionModeChange: EventEmitter<string>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<{
        height?: number;
        width?: number;
    }>;
    /**
     * A handler for the themeChange event.
     */
    themeChange: EventEmitter<string>;
    /**
     * A handler for the tileChange event.
     */
    tileChange: EventEmitter<{
        border?: {
            color?: string;
            width?: number;
        };
        color?: string;
        hoverStyle?: {
            border?: {
                color?: string;
                width?: number;
            };
            color?: string;
        };
        label?: {
            font?: DevExpress.viz.Font;
            textOverflow?: string;
            visible?: boolean;
            wordWrap?: string;
        };
        selectionStyle?: {
            border?: {
                color?: string;
                width?: number;
            };
            color?: string;
        };
    }>;
    /**
     * A handler for the titleChange event.
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
     * A handler for the tooltipChange event.
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
        format?: DevExpress.ui.format | string;
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
     * A handler for the valueFieldChange event.
     */
    valueFieldChange: EventEmitter<string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxTreeMap;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxTreeMapModule {
}

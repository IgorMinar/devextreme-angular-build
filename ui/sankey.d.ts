import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxSankey from 'devextreme/viz/sankey';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The Sankey is a widget that visualizes the flow magnitude between value sets. The values being connected are called nodes; the connections - links. The higher the flow magnitude, the wider the link is.
 */
export declare class DxSankeyComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxSankey;
    /**
     * Specifies adaptive layout options.
     */
    adaptiveLayout: {
        height?: number;
        keepLabels?: boolean;
        width?: number;
    };
    /**
     * Aligns node columns vertically.
     */
    alignment: string | Array<string>;
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
     * Specifies whether nodes and links change their style when they are hovered over or pressed.
     */
    hoverEnabled: boolean;
    /**
     * Configures sankey nodes' labels.
     */
    label: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        horizontalOffset?: number;
        overlappingBehavior?: string;
        shadow?: {
            blur?: number;
            color?: string;
            offsetX?: number;
            offsetY?: number;
            opacity?: number;
        };
        useNodeColors?: boolean;
        verticalOffset?: number;
        visible?: boolean;
    };
    /**
     * Configures sankey links' appearance.
     */
    link: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        colorMode?: string;
        hoverStyle?: {
            border?: {
                color?: string;
                visible?: boolean;
                width?: number;
            };
            color?: string;
            hatching?: {
                direction?: string;
                opacity?: number;
                step?: number;
                width?: number;
            };
            opacity?: number;
        };
        opacity?: number;
    };
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
     * Generates space around the widget.
     */
    margin: {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    };
    /**
     * Configures sankey nodes' appearance.
     */
    node: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        hoverStyle?: {
            border?: {
                color?: string;
                visible?: boolean;
                width?: number;
            };
            color?: string;
            hatching?: {
                direction?: string;
                opacity?: number;
                step?: number;
                width?: number;
            };
            opacity?: number;
        };
        opacity?: number;
        padding?: number;
        width?: number;
    };
    /**
     * Sets the palette to be used to colorize sankey nodes.
     */
    palette: string | Array<string>;
    /**
     * Specifies how to extend the palette when it contains less colors than the number of sankey nodes.
     */
    paletteExtensionMode: string;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
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
     * Specifies nodes' sorting order in their columns.
     */
    sortData: any;
    /**
     * Specifies which data source field provides links' source nodes.
     */
    sourceField: string;
    /**
     * Specifies which data source field provides links' target nodes.
     */
    targetField: string;
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
        customizeLinkTooltip?: Function;
        customizeNodeTooltip?: Function;
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
     * Specifies which data source field provides links' weights.
     */
    weightField: string;
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
     * A function that is executed when a sankey link is clicked or tapped.
     */
    onLinkClick: EventEmitter<any>;
    /**
     * A function that is executed after the pointer enters or leaves a sankey link.
     */
    onLinkHoverChanged: EventEmitter<any>;
    /**
     * A function that is executed when a sankey node is clicked or tapped.
     */
    onNodeClick: EventEmitter<any>;
    /**
     * A function that is executed after the pointer enters or leaves a sankey node.
     */
    onNodeHoverChanged: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the adaptiveLayoutChange event.
     */
    adaptiveLayoutChange: EventEmitter<{
        height?: number;
        keepLabels?: boolean;
        width?: number;
    }>;
    /**
     * A handler for the alignmentChange event.
     */
    alignmentChange: EventEmitter<string | Array<string>>;
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
     * A handler for the hoverEnabledChange event.
     */
    hoverEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the labelChange event.
     */
    labelChange: EventEmitter<{
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        horizontalOffset?: number;
        overlappingBehavior?: string;
        shadow?: {
            blur?: number;
            color?: string;
            offsetX?: number;
            offsetY?: number;
            opacity?: number;
        };
        useNodeColors?: boolean;
        verticalOffset?: number;
        visible?: boolean;
    }>;
    /**
     * A handler for the linkChange event.
     */
    linkChange: EventEmitter<{
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        colorMode?: string;
        hoverStyle?: {
            border?: {
                color?: string;
                visible?: boolean;
                width?: number;
            };
            color?: string;
            hatching?: {
                direction?: string;
                opacity?: number;
                step?: number;
                width?: number;
            };
            opacity?: number;
        };
        opacity?: number;
    }>;
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
     * A handler for the marginChange event.
     */
    marginChange: EventEmitter<{
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }>;
    /**
     * A handler for the nodeChange event.
     */
    nodeChange: EventEmitter<{
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        hoverStyle?: {
            border?: {
                color?: string;
                visible?: boolean;
                width?: number;
            };
            color?: string;
            hatching?: {
                direction?: string;
                opacity?: number;
                step?: number;
                width?: number;
            };
            opacity?: number;
        };
        opacity?: number;
        padding?: number;
        width?: number;
    }>;
    /**
     * A handler for the paletteChange event.
     */
    paletteChange: EventEmitter<string | Array<string>>;
    /**
     * A handler for the paletteExtensionModeChange event.
     */
    paletteExtensionModeChange: EventEmitter<string>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the redrawOnResizeChange event.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<{
        height?: number;
        width?: number;
    }>;
    /**
     * A handler for the sortDataChange event.
     */
    sortDataChange: EventEmitter<any>;
    /**
     * A handler for the sourceFieldChange event.
     */
    sourceFieldChange: EventEmitter<string>;
    /**
     * A handler for the targetFieldChange event.
     */
    targetFieldChange: EventEmitter<string>;
    /**
     * A handler for the themeChange event.
     */
    themeChange: EventEmitter<string>;
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
        customizeLinkTooltip?: Function;
        customizeNodeTooltip?: Function;
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
     * A handler for the weightFieldChange event.
     */
    weightFieldChange: EventEmitter<string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxSankey;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxSankeyModule {
}

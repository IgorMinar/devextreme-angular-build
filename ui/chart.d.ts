import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxChart from 'devextreme/viz/chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiAnnotationComponent } from './nested/annotation-dxi';
import { DxiPaneComponent } from './nested/pane-dxi';
import { DxiSeriesComponent } from './nested/series-dxi';
import { DxiValueAxisComponent } from './nested/value-axis-dxi';
/**
 * The Chart is a widget that visualizes data from a local or remote storage using a great variety of series types along with different interactive elements, such as tooltips, crosshair pointer, legend, etc.
 */
export declare class DxChartComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxChart;
    /**
     * Specifies adaptive layout options.
     */
    adaptiveLayout: {
        height?: number;
        keepLabels?: boolean;
        width?: number;
    };
    /**
     * Specifies whether to adjust the value axis's visualRange when the argument axis is being zoomed or panned.
     */
    adjustOnZoom: boolean;
    /**
     * Specifies animation options.
     */
    animation: boolean | {
        duration?: number;
        easing?: string;
        enabled?: boolean;
        maxPointCountSupported?: number;
    };
    /**
     * Specifies the annotation collection.
     */
    annotations: Array<DevExpress.viz.dxChartAnnotationConfig | any>;
    /**
     * Configures the argument axis.
     */
    argumentAxis: {
        aggregationGroupWidth?: number;
        aggregationInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        allowDecimals?: boolean;
        argumentType?: string;
        axisDivisionFactor?: number;
        breaks?: Array<DevExpress.viz.ScaleBreak>;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            displayBehindSeries?: boolean;
            extendAxis?: boolean;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                text?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        holidays?: Array<Date | string | number>;
        hoverMode?: string;
        inverted?: boolean;
        label?: {
            alignment?: string;
            customizeHint?: Function;
            customizeText?: Function;
            displayMode?: string;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            rotationAngle?: number;
            staggeringSpacing?: number;
            textOverflow?: string;
            visible?: boolean;
            wordWrap?: string;
        };
        logarithmBase?: number;
        max?: Date | number | string;
        maxValueMargin?: number;
        min?: Date | number | string;
        minorGrid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickCount?: number;
        minorTickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minValueMargin?: number;
        minVisualRangeLength?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        opacity?: number;
        placeholderSize?: number;
        position?: string;
        singleWorkdays?: Array<Date | string | number>;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                text?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
        };
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        tickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        title?: string | {
            alignment?: string;
            font?: DevExpress.viz.Font;
            margin?: number;
            text?: string;
            textOverflow?: string;
            wordWrap?: string;
        };
        type?: string;
        valueMarginsEnabled?: boolean;
        visible?: boolean;
        visualRange?: DevExpress.viz.VizRange | Array<number | string | Date>;
        visualRangeUpdateMode?: string;
        wholeRange?: DevExpress.viz.VizRange | Array<number | string | Date>;
        width?: number;
        workdaysOnly?: boolean;
        workWeek?: Array<number>;
    };
    /**
     * Specifies whether to hide series point markers automatically to reduce visual clutter.
     */
    autoHidePointMarkers: boolean;
    /**
     * Controls the padding and consequently the width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth option is set.
     */
    barGroupPadding: number;
    /**
     * Specifies a fixed width for groups of bars with the same argument, measured in pixels. Takes precedence over the barGroupPadding option.
     */
    barGroupWidth: number;
    /**
     * Use CommonSeries.barPadding instead.
     */
    barWidth: number;
    /**
     * Specifies settings common for all annotations in the chart.
     */
    commonAnnotationSettings: DevExpress.viz.dxChartCommonAnnotationConfig;
    /**
     * Defines common settings for both the argument and value axis in a chart.
     */
    commonAxisSettings: {
        allowDecimals?: boolean;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        color?: string;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                position?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        inverted?: boolean;
        label?: {
            alignment?: string;
            displayMode?: string;
            font?: DevExpress.viz.Font;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            rotationAngle?: number;
            staggeringSpacing?: number;
            textOverflow?: string;
            visible?: boolean;
            wordWrap?: string;
        };
        maxValueMargin?: number;
        minorGrid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        minValueMargin?: number;
        opacity?: number;
        placeholderSize?: number;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
        };
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        title?: {
            alignment?: string;
            font?: DevExpress.viz.Font;
            margin?: number;
            textOverflow?: string;
            wordWrap?: string;
        };
        valueMarginsEnabled?: boolean;
        visible?: boolean;
        width?: number;
    };
    /**
     * Defines common settings for all panes in a chart.
     */
    commonPaneSettings: {
        backgroundColor?: string;
        border?: {
            bottom?: boolean;
            color?: string;
            dashStyle?: string;
            left?: boolean;
            opacity?: number;
            right?: boolean;
            top?: boolean;
            visible?: boolean;
            width?: number;
        };
    };
    /**
     * Specifies settings common for all series in the chart.
     */
    commonSeriesSettings: any;
    /**
     * Colors the background of the chart container.
     */
    containerBackgroundColor: string;
    /**
     * Configures the crosshair feature.
     */
    crosshair: {
        color?: string;
        dashStyle?: string;
        enabled?: boolean;
        horizontalLine?: boolean | {
            color?: string;
            dashStyle?: string;
            label?: {
                backgroundColor?: string;
                customizeText?: Function;
                font?: DevExpress.viz.Font;
                format?: DevExpress.ui.format | string;
                visible?: boolean;
            };
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        label?: {
            backgroundColor?: string;
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            visible?: boolean;
        };
        opacity?: number;
        verticalLine?: boolean | {
            color?: string;
            dashStyle?: string;
            label?: {
                backgroundColor?: string;
                customizeText?: Function;
                font?: DevExpress.viz.Font;
                format?: DevExpress.ui.format | string;
                visible?: boolean;
            };
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        width?: number;
    };
    /**
     * Customizes an individual annotation.
     */
    customizeAnnotation: Function;
    /**
     * Customizes the appearance of an individual point label.
     */
    customizeLabel: Function;
    /**
     * Customizes the appearance of an individual series point.
     */
    customizePoint: Function;
    /**
     * Processes data before visualizing it.
     */
    dataPrepareSettings: {
        checkTypeForAllData?: boolean;
        convertToAxisDataType?: boolean;
        sortingMethod?: boolean | Function;
    };
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Specifies which pane should be used by default.
     */
    defaultPane: string;
    /**
     * Specifies whether the widget responds to the user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Use CommonSeries.ignoreEmptyPoints instead.
     */
    equalBarWidth: boolean;
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
     * Specifies the options of a chart's legend.
     */
    legend: {
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
        hoverMode?: string;
        itemsAlignment?: string;
        itemTextPosition?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        markerSize?: number;
        orientation?: string;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        position?: string;
        rowCount?: number;
        rowItemSpacing?: number;
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
     * Specifies a coefficient determining the diameter of the largest bubble.
     */
    maxBubbleSize: number;
    /**
     * Specifies the diameter of the smallest bubble measured in pixels.
     */
    minBubbleSize: number;
    /**
     * Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.
     */
    negativesAsZeroes: boolean;
    /**
     * Sets the palette to be used for colorizing series and their elements.
     */
    palette: string | Array<string>;
    /**
     * Specifies what to do with colors in the palette when their number is less than the number of series (in the Chart widget) or points in a series (in the PieChart widget).
     */
    paletteExtensionMode: string;
    /**
     * Declares a collection of panes.
     */
    panes: Array<any | {
        backgroundColor?: string;
        border?: {
            bottom?: boolean;
            color?: string;
            dashStyle?: string;
            left?: boolean;
            opacity?: number;
            right?: boolean;
            top?: boolean;
            visible?: boolean;
            width?: number;
        };
        name?: string;
    }>;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies whether a single point or multiple points can be selected in the chart.
     */
    pointSelectionMode: string;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Specifies how the chart must behave when series point labels overlap.
     */
    resolveLabelOverlapping: string;
    /**
     * Swaps the axes around making the value axis horizontal and the argument axis vertical.
     */
    rotated: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the settings of the scroll bar.
     */
    scrollBar: {
        color?: string;
        offset?: number;
        opacity?: number;
        position?: string;
        visible?: boolean;
        width?: number;
    };
    /**
     * Use the zoomAndPan option instead.
     */
    scrollingMode: string;
    /**
     * Specifies options for Chart widget series.
     */
    series: any | Array<any>;
    /**
     * Specifies whether a single series or multiple series can be selected in the chart.
     */
    seriesSelectionMode: string;
    /**
     * Defines options for the series template.
     */
    seriesTemplate: {
        customizeSeries?: Function;
        nameField?: string;
    };
    /**
     * Specifies the widget's size in pixels.
     */
    size: {
        height?: number;
        width?: number;
    };
    /**
     * Specifies whether a point should remain in the hover state when the mouse pointer moves away.
     */
    stickyHovering: boolean;
    /**
     * Indicates whether or not to synchronize value axes when they are displayed on a single pane.
     */
    synchronizeMultiAxes: boolean;
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
        argumentFormat?: DevExpress.ui.format | string;
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
        location?: string;
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
        shared?: boolean;
        zIndex?: number;
    };
    /**
     * Use CommonSeries.aggregation.enabled instead.
     */
    useAggregation: boolean;
    /**
     * Configures the value axis.
     */
    valueAxis: Array<any | {
        allowDecimals?: boolean;
        autoBreaksEnabled?: boolean;
        axisDivisionFactor?: number;
        breaks?: Array<DevExpress.viz.ScaleBreak>;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            displayBehindSeries?: boolean;
            extendAxis?: boolean;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                text?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        inverted?: boolean;
        label?: {
            alignment?: string;
            customizeHint?: Function;
            customizeText?: Function;
            displayMode?: string;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            rotationAngle?: number;
            staggeringSpacing?: number;
            textOverflow?: string;
            visible?: boolean;
            wordWrap?: string;
        };
        logarithmBase?: number;
        max?: Date | number | string;
        maxAutoBreakCount?: number;
        maxValueMargin?: number;
        min?: Date | number | string;
        minorGrid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickCount?: number;
        minorTickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minValueMargin?: number;
        minVisualRangeLength?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        multipleAxesSpacing?: number;
        name?: string;
        opacity?: number;
        pane?: string;
        placeholderSize?: number;
        position?: string;
        showZero?: boolean;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                text?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
        };
        synchronizedValue?: number;
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        tickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        title?: string | {
            alignment?: string;
            font?: DevExpress.viz.Font;
            margin?: number;
            text?: string;
            textOverflow?: string;
            wordWrap?: string;
        };
        type?: string;
        valueMarginsEnabled?: boolean;
        valueType?: string;
        visible?: boolean;
        visualRange?: DevExpress.viz.VizRange | Array<number | string | Date>;
        visualRangeUpdateMode?: string;
        wholeRange?: DevExpress.viz.VizRange | Array<number | string | Date>;
        width?: number;
    }>;
    /**
     * Configures zooming and panning.
     */
    zoomAndPan: {
        allowMouseWheel?: boolean;
        allowTouchGestures?: boolean;
        argumentAxis?: string;
        dragBoxStyle?: {
            color?: string;
            opacity?: number;
        };
        dragToZoom?: boolean;
        panKey?: string;
        valueAxis?: string;
    };
    /**
     * Use the zoomAndPan option instead.
     */
    zoomingMode: string;
    /**
     * A function that is executed when a label on the argument axis is clicked or tapped.
     */
    onArgumentAxisClick: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function that is executed when all series are ready.
     */
    onDone: EventEmitter<any>;
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
     * A function that is executed when a legend item is clicked or tapped.
     */
    onLegendClick: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a series point is clicked or tapped.
     */
    onPointClick: EventEmitter<any>;
    /**
     * A function that is executed after the pointer enters or leaves a series point.
     */
    onPointHoverChanged: EventEmitter<any>;
    /**
     * A function that is executed when a series point is selected or selection is canceled.
     */
    onPointSelectionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a series is clicked or tapped.
     */
    onSeriesClick: EventEmitter<any>;
    /**
     * A function that is executed after the pointer enters or leaves a series.
     */
    onSeriesHoverChanged: EventEmitter<any>;
    /**
     * A function that is executed when a series is selected or selection is canceled.
     */
    onSeriesSelectionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a tooltip becomes hidden.
     */
    onTooltipHidden: EventEmitter<any>;
    /**
     * A function that is executed when a tooltip appears.
     */
    onTooltipShown: EventEmitter<any>;
    /**
     * A function that is executed when zooming or panning ends.
     */
    onZoomEnd: EventEmitter<any>;
    /**
     * A function that is executed when zooming or panning begins.
     */
    onZoomStart: EventEmitter<any>;
    /**
     * A handler for the adaptiveLayoutChange event.
     */
    adaptiveLayoutChange: EventEmitter<{
        height?: number;
        keepLabels?: boolean;
        width?: number;
    }>;
    /**
     * A handler for the adjustOnZoomChange event.
     */
    adjustOnZoomChange: EventEmitter<boolean>;
    /**
     * A handler for the animationChange event.
     */
    animationChange: EventEmitter<boolean | {
        duration?: number;
        easing?: string;
        enabled?: boolean;
        maxPointCountSupported?: number;
    }>;
    /**
     * A handler for the annotationsChange event.
     */
    annotationsChange: EventEmitter<Array<DevExpress.viz.dxChartAnnotationConfig | any>>;
    /**
     * A handler for the argumentAxisChange event.
     */
    argumentAxisChange: EventEmitter<{
        aggregationGroupWidth?: number;
        aggregationInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        allowDecimals?: boolean;
        argumentType?: string;
        axisDivisionFactor?: number;
        breaks?: Array<DevExpress.viz.ScaleBreak>;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            displayBehindSeries?: boolean;
            extendAxis?: boolean;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                text?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        holidays?: Array<Date | string | number>;
        hoverMode?: string;
        inverted?: boolean;
        label?: {
            alignment?: string;
            customizeHint?: Function;
            customizeText?: Function;
            displayMode?: string;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            rotationAngle?: number;
            staggeringSpacing?: number;
            textOverflow?: string;
            visible?: boolean;
            wordWrap?: string;
        };
        logarithmBase?: number;
        max?: Date | number | string;
        maxValueMargin?: number;
        min?: Date | number | string;
        minorGrid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickCount?: number;
        minorTickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minValueMargin?: number;
        minVisualRangeLength?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        opacity?: number;
        placeholderSize?: number;
        position?: string;
        singleWorkdays?: Array<Date | string | number>;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                text?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
        };
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        tickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        title?: string | {
            alignment?: string;
            font?: DevExpress.viz.Font;
            margin?: number;
            text?: string;
            textOverflow?: string;
            wordWrap?: string;
        };
        type?: string;
        valueMarginsEnabled?: boolean;
        visible?: boolean;
        visualRange?: DevExpress.viz.VizRange | Array<number | string | Date>;
        visualRangeUpdateMode?: string;
        wholeRange?: DevExpress.viz.VizRange | Array<number | string | Date>;
        width?: number;
        workdaysOnly?: boolean;
        workWeek?: Array<number>;
    }>;
    /**
     * A handler for the autoHidePointMarkersChange event.
     */
    autoHidePointMarkersChange: EventEmitter<boolean>;
    /**
     * A handler for the barGroupPaddingChange event.
     */
    barGroupPaddingChange: EventEmitter<number>;
    /**
     * A handler for the barGroupWidthChange event.
     */
    barGroupWidthChange: EventEmitter<number>;
    /**
     * A handler for the barWidthChange event.
     */
    barWidthChange: EventEmitter<number>;
    /**
     * A handler for the commonAnnotationSettingsChange event.
     */
    commonAnnotationSettingsChange: EventEmitter<DevExpress.viz.dxChartCommonAnnotationConfig>;
    /**
     * A handler for the commonAxisSettingsChange event.
     */
    commonAxisSettingsChange: EventEmitter<{
        allowDecimals?: boolean;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        color?: string;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                position?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        inverted?: boolean;
        label?: {
            alignment?: string;
            displayMode?: string;
            font?: DevExpress.viz.Font;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            rotationAngle?: number;
            staggeringSpacing?: number;
            textOverflow?: string;
            visible?: boolean;
            wordWrap?: string;
        };
        maxValueMargin?: number;
        minorGrid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        minValueMargin?: number;
        opacity?: number;
        placeholderSize?: number;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
        };
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        title?: {
            alignment?: string;
            font?: DevExpress.viz.Font;
            margin?: number;
            textOverflow?: string;
            wordWrap?: string;
        };
        valueMarginsEnabled?: boolean;
        visible?: boolean;
        width?: number;
    }>;
    /**
     * A handler for the commonPaneSettingsChange event.
     */
    commonPaneSettingsChange: EventEmitter<{
        backgroundColor?: string;
        border?: {
            bottom?: boolean;
            color?: string;
            dashStyle?: string;
            left?: boolean;
            opacity?: number;
            right?: boolean;
            top?: boolean;
            visible?: boolean;
            width?: number;
        };
    }>;
    /**
     * A handler for the commonSeriesSettingsChange event.
     */
    commonSeriesSettingsChange: EventEmitter<any>;
    /**
     * A handler for the containerBackgroundColorChange event.
     */
    containerBackgroundColorChange: EventEmitter<string>;
    /**
     * A handler for the crosshairChange event.
     */
    crosshairChange: EventEmitter<{
        color?: string;
        dashStyle?: string;
        enabled?: boolean;
        horizontalLine?: boolean | {
            color?: string;
            dashStyle?: string;
            label?: {
                backgroundColor?: string;
                customizeText?: Function;
                font?: DevExpress.viz.Font;
                format?: DevExpress.ui.format | string;
                visible?: boolean;
            };
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        label?: {
            backgroundColor?: string;
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            visible?: boolean;
        };
        opacity?: number;
        verticalLine?: boolean | {
            color?: string;
            dashStyle?: string;
            label?: {
                backgroundColor?: string;
                customizeText?: Function;
                font?: DevExpress.viz.Font;
                format?: DevExpress.ui.format | string;
                visible?: boolean;
            };
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        width?: number;
    }>;
    /**
     * A handler for the customizeAnnotationChange event.
     */
    customizeAnnotationChange: EventEmitter<Function>;
    /**
     * A handler for the customizeLabelChange event.
     */
    customizeLabelChange: EventEmitter<Function>;
    /**
     * A handler for the customizePointChange event.
     */
    customizePointChange: EventEmitter<Function>;
    /**
     * A handler for the dataPrepareSettingsChange event.
     */
    dataPrepareSettingsChange: EventEmitter<{
        checkTypeForAllData?: boolean;
        convertToAxisDataType?: boolean;
        sortingMethod?: boolean | Function;
    }>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * A handler for the defaultPaneChange event.
     */
    defaultPaneChange: EventEmitter<string>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the equalBarWidthChange event.
     */
    equalBarWidthChange: EventEmitter<boolean>;
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
     * A handler for the legendChange event.
     */
    legendChange: EventEmitter<{
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
        hoverMode?: string;
        itemsAlignment?: string;
        itemTextPosition?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        markerSize?: number;
        orientation?: string;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        position?: string;
        rowCount?: number;
        rowItemSpacing?: number;
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
     * A handler for the maxBubbleSizeChange event.
     */
    maxBubbleSizeChange: EventEmitter<number>;
    /**
     * A handler for the minBubbleSizeChange event.
     */
    minBubbleSizeChange: EventEmitter<number>;
    /**
     * A handler for the negativesAsZeroesChange event.
     */
    negativesAsZeroesChange: EventEmitter<boolean>;
    /**
     * A handler for the paletteChange event.
     */
    paletteChange: EventEmitter<string | Array<string>>;
    /**
     * A handler for the paletteExtensionModeChange event.
     */
    paletteExtensionModeChange: EventEmitter<string>;
    /**
     * A handler for the panesChange event.
     */
    panesChange: EventEmitter<Array<any | {
        backgroundColor?: string;
        border?: {
            bottom?: boolean;
            color?: string;
            dashStyle?: string;
            left?: boolean;
            opacity?: number;
            right?: boolean;
            top?: boolean;
            visible?: boolean;
            width?: number;
        };
        name?: string;
    }>>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the pointSelectionModeChange event.
     */
    pointSelectionModeChange: EventEmitter<string>;
    /**
     * A handler for the redrawOnResizeChange event.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * A handler for the resolveLabelOverlappingChange event.
     */
    resolveLabelOverlappingChange: EventEmitter<string>;
    /**
     * A handler for the rotatedChange event.
     */
    rotatedChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollBarChange event.
     */
    scrollBarChange: EventEmitter<{
        color?: string;
        offset?: number;
        opacity?: number;
        position?: string;
        visible?: boolean;
        width?: number;
    }>;
    /**
     * A handler for the scrollingModeChange event.
     */
    scrollingModeChange: EventEmitter<string>;
    /**
     * A handler for the seriesChange event.
     */
    seriesChange: EventEmitter<any | Array<any>>;
    /**
     * A handler for the seriesSelectionModeChange event.
     */
    seriesSelectionModeChange: EventEmitter<string>;
    /**
     * A handler for the seriesTemplateChange event.
     */
    seriesTemplateChange: EventEmitter<{
        customizeSeries?: Function;
        nameField?: string;
    }>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<{
        height?: number;
        width?: number;
    }>;
    /**
     * A handler for the stickyHoveringChange event.
     */
    stickyHoveringChange: EventEmitter<boolean>;
    /**
     * A handler for the synchronizeMultiAxesChange event.
     */
    synchronizeMultiAxesChange: EventEmitter<boolean>;
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
        argumentFormat?: DevExpress.ui.format | string;
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
        location?: string;
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
        shared?: boolean;
        zIndex?: number;
    }>;
    /**
     * A handler for the useAggregationChange event.
     */
    useAggregationChange: EventEmitter<boolean>;
    /**
     * A handler for the valueAxisChange event.
     */
    valueAxisChange: EventEmitter<Array<any | {
        allowDecimals?: boolean;
        autoBreaksEnabled?: boolean;
        axisDivisionFactor?: number;
        breaks?: Array<DevExpress.viz.ScaleBreak>;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            displayBehindSeries?: boolean;
            extendAxis?: boolean;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                text?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        inverted?: boolean;
        label?: {
            alignment?: string;
            customizeHint?: Function;
            customizeText?: Function;
            displayMode?: string;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            rotationAngle?: number;
            staggeringSpacing?: number;
            textOverflow?: string;
            visible?: boolean;
            wordWrap?: string;
        };
        logarithmBase?: number;
        max?: Date | number | string;
        maxAutoBreakCount?: number;
        maxValueMargin?: number;
        min?: Date | number | string;
        minorGrid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickCount?: number;
        minorTickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minValueMargin?: number;
        minVisualRangeLength?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        multipleAxesSpacing?: number;
        name?: string;
        opacity?: number;
        pane?: string;
        placeholderSize?: number;
        position?: string;
        showZero?: boolean;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                text?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
        };
        synchronizedValue?: number;
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            shift?: number;
            visible?: boolean;
            width?: number;
        };
        tickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        title?: string | {
            alignment?: string;
            font?: DevExpress.viz.Font;
            margin?: number;
            text?: string;
            textOverflow?: string;
            wordWrap?: string;
        };
        type?: string;
        valueMarginsEnabled?: boolean;
        valueType?: string;
        visible?: boolean;
        visualRange?: DevExpress.viz.VizRange | Array<number | string | Date>;
        visualRangeUpdateMode?: string;
        wholeRange?: DevExpress.viz.VizRange | Array<number | string | Date>;
        width?: number;
    }>>;
    /**
     * A handler for the zoomAndPanChange event.
     */
    zoomAndPanChange: EventEmitter<{
        allowMouseWheel?: boolean;
        allowTouchGestures?: boolean;
        argumentAxis?: string;
        dragBoxStyle?: {
            color?: string;
            opacity?: number;
        };
        dragToZoom?: boolean;
        panKey?: string;
        valueAxis?: string;
    }>;
    /**
     * A handler for the zoomingModeChange event.
     */
    zoomingModeChange: EventEmitter<string>;
    annotationsChildren: QueryList<DxiAnnotationComponent>;
    panesChildren: QueryList<DxiPaneComponent>;
    seriesChildren: QueryList<DxiSeriesComponent>;
    valueAxisChildren: QueryList<DxiValueAxisComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxChart;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxChartModule {
}

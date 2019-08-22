import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxPolarChart from 'devextreme/viz/polar_chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiSeriesComponent } from './nested/series-dxi';
/**
 * The PolarChart is a widget that visualizes data in a polar coordinate system.
 */
export declare class DxPolarChartComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPolarChart;
    /**
     * Specifies adaptive layout options.
     */
    adaptiveLayout: {
        height?: number;
        keepLabels?: boolean;
        width?: number;
    };
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
     * Specifies argument axis options for the PolarChart widget.
     */
    argumentAxis: {
        allowDecimals?: boolean;
        argumentType?: string;
        axisDivisionFactor?: number;
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            displayBehindSeries?: boolean;
            extendAxis?: boolean;
            label?: {
                font?: DevExpress.viz.Font;
                text?: string;
                visible?: boolean;
            };
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                visible?: boolean;
            };
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        firstPointOnStartAngle?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        hoverMode?: string;
        inverted?: boolean;
        label?: {
            customizeHint?: Function;
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            visible?: boolean;
        };
        logarithmBase?: number;
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
        opacity?: number;
        originValue?: number;
        period?: number;
        startAngle?: number;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                text?: string;
            };
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
            };
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
        type?: string;
        visible?: boolean;
        width?: number;
    };
    /**
     * Controls the padding and consequently the angular width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth option is set.
     */
    barGroupPadding: number;
    /**
     * Specifies a fixed angular width for groups of bars with the same argument, measured in degrees. Takes precedence over the barGroupPadding option.
     */
    barGroupWidth: number;
    /**
     * Use CommonPolarChartSeries.barPadding instead.
     */
    barWidth: number;
    /**
     * An object defining the configuration options that are common for all axes of the PolarChart widget.
     */
    commonAxisSettings: {
        allowDecimals?: boolean;
        color?: string;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                visible?: boolean;
            };
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
            font?: DevExpress.viz.Font;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            visible?: boolean;
        };
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
            visible?: boolean;
            width?: number;
        };
        opacity?: number;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
            };
        };
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        visible?: boolean;
        width?: number;
    };
    /**
     * An object defining the configuration options that are common for all series of the PolarChart widget.
     */
    commonSeriesSettings: any;
    /**
     * Specifies the color of the parent page element.
     */
    containerBackgroundColor: string;
    /**
     * Customizes the appearance of an individual point label.
     */
    customizeLabel: Function;
    /**
     * Customizes the appearance of an individual series point.
     */
    customizePoint: Function;
    /**
     * An object providing options for managing data from a data source.
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
     * Specifies whether the widget responds to the user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Use CommonPolarChartSeries.ignoreEmptyPoints instead.
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
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies options for PolarChart widget series.
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
     * Indicates whether or not to display a "spider web".
     */
    useSpiderWeb: boolean;
    /**
     * Specifies value axis options for the PolarChart widget.
     */
    valueAxis: {
        allowDecimals?: boolean;
        axisDivisionFactor?: number;
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            displayBehindSeries?: boolean;
            extendAxis?: boolean;
            label?: {
                font?: DevExpress.viz.Font;
                text?: string;
                visible?: boolean;
            };
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                visible?: boolean;
            };
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
            customizeHint?: Function;
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            visible?: boolean;
        };
        logarithmBase?: number;
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
        opacity?: number;
        showZero?: boolean;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                text?: string;
            };
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
            };
        };
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
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
        type?: string;
        valueMarginsEnabled?: boolean;
        valueType?: string;
        visible?: boolean;
        width?: number;
    };
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
     * A handler for the adaptiveLayoutChange event.
     */
    adaptiveLayoutChange: EventEmitter<{
        height?: number;
        keepLabels?: boolean;
        width?: number;
    }>;
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
     * A handler for the argumentAxisChange event.
     */
    argumentAxisChange: EventEmitter<{
        allowDecimals?: boolean;
        argumentType?: string;
        axisDivisionFactor?: number;
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            displayBehindSeries?: boolean;
            extendAxis?: boolean;
            label?: {
                font?: DevExpress.viz.Font;
                text?: string;
                visible?: boolean;
            };
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                visible?: boolean;
            };
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        firstPointOnStartAngle?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        hoverMode?: string;
        inverted?: boolean;
        label?: {
            customizeHint?: Function;
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            visible?: boolean;
        };
        logarithmBase?: number;
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
        opacity?: number;
        originValue?: number;
        period?: number;
        startAngle?: number;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                text?: string;
            };
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
            };
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
        type?: string;
        visible?: boolean;
        width?: number;
    }>;
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
     * A handler for the commonAxisSettingsChange event.
     */
    commonAxisSettingsChange: EventEmitter<{
        allowDecimals?: boolean;
        color?: string;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                visible?: boolean;
            };
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
            font?: DevExpress.viz.Font;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            visible?: boolean;
        };
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
            visible?: boolean;
            width?: number;
        };
        opacity?: number;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
            };
        };
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        visible?: boolean;
        width?: number;
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
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
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
     * A handler for the useSpiderWebChange event.
     */
    useSpiderWebChange: EventEmitter<boolean>;
    /**
     * A handler for the valueAxisChange event.
     */
    valueAxisChange: EventEmitter<{
        allowDecimals?: boolean;
        axisDivisionFactor?: number;
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            displayBehindSeries?: boolean;
            extendAxis?: boolean;
            label?: {
                font?: DevExpress.viz.Font;
                text?: string;
                visible?: boolean;
            };
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                visible?: boolean;
            };
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
            customizeHint?: Function;
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string;
            visible?: boolean;
        };
        logarithmBase?: number;
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
        opacity?: number;
        showZero?: boolean;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                text?: string;
            };
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
            };
        };
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
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
        type?: string;
        valueMarginsEnabled?: boolean;
        valueType?: string;
        visible?: boolean;
        width?: number;
    }>;
    seriesChildren: QueryList<DxiSeriesComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxPolarChart;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxPolarChartModule {
}

import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxChart from 'devextreme/viz/chart';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiAnnotationComponent, DxiPaneComponent, DxiSeriesComponent, DxiValueAxisComponent, DxoAdaptiveLayoutModule, DxoAnimationModule, DxiAnnotationModule, DxoBorderModule, DxoFontModule, DxoImageModule, DxoShadowModule, DxoArgumentAxisModule, DxoAggregationIntervalModule, DxiBreakModule, DxoBreakStyleModule, DxiConstantLineModule, DxoLabelModule, DxoConstantLineStyleModule, DxoGridModule, DxoFormatModule, DxoMinorGridModule, DxoMinorTickModule, DxoMinorTickIntervalModule, DxoMinVisualRangeLengthModule, DxiStripModule, DxoStripStyleModule, DxoTickModule, DxoTickIntervalModule, DxoTitleModule, DxoCommonAnnotationSettingsModule, DxoCommonAxisSettingsModule, DxoCommonPaneSettingsModule, DxoCommonSeriesSettingsModule, DxoAggregationModule, DxoAreaModule, DxoHoverStyleModule, DxoHatchingModule, DxoConnectorModule, DxoPointModule, DxoHeightModule, DxoUrlModule, DxoWidthModule, DxoSelectionStyleModule, DxoReductionModule, DxoValueErrorBarModule, DxoBarModule, DxoBubbleModule, DxoCandlestickModule, DxoFullstackedareaModule, DxoFullstackedbarModule, DxoFullstackedlineModule, DxoFullstackedsplineModule, DxoFullstackedsplineareaModule, DxoArgumentFormatModule, DxoLineModule, DxoRangeareaModule, DxoRangebarModule, DxoScatterModule, DxoSplineModule, DxoSplineareaModule, DxoStackedareaModule, DxoStackedbarModule, DxoStackedlineModule, DxoStackedsplineModule, DxoStackedsplineareaModule, DxoStepareaModule, DxoSteplineModule, DxoStockModule, DxoCrosshairModule, DxoHorizontalLineModule, DxoVerticalLineModule, DxoDataPrepareSettingsModule, DxoExportModule, DxoLegendModule, DxoMarginModule, DxoSubtitleModule, DxoLoadingIndicatorModule, DxiPaneModule, DxoScrollBarModule, DxiSeriesModule, DxoSeriesTemplateModule, DxoSizeModule, DxoTooltipModule, DxiValueAxisModule, DxoZoomAndPanModule, DxoDragBoxStyleModule } from 'devextreme-angular/ui/nested';

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
/**
 * The Chart is a widget that visualizes data from a local or remote storage using a great variety of series types along with different interactive elements, such as tooltips, crosshair pointer, legend, etc.
 */
var DxChartComponent = /** @class */ (function (_super) {
    __extends(DxChartComponent, _super);
    function DxChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'argumentAxisClick', emit: 'onArgumentAxisClick' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'done', emit: 'onDone' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pointClick', emit: 'onPointClick' },
            { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
            { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
            { subscribe: 'seriesClick', emit: 'onSeriesClick' },
            { subscribe: 'seriesHoverChanged', emit: 'onSeriesHoverChanged' },
            { subscribe: 'seriesSelectionChanged', emit: 'onSeriesSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'zoomEnd', emit: 'onZoomEnd' },
            { subscribe: 'zoomStart', emit: 'onZoomStart' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'adjustOnZoomChange' },
            { emit: 'animationChange' },
            { emit: 'annotationsChange' },
            { emit: 'argumentAxisChange' },
            { emit: 'autoHidePointMarkersChange' },
            { emit: 'barGroupPaddingChange' },
            { emit: 'barGroupWidthChange' },
            { emit: 'barWidthChange' },
            { emit: 'commonAnnotationSettingsChange' },
            { emit: 'commonAxisSettingsChange' },
            { emit: 'commonPaneSettingsChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'crosshairChange' },
            { emit: 'customizeAnnotationChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataPrepareSettingsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'defaultPaneChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'equalBarWidthChange' },
            { emit: 'exportChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'maxBubbleSizeChange' },
            { emit: 'minBubbleSizeChange' },
            { emit: 'negativesAsZeroesChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'panesChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rotatedChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollBarChange' },
            { emit: 'scrollingModeChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesSelectionModeChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'sizeChange' },
            { emit: 'stickyHoveringChange' },
            { emit: 'synchronizeMultiAxesChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'useAggregationChange' },
            { emit: 'valueAxisChange' },
            { emit: 'zoomAndPanChange' },
            { emit: 'zoomingModeChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxChartComponent.prototype, "adaptiveLayout", {
        /**
         * Specifies adaptive layout options.
         */
        get: function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "adjustOnZoom", {
        /**
         * Specifies whether to adjust the value axis's visualRange when the argument axis is being zoomed or panned.
         */
        get: function () {
            return this._getOption('adjustOnZoom');
        },
        set: function (value) {
            this._setOption('adjustOnZoom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "animation", {
        /**
         * Specifies animation options.
         */
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "annotations", {
        /**
         * Specifies the annotation collection.
         */
        get: function () {
            return this._getOption('annotations');
        },
        set: function (value) {
            this._setOption('annotations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "argumentAxis", {
        /**
         * Configures the argument axis.
         */
        get: function () {
            return this._getOption('argumentAxis');
        },
        set: function (value) {
            this._setOption('argumentAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "autoHidePointMarkers", {
        /**
         * Specifies whether to hide series point markers automatically to reduce visual clutter.
         */
        get: function () {
            return this._getOption('autoHidePointMarkers');
        },
        set: function (value) {
            this._setOption('autoHidePointMarkers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "barGroupPadding", {
        /**
         * Controls the padding and consequently the width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth option is set.
         */
        get: function () {
            return this._getOption('barGroupPadding');
        },
        set: function (value) {
            this._setOption('barGroupPadding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "barGroupWidth", {
        /**
         * Specifies a fixed width for groups of bars with the same argument, measured in pixels. Takes precedence over the barGroupPadding option.
         */
        get: function () {
            return this._getOption('barGroupWidth');
        },
        set: function (value) {
            this._setOption('barGroupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "barWidth", {
        /**
         * Use CommonSeries.barPadding instead.
         */
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonAnnotationSettings", {
        /**
         * Specifies settings common for all annotations in the chart.
         */
        get: function () {
            return this._getOption('commonAnnotationSettings');
        },
        set: function (value) {
            this._setOption('commonAnnotationSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonAxisSettings", {
        /**
         * Defines common settings for both the argument and value axis in a chart.
         */
        get: function () {
            return this._getOption('commonAxisSettings');
        },
        set: function (value) {
            this._setOption('commonAxisSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonPaneSettings", {
        /**
         * Defines common settings for all panes in a chart.
         */
        get: function () {
            return this._getOption('commonPaneSettings');
        },
        set: function (value) {
            this._setOption('commonPaneSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonSeriesSettings", {
        /**
         * Specifies settings common for all series in the chart.
         */
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "containerBackgroundColor", {
        /**
         * Colors the background of the chart container.
         */
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "crosshair", {
        /**
         * Configures the crosshair feature.
         */
        get: function () {
            return this._getOption('crosshair');
        },
        set: function (value) {
            this._setOption('crosshair', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizeAnnotation", {
        /**
         * Customizes an individual annotation.
         */
        get: function () {
            return this._getOption('customizeAnnotation');
        },
        set: function (value) {
            this._setOption('customizeAnnotation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizeLabel", {
        /**
         * Customizes the appearance of an individual point label.
         */
        get: function () {
            return this._getOption('customizeLabel');
        },
        set: function (value) {
            this._setOption('customizeLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizePoint", {
        /**
         * Customizes the appearance of an individual series point.
         */
        get: function () {
            return this._getOption('customizePoint');
        },
        set: function (value) {
            this._setOption('customizePoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "dataPrepareSettings", {
        /**
         * Processes data before visualizing it.
         */
        get: function () {
            return this._getOption('dataPrepareSettings');
        },
        set: function (value) {
            this._setOption('dataPrepareSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "dataSource", {
        /**
         * Binds the widget to data.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "defaultPane", {
        /**
         * Specifies which pane should be used by default.
         */
        get: function () {
            return this._getOption('defaultPane');
        },
        set: function (value) {
            this._setOption('defaultPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to the user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "equalBarWidth", {
        /**
         * Use CommonSeries.ignoreEmptyPoints instead.
         */
        get: function () {
            return this._getOption('equalBarWidth');
        },
        set: function (value) {
            this._setOption('equalBarWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "export", {
        /**
         * Configures the exporting and printing features.
         */
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "legend", {
        /**
         * Specifies the options of a chart's legend.
         */
        get: function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "loadingIndicator", {
        /**
         * Configures the loading indicator.
         */
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "margin", {
        /**
         * Generates space around the widget.
         */
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "maxBubbleSize", {
        /**
         * Specifies a coefficient determining the diameter of the largest bubble.
         */
        get: function () {
            return this._getOption('maxBubbleSize');
        },
        set: function (value) {
            this._setOption('maxBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "minBubbleSize", {
        /**
         * Specifies the diameter of the smallest bubble measured in pixels.
         */
        get: function () {
            return this._getOption('minBubbleSize');
        },
        set: function (value) {
            this._setOption('minBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "negativesAsZeroes", {
        /**
         * Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.
         */
        get: function () {
            return this._getOption('negativesAsZeroes');
        },
        set: function (value) {
            this._setOption('negativesAsZeroes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "palette", {
        /**
         * Sets the palette to be used for colorizing series and their elements.
         */
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "paletteExtensionMode", {
        /**
         * Specifies what to do with colors in the palette when their number is less than the number of series (in the Chart widget) or points in a series (in the PieChart widget).
         */
        get: function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "panes", {
        /**
         * Declares a collection of panes.
         */
        get: function () {
            return this._getOption('panes');
        },
        set: function (value) {
            this._setOption('panes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "pathModified", {
        /**
         * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
         */
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "pointSelectionMode", {
        /**
         * Specifies whether a single point or multiple points can be selected in the chart.
         */
        get: function () {
            return this._getOption('pointSelectionMode');
        },
        set: function (value) {
            this._setOption('pointSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "redrawOnResize", {
        /**
         * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
         */
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "resolveLabelOverlapping", {
        /**
         * Specifies how the chart must behave when series point labels overlap.
         */
        get: function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "rotated", {
        /**
         * Swaps the axes around making the value axis horizontal and the argument axis vertical.
         */
        get: function () {
            return this._getOption('rotated');
        },
        set: function (value) {
            this._setOption('rotated', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "scrollBar", {
        /**
         * Specifies the settings of the scroll bar.
         */
        get: function () {
            return this._getOption('scrollBar');
        },
        set: function (value) {
            this._setOption('scrollBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "scrollingMode", {
        /**
         * Use the zoomAndPan option instead.
         */
        get: function () {
            return this._getOption('scrollingMode');
        },
        set: function (value) {
            this._setOption('scrollingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "series", {
        /**
         * Specifies options for Chart widget series.
         */
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesSelectionMode", {
        /**
         * Specifies whether a single series or multiple series can be selected in the chart.
         */
        get: function () {
            return this._getOption('seriesSelectionMode');
        },
        set: function (value) {
            this._setOption('seriesSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesTemplate", {
        /**
         * Defines options for the series template.
         */
        get: function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "size", {
        /**
         * Specifies the widget's size in pixels.
         */
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "stickyHovering", {
        /**
         * Specifies whether a point should remain in the hover state when the mouse pointer moves away.
         */
        get: function () {
            return this._getOption('stickyHovering');
        },
        set: function (value) {
            this._setOption('stickyHovering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "synchronizeMultiAxes", {
        /**
         * Indicates whether or not to synchronize value axes when they are displayed on a single pane.
         */
        get: function () {
            return this._getOption('synchronizeMultiAxes');
        },
        set: function (value) {
            this._setOption('synchronizeMultiAxes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "theme", {
        /**
         * Sets the name of the theme the widget uses.
         */
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "title", {
        /**
         * Configures the widget's title.
         */
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "tooltip", {
        /**
         * Configures tooltips.
         */
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "useAggregation", {
        /**
         * Use CommonSeries.aggregation.enabled instead.
         */
        get: function () {
            return this._getOption('useAggregation');
        },
        set: function (value) {
            this._setOption('useAggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "valueAxis", {
        /**
         * Configures the value axis.
         */
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "zoomAndPan", {
        /**
         * Configures zooming and panning.
         */
        get: function () {
            return this._getOption('zoomAndPan');
        },
        set: function (value) {
            this._setOption('zoomAndPan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "zoomingMode", {
        /**
         * Use the zoomAndPan option instead.
         */
        get: function () {
            return this._getOption('zoomingMode');
        },
        set: function (value) {
            this._setOption('zoomingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "annotationsChildren", {
        get: function () {
            return this._getOption('annotations');
        },
        set: function (value) {
            this.setChildren('annotations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "panesChildren", {
        get: function () {
            return this._getOption('panes');
        },
        set: function (value) {
            this.setChildren('panes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "valueAxisChildren", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this.setChildren('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    DxChartComponent.prototype._createInstance = function (element, options) {
        return new DxChart(element, options);
    };
    DxChartComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxChartComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('annotations', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('panes', changes);
        this.setupChanges('series', changes);
        this.setupChanges('valueAxis', changes);
    };
    DxChartComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('annotations');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('panes');
        this._idh.doCheck('series');
        this._idh.doCheck('valueAxis');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxChartComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: IterableDifferHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], DxChartComponent.prototype, "adaptiveLayout", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "adjustOnZoom", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "annotations", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "argumentAxis", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "autoHidePointMarkers", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "barGroupPadding", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "barGroupWidth", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "barWidth", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "commonAnnotationSettings", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "commonAxisSettings", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "commonPaneSettings", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "commonSeriesSettings", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "containerBackgroundColor", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "crosshair", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "customizeAnnotation", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "customizeLabel", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "customizePoint", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "dataPrepareSettings", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "defaultPane", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "equalBarWidth", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "legend", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "loadingIndicator", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "margin", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "maxBubbleSize", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "minBubbleSize", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "negativesAsZeroes", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "palette", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "paletteExtensionMode", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "panes", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "pointSelectionMode", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "redrawOnResize", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "resolveLabelOverlapping", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "rotated", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "scrollBar", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "scrollingMode", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "series", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "seriesSelectionMode", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "seriesTemplate", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "stickyHovering", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "synchronizeMultiAxes", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "useAggregation", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "valueAxis", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "zoomAndPan", null);
    __decorate([
        Input()
    ], DxChartComponent.prototype, "zoomingMode", null);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onArgumentAxisClick", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onDone", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onLegendClick", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onPointClick", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onPointHoverChanged", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onPointSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onSeriesClick", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onSeriesHoverChanged", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onSeriesSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onZoomEnd", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "onZoomStart", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "adaptiveLayoutChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "adjustOnZoomChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "annotationsChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "argumentAxisChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "autoHidePointMarkersChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "barGroupPaddingChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "barGroupWidthChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "barWidthChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "commonAnnotationSettingsChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "commonAxisSettingsChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "commonPaneSettingsChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "commonSeriesSettingsChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "containerBackgroundColorChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "crosshairChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "customizeAnnotationChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "customizeLabelChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "customizePointChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "dataPrepareSettingsChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "defaultPaneChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "equalBarWidthChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "legendChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "marginChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "maxBubbleSizeChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "minBubbleSizeChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "negativesAsZeroesChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "paletteChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "paletteExtensionModeChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "panesChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "pointSelectionModeChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "rotatedChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "scrollBarChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "scrollingModeChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "seriesChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "seriesSelectionModeChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "seriesTemplateChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "stickyHoveringChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "synchronizeMultiAxesChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "useAggregationChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "valueAxisChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "zoomAndPanChange", void 0);
    __decorate([
        Output()
    ], DxChartComponent.prototype, "zoomingModeChange", void 0);
    __decorate([
        ContentChildren(DxiAnnotationComponent)
    ], DxChartComponent.prototype, "annotationsChildren", null);
    __decorate([
        ContentChildren(DxiPaneComponent)
    ], DxChartComponent.prototype, "panesChildren", null);
    __decorate([
        ContentChildren(DxiSeriesComponent)
    ], DxChartComponent.prototype, "seriesChildren", null);
    __decorate([
        ContentChildren(DxiValueAxisComponent)
    ], DxChartComponent.prototype, "valueAxisChildren", null);
    DxChartComponent = __decorate([
        Component({
            selector: 'dx-chart',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ],
            styles: [' :host {  display: block; }']
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxChartComponent);
    return DxChartComponent;
}(DxComponent));
var DxChartModule = /** @class */ (function () {
    function DxChartModule() {
    }
    DxChartModule = __decorate([
        NgModule({
            imports: [
                DxoAdaptiveLayoutModule,
                DxoAnimationModule,
                DxiAnnotationModule,
                DxoBorderModule,
                DxoFontModule,
                DxoImageModule,
                DxoShadowModule,
                DxoArgumentAxisModule,
                DxoAggregationIntervalModule,
                DxiBreakModule,
                DxoBreakStyleModule,
                DxiConstantLineModule,
                DxoLabelModule,
                DxoConstantLineStyleModule,
                DxoGridModule,
                DxoFormatModule,
                DxoMinorGridModule,
                DxoMinorTickModule,
                DxoMinorTickIntervalModule,
                DxoMinVisualRangeLengthModule,
                DxiStripModule,
                DxoStripStyleModule,
                DxoTickModule,
                DxoTickIntervalModule,
                DxoTitleModule,
                DxoCommonAnnotationSettingsModule,
                DxoCommonAxisSettingsModule,
                DxoCommonPaneSettingsModule,
                DxoCommonSeriesSettingsModule,
                DxoAggregationModule,
                DxoAreaModule,
                DxoHoverStyleModule,
                DxoHatchingModule,
                DxoConnectorModule,
                DxoPointModule,
                DxoHeightModule,
                DxoUrlModule,
                DxoWidthModule,
                DxoSelectionStyleModule,
                DxoReductionModule,
                DxoValueErrorBarModule,
                DxoBarModule,
                DxoBubbleModule,
                DxoCandlestickModule,
                DxoFullstackedareaModule,
                DxoFullstackedbarModule,
                DxoFullstackedlineModule,
                DxoFullstackedsplineModule,
                DxoFullstackedsplineareaModule,
                DxoArgumentFormatModule,
                DxoLineModule,
                DxoRangeareaModule,
                DxoRangebarModule,
                DxoScatterModule,
                DxoSplineModule,
                DxoSplineareaModule,
                DxoStackedareaModule,
                DxoStackedbarModule,
                DxoStackedlineModule,
                DxoStackedsplineModule,
                DxoStackedsplineareaModule,
                DxoStepareaModule,
                DxoSteplineModule,
                DxoStockModule,
                DxoCrosshairModule,
                DxoHorizontalLineModule,
                DxoVerticalLineModule,
                DxoDataPrepareSettingsModule,
                DxoExportModule,
                DxoLegendModule,
                DxoMarginModule,
                DxoSubtitleModule,
                DxoLoadingIndicatorModule,
                DxiPaneModule,
                DxoScrollBarModule,
                DxiSeriesModule,
                DxoSeriesTemplateModule,
                DxoSizeModule,
                DxoTooltipModule,
                DxiValueAxisModule,
                DxoZoomAndPanModule,
                DxoDragBoxStyleModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxChartComponent
            ],
            exports: [
                DxChartComponent,
                DxoAdaptiveLayoutModule,
                DxoAnimationModule,
                DxiAnnotationModule,
                DxoBorderModule,
                DxoFontModule,
                DxoImageModule,
                DxoShadowModule,
                DxoArgumentAxisModule,
                DxoAggregationIntervalModule,
                DxiBreakModule,
                DxoBreakStyleModule,
                DxiConstantLineModule,
                DxoLabelModule,
                DxoConstantLineStyleModule,
                DxoGridModule,
                DxoFormatModule,
                DxoMinorGridModule,
                DxoMinorTickModule,
                DxoMinorTickIntervalModule,
                DxoMinVisualRangeLengthModule,
                DxiStripModule,
                DxoStripStyleModule,
                DxoTickModule,
                DxoTickIntervalModule,
                DxoTitleModule,
                DxoCommonAnnotationSettingsModule,
                DxoCommonAxisSettingsModule,
                DxoCommonPaneSettingsModule,
                DxoCommonSeriesSettingsModule,
                DxoAggregationModule,
                DxoAreaModule,
                DxoHoverStyleModule,
                DxoHatchingModule,
                DxoConnectorModule,
                DxoPointModule,
                DxoHeightModule,
                DxoUrlModule,
                DxoWidthModule,
                DxoSelectionStyleModule,
                DxoReductionModule,
                DxoValueErrorBarModule,
                DxoBarModule,
                DxoBubbleModule,
                DxoCandlestickModule,
                DxoFullstackedareaModule,
                DxoFullstackedbarModule,
                DxoFullstackedlineModule,
                DxoFullstackedsplineModule,
                DxoFullstackedsplineareaModule,
                DxoArgumentFormatModule,
                DxoLineModule,
                DxoRangeareaModule,
                DxoRangebarModule,
                DxoScatterModule,
                DxoSplineModule,
                DxoSplineareaModule,
                DxoStackedareaModule,
                DxoStackedbarModule,
                DxoStackedlineModule,
                DxoStackedsplineModule,
                DxoStackedsplineareaModule,
                DxoStepareaModule,
                DxoSteplineModule,
                DxoStockModule,
                DxoCrosshairModule,
                DxoHorizontalLineModule,
                DxoVerticalLineModule,
                DxoDataPrepareSettingsModule,
                DxoExportModule,
                DxoLegendModule,
                DxoMarginModule,
                DxoSubtitleModule,
                DxoLoadingIndicatorModule,
                DxiPaneModule,
                DxoScrollBarModule,
                DxiSeriesModule,
                DxoSeriesTemplateModule,
                DxoSizeModule,
                DxoTooltipModule,
                DxiValueAxisModule,
                DxoZoomAndPanModule,
                DxoDragBoxStyleModule,
                DxTemplateModule
            ]
        })
    ], DxChartModule);
    return DxChartModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxChartComponent, DxChartModule };
//# sourceMappingURL=devextreme-angular-ui-chart.js.map

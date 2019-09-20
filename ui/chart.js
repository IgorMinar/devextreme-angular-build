"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var core_1 = require("@angular/core");

var chart_1 = require("devextreme/viz/chart");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var adaptive_layout_1 = require("./nested/adaptive-layout");
var animation_1 = require("./nested/animation");
var annotation_dxi_1 = require("./nested/annotation-dxi");
var border_1 = require("./nested/border");
var font_1 = require("./nested/font");
var image_1 = require("./nested/image");
var shadow_1 = require("./nested/shadow");
var argument_axis_1 = require("./nested/argument-axis");
var aggregation_interval_1 = require("./nested/aggregation-interval");
var break_dxi_1 = require("./nested/break-dxi");
var break_style_1 = require("./nested/break-style");
var constant_line_dxi_1 = require("./nested/constant-line-dxi");
var label_1 = require("./nested/label");
var constant_line_style_1 = require("./nested/constant-line-style");
var grid_1 = require("./nested/grid");
var format_1 = require("./nested/format");
var minor_grid_1 = require("./nested/minor-grid");
var minor_tick_1 = require("./nested/minor-tick");
var minor_tick_interval_1 = require("./nested/minor-tick-interval");
var min_visual_range_length_1 = require("./nested/min-visual-range-length");
var strip_dxi_1 = require("./nested/strip-dxi");
var strip_style_1 = require("./nested/strip-style");
var tick_1 = require("./nested/tick");
var tick_interval_1 = require("./nested/tick-interval");
var title_1 = require("./nested/title");
var common_annotation_settings_1 = require("./nested/common-annotation-settings");
var common_axis_settings_1 = require("./nested/common-axis-settings");
var common_pane_settings_1 = require("./nested/common-pane-settings");
var common_series_settings_1 = require("./nested/common-series-settings");
var aggregation_1 = require("./nested/aggregation");
var area_1 = require("./nested/area");
var hover_style_1 = require("./nested/hover-style");
var hatching_1 = require("./nested/hatching");
var connector_1 = require("./nested/connector");
var point_1 = require("./nested/point");
var height_1 = require("./nested/height");
var url_1 = require("./nested/url");
var width_1 = require("./nested/width");
var selection_style_1 = require("./nested/selection-style");
var reduction_1 = require("./nested/reduction");
var value_error_bar_1 = require("./nested/value-error-bar");
var bar_1 = require("./nested/bar");
var bubble_1 = require("./nested/bubble");
var candlestick_1 = require("./nested/candlestick");
var fullstackedarea_1 = require("./nested/fullstackedarea");
var fullstackedbar_1 = require("./nested/fullstackedbar");
var fullstackedline_1 = require("./nested/fullstackedline");
var fullstackedspline_1 = require("./nested/fullstackedspline");
var fullstackedsplinearea_1 = require("./nested/fullstackedsplinearea");
var argument_format_1 = require("./nested/argument-format");
var line_1 = require("./nested/line");
var rangearea_1 = require("./nested/rangearea");
var rangebar_1 = require("./nested/rangebar");
var scatter_1 = require("./nested/scatter");
var spline_1 = require("./nested/spline");
var splinearea_1 = require("./nested/splinearea");
var stackedarea_1 = require("./nested/stackedarea");
var stackedbar_1 = require("./nested/stackedbar");
var stackedline_1 = require("./nested/stackedline");
var stackedspline_1 = require("./nested/stackedspline");
var stackedsplinearea_1 = require("./nested/stackedsplinearea");
var steparea_1 = require("./nested/steparea");
var stepline_1 = require("./nested/stepline");
var stock_1 = require("./nested/stock");
var crosshair_1 = require("./nested/crosshair");
var horizontal_line_1 = require("./nested/horizontal-line");
var vertical_line_1 = require("./nested/vertical-line");
var data_prepare_settings_1 = require("./nested/data-prepare-settings");
var export_1 = require("./nested/export");
var legend_1 = require("./nested/legend");
var margin_1 = require("./nested/margin");
var subtitle_1 = require("./nested/subtitle");
var loading_indicator_1 = require("./nested/loading-indicator");
var pane_dxi_1 = require("./nested/pane-dxi");
var scroll_bar_1 = require("./nested/scroll-bar");
var series_dxi_1 = require("./nested/series-dxi");
var series_template_1 = require("./nested/series-template");
var size_1 = require("./nested/size");
var tooltip_1 = require("./nested/tooltip");
var value_axis_dxi_1 = require("./nested/value-axis-dxi");
var zoom_and_pan_1 = require("./nested/zoom-and-pan");
var drag_box_style_1 = require("./nested/drag-box-style");
var annotation_dxi_2 = require("./nested/annotation-dxi");
var pane_dxi_2 = require("./nested/pane-dxi");
var series_dxi_2 = require("./nested/series-dxi");
var value_axis_dxi_2 = require("./nested/value-axis-dxi");
/**
 * The Chart is a widget that visualizes data from a local or remote storage using a great variety of series types along with different interactive elements, such as tooltips, crosshair pointer, legend, etc.
 */
var DxChartComponent = (function (_super) {
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
        get: /**
             * Specifies adaptive layout options.
             */
        function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "adjustOnZoom", {
        get: /**
             * Specifies whether to adjust the value axis's visualRange when the argument axis is being zoomed or panned.
             */
        function () {
            return this._getOption('adjustOnZoom');
        },
        set: function (value) {
            this._setOption('adjustOnZoom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "animation", {
        get: /**
             * Specifies animation options.
             */
        function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "annotations", {
        get: /**
             * Specifies the annotation collection.
             */
        function () {
            return this._getOption('annotations');
        },
        set: function (value) {
            this._setOption('annotations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "argumentAxis", {
        get: /**
             * Configures the argument axis.
             */
        function () {
            return this._getOption('argumentAxis');
        },
        set: function (value) {
            this._setOption('argumentAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "autoHidePointMarkers", {
        get: /**
             * Specifies whether to hide series point markers automatically to reduce visual clutter.
             */
        function () {
            return this._getOption('autoHidePointMarkers');
        },
        set: function (value) {
            this._setOption('autoHidePointMarkers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "barGroupPadding", {
        get: /**
             * Controls the padding and consequently the width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth option is set.
             */
        function () {
            return this._getOption('barGroupPadding');
        },
        set: function (value) {
            this._setOption('barGroupPadding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "barGroupWidth", {
        get: /**
             * Specifies a fixed width for groups of bars with the same argument, measured in pixels. Takes precedence over the barGroupPadding option.
             */
        function () {
            return this._getOption('barGroupWidth');
        },
        set: function (value) {
            this._setOption('barGroupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "barWidth", {
        get: /**
             * Use CommonSeries.barPadding instead.
             */
        function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonAnnotationSettings", {
        get: /**
             * Specifies settings common for all annotations in the chart.
             */
        function () {
            return this._getOption('commonAnnotationSettings');
        },
        set: function (value) {
            this._setOption('commonAnnotationSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonAxisSettings", {
        get: /**
             * Defines common settings for both the argument and value axis in a chart.
             */
        function () {
            return this._getOption('commonAxisSettings');
        },
        set: function (value) {
            this._setOption('commonAxisSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonPaneSettings", {
        get: /**
             * Defines common settings for all panes in a chart.
             */
        function () {
            return this._getOption('commonPaneSettings');
        },
        set: function (value) {
            this._setOption('commonPaneSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonSeriesSettings", {
        get: /**
             * Specifies settings common for all series in the chart.
             */
        function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "containerBackgroundColor", {
        get: /**
             * Colors the background of the chart container.
             */
        function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "crosshair", {
        get: /**
             * Configures the crosshair feature.
             */
        function () {
            return this._getOption('crosshair');
        },
        set: function (value) {
            this._setOption('crosshair', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizeAnnotation", {
        get: /**
             * Customizes an individual annotation.
             */
        function () {
            return this._getOption('customizeAnnotation');
        },
        set: function (value) {
            this._setOption('customizeAnnotation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizeLabel", {
        get: /**
             * Customizes the appearance of an individual point label.
             */
        function () {
            return this._getOption('customizeLabel');
        },
        set: function (value) {
            this._setOption('customizeLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizePoint", {
        get: /**
             * Customizes the appearance of an individual series point.
             */
        function () {
            return this._getOption('customizePoint');
        },
        set: function (value) {
            this._setOption('customizePoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "dataPrepareSettings", {
        get: /**
             * Processes data before visualizing it.
             */
        function () {
            return this._getOption('dataPrepareSettings');
        },
        set: function (value) {
            this._setOption('dataPrepareSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "dataSource", {
        get: /**
             * Binds the widget to data.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "defaultPane", {
        get: /**
             * Specifies which pane should be used by default.
             */
        function () {
            return this._getOption('defaultPane');
        },
        set: function (value) {
            this._setOption('defaultPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to the user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "equalBarWidth", {
        get: /**
             * Use CommonSeries.ignoreEmptyPoints instead.
             */
        function () {
            return this._getOption('equalBarWidth');
        },
        set: function (value) {
            this._setOption('equalBarWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "export", {
        get: /**
             * Configures the exporting and printing features.
             */
        function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "legend", {
        get: /**
             * Specifies the options of a chart's legend.
             */
        function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "loadingIndicator", {
        get: /**
             * Configures the loading indicator.
             */
        function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "margin", {
        get: /**
             * Generates space around the widget.
             */
        function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "maxBubbleSize", {
        get: /**
             * Specifies a coefficient determining the diameter of the largest bubble.
             */
        function () {
            return this._getOption('maxBubbleSize');
        },
        set: function (value) {
            this._setOption('maxBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "minBubbleSize", {
        get: /**
             * Specifies the diameter of the smallest bubble measured in pixels.
             */
        function () {
            return this._getOption('minBubbleSize');
        },
        set: function (value) {
            this._setOption('minBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "negativesAsZeroes", {
        get: /**
             * Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.
             */
        function () {
            return this._getOption('negativesAsZeroes');
        },
        set: function (value) {
            this._setOption('negativesAsZeroes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "palette", {
        get: /**
             * Sets the palette to be used for colorizing series and their elements.
             */
        function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "paletteExtensionMode", {
        get: /**
             * Specifies what to do with colors in the palette when their number is less than the number of series (in the Chart widget) or points in a series (in the PieChart widget).
             */
        function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "panes", {
        get: /**
             * Declares a collection of panes.
             */
        function () {
            return this._getOption('panes');
        },
        set: function (value) {
            this._setOption('panes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "pathModified", {
        get: /**
             * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
             */
        function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "pointSelectionMode", {
        get: /**
             * Specifies whether a single point or multiple points can be selected in the chart.
             */
        function () {
            return this._getOption('pointSelectionMode');
        },
        set: function (value) {
            this._setOption('pointSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "redrawOnResize", {
        get: /**
             * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
             */
        function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "resolveLabelOverlapping", {
        get: /**
             * Specifies how the chart must behave when series point labels overlap.
             */
        function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "rotated", {
        get: /**
             * Swaps the axes around making the value axis horizontal and the argument axis vertical.
             */
        function () {
            return this._getOption('rotated');
        },
        set: function (value) {
            this._setOption('rotated', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "scrollBar", {
        get: /**
             * Specifies the settings of the scroll bar.
             */
        function () {
            return this._getOption('scrollBar');
        },
        set: function (value) {
            this._setOption('scrollBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "scrollingMode", {
        get: /**
             * Use the zoomAndPan option instead.
             */
        function () {
            return this._getOption('scrollingMode');
        },
        set: function (value) {
            this._setOption('scrollingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "series", {
        get: /**
             * Specifies options for Chart widget series.
             */
        function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesSelectionMode", {
        get: /**
             * Specifies whether a single series or multiple series can be selected in the chart.
             */
        function () {
            return this._getOption('seriesSelectionMode');
        },
        set: function (value) {
            this._setOption('seriesSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesTemplate", {
        get: /**
             * Defines options for the series template.
             */
        function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "size", {
        get: /**
             * Specifies the widget's size in pixels.
             */
        function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "stickyHovering", {
        get: /**
             * Specifies whether a point should remain in the hover state when the mouse pointer moves away.
             */
        function () {
            return this._getOption('stickyHovering');
        },
        set: function (value) {
            this._setOption('stickyHovering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "synchronizeMultiAxes", {
        get: /**
             * Indicates whether or not to synchronize value axes when they are displayed on a single pane.
             */
        function () {
            return this._getOption('synchronizeMultiAxes');
        },
        set: function (value) {
            this._setOption('synchronizeMultiAxes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "theme", {
        get: /**
             * Sets the name of the theme the widget uses.
             */
        function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "title", {
        get: /**
             * Configures the widget's title.
             */
        function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "tooltip", {
        get: /**
             * Configures tooltips.
             */
        function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "useAggregation", {
        get: /**
             * Use CommonSeries.aggregation.enabled instead.
             */
        function () {
            return this._getOption('useAggregation');
        },
        set: function (value) {
            this._setOption('useAggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "valueAxis", {
        get: /**
             * Configures the value axis.
             */
        function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "zoomAndPan", {
        get: /**
             * Configures zooming and panning.
             */
        function () {
            return this._getOption('zoomAndPan');
        },
        set: function (value) {
            this._setOption('zoomAndPan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "zoomingMode", {
        get: /**
             * Use the zoomAndPan option instead.
             */
        function () {
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
        return new chart_1.default(element, options);
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
    DxChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-chart',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxChartComponent.propDecorators = {
        "adaptiveLayout": [{ type: core_1.Input },],
        "adjustOnZoom": [{ type: core_1.Input },],
        "animation": [{ type: core_1.Input },],
        "annotations": [{ type: core_1.Input },],
        "argumentAxis": [{ type: core_1.Input },],
        "autoHidePointMarkers": [{ type: core_1.Input },],
        "barGroupPadding": [{ type: core_1.Input },],
        "barGroupWidth": [{ type: core_1.Input },],
        "barWidth": [{ type: core_1.Input },],
        "commonAnnotationSettings": [{ type: core_1.Input },],
        "commonAxisSettings": [{ type: core_1.Input },],
        "commonPaneSettings": [{ type: core_1.Input },],
        "commonSeriesSettings": [{ type: core_1.Input },],
        "containerBackgroundColor": [{ type: core_1.Input },],
        "crosshair": [{ type: core_1.Input },],
        "customizeAnnotation": [{ type: core_1.Input },],
        "customizeLabel": [{ type: core_1.Input },],
        "customizePoint": [{ type: core_1.Input },],
        "dataPrepareSettings": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "defaultPane": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "equalBarWidth": [{ type: core_1.Input },],
        "export": [{ type: core_1.Input },],
        "legend": [{ type: core_1.Input },],
        "loadingIndicator": [{ type: core_1.Input },],
        "margin": [{ type: core_1.Input },],
        "maxBubbleSize": [{ type: core_1.Input },],
        "minBubbleSize": [{ type: core_1.Input },],
        "negativesAsZeroes": [{ type: core_1.Input },],
        "palette": [{ type: core_1.Input },],
        "paletteExtensionMode": [{ type: core_1.Input },],
        "panes": [{ type: core_1.Input },],
        "pathModified": [{ type: core_1.Input },],
        "pointSelectionMode": [{ type: core_1.Input },],
        "redrawOnResize": [{ type: core_1.Input },],
        "resolveLabelOverlapping": [{ type: core_1.Input },],
        "rotated": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "scrollBar": [{ type: core_1.Input },],
        "scrollingMode": [{ type: core_1.Input },],
        "series": [{ type: core_1.Input },],
        "seriesSelectionMode": [{ type: core_1.Input },],
        "seriesTemplate": [{ type: core_1.Input },],
        "size": [{ type: core_1.Input },],
        "stickyHovering": [{ type: core_1.Input },],
        "synchronizeMultiAxes": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "tooltip": [{ type: core_1.Input },],
        "useAggregation": [{ type: core_1.Input },],
        "valueAxis": [{ type: core_1.Input },],
        "zoomAndPan": [{ type: core_1.Input },],
        "zoomingMode": [{ type: core_1.Input },],
        "onArgumentAxisClick": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onDone": [{ type: core_1.Output },],
        "onDrawn": [{ type: core_1.Output },],
        "onExported": [{ type: core_1.Output },],
        "onExporting": [{ type: core_1.Output },],
        "onFileSaving": [{ type: core_1.Output },],
        "onIncidentOccurred": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onLegendClick": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPointClick": [{ type: core_1.Output },],
        "onPointHoverChanged": [{ type: core_1.Output },],
        "onPointSelectionChanged": [{ type: core_1.Output },],
        "onSeriesClick": [{ type: core_1.Output },],
        "onSeriesHoverChanged": [{ type: core_1.Output },],
        "onSeriesSelectionChanged": [{ type: core_1.Output },],
        "onTooltipHidden": [{ type: core_1.Output },],
        "onTooltipShown": [{ type: core_1.Output },],
        "onZoomEnd": [{ type: core_1.Output },],
        "onZoomStart": [{ type: core_1.Output },],
        "adaptiveLayoutChange": [{ type: core_1.Output },],
        "adjustOnZoomChange": [{ type: core_1.Output },],
        "animationChange": [{ type: core_1.Output },],
        "annotationsChange": [{ type: core_1.Output },],
        "argumentAxisChange": [{ type: core_1.Output },],
        "autoHidePointMarkersChange": [{ type: core_1.Output },],
        "barGroupPaddingChange": [{ type: core_1.Output },],
        "barGroupWidthChange": [{ type: core_1.Output },],
        "barWidthChange": [{ type: core_1.Output },],
        "commonAnnotationSettingsChange": [{ type: core_1.Output },],
        "commonAxisSettingsChange": [{ type: core_1.Output },],
        "commonPaneSettingsChange": [{ type: core_1.Output },],
        "commonSeriesSettingsChange": [{ type: core_1.Output },],
        "containerBackgroundColorChange": [{ type: core_1.Output },],
        "crosshairChange": [{ type: core_1.Output },],
        "customizeAnnotationChange": [{ type: core_1.Output },],
        "customizeLabelChange": [{ type: core_1.Output },],
        "customizePointChange": [{ type: core_1.Output },],
        "dataPrepareSettingsChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "defaultPaneChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "equalBarWidthChange": [{ type: core_1.Output },],
        "exportChange": [{ type: core_1.Output },],
        "legendChange": [{ type: core_1.Output },],
        "loadingIndicatorChange": [{ type: core_1.Output },],
        "marginChange": [{ type: core_1.Output },],
        "maxBubbleSizeChange": [{ type: core_1.Output },],
        "minBubbleSizeChange": [{ type: core_1.Output },],
        "negativesAsZeroesChange": [{ type: core_1.Output },],
        "paletteChange": [{ type: core_1.Output },],
        "paletteExtensionModeChange": [{ type: core_1.Output },],
        "panesChange": [{ type: core_1.Output },],
        "pathModifiedChange": [{ type: core_1.Output },],
        "pointSelectionModeChange": [{ type: core_1.Output },],
        "redrawOnResizeChange": [{ type: core_1.Output },],
        "resolveLabelOverlappingChange": [{ type: core_1.Output },],
        "rotatedChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "scrollBarChange": [{ type: core_1.Output },],
        "scrollingModeChange": [{ type: core_1.Output },],
        "seriesChange": [{ type: core_1.Output },],
        "seriesSelectionModeChange": [{ type: core_1.Output },],
        "seriesTemplateChange": [{ type: core_1.Output },],
        "sizeChange": [{ type: core_1.Output },],
        "stickyHoveringChange": [{ type: core_1.Output },],
        "synchronizeMultiAxesChange": [{ type: core_1.Output },],
        "themeChange": [{ type: core_1.Output },],
        "titleChange": [{ type: core_1.Output },],
        "tooltipChange": [{ type: core_1.Output },],
        "useAggregationChange": [{ type: core_1.Output },],
        "valueAxisChange": [{ type: core_1.Output },],
        "zoomAndPanChange": [{ type: core_1.Output },],
        "zoomingModeChange": [{ type: core_1.Output },],
        "annotationsChildren": [{ type: core_1.ContentChildren, args: [annotation_dxi_2.DxiAnnotationComponent,] },],
        "panesChildren": [{ type: core_1.ContentChildren, args: [pane_dxi_2.DxiPaneComponent,] },],
        "seriesChildren": [{ type: core_1.ContentChildren, args: [series_dxi_2.DxiSeriesComponent,] },],
        "valueAxisChildren": [{ type: core_1.ContentChildren, args: [value_axis_dxi_2.DxiValueAxisComponent,] },],
    };
    return DxChartComponent;
}(component_1.DxComponent));
exports.DxChartComponent = DxChartComponent;
var DxChartModule = (function () {
    function DxChartModule() {
    }
    DxChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        annotation_dxi_1.DxiAnnotationModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        image_1.DxoImageModule,
                        shadow_1.DxoShadowModule,
                        argument_axis_1.DxoArgumentAxisModule,
                        aggregation_interval_1.DxoAggregationIntervalModule,
                        break_dxi_1.DxiBreakModule,
                        break_style_1.DxoBreakStyleModule,
                        constant_line_dxi_1.DxiConstantLineModule,
                        label_1.DxoLabelModule,
                        constant_line_style_1.DxoConstantLineStyleModule,
                        grid_1.DxoGridModule,
                        format_1.DxoFormatModule,
                        minor_grid_1.DxoMinorGridModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        min_visual_range_length_1.DxoMinVisualRangeLengthModule,
                        strip_dxi_1.DxiStripModule,
                        strip_style_1.DxoStripStyleModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        title_1.DxoTitleModule,
                        common_annotation_settings_1.DxoCommonAnnotationSettingsModule,
                        common_axis_settings_1.DxoCommonAxisSettingsModule,
                        common_pane_settings_1.DxoCommonPaneSettingsModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        aggregation_1.DxoAggregationModule,
                        area_1.DxoAreaModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        height_1.DxoHeightModule,
                        url_1.DxoUrlModule,
                        width_1.DxoWidthModule,
                        selection_style_1.DxoSelectionStyleModule,
                        reduction_1.DxoReductionModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        bar_1.DxoBarModule,
                        bubble_1.DxoBubbleModule,
                        candlestick_1.DxoCandlestickModule,
                        fullstackedarea_1.DxoFullstackedareaModule,
                        fullstackedbar_1.DxoFullstackedbarModule,
                        fullstackedline_1.DxoFullstackedlineModule,
                        fullstackedspline_1.DxoFullstackedsplineModule,
                        fullstackedsplinearea_1.DxoFullstackedsplineareaModule,
                        argument_format_1.DxoArgumentFormatModule,
                        line_1.DxoLineModule,
                        rangearea_1.DxoRangeareaModule,
                        rangebar_1.DxoRangebarModule,
                        scatter_1.DxoScatterModule,
                        spline_1.DxoSplineModule,
                        splinearea_1.DxoSplineareaModule,
                        stackedarea_1.DxoStackedareaModule,
                        stackedbar_1.DxoStackedbarModule,
                        stackedline_1.DxoStackedlineModule,
                        stackedspline_1.DxoStackedsplineModule,
                        stackedsplinearea_1.DxoStackedsplineareaModule,
                        steparea_1.DxoStepareaModule,
                        stepline_1.DxoSteplineModule,
                        stock_1.DxoStockModule,
                        crosshair_1.DxoCrosshairModule,
                        horizontal_line_1.DxoHorizontalLineModule,
                        vertical_line_1.DxoVerticalLineModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        export_1.DxoExportModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        subtitle_1.DxoSubtitleModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        pane_dxi_1.DxiPaneModule,
                        scroll_bar_1.DxoScrollBarModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        value_axis_dxi_1.DxiValueAxisModule,
                        zoom_and_pan_1.DxoZoomAndPanModule,
                        drag_box_style_1.DxoDragBoxStyleModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxChartComponent
                    ],
                    exports: [
                        DxChartComponent,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        annotation_dxi_1.DxiAnnotationModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        image_1.DxoImageModule,
                        shadow_1.DxoShadowModule,
                        argument_axis_1.DxoArgumentAxisModule,
                        aggregation_interval_1.DxoAggregationIntervalModule,
                        break_dxi_1.DxiBreakModule,
                        break_style_1.DxoBreakStyleModule,
                        constant_line_dxi_1.DxiConstantLineModule,
                        label_1.DxoLabelModule,
                        constant_line_style_1.DxoConstantLineStyleModule,
                        grid_1.DxoGridModule,
                        format_1.DxoFormatModule,
                        minor_grid_1.DxoMinorGridModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        min_visual_range_length_1.DxoMinVisualRangeLengthModule,
                        strip_dxi_1.DxiStripModule,
                        strip_style_1.DxoStripStyleModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        title_1.DxoTitleModule,
                        common_annotation_settings_1.DxoCommonAnnotationSettingsModule,
                        common_axis_settings_1.DxoCommonAxisSettingsModule,
                        common_pane_settings_1.DxoCommonPaneSettingsModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        aggregation_1.DxoAggregationModule,
                        area_1.DxoAreaModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        height_1.DxoHeightModule,
                        url_1.DxoUrlModule,
                        width_1.DxoWidthModule,
                        selection_style_1.DxoSelectionStyleModule,
                        reduction_1.DxoReductionModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        bar_1.DxoBarModule,
                        bubble_1.DxoBubbleModule,
                        candlestick_1.DxoCandlestickModule,
                        fullstackedarea_1.DxoFullstackedareaModule,
                        fullstackedbar_1.DxoFullstackedbarModule,
                        fullstackedline_1.DxoFullstackedlineModule,
                        fullstackedspline_1.DxoFullstackedsplineModule,
                        fullstackedsplinearea_1.DxoFullstackedsplineareaModule,
                        argument_format_1.DxoArgumentFormatModule,
                        line_1.DxoLineModule,
                        rangearea_1.DxoRangeareaModule,
                        rangebar_1.DxoRangebarModule,
                        scatter_1.DxoScatterModule,
                        spline_1.DxoSplineModule,
                        splinearea_1.DxoSplineareaModule,
                        stackedarea_1.DxoStackedareaModule,
                        stackedbar_1.DxoStackedbarModule,
                        stackedline_1.DxoStackedlineModule,
                        stackedspline_1.DxoStackedsplineModule,
                        stackedsplinearea_1.DxoStackedsplineareaModule,
                        steparea_1.DxoStepareaModule,
                        stepline_1.DxoSteplineModule,
                        stock_1.DxoStockModule,
                        crosshair_1.DxoCrosshairModule,
                        horizontal_line_1.DxoHorizontalLineModule,
                        vertical_line_1.DxoVerticalLineModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        export_1.DxoExportModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        subtitle_1.DxoSubtitleModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        pane_dxi_1.DxiPaneModule,
                        scroll_bar_1.DxoScrollBarModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        value_axis_dxi_1.DxiValueAxisModule,
                        zoom_and_pan_1.DxoZoomAndPanModule,
                        drag_box_style_1.DxoDragBoxStyleModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxChartModule;
}());
exports.DxChartModule = DxChartModule;
//# sourceMappingURL=chart.js.map
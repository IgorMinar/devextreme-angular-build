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
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';

import DxChart from 'devextreme/viz/chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAdaptiveLayoutModule } from './nested/adaptive-layout';
import { DxoAnimationModule } from './nested/animation';
import { DxiAnnotationModule } from './nested/annotation-dxi';
import { DxoBorderModule } from './nested/border';
import { DxoFontModule } from './nested/font';
import { DxoImageModule } from './nested/image';
import { DxoShadowModule } from './nested/shadow';
import { DxoArgumentAxisModule } from './nested/argument-axis';
import { DxoAggregationIntervalModule } from './nested/aggregation-interval';
import { DxiBreakModule } from './nested/break-dxi';
import { DxoBreakStyleModule } from './nested/break-style';
import { DxiConstantLineModule } from './nested/constant-line-dxi';
import { DxoLabelModule } from './nested/label';
import { DxoConstantLineStyleModule } from './nested/constant-line-style';
import { DxoGridModule } from './nested/grid';
import { DxoFormatModule } from './nested/format';
import { DxoMinorGridModule } from './nested/minor-grid';
import { DxoMinorTickModule } from './nested/minor-tick';
import { DxoMinorTickIntervalModule } from './nested/minor-tick-interval';
import { DxoMinVisualRangeLengthModule } from './nested/min-visual-range-length';
import { DxiStripModule } from './nested/strip-dxi';
import { DxoStripStyleModule } from './nested/strip-style';
import { DxoTickModule } from './nested/tick';
import { DxoTickIntervalModule } from './nested/tick-interval';
import { DxoTitleModule } from './nested/title';
import { DxoCommonAnnotationSettingsModule } from './nested/common-annotation-settings';
import { DxoCommonAxisSettingsModule } from './nested/common-axis-settings';
import { DxoCommonPaneSettingsModule } from './nested/common-pane-settings';
import { DxoCommonSeriesSettingsModule } from './nested/common-series-settings';
import { DxoAggregationModule } from './nested/aggregation';
import { DxoAreaModule } from './nested/area';
import { DxoHoverStyleModule } from './nested/hover-style';
import { DxoHatchingModule } from './nested/hatching';
import { DxoConnectorModule } from './nested/connector';
import { DxoPointModule } from './nested/point';
import { DxoHeightModule } from './nested/height';
import { DxoUrlModule } from './nested/url';
import { DxoWidthModule } from './nested/width';
import { DxoSelectionStyleModule } from './nested/selection-style';
import { DxoReductionModule } from './nested/reduction';
import { DxoValueErrorBarModule } from './nested/value-error-bar';
import { DxoBarModule } from './nested/bar';
import { DxoBubbleModule } from './nested/bubble';
import { DxoCandlestickModule } from './nested/candlestick';
import { DxoFullstackedareaModule } from './nested/fullstackedarea';
import { DxoFullstackedbarModule } from './nested/fullstackedbar';
import { DxoFullstackedlineModule } from './nested/fullstackedline';
import { DxoFullstackedsplineModule } from './nested/fullstackedspline';
import { DxoFullstackedsplineareaModule } from './nested/fullstackedsplinearea';
import { DxoArgumentFormatModule } from './nested/argument-format';
import { DxoLineModule } from './nested/line';
import { DxoRangeareaModule } from './nested/rangearea';
import { DxoRangebarModule } from './nested/rangebar';
import { DxoScatterModule } from './nested/scatter';
import { DxoSplineModule } from './nested/spline';
import { DxoSplineareaModule } from './nested/splinearea';
import { DxoStackedareaModule } from './nested/stackedarea';
import { DxoStackedbarModule } from './nested/stackedbar';
import { DxoStackedlineModule } from './nested/stackedline';
import { DxoStackedsplineModule } from './nested/stackedspline';
import { DxoStackedsplineareaModule } from './nested/stackedsplinearea';
import { DxoStepareaModule } from './nested/steparea';
import { DxoSteplineModule } from './nested/stepline';
import { DxoStockModule } from './nested/stock';
import { DxoCrosshairModule } from './nested/crosshair';
import { DxoHorizontalLineModule } from './nested/horizontal-line';
import { DxoVerticalLineModule } from './nested/vertical-line';
import { DxoDataPrepareSettingsModule } from './nested/data-prepare-settings';
import { DxoExportModule } from './nested/export';
import { DxoLegendModule } from './nested/legend';
import { DxoMarginModule } from './nested/margin';
import { DxoSubtitleModule } from './nested/subtitle';
import { DxoLoadingIndicatorModule } from './nested/loading-indicator';
import { DxiPaneModule } from './nested/pane-dxi';
import { DxoScrollBarModule } from './nested/scroll-bar';
import { DxiSeriesModule } from './nested/series-dxi';
import { DxoSeriesTemplateModule } from './nested/series-template';
import { DxoSizeModule } from './nested/size';
import { DxoTooltipModule } from './nested/tooltip';
import { DxiValueAxisModule } from './nested/value-axis-dxi';
import { DxoZoomAndPanModule } from './nested/zoom-and-pan';
import { DxoDragBoxStyleModule } from './nested/drag-box-style';
import { DxiAnnotationComponent } from './nested/annotation-dxi';
import { DxiPaneComponent } from './nested/pane-dxi';
import { DxiSeriesComponent } from './nested/series-dxi';
import { DxiValueAxisComponent } from './nested/value-axis-dxi';
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
    DxChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-chart',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxChartComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxChartComponent.propDecorators = {
        "adaptiveLayout": [{ type: Input },],
        "adjustOnZoom": [{ type: Input },],
        "animation": [{ type: Input },],
        "annotations": [{ type: Input },],
        "argumentAxis": [{ type: Input },],
        "autoHidePointMarkers": [{ type: Input },],
        "barGroupPadding": [{ type: Input },],
        "barGroupWidth": [{ type: Input },],
        "barWidth": [{ type: Input },],
        "commonAnnotationSettings": [{ type: Input },],
        "commonAxisSettings": [{ type: Input },],
        "commonPaneSettings": [{ type: Input },],
        "commonSeriesSettings": [{ type: Input },],
        "containerBackgroundColor": [{ type: Input },],
        "crosshair": [{ type: Input },],
        "customizeAnnotation": [{ type: Input },],
        "customizeLabel": [{ type: Input },],
        "customizePoint": [{ type: Input },],
        "dataPrepareSettings": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "defaultPane": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "equalBarWidth": [{ type: Input },],
        "export": [{ type: Input },],
        "legend": [{ type: Input },],
        "loadingIndicator": [{ type: Input },],
        "margin": [{ type: Input },],
        "maxBubbleSize": [{ type: Input },],
        "minBubbleSize": [{ type: Input },],
        "negativesAsZeroes": [{ type: Input },],
        "palette": [{ type: Input },],
        "paletteExtensionMode": [{ type: Input },],
        "panes": [{ type: Input },],
        "pathModified": [{ type: Input },],
        "pointSelectionMode": [{ type: Input },],
        "redrawOnResize": [{ type: Input },],
        "resolveLabelOverlapping": [{ type: Input },],
        "rotated": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "scrollBar": [{ type: Input },],
        "scrollingMode": [{ type: Input },],
        "series": [{ type: Input },],
        "seriesSelectionMode": [{ type: Input },],
        "seriesTemplate": [{ type: Input },],
        "size": [{ type: Input },],
        "stickyHovering": [{ type: Input },],
        "synchronizeMultiAxes": [{ type: Input },],
        "theme": [{ type: Input },],
        "title": [{ type: Input },],
        "tooltip": [{ type: Input },],
        "useAggregation": [{ type: Input },],
        "valueAxis": [{ type: Input },],
        "zoomAndPan": [{ type: Input },],
        "zoomingMode": [{ type: Input },],
        "onArgumentAxisClick": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onDone": [{ type: Output },],
        "onDrawn": [{ type: Output },],
        "onExported": [{ type: Output },],
        "onExporting": [{ type: Output },],
        "onFileSaving": [{ type: Output },],
        "onIncidentOccurred": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onLegendClick": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onPointClick": [{ type: Output },],
        "onPointHoverChanged": [{ type: Output },],
        "onPointSelectionChanged": [{ type: Output },],
        "onSeriesClick": [{ type: Output },],
        "onSeriesHoverChanged": [{ type: Output },],
        "onSeriesSelectionChanged": [{ type: Output },],
        "onTooltipHidden": [{ type: Output },],
        "onTooltipShown": [{ type: Output },],
        "onZoomEnd": [{ type: Output },],
        "onZoomStart": [{ type: Output },],
        "adaptiveLayoutChange": [{ type: Output },],
        "adjustOnZoomChange": [{ type: Output },],
        "animationChange": [{ type: Output },],
        "annotationsChange": [{ type: Output },],
        "argumentAxisChange": [{ type: Output },],
        "autoHidePointMarkersChange": [{ type: Output },],
        "barGroupPaddingChange": [{ type: Output },],
        "barGroupWidthChange": [{ type: Output },],
        "barWidthChange": [{ type: Output },],
        "commonAnnotationSettingsChange": [{ type: Output },],
        "commonAxisSettingsChange": [{ type: Output },],
        "commonPaneSettingsChange": [{ type: Output },],
        "commonSeriesSettingsChange": [{ type: Output },],
        "containerBackgroundColorChange": [{ type: Output },],
        "crosshairChange": [{ type: Output },],
        "customizeAnnotationChange": [{ type: Output },],
        "customizeLabelChange": [{ type: Output },],
        "customizePointChange": [{ type: Output },],
        "dataPrepareSettingsChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "defaultPaneChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "equalBarWidthChange": [{ type: Output },],
        "exportChange": [{ type: Output },],
        "legendChange": [{ type: Output },],
        "loadingIndicatorChange": [{ type: Output },],
        "marginChange": [{ type: Output },],
        "maxBubbleSizeChange": [{ type: Output },],
        "minBubbleSizeChange": [{ type: Output },],
        "negativesAsZeroesChange": [{ type: Output },],
        "paletteChange": [{ type: Output },],
        "paletteExtensionModeChange": [{ type: Output },],
        "panesChange": [{ type: Output },],
        "pathModifiedChange": [{ type: Output },],
        "pointSelectionModeChange": [{ type: Output },],
        "redrawOnResizeChange": [{ type: Output },],
        "resolveLabelOverlappingChange": [{ type: Output },],
        "rotatedChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "scrollBarChange": [{ type: Output },],
        "scrollingModeChange": [{ type: Output },],
        "seriesChange": [{ type: Output },],
        "seriesSelectionModeChange": [{ type: Output },],
        "seriesTemplateChange": [{ type: Output },],
        "sizeChange": [{ type: Output },],
        "stickyHoveringChange": [{ type: Output },],
        "synchronizeMultiAxesChange": [{ type: Output },],
        "themeChange": [{ type: Output },],
        "titleChange": [{ type: Output },],
        "tooltipChange": [{ type: Output },],
        "useAggregationChange": [{ type: Output },],
        "valueAxisChange": [{ type: Output },],
        "zoomAndPanChange": [{ type: Output },],
        "zoomingModeChange": [{ type: Output },],
        "annotationsChildren": [{ type: ContentChildren, args: [DxiAnnotationComponent,] },],
        "panesChildren": [{ type: ContentChildren, args: [DxiPaneComponent,] },],
        "seriesChildren": [{ type: ContentChildren, args: [DxiSeriesComponent,] },],
        "valueAxisChildren": [{ type: ContentChildren, args: [DxiValueAxisComponent,] },],
    };
    return DxChartComponent;
}(DxComponent));
export { DxChartComponent };
var DxChartModule = (function () {
    function DxChartModule() {
    }
    DxChartModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxChartModule;
}());
export { DxChartModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91aS9jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBSVosZUFBZSxFQUNmLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQztBQUVuRCxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlC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O3dCQUM5Qix1QkFBdUI7d0JBQ3ZCLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsMEJBQTBCO3dCQUMxQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLHVCQUF1Qjt3QkFDdkIscUJBQXFCO3dCQUNyQiw0QkFBNEI7d0JBQzVCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIseUJBQXlCO3dCQUN6QixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZix1QkFBdUI7d0JBQ3ZCLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUNyQixnQkFBZ0I7cUJBQ2pCO2lCQUNGOzt3QkF4aEREOztTQXloRGEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4Q2hhcnQgZnJvbSAnZGV2ZXh0cmVtZS92aXovY2hhcnQnO1xyXG5cclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeG9BZGFwdGl2ZUxheW91dE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FkYXB0aXZlLWxheW91dCc7XHJcbmltcG9ydCB7IER4b0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IER4aUFubm90YXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hbm5vdGF0aW9uLWR4aSc7XHJcbmltcG9ydCB7IER4b0JvcmRlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2JvcmRlcic7XHJcbmltcG9ydCB7IER4b0ZvbnRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mb250JztcclxuaW1wb3J0IHsgRHhvSW1hZ2VNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9pbWFnZSc7XHJcbmltcG9ydCB7IER4b1NoYWRvd01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NoYWRvdyc7XHJcbmltcG9ydCB7IER4b0FyZ3VtZW50QXhpc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FyZ3VtZW50LWF4aXMnO1xyXG5pbXBvcnQgeyBEeG9BZ2dyZWdhdGlvbkludGVydmFsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYWdncmVnYXRpb24taW50ZXJ2YWwnO1xyXG5pbXBvcnQgeyBEeGlCcmVha01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2JyZWFrLWR4aSc7XHJcbmltcG9ydCB7IER4b0JyZWFrU3R5bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9icmVhay1zdHlsZSc7XHJcbmltcG9ydCB7IER4aUNvbnN0YW50TGluZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbnN0YW50LWxpbmUtZHhpJztcclxuaW1wb3J0IHsgRHhvTGFiZWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sYWJlbCc7XHJcbmltcG9ydCB7IER4b0NvbnN0YW50TGluZVN0eWxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29uc3RhbnQtbGluZS1zdHlsZSc7XHJcbmltcG9ydCB7IER4b0dyaWRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ncmlkJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybWF0JztcclxuaW1wb3J0IHsgRHhvTWlub3JHcmlkTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWlub3ItZ3JpZCc7XHJcbmltcG9ydCB7IER4b01pbm9yVGlja01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL21pbm9yLXRpY2snO1xyXG5pbXBvcnQgeyBEeG9NaW5vclRpY2tJbnRlcnZhbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL21pbm9yLXRpY2staW50ZXJ2YWwnO1xyXG5pbXBvcnQgeyBEeG9NaW5WaXN1YWxSYW5nZUxlbmd0aE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL21pbi12aXN1YWwtcmFuZ2UtbGVuZ3RoJztcclxuaW1wb3J0IHsgRHhpU3RyaXBNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdHJpcC1keGknO1xyXG5pbXBvcnQgeyBEeG9TdHJpcFN0eWxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3RyaXAtc3R5bGUnO1xyXG5pbXBvcnQgeyBEeG9UaWNrTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGljayc7XHJcbmltcG9ydCB7IER4b1RpY2tJbnRlcnZhbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RpY2staW50ZXJ2YWwnO1xyXG5pbXBvcnQgeyBEeG9UaXRsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RpdGxlJztcclxuaW1wb3J0IHsgRHhvQ29tbW9uQW5ub3RhdGlvblNldHRpbmdzTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBEeG9Db21tb25BeGlzU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb21tb24tYXhpcy1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IER4b0NvbW1vblBhbmVTZXR0aW5nc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbW1vbi1wYW5lLXNldHRpbmdzJztcclxuaW1wb3J0IHsgRHhvQ29tbW9uU2VyaWVzU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb21tb24tc2VyaWVzLXNldHRpbmdzJztcclxuaW1wb3J0IHsgRHhvQWdncmVnYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hZ2dyZWdhdGlvbic7XHJcbmltcG9ydCB7IER4b0FyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hcmVhJztcclxuaW1wb3J0IHsgRHhvSG92ZXJTdHlsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2hvdmVyLXN0eWxlJztcclxuaW1wb3J0IHsgRHhvSGF0Y2hpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9oYXRjaGluZyc7XHJcbmltcG9ydCB7IER4b0Nvbm5lY3Rvck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Nvbm5lY3Rvcic7XHJcbmltcG9ydCB7IER4b1BvaW50TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcG9pbnQnO1xyXG5pbXBvcnQgeyBEeG9IZWlnaHRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9oZWlnaHQnO1xyXG5pbXBvcnQgeyBEeG9VcmxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC91cmwnO1xyXG5pbXBvcnQgeyBEeG9XaWR0aE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3dpZHRoJztcclxuaW1wb3J0IHsgRHhvU2VsZWN0aW9uU3R5bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zZWxlY3Rpb24tc3R5bGUnO1xyXG5pbXBvcnQgeyBEeG9SZWR1Y3Rpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9yZWR1Y3Rpb24nO1xyXG5pbXBvcnQgeyBEeG9WYWx1ZUVycm9yQmFyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdmFsdWUtZXJyb3ItYmFyJztcclxuaW1wb3J0IHsgRHhvQmFyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYmFyJztcclxuaW1wb3J0IHsgRHhvQnViYmxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYnViYmxlJztcclxuaW1wb3J0IHsgRHhvQ2FuZGxlc3RpY2tNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jYW5kbGVzdGljayc7XHJcbmltcG9ydCB7IER4b0Z1bGxzdGFja2VkYXJlYU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Z1bGxzdGFja2VkYXJlYSc7XHJcbmltcG9ydCB7IER4b0Z1bGxzdGFja2VkYmFyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZnVsbHN0YWNrZWRiYXInO1xyXG5pbXBvcnQgeyBEeG9GdWxsc3RhY2tlZGxpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mdWxsc3RhY2tlZGxpbmUnO1xyXG5pbXBvcnQgeyBEeG9GdWxsc3RhY2tlZHNwbGluZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Z1bGxzdGFja2Vkc3BsaW5lJztcclxuaW1wb3J0IHsgRHhvRnVsbHN0YWNrZWRzcGxpbmVhcmVhTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZnVsbHN0YWNrZWRzcGxpbmVhcmVhJztcclxuaW1wb3J0IHsgRHhvQXJndW1lbnRGb3JtYXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hcmd1bWVudC1mb3JtYXQnO1xyXG5pbXBvcnQgeyBEeG9MaW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbGluZSc7XHJcbmltcG9ydCB7IER4b1JhbmdlYXJlYU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3JhbmdlYXJlYSc7XHJcbmltcG9ydCB7IER4b1JhbmdlYmFyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcmFuZ2ViYXInO1xyXG5pbXBvcnQgeyBEeG9TY2F0dGVyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2NhdHRlcic7XHJcbmltcG9ydCB7IER4b1NwbGluZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NwbGluZSc7XHJcbmltcG9ydCB7IER4b1NwbGluZWFyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zcGxpbmVhcmVhJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZGFyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2VkYXJlYSc7XHJcbmltcG9ydCB7IER4b1N0YWNrZWRiYXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2VkYmFyJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZGxpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2VkbGluZSc7XHJcbmltcG9ydCB7IER4b1N0YWNrZWRzcGxpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2Vkc3BsaW5lJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZHNwbGluZWFyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2Vkc3BsaW5lYXJlYSc7XHJcbmltcG9ydCB7IER4b1N0ZXBhcmVhTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3RlcGFyZWEnO1xyXG5pbXBvcnQgeyBEeG9TdGVwbGluZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0ZXBsaW5lJztcclxuaW1wb3J0IHsgRHhvU3RvY2tNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdG9jayc7XHJcbmltcG9ydCB7IER4b0Nyb3NzaGFpck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Nyb3NzaGFpcic7XHJcbmltcG9ydCB7IER4b0hvcml6b250YWxMaW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaG9yaXpvbnRhbC1saW5lJztcclxuaW1wb3J0IHsgRHhvVmVydGljYWxMaW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdmVydGljYWwtbGluZSc7XHJcbmltcG9ydCB7IER4b0RhdGFQcmVwYXJlU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9kYXRhLXByZXBhcmUtc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBEeG9FeHBvcnRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9leHBvcnQnO1xyXG5pbXBvcnQgeyBEeG9MZWdlbmRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sZWdlbmQnO1xyXG5pbXBvcnQgeyBEeG9NYXJnaW5Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9tYXJnaW4nO1xyXG5pbXBvcnQgeyBEeG9TdWJ0aXRsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N1YnRpdGxlJztcclxuaW1wb3J0IHsgRHhvTG9hZGluZ0luZGljYXRvck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xvYWRpbmctaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgRHhpUGFuZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3BhbmUtZHhpJztcclxuaW1wb3J0IHsgRHhvU2Nyb2xsQmFyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2Nyb2xsLWJhcic7XHJcbmltcG9ydCB7IER4aVNlcmllc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Nlcmllcy1keGknO1xyXG5pbXBvcnQgeyBEeG9TZXJpZXNUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Nlcmllcy10ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IER4b1NpemVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaXplJztcclxuaW1wb3J0IHsgRHhvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBEeGlWYWx1ZUF4aXNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92YWx1ZS1heGlzLWR4aSc7XHJcbmltcG9ydCB7IER4b1pvb21BbmRQYW5Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC96b29tLWFuZC1wYW4nO1xyXG5pbXBvcnQgeyBEeG9EcmFnQm94U3R5bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9kcmFnLWJveC1zdHlsZSc7XHJcblxyXG5pbXBvcnQgeyBEeGlBbm5vdGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvYW5ub3RhdGlvbi1keGknO1xyXG5pbXBvcnQgeyBEeGlQYW5lQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvcGFuZS1keGknO1xyXG5pbXBvcnQgeyBEeGlTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9zZXJpZXMtZHhpJztcclxuaW1wb3J0IHsgRHhpVmFsdWVBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvdmFsdWUtYXhpcy1keGknO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDaGFydCBpcyBhIHdpZGdldCB0aGF0IHZpc3VhbGl6ZXMgZGF0YSBmcm9tIGEgbG9jYWwgb3IgcmVtb3RlIHN0b3JhZ2UgdXNpbmcgYSBncmVhdCB2YXJpZXR5IG9mIHNlcmllcyB0eXBlcyBhbG9uZyB3aXRoIGRpZmZlcmVudCBpbnRlcmFjdGl2ZSBlbGVtZW50cywgc3VjaCBhcyB0b29sdGlwcywgY3Jvc3NoYWlyIHBvaW50ZXIsIGxlZ2VuZCwgZXRjLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LWNoYXJ0JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWyAnIDpob3N0IHsgIGRpc3BsYXk6IGJsb2NrOyB9J10sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeENoYXJ0O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhZGFwdGl2ZSBsYXlvdXQgb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZGFwdGl2ZUxheW91dCgpOiB7IGhlaWdodD86IG51bWJlciwga2VlcExhYmVscz86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FkYXB0aXZlTGF5b3V0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRhcHRpdmVMYXlvdXQodmFsdWU6IHsgaGVpZ2h0PzogbnVtYmVyLCBrZWVwTGFiZWxzPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWRhcHRpdmVMYXlvdXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gYWRqdXN0IHRoZSB2YWx1ZSBheGlzJ3MgdmlzdWFsUmFuZ2Ugd2hlbiB0aGUgYXJndW1lbnQgYXhpcyBpcyBiZWluZyB6b29tZWQgb3IgcGFubmVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFkanVzdE9uWm9vbSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhZGp1c3RPblpvb20nKTtcclxuICAgIH1cclxuICAgIHNldCBhZGp1c3RPblpvb20odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FkanVzdE9uWm9vbScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYW5pbWF0aW9uIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYW5pbWF0aW9uKCk6IGJvb2xlYW4gfCB7IGR1cmF0aW9uPzogbnVtYmVyLCBlYXNpbmc/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBtYXhQb2ludENvdW50U3VwcG9ydGVkPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FuaW1hdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFuaW1hdGlvbih2YWx1ZTogYm9vbGVhbiB8IHsgZHVyYXRpb24/OiBudW1iZXIsIGVhc2luZz86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIG1heFBvaW50Q291bnRTdXBwb3J0ZWQ/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYW5pbWF0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYW5ub3RhdGlvbiBjb2xsZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFubm90YXRpb25zKCk6IEFycmF5PERldkV4cHJlc3Mudml6LmR4Q2hhcnRBbm5vdGF0aW9uQ29uZmlnIHwgYW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYW5ub3RhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBhbm5vdGF0aW9ucyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy52aXouZHhDaGFydEFubm90YXRpb25Db25maWcgfCBhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbm5vdGF0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBhcmd1bWVudCBheGlzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFyZ3VtZW50QXhpcygpOiB7IGFnZ3JlZ2F0aW9uR3JvdXBXaWR0aD86IG51bWJlciwgYWdncmVnYXRpb25JbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBhcmd1bWVudFR5cGU/OiBzdHJpbmcsIGF4aXNEaXZpc2lvbkZhY3Rvcj86IG51bWJlciwgYnJlYWtzPzogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4sIGJyZWFrU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+LCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIGRpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZT86IHN0cmluZywgZW5kT25UaWNrPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBob2xpZGF5cz86IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+LCBob3Zlck1vZGU/OiBzdHJpbmcsIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbj86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrQ291bnQ/OiBudW1iZXIsIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pblZpc3VhbFJhbmdlTGVuZ3RoPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgb3BhY2l0eT86IG51bWJlciwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgc2luZ2xlV29ya2RheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0aXRsZT86IHN0cmluZyB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgbWFyZ2luPzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHR5cGU/OiBzdHJpbmcsIHZhbHVlTWFyZ2luc0VuYWJsZWQ/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgdmlzdWFsUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB2aXN1YWxSYW5nZVVwZGF0ZU1vZGU/OiBzdHJpbmcsIHdob2xlUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB3aWR0aD86IG51bWJlciwgd29ya2RheXNPbmx5PzogYm9vbGVhbiwgd29ya1dlZWs/OiBBcnJheTxudW1iZXI+IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FyZ3VtZW50QXhpcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFyZ3VtZW50QXhpcyh2YWx1ZTogeyBhZ2dyZWdhdGlvbkdyb3VwV2lkdGg/OiBudW1iZXIsIGFnZ3JlZ2F0aW9uSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYXJndW1lbnRUeXBlPzogc3RyaW5nLCBheGlzRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIGJyZWFrcz86IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+LCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY2F0ZWdvcmllcz86IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PiwgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaG9saWRheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgaG92ZXJNb2RlPzogc3RyaW5nLCBpbnZlcnRlZD86IGJvb2xlYW4sIGxhYmVsPzogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc3RhZ2dlcmluZ1NwYWNpbmc/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heD86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW4/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5WaXN1YWxSYW5nZUxlbmd0aD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG9wYWNpdHk/OiBudW1iZXIsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHNpbmdsZVdvcmtkYXlzPzogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4sIHN0cmlwcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzdGFydFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB9Piwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgdGl0bGU/OiBzdHJpbmcgfCB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHZpc3VhbFJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgdmlzdWFsUmFuZ2VVcGRhdGVNb2RlPzogc3RyaW5nLCB3aG9sZVJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgd2lkdGg/OiBudW1iZXIsIHdvcmtkYXlzT25seT86IGJvb2xlYW4sIHdvcmtXZWVrPzogQXJyYXk8bnVtYmVyPiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcmd1bWVudEF4aXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gaGlkZSBzZXJpZXMgcG9pbnQgbWFya2VycyBhdXRvbWF0aWNhbGx5IHRvIHJlZHVjZSB2aXN1YWwgY2x1dHRlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhdXRvSGlkZVBvaW50TWFya2VycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhdXRvSGlkZVBvaW50TWFya2VycycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dG9IaWRlUG9pbnRNYXJrZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhdXRvSGlkZVBvaW50TWFya2VycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250cm9scyB0aGUgcGFkZGluZyBhbmQgY29uc2VxdWVudGx5IHRoZSB3aWR0aCBvZiBhIGdyb3VwIG9mIGJhcnMgd2l0aCB0aGUgc2FtZSBhcmd1bWVudCB1c2luZyByZWxhdGl2ZSB1bml0cy4gSWdub3JlZCBpZiB0aGUgYmFyR3JvdXBXaWR0aCBvcHRpb24gaXMgc2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhckdyb3VwUGFkZGluZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Jhckdyb3VwUGFkZGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhckdyb3VwUGFkZGluZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJHcm91cFBhZGRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgZml4ZWQgd2lkdGggZm9yIGdyb3VwcyBvZiBiYXJzIHdpdGggdGhlIHNhbWUgYXJndW1lbnQsIG1lYXN1cmVkIGluIHBpeGVscy4gVGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSBiYXJHcm91cFBhZGRpbmcgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhckdyb3VwV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyR3JvdXBXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSBDb21tb25TZXJpZXMuYmFyUGFkZGluZyBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBiYXJXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJXaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgc2V0dGluZ3MgY29tbW9uIGZvciBhbGwgYW5ub3RhdGlvbnMgaW4gdGhlIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbW1vbkFubm90YXRpb25TZXR0aW5ncygpOiBEZXZFeHByZXNzLnZpei5keENoYXJ0Q29tbW9uQW5ub3RhdGlvbkNvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29tbW9uQW5ub3RhdGlvblNldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tbW9uQW5ub3RhdGlvblNldHRpbmdzKHZhbHVlOiBEZXZFeHByZXNzLnZpei5keENoYXJ0Q29tbW9uQW5ub3RhdGlvbkNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29tbW9uQW5ub3RhdGlvblNldHRpbmdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgY29tbW9uIHNldHRpbmdzIGZvciBib3RoIHRoZSBhcmd1bWVudCBhbmQgdmFsdWUgYXhpcyBpbiBhIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbW1vbkF4aXNTZXR0aW5ncygpOiB7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHBvc2l0aW9uPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGl0bGU/OiB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbW1vbkF4aXNTZXR0aW5ncycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbW1vbkF4aXNTZXR0aW5ncyh2YWx1ZTogeyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBwb3NpdGlvbj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc3RhZ2dlcmluZ1NwYWNpbmc/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0sIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciB9LCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpdGxlPzogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBtYXJnaW4/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdmFsdWVNYXJnaW5zRW5hYmxlZD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb21tb25BeGlzU2V0dGluZ3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBjb21tb24gc2V0dGluZ3MgZm9yIGFsbCBwYW5lcyBpbiBhIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbW1vblBhbmVTZXR0aW5ncygpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBib3R0b20/OiBib29sZWFuLCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsZWZ0PzogYm9vbGVhbiwgb3BhY2l0eT86IG51bWJlciwgcmlnaHQ/OiBib29sZWFuLCB0b3A/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb21tb25QYW5lU2V0dGluZ3MnKTtcclxuICAgIH1cclxuICAgIHNldCBjb21tb25QYW5lU2V0dGluZ3ModmFsdWU6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGJvdHRvbT86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxlZnQ/OiBib29sZWFuLCBvcGFjaXR5PzogbnVtYmVyLCByaWdodD86IGJvb2xlYW4sIHRvcD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbW1vblBhbmVTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgc2V0dGluZ3MgY29tbW9uIGZvciBhbGwgc2VyaWVzIGluIHRoZSBjaGFydC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb21tb25TZXJpZXNTZXR0aW5ncygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbW1vblNlcmllc1NldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tbW9uU2VyaWVzU2V0dGluZ3ModmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29tbW9uU2VyaWVzU2V0dGluZ3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29sb3JzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBjaGFydCBjb250YWluZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29udGFpbmVyQmFja2dyb3VuZENvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29udGFpbmVyQmFja2dyb3VuZENvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29udGFpbmVyQmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbnRhaW5lckJhY2tncm91bmRDb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBjcm9zc2hhaXIgZmVhdHVyZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjcm9zc2hhaXIoKTogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaG9yaXpvbnRhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2ZXJ0aWNhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nyb3NzaGFpcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNyb3NzaGFpcih2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaG9yaXpvbnRhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2ZXJ0aWNhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Nyb3NzaGFpcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b21pemVzIGFuIGluZGl2aWR1YWwgYW5ub3RhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVBbm5vdGF0aW9uKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVBbm5vdGF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplQW5ub3RhdGlvbih2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZUFubm90YXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9taXplcyB0aGUgYXBwZWFyYW5jZSBvZiBhbiBpbmRpdmlkdWFsIHBvaW50IGxhYmVsLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbWl6ZUxhYmVsKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVMYWJlbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZUxhYmVsKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplTGFiZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9taXplcyB0aGUgYXBwZWFyYW5jZSBvZiBhbiBpbmRpdmlkdWFsIHNlcmllcyBwb2ludC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVQb2ludCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplUG9pbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVQb2ludCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZVBvaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3NlcyBkYXRhIGJlZm9yZSB2aXN1YWxpemluZyBpdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhUHJlcGFyZVNldHRpbmdzKCk6IHsgY2hlY2tUeXBlRm9yQWxsRGF0YT86IGJvb2xlYW4sIGNvbnZlcnRUb0F4aXNEYXRhVHlwZT86IGJvb2xlYW4sIHNvcnRpbmdNZXRob2Q/OiBib29sZWFuIHwgRnVuY3Rpb24gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVByZXBhcmVTZXR0aW5ncycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFQcmVwYXJlU2V0dGluZ3ModmFsdWU6IHsgY2hlY2tUeXBlRm9yQWxsRGF0YT86IGJvb2xlYW4sIGNvbnZlcnRUb0F4aXNEYXRhVHlwZT86IGJvb2xlYW4sIHNvcnRpbmdNZXRob2Q/OiBib29sZWFuIHwgRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVByZXBhcmVTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyB0aGUgd2lkZ2V0IHRvIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFTb3VyY2UnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhU291cmNlKHZhbHVlOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoaWNoIHBhbmUgc2hvdWxkIGJlIHVzZWQgYnkgZGVmYXVsdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkZWZhdWx0UGFuZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RlZmF1bHRQYW5lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVmYXVsdFBhbmUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGVmYXVsdFBhbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB0aGUgdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIENvbW1vblNlcmllcy5pZ25vcmVFbXB0eVBvaW50cyBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVxdWFsQmFyV2lkdGgoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXF1YWxCYXJXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVxdWFsQmFyV2lkdGgodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VxdWFsQmFyV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgZXhwb3J0aW5nIGFuZCBwcmludGluZyBmZWF0dXJlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleHBvcnQoKTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwb3J0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0KHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBmb3JtYXRzPzogQXJyYXk8c3RyaW5nPiwgbWFyZ2luPzogbnVtYmVyLCBwcmludGluZ0VuYWJsZWQ/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleHBvcnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBvcHRpb25zIG9mIGEgY2hhcnQncyBsZWdlbmQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGVnZW5kKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbHVtbkNvdW50PzogbnVtYmVyLCBjb2x1bW5JdGVtU3BhY2luZz86IG51bWJlciwgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVJdGVtcz86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGl0ZW1zQWxpZ25tZW50Pzogc3RyaW5nLCBpdGVtVGV4dFBvc2l0aW9uPzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBtYXJrZXJTaXplPzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHJvd0NvdW50PzogbnVtYmVyLCByb3dJdGVtU3BhY2luZz86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsZWdlbmQnKTtcclxuICAgIH1cclxuICAgIHNldCBsZWdlbmQodmFsdWU6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbHVtbkNvdW50PzogbnVtYmVyLCBjb2x1bW5JdGVtU3BhY2luZz86IG51bWJlciwgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVJdGVtcz86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGl0ZW1zQWxpZ25tZW50Pzogc3RyaW5nLCBpdGVtVGV4dFBvc2l0aW9uPzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBtYXJrZXJTaXplPzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHJvd0NvdW50PzogbnVtYmVyLCByb3dJdGVtU3BhY2luZz86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsZWdlbmQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgbG9hZGluZyBpbmRpY2F0b3IuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9hZGluZ0luZGljYXRvcigpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBzaG93PzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2FkaW5nSW5kaWNhdG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9hZGluZ0luZGljYXRvcih2YWx1ZTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgc2hvdz86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbG9hZGluZ0luZGljYXRvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgc3BhY2UgYXJvdW5kIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWFyZ2luKCk6IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21hcmdpbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hcmdpbih2YWx1ZTogeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWFyZ2luJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGNvZWZmaWNpZW50IGRldGVybWluaW5nIHRoZSBkaWFtZXRlciBvZiB0aGUgbGFyZ2VzdCBidWJibGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4QnViYmxlU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heEJ1YmJsZVNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhCdWJibGVTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heEJ1YmJsZVNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBkaWFtZXRlciBvZiB0aGUgc21hbGxlc3QgYnViYmxlIG1lYXN1cmVkIGluIHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5CdWJibGVTaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluQnViYmxlU2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbkJ1YmJsZVNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluQnViYmxlU2l6ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JjZXMgdGhlIHdpZGdldCB0byB0cmVhdCBuZWdhdGl2ZSB2YWx1ZXMgYXMgemVyb2VzLiBBcHBsaWVzIHRvIHN0YWNrZWQtbGlrZSBzZXJpZXMgb25seS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuZWdhdGl2ZXNBc1plcm9lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5lZ2F0aXZlc0FzWmVyb2VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBwYWxldHRlIHRvIGJlIHVzZWQgZm9yIGNvbG9yaXppbmcgc2VyaWVzIGFuZCB0aGVpciBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlKCk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGUnKTtcclxuICAgIH1cclxuICAgIHNldCBwYWxldHRlKHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWxldHRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGF0IHRvIGRvIHdpdGggY29sb3JzIGluIHRoZSBwYWxldHRlIHdoZW4gdGhlaXIgbnVtYmVyIGlzIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIHNlcmllcyAoaW4gdGhlIENoYXJ0IHdpZGdldCkgb3IgcG9pbnRzIGluIGEgc2VyaWVzIChpbiB0aGUgUGllQ2hhcnQgd2lkZ2V0KS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlRXh0ZW5zaW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGVFeHRlbnNpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFsZXR0ZUV4dGVuc2lvbk1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFsZXR0ZUV4dGVuc2lvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjbGFyZXMgYSBjb2xsZWN0aW9uIG9mIHBhbmVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhbmVzKCk6IEFycmF5PGFueSB8IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGJvdHRvbT86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxlZnQ/OiBib29sZWFuLCBvcGFjaXR5PzogbnVtYmVyLCByaWdodD86IGJvb2xlYW4sIHRvcD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBuYW1lPzogc3RyaW5nIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYW5lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbmVzKHZhbHVlOiBBcnJheTxhbnkgfCB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBib3R0b20/OiBib29sZWFuLCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsZWZ0PzogYm9vbGVhbiwgb3BhY2l0eT86IG51bWJlciwgcmlnaHQ/OiBib29sZWFuLCB0b3A/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbmFtZT86IHN0cmluZyB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFuZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhlIHdpZGdldCB0aGF0IGl0IGlzIGVtYmVkZGVkIGludG8gYW4gSFRNTCBwYWdlIHRoYXQgdXNlcyBhIHRhZyBtb2RpZnlpbmcgdGhlIHBhdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGF0aE1vZGlmaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhdGhNb2RpZmllZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhdGhNb2RpZmllZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGF0aE1vZGlmaWVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgc2luZ2xlIHBvaW50IG9yIG11bHRpcGxlIHBvaW50cyBjYW4gYmUgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBvaW50U2VsZWN0aW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BvaW50U2VsZWN0aW9uTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvaW50U2VsZWN0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwb2ludFNlbGVjdGlvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVkcmF3IHRoZSB3aWRnZXQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgcGFyZW50IGJyb3dzZXIgd2luZG93IGNoYW5nZXMgb3IgYSBtb2JpbGUgZGV2aWNlIHJvdGF0ZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVkcmF3T25SZXNpemUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVkcmF3T25SZXNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCByZWRyYXdPblJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVkcmF3T25SZXNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgY2hhcnQgbXVzdCBiZWhhdmUgd2hlbiBzZXJpZXMgcG9pbnQgbGFiZWxzIG92ZXJsYXAuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVzb2x2ZUxhYmVsT3ZlcmxhcHBpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXNvbHZlTGFiZWxPdmVybGFwcGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlc29sdmVMYWJlbE92ZXJsYXBwaW5nKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jlc29sdmVMYWJlbE92ZXJsYXBwaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3YXBzIHRoZSBheGVzIGFyb3VuZCBtYWtpbmcgdGhlIHZhbHVlIGF4aXMgaG9yaXpvbnRhbCBhbmQgdGhlIGFyZ3VtZW50IGF4aXMgdmVydGljYWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcm90YXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyb3RhdGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm90YXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm90YXRlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2V0dGluZ3Mgb2YgdGhlIHNjcm9sbCBiYXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2Nyb2xsQmFyKCk6IHsgY29sb3I/OiBzdHJpbmcsIG9mZnNldD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY3JvbGxCYXInKTtcclxuICAgIH1cclxuICAgIHNldCBzY3JvbGxCYXIodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIG9mZnNldD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY3JvbGxCYXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSB6b29tQW5kUGFuIG9wdGlvbiBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNjcm9sbGluZ01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY3JvbGxpbmdNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2Nyb2xsaW5nTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY3JvbGxpbmdNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBvcHRpb25zIGZvciBDaGFydCB3aWRnZXQgc2VyaWVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlcmllcygpOiBhbnkgfCBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZXJpZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXJpZXModmFsdWU6IGFueSB8IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlcmllcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHNpbmdsZSBzZXJpZXMgb3IgbXVsdGlwbGUgc2VyaWVzIGNhbiBiZSBzZWxlY3RlZCBpbiB0aGUgY2hhcnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VyaWVzU2VsZWN0aW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nlcmllc1NlbGVjdGlvbk1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXJpZXNTZWxlY3Rpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nlcmllc1NlbGVjdGlvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgc2VyaWVzIHRlbXBsYXRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlcmllc1RlbXBsYXRlKCk6IHsgY3VzdG9taXplU2VyaWVzPzogRnVuY3Rpb24sIG5hbWVGaWVsZD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZXJpZXNUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlcmllc1RlbXBsYXRlKHZhbHVlOiB7IGN1c3RvbWl6ZVNlcmllcz86IEZ1bmN0aW9uLCBuYW1lRmllbGQ/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VyaWVzVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBzaXplIGluIHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaXplKCk6IHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2l6ZSh2YWx1ZTogeyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgYSBwb2ludCBzaG91bGQgcmVtYWluIGluIHRoZSBob3ZlciBzdGF0ZSB3aGVuIHRoZSBtb3VzZSBwb2ludGVyIG1vdmVzIGF3YXkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RpY2t5SG92ZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RpY2t5SG92ZXJpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGlja3lIb3ZlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RpY2t5SG92ZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRvIHN5bmNocm9uaXplIHZhbHVlIGF4ZXMgd2hlbiB0aGV5IGFyZSBkaXNwbGF5ZWQgb24gYSBzaW5nbGUgcGFuZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzeW5jaHJvbml6ZU11bHRpQXhlcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzeW5jaHJvbml6ZU11bHRpQXhlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN5bmNocm9uaXplTXVsdGlBeGVzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzeW5jaHJvbml6ZU11bHRpQXhlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBuYW1lIG9mIHRoZSB0aGVtZSB0aGUgd2lkZ2V0IHVzZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGhlbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aGVtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RoZW1lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHdpZGdldCdzIHRpdGxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGl0bGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aXRsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRvb2x0aXBzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvb2x0aXAoKTogeyBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBhcnJvd0xlbmd0aD86IG51bWJlciwgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnRhaW5lcj86IEVsZW1lbnQgfCBKUXVlcnksIGNvcm5lclJhZGl1cz86IG51bWJlciwgY3VzdG9taXplVG9vbHRpcD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc2hhZG93PzogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9LCBzaGFyZWQ/OiBib29sZWFuLCB6SW5kZXg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9vbHRpcCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvb2x0aXAodmFsdWU6IHsgYXJndW1lbnRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgYXJyb3dMZW5ndGg/OiBudW1iZXIsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb250YWluZXI/OiBFbGVtZW50IHwgSlF1ZXJ5LCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGN1c3RvbWl6ZVRvb2x0aXA/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgbG9jYXRpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHNoYWRvdz86IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSwgc2hhcmVkPzogYm9vbGVhbiwgekluZGV4PzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Rvb2x0aXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIENvbW1vblNlcmllcy5hZ2dyZWdhdGlvbi5lbmFibGVkIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdXNlQWdncmVnYXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndXNlQWdncmVnYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCB1c2VBZ2dyZWdhdGlvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndXNlQWdncmVnYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgdmFsdWUgYXhpcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZUF4aXMoKTogQXJyYXk8YW55IHwgeyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYXV0b0JyZWFrc0VuYWJsZWQ/OiBib29sZWFuLCBheGlzRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIGJyZWFrcz86IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+LCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY2F0ZWdvcmllcz86IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PiwgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHN0YWdnZXJpbmdTcGFjaW5nPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9LCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtYXg/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtYXhBdXRvQnJlYWtDb3VudD86IG51bWJlciwgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbj86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrQ291bnQ/OiBudW1iZXIsIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pblZpc3VhbFJhbmdlTGVuZ3RoPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbXVsdGlwbGVBeGVzU3BhY2luZz86IG51bWJlciwgbmFtZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFuZT86IHN0cmluZywgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgc2hvd1plcm8/OiBib29sZWFuLCBzdHJpcHM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfT4sIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciB9LCBzeW5jaHJvbml6ZWRWYWx1ZT86IG51bWJlciwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0aXRsZT86IHN0cmluZyB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgbWFyZ2luPzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHR5cGU/OiBzdHJpbmcsIHZhbHVlTWFyZ2luc0VuYWJsZWQ/OiBib29sZWFuLCB2YWx1ZVR5cGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB2aXN1YWxSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHZpc3VhbFJhbmdlVXBkYXRlTW9kZT86IHN0cmluZywgd2hvbGVSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHdpZHRoPzogbnVtYmVyIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZUF4aXMnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZUF4aXModmFsdWU6IEFycmF5PGFueSB8IHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGF1dG9CcmVha3NFbmFibGVkPzogYm9vbGVhbiwgYXhpc0RpdmlzaW9uRmFjdG9yPzogbnVtYmVyLCBicmVha3M/OiBBcnJheTxEZXZFeHByZXNzLnZpei5TY2FsZUJyZWFrPiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNhdGVnb3JpZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT4sIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWF4QXV0b0JyZWFrQ291bnQ/OiBudW1iZXIsIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW4/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5WaXN1YWxSYW5nZUxlbmd0aD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG11bHRpcGxlQXhlc1NwYWNpbmc/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhbmU/OiBzdHJpbmcsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHNob3daZXJvPzogYm9vbGVhbiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSwgc3luY2hyb25pemVkVmFsdWU/OiBudW1iZXIsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgdGl0bGU/OiBzdHJpbmcgfCB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmFsdWVUeXBlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgdmlzdWFsUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB2aXN1YWxSYW5nZVVwZGF0ZU1vZGU/OiBzdHJpbmcsIHdob2xlUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB3aWR0aD86IG51bWJlciB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVBeGlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgem9vbWluZyBhbmQgcGFubmluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB6b29tQW5kUGFuKCk6IHsgYWxsb3dNb3VzZVdoZWVsPzogYm9vbGVhbiwgYWxsb3dUb3VjaEdlc3R1cmVzPzogYm9vbGVhbiwgYXJndW1lbnRBeGlzPzogc3RyaW5nLCBkcmFnQm94U3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyIH0sIGRyYWdUb1pvb20/OiBib29sZWFuLCBwYW5LZXk/OiBzdHJpbmcsIHZhbHVlQXhpcz86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd6b29tQW5kUGFuJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgem9vbUFuZFBhbih2YWx1ZTogeyBhbGxvd01vdXNlV2hlZWw/OiBib29sZWFuLCBhbGxvd1RvdWNoR2VzdHVyZXM/OiBib29sZWFuLCBhcmd1bWVudEF4aXM/OiBzdHJpbmcsIGRyYWdCb3hTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIgfSwgZHJhZ1RvWm9vbT86IGJvb2xlYW4sIHBhbktleT86IHN0cmluZywgdmFsdWVBeGlzPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3pvb21BbmRQYW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSB6b29tQW5kUGFuIG9wdGlvbiBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHpvb21pbmdNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignem9vbWluZ01vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCB6b29taW5nTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd6b29taW5nTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgbGFiZWwgb24gdGhlIGFyZ3VtZW50IGF4aXMgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFyZ3VtZW50QXhpc0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFsbCBzZXJpZXMgYXJlIHJlYWR5LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Eb25lOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyByZW5kZXJpbmcgaGFzIGZpbmlzaGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EcmF3bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCBpcyBleHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRXhwb3J0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGZpbGUgd2l0aCBleHBvcnRlZCB3aWRnZXQgaXMgc2F2ZWQgdG8gdGhlIHVzZXIncyBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25GaWxlU2F2aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGVycm9yIG9yIHdhcm5pbmcgb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25JbmNpZGVudE9jY3VycmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIGxlZ2VuZCBpdGVtIGlzIGNsaWNrZWQgb3IgdGFwcGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25MZWdlbmRDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBzZXJpZXMgcG9pbnQgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblBvaW50Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSBwb2ludGVyIGVudGVycyBvciBsZWF2ZXMgYSBzZXJpZXMgcG9pbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblBvaW50SG92ZXJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgc2VyaWVzIHBvaW50IGlzIHNlbGVjdGVkIG9yIHNlbGVjdGlvbiBpcyBjYW5jZWxlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUG9pbnRTZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgc2VyaWVzIGlzIGNsaWNrZWQgb3IgdGFwcGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZXJpZXNDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHBvaW50ZXIgZW50ZXJzIG9yIGxlYXZlcyBhIHNlcmllcy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2VyaWVzSG92ZXJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgc2VyaWVzIGlzIHNlbGVjdGVkIG9yIHNlbGVjdGlvbiBpcyBjYW5jZWxlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2VyaWVzU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHRvb2x0aXAgYmVjb21lcyBoaWRkZW4uXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblRvb2x0aXBIaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB0b29sdGlwIGFwcGVhcnMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblRvb2x0aXBTaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB6b29taW5nIG9yIHBhbm5pbmcgZW5kcy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uWm9vbUVuZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB6b29taW5nIG9yIHBhbm5pbmcgYmVnaW5zLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25ab29tU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWRhcHRpdmVMYXlvdXRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhZGFwdGl2ZUxheW91dENoYW5nZTogRXZlbnRFbWl0dGVyPHsgaGVpZ2h0PzogbnVtYmVyLCBrZWVwTGFiZWxzPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhZGp1c3RPblpvb21DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhZGp1c3RPblpvb21DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFuaW1hdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFuaW1hdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCB7IGR1cmF0aW9uPzogbnVtYmVyLCBlYXNpbmc/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBtYXhQb2ludENvdW50U3VwcG9ydGVkPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYW5ub3RhdGlvbnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbm5vdGF0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PERldkV4cHJlc3Mudml6LmR4Q2hhcnRBbm5vdGF0aW9uQ29uZmlnIHwgYW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhcmd1bWVudEF4aXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhcmd1bWVudEF4aXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFnZ3JlZ2F0aW9uR3JvdXBXaWR0aD86IG51bWJlciwgYWdncmVnYXRpb25JbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBhcmd1bWVudFR5cGU/OiBzdHJpbmcsIGF4aXNEaXZpc2lvbkZhY3Rvcj86IG51bWJlciwgYnJlYWtzPzogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4sIGJyZWFrU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+LCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIGRpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZT86IHN0cmluZywgZW5kT25UaWNrPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBob2xpZGF5cz86IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+LCBob3Zlck1vZGU/OiBzdHJpbmcsIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbj86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrQ291bnQ/OiBudW1iZXIsIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pblZpc3VhbFJhbmdlTGVuZ3RoPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgb3BhY2l0eT86IG51bWJlciwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgc2luZ2xlV29ya2RheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0aXRsZT86IHN0cmluZyB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgbWFyZ2luPzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHR5cGU/OiBzdHJpbmcsIHZhbHVlTWFyZ2luc0VuYWJsZWQ/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgdmlzdWFsUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB2aXN1YWxSYW5nZVVwZGF0ZU1vZGU/OiBzdHJpbmcsIHdob2xlUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB3aWR0aD86IG51bWJlciwgd29ya2RheXNPbmx5PzogYm9vbGVhbiwgd29ya1dlZWs/OiBBcnJheTxudW1iZXI+IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYXV0b0hpZGVQb2ludE1hcmtlcnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhdXRvSGlkZVBvaW50TWFya2Vyc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYmFyR3JvdXBQYWRkaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYmFyR3JvdXBQYWRkaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGJhckdyb3VwV2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBiYXJHcm91cFdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGJhcldpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYmFyV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29tbW9uQW5ub3RhdGlvblNldHRpbmdzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29tbW9uQW5ub3RhdGlvblNldHRpbmdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy52aXouZHhDaGFydENvbW1vbkFubm90YXRpb25Db25maWc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29tbW9uQXhpc1NldHRpbmdzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29tbW9uQXhpc1NldHRpbmdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBwb3NpdGlvbj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc3RhZ2dlcmluZ1NwYWNpbmc/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0sIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciB9LCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpdGxlPzogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBtYXJnaW4/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdmFsdWVNYXJnaW5zRW5hYmxlZD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbW1vblBhbmVTZXR0aW5nc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbW1vblBhbmVTZXR0aW5nc0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGJvdHRvbT86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxlZnQ/OiBib29sZWFuLCBvcGFjaXR5PzogbnVtYmVyLCByaWdodD86IGJvb2xlYW4sIHRvcD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29tbW9uU2VyaWVzU2V0dGluZ3NDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb21tb25TZXJpZXNTZXR0aW5nc0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3Jvc3NoYWlyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY3Jvc3NoYWlyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaG9yaXpvbnRhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2ZXJ0aWNhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3VzdG9taXplQW5ub3RhdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZUFubm90YXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjdXN0b21pemVMYWJlbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZUxhYmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3VzdG9taXplUG9pbnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjdXN0b21pemVQb2ludENoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGFQcmVwYXJlU2V0dGluZ3NDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhUHJlcGFyZVNldHRpbmdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGFTb3VyY2VDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhU291cmNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRlZmF1bHRQYW5lQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGVmYXVsdFBhbmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZWxlbWVudEF0dHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbGVtZW50QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlcXVhbEJhcldpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXF1YWxCYXJXaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZXhwb3J0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXhwb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsZWdlbmRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsZWdlbmRDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2x1bW5Db3VudD86IG51bWJlciwgY29sdW1uSXRlbVNwYWNpbmc/OiBudW1iZXIsIGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplSXRlbXM/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgaG92ZXJNb2RlPzogc3RyaW5nLCBpdGVtc0FsaWdubWVudD86IHN0cmluZywgaXRlbVRleHRQb3NpdGlvbj86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgbWFya2VyU2l6ZT86IG51bWJlciwgb3JpZW50YXRpb24/OiBzdHJpbmcsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHBvc2l0aW9uPzogc3RyaW5nLCByb3dDb3VudD86IG51bWJlciwgcm93SXRlbVNwYWNpbmc/OiBudW1iZXIsIHRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsb2FkaW5nSW5kaWNhdG9yQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbG9hZGluZ0luZGljYXRvckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWFyZ2luQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWFyZ2luQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXhCdWJibGVTaXplQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWF4QnViYmxlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtaW5CdWJibGVTaXplQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWluQnViYmxlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBuZWdhdGl2ZXNBc1plcm9lc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG5lZ2F0aXZlc0FzWmVyb2VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYWxldHRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGFsZXR0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IEFycmF5PHN0cmluZz4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGFsZXR0ZUV4dGVuc2lvbk1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYWxldHRlRXh0ZW5zaW9uTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYW5lc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhbmVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8YW55IHwgeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgYm90dG9tPzogYm9vbGVhbiwgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGVmdD86IGJvb2xlYW4sIG9wYWNpdHk/OiBudW1iZXIsIHJpZ2h0PzogYm9vbGVhbiwgdG9wPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG5hbWU/OiBzdHJpbmcgfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGF0aE1vZGlmaWVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGF0aE1vZGlmaWVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwb2ludFNlbGVjdGlvbk1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwb2ludFNlbGVjdGlvbk1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVkcmF3T25SZXNpemVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWRyYXdPblJlc2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVzb2x2ZUxhYmVsT3ZlcmxhcHBpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZXNvbHZlTGFiZWxPdmVybGFwcGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByb3RhdGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcm90YXRlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNjcm9sbEJhckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbEJhckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29sb3I/OiBzdHJpbmcsIG9mZnNldD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNjcm9sbGluZ01vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JvbGxpbmdNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlcmllc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlcmllc0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueSB8IEFycmF5PGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VyaWVzU2VsZWN0aW9uTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlcmllc1NlbGVjdGlvbk1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VyaWVzVGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZXJpZXNUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY3VzdG9taXplU2VyaWVzPzogRnVuY3Rpb24sIG5hbWVGaWVsZD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNpemVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3RpY2t5SG92ZXJpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdGlja3lIb3ZlcmluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3luY2hyb25pemVNdWx0aUF4ZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzeW5jaHJvbml6ZU11bHRpQXhlc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGhlbWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0aGVtZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0aXRsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRpdGxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRvb2x0aXBDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0b29sdGlwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBhcnJvd0xlbmd0aD86IG51bWJlciwgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnRhaW5lcj86IEVsZW1lbnQgfCBKUXVlcnksIGNvcm5lclJhZGl1cz86IG51bWJlciwgY3VzdG9taXplVG9vbHRpcD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc2hhZG93PzogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9LCBzaGFyZWQ/OiBib29sZWFuLCB6SW5kZXg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB1c2VBZ2dyZWdhdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHVzZUFnZ3JlZ2F0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWx1ZUF4aXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUF4aXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBhdXRvQnJlYWtzRW5hYmxlZD86IGJvb2xlYW4sIGF4aXNEaXZpc2lvbkZhY3Rvcj86IG51bWJlciwgYnJlYWtzPzogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4sIGJyZWFrU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+LCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIGRpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZT86IHN0cmluZywgZW5kT25UaWNrPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBpbnZlcnRlZD86IGJvb2xlYW4sIGxhYmVsPzogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc3RhZ2dlcmluZ1NwYWNpbmc/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heD86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1heEF1dG9CcmVha0NvdW50PzogbnVtYmVyLCBtYXhWYWx1ZU1hcmdpbj86IG51bWJlciwgbWluPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWlub3JHcmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tDb3VudD86IG51bWJlciwgbWlub3JUaWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBtaW5WYWx1ZU1hcmdpbj86IG51bWJlciwgbWluVmlzdWFsUmFuZ2VMZW5ndGg/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBtdWx0aXBsZUF4ZXNTcGFjaW5nPzogbnVtYmVyLCBuYW1lPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYW5lPzogc3RyaW5nLCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHBvc2l0aW9uPzogc3RyaW5nLCBzaG93WmVybz86IGJvb2xlYW4sIHN0cmlwcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzdGFydFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB9Piwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHN5bmNocm9uaXplZFZhbHVlPzogbnVtYmVyLCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIHRpdGxlPzogc3RyaW5nIHwgeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBtYXJnaW4/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdHlwZT86IHN0cmluZywgdmFsdWVNYXJnaW5zRW5hYmxlZD86IGJvb2xlYW4sIHZhbHVlVHlwZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHZpc3VhbFJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgdmlzdWFsUmFuZ2VVcGRhdGVNb2RlPzogc3RyaW5nLCB3aG9sZVJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgd2lkdGg/OiBudW1iZXIgfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgem9vbUFuZFBhbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHpvb21BbmRQYW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93TW91c2VXaGVlbD86IGJvb2xlYW4sIGFsbG93VG91Y2hHZXN0dXJlcz86IGJvb2xlYW4sIGFyZ3VtZW50QXhpcz86IHN0cmluZywgZHJhZ0JveFN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciB9LCBkcmFnVG9ab29tPzogYm9vbGVhbiwgcGFuS2V5Pzogc3RyaW5nLCB2YWx1ZUF4aXM/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB6b29taW5nTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHpvb21pbmdNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aUFubm90YXRpb25Db21wb25lbnQpXHJcbiAgICBnZXQgYW5ub3RhdGlvbnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQW5ub3RhdGlvbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Fubm90YXRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYW5ub3RhdGlvbnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2Fubm90YXRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpUGFuZUNvbXBvbmVudClcclxuICAgIGdldCBwYW5lc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlQYW5lQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFuZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBwYW5lc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigncGFuZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlTZXJpZXNDb21wb25lbnQpXHJcbiAgICBnZXQgc2VyaWVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVNlcmllc0NvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlcmllcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlcmllc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignc2VyaWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpVmFsdWVBeGlzQ29tcG9uZW50KVxyXG4gICAgZ2V0IHZhbHVlQXhpc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlWYWx1ZUF4aXNDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZUF4aXMnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZUF4aXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3ZhbHVlQXhpcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3dhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2lkaDogSXRlcmFibGVEaWZmZXJIZWxwZXIsIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIHRlbXBsYXRlSG9zdCwgX3dhdGNoZXJIZWxwZXIsIHRyYW5zZmVyU3RhdGUsIHBsYXRmb3JtSWQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcmd1bWVudEF4aXNDbGljaycsIGVtaXQ6ICdvbkFyZ3VtZW50QXhpc0NsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkb25lJywgZW1pdDogJ29uRG9uZScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkcmF3bicsIGVtaXQ6ICdvbkRyYXduJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2V4cG9ydGVkJywgZW1pdDogJ29uRXhwb3J0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0aW5nJywgZW1pdDogJ29uRXhwb3J0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZpbGVTYXZpbmcnLCBlbWl0OiAnb25GaWxlU2F2aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luY2lkZW50T2NjdXJyZWQnLCBlbWl0OiAnb25JbmNpZGVudE9jY3VycmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXRpYWxpemVkJywgZW1pdDogJ29uSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnbGVnZW5kQ2xpY2snLCBlbWl0OiAnb25MZWdlbmRDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdwb2ludENsaWNrJywgZW1pdDogJ29uUG9pbnRDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdwb2ludEhvdmVyQ2hhbmdlZCcsIGVtaXQ6ICdvblBvaW50SG92ZXJDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3BvaW50U2VsZWN0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvblBvaW50U2VsZWN0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzZXJpZXNDbGljaycsIGVtaXQ6ICdvblNlcmllc0NsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Nlcmllc0hvdmVyQ2hhbmdlZCcsIGVtaXQ6ICdvblNlcmllc0hvdmVyQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzZXJpZXNTZWxlY3Rpb25DaGFuZ2VkJywgZW1pdDogJ29uU2VyaWVzU2VsZWN0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd0b29sdGlwSGlkZGVuJywgZW1pdDogJ29uVG9vbHRpcEhpZGRlbicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd0b29sdGlwU2hvd24nLCBlbWl0OiAnb25Ub29sdGlwU2hvd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnem9vbUVuZCcsIGVtaXQ6ICdvblpvb21FbmQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnem9vbVN0YXJ0JywgZW1pdDogJ29uWm9vbVN0YXJ0JyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhZGFwdGl2ZUxheW91dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWRqdXN0T25ab29tQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbmltYXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Fubm90YXRpb25zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhcmd1bWVudEF4aXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2F1dG9IaWRlUG9pbnRNYXJrZXJzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdiYXJHcm91cFBhZGRpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Jhckdyb3VwV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2JhcldpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb21tb25Bbm5vdGF0aW9uU2V0dGluZ3NDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbW1vbkF4aXNTZXR0aW5nc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29tbW9uUGFuZVNldHRpbmdzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb21tb25TZXJpZXNTZXR0aW5nc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29udGFpbmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjcm9zc2hhaXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1c3RvbWl6ZUFubm90YXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1c3RvbWl6ZUxhYmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjdXN0b21pemVQb2ludENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YVByZXBhcmVTZXR0aW5nc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YVNvdXJjZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGVmYXVsdFBhbmVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbGVtZW50QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZXF1YWxCYXJXaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZXhwb3J0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdsZWdlbmRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xvYWRpbmdJbmRpY2F0b3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21hcmdpbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWF4QnViYmxlU2l6ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWluQnViYmxlU2l6ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbmVnYXRpdmVzQXNaZXJvZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BhbGV0dGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BhbGV0dGVFeHRlbnNpb25Nb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYW5lc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGF0aE1vZGlmaWVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwb2ludFNlbGVjdGlvbk1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlZHJhd09uUmVzaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZXNvbHZlTGFiZWxPdmVybGFwcGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncm90YXRlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncnRsRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2Nyb2xsQmFyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzY3JvbGxpbmdNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZXJpZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nlcmllc1NlbGVjdGlvbk1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nlcmllc1RlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdGlja3lIb3ZlcmluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3luY2hyb25pemVNdWx0aUF4ZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RoZW1lQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aXRsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndG9vbHRpcENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndXNlQWdncmVnYXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQXhpc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnem9vbUFuZFBhbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnem9vbWluZ01vZGVDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhDaGFydChlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdhbm5vdGF0aW9ucycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdkYXRhU291cmNlJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3BhbGV0dGUnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygncGFuZXMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnc2VyaWVzJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3ZhbHVlQXhpcycsIGNoYW5nZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQ2hhbmdlcyhwcm9wOiBzdHJpbmcsIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoIShwcm9wIGluIHRoaXMuX29wdGlvbnNUb1VwZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faWRoLnNldHVwKHByb3AsIGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2Fubm90YXRpb25zJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2RhdGFTb3VyY2UnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygncGFsZXR0ZScpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdwYW5lcycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdzZXJpZXMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygndmFsdWVBeGlzJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0FkYXB0aXZlTGF5b3V0TW9kdWxlLFxyXG4gICAgRHhvQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgRHhpQW5ub3RhdGlvbk1vZHVsZSxcclxuICAgIER4b0JvcmRlck1vZHVsZSxcclxuICAgIER4b0ZvbnRNb2R1bGUsXHJcbiAgICBEeG9JbWFnZU1vZHVsZSxcclxuICAgIER4b1NoYWRvd01vZHVsZSxcclxuICAgIER4b0FyZ3VtZW50QXhpc01vZHVsZSxcclxuICAgIER4b0FnZ3JlZ2F0aW9uSW50ZXJ2YWxNb2R1bGUsXHJcbiAgICBEeGlCcmVha01vZHVsZSxcclxuICAgIER4b0JyZWFrU3R5bGVNb2R1bGUsXHJcbiAgICBEeGlDb25zdGFudExpbmVNb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4b0NvbnN0YW50TGluZVN0eWxlTW9kdWxlLFxyXG4gICAgRHhvR3JpZE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b01pbm9yR3JpZE1vZHVsZSxcclxuICAgIER4b01pbm9yVGlja01vZHVsZSxcclxuICAgIER4b01pbm9yVGlja0ludGVydmFsTW9kdWxlLFxyXG4gICAgRHhvTWluVmlzdWFsUmFuZ2VMZW5ndGhNb2R1bGUsXHJcbiAgICBEeGlTdHJpcE1vZHVsZSxcclxuICAgIER4b1N0cmlwU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9UaWNrTW9kdWxlLFxyXG4gICAgRHhvVGlja0ludGVydmFsTW9kdWxlLFxyXG4gICAgRHhvVGl0bGVNb2R1bGUsXHJcbiAgICBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9Db21tb25BeGlzU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9Db21tb25QYW5lU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9Db21tb25TZXJpZXNTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0FnZ3JlZ2F0aW9uTW9kdWxlLFxyXG4gICAgRHhvQXJlYU1vZHVsZSxcclxuICAgIER4b0hvdmVyU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9IYXRjaGluZ01vZHVsZSxcclxuICAgIER4b0Nvbm5lY3Rvck1vZHVsZSxcclxuICAgIER4b1BvaW50TW9kdWxlLFxyXG4gICAgRHhvSGVpZ2h0TW9kdWxlLFxyXG4gICAgRHhvVXJsTW9kdWxlLFxyXG4gICAgRHhvV2lkdGhNb2R1bGUsXHJcbiAgICBEeG9TZWxlY3Rpb25TdHlsZU1vZHVsZSxcclxuICAgIER4b1JlZHVjdGlvbk1vZHVsZSxcclxuICAgIER4b1ZhbHVlRXJyb3JCYXJNb2R1bGUsXHJcbiAgICBEeG9CYXJNb2R1bGUsXHJcbiAgICBEeG9CdWJibGVNb2R1bGUsXHJcbiAgICBEeG9DYW5kbGVzdGlja01vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2VkYXJlYU1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2VkYmFyTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRsaW5lTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRzcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZHNwbGluZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9Bcmd1bWVudEZvcm1hdE1vZHVsZSxcclxuICAgIER4b0xpbmVNb2R1bGUsXHJcbiAgICBEeG9SYW5nZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9SYW5nZWJhck1vZHVsZSxcclxuICAgIER4b1NjYXR0ZXJNb2R1bGUsXHJcbiAgICBEeG9TcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TcGxpbmVhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZGFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkYmFyTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TdGFja2Vkc3BsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZHNwbGluZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGVwYXJlYU1vZHVsZSxcclxuICAgIER4b1N0ZXBsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3RvY2tNb2R1bGUsXHJcbiAgICBEeG9Dcm9zc2hhaXJNb2R1bGUsXHJcbiAgICBEeG9Ib3Jpem9udGFsTGluZU1vZHVsZSxcclxuICAgIER4b1ZlcnRpY2FsTGluZU1vZHVsZSxcclxuICAgIER4b0RhdGFQcmVwYXJlU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9FeHBvcnRNb2R1bGUsXHJcbiAgICBEeG9MZWdlbmRNb2R1bGUsXHJcbiAgICBEeG9NYXJnaW5Nb2R1bGUsXHJcbiAgICBEeG9TdWJ0aXRsZU1vZHVsZSxcclxuICAgIER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUsXHJcbiAgICBEeGlQYW5lTW9kdWxlLFxyXG4gICAgRHhvU2Nyb2xsQmFyTW9kdWxlLFxyXG4gICAgRHhpU2VyaWVzTW9kdWxlLFxyXG4gICAgRHhvU2VyaWVzVGVtcGxhdGVNb2R1bGUsXHJcbiAgICBEeG9TaXplTW9kdWxlLFxyXG4gICAgRHhvVG9vbHRpcE1vZHVsZSxcclxuICAgIER4aVZhbHVlQXhpc01vZHVsZSxcclxuICAgIER4b1pvb21BbmRQYW5Nb2R1bGUsXHJcbiAgICBEeG9EcmFnQm94U3R5bGVNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4Q2hhcnRDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4Q2hhcnRDb21wb25lbnQsXHJcbiAgICBEeG9BZGFwdGl2ZUxheW91dE1vZHVsZSxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4aUFubm90YXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Cb3JkZXJNb2R1bGUsXHJcbiAgICBEeG9Gb250TW9kdWxlLFxyXG4gICAgRHhvSW1hZ2VNb2R1bGUsXHJcbiAgICBEeG9TaGFkb3dNb2R1bGUsXHJcbiAgICBEeG9Bcmd1bWVudEF4aXNNb2R1bGUsXHJcbiAgICBEeG9BZ2dyZWdhdGlvbkludGVydmFsTW9kdWxlLFxyXG4gICAgRHhpQnJlYWtNb2R1bGUsXHJcbiAgICBEeG9CcmVha1N0eWxlTW9kdWxlLFxyXG4gICAgRHhpQ29uc3RhbnRMaW5lTW9kdWxlLFxyXG4gICAgRHhvTGFiZWxNb2R1bGUsXHJcbiAgICBEeG9Db25zdGFudExpbmVTdHlsZU1vZHVsZSxcclxuICAgIER4b0dyaWRNb2R1bGUsXHJcbiAgICBEeG9Gb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9NaW5vckdyaWRNb2R1bGUsXHJcbiAgICBEeG9NaW5vclRpY2tNb2R1bGUsXHJcbiAgICBEeG9NaW5vclRpY2tJbnRlcnZhbE1vZHVsZSxcclxuICAgIER4b01pblZpc3VhbFJhbmdlTGVuZ3RoTW9kdWxlLFxyXG4gICAgRHhpU3RyaXBNb2R1bGUsXHJcbiAgICBEeG9TdHJpcFN0eWxlTW9kdWxlLFxyXG4gICAgRHhvVGlja01vZHVsZSxcclxuICAgIER4b1RpY2tJbnRlcnZhbE1vZHVsZSxcclxuICAgIER4b1RpdGxlTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uQW5ub3RhdGlvblNldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uQXhpc1NldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uUGFuZVNldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uU2VyaWVzU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9BZ2dyZWdhdGlvbk1vZHVsZSxcclxuICAgIER4b0FyZWFNb2R1bGUsXHJcbiAgICBEeG9Ib3ZlclN0eWxlTW9kdWxlLFxyXG4gICAgRHhvSGF0Y2hpbmdNb2R1bGUsXHJcbiAgICBEeG9Db25uZWN0b3JNb2R1bGUsXHJcbiAgICBEeG9Qb2ludE1vZHVsZSxcclxuICAgIER4b0hlaWdodE1vZHVsZSxcclxuICAgIER4b1VybE1vZHVsZSxcclxuICAgIER4b1dpZHRoTW9kdWxlLFxyXG4gICAgRHhvU2VsZWN0aW9uU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9SZWR1Y3Rpb25Nb2R1bGUsXHJcbiAgICBEeG9WYWx1ZUVycm9yQmFyTW9kdWxlLFxyXG4gICAgRHhvQmFyTW9kdWxlLFxyXG4gICAgRHhvQnViYmxlTW9kdWxlLFxyXG4gICAgRHhvQ2FuZGxlc3RpY2tNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZGFyZWFNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZGJhck1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2VkbGluZU1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2Vkc3BsaW5lTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRzcGxpbmVhcmVhTW9kdWxlLFxyXG4gICAgRHhvQXJndW1lbnRGb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9MaW5lTW9kdWxlLFxyXG4gICAgRHhvUmFuZ2VhcmVhTW9kdWxlLFxyXG4gICAgRHhvUmFuZ2ViYXJNb2R1bGUsXHJcbiAgICBEeG9TY2F0dGVyTW9kdWxlLFxyXG4gICAgRHhvU3BsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3BsaW5lYXJlYU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZGJhck1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZHNwbGluZU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRzcGxpbmVhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RlcGFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGVwbGluZU1vZHVsZSxcclxuICAgIER4b1N0b2NrTW9kdWxlLFxyXG4gICAgRHhvQ3Jvc3NoYWlyTW9kdWxlLFxyXG4gICAgRHhvSG9yaXpvbnRhbExpbmVNb2R1bGUsXHJcbiAgICBEeG9WZXJ0aWNhbExpbmVNb2R1bGUsXHJcbiAgICBEeG9EYXRhUHJlcGFyZVNldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvRXhwb3J0TW9kdWxlLFxyXG4gICAgRHhvTGVnZW5kTW9kdWxlLFxyXG4gICAgRHhvTWFyZ2luTW9kdWxlLFxyXG4gICAgRHhvU3VidGl0bGVNb2R1bGUsXHJcbiAgICBEeG9Mb2FkaW5nSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgRHhpUGFuZU1vZHVsZSxcclxuICAgIER4b1Njcm9sbEJhck1vZHVsZSxcclxuICAgIER4aVNlcmllc01vZHVsZSxcclxuICAgIER4b1Nlcmllc1RlbXBsYXRlTW9kdWxlLFxyXG4gICAgRHhvU2l6ZU1vZHVsZSxcclxuICAgIER4b1Rvb2x0aXBNb2R1bGUsXHJcbiAgICBEeGlWYWx1ZUF4aXNNb2R1bGUsXHJcbiAgICBEeG9ab29tQW5kUGFuTW9kdWxlLFxyXG4gICAgRHhvRHJhZ0JveFN0eWxlTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4Q2hhcnRNb2R1bGUgeyB9XHJcbiJdfQ==
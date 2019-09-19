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
 * Build date: Thu Sep 19 2019
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
//# sourceMappingURL=chart.js.map
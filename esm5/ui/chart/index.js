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
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, ContentChildren, QueryList } from '@angular/core';
import DxChart from 'devextreme/viz/chart';
import { DxComponent, DxTemplateHost, DxIntegrationModule, DxTemplateModule, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxoAdaptiveLayoutModule } from 'devextreme-angular/ui/nested';
import { DxoAnimationModule } from 'devextreme-angular/ui/nested';
import { DxiAnnotationModule } from 'devextreme-angular/ui/nested';
import { DxoBorderModule } from 'devextreme-angular/ui/nested';
import { DxoFontModule } from 'devextreme-angular/ui/nested';
import { DxoImageModule } from 'devextreme-angular/ui/nested';
import { DxoShadowModule } from 'devextreme-angular/ui/nested';
import { DxoArgumentAxisModule } from 'devextreme-angular/ui/nested';
import { DxoAggregationIntervalModule } from 'devextreme-angular/ui/nested';
import { DxiBreakModule } from 'devextreme-angular/ui/nested';
import { DxoBreakStyleModule } from 'devextreme-angular/ui/nested';
import { DxiConstantLineModule } from 'devextreme-angular/ui/nested';
import { DxoLabelModule } from 'devextreme-angular/ui/nested';
import { DxoConstantLineStyleModule } from 'devextreme-angular/ui/nested';
import { DxoGridModule } from 'devextreme-angular/ui/nested';
import { DxoFormatModule } from 'devextreme-angular/ui/nested';
import { DxoMinorGridModule } from 'devextreme-angular/ui/nested';
import { DxoMinorTickModule } from 'devextreme-angular/ui/nested';
import { DxoMinorTickIntervalModule } from 'devextreme-angular/ui/nested';
import { DxoMinVisualRangeLengthModule } from 'devextreme-angular/ui/nested';
import { DxiStripModule } from 'devextreme-angular/ui/nested';
import { DxoStripStyleModule } from 'devextreme-angular/ui/nested';
import { DxoTickModule } from 'devextreme-angular/ui/nested';
import { DxoTickIntervalModule } from 'devextreme-angular/ui/nested';
import { DxoTitleModule } from 'devextreme-angular/ui/nested';
import { DxoCommonAnnotationSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoCommonAxisSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoCommonPaneSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoCommonSeriesSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoAggregationModule } from 'devextreme-angular/ui/nested';
import { DxoAreaModule } from 'devextreme-angular/ui/nested';
import { DxoHoverStyleModule } from 'devextreme-angular/ui/nested';
import { DxoHatchingModule } from 'devextreme-angular/ui/nested';
import { DxoConnectorModule } from 'devextreme-angular/ui/nested';
import { DxoPointModule } from 'devextreme-angular/ui/nested';
import { DxoHeightModule } from 'devextreme-angular/ui/nested';
import { DxoUrlModule } from 'devextreme-angular/ui/nested';
import { DxoWidthModule } from 'devextreme-angular/ui/nested';
import { DxoSelectionStyleModule } from 'devextreme-angular/ui/nested';
import { DxoReductionModule } from 'devextreme-angular/ui/nested';
import { DxoValueErrorBarModule } from 'devextreme-angular/ui/nested';
import { DxoBarModule } from 'devextreme-angular/ui/nested';
import { DxoBubbleModule } from 'devextreme-angular/ui/nested';
import { DxoCandlestickModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedareaModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedbarModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedlineModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedsplineModule } from 'devextreme-angular/ui/nested';
import { DxoFullstackedsplineareaModule } from 'devextreme-angular/ui/nested';
import { DxoArgumentFormatModule } from 'devextreme-angular/ui/nested';
import { DxoLineModule } from 'devextreme-angular/ui/nested';
import { DxoRangeareaModule } from 'devextreme-angular/ui/nested';
import { DxoRangebarModule } from 'devextreme-angular/ui/nested';
import { DxoScatterModule } from 'devextreme-angular/ui/nested';
import { DxoSplineModule } from 'devextreme-angular/ui/nested';
import { DxoSplineareaModule } from 'devextreme-angular/ui/nested';
import { DxoStackedareaModule } from 'devextreme-angular/ui/nested';
import { DxoStackedbarModule } from 'devextreme-angular/ui/nested';
import { DxoStackedlineModule } from 'devextreme-angular/ui/nested';
import { DxoStackedsplineModule } from 'devextreme-angular/ui/nested';
import { DxoStackedsplineareaModule } from 'devextreme-angular/ui/nested';
import { DxoStepareaModule } from 'devextreme-angular/ui/nested';
import { DxoSteplineModule } from 'devextreme-angular/ui/nested';
import { DxoStockModule } from 'devextreme-angular/ui/nested';
import { DxoCrosshairModule } from 'devextreme-angular/ui/nested';
import { DxoHorizontalLineModule } from 'devextreme-angular/ui/nested';
import { DxoVerticalLineModule } from 'devextreme-angular/ui/nested';
import { DxoDataPrepareSettingsModule } from 'devextreme-angular/ui/nested';
import { DxoExportModule } from 'devextreme-angular/ui/nested';
import { DxoLegendModule } from 'devextreme-angular/ui/nested';
import { DxoMarginModule } from 'devextreme-angular/ui/nested';
import { DxoSubtitleModule } from 'devextreme-angular/ui/nested';
import { DxoLoadingIndicatorModule } from 'devextreme-angular/ui/nested';
import { DxiPaneModule } from 'devextreme-angular/ui/nested';
import { DxoScrollBarModule } from 'devextreme-angular/ui/nested';
import { DxiSeriesModule } from 'devextreme-angular/ui/nested';
import { DxoSeriesTemplateModule } from 'devextreme-angular/ui/nested';
import { DxoSizeModule } from 'devextreme-angular/ui/nested';
import { DxoTooltipModule } from 'devextreme-angular/ui/nested';
import { DxiValueAxisModule } from 'devextreme-angular/ui/nested';
import { DxoZoomAndPanModule } from 'devextreme-angular/ui/nested';
import { DxoDragBoxStyleModule } from 'devextreme-angular/ui/nested';
import { DxiAnnotationComponent } from 'devextreme-angular/ui/nested';
import { DxiPaneComponent } from 'devextreme-angular/ui/nested';
import { DxiSeriesComponent } from 'devextreme-angular/ui/nested';
import { DxiValueAxisComponent } from 'devextreme-angular/ui/nested';
/**
 * The Chart is a widget that visualizes data from a local or remote storage using a great variety of series types along with different interactive elements, such as tooltips, crosshair pointer, legend, etc.
 */
var DxChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxChartComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "adaptiveLayout", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "adjustOnZoom", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "annotations", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "argumentAxis", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "autoHidePointMarkers", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "barGroupPadding", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "barGroupWidth", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "barWidth", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "commonAnnotationSettings", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "commonAxisSettings", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "commonPaneSettings", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "commonSeriesSettings", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "containerBackgroundColor", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "crosshair", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "customizeAnnotation", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "customizeLabel", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "customizePoint", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "dataPrepareSettings", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "defaultPane", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "elementAttr", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "equalBarWidth", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "export", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "legend", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "loadingIndicator", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "margin", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "maxBubbleSize", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "minBubbleSize", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "negativesAsZeroes", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "palette", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "paletteExtensionMode", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "panes", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "pathModified", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "pointSelectionMode", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "redrawOnResize", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "resolveLabelOverlapping", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "rotated", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "rtlEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "scrollBar", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "scrollingMode", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "series", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "seriesSelectionMode", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "seriesTemplate", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "size", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "stickyHovering", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "synchronizeMultiAxes", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "title", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "tooltip", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "useAggregation", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "valueAxis", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "zoomAndPan", null);
    tslib_1.__decorate([
        Input()
    ], DxChartComponent.prototype, "zoomingMode", null);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onArgumentAxisClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onDisposing", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onDone", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onDrawn", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onExported", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onExporting", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onFileSaving", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onIncidentOccurred", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onInitialized", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onLegendClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onOptionChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onPointClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onPointHoverChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onPointSelectionChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onSeriesClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onSeriesHoverChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onSeriesSelectionChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onTooltipHidden", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onTooltipShown", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onZoomEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "onZoomStart", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "adaptiveLayoutChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "adjustOnZoomChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "animationChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "annotationsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "argumentAxisChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "autoHidePointMarkersChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "barGroupPaddingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "barGroupWidthChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "barWidthChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "commonAnnotationSettingsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "commonAxisSettingsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "commonPaneSettingsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "commonSeriesSettingsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "containerBackgroundColorChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "crosshairChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "customizeAnnotationChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "customizeLabelChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "customizePointChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "dataPrepareSettingsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "dataSourceChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "defaultPaneChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "disabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "elementAttrChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "equalBarWidthChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "exportChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "legendChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "loadingIndicatorChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "marginChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "maxBubbleSizeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "minBubbleSizeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "negativesAsZeroesChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "paletteChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "paletteExtensionModeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "panesChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "pathModifiedChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "pointSelectionModeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "redrawOnResizeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "rotatedChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "rtlEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "scrollBarChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "scrollingModeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "seriesChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "seriesSelectionModeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "seriesTemplateChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "sizeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "stickyHoveringChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "synchronizeMultiAxesChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "themeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "titleChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "tooltipChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "useAggregationChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "valueAxisChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "zoomAndPanChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxChartComponent.prototype, "zoomingModeChange", void 0);
    tslib_1.__decorate([
        ContentChildren(DxiAnnotationComponent)
    ], DxChartComponent.prototype, "annotationsChildren", null);
    tslib_1.__decorate([
        ContentChildren(DxiPaneComponent)
    ], DxChartComponent.prototype, "panesChildren", null);
    tslib_1.__decorate([
        ContentChildren(DxiSeriesComponent)
    ], DxChartComponent.prototype, "seriesChildren", null);
    tslib_1.__decorate([
        ContentChildren(DxiValueAxisComponent)
    ], DxChartComponent.prototype, "valueAxisChildren", null);
    DxChartComponent = tslib_1.__decorate([
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
        tslib_1.__param(7, Inject(PLATFORM_ID))
    ], DxChartComponent);
    return DxChartComponent;
}(DxComponent));
export { DxChartComponent };
var DxChartModule = /** @class */ (function () {
    function DxChartModule() {
    }
    DxChartModule = tslib_1.__decorate([
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
export { DxChartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvY2hhcnQvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFHcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULE9BQU8sRUFDUCxhQUFhLEVBQ2IsZUFBZSxFQUNmLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUczQyxPQUFPLEVBQ0gsV0FBVyxFQUNYLGNBQWMsRUFDZCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixvQkFBb0IsRUFDcEIsYUFBYSxFQUNoQixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUs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ICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhDaGFydCBmcm9tICdkZXZleHRyZW1lL3Zpei9jaGFydCc7XHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIER4Q29tcG9uZW50LFxyXG4gICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICBJdGVyYWJsZURpZmZlckhlbHBlcixcclxuICAgIFdhdGNoZXJIZWxwZXJcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEeG9BZGFwdGl2ZUxheW91dE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpQW5ub3RhdGlvbk1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9Cb3JkZXJNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRm9udE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9JbWFnZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TaGFkb3dNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQXJndW1lbnRBeGlzTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0FnZ3JlZ2F0aW9uSW50ZXJ2YWxNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpQnJlYWtNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQnJlYWtTdHlsZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeGlDb25zdGFudExpbmVNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvTGFiZWxNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQ29uc3RhbnRMaW5lU3R5bGVNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvR3JpZE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9Gb3JtYXRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvTWlub3JHcmlkTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b01pbm9yVGlja01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9NaW5vclRpY2tJbnRlcnZhbE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9NaW5WaXN1YWxSYW5nZUxlbmd0aE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeGlTdHJpcE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TdHJpcFN0eWxlTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1RpY2tNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvVGlja0ludGVydmFsTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1RpdGxlTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9Db21tb25BeGlzU2V0dGluZ3NNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQ29tbW9uUGFuZVNldHRpbmdzTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0NvbW1vblNlcmllc1NldHRpbmdzTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0FnZ3JlZ2F0aW9uTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0FyZWFNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvSG92ZXJTdHlsZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9IYXRjaGluZ01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9Db25uZWN0b3JNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvUG9pbnRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvSGVpZ2h0TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1VybE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9XaWR0aE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TZWxlY3Rpb25TdHlsZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9SZWR1Y3Rpb25Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvVmFsdWVFcnJvckJhck1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9CYXJNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQnViYmxlTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0NhbmRsZXN0aWNrTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0Z1bGxzdGFja2VkYXJlYU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9GdWxsc3RhY2tlZGJhck1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9GdWxsc3RhY2tlZGxpbmVNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRnVsbHN0YWNrZWRzcGxpbmVNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRnVsbHN0YWNrZWRzcGxpbmVhcmVhTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0FyZ3VtZW50Rm9ybWF0TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0xpbmVNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvUmFuZ2VhcmVhTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1JhbmdlYmFyTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1NjYXR0ZXJNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvU3BsaW5lTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1NwbGluZWFyZWFNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZGFyZWFNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZGJhck1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TdGFja2VkbGluZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TdGFja2Vkc3BsaW5lTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1N0YWNrZWRzcGxpbmVhcmVhTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1N0ZXBhcmVhTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1N0ZXBsaW5lTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1N0b2NrTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0Nyb3NzaGFpck1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9Ib3Jpem9udGFsTGluZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9WZXJ0aWNhbExpbmVNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRGF0YVByZXBhcmVTZXR0aW5nc01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9FeHBvcnRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvTGVnZW5kTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b01hcmdpbk1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TdWJ0aXRsZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9Mb2FkaW5nSW5kaWNhdG9yTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4aVBhbmVNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvU2Nyb2xsQmFyTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4aVNlcmllc01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TZXJpZXNUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TaXplTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpVmFsdWVBeGlzTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1pvb21BbmRQYW5Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRHJhZ0JveFN0eWxlTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcblxyXG5pbXBvcnQgeyBEeGlBbm5vdGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4aVBhbmVDb21wb25lbnQgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpU2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4aVZhbHVlQXhpc0NvbXBvbmVudCB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDaGFydCBpcyBhIHdpZGdldCB0aGF0IHZpc3VhbGl6ZXMgZGF0YSBmcm9tIGEgbG9jYWwgb3IgcmVtb3RlIHN0b3JhZ2UgdXNpbmcgYSBncmVhdCB2YXJpZXR5IG9mIHNlcmllcyB0eXBlcyBhbG9uZyB3aXRoIGRpZmZlcmVudCBpbnRlcmFjdGl2ZSBlbGVtZW50cywgc3VjaCBhcyB0b29sdGlwcywgY3Jvc3NoYWlyIHBvaW50ZXIsIGxlZ2VuZCwgZXRjLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LWNoYXJ0JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWyAnIDpob3N0IHsgIGRpc3BsYXk6IGJsb2NrOyB9J10sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeENoYXJ0O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhZGFwdGl2ZSBsYXlvdXQgb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZGFwdGl2ZUxheW91dCgpOiB7IGhlaWdodD86IG51bWJlciwga2VlcExhYmVscz86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FkYXB0aXZlTGF5b3V0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRhcHRpdmVMYXlvdXQodmFsdWU6IHsgaGVpZ2h0PzogbnVtYmVyLCBrZWVwTGFiZWxzPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWRhcHRpdmVMYXlvdXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gYWRqdXN0IHRoZSB2YWx1ZSBheGlzJ3MgdmlzdWFsUmFuZ2Ugd2hlbiB0aGUgYXJndW1lbnQgYXhpcyBpcyBiZWluZyB6b29tZWQgb3IgcGFubmVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFkanVzdE9uWm9vbSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhZGp1c3RPblpvb20nKTtcclxuICAgIH1cclxuICAgIHNldCBhZGp1c3RPblpvb20odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FkanVzdE9uWm9vbScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYW5pbWF0aW9uIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYW5pbWF0aW9uKCk6IGJvb2xlYW4gfCB7IGR1cmF0aW9uPzogbnVtYmVyLCBlYXNpbmc/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBtYXhQb2ludENvdW50U3VwcG9ydGVkPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FuaW1hdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFuaW1hdGlvbih2YWx1ZTogYm9vbGVhbiB8IHsgZHVyYXRpb24/OiBudW1iZXIsIGVhc2luZz86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIG1heFBvaW50Q291bnRTdXBwb3J0ZWQ/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYW5pbWF0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYW5ub3RhdGlvbiBjb2xsZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFubm90YXRpb25zKCk6IEFycmF5PERldkV4cHJlc3Mudml6LmR4Q2hhcnRBbm5vdGF0aW9uQ29uZmlnIHwgYW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYW5ub3RhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBhbm5vdGF0aW9ucyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy52aXouZHhDaGFydEFubm90YXRpb25Db25maWcgfCBhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbm5vdGF0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBhcmd1bWVudCBheGlzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFyZ3VtZW50QXhpcygpOiB7IGFnZ3JlZ2F0aW9uR3JvdXBXaWR0aD86IG51bWJlciwgYWdncmVnYXRpb25JbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBhcmd1bWVudFR5cGU/OiBzdHJpbmcsIGF4aXNEaXZpc2lvbkZhY3Rvcj86IG51bWJlciwgYnJlYWtzPzogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4sIGJyZWFrU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+LCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIGRpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZT86IHN0cmluZywgZW5kT25UaWNrPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBob2xpZGF5cz86IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+LCBob3Zlck1vZGU/OiBzdHJpbmcsIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbj86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrQ291bnQ/OiBudW1iZXIsIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pblZpc3VhbFJhbmdlTGVuZ3RoPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgb3BhY2l0eT86IG51bWJlciwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgc2luZ2xlV29ya2RheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0aXRsZT86IHN0cmluZyB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgbWFyZ2luPzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHR5cGU/OiBzdHJpbmcsIHZhbHVlTWFyZ2luc0VuYWJsZWQ/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgdmlzdWFsUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB2aXN1YWxSYW5nZVVwZGF0ZU1vZGU/OiBzdHJpbmcsIHdob2xlUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB3aWR0aD86IG51bWJlciwgd29ya2RheXNPbmx5PzogYm9vbGVhbiwgd29ya1dlZWs/OiBBcnJheTxudW1iZXI+IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FyZ3VtZW50QXhpcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFyZ3VtZW50QXhpcyh2YWx1ZTogeyBhZ2dyZWdhdGlvbkdyb3VwV2lkdGg/OiBudW1iZXIsIGFnZ3JlZ2F0aW9uSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYXJndW1lbnRUeXBlPzogc3RyaW5nLCBheGlzRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIGJyZWFrcz86IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+LCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY2F0ZWdvcmllcz86IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PiwgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaG9saWRheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgaG92ZXJNb2RlPzogc3RyaW5nLCBpbnZlcnRlZD86IGJvb2xlYW4sIGxhYmVsPzogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc3RhZ2dlcmluZ1NwYWNpbmc/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heD86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW4/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5WaXN1YWxSYW5nZUxlbmd0aD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG9wYWNpdHk/OiBudW1iZXIsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHNpbmdsZVdvcmtkYXlzPzogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4sIHN0cmlwcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzdGFydFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB9Piwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgdGl0bGU/OiBzdHJpbmcgfCB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHZpc3VhbFJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgdmlzdWFsUmFuZ2VVcGRhdGVNb2RlPzogc3RyaW5nLCB3aG9sZVJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgd2lkdGg/OiBudW1iZXIsIHdvcmtkYXlzT25seT86IGJvb2xlYW4sIHdvcmtXZWVrPzogQXJyYXk8bnVtYmVyPiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcmd1bWVudEF4aXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gaGlkZSBzZXJpZXMgcG9pbnQgbWFya2VycyBhdXRvbWF0aWNhbGx5IHRvIHJlZHVjZSB2aXN1YWwgY2x1dHRlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhdXRvSGlkZVBvaW50TWFya2VycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhdXRvSGlkZVBvaW50TWFya2VycycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dG9IaWRlUG9pbnRNYXJrZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhdXRvSGlkZVBvaW50TWFya2VycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250cm9scyB0aGUgcGFkZGluZyBhbmQgY29uc2VxdWVudGx5IHRoZSB3aWR0aCBvZiBhIGdyb3VwIG9mIGJhcnMgd2l0aCB0aGUgc2FtZSBhcmd1bWVudCB1c2luZyByZWxhdGl2ZSB1bml0cy4gSWdub3JlZCBpZiB0aGUgYmFyR3JvdXBXaWR0aCBvcHRpb24gaXMgc2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhckdyb3VwUGFkZGluZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Jhckdyb3VwUGFkZGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhckdyb3VwUGFkZGluZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJHcm91cFBhZGRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgZml4ZWQgd2lkdGggZm9yIGdyb3VwcyBvZiBiYXJzIHdpdGggdGhlIHNhbWUgYXJndW1lbnQsIG1lYXN1cmVkIGluIHBpeGVscy4gVGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSBiYXJHcm91cFBhZGRpbmcgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhckdyb3VwV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyR3JvdXBXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSBDb21tb25TZXJpZXMuYmFyUGFkZGluZyBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBiYXJXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJXaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgc2V0dGluZ3MgY29tbW9uIGZvciBhbGwgYW5ub3RhdGlvbnMgaW4gdGhlIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbW1vbkFubm90YXRpb25TZXR0aW5ncygpOiBEZXZFeHByZXNzLnZpei5keENoYXJ0Q29tbW9uQW5ub3RhdGlvbkNvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29tbW9uQW5ub3RhdGlvblNldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tbW9uQW5ub3RhdGlvblNldHRpbmdzKHZhbHVlOiBEZXZFeHByZXNzLnZpei5keENoYXJ0Q29tbW9uQW5ub3RhdGlvbkNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29tbW9uQW5ub3RhdGlvblNldHRpbmdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgY29tbW9uIHNldHRpbmdzIGZvciBib3RoIHRoZSBhcmd1bWVudCBhbmQgdmFsdWUgYXhpcyBpbiBhIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbW1vbkF4aXNTZXR0aW5ncygpOiB7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHBvc2l0aW9uPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGl0bGU/OiB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbW1vbkF4aXNTZXR0aW5ncycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbW1vbkF4aXNTZXR0aW5ncyh2YWx1ZTogeyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBwb3NpdGlvbj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc3RhZ2dlcmluZ1NwYWNpbmc/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0sIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciB9LCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpdGxlPzogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBtYXJnaW4/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdmFsdWVNYXJnaW5zRW5hYmxlZD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb21tb25BeGlzU2V0dGluZ3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBjb21tb24gc2V0dGluZ3MgZm9yIGFsbCBwYW5lcyBpbiBhIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbW1vblBhbmVTZXR0aW5ncygpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBib3R0b20/OiBib29sZWFuLCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsZWZ0PzogYm9vbGVhbiwgb3BhY2l0eT86IG51bWJlciwgcmlnaHQ/OiBib29sZWFuLCB0b3A/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb21tb25QYW5lU2V0dGluZ3MnKTtcclxuICAgIH1cclxuICAgIHNldCBjb21tb25QYW5lU2V0dGluZ3ModmFsdWU6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGJvdHRvbT86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxlZnQ/OiBib29sZWFuLCBvcGFjaXR5PzogbnVtYmVyLCByaWdodD86IGJvb2xlYW4sIHRvcD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbW1vblBhbmVTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgc2V0dGluZ3MgY29tbW9uIGZvciBhbGwgc2VyaWVzIGluIHRoZSBjaGFydC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb21tb25TZXJpZXNTZXR0aW5ncygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbW1vblNlcmllc1NldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tbW9uU2VyaWVzU2V0dGluZ3ModmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29tbW9uU2VyaWVzU2V0dGluZ3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29sb3JzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBjaGFydCBjb250YWluZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29udGFpbmVyQmFja2dyb3VuZENvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29udGFpbmVyQmFja2dyb3VuZENvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29udGFpbmVyQmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbnRhaW5lckJhY2tncm91bmRDb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBjcm9zc2hhaXIgZmVhdHVyZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjcm9zc2hhaXIoKTogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaG9yaXpvbnRhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2ZXJ0aWNhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nyb3NzaGFpcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNyb3NzaGFpcih2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaG9yaXpvbnRhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2ZXJ0aWNhbExpbmU/OiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Nyb3NzaGFpcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b21pemVzIGFuIGluZGl2aWR1YWwgYW5ub3RhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVBbm5vdGF0aW9uKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVBbm5vdGF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplQW5ub3RhdGlvbih2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZUFubm90YXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9taXplcyB0aGUgYXBwZWFyYW5jZSBvZiBhbiBpbmRpdmlkdWFsIHBvaW50IGxhYmVsLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbWl6ZUxhYmVsKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVMYWJlbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZUxhYmVsKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplTGFiZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9taXplcyB0aGUgYXBwZWFyYW5jZSBvZiBhbiBpbmRpdmlkdWFsIHNlcmllcyBwb2ludC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVQb2ludCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplUG9pbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVQb2ludCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZVBvaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3NlcyBkYXRhIGJlZm9yZSB2aXN1YWxpemluZyBpdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhUHJlcGFyZVNldHRpbmdzKCk6IHsgY2hlY2tUeXBlRm9yQWxsRGF0YT86IGJvb2xlYW4sIGNvbnZlcnRUb0F4aXNEYXRhVHlwZT86IGJvb2xlYW4sIHNvcnRpbmdNZXRob2Q/OiBib29sZWFuIHwgRnVuY3Rpb24gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVByZXBhcmVTZXR0aW5ncycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFQcmVwYXJlU2V0dGluZ3ModmFsdWU6IHsgY2hlY2tUeXBlRm9yQWxsRGF0YT86IGJvb2xlYW4sIGNvbnZlcnRUb0F4aXNEYXRhVHlwZT86IGJvb2xlYW4sIHNvcnRpbmdNZXRob2Q/OiBib29sZWFuIHwgRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVByZXBhcmVTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyB0aGUgd2lkZ2V0IHRvIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFTb3VyY2UnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhU291cmNlKHZhbHVlOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoaWNoIHBhbmUgc2hvdWxkIGJlIHVzZWQgYnkgZGVmYXVsdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkZWZhdWx0UGFuZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RlZmF1bHRQYW5lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVmYXVsdFBhbmUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGVmYXVsdFBhbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB0aGUgdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIENvbW1vblNlcmllcy5pZ25vcmVFbXB0eVBvaW50cyBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVxdWFsQmFyV2lkdGgoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXF1YWxCYXJXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVxdWFsQmFyV2lkdGgodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VxdWFsQmFyV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgZXhwb3J0aW5nIGFuZCBwcmludGluZyBmZWF0dXJlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleHBvcnQoKTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwb3J0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0KHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBmb3JtYXRzPzogQXJyYXk8c3RyaW5nPiwgbWFyZ2luPzogbnVtYmVyLCBwcmludGluZ0VuYWJsZWQ/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleHBvcnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBvcHRpb25zIG9mIGEgY2hhcnQncyBsZWdlbmQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGVnZW5kKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbHVtbkNvdW50PzogbnVtYmVyLCBjb2x1bW5JdGVtU3BhY2luZz86IG51bWJlciwgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVJdGVtcz86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGl0ZW1zQWxpZ25tZW50Pzogc3RyaW5nLCBpdGVtVGV4dFBvc2l0aW9uPzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBtYXJrZXJTaXplPzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHJvd0NvdW50PzogbnVtYmVyLCByb3dJdGVtU3BhY2luZz86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsZWdlbmQnKTtcclxuICAgIH1cclxuICAgIHNldCBsZWdlbmQodmFsdWU6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbHVtbkNvdW50PzogbnVtYmVyLCBjb2x1bW5JdGVtU3BhY2luZz86IG51bWJlciwgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVJdGVtcz86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGl0ZW1zQWxpZ25tZW50Pzogc3RyaW5nLCBpdGVtVGV4dFBvc2l0aW9uPzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBtYXJrZXJTaXplPzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHJvd0NvdW50PzogbnVtYmVyLCByb3dJdGVtU3BhY2luZz86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsZWdlbmQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgbG9hZGluZyBpbmRpY2F0b3IuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9hZGluZ0luZGljYXRvcigpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBzaG93PzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2FkaW5nSW5kaWNhdG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9hZGluZ0luZGljYXRvcih2YWx1ZTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgc2hvdz86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbG9hZGluZ0luZGljYXRvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgc3BhY2UgYXJvdW5kIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWFyZ2luKCk6IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21hcmdpbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hcmdpbih2YWx1ZTogeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWFyZ2luJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGNvZWZmaWNpZW50IGRldGVybWluaW5nIHRoZSBkaWFtZXRlciBvZiB0aGUgbGFyZ2VzdCBidWJibGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4QnViYmxlU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heEJ1YmJsZVNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhCdWJibGVTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heEJ1YmJsZVNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBkaWFtZXRlciBvZiB0aGUgc21hbGxlc3QgYnViYmxlIG1lYXN1cmVkIGluIHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5CdWJibGVTaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluQnViYmxlU2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbkJ1YmJsZVNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluQnViYmxlU2l6ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JjZXMgdGhlIHdpZGdldCB0byB0cmVhdCBuZWdhdGl2ZSB2YWx1ZXMgYXMgemVyb2VzLiBBcHBsaWVzIHRvIHN0YWNrZWQtbGlrZSBzZXJpZXMgb25seS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuZWdhdGl2ZXNBc1plcm9lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5lZ2F0aXZlc0FzWmVyb2VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBwYWxldHRlIHRvIGJlIHVzZWQgZm9yIGNvbG9yaXppbmcgc2VyaWVzIGFuZCB0aGVpciBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlKCk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGUnKTtcclxuICAgIH1cclxuICAgIHNldCBwYWxldHRlKHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWxldHRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGF0IHRvIGRvIHdpdGggY29sb3JzIGluIHRoZSBwYWxldHRlIHdoZW4gdGhlaXIgbnVtYmVyIGlzIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIHNlcmllcyAoaW4gdGhlIENoYXJ0IHdpZGdldCkgb3IgcG9pbnRzIGluIGEgc2VyaWVzIChpbiB0aGUgUGllQ2hhcnQgd2lkZ2V0KS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlRXh0ZW5zaW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGVFeHRlbnNpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFsZXR0ZUV4dGVuc2lvbk1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFsZXR0ZUV4dGVuc2lvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjbGFyZXMgYSBjb2xsZWN0aW9uIG9mIHBhbmVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhbmVzKCk6IEFycmF5PGFueSB8IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGJvdHRvbT86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxlZnQ/OiBib29sZWFuLCBvcGFjaXR5PzogbnVtYmVyLCByaWdodD86IGJvb2xlYW4sIHRvcD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBuYW1lPzogc3RyaW5nIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYW5lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbmVzKHZhbHVlOiBBcnJheTxhbnkgfCB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBib3R0b20/OiBib29sZWFuLCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsZWZ0PzogYm9vbGVhbiwgb3BhY2l0eT86IG51bWJlciwgcmlnaHQ/OiBib29sZWFuLCB0b3A/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbmFtZT86IHN0cmluZyB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFuZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhlIHdpZGdldCB0aGF0IGl0IGlzIGVtYmVkZGVkIGludG8gYW4gSFRNTCBwYWdlIHRoYXQgdXNlcyBhIHRhZyBtb2RpZnlpbmcgdGhlIHBhdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGF0aE1vZGlmaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhdGhNb2RpZmllZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhdGhNb2RpZmllZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGF0aE1vZGlmaWVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgc2luZ2xlIHBvaW50IG9yIG11bHRpcGxlIHBvaW50cyBjYW4gYmUgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBvaW50U2VsZWN0aW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BvaW50U2VsZWN0aW9uTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvaW50U2VsZWN0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwb2ludFNlbGVjdGlvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVkcmF3IHRoZSB3aWRnZXQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgcGFyZW50IGJyb3dzZXIgd2luZG93IGNoYW5nZXMgb3IgYSBtb2JpbGUgZGV2aWNlIHJvdGF0ZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVkcmF3T25SZXNpemUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVkcmF3T25SZXNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCByZWRyYXdPblJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVkcmF3T25SZXNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgY2hhcnQgbXVzdCBiZWhhdmUgd2hlbiBzZXJpZXMgcG9pbnQgbGFiZWxzIG92ZXJsYXAuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVzb2x2ZUxhYmVsT3ZlcmxhcHBpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXNvbHZlTGFiZWxPdmVybGFwcGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlc29sdmVMYWJlbE92ZXJsYXBwaW5nKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jlc29sdmVMYWJlbE92ZXJsYXBwaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3YXBzIHRoZSBheGVzIGFyb3VuZCBtYWtpbmcgdGhlIHZhbHVlIGF4aXMgaG9yaXpvbnRhbCBhbmQgdGhlIGFyZ3VtZW50IGF4aXMgdmVydGljYWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcm90YXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyb3RhdGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm90YXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm90YXRlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2V0dGluZ3Mgb2YgdGhlIHNjcm9sbCBiYXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2Nyb2xsQmFyKCk6IHsgY29sb3I/OiBzdHJpbmcsIG9mZnNldD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY3JvbGxCYXInKTtcclxuICAgIH1cclxuICAgIHNldCBzY3JvbGxCYXIodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIG9mZnNldD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY3JvbGxCYXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSB6b29tQW5kUGFuIG9wdGlvbiBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNjcm9sbGluZ01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY3JvbGxpbmdNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2Nyb2xsaW5nTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY3JvbGxpbmdNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBvcHRpb25zIGZvciBDaGFydCB3aWRnZXQgc2VyaWVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlcmllcygpOiBhbnkgfCBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZXJpZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXJpZXModmFsdWU6IGFueSB8IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlcmllcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHNpbmdsZSBzZXJpZXMgb3IgbXVsdGlwbGUgc2VyaWVzIGNhbiBiZSBzZWxlY3RlZCBpbiB0aGUgY2hhcnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VyaWVzU2VsZWN0aW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nlcmllc1NlbGVjdGlvbk1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXJpZXNTZWxlY3Rpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nlcmllc1NlbGVjdGlvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgc2VyaWVzIHRlbXBsYXRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlcmllc1RlbXBsYXRlKCk6IHsgY3VzdG9taXplU2VyaWVzPzogRnVuY3Rpb24sIG5hbWVGaWVsZD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZXJpZXNUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlcmllc1RlbXBsYXRlKHZhbHVlOiB7IGN1c3RvbWl6ZVNlcmllcz86IEZ1bmN0aW9uLCBuYW1lRmllbGQ/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VyaWVzVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBzaXplIGluIHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaXplKCk6IHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2l6ZSh2YWx1ZTogeyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgYSBwb2ludCBzaG91bGQgcmVtYWluIGluIHRoZSBob3ZlciBzdGF0ZSB3aGVuIHRoZSBtb3VzZSBwb2ludGVyIG1vdmVzIGF3YXkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RpY2t5SG92ZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RpY2t5SG92ZXJpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGlja3lIb3ZlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RpY2t5SG92ZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRvIHN5bmNocm9uaXplIHZhbHVlIGF4ZXMgd2hlbiB0aGV5IGFyZSBkaXNwbGF5ZWQgb24gYSBzaW5nbGUgcGFuZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzeW5jaHJvbml6ZU11bHRpQXhlcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzeW5jaHJvbml6ZU11bHRpQXhlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN5bmNocm9uaXplTXVsdGlBeGVzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzeW5jaHJvbml6ZU11bHRpQXhlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBuYW1lIG9mIHRoZSB0aGVtZSB0aGUgd2lkZ2V0IHVzZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGhlbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aGVtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RoZW1lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHdpZGdldCdzIHRpdGxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGl0bGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aXRsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRvb2x0aXBzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvb2x0aXAoKTogeyBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBhcnJvd0xlbmd0aD86IG51bWJlciwgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnRhaW5lcj86IEVsZW1lbnQgfCBKUXVlcnksIGNvcm5lclJhZGl1cz86IG51bWJlciwgY3VzdG9taXplVG9vbHRpcD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc2hhZG93PzogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9LCBzaGFyZWQ/OiBib29sZWFuLCB6SW5kZXg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9vbHRpcCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvb2x0aXAodmFsdWU6IHsgYXJndW1lbnRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgYXJyb3dMZW5ndGg/OiBudW1iZXIsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb250YWluZXI/OiBFbGVtZW50IHwgSlF1ZXJ5LCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGN1c3RvbWl6ZVRvb2x0aXA/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgbG9jYXRpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHNoYWRvdz86IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSwgc2hhcmVkPzogYm9vbGVhbiwgekluZGV4PzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Rvb2x0aXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIENvbW1vblNlcmllcy5hZ2dyZWdhdGlvbi5lbmFibGVkIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdXNlQWdncmVnYXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndXNlQWdncmVnYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCB1c2VBZ2dyZWdhdGlvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndXNlQWdncmVnYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgdmFsdWUgYXhpcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZUF4aXMoKTogQXJyYXk8YW55IHwgeyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYXV0b0JyZWFrc0VuYWJsZWQ/OiBib29sZWFuLCBheGlzRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIGJyZWFrcz86IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+LCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY2F0ZWdvcmllcz86IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PiwgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHN0YWdnZXJpbmdTcGFjaW5nPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9LCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtYXg/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtYXhBdXRvQnJlYWtDb3VudD86IG51bWJlciwgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbj86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrQ291bnQ/OiBudW1iZXIsIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pblZpc3VhbFJhbmdlTGVuZ3RoPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbXVsdGlwbGVBeGVzU3BhY2luZz86IG51bWJlciwgbmFtZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFuZT86IHN0cmluZywgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgc2hvd1plcm8/OiBib29sZWFuLCBzdHJpcHM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfT4sIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciB9LCBzeW5jaHJvbml6ZWRWYWx1ZT86IG51bWJlciwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0aXRsZT86IHN0cmluZyB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgbWFyZ2luPzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHR5cGU/OiBzdHJpbmcsIHZhbHVlTWFyZ2luc0VuYWJsZWQ/OiBib29sZWFuLCB2YWx1ZVR5cGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB2aXN1YWxSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHZpc3VhbFJhbmdlVXBkYXRlTW9kZT86IHN0cmluZywgd2hvbGVSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHdpZHRoPzogbnVtYmVyIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZUF4aXMnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZUF4aXModmFsdWU6IEFycmF5PGFueSB8IHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGF1dG9CcmVha3NFbmFibGVkPzogYm9vbGVhbiwgYXhpc0RpdmlzaW9uRmFjdG9yPzogbnVtYmVyLCBicmVha3M/OiBBcnJheTxEZXZFeHByZXNzLnZpei5TY2FsZUJyZWFrPiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNhdGVnb3JpZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT4sIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWF4QXV0b0JyZWFrQ291bnQ/OiBudW1iZXIsIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW4/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5WaXN1YWxSYW5nZUxlbmd0aD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG11bHRpcGxlQXhlc1NwYWNpbmc/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhbmU/OiBzdHJpbmcsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHNob3daZXJvPzogYm9vbGVhbiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSwgc3luY2hyb25pemVkVmFsdWU/OiBudW1iZXIsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgdGl0bGU/OiBzdHJpbmcgfCB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmFsdWVUeXBlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgdmlzdWFsUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB2aXN1YWxSYW5nZVVwZGF0ZU1vZGU/OiBzdHJpbmcsIHdob2xlUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB3aWR0aD86IG51bWJlciB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVBeGlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgem9vbWluZyBhbmQgcGFubmluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB6b29tQW5kUGFuKCk6IHsgYWxsb3dNb3VzZVdoZWVsPzogYm9vbGVhbiwgYWxsb3dUb3VjaEdlc3R1cmVzPzogYm9vbGVhbiwgYXJndW1lbnRBeGlzPzogc3RyaW5nLCBkcmFnQm94U3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyIH0sIGRyYWdUb1pvb20/OiBib29sZWFuLCBwYW5LZXk/OiBzdHJpbmcsIHZhbHVlQXhpcz86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd6b29tQW5kUGFuJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgem9vbUFuZFBhbih2YWx1ZTogeyBhbGxvd01vdXNlV2hlZWw/OiBib29sZWFuLCBhbGxvd1RvdWNoR2VzdHVyZXM/OiBib29sZWFuLCBhcmd1bWVudEF4aXM/OiBzdHJpbmcsIGRyYWdCb3hTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIgfSwgZHJhZ1RvWm9vbT86IGJvb2xlYW4sIHBhbktleT86IHN0cmluZywgdmFsdWVBeGlzPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3pvb21BbmRQYW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSB6b29tQW5kUGFuIG9wdGlvbiBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHpvb21pbmdNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignem9vbWluZ01vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCB6b29taW5nTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd6b29taW5nTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgbGFiZWwgb24gdGhlIGFyZ3VtZW50IGF4aXMgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFyZ3VtZW50QXhpc0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFsbCBzZXJpZXMgYXJlIHJlYWR5LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Eb25lOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyByZW5kZXJpbmcgaGFzIGZpbmlzaGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EcmF3bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCBpcyBleHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRXhwb3J0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGZpbGUgd2l0aCBleHBvcnRlZCB3aWRnZXQgaXMgc2F2ZWQgdG8gdGhlIHVzZXIncyBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25GaWxlU2F2aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGVycm9yIG9yIHdhcm5pbmcgb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25JbmNpZGVudE9jY3VycmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIGxlZ2VuZCBpdGVtIGlzIGNsaWNrZWQgb3IgdGFwcGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25MZWdlbmRDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBzZXJpZXMgcG9pbnQgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblBvaW50Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSBwb2ludGVyIGVudGVycyBvciBsZWF2ZXMgYSBzZXJpZXMgcG9pbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblBvaW50SG92ZXJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgc2VyaWVzIHBvaW50IGlzIHNlbGVjdGVkIG9yIHNlbGVjdGlvbiBpcyBjYW5jZWxlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUG9pbnRTZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgc2VyaWVzIGlzIGNsaWNrZWQgb3IgdGFwcGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZXJpZXNDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHBvaW50ZXIgZW50ZXJzIG9yIGxlYXZlcyBhIHNlcmllcy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2VyaWVzSG92ZXJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgc2VyaWVzIGlzIHNlbGVjdGVkIG9yIHNlbGVjdGlvbiBpcyBjYW5jZWxlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2VyaWVzU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHRvb2x0aXAgYmVjb21lcyBoaWRkZW4uXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblRvb2x0aXBIaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB0b29sdGlwIGFwcGVhcnMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblRvb2x0aXBTaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB6b29taW5nIG9yIHBhbm5pbmcgZW5kcy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uWm9vbUVuZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB6b29taW5nIG9yIHBhbm5pbmcgYmVnaW5zLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25ab29tU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFkYXB0aXZlTGF5b3V0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoZWlnaHQ/OiBudW1iZXIsIGtlZXBMYWJlbHM/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhZGp1c3RPblpvb21DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbmltYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgeyBkdXJhdGlvbj86IG51bWJlciwgZWFzaW5nPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgbWF4UG9pbnRDb3VudFN1cHBvcnRlZD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbm5vdGF0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PERldkV4cHJlc3Mudml6LmR4Q2hhcnRBbm5vdGF0aW9uQ29uZmlnIHwgYW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYXJndW1lbnRBeGlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhZ2dyZWdhdGlvbkdyb3VwV2lkdGg/OiBudW1iZXIsIGFnZ3JlZ2F0aW9uSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYXJndW1lbnRUeXBlPzogc3RyaW5nLCBheGlzRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIGJyZWFrcz86IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+LCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY2F0ZWdvcmllcz86IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PiwgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaG9saWRheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgaG92ZXJNb2RlPzogc3RyaW5nLCBpbnZlcnRlZD86IGJvb2xlYW4sIGxhYmVsPzogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc3RhZ2dlcmluZ1NwYWNpbmc/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heD86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW4/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5WaXN1YWxSYW5nZUxlbmd0aD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG9wYWNpdHk/OiBudW1iZXIsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHNpbmdsZVdvcmtkYXlzPzogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4sIHN0cmlwcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzdGFydFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB9Piwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgdGl0bGU/OiBzdHJpbmcgfCB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHZpc3VhbFJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgdmlzdWFsUmFuZ2VVcGRhdGVNb2RlPzogc3RyaW5nLCB3aG9sZVJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgd2lkdGg/OiBudW1iZXIsIHdvcmtkYXlzT25seT86IGJvb2xlYW4sIHdvcmtXZWVrPzogQXJyYXk8bnVtYmVyPiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhdXRvSGlkZVBvaW50TWFya2Vyc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGJhckdyb3VwUGFkZGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYmFyR3JvdXBXaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYmFyV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbW1vbkFubm90YXRpb25TZXR0aW5nc0NoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3Mudml6LmR4Q2hhcnRDb21tb25Bbm5vdGF0aW9uQ29uZmlnPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb21tb25BeGlzU2V0dGluZ3NDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHBvc2l0aW9uPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGl0bGU/OiB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbW1vblBhbmVTZXR0aW5nc0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGJvdHRvbT86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxlZnQ/OiBib29sZWFuLCBvcGFjaXR5PzogbnVtYmVyLCByaWdodD86IGJvb2xlYW4sIHRvcD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbW1vblNlcmllc1NldHRpbmdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNyb3NzaGFpckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGhvcml6b250YWxMaW5lPzogYm9vbGVhbiB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmVydGljYWxMaW5lPzogYm9vbGVhbiB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjdXN0b21pemVBbm5vdGF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZUxhYmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZVBvaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFQcmVwYXJlU2V0dGluZ3NDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNoZWNrVHlwZUZvckFsbERhdGE/OiBib29sZWFuLCBjb252ZXJ0VG9BeGlzRGF0YVR5cGU/OiBib29sZWFuLCBzb3J0aW5nTWV0aG9kPzogYm9vbGVhbiB8IEZ1bmN0aW9uIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFTb3VyY2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRlZmF1bHRQYW5lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlcXVhbEJhcldpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXhwb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbGVnZW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGNvcm5lclJhZGl1cz86IG51bWJlciwgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sdW1uQ291bnQ/OiBudW1iZXIsIGNvbHVtbkl0ZW1TcGFjaW5nPzogbnVtYmVyLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZUl0ZW1zPzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIGhvdmVyTW9kZT86IHN0cmluZywgaXRlbXNBbGlnbm1lbnQ/OiBzdHJpbmcsIGl0ZW1UZXh0UG9zaXRpb24/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIG1hcmtlclNpemU/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgcm93Q291bnQ/OiBudW1iZXIsIHJvd0l0ZW1TcGFjaW5nPzogbnVtYmVyLCB0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGxvYWRpbmdJbmRpY2F0b3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBzaG93PzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXJnaW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXhCdWJibGVTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtaW5CdWJibGVTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBuZWdhdGl2ZXNBc1plcm9lc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhbGV0dGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBBcnJheTxzdHJpbmc+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYWxldHRlRXh0ZW5zaW9uTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGFuZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBib3R0b20/OiBib29sZWFuLCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsZWZ0PzogYm9vbGVhbiwgb3BhY2l0eT86IG51bWJlciwgcmlnaHQ/OiBib29sZWFuLCB0b3A/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbmFtZT86IHN0cmluZyB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGF0aE1vZGlmaWVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcG9pbnRTZWxlY3Rpb25Nb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWRyYXdPblJlc2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlc29sdmVMYWJlbE92ZXJsYXBwaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByb3RhdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcnRsRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbEJhckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29sb3I/OiBzdHJpbmcsIG9mZnNldD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JvbGxpbmdNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZXJpZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnkgfCBBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZXJpZXNTZWxlY3Rpb25Nb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZXJpZXNUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY3VzdG9taXplU2VyaWVzPzogRnVuY3Rpb24sIG5hbWVGaWVsZD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN0aWNreUhvdmVyaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3luY2hyb25pemVNdWx0aUF4ZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0aGVtZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGl0bGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGFycm93TGVuZ3RoPzogbnVtYmVyLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgY29udGFpbmVyPzogRWxlbWVudCB8IEpRdWVyeSwgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBjdXN0b21pemVUb29sdGlwPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGxvY2F0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzaGFkb3c/OiB7IGJsdXI/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyIH0sIHNoYXJlZD86IGJvb2xlYW4sIHpJbmRleD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB1c2VBZ2dyZWdhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQXhpc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PGFueSB8IHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGF1dG9CcmVha3NFbmFibGVkPzogYm9vbGVhbiwgYXhpc0RpdmlzaW9uRmFjdG9yPzogbnVtYmVyLCBicmVha3M/OiBBcnJheTxEZXZFeHByZXNzLnZpei5TY2FsZUJyZWFrPiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNhdGVnb3JpZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT4sIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWF4QXV0b0JyZWFrQ291bnQ/OiBudW1iZXIsIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW4/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5WaXN1YWxSYW5nZUxlbmd0aD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG11bHRpcGxlQXhlc1NwYWNpbmc/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhbmU/OiBzdHJpbmcsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHNob3daZXJvPzogYm9vbGVhbiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSwgc3luY2hyb25pemVkVmFsdWU/OiBudW1iZXIsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgdGl0bGU/OiBzdHJpbmcgfCB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmFsdWVUeXBlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgdmlzdWFsUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB2aXN1YWxSYW5nZVVwZGF0ZU1vZGU/OiBzdHJpbmcsIHdob2xlUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB3aWR0aD86IG51bWJlciB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgem9vbUFuZFBhbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dNb3VzZVdoZWVsPzogYm9vbGVhbiwgYWxsb3dUb3VjaEdlc3R1cmVzPzogYm9vbGVhbiwgYXJndW1lbnRBeGlzPzogc3RyaW5nLCBkcmFnQm94U3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyIH0sIGRyYWdUb1pvb20/OiBib29sZWFuLCBwYW5LZXk/OiBzdHJpbmcsIHZhbHVlQXhpcz86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB6b29taW5nTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG5cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlBbm5vdGF0aW9uQ29tcG9uZW50KVxyXG4gICAgZ2V0IGFubm90YXRpb25zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUFubm90YXRpb25Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbm5vdGF0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFubm90YXRpb25zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdhbm5vdGF0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVBhbmVDb21wb25lbnQpXHJcbiAgICBnZXQgcGFuZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpUGFuZUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbmVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFuZXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3BhbmVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpU2VyaWVzQ29tcG9uZW50KVxyXG4gICAgZ2V0IHNlcmllc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlTZXJpZXNDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZXJpZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXJpZXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3NlcmllcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVZhbHVlQXhpc0NvbXBvbmVudClcclxuICAgIGdldCB2YWx1ZUF4aXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVmFsdWVBeGlzQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVBeGlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWVBeGlzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd2YWx1ZUF4aXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXJndW1lbnRBeGlzQ2xpY2snLCBlbWl0OiAnb25Bcmd1bWVudEF4aXNDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZG9uZScsIGVtaXQ6ICdvbkRvbmUnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZHJhd24nLCBlbWl0OiAnb25EcmF3bicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRlZCcsIGVtaXQ6ICdvbkV4cG9ydGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2V4cG9ydGluZycsIGVtaXQ6ICdvbkV4cG9ydGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmaWxlU2F2aW5nJywgZW1pdDogJ29uRmlsZVNhdmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbmNpZGVudE9jY3VycmVkJywgZW1pdDogJ29uSW5jaWRlbnRPY2N1cnJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2xlZ2VuZENsaWNrJywgZW1pdDogJ29uTGVnZW5kQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3B0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvbk9wdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncG9pbnRDbGljaycsIGVtaXQ6ICdvblBvaW50Q2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncG9pbnRIb3ZlckNoYW5nZWQnLCBlbWl0OiAnb25Qb2ludEhvdmVyQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdwb2ludFNlbGVjdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25Qb2ludFNlbGVjdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2VyaWVzQ2xpY2snLCBlbWl0OiAnb25TZXJpZXNDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzZXJpZXNIb3ZlckNoYW5nZWQnLCBlbWl0OiAnb25TZXJpZXNIb3ZlckNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2VyaWVzU2VsZWN0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvblNlcmllc1NlbGVjdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAndG9vbHRpcEhpZGRlbicsIGVtaXQ6ICdvblRvb2x0aXBIaWRkZW4nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAndG9vbHRpcFNob3duJywgZW1pdDogJ29uVG9vbHRpcFNob3duJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3pvb21FbmQnLCBlbWl0OiAnb25ab29tRW5kJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3pvb21TdGFydCcsIGVtaXQ6ICdvblpvb21TdGFydCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWRhcHRpdmVMYXlvdXRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FkanVzdE9uWm9vbUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYW5pbWF0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbm5vdGF0aW9uc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYXJndW1lbnRBeGlzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhdXRvSGlkZVBvaW50TWFya2Vyc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYmFyR3JvdXBQYWRkaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdiYXJHcm91cFdpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdiYXJXaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29tbW9uQW5ub3RhdGlvblNldHRpbmdzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb21tb25BeGlzU2V0dGluZ3NDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbW1vblBhbmVTZXR0aW5nc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29tbW9uU2VyaWVzU2V0dGluZ3NDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbnRhaW5lckJhY2tncm91bmRDb2xvckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3Jvc3NoYWlyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjdXN0b21pemVBbm5vdGF0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjdXN0b21pemVMYWJlbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplUG9pbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFQcmVwYXJlU2V0dGluZ3NDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFTb3VyY2VDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RlZmF1bHRQYW5lQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VxdWFsQmFyV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2V4cG9ydENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbGVnZW5kQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdsb2FkaW5nSW5kaWNhdG9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXJnaW5DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21heEJ1YmJsZVNpemVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21pbkJ1YmJsZVNpemVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ25lZ2F0aXZlc0FzWmVyb2VzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYWxldHRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYWxldHRlRXh0ZW5zaW9uTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFuZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BhdGhNb2RpZmllZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncG9pbnRTZWxlY3Rpb25Nb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZWRyYXdPblJlc2l6ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVzb2x2ZUxhYmVsT3ZlcmxhcHBpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JvdGF0ZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Njcm9sbEJhckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2Nyb2xsaW5nTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VyaWVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZXJpZXNTZWxlY3Rpb25Nb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZXJpZXNUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2l6ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3RpY2t5SG92ZXJpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N5bmNocm9uaXplTXVsdGlBeGVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aGVtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGl0bGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Rvb2x0aXBDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3VzZUFnZ3JlZ2F0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUF4aXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3pvb21BbmRQYW5DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3pvb21pbmdNb2RlQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4Q2hhcnQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVdpZGdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnYW5ub3RhdGlvbnMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnZGF0YVNvdXJjZScsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdwYWxldHRlJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3BhbmVzJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3NlcmllcycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCd2YWx1ZUF4aXMnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdhbm5vdGF0aW9ucycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3BhbGV0dGUnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygncGFuZXMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnc2VyaWVzJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3ZhbHVlQXhpcycpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoZXJIZWxwZXIuY2hlY2tXYXRjaGVycygpO1xyXG4gICAgICAgIHN1cGVyLm5nRG9DaGVjaygpO1xyXG4gICAgICAgIHN1cGVyLmNsZWFyQ2hhbmdlZE9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGxldCBpc1NldHVwID0gdGhpcy5faWRoLnNldHVwU2luZ2xlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBsZXQgaXNDaGFuZ2VkID0gdGhpcy5faWRoLmdldENoYW5nZXMobmFtZSwgdmFsdWUpICE9PSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaXNTZXR1cCB8fCBpc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuX3NldE9wdGlvbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBEeG9BZGFwdGl2ZUxheW91dE1vZHVsZSxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4aUFubm90YXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Cb3JkZXJNb2R1bGUsXHJcbiAgICBEeG9Gb250TW9kdWxlLFxyXG4gICAgRHhvSW1hZ2VNb2R1bGUsXHJcbiAgICBEeG9TaGFkb3dNb2R1bGUsXHJcbiAgICBEeG9Bcmd1bWVudEF4aXNNb2R1bGUsXHJcbiAgICBEeG9BZ2dyZWdhdGlvbkludGVydmFsTW9kdWxlLFxyXG4gICAgRHhpQnJlYWtNb2R1bGUsXHJcbiAgICBEeG9CcmVha1N0eWxlTW9kdWxlLFxyXG4gICAgRHhpQ29uc3RhbnRMaW5lTW9kdWxlLFxyXG4gICAgRHhvTGFiZWxNb2R1bGUsXHJcbiAgICBEeG9Db25zdGFudExpbmVTdHlsZU1vZHVsZSxcclxuICAgIER4b0dyaWRNb2R1bGUsXHJcbiAgICBEeG9Gb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9NaW5vckdyaWRNb2R1bGUsXHJcbiAgICBEeG9NaW5vclRpY2tNb2R1bGUsXHJcbiAgICBEeG9NaW5vclRpY2tJbnRlcnZhbE1vZHVsZSxcclxuICAgIER4b01pblZpc3VhbFJhbmdlTGVuZ3RoTW9kdWxlLFxyXG4gICAgRHhpU3RyaXBNb2R1bGUsXHJcbiAgICBEeG9TdHJpcFN0eWxlTW9kdWxlLFxyXG4gICAgRHhvVGlja01vZHVsZSxcclxuICAgIER4b1RpY2tJbnRlcnZhbE1vZHVsZSxcclxuICAgIER4b1RpdGxlTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uQW5ub3RhdGlvblNldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uQXhpc1NldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uUGFuZVNldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uU2VyaWVzU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9BZ2dyZWdhdGlvbk1vZHVsZSxcclxuICAgIER4b0FyZWFNb2R1bGUsXHJcbiAgICBEeG9Ib3ZlclN0eWxlTW9kdWxlLFxyXG4gICAgRHhvSGF0Y2hpbmdNb2R1bGUsXHJcbiAgICBEeG9Db25uZWN0b3JNb2R1bGUsXHJcbiAgICBEeG9Qb2ludE1vZHVsZSxcclxuICAgIER4b0hlaWdodE1vZHVsZSxcclxuICAgIER4b1VybE1vZHVsZSxcclxuICAgIER4b1dpZHRoTW9kdWxlLFxyXG4gICAgRHhvU2VsZWN0aW9uU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9SZWR1Y3Rpb25Nb2R1bGUsXHJcbiAgICBEeG9WYWx1ZUVycm9yQmFyTW9kdWxlLFxyXG4gICAgRHhvQmFyTW9kdWxlLFxyXG4gICAgRHhvQnViYmxlTW9kdWxlLFxyXG4gICAgRHhvQ2FuZGxlc3RpY2tNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZGFyZWFNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZGJhck1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2VkbGluZU1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2Vkc3BsaW5lTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRzcGxpbmVhcmVhTW9kdWxlLFxyXG4gICAgRHhvQXJndW1lbnRGb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9MaW5lTW9kdWxlLFxyXG4gICAgRHhvUmFuZ2VhcmVhTW9kdWxlLFxyXG4gICAgRHhvUmFuZ2ViYXJNb2R1bGUsXHJcbiAgICBEeG9TY2F0dGVyTW9kdWxlLFxyXG4gICAgRHhvU3BsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3BsaW5lYXJlYU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZGJhck1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZHNwbGluZU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRzcGxpbmVhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RlcGFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGVwbGluZU1vZHVsZSxcclxuICAgIER4b1N0b2NrTW9kdWxlLFxyXG4gICAgRHhvQ3Jvc3NoYWlyTW9kdWxlLFxyXG4gICAgRHhvSG9yaXpvbnRhbExpbmVNb2R1bGUsXHJcbiAgICBEeG9WZXJ0aWNhbExpbmVNb2R1bGUsXHJcbiAgICBEeG9EYXRhUHJlcGFyZVNldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvRXhwb3J0TW9kdWxlLFxyXG4gICAgRHhvTGVnZW5kTW9kdWxlLFxyXG4gICAgRHhvTWFyZ2luTW9kdWxlLFxyXG4gICAgRHhvU3VidGl0bGVNb2R1bGUsXHJcbiAgICBEeG9Mb2FkaW5nSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgRHhpUGFuZU1vZHVsZSxcclxuICAgIER4b1Njcm9sbEJhck1vZHVsZSxcclxuICAgIER4aVNlcmllc01vZHVsZSxcclxuICAgIER4b1Nlcmllc1RlbXBsYXRlTW9kdWxlLFxyXG4gICAgRHhvU2l6ZU1vZHVsZSxcclxuICAgIER4b1Rvb2x0aXBNb2R1bGUsXHJcbiAgICBEeGlWYWx1ZUF4aXNNb2R1bGUsXHJcbiAgICBEeG9ab29tQW5kUGFuTW9kdWxlLFxyXG4gICAgRHhvRHJhZ0JveFN0eWxlTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeENoYXJ0Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeENoYXJ0Q29tcG9uZW50LFxyXG4gICAgRHhvQWRhcHRpdmVMYXlvdXRNb2R1bGUsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeGlBbm5vdGF0aW9uTW9kdWxlLFxyXG4gICAgRHhvQm9yZGVyTW9kdWxlLFxyXG4gICAgRHhvRm9udE1vZHVsZSxcclxuICAgIER4b0ltYWdlTW9kdWxlLFxyXG4gICAgRHhvU2hhZG93TW9kdWxlLFxyXG4gICAgRHhvQXJndW1lbnRBeGlzTW9kdWxlLFxyXG4gICAgRHhvQWdncmVnYXRpb25JbnRlcnZhbE1vZHVsZSxcclxuICAgIER4aUJyZWFrTW9kdWxlLFxyXG4gICAgRHhvQnJlYWtTdHlsZU1vZHVsZSxcclxuICAgIER4aUNvbnN0YW50TGluZU1vZHVsZSxcclxuICAgIER4b0xhYmVsTW9kdWxlLFxyXG4gICAgRHhvQ29uc3RhbnRMaW5lU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9HcmlkTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTWlub3JHcmlkTW9kdWxlLFxyXG4gICAgRHhvTWlub3JUaWNrTW9kdWxlLFxyXG4gICAgRHhvTWlub3JUaWNrSW50ZXJ2YWxNb2R1bGUsXHJcbiAgICBEeG9NaW5WaXN1YWxSYW5nZUxlbmd0aE1vZHVsZSxcclxuICAgIER4aVN0cmlwTW9kdWxlLFxyXG4gICAgRHhvU3RyaXBTdHlsZU1vZHVsZSxcclxuICAgIER4b1RpY2tNb2R1bGUsXHJcbiAgICBEeG9UaWNrSW50ZXJ2YWxNb2R1bGUsXHJcbiAgICBEeG9UaXRsZU1vZHVsZSxcclxuICAgIER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0NvbW1vbkF4aXNTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0NvbW1vblBhbmVTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0NvbW1vblNlcmllc1NldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQWdncmVnYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BcmVhTW9kdWxlLFxyXG4gICAgRHhvSG92ZXJTdHlsZU1vZHVsZSxcclxuICAgIER4b0hhdGNoaW5nTW9kdWxlLFxyXG4gICAgRHhvQ29ubmVjdG9yTW9kdWxlLFxyXG4gICAgRHhvUG9pbnRNb2R1bGUsXHJcbiAgICBEeG9IZWlnaHRNb2R1bGUsXHJcbiAgICBEeG9VcmxNb2R1bGUsXHJcbiAgICBEeG9XaWR0aE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvblN0eWxlTW9kdWxlLFxyXG4gICAgRHhvUmVkdWN0aW9uTW9kdWxlLFxyXG4gICAgRHhvVmFsdWVFcnJvckJhck1vZHVsZSxcclxuICAgIER4b0Jhck1vZHVsZSxcclxuICAgIER4b0J1YmJsZU1vZHVsZSxcclxuICAgIER4b0NhbmRsZXN0aWNrTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRhcmVhTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRiYXJNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZGxpbmVNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZHNwbGluZU1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2Vkc3BsaW5lYXJlYU1vZHVsZSxcclxuICAgIER4b0FyZ3VtZW50Rm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTGluZU1vZHVsZSxcclxuICAgIER4b1JhbmdlYXJlYU1vZHVsZSxcclxuICAgIER4b1JhbmdlYmFyTW9kdWxlLFxyXG4gICAgRHhvU2NhdHRlck1vZHVsZSxcclxuICAgIER4b1NwbGluZU1vZHVsZSxcclxuICAgIER4b1NwbGluZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkYXJlYU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRiYXJNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkbGluZU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRzcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TdGFja2Vkc3BsaW5lYXJlYU1vZHVsZSxcclxuICAgIER4b1N0ZXBhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RlcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TdG9ja01vZHVsZSxcclxuICAgIER4b0Nyb3NzaGFpck1vZHVsZSxcclxuICAgIER4b0hvcml6b250YWxMaW5lTW9kdWxlLFxyXG4gICAgRHhvVmVydGljYWxMaW5lTW9kdWxlLFxyXG4gICAgRHhvRGF0YVByZXBhcmVTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0xlZ2VuZE1vZHVsZSxcclxuICAgIER4b01hcmdpbk1vZHVsZSxcclxuICAgIER4b1N1YnRpdGxlTW9kdWxlLFxyXG4gICAgRHhvTG9hZGluZ0luZGljYXRvck1vZHVsZSxcclxuICAgIER4aVBhbmVNb2R1bGUsXHJcbiAgICBEeG9TY3JvbGxCYXJNb2R1bGUsXHJcbiAgICBEeGlTZXJpZXNNb2R1bGUsXHJcbiAgICBEeG9TZXJpZXNUZW1wbGF0ZU1vZHVsZSxcclxuICAgIER4b1NpemVNb2R1bGUsXHJcbiAgICBEeG9Ub29sdGlwTW9kdWxlLFxyXG4gICAgRHhpVmFsdWVBeGlzTW9kdWxlLFxyXG4gICAgRHhvWm9vbUFuZFBhbk1vZHVsZSxcclxuICAgIER4b0RyYWdCb3hTdHlsZU1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeENoYXJ0TW9kdWxlIHsgfVxyXG4iXX0=
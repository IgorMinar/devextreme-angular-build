import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxChart from 'devextreme/viz/chart';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
let DxChartComponent = class DxChartComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
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
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies adaptive layout options.
     */
    get adaptiveLayout() {
        return this._getOption('adaptiveLayout');
    }
    set adaptiveLayout(value) {
        this._setOption('adaptiveLayout', value);
    }
    /**
     * Specifies whether to adjust the value axis's visualRange when the argument axis is being zoomed or panned.
     */
    get adjustOnZoom() {
        return this._getOption('adjustOnZoom');
    }
    set adjustOnZoom(value) {
        this._setOption('adjustOnZoom', value);
    }
    /**
     * Specifies animation options.
     */
    get animation() {
        return this._getOption('animation');
    }
    set animation(value) {
        this._setOption('animation', value);
    }
    /**
     * Specifies the annotation collection.
     */
    get annotations() {
        return this._getOption('annotations');
    }
    set annotations(value) {
        this._setOption('annotations', value);
    }
    /**
     * Configures the argument axis.
     */
    get argumentAxis() {
        return this._getOption('argumentAxis');
    }
    set argumentAxis(value) {
        this._setOption('argumentAxis', value);
    }
    /**
     * Specifies whether to hide series point markers automatically to reduce visual clutter.
     */
    get autoHidePointMarkers() {
        return this._getOption('autoHidePointMarkers');
    }
    set autoHidePointMarkers(value) {
        this._setOption('autoHidePointMarkers', value);
    }
    /**
     * Controls the padding and consequently the width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth option is set.
     */
    get barGroupPadding() {
        return this._getOption('barGroupPadding');
    }
    set barGroupPadding(value) {
        this._setOption('barGroupPadding', value);
    }
    /**
     * Specifies a fixed width for groups of bars with the same argument, measured in pixels. Takes precedence over the barGroupPadding option.
     */
    get barGroupWidth() {
        return this._getOption('barGroupWidth');
    }
    set barGroupWidth(value) {
        this._setOption('barGroupWidth', value);
    }
    /**
     * Use CommonSeries.barPadding instead.
     */
    get barWidth() {
        return this._getOption('barWidth');
    }
    set barWidth(value) {
        this._setOption('barWidth', value);
    }
    /**
     * Specifies settings common for all annotations in the chart.
     */
    get commonAnnotationSettings() {
        return this._getOption('commonAnnotationSettings');
    }
    set commonAnnotationSettings(value) {
        this._setOption('commonAnnotationSettings', value);
    }
    /**
     * Defines common settings for both the argument and value axis in a chart.
     */
    get commonAxisSettings() {
        return this._getOption('commonAxisSettings');
    }
    set commonAxisSettings(value) {
        this._setOption('commonAxisSettings', value);
    }
    /**
     * Defines common settings for all panes in a chart.
     */
    get commonPaneSettings() {
        return this._getOption('commonPaneSettings');
    }
    set commonPaneSettings(value) {
        this._setOption('commonPaneSettings', value);
    }
    /**
     * Specifies settings common for all series in the chart.
     */
    get commonSeriesSettings() {
        return this._getOption('commonSeriesSettings');
    }
    set commonSeriesSettings(value) {
        this._setOption('commonSeriesSettings', value);
    }
    /**
     * Colors the background of the chart container.
     */
    get containerBackgroundColor() {
        return this._getOption('containerBackgroundColor');
    }
    set containerBackgroundColor(value) {
        this._setOption('containerBackgroundColor', value);
    }
    /**
     * Configures the crosshair feature.
     */
    get crosshair() {
        return this._getOption('crosshair');
    }
    set crosshair(value) {
        this._setOption('crosshair', value);
    }
    /**
     * Customizes an individual annotation.
     */
    get customizeAnnotation() {
        return this._getOption('customizeAnnotation');
    }
    set customizeAnnotation(value) {
        this._setOption('customizeAnnotation', value);
    }
    /**
     * Customizes the appearance of an individual point label.
     */
    get customizeLabel() {
        return this._getOption('customizeLabel');
    }
    set customizeLabel(value) {
        this._setOption('customizeLabel', value);
    }
    /**
     * Customizes the appearance of an individual series point.
     */
    get customizePoint() {
        return this._getOption('customizePoint');
    }
    set customizePoint(value) {
        this._setOption('customizePoint', value);
    }
    /**
     * Processes data before visualizing it.
     */
    get dataPrepareSettings() {
        return this._getOption('dataPrepareSettings');
    }
    set dataPrepareSettings(value) {
        this._setOption('dataPrepareSettings', value);
    }
    /**
     * Binds the widget to data.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    /**
     * Specifies which pane should be used by default.
     */
    get defaultPane() {
        return this._getOption('defaultPane');
    }
    set defaultPane(value) {
        this._setOption('defaultPane', value);
    }
    /**
     * Specifies whether the widget responds to the user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /**
     * Use CommonSeries.ignoreEmptyPoints instead.
     */
    get equalBarWidth() {
        return this._getOption('equalBarWidth');
    }
    set equalBarWidth(value) {
        this._setOption('equalBarWidth', value);
    }
    /**
     * Configures the exporting and printing features.
     */
    get export() {
        return this._getOption('export');
    }
    set export(value) {
        this._setOption('export', value);
    }
    /**
     * Specifies the options of a chart's legend.
     */
    get legend() {
        return this._getOption('legend');
    }
    set legend(value) {
        this._setOption('legend', value);
    }
    /**
     * Configures the loading indicator.
     */
    get loadingIndicator() {
        return this._getOption('loadingIndicator');
    }
    set loadingIndicator(value) {
        this._setOption('loadingIndicator', value);
    }
    /**
     * Generates space around the widget.
     */
    get margin() {
        return this._getOption('margin');
    }
    set margin(value) {
        this._setOption('margin', value);
    }
    /**
     * Specifies a coefficient determining the diameter of the largest bubble.
     */
    get maxBubbleSize() {
        return this._getOption('maxBubbleSize');
    }
    set maxBubbleSize(value) {
        this._setOption('maxBubbleSize', value);
    }
    /**
     * Specifies the diameter of the smallest bubble measured in pixels.
     */
    get minBubbleSize() {
        return this._getOption('minBubbleSize');
    }
    set minBubbleSize(value) {
        this._setOption('minBubbleSize', value);
    }
    /**
     * Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.
     */
    get negativesAsZeroes() {
        return this._getOption('negativesAsZeroes');
    }
    set negativesAsZeroes(value) {
        this._setOption('negativesAsZeroes', value);
    }
    /**
     * Sets the palette to be used for colorizing series and their elements.
     */
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    /**
     * Specifies what to do with colors in the palette when their number is less than the number of series (in the Chart widget) or points in a series (in the PieChart widget).
     */
    get paletteExtensionMode() {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value) {
        this._setOption('paletteExtensionMode', value);
    }
    /**
     * Declares a collection of panes.
     */
    get panes() {
        return this._getOption('panes');
    }
    set panes(value) {
        this._setOption('panes', value);
    }
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    get pathModified() {
        return this._getOption('pathModified');
    }
    set pathModified(value) {
        this._setOption('pathModified', value);
    }
    /**
     * Specifies whether a single point or multiple points can be selected in the chart.
     */
    get pointSelectionMode() {
        return this._getOption('pointSelectionMode');
    }
    set pointSelectionMode(value) {
        this._setOption('pointSelectionMode', value);
    }
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    get redrawOnResize() {
        return this._getOption('redrawOnResize');
    }
    set redrawOnResize(value) {
        this._setOption('redrawOnResize', value);
    }
    /**
     * Specifies how the chart must behave when series point labels overlap.
     */
    get resolveLabelOverlapping() {
        return this._getOption('resolveLabelOverlapping');
    }
    set resolveLabelOverlapping(value) {
        this._setOption('resolveLabelOverlapping', value);
    }
    /**
     * Swaps the axes around making the value axis horizontal and the argument axis vertical.
     */
    get rotated() {
        return this._getOption('rotated');
    }
    set rotated(value) {
        this._setOption('rotated', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Specifies the settings of the scroll bar.
     */
    get scrollBar() {
        return this._getOption('scrollBar');
    }
    set scrollBar(value) {
        this._setOption('scrollBar', value);
    }
    /**
     * Use the zoomAndPan option instead.
     */
    get scrollingMode() {
        return this._getOption('scrollingMode');
    }
    set scrollingMode(value) {
        this._setOption('scrollingMode', value);
    }
    /**
     * Specifies options for Chart widget series.
     */
    get series() {
        return this._getOption('series');
    }
    set series(value) {
        this._setOption('series', value);
    }
    /**
     * Specifies whether a single series or multiple series can be selected in the chart.
     */
    get seriesSelectionMode() {
        return this._getOption('seriesSelectionMode');
    }
    set seriesSelectionMode(value) {
        this._setOption('seriesSelectionMode', value);
    }
    /**
     * Defines options for the series template.
     */
    get seriesTemplate() {
        return this._getOption('seriesTemplate');
    }
    set seriesTemplate(value) {
        this._setOption('seriesTemplate', value);
    }
    /**
     * Specifies the widget's size in pixels.
     */
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
    }
    /**
     * Specifies whether a point should remain in the hover state when the mouse pointer moves away.
     */
    get stickyHovering() {
        return this._getOption('stickyHovering');
    }
    set stickyHovering(value) {
        this._setOption('stickyHovering', value);
    }
    /**
     * Indicates whether or not to synchronize value axes when they are displayed on a single pane.
     */
    get synchronizeMultiAxes() {
        return this._getOption('synchronizeMultiAxes');
    }
    set synchronizeMultiAxes(value) {
        this._setOption('synchronizeMultiAxes', value);
    }
    /**
     * Sets the name of the theme the widget uses.
     */
    get theme() {
        return this._getOption('theme');
    }
    set theme(value) {
        this._setOption('theme', value);
    }
    /**
     * Configures the widget's title.
     */
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    /**
     * Configures tooltips.
     */
    get tooltip() {
        return this._getOption('tooltip');
    }
    set tooltip(value) {
        this._setOption('tooltip', value);
    }
    /**
     * Use CommonSeries.aggregation.enabled instead.
     */
    get useAggregation() {
        return this._getOption('useAggregation');
    }
    set useAggregation(value) {
        this._setOption('useAggregation', value);
    }
    /**
     * Configures the value axis.
     */
    get valueAxis() {
        return this._getOption('valueAxis');
    }
    set valueAxis(value) {
        this._setOption('valueAxis', value);
    }
    /**
     * Configures zooming and panning.
     */
    get zoomAndPan() {
        return this._getOption('zoomAndPan');
    }
    set zoomAndPan(value) {
        this._setOption('zoomAndPan', value);
    }
    /**
     * Use the zoomAndPan option instead.
     */
    get zoomingMode() {
        return this._getOption('zoomingMode');
    }
    set zoomingMode(value) {
        this._setOption('zoomingMode', value);
    }
    get annotationsChildren() {
        return this._getOption('annotations');
    }
    set annotationsChildren(value) {
        this.setChildren('annotations', value);
    }
    get panesChildren() {
        return this._getOption('panes');
    }
    set panesChildren(value) {
        this.setChildren('panes', value);
    }
    get seriesChildren() {
        return this._getOption('series');
    }
    set seriesChildren(value) {
        this.setChildren('series', value);
    }
    get valueAxisChildren() {
        return this._getOption('valueAxis');
    }
    set valueAxisChildren(value) {
        this.setChildren('valueAxis', value);
    }
    _createInstance(element, options) {
        return new DxChart(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('annotations', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('panes', changes);
        this.setupChanges('series', changes);
        this.setupChanges('valueAxis', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('annotations');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('panes');
        this._idh.doCheck('series');
        this._idh.doCheck('valueAxis');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
};
DxChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
let DxChartModule = class DxChartModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxChartComponent, DxChartModule };
//# sourceMappingURL=devextreme-angular-ui-chart.js.map

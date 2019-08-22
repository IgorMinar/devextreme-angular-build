/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "adaptiveLayout", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "adjustOnZoom", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxChartComponent.prototype, "annotations", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "argumentAxis", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "autoHidePointMarkers", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxChartComponent.prototype, "barGroupPadding", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxChartComponent.prototype, "barGroupWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxChartComponent.prototype, "barWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "commonAnnotationSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "commonAxisSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "commonPaneSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "commonSeriesSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxChartComponent.prototype, "containerBackgroundColor", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "crosshair", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Function])
], DxChartComponent.prototype, "customizeAnnotation", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Function])
], DxChartComponent.prototype, "customizeLabel", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Function])
], DxChartComponent.prototype, "customizePoint", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "dataPrepareSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxChartComponent.prototype, "defaultPane", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "equalBarWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "export", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "legend", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "loadingIndicator", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "margin", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxChartComponent.prototype, "maxBubbleSize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxChartComponent.prototype, "minBubbleSize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "negativesAsZeroes", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "palette", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxChartComponent.prototype, "paletteExtensionMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxChartComponent.prototype, "panes", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "pathModified", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxChartComponent.prototype, "pointSelectionMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "redrawOnResize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxChartComponent.prototype, "resolveLabelOverlapping", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "rotated", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "scrollBar", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxChartComponent.prototype, "scrollingMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "series", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxChartComponent.prototype, "seriesSelectionMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "seriesTemplate", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "size", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "stickyHovering", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "synchronizeMultiAxes", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxChartComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "title", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "tooltip", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxChartComponent.prototype, "useAggregation", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxChartComponent.prototype, "valueAxis", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "zoomAndPan", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxChartComponent.prototype, "zoomingMode", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onArgumentAxisClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onDone", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onDrawn", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onExported", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onExporting", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onFileSaving", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onIncidentOccurred", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onLegendClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onPointClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onPointHoverChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onPointSelectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onSeriesClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onSeriesHoverChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onSeriesSelectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onTooltipHidden", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onTooltipShown", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onZoomEnd", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "onZoomStart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "adaptiveLayoutChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "adjustOnZoomChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "animationChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "annotationsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "argumentAxisChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "autoHidePointMarkersChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "barGroupPaddingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "barGroupWidthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "barWidthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "commonAnnotationSettingsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "commonAxisSettingsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "commonPaneSettingsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "commonSeriesSettingsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "containerBackgroundColorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "crosshairChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "customizeAnnotationChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "customizeLabelChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "customizePointChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "dataPrepareSettingsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "dataSourceChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "defaultPaneChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "equalBarWidthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "exportChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "legendChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "loadingIndicatorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "marginChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "maxBubbleSizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "minBubbleSizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "negativesAsZeroesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "paletteChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "paletteExtensionModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "panesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "pathModifiedChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "pointSelectionModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "redrawOnResizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "rotatedChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "scrollBarChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "scrollingModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "seriesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "seriesSelectionModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "seriesTemplateChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "sizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "stickyHoveringChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "synchronizeMultiAxesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "themeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "titleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "tooltipChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "useAggregationChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "valueAxisChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "zoomAndPanChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxChartComponent.prototype, "zoomingModeChange", void 0);
tslib_1.__decorate([
    ContentChildren(DxiAnnotationComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "annotationsChildren", null);
tslib_1.__decorate([
    ContentChildren(DxiPaneComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "panesChildren", null);
tslib_1.__decorate([
    ContentChildren(DxiSeriesComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxChartComponent.prototype, "seriesChildren", null);
tslib_1.__decorate([
    ContentChildren(DxiValueAxisComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
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
    tslib_1.__param(7, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
        WatcherHelper,
        IterableDifferHelper, NestedOptionHost,
        TransferState, Object])
], DxChartComponent);
export { DxChartComponent };
let DxChartModule = class DxChartModule {
};
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
export { DxChartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBWXBDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBSVosZUFBZSxFQUNmLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQztBQUVuRCxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBS2hFOztHQUVHO0FBWUgsSUFBYSxnQkFBZ0IsR0FBN0Isc0JBQThCLFNBQVEsV0FBVztJQXVqQzdDLFlBQVksVUFBc0IsRUFBRSxNQUFjLEVBQUUsWUFBNEIsRUFDaEUsY0FBNkIsRUFDN0IsSUFBMEIsRUFBRSxVQUE0QixFQUNoRSxhQUE0QixFQUNQLFVBQWU7UUFFeEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFMdkUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsU0FBSSxHQUFKLElBQUksQ0FBc0I7UUFNdEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUMvRCxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUMvQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUNyQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUN2QyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM3QyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUMvQyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUNqRCxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDN0QsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDbkQsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDbkQsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUN2RCxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUNqRCxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDL0QsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFO1lBQ3ZFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ25ELEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRTtZQUNqRSxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7WUFDekUsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUN2RCxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ3JELEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzNDLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFO1lBQ2hDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQzlCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQzdCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQzlCLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFO1lBQ2pDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzFCLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFO1lBQzFDLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFO1lBQ3BDLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFO1lBQ3BDLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFO1lBQzFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFO1lBQ3JDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFO1lBQ2hDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFO1lBQ2hDLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFO1lBQ3JDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBQzVCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQzdCLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzFCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQzdCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4QixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDeEIsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7WUFDbEMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3hCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFO1lBQ25DLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN6QixFQUFFLElBQUksRUFBRSw0QkFBNEIsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDdkIsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7WUFDcEMsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7WUFDaEMsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUU7WUFDekMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBQzVCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4QixFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRTtZQUNyQyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRTtZQUNoQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDdEIsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7WUFDaEMsRUFBRSxJQUFJLEVBQUUsNEJBQTRCLEVBQUU7WUFDdEMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3ZCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN2QixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7WUFDaEMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDNUIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBNW9DRDs7T0FFRztJQUVILElBQUksY0FBYztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWdFO1FBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxZQUFZO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxTQUFTO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQTJHO1FBQ3JILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksV0FBVztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUEwRDtRQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLFlBQVk7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBeXJIO1FBQ3RzSCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLG9CQUFvQjtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQWM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLGVBQWU7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxRQUFRO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSx3QkFBd0I7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBSSx3QkFBd0IsQ0FBQyxLQUFtRDtRQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksa0JBQWtCO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBbzlDO1FBQ3YrQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksa0JBQWtCO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBMk07UUFDOU4sSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLG9CQUFvQjtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQVU7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLHdCQUF3QjtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFJLHdCQUF3QixDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLFNBQVM7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBcXhCO1FBQy94QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLG1CQUFtQjtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFJLG1CQUFtQixDQUFDLEtBQWU7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLGNBQWM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFlO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxjQUFjO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBZTtRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksbUJBQW1CO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBNkc7UUFDakksSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLFVBQVU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBMkY7UUFDdEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxXQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxRQUFRO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxXQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWlLO1FBQ3hLLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUF5L0I7UUFDaGdDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksZ0JBQWdCO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsS0FBaUg7UUFDbEksSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBdUU7UUFDOUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxpQkFBaUI7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQTZCO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksb0JBQW9CO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQUksb0JBQW9CLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUF1TztRQUM3TyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLFlBQVk7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLGtCQUFrQjtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLGNBQWM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSx1QkFBdUI7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBSSx1QkFBdUIsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxVQUFVO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxTQUFTO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWtIO1FBQzVILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksYUFBYTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUF1QjtRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLG1CQUFtQjtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFJLG1CQUFtQixDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLGNBQWM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUF5RDtRQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksSUFBSTtRQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUEwQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLGNBQWM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsSUFBSSxvQkFBb0IsQ0FBQyxLQUFjO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQTZZO1FBQ25aLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksT0FBTztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUE4a0I7UUFDdGxCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksY0FBYztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLFNBQVM7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBODlHO1FBQ3grRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLFVBQVU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeU07UUFDcE4sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxXQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWtZRCxJQUFJLG1CQUFtQjtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBSSxtQkFBbUIsQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxJQUFJLGFBQWE7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR0QsSUFBSSxjQUFjO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUdELElBQUksaUJBQWlCO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFJLGlCQUFpQixDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQThGUyxlQUFlLENBQUMsT0FBTyxFQUFFLE9BQU87UUFDdEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZLEVBQUUsT0FBc0I7UUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDcEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLEtBQVU7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUM7UUFFM0QsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7Q0FFSixDQUFBO0FBdnJDRztJQURDLEtBQUssRUFBRTs7O3NEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztvREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7aURBR1A7QUFVRDtJQURDLEtBQUssRUFBRTtzQ0FDVyxLQUFLOzZDQUdELEtBQUs7bURBRDNCO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztvREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7NERBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3VEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztxREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7Z0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O2dFQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OzswREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7MERBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OzREQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztnRUFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7aURBR1A7QUFVRDtJQURDLEtBQUssRUFBRTtzQ0FDbUIsUUFBUTs2Q0FHSixRQUFROzJEQUR0QztBQVVEO0lBREMsS0FBSyxFQUFFO3NDQUNjLFFBQVE7NkNBR0osUUFBUTtzREFEakM7QUFVRDtJQURDLEtBQUssRUFBRTtzQ0FDYyxRQUFROzZDQUdKLFFBQVE7c0RBRGpDO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OzsyREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7a0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O21EQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztnREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7bURBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3FEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozs4Q0FHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7OENBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3dEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozs4Q0FHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7cURBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3FEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozt5REFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7K0NBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OzREQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7c0NBQ0ssS0FBSzs2Q0FHRCxLQUFLOzZDQURyQjtBQVVEO0lBREMsS0FBSyxFQUFFOzs7b0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OzBEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztzREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7K0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OytDQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztrREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7aURBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3FEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozs4Q0FHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7MkRBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3NEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozs0Q0FHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7c0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OzREQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozs2Q0FHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7NkNBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OytDQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztzREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFO3NDQUNTLEtBQUs7NkNBR0QsS0FBSztpREFEekI7QUFVRDtJQURDLEtBQUssRUFBRTs7O2tEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OzttREFHUDtBQVFTO0lBQVQsTUFBTSxFQUFFO3NDQUFzQixZQUFZOzZEQUFNO0FBS3ZDO0lBQVQsTUFBTSxFQUFFO3NDQUFjLFlBQVk7cURBQU07QUFLL0I7SUFBVCxNQUFNLEVBQUU7c0NBQVMsWUFBWTtnREFBTTtBQUsxQjtJQUFULE1BQU0sRUFBRTtzQ0FBVSxZQUFZO2lEQUFNO0FBSzNCO0lBQVQsTUFBTSxFQUFFO3NDQUFhLFlBQVk7b0RBQU07QUFLOUI7SUFBVCxNQUFNLEVBQUU7c0NBQWMsWUFBWTtxREFBTTtBQUsvQjtJQUFULE1BQU0sRUFBRTtzQ0FBZSxZQUFZO3NEQUFNO0FBS2hDO0lBQVQsTUFBTSxFQUFFO3NDQUFxQixZQUFZOzREQUFNO0FBS3RDO0lBQVQsTUFBTSxFQUFFO3NDQUFnQixZQUFZO3VEQUFNO0FBS2pDO0lBQVQsTUFBTSxFQUFFO3NDQUFnQixZQUFZO3VEQUFNO0FBS2pDO0lBQVQsTUFBTSxFQUFFO3NDQUFrQixZQUFZO3lEQUFNO0FBS25DO0lBQVQsTUFBTSxFQUFFO3NDQUFlLFlBQVk7c0RBQU07QUFLaEM7SUFBVCxNQUFNLEVBQUU7c0NBQXNCLFlBQVk7NkRBQU07QUFLdkM7SUFBVCxNQUFNLEVBQUU7c0NBQTBCLFlBQVk7aUVBQU07QUFLM0M7SUFBVCxNQUFNLEVBQUU7c0NBQWdCLFlBQVk7dURBQU07QUFLakM7SUFBVCxNQUFNLEVBQUU7c0NBQXVCLFlBQVk7OERBQU07QUFLeEM7SUFBVCxNQUFNLEVBQUU7c0NBQTJCLFlBQVk7a0VBQU07QUFLNUM7SUFBVCxNQUFNLEVBQUU7c0NBQWtCLFlBQVk7eURBQU07QUFLbkM7SUFBVCxNQUFNLEVBQUU7c0NBQWlCLFlBQVk7d0RBQU07QUFLbEM7SUFBVCxNQUFNLEVBQUU7c0NBQVksWUFBWTttREFBTTtBQUs3QjtJQUFULE1BQU0sRUFBRTtzQ0FBYyxZQUFZO3FEQUFNO0FBSy9CO0lBQVQsTUFBTSxFQUFFO3NDQUF1QixZQUFZOzhEQUE0RDtBQUs5RjtJQUFULE1BQU0sRUFBRTtzQ0FBcUIsWUFBWTs0REFBVTtBQUsxQztJQUFULE1BQU0sRUFBRTtzQ0FBa0IsWUFBWTt5REFBdUc7QUFLcEk7SUFBVCxNQUFNLEVBQUU7c0NBQW9CLFlBQVk7MkRBQXNEO0FBS3JGO0lBQVQsTUFBTSxFQUFFO3NDQUFxQixZQUFZOzREQUFxckg7QUFLcnRIO0lBQVQsTUFBTSxFQUFFO3NDQUE2QixZQUFZO29FQUFVO0FBS2xEO0lBQVQsTUFBTSxFQUFFO3NDQUF3QixZQUFZOytEQUFTO0FBSzVDO0lBQVQsTUFBTSxFQUFFO3NDQUFzQixZQUFZOzZEQUFTO0FBSzFDO0lBQVQsTUFBTSxFQUFFO3NDQUFpQixZQUFZO3dEQUFTO0FBS3JDO0lBQVQsTUFBTSxFQUFFO3NDQUFpQyxZQUFZO3dFQUErQztBQUszRjtJQUFULE1BQU0sRUFBRTtzQ0FBMkIsWUFBWTtrRUFBZzlDO0FBS3QvQztJQUFULE1BQU0sRUFBRTtzQ0FBMkIsWUFBWTtrRUFBdU07QUFLN087SUFBVCxNQUFNLEVBQUU7c0NBQTZCLFlBQVk7b0VBQU07QUFLOUM7SUFBVCxNQUFNLEVBQUU7c0NBQWlDLFlBQVk7d0VBQVM7QUFLckQ7SUFBVCxNQUFNLEVBQUU7c0NBQWtCLFlBQVk7eURBQWl4QjtBQUs5eUI7SUFBVCxNQUFNLEVBQUU7c0NBQTRCLFlBQVk7bUVBQVc7QUFLbEQ7SUFBVCxNQUFNLEVBQUU7c0NBQXVCLFlBQVk7OERBQVc7QUFLN0M7SUFBVCxNQUFNLEVBQUU7c0NBQXVCLFlBQVk7OERBQVc7QUFLN0M7SUFBVCxNQUFNLEVBQUU7c0NBQTRCLFlBQVk7bUVBQXlHO0FBS2hKO0lBQVQsTUFBTSxFQUFFO3NDQUFtQixZQUFZOzBEQUF1RjtBQUtySDtJQUFULE1BQU0sRUFBRTtzQ0FBb0IsWUFBWTsyREFBUztBQUt4QztJQUFULE1BQU0sRUFBRTtzQ0FBaUIsWUFBWTt3REFBVTtBQUt0QztJQUFULE1BQU0sRUFBRTtzQ0FBb0IsWUFBWTsyREFBTTtBQUtyQztJQUFULE1BQU0sRUFBRTtzQ0FBc0IsWUFBWTs2REFBVTtBQUszQztJQUFULE1BQU0sRUFBRTtzQ0FBZSxZQUFZO3NEQUE2SjtBQUt2TDtJQUFULE1BQU0sRUFBRTtzQ0FBZSxZQUFZO3NEQUFxL0I7QUFLL2dDO0lBQVQsTUFBTSxFQUFFO3NDQUF5QixZQUFZO2dFQUE2RztBQUtqSjtJQUFULE1BQU0sRUFBRTtzQ0FBZSxZQUFZO3NEQUFtRTtBQUs3RjtJQUFULE1BQU0sRUFBRTtzQ0FBc0IsWUFBWTs2REFBUztBQUsxQztJQUFULE1BQU0sRUFBRTtzQ0FBc0IsWUFBWTs2REFBUztBQUsxQztJQUFULE1BQU0sRUFBRTtzQ0FBMEIsWUFBWTtpRUFBVTtBQUsvQztJQUFULE1BQU0sRUFBRTtzQ0FBZ0IsWUFBWTt1REFBeUI7QUFLcEQ7SUFBVCxNQUFNLEVBQUU7c0NBQTZCLFlBQVk7b0VBQVM7QUFLakQ7SUFBVCxNQUFNLEVBQUU7c0NBQWMsWUFBWTtxREFBbU87QUFLNVA7SUFBVCxNQUFNLEVBQUU7c0NBQXFCLFlBQVk7NERBQVU7QUFLMUM7SUFBVCxNQUFNLEVBQUU7c0NBQTJCLFlBQVk7a0VBQVM7QUFLL0M7SUFBVCxNQUFNLEVBQUU7c0NBQXVCLFlBQVk7OERBQVU7QUFLNUM7SUFBVCxNQUFNLEVBQUU7c0NBQWdDLFlBQVk7dUVBQVM7QUFLcEQ7SUFBVCxNQUFNLEVBQUU7c0NBQWdCLFlBQVk7dURBQVU7QUFLckM7SUFBVCxNQUFNLEVBQUU7c0NBQW1CLFlBQVk7MERBQVU7QUFLeEM7SUFBVCxNQUFNLEVBQUU7c0NBQWtCLFlBQVk7eURBQThHO0FBSzNJO0lBQVQsTUFBTSxFQUFFO3NDQUFzQixZQUFZOzZEQUFTO0FBSzFDO0lBQVQsTUFBTSxFQUFFO3NDQUFlLFlBQVk7c0RBQW1CO0FBSzdDO0lBQVQsTUFBTSxFQUFFO3NDQUE0QixZQUFZO21FQUFTO0FBS2hEO0lBQVQsTUFBTSxFQUFFO3NDQUF1QixZQUFZOzhEQUFxRDtBQUt2RjtJQUFULE1BQU0sRUFBRTtzQ0FBYSxZQUFZO29EQUFzQztBQUs5RDtJQUFULE1BQU0sRUFBRTtzQ0FBdUIsWUFBWTs4REFBVTtBQUs1QztJQUFULE1BQU0sRUFBRTtzQ0FBNkIsWUFBWTtvRUFBVTtBQUtsRDtJQUFULE1BQU0sRUFBRTtzQ0FBYyxZQUFZO3FEQUFTO0FBS2xDO0lBQVQsTUFBTSxFQUFFO3NDQUFjLFlBQVk7cURBQXlZO0FBS2xhO0lBQVQsTUFBTSxFQUFFO3NDQUFnQixZQUFZO3VEQUEwa0I7QUFLcm1CO0lBQVQsTUFBTSxFQUFFO3NDQUF1QixZQUFZOzhEQUFVO0FBSzVDO0lBQVQsTUFBTSxFQUFFO3NDQUFrQixZQUFZO3lEQUEwOUc7QUFLdi9HO0lBQVQsTUFBTSxFQUFFO3NDQUFtQixZQUFZOzBEQUFxTTtBQUtuTztJQUFULE1BQU0sRUFBRTtzQ0FBb0IsWUFBWTsyREFBUztBQU1sRDtJQURDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztzQ0FDYixTQUFTOzsyREFFbkM7QUFNRDtJQURDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztzQ0FDYixTQUFTOztxREFFN0I7QUFNRDtJQURDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztzQ0FDZCxTQUFTOztzREFFOUI7QUFNRDtJQURDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztzQ0FDZCxTQUFTOzt5REFFakM7QUFqakNRLGdCQUFnQjtJQVg1QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRTtZQUNQLGNBQWM7WUFDZCxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtTQUN2QjtpQkFOUyw2QkFBNkI7S0FPMUMsQ0FBQztJQTRqQ1csbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzZDQUpKLFVBQVUsRUFBVSxNQUFNLEVBQWdCLGNBQWM7UUFDaEQsYUFBYTtRQUN2QixvQkFBb0IsRUFBYyxnQkFBZ0I7UUFDakQsYUFBYTtHQTFqQzNCLGdCQUFnQixDQStyQzVCO1NBL3JDWSxnQkFBZ0I7QUFtM0M3QixJQUFhLGFBQWEsR0FBMUI7Q0FBOEIsQ0FBQTtBQUFqQixhQUFhO0lBbEx6QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx1QkFBdUI7WUFDdkIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLDRCQUE0QjtZQUM1QixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixjQUFjO1lBQ2QsMEJBQTBCO1lBQzFCLGFBQWE7WUFDYixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQiwwQkFBMEI7WUFDMUIsNkJBQTZCO1lBQzdCLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLHFCQUFxQjtZQUNyQixjQUFjO1lBQ2QsaUNBQWlDO1lBQ2pDLDJCQUEyQjtZQUMzQiwyQkFBMkI7WUFDM0IsNkJBQTZCO1lBQzdCLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYztZQUNkLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLFlBQVk7WUFDWixlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQiw4QkFBOEI7WUFDOUIsdUJBQXVCO1lBQ3ZCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLHNCQUFzQjtZQUN0QiwwQkFBMEI7WUFDMUIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsNEJBQTRCO1lBQzVCLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQix5QkFBeUI7WUFDekIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsdUJBQXVCO1lBQ3ZCLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQiwwQkFBMEI7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDWixnQkFBZ0I7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDUCxnQkFBZ0I7WUFDaEIsdUJBQXVCO1lBQ3ZCLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGFBQWE7WUFDYixjQUFjO1lBQ2QsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQiw0QkFBNEI7WUFDNUIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixxQkFBcUI7WUFDckIsY0FBYztZQUNkLDBCQUEwQjtZQUMxQixhQUFhO1lBQ2IsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsMEJBQTBCO1lBQzFCLDZCQUE2QjtZQUM3QixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixxQkFBcUI7WUFDckIsY0FBYztZQUNkLGlDQUFpQztZQUNqQywyQkFBMkI7WUFDM0IsMkJBQTJCO1lBQzNCLDZCQUE2QjtZQUM3QixvQkFBb0I7WUFDcEIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsWUFBWTtZQUNaLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIsa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0QixZQUFZO1lBQ1osZUFBZTtZQUNmLG9CQUFvQjtZQUNwQix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQUN4QiwwQkFBMEI7WUFDMUIsOEJBQThCO1lBQzlCLHVCQUF1QjtZQUN2QixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsMEJBQTBCO1lBQzFCLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQix1QkFBdUI7WUFDdkIscUJBQXFCO1lBQ3JCLDRCQUE0QjtZQUM1QixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixpQkFBaUI7WUFDakIseUJBQXlCO1lBQ3pCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLHVCQUF1QjtZQUN2QixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLGdCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxhQUFhLENBQUk7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhDaGFydCBmcm9tICdkZXZleHRyZW1lL3Zpei9jaGFydCc7XHJcblxyXG5cclxuaW1wb3J0IHsgRHhDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVIb3N0IH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZS1ob3N0JztcclxuaW1wb3J0IHsgRHhJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvaW50ZWdyYXRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBXYXRjaGVySGVscGVyIH0gZnJvbSAnLi4vY29yZS93YXRjaGVyLWhlbHBlcic7XHJcbmltcG9ydCB7IEl0ZXJhYmxlRGlmZmVySGVscGVyIH0gZnJvbSAnLi4vY29yZS9pdGVyYWJsZS1kaWZmZXItaGVscGVyJztcclxuXHJcbmltcG9ydCB7IER4b0FkYXB0aXZlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYWRhcHRpdmUtbGF5b3V0JztcclxuaW1wb3J0IHsgRHhvQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgRHhpQW5ub3RhdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Fubm90YXRpb24tZHhpJztcclxuaW1wb3J0IHsgRHhvQm9yZGVyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYm9yZGVyJztcclxuaW1wb3J0IHsgRHhvRm9udE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZvbnQnO1xyXG5pbXBvcnQgeyBEeG9JbWFnZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ltYWdlJztcclxuaW1wb3J0IHsgRHhvU2hhZG93TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2hhZG93JztcclxuaW1wb3J0IHsgRHhvQXJndW1lbnRBeGlzTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYXJndW1lbnQtYXhpcyc7XHJcbmltcG9ydCB7IER4b0FnZ3JlZ2F0aW9uSW50ZXJ2YWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hZ2dyZWdhdGlvbi1pbnRlcnZhbCc7XHJcbmltcG9ydCB7IER4aUJyZWFrTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYnJlYWstZHhpJztcclxuaW1wb3J0IHsgRHhvQnJlYWtTdHlsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2JyZWFrLXN0eWxlJztcclxuaW1wb3J0IHsgRHhpQ29uc3RhbnRMaW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29uc3RhbnQtbGluZS1keGknO1xyXG5pbXBvcnQgeyBEeG9MYWJlbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xhYmVsJztcclxuaW1wb3J0IHsgRHhvQ29uc3RhbnRMaW5lU3R5bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb25zdGFudC1saW5lLXN0eWxlJztcclxuaW1wb3J0IHsgRHhvR3JpZE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2dyaWQnO1xyXG5pbXBvcnQgeyBEeG9Gb3JtYXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBEeG9NaW5vckdyaWRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9taW5vci1ncmlkJztcclxuaW1wb3J0IHsgRHhvTWlub3JUaWNrTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWlub3ItdGljayc7XHJcbmltcG9ydCB7IER4b01pbm9yVGlja0ludGVydmFsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWlub3ItdGljay1pbnRlcnZhbCc7XHJcbmltcG9ydCB7IER4b01pblZpc3VhbFJhbmdlTGVuZ3RoTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWluLXZpc3VhbC1yYW5nZS1sZW5ndGgnO1xyXG5pbXBvcnQgeyBEeGlTdHJpcE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0cmlwLWR4aSc7XHJcbmltcG9ydCB7IER4b1N0cmlwU3R5bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdHJpcC1zdHlsZSc7XHJcbmltcG9ydCB7IER4b1RpY2tNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90aWNrJztcclxuaW1wb3J0IHsgRHhvVGlja0ludGVydmFsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGljay1pbnRlcnZhbCc7XHJcbmltcG9ydCB7IER4b1RpdGxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGl0bGUnO1xyXG5pbXBvcnQgeyBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb21tb24tYW5ub3RhdGlvbi1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IER4b0NvbW1vbkF4aXNTZXR0aW5nc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbW1vbi1heGlzLXNldHRpbmdzJztcclxuaW1wb3J0IHsgRHhvQ29tbW9uUGFuZVNldHRpbmdzTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29tbW9uLXBhbmUtc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBEeG9Db21tb25TZXJpZXNTZXR0aW5nc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbW1vbi1zZXJpZXMtc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBEeG9BZ2dyZWdhdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FnZ3JlZ2F0aW9uJztcclxuaW1wb3J0IHsgRHhvQXJlYU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FyZWEnO1xyXG5pbXBvcnQgeyBEeG9Ib3ZlclN0eWxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaG92ZXItc3R5bGUnO1xyXG5pbXBvcnQgeyBEeG9IYXRjaGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2hhdGNoaW5nJztcclxuaW1wb3J0IHsgRHhvQ29ubmVjdG9yTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29ubmVjdG9yJztcclxuaW1wb3J0IHsgRHhvUG9pbnRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9wb2ludCc7XHJcbmltcG9ydCB7IER4b0hlaWdodE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2hlaWdodCc7XHJcbmltcG9ydCB7IER4b1VybE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3VybCc7XHJcbmltcG9ydCB7IER4b1dpZHRoTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvd2lkdGgnO1xyXG5pbXBvcnQgeyBEeG9TZWxlY3Rpb25TdHlsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NlbGVjdGlvbi1zdHlsZSc7XHJcbmltcG9ydCB7IER4b1JlZHVjdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3JlZHVjdGlvbic7XHJcbmltcG9ydCB7IER4b1ZhbHVlRXJyb3JCYXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92YWx1ZS1lcnJvci1iYXInO1xyXG5pbXBvcnQgeyBEeG9CYXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9iYXInO1xyXG5pbXBvcnQgeyBEeG9CdWJibGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9idWJibGUnO1xyXG5pbXBvcnQgeyBEeG9DYW5kbGVzdGlja01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NhbmRsZXN0aWNrJztcclxuaW1wb3J0IHsgRHhvRnVsbHN0YWNrZWRhcmVhTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZnVsbHN0YWNrZWRhcmVhJztcclxuaW1wb3J0IHsgRHhvRnVsbHN0YWNrZWRiYXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mdWxsc3RhY2tlZGJhcic7XHJcbmltcG9ydCB7IER4b0Z1bGxzdGFja2VkbGluZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Z1bGxzdGFja2VkbGluZSc7XHJcbmltcG9ydCB7IER4b0Z1bGxzdGFja2Vkc3BsaW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZnVsbHN0YWNrZWRzcGxpbmUnO1xyXG5pbXBvcnQgeyBEeG9GdWxsc3RhY2tlZHNwbGluZWFyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mdWxsc3RhY2tlZHNwbGluZWFyZWEnO1xyXG5pbXBvcnQgeyBEeG9Bcmd1bWVudEZvcm1hdE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FyZ3VtZW50LWZvcm1hdCc7XHJcbmltcG9ydCB7IER4b0xpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9saW5lJztcclxuaW1wb3J0IHsgRHhvUmFuZ2VhcmVhTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcmFuZ2VhcmVhJztcclxuaW1wb3J0IHsgRHhvUmFuZ2ViYXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9yYW5nZWJhcic7XHJcbmltcG9ydCB7IER4b1NjYXR0ZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zY2F0dGVyJztcclxuaW1wb3J0IHsgRHhvU3BsaW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3BsaW5lJztcclxuaW1wb3J0IHsgRHhvU3BsaW5lYXJlYU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NwbGluZWFyZWEnO1xyXG5pbXBvcnQgeyBEeG9TdGFja2VkYXJlYU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0YWNrZWRhcmVhJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZGJhck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0YWNrZWRiYXInO1xyXG5pbXBvcnQgeyBEeG9TdGFja2VkbGluZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0YWNrZWRsaW5lJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZHNwbGluZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0YWNrZWRzcGxpbmUnO1xyXG5pbXBvcnQgeyBEeG9TdGFja2Vkc3BsaW5lYXJlYU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0YWNrZWRzcGxpbmVhcmVhJztcclxuaW1wb3J0IHsgRHhvU3RlcGFyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGVwYXJlYSc7XHJcbmltcG9ydCB7IER4b1N0ZXBsaW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3RlcGxpbmUnO1xyXG5pbXBvcnQgeyBEeG9TdG9ja01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0b2NrJztcclxuaW1wb3J0IHsgRHhvQ3Jvc3NoYWlyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY3Jvc3NoYWlyJztcclxuaW1wb3J0IHsgRHhvSG9yaXpvbnRhbExpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ob3Jpem9udGFsLWxpbmUnO1xyXG5pbXBvcnQgeyBEeG9WZXJ0aWNhbExpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92ZXJ0aWNhbC1saW5lJztcclxuaW1wb3J0IHsgRHhvRGF0YVByZXBhcmVTZXR0aW5nc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2RhdGEtcHJlcGFyZS1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IER4b0V4cG9ydE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2V4cG9ydCc7XHJcbmltcG9ydCB7IER4b0xlZ2VuZE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xlZ2VuZCc7XHJcbmltcG9ydCB7IER4b01hcmdpbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL21hcmdpbic7XHJcbmltcG9ydCB7IER4b1N1YnRpdGxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3VidGl0bGUnO1xyXG5pbXBvcnQgeyBEeG9Mb2FkaW5nSW5kaWNhdG9yTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbG9hZGluZy1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBEeGlQYW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcGFuZS1keGknO1xyXG5pbXBvcnQgeyBEeG9TY3JvbGxCYXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zY3JvbGwtYmFyJztcclxuaW1wb3J0IHsgRHhpU2VyaWVzTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2VyaWVzLWR4aSc7XHJcbmltcG9ydCB7IER4b1Nlcmllc1RlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2VyaWVzLXRlbXBsYXRlJztcclxuaW1wb3J0IHsgRHhvU2l6ZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NpemUnO1xyXG5pbXBvcnQgeyBEeG9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdG9vbHRpcCc7XHJcbmltcG9ydCB7IER4aVZhbHVlQXhpc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3ZhbHVlLWF4aXMtZHhpJztcclxuaW1wb3J0IHsgRHhvWm9vbUFuZFBhbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3pvb20tYW5kLXBhbic7XHJcbmltcG9ydCB7IER4b0RyYWdCb3hTdHlsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2RyYWctYm94LXN0eWxlJztcclxuXHJcbmltcG9ydCB7IER4aUFubm90YXRpb25Db21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9hbm5vdGF0aW9uLWR4aSc7XHJcbmltcG9ydCB7IER4aVBhbmVDb21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9wYW5lLWR4aSc7XHJcbmltcG9ydCB7IER4aVNlcmllc0NvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL3Nlcmllcy1keGknO1xyXG5pbXBvcnQgeyBEeGlWYWx1ZUF4aXNDb21wb25lbnQgfSBmcm9tICcuL25lc3RlZC92YWx1ZS1heGlzLWR4aSc7XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENoYXJ0IGlzIGEgd2lkZ2V0IHRoYXQgdmlzdWFsaXplcyBkYXRhIGZyb20gYSBsb2NhbCBvciByZW1vdGUgc3RvcmFnZSB1c2luZyBhIGdyZWF0IHZhcmlldHkgb2Ygc2VyaWVzIHR5cGVzIGFsb25nIHdpdGggZGlmZmVyZW50IGludGVyYWN0aXZlIGVsZW1lbnRzLCBzdWNoIGFzIHRvb2x0aXBzLCBjcm9zc2hhaXIgcG9pbnRlciwgbGVnZW5kLCBldGMuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtY2hhcnQnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbICcgOmhvc3QgeyAgZGlzcGxheTogYmxvY2s7IH0nXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhDaGFydENvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4Q2hhcnQ7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGFkYXB0aXZlIGxheW91dCBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFkYXB0aXZlTGF5b3V0KCk6IHsgaGVpZ2h0PzogbnVtYmVyLCBrZWVwTGFiZWxzPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWRhcHRpdmVMYXlvdXQnKTtcclxuICAgIH1cclxuICAgIHNldCBhZGFwdGl2ZUxheW91dCh2YWx1ZTogeyBoZWlnaHQ/OiBudW1iZXIsIGtlZXBMYWJlbHM/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZGFwdGl2ZUxheW91dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBhZGp1c3QgdGhlIHZhbHVlIGF4aXMncyB2aXN1YWxSYW5nZSB3aGVuIHRoZSBhcmd1bWVudCBheGlzIGlzIGJlaW5nIHpvb21lZCBvciBwYW5uZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWRqdXN0T25ab29tKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FkanVzdE9uWm9vbScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFkanVzdE9uWm9vbSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWRqdXN0T25ab29tJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhbmltYXRpb24gb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbmltYXRpb24oKTogYm9vbGVhbiB8IHsgZHVyYXRpb24/OiBudW1iZXIsIGVhc2luZz86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIG1heFBvaW50Q291bnRTdXBwb3J0ZWQ/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYW5pbWF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYW5pbWF0aW9uKHZhbHVlOiBib29sZWFuIHwgeyBkdXJhdGlvbj86IG51bWJlciwgZWFzaW5nPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgbWF4UG9pbnRDb3VudFN1cHBvcnRlZD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbmltYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhbm5vdGF0aW9uIGNvbGxlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYW5ub3RhdGlvbnMoKTogQXJyYXk8RGV2RXhwcmVzcy52aXouZHhDaGFydEFubm90YXRpb25Db25maWcgfCBhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbm5vdGF0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFubm90YXRpb25zKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnZpei5keENoYXJ0QW5ub3RhdGlvbkNvbmZpZyB8IGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Fubm90YXRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGFyZ3VtZW50IGF4aXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXJndW1lbnRBeGlzKCk6IHsgYWdncmVnYXRpb25Hcm91cFdpZHRoPzogbnVtYmVyLCBhZ2dyZWdhdGlvbkludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGFyZ3VtZW50VHlwZT86IHN0cmluZywgYXhpc0RpdmlzaW9uRmFjdG9yPzogbnVtYmVyLCBicmVha3M/OiBBcnJheTxEZXZFeHByZXNzLnZpei5TY2FsZUJyZWFrPiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNhdGVnb3JpZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT4sIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGhvbGlkYXlzPzogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4sIGhvdmVyTW9kZT86IHN0cmluZywgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHN0YWdnZXJpbmdTcGFjaW5nPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9LCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtYXg/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtYXhWYWx1ZU1hcmdpbj86IG51bWJlciwgbWluPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWlub3JHcmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tDb3VudD86IG51bWJlciwgbWlub3JUaWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBtaW5WYWx1ZU1hcmdpbj86IG51bWJlciwgbWluVmlzdWFsUmFuZ2VMZW5ndGg/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBvcGFjaXR5PzogbnVtYmVyLCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHBvc2l0aW9uPzogc3RyaW5nLCBzaW5nbGVXb3JrZGF5cz86IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+LCBzdHJpcHM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfT4sIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciB9LCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIHRpdGxlPzogc3RyaW5nIHwgeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBtYXJnaW4/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdHlwZT86IHN0cmluZywgdmFsdWVNYXJnaW5zRW5hYmxlZD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB2aXN1YWxSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHZpc3VhbFJhbmdlVXBkYXRlTW9kZT86IHN0cmluZywgd2hvbGVSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHdpZHRoPzogbnVtYmVyLCB3b3JrZGF5c09ubHk/OiBib29sZWFuLCB3b3JrV2Vlaz86IEFycmF5PG51bWJlcj4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJndW1lbnRBeGlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXJndW1lbnRBeGlzKHZhbHVlOiB7IGFnZ3JlZ2F0aW9uR3JvdXBXaWR0aD86IG51bWJlciwgYWdncmVnYXRpb25JbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBhcmd1bWVudFR5cGU/OiBzdHJpbmcsIGF4aXNEaXZpc2lvbkZhY3Rvcj86IG51bWJlciwgYnJlYWtzPzogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4sIGJyZWFrU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+LCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIGRpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZT86IHN0cmluZywgZW5kT25UaWNrPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBob2xpZGF5cz86IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+LCBob3Zlck1vZGU/OiBzdHJpbmcsIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbj86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrQ291bnQ/OiBudW1iZXIsIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pblZpc3VhbFJhbmdlTGVuZ3RoPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgb3BhY2l0eT86IG51bWJlciwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgc2luZ2xlV29ya2RheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0aXRsZT86IHN0cmluZyB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgbWFyZ2luPzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHR5cGU/OiBzdHJpbmcsIHZhbHVlTWFyZ2luc0VuYWJsZWQ/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgdmlzdWFsUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB2aXN1YWxSYW5nZVVwZGF0ZU1vZGU/OiBzdHJpbmcsIHdob2xlUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB3aWR0aD86IG51bWJlciwgd29ya2RheXNPbmx5PzogYm9vbGVhbiwgd29ya1dlZWs/OiBBcnJheTxudW1iZXI+IH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FyZ3VtZW50QXhpcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBoaWRlIHNlcmllcyBwb2ludCBtYXJrZXJzIGF1dG9tYXRpY2FsbHkgdG8gcmVkdWNlIHZpc3VhbCBjbHV0dGVyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGF1dG9IaWRlUG9pbnRNYXJrZXJzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2F1dG9IaWRlUG9pbnRNYXJrZXJzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXV0b0hpZGVQb2ludE1hcmtlcnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2F1dG9IaWRlUG9pbnRNYXJrZXJzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnRyb2xzIHRoZSBwYWRkaW5nIGFuZCBjb25zZXF1ZW50bHkgdGhlIHdpZHRoIG9mIGEgZ3JvdXAgb2YgYmFycyB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50IHVzaW5nIHJlbGF0aXZlIHVuaXRzLiBJZ25vcmVkIGlmIHRoZSBiYXJHcm91cFdpZHRoIG9wdGlvbiBpcyBzZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFyR3JvdXBQYWRkaW5nKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyR3JvdXBQYWRkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyR3JvdXBQYWRkaW5nKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Jhckdyb3VwUGFkZGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBmaXhlZCB3aWR0aCBmb3IgZ3JvdXBzIG9mIGJhcnMgd2l0aCB0aGUgc2FtZSBhcmd1bWVudCwgbWVhc3VyZWQgaW4gcGl4ZWxzLiBUYWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIGJhckdyb3VwUGFkZGluZyBvcHRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFyR3JvdXBXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Jhckdyb3VwV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBiYXJHcm91cFdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Jhckdyb3VwV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIENvbW1vblNlcmllcy5iYXJQYWRkaW5nIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFyV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhcldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JhcldpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBzZXR0aW5ncyBjb21tb24gZm9yIGFsbCBhbm5vdGF0aW9ucyBpbiB0aGUgY2hhcnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29tbW9uQW5ub3RhdGlvblNldHRpbmdzKCk6IERldkV4cHJlc3Mudml6LmR4Q2hhcnRDb21tb25Bbm5vdGF0aW9uQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb21tb25Bbm5vdGF0aW9uU2V0dGluZ3MnKTtcclxuICAgIH1cclxuICAgIHNldCBjb21tb25Bbm5vdGF0aW9uU2V0dGluZ3ModmFsdWU6IERldkV4cHJlc3Mudml6LmR4Q2hhcnRDb21tb25Bbm5vdGF0aW9uQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb21tb25Bbm5vdGF0aW9uU2V0dGluZ3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBjb21tb24gc2V0dGluZ3MgZm9yIGJvdGggdGhlIGFyZ3VtZW50IGFuZCB2YWx1ZSBheGlzIGluIGEgY2hhcnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29tbW9uQXhpc1NldHRpbmdzKCk6IHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGJyZWFrU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgcG9zaXRpb24/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIGRpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZT86IHN0cmluZywgZW5kT25UaWNrPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBpbnZlcnRlZD86IGJvb2xlYW4sIGxhYmVsPzogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHN0YWdnZXJpbmdTcGFjaW5nPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9LCBtYXhWYWx1ZU1hcmdpbj86IG51bWJlciwgbWlub3JHcmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5WYWx1ZU1hcmdpbj86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aXRsZT86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgbWFyZ2luPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHZhbHVlTWFyZ2luc0VuYWJsZWQ/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29tbW9uQXhpc1NldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tbW9uQXhpc1NldHRpbmdzKHZhbHVlOiB7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHBvc2l0aW9uPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGl0bGU/OiB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbW1vbkF4aXNTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGNvbW1vbiBzZXR0aW5ncyBmb3IgYWxsIHBhbmVzIGluIGEgY2hhcnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29tbW9uUGFuZVNldHRpbmdzKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGJvdHRvbT86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxlZnQ/OiBib29sZWFuLCBvcGFjaXR5PzogbnVtYmVyLCByaWdodD86IGJvb2xlYW4sIHRvcD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbW1vblBhbmVTZXR0aW5ncycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbW1vblBhbmVTZXR0aW5ncyh2YWx1ZTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgYm90dG9tPzogYm9vbGVhbiwgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGVmdD86IGJvb2xlYW4sIG9wYWNpdHk/OiBudW1iZXIsIHJpZ2h0PzogYm9vbGVhbiwgdG9wPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29tbW9uUGFuZVNldHRpbmdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBzZXR0aW5ncyBjb21tb24gZm9yIGFsbCBzZXJpZXMgaW4gdGhlIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbW1vblNlcmllc1NldHRpbmdzKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29tbW9uU2VyaWVzU2V0dGluZ3MnKTtcclxuICAgIH1cclxuICAgIHNldCBjb21tb25TZXJpZXNTZXR0aW5ncyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb21tb25TZXJpZXNTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xvcnMgdGhlIGJhY2tncm91bmQgb2YgdGhlIGNoYXJ0IGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb250YWluZXJCYWNrZ3JvdW5kQ29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29udGFpbmVyQmFja2dyb3VuZENvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGNyb3NzaGFpciBmZWF0dXJlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNyb3NzaGFpcigpOiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBob3Jpem9udGFsTGluZT86IGJvb2xlYW4gfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbGFiZWw/OiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIG9wYWNpdHk/OiBudW1iZXIsIHZlcnRpY2FsTGluZT86IGJvb2xlYW4gfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3Jvc3NoYWlyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3Jvc3NoYWlyKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBob3Jpem9udGFsTGluZT86IGJvb2xlYW4gfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbGFiZWw/OiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIG9wYWNpdHk/OiBudW1iZXIsIHZlcnRpY2FsTGluZT86IGJvb2xlYW4gfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3Jvc3NoYWlyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbWl6ZXMgYW4gaW5kaXZpZHVhbCBhbm5vdGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbWl6ZUFubm90YXRpb24oKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZUFubm90YXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVBbm5vdGF0aW9uKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplQW5ub3RhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b21pemVzIHRoZSBhcHBlYXJhbmNlIG9mIGFuIGluZGl2aWR1YWwgcG9pbnQgbGFiZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplTGFiZWwoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZUxhYmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplTGFiZWwodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVMYWJlbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b21pemVzIHRoZSBhcHBlYXJhbmNlIG9mIGFuIGluZGl2aWR1YWwgc2VyaWVzIHBvaW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbWl6ZVBvaW50KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVQb2ludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZVBvaW50KHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplUG9pbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2Vzc2VzIGRhdGEgYmVmb3JlIHZpc3VhbGl6aW5nIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFQcmVwYXJlU2V0dGluZ3MoKTogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhUHJlcGFyZVNldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVByZXBhcmVTZXR0aW5ncyh2YWx1ZTogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhUHJlcGFyZVNldHRpbmdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmRzIHRoZSB3aWRnZXQgdG8gZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhU291cmNlKCk6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hpY2ggcGFuZSBzaG91bGQgYmUgdXNlZCBieSBkZWZhdWx0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRlZmF1bHRQYW5lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGVmYXVsdFBhbmUnKTtcclxuICAgIH1cclxuICAgIHNldCBkZWZhdWx0UGFuZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkZWZhdWx0UGFuZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHRoZSB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgQ29tbW9uU2VyaWVzLmlnbm9yZUVtcHR5UG9pbnRzIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXF1YWxCYXJXaWR0aCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlcXVhbEJhcldpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXF1YWxCYXJXaWR0aCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXF1YWxCYXJXaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBleHBvcnRpbmcgYW5kIHByaW50aW5nIGZlYXR1cmVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cG9ydCgpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBmb3JtYXRzPzogQXJyYXk8c3RyaW5nPiwgbWFyZ2luPzogbnVtYmVyLCBwcmludGluZ0VuYWJsZWQ/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBvcnQnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBvcnQodmFsdWU6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZvcm1hdHM/OiBBcnJheTxzdHJpbmc+LCBtYXJnaW4/OiBudW1iZXIsIHByaW50aW5nRW5hYmxlZD86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cG9ydCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG9wdGlvbnMgb2YgYSBjaGFydCdzIGxlZ2VuZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsZWdlbmQoKTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGNvcm5lclJhZGl1cz86IG51bWJlciwgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sdW1uQ291bnQ/OiBudW1iZXIsIGNvbHVtbkl0ZW1TcGFjaW5nPzogbnVtYmVyLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZUl0ZW1zPzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIGhvdmVyTW9kZT86IHN0cmluZywgaXRlbXNBbGlnbm1lbnQ/OiBzdHJpbmcsIGl0ZW1UZXh0UG9zaXRpb24/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIG1hcmtlclNpemU/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgcm93Q291bnQ/OiBudW1iZXIsIHJvd0l0ZW1TcGFjaW5nPzogbnVtYmVyLCB0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xlZ2VuZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxlZ2VuZCh2YWx1ZTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGNvcm5lclJhZGl1cz86IG51bWJlciwgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sdW1uQ291bnQ/OiBudW1iZXIsIGNvbHVtbkl0ZW1TcGFjaW5nPzogbnVtYmVyLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZUl0ZW1zPzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIGhvdmVyTW9kZT86IHN0cmluZywgaXRlbXNBbGlnbm1lbnQ/OiBzdHJpbmcsIGl0ZW1UZXh0UG9zaXRpb24/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIG1hcmtlclNpemU/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgcm93Q291bnQ/OiBudW1iZXIsIHJvd0l0ZW1TcGFjaW5nPzogbnVtYmVyLCB0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xlZ2VuZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBsb2FkaW5nIGluZGljYXRvci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsb2FkaW5nSW5kaWNhdG9yKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkaW5nSW5kaWNhdG9yKHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBzaG93PzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2FkaW5nSW5kaWNhdG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBzcGFjZSBhcm91bmQgdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXJnaW4oKTogeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWFyZ2luJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWFyZ2luKHZhbHVlOiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXJnaW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY29lZmZpY2llbnQgZGV0ZXJtaW5pbmcgdGhlIGRpYW1ldGVyIG9mIHRoZSBsYXJnZXN0IGJ1YmJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhCdWJibGVTaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWF4QnViYmxlU2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heEJ1YmJsZVNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4QnViYmxlU2l6ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGRpYW1ldGVyIG9mIHRoZSBzbWFsbGVzdCBidWJibGUgbWVhc3VyZWQgaW4gcGl4ZWxzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbkJ1YmJsZVNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5CdWJibGVTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluQnViYmxlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5CdWJibGVTaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvcmNlcyB0aGUgd2lkZ2V0IHRvIHRyZWF0IG5lZ2F0aXZlIHZhbHVlcyBhcyB6ZXJvZXMuIEFwcGxpZXMgdG8gc3RhY2tlZC1saWtlIHNlcmllcyBvbmx5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5lZ2F0aXZlc0FzWmVyb2VzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25lZ2F0aXZlc0FzWmVyb2VzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbmVnYXRpdmVzQXNaZXJvZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25lZ2F0aXZlc0FzWmVyb2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHBhbGV0dGUgdG8gYmUgdXNlZCBmb3IgY29sb3JpemluZyBzZXJpZXMgYW5kIHRoZWlyIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhbGV0dGUoKTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFsZXR0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbGV0dGUodmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhbGV0dGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoYXQgdG8gZG8gd2l0aCBjb2xvcnMgaW4gdGhlIHBhbGV0dGUgd2hlbiB0aGVpciBudW1iZXIgaXMgbGVzcyB0aGFuIHRoZSBudW1iZXIgb2Ygc2VyaWVzIChpbiB0aGUgQ2hhcnQgd2lkZ2V0KSBvciBwb2ludHMgaW4gYSBzZXJpZXMgKGluIHRoZSBQaWVDaGFydCB3aWRnZXQpLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhbGV0dGVFeHRlbnNpb25Nb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFsZXR0ZUV4dGVuc2lvbk1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBwYWxldHRlRXh0ZW5zaW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWxldHRlRXh0ZW5zaW9uTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNsYXJlcyBhIGNvbGxlY3Rpb24gb2YgcGFuZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGFuZXMoKTogQXJyYXk8YW55IHwgeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgYm90dG9tPzogYm9vbGVhbiwgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGVmdD86IGJvb2xlYW4sIG9wYWNpdHk/OiBudW1iZXIsIHJpZ2h0PzogYm9vbGVhbiwgdG9wPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG5hbWU/OiBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbmVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFuZXModmFsdWU6IEFycmF5PGFueSB8IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGJvdHRvbT86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxlZnQ/OiBib29sZWFuLCBvcGFjaXR5PzogbnVtYmVyLCByaWdodD86IGJvb2xlYW4sIHRvcD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBuYW1lPzogc3RyaW5nIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYW5lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgd2lkZ2V0IHRoYXQgaXQgaXMgZW1iZWRkZWQgaW50byBhbiBIVE1MIHBhZ2UgdGhhdCB1c2VzIGEgdGFnIG1vZGlmeWluZyB0aGUgcGF0aC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYXRoTW9kaWZpZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGF0aE1vZGlmaWVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGF0aE1vZGlmaWVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYXRoTW9kaWZpZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgYSBzaW5nbGUgcG9pbnQgb3IgbXVsdGlwbGUgcG9pbnRzIGNhbiBiZSBzZWxlY3RlZCBpbiB0aGUgY2hhcnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcG9pbnRTZWxlY3Rpb25Nb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncG9pbnRTZWxlY3Rpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcG9pbnRTZWxlY3Rpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BvaW50U2VsZWN0aW9uTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byByZWRyYXcgdGhlIHdpZGdldCB3aGVuIHRoZSBzaXplIG9mIHRoZSBwYXJlbnQgYnJvd3NlciB3aW5kb3cgY2hhbmdlcyBvciBhIG1vYmlsZSBkZXZpY2Ugcm90YXRlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWRyYXdPblJlc2l6ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWRyYXdPblJlc2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlZHJhd09uUmVzaXplKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWRyYXdPblJlc2l6ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgaG93IHRoZSBjaGFydCBtdXN0IGJlaGF2ZSB3aGVuIHNlcmllcyBwb2ludCBsYWJlbHMgb3ZlcmxhcC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZXNvbHZlTGFiZWxPdmVybGFwcGluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jlc29sdmVMYWJlbE92ZXJsYXBwaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVzb2x2ZUxhYmVsT3ZlcmxhcHBpbmcodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVzb2x2ZUxhYmVsT3ZlcmxhcHBpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dhcHMgdGhlIGF4ZXMgYXJvdW5kIG1ha2luZyB0aGUgdmFsdWUgYXhpcyBob3Jpem9udGFsIGFuZCB0aGUgYXJndW1lbnQgYXhpcyB2ZXJ0aWNhbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb3RhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JvdGF0ZWQnKTtcclxuICAgIH1cclxuICAgIHNldCByb3RhdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyb3RhdGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBzZXR0aW5ncyBvZiB0aGUgc2Nyb2xsIGJhci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzY3JvbGxCYXIoKTogeyBjb2xvcj86IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Njcm9sbEJhcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNjcm9sbEJhcih2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Njcm9sbEJhcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdGhlIHpvb21BbmRQYW4gb3B0aW9uIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2Nyb2xsaW5nTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Njcm9sbGluZ01vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzY3JvbGxpbmdNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Njcm9sbGluZ01vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIG9wdGlvbnMgZm9yIENoYXJ0IHdpZGdldCBzZXJpZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VyaWVzKCk6IGFueSB8IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlcmllcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlcmllcyh2YWx1ZTogYW55IHwgQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VyaWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgc2luZ2xlIHNlcmllcyBvciBtdWx0aXBsZSBzZXJpZXMgY2FuIGJlIHNlbGVjdGVkIGluIHRoZSBjaGFydC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZXJpZXNTZWxlY3Rpb25Nb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzU2VsZWN0aW9uTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlcmllc1NlbGVjdGlvbk1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VyaWVzU2VsZWN0aW9uTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBzZXJpZXMgdGVtcGxhdGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VyaWVzVGVtcGxhdGUoKTogeyBjdXN0b21pemVTZXJpZXM/OiBGdW5jdGlvbiwgbmFtZUZpZWxkPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nlcmllc1RlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzVGVtcGxhdGUodmFsdWU6IHsgY3VzdG9taXplU2VyaWVzPzogRnVuY3Rpb24sIG5hbWVGaWVsZD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZXJpZXNUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHNpemUgaW4gcGl4ZWxzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNpemUoKTogeyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NpemUnKTtcclxuICAgIH1cclxuICAgIHNldCBzaXplKHZhbHVlOiB7IGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2l6ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHBvaW50IHNob3VsZCByZW1haW4gaW4gdGhlIGhvdmVyIHN0YXRlIHdoZW4gdGhlIG1vdXNlIHBvaW50ZXIgbW92ZXMgYXdheS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGlja3lIb3ZlcmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGlja3lIb3ZlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0aWNreUhvdmVyaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGlja3lIb3ZlcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdG8gc3luY2hyb25pemUgdmFsdWUgYXhlcyB3aGVuIHRoZXkgYXJlIGRpc3BsYXllZCBvbiBhIHNpbmdsZSBwYW5lLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN5bmNocm9uaXplTXVsdGlBeGVzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N5bmNocm9uaXplTXVsdGlBeGVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3luY2hyb25pemVNdWx0aUF4ZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N5bmNocm9uaXplTXVsdGlBeGVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG5hbWUgb2YgdGhlIHRoZW1lIHRoZSB3aWRnZXQgdXNlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aGVtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RoZW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGhlbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgd2lkZ2V0J3MgdGl0bGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aXRsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpdGxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdG9vbHRpcHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdG9vbHRpcCgpOiB7IGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGFycm93TGVuZ3RoPzogbnVtYmVyLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgY29udGFpbmVyPzogRWxlbWVudCB8IEpRdWVyeSwgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBjdXN0b21pemVUb29sdGlwPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGxvY2F0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzaGFkb3c/OiB7IGJsdXI/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyIH0sIHNoYXJlZD86IGJvb2xlYW4sIHpJbmRleD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0b29sdGlwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG9vbHRpcCh2YWx1ZTogeyBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBhcnJvd0xlbmd0aD86IG51bWJlciwgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnRhaW5lcj86IEVsZW1lbnQgfCBKUXVlcnksIGNvcm5lclJhZGl1cz86IG51bWJlciwgY3VzdG9taXplVG9vbHRpcD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc2hhZG93PzogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9LCBzaGFyZWQ/OiBib29sZWFuLCB6SW5kZXg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndG9vbHRpcCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgQ29tbW9uU2VyaWVzLmFnZ3JlZ2F0aW9uLmVuYWJsZWQgaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB1c2VBZ2dyZWdhdGlvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1c2VBZ2dyZWdhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHVzZUFnZ3JlZ2F0aW9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd1c2VBZ2dyZWdhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSB2YWx1ZSBheGlzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlQXhpcygpOiBBcnJheTxhbnkgfCB7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBhdXRvQnJlYWtzRW5hYmxlZD86IGJvb2xlYW4sIGF4aXNEaXZpc2lvbkZhY3Rvcj86IG51bWJlciwgYnJlYWtzPzogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4sIGJyZWFrU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+LCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIGRpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZT86IHN0cmluZywgZW5kT25UaWNrPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBpbnZlcnRlZD86IGJvb2xlYW4sIGxhYmVsPzogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc3RhZ2dlcmluZ1NwYWNpbmc/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heD86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1heEF1dG9CcmVha0NvdW50PzogbnVtYmVyLCBtYXhWYWx1ZU1hcmdpbj86IG51bWJlciwgbWluPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWlub3JHcmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tDb3VudD86IG51bWJlciwgbWlub3JUaWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBtaW5WYWx1ZU1hcmdpbj86IG51bWJlciwgbWluVmlzdWFsUmFuZ2VMZW5ndGg/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBtdWx0aXBsZUF4ZXNTcGFjaW5nPzogbnVtYmVyLCBuYW1lPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYW5lPzogc3RyaW5nLCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHBvc2l0aW9uPzogc3RyaW5nLCBzaG93WmVybz86IGJvb2xlYW4sIHN0cmlwcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzdGFydFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB9Piwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHN5bmNocm9uaXplZFZhbHVlPzogbnVtYmVyLCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIHRpdGxlPzogc3RyaW5nIHwgeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBtYXJnaW4/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdHlwZT86IHN0cmluZywgdmFsdWVNYXJnaW5zRW5hYmxlZD86IGJvb2xlYW4sIHZhbHVlVHlwZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHZpc3VhbFJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgdmlzdWFsUmFuZ2VVcGRhdGVNb2RlPzogc3RyaW5nLCB3aG9sZVJhbmdlPzogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgd2lkdGg/OiBudW1iZXIgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlQXhpcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlQXhpcyh2YWx1ZTogQXJyYXk8YW55IHwgeyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYXV0b0JyZWFrc0VuYWJsZWQ/OiBib29sZWFuLCBheGlzRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIGJyZWFrcz86IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+LCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY2F0ZWdvcmllcz86IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PiwgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHN0YWdnZXJpbmdTcGFjaW5nPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9LCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtYXg/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtYXhBdXRvQnJlYWtDb3VudD86IG51bWJlciwgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbj86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrQ291bnQ/OiBudW1iZXIsIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pblZpc3VhbFJhbmdlTGVuZ3RoPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbXVsdGlwbGVBeGVzU3BhY2luZz86IG51bWJlciwgbmFtZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFuZT86IHN0cmluZywgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgc2hvd1plcm8/OiBib29sZWFuLCBzdHJpcHM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfT4sIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciB9LCBzeW5jaHJvbml6ZWRWYWx1ZT86IG51bWJlciwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0aXRsZT86IHN0cmluZyB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgbWFyZ2luPzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHR5cGU/OiBzdHJpbmcsIHZhbHVlTWFyZ2luc0VuYWJsZWQ/OiBib29sZWFuLCB2YWx1ZVR5cGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB2aXN1YWxSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHZpc3VhbFJhbmdlVXBkYXRlTW9kZT86IHN0cmluZywgd2hvbGVSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHdpZHRoPzogbnVtYmVyIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZUF4aXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB6b29taW5nIGFuZCBwYW5uaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHpvb21BbmRQYW4oKTogeyBhbGxvd01vdXNlV2hlZWw/OiBib29sZWFuLCBhbGxvd1RvdWNoR2VzdHVyZXM/OiBib29sZWFuLCBhcmd1bWVudEF4aXM/OiBzdHJpbmcsIGRyYWdCb3hTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIgfSwgZHJhZ1RvWm9vbT86IGJvb2xlYW4sIHBhbktleT86IHN0cmluZywgdmFsdWVBeGlzPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3pvb21BbmRQYW4nKTtcclxuICAgIH1cclxuICAgIHNldCB6b29tQW5kUGFuKHZhbHVlOiB7IGFsbG93TW91c2VXaGVlbD86IGJvb2xlYW4sIGFsbG93VG91Y2hHZXN0dXJlcz86IGJvb2xlYW4sIGFyZ3VtZW50QXhpcz86IHN0cmluZywgZHJhZ0JveFN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciB9LCBkcmFnVG9ab29tPzogYm9vbGVhbiwgcGFuS2V5Pzogc3RyaW5nLCB2YWx1ZUF4aXM/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignem9vbUFuZFBhbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdGhlIHpvb21BbmRQYW4gb3B0aW9uIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgem9vbWluZ01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd6b29taW5nTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHpvb21pbmdNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3pvb21pbmdNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBsYWJlbCBvbiB0aGUgYXJndW1lbnQgYXhpcyBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXJndW1lbnRBeGlzQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYWxsIHNlcmllcyBhcmUgcmVhZHkuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRvbmU6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIHJlbmRlcmluZyBoYXMgZmluaXNoZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRyYXduOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgd2lkZ2V0IGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZXhwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkV4cG9ydGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgZmlsZSB3aXRoIGV4cG9ydGVkIHdpZGdldCBpcyBzYXZlZCB0byB0aGUgdXNlcidzIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZpbGVTYXZpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gZXJyb3Igb3Igd2FybmluZyBvY2N1cnMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluY2lkZW50T2NjdXJyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgbGVnZW5kIGl0ZW0gaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkxlZ2VuZENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHNlcmllcyBwb2ludCBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUG9pbnRDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHBvaW50ZXIgZW50ZXJzIG9yIGxlYXZlcyBhIHNlcmllcyBwb2ludC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUG9pbnRIb3ZlckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBzZXJpZXMgcG9pbnQgaXMgc2VsZWN0ZWQgb3Igc2VsZWN0aW9uIGlzIGNhbmNlbGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Qb2ludFNlbGVjdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBzZXJpZXMgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblNlcmllc0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgcG9pbnRlciBlbnRlcnMgb3IgbGVhdmVzIGEgc2VyaWVzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZXJpZXNIb3ZlckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBzZXJpZXMgaXMgc2VsZWN0ZWQgb3Igc2VsZWN0aW9uIGlzIGNhbmNlbGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZXJpZXNTZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdG9vbHRpcCBiZWNvbWVzIGhpZGRlbi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVG9vbHRpcEhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHRvb2x0aXAgYXBwZWFycy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVG9vbHRpcFNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHpvb21pbmcgb3IgcGFubmluZyBlbmRzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25ab29tRW5kOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHpvb21pbmcgb3IgcGFubmluZyBiZWdpbnMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblpvb21TdGFydDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhZGFwdGl2ZUxheW91dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFkYXB0aXZlTGF5b3V0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoZWlnaHQ/OiBudW1iZXIsIGtlZXBMYWJlbHM/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFkanVzdE9uWm9vbUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFkanVzdE9uWm9vbUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYW5pbWF0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYW5pbWF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHsgZHVyYXRpb24/OiBudW1iZXIsIGVhc2luZz86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIG1heFBvaW50Q291bnRTdXBwb3J0ZWQ/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbm5vdGF0aW9uc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFubm90YXRpb25zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8RGV2RXhwcmVzcy52aXouZHhDaGFydEFubm90YXRpb25Db25maWcgfCBhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFyZ3VtZW50QXhpc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFyZ3VtZW50QXhpc0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWdncmVnYXRpb25Hcm91cFdpZHRoPzogbnVtYmVyLCBhZ2dyZWdhdGlvbkludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGFyZ3VtZW50VHlwZT86IHN0cmluZywgYXhpc0RpdmlzaW9uRmFjdG9yPzogbnVtYmVyLCBicmVha3M/OiBBcnJheTxEZXZFeHByZXNzLnZpei5TY2FsZUJyZWFrPiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNhdGVnb3JpZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT4sIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGhvbGlkYXlzPzogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4sIGhvdmVyTW9kZT86IHN0cmluZywgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHN0YWdnZXJpbmdTcGFjaW5nPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9LCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtYXg/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtYXhWYWx1ZU1hcmdpbj86IG51bWJlciwgbWluPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWlub3JHcmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tDb3VudD86IG51bWJlciwgbWlub3JUaWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBtaW5WYWx1ZU1hcmdpbj86IG51bWJlciwgbWluVmlzdWFsUmFuZ2VMZW5ndGg/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBvcGFjaXR5PzogbnVtYmVyLCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHBvc2l0aW9uPzogc3RyaW5nLCBzaW5nbGVXb3JrZGF5cz86IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+LCBzdHJpcHM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfT4sIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciB9LCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIHRpdGxlPzogc3RyaW5nIHwgeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBtYXJnaW4/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdHlwZT86IHN0cmluZywgdmFsdWVNYXJnaW5zRW5hYmxlZD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB2aXN1YWxSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHZpc3VhbFJhbmdlVXBkYXRlTW9kZT86IHN0cmluZywgd2hvbGVSYW5nZT86IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIHdpZHRoPzogbnVtYmVyLCB3b3JrZGF5c09ubHk/OiBib29sZWFuLCB3b3JrV2Vlaz86IEFycmF5PG51bWJlcj4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhdXRvSGlkZVBvaW50TWFya2Vyc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGF1dG9IaWRlUG9pbnRNYXJrZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBiYXJHcm91cFBhZGRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBiYXJHcm91cFBhZGRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYmFyR3JvdXBXaWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGJhckdyb3VwV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYmFyV2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBiYXJXaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb21tb25Bbm5vdGF0aW9uU2V0dGluZ3NDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb21tb25Bbm5vdGF0aW9uU2V0dGluZ3NDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLnZpei5keENoYXJ0Q29tbW9uQW5ub3RhdGlvbkNvbmZpZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb21tb25BeGlzU2V0dGluZ3NDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb21tb25BeGlzU2V0dGluZ3NDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBicmVha1N0eWxlPzogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHBvc2l0aW9uPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGl0bGU/OiB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29tbW9uUGFuZVNldHRpbmdzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29tbW9uUGFuZVNldHRpbmdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgYm90dG9tPzogYm9vbGVhbiwgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGVmdD86IGJvb2xlYW4sIG9wYWNpdHk/OiBudW1iZXIsIHJpZ2h0PzogYm9vbGVhbiwgdG9wPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb21tb25TZXJpZXNTZXR0aW5nc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbW1vblNlcmllc1NldHRpbmdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbnRhaW5lckJhY2tncm91bmRDb2xvckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbnRhaW5lckJhY2tncm91bmRDb2xvckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjcm9zc2hhaXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjcm9zc2hhaXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBob3Jpem9udGFsTGluZT86IGJvb2xlYW4gfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbGFiZWw/OiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIG9wYWNpdHk/OiBudW1iZXIsIHZlcnRpY2FsTGluZT86IGJvb2xlYW4gfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjdXN0b21pemVBbm5vdGF0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY3VzdG9taXplQW5ub3RhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGN1c3RvbWl6ZUxhYmVsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY3VzdG9taXplTGFiZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjdXN0b21pemVQb2ludENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZVBvaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGF0YVByZXBhcmVTZXR0aW5nc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFQcmVwYXJlU2V0dGluZ3NDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNoZWNrVHlwZUZvckFsbERhdGE/OiBib29sZWFuLCBjb252ZXJ0VG9BeGlzRGF0YVR5cGU/OiBib29sZWFuLCBzb3J0aW5nTWV0aG9kPzogYm9vbGVhbiB8IEZ1bmN0aW9uIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGF0YVNvdXJjZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFTb3VyY2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGVmYXVsdFBhbmVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkZWZhdWx0UGFuZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVxdWFsQmFyV2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlcXVhbEJhcldpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBleHBvcnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBleHBvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBmb3JtYXRzPzogQXJyYXk8c3RyaW5nPiwgbWFyZ2luPzogbnVtYmVyLCBwcmludGluZ0VuYWJsZWQ/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGxlZ2VuZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGxlZ2VuZENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbHVtbkNvdW50PzogbnVtYmVyLCBjb2x1bW5JdGVtU3BhY2luZz86IG51bWJlciwgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVJdGVtcz86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGl0ZW1zQWxpZ25tZW50Pzogc3RyaW5nLCBpdGVtVGV4dFBvc2l0aW9uPzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBtYXJrZXJTaXplPzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHJvd0NvdW50PzogbnVtYmVyLCByb3dJdGVtU3BhY2luZz86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGxvYWRpbmdJbmRpY2F0b3JDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsb2FkaW5nSW5kaWNhdG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgc2hvdz86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXJnaW5DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXJnaW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1heEJ1YmJsZVNpemVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXhCdWJibGVTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1pbkJ1YmJsZVNpemVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtaW5CdWJibGVTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG5lZ2F0aXZlc0FzWmVyb2VzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbmVnYXRpdmVzQXNaZXJvZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhbGV0dGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYWxldHRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgQXJyYXk8c3RyaW5nPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYWxldHRlRXh0ZW5zaW9uTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhbGV0dGVFeHRlbnNpb25Nb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhbmVzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGFuZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBib3R0b20/OiBib29sZWFuLCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsZWZ0PzogYm9vbGVhbiwgb3BhY2l0eT86IG51bWJlciwgcmlnaHQ/OiBib29sZWFuLCB0b3A/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbmFtZT86IHN0cmluZyB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYXRoTW9kaWZpZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYXRoTW9kaWZpZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBvaW50U2VsZWN0aW9uTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBvaW50U2VsZWN0aW9uTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZWRyYXdPblJlc2l6ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlZHJhd09uUmVzaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZXNvbHZlTGFiZWxPdmVybGFwcGluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlc29sdmVMYWJlbE92ZXJsYXBwaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJvdGF0ZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByb3RhdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBydGxFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcnRsRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2Nyb2xsQmFyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsQmFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjb2xvcj86IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2Nyb2xsaW5nTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbGluZ01vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VyaWVzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VyaWVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55IHwgQXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZXJpZXNTZWxlY3Rpb25Nb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VyaWVzU2VsZWN0aW9uTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZXJpZXNUZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlcmllc1RlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjdXN0b21pemVTZXJpZXM/OiBGdW5jdGlvbiwgbmFtZUZpZWxkPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2l6ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdGlja3lIb3ZlcmluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN0aWNreUhvdmVyaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzeW5jaHJvbml6ZU11bHRpQXhlc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN5bmNocm9uaXplTXVsdGlBeGVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0aGVtZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRoZW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRpdGxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGl0bGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdG9vbHRpcENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGFycm93TGVuZ3RoPzogbnVtYmVyLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgY29udGFpbmVyPzogRWxlbWVudCB8IEpRdWVyeSwgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBjdXN0b21pemVUb29sdGlwPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGxvY2F0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzaGFkb3c/OiB7IGJsdXI/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyIH0sIHNoYXJlZD86IGJvb2xlYW4sIHpJbmRleD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHVzZUFnZ3JlZ2F0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdXNlQWdncmVnYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbHVlQXhpc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQXhpc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PGFueSB8IHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGF1dG9CcmVha3NFbmFibGVkPzogYm9vbGVhbiwgYXhpc0RpdmlzaW9uRmFjdG9yPzogbnVtYmVyLCBicmVha3M/OiBBcnJheTxEZXZFeHByZXNzLnZpei5TY2FsZUJyZWFrPiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNhdGVnb3JpZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT4sIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGFsaWdubWVudD86IHN0cmluZywgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbWF4QXV0b0JyZWFrQ291bnQ/OiBudW1iZXIsIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW4/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pblZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5WaXN1YWxSYW5nZUxlbmd0aD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG11bHRpcGxlQXhlc1NwYWNpbmc/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhbmU/OiBzdHJpbmcsIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHNob3daZXJvPzogYm9vbGVhbiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSwgc3luY2hyb25pemVkVmFsdWU/OiBudW1iZXIsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgdGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgdGl0bGU/OiBzdHJpbmcgfCB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmFsdWVUeXBlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgdmlzdWFsUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB2aXN1YWxSYW5nZVVwZGF0ZU1vZGU/OiBzdHJpbmcsIHdob2xlUmFuZ2U/OiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCB3aWR0aD86IG51bWJlciB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB6b29tQW5kUGFuQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgem9vbUFuZFBhbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dNb3VzZVdoZWVsPzogYm9vbGVhbiwgYWxsb3dUb3VjaEdlc3R1cmVzPzogYm9vbGVhbiwgYXJndW1lbnRBeGlzPzogc3RyaW5nLCBkcmFnQm94U3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyIH0sIGRyYWdUb1pvb20/OiBib29sZWFuLCBwYW5LZXk/OiBzdHJpbmcsIHZhbHVlQXhpcz86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHpvb21pbmdNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgem9vbWluZ01vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuXHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpQW5ub3RhdGlvbkNvbXBvbmVudClcclxuICAgIGdldCBhbm5vdGF0aW9uc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlBbm5vdGF0aW9uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYW5ub3RhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBhbm5vdGF0aW9uc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignYW5ub3RhdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlQYW5lQ29tcG9uZW50KVxyXG4gICAgZ2V0IHBhbmVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVBhbmVDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYW5lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbmVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdwYW5lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVNlcmllc0NvbXBvbmVudClcclxuICAgIGdldCBzZXJpZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpU2VyaWVzQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdzZXJpZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlWYWx1ZUF4aXNDb21wb25lbnQpXHJcbiAgICBnZXQgdmFsdWVBeGlzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVZhbHVlQXhpc0NvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlQXhpcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlQXhpc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndmFsdWVBeGlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBfd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBfaWRoOiBJdGVyYWJsZURpZmZlckhlbHBlciwgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcclxuICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55KSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgdGVtcGxhdGVIb3N0LCBfd2F0Y2hlckhlbHBlciwgdHJhbnNmZXJTdGF0ZSwgcGxhdGZvcm1JZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FyZ3VtZW50QXhpc0NsaWNrJywgZW1pdDogJ29uQXJndW1lbnRBeGlzQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZGlzcG9zaW5nJywgZW1pdDogJ29uRGlzcG9zaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2RvbmUnLCBlbWl0OiAnb25Eb25lJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2RyYXduJywgZW1pdDogJ29uRHJhd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0ZWQnLCBlbWl0OiAnb25FeHBvcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRpbmcnLCBlbWl0OiAnb25FeHBvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZmlsZVNhdmluZycsIGVtaXQ6ICdvbkZpbGVTYXZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5jaWRlbnRPY2N1cnJlZCcsIGVtaXQ6ICdvbkluY2lkZW50T2NjdXJyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdsZWdlbmRDbGljaycsIGVtaXQ6ICdvbkxlZ2VuZENsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3BvaW50Q2xpY2snLCBlbWl0OiAnb25Qb2ludENsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3BvaW50SG92ZXJDaGFuZ2VkJywgZW1pdDogJ29uUG9pbnRIb3ZlckNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncG9pbnRTZWxlY3Rpb25DaGFuZ2VkJywgZW1pdDogJ29uUG9pbnRTZWxlY3Rpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Nlcmllc0NsaWNrJywgZW1pdDogJ29uU2VyaWVzQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2VyaWVzSG92ZXJDaGFuZ2VkJywgZW1pdDogJ29uU2VyaWVzSG92ZXJDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Nlcmllc1NlbGVjdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25TZXJpZXNTZWxlY3Rpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Rvb2x0aXBIaWRkZW4nLCBlbWl0OiAnb25Ub29sdGlwSGlkZGVuJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Rvb2x0aXBTaG93bicsIGVtaXQ6ICdvblRvb2x0aXBTaG93bicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd6b29tRW5kJywgZW1pdDogJ29uWm9vbUVuZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd6b29tU3RhcnQnLCBlbWl0OiAnb25ab29tU3RhcnQnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FkYXB0aXZlTGF5b3V0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhZGp1c3RPblpvb21DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FuaW1hdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYW5ub3RhdGlvbnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FyZ3VtZW50QXhpc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYXV0b0hpZGVQb2ludE1hcmtlcnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Jhckdyb3VwUGFkZGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYmFyR3JvdXBXaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYmFyV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbW1vbkFubm90YXRpb25TZXR0aW5nc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29tbW9uQXhpc1NldHRpbmdzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb21tb25QYW5lU2V0dGluZ3NDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbW1vblNlcmllc1NldHRpbmdzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb250YWluZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Nyb3NzaGFpckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplQW5ub3RhdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplTGFiZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1c3RvbWl6ZVBvaW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhUHJlcGFyZVNldHRpbmdzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhU291cmNlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkZWZhdWx0UGFuZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlcXVhbEJhcldpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdleHBvcnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xlZ2VuZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbG9hZGluZ0luZGljYXRvckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWFyZ2luQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXhCdWJibGVTaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtaW5CdWJibGVTaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICduZWdhdGl2ZXNBc1plcm9lc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFsZXR0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFsZXR0ZUV4dGVuc2lvbk1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BhbmVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYXRoTW9kaWZpZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BvaW50U2VsZWN0aW9uTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVkcmF3T25SZXNpemVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Jlc29sdmVMYWJlbE92ZXJsYXBwaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyb3RhdGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzY3JvbGxCYXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Njcm9sbGluZ01vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nlcmllc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VyaWVzU2VsZWN0aW9uTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VyaWVzVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NpemVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0aWNreUhvdmVyaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzeW5jaHJvbml6ZU11bHRpQXhlc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGhlbWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RpdGxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0b29sdGlwQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd1c2VBZ2dyZWdhdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVBeGlzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd6b29tQW5kUGFuQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd6b29taW5nTW9kZUNoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeENoYXJ0KGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2Fubm90YXRpb25zJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygncGFsZXR0ZScsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdwYW5lcycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdzZXJpZXMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygndmFsdWVBeGlzJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnYW5ub3RhdGlvbnMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnZGF0YVNvdXJjZScpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdwYWxldHRlJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3BhbmVzJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3NlcmllcycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCd2YWx1ZUF4aXMnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvQWRhcHRpdmVMYXlvdXRNb2R1bGUsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeGlBbm5vdGF0aW9uTW9kdWxlLFxyXG4gICAgRHhvQm9yZGVyTW9kdWxlLFxyXG4gICAgRHhvRm9udE1vZHVsZSxcclxuICAgIER4b0ltYWdlTW9kdWxlLFxyXG4gICAgRHhvU2hhZG93TW9kdWxlLFxyXG4gICAgRHhvQXJndW1lbnRBeGlzTW9kdWxlLFxyXG4gICAgRHhvQWdncmVnYXRpb25JbnRlcnZhbE1vZHVsZSxcclxuICAgIER4aUJyZWFrTW9kdWxlLFxyXG4gICAgRHhvQnJlYWtTdHlsZU1vZHVsZSxcclxuICAgIER4aUNvbnN0YW50TGluZU1vZHVsZSxcclxuICAgIER4b0xhYmVsTW9kdWxlLFxyXG4gICAgRHhvQ29uc3RhbnRMaW5lU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9HcmlkTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTWlub3JHcmlkTW9kdWxlLFxyXG4gICAgRHhvTWlub3JUaWNrTW9kdWxlLFxyXG4gICAgRHhvTWlub3JUaWNrSW50ZXJ2YWxNb2R1bGUsXHJcbiAgICBEeG9NaW5WaXN1YWxSYW5nZUxlbmd0aE1vZHVsZSxcclxuICAgIER4aVN0cmlwTW9kdWxlLFxyXG4gICAgRHhvU3RyaXBTdHlsZU1vZHVsZSxcclxuICAgIER4b1RpY2tNb2R1bGUsXHJcbiAgICBEeG9UaWNrSW50ZXJ2YWxNb2R1bGUsXHJcbiAgICBEeG9UaXRsZU1vZHVsZSxcclxuICAgIER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0NvbW1vbkF4aXNTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0NvbW1vblBhbmVTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0NvbW1vblNlcmllc1NldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQWdncmVnYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BcmVhTW9kdWxlLFxyXG4gICAgRHhvSG92ZXJTdHlsZU1vZHVsZSxcclxuICAgIER4b0hhdGNoaW5nTW9kdWxlLFxyXG4gICAgRHhvQ29ubmVjdG9yTW9kdWxlLFxyXG4gICAgRHhvUG9pbnRNb2R1bGUsXHJcbiAgICBEeG9IZWlnaHRNb2R1bGUsXHJcbiAgICBEeG9VcmxNb2R1bGUsXHJcbiAgICBEeG9XaWR0aE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvblN0eWxlTW9kdWxlLFxyXG4gICAgRHhvUmVkdWN0aW9uTW9kdWxlLFxyXG4gICAgRHhvVmFsdWVFcnJvckJhck1vZHVsZSxcclxuICAgIER4b0Jhck1vZHVsZSxcclxuICAgIER4b0J1YmJsZU1vZHVsZSxcclxuICAgIER4b0NhbmRsZXN0aWNrTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRhcmVhTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRiYXJNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZGxpbmVNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZHNwbGluZU1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2Vkc3BsaW5lYXJlYU1vZHVsZSxcclxuICAgIER4b0FyZ3VtZW50Rm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTGluZU1vZHVsZSxcclxuICAgIER4b1JhbmdlYXJlYU1vZHVsZSxcclxuICAgIER4b1JhbmdlYmFyTW9kdWxlLFxyXG4gICAgRHhvU2NhdHRlck1vZHVsZSxcclxuICAgIER4b1NwbGluZU1vZHVsZSxcclxuICAgIER4b1NwbGluZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkYXJlYU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRiYXJNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkbGluZU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRzcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TdGFja2Vkc3BsaW5lYXJlYU1vZHVsZSxcclxuICAgIER4b1N0ZXBhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RlcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TdG9ja01vZHVsZSxcclxuICAgIER4b0Nyb3NzaGFpck1vZHVsZSxcclxuICAgIER4b0hvcml6b250YWxMaW5lTW9kdWxlLFxyXG4gICAgRHhvVmVydGljYWxMaW5lTW9kdWxlLFxyXG4gICAgRHhvRGF0YVByZXBhcmVTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0xlZ2VuZE1vZHVsZSxcclxuICAgIER4b01hcmdpbk1vZHVsZSxcclxuICAgIER4b1N1YnRpdGxlTW9kdWxlLFxyXG4gICAgRHhvTG9hZGluZ0luZGljYXRvck1vZHVsZSxcclxuICAgIER4aVBhbmVNb2R1bGUsXHJcbiAgICBEeG9TY3JvbGxCYXJNb2R1bGUsXHJcbiAgICBEeGlTZXJpZXNNb2R1bGUsXHJcbiAgICBEeG9TZXJpZXNUZW1wbGF0ZU1vZHVsZSxcclxuICAgIER4b1NpemVNb2R1bGUsXHJcbiAgICBEeG9Ub29sdGlwTW9kdWxlLFxyXG4gICAgRHhpVmFsdWVBeGlzTW9kdWxlLFxyXG4gICAgRHhvWm9vbUFuZFBhbk1vZHVsZSxcclxuICAgIER4b0RyYWdCb3hTdHlsZU1vZHVsZSxcclxuICAgIER4SW50ZWdyYXRpb25Nb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlLFxyXG4gICAgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhDaGFydENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhDaGFydENvbXBvbmVudCxcclxuICAgIER4b0FkYXB0aXZlTGF5b3V0TW9kdWxlLFxyXG4gICAgRHhvQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgRHhpQW5ub3RhdGlvbk1vZHVsZSxcclxuICAgIER4b0JvcmRlck1vZHVsZSxcclxuICAgIER4b0ZvbnRNb2R1bGUsXHJcbiAgICBEeG9JbWFnZU1vZHVsZSxcclxuICAgIER4b1NoYWRvd01vZHVsZSxcclxuICAgIER4b0FyZ3VtZW50QXhpc01vZHVsZSxcclxuICAgIER4b0FnZ3JlZ2F0aW9uSW50ZXJ2YWxNb2R1bGUsXHJcbiAgICBEeGlCcmVha01vZHVsZSxcclxuICAgIER4b0JyZWFrU3R5bGVNb2R1bGUsXHJcbiAgICBEeGlDb25zdGFudExpbmVNb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4b0NvbnN0YW50TGluZVN0eWxlTW9kdWxlLFxyXG4gICAgRHhvR3JpZE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b01pbm9yR3JpZE1vZHVsZSxcclxuICAgIER4b01pbm9yVGlja01vZHVsZSxcclxuICAgIER4b01pbm9yVGlja0ludGVydmFsTW9kdWxlLFxyXG4gICAgRHhvTWluVmlzdWFsUmFuZ2VMZW5ndGhNb2R1bGUsXHJcbiAgICBEeGlTdHJpcE1vZHVsZSxcclxuICAgIER4b1N0cmlwU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9UaWNrTW9kdWxlLFxyXG4gICAgRHhvVGlja0ludGVydmFsTW9kdWxlLFxyXG4gICAgRHhvVGl0bGVNb2R1bGUsXHJcbiAgICBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9Db21tb25BeGlzU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9Db21tb25QYW5lU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9Db21tb25TZXJpZXNTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0FnZ3JlZ2F0aW9uTW9kdWxlLFxyXG4gICAgRHhvQXJlYU1vZHVsZSxcclxuICAgIER4b0hvdmVyU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9IYXRjaGluZ01vZHVsZSxcclxuICAgIER4b0Nvbm5lY3Rvck1vZHVsZSxcclxuICAgIER4b1BvaW50TW9kdWxlLFxyXG4gICAgRHhvSGVpZ2h0TW9kdWxlLFxyXG4gICAgRHhvVXJsTW9kdWxlLFxyXG4gICAgRHhvV2lkdGhNb2R1bGUsXHJcbiAgICBEeG9TZWxlY3Rpb25TdHlsZU1vZHVsZSxcclxuICAgIER4b1JlZHVjdGlvbk1vZHVsZSxcclxuICAgIER4b1ZhbHVlRXJyb3JCYXJNb2R1bGUsXHJcbiAgICBEeG9CYXJNb2R1bGUsXHJcbiAgICBEeG9CdWJibGVNb2R1bGUsXHJcbiAgICBEeG9DYW5kbGVzdGlja01vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2VkYXJlYU1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2VkYmFyTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRsaW5lTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRzcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZHNwbGluZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9Bcmd1bWVudEZvcm1hdE1vZHVsZSxcclxuICAgIER4b0xpbmVNb2R1bGUsXHJcbiAgICBEeG9SYW5nZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9SYW5nZWJhck1vZHVsZSxcclxuICAgIER4b1NjYXR0ZXJNb2R1bGUsXHJcbiAgICBEeG9TcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TcGxpbmVhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZGFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkYmFyTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TdGFja2Vkc3BsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZHNwbGluZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGVwYXJlYU1vZHVsZSxcclxuICAgIER4b1N0ZXBsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3RvY2tNb2R1bGUsXHJcbiAgICBEeG9Dcm9zc2hhaXJNb2R1bGUsXHJcbiAgICBEeG9Ib3Jpem9udGFsTGluZU1vZHVsZSxcclxuICAgIER4b1ZlcnRpY2FsTGluZU1vZHVsZSxcclxuICAgIER4b0RhdGFQcmVwYXJlU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9FeHBvcnRNb2R1bGUsXHJcbiAgICBEeG9MZWdlbmRNb2R1bGUsXHJcbiAgICBEeG9NYXJnaW5Nb2R1bGUsXHJcbiAgICBEeG9TdWJ0aXRsZU1vZHVsZSxcclxuICAgIER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUsXHJcbiAgICBEeGlQYW5lTW9kdWxlLFxyXG4gICAgRHhvU2Nyb2xsQmFyTW9kdWxlLFxyXG4gICAgRHhpU2VyaWVzTW9kdWxlLFxyXG4gICAgRHhvU2VyaWVzVGVtcGxhdGVNb2R1bGUsXHJcbiAgICBEeG9TaXplTW9kdWxlLFxyXG4gICAgRHhvVG9vbHRpcE1vZHVsZSxcclxuICAgIER4aVZhbHVlQXhpc01vZHVsZSxcclxuICAgIER4b1pvb21BbmRQYW5Nb2R1bGUsXHJcbiAgICBEeG9EcmFnQm94U3R5bGVNb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhDaGFydE1vZHVsZSB7IH1cclxuIl19
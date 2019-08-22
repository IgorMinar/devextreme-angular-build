/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import DxPolarChart from 'devextreme/viz/polar_chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAdaptiveLayoutModule } from './nested/adaptive-layout';
import { DxoAnimationModule } from './nested/animation';
import { DxoArgumentAxisModule } from './nested/argument-axis';
import { DxiConstantLineModule } from './nested/constant-line-dxi';
import { DxoLabelModule } from './nested/label';
import { DxoFontModule } from './nested/font';
import { DxoConstantLineStyleModule } from './nested/constant-line-style';
import { DxoGridModule } from './nested/grid';
import { DxoFormatModule } from './nested/format';
import { DxoMinorGridModule } from './nested/minor-grid';
import { DxoMinorTickModule } from './nested/minor-tick';
import { DxoMinorTickIntervalModule } from './nested/minor-tick-interval';
import { DxiStripModule } from './nested/strip-dxi';
import { DxoStripStyleModule } from './nested/strip-style';
import { DxoTickModule } from './nested/tick';
import { DxoTickIntervalModule } from './nested/tick-interval';
import { DxoCommonAxisSettingsModule } from './nested/common-axis-settings';
import { DxoCommonSeriesSettingsModule } from './nested/common-series-settings';
import { DxoAreaModule } from './nested/area';
import { DxoBorderModule } from './nested/border';
import { DxoHoverStyleModule } from './nested/hover-style';
import { DxoHatchingModule } from './nested/hatching';
import { DxoConnectorModule } from './nested/connector';
import { DxoPointModule } from './nested/point';
import { DxoImageModule } from './nested/image';
import { DxoSelectionStyleModule } from './nested/selection-style';
import { DxoValueErrorBarModule } from './nested/value-error-bar';
import { DxoBarModule } from './nested/bar';
import { DxoArgumentFormatModule } from './nested/argument-format';
import { DxoLineModule } from './nested/line';
import { DxoScatterModule } from './nested/scatter';
import { DxoStackedbarModule } from './nested/stackedbar';
import { DxoDataPrepareSettingsModule } from './nested/data-prepare-settings';
import { DxoExportModule } from './nested/export';
import { DxoLegendModule } from './nested/legend';
import { DxoMarginModule } from './nested/margin';
import { DxoTitleModule } from './nested/title';
import { DxoSubtitleModule } from './nested/subtitle';
import { DxoLoadingIndicatorModule } from './nested/loading-indicator';
import { DxiSeriesModule } from './nested/series-dxi';
import { DxoSeriesTemplateModule } from './nested/series-template';
import { DxoSizeModule } from './nested/size';
import { DxoTooltipModule } from './nested/tooltip';
import { DxoShadowModule } from './nested/shadow';
import { DxoValueAxisModule } from './nested/value-axis';
import { DxiSeriesComponent } from './nested/series-dxi';
/**
 * The PolarChart is a widget that visualizes data in a polar coordinate system.
 */
let DxPolarChartComponent = class DxPolarChartComponent extends DxComponent {
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
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'argumentAxisChange' },
            { emit: 'barGroupPaddingChange' },
            { emit: 'barGroupWidthChange' },
            { emit: 'barWidthChange' },
            { emit: 'commonAxisSettingsChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataPrepareSettingsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'equalBarWidthChange' },
            { emit: 'exportChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'negativesAsZeroesChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesSelectionModeChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'useSpiderWebChange' },
            { emit: 'valueAxisChange' }
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
     * Specifies animation options.
     */
    get animation() {
        return this._getOption('animation');
    }
    set animation(value) {
        this._setOption('animation', value);
    }
    /**
     * Specifies argument axis options for the PolarChart widget.
     */
    get argumentAxis() {
        return this._getOption('argumentAxis');
    }
    set argumentAxis(value) {
        this._setOption('argumentAxis', value);
    }
    /**
     * Controls the padding and consequently the angular width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth option is set.
     */
    get barGroupPadding() {
        return this._getOption('barGroupPadding');
    }
    set barGroupPadding(value) {
        this._setOption('barGroupPadding', value);
    }
    /**
     * Specifies a fixed angular width for groups of bars with the same argument, measured in degrees. Takes precedence over the barGroupPadding option.
     */
    get barGroupWidth() {
        return this._getOption('barGroupWidth');
    }
    set barGroupWidth(value) {
        this._setOption('barGroupWidth', value);
    }
    /**
     * Use CommonPolarChartSeries.barPadding instead.
     */
    get barWidth() {
        return this._getOption('barWidth');
    }
    set barWidth(value) {
        this._setOption('barWidth', value);
    }
    /**
     * An object defining the configuration options that are common for all axes of the PolarChart widget.
     */
    get commonAxisSettings() {
        return this._getOption('commonAxisSettings');
    }
    set commonAxisSettings(value) {
        this._setOption('commonAxisSettings', value);
    }
    /**
     * An object defining the configuration options that are common for all series of the PolarChart widget.
     */
    get commonSeriesSettings() {
        return this._getOption('commonSeriesSettings');
    }
    set commonSeriesSettings(value) {
        this._setOption('commonSeriesSettings', value);
    }
    /**
     * Specifies the color of the parent page element.
     */
    get containerBackgroundColor() {
        return this._getOption('containerBackgroundColor');
    }
    set containerBackgroundColor(value) {
        this._setOption('containerBackgroundColor', value);
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
     * An object providing options for managing data from a data source.
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
     * Use CommonPolarChartSeries.ignoreEmptyPoints instead.
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
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Specifies options for PolarChart widget series.
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
     * Indicates whether or not to display a "spider web".
     */
    get useSpiderWeb() {
        return this._getOption('useSpiderWeb');
    }
    set useSpiderWeb(value) {
        this._setOption('useSpiderWeb', value);
    }
    /**
     * Specifies value axis options for the PolarChart widget.
     */
    get valueAxis() {
        return this._getOption('valueAxis');
    }
    set valueAxis(value) {
        this._setOption('valueAxis', value);
    }
    get seriesChildren() {
        return this._getOption('series');
    }
    set seriesChildren(value) {
        this.setChildren('series', value);
    }
    _createInstance(element, options) {
        return new DxPolarChart(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('series', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
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
], DxPolarChartComponent.prototype, "adaptiveLayout", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "argumentAxis", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxPolarChartComponent.prototype, "barGroupPadding", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxPolarChartComponent.prototype, "barGroupWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxPolarChartComponent.prototype, "barWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "commonAxisSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "commonSeriesSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxPolarChartComponent.prototype, "containerBackgroundColor", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Function])
], DxPolarChartComponent.prototype, "customizeLabel", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Function])
], DxPolarChartComponent.prototype, "customizePoint", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "dataPrepareSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxPolarChartComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxPolarChartComponent.prototype, "equalBarWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "export", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "legend", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "loadingIndicator", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "margin", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxPolarChartComponent.prototype, "negativesAsZeroes", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "palette", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxPolarChartComponent.prototype, "paletteExtensionMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxPolarChartComponent.prototype, "pathModified", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxPolarChartComponent.prototype, "pointSelectionMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxPolarChartComponent.prototype, "redrawOnResize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxPolarChartComponent.prototype, "resolveLabelOverlapping", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxPolarChartComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "series", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxPolarChartComponent.prototype, "seriesSelectionMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "seriesTemplate", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "size", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxPolarChartComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "title", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "tooltip", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxPolarChartComponent.prototype, "useSpiderWeb", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "valueAxis", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onArgumentAxisClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onDone", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onDrawn", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onExported", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onExporting", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onFileSaving", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onIncidentOccurred", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onLegendClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onPointClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onPointHoverChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onPointSelectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onSeriesClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onSeriesHoverChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onSeriesSelectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onTooltipHidden", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "onTooltipShown", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "adaptiveLayoutChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "animationChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "argumentAxisChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "barGroupPaddingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "barGroupWidthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "barWidthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "commonAxisSettingsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "commonSeriesSettingsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "containerBackgroundColorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "customizeLabelChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "customizePointChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "dataPrepareSettingsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "dataSourceChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "equalBarWidthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "exportChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "legendChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "loadingIndicatorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "marginChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "negativesAsZeroesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "paletteChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "paletteExtensionModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "pathModifiedChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "pointSelectionModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "redrawOnResizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "seriesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "seriesSelectionModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "seriesTemplateChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "sizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "themeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "titleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "tooltipChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "useSpiderWebChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxPolarChartComponent.prototype, "valueAxisChange", void 0);
tslib_1.__decorate([
    ContentChildren(DxiSeriesComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxPolarChartComponent.prototype, "seriesChildren", null);
DxPolarChartComponent = tslib_1.__decorate([
    Component({
        selector: 'dx-polar-chart',
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
], DxPolarChartComponent);
export { DxPolarChartComponent };
let DxPolarChartModule = class DxPolarChartModule {
};
DxPolarChartModule = tslib_1.__decorate([
    NgModule({
        imports: [
            DxoAdaptiveLayoutModule,
            DxoAnimationModule,
            DxoArgumentAxisModule,
            DxiConstantLineModule,
            DxoLabelModule,
            DxoFontModule,
            DxoConstantLineStyleModule,
            DxoGridModule,
            DxoFormatModule,
            DxoMinorGridModule,
            DxoMinorTickModule,
            DxoMinorTickIntervalModule,
            DxiStripModule,
            DxoStripStyleModule,
            DxoTickModule,
            DxoTickIntervalModule,
            DxoCommonAxisSettingsModule,
            DxoCommonSeriesSettingsModule,
            DxoAreaModule,
            DxoBorderModule,
            DxoHoverStyleModule,
            DxoHatchingModule,
            DxoConnectorModule,
            DxoPointModule,
            DxoImageModule,
            DxoSelectionStyleModule,
            DxoValueErrorBarModule,
            DxoBarModule,
            DxoArgumentFormatModule,
            DxoLineModule,
            DxoScatterModule,
            DxoStackedbarModule,
            DxoDataPrepareSettingsModule,
            DxoExportModule,
            DxoLegendModule,
            DxoMarginModule,
            DxoTitleModule,
            DxoSubtitleModule,
            DxoLoadingIndicatorModule,
            DxiSeriesModule,
            DxoSeriesTemplateModule,
            DxoSizeModule,
            DxoTooltipModule,
            DxoShadowModule,
            DxoValueAxisModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxPolarChartComponent
        ],
        exports: [
            DxPolarChartComponent,
            DxoAdaptiveLayoutModule,
            DxoAnimationModule,
            DxoArgumentAxisModule,
            DxiConstantLineModule,
            DxoLabelModule,
            DxoFontModule,
            DxoConstantLineStyleModule,
            DxoGridModule,
            DxoFormatModule,
            DxoMinorGridModule,
            DxoMinorTickModule,
            DxoMinorTickIntervalModule,
            DxiStripModule,
            DxoStripStyleModule,
            DxoTickModule,
            DxoTickIntervalModule,
            DxoCommonAxisSettingsModule,
            DxoCommonSeriesSettingsModule,
            DxoAreaModule,
            DxoBorderModule,
            DxoHoverStyleModule,
            DxoHatchingModule,
            DxoConnectorModule,
            DxoPointModule,
            DxoImageModule,
            DxoSelectionStyleModule,
            DxoValueErrorBarModule,
            DxoBarModule,
            DxoArgumentFormatModule,
            DxoLineModule,
            DxoScatterModule,
            DxoStackedbarModule,
            DxoDataPrepareSettingsModule,
            DxoExportModule,
            DxoLegendModule,
            DxoMarginModule,
            DxoTitleModule,
            DxoSubtitleModule,
            DxoLoadingIndicatorModule,
            DxiSeriesModule,
            DxoSeriesTemplateModule,
            DxoSizeModule,
            DxoTooltipModule,
            DxoShadowModule,
            DxoValueAxisModule,
            DxTemplateModule
        ]
    })
], DxPolarChartModule);
export { DxPolarChartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sYXItY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9wb2xhci1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBWXBDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBSVosZUFBZSxFQUNmLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQUd0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNu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QkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLDRCQUE0QjtZQUM1QixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLHlCQUF5QjtZQUN6QixlQUFlO1lBQ2YsdUJBQXVCO1lBQ3ZCLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixnQkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csa0JBQWtCLENBQUk7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIE5nWm9uZSxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgSW5qZWN0LFxyXG5cclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgRG9DaGVjayxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCBEeFBvbGFyQ2hhcnQgZnJvbSAnZGV2ZXh0cmVtZS92aXovcG9sYXJfY2hhcnQnO1xyXG5cclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeG9BZGFwdGl2ZUxheW91dE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FkYXB0aXZlLWxheW91dCc7XHJcbmltcG9ydCB7IER4b0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IER4b0FyZ3VtZW50QXhpc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FyZ3VtZW50LWF4aXMnO1xyXG5pbXBvcnQgeyBEeGlDb25zdGFudExpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb25zdGFudC1saW5lLWR4aSc7XHJcbmltcG9ydCB7IER4b0xhYmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbGFiZWwnO1xyXG5pbXBvcnQgeyBEeG9Gb250TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9udCc7XHJcbmltcG9ydCB7IER4b0NvbnN0YW50TGluZVN0eWxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29uc3RhbnQtbGluZS1zdHlsZSc7XHJcbmltcG9ydCB7IER4b0dyaWRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ncmlkJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybWF0JztcclxuaW1wb3J0IHsgRHhvTWlub3JHcmlkTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWlub3ItZ3JpZCc7XHJcbmltcG9ydCB7IER4b01pbm9yVGlja01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL21pbm9yLXRpY2snO1xyXG5pbXBvcnQgeyBEeG9NaW5vclRpY2tJbnRlcnZhbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL21pbm9yLXRpY2staW50ZXJ2YWwnO1xyXG5pbXBvcnQgeyBEeGlTdHJpcE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0cmlwLWR4aSc7XHJcbmltcG9ydCB7IER4b1N0cmlwU3R5bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdHJpcC1zdHlsZSc7XHJcbmltcG9ydCB7IER4b1RpY2tNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90aWNrJztcclxuaW1wb3J0IHsgRHhvVGlja0ludGVydmFsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGljay1pbnRlcnZhbCc7XHJcbmltcG9ydCB7IER4b0NvbW1vbkF4aXNTZXR0aW5nc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbW1vbi1heGlzLXNldHRpbmdzJztcclxuaW1wb3J0IHsgRHhvQ29tbW9uU2VyaWVzU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb21tb24tc2VyaWVzLXNldHRpbmdzJztcclxuaW1wb3J0IHsgRHhvQXJlYU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FyZWEnO1xyXG5pbXBvcnQgeyBEeG9Cb3JkZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ib3JkZXInO1xyXG5pbXBvcnQgeyBEeG9Ib3ZlclN0eWxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaG92ZXItc3R5bGUnO1xyXG5pbXBvcnQgeyBEeG9IYXRjaGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2hhdGNoaW5nJztcclxuaW1wb3J0IHsgRHhvQ29ubmVjdG9yTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29ubmVjdG9yJztcclxuaW1wb3J0IHsgRHhvUG9pbnRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9wb2ludCc7XHJcbmltcG9ydCB7IER4b0ltYWdlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBEeG9TZWxlY3Rpb25TdHlsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NlbGVjdGlvbi1zdHlsZSc7XHJcbmltcG9ydCB7IER4b1ZhbHVlRXJyb3JCYXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92YWx1ZS1lcnJvci1iYXInO1xyXG5pbXBvcnQgeyBEeG9CYXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9iYXInO1xyXG5pbXBvcnQgeyBEeG9Bcmd1bWVudEZvcm1hdE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FyZ3VtZW50LWZvcm1hdCc7XHJcbmltcG9ydCB7IER4b0xpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9saW5lJztcclxuaW1wb3J0IHsgRHhvU2NhdHRlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NjYXR0ZXInO1xyXG5pbXBvcnQgeyBEeG9TdGFja2VkYmFyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3RhY2tlZGJhcic7XHJcbmltcG9ydCB7IER4b0RhdGFQcmVwYXJlU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9kYXRhLXByZXBhcmUtc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBEeG9FeHBvcnRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9leHBvcnQnO1xyXG5pbXBvcnQgeyBEeG9MZWdlbmRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sZWdlbmQnO1xyXG5pbXBvcnQgeyBEeG9NYXJnaW5Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9tYXJnaW4nO1xyXG5pbXBvcnQgeyBEeG9UaXRsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RpdGxlJztcclxuaW1wb3J0IHsgRHhvU3VidGl0bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdWJ0aXRsZSc7XHJcbmltcG9ydCB7IER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sb2FkaW5nLWluZGljYXRvcic7XHJcbmltcG9ydCB7IER4aVNlcmllc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Nlcmllcy1keGknO1xyXG5pbXBvcnQgeyBEeG9TZXJpZXNUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Nlcmllcy10ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IER4b1NpemVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaXplJztcclxuaW1wb3J0IHsgRHhvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBEeG9TaGFkb3dNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaGFkb3cnO1xyXG5pbXBvcnQgeyBEeG9WYWx1ZUF4aXNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92YWx1ZS1heGlzJztcclxuXHJcbmltcG9ydCB7IER4aVNlcmllc0NvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL3Nlcmllcy1keGknO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQb2xhckNoYXJ0IGlzIGEgd2lkZ2V0IHRoYXQgdmlzdWFsaXplcyBkYXRhIGluIGEgcG9sYXIgY29vcmRpbmF0ZSBzeXN0ZW0uXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtcG9sYXItY2hhcnQnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbICcgOmhvc3QgeyAgZGlzcGxheTogYmxvY2s7IH0nXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhQb2xhckNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgRHhDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgRG9DaGVjayB7XHJcbiAgICBpbnN0YW5jZTogRHhQb2xhckNoYXJ0O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhZGFwdGl2ZSBsYXlvdXQgb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZGFwdGl2ZUxheW91dCgpOiB7IGhlaWdodD86IG51bWJlciwga2VlcExhYmVscz86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FkYXB0aXZlTGF5b3V0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRhcHRpdmVMYXlvdXQodmFsdWU6IHsgaGVpZ2h0PzogbnVtYmVyLCBrZWVwTGFiZWxzPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWRhcHRpdmVMYXlvdXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGFuaW1hdGlvbiBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFuaW1hdGlvbigpOiBib29sZWFuIHwgeyBkdXJhdGlvbj86IG51bWJlciwgZWFzaW5nPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgbWF4UG9pbnRDb3VudFN1cHBvcnRlZD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbmltYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBhbmltYXRpb24odmFsdWU6IGJvb2xlYW4gfCB7IGR1cmF0aW9uPzogbnVtYmVyLCBlYXNpbmc/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBtYXhQb2ludENvdW50U3VwcG9ydGVkPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FuaW1hdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYXJndW1lbnQgYXhpcyBvcHRpb25zIGZvciB0aGUgUG9sYXJDaGFydCB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXJndW1lbnRBeGlzKCk6IHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGFyZ3VtZW50VHlwZT86IHN0cmluZywgYXhpc0RpdmlzaW9uRmFjdG9yPzogbnVtYmVyLCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdGV4dD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PiwgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdmlzaWJsZT86IGJvb2xlYW4gfSwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBmaXJzdFBvaW50T25TdGFydEFuZ2xlPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBob3Zlck1vZGU/OiBzdHJpbmcsIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG9wYWNpdHk/OiBudW1iZXIsIG9yaWdpblZhbHVlPzogbnVtYmVyLCBwZXJpb2Q/OiBudW1iZXIsIHN0YXJ0QW5nbGU/OiBudW1iZXIsIHN0cmlwcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB0ZXh0Pzogc3RyaW5nIH0sIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQgfSB9LCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIHR5cGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcmd1bWVudEF4aXMnKTtcclxuICAgIH1cclxuICAgIHNldCBhcmd1bWVudEF4aXModmFsdWU6IHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGFyZ3VtZW50VHlwZT86IHN0cmluZywgYXhpc0RpdmlzaW9uRmFjdG9yPzogbnVtYmVyLCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdGV4dD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PiwgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdmlzaWJsZT86IGJvb2xlYW4gfSwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBmaXJzdFBvaW50T25TdGFydEFuZ2xlPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBob3Zlck1vZGU/OiBzdHJpbmcsIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG9wYWNpdHk/OiBudW1iZXIsIG9yaWdpblZhbHVlPzogbnVtYmVyLCBwZXJpb2Q/OiBudW1iZXIsIHN0YXJ0QW5nbGU/OiBudW1iZXIsIHN0cmlwcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB0ZXh0Pzogc3RyaW5nIH0sIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+LCBzdHJpcFN0eWxlPzogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQgfSB9LCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIHR5cGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcmd1bWVudEF4aXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udHJvbHMgdGhlIHBhZGRpbmcgYW5kIGNvbnNlcXVlbnRseSB0aGUgYW5ndWxhciB3aWR0aCBvZiBhIGdyb3VwIG9mIGJhcnMgd2l0aCB0aGUgc2FtZSBhcmd1bWVudCB1c2luZyByZWxhdGl2ZSB1bml0cy4gSWdub3JlZCBpZiB0aGUgYmFyR3JvdXBXaWR0aCBvcHRpb24gaXMgc2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhckdyb3VwUGFkZGluZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Jhckdyb3VwUGFkZGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhckdyb3VwUGFkZGluZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJHcm91cFBhZGRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgZml4ZWQgYW5ndWxhciB3aWR0aCBmb3IgZ3JvdXBzIG9mIGJhcnMgd2l0aCB0aGUgc2FtZSBhcmd1bWVudCwgbWVhc3VyZWQgaW4gZGVncmVlcy4gVGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSBiYXJHcm91cFBhZGRpbmcgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhckdyb3VwV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyR3JvdXBXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSBDb21tb25Qb2xhckNoYXJ0U2VyaWVzLmJhclBhZGRpbmcgaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBiYXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JhcldpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFyV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb2JqZWN0IGRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBhcmUgY29tbW9uIGZvciBhbGwgYXhlcyBvZiB0aGUgUG9sYXJDaGFydCB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29tbW9uQXhpc1NldHRpbmdzKCk6IHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB2aXNpYmxlPzogYm9vbGVhbiB9LCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgb3BhY2l0eT86IG51bWJlciwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250IH0gfSwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb21tb25BeGlzU2V0dGluZ3MnKTtcclxuICAgIH1cclxuICAgIHNldCBjb21tb25BeGlzU2V0dGluZ3ModmFsdWU6IHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB2aXNpYmxlPzogYm9vbGVhbiB9LCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgb3BhY2l0eT86IG51bWJlciwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250IH0gfSwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb21tb25BeGlzU2V0dGluZ3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb2JqZWN0IGRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBhcmUgY29tbW9uIGZvciBhbGwgc2VyaWVzIG9mIHRoZSBQb2xhckNoYXJ0IHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb21tb25TZXJpZXNTZXR0aW5ncygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbW1vblNlcmllc1NldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tbW9uU2VyaWVzU2V0dGluZ3ModmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29tbW9uU2VyaWVzU2V0dGluZ3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBjb2xvciBvZiB0aGUgcGFyZW50IHBhZ2UgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb250YWluZXJCYWNrZ3JvdW5kQ29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29udGFpbmVyQmFja2dyb3VuZENvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbWl6ZXMgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gaW5kaXZpZHVhbCBwb2ludCBsYWJlbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVMYWJlbCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplTGFiZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVMYWJlbCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZUxhYmVsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbWl6ZXMgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gaW5kaXZpZHVhbCBzZXJpZXMgcG9pbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplUG9pbnQoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZVBvaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplUG9pbnQodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVQb2ludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvYmplY3QgcHJvdmlkaW5nIG9wdGlvbnMgZm9yIG1hbmFnaW5nIGRhdGEgZnJvbSBhIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFQcmVwYXJlU2V0dGluZ3MoKTogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhUHJlcGFyZVNldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVByZXBhcmVTZXR0aW5ncyh2YWx1ZTogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhUHJlcGFyZVNldHRpbmdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmRzIHRoZSB3aWRnZXQgdG8gZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhU291cmNlKCk6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHRoZSB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgQ29tbW9uUG9sYXJDaGFydFNlcmllcy5pZ25vcmVFbXB0eVBvaW50cyBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVxdWFsQmFyV2lkdGgoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXF1YWxCYXJXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVxdWFsQmFyV2lkdGgodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VxdWFsQmFyV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgZXhwb3J0aW5nIGFuZCBwcmludGluZyBmZWF0dXJlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleHBvcnQoKTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwb3J0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0KHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBmb3JtYXRzPzogQXJyYXk8c3RyaW5nPiwgbWFyZ2luPzogbnVtYmVyLCBwcmludGluZ0VuYWJsZWQ/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleHBvcnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBvcHRpb25zIG9mIGEgY2hhcnQncyBsZWdlbmQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGVnZW5kKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbHVtbkNvdW50PzogbnVtYmVyLCBjb2x1bW5JdGVtU3BhY2luZz86IG51bWJlciwgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVJdGVtcz86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGl0ZW1zQWxpZ25tZW50Pzogc3RyaW5nLCBpdGVtVGV4dFBvc2l0aW9uPzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBtYXJrZXJTaXplPzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgcm93Q291bnQ/OiBudW1iZXIsIHJvd0l0ZW1TcGFjaW5nPzogbnVtYmVyLCB0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xlZ2VuZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxlZ2VuZCh2YWx1ZTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGNvcm5lclJhZGl1cz86IG51bWJlciwgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sdW1uQ291bnQ/OiBudW1iZXIsIGNvbHVtbkl0ZW1TcGFjaW5nPzogbnVtYmVyLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZUl0ZW1zPzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIGhvdmVyTW9kZT86IHN0cmluZywgaXRlbXNBbGlnbm1lbnQ/OiBzdHJpbmcsIGl0ZW1UZXh0UG9zaXRpb24/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIG1hcmtlclNpemU/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCByb3dDb3VudD86IG51bWJlciwgcm93SXRlbVNwYWNpbmc/OiBudW1iZXIsIHRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbGVnZW5kJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGxvYWRpbmcgaW5kaWNhdG9yLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGxvYWRpbmdJbmRpY2F0b3IoKTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgc2hvdz86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbG9hZGluZ0luZGljYXRvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvYWRpbmdJbmRpY2F0b3IodmFsdWU6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIHNwYWNlIGFyb3VuZCB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hcmdpbigpOiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXJnaW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtYXJnaW4odmFsdWU6IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21hcmdpbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JjZXMgdGhlIHdpZGdldCB0byB0cmVhdCBuZWdhdGl2ZSB2YWx1ZXMgYXMgemVyb2VzLiBBcHBsaWVzIHRvIHN0YWNrZWQtbGlrZSBzZXJpZXMgb25seS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuZWdhdGl2ZXNBc1plcm9lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5lZ2F0aXZlc0FzWmVyb2VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBwYWxldHRlIHRvIGJlIHVzZWQgZm9yIGNvbG9yaXppbmcgc2VyaWVzIGFuZCB0aGVpciBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlKCk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGUnKTtcclxuICAgIH1cclxuICAgIHNldCBwYWxldHRlKHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWxldHRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGF0IHRvIGRvIHdpdGggY29sb3JzIGluIHRoZSBwYWxldHRlIHdoZW4gdGhlaXIgbnVtYmVyIGlzIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIHNlcmllcyAoaW4gdGhlIENoYXJ0IHdpZGdldCkgb3IgcG9pbnRzIGluIGEgc2VyaWVzIChpbiB0aGUgUGllQ2hhcnQgd2lkZ2V0KS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlRXh0ZW5zaW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGVFeHRlbnNpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFsZXR0ZUV4dGVuc2lvbk1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFsZXR0ZUV4dGVuc2lvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhlIHdpZGdldCB0aGF0IGl0IGlzIGVtYmVkZGVkIGludG8gYW4gSFRNTCBwYWdlIHRoYXQgdXNlcyBhIHRhZyBtb2RpZnlpbmcgdGhlIHBhdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGF0aE1vZGlmaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhdGhNb2RpZmllZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhdGhNb2RpZmllZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGF0aE1vZGlmaWVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgc2luZ2xlIHBvaW50IG9yIG11bHRpcGxlIHBvaW50cyBjYW4gYmUgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBvaW50U2VsZWN0aW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BvaW50U2VsZWN0aW9uTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvaW50U2VsZWN0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwb2ludFNlbGVjdGlvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVkcmF3IHRoZSB3aWRnZXQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgcGFyZW50IGJyb3dzZXIgd2luZG93IGNoYW5nZXMgb3IgYSBtb2JpbGUgZGV2aWNlIHJvdGF0ZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVkcmF3T25SZXNpemUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVkcmF3T25SZXNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCByZWRyYXdPblJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVkcmF3T25SZXNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgY2hhcnQgbXVzdCBiZWhhdmUgd2hlbiBzZXJpZXMgcG9pbnQgbGFiZWxzIG92ZXJsYXAuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVzb2x2ZUxhYmVsT3ZlcmxhcHBpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXNvbHZlTGFiZWxPdmVybGFwcGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlc29sdmVMYWJlbE92ZXJsYXBwaW5nKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jlc29sdmVMYWJlbE92ZXJsYXBwaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIG9wdGlvbnMgZm9yIFBvbGFyQ2hhcnQgd2lkZ2V0IHNlcmllcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZXJpZXMoKTogYW55IHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzKHZhbHVlOiBhbnkgfCBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZXJpZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgYSBzaW5nbGUgc2VyaWVzIG9yIG11bHRpcGxlIHNlcmllcyBjYW4gYmUgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlcmllc1NlbGVjdGlvbk1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZXJpZXNTZWxlY3Rpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzU2VsZWN0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZXJpZXNTZWxlY3Rpb25Nb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIHNlcmllcyB0ZW1wbGF0ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZXJpZXNUZW1wbGF0ZSgpOiB7IGN1c3RvbWl6ZVNlcmllcz86IEZ1bmN0aW9uLCBuYW1lRmllbGQ/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXJpZXNUZW1wbGF0ZSh2YWx1ZTogeyBjdXN0b21pemVTZXJpZXM/OiBGdW5jdGlvbiwgbmFtZUZpZWxkPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nlcmllc1RlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgc2l6ZSBpbiBwaXhlbHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2l6ZSgpOiB7IGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpemUodmFsdWU6IHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG5hbWUgb2YgdGhlIHRoZW1lIHRoZSB3aWRnZXQgdXNlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aGVtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RoZW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGhlbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgd2lkZ2V0J3MgdGl0bGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aXRsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpdGxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdG9vbHRpcHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdG9vbHRpcCgpOiB7IGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGFycm93TGVuZ3RoPzogbnVtYmVyLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgY29udGFpbmVyPzogRWxlbWVudCB8IEpRdWVyeSwgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBjdXN0b21pemVUb29sdGlwPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHNoYWRvdz86IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSwgc2hhcmVkPzogYm9vbGVhbiwgekluZGV4PzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Rvb2x0aXAnKTtcclxuICAgIH1cclxuICAgIHNldCB0b29sdGlwKHZhbHVlOiB7IGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGFycm93TGVuZ3RoPzogbnVtYmVyLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgY29udGFpbmVyPzogRWxlbWVudCB8IEpRdWVyeSwgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBjdXN0b21pemVUb29sdGlwPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHNoYWRvdz86IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSwgc2hhcmVkPzogYm9vbGVhbiwgekluZGV4PzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Rvb2x0aXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgYSBcInNwaWRlciB3ZWJcIi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB1c2VTcGlkZXJXZWIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndXNlU3BpZGVyV2ViJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlU3BpZGVyV2ViKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd1c2VTcGlkZXJXZWInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHZhbHVlIGF4aXMgb3B0aW9ucyBmb3IgdGhlIFBvbGFyQ2hhcnQgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlQXhpcygpOiB7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBheGlzRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIGNhdGVnb3JpZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+LCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB2aXNpYmxlPzogYm9vbGVhbiB9LCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrQ291bnQ/OiBudW1iZXIsIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNob3daZXJvPzogYm9vbGVhbiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHRleHQ/OiBzdHJpbmcgfSwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfT4sIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCB9IH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmFsdWVUeXBlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVBeGlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWVBeGlzKHZhbHVlOiB7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBheGlzRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIGNhdGVnb3JpZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgY29sb3I/OiBzdHJpbmcsIGNvbnN0YW50TGluZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+LCBjb25zdGFudExpbmVTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB2aXNpYmxlPzogYm9vbGVhbiB9LCB3aWR0aD86IG51bWJlciB9LCBkaXNjcmV0ZUF4aXNEaXZpc2lvbk1vZGU/OiBzdHJpbmcsIGVuZE9uVGljaz86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsYWJlbD86IHsgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heFZhbHVlTWFyZ2luPzogbnVtYmVyLCBtaW5vckdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgbWlub3JUaWNrQ291bnQ/OiBudW1iZXIsIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWluVmFsdWVNYXJnaW4/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNob3daZXJvPzogYm9vbGVhbiwgc3RyaXBzPzogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHRleHQ/OiBzdHJpbmcgfSwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfT4sIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCB9IH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZU1hcmdpbnNFbmFibGVkPzogYm9vbGVhbiwgdmFsdWVUeXBlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVBeGlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBsYWJlbCBvbiB0aGUgYXJndW1lbnQgYXhpcyBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXJndW1lbnRBeGlzQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYWxsIHNlcmllcyBhcmUgcmVhZHkuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRvbmU6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIHJlbmRlcmluZyBoYXMgZmluaXNoZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRyYXduOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgd2lkZ2V0IGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZXhwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkV4cG9ydGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgZmlsZSB3aXRoIGV4cG9ydGVkIHdpZGdldCBpcyBzYXZlZCB0byB0aGUgdXNlcidzIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZpbGVTYXZpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gZXJyb3Igb3Igd2FybmluZyBvY2N1cnMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluY2lkZW50T2NjdXJyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgbGVnZW5kIGl0ZW0gaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkxlZ2VuZENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHNlcmllcyBwb2ludCBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUG9pbnRDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHBvaW50ZXIgZW50ZXJzIG9yIGxlYXZlcyBhIHNlcmllcyBwb2ludC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUG9pbnRIb3ZlckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBzZXJpZXMgcG9pbnQgaXMgc2VsZWN0ZWQgb3Igc2VsZWN0aW9uIGlzIGNhbmNlbGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Qb2ludFNlbGVjdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBzZXJpZXMgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblNlcmllc0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgcG9pbnRlciBlbnRlcnMgb3IgbGVhdmVzIGEgc2VyaWVzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZXJpZXNIb3ZlckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBzZXJpZXMgaXMgc2VsZWN0ZWQgb3Igc2VsZWN0aW9uIGlzIGNhbmNlbGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZXJpZXNTZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdG9vbHRpcCBiZWNvbWVzIGhpZGRlbi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVG9vbHRpcEhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHRvb2x0aXAgYXBwZWFycy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVG9vbHRpcFNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFkYXB0aXZlTGF5b3V0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWRhcHRpdmVMYXlvdXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGhlaWdodD86IG51bWJlciwga2VlcExhYmVscz86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYW5pbWF0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYW5pbWF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHsgZHVyYXRpb24/OiBudW1iZXIsIGVhc2luZz86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIG1heFBvaW50Q291bnRTdXBwb3J0ZWQ/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhcmd1bWVudEF4aXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhcmd1bWVudEF4aXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBhcmd1bWVudFR5cGU/OiBzdHJpbmcsIGF4aXNEaXZpc2lvbkZhY3Rvcj86IG51bWJlciwgY2F0ZWdvcmllcz86IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT4sIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHZpc2libGU/OiBib29sZWFuIH0sIHdpZHRoPzogbnVtYmVyIH0sIGRpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZT86IHN0cmluZywgZW5kT25UaWNrPzogYm9vbGVhbiwgZmlyc3RQb2ludE9uU3RhcnRBbmdsZT86IGJvb2xlYW4sIGdyaWQ/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgaG92ZXJNb2RlPzogc3RyaW5nLCBpbnZlcnRlZD86IGJvb2xlYW4sIGxhYmVsPzogeyBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWlub3JHcmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tDb3VudD86IG51bWJlciwgbWlub3JUaWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBvcGFjaXR5PzogbnVtYmVyLCBvcmlnaW5WYWx1ZT86IG51bWJlciwgcGVyaW9kPzogbnVtYmVyLCBzdGFydEFuZ2xlPzogbnVtYmVyLCBzdHJpcHM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdGV4dD86IHN0cmluZyB9LCBzdGFydFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB9Piwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250IH0gfSwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0eXBlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBiYXJHcm91cFBhZGRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBiYXJHcm91cFBhZGRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYmFyR3JvdXBXaWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGJhckdyb3VwV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYmFyV2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBiYXJXaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb21tb25BeGlzU2V0dGluZ3NDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb21tb25BeGlzU2V0dGluZ3NDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdmlzaWJsZT86IGJvb2xlYW4gfSwgd2lkdGg/OiBudW1iZXIgfSwgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlPzogc3RyaW5nLCBlbmRPblRpY2s/OiBib29sZWFuLCBncmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGludmVydGVkPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgbWlub3JHcmlkPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG9wYWNpdHk/OiBudW1iZXIsIHN0cmlwU3R5bGU/OiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCB9IH0sIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb21tb25TZXJpZXNTZXR0aW5nc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbW1vblNlcmllc1NldHRpbmdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbnRhaW5lckJhY2tncm91bmRDb2xvckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbnRhaW5lckJhY2tncm91bmRDb2xvckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjdXN0b21pemVMYWJlbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZUxhYmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3VzdG9taXplUG9pbnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjdXN0b21pemVQb2ludENoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGFQcmVwYXJlU2V0dGluZ3NDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhUHJlcGFyZVNldHRpbmdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGFTb3VyY2VDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhU291cmNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRpc2FibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGlzYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnRBdHRyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZWxlbWVudEF0dHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZXF1YWxCYXJXaWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVxdWFsQmFyV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGV4cG9ydENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGV4cG9ydENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZvcm1hdHM/OiBBcnJheTxzdHJpbmc+LCBtYXJnaW4/OiBudW1iZXIsIHByaW50aW5nRW5hYmxlZD86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbGVnZW5kQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbGVnZW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGNvcm5lclJhZGl1cz86IG51bWJlciwgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sdW1uQ291bnQ/OiBudW1iZXIsIGNvbHVtbkl0ZW1TcGFjaW5nPzogbnVtYmVyLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZUl0ZW1zPzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIGhvdmVyTW9kZT86IHN0cmluZywgaXRlbXNBbGlnbm1lbnQ/OiBzdHJpbmcsIGl0ZW1UZXh0UG9zaXRpb24/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIG1hcmtlclNpemU/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCByb3dDb3VudD86IG51bWJlciwgcm93SXRlbVNwYWNpbmc/OiBudW1iZXIsIHRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsb2FkaW5nSW5kaWNhdG9yQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbG9hZGluZ0luZGljYXRvckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWFyZ2luQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWFyZ2luQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBuZWdhdGl2ZXNBc1plcm9lc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG5lZ2F0aXZlc0FzWmVyb2VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYWxldHRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGFsZXR0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IEFycmF5PHN0cmluZz4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGFsZXR0ZUV4dGVuc2lvbk1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYWxldHRlRXh0ZW5zaW9uTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYXRoTW9kaWZpZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYXRoTW9kaWZpZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBvaW50U2VsZWN0aW9uTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBvaW50U2VsZWN0aW9uTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZWRyYXdPblJlc2l6ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlZHJhd09uUmVzaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZXNvbHZlTGFiZWxPdmVybGFwcGluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlc29sdmVMYWJlbE92ZXJsYXBwaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJ0bEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZXJpZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZXJpZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnkgfCBBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlcmllc1NlbGVjdGlvbk1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZXJpZXNTZWxlY3Rpb25Nb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlcmllc1RlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VyaWVzVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGN1c3RvbWl6ZVNlcmllcz86IEZ1bmN0aW9uLCBuYW1lRmllbGQ/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaXplQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRoZW1lQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGhlbWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGl0bGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0aXRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0b29sdGlwQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdG9vbHRpcENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYXJndW1lbnRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgYXJyb3dMZW5ndGg/OiBudW1iZXIsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb250YWluZXI/OiBFbGVtZW50IHwgSlF1ZXJ5LCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGN1c3RvbWl6ZVRvb2x0aXA/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc2hhZG93PzogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9LCBzaGFyZWQ/OiBib29sZWFuLCB6SW5kZXg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB1c2VTcGlkZXJXZWJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB1c2VTcGlkZXJXZWJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbHVlQXhpc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQXhpc0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dEZWNpbWFscz86IGJvb2xlYW4sIGF4aXNEaXZpc2lvbkZhY3Rvcj86IG51bWJlciwgY2F0ZWdvcmllcz86IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+LCBjb2xvcj86IHN0cmluZywgY29uc3RhbnRMaW5lcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT4sIGNvbnN0YW50TGluZVN0eWxlPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHZpc2libGU/OiBib29sZWFuIH0sIHdpZHRoPzogbnVtYmVyIH0sIGRpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZT86IHN0cmluZywgZW5kT25UaWNrPzogYm9vbGVhbiwgZ3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBpbnZlcnRlZD86IGJvb2xlYW4sIGxhYmVsPzogeyBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4VmFsdWVNYXJnaW4/OiBudW1iZXIsIG1pbm9yR3JpZD86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tDb3VudD86IG51bWJlciwgbWlub3JUaWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBtaW5WYWx1ZU1hcmdpbj86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hvd1plcm8/OiBib29sZWFuLCBzdHJpcHM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdGV4dD86IHN0cmluZyB9LCBzdGFydFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB9Piwgc3RyaXBTdHlsZT86IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250IH0gfSwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIHR5cGU/OiBzdHJpbmcsIHZhbHVlTWFyZ2luc0VuYWJsZWQ/OiBib29sZWFuLCB2YWx1ZVR5cGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVNlcmllc0NvbXBvbmVudClcclxuICAgIGdldCBzZXJpZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpU2VyaWVzQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdzZXJpZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXJndW1lbnRBeGlzQ2xpY2snLCBlbWl0OiAnb25Bcmd1bWVudEF4aXNDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZG9uZScsIGVtaXQ6ICdvbkRvbmUnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZHJhd24nLCBlbWl0OiAnb25EcmF3bicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRlZCcsIGVtaXQ6ICdvbkV4cG9ydGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2V4cG9ydGluZycsIGVtaXQ6ICdvbkV4cG9ydGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmaWxlU2F2aW5nJywgZW1pdDogJ29uRmlsZVNhdmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbmNpZGVudE9jY3VycmVkJywgZW1pdDogJ29uSW5jaWRlbnRPY2N1cnJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2xlZ2VuZENsaWNrJywgZW1pdDogJ29uTGVnZW5kQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3B0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvbk9wdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncG9pbnRDbGljaycsIGVtaXQ6ICdvblBvaW50Q2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncG9pbnRIb3ZlckNoYW5nZWQnLCBlbWl0OiAnb25Qb2ludEhvdmVyQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdwb2ludFNlbGVjdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25Qb2ludFNlbGVjdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2VyaWVzQ2xpY2snLCBlbWl0OiAnb25TZXJpZXNDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzZXJpZXNIb3ZlckNoYW5nZWQnLCBlbWl0OiAnb25TZXJpZXNIb3ZlckNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2VyaWVzU2VsZWN0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvblNlcmllc1NlbGVjdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAndG9vbHRpcEhpZGRlbicsIGVtaXQ6ICdvblRvb2x0aXBIaWRkZW4nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAndG9vbHRpcFNob3duJywgZW1pdDogJ29uVG9vbHRpcFNob3duJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhZGFwdGl2ZUxheW91dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYW5pbWF0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhcmd1bWVudEF4aXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Jhckdyb3VwUGFkZGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYmFyR3JvdXBXaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYmFyV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbW1vbkF4aXNTZXR0aW5nc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29tbW9uU2VyaWVzU2V0dGluZ3NDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbnRhaW5lckJhY2tncm91bmRDb2xvckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplTGFiZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1c3RvbWl6ZVBvaW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhUHJlcGFyZVNldHRpbmdzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhU291cmNlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VxdWFsQmFyV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2V4cG9ydENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbGVnZW5kQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdsb2FkaW5nSW5kaWNhdG9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXJnaW5DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ25lZ2F0aXZlc0FzWmVyb2VzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYWxldHRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYWxldHRlRXh0ZW5zaW9uTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGF0aE1vZGlmaWVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwb2ludFNlbGVjdGlvbk1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlZHJhd09uUmVzaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZXNvbHZlTGFiZWxPdmVybGFwcGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncnRsRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VyaWVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZXJpZXNTZWxlY3Rpb25Nb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZXJpZXNUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2l6ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGhlbWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RpdGxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0b29sdGlwQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd1c2VTcGlkZXJXZWJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQXhpc0NoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeFBvbGFyQ2hhcnQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVdpZGdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnZGF0YVNvdXJjZScsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdwYWxldHRlJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3NlcmllcycsIGNoYW5nZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQ2hhbmdlcyhwcm9wOiBzdHJpbmcsIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoIShwcm9wIGluIHRoaXMuX29wdGlvbnNUb1VwZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faWRoLnNldHVwKHByb3AsIGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2RhdGFTb3VyY2UnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygncGFsZXR0ZScpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdzZXJpZXMnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvQWRhcHRpdmVMYXlvdXRNb2R1bGUsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Bcmd1bWVudEF4aXNNb2R1bGUsXHJcbiAgICBEeGlDb25zdGFudExpbmVNb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4b0ZvbnRNb2R1bGUsXHJcbiAgICBEeG9Db25zdGFudExpbmVTdHlsZU1vZHVsZSxcclxuICAgIER4b0dyaWRNb2R1bGUsXHJcbiAgICBEeG9Gb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9NaW5vckdyaWRNb2R1bGUsXHJcbiAgICBEeG9NaW5vclRpY2tNb2R1bGUsXHJcbiAgICBEeG9NaW5vclRpY2tJbnRlcnZhbE1vZHVsZSxcclxuICAgIER4aVN0cmlwTW9kdWxlLFxyXG4gICAgRHhvU3RyaXBTdHlsZU1vZHVsZSxcclxuICAgIER4b1RpY2tNb2R1bGUsXHJcbiAgICBEeG9UaWNrSW50ZXJ2YWxNb2R1bGUsXHJcbiAgICBEeG9Db21tb25BeGlzU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9Db21tb25TZXJpZXNTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0FyZWFNb2R1bGUsXHJcbiAgICBEeG9Cb3JkZXJNb2R1bGUsXHJcbiAgICBEeG9Ib3ZlclN0eWxlTW9kdWxlLFxyXG4gICAgRHhvSGF0Y2hpbmdNb2R1bGUsXHJcbiAgICBEeG9Db25uZWN0b3JNb2R1bGUsXHJcbiAgICBEeG9Qb2ludE1vZHVsZSxcclxuICAgIER4b0ltYWdlTW9kdWxlLFxyXG4gICAgRHhvU2VsZWN0aW9uU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9WYWx1ZUVycm9yQmFyTW9kdWxlLFxyXG4gICAgRHhvQmFyTW9kdWxlLFxyXG4gICAgRHhvQXJndW1lbnRGb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9MaW5lTW9kdWxlLFxyXG4gICAgRHhvU2NhdHRlck1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRiYXJNb2R1bGUsXHJcbiAgICBEeG9EYXRhUHJlcGFyZVNldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvRXhwb3J0TW9kdWxlLFxyXG4gICAgRHhvTGVnZW5kTW9kdWxlLFxyXG4gICAgRHhvTWFyZ2luTW9kdWxlLFxyXG4gICAgRHhvVGl0bGVNb2R1bGUsXHJcbiAgICBEeG9TdWJ0aXRsZU1vZHVsZSxcclxuICAgIER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUsXHJcbiAgICBEeGlTZXJpZXNNb2R1bGUsXHJcbiAgICBEeG9TZXJpZXNUZW1wbGF0ZU1vZHVsZSxcclxuICAgIER4b1NpemVNb2R1bGUsXHJcbiAgICBEeG9Ub29sdGlwTW9kdWxlLFxyXG4gICAgRHhvU2hhZG93TW9kdWxlLFxyXG4gICAgRHhvVmFsdWVBeGlzTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeFBvbGFyQ2hhcnRDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4UG9sYXJDaGFydENvbXBvbmVudCxcclxuICAgIER4b0FkYXB0aXZlTGF5b3V0TW9kdWxlLFxyXG4gICAgRHhvQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgRHhvQXJndW1lbnRBeGlzTW9kdWxlLFxyXG4gICAgRHhpQ29uc3RhbnRMaW5lTW9kdWxlLFxyXG4gICAgRHhvTGFiZWxNb2R1bGUsXHJcbiAgICBEeG9Gb250TW9kdWxlLFxyXG4gICAgRHhvQ29uc3RhbnRMaW5lU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9HcmlkTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTWlub3JHcmlkTW9kdWxlLFxyXG4gICAgRHhvTWlub3JUaWNrTW9kdWxlLFxyXG4gICAgRHhvTWlub3JUaWNrSW50ZXJ2YWxNb2R1bGUsXHJcbiAgICBEeGlTdHJpcE1vZHVsZSxcclxuICAgIER4b1N0cmlwU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9UaWNrTW9kdWxlLFxyXG4gICAgRHhvVGlja0ludGVydmFsTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uQXhpc1NldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQ29tbW9uU2VyaWVzU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeG9BcmVhTW9kdWxlLFxyXG4gICAgRHhvQm9yZGVyTW9kdWxlLFxyXG4gICAgRHhvSG92ZXJTdHlsZU1vZHVsZSxcclxuICAgIER4b0hhdGNoaW5nTW9kdWxlLFxyXG4gICAgRHhvQ29ubmVjdG9yTW9kdWxlLFxyXG4gICAgRHhvUG9pbnRNb2R1bGUsXHJcbiAgICBEeG9JbWFnZU1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvblN0eWxlTW9kdWxlLFxyXG4gICAgRHhvVmFsdWVFcnJvckJhck1vZHVsZSxcclxuICAgIER4b0Jhck1vZHVsZSxcclxuICAgIER4b0FyZ3VtZW50Rm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTGluZU1vZHVsZSxcclxuICAgIER4b1NjYXR0ZXJNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkYmFyTW9kdWxlLFxyXG4gICAgRHhvRGF0YVByZXBhcmVTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0xlZ2VuZE1vZHVsZSxcclxuICAgIER4b01hcmdpbk1vZHVsZSxcclxuICAgIER4b1RpdGxlTW9kdWxlLFxyXG4gICAgRHhvU3VidGl0bGVNb2R1bGUsXHJcbiAgICBEeG9Mb2FkaW5nSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgRHhpU2VyaWVzTW9kdWxlLFxyXG4gICAgRHhvU2VyaWVzVGVtcGxhdGVNb2R1bGUsXHJcbiAgICBEeG9TaXplTW9kdWxlLFxyXG4gICAgRHhvVG9vbHRpcE1vZHVsZSxcclxuICAgIER4b1NoYWRvd01vZHVsZSxcclxuICAgIER4b1ZhbHVlQXhpc01vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFBvbGFyQ2hhcnRNb2R1bGUgeyB9XHJcbiJdfQ==
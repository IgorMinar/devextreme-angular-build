import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxPolarChart from 'devextreme/viz/polar_chart';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiSeriesComponent, DxoAdaptiveLayoutModule, DxoAnimationModule, DxoArgumentAxisModule, DxiConstantLineModule, DxoLabelModule, DxoFontModule, DxoConstantLineStyleModule, DxoGridModule, DxoFormatModule, DxoMinorGridModule, DxoMinorTickModule, DxoMinorTickIntervalModule, DxiStripModule, DxoStripStyleModule, DxoTickModule, DxoTickIntervalModule, DxoCommonAxisSettingsModule, DxoCommonSeriesSettingsModule, DxoAreaModule, DxoBorderModule, DxoHoverStyleModule, DxoHatchingModule, DxoConnectorModule, DxoPointModule, DxoImageModule, DxoSelectionStyleModule, DxoValueErrorBarModule, DxoBarModule, DxoArgumentFormatModule, DxoLineModule, DxoScatterModule, DxoStackedbarModule, DxoDataPrepareSettingsModule, DxoExportModule, DxoLegendModule, DxoMarginModule, DxoTitleModule, DxoSubtitleModule, DxoLoadingIndicatorModule, DxiSeriesModule, DxoSeriesTemplateModule, DxoSizeModule, DxoTooltipModule, DxoShadowModule, DxoValueAxisModule } from 'devextreme-angular/ui/nested';

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
 * The PolarChart is a widget that visualizes data in a polar coordinate system.
 */
var DxPolarChartComponent = /** @class */ (function (_super) {
    __extends(DxPolarChartComponent, _super);
    function DxPolarChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPolarChartComponent.prototype, "adaptiveLayout", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "animation", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "argumentAxis", {
        /**
         * Specifies argument axis options for the PolarChart widget.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "barGroupPadding", {
        /**
         * Controls the padding and consequently the angular width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth option is set.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "barGroupWidth", {
        /**
         * Specifies a fixed angular width for groups of bars with the same argument, measured in degrees. Takes precedence over the barGroupPadding option.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "barWidth", {
        /**
         * Use CommonPolarChartSeries.barPadding instead.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "commonAxisSettings", {
        /**
         * An object defining the configuration options that are common for all axes of the PolarChart widget.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "commonSeriesSettings", {
        /**
         * An object defining the configuration options that are common for all series of the PolarChart widget.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "containerBackgroundColor", {
        /**
         * Specifies the color of the parent page element.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "customizeLabel", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "customizePoint", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "dataPrepareSettings", {
        /**
         * An object providing options for managing data from a data source.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "disabled", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "equalBarWidth", {
        /**
         * Use CommonPolarChartSeries.ignoreEmptyPoints instead.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "export", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "legend", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "margin", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "negativesAsZeroes", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "palette", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "paletteExtensionMode", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "pointSelectionMode", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "resolveLabelOverlapping", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "series", {
        /**
         * Specifies options for PolarChart widget series.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "seriesSelectionMode", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "seriesTemplate", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "size", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "theme", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "title", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "useSpiderWeb", {
        /**
         * Indicates whether or not to display a "spider web".
         */
        get: function () {
            return this._getOption('useSpiderWeb');
        },
        set: function (value) {
            this._setOption('useSpiderWeb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "valueAxis", {
        /**
         * Specifies value axis options for the PolarChart widget.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPolarChartComponent.prototype._createInstance = function (element, options) {
        return new DxPolarChart(element, options);
    };
    DxPolarChartComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPolarChartComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('series', changes);
    };
    DxPolarChartComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPolarChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxPolarChartComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPolarChartComponent.ctorParameters = function () { return [
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
    ], DxPolarChartComponent.prototype, "adaptiveLayout", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "argumentAxis", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "barGroupPadding", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "barGroupWidth", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "barWidth", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "commonAxisSettings", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "commonSeriesSettings", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "containerBackgroundColor", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "customizeLabel", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "customizePoint", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "dataPrepareSettings", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "equalBarWidth", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "legend", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "loadingIndicator", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "margin", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "negativesAsZeroes", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "palette", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "paletteExtensionMode", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "pointSelectionMode", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "redrawOnResize", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "resolveLabelOverlapping", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "series", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "seriesSelectionMode", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "seriesTemplate", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "useSpiderWeb", null);
    __decorate([
        Input()
    ], DxPolarChartComponent.prototype, "valueAxis", null);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onArgumentAxisClick", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onDone", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onLegendClick", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onPointClick", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onPointHoverChanged", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onPointSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onSeriesClick", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onSeriesHoverChanged", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onSeriesSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "adaptiveLayoutChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "argumentAxisChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "barGroupPaddingChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "barGroupWidthChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "barWidthChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "commonAxisSettingsChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "commonSeriesSettingsChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "containerBackgroundColorChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "customizeLabelChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "customizePointChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "dataPrepareSettingsChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "equalBarWidthChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "legendChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "marginChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "negativesAsZeroesChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "paletteChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "paletteExtensionModeChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "pointSelectionModeChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "seriesChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "seriesSelectionModeChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "seriesTemplateChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "useSpiderWebChange", void 0);
    __decorate([
        Output()
    ], DxPolarChartComponent.prototype, "valueAxisChange", void 0);
    __decorate([
        ContentChildren(DxiSeriesComponent)
    ], DxPolarChartComponent.prototype, "seriesChildren", null);
    DxPolarChartComponent = __decorate([
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
        __param(7, Inject(PLATFORM_ID))
    ], DxPolarChartComponent);
    return DxPolarChartComponent;
}(DxComponent));
var DxPolarChartModule = /** @class */ (function () {
    function DxPolarChartModule() {
    }
    DxPolarChartModule = __decorate([
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
    return DxPolarChartModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxPolarChartComponent, DxPolarChartModule };
//# sourceMappingURL=devextreme-angular-ui-polar-chart.js.map

import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxPieChart from 'devextreme/viz/pie_chart';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiSeriesComponent, DxoAdaptiveLayoutModule, DxoAnimationModule, DxoCommonSeriesSettingsModule, DxoBorderModule, DxoHoverStyleModule, DxoHatchingModule, DxoLabelModule, DxoArgumentFormatModule, DxoConnectorModule, DxoFontModule, DxoFormatModule, DxoSelectionStyleModule, DxoSmallValuesGroupingModule, DxoExportModule, DxoLegendModule, DxoMarginModule, DxoTitleModule, DxoSubtitleModule, DxoLoadingIndicatorModule, DxiSeriesModule, DxoSeriesTemplateModule, DxoSizeModule, DxoTooltipModule, DxoShadowModule } from 'devextreme-angular/ui/nested';

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
 * The PieChart is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.
 */
var DxPieChartComponent = /** @class */ (function (_super) {
    __extends(DxPieChartComponent, _super);
    function DxPieChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
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
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataSourceChange' },
            { emit: 'diameterChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'innerRadiusChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'minDiameterChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'segmentsDirectionChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'sizeChange' },
            { emit: 'sizeGroupChange' },
            { emit: 'startAngleChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'typeChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPieChartComponent.prototype, "adaptiveLayout", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "animation", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "commonSeriesSettings", {
        /**
         * An object defining the configuration options that are common for all series of the PieChart widget.
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
    Object.defineProperty(DxPieChartComponent.prototype, "customizeLabel", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "customizePoint", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "diameter", {
        /**
         * Specifies the diameter of the pie.
         */
        get: function () {
            return this._getOption('diameter');
        },
        set: function (value) {
            this._setOption('diameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "disabled", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "export", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "innerRadius", {
        /**
         * Specifies the fraction of the inner radius relative to the total radius in the series of the 'doughnut' type. The value should be between 0 and 1.
         */
        get: function () {
            return this._getOption('innerRadius');
        },
        set: function (value) {
            this._setOption('innerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "legend", {
        /**
         * Specifies PieChart legend options.
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
    Object.defineProperty(DxPieChartComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "margin", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "minDiameter", {
        /**
         * Specifies the minimum diameter of the pie.
         */
        get: function () {
            return this._getOption('minDiameter');
        },
        set: function (value) {
            this._setOption('minDiameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "palette", {
        /**
         * Sets the palette to be used to colorize series and their elements.
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
    Object.defineProperty(DxPieChartComponent.prototype, "paletteExtensionMode", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "pointSelectionMode", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "resolveLabelOverlapping", {
        /**
         * Specifies how a chart must behave when point labels overlap.
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
    Object.defineProperty(DxPieChartComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "segmentsDirection", {
        /**
         * Specifies the direction that the pie chart segments will occupy.
         */
        get: function () {
            return this._getOption('segmentsDirection');
        },
        set: function (value) {
            this._setOption('segmentsDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "series", {
        /**
         * Specifies options for the series of the PieChart widget.
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
    Object.defineProperty(DxPieChartComponent.prototype, "seriesTemplate", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "size", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "sizeGroup", {
        /**
         * Allows you to display several adjoining pies in the same size.
         */
        get: function () {
            return this._getOption('sizeGroup');
        },
        set: function (value) {
            this._setOption('sizeGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "startAngle", {
        /**
         * Specifies the angle in arc degrees from which the first segment of a pie chart should start.
         */
        get: function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "theme", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "title", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "type", {
        /**
         * Specifies the type of the pie chart series.
         */
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPieChartComponent.prototype._createInstance = function (element, options) {
        return new DxPieChart(element, options);
    };
    DxPieChartComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPieChartComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('series', changes);
    };
    DxPieChartComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPieChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxPieChartComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPieChartComponent.ctorParameters = function () { return [
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
    ], DxPieChartComponent.prototype, "adaptiveLayout", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "commonSeriesSettings", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "customizeLabel", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "customizePoint", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "diameter", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "innerRadius", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "legend", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "loadingIndicator", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "margin", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "minDiameter", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "palette", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "paletteExtensionMode", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "pointSelectionMode", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "redrawOnResize", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "resolveLabelOverlapping", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "segmentsDirection", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "series", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "seriesTemplate", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "sizeGroup", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "startAngle", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxPieChartComponent.prototype, "type", null);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onDone", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onLegendClick", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onPointClick", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onPointHoverChanged", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onPointSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "adaptiveLayoutChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "commonSeriesSettingsChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "customizeLabelChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "customizePointChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "diameterChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "innerRadiusChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "legendChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "marginChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "minDiameterChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "paletteChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "paletteExtensionModeChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "pointSelectionModeChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "segmentsDirectionChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "seriesChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "seriesTemplateChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "sizeGroupChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "startAngleChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxPieChartComponent.prototype, "typeChange", void 0);
    __decorate([
        ContentChildren(DxiSeriesComponent)
    ], DxPieChartComponent.prototype, "seriesChildren", null);
    DxPieChartComponent = __decorate([
        Component({
            selector: 'dx-pie-chart',
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
    ], DxPieChartComponent);
    return DxPieChartComponent;
}(DxComponent));
var DxPieChartModule = /** @class */ (function () {
    function DxPieChartModule() {
    }
    DxPieChartModule = __decorate([
        NgModule({
            imports: [
                DxoAdaptiveLayoutModule,
                DxoAnimationModule,
                DxoCommonSeriesSettingsModule,
                DxoBorderModule,
                DxoHoverStyleModule,
                DxoHatchingModule,
                DxoLabelModule,
                DxoArgumentFormatModule,
                DxoConnectorModule,
                DxoFontModule,
                DxoFormatModule,
                DxoSelectionStyleModule,
                DxoSmallValuesGroupingModule,
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
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxPieChartComponent
            ],
            exports: [
                DxPieChartComponent,
                DxoAdaptiveLayoutModule,
                DxoAnimationModule,
                DxoCommonSeriesSettingsModule,
                DxoBorderModule,
                DxoHoverStyleModule,
                DxoHatchingModule,
                DxoLabelModule,
                DxoArgumentFormatModule,
                DxoConnectorModule,
                DxoFontModule,
                DxoFormatModule,
                DxoSelectionStyleModule,
                DxoSmallValuesGroupingModule,
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
                DxTemplateModule
            ]
        })
    ], DxPieChartModule);
    return DxPieChartModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxPieChartComponent, DxPieChartModule };
//# sourceMappingURL=devextreme-angular-ui-pie-chart.js.map

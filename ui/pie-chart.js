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
import DxPieChart from 'devextreme/viz/pie_chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAdaptiveLayoutModule } from './nested/adaptive-layout';
import { DxoAnimationModule } from './nested/animation';
import { DxoCommonSeriesSettingsModule } from './nested/common-series-settings';
import { DxoBorderModule } from './nested/border';
import { DxoHoverStyleModule } from './nested/hover-style';
import { DxoHatchingModule } from './nested/hatching';
import { DxoLabelModule } from './nested/label';
import { DxoArgumentFormatModule } from './nested/argument-format';
import { DxoConnectorModule } from './nested/connector';
import { DxoFontModule } from './nested/font';
import { DxoFormatModule } from './nested/format';
import { DxoSelectionStyleModule } from './nested/selection-style';
import { DxoSmallValuesGroupingModule } from './nested/small-values-grouping';
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
import { DxiSeriesComponent } from './nested/series-dxi';
/**
 * The PieChart is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.
 */
var DxPieChartComponent = (function (_super) {
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
    Object.defineProperty(DxPieChartComponent.prototype, "animation", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "commonSeriesSettings", {
        get: /**
             * An object defining the configuration options that are common for all series of the PieChart widget.
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
    Object.defineProperty(DxPieChartComponent.prototype, "customizeLabel", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "customizePoint", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "diameter", {
        get: /**
             * Specifies the diameter of the pie.
             */
        function () {
            return this._getOption('diameter');
        },
        set: function (value) {
            this._setOption('diameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "disabled", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "export", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "innerRadius", {
        get: /**
             * Specifies the fraction of the inner radius relative to the total radius in the series of the 'doughnut' type. The value should be between 0 and 1.
             */
        function () {
            return this._getOption('innerRadius');
        },
        set: function (value) {
            this._setOption('innerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "legend", {
        get: /**
             * Specifies PieChart legend options.
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
    Object.defineProperty(DxPieChartComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "margin", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "minDiameter", {
        get: /**
             * Specifies the minimum diameter of the pie.
             */
        function () {
            return this._getOption('minDiameter');
        },
        set: function (value) {
            this._setOption('minDiameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "palette", {
        get: /**
             * Sets the palette to be used to colorize series and their elements.
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
    Object.defineProperty(DxPieChartComponent.prototype, "paletteExtensionMode", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "pointSelectionMode", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "resolveLabelOverlapping", {
        get: /**
             * Specifies how a chart must behave when point labels overlap.
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
    Object.defineProperty(DxPieChartComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "segmentsDirection", {
        get: /**
             * Specifies the direction that the pie chart segments will occupy.
             */
        function () {
            return this._getOption('segmentsDirection');
        },
        set: function (value) {
            this._setOption('segmentsDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "series", {
        get: /**
             * Specifies options for the series of the PieChart widget.
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
    Object.defineProperty(DxPieChartComponent.prototype, "seriesTemplate", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "size", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "sizeGroup", {
        get: /**
             * Allows you to display several adjoining pies in the same size.
             */
        function () {
            return this._getOption('sizeGroup');
        },
        set: function (value) {
            this._setOption('sizeGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "startAngle", {
        get: /**
             * Specifies the angle in arc degrees from which the first segment of a pie chart should start.
             */
        function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "theme", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "title", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "type", {
        get: /**
             * Specifies the type of the pie chart series.
             */
        function () {
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
    DxPieChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-pie-chart',
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
    DxPieChartComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxPieChartComponent.propDecorators = {
        "adaptiveLayout": [{ type: Input },],
        "animation": [{ type: Input },],
        "commonSeriesSettings": [{ type: Input },],
        "customizeLabel": [{ type: Input },],
        "customizePoint": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "diameter": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "export": [{ type: Input },],
        "innerRadius": [{ type: Input },],
        "legend": [{ type: Input },],
        "loadingIndicator": [{ type: Input },],
        "margin": [{ type: Input },],
        "minDiameter": [{ type: Input },],
        "palette": [{ type: Input },],
        "paletteExtensionMode": [{ type: Input },],
        "pathModified": [{ type: Input },],
        "pointSelectionMode": [{ type: Input },],
        "redrawOnResize": [{ type: Input },],
        "resolveLabelOverlapping": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "segmentsDirection": [{ type: Input },],
        "series": [{ type: Input },],
        "seriesTemplate": [{ type: Input },],
        "size": [{ type: Input },],
        "sizeGroup": [{ type: Input },],
        "startAngle": [{ type: Input },],
        "theme": [{ type: Input },],
        "title": [{ type: Input },],
        "tooltip": [{ type: Input },],
        "type": [{ type: Input },],
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
        "onTooltipHidden": [{ type: Output },],
        "onTooltipShown": [{ type: Output },],
        "adaptiveLayoutChange": [{ type: Output },],
        "animationChange": [{ type: Output },],
        "commonSeriesSettingsChange": [{ type: Output },],
        "customizeLabelChange": [{ type: Output },],
        "customizePointChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "diameterChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "exportChange": [{ type: Output },],
        "innerRadiusChange": [{ type: Output },],
        "legendChange": [{ type: Output },],
        "loadingIndicatorChange": [{ type: Output },],
        "marginChange": [{ type: Output },],
        "minDiameterChange": [{ type: Output },],
        "paletteChange": [{ type: Output },],
        "paletteExtensionModeChange": [{ type: Output },],
        "pathModifiedChange": [{ type: Output },],
        "pointSelectionModeChange": [{ type: Output },],
        "redrawOnResizeChange": [{ type: Output },],
        "resolveLabelOverlappingChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "segmentsDirectionChange": [{ type: Output },],
        "seriesChange": [{ type: Output },],
        "seriesTemplateChange": [{ type: Output },],
        "sizeChange": [{ type: Output },],
        "sizeGroupChange": [{ type: Output },],
        "startAngleChange": [{ type: Output },],
        "themeChange": [{ type: Output },],
        "titleChange": [{ type: Output },],
        "tooltipChange": [{ type: Output },],
        "typeChange": [{ type: Output },],
        "seriesChildren": [{ type: ContentChildren, args: [DxiSeriesComponent,] },],
    };
    return DxPieChartComponent;
}(DxComponent));
export { DxPieChartComponent };
var DxPieChartModule = (function () {
    function DxPieChartModule() {
    }
    DxPieChartModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxPieChartModule;
}());
export { DxPieChartModule };
//# sourceMappingURL=pie-chart.js.map
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
var bar_gauge_1 = require("devextreme/viz/bar_gauge");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var animation_1 = require("./nested/animation");
var export_1 = require("./nested/export");
var geometry_1 = require("./nested/geometry");
var label_1 = require("./nested/label");
var font_1 = require("./nested/font");
var format_1 = require("./nested/format");
var legend_1 = require("./nested/legend");
var border_1 = require("./nested/border");
var item_text_format_1 = require("./nested/item-text-format");
var margin_1 = require("./nested/margin");
var title_1 = require("./nested/title");
var subtitle_1 = require("./nested/subtitle");
var loading_indicator_1 = require("./nested/loading-indicator");
var size_1 = require("./nested/size");
var tooltip_1 = require("./nested/tooltip");
var shadow_1 = require("./nested/shadow");
/**
 * The BarGauge widget contains several circular bars that each indicates a single value.
 */
var DxBarGaugeComponent = (function (_super) {
    __extends(DxBarGaugeComponent, _super);
    function DxBarGaugeComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'animationChange' },
            { emit: 'backgroundColorChange' },
            { emit: 'barSpacingChange' },
            { emit: 'baseValueChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'endValueChange' },
            { emit: 'exportChange' },
            { emit: 'geometryChange' },
            { emit: 'labelChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'relativeInnerRadiusChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'sizeChange' },
            { emit: 'startValueChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valuesChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxBarGaugeComponent.prototype, "animation", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "backgroundColor", {
        get: /**
             * Specifies a color for the remaining segment of the bar's track.
             */
        function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "barSpacing", {
        get: /**
             * Specifies a distance between bars in pixels.
             */
        function () {
            return this._getOption('barSpacing');
        },
        set: function (value) {
            this._setOption('barSpacing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "baseValue", {
        get: /**
             * Specifies a base value for bars.
             */
        function () {
            return this._getOption('baseValue');
        },
        set: function (value) {
            this._setOption('baseValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "disabled", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "endValue", {
        get: /**
             * Specifies an end value for the gauge's invisible scale.
             */
        function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "export", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "geometry", {
        get: /**
             * Defines the shape of the gauge's arc.
             */
        function () {
            return this._getOption('geometry');
        },
        set: function (value) {
            this._setOption('geometry', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "label", {
        get: /**
             * Specifies the options of the labels that accompany gauge bars.
             */
        function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "legend", {
        get: /**
             * Configures the legend.
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "margin", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "palette", {
        get: /**
             * Sets the palette to be used for colorizing bars in the gauge.
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "paletteExtensionMode", {
        get: /**
             * Specifies what to do with colors in the palette when their number is less than the number of bars in the gauge.
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "relativeInnerRadius", {
        get: /**
             * Defines the radius of the bar that is closest to the center relatively to the radius of the topmost bar.
             */
        function () {
            return this._getOption('relativeInnerRadius');
        },
        set: function (value) {
            this._setOption('relativeInnerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "resolveLabelOverlapping", {
        get: /**
             * Specifies how the widget should behave when bar labels overlap: hide certain labels or leave them overlapped.
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "size", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "startValue", {
        get: /**
             * Specifies a start value for the gauge's invisible scale.
             */
        function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "theme", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "title", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "values", {
        get: /**
             * Specifies the array of values to be indicated on a bar gauge.
             */
        function () {
            return this._getOption('values');
        },
        set: function (value) {
            this._setOption('values', value);
        },
        enumerable: true,
        configurable: true
    });
    DxBarGaugeComponent.prototype._createInstance = function (element, options) {
        return new bar_gauge_1.default(element, options);
    };
    DxBarGaugeComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxBarGaugeComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('palette', changes);
        this.setupChanges('values', changes);
    };
    DxBarGaugeComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxBarGaugeComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('palette');
        this._idh.doCheck('values');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxBarGaugeComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxBarGaugeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-bar-gauge',
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
    DxBarGaugeComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxBarGaugeComponent.propDecorators = {
        "animation": [{ type: core_1.Input },],
        "backgroundColor": [{ type: core_1.Input },],
        "barSpacing": [{ type: core_1.Input },],
        "baseValue": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "endValue": [{ type: core_1.Input },],
        "export": [{ type: core_1.Input },],
        "geometry": [{ type: core_1.Input },],
        "label": [{ type: core_1.Input },],
        "legend": [{ type: core_1.Input },],
        "loadingIndicator": [{ type: core_1.Input },],
        "margin": [{ type: core_1.Input },],
        "palette": [{ type: core_1.Input },],
        "paletteExtensionMode": [{ type: core_1.Input },],
        "pathModified": [{ type: core_1.Input },],
        "redrawOnResize": [{ type: core_1.Input },],
        "relativeInnerRadius": [{ type: core_1.Input },],
        "resolveLabelOverlapping": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "size": [{ type: core_1.Input },],
        "startValue": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "tooltip": [{ type: core_1.Input },],
        "values": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onDrawn": [{ type: core_1.Output },],
        "onExported": [{ type: core_1.Output },],
        "onExporting": [{ type: core_1.Output },],
        "onFileSaving": [{ type: core_1.Output },],
        "onIncidentOccurred": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onTooltipHidden": [{ type: core_1.Output },],
        "onTooltipShown": [{ type: core_1.Output },],
        "animationChange": [{ type: core_1.Output },],
        "backgroundColorChange": [{ type: core_1.Output },],
        "barSpacingChange": [{ type: core_1.Output },],
        "baseValueChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "endValueChange": [{ type: core_1.Output },],
        "exportChange": [{ type: core_1.Output },],
        "geometryChange": [{ type: core_1.Output },],
        "labelChange": [{ type: core_1.Output },],
        "legendChange": [{ type: core_1.Output },],
        "loadingIndicatorChange": [{ type: core_1.Output },],
        "marginChange": [{ type: core_1.Output },],
        "paletteChange": [{ type: core_1.Output },],
        "paletteExtensionModeChange": [{ type: core_1.Output },],
        "pathModifiedChange": [{ type: core_1.Output },],
        "redrawOnResizeChange": [{ type: core_1.Output },],
        "relativeInnerRadiusChange": [{ type: core_1.Output },],
        "resolveLabelOverlappingChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "sizeChange": [{ type: core_1.Output },],
        "startValueChange": [{ type: core_1.Output },],
        "themeChange": [{ type: core_1.Output },],
        "titleChange": [{ type: core_1.Output },],
        "tooltipChange": [{ type: core_1.Output },],
        "valuesChange": [{ type: core_1.Output },],
    };
    return DxBarGaugeComponent;
}(component_1.DxComponent));
exports.DxBarGaugeComponent = DxBarGaugeComponent;
var DxBarGaugeModule = (function () {
    function DxBarGaugeModule() {
    }
    DxBarGaugeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        export_1.DxoExportModule,
                        geometry_1.DxoGeometryModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        legend_1.DxoLegendModule,
                        border_1.DxoBorderModule,
                        item_text_format_1.DxoItemTextFormatModule,
                        margin_1.DxoMarginModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxBarGaugeComponent
                    ],
                    exports: [
                        DxBarGaugeComponent,
                        animation_1.DxoAnimationModule,
                        export_1.DxoExportModule,
                        geometry_1.DxoGeometryModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        legend_1.DxoLegendModule,
                        border_1.DxoBorderModule,
                        item_text_format_1.DxoItemTextFormatModule,
                        margin_1.DxoMarginModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxBarGaugeModule;
}());
exports.DxBarGaugeModule = DxBarGaugeModule;
//# sourceMappingURL=bar-gauge.js.map
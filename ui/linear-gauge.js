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
var linear_gauge_1 = require("devextreme/viz/linear_gauge");
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
var loading_indicator_1 = require("./nested/loading-indicator");
var font_1 = require("./nested/font");
var margin_1 = require("./nested/margin");
var range_container_1 = require("./nested/range-container");
var range_dxi_1 = require("./nested/range-dxi");
var width_1 = require("./nested/width");
var scale_1 = require("./nested/scale");
var label_1 = require("./nested/label");
var format_1 = require("./nested/format");
var minor_tick_1 = require("./nested/minor-tick");
var tick_1 = require("./nested/tick");
var size_1 = require("./nested/size");
var subvalue_indicator_1 = require("./nested/subvalue-indicator");
var text_1 = require("./nested/text");
var title_1 = require("./nested/title");
var subtitle_1 = require("./nested/subtitle");
var tooltip_1 = require("./nested/tooltip");
var border_1 = require("./nested/border");
var shadow_1 = require("./nested/shadow");
var value_indicator_1 = require("./nested/value-indicator");
/**
 * The LinearGauge is a widget that indicates values on a linear numeric scale.
 */
var DxLinearGaugeComponent = (function (_super) {
    __extends(DxLinearGaugeComponent, _super);
    function DxLinearGaugeComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { emit: 'containerBackgroundColorChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'geometryChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'rangeContainerChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scaleChange' },
            { emit: 'sizeChange' },
            { emit: 'subvalueIndicatorChange' },
            { emit: 'subvaluesChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueChange' },
            { emit: 'valueIndicatorChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxLinearGaugeComponent.prototype, "animation", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "containerBackgroundColor", {
        get: /**
             * Specifies the color of the parent page element.
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "disabled", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "export", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "geometry", {
        get: /**
             * Specifies the options required to set the geometry of the LinearGauge widget.
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "margin", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "rangeContainer", {
        get: /**
             * Specifies gauge range container options.
             */
        function () {
            return this._getOption('rangeContainer');
        },
        set: function (value) {
            this._setOption('rangeContainer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "scale", {
        get: /**
             * Specifies the gauge's scale options.
             */
        function () {
            return this._getOption('scale');
        },
        set: function (value) {
            this._setOption('scale', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "size", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subvalueIndicator", {
        get: /**
             * Specifies the appearance options of subvalue indicators.
             */
        function () {
            return this._getOption('subvalueIndicator');
        },
        set: function (value) {
            this._setOption('subvalueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subvalues", {
        get: /**
             * Specifies a set of subvalues to be designated by the subvalue indicators.
             */
        function () {
            return this._getOption('subvalues');
        },
        set: function (value) {
            this._setOption('subvalues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "theme", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "title", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "value", {
        get: /**
             * Specifies the main value on a gauge.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "valueIndicator", {
        get: /**
             * Specifies the appearance options of the value indicator.
             */
        function () {
            return this._getOption('valueIndicator');
        },
        set: function (value) {
            this._setOption('valueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLinearGaugeComponent.prototype._createInstance = function (element, options) {
        return new linear_gauge_1.default(element, options);
    };
    DxLinearGaugeComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLinearGaugeComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('subvalues', changes);
    };
    DxLinearGaugeComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxLinearGaugeComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('subvalues');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxLinearGaugeComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxLinearGaugeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-linear-gauge',
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
    DxLinearGaugeComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxLinearGaugeComponent.propDecorators = {
        "animation": [{ type: core_1.Input },],
        "containerBackgroundColor": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "export": [{ type: core_1.Input },],
        "geometry": [{ type: core_1.Input },],
        "loadingIndicator": [{ type: core_1.Input },],
        "margin": [{ type: core_1.Input },],
        "pathModified": [{ type: core_1.Input },],
        "rangeContainer": [{ type: core_1.Input },],
        "redrawOnResize": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "scale": [{ type: core_1.Input },],
        "size": [{ type: core_1.Input },],
        "subvalueIndicator": [{ type: core_1.Input },],
        "subvalues": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "tooltip": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "valueIndicator": [{ type: core_1.Input },],
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
        "containerBackgroundColorChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "exportChange": [{ type: core_1.Output },],
        "geometryChange": [{ type: core_1.Output },],
        "loadingIndicatorChange": [{ type: core_1.Output },],
        "marginChange": [{ type: core_1.Output },],
        "pathModifiedChange": [{ type: core_1.Output },],
        "rangeContainerChange": [{ type: core_1.Output },],
        "redrawOnResizeChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "scaleChange": [{ type: core_1.Output },],
        "sizeChange": [{ type: core_1.Output },],
        "subvalueIndicatorChange": [{ type: core_1.Output },],
        "subvaluesChange": [{ type: core_1.Output },],
        "themeChange": [{ type: core_1.Output },],
        "titleChange": [{ type: core_1.Output },],
        "tooltipChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "valueIndicatorChange": [{ type: core_1.Output },],
    };
    return DxLinearGaugeComponent;
}(component_1.DxComponent));
exports.DxLinearGaugeComponent = DxLinearGaugeComponent;
var DxLinearGaugeModule = (function () {
    function DxLinearGaugeModule() {
    }
    DxLinearGaugeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        export_1.DxoExportModule,
                        geometry_1.DxoGeometryModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        margin_1.DxoMarginModule,
                        range_container_1.DxoRangeContainerModule,
                        range_dxi_1.DxiRangeModule,
                        width_1.DxoWidthModule,
                        scale_1.DxoScaleModule,
                        label_1.DxoLabelModule,
                        format_1.DxoFormatModule,
                        minor_tick_1.DxoMinorTickModule,
                        tick_1.DxoTickModule,
                        size_1.DxoSizeModule,
                        subvalue_indicator_1.DxoSubvalueIndicatorModule,
                        text_1.DxoTextModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        shadow_1.DxoShadowModule,
                        value_indicator_1.DxoValueIndicatorModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxLinearGaugeComponent
                    ],
                    exports: [
                        DxLinearGaugeComponent,
                        animation_1.DxoAnimationModule,
                        export_1.DxoExportModule,
                        geometry_1.DxoGeometryModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        margin_1.DxoMarginModule,
                        range_container_1.DxoRangeContainerModule,
                        range_dxi_1.DxiRangeModule,
                        width_1.DxoWidthModule,
                        scale_1.DxoScaleModule,
                        label_1.DxoLabelModule,
                        format_1.DxoFormatModule,
                        minor_tick_1.DxoMinorTickModule,
                        tick_1.DxoTickModule,
                        size_1.DxoSizeModule,
                        subvalue_indicator_1.DxoSubvalueIndicatorModule,
                        text_1.DxoTextModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        shadow_1.DxoShadowModule,
                        value_indicator_1.DxoValueIndicatorModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxLinearGaugeModule;
}());
exports.DxLinearGaugeModule = DxLinearGaugeModule;
//# sourceMappingURL=linear-gauge.js.map
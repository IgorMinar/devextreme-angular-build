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
var vector_map_1 = require("devextreme/viz/vector_map");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var background_1 = require("./nested/background");
var control_bar_1 = require("./nested/control-bar");
var export_1 = require("./nested/export");
var layer_dxi_1 = require("./nested/layer-dxi");
var label_1 = require("./nested/label");
var font_1 = require("./nested/font");
var legend_dxi_1 = require("./nested/legend-dxi");
var border_1 = require("./nested/border");
var margin_1 = require("./nested/margin");
var source_1 = require("./nested/source");
var title_1 = require("./nested/title");
var subtitle_1 = require("./nested/subtitle");
var loading_indicator_1 = require("./nested/loading-indicator");
var size_1 = require("./nested/size");
var tooltip_1 = require("./nested/tooltip");
var shadow_1 = require("./nested/shadow");
var layer_dxi_2 = require("./nested/layer-dxi");
var legend_dxi_2 = require("./nested/legend-dxi");
/**
 * The VectorMap is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
 */
var DxVectorMapComponent = (function (_super) {
    __extends(DxVectorMapComponent, _super);
    function DxVectorMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'centerChanged', emit: 'onCenterChanged' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'zoomFactorChanged', emit: 'onZoomFactorChanged' },
            { emit: 'backgroundChange' },
            { emit: 'boundsChange' },
            { emit: 'centerChange' },
            { emit: 'controlBarChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'layersChange' },
            { emit: 'legendsChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'maxZoomFactorChange' },
            { emit: 'panningEnabledChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'projectionChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'touchEnabledChange' },
            { emit: 'wheelEnabledChange' },
            { emit: 'zoomFactorChange' },
            { emit: 'zoomingEnabledChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxVectorMapComponent.prototype, "background", {
        get: /**
             * Specifies the options for the map background.
             */
        function () {
            return this._getOption('background');
        },
        set: function (value) {
            this._setOption('background', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "bounds", {
        get: /**
             * Specifies the positioning of a map in geographical coordinates.
             */
        function () {
            return this._getOption('bounds');
        },
        set: function (value) {
            this._setOption('bounds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "center", {
        get: /**
             * Specifies the geographical coordinates of the center for a map.
             */
        function () {
            return this._getOption('center');
        },
        set: function (value) {
            this._setOption('center', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "controlBar", {
        get: /**
             * Configures the control bar.
             */
        function () {
            return this._getOption('controlBar');
        },
        set: function (value) {
            this._setOption('controlBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "disabled", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "export", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "layers", {
        get: /**
             * Specifies options for VectorMap widget layers.
             */
        function () {
            return this._getOption('layers');
        },
        set: function (value) {
            this._setOption('layers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "legends", {
        get: /**
             * Configures map legends.
             */
        function () {
            return this._getOption('legends');
        },
        set: function (value) {
            this._setOption('legends', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "maxZoomFactor", {
        get: /**
             * Specifies a map's maximum zoom factor.
             */
        function () {
            return this._getOption('maxZoomFactor');
        },
        set: function (value) {
            this._setOption('maxZoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "panningEnabled", {
        get: /**
             * Disables the panning capability.
             */
        function () {
            return this._getOption('panningEnabled');
        },
        set: function (value) {
            this._setOption('panningEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "projection", {
        get: /**
             * Specifies the map projection.
             */
        function () {
            return this._getOption('projection');
        },
        set: function (value) {
            this._setOption('projection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "size", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "theme", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "title", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "touchEnabled", {
        get: /**
             * Specifies whether the map should respond to touch gestures.
             */
        function () {
            return this._getOption('touchEnabled');
        },
        set: function (value) {
            this._setOption('touchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "wheelEnabled", {
        get: /**
             * Specifies whether or not the map should respond when a user rolls the mouse wheel.
             */
        function () {
            return this._getOption('wheelEnabled');
        },
        set: function (value) {
            this._setOption('wheelEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomFactor", {
        get: /**
             * Specifies a number that is used to zoom a map initially.
             */
        function () {
            return this._getOption('zoomFactor');
        },
        set: function (value) {
            this._setOption('zoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomingEnabled", {
        get: /**
             * Disables the zooming capability.
             */
        function () {
            return this._getOption('zoomingEnabled');
        },
        set: function (value) {
            this._setOption('zoomingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "layersChildren", {
        get: function () {
            return this._getOption('layers');
        },
        set: function (value) {
            this.setChildren('layers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "legendsChildren", {
        get: function () {
            return this._getOption('legends');
        },
        set: function (value) {
            this.setChildren('legends', value);
        },
        enumerable: true,
        configurable: true
    });
    DxVectorMapComponent.prototype._createInstance = function (element, options) {
        return new vector_map_1.default(element, options);
    };
    DxVectorMapComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxVectorMapComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('bounds', changes);
        this.setupChanges('center', changes);
        this.setupChanges('layers', changes);
        this.setupChanges('legends', changes);
    };
    DxVectorMapComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxVectorMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('bounds');
        this._idh.doCheck('center');
        this._idh.doCheck('layers');
        this._idh.doCheck('legends');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxVectorMapComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxVectorMapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-vector-map',
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
    DxVectorMapComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxVectorMapComponent.propDecorators = {
        "background": [{ type: core_1.Input },],
        "bounds": [{ type: core_1.Input },],
        "center": [{ type: core_1.Input },],
        "controlBar": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "export": [{ type: core_1.Input },],
        "layers": [{ type: core_1.Input },],
        "legends": [{ type: core_1.Input },],
        "loadingIndicator": [{ type: core_1.Input },],
        "maxZoomFactor": [{ type: core_1.Input },],
        "panningEnabled": [{ type: core_1.Input },],
        "pathModified": [{ type: core_1.Input },],
        "projection": [{ type: core_1.Input },],
        "redrawOnResize": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "size": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "tooltip": [{ type: core_1.Input },],
        "touchEnabled": [{ type: core_1.Input },],
        "wheelEnabled": [{ type: core_1.Input },],
        "zoomFactor": [{ type: core_1.Input },],
        "zoomingEnabled": [{ type: core_1.Input },],
        "onCenterChanged": [{ type: core_1.Output },],
        "onClick": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onDrawn": [{ type: core_1.Output },],
        "onExported": [{ type: core_1.Output },],
        "onExporting": [{ type: core_1.Output },],
        "onFileSaving": [{ type: core_1.Output },],
        "onIncidentOccurred": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "onTooltipHidden": [{ type: core_1.Output },],
        "onTooltipShown": [{ type: core_1.Output },],
        "onZoomFactorChanged": [{ type: core_1.Output },],
        "backgroundChange": [{ type: core_1.Output },],
        "boundsChange": [{ type: core_1.Output },],
        "centerChange": [{ type: core_1.Output },],
        "controlBarChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "exportChange": [{ type: core_1.Output },],
        "layersChange": [{ type: core_1.Output },],
        "legendsChange": [{ type: core_1.Output },],
        "loadingIndicatorChange": [{ type: core_1.Output },],
        "maxZoomFactorChange": [{ type: core_1.Output },],
        "panningEnabledChange": [{ type: core_1.Output },],
        "pathModifiedChange": [{ type: core_1.Output },],
        "projectionChange": [{ type: core_1.Output },],
        "redrawOnResizeChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "sizeChange": [{ type: core_1.Output },],
        "themeChange": [{ type: core_1.Output },],
        "titleChange": [{ type: core_1.Output },],
        "tooltipChange": [{ type: core_1.Output },],
        "touchEnabledChange": [{ type: core_1.Output },],
        "wheelEnabledChange": [{ type: core_1.Output },],
        "zoomFactorChange": [{ type: core_1.Output },],
        "zoomingEnabledChange": [{ type: core_1.Output },],
        "layersChildren": [{ type: core_1.ContentChildren, args: [layer_dxi_2.DxiLayerComponent,] },],
        "legendsChildren": [{ type: core_1.ContentChildren, args: [legend_dxi_2.DxiLegendComponent,] },],
    };
    return DxVectorMapComponent;
}(component_1.DxComponent));
exports.DxVectorMapComponent = DxVectorMapComponent;
var DxVectorMapModule = (function () {
    function DxVectorMapModule() {
    }
    DxVectorMapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        background_1.DxoBackgroundModule,
                        control_bar_1.DxoControlBarModule,
                        export_1.DxoExportModule,
                        layer_dxi_1.DxiLayerModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        legend_dxi_1.DxiLegendModule,
                        border_1.DxoBorderModule,
                        margin_1.DxoMarginModule,
                        source_1.DxoSourceModule,
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
                        DxVectorMapComponent
                    ],
                    exports: [
                        DxVectorMapComponent,
                        background_1.DxoBackgroundModule,
                        control_bar_1.DxoControlBarModule,
                        export_1.DxoExportModule,
                        layer_dxi_1.DxiLayerModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        legend_dxi_1.DxiLegendModule,
                        border_1.DxoBorderModule,
                        margin_1.DxoMarginModule,
                        source_1.DxoSourceModule,
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
    return DxVectorMapModule;
}());
exports.DxVectorMapModule = DxVectorMapModule;
//# sourceMappingURL=vector-map.js.map
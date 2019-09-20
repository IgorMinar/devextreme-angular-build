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
var sankey_1 = require("devextreme/viz/sankey");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var adaptive_layout_1 = require("./nested/adaptive-layout");
var export_1 = require("./nested/export");
var label_1 = require("./nested/label");
var border_1 = require("./nested/border");
var font_1 = require("./nested/font");
var shadow_1 = require("./nested/shadow");
var link_1 = require("./nested/link");
var hover_style_1 = require("./nested/hover-style");
var hatching_1 = require("./nested/hatching");
var loading_indicator_1 = require("./nested/loading-indicator");
var margin_1 = require("./nested/margin");
var node_1 = require("./nested/node");
var size_1 = require("./nested/size");
var title_1 = require("./nested/title");
var subtitle_1 = require("./nested/subtitle");
var tooltip_1 = require("./nested/tooltip");
var format_1 = require("./nested/format");
/**
 * The Sankey is a widget that visualizes the flow magnitude between value sets. The values being connected are called nodes; the connections - links. The higher the flow magnitude, the wider the link is.
 */
var DxSankeyComponent = (function (_super) {
    __extends(DxSankeyComponent, _super);
    function DxSankeyComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { subscribe: 'linkClick', emit: 'onLinkClick' },
            { subscribe: 'linkHoverChanged', emit: 'onLinkHoverChanged' },
            { subscribe: 'nodeClick', emit: 'onNodeClick' },
            { subscribe: 'nodeHoverChanged', emit: 'onNodeHoverChanged' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'alignmentChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'hoverEnabledChange' },
            { emit: 'labelChange' },
            { emit: 'linkChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'nodeChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'sizeChange' },
            { emit: 'sortDataChange' },
            { emit: 'sourceFieldChange' },
            { emit: 'targetFieldChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'weightFieldChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxSankeyComponent.prototype, "adaptiveLayout", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "alignment", {
        get: /**
             * Aligns node columns vertically.
             */
        function () {
            return this._getOption('alignment');
        },
        set: function (value) {
            this._setOption('alignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "disabled", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "export", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "hoverEnabled", {
        get: /**
             * Specifies whether nodes and links change their style when they are hovered over or pressed.
             */
        function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "label", {
        get: /**
             * Configures sankey nodes' labels.
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
    Object.defineProperty(DxSankeyComponent.prototype, "link", {
        get: /**
             * Configures sankey links' appearance.
             */
        function () {
            return this._getOption('link');
        },
        set: function (value) {
            this._setOption('link', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "margin", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "node", {
        get: /**
             * Configures sankey nodes' appearance.
             */
        function () {
            return this._getOption('node');
        },
        set: function (value) {
            this._setOption('node', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "palette", {
        get: /**
             * Sets the palette to be used to colorize sankey nodes.
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
    Object.defineProperty(DxSankeyComponent.prototype, "paletteExtensionMode", {
        get: /**
             * Specifies how to extend the palette when it contains less colors than the number of sankey nodes.
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
    Object.defineProperty(DxSankeyComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "size", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "sortData", {
        get: /**
             * Specifies nodes' sorting order in their columns.
             */
        function () {
            return this._getOption('sortData');
        },
        set: function (value) {
            this._setOption('sortData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "sourceField", {
        get: /**
             * Specifies which data source field provides links' source nodes.
             */
        function () {
            return this._getOption('sourceField');
        },
        set: function (value) {
            this._setOption('sourceField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "targetField", {
        get: /**
             * Specifies which data source field provides links' target nodes.
             */
        function () {
            return this._getOption('targetField');
        },
        set: function (value) {
            this._setOption('targetField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "theme", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "title", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "tooltip", {
        get: /**
             * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
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
    Object.defineProperty(DxSankeyComponent.prototype, "weightField", {
        get: /**
             * Specifies which data source field provides links' weights.
             */
        function () {
            return this._getOption('weightField');
        },
        set: function (value) {
            this._setOption('weightField', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSankeyComponent.prototype._createInstance = function (element, options) {
        return new sankey_1.default(element, options);
    };
    DxSankeyComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSankeyComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('alignment', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
    };
    DxSankeyComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxSankeyComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('alignment');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxSankeyComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxSankeyComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-sankey',
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
    DxSankeyComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxSankeyComponent.propDecorators = {
        "adaptiveLayout": [{ type: core_1.Input },],
        "alignment": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "export": [{ type: core_1.Input },],
        "hoverEnabled": [{ type: core_1.Input },],
        "label": [{ type: core_1.Input },],
        "link": [{ type: core_1.Input },],
        "loadingIndicator": [{ type: core_1.Input },],
        "margin": [{ type: core_1.Input },],
        "node": [{ type: core_1.Input },],
        "palette": [{ type: core_1.Input },],
        "paletteExtensionMode": [{ type: core_1.Input },],
        "pathModified": [{ type: core_1.Input },],
        "redrawOnResize": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "size": [{ type: core_1.Input },],
        "sortData": [{ type: core_1.Input },],
        "sourceField": [{ type: core_1.Input },],
        "targetField": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "tooltip": [{ type: core_1.Input },],
        "weightField": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onDrawn": [{ type: core_1.Output },],
        "onExported": [{ type: core_1.Output },],
        "onExporting": [{ type: core_1.Output },],
        "onFileSaving": [{ type: core_1.Output },],
        "onIncidentOccurred": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onLinkClick": [{ type: core_1.Output },],
        "onLinkHoverChanged": [{ type: core_1.Output },],
        "onNodeClick": [{ type: core_1.Output },],
        "onNodeHoverChanged": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "adaptiveLayoutChange": [{ type: core_1.Output },],
        "alignmentChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "exportChange": [{ type: core_1.Output },],
        "hoverEnabledChange": [{ type: core_1.Output },],
        "labelChange": [{ type: core_1.Output },],
        "linkChange": [{ type: core_1.Output },],
        "loadingIndicatorChange": [{ type: core_1.Output },],
        "marginChange": [{ type: core_1.Output },],
        "nodeChange": [{ type: core_1.Output },],
        "paletteChange": [{ type: core_1.Output },],
        "paletteExtensionModeChange": [{ type: core_1.Output },],
        "pathModifiedChange": [{ type: core_1.Output },],
        "redrawOnResizeChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "sizeChange": [{ type: core_1.Output },],
        "sortDataChange": [{ type: core_1.Output },],
        "sourceFieldChange": [{ type: core_1.Output },],
        "targetFieldChange": [{ type: core_1.Output },],
        "themeChange": [{ type: core_1.Output },],
        "titleChange": [{ type: core_1.Output },],
        "tooltipChange": [{ type: core_1.Output },],
        "weightFieldChange": [{ type: core_1.Output },],
    };
    return DxSankeyComponent;
}(component_1.DxComponent));
exports.DxSankeyComponent = DxSankeyComponent;
var DxSankeyModule = (function () {
    function DxSankeyModule() {
    }
    DxSankeyModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        export_1.DxoExportModule,
                        label_1.DxoLabelModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        shadow_1.DxoShadowModule,
                        link_1.DxoLinkModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        margin_1.DxoMarginModule,
                        node_1.DxoNodeModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        format_1.DxoFormatModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxSankeyComponent
                    ],
                    exports: [
                        DxSankeyComponent,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        export_1.DxoExportModule,
                        label_1.DxoLabelModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        shadow_1.DxoShadowModule,
                        link_1.DxoLinkModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        margin_1.DxoMarginModule,
                        node_1.DxoNodeModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        format_1.DxoFormatModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxSankeyModule;
}());
exports.DxSankeyModule = DxSankeyModule;
//# sourceMappingURL=sankey.js.map
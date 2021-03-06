import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxSankey from 'devextreme/viz/sankey';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAdaptiveLayoutModule, DxoExportModule, DxoLabelModule, DxoBorderModule, DxoFontModule, DxoShadowModule, DxoLinkModule, DxoHoverStyleModule, DxoHatchingModule, DxoLoadingIndicatorModule, DxoMarginModule, DxoNodeModule, DxoSizeModule, DxoTitleModule, DxoSubtitleModule, DxoTooltipModule, DxoFormatModule } from 'devextreme-angular/ui/nested';

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
 * The Sankey is a widget that visualizes the flow magnitude between value sets. The values being connected are called nodes; the connections - links. The higher the flow magnitude, the wider the link is.
 */
var DxSankeyComponent = /** @class */ (function (_super) {
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
    Object.defineProperty(DxSankeyComponent.prototype, "alignment", {
        /**
         * Aligns node columns vertically.
         */
        get: function () {
            return this._getOption('alignment');
        },
        set: function (value) {
            this._setOption('alignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "disabled", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "export", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "hoverEnabled", {
        /**
         * Specifies whether nodes and links change their style when they are hovered over or pressed.
         */
        get: function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "label", {
        /**
         * Configures sankey nodes' labels.
         */
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "link", {
        /**
         * Configures sankey links' appearance.
         */
        get: function () {
            return this._getOption('link');
        },
        set: function (value) {
            this._setOption('link', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "margin", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "node", {
        /**
         * Configures sankey nodes' appearance.
         */
        get: function () {
            return this._getOption('node');
        },
        set: function (value) {
            this._setOption('node', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "palette", {
        /**
         * Sets the palette to be used to colorize sankey nodes.
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
    Object.defineProperty(DxSankeyComponent.prototype, "paletteExtensionMode", {
        /**
         * Specifies how to extend the palette when it contains less colors than the number of sankey nodes.
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
    Object.defineProperty(DxSankeyComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "size", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "sortData", {
        /**
         * Specifies nodes' sorting order in their columns.
         */
        get: function () {
            return this._getOption('sortData');
        },
        set: function (value) {
            this._setOption('sortData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "sourceField", {
        /**
         * Specifies which data source field provides links' source nodes.
         */
        get: function () {
            return this._getOption('sourceField');
        },
        set: function (value) {
            this._setOption('sourceField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "targetField", {
        /**
         * Specifies which data source field provides links' target nodes.
         */
        get: function () {
            return this._getOption('targetField');
        },
        set: function (value) {
            this._setOption('targetField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "theme", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "title", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "tooltip", {
        /**
         * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
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
    Object.defineProperty(DxSankeyComponent.prototype, "weightField", {
        /**
         * Specifies which data source field provides links' weights.
         */
        get: function () {
            return this._getOption('weightField');
        },
        set: function (value) {
            this._setOption('weightField', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSankeyComponent.prototype._createInstance = function (element, options) {
        return new DxSankey(element, options);
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
    DxSankeyComponent.ctorParameters = function () { return [
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
    ], DxSankeyComponent.prototype, "adaptiveLayout", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "alignment", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "hoverEnabled", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "label", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "link", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "loadingIndicator", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "margin", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "node", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "palette", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "paletteExtensionMode", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "redrawOnResize", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "sortData", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "sourceField", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "targetField", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxSankeyComponent.prototype, "weightField", null);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onLinkClick", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onLinkHoverChanged", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onNodeClick", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onNodeHoverChanged", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "adaptiveLayoutChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "alignmentChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "hoverEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "labelChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "linkChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "marginChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "nodeChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "paletteChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "paletteExtensionModeChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "sortDataChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "sourceFieldChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "targetFieldChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxSankeyComponent.prototype, "weightFieldChange", void 0);
    DxSankeyComponent = __decorate([
        Component({
            selector: 'dx-sankey',
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
    ], DxSankeyComponent);
    return DxSankeyComponent;
}(DxComponent));
var DxSankeyModule = /** @class */ (function () {
    function DxSankeyModule() {
    }
    DxSankeyModule = __decorate([
        NgModule({
            imports: [
                DxoAdaptiveLayoutModule,
                DxoExportModule,
                DxoLabelModule,
                DxoBorderModule,
                DxoFontModule,
                DxoShadowModule,
                DxoLinkModule,
                DxoHoverStyleModule,
                DxoHatchingModule,
                DxoLoadingIndicatorModule,
                DxoMarginModule,
                DxoNodeModule,
                DxoSizeModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxoTooltipModule,
                DxoFormatModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxSankeyComponent
            ],
            exports: [
                DxSankeyComponent,
                DxoAdaptiveLayoutModule,
                DxoExportModule,
                DxoLabelModule,
                DxoBorderModule,
                DxoFontModule,
                DxoShadowModule,
                DxoLinkModule,
                DxoHoverStyleModule,
                DxoHatchingModule,
                DxoLoadingIndicatorModule,
                DxoMarginModule,
                DxoNodeModule,
                DxoSizeModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxoTooltipModule,
                DxoFormatModule,
                DxTemplateModule
            ]
        })
    ], DxSankeyModule);
    return DxSankeyModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxSankeyComponent, DxSankeyModule };
//# sourceMappingURL=devextreme-angular-ui-sankey.js.map

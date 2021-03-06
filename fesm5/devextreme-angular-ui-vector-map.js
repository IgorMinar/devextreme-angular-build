import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxVectorMap from 'devextreme/viz/vector_map';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiLayerComponent, DxiLegendComponent, DxoBackgroundModule, DxoControlBarModule, DxoExportModule, DxiLayerModule, DxoLabelModule, DxoFontModule, DxiLegendModule, DxoBorderModule, DxoMarginModule, DxoSourceModule, DxoTitleModule, DxoSubtitleModule, DxoLoadingIndicatorModule, DxoSizeModule, DxoTooltipModule, DxoShadowModule } from 'devextreme-angular/ui/nested';

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
 * The VectorMap is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
 */
var DxVectorMapComponent = /** @class */ (function (_super) {
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
        /**
         * Specifies the options for the map background.
         */
        get: function () {
            return this._getOption('background');
        },
        set: function (value) {
            this._setOption('background', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "bounds", {
        /**
         * Specifies the positioning of a map in geographical coordinates.
         */
        get: function () {
            return this._getOption('bounds');
        },
        set: function (value) {
            this._setOption('bounds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "center", {
        /**
         * Specifies the geographical coordinates of the center for a map.
         */
        get: function () {
            return this._getOption('center');
        },
        set: function (value) {
            this._setOption('center', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "controlBar", {
        /**
         * Configures the control bar.
         */
        get: function () {
            return this._getOption('controlBar');
        },
        set: function (value) {
            this._setOption('controlBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "disabled", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "export", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "layers", {
        /**
         * Specifies options for VectorMap widget layers.
         */
        get: function () {
            return this._getOption('layers');
        },
        set: function (value) {
            this._setOption('layers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "legends", {
        /**
         * Configures map legends.
         */
        get: function () {
            return this._getOption('legends');
        },
        set: function (value) {
            this._setOption('legends', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "maxZoomFactor", {
        /**
         * Specifies a map's maximum zoom factor.
         */
        get: function () {
            return this._getOption('maxZoomFactor');
        },
        set: function (value) {
            this._setOption('maxZoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "panningEnabled", {
        /**
         * Disables the panning capability.
         */
        get: function () {
            return this._getOption('panningEnabled');
        },
        set: function (value) {
            this._setOption('panningEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "projection", {
        /**
         * Specifies the map projection.
         */
        get: function () {
            return this._getOption('projection');
        },
        set: function (value) {
            this._setOption('projection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "size", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "theme", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "title", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "touchEnabled", {
        /**
         * Specifies whether the map should respond to touch gestures.
         */
        get: function () {
            return this._getOption('touchEnabled');
        },
        set: function (value) {
            this._setOption('touchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "wheelEnabled", {
        /**
         * Specifies whether or not the map should respond when a user rolls the mouse wheel.
         */
        get: function () {
            return this._getOption('wheelEnabled');
        },
        set: function (value) {
            this._setOption('wheelEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomFactor", {
        /**
         * Specifies a number that is used to zoom a map initially.
         */
        get: function () {
            return this._getOption('zoomFactor');
        },
        set: function (value) {
            this._setOption('zoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomingEnabled", {
        /**
         * Disables the zooming capability.
         */
        get: function () {
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
        return new DxVectorMap(element, options);
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
    DxVectorMapComponent.ctorParameters = function () { return [
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
    ], DxVectorMapComponent.prototype, "background", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "bounds", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "center", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "controlBar", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "layers", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "legends", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "loadingIndicator", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "maxZoomFactor", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "panningEnabled", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "projection", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "redrawOnResize", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "touchEnabled", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "wheelEnabled", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "zoomFactor", null);
    __decorate([
        Input()
    ], DxVectorMapComponent.prototype, "zoomingEnabled", null);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onCenterChanged", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onClick", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "onZoomFactorChanged", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "backgroundChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "boundsChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "centerChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "controlBarChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "layersChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "legendsChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "maxZoomFactorChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "panningEnabledChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "projectionChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "touchEnabledChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "wheelEnabledChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "zoomFactorChange", void 0);
    __decorate([
        Output()
    ], DxVectorMapComponent.prototype, "zoomingEnabledChange", void 0);
    __decorate([
        ContentChildren(DxiLayerComponent)
    ], DxVectorMapComponent.prototype, "layersChildren", null);
    __decorate([
        ContentChildren(DxiLegendComponent)
    ], DxVectorMapComponent.prototype, "legendsChildren", null);
    DxVectorMapComponent = __decorate([
        Component({
            selector: 'dx-vector-map',
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
    ], DxVectorMapComponent);
    return DxVectorMapComponent;
}(DxComponent));
var DxVectorMapModule = /** @class */ (function () {
    function DxVectorMapModule() {
    }
    DxVectorMapModule = __decorate([
        NgModule({
            imports: [
                DxoBackgroundModule,
                DxoControlBarModule,
                DxoExportModule,
                DxiLayerModule,
                DxoLabelModule,
                DxoFontModule,
                DxiLegendModule,
                DxoBorderModule,
                DxoMarginModule,
                DxoSourceModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxoLoadingIndicatorModule,
                DxoSizeModule,
                DxoTooltipModule,
                DxoShadowModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxVectorMapComponent
            ],
            exports: [
                DxVectorMapComponent,
                DxoBackgroundModule,
                DxoControlBarModule,
                DxoExportModule,
                DxiLayerModule,
                DxoLabelModule,
                DxoFontModule,
                DxiLegendModule,
                DxoBorderModule,
                DxoMarginModule,
                DxoSourceModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxoLoadingIndicatorModule,
                DxoSizeModule,
                DxoTooltipModule,
                DxoShadowModule,
                DxTemplateModule
            ]
        })
    ], DxVectorMapModule);
    return DxVectorMapModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxVectorMapComponent, DxVectorMapModule };
//# sourceMappingURL=devextreme-angular-ui-vector-map.js.map

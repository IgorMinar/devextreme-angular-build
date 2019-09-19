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
import DxVectorMap from 'devextreme/viz/vector_map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoBackgroundModule } from './nested/background';
import { DxoControlBarModule } from './nested/control-bar';
import { DxoExportModule } from './nested/export';
import { DxiLayerModule } from './nested/layer-dxi';
import { DxoLabelModule } from './nested/label';
import { DxoFontModule } from './nested/font';
import { DxiLegendModule } from './nested/legend-dxi';
import { DxoBorderModule } from './nested/border';
import { DxoMarginModule } from './nested/margin';
import { DxoSourceModule } from './nested/source';
import { DxoTitleModule } from './nested/title';
import { DxoSubtitleModule } from './nested/subtitle';
import { DxoLoadingIndicatorModule } from './nested/loading-indicator';
import { DxoSizeModule } from './nested/size';
import { DxoTooltipModule } from './nested/tooltip';
import { DxoShadowModule } from './nested/shadow';
import { DxiLayerComponent } from './nested/layer-dxi';
import { DxiLegendComponent } from './nested/legend-dxi';
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
    DxVectorMapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-vector-map',
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
    DxVectorMapComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxVectorMapComponent.propDecorators = {
        "background": [{ type: Input },],
        "bounds": [{ type: Input },],
        "center": [{ type: Input },],
        "controlBar": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "export": [{ type: Input },],
        "layers": [{ type: Input },],
        "legends": [{ type: Input },],
        "loadingIndicator": [{ type: Input },],
        "maxZoomFactor": [{ type: Input },],
        "panningEnabled": [{ type: Input },],
        "pathModified": [{ type: Input },],
        "projection": [{ type: Input },],
        "redrawOnResize": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "size": [{ type: Input },],
        "theme": [{ type: Input },],
        "title": [{ type: Input },],
        "tooltip": [{ type: Input },],
        "touchEnabled": [{ type: Input },],
        "wheelEnabled": [{ type: Input },],
        "zoomFactor": [{ type: Input },],
        "zoomingEnabled": [{ type: Input },],
        "onCenterChanged": [{ type: Output },],
        "onClick": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onDrawn": [{ type: Output },],
        "onExported": [{ type: Output },],
        "onExporting": [{ type: Output },],
        "onFileSaving": [{ type: Output },],
        "onIncidentOccurred": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onSelectionChanged": [{ type: Output },],
        "onTooltipHidden": [{ type: Output },],
        "onTooltipShown": [{ type: Output },],
        "onZoomFactorChanged": [{ type: Output },],
        "backgroundChange": [{ type: Output },],
        "boundsChange": [{ type: Output },],
        "centerChange": [{ type: Output },],
        "controlBarChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "exportChange": [{ type: Output },],
        "layersChange": [{ type: Output },],
        "legendsChange": [{ type: Output },],
        "loadingIndicatorChange": [{ type: Output },],
        "maxZoomFactorChange": [{ type: Output },],
        "panningEnabledChange": [{ type: Output },],
        "pathModifiedChange": [{ type: Output },],
        "projectionChange": [{ type: Output },],
        "redrawOnResizeChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "sizeChange": [{ type: Output },],
        "themeChange": [{ type: Output },],
        "titleChange": [{ type: Output },],
        "tooltipChange": [{ type: Output },],
        "touchEnabledChange": [{ type: Output },],
        "wheelEnabledChange": [{ type: Output },],
        "zoomFactorChange": [{ type: Output },],
        "zoomingEnabledChange": [{ type: Output },],
        "layersChildren": [{ type: ContentChildren, args: [DxiLayerComponent,] },],
        "legendsChildren": [{ type: ContentChildren, args: [DxiLegendComponent,] },],
    };
    return DxVectorMapComponent;
}(DxComponent));
export { DxVectorMapComponent };
var DxVectorMapModule = (function () {
    function DxVectorMapModule() {
    }
    DxVectorMapModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxVectorMapModule;
}());
export { DxVectorMapModule };
//# sourceMappingURL=vector-map.js.map
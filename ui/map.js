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
import DxMap from 'devextreme/ui/map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiCenterModule } from './nested/center-dxi';
import { DxoKeyModule } from './nested/key';
import { DxiMarkerModule } from './nested/marker-dxi';
import { DxiLocationModule } from './nested/location-dxi';
import { DxoTooltipModule } from './nested/tooltip';
import { DxiRouteModule } from './nested/route-dxi';
import { DxiCenterComponent } from './nested/center-dxi';
import { DxiMarkerComponent } from './nested/marker-dxi';
import { DxiRouteComponent } from './nested/route-dxi';
/**
 * The Map is an interactive widget that displays a geographic map with markers and routes.
 */
var DxMapComponent = (function (_super) {
    __extends(DxMapComponent, _super);
    function DxMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'markerAdded', emit: 'onMarkerAdded' },
            { subscribe: 'markerRemoved', emit: 'onMarkerRemoved' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'ready', emit: 'onReady' },
            { subscribe: 'routeAdded', emit: 'onRouteAdded' },
            { subscribe: 'routeRemoved', emit: 'onRouteRemoved' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'autoAdjustChange' },
            { emit: 'centerChange' },
            { emit: 'controlsChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'keyChange' },
            { emit: 'markerIconSrcChange' },
            { emit: 'markersChange' },
            { emit: 'providerChange' },
            { emit: 'routesChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'typeChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'zoomChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxMapComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "autoAdjust", {
        get: /**
             * Specifies whether the widget automatically adjusts center and zoom option values when adding a new marker or route, or if a new widget contains markers or routes by default.
             */
        function () {
            return this._getOption('autoAdjust');
        },
        set: function (value) {
            this._setOption('autoAdjust', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "center", {
        get: /**
             * An object, a string, or an array specifying which part of the map is displayed at the widget's center using coordinates. The widget can change this value if autoAdjust is enabled.
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
    Object.defineProperty(DxMapComponent.prototype, "controls", {
        get: /**
             * Specifies whether or not map widget controls are available.
             */
        function () {
            return this._getOption('controls');
        },
        set: function (value) {
            this._setOption('controls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxMapComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxMapComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "key", {
        get: /**
             * A key used to authenticate the application within the required map provider.
             */
        function () {
            return this._getOption('key');
        },
        set: function (value) {
            this._setOption('key', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "markerIconSrc", {
        get: /**
             * A URL pointing to the custom icon to be used for map markers.
             */
        function () {
            return this._getOption('markerIconSrc');
        },
        set: function (value) {
            this._setOption('markerIconSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "markers", {
        get: /**
             * An array of markers displayed on a map.
             */
        function () {
            return this._getOption('markers');
        },
        set: function (value) {
            this._setOption('markers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "provider", {
        get: /**
             * The name of the current map data provider.
             */
        function () {
            return this._getOption('provider');
        },
        set: function (value) {
            this._setOption('provider', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "routes", {
        get: /**
             * An array of routes shown on the map.
             */
        function () {
            return this._getOption('routes');
        },
        set: function (value) {
            this._setOption('routes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxMapComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "type", {
        get: /**
             * The type of a map to display.
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
    Object.defineProperty(DxMapComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "zoom", {
        get: /**
             * The map's zoom level. The widget can change this value if autoAdjust is enabled.
             */
        function () {
            return this._getOption('zoom');
        },
        set: function (value) {
            this._setOption('zoom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "centerChildren", {
        get: function () {
            return this._getOption('center');
        },
        set: function (value) {
            this.setChildren('center', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "markersChildren", {
        get: function () {
            return this._getOption('markers');
        },
        set: function (value) {
            this.setChildren('markers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "routesChildren", {
        get: function () {
            return this._getOption('routes');
        },
        set: function (value) {
            this.setChildren('routes', value);
        },
        enumerable: true,
        configurable: true
    });
    DxMapComponent.prototype._createInstance = function (element, options) {
        return new DxMap(element, options);
    };
    DxMapComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxMapComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('center', changes);
        this.setupChanges('markers', changes);
        this.setupChanges('routes', changes);
    };
    DxMapComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('center');
        this._idh.doCheck('markers');
        this._idh.doCheck('routes');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxMapComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxMapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-map',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxMapComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxMapComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "autoAdjust": [{ type: Input },],
        "center": [{ type: Input },],
        "controls": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "key": [{ type: Input },],
        "markerIconSrc": [{ type: Input },],
        "markers": [{ type: Input },],
        "provider": [{ type: Input },],
        "routes": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "type": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "zoom": [{ type: Input },],
        "onClick": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onMarkerAdded": [{ type: Output },],
        "onMarkerRemoved": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onReady": [{ type: Output },],
        "onRouteAdded": [{ type: Output },],
        "onRouteRemoved": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "autoAdjustChange": [{ type: Output },],
        "centerChange": [{ type: Output },],
        "controlsChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "keyChange": [{ type: Output },],
        "markerIconSrcChange": [{ type: Output },],
        "markersChange": [{ type: Output },],
        "providerChange": [{ type: Output },],
        "routesChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "typeChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "zoomChange": [{ type: Output },],
        "centerChildren": [{ type: ContentChildren, args: [DxiCenterComponent,] },],
        "markersChildren": [{ type: ContentChildren, args: [DxiMarkerComponent,] },],
        "routesChildren": [{ type: ContentChildren, args: [DxiRouteComponent,] },],
    };
    return DxMapComponent;
}(DxComponent));
export { DxMapComponent };
var DxMapModule = (function () {
    function DxMapModule() {
    }
    DxMapModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DxiCenterModule,
                        DxoKeyModule,
                        DxiMarkerModule,
                        DxiLocationModule,
                        DxoTooltipModule,
                        DxiRouteModule,
                        DxIntegrationModule,
                        DxTemplateModule,
                        BrowserTransferStateModule
                    ],
                    declarations: [
                        DxMapComponent
                    ],
                    exports: [
                        DxMapComponent,
                        DxiCenterModule,
                        DxoKeyModule,
                        DxiMarkerModule,
                        DxiLocationModule,
                        DxoTooltipModule,
                        DxiRouteModule,
                        DxTemplateModule
                    ]
                },] },
    ];
    return DxMapModule;
}());
export { DxMapModule };
//# sourceMappingURL=map.js.map
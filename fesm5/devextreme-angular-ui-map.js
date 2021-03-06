import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxMap from 'devextreme/ui/map';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiCenterComponent, DxiMarkerComponent, DxiRouteComponent, DxiCenterModule, DxoKeyModule, DxiMarkerModule, DxiLocationModule, DxoTooltipModule, DxiRouteModule } from 'devextreme-angular/ui/nested';

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
 * The Map is an interactive widget that displays a geographic map with markers and routes.
 */
var DxMapComponent = /** @class */ (function (_super) {
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
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "activeStateEnabled", {
        /**
         * Specifies whether or not the widget changes its state when interacting with a user.
         */
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "autoAdjust", {
        /**
         * Specifies whether the widget automatically adjusts center and zoom option values when adding a new marker or route, or if a new widget contains markers or routes by default.
         */
        get: function () {
            return this._getOption('autoAdjust');
        },
        set: function (value) {
            this._setOption('autoAdjust', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "center", {
        /**
         * An object, a string, or an array specifying which part of the map is displayed at the widget's center using coordinates. The widget can change this value if autoAdjust is enabled.
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
    Object.defineProperty(DxMapComponent.prototype, "controls", {
        /**
         * Specifies whether or not map widget controls are available.
         */
        get: function () {
            return this._getOption('controls');
        },
        set: function (value) {
            this._setOption('controls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxMapComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxMapComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "key", {
        /**
         * A key used to authenticate the application within the required map provider.
         */
        get: function () {
            return this._getOption('key');
        },
        set: function (value) {
            this._setOption('key', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "markerIconSrc", {
        /**
         * A URL pointing to the custom icon to be used for map markers.
         */
        get: function () {
            return this._getOption('markerIconSrc');
        },
        set: function (value) {
            this._setOption('markerIconSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "markers", {
        /**
         * An array of markers displayed on a map.
         */
        get: function () {
            return this._getOption('markers');
        },
        set: function (value) {
            this._setOption('markers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "provider", {
        /**
         * The name of the current map data provider.
         */
        get: function () {
            return this._getOption('provider');
        },
        set: function (value) {
            this._setOption('provider', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "routes", {
        /**
         * An array of routes shown on the map.
         */
        get: function () {
            return this._getOption('routes');
        },
        set: function (value) {
            this._setOption('routes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxMapComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "type", {
        /**
         * The type of a map to display.
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
    Object.defineProperty(DxMapComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "zoom", {
        /**
         * The map's zoom level. The widget can change this value if autoAdjust is enabled.
         */
        get: function () {
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
    DxMapComponent.ctorParameters = function () { return [
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
    ], DxMapComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "autoAdjust", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "center", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "controls", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "key", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "markerIconSrc", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "markers", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "provider", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "routes", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "type", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "width", null);
    __decorate([
        Input()
    ], DxMapComponent.prototype, "zoom", null);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "onClick", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "onMarkerAdded", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "onMarkerRemoved", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "onReady", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "onRouteAdded", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "onRouteRemoved", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "autoAdjustChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "centerChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "controlsChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "keyChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "markerIconSrcChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "markersChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "providerChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "routesChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "typeChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxMapComponent.prototype, "zoomChange", void 0);
    __decorate([
        ContentChildren(DxiCenterComponent)
    ], DxMapComponent.prototype, "centerChildren", null);
    __decorate([
        ContentChildren(DxiMarkerComponent)
    ], DxMapComponent.prototype, "markersChildren", null);
    __decorate([
        ContentChildren(DxiRouteComponent)
    ], DxMapComponent.prototype, "routesChildren", null);
    DxMapComponent = __decorate([
        Component({
            selector: 'dx-map',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxMapComponent);
    return DxMapComponent;
}(DxComponent));
var DxMapModule = /** @class */ (function () {
    function DxMapModule() {
    }
    DxMapModule = __decorate([
        NgModule({
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
        })
    ], DxMapModule);
    return DxMapModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxMapComponent, DxMapModule };
//# sourceMappingURL=devextreme-angular-ui-map.js.map

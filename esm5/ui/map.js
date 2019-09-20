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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdWkvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sS0FBSyxNQUFNLG1CQUFtQixDQUFDO0FBR3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFB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TUFBTTs4QkFLTixNQUFNO3dDQUtOLE1BQU07a0NBS04sTUFBTTttQ0FLTixNQUFNO2lDQUtOLE1BQU07cUNBS04sTUFBTTttQ0FLTixNQUFNOytCQUtOLE1BQU07a0NBS04sTUFBTTtnQ0FLTixNQUFNOytCQUtOLE1BQU07bUNBS04sZUFBZSxTQUFDLGtCQUFrQjtvQ0FRbEMsZUFBZSxTQUFDLGtCQUFrQjttQ0FRbEMsZUFBZSxTQUFDLGlCQUFpQjs7eUJBaGhCdEM7RUF1Rm9DLFdBQVc7U0FBbEMsY0FBYzs7Ozs7Z0JBeWhCMUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsMEJBQTBCO3FCQUMzQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxnQkFBZ0I7cUJBQ2pCO2lCQUNGOztzQkF6b0JEOztTQTBvQmEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgRHhNYXAgZnJvbSAnZGV2ZXh0cmVtZS91aS9tYXAnO1xyXG5cclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeGlDZW50ZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jZW50ZXItZHhpJztcclxuaW1wb3J0IHsgRHhvS2V5TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQva2V5JztcclxuaW1wb3J0IHsgRHhpTWFya2VyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWFya2VyLWR4aSc7XHJcbmltcG9ydCB7IER4aUxvY2F0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbG9jYXRpb24tZHhpJztcclxuaW1wb3J0IHsgRHhvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBEeGlSb3V0ZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3JvdXRlLWR4aSc7XHJcblxyXG5pbXBvcnQgeyBEeGlDZW50ZXJDb21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9jZW50ZXItZHhpJztcclxuaW1wb3J0IHsgRHhpTWFya2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvbWFya2VyLWR4aSc7XHJcbmltcG9ydCB7IER4aVJvdXRlQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvcm91dGUtZHhpJztcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWFwIGlzIGFuIGludGVyYWN0aXZlIHdpZGdldCB0aGF0IGRpc3BsYXlzIGEgZ2VvZ3JhcGhpYyBtYXAgd2l0aCBtYXJrZXJzIGFuZCByb3V0ZXMuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtbWFwJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhNYXBDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeE1hcDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNob3J0Y3V0IGtleSB0aGF0IHNldHMgZm9jdXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY2Nlc3NLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY2Nlc3NLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBhY2Nlc3NLZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWNjZXNzS2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gaW50ZXJhY3Rpbmcgd2l0aCBhIHVzZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWN0aXZlU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgYXV0b21hdGljYWxseSBhZGp1c3RzIGNlbnRlciBhbmQgem9vbSBvcHRpb24gdmFsdWVzIHdoZW4gYWRkaW5nIGEgbmV3IG1hcmtlciBvciByb3V0ZSwgb3IgaWYgYSBuZXcgd2lkZ2V0IGNvbnRhaW5zIG1hcmtlcnMgb3Igcm91dGVzIGJ5IGRlZmF1bHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXV0b0FkanVzdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhdXRvQWRqdXN0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXV0b0FkanVzdCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXV0b0FkanVzdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvYmplY3QsIGEgc3RyaW5nLCBvciBhbiBhcnJheSBzcGVjaWZ5aW5nIHdoaWNoIHBhcnQgb2YgdGhlIG1hcCBpcyBkaXNwbGF5ZWQgYXQgdGhlIHdpZGdldCdzIGNlbnRlciB1c2luZyBjb29yZGluYXRlcy4gVGhlIHdpZGdldCBjYW4gY2hhbmdlIHRoaXMgdmFsdWUgaWYgYXV0b0FkanVzdCBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNlbnRlcigpOiBzdHJpbmcgfCBBcnJheTxudW1iZXIgfCB7IGxhdD86IG51bWJlciwgbG5nPzogbnVtYmVyIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjZW50ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBjZW50ZXIodmFsdWU6IHN0cmluZyB8IEFycmF5PG51bWJlciB8IHsgbGF0PzogbnVtYmVyLCBsbmc/OiBudW1iZXIgfT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NlbnRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgbWFwIHdpZGdldCBjb250cm9scyBhcmUgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbnRyb2xzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbnRyb2xzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29udHJvbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbnRyb2xzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgcmVzcG9uZHMgdG8gdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjYW4gYmUgZm9jdXNlZCB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3MgaGVpZ2h0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvdmVyU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEga2V5IHVzZWQgdG8gYXV0aGVudGljYXRlIHRoZSBhcHBsaWNhdGlvbiB3aXRoaW4gdGhlIHJlcXVpcmVkIG1hcCBwcm92aWRlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBrZXkoKTogc3RyaW5nIHwgeyBiaW5nPzogc3RyaW5nLCBnb29nbGU/OiBzdHJpbmcsIGdvb2dsZVN0YXRpYz86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdrZXknKTtcclxuICAgIH1cclxuICAgIHNldCBrZXkodmFsdWU6IHN0cmluZyB8IHsgYmluZz86IHN0cmluZywgZ29vZ2xlPzogc3RyaW5nLCBnb29nbGVTdGF0aWM/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigna2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgVVJMIHBvaW50aW5nIHRvIHRoZSBjdXN0b20gaWNvbiB0byBiZSB1c2VkIGZvciBtYXAgbWFya2Vycy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXJrZXJJY29uU3JjKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWFya2VySWNvblNyYycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hcmtlckljb25TcmModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWFya2VySWNvblNyYycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBtYXJrZXJzIGRpc3BsYXllZCBvbiBhIG1hcC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXJrZXJzKCk6IEFycmF5PGFueSB8IHsgaWNvblNyYz86IHN0cmluZywgbG9jYXRpb24/OiBzdHJpbmcgfCBBcnJheTxudW1iZXIgfCB7IGxhdD86IG51bWJlciwgbG5nPzogbnVtYmVyIH0+LCBvbkNsaWNrPzogRnVuY3Rpb24sIHRvb2x0aXA/OiBzdHJpbmcgfCB7IGlzU2hvd24/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0gfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21hcmtlcnMnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXJrZXJzKHZhbHVlOiBBcnJheTxhbnkgfCB7IGljb25TcmM/OiBzdHJpbmcsIGxvY2F0aW9uPzogc3RyaW5nIHwgQXJyYXk8bnVtYmVyIHwgeyBsYXQ/OiBudW1iZXIsIGxuZz86IG51bWJlciB9Piwgb25DbGljaz86IEZ1bmN0aW9uLCB0b29sdGlwPzogc3RyaW5nIHwgeyBpc1Nob3duPzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9IH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXJrZXJzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IG1hcCBkYXRhIHByb3ZpZGVyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHByb3ZpZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncHJvdmlkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBwcm92aWRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwcm92aWRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiByb3V0ZXMgc2hvd24gb24gdGhlIG1hcC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb3V0ZXMoKTogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgbG9jYXRpb25zPzogQXJyYXk8YW55IHwgeyBsYXQ/OiBudW1iZXIsIGxuZz86IG51bWJlciB9PiwgbW9kZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgd2VpZ2h0PzogbnVtYmVyIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyb3V0ZXMnKTtcclxuICAgIH1cclxuICAgIHNldCByb3V0ZXModmFsdWU6IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGxvY2F0aW9ucz86IEFycmF5PGFueSB8IHsgbGF0PzogbnVtYmVyLCBsbmc/OiBudW1iZXIgfT4sIG1vZGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHdlaWdodD86IG51bWJlciB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm91dGVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdGhlIGVsZW1lbnQgd2hlbiB0aGUgVGFiIGtleSBpcyB1c2VkIGZvciBuYXZpZ2F0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGFiSW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCB0YWJJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0YWJJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdHlwZSBvZiBhIG1hcCB0byBkaXNwbGF5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0eXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0eXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWFwJ3Mgem9vbSBsZXZlbC4gVGhlIHdpZGdldCBjYW4gY2hhbmdlIHRoaXMgdmFsdWUgaWYgYXV0b0FkanVzdCBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHpvb20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd6b29tJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgem9vbSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd6b29tJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW55IGxvY2F0aW9uIG9uIHRoZSBtYXAgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIG1hcmtlciBpcyBjcmVhdGVkIG9uIHRoZSBtYXAuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk1hcmtlckFkZGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgbWFya2VyIGlzIHJlbW92ZWQgZnJvbSB0aGUgbWFwLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25NYXJrZXJSZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgbWFwIGlzIHJlYWR5LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25SZWFkeTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHJvdXRlIGlzIGNyZWF0ZWQgb24gdGhlIG1hcC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm91dGVBZGRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHJvdXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgbWFwLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3V0ZVJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWNjZXNzS2V5Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWNjZXNzS2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYXV0b0FkanVzdENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGF1dG9BZGp1c3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNlbnRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNlbnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IEFycmF5PG51bWJlciB8IHsgbGF0PzogbnVtYmVyLCBsbmc/OiBudW1iZXIgfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29udHJvbHNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb250cm9sc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZWxlbWVudEF0dHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbGVtZW50QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoZWlnaHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoZWlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBrZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBrZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7IGJpbmc/OiBzdHJpbmcsIGdvb2dsZT86IHN0cmluZywgZ29vZ2xlU3RhdGljPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWFya2VySWNvblNyY0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1hcmtlckljb25TcmNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWFya2Vyc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1hcmtlcnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGljb25TcmM/OiBzdHJpbmcsIGxvY2F0aW9uPzogc3RyaW5nIHwgQXJyYXk8bnVtYmVyIHwgeyBsYXQ/OiBudW1iZXIsIGxuZz86IG51bWJlciB9Piwgb25DbGljaz86IEZ1bmN0aW9uLCB0b29sdGlwPzogc3RyaW5nIHwgeyBpc1Nob3duPzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9IH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHByb3ZpZGVyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcHJvdmlkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcm91dGVzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcm91dGVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgbG9jYXRpb25zPzogQXJyYXk8YW55IHwgeyBsYXQ/OiBudW1iZXIsIGxuZz86IG51bWJlciB9PiwgbW9kZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgd2VpZ2h0PzogbnVtYmVyIH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJ0bEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0YWJJbmRleENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRhYkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHR5cGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0eXBlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3aWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgem9vbUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHpvb21DaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuXHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpQ2VudGVyQ29tcG9uZW50KVxyXG4gICAgZ2V0IGNlbnRlckNoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlDZW50ZXJDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjZW50ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBjZW50ZXJDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2NlbnRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aU1hcmtlckNvbXBvbmVudClcclxuICAgIGdldCBtYXJrZXJzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aU1hcmtlckNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21hcmtlcnMnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXJrZXJzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdtYXJrZXJzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpUm91dGVDb21wb25lbnQpXHJcbiAgICBnZXQgcm91dGVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVJvdXRlQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncm91dGVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm91dGVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdyb3V0ZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2xpY2snLCBlbWl0OiAnb25DbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdtYXJrZXJBZGRlZCcsIGVtaXQ6ICdvbk1hcmtlckFkZGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ21hcmtlclJlbW92ZWQnLCBlbWl0OiAnb25NYXJrZXJSZW1vdmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3JlYWR5JywgZW1pdDogJ29uUmVhZHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm91dGVBZGRlZCcsIGVtaXQ6ICdvblJvdXRlQWRkZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm91dGVSZW1vdmVkJywgZW1pdDogJ29uUm91dGVSZW1vdmVkJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY2Nlc3NLZXlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYXV0b0FkanVzdENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY2VudGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb250cm9sc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoaW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdob3ZlclN0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAna2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXJrZXJJY29uU3JjQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXJrZXJzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwcm92aWRlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncm91dGVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0YWJJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndHlwZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlzaWJsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3pvb21DaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhNYXAoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVdpZGdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnY2VudGVyJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ21hcmtlcnMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygncm91dGVzJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnY2VudGVyJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ21hcmtlcnMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygncm91dGVzJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4aUNlbnRlck1vZHVsZSxcclxuICAgIER4b0tleU1vZHVsZSxcclxuICAgIER4aU1hcmtlck1vZHVsZSxcclxuICAgIER4aUxvY2F0aW9uTW9kdWxlLFxyXG4gICAgRHhvVG9vbHRpcE1vZHVsZSxcclxuICAgIER4aVJvdXRlTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeE1hcENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhNYXBDb21wb25lbnQsXHJcbiAgICBEeGlDZW50ZXJNb2R1bGUsXHJcbiAgICBEeG9LZXlNb2R1bGUsXHJcbiAgICBEeGlNYXJrZXJNb2R1bGUsXHJcbiAgICBEeGlMb2NhdGlvbk1vZHVsZSxcclxuICAgIER4b1Rvb2x0aXBNb2R1bGUsXHJcbiAgICBEeGlSb3V0ZU1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeE1hcE1vZHVsZSB7IH1cclxuIl19
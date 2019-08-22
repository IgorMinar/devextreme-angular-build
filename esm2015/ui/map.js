/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
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
let DxMapComponent = class DxMapComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
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
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Specifies whether the widget automatically adjusts center and zoom option values when adding a new marker or route, or if a new widget contains markers or routes by default.
     */
    get autoAdjust() {
        return this._getOption('autoAdjust');
    }
    set autoAdjust(value) {
        this._setOption('autoAdjust', value);
    }
    /**
     * An object, a string, or an array specifying which part of the map is displayed at the widget's center using coordinates. The widget can change this value if autoAdjust is enabled.
     */
    get center() {
        return this._getOption('center');
    }
    set center(value) {
        this._setOption('center', value);
    }
    /**
     * Specifies whether or not map widget controls are available.
     */
    get controls() {
        return this._getOption('controls');
    }
    set controls(value) {
        this._setOption('controls', value);
    }
    /**
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    /**
     * Specifies the widget's height.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    /**
     * A key used to authenticate the application within the required map provider.
     */
    get key() {
        return this._getOption('key');
    }
    set key(value) {
        this._setOption('key', value);
    }
    /**
     * A URL pointing to the custom icon to be used for map markers.
     */
    get markerIconSrc() {
        return this._getOption('markerIconSrc');
    }
    set markerIconSrc(value) {
        this._setOption('markerIconSrc', value);
    }
    /**
     * An array of markers displayed on a map.
     */
    get markers() {
        return this._getOption('markers');
    }
    set markers(value) {
        this._setOption('markers', value);
    }
    /**
     * The name of the current map data provider.
     */
    get provider() {
        return this._getOption('provider');
    }
    set provider(value) {
        this._setOption('provider', value);
    }
    /**
     * An array of routes shown on the map.
     */
    get routes() {
        return this._getOption('routes');
    }
    set routes(value) {
        this._setOption('routes', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * The type of a map to display.
     */
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    /**
     * Specifies whether the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /**
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    /**
     * The map's zoom level. The widget can change this value if autoAdjust is enabled.
     */
    get zoom() {
        return this._getOption('zoom');
    }
    set zoom(value) {
        this._setOption('zoom', value);
    }
    get centerChildren() {
        return this._getOption('center');
    }
    set centerChildren(value) {
        this.setChildren('center', value);
    }
    get markersChildren() {
        return this._getOption('markers');
    }
    set markersChildren(value) {
        this.setChildren('markers', value);
    }
    get routesChildren() {
        return this._getOption('routes');
    }
    set routesChildren(value) {
        this.setChildren('routes', value);
    }
    _createInstance(element, options) {
        return new DxMap(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('center', changes);
        this.setupChanges('markers', changes);
        this.setupChanges('routes', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('center');
        this._idh.doCheck('markers');
        this._idh.doCheck('routes');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxMapComponent.prototype, "accessKey", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxMapComponent.prototype, "activeStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxMapComponent.prototype, "autoAdjust", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxMapComponent.prototype, "center", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxMapComponent.prototype, "controls", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxMapComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxMapComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxMapComponent.prototype, "focusStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxMapComponent.prototype, "height", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxMapComponent.prototype, "hint", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxMapComponent.prototype, "hoverStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxMapComponent.prototype, "key", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxMapComponent.prototype, "markerIconSrc", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxMapComponent.prototype, "markers", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxMapComponent.prototype, "provider", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxMapComponent.prototype, "routes", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxMapComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxMapComponent.prototype, "tabIndex", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxMapComponent.prototype, "type", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxMapComponent.prototype, "visible", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxMapComponent.prototype, "width", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxMapComponent.prototype, "zoom", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "onClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "onMarkerAdded", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "onMarkerRemoved", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "onReady", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "onRouteAdded", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "onRouteRemoved", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "accessKeyChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "activeStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "autoAdjustChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "centerChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "controlsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "focusStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "hintChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "hoverStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "keyChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "markerIconSrcChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "markersChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "providerChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "routesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "tabIndexChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "typeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "widthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxMapComponent.prototype, "zoomChange", void 0);
tslib_1.__decorate([
    ContentChildren(DxiCenterComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxMapComponent.prototype, "centerChildren", null);
tslib_1.__decorate([
    ContentChildren(DxiMarkerComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxMapComponent.prototype, "markersChildren", null);
tslib_1.__decorate([
    ContentChildren(DxiRouteComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxMapComponent.prototype, "routesChildren", null);
DxMapComponent = tslib_1.__decorate([
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
    tslib_1.__param(7, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
        WatcherHelper,
        IterableDifferHelper, NestedOptionHost,
        TransferState, Object])
], DxMapComponent);
export { DxMapComponent };
let DxMapModule = class DxMapModule {
};
DxMapModule = tslib_1.__decorate([
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
export { DxMapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFZcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sS0FBSyxNQUFNLG1CQUFtQixDQUFDO0FBR3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUs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QkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxnQkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csV0FBVyxDQUFJO1NBQWYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcbmltcG9ydCBEeE1hcCBmcm9tICdkZXZleHRyZW1lL3VpL21hcCc7XHJcblxyXG5cclxuaW1wb3J0IHsgRHhDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVIb3N0IH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZS1ob3N0JztcclxuaW1wb3J0IHsgRHhJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvaW50ZWdyYXRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBXYXRjaGVySGVscGVyIH0gZnJvbSAnLi4vY29yZS93YXRjaGVyLWhlbHBlcic7XHJcbmltcG9ydCB7IEl0ZXJhYmxlRGlmZmVySGVscGVyIH0gZnJvbSAnLi4vY29yZS9pdGVyYWJsZS1kaWZmZXItaGVscGVyJztcclxuXHJcbmltcG9ydCB7IER4aUNlbnRlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NlbnRlci1keGknO1xyXG5pbXBvcnQgeyBEeG9LZXlNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9rZXknO1xyXG5pbXBvcnQgeyBEeGlNYXJrZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9tYXJrZXItZHhpJztcclxuaW1wb3J0IHsgRHhpTG9jYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sb2NhdGlvbi1keGknO1xyXG5pbXBvcnQgeyBEeG9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdG9vbHRpcCc7XHJcbmltcG9ydCB7IER4aVJvdXRlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcm91dGUtZHhpJztcclxuXHJcbmltcG9ydCB7IER4aUNlbnRlckNvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL2NlbnRlci1keGknO1xyXG5pbXBvcnQgeyBEeGlNYXJrZXJDb21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9tYXJrZXItZHhpJztcclxuaW1wb3J0IHsgRHhpUm91dGVDb21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9yb3V0ZS1keGknO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNYXAgaXMgYW4gaW50ZXJhY3RpdmUgd2lkZ2V0IHRoYXQgZGlzcGxheXMgYSBnZW9ncmFwaGljIG1hcCB3aXRoIG1hcmtlcnMgYW5kIHJvdXRlcy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1tYXAnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeE1hcENvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4TWFwO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2hvcnRjdXQga2V5IHRoYXQgc2V0cyBmb2N1cyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjY2Vzc0tleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjY2Vzc0tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY2Nlc3NLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBpbnRlcmFjdGluZyB3aXRoIGEgdXNlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY3RpdmVTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWN0aXZlU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBhdXRvbWF0aWNhbGx5IGFkanVzdHMgY2VudGVyIGFuZCB6b29tIG9wdGlvbiB2YWx1ZXMgd2hlbiBhZGRpbmcgYSBuZXcgbWFya2VyIG9yIHJvdXRlLCBvciBpZiBhIG5ldyB3aWRnZXQgY29udGFpbnMgbWFya2VycyBvciByb3V0ZXMgYnkgZGVmYXVsdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhdXRvQWRqdXN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2F1dG9BZGp1c3QnKTtcclxuICAgIH1cclxuICAgIHNldCBhdXRvQWRqdXN0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhdXRvQWRqdXN0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIG9iamVjdCwgYSBzdHJpbmcsIG9yIGFuIGFycmF5IHNwZWNpZnlpbmcgd2hpY2ggcGFydCBvZiB0aGUgbWFwIGlzIGRpc3BsYXllZCBhdCB0aGUgd2lkZ2V0J3MgY2VudGVyIHVzaW5nIGNvb3JkaW5hdGVzLiBUaGUgd2lkZ2V0IGNhbiBjaGFuZ2UgdGhpcyB2YWx1ZSBpZiBhdXRvQWRqdXN0IGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2VudGVyKCk6IHN0cmluZyB8IEFycmF5PG51bWJlciB8IHsgbGF0PzogbnVtYmVyLCBsbmc/OiBudW1iZXIgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NlbnRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNlbnRlcih2YWx1ZTogc3RyaW5nIHwgQXJyYXk8bnVtYmVyIHwgeyBsYXQ/OiBudW1iZXIsIGxuZz86IG51bWJlciB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2VudGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCBtYXAgd2lkZ2V0IGNvbnRyb2xzIGFyZSBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29udHJvbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29udHJvbHMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb250cm9scyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29udHJvbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBiZSBmb2N1c2VkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgZm9yIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGEgdXNlciBwYXVzZXMgb24gaXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaG92ZXJTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBob3ZlclN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBrZXkgdXNlZCB0byBhdXRoZW50aWNhdGUgdGhlIGFwcGxpY2F0aW9uIHdpdGhpbiB0aGUgcmVxdWlyZWQgbWFwIHByb3ZpZGVyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGtleSgpOiBzdHJpbmcgfCB7IGJpbmc/OiBzdHJpbmcsIGdvb2dsZT86IHN0cmluZywgZ29vZ2xlU3RhdGljPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGtleSh2YWx1ZTogc3RyaW5nIHwgeyBiaW5nPzogc3RyaW5nLCBnb29nbGU/OiBzdHJpbmcsIGdvb2dsZVN0YXRpYz86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdrZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBVUkwgcG9pbnRpbmcgdG8gdGhlIGN1c3RvbSBpY29uIHRvIGJlIHVzZWQgZm9yIG1hcCBtYXJrZXJzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hcmtlckljb25TcmMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXJrZXJJY29uU3JjJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWFya2VySWNvblNyYyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXJrZXJJY29uU3JjJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IG9mIG1hcmtlcnMgZGlzcGxheWVkIG9uIGEgbWFwLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hcmtlcnMoKTogQXJyYXk8YW55IHwgeyBpY29uU3JjPzogc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZyB8IEFycmF5PG51bWJlciB8IHsgbGF0PzogbnVtYmVyLCBsbmc/OiBudW1iZXIgfT4sIG9uQ2xpY2s/OiBGdW5jdGlvbiwgdG9vbHRpcD86IHN0cmluZyB8IHsgaXNTaG93bj86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcgfSB9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWFya2VycycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hcmtlcnModmFsdWU6IEFycmF5PGFueSB8IHsgaWNvblNyYz86IHN0cmluZywgbG9jYXRpb24/OiBzdHJpbmcgfCBBcnJheTxudW1iZXIgfCB7IGxhdD86IG51bWJlciwgbG5nPzogbnVtYmVyIH0+LCBvbkNsaWNrPzogRnVuY3Rpb24sIHRvb2x0aXA/OiBzdHJpbmcgfCB7IGlzU2hvd24/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0gfT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21hcmtlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgbWFwIGRhdGEgcHJvdmlkZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcHJvdmlkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwcm92aWRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHByb3ZpZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Byb3ZpZGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IG9mIHJvdXRlcyBzaG93biBvbiB0aGUgbWFwLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJvdXRlcygpOiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBsb2NhdGlvbnM/OiBBcnJheTxhbnkgfCB7IGxhdD86IG51bWJlciwgbG5nPzogbnVtYmVyIH0+LCBtb2RlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB3ZWlnaHQ/OiBudW1iZXIgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JvdXRlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJvdXRlcyh2YWx1ZTogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgbG9jYXRpb25zPzogQXJyYXk8YW55IHwgeyBsYXQ/OiBudW1iZXIsIGxuZz86IG51bWJlciB9PiwgbW9kZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgd2VpZ2h0PzogbnVtYmVyIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyb3V0ZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0eXBlIG9mIGEgbWFwIHRvIGRpc3BsYXkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3R5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3R5cGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBpcyB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyB3aWR0aC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYXAncyB6b29tIGxldmVsLiBUaGUgd2lkZ2V0IGNhbiBjaGFuZ2UgdGhpcyB2YWx1ZSBpZiBhdXRvQWRqdXN0IGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgem9vbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3pvb20nKTtcclxuICAgIH1cclxuICAgIHNldCB6b29tKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3pvb20nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbnkgbG9jYXRpb24gb24gdGhlIG1hcCBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgbWFya2VyIGlzIGNyZWF0ZWQgb24gdGhlIG1hcC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uTWFya2VyQWRkZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBtYXJrZXIgaXMgcmVtb3ZlZCBmcm9tIHRoZSBtYXAuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk1hcmtlclJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgd2lkZ2V0IG9wdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcHRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSBtYXAgaXMgcmVhZHkuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgcm91dGUgaXMgY3JlYXRlZCBvbiB0aGUgbWFwLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3V0ZUFkZGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgcm91dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSBtYXAuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvdXRlUmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhdXRvQWRqdXN0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYXV0b0FkanVzdENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY2VudGVyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY2VudGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgQXJyYXk8bnVtYmVyIHwgeyBsYXQ/OiBudW1iZXIsIGxuZz86IG51bWJlciB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb250cm9sc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbnRyb2xzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhpbnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGtleUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGtleUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IHsgYmluZz86IHN0cmluZywgZ29vZ2xlPzogc3RyaW5nLCBnb29nbGVTdGF0aWM/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXJrZXJJY29uU3JjQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWFya2VySWNvblNyY0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXJrZXJzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWFya2Vyc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PGFueSB8IHsgaWNvblNyYz86IHN0cmluZywgbG9jYXRpb24/OiBzdHJpbmcgfCBBcnJheTxudW1iZXIgfCB7IGxhdD86IG51bWJlciwgbG5nPzogbnVtYmVyIH0+LCBvbkNsaWNrPzogRnVuY3Rpb24sIHRvb2x0aXA/OiBzdHJpbmcgfCB7IGlzU2hvd24/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0gfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcHJvdmlkZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwcm92aWRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByb3V0ZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByb3V0ZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBsb2NhdGlvbnM/OiBBcnJheTxhbnkgfCB7IGxhdD86IG51bWJlciwgbG5nPzogbnVtYmVyIH0+LCBtb2RlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB3ZWlnaHQ/OiBudW1iZXIgfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRhYkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdHlwZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHR5cGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzaWJsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB6b29tQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgem9vbUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG5cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlDZW50ZXJDb21wb25lbnQpXHJcbiAgICBnZXQgY2VudGVyQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUNlbnRlckNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NlbnRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNlbnRlckNoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignY2VudGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpTWFya2VyQ29tcG9uZW50KVxyXG4gICAgZ2V0IG1hcmtlcnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpTWFya2VyQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWFya2VycycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hcmtlcnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ21hcmtlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlSb3V0ZUNvbXBvbmVudClcclxuICAgIGdldCByb3V0ZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpUm91dGVDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyb3V0ZXMnKTtcclxuICAgIH1cclxuICAgIHNldCByb3V0ZXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3JvdXRlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3dhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2lkaDogSXRlcmFibGVEaWZmZXJIZWxwZXIsIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIHRlbXBsYXRlSG9zdCwgX3dhdGNoZXJIZWxwZXIsIHRyYW5zZmVyU3RhdGUsIHBsYXRmb3JtSWQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjbGljaycsIGVtaXQ6ICdvbkNsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ21hcmtlckFkZGVkJywgZW1pdDogJ29uTWFya2VyQWRkZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnbWFya2VyUmVtb3ZlZCcsIGVtaXQ6ICdvbk1hcmtlclJlbW92ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3B0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvbk9wdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncmVhZHknLCBlbWl0OiAnb25SZWFkeScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3V0ZUFkZGVkJywgZW1pdDogJ29uUm91dGVBZGRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3V0ZVJlbW92ZWQnLCBlbWl0OiAnb25Sb3V0ZVJlbW92ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjY2Vzc0tleUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhdXRvQWRqdXN0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjZW50ZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbnRyb2xzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdrZXlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21hcmtlckljb25TcmNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21hcmtlcnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Byb3ZpZGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyb3V0ZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RhYkluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0eXBlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnem9vbUNoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeE1hcChlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdjZW50ZXInLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnbWFya2VycycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdyb3V0ZXMnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdjZW50ZXInKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnbWFya2VycycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdyb3V0ZXMnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhpQ2VudGVyTW9kdWxlLFxyXG4gICAgRHhvS2V5TW9kdWxlLFxyXG4gICAgRHhpTWFya2VyTW9kdWxlLFxyXG4gICAgRHhpTG9jYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Ub29sdGlwTW9kdWxlLFxyXG4gICAgRHhpUm91dGVNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4TWFwQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeE1hcENvbXBvbmVudCxcclxuICAgIER4aUNlbnRlck1vZHVsZSxcclxuICAgIER4b0tleU1vZHVsZSxcclxuICAgIER4aU1hcmtlck1vZHVsZSxcclxuICAgIER4aUxvY2F0aW9uTW9kdWxlLFxyXG4gICAgRHhvVG9vbHRpcE1vZHVsZSxcclxuICAgIER4aVJvdXRlTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4TWFwTW9kdWxlIHsgfVxyXG4iXX0=
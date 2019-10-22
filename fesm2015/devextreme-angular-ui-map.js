import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxMap from 'devextreme/ui/map';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
DxMapComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
let DxMapModule = class DxMapModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxMapComponent, DxMapModule };
//# sourceMappingURL=devextreme-angular-ui-map.js.map

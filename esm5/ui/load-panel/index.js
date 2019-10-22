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
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import DxLoadPanel from 'devextreme/ui/load_panel';
import { DxComponent, DxTemplateHost, DxIntegrationModule, DxTemplateModule, NestedOptionHost, WatcherHelper } from 'devextreme-angular/core';
import { DxoAnimationModule } from 'devextreme-angular/ui/nested';
import { DxoHideModule } from 'devextreme-angular/ui/nested';
import { DxoShowModule } from 'devextreme-angular/ui/nested';
import { DxoPositionModule } from 'devextreme-angular/ui/nested';
import { DxoAtModule } from 'devextreme-angular/ui/nested';
import { DxoBoundaryOffsetModule } from 'devextreme-angular/ui/nested';
import { DxoCollisionModule } from 'devextreme-angular/ui/nested';
import { DxoMyModule } from 'devextreme-angular/ui/nested';
import { DxoOffsetModule } from 'devextreme-angular/ui/nested';
/**
 * The LoadPanel is an overlay widget notifying the viewer that loading is in progress.
 */
var DxLoadPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxLoadPanelComponent, _super);
    function DxLoadPanelComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'animationChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'containerChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'delayChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'indicatorSrcChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'messageChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showPaneChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxLoadPanelComponent.prototype, "animation", {
        /**
         * Configures widget visibility animations. This object contains two fields: show and hide.
         */
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "closeOnOutsideClick", {
        /**
         * Specifies whether to close the widget if a user clicks outside it.
         */
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "container", {
        /**
         * Specifies the widget's container.
         */
        get: function () {
            return this._getOption('container');
        },
        set: function (value) {
            this._setOption('container', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "deferRendering", {
        /**
         * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
         */
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "delay", {
        /**
         * The delay in milliseconds after which the load panel is displayed.
         */
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether or not the widget can be focused.
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "height", {
        /**
         * Specifies the widget's height in pixels.
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "hint", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "indicatorSrc", {
        /**
         * A URL pointing to an image to be used as a load indicator.
         */
        get: function () {
            return this._getOption('indicatorSrc');
        },
        set: function (value) {
            this._setOption('indicatorSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "maxHeight", {
        /**
         * Specifies the maximum height the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "maxWidth", {
        /**
         * Specifies the maximum width the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "message", {
        /**
         * Specifies the text displayed in the load panel. Ignored in the Material Design theme.
         */
        get: function () {
            return this._getOption('message');
        },
        set: function (value) {
            this._setOption('message', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "minHeight", {
        /**
         * Specifies the minimum height the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "minWidth", {
        /**
         * Specifies the minimum width the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "position", {
        /**
         * Positions the widget.
         */
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "shading", {
        /**
         * Specifies whether to shade the background when the widget is active.
         */
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "shadingColor", {
        /**
         * Specifies the shading color.
         */
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "showIndicator", {
        /**
         * A Boolean value specifying whether or not to show a load indicator.
         */
        get: function () {
            return this._getOption('showIndicator');
        },
        set: function (value) {
            this._setOption('showIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "showPane", {
        /**
         * A Boolean value specifying whether or not to show the pane behind the load indicator.
         */
        get: function () {
            return this._getOption('showPane');
        },
        set: function (value) {
            this._setOption('showPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "visible", {
        /**
         * A Boolean value specifying whether or not the widget is visible.
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "width", {
        /**
         * Specifies the widget's width in pixels.
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
    DxLoadPanelComponent.prototype._createInstance = function (element, options) {
        return new DxLoadPanel(element, options);
    };
    DxLoadPanelComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLoadPanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "closeOnOutsideClick", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "container", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "deferRendering", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "delay", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "elementAttr", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "focusStateEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "height", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "hint", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "hoverStateEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "indicatorSrc", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "maxHeight", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "maxWidth", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "message", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "minHeight", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "minWidth", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "position", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "rtlEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "shading", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "shadingColor", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "showIndicator", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "showPane", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "visible", null);
    tslib_1.__decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "width", null);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onContentReady", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onDisposing", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onHidden", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onHiding", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onInitialized", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onOptionChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onShowing", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onShown", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "animationChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "closeOnOutsideClickChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "containerChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "deferRenderingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "delayChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "elementAttrChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "focusStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "heightChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "hintChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "hoverStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "indicatorSrcChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "maxHeightChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "maxWidthChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "messageChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "minHeightChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "minWidthChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "positionChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "rtlEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "shadingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "shadingColorChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "showIndicatorChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "showPaneChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "visibleChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "widthChange", void 0);
    DxLoadPanelComponent = tslib_1.__decorate([
        Component({
            selector: 'dx-load-panel',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        tslib_1.__param(6, Inject(PLATFORM_ID))
    ], DxLoadPanelComponent);
    return DxLoadPanelComponent;
}(DxComponent));
export { DxLoadPanelComponent };
var DxLoadPanelModule = /** @class */ (function () {
    function DxLoadPanelModule() {
    }
    DxLoadPanelModule = tslib_1.__decorate([
        NgModule({
            imports: [
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxLoadPanelComponent
            ],
            exports: [
                DxLoadPanelComponent,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxTemplateModule
            ]
        })
    ], DxLoadPanelModule);
    return DxLoadPanelModule;
}());
export { DxLoadPanelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbG9hZC1wYW5lbC8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUdwQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUVOLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLFdBQVcsTUFBTSwwQkFBMEIsQ0FBQztBQUduRCxPQUFPLEVBQ0gsV0FBVyxFQUNYLGNBQWMsRUFDZCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixhQUFhLEVBQ2hCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFB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Q2xCLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixnQkFBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO1NBQXJCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCBEeExvYWRQYW5lbCBmcm9tICdkZXZleHRyZW1lL3VpL2xvYWRfcGFuZWwnO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBEeENvbXBvbmVudCxcclxuICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgV2F0Y2hlckhlbHBlclxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IER4b0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9IaWRlTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1Nob3dNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvUG9zaXRpb25Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQXRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQm91bmRhcnlPZmZzZXRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQ29sbGlzaW9uTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b015TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b09mZnNldE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTG9hZFBhbmVsIGlzIGFuIG92ZXJsYXkgd2lkZ2V0IG5vdGlmeWluZyB0aGUgdmlld2VyIHRoYXQgbG9hZGluZyBpcyBpbiBwcm9ncmVzcy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1sb2FkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhMb2FkUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgICBpbnN0YW5jZTogRHhMb2FkUGFuZWw7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB3aWRnZXQgdmlzaWJpbGl0eSBhbmltYXRpb25zLiBUaGlzIG9iamVjdCBjb250YWlucyB0d28gZmllbGRzOiBzaG93IGFuZCBoaWRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFuaW1hdGlvbigpOiB7IGhpZGU/OiBEZXZFeHByZXNzLmFuaW1hdGlvbkNvbmZpZywgc2hvdz86IERldkV4cHJlc3MuYW5pbWF0aW9uQ29uZmlnIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FuaW1hdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFuaW1hdGlvbih2YWx1ZTogeyBoaWRlPzogRGV2RXhwcmVzcy5hbmltYXRpb25Db25maWcsIHNob3c/OiBEZXZFeHByZXNzLmFuaW1hdGlvbkNvbmZpZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbmltYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gY2xvc2UgdGhlIHdpZGdldCBpZiBhIHVzZXIgY2xpY2tzIG91dHNpZGUgaXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2xvc2VPbk91dHNpZGVDbGljaygpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nsb3NlT25PdXRzaWRlQ2xpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBjbG9zZU9uT3V0c2lkZUNsaWNrKHZhbHVlOiBib29sZWFuIHwgRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Nsb3NlT25PdXRzaWRlQ2xpY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBjb250YWluZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29udGFpbmVyKCk6IEVsZW1lbnQgfCBKUXVlcnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbnRhaW5lcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnRhaW5lcih2YWx1ZTogRWxlbWVudCB8IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29udGFpbmVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJlbmRlciB0aGUgd2lkZ2V0J3MgY29udGVudCB3aGVuIGl0IGlzIGRpc3BsYXllZC4gSWYgZmFsc2UsIHRoZSBjb250ZW50IGlzIHJlbmRlcmVkIGltbWVkaWF0ZWx5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRlZmVyUmVuZGVyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RlZmVyUmVuZGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVmZXJSZW5kZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RlZmVyUmVuZGVyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkZWxheSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdGhlIGxvYWQgcGFuZWwgaXMgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRlbGF5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGVsYXknKTtcclxuICAgIH1cclxuICAgIHNldCBkZWxheSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkZWxheScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWRnZXQgY2FuIGJlIGZvY3VzZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQgaW4gcGl4ZWxzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvdmVyU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgVVJMIHBvaW50aW5nIHRvIGFuIGltYWdlIHRvIGJlIHVzZWQgYXMgYSBsb2FkIGluZGljYXRvci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpbmRpY2F0b3JTcmMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpbmRpY2F0b3JTcmMnKTtcclxuICAgIH1cclxuICAgIHNldCBpbmRpY2F0b3JTcmModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaW5kaWNhdG9yU3JjJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSBoZWlnaHQgdGhlIHdpZGdldCBjYW4gcmVhY2ggd2hpbGUgcmVzaXppbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4SGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhIZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhIZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhIZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIHdpZHRoIHRoZSB3aWRnZXQgY2FuIHJlYWNoIHdoaWxlIHJlc2l6aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heFdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heFdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4V2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB0ZXh0IGRpc3BsYXllZCBpbiB0aGUgbG9hZCBwYW5lbC4gSWdub3JlZCBpbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHRoZW1lLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtZXNzYWdlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtZXNzYWdlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbWluaW11bSBoZWlnaHQgdGhlIHdpZGdldCBjYW4gcmVhY2ggd2hpbGUgcmVzaXppbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluSGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5IZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5IZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5IZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIHdpZHRoIHRoZSB3aWRnZXQgY2FuIHJlYWNoIHdoaWxlIHJlc2l6aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbldpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5XaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbldpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9zaXRpb25zIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcG9zaXRpb24oKTogRGV2RXhwcmVzcy5wb3NpdGlvbkNvbmZpZyB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlOiBEZXZFeHByZXNzLnBvc2l0aW9uQ29uZmlnIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Bvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gc2hhZGUgdGhlIGJhY2tncm91bmQgd2hlbiB0aGUgd2lkZ2V0IGlzIGFjdGl2ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaGFkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NoYWRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzaGFkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaGFkaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2hhZGluZyBjb2xvci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaGFkaW5nQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaGFkaW5nQ29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBzaGFkaW5nQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hhZGluZ0NvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgb3Igbm90IHRvIHNob3cgYSBsb2FkIGluZGljYXRvci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93SW5kaWNhdG9yKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93SW5kaWNhdG9yKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93SW5kaWNhdG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIHBhbmUgYmVoaW5kIHRoZSBsb2FkIGluZGljYXRvci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93UGFuZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93UGFuZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dQYW5lKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93UGFuZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIEJvb2xlYW4gdmFsdWUgc3BlY2lmeWluZyB3aGV0aGVyIG9yIG5vdCB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoIGluIHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIGNvbnRlbnQgaXMgcmVhZHkgYW5kIGVhY2ggdGltZSB0aGUgY29udGVudCBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db250ZW50UmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSB3aWRnZXQgaXMgaGlkZGVuLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGhpZGRlbi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSGlkaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3BsYXllZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2hvd2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCBpcyBkaXNwbGF5ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbmltYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGhpZGU/OiBEZXZFeHByZXNzLmFuaW1hdGlvbkNvbmZpZywgc2hvdz86IERldkV4cHJlc3MuYW5pbWF0aW9uQ29uZmlnIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNsb3NlT25PdXRzaWRlQ2xpY2tDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgRnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbnRhaW5lckNoYW5nZTogRXZlbnRFbWl0dGVyPEVsZW1lbnQgfCBKUXVlcnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRlZmVyUmVuZGVyaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGVsYXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGluZGljYXRvclNyY0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWF4SGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1heFdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1lc3NhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1pbkhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtaW5XaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MucG9zaXRpb25Db25maWcgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcnRsRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNoYWRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaGFkaW5nQ29sb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dJbmRpY2F0b3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93UGFuZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGVudFJlYWR5JywgZW1pdDogJ29uQ29udGVudFJlYWR5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdoaWRkZW4nLCBlbWl0OiAnb25IaWRkZW4nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaGlkaW5nJywgZW1pdDogJ29uSGlkaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXRpYWxpemVkJywgZW1pdDogJ29uSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3B0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvbk9wdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2hvd2luZycsIGVtaXQ6ICdvblNob3dpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2hvd24nLCBlbWl0OiAnb25TaG93bicgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYW5pbWF0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjbG9zZU9uT3V0c2lkZUNsaWNrQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb250YWluZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RlZmVyUmVuZGVyaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkZWxheUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpbmRpY2F0b3JTcmNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21heEhlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWF4V2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21lc3NhZ2VDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21pbkhlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWluV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Bvc2l0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaGFkaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaGFkaW5nQ29sb3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dJbmRpY2F0b3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dQYW5lQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4TG9hZFBhbmVsKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhvUG9zaXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BdE1vZHVsZSxcclxuICAgIER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhvQ29sbGlzaW9uTW9kdWxlLFxyXG4gICAgRHhvTXlNb2R1bGUsXHJcbiAgICBEeG9PZmZzZXRNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4TG9hZFBhbmVsQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeExvYWRQYW5lbENvbXBvbmVudCxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhvUG9zaXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BdE1vZHVsZSxcclxuICAgIER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhvQ29sbGlzaW9uTW9kdWxlLFxyXG4gICAgRHhvTXlNb2R1bGUsXHJcbiAgICBEeG9PZmZzZXRNb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhMb2FkUGFuZWxNb2R1bGUgeyB9XHJcbiJdfQ==
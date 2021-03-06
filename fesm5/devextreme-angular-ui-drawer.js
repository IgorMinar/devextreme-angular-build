import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxDrawer from 'devextreme/ui/drawer';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
 * The Drawer is a dismissible or permanently visible panel used for navigation in responsive web application layouts.
 */
var DxDrawerComponent = /** @class */ (function (_super) {
    __extends(DxDrawerComponent, _super);
    function DxDrawerComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationDurationChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxSizeChange' },
            { emit: 'minSizeChange' },
            { emit: 'openedChange' },
            { emit: 'openedStateModeChange' },
            { emit: 'positionChange' },
            { emit: 'revealModeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'targetChange' },
            { emit: 'templateChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxDrawerComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "animationDuration", {
        /**
         * Specifies the duration of the drawer's opening and closing animation (in milliseconds). Applies only if animationEnabled is true.
         */
        get: function () {
            return this._getOption('animationDuration');
        },
        set: function (value) {
            this._setOption('animationDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "animationEnabled", {
        /**
         * Specifies whether to use an opening and closing animation.
         */
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "closeOnOutsideClick", {
        /**
         * Specifies whether to close the drawer if a user clicks or taps the view area.
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
    Object.defineProperty(DxDrawerComponent.prototype, "disabled", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "height", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "hint", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "maxSize", {
        /**
         * Specifies the drawer's width or height (depending on the drawer's position) in the opened state.
         */
        get: function () {
            return this._getOption('maxSize');
        },
        set: function (value) {
            this._setOption('maxSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "minSize", {
        /**
         * Specifies the drawer's width or height (depending on the drawer's position) in the closed state.
         */
        get: function () {
            return this._getOption('minSize');
        },
        set: function (value) {
            this._setOption('minSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "opened", {
        /**
         * Specifies whether the drawer is opened.
         */
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "openedStateMode", {
        /**
         * Specifies how the drawer interacts with the view in the opened state.
         */
        get: function () {
            return this._getOption('openedStateMode');
        },
        set: function (value) {
            this._setOption('openedStateMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "position", {
        /**
         * Specifies the drawer's position in relation to the view.
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
    Object.defineProperty(DxDrawerComponent.prototype, "revealMode", {
        /**
         * Specifies the drawer's reveal mode.
         */
        get: function () {
            return this._getOption('revealMode');
        },
        set: function (value) {
            this._setOption('revealMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "shading", {
        /**
         * Specifies whether to shade the view when the drawer is opened.
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
    Object.defineProperty(DxDrawerComponent.prototype, "target", {
        /**
         * Specifies the target element associated with the drawer. Applies only when the openedStateMode is "overlap".
         */
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "template", {
        /**
         * Specifies the drawer's content.
         */
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "visible", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "width", {
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
    DxDrawerComponent.prototype._createInstance = function (element, options) {
        return new DxDrawer(element, options);
    };
    DxDrawerComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDrawerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "animationDuration", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "animationEnabled", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "maxSize", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "minSize", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "openedStateMode", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "position", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "revealMode", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "shading", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "target", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "template", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxDrawerComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "animationDurationChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "animationEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "maxSizeChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "minSizeChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "openedChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "openedStateModeChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "positionChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "revealModeChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "shadingChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "targetChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "templateChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxDrawerComponent.prototype, "widthChange", void 0);
    DxDrawerComponent = __decorate([
        Component({
            selector: 'dx-drawer',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxDrawerComponent);
    return DxDrawerComponent;
}(DxComponent));
var DxDrawerModule = /** @class */ (function () {
    function DxDrawerModule() {
    }
    DxDrawerModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxDrawerComponent
            ],
            exports: [
                DxDrawerComponent,
                DxTemplateModule
            ]
        })
    ], DxDrawerModule);
    return DxDrawerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxDrawerComponent, DxDrawerModule };
//# sourceMappingURL=devextreme-angular-ui-drawer.js.map

import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxSlideOutView from 'devextreme/ui/slide_out_view';
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
 * The SlideOutView widget is a classic slide-out menu paired with a view. This widget is very similar to the SlideOut with only one difference - the SlideOut always contains the List in the slide-out menu, while the SlideOutView can hold any collection there.
 */
var DxSlideOutViewComponent = /** @class */ (function (_super) {
    __extends(DxSlideOutViewComponent, _super);
    function DxSlideOutViewComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'menuPositionChange' },
            { emit: 'menuTemplateChange' },
            { emit: 'menuVisibleChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxSlideOutViewComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxSlideOutViewComponent.prototype, "contentTemplate", {
        /**
         * Specifies a custom template for the widget content.
         */
        get: function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutViewComponent.prototype, "disabled", {
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
    Object.defineProperty(DxSlideOutViewComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSlideOutViewComponent.prototype, "height", {
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
    Object.defineProperty(DxSlideOutViewComponent.prototype, "hint", {
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
    Object.defineProperty(DxSlideOutViewComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxSlideOutViewComponent.prototype, "menuPosition", {
        /**
         * Specifies the current menu position.
         */
        get: function () {
            return this._getOption('menuPosition');
        },
        set: function (value) {
            this._setOption('menuPosition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutViewComponent.prototype, "menuTemplate", {
        /**
         * Specifies a custom template for the menu content.
         */
        get: function () {
            return this._getOption('menuTemplate');
        },
        set: function (value) {
            this._setOption('menuTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutViewComponent.prototype, "menuVisible", {
        /**
         * Specifies whether or not the menu panel is visible.
         */
        get: function () {
            return this._getOption('menuVisible');
        },
        set: function (value) {
            this._setOption('menuVisible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutViewComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSlideOutViewComponent.prototype, "swipeEnabled", {
        /**
         * Specifies whether or not the menu is shown when a user swipes the widget content.
         */
        get: function () {
            return this._getOption('swipeEnabled');
        },
        set: function (value) {
            this._setOption('swipeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutViewComponent.prototype, "visible", {
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
    Object.defineProperty(DxSlideOutViewComponent.prototype, "width", {
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
    DxSlideOutViewComponent.prototype._createInstance = function (element, options) {
        return new DxSlideOutView(element, options);
    };
    DxSlideOutViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSlideOutViewComponent.ctorParameters = function () { return [
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
    ], DxSlideOutViewComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "contentTemplate", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "menuPosition", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "menuTemplate", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "menuVisible", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "swipeEnabled", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxSlideOutViewComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "contentTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "menuPositionChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "menuTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "menuVisibleChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "swipeEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutViewComponent.prototype, "widthChange", void 0);
    DxSlideOutViewComponent = __decorate([
        Component({
            selector: 'dx-slide-out-view',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxSlideOutViewComponent);
    return DxSlideOutViewComponent;
}(DxComponent));
var DxSlideOutViewModule = /** @class */ (function () {
    function DxSlideOutViewModule() {
    }
    DxSlideOutViewModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxSlideOutViewComponent
            ],
            exports: [
                DxSlideOutViewComponent,
                DxTemplateModule
            ]
        })
    ], DxSlideOutViewModule);
    return DxSlideOutViewModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxSlideOutViewComponent, DxSlideOutViewModule };
//# sourceMappingURL=devextreme-angular-ui-slide-out-view.js.map

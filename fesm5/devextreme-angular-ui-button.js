import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxButton from 'devextreme/ui/button';
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
 * The Button widget is a simple button that performs specified commands when a user clicks it.
 */
var DxButtonComponent = /** @class */ (function (_super) {
    __extends(DxButtonComponent, _super);
    function DxButtonComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'iconChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'templateChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useSubmitBehaviorChange' },
            { emit: 'validationGroupChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxButtonComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxButtonComponent.prototype, "activeStateEnabled", {
        /**
         * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
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
    Object.defineProperty(DxButtonComponent.prototype, "disabled", {
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
    Object.defineProperty(DxButtonComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxButtonComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxButtonComponent.prototype, "height", {
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
    Object.defineProperty(DxButtonComponent.prototype, "hint", {
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
    Object.defineProperty(DxButtonComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxButtonComponent.prototype, "icon", {
        /**
         * Specifies the icon to be displayed on the button.
         */
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxButtonComponent.prototype, "stylingMode", {
        /**
         * Specifies how the button is styled.
         */
        get: function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxButtonComponent.prototype, "template", {
        /**
         * Specifies a custom template for the Button widget.
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
    Object.defineProperty(DxButtonComponent.prototype, "text", {
        /**
         * The text displayed on the button.
         */
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "type", {
        /**
         * Specifies the button type.
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
    Object.defineProperty(DxButtonComponent.prototype, "useSubmitBehavior", {
        /**
         * Specifies whether or not the button must submit an HTML form.
         */
        get: function () {
            return this._getOption('useSubmitBehavior');
        },
        set: function (value) {
            this._setOption('useSubmitBehavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "validationGroup", {
        /**
         * Specifies the name of the validation group to be accessed in the click event handler.
         */
        get: function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "visible", {
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
    Object.defineProperty(DxButtonComponent.prototype, "width", {
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
    DxButtonComponent.prototype._createInstance = function (element, options) {
        return new DxButton(element, options);
    };
    DxButtonComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxButtonComponent.ctorParameters = function () { return [
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
    ], DxButtonComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "icon", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "template", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "type", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "useSubmitBehavior", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "validationGroup", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxButtonComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "onClick", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "iconChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "templateChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "typeChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "useSubmitBehaviorChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "validationGroupChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxButtonComponent.prototype, "widthChange", void 0);
    DxButtonComponent = __decorate([
        Component({
            selector: 'dx-button',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxButtonComponent);
    return DxButtonComponent;
}(DxComponent));
var DxButtonModule = /** @class */ (function () {
    function DxButtonModule() {
    }
    DxButtonModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxButtonComponent
            ],
            exports: [
                DxButtonComponent,
                DxTemplateModule
            ]
        })
    ], DxButtonModule);
    return DxButtonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxButtonComponent, DxButtonModule };
//# sourceMappingURL=devextreme-angular-ui-button.js.map

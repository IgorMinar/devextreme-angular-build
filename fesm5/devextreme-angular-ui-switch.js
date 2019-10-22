import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxSwitch from 'devextreme/ui/switch';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxSwitchComponent; }),
    multi: true
};
/**
 * The Switch is a widget that can be in two states: "On" and "Off".
 */
var DxSwitchComponent = /** @class */ (function (_super) {
    __extends(DxSwitchComponent, _super);
    function DxSwitchComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'nameChange' },
            { emit: 'offTextChange' },
            { emit: 'onTextChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'switchedOffTextChange' },
            { emit: 'switchedOnTextChange' },
            { emit: 'tabIndexChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxSwitchComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "disabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "height", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "hint", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "isValid", {
        /**
         * Specifies whether the editor's value is valid.
         */
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "name", {
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "offText", {
        /**
         * Use the switchedOffText option instead.
         */
        get: function () {
            return this._getOption('offText');
        },
        set: function (value) {
            this._setOption('offText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "onText", {
        /**
         * Use the switchedOnText option instead.
         */
        get: function () {
            return this._getOption('onText');
        },
        set: function (value) {
            this._setOption('onText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "readOnly", {
        /**
         * Specifies whether the editor is read-only.
         */
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "switchedOffText", {
        /**
         * Specifies the text displayed when the widget is switched off.
         */
        get: function () {
            return this._getOption('switchedOffText');
        },
        set: function (value) {
            this._setOption('switchedOffText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "switchedOnText", {
        /**
         * Specifies the text displayed when the widget is switched on.
         */
        get: function () {
            return this._getOption('switchedOnText');
        },
        set: function (value) {
            this._setOption('switchedOnText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "validationError", {
        /**
         * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
         */
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "validationMessageMode", {
        /**
         * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
         */
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "value", {
        /**
         * A Boolean value specifying whether the current switch state is "On" or "Off".
         */
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "visible", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "width", {
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
    DxSwitchComponent.prototype.change = function (_) { };
    DxSwitchComponent.prototype._createInstance = function (element, options) {
        return new DxSwitch(element, options);
    };
    DxSwitchComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxSwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxSwitchComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxSwitchComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxSwitchComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxSwitchComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSwitchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxSwitchComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxSwitchComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        ContentChild(DxValidatorComponent)
    ], DxSwitchComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "offText", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "onText", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "switchedOffText", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "switchedOnText", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxSwitchComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "offTextChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "onTextChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "switchedOffTextChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "switchedOnTextChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxSwitchComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxSwitchComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxSwitchComponent.prototype, "touched", void 0);
    DxSwitchComponent = __decorate([
        Component({
            selector: 'dx-switch',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxSwitchComponent);
    return DxSwitchComponent;
}(DxComponent));
var DxSwitchModule = /** @class */ (function () {
    function DxSwitchModule() {
    }
    DxSwitchModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxSwitchComponent
            ],
            exports: [
                DxSwitchComponent,
                DxTemplateModule
            ]
        })
    ], DxSwitchModule);
    return DxSwitchModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxSwitchComponent, DxSwitchModule };
//# sourceMappingURL=devextreme-angular-ui-switch.js.map

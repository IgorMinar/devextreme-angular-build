import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxSlider from 'devextreme/ui/slider';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoLabelModule, DxoFormatModule, DxoTooltipModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(function () { return DxSliderComponent; }),
    multi: true
};
/**
 * The Slider is a widget that allows an end user to set a numeric value on a continuous range of possible values.
 */
var DxSliderComponent = /** @class */ (function (_super) {
    __extends(DxSliderComponent, _super);
    function DxSliderComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
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
            { emit: 'keyStepChange' },
            { emit: 'labelChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showRangeChange' },
            { emit: 'stepChange' },
            { emit: 'tabIndexChange' },
            { emit: 'tooltipChange' },
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
    Object.defineProperty(DxSliderComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxSliderComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxSliderComponent.prototype, "disabled", {
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
    Object.defineProperty(DxSliderComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSliderComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxSliderComponent.prototype, "height", {
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
    Object.defineProperty(DxSliderComponent.prototype, "hint", {
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
    Object.defineProperty(DxSliderComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxSliderComponent.prototype, "isValid", {
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
    Object.defineProperty(DxSliderComponent.prototype, "keyStep", {
        /**
         * Specifies the step by which a handle moves when a user presses Page Up or Page Down.
         */
        get: function () {
            return this._getOption('keyStep');
        },
        set: function (value) {
            this._setOption('keyStep', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSliderComponent.prototype, "label", {
        /**
         * Configures the labels displayed at the min and max values.
         */
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSliderComponent.prototype, "max", {
        /**
         * The maximum value the widget can accept.
         */
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSliderComponent.prototype, "min", {
        /**
         * The minimum value the widget can accept.
         */
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSliderComponent.prototype, "name", {
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
    Object.defineProperty(DxSliderComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxSliderComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSliderComponent.prototype, "showRange", {
        /**
         * Specifies whether to highlight the selected range.
         */
        get: function () {
            return this._getOption('showRange');
        },
        set: function (value) {
            this._setOption('showRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSliderComponent.prototype, "step", {
        /**
         * Specifies the step by which the widget's value changes when a user drags a handler.
         */
        get: function () {
            return this._getOption('step');
        },
        set: function (value) {
            this._setOption('step', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSliderComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxSliderComponent.prototype, "tooltip", {
        /**
         * Configures a tooltip.
         */
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSliderComponent.prototype, "validationError", {
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
    Object.defineProperty(DxSliderComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxSliderComponent.prototype, "value", {
        /**
         * The current slider value.
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
    Object.defineProperty(DxSliderComponent.prototype, "visible", {
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
    Object.defineProperty(DxSliderComponent.prototype, "width", {
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
    DxSliderComponent.prototype.change = function (_) { };
    DxSliderComponent.prototype._createInstance = function (element, options) {
        return new DxSlider(element, options);
    };
    DxSliderComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxSliderComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxSliderComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxSliderComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxSliderComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSliderComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxSliderComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxSliderComponent.ctorParameters = function () { return [
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
    ], DxSliderComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "keyStep", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "label", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "max", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "min", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "showRange", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "step", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxSliderComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "keyStepChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "labelChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "maxChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "minChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "showRangeChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "stepChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxSliderComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxSliderComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxSliderComponent.prototype, "touched", void 0);
    DxSliderComponent = __decorate([
        Component({
            selector: 'dx-slider',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxSliderComponent);
    return DxSliderComponent;
}(DxComponent));
var DxSliderModule = /** @class */ (function () {
    function DxSliderModule() {
    }
    DxSliderModule = __decorate([
        NgModule({
            imports: [
                DxoLabelModule,
                DxoFormatModule,
                DxoTooltipModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxSliderComponent
            ],
            exports: [
                DxSliderComponent,
                DxoLabelModule,
                DxoFormatModule,
                DxoTooltipModule,
                DxTemplateModule
            ]
        })
    ], DxSliderModule);
    return DxSliderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxSliderComponent, DxSliderModule };
//# sourceMappingURL=devextreme-angular-ui-slider.js.map

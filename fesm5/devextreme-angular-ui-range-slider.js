import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxRangeSlider from 'devextreme/ui/range_slider';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
    useExisting: forwardRef(function () { return DxRangeSliderComponent; }),
    multi: true
};
/**
 * The RangeSlider is a widget that allows an end user to choose a range of numeric values.
 */
var DxRangeSliderComponent = /** @class */ (function (_super) {
    __extends(DxRangeSliderComponent, _super);
    function DxRangeSliderComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
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
            { emit: 'endChange' },
            { emit: 'endNameChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'keyStepChange' },
            { emit: 'labelChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showRangeChange' },
            { emit: 'startChange' },
            { emit: 'startNameChange' },
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxRangeSliderComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "disabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "end", {
        /**
         * The right edge of the interval currently selected using the range slider.
         */
        get: function () {
            return this._getOption('end');
        },
        set: function (value) {
            this._setOption('end', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "endName", {
        /**
         * The value to be assigned to the name attribute of the underlying `` element.
         */
        get: function () {
            return this._getOption('endName');
        },
        set: function (value) {
            this._setOption('endName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "height", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "hint", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "isValid", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "keyStep", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "label", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "max", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "min", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "showRange", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "start", {
        /**
         * The left edge of the interval currently selected using the range slider.
         */
        get: function () {
            return this._getOption('start');
        },
        set: function (value) {
            this._setOption('start', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "startName", {
        /**
         * The value to be assigned to the name attribute of the underlying `` element.
         */
        get: function () {
            return this._getOption('startName');
        },
        set: function (value) {
            this._setOption('startName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "step", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "validationError", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "value", {
        /**
         * Specifies the widget's value.
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "visible", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "width", {
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
    DxRangeSliderComponent.prototype.change = function (_) { };
    DxRangeSliderComponent.prototype._createInstance = function (element, options) {
        return new DxRangeSlider(element, options);
    };
    DxRangeSliderComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxRangeSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxRangeSliderComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxRangeSliderComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxRangeSliderComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxRangeSliderComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxRangeSliderComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('value', changes);
    };
    DxRangeSliderComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxRangeSliderComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxRangeSliderComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxRangeSliderComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxRangeSliderComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxRangeSliderComponent.ctorParameters = function () { return [
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
        ContentChild(DxValidatorComponent)
    ], DxRangeSliderComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "end", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "endName", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "keyStep", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "label", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "max", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "min", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "showRange", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "start", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "startName", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "step", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxRangeSliderComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "endChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "endNameChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "keyStepChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "labelChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "maxChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "minChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "showRangeChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "startChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "startNameChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "stepChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxRangeSliderComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxRangeSliderComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxRangeSliderComponent.prototype, "touched", void 0);
    DxRangeSliderComponent = __decorate([
        Component({
            selector: 'dx-range-slider',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxRangeSliderComponent);
    return DxRangeSliderComponent;
}(DxComponent));
var DxRangeSliderModule = /** @class */ (function () {
    function DxRangeSliderModule() {
    }
    DxRangeSliderModule = __decorate([
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
                DxRangeSliderComponent
            ],
            exports: [
                DxRangeSliderComponent,
                DxoLabelModule,
                DxoFormatModule,
                DxoTooltipModule,
                DxTemplateModule
            ]
        })
    ], DxRangeSliderModule);
    return DxRangeSliderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxRangeSliderComponent, DxRangeSliderModule };
//# sourceMappingURL=devextreme-angular-ui-range-slider.js.map

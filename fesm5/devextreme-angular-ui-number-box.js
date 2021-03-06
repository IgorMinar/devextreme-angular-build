import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxNumberBox from 'devextreme/ui/number_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiButtonComponent, DxiButtonModule, DxoOptionsModule, DxoFormatModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(function () { return DxNumberBoxComponent; }),
    multi: true
};
/**
 * The NumberBox is a widget that displays a numeric value and allows a user to modify it by typing in a value, and incrementing or decrementing it using the keyboard or mouse.
 */
var DxNumberBoxComponent = /** @class */ (function (_super) {
    __extends(DxNumberBoxComponent, _super);
    function DxNumberBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'buttonsChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'formatChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'invalidValueMessageChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'modeChange' },
            { emit: 'nameChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showSpinButtonsChange' },
            { emit: 'stepChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'useLargeSpinButtonsChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxNumberBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "buttons", {
        /**
         * Allows you to add custom buttons to the input text field.
         */
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this._setOption('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "format", {
        /**
         * Specifies the value's display format and controls user input accordingly.
         */
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "inputAttr", {
        /**
         * Specifies the attributes to be passed on to the underlying HTML element.
         */
        get: function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "invalidValueMessage", {
        /**
         * Specifies the text of the message displayed if the specified value is not a number.
         */
        get: function () {
            return this._getOption('invalidValueMessage');
        },
        set: function (value) {
            this._setOption('invalidValueMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "isValid", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "max", {
        /**
         * The maximum value accepted by the number box.
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "min", {
        /**
         * The minimum value accepted by the number box.
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "mode", {
        /**
         * Specifies the value to be passed to the type attribute of the underlying `` element.
         */
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "name", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "placeholder", {
        /**
         * The text displayed by the widget when the widget value is empty.
         */
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "showClearButton", {
        /**
         * Specifies whether to display the Clear button in the widget.
         */
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "showSpinButtons", {
        /**
         * Specifies whether to show the buttons that change the value by a step.
         */
        get: function () {
            return this._getOption('showSpinButtons');
        },
        set: function (value) {
            this._setOption('showSpinButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "step", {
        /**
         * Specifies how much the widget's value changes when using the spin buttons, Up/Down arrow keys, or mouse wheel.
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "stylingMode", {
        /**
         * Specifies how the widget's text field is styled.
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "text", {
        /**
         * The read-only option that holds the text displayed by the widget input element.
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "useLargeSpinButtons", {
        /**
         * Specifies whether to use touch friendly spin buttons. Applies only if showSpinButtons is true.
         */
        get: function () {
            return this._getOption('useLargeSpinButtons');
        },
        set: function (value) {
            this._setOption('useLargeSpinButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "validationError", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "value", {
        /**
         * The current number box value.
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "valueChangeEvent", {
        /**
         * Specifies the DOM events after which the widget's value should be updated.
         */
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxNumberBoxComponent.prototype, "width", {
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
    DxNumberBoxComponent.prototype.change = function (_) { };
    Object.defineProperty(DxNumberBoxComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    DxNumberBoxComponent.prototype._createInstance = function (element, options) {
        return new DxNumberBox(element, options);
    };
    DxNumberBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxNumberBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxNumberBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxNumberBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxNumberBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxNumberBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxNumberBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('buttons', changes);
    };
    DxNumberBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxNumberBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxNumberBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxNumberBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxNumberBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxNumberBoxComponent.ctorParameters = function () { return [
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
    ], DxNumberBoxComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "buttons", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "format", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "inputAttr", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "invalidValueMessage", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "max", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "min", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "mode", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "showClearButton", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "showSpinButtons", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "step", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "useLargeSpinButtons", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "valueChangeEvent", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxNumberBoxComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onCut", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onInput", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "buttonsChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "formatChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "inputAttrChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "invalidValueMessageChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "maxChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "minChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "modeChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "showSpinButtonsChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "stepChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "useLargeSpinButtonsChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxNumberBoxComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxNumberBoxComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxNumberBoxComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiButtonComponent)
    ], DxNumberBoxComponent.prototype, "buttonsChildren", null);
    DxNumberBoxComponent = __decorate([
        Component({
            selector: 'dx-number-box',
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
    ], DxNumberBoxComponent);
    return DxNumberBoxComponent;
}(DxComponent));
var DxNumberBoxModule = /** @class */ (function () {
    function DxNumberBoxModule() {
    }
    DxNumberBoxModule = __decorate([
        NgModule({
            imports: [
                DxiButtonModule,
                DxoOptionsModule,
                DxoFormatModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxNumberBoxComponent
            ],
            exports: [
                DxNumberBoxComponent,
                DxiButtonModule,
                DxoOptionsModule,
                DxoFormatModule,
                DxTemplateModule
            ]
        })
    ], DxNumberBoxModule);
    return DxNumberBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxNumberBoxComponent, DxNumberBoxModule };
//# sourceMappingURL=devextreme-angular-ui-number-box.js.map

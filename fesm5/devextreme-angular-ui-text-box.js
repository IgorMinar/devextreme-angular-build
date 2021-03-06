import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxTextBox from 'devextreme/ui/text_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiButtonComponent, DxiButtonModule, DxoOptionsModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(function () { return DxTextBoxComponent; }),
    multi: true
};
/**
 * The TextBox is a widget that enables a user to enter and edit a single line of text.
 */
var DxTextBoxComponent = /** @class */ (function (_super) {
    __extends(DxTextBoxComponent, _super);
    function DxTextBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'maskChange' },
            { emit: 'maskCharChange' },
            { emit: 'maskInvalidMessageChange' },
            { emit: 'maskRulesChange' },
            { emit: 'maxLengthChange' },
            { emit: 'modeChange' },
            { emit: 'nameChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showMaskModeChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'useMaskedValueChange' },
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
    Object.defineProperty(DxTextBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "buttons", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "isValid", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "mask", {
        /**
         * The editor mask that specifies the custom format of the entered string.
         */
        get: function () {
            return this._getOption('mask');
        },
        set: function (value) {
            this._setOption('mask', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskChar", {
        /**
         * Specifies a mask placeholder character.
         */
        get: function () {
            return this._getOption('maskChar');
        },
        set: function (value) {
            this._setOption('maskChar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskInvalidMessage", {
        /**
         * A message displayed when the entered text does not match the specified pattern.
         */
        get: function () {
            return this._getOption('maskInvalidMessage');
        },
        set: function (value) {
            this._setOption('maskInvalidMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskRules", {
        /**
         * Specifies custom mask rules.
         */
        get: function () {
            return this._getOption('maskRules');
        },
        set: function (value) {
            this._setOption('maskRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maxLength", {
        /**
         * Specifies the maximum number of characters you can enter into the textbox.
         */
        get: function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "mode", {
        /**
         * The "mode" attribute value of the actual HTML input element representing the text box.
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
    Object.defineProperty(DxTextBoxComponent.prototype, "name", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "placeholder", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "showClearButton", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "showMaskMode", {
        /**
         * Specifies when the widget shows the mask. Applies only if useMaskedValue is true.
         */
        get: function () {
            return this._getOption('showMaskMode');
        },
        set: function (value) {
            this._setOption('showMaskMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "spellcheck", {
        /**
         * Specifies whether or not the widget checks the inner text for spelling mistakes.
         */
        get: function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "stylingMode", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "text", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "useMaskedValue", {
        /**
         * Specifies whether the value should contain mask characters or not.
         */
        get: function () {
            return this._getOption('useMaskedValue');
        },
        set: function (value) {
            this._setOption('useMaskedValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "validationError", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "value", {
        /**
         * Specifies a value the widget displays.
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
    Object.defineProperty(DxTextBoxComponent.prototype, "valueChangeEvent", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "width", {
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
    DxTextBoxComponent.prototype.change = function (_) { };
    Object.defineProperty(DxTextBoxComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTextBoxComponent.prototype._createInstance = function (element, options) {
        return new DxTextBox(element, options);
    };
    DxTextBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxTextBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxTextBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxTextBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxTextBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxTextBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTextBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('buttons', changes);
    };
    DxTextBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTextBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxTextBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTextBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxTextBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxTextBoxComponent.ctorParameters = function () { return [
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
    ], DxTextBoxComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "buttons", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "inputAttr", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "mask", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "maskChar", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "maskInvalidMessage", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "maskRules", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "maxLength", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "mode", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "showClearButton", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "showMaskMode", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "spellcheck", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "useMaskedValue", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "valueChangeEvent", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxTextBoxComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onCut", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onInput", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "buttonsChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "inputAttrChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "maskChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "maskCharChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "maskInvalidMessageChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "maskRulesChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "modeChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "showMaskModeChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "spellcheckChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "useMaskedValueChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxTextBoxComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxTextBoxComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxTextBoxComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiButtonComponent)
    ], DxTextBoxComponent.prototype, "buttonsChildren", null);
    DxTextBoxComponent = __decorate([
        Component({
            selector: 'dx-text-box',
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
    ], DxTextBoxComponent);
    return DxTextBoxComponent;
}(DxComponent));
var DxTextBoxModule = /** @class */ (function () {
    function DxTextBoxModule() {
    }
    DxTextBoxModule = __decorate([
        NgModule({
            imports: [
                DxiButtonModule,
                DxoOptionsModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxTextBoxComponent
            ],
            exports: [
                DxTextBoxComponent,
                DxiButtonModule,
                DxoOptionsModule,
                DxTemplateModule
            ]
        })
    ], DxTextBoxModule);
    return DxTextBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxTextBoxComponent, DxTextBoxModule };
//# sourceMappingURL=devextreme-angular-ui-text-box.js.map

import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxColorBox from 'devextreme/ui/color_box';
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
    useExisting: forwardRef(function () { return DxColorBoxComponent; }),
    multi: true
};
/**
 * The ColorBox is a widget that allows an end user to enter a color or pick it out from the drop-down editor.
 */
var DxColorBoxComponent = /** @class */ (function (_super) {
    __extends(DxColorBoxComponent, _super);
    function DxColorBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
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
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'buttonsChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'editAlphaChannelChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'keyStepChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
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
    Object.defineProperty(DxColorBoxComponent.prototype, "acceptCustomValue", {
        /**
         * Specifies whether or not the widget allows an end-user to enter a custom value.
         */
        get: function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "applyButtonText", {
        /**
         * Specifies the text displayed on the button that applies changes and closes the drop-down editor.
         */
        get: function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "applyValueMode", {
        /**
         * Specifies the way an end-user applies the selected value.
         */
        get: function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "buttons", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "cancelButtonText", {
        /**
         * Specifies the text displayed on the button that cancels changes and closes the drop-down editor.
         */
        get: function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "deferRendering", {
        /**
         * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
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
    Object.defineProperty(DxColorBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "dropDownButtonTemplate", {
        /**
         * Specifies a custom template for the drop-down button.
         */
        get: function () {
            return this._getOption('dropDownButtonTemplate');
        },
        set: function (value) {
            this._setOption('dropDownButtonTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "editAlphaChannel", {
        /**
         * Specifies whether or not the widget value includes the alpha channel component.
         */
        get: function () {
            return this._getOption('editAlphaChannel');
        },
        set: function (value) {
            this._setOption('editAlphaChannel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "fieldTemplate", {
        /**
         * Specifies a custom template for the input field. Must contain the TextBox widget.
         */
        get: function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "isValid", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "keyStep", {
        /**
         * Specifies the size of a step by which a handle is moved using a keyboard shortcut.
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
    Object.defineProperty(DxColorBoxComponent.prototype, "name", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "opened", {
        /**
         * Specifies whether or not the drop-down editor is displayed.
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
    Object.defineProperty(DxColorBoxComponent.prototype, "placeholder", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "stylingMode", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "text", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "validationError", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "value", {
        /**
         * Specifies the currently selected value.
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
    Object.defineProperty(DxColorBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "width", {
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
    DxColorBoxComponent.prototype.change = function (_) { };
    Object.defineProperty(DxColorBoxComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    DxColorBoxComponent.prototype._createInstance = function (element, options) {
        return new DxColorBox(element, options);
    };
    DxColorBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxColorBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxColorBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxColorBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxColorBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxColorBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxColorBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('buttons', changes);
    };
    DxColorBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxColorBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxColorBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxColorBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxColorBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxColorBoxComponent.ctorParameters = function () { return [
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
    ], DxColorBoxComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "acceptCustomValue", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "applyButtonText", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "applyValueMode", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "buttons", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "cancelButtonText", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "dropDownButtonTemplate", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "editAlphaChannel", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "fieldTemplate", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "inputAttr", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "keyStep", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxColorBoxComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onClosed", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onCut", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onInput", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onOpened", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "acceptCustomValueChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "applyButtonTextChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "applyValueModeChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "buttonsChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "cancelButtonTextChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "editAlphaChannelChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "fieldTemplateChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "inputAttrChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "keyStepChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "openedChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxColorBoxComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxColorBoxComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxColorBoxComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiButtonComponent)
    ], DxColorBoxComponent.prototype, "buttonsChildren", null);
    DxColorBoxComponent = __decorate([
        Component({
            selector: 'dx-color-box',
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
    ], DxColorBoxComponent);
    return DxColorBoxComponent;
}(DxComponent));
var DxColorBoxModule = /** @class */ (function () {
    function DxColorBoxModule() {
    }
    DxColorBoxModule = __decorate([
        NgModule({
            imports: [
                DxiButtonModule,
                DxoOptionsModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxColorBoxComponent
            ],
            exports: [
                DxColorBoxComponent,
                DxiButtonModule,
                DxoOptionsModule,
                DxTemplateModule
            ]
        })
    ], DxColorBoxModule);
    return DxColorBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxColorBoxComponent, DxColorBoxModule };
//# sourceMappingURL=devextreme-angular-ui-color-box.js.map

import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxDateBox from 'devextreme/ui/date_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiButtonComponent, DxiButtonModule, DxoOptionsModule, DxoCalendarOptionsModule, DxoDisplayFormatModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(function () { return DxDateBoxComponent; }),
    multi: true
};
/**
 * The DateBox is a widget that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.
 */
var DxDateBoxComponent = /** @class */ (function (_super) {
    __extends(DxDateBoxComponent, _super);
    function DxDateBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
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
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'adaptivityEnabledChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'buttonsChange' },
            { emit: 'calendarOptionsChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'dateOutOfRangeMessageChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledDatesChange' },
            { emit: 'displayFormatChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'intervalChange' },
            { emit: 'invalidDateMessageChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'maxLengthChange' },
            { emit: 'maxZoomLevelChange' },
            { emit: 'minChange' },
            { emit: 'minZoomLevelChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'pickerTypeChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showAnalogClockChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDropDownButtonChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useMaskBehaviorChange' },
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
    Object.defineProperty(DxDateBoxComponent.prototype, "acceptCustomValue", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "adaptivityEnabled", {
        /**
         * Specifies whether or not adaptive widget rendering is enabled on a small screen.
         */
        get: function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "applyButtonText", {
        /**
         * The text displayed on the Apply button.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "applyValueMode", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "buttons", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "calendarOptions", {
        /**
         * Configures the calendar's value picker. Applies only if the pickerType is "calendar".
         */
        get: function () {
            return this._getOption('calendarOptions');
        },
        set: function (value) {
            this._setOption('calendarOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "cancelButtonText", {
        /**
         * The text displayed on the Cancel button.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "dateOutOfRangeMessage", {
        /**
         * Specifies the message displayed if the specified date is later than the max value or earlier than the min value.
         */
        get: function () {
            return this._getOption('dateOutOfRangeMessage');
        },
        set: function (value) {
            this._setOption('dateOutOfRangeMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dateSerializationFormat", {
        /**
         * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
         */
        get: function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "deferRendering", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "disabledDates", {
        /**
         * Specifies dates to be disabled. Applies only if pickerType is "calendar".
         */
        get: function () {
            return this._getOption('disabledDates');
        },
        set: function (value) {
            this._setOption('disabledDates', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "displayFormat", {
        /**
         * Specifies the date display format. Ignored if the pickerType option is "native"
         */
        get: function () {
            return this._getOption('displayFormat');
        },
        set: function (value) {
            this._setOption('displayFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dropDownButtonTemplate", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "interval", {
        /**
         * Specifies the interval between neighboring values in the popup list in minutes.
         */
        get: function () {
            return this._getOption('interval');
        },
        set: function (value) {
            this._setOption('interval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "invalidDateMessage", {
        /**
         * Specifies the message displayed if the typed value is not a valid date or time.
         */
        get: function () {
            return this._getOption('invalidDateMessage');
        },
        set: function (value) {
            this._setOption('invalidDateMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "isValid", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "max", {
        /**
         * The last date that can be selected within the widget.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "maxLength", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "maxZoomLevel", {
        /**
         * Use the calendarOptions option instead.
         */
        get: function () {
            return this._getOption('maxZoomLevel');
        },
        set: function (value) {
            this._setOption('maxZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "min", {
        /**
         * The minimum date that can be selected within the widget.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "minZoomLevel", {
        /**
         * Use the calendarOptions option instead.
         */
        get: function () {
            return this._getOption('minZoomLevel');
        },
        set: function (value) {
            this._setOption('minZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "name", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "opened", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "openOnFieldClick", {
        /**
         * Specifies whether a user can open the drop-down list by clicking a text field.
         */
        get: function () {
            return this._getOption('openOnFieldClick');
        },
        set: function (value) {
            this._setOption('openOnFieldClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "pickerType", {
        /**
         * Specifies the type of the date/time picker.
         */
        get: function () {
            return this._getOption('pickerType');
        },
        set: function (value) {
            this._setOption('pickerType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "placeholder", {
        /**
         * Specifies a placeholder for the input field.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "showAnalogClock", {
        /**
         * Specifies whether to show the analog clock in the value picker. Applies only if type is "datetime" and pickerType is "calendar".
         */
        get: function () {
            return this._getOption('showAnalogClock');
        },
        set: function (value) {
            this._setOption('showAnalogClock', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "showClearButton", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "showDropDownButton", {
        /**
         * Specifies whether the drop-down button is visible.
         */
        get: function () {
            return this._getOption('showDropDownButton');
        },
        set: function (value) {
            this._setOption('showDropDownButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "spellcheck", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "stylingMode", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "text", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "type", {
        /**
         * A format used to display date/time information.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "useMaskBehavior", {
        /**
         * Specifies whether to control user input using a mask created based on the displayFormat.
         */
        get: function () {
            return this._getOption('useMaskBehavior');
        },
        set: function (value) {
            this._setOption('useMaskBehavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "validationError", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "value", {
        /**
         * An object or a value specifying the date and time currently selected using the date box.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "valueChangeEvent", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "width", {
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
    DxDateBoxComponent.prototype.change = function (_) { };
    Object.defineProperty(DxDateBoxComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDateBoxComponent.prototype._createInstance = function (element, options) {
        return new DxDateBox(element, options);
    };
    DxDateBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxDateBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxDateBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxDateBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxDateBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxDateBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDateBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('buttons', changes);
        this.setupChanges('disabledDates', changes);
    };
    DxDateBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxDateBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._idh.doCheck('disabledDates');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxDateBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxDateBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxDateBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxDateBoxComponent.ctorParameters = function () { return [
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
    ], DxDateBoxComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "acceptCustomValue", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "adaptivityEnabled", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "applyButtonText", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "applyValueMode", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "buttons", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "calendarOptions", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "cancelButtonText", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "dateOutOfRangeMessage", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "dateSerializationFormat", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "disabledDates", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "displayFormat", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "dropDownButtonTemplate", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "inputAttr", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "interval", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "invalidDateMessage", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "max", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "maxLength", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "maxZoomLevel", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "min", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "minZoomLevel", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "openOnFieldClick", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "pickerType", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "showAnalogClock", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "showClearButton", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "showDropDownButton", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "spellcheck", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "type", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "useMaskBehavior", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "valueChangeEvent", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxDateBoxComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onClosed", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onCut", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onInput", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onOpened", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "acceptCustomValueChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "adaptivityEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "applyButtonTextChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "applyValueModeChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "buttonsChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "calendarOptionsChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "cancelButtonTextChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "dateOutOfRangeMessageChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "dateSerializationFormatChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "disabledDatesChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "displayFormatChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "inputAttrChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "intervalChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "invalidDateMessageChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "maxChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "maxZoomLevelChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "minChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "minZoomLevelChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "openedChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "openOnFieldClickChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "pickerTypeChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "showAnalogClockChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "showDropDownButtonChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "spellcheckChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "typeChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "useMaskBehaviorChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxDateBoxComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxDateBoxComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxDateBoxComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiButtonComponent)
    ], DxDateBoxComponent.prototype, "buttonsChildren", null);
    DxDateBoxComponent = __decorate([
        Component({
            selector: 'dx-date-box',
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
    ], DxDateBoxComponent);
    return DxDateBoxComponent;
}(DxComponent));
var DxDateBoxModule = /** @class */ (function () {
    function DxDateBoxModule() {
    }
    DxDateBoxModule = __decorate([
        NgModule({
            imports: [
                DxiButtonModule,
                DxoOptionsModule,
                DxoCalendarOptionsModule,
                DxoDisplayFormatModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxDateBoxComponent
            ],
            exports: [
                DxDateBoxComponent,
                DxiButtonModule,
                DxoOptionsModule,
                DxoCalendarOptionsModule,
                DxoDisplayFormatModule,
                DxTemplateModule
            ]
        })
    ], DxDateBoxModule);
    return DxDateBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxDateBoxComponent, DxDateBoxModule };
//# sourceMappingURL=devextreme-angular-ui-date-box.js.map

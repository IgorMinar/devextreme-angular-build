var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChild, forwardRef, HostListener, ContentChildren, QueryList } from '@angular/core';

import DxDateBox from 'devextreme/ui/date_box';
import { DxValidatorComponent } from './validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiButtonModule } from './nested/button-dxi';
import { DxoOptionsModule } from './nested/options';
import { DxoCalendarOptionsModule } from './nested/calendar-options';
import { DxoDisplayFormatModule } from './nested/display-format';
import { DxiButtonComponent } from './nested/button-dxi';
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxDateBoxComponent; }),
    multi: true
};
/**
 * The DateBox is a widget that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.
 */
var DxDateBoxComponent = (function (_super) {
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
        get: /**
             * Specifies whether or not the widget allows an end-user to enter a custom value.
             */
        function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "adaptivityEnabled", {
        get: /**
             * Specifies whether or not adaptive widget rendering is enabled on a small screen.
             */
        function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "applyButtonText", {
        get: /**
             * The text displayed on the Apply button.
             */
        function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "applyValueMode", {
        get: /**
             * Specifies the way an end-user applies the selected value.
             */
        function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "buttons", {
        get: /**
             * Allows you to add custom buttons to the input text field.
             */
        function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this._setOption('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "calendarOptions", {
        get: /**
             * Configures the calendar's value picker. Applies only if the pickerType is "calendar".
             */
        function () {
            return this._getOption('calendarOptions');
        },
        set: function (value) {
            this._setOption('calendarOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "cancelButtonText", {
        get: /**
             * The text displayed on the Cancel button.
             */
        function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dateOutOfRangeMessage", {
        get: /**
             * Specifies the message displayed if the specified date is later than the max value or earlier than the min value.
             */
        function () {
            return this._getOption('dateOutOfRangeMessage');
        },
        set: function (value) {
            this._setOption('dateOutOfRangeMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dateSerializationFormat", {
        get: /**
             * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
             */
        function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "disabledDates", {
        get: /**
             * Specifies dates to be disabled. Applies only if pickerType is "calendar".
             */
        function () {
            return this._getOption('disabledDates');
        },
        set: function (value) {
            this._setOption('disabledDates', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "displayFormat", {
        get: /**
             * Specifies the date display format. Ignored if the pickerType option is "native"
             */
        function () {
            return this._getOption('displayFormat');
        },
        set: function (value) {
            this._setOption('displayFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dropDownButtonTemplate", {
        get: /**
             * Specifies a custom template for the drop-down button.
             */
        function () {
            return this._getOption('dropDownButtonTemplate');
        },
        set: function (value) {
            this._setOption('dropDownButtonTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "inputAttr", {
        get: /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
        function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "interval", {
        get: /**
             * Specifies the interval between neighboring values in the popup list in minutes.
             */
        function () {
            return this._getOption('interval');
        },
        set: function (value) {
            this._setOption('interval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "invalidDateMessage", {
        get: /**
             * Specifies the message displayed if the typed value is not a valid date or time.
             */
        function () {
            return this._getOption('invalidDateMessage');
        },
        set: function (value) {
            this._setOption('invalidDateMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "max", {
        get: /**
             * The last date that can be selected within the widget.
             */
        function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "maxLength", {
        get: /**
             * Specifies the maximum number of characters you can enter into the textbox.
             */
        function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "maxZoomLevel", {
        get: /**
             * Use the calendarOptions option instead.
             */
        function () {
            return this._getOption('maxZoomLevel');
        },
        set: function (value) {
            this._setOption('maxZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "min", {
        get: /**
             * The minimum date that can be selected within the widget.
             */
        function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "minZoomLevel", {
        get: /**
             * Use the calendarOptions option instead.
             */
        function () {
            return this._getOption('minZoomLevel');
        },
        set: function (value) {
            this._setOption('minZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "name", {
        get: /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "opened", {
        get: /**
             * Specifies whether or not the drop-down editor is displayed.
             */
        function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "openOnFieldClick", {
        get: /**
             * Specifies whether a user can open the drop-down list by clicking a text field.
             */
        function () {
            return this._getOption('openOnFieldClick');
        },
        set: function (value) {
            this._setOption('openOnFieldClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "pickerType", {
        get: /**
             * Specifies the type of the date/time picker.
             */
        function () {
            return this._getOption('pickerType');
        },
        set: function (value) {
            this._setOption('pickerType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "placeholder", {
        get: /**
             * Specifies a placeholder for the input field.
             */
        function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "readOnly", {
        get: /**
             * Specifies whether the editor is read-only.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "showAnalogClock", {
        get: /**
             * Specifies whether to show the analog clock in the value picker. Applies only if type is "datetime" and pickerType is "calendar".
             */
        function () {
            return this._getOption('showAnalogClock');
        },
        set: function (value) {
            this._setOption('showAnalogClock', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "showClearButton", {
        get: /**
             * Specifies whether to display the Clear button in the widget.
             */
        function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "showDropDownButton", {
        get: /**
             * Specifies whether the drop-down button is visible.
             */
        function () {
            return this._getOption('showDropDownButton');
        },
        set: function (value) {
            this._setOption('showDropDownButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "spellcheck", {
        get: /**
             * Specifies whether or not the widget checks the inner text for spelling mistakes.
             */
        function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the widget's text field is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "text", {
        get: /**
             * The read-only option that holds the text displayed by the widget input element.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "type", {
        get: /**
             * A format used to display date/time information.
             */
        function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "useMaskBehavior", {
        get: /**
             * Specifies whether to control user input using a mask created based on the displayFormat.
             */
        function () {
            return this._getOption('useMaskBehavior');
        },
        set: function (value) {
            this._setOption('useMaskBehavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "value", {
        get: /**
             * An object or a value specifying the date and time currently selected using the date box.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "valueChangeEvent", {
        get: /**
             * Specifies the DOM events after which the widget's value should be updated.
             */
        function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
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
    DxDateBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-date-box',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxDateBoxComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxDateBoxComponent.propDecorators = {
        "validator": [{ type: ContentChild, args: [DxValidatorComponent,] },],
        "acceptCustomValue": [{ type: Input },],
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "adaptivityEnabled": [{ type: Input },],
        "applyButtonText": [{ type: Input },],
        "applyValueMode": [{ type: Input },],
        "buttons": [{ type: Input },],
        "calendarOptions": [{ type: Input },],
        "cancelButtonText": [{ type: Input },],
        "dateOutOfRangeMessage": [{ type: Input },],
        "dateSerializationFormat": [{ type: Input },],
        "deferRendering": [{ type: Input },],
        "disabled": [{ type: Input },],
        "disabledDates": [{ type: Input },],
        "displayFormat": [{ type: Input },],
        "dropDownButtonTemplate": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "inputAttr": [{ type: Input },],
        "interval": [{ type: Input },],
        "invalidDateMessage": [{ type: Input },],
        "isValid": [{ type: Input },],
        "max": [{ type: Input },],
        "maxLength": [{ type: Input },],
        "maxZoomLevel": [{ type: Input },],
        "min": [{ type: Input },],
        "minZoomLevel": [{ type: Input },],
        "name": [{ type: Input },],
        "opened": [{ type: Input },],
        "openOnFieldClick": [{ type: Input },],
        "pickerType": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "readOnly": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "showAnalogClock": [{ type: Input },],
        "showClearButton": [{ type: Input },],
        "showDropDownButton": [{ type: Input },],
        "spellcheck": [{ type: Input },],
        "stylingMode": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "text": [{ type: Input },],
        "type": [{ type: Input },],
        "useMaskBehavior": [{ type: Input },],
        "validationError": [{ type: Input },],
        "validationMessageMode": [{ type: Input },],
        "value": [{ type: Input },],
        "valueChangeEvent": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onChange": [{ type: Output },],
        "onClosed": [{ type: Output },],
        "onContentReady": [{ type: Output },],
        "onCopy": [{ type: Output },],
        "onCut": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onEnterKey": [{ type: Output },],
        "onFocusIn": [{ type: Output },],
        "onFocusOut": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onInput": [{ type: Output },],
        "onKeyDown": [{ type: Output },],
        "onKeyPress": [{ type: Output },],
        "onKeyUp": [{ type: Output },],
        "onOpened": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onPaste": [{ type: Output },],
        "onValueChanged": [{ type: Output },],
        "acceptCustomValueChange": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "adaptivityEnabledChange": [{ type: Output },],
        "applyButtonTextChange": [{ type: Output },],
        "applyValueModeChange": [{ type: Output },],
        "buttonsChange": [{ type: Output },],
        "calendarOptionsChange": [{ type: Output },],
        "cancelButtonTextChange": [{ type: Output },],
        "dateOutOfRangeMessageChange": [{ type: Output },],
        "dateSerializationFormatChange": [{ type: Output },],
        "deferRenderingChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "disabledDatesChange": [{ type: Output },],
        "displayFormatChange": [{ type: Output },],
        "dropDownButtonTemplateChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "inputAttrChange": [{ type: Output },],
        "intervalChange": [{ type: Output },],
        "invalidDateMessageChange": [{ type: Output },],
        "isValidChange": [{ type: Output },],
        "maxChange": [{ type: Output },],
        "maxLengthChange": [{ type: Output },],
        "maxZoomLevelChange": [{ type: Output },],
        "minChange": [{ type: Output },],
        "minZoomLevelChange": [{ type: Output },],
        "nameChange": [{ type: Output },],
        "openedChange": [{ type: Output },],
        "openOnFieldClickChange": [{ type: Output },],
        "pickerTypeChange": [{ type: Output },],
        "placeholderChange": [{ type: Output },],
        "readOnlyChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "showAnalogClockChange": [{ type: Output },],
        "showClearButtonChange": [{ type: Output },],
        "showDropDownButtonChange": [{ type: Output },],
        "spellcheckChange": [{ type: Output },],
        "stylingModeChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "textChange": [{ type: Output },],
        "typeChange": [{ type: Output },],
        "useMaskBehaviorChange": [{ type: Output },],
        "validationErrorChange": [{ type: Output },],
        "validationMessageModeChange": [{ type: Output },],
        "valueChange": [{ type: Output },],
        "valueChangeEventChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "onBlur": [{ type: Output },],
        "change": [{ type: HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: HostListener, args: ['onBlur', ['$event'],] },],
        "buttonsChildren": [{ type: ContentChildren, args: [DxiButtonComponent,] },],
    };
    return DxDateBoxComponent;
}(DxComponent));
export { DxDateBoxComponent };
var DxDateBoxModule = (function () {
    function DxDateBoxModule() {
    }
    DxDateBoxModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxDateBoxModule;
}());
export { DxDateBoxModule };
//# sourceMappingURL=date-box.js.map
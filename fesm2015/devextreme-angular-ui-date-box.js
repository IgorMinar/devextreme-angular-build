import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxDateBox from 'devextreme/ui/date_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
const CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxDateBoxComponent),
    multi: true
};
/**
 * The DateBox is a widget that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.
 */
let DxDateBoxComponent = class DxDateBoxComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.touched = (_) => { };
        this._createEventEmitters([
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
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies whether or not the widget allows an end-user to enter a custom value.
     */
    get acceptCustomValue() {
        return this._getOption('acceptCustomValue');
    }
    set acceptCustomValue(value) {
        this._setOption('acceptCustomValue', value);
    }
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Specifies whether or not adaptive widget rendering is enabled on a small screen.
     */
    get adaptivityEnabled() {
        return this._getOption('adaptivityEnabled');
    }
    set adaptivityEnabled(value) {
        this._setOption('adaptivityEnabled', value);
    }
    /**
     * The text displayed on the Apply button.
     */
    get applyButtonText() {
        return this._getOption('applyButtonText');
    }
    set applyButtonText(value) {
        this._setOption('applyButtonText', value);
    }
    /**
     * Specifies the way an end-user applies the selected value.
     */
    get applyValueMode() {
        return this._getOption('applyValueMode');
    }
    set applyValueMode(value) {
        this._setOption('applyValueMode', value);
    }
    /**
     * Allows you to add custom buttons to the input text field.
     */
    get buttons() {
        return this._getOption('buttons');
    }
    set buttons(value) {
        this._setOption('buttons', value);
    }
    /**
     * Configures the calendar's value picker. Applies only if the pickerType is "calendar".
     */
    get calendarOptions() {
        return this._getOption('calendarOptions');
    }
    set calendarOptions(value) {
        this._setOption('calendarOptions', value);
    }
    /**
     * The text displayed on the Cancel button.
     */
    get cancelButtonText() {
        return this._getOption('cancelButtonText');
    }
    set cancelButtonText(value) {
        this._setOption('cancelButtonText', value);
    }
    /**
     * Specifies the message displayed if the specified date is later than the max value or earlier than the min value.
     */
    get dateOutOfRangeMessage() {
        return this._getOption('dateOutOfRangeMessage');
    }
    set dateOutOfRangeMessage(value) {
        this._setOption('dateOutOfRangeMessage', value);
    }
    /**
     * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
     */
    get dateSerializationFormat() {
        return this._getOption('dateSerializationFormat');
    }
    set dateSerializationFormat(value) {
        this._setOption('dateSerializationFormat', value);
    }
    /**
     * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
     */
    get deferRendering() {
        return this._getOption('deferRendering');
    }
    set deferRendering(value) {
        this._setOption('deferRendering', value);
    }
    /**
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /**
     * Specifies dates to be disabled. Applies only if pickerType is "calendar".
     */
    get disabledDates() {
        return this._getOption('disabledDates');
    }
    set disabledDates(value) {
        this._setOption('disabledDates', value);
    }
    /**
     * Specifies the date display format. Ignored if the pickerType option is "native"
     */
    get displayFormat() {
        return this._getOption('displayFormat');
    }
    set displayFormat(value) {
        this._setOption('displayFormat', value);
    }
    /**
     * Specifies a custom template for the drop-down button.
     */
    get dropDownButtonTemplate() {
        return this._getOption('dropDownButtonTemplate');
    }
    set dropDownButtonTemplate(value) {
        this._setOption('dropDownButtonTemplate', value);
    }
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    /**
     * Specifies the widget's height.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    /**
     * Specifies the attributes to be passed on to the underlying HTML element.
     */
    get inputAttr() {
        return this._getOption('inputAttr');
    }
    set inputAttr(value) {
        this._setOption('inputAttr', value);
    }
    /**
     * Specifies the interval between neighboring values in the popup list in minutes.
     */
    get interval() {
        return this._getOption('interval');
    }
    set interval(value) {
        this._setOption('interval', value);
    }
    /**
     * Specifies the message displayed if the typed value is not a valid date or time.
     */
    get invalidDateMessage() {
        return this._getOption('invalidDateMessage');
    }
    set invalidDateMessage(value) {
        this._setOption('invalidDateMessage', value);
    }
    /**
     * Specifies whether the editor's value is valid.
     */
    get isValid() {
        return this._getOption('isValid');
    }
    set isValid(value) {
        this._setOption('isValid', value);
    }
    /**
     * The last date that can be selected within the widget.
     */
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    /**
     * Specifies the maximum number of characters you can enter into the textbox.
     */
    get maxLength() {
        return this._getOption('maxLength');
    }
    set maxLength(value) {
        this._setOption('maxLength', value);
    }
    /**
     * Use the calendarOptions option instead.
     */
    get maxZoomLevel() {
        return this._getOption('maxZoomLevel');
    }
    set maxZoomLevel(value) {
        this._setOption('maxZoomLevel', value);
    }
    /**
     * The minimum date that can be selected within the widget.
     */
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    /**
     * Use the calendarOptions option instead.
     */
    get minZoomLevel() {
        return this._getOption('minZoomLevel');
    }
    set minZoomLevel(value) {
        this._setOption('minZoomLevel', value);
    }
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    /**
     * Specifies whether or not the drop-down editor is displayed.
     */
    get opened() {
        return this._getOption('opened');
    }
    set opened(value) {
        this._setOption('opened', value);
    }
    /**
     * Specifies whether a user can open the drop-down list by clicking a text field.
     */
    get openOnFieldClick() {
        return this._getOption('openOnFieldClick');
    }
    set openOnFieldClick(value) {
        this._setOption('openOnFieldClick', value);
    }
    /**
     * Specifies the type of the date/time picker.
     */
    get pickerType() {
        return this._getOption('pickerType');
    }
    set pickerType(value) {
        this._setOption('pickerType', value);
    }
    /**
     * Specifies a placeholder for the input field.
     */
    get placeholder() {
        return this._getOption('placeholder');
    }
    set placeholder(value) {
        this._setOption('placeholder', value);
    }
    /**
     * Specifies whether the editor is read-only.
     */
    get readOnly() {
        return this._getOption('readOnly');
    }
    set readOnly(value) {
        this._setOption('readOnly', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Specifies whether to show the analog clock in the value picker. Applies only if type is "datetime" and pickerType is "calendar".
     */
    get showAnalogClock() {
        return this._getOption('showAnalogClock');
    }
    set showAnalogClock(value) {
        this._setOption('showAnalogClock', value);
    }
    /**
     * Specifies whether to display the Clear button in the widget.
     */
    get showClearButton() {
        return this._getOption('showClearButton');
    }
    set showClearButton(value) {
        this._setOption('showClearButton', value);
    }
    /**
     * Specifies whether the drop-down button is visible.
     */
    get showDropDownButton() {
        return this._getOption('showDropDownButton');
    }
    set showDropDownButton(value) {
        this._setOption('showDropDownButton', value);
    }
    /**
     * Specifies whether or not the widget checks the inner text for spelling mistakes.
     */
    get spellcheck() {
        return this._getOption('spellcheck');
    }
    set spellcheck(value) {
        this._setOption('spellcheck', value);
    }
    /**
     * Specifies how the widget's text field is styled.
     */
    get stylingMode() {
        return this._getOption('stylingMode');
    }
    set stylingMode(value) {
        this._setOption('stylingMode', value);
    }
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * The read-only option that holds the text displayed by the widget input element.
     */
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    /**
     * A format used to display date/time information.
     */
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    /**
     * Specifies whether to control user input using a mask created based on the displayFormat.
     */
    get useMaskBehavior() {
        return this._getOption('useMaskBehavior');
    }
    set useMaskBehavior(value) {
        this._setOption('useMaskBehavior', value);
    }
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    get validationError() {
        return this._getOption('validationError');
    }
    set validationError(value) {
        this._setOption('validationError', value);
    }
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    get validationMessageMode() {
        return this._getOption('validationMessageMode');
    }
    set validationMessageMode(value) {
        this._setOption('validationMessageMode', value);
    }
    /**
     * An object or a value specifying the date and time currently selected using the date box.
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    /**
     * Specifies the DOM events after which the widget's value should be updated.
     */
    get valueChangeEvent() {
        return this._getOption('valueChangeEvent');
    }
    set valueChangeEvent(value) {
        this._setOption('valueChangeEvent', value);
    }
    /**
     * Specifies whether the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /**
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    change(_) { }
    get buttonsChildren() {
        return this._getOption('buttons');
    }
    set buttonsChildren(value) {
        this.setChildren('buttons', value);
    }
    _createInstance(element, options) {
        return new DxDateBox(element, options);
    }
    writeValue(value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) { this.change = fn; }
    registerOnTouched(fn) { this.touched = fn; }
    _createWidget(element) {
        super._createWidget(element);
        this.instance.on('focusOut', (e) => {
            this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('buttons', changes);
        this.setupChanges('disabledDates', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('buttons');
        this._idh.doCheck('disabledDates');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    }
};
DxDateBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
let DxDateBoxModule = class DxDateBoxModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxDateBoxComponent, DxDateBoxModule };
//# sourceMappingURL=devextreme-angular-ui-date-box.js.map

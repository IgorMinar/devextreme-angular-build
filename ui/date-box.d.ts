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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnInit, AfterViewInit, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxDateBox from 'devextreme/ui/date_box';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiButtonComponent } from './nested/button-dxi';
/**
 * The DateBox is a widget that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.
 */
export declare class DxDateBoxComponent extends DxComponent implements OnDestroy, OnInit, AfterViewInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxDateBox;
    validator: DxValidatorComponent;
    /**
     * Specifies whether or not the widget allows an end-user to enter a custom value.
     */
    acceptCustomValue: boolean;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether or not adaptive widget rendering is enabled on a small screen.
     */
    adaptivityEnabled: boolean;
    /**
     * The text displayed on the Apply button.
     */
    applyButtonText: string;
    /**
     * Specifies the way an end-user applies the selected value.
     */
    applyValueMode: string;
    /**
     * Allows you to add custom buttons to the input text field.
     */
    buttons: Array<string | DevExpress.ui.dxTextEditorButton>;
    /**
     * Configures the calendar's value picker. Applies only if the pickerType is "calendar".
     */
    calendarOptions: DevExpress.ui.dxCalendarOptions;
    /**
     * The text displayed on the Cancel button.
     */
    cancelButtonText: string;
    /**
     * Specifies the message displayed if the specified date is later than the max value or earlier than the min value.
     */
    dateOutOfRangeMessage: string;
    /**
     * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
     */
    dateSerializationFormat: string;
    /**
     * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
     */
    deferRendering: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies dates to be disabled. Applies only if pickerType is "calendar".
     */
    disabledDates: Function | Array<Date>;
    /**
     * Specifies the date display format. Ignored if the pickerType option is "native"
     */
    displayFormat: DevExpress.ui.format | string;
    /**
     * Specifies a custom template for the drop-down button.
     */
    dropDownButtonTemplate: any;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * Specifies the attributes to be passed on to the underlying HTML element.
     */
    inputAttr: any;
    /**
     * Specifies the interval between neighboring values in the popup list in minutes.
     */
    interval: number;
    /**
     * Specifies the message displayed if the typed value is not a valid date or time.
     */
    invalidDateMessage: string;
    /**
     * Specifies whether the editor's value is valid.
     */
    isValid: boolean;
    /**
     * The last date that can be selected within the widget.
     */
    max: Date | number | string;
    /**
     * Specifies the maximum number of characters you can enter into the textbox.
     */
    maxLength: number | string;
    /**
     * Use the calendarOptions option instead.
     */
    maxZoomLevel: string;
    /**
     * The minimum date that can be selected within the widget.
     */
    min: Date | number | string;
    /**
     * Use the calendarOptions option instead.
     */
    minZoomLevel: string;
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    name: string;
    /**
     * Specifies whether or not the drop-down editor is displayed.
     */
    opened: boolean;
    /**
     * Specifies whether a user can open the drop-down list by clicking a text field.
     */
    openOnFieldClick: boolean;
    /**
     * Specifies the type of the date/time picker.
     */
    pickerType: string;
    /**
     * Specifies a placeholder for the input field.
     */
    placeholder: string;
    /**
     * Specifies whether the editor is read-only.
     */
    readOnly: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether to show the analog clock in the value picker. Applies only if type is "datetime" and pickerType is "calendar".
     */
    showAnalogClock: boolean;
    /**
     * Specifies whether to display the Clear button in the widget.
     */
    showClearButton: boolean;
    /**
     * Specifies whether the drop-down button is visible.
     */
    showDropDownButton: boolean;
    /**
     * Specifies whether or not the widget checks the inner text for spelling mistakes.
     */
    spellcheck: boolean;
    /**
     * Specifies how the widget's text field is styled.
     */
    stylingMode: string;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * The read-only option that holds the text displayed by the widget input element.
     */
    text: string;
    /**
     * A format used to display date/time information.
     */
    type: string;
    /**
     * Specifies whether to control user input using a mask created based on the displayFormat.
     */
    useMaskBehavior: boolean;
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    validationError: any;
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    validationMessageMode: string;
    /**
     * An object or a value specifying the date and time currently selected using the date box.
     */
    value: Date | number | string;
    /**
     * Specifies the DOM events after which the widget's value should be updated.
     */
    valueChangeEvent: string;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A function that is executed when the widget loses focus after the text field's content was changed using the keyboard.
     */
    onChange: EventEmitter<any>;
    /**
     * A function that is executed once the drop-down editor is closed.
     */
    onClosed: EventEmitter<any>;
    /**
     * A function that is executed when the widget's content is ready and each time the content is changed.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A function that is executed when the widget's input has been copied.
     */
    onCopy: EventEmitter<any>;
    /**
     * A function that is executed when the widget's input has been cut.
     */
    onCut: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function that is executed when the Enter key has been pressed while the widget is focused.
     */
    onEnterKey: EventEmitter<any>;
    /**
     * A function that is executed when the widget gets focus.
     */
    onFocusIn: EventEmitter<any>;
    /**
     * A function that is executed when the widget loses focus.
     */
    onFocusOut: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed each time the widget's input is changed while the widget is focused.
     */
    onInput: EventEmitter<any>;
    /**
     * A function that is executed when a user is pressing a key on the keyboard.
     */
    onKeyDown: EventEmitter<any>;
    /**
     * A function that is executed when a user presses a key on the keyboard.
     */
    onKeyPress: EventEmitter<any>;
    /**
     * A function that is executed when a user releases a key on the keyboard.
     */
    onKeyUp: EventEmitter<any>;
    /**
     * A function that is executed once the drop-down editor is opened.
     */
    onOpened: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when the widget's input has been pasted.
     */
    onPaste: EventEmitter<any>;
    /**
     * A function that is executed after the widget's value is changed.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * A handler for the acceptCustomValueChange event.
     */
    acceptCustomValueChange: EventEmitter<boolean>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the adaptivityEnabledChange event.
     */
    adaptivityEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the applyButtonTextChange event.
     */
    applyButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the applyValueModeChange event.
     */
    applyValueModeChange: EventEmitter<string>;
    /**
     * A handler for the buttonsChange event.
     */
    buttonsChange: EventEmitter<Array<string | DevExpress.ui.dxTextEditorButton>>;
    /**
     * A handler for the calendarOptionsChange event.
     */
    calendarOptionsChange: EventEmitter<DevExpress.ui.dxCalendarOptions>;
    /**
     * A handler for the cancelButtonTextChange event.
     */
    cancelButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the dateOutOfRangeMessageChange event.
     */
    dateOutOfRangeMessageChange: EventEmitter<string>;
    /**
     * A handler for the dateSerializationFormatChange event.
     */
    dateSerializationFormatChange: EventEmitter<string>;
    /**
     * A handler for the deferRenderingChange event.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledDatesChange event.
     */
    disabledDatesChange: EventEmitter<Function | Array<Date>>;
    /**
     * A handler for the displayFormatChange event.
     */
    displayFormatChange: EventEmitter<DevExpress.ui.format | string>;
    /**
     * A handler for the dropDownButtonTemplateChange event.
     */
    dropDownButtonTemplateChange: EventEmitter<any>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the inputAttrChange event.
     */
    inputAttrChange: EventEmitter<any>;
    /**
     * A handler for the intervalChange event.
     */
    intervalChange: EventEmitter<number>;
    /**
     * A handler for the invalidDateMessageChange event.
     */
    invalidDateMessageChange: EventEmitter<string>;
    /**
     * A handler for the isValidChange event.
     */
    isValidChange: EventEmitter<boolean>;
    /**
     * A handler for the maxChange event.
     */
    maxChange: EventEmitter<Date | number | string>;
    /**
     * A handler for the maxLengthChange event.
     */
    maxLengthChange: EventEmitter<number | string>;
    /**
     * A handler for the maxZoomLevelChange event.
     */
    maxZoomLevelChange: EventEmitter<string>;
    /**
     * A handler for the minChange event.
     */
    minChange: EventEmitter<Date | number | string>;
    /**
     * A handler for the minZoomLevelChange event.
     */
    minZoomLevelChange: EventEmitter<string>;
    /**
     * A handler for the nameChange event.
     */
    nameChange: EventEmitter<string>;
    /**
     * A handler for the openedChange event.
     */
    openedChange: EventEmitter<boolean>;
    /**
     * A handler for the openOnFieldClickChange event.
     */
    openOnFieldClickChange: EventEmitter<boolean>;
    /**
     * A handler for the pickerTypeChange event.
     */
    pickerTypeChange: EventEmitter<string>;
    /**
     * A handler for the placeholderChange event.
     */
    placeholderChange: EventEmitter<string>;
    /**
     * A handler for the readOnlyChange event.
     */
    readOnlyChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the showAnalogClockChange event.
     */
    showAnalogClockChange: EventEmitter<boolean>;
    /**
     * A handler for the showClearButtonChange event.
     */
    showClearButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the showDropDownButtonChange event.
     */
    showDropDownButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the spellcheckChange event.
     */
    spellcheckChange: EventEmitter<boolean>;
    /**
     * A handler for the stylingModeChange event.
     */
    stylingModeChange: EventEmitter<string>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the textChange event.
     */
    textChange: EventEmitter<string>;
    /**
     * A handler for the typeChange event.
     */
    typeChange: EventEmitter<string>;
    /**
     * A handler for the useMaskBehaviorChange event.
     */
    useMaskBehaviorChange: EventEmitter<boolean>;
    /**
     * A handler for the validationErrorChange event.
     */
    validationErrorChange: EventEmitter<any>;
    /**
     * A handler for the validationMessageModeChange event.
     */
    validationMessageModeChange: EventEmitter<string>;
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<Date | number | string>;
    /**
     * A handler for the valueChangeEventChange event.
     */
    valueChangeEventChange: EventEmitter<string>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    onBlur: EventEmitter<any>;
    change(_: any): void;
    touched: (_: any) => void;
    buttonsChildren: QueryList<DxiButtonComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxDateBox;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _createWidget(element: any): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class DxDateBoxModule {
}

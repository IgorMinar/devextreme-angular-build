/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
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
import DxColorBox from 'devextreme/ui/color_box';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiButtonComponent } from './nested/button-dxi';
/**
 * The ColorBox is a widget that allows an end user to enter a color or pick it out from the drop-down editor.
 */
export declare class DxColorBoxComponent extends DxComponent implements OnDestroy, OnInit, AfterViewInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxColorBox;
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
     * Specifies the text displayed on the button that applies changes and closes the drop-down editor.
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
     * Specifies the text displayed on the button that cancels changes and closes the drop-down editor.
     */
    cancelButtonText: string;
    /**
     * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
     */
    deferRendering: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies a custom template for the drop-down button.
     */
    dropDownButtonTemplate: any;
    /**
     * Specifies whether or not the widget value includes the alpha channel component.
     */
    editAlphaChannel: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies a custom template for the input field. Must contain the TextBox widget.
     */
    fieldTemplate: any;
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
     * Specifies whether the editor's value is valid.
     */
    isValid: boolean;
    /**
     * Specifies the size of a step by which a handle is moved using a keyboard shortcut.
     */
    keyStep: number;
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    name: string;
    /**
     * Specifies whether or not the drop-down editor is displayed.
     */
    opened: boolean;
    /**
     * The text displayed by the widget when the widget value is empty.
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
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    validationError: any;
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    validationMessageMode: string;
    /**
     * Specifies the currently selected value.
     */
    value: string;
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
     * A handler for the cancelButtonTextChange event.
     */
    cancelButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the deferRenderingChange event.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the dropDownButtonTemplateChange event.
     */
    dropDownButtonTemplateChange: EventEmitter<any>;
    /**
     * A handler for the editAlphaChannelChange event.
     */
    editAlphaChannelChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the fieldTemplateChange event.
     */
    fieldTemplateChange: EventEmitter<any>;
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
     * A handler for the isValidChange event.
     */
    isValidChange: EventEmitter<boolean>;
    /**
     * A handler for the keyStepChange event.
     */
    keyStepChange: EventEmitter<number>;
    /**
     * A handler for the nameChange event.
     */
    nameChange: EventEmitter<string>;
    /**
     * A handler for the openedChange event.
     */
    openedChange: EventEmitter<boolean>;
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
    valueChange: EventEmitter<string>;
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
    protected _createInstance(element: any, options: any): DxColorBox;
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
export declare class DxColorBoxModule {
}

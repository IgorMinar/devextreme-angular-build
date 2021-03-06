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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnInit, AfterViewInit, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxTagBox from 'devextreme/ui/tag_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxiButtonComponent } from 'devextreme-angular/ui/nested';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';
/**
 * The TagBox widget is an editor that allows an end user to select multiple items from a drop-down list.
 */
export declare class DxTagBoxComponent extends DxComponent implements OnDestroy, OnInit, AfterViewInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTagBox;
    validator: DxValidatorComponent;
    /**
     * Specifies whether the widget allows a user to enter a custom value. Requires the onCustomItemCreating handler implementation.
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
     * Specifies how the widget applies values.
     */
    applyValueMode: string;
    /**
     * Allows you to add custom buttons to the input text field.
     */
    buttons: Array<string | DevExpress.ui.dxTextEditorButton>;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.CollectionWidgetItem | any>;
    /**
     * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
     */
    deferRendering: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the data field whose values should be displayed.
     */
    displayExpr: Function | string;
    /**
     * Specifies a custom template for the drop-down button.
     */
    dropDownButtonTemplate: any;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies a custom template for the text field. Must contain the TextBox widget.
     */
    fieldTemplate: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies whether data items should be grouped.
     */
    grouped: boolean;
    /**
     * Specifies a custom template for group captions.
     */
    groupTemplate: any;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * A Boolean value specifying whether or not to hide selected items.
     */
    hideSelectedItems: boolean;
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
     * An array of items displayed by the widget.
     */
    items: Array<any | {
        disabled?: boolean;
        html?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * Specifies the limit on displayed tags. On exceeding it, the widget replaces all tags with a single multi-tag that displays the number of selected items.
     */
    maxDisplayedTags: number;
    /**
     * Specifies the maximum number of characters you can enter into the textbox.
     */
    maxLength: number | string;
    /**
     * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
     */
    minSearchLength: number;
    /**
     * A Boolean value specifying whether or not the widget is multiline.
     */
    multiline: boolean;
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    name: string;
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    noDataText: string;
    /**
     * Specifies whether or not the drop-down editor is displayed.
     */
    opened: boolean;
    /**
     * Specifies whether a user can open the drop-down list by clicking a text field.
     */
    openOnFieldClick: boolean;
    /**
     * The text that is provided as a hint in the select box editor.
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
     * Specifies whether to allow searching.
     */
    searchEnabled: boolean;
    /**
     * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
     */
    searchExpr: Function | Array<Function>;
    /**
     * Specifies a comparison operation used to search widget items.
     */
    searchMode: string;
    /**
     * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
     */
    searchTimeout: number;
    /**
     * Specifies the mode in which all items are selected.
     */
    selectAllMode: string;
    /**
     * Gets the currently selected items.
     */
    selectedItems: Array<string | number | any>;
    /**
     * Specifies whether to display the Clear button in the widget.
     */
    showClearButton: boolean;
    /**
     * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
     */
    showDataBeforeSearch: boolean;
    /**
     * Specifies whether the drop-down button is visible.
     */
    showDropDownButton: boolean;
    /**
     * Specifies whether the multi-tag is shown without ordinary tags.
     */
    showMultiTagOnly: boolean;
    /**
     * Specifies whether or not to display selection controls.
     */
    showSelectionControls: boolean;
    /**
     * Specifies how the widget's text field is styled.
     */
    stylingMode: string;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies a custom template for tags.
     */
    tagTemplate: any;
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
     * Specifies the selected items.
     */
    value: Array<string | number | any>;
    /**
     * Specifies which data field provides unique values to the widget's value.
     */
    valueExpr: Function | string;
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
     * A function that is executed when a user adds a custom item. Requires acceptCustomValue to be set to true.
     */
    onCustomItemCreating: EventEmitter<any>;
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
     * A function that is executed when a list item is clicked or tapped.
     */
    onItemClick: EventEmitter<any>;
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
     * A function that is executed before the multi-tag is rendered.
     */
    onMultiTagPreparing: EventEmitter<any>;
    /**
     * A function that is executed once the drop-down editor is opened.
     */
    onOpened: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when the "Select All" check box value is changed. Applies only if showSelectionControls is true.
     */
    onSelectAllValueChanged: EventEmitter<any>;
    /**
     * A function that is executed when a list item is selected or selection is canceled.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A function that is executed after the widget's value is changed.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    acceptCustomValueChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    applyValueModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    buttonsChange: EventEmitter<Array<string | DevExpress.ui.dxTextEditorButton>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.CollectionWidgetItem | any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    displayExprChange: EventEmitter<Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dropDownButtonTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    fieldTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    groupedChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    groupTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hideSelectedItemsChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hintChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    inputAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    isValidChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemsChange: EventEmitter<Array<any | {
        disabled?: boolean;
        html?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    maxDisplayedTagsChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    maxLengthChange: EventEmitter<number | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    minSearchLengthChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    multilineChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    nameChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    openedChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    openOnFieldClickChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    placeholderChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    readOnlyChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    searchEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    searchExprChange: EventEmitter<Function | Array<Function>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    searchModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    searchTimeoutChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectAllModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedItemsChange: EventEmitter<Array<string | number | any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showClearButtonChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showDataBeforeSearchChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showDropDownButtonChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showMultiTagOnlyChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showSelectionControlsChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    stylingModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    tagTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    textChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    validationErrorChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    validationMessageModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueChange: EventEmitter<Array<string | number | any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueExprChange: EventEmitter<Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    widthChange: EventEmitter<number | Function | string>;
    onBlur: EventEmitter<any>;
    change(_: any): void;
    touched: (_: any) => void;
    buttonsChildren: QueryList<DxiButtonComponent>;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxTagBox;
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
export declare class DxTagBoxModule {
}

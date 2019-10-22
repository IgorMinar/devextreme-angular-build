import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxSelectBox from 'devextreme/ui/select_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiButtonComponent, DxiItemComponent, DxiButtonModule, DxoOptionsModule, DxiItemModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(() => DxSelectBoxComponent),
    multi: true
};
/**
 * The SelectBox widget is an editor that allows an end user to select an item from a drop-down list.
 */
let DxSelectBoxComponent = class DxSelectBoxComponent extends DxComponent {
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
            { subscribe: 'customItemCreating', emit: 'onCustomItemCreating' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'buttonsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'displayValueChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'maxLengthChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'nameChange' },
            { emit: 'noDataTextChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showDropDownButtonChange' },
            { emit: 'showSelectionControlsChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'valueExprChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies whether the widget allows a user to enter a custom value. Requires the onCustomItemCreating handler implementation.
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
     * Allows you to add custom buttons to the input text field.
     */
    get buttons() {
        return this._getOption('buttons');
    }
    set buttons(value) {
        this._setOption('buttons', value);
    }
    /**
     * Binds the widget to data.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
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
     * Specifies the data field whose values should be displayed.
     */
    get displayExpr() {
        return this._getOption('displayExpr');
    }
    set displayExpr(value) {
        this._setOption('displayExpr', value);
    }
    /**
     * Returns the value currently displayed by the widget.
     */
    get displayValue() {
        return this._getOption('displayValue');
    }
    set displayValue(value) {
        this._setOption('displayValue', value);
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
     * Specifies a custom template for the text field. Must contain the TextBox widget.
     */
    get fieldTemplate() {
        return this._getOption('fieldTemplate');
    }
    set fieldTemplate(value) {
        this._setOption('fieldTemplate', value);
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
     * Specifies whether data items should be grouped.
     */
    get grouped() {
        return this._getOption('grouped');
    }
    set grouped(value) {
        this._setOption('grouped', value);
    }
    /**
     * Specifies a custom template for group captions.
     */
    get groupTemplate() {
        return this._getOption('groupTemplate');
    }
    set groupTemplate(value) {
        this._setOption('groupTemplate', value);
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
     * Specifies whether the editor's value is valid.
     */
    get isValid() {
        return this._getOption('isValid');
    }
    set isValid(value) {
        this._setOption('isValid', value);
    }
    /**
     * An array of items displayed by the widget.
     */
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    /**
     * Specifies a custom template for items.
     */
    get itemTemplate() {
        return this._getOption('itemTemplate');
    }
    set itemTemplate(value) {
        this._setOption('itemTemplate', value);
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
     * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
     */
    get minSearchLength() {
        return this._getOption('minSearchLength');
    }
    set minSearchLength(value) {
        this._setOption('minSearchLength', value);
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
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    get noDataText() {
        return this._getOption('noDataText');
    }
    set noDataText(value) {
        this._setOption('noDataText', value);
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
     * The text that is provided as a hint in the select box editor.
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
     * Specifies whether to allow searching.
     */
    get searchEnabled() {
        return this._getOption('searchEnabled');
    }
    set searchEnabled(value) {
        this._setOption('searchEnabled', value);
    }
    /**
     * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
     */
    get searchExpr() {
        return this._getOption('searchExpr');
    }
    set searchExpr(value) {
        this._setOption('searchExpr', value);
    }
    /**
     * Specifies a comparison operation used to search widget items.
     */
    get searchMode() {
        return this._getOption('searchMode');
    }
    set searchMode(value) {
        this._setOption('searchMode', value);
    }
    /**
     * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
     */
    get searchTimeout() {
        return this._getOption('searchTimeout');
    }
    set searchTimeout(value) {
        this._setOption('searchTimeout', value);
    }
    /**
     * Gets the currently selected item.
     */
    get selectedItem() {
        return this._getOption('selectedItem');
    }
    set selectedItem(value) {
        this._setOption('selectedItem', value);
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
     * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
     */
    get showDataBeforeSearch() {
        return this._getOption('showDataBeforeSearch');
    }
    set showDataBeforeSearch(value) {
        this._setOption('showDataBeforeSearch', value);
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
     * Specifies whether or not to display selection controls.
     */
    get showSelectionControls() {
        return this._getOption('showSelectionControls');
    }
    set showSelectionControls(value) {
        this._setOption('showSelectionControls', value);
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
     * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    /**
     * Specifies the DOM events after which the widget's value should be updated. Applies only if acceptCustomValue is set to true.
     */
    get valueChangeEvent() {
        return this._getOption('valueChangeEvent');
    }
    set valueChangeEvent(value) {
        this._setOption('valueChangeEvent', value);
    }
    /**
     * Specifies which data field provides unique values to the widget's value.
     */
    get valueExpr() {
        return this._getOption('valueExpr');
    }
    set valueExpr(value) {
        this._setOption('valueExpr', value);
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
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    _createInstance(element, options) {
        return new DxSelectBox(element, options);
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
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('buttons');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
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
DxSelectBoxComponent.ctorParameters = () => [
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
], DxSelectBoxComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "acceptCustomValue", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "buttons", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "displayValue", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "dropDownButtonTemplate", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "fieldTemplate", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "grouped", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "groupTemplate", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "height", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "hint", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "inputAttr", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "items", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "maxLength", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "minSearchLength", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "name", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "opened", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "openOnFieldClick", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "placeholder", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "searchEnabled", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "searchExpr", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "searchMode", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "searchTimeout", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "showClearButton", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "showDataBeforeSearch", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "showDropDownButton", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "showSelectionControls", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "spellcheck", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "stylingMode", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "text", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "value", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "valueChangeEvent", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "valueExpr", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "visible", null);
__decorate([
    Input()
], DxSelectBoxComponent.prototype, "width", null);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onClosed", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onCopy", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onCustomItemCreating", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onCut", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onEnterKey", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onFocusIn", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onFocusOut", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onInput", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onKeyDown", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onKeyPress", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onKeyUp", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onOpened", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onPaste", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "acceptCustomValueChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "buttonsChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "displayExprChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "displayValueChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "fieldTemplateChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "groupedChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "groupTemplateChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "inputAttrChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "maxLengthChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "minSearchLengthChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "openedChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "openOnFieldClickChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "placeholderChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "searchEnabledChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "searchExprChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "searchModeChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "searchTimeoutChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "showClearButtonChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "showDataBeforeSearchChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "showDropDownButtonChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "showSelectionControlsChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "spellcheckChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "valueChangeEventChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "valueExprChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxSelectBoxComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxSelectBoxComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxSelectBoxComponent.prototype, "touched", void 0);
__decorate([
    ContentChildren(DxiButtonComponent)
], DxSelectBoxComponent.prototype, "buttonsChildren", null);
__decorate([
    ContentChildren(DxiItemComponent)
], DxSelectBoxComponent.prototype, "itemsChildren", null);
DxSelectBoxComponent = __decorate([
    Component({
        selector: 'dx-select-box',
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
], DxSelectBoxComponent);
let DxSelectBoxModule = class DxSelectBoxModule {
};
DxSelectBoxModule = __decorate([
    NgModule({
        imports: [
            DxiButtonModule,
            DxoOptionsModule,
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxSelectBoxComponent
        ],
        exports: [
            DxSelectBoxComponent,
            DxiButtonModule,
            DxoOptionsModule,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxSelectBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxSelectBoxComponent, DxSelectBoxModule };
//# sourceMappingURL=devextreme-angular-ui-select-box.js.map

/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChild, forwardRef, HostListener, ContentChildren, QueryList } from '@angular/core';
import DxSelectBox from 'devextreme/ui/select_box';
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
import { DxiItemModule } from './nested/item-dxi';
import { DxiButtonComponent } from './nested/button-dxi';
import { DxiItemComponent } from './nested/item-dxi';
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
tslib_1.__decorate([
    ContentChild(DxValidatorComponent),
    tslib_1.__metadata("design:type", DxValidatorComponent)
], DxSelectBoxComponent.prototype, "validator", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "acceptCustomValue", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "accessKey", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "activeStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxSelectBoxComponent.prototype, "buttons", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "deferRendering", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "displayExpr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "displayValue", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "dropDownButtonTemplate", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "fieldTemplate", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "focusStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "grouped", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "groupTemplate", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "height", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "hint", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "hoverStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "inputAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "isValid", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxSelectBoxComponent.prototype, "items", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "itemTemplate", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "maxLength", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxSelectBoxComponent.prototype, "minSearchLength", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "name", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "noDataText", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "opened", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "openOnFieldClick", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "placeholder", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "readOnly", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "searchEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "searchExpr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "searchMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxSelectBoxComponent.prototype, "searchTimeout", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "selectedItem", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "showClearButton", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "showDataBeforeSearch", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "showDropDownButton", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "showSelectionControls", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "spellcheck", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "stylingMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxSelectBoxComponent.prototype, "tabIndex", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "text", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "validationError", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "validationMessageMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "value", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxSelectBoxComponent.prototype, "valueChangeEvent", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "valueExpr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxSelectBoxComponent.prototype, "visible", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "width", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onClosed", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onContentReady", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onCopy", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onCustomItemCreating", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onCut", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onEnterKey", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onFocusIn", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onFocusOut", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onInput", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onItemClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onKeyDown", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onKeyPress", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onKeyUp", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onOpened", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onPaste", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onSelectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onValueChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "acceptCustomValueChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "accessKeyChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "activeStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "buttonsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "dataSourceChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "deferRenderingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "displayExprChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "displayValueChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "fieldTemplateChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "focusStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "groupedChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "groupTemplateChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "hintChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "hoverStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "inputAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "isValidChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "itemsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "itemTemplateChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "maxLengthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "minSearchLengthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "nameChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "noDataTextChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "openedChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "openOnFieldClickChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "placeholderChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "readOnlyChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "searchEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "searchExprChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "searchModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "searchTimeoutChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "selectedItemChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "showClearButtonChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "showDataBeforeSearchChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "showDropDownButtonChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "showSelectionControlsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "spellcheckChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "stylingModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "tabIndexChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "textChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "validationErrorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "validationMessageModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "valueChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "valueChangeEventChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "valueExprChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "widthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxSelectBoxComponent.prototype, "onBlur", void 0);
tslib_1.__decorate([
    HostListener('valueChange', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DxSelectBoxComponent.prototype, "change", null);
tslib_1.__decorate([
    HostListener('onBlur', ['$event']),
    tslib_1.__metadata("design:type", Object)
], DxSelectBoxComponent.prototype, "touched", void 0);
tslib_1.__decorate([
    ContentChildren(DxiButtonComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "buttonsChildren", null);
tslib_1.__decorate([
    ContentChildren(DxiItemComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxSelectBoxComponent.prototype, "itemsChildren", null);
DxSelectBoxComponent = tslib_1.__decorate([
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
    tslib_1.__param(7, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
        WatcherHelper,
        IterableDifferHelper, NestedOptionHost,
        TransferState, Object])
], DxSelectBoxComponent);
export { DxSelectBoxComponent };
let DxSelectBoxModule = class DxSelectBoxModule {
};
DxSelectBoxModule = tslib_1.__decorate([
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
export { DxSelectBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL3NlbGVjdC1ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQVlwQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUVOLEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUdaLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUlaLGVBQWUsRUFDZixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxXQUFXLE1BQU0sMEJBQTBCLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRW5ELE9BQU8sRUFFSCxpQkFBaUIsRUFDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixF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Yiw4QkFBOEI7WUFDOUIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtTQUN2QjtLQUNKLENBQUM7SUErK0JXLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTs2Q0FKSixVQUFVLEVBQVUsTUFBTSxFQUFnQixjQUFjO1FBQ2hELGFBQWE7UUFDdkIsb0JBQW9CLEVBQWMsZ0JBQWdCO1FBQ2pELGFBQWE7R0E3K0IzQixvQkFBb0IsQ0Eyb0NoQztTQTNvQ1ksb0JBQW9CO0FBaXFDakMsSUFBYSxpQkFBaUIsR0FBOUI7Q0FBa0MsQ0FBQTtBQUFyQixpQkFBaUI7SUFwQjdCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsMEJBQTBCO1NBQzNCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osb0JBQW9CO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGdCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxpQkFBaUIsQ0FBSTtTQUFyQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkluaXQsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29udGVudENoaWxkLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhTZWxlY3RCb3ggZnJvbSAnZGV2ZXh0cmVtZS91aS9zZWxlY3RfYm94JztcclxuXHJcbmltcG9ydCB7IER4VmFsaWRhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gICAgTkdfVkFMVUVfQUNDRVNTT1JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBEeENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBEeEludGVncmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9pbnRlZ3JhdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IFdhdGNoZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL3dhdGNoZXItaGVscGVyJztcclxuaW1wb3J0IHsgSXRlcmFibGVEaWZmZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL2l0ZXJhYmxlLWRpZmZlci1oZWxwZXInO1xyXG5cclxuaW1wb3J0IHsgRHhpQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYnV0dG9uLWR4aSc7XHJcbmltcG9ydCB7IER4b09wdGlvbnNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9vcHRpb25zJztcclxuaW1wb3J0IHsgRHhpSXRlbU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2l0ZW0tZHhpJztcclxuXHJcbmltcG9ydCB7IER4aUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL2J1dHRvbi1keGknO1xyXG5pbXBvcnQgeyBEeGlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvaXRlbS1keGknO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQ1VTVE9NX1ZBTFVFX0FDQ0VTU09SX1BST1ZJREVSID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEeFNlbGVjdEJveENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBTZWxlY3RCb3ggd2lkZ2V0IGlzIGFuIGVkaXRvciB0aGF0IGFsbG93cyBhbiBlbmQgdXNlciB0byBzZWxlY3QgYW4gaXRlbSBmcm9tIGEgZHJvcC1kb3duIGxpc3QuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtc2VsZWN0LWJveCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIENVU1RPTV9WQUxVRV9BQ0NFU1NPUl9QUk9WSURFUixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFNlbGVjdEJveENvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4U2VsZWN0Qm94O1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGQoRHhWYWxpZGF0b3JDb21wb25lbnQpXHJcbiAgICB2YWxpZGF0b3I6IER4VmFsaWRhdG9yQ29tcG9uZW50O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgYWxsb3dzIGEgdXNlciB0byBlbnRlciBhIGN1c3RvbSB2YWx1ZS4gUmVxdWlyZXMgdGhlIG9uQ3VzdG9tSXRlbUNyZWF0aW5nIGhhbmRsZXIgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWNjZXB0Q3VzdG9tVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWNjZXB0Q3VzdG9tVmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBhY2NlcHRDdXN0b21WYWx1ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWNjZXB0Q3VzdG9tVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBzaG9ydGN1dCBrZXkgdGhhdCBzZXRzIGZvY3VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWNjZXNzS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWNjZXNzS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjY2Vzc0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGludGVyYWN0aW5nIHdpdGggYSB1c2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmVTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgeW91IHRvIGFkZCBjdXN0b20gYnV0dG9ucyB0byB0aGUgaW5wdXQgdGV4dCBmaWVsZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBidXR0b25zKCk6IEFycmF5PHN0cmluZyB8IERldkV4cHJlc3MudWkuZHhUZXh0RWRpdG9yQnV0dG9uPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnV0dG9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJ1dHRvbnModmFsdWU6IEFycmF5PHN0cmluZyB8IERldkV4cHJlc3MudWkuZHhUZXh0RWRpdG9yQnV0dG9uPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYnV0dG9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyB0aGUgd2lkZ2V0IHRvIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PERldkV4cHJlc3MudWkuQ29sbGVjdGlvbldpZGdldEl0ZW0gfCBhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhU291cmNlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVNvdXJjZSh2YWx1ZTogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxEZXZFeHByZXNzLnVpLkNvbGxlY3Rpb25XaWRnZXRJdGVtIHwgYW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byByZW5kZXIgdGhlIGRyb3AtZG93biBmaWVsZCdzIGNvbnRlbnQgd2hlbiBpdCBpcyBkaXNwbGF5ZWQuIElmIGZhbHNlLCB0aGUgY29udGVudCBpcyByZW5kZXJlZCBpbW1lZGlhdGVseS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkZWZlclJlbmRlcmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkZWZlclJlbmRlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlZmVyUmVuZGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkZWZlclJlbmRlcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBkYXRhIGZpZWxkIHdob3NlIHZhbHVlcyBzaG91bGQgYmUgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc3BsYXlFeHByKCk6IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNwbGF5RXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc3BsYXlFeHByKHZhbHVlOiBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzcGxheUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgY3VycmVudGx5IGRpc3BsYXllZCBieSB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc3BsYXlWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc3BsYXlWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc3BsYXlWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNwbGF5VmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgZHJvcC1kb3duIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkcm9wRG93bkJ1dHRvblRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZHJvcERvd25CdXR0b25UZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRyb3BEb3duQnV0dG9uVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZHJvcERvd25CdXR0b25UZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgdGV4dCBmaWVsZC4gTXVzdCBjb250YWluIHRoZSBUZXh0Qm94IHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWVsZFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmllbGRUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmllbGRUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBiZSBmb2N1c2VkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgZGF0YSBpdGVtcyBzaG91bGQgYmUgZ3JvdXBlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncm91cGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgZ3JvdXAgY2FwdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgZm9yIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGEgdXNlciBwYXVzZXMgb24gaXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaG92ZXJTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBob3ZlclN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIHBhc3NlZCBvbiB0byB0aGUgdW5kZXJseWluZyBIVE1MIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaW5wdXRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW5wdXRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaW5wdXRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2lucHV0QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZWRpdG9yJ3MgdmFsdWUgaXMgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpc1ZhbGlkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXNWYWxpZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXNWYWxpZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBpdGVtcyBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpdGVtcygpOiBBcnJheTxhbnkgfCB7IGRpc2FibGVkPzogYm9vbGVhbiwgaHRtbD86IHN0cmluZywgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxhbnkgfCB7IGRpc2FibGVkPzogYm9vbGVhbiwgaHRtbD86IHN0cmluZywgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGl0ZW1UZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1UZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1UZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpdGVtVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHlvdSBjYW4gZW50ZXIgaW50byB0aGUgdGV4dGJveC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhMZW5ndGgoKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhMZW5ndGgnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhMZW5ndGgodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4TGVuZ3RoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBlbnRlcmVkIGludG8gdGhlIHRleHQgYm94IHRvIGJlZ2luIGEgc2VhcmNoLiBBcHBsaWVzIG9ubHkgaWYgc2VhcmNoRW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pblNlYXJjaExlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pblNlYXJjaExlbmd0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pblNlYXJjaExlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5TZWFyY2hMZW5ndGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9mIHRoZSB1bmRlcmx5aW5nIEhUTUwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGV4dCBvciBIVE1MIG1hcmt1cCBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldCBpZiB0aGUgaXRlbSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5vRGF0YVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdub0RhdGFUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbm9EYXRhVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdub0RhdGFUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgZHJvcC1kb3duIGVkaXRvciBpcyBkaXNwbGF5ZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb3BlbmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29wZW5lZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wZW5lZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb3BlbmVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgdXNlciBjYW4gb3BlbiB0aGUgZHJvcC1kb3duIGxpc3QgYnkgY2xpY2tpbmcgYSB0ZXh0IGZpZWxkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9wZW5PbkZpZWxkQ2xpY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3Blbk9uRmllbGRDbGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wZW5PbkZpZWxkQ2xpY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wZW5PbkZpZWxkQ2xpY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRleHQgdGhhdCBpcyBwcm92aWRlZCBhcyBhIGhpbnQgaW4gdGhlIHNlbGVjdCBib3ggZWRpdG9yLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGxhY2Vob2xkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwbGFjZWhvbGRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZWRpdG9yIGlzIHJlYWQtb25seS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWFkT25seScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlYWRPbmx5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWFkT25seScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGFsbG93IHNlYXJjaGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWFyY2hFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlYXJjaEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWFyY2hFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWFyY2hFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiBhIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgb3IgYW4gZXhwcmVzc2lvbiB3aG9zZSB2YWx1ZSBpcyBjb21wYXJlZCB0byB0aGUgc2VhcmNoIGNyaXRlcmlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWFyY2hFeHByKCk6IEZ1bmN0aW9uIHwgQXJyYXk8RnVuY3Rpb24+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWFyY2hFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VhcmNoRXhwcih2YWx1ZTogRnVuY3Rpb24gfCBBcnJheTxGdW5jdGlvbj4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlYXJjaEV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY29tcGFyaXNvbiBvcGVyYXRpb24gdXNlZCB0byBzZWFyY2ggd2lkZ2V0IGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlYXJjaE1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWFyY2hNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VhcmNoTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWFyY2hNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgdGltZSBkZWxheSwgaW4gbWlsbGlzZWNvbmRzLCBhZnRlciB0aGUgbGFzdCBjaGFyYWN0ZXIgaGFzIGJlZW4gdHlwZWQgaW4sIGJlZm9yZSBhIHNlYXJjaCBpcyBleGVjdXRlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWFyY2hUaW1lb3V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VhcmNoVGltZW91dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlYXJjaFRpbWVvdXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VhcmNoVGltZW91dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3RlZEl0ZW0nKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZEl0ZW0odmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWRJdGVtJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3BsYXkgdGhlIENsZWFyIGJ1dHRvbiBpbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dDbGVhckJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Q2xlYXJCdXR0b24nKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q2xlYXJCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dDbGVhckJ1dHRvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBkaXNwbGF5cyB1bmZpbHRlcmVkIHZhbHVlcyB1bnRpbCBhIHVzZXIgdHlwZXMgYSBudW1iZXIgb2YgY2hhcmFjdGVycyBleGNlZWRpbmcgdGhlIG1pblNlYXJjaExlbmd0aCBvcHRpb24gdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0RhdGFCZWZvcmVTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0RhdGFCZWZvcmVTZWFyY2gnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93RGF0YUJlZm9yZVNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0RhdGFCZWZvcmVTZWFyY2gnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRyb3AtZG93biBidXR0b24gaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93RHJvcERvd25CdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0Ryb3BEb3duQnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0Ryb3BEb3duQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93RHJvcERvd25CdXR0b24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgc2VsZWN0aW9uIGNvbnRyb2xzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dTZWxlY3Rpb25Db250cm9scygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93U2VsZWN0aW9uQ29udHJvbHMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93U2VsZWN0aW9uQ29udHJvbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dTZWxlY3Rpb25Db250cm9scycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGVja3MgdGhlIGlubmVyIHRleHQgZm9yIHNwZWxsaW5nIG1pc3Rha2VzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNwZWxsY2hlY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3BlbGxjaGVjaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNwZWxsY2hlY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NwZWxsY2hlY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgd2lkZ2V0J3MgdGV4dCBmaWVsZCBpcyBzdHlsZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3R5bGluZ01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdHlsaW5nTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0eWxpbmdNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0eWxpbmdNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50IHdoZW4gdGhlIFRhYiBrZXkgaXMgdXNlZCBmb3IgbmF2aWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYkluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFiSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlYWQtb25seSBvcHRpb24gdGhhdCBob2xkcyB0aGUgdGV4dCBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldCBpbnB1dCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBpbmZvcm1hdGlvbiBvbiB0aGUgdmFsaWRhdGlvbiBlcnJvciB3aGVuIHVzaW5nIGEgY3VzdG9tIHZhbGlkYXRpb24gZW5naW5lLiBTaG91bGQgYmUgY2hhbmdlZCBhdCBydW50aW1lIGFsb25nIHdpdGggdGhlIGlzVmFsaWQgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25FcnJvcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25FcnJvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25FcnJvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uRXJyb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgbWVzc2FnZSBhYm91dCB0aGUgdmFsaWRhdGlvbiBydWxlcyB0aGF0IGFyZSBub3Qgc2F0aXNmaWVkIGJ5IHRoaXMgZWRpdG9yJ3MgdmFsdWUgaXMgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uTWVzc2FnZU1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUuIE1heSBiZSBhbiBvYmplY3QgaWYgZGF0YVNvdXJjZSBjb250YWlucyBvYmplY3RzIGFuZCB2YWx1ZUV4cHIgaXMgbm90IHNldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBET00gZXZlbnRzIGFmdGVyIHdoaWNoIHRoZSB3aWRnZXQncyB2YWx1ZSBzaG91bGQgYmUgdXBkYXRlZC4gQXBwbGllcyBvbmx5IGlmIGFjY2VwdEN1c3RvbVZhbHVlIGlzIHNldCB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlQ2hhbmdlRXZlbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZUNoYW5nZUV2ZW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWVDaGFuZ2VFdmVudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZUNoYW5nZUV2ZW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGljaCBkYXRhIGZpZWxkIHByb3ZpZGVzIHVuaXF1ZSB2YWx1ZXMgdG8gdGhlIHdpZGdldCdzIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlRXhwcigpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWVFeHByKHZhbHVlOiBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQgbG9zZXMgZm9jdXMgYWZ0ZXIgdGhlIHRleHQgZmllbGQncyBjb250ZW50IHdhcyBjaGFuZ2VkIHVzaW5nIHRoZSBrZXlib2FyZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbmNlIHRoZSBkcm9wLWRvd24gZWRpdG9yIGlzIGNsb3NlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2xvc2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBjb250ZW50IGlzIHJlYWR5IGFuZCBlYWNoIHRpbWUgdGhlIGNvbnRlbnQgaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ29udGVudFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBpbnB1dCBoYXMgYmVlbiBjb3BpZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvcHk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB1c2VyIGFkZHMgYSBjdXN0b20gaXRlbS4gUmVxdWlyZXMgYWNjZXB0Q3VzdG9tVmFsdWUgdG8gYmUgc2V0IHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkN1c3RvbUl0ZW1DcmVhdGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgaW5wdXQgaGFzIGJlZW4gY3V0LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DdXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIEVudGVyIGtleSBoYXMgYmVlbiBwcmVzc2VkIHdoaWxlIHRoZSB3aWRnZXQgaXMgZm9jdXNlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRW50ZXJLZXk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCBnZXRzIGZvY3VzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c0luOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQgbG9zZXMgZm9jdXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZvY3VzT3V0OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgZWFjaCB0aW1lIHRoZSB3aWRnZXQncyBpbnB1dCBpcyBjaGFuZ2VkIHdoaWxlIHRoZSB3aWRnZXQgaXMgZm9jdXNlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBsaXN0IGl0ZW0gaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHVzZXIgaXMgcHJlc3NpbmcgYSBrZXkgb24gdGhlIGtleWJvYXJkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdXNlciBwcmVzc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uS2V5UHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB1c2VyIHJlbGVhc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uS2V5VXA6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uY2UgdGhlIGRyb3AtZG93biBlZGl0b3IgaXMgb3BlbmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcGVuZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgd2lkZ2V0IG9wdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcHRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBpbnB1dCBoYXMgYmVlbiBwYXN0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblBhc3RlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgbGlzdCBpdGVtIGlzIHNlbGVjdGVkIG9yIHNlbGVjdGlvbiBpcyBjYW5jZWxlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCdzIHZhbHVlIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2NlcHRDdXN0b21WYWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFjY2VwdEN1c3RvbVZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBidXR0b25zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYnV0dG9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PHN0cmluZyB8IERldkV4cHJlc3MudWkuZHhUZXh0RWRpdG9yQnV0dG9uPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU291cmNlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVNvdXJjZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8RGV2RXhwcmVzcy51aS5Db2xsZWN0aW9uV2lkZ2V0SXRlbSB8IGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGVmZXJSZW5kZXJpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkZWZlclJlbmRlcmluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzcGxheUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNwbGF5RXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRpc3BsYXlWYWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc3BsYXlWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkcm9wRG93bkJ1dHRvblRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZHJvcERvd25CdXR0b25UZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZpZWxkVGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWVsZFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGdyb3VwZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBncm91cGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBncm91cFRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoZWlnaHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoZWlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpbnB1dEF0dHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpbnB1dEF0dHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaXNWYWxpZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGlzVmFsaWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGl0ZW1zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGRpc2FibGVkPzogYm9vbGVhbiwgaHRtbD86IHN0cmluZywgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGl0ZW1UZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGl0ZW1UZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXhMZW5ndGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXhMZW5ndGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWluU2VhcmNoTGVuZ3RoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWluU2VhcmNoTGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG5hbWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBuYW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG5vRGF0YVRleHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBub0RhdGFUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG9wZW5lZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9wZW5lZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgb3Blbk9uRmllbGRDbGlja0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9wZW5PbkZpZWxkQ2xpY2tDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBsYWNlaG9sZGVyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGxhY2Vob2xkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVhZE9ubHlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWFkT25seUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlYXJjaEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWFyY2hFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWFyY2hFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uIHwgQXJyYXk8RnVuY3Rpb24+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlYXJjaE1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWFyY2hNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlYXJjaFRpbWVvdXRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWFyY2hUaW1lb3V0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkSXRlbUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q2xlYXJCdXR0b25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Q2xlYXJCdXR0b25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dEYXRhQmVmb3JlU2VhcmNoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0RhdGFCZWZvcmVTZWFyY2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dEcm9wRG93bkJ1dHRvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dEcm9wRG93bkJ1dHRvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd1NlbGVjdGlvbkNvbnRyb2xzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd1NlbGVjdGlvbkNvbnRyb2xzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzcGVsbGNoZWNrQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3BlbGxjaGVja0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3R5bGluZ01vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdHlsaW5nTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0YWJJbmRleENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRhYkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRleHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0ZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbGlkYXRpb25FcnJvckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbGlkYXRpb25FcnJvckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWxpZGF0aW9uTWVzc2FnZU1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWxpZGF0aW9uTWVzc2FnZU1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWx1ZUNoYW5nZUV2ZW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2VFdmVudENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWx1ZUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2aXNpYmxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigndmFsdWVDaGFuZ2UnLCBbJyRldmVudCddKSBjaGFuZ2UoXykgeyB9XHJcbiAgICBASG9zdExpc3RlbmVyKCdvbkJsdXInLCBbJyRldmVudCddKSB0b3VjaGVkID0gKF8pID0+IHt9O1xyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aUJ1dHRvbkNvbXBvbmVudClcclxuICAgIGdldCBidXR0b25zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUJ1dHRvbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2J1dHRvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBidXR0b25zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdidXR0b25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpSXRlbUNvbXBvbmVudClcclxuICAgIGdldCBpdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2hhbmdlJywgZW1pdDogJ29uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Nsb3NlZCcsIGVtaXQ6ICdvbkNsb3NlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjb250ZW50UmVhZHknLCBlbWl0OiAnb25Db250ZW50UmVhZHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29weScsIGVtaXQ6ICdvbkNvcHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY3VzdG9tSXRlbUNyZWF0aW5nJywgZW1pdDogJ29uQ3VzdG9tSXRlbUNyZWF0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2N1dCcsIGVtaXQ6ICdvbkN1dCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZW50ZXJLZXknLCBlbWl0OiAnb25FbnRlcktleScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c0luJywgZW1pdDogJ29uRm9jdXNJbicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c091dCcsIGVtaXQ6ICdvbkZvY3VzT3V0JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXRpYWxpemVkJywgZW1pdDogJ29uSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5wdXQnLCBlbWl0OiAnb25JbnB1dCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpdGVtQ2xpY2snLCBlbWl0OiAnb25JdGVtQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAna2V5RG93bicsIGVtaXQ6ICdvbktleURvd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAna2V5UHJlc3MnLCBlbWl0OiAnb25LZXlQcmVzcycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdrZXlVcCcsIGVtaXQ6ICdvbktleVVwJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wZW5lZCcsIGVtaXQ6ICdvbk9wZW5lZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdwYXN0ZScsIGVtaXQ6ICdvblBhc3RlJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3NlbGVjdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25TZWxlY3Rpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3ZhbHVlQ2hhbmdlZCcsIGVtaXQ6ICdvblZhbHVlQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWNjZXB0Q3VzdG9tVmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjY2Vzc0tleUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdidXR0b25zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhU291cmNlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkZWZlclJlbmRlcmluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc3BsYXlFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNwbGF5VmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Ryb3BEb3duQnV0dG9uVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWVsZFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoaW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdob3ZlclN0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaW5wdXRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpc1ZhbGlkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpdGVtc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaXRlbVRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXhMZW5ndGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21pblNlYXJjaExlbmd0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbmFtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbm9EYXRhVGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnb3BlbmVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdvcGVuT25GaWVsZENsaWNrQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwbGFjZWhvbGRlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVhZE9ubHlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaEV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaE1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaFRpbWVvdXRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkSXRlbUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0NsZWFyQnV0dG9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93RGF0YUJlZm9yZVNlYXJjaENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0Ryb3BEb3duQnV0dG9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93U2VsZWN0aW9uQ29udHJvbHNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NwZWxsY2hlY2tDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0eWxpbmdNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0YWJJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsaWRhdGlvbkVycm9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWxpZGF0aW9uTWVzc2FnZU1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUNoYW5nZUV2ZW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdvbkJsdXInIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhTZWxlY3RCb3goZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmVudEhlbHBlci5sb2NrZWRWYWx1ZUNoYW5nZUV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ldmVudEhlbHBlci5sb2NrZWRWYWx1ZUNoYW5nZUV2ZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLmNoYW5nZSA9IGZuOyB9XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLnRvdWNoZWQgPSBmbjsgfVxyXG5cclxuICAgIF9jcmVhdGVXaWRnZXQoZWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIuX2NyZWF0ZVdpZGdldChlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdmb2N1c091dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIZWxwZXIuZmlyZU5nRXZlbnQoJ29uQmx1cicsIFtlXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVdpZGdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnYnV0dG9ucycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdkYXRhU291cmNlJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2l0ZW1zJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3NlYXJjaEV4cHInLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdidXR0b25zJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2RhdGFTb3VyY2UnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnaXRlbXMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnc2VhcmNoRXhwcicpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoZXJIZWxwZXIuY2hlY2tXYXRjaGVycygpO1xyXG4gICAgICAgIHN1cGVyLm5nRG9DaGVjaygpO1xyXG4gICAgICAgIHN1cGVyLmNsZWFyQ2hhbmdlZE9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGxldCBpc1NldHVwID0gdGhpcy5faWRoLnNldHVwU2luZ2xlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBsZXQgaXNDaGFuZ2VkID0gdGhpcy5faWRoLmdldENoYW5nZXMobmFtZSwgdmFsdWUpICE9PSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaXNTZXR1cCB8fCBpc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuX3NldE9wdGlvbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmNyZWF0ZUluc3RhbmNlT25Jbml0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5jcmVhdGVJbnN0YW5jZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4aUJ1dHRvbk1vZHVsZSxcclxuICAgIER4b09wdGlvbnNNb2R1bGUsXHJcbiAgICBEeGlJdGVtTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeFNlbGVjdEJveENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhTZWxlY3RCb3hDb21wb25lbnQsXHJcbiAgICBEeGlCdXR0b25Nb2R1bGUsXHJcbiAgICBEeG9PcHRpb25zTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFNlbGVjdEJveE1vZHVsZSB7IH1cclxuIl19
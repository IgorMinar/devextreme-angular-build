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
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, OnDestroy, EventEmitter, OnInit, AfterViewInit, ContentChild, forwardRef, HostListener, OnChanges, DoCheck, SimpleChanges, ContentChildren, QueryList } from '@angular/core';
import DxDropDownBox from 'devextreme/ui/drop_down_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, DxIntegrationModule, DxTemplateModule, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxiButtonModule } from 'devextreme-angular/ui/nested';
import { DxoOptionsModule } from 'devextreme-angular/ui/nested';
import { DxoDropDownOptionsModule } from 'devextreme-angular/ui/nested';
import { DxoAnimationModule } from 'devextreme-angular/ui/nested';
import { DxoHideModule } from 'devextreme-angular/ui/nested';
import { DxoShowModule } from 'devextreme-angular/ui/nested';
import { DxoPositionModule } from 'devextreme-angular/ui/nested';
import { DxoAtModule } from 'devextreme-angular/ui/nested';
import { DxoBoundaryOffsetModule } from 'devextreme-angular/ui/nested';
import { DxoCollisionModule } from 'devextreme-angular/ui/nested';
import { DxoMyModule } from 'devextreme-angular/ui/nested';
import { DxoOffsetModule } from 'devextreme-angular/ui/nested';
import { DxiToolbarItemModule } from 'devextreme-angular/ui/nested';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxiButtonComponent } from 'devextreme-angular/ui/nested';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';
const CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxDropDownBoxComponent),
    multi: true
};
/**
 * The DropDownBox widget consists of a text field, which displays the current value, and a drop-down field, which can contain any UI element.
 */
let DxDropDownBoxComponent = class DxDropDownBoxComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.touched = (_) => { };
        this._createEventEmitters([
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
            { emit: 'buttonsChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'dropDownOptionsChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'maxLengthChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDropDownButtonChange' },
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
     * Specifies whether the widget allows a user to enter a custom value.
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
     * Specifies a custom template for the drop-down content.
     */
    get contentTemplate() {
        return this._getOption('contentTemplate');
    }
    set contentTemplate(value) {
        this._setOption('contentTemplate', value);
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
     * Specifies a custom template for the drop-down button.
     */
    get dropDownButtonTemplate() {
        return this._getOption('dropDownButtonTemplate');
    }
    set dropDownButtonTemplate(value) {
        this._setOption('dropDownButtonTemplate', value);
    }
    /**
     * Configures the drop-down field which holds the content.
     */
    get dropDownOptions() {
        return this._getOption('dropDownOptions');
    }
    set dropDownOptions(value) {
        this._setOption('dropDownOptions', value);
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
     * Specifies the maximum number of characters you can enter into the textbox.
     */
    get maxLength() {
        return this._getOption('maxLength');
    }
    set maxLength(value) {
        this._setOption('maxLength', value);
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
     * The text displayed by the widget when the widget value is empty.
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
     * Specifies the DOM events after which the widget's value should be updated.
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
        return new DxDropDownBox(element, options);
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
DxDropDownBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
tslib_1.__decorate([
    ContentChild(DxValidatorComponent)
], DxDropDownBoxComponent.prototype, "validator", void 0);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "acceptCustomValue", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "accessKey", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "activeStateEnabled", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "buttons", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "contentTemplate", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "deferRendering", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "displayExpr", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "dropDownButtonTemplate", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "dropDownOptions", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "fieldTemplate", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "focusStateEnabled", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "height", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "hint", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "hoverStateEnabled", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "inputAttr", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "isValid", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "items", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "maxLength", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "name", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "opened", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "openOnFieldClick", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "placeholder", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "readOnly", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "showClearButton", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "showDropDownButton", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "stylingMode", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "tabIndex", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "text", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "validationError", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "validationMessageMode", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "value", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "valueChangeEvent", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "valueExpr", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "visible", null);
tslib_1.__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "width", null);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onClosed", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onCopy", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onCut", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onEnterKey", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onFocusIn", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onFocusOut", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onInput", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onKeyDown", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onKeyPress", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onKeyUp", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onOpened", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onPaste", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onValueChanged", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "acceptCustomValueChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "accessKeyChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "activeStateEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "buttonsChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "contentTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "dataSourceChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "deferRenderingChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "displayExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "dropDownOptionsChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "fieldTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "focusStateEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "hintChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "hoverStateEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "inputAttrChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "isValidChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "itemsChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "maxLengthChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "nameChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "openedChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "openOnFieldClickChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "placeholderChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "readOnlyChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "showClearButtonChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "showDropDownButtonChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "stylingModeChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "tabIndexChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "textChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "validationErrorChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "validationMessageModeChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "valueChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "valueChangeEventChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "valueExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "widthChange", void 0);
tslib_1.__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onBlur", void 0);
tslib_1.__decorate([
    HostListener('valueChange', ['$event'])
], DxDropDownBoxComponent.prototype, "change", null);
tslib_1.__decorate([
    HostListener('onBlur', ['$event'])
], DxDropDownBoxComponent.prototype, "touched", void 0);
tslib_1.__decorate([
    ContentChildren(DxiButtonComponent)
], DxDropDownBoxComponent.prototype, "buttonsChildren", null);
tslib_1.__decorate([
    ContentChildren(DxiItemComponent)
], DxDropDownBoxComponent.prototype, "itemsChildren", null);
DxDropDownBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'dx-drop-down-box',
        template: '<ng-content></ng-content>',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            CUSTOM_VALUE_ACCESSOR_PROVIDER,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    tslib_1.__param(7, Inject(PLATFORM_ID))
], DxDropDownBoxComponent);
export { DxDropDownBoxComponent };
let DxDropDownBoxModule = class DxDropDownBoxModule {
};
DxDropDownBoxModule = tslib_1.__decorate([
    NgModule({
        imports: [
            DxiButtonModule,
            DxoOptionsModule,
            DxoDropDownOptionsModule,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxiToolbarItemModule,
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxDropDownBoxComponent
        ],
        exports: [
            DxDropDownBoxComponent,
            DxiButtonModule,
            DxoOptionsModule,
            DxoDropDownOptionsModule,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxiToolbarItemModule,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxDropDownBoxModule);
export { DxDropDownBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvZHJvcC1kb3duLWJveC8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUdwQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUVOLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sYUFBYSxFQUNiLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxPQUFPLEVBQ1AsYUFBYSxFQUNiLGVBQWUsRUFDZixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxhQUFhLE1BQU0sNkJBQTZCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdkUsT0FBTyxFQUVILGlCQUFpQixFQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFDSCxXQUFXLEVBQ1gsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2hCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixD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QkFBZ0IsQ0FBQzsyREFHakM7QUFwd0JRLHNCQUFzQjtJQVhsQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsU0FBUyxFQUFFO1lBQ1AsY0FBYztZQUNkLGFBQWE7WUFDYiw4QkFBOEI7WUFDOUIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtTQUN2QjtLQUNKLENBQUM7SUErd0JXLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtHQTl3Qm5CLHNCQUFzQixDQXk1QmxDO1NBejVCWSxzQkFBc0I7QUFxOEJuQyxJQUFhLG1CQUFtQixHQUFoQztDQUFvQyxDQUFBO0FBQXZCLG1CQUFtQjtJQTFDL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQix3QkFBd0I7WUFDeEIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCx1QkFBdUI7WUFDdkIsa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLDBCQUEwQjtTQUMzQjtRQUNELFlBQVksRUFBRTtZQUNaLHNCQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLHNCQUFzQjtZQUN0QixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLHdCQUF3QjtZQUN4QixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsV0FBVztZQUNYLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsYUFBYTtZQUNiLGdCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxtQkFBbUIsQ0FBSTtTQUF2QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHsgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIE5nWm9uZSxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgSW5qZWN0LFxyXG5cclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25Jbml0LFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbnRlbnRDaGlsZCxcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4RHJvcERvd25Cb3ggZnJvbSAnZGV2ZXh0cmVtZS91aS9kcm9wX2Rvd25fYm94JztcclxuXHJcbmltcG9ydCB7IER4VmFsaWRhdG9yQ29tcG9uZW50IH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL3ZhbGlkYXRvcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgICBOR19WQUxVRV9BQ0NFU1NPUlxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBEeENvbXBvbmVudCxcclxuICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgSXRlcmFibGVEaWZmZXJIZWxwZXIsXHJcbiAgICBXYXRjaGVySGVscGVyXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRHhpQnV0dG9uTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b09wdGlvbnNNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRHJvcERvd25PcHRpb25zTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9IaWRlTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1Nob3dNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvUG9zaXRpb25Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQXRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQm91bmRhcnlPZmZzZXRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQ29sbGlzaW9uTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b015TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b09mZnNldE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeGlUb29sYmFySXRlbU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeGlJdGVtTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcblxyXG5pbXBvcnQgeyBEeGlCdXR0b25Db21wb25lbnQgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpSXRlbUNvbXBvbmVudCB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQ1VTVE9NX1ZBTFVFX0FDQ0VTU09SX1BST1ZJREVSID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEeERyb3BEb3duQm94Q29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIERyb3BEb3duQm94IHdpZGdldCBjb25zaXN0cyBvZiBhIHRleHQgZmllbGQsIHdoaWNoIGRpc3BsYXlzIHRoZSBjdXJyZW50IHZhbHVlLCBhbmQgYSBkcm9wLWRvd24gZmllbGQsIHdoaWNoIGNhbiBjb250YWluIGFueSBVSSBlbGVtZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LWRyb3AtZG93bi1ib3gnLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgQ1VTVE9NX1ZBTFVFX0FDQ0VTU09SX1BST1ZJREVSLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4RHJvcERvd25Cb3hDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeERyb3BEb3duQm94O1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGQoRHhWYWxpZGF0b3JDb21wb25lbnQpXHJcbiAgICB2YWxpZGF0b3I6IER4VmFsaWRhdG9yQ29tcG9uZW50O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgYWxsb3dzIGEgdXNlciB0byBlbnRlciBhIGN1c3RvbSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY2NlcHRDdXN0b21WYWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY2NlcHRDdXN0b21WYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjY2VwdEN1c3RvbVZhbHVlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY2NlcHRDdXN0b21WYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNob3J0Y3V0IGtleSB0aGF0IHNldHMgZm9jdXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY2Nlc3NLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY2Nlc3NLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBhY2Nlc3NLZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWNjZXNzS2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gaW50ZXJhY3Rpbmcgd2l0aCBhIHVzZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWN0aXZlU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyB5b3UgdG8gYWRkIGN1c3RvbSBidXR0b25zIHRvIHRoZSBpbnB1dCB0ZXh0IGZpZWxkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJ1dHRvbnMoKTogQXJyYXk8c3RyaW5nIHwgRGV2RXhwcmVzcy51aS5keFRleHRFZGl0b3JCdXR0b24+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdidXR0b25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnV0dG9ucyh2YWx1ZTogQXJyYXk8c3RyaW5nIHwgRGV2RXhwcmVzcy51aS5keFRleHRFZGl0b3JCdXR0b24+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdidXR0b25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGhlIGRyb3AtZG93biBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbnRlbnRUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbnRlbnRUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnRlbnRUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb250ZW50VGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZHMgdGhlIHdpZGdldCB0byBkYXRhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFTb3VyY2UoKTogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxEZXZFeHByZXNzLnVpLkNvbGxlY3Rpb25XaWRnZXRJdGVtIHwgYW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8RGV2RXhwcmVzcy51aS5Db2xsZWN0aW9uV2lkZ2V0SXRlbSB8IGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVuZGVyIHRoZSBkcm9wLWRvd24gZmllbGQncyBjb250ZW50IHdoZW4gaXQgaXMgZGlzcGxheWVkLiBJZiBmYWxzZSwgdGhlIGNvbnRlbnQgaXMgcmVuZGVyZWQgaW1tZWRpYXRlbHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGVmZXJSZW5kZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGVmZXJSZW5kZXJpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBkZWZlclJlbmRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGVmZXJSZW5kZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZGF0YSBmaWVsZCB3aG9zZSB2YWx1ZXMgc2hvdWxkIGJlIGRpc3BsYXllZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNwbGF5RXhwcigpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzcGxheUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNwbGF5RXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc3BsYXlFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGhlIGRyb3AtZG93biBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZHJvcERvd25CdXR0b25UZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Ryb3BEb3duQnV0dG9uVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkcm9wRG93bkJ1dHRvblRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Ryb3BEb3duQnV0dG9uVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgZHJvcC1kb3duIGZpZWxkIHdoaWNoIGhvbGRzIHRoZSBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRyb3BEb3duT3B0aW9ucygpOiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkcm9wRG93bk9wdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBkcm9wRG93bk9wdGlvbnModmFsdWU6IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Ryb3BEb3duT3B0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgdGV4dCBmaWVsZC4gTXVzdCBjb250YWluIHRoZSBUZXh0Qm94IHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWVsZFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmllbGRUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmllbGRUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBiZSBmb2N1c2VkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgZm9yIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGEgdXNlciBwYXVzZXMgb24gaXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaG92ZXJTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBob3ZlclN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIHBhc3NlZCBvbiB0byB0aGUgdW5kZXJseWluZyBIVE1MIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaW5wdXRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW5wdXRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaW5wdXRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2lucHV0QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZWRpdG9yJ3MgdmFsdWUgaXMgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpc1ZhbGlkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXNWYWxpZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXNWYWxpZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBpdGVtcyBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpdGVtcygpOiBBcnJheTxhbnkgfCB7IGRpc2FibGVkPzogYm9vbGVhbiwgaHRtbD86IHN0cmluZywgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxhbnkgfCB7IGRpc2FibGVkPzogYm9vbGVhbiwgaHRtbD86IHN0cmluZywgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgeW91IGNhbiBlbnRlciBpbnRvIHRoZSB0ZXh0Ym94LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heExlbmd0aCgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heExlbmd0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heExlbmd0aCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhMZW5ndGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9mIHRoZSB1bmRlcmx5aW5nIEhUTUwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIGRyb3AtZG93biBlZGl0b3IgaXMgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcGVuZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wZW5lZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHVzZXIgY2FuIG9wZW4gdGhlIGRyb3AtZG93biBsaXN0IGJ5IGNsaWNraW5nIGEgdGV4dCBmaWVsZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBvcGVuT25GaWVsZENsaWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29wZW5PbkZpZWxkQ2xpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBvcGVuT25GaWVsZENsaWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvcGVuT25GaWVsZENsaWNrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0ZXh0IGRpc3BsYXllZCBieSB0aGUgd2lkZ2V0IHdoZW4gdGhlIHdpZGdldCB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGxhY2Vob2xkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGVkaXRvciBpcyByZWFkLW9ubHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVhZE9ubHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVhZE9ubHknKTtcclxuICAgIH1cclxuICAgIHNldCByZWFkT25seSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVhZE9ubHknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBDbGVhciBidXR0b24gaW4gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q2xlYXJCdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NsZWFyQnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0NsZWFyQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q2xlYXJCdXR0b24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRyb3AtZG93biBidXR0b24gaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93RHJvcERvd25CdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0Ryb3BEb3duQnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0Ryb3BEb3duQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93RHJvcERvd25CdXR0b24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgd2lkZ2V0J3MgdGV4dCBmaWVsZCBpcyBzdHlsZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3R5bGluZ01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdHlsaW5nTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0eWxpbmdNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0eWxpbmdNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50IHdoZW4gdGhlIFRhYiBrZXkgaXMgdXNlZCBmb3IgbmF2aWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYkluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFiSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlYWQtb25seSBvcHRpb24gdGhhdCBob2xkcyB0aGUgdGV4dCBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldCBpbnB1dCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBpbmZvcm1hdGlvbiBvbiB0aGUgdmFsaWRhdGlvbiBlcnJvciB3aGVuIHVzaW5nIGEgY3VzdG9tIHZhbGlkYXRpb24gZW5naW5lLiBTaG91bGQgYmUgY2hhbmdlZCBhdCBydW50aW1lIGFsb25nIHdpdGggdGhlIGlzVmFsaWQgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25FcnJvcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25FcnJvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25FcnJvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uRXJyb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgbWVzc2FnZSBhYm91dCB0aGUgdmFsaWRhdGlvbiBydWxlcyB0aGF0IGFyZSBub3Qgc2F0aXNmaWVkIGJ5IHRoaXMgZWRpdG9yJ3MgdmFsdWUgaXMgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uTWVzc2FnZU1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUuIE1heSBiZSBhbiBvYmplY3QgaWYgZGF0YVNvdXJjZSBjb250YWlucyBvYmplY3RzIGFuZCB2YWx1ZUV4cHIgaXMgbm90IHNldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBET00gZXZlbnRzIGFmdGVyIHdoaWNoIHRoZSB3aWRnZXQncyB2YWx1ZSBzaG91bGQgYmUgdXBkYXRlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZUNoYW5nZUV2ZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVDaGFuZ2VFdmVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlQ2hhbmdlRXZlbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVDaGFuZ2VFdmVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hpY2ggZGF0YSBmaWVsZCBwcm92aWRlcyB1bmlxdWUgdmFsdWVzIHRvIHRoZSB3aWRnZXQncyB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZUV4cHIoKTogRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlRXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0IGxvc2VzIGZvY3VzIGFmdGVyIHRoZSB0ZXh0IGZpZWxkJ3MgY29udGVudCB3YXMgY2hhbmdlZCB1c2luZyB0aGUga2V5Ym9hcmQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb25jZSB0aGUgZHJvcC1kb3duIGVkaXRvciBpcyBjbG9zZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgaW5wdXQgaGFzIGJlZW4gY29waWVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db3B5OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBpbnB1dCBoYXMgYmVlbiBjdXQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkN1dDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZGlzcG9zZWQgb2YuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRpc3Bvc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgRW50ZXIga2V5IGhhcyBiZWVuIHByZXNzZWQgd2hpbGUgdGhlIHdpZGdldCBpcyBmb2N1c2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FbnRlcktleTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0IGdldHMgZm9jdXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZvY3VzSW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCBsb3NlcyBmb2N1cy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRm9jdXNPdXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBlYWNoIHRpbWUgdGhlIHdpZGdldCdzIGlucHV0IGlzIGNoYW5nZWQgd2hpbGUgdGhlIHdpZGdldCBpcyBmb2N1c2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25JbnB1dDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHVzZXIgaXMgcHJlc3NpbmcgYSBrZXkgb24gdGhlIGtleWJvYXJkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdXNlciBwcmVzc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uS2V5UHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB1c2VyIHJlbGVhc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uS2V5VXA6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uY2UgdGhlIGRyb3AtZG93biBlZGl0b3IgaXMgb3BlbmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcGVuZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgd2lkZ2V0IG9wdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcHRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBpbnB1dCBoYXMgYmVlbiBwYXN0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblBhc3RlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgd2lkZ2V0J3MgdmFsdWUgaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2NlcHRDdXN0b21WYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFjY2Vzc0tleUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYnV0dG9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PHN0cmluZyB8IERldkV4cHJlc3MudWkuZHhUZXh0RWRpdG9yQnV0dG9uPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29udGVudFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhU291cmNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxEZXZFeHByZXNzLnVpLkNvbGxlY3Rpb25XaWRnZXRJdGVtIHwgYW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGVmZXJSZW5kZXJpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc3BsYXlFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRyb3BEb3duQnV0dG9uVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRyb3BEb3duT3B0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnM+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWVsZFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGlucHV0QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaXNWYWxpZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8YW55IHwgeyBkaXNhYmxlZD86IGJvb2xlYW4sIGh0bWw/OiBzdHJpbmcsIHRlbXBsYXRlPzogYW55LCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWF4TGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBuYW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvcGVuZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvcGVuT25GaWVsZENsaWNrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGxhY2Vob2xkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlYWRPbmx5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcnRsRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dDbGVhckJ1dHRvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dEcm9wRG93bkJ1dHRvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN0eWxpbmdNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0YWJJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsaWRhdGlvbkVycm9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWxpZGF0aW9uTWVzc2FnZU1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZUV2ZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCd2YWx1ZUNoYW5nZScsIFsnJGV2ZW50J10pIGNoYW5nZShfKSB7IH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ29uQmx1cicsIFsnJGV2ZW50J10pIHRvdWNoZWQgPSAoXykgPT4ge307XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpQnV0dG9uQ29tcG9uZW50KVxyXG4gICAgZ2V0IGJ1dHRvbnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQnV0dG9uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnV0dG9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJ1dHRvbnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2J1dHRvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlJdGVtQ29tcG9uZW50KVxyXG4gICAgZ2V0IGl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3dhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2lkaDogSXRlcmFibGVEaWZmZXJIZWxwZXIsIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIHRlbXBsYXRlSG9zdCwgX3dhdGNoZXJIZWxwZXIsIHRyYW5zZmVyU3RhdGUsIHBsYXRmb3JtSWQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjaGFuZ2UnLCBlbWl0OiAnb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2xvc2VkJywgZW1pdDogJ29uQ2xvc2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NvcHknLCBlbWl0OiAnb25Db3B5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2N1dCcsIGVtaXQ6ICdvbkN1dCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZW50ZXJLZXknLCBlbWl0OiAnb25FbnRlcktleScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c0luJywgZW1pdDogJ29uRm9jdXNJbicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c091dCcsIGVtaXQ6ICdvbkZvY3VzT3V0JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXRpYWxpemVkJywgZW1pdDogJ29uSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5wdXQnLCBlbWl0OiAnb25JbnB1dCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdrZXlEb3duJywgZW1pdDogJ29uS2V5RG93bicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdrZXlQcmVzcycsIGVtaXQ6ICdvbktleVByZXNzJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2tleVVwJywgZW1pdDogJ29uS2V5VXAnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3BlbmVkJywgZW1pdDogJ29uT3BlbmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Bhc3RlJywgZW1pdDogJ29uUGFzdGUnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAndmFsdWVDaGFuZ2VkJywgZW1pdDogJ29uVmFsdWVDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY2NlcHRDdXN0b21WYWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWNjZXNzS2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY3RpdmVTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2J1dHRvbnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbnRlbnRUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YVNvdXJjZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGVmZXJSZW5kZXJpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNwbGF5RXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZHJvcERvd25CdXR0b25UZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZHJvcERvd25PcHRpb25zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbGVtZW50QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmllbGRUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGludENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2lucHV0QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaXNWYWxpZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaXRlbXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21heExlbmd0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbmFtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnb3BlbmVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdvcGVuT25GaWVsZENsaWNrQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwbGFjZWhvbGRlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVhZE9ubHlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDbGVhckJ1dHRvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0Ryb3BEb3duQnV0dG9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdHlsaW5nTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGFiSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbGlkYXRpb25FcnJvckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsaWRhdGlvbk1lc3NhZ2VNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2VFdmVudENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnb25CbHVyJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4RHJvcERvd25Cb3goZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmVudEhlbHBlci5sb2NrZWRWYWx1ZUNoYW5nZUV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ldmVudEhlbHBlci5sb2NrZWRWYWx1ZUNoYW5nZUV2ZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLmNoYW5nZSA9IGZuOyB9XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLnRvdWNoZWQgPSBmbjsgfVxyXG5cclxuICAgIF9jcmVhdGVXaWRnZXQoZWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIuX2NyZWF0ZVdpZGdldChlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdmb2N1c091dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIZWxwZXIuZmlyZU5nRXZlbnQoJ29uQmx1cicsIFtlXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVdpZGdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnYnV0dG9ucycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdkYXRhU291cmNlJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2l0ZW1zJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnYnV0dG9ucycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2l0ZW1zJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuY3JlYXRlSW5zdGFuY2VPbkluaXQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmNyZWF0ZUluc3RhbmNlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhpQnV0dG9uTW9kdWxlLFxyXG4gICAgRHhvT3B0aW9uc01vZHVsZSxcclxuICAgIER4b0Ryb3BEb3duT3B0aW9uc01vZHVsZSxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhvUG9zaXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BdE1vZHVsZSxcclxuICAgIER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhvQ29sbGlzaW9uTW9kdWxlLFxyXG4gICAgRHhvTXlNb2R1bGUsXHJcbiAgICBEeG9PZmZzZXRNb2R1bGUsXHJcbiAgICBEeGlUb29sYmFySXRlbU1vZHVsZSxcclxuICAgIER4aUl0ZW1Nb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4RHJvcERvd25Cb3hDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4RHJvcERvd25Cb3hDb21wb25lbnQsXHJcbiAgICBEeGlCdXR0b25Nb2R1bGUsXHJcbiAgICBEeG9PcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvRHJvcERvd25PcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgRHhvSGlkZU1vZHVsZSxcclxuICAgIER4b1Nob3dNb2R1bGUsXHJcbiAgICBEeG9Qb3NpdGlvbk1vZHVsZSxcclxuICAgIER4b0F0TW9kdWxlLFxyXG4gICAgRHhvQm91bmRhcnlPZmZzZXRNb2R1bGUsXHJcbiAgICBEeG9Db2xsaXNpb25Nb2R1bGUsXHJcbiAgICBEeG9NeU1vZHVsZSxcclxuICAgIER4b09mZnNldE1vZHVsZSxcclxuICAgIER4aVRvb2xiYXJJdGVtTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeERyb3BEb3duQm94TW9kdWxlIHsgfVxyXG4iXX0=
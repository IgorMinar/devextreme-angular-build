import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxDropDownBox from 'devextreme/ui/drop_down_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiButtonComponent, DxiItemComponent, DxiButtonModule, DxoOptionsModule, DxoDropDownOptionsModule, DxoAnimationModule, DxoHideModule, DxoShowModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxiToolbarItemModule, DxiItemModule } from 'devextreme-angular/ui/nested';

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
__decorate([
    ContentChild(DxValidatorComponent)
], DxDropDownBoxComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "acceptCustomValue", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "buttons", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "contentTemplate", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "dropDownButtonTemplate", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "dropDownOptions", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "fieldTemplate", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "height", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "hint", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "inputAttr", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "items", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "maxLength", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "name", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "opened", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "openOnFieldClick", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "placeholder", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "showClearButton", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "showDropDownButton", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "stylingMode", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "text", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "value", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "valueChangeEvent", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "valueExpr", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "visible", null);
__decorate([
    Input()
], DxDropDownBoxComponent.prototype, "width", null);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onClosed", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onCopy", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onCut", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onEnterKey", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onFocusIn", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onFocusOut", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onInput", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onKeyDown", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onKeyPress", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onKeyUp", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onOpened", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onPaste", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "acceptCustomValueChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "buttonsChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "contentTemplateChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "displayExprChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "dropDownOptionsChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "fieldTemplateChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "inputAttrChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "maxLengthChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "openedChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "openOnFieldClickChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "placeholderChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "showClearButtonChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "showDropDownButtonChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "valueChangeEventChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "valueExprChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxDropDownBoxComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxDropDownBoxComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxDropDownBoxComponent.prototype, "touched", void 0);
__decorate([
    ContentChildren(DxiButtonComponent)
], DxDropDownBoxComponent.prototype, "buttonsChildren", null);
__decorate([
    ContentChildren(DxiItemComponent)
], DxDropDownBoxComponent.prototype, "itemsChildren", null);
DxDropDownBoxComponent = __decorate([
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
    __param(7, Inject(PLATFORM_ID))
], DxDropDownBoxComponent);
let DxDropDownBoxModule = class DxDropDownBoxModule {
};
DxDropDownBoxModule = __decorate([
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxDropDownBoxComponent, DxDropDownBoxModule };
//# sourceMappingURL=devextreme-angular-ui-drop-down-box.js.map

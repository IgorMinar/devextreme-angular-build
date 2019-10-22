import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxColorBox from 'devextreme/ui/color_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiButtonComponent, DxiButtonModule, DxoOptionsModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(() => DxColorBoxComponent),
    multi: true
};
/**
 * The ColorBox is a widget that allows an end user to enter a color or pick it out from the drop-down editor.
 */
let DxColorBoxComponent = class DxColorBoxComponent extends DxComponent {
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
            { emit: 'applyButtonTextChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'buttonsChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'editAlphaChannelChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'keyStepChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
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
     * Specifies the text displayed on the button that applies changes and closes the drop-down editor.
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
     * Specifies the text displayed on the button that cancels changes and closes the drop-down editor.
     */
    get cancelButtonText() {
        return this._getOption('cancelButtonText');
    }
    set cancelButtonText(value) {
        this._setOption('cancelButtonText', value);
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
     * Specifies a custom template for the drop-down button.
     */
    get dropDownButtonTemplate() {
        return this._getOption('dropDownButtonTemplate');
    }
    set dropDownButtonTemplate(value) {
        this._setOption('dropDownButtonTemplate', value);
    }
    /**
     * Specifies whether or not the widget value includes the alpha channel component.
     */
    get editAlphaChannel() {
        return this._getOption('editAlphaChannel');
    }
    set editAlphaChannel(value) {
        this._setOption('editAlphaChannel', value);
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
     * Specifies a custom template for the input field. Must contain the TextBox widget.
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
     * Specifies the size of a step by which a handle is moved using a keyboard shortcut.
     */
    get keyStep() {
        return this._getOption('keyStep');
    }
    set keyStep(value) {
        this._setOption('keyStep', value);
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
     * Specifies the currently selected value.
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
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
        return new DxColorBox(element, options);
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
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('buttons');
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
DxColorBoxComponent.ctorParameters = () => [
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
], DxColorBoxComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "acceptCustomValue", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "applyButtonText", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "applyValueMode", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "buttons", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "cancelButtonText", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "dropDownButtonTemplate", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "editAlphaChannel", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "fieldTemplate", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "height", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "hint", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "inputAttr", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "keyStep", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "name", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "opened", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "placeholder", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "stylingMode", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "text", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "value", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "visible", null);
__decorate([
    Input()
], DxColorBoxComponent.prototype, "width", null);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onClosed", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onCopy", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onCut", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onEnterKey", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onFocusIn", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onFocusOut", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onInput", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onKeyDown", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onKeyPress", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onKeyUp", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onOpened", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onPaste", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "acceptCustomValueChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "applyButtonTextChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "applyValueModeChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "buttonsChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "cancelButtonTextChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "editAlphaChannelChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "fieldTemplateChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "inputAttrChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "keyStepChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "openedChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "placeholderChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxColorBoxComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxColorBoxComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxColorBoxComponent.prototype, "touched", void 0);
__decorate([
    ContentChildren(DxiButtonComponent)
], DxColorBoxComponent.prototype, "buttonsChildren", null);
DxColorBoxComponent = __decorate([
    Component({
        selector: 'dx-color-box',
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
], DxColorBoxComponent);
let DxColorBoxModule = class DxColorBoxModule {
};
DxColorBoxModule = __decorate([
    NgModule({
        imports: [
            DxiButtonModule,
            DxoOptionsModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxColorBoxComponent
        ],
        exports: [
            DxColorBoxComponent,
            DxiButtonModule,
            DxoOptionsModule,
            DxTemplateModule
        ]
    })
], DxColorBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxColorBoxComponent, DxColorBoxModule };
//# sourceMappingURL=devextreme-angular-ui-color-box.js.map

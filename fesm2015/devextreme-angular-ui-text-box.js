import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxTextBox from 'devextreme/ui/text_box';
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
    useExisting: forwardRef(() => DxTextBoxComponent),
    multi: true
};
/**
 * The TextBox is a widget that enables a user to enter and edit a single line of text.
 */
let DxTextBoxComponent = class DxTextBoxComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.touched = (_) => { };
        this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
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
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'buttonsChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'maskChange' },
            { emit: 'maskCharChange' },
            { emit: 'maskInvalidMessageChange' },
            { emit: 'maskRulesChange' },
            { emit: 'maxLengthChange' },
            { emit: 'modeChange' },
            { emit: 'nameChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showMaskModeChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'useMaskedValueChange' },
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
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
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
     * Specifies whether the editor's value is valid.
     */
    get isValid() {
        return this._getOption('isValid');
    }
    set isValid(value) {
        this._setOption('isValid', value);
    }
    /**
     * The editor mask that specifies the custom format of the entered string.
     */
    get mask() {
        return this._getOption('mask');
    }
    set mask(value) {
        this._setOption('mask', value);
    }
    /**
     * Specifies a mask placeholder character.
     */
    get maskChar() {
        return this._getOption('maskChar');
    }
    set maskChar(value) {
        this._setOption('maskChar', value);
    }
    /**
     * A message displayed when the entered text does not match the specified pattern.
     */
    get maskInvalidMessage() {
        return this._getOption('maskInvalidMessage');
    }
    set maskInvalidMessage(value) {
        this._setOption('maskInvalidMessage', value);
    }
    /**
     * Specifies custom mask rules.
     */
    get maskRules() {
        return this._getOption('maskRules');
    }
    set maskRules(value) {
        this._setOption('maskRules', value);
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
     * The "mode" attribute value of the actual HTML input element representing the text box.
     */
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
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
     * Specifies when the widget shows the mask. Applies only if useMaskedValue is true.
     */
    get showMaskMode() {
        return this._getOption('showMaskMode');
    }
    set showMaskMode(value) {
        this._setOption('showMaskMode', value);
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
     * Specifies whether the value should contain mask characters or not.
     */
    get useMaskedValue() {
        return this._getOption('useMaskedValue');
    }
    set useMaskedValue(value) {
        this._setOption('useMaskedValue', value);
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
     * Specifies a value the widget displays.
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
        return new DxTextBox(element, options);
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
DxTextBoxComponent.ctorParameters = () => [
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
], DxTextBoxComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "buttons", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "height", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "hint", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "inputAttr", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "mask", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "maskChar", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "maskInvalidMessage", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "maskRules", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "maxLength", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "mode", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "name", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "placeholder", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "showClearButton", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "showMaskMode", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "spellcheck", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "stylingMode", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "text", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "useMaskedValue", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "value", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "valueChangeEvent", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "visible", null);
__decorate([
    Input()
], DxTextBoxComponent.prototype, "width", null);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onCopy", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onCut", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onEnterKey", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onFocusIn", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onFocusOut", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onInput", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onKeyDown", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onKeyPress", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onKeyUp", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onPaste", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "buttonsChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "inputAttrChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "maskChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "maskCharChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "maskInvalidMessageChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "maskRulesChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "maxLengthChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "modeChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "placeholderChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "showClearButtonChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "showMaskModeChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "spellcheckChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "useMaskedValueChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "valueChangeEventChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxTextBoxComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxTextBoxComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxTextBoxComponent.prototype, "touched", void 0);
__decorate([
    ContentChildren(DxiButtonComponent)
], DxTextBoxComponent.prototype, "buttonsChildren", null);
DxTextBoxComponent = __decorate([
    Component({
        selector: 'dx-text-box',
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
], DxTextBoxComponent);
let DxTextBoxModule = class DxTextBoxModule {
};
DxTextBoxModule = __decorate([
    NgModule({
        imports: [
            DxiButtonModule,
            DxoOptionsModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxTextBoxComponent
        ],
        exports: [
            DxTextBoxComponent,
            DxiButtonModule,
            DxoOptionsModule,
            DxTemplateModule
        ]
    })
], DxTextBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxTextBoxComponent, DxTextBoxModule };
//# sourceMappingURL=devextreme-angular-ui-text-box.js.map

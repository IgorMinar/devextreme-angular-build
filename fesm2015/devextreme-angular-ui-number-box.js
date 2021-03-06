import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxNumberBox from 'devextreme/ui/number_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiButtonComponent, DxiButtonModule, DxoOptionsModule, DxoFormatModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(() => DxNumberBoxComponent),
    multi: true
};
/**
 * The NumberBox is a widget that displays a numeric value and allows a user to modify it by typing in a value, and incrementing or decrementing it using the keyboard or mouse.
 */
let DxNumberBoxComponent = class DxNumberBoxComponent extends DxComponent {
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
            { emit: 'formatChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'invalidValueMessageChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'modeChange' },
            { emit: 'nameChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showSpinButtonsChange' },
            { emit: 'stepChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'useLargeSpinButtonsChange' },
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
     * Specifies the value's display format and controls user input accordingly.
     */
    get format() {
        return this._getOption('format');
    }
    set format(value) {
        this._setOption('format', value);
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
     * Specifies the text of the message displayed if the specified value is not a number.
     */
    get invalidValueMessage() {
        return this._getOption('invalidValueMessage');
    }
    set invalidValueMessage(value) {
        this._setOption('invalidValueMessage', value);
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
     * The maximum value accepted by the number box.
     */
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    /**
     * The minimum value accepted by the number box.
     */
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    /**
     * Specifies the value to be passed to the type attribute of the underlying `` element.
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
     * Specifies whether to show the buttons that change the value by a step.
     */
    get showSpinButtons() {
        return this._getOption('showSpinButtons');
    }
    set showSpinButtons(value) {
        this._setOption('showSpinButtons', value);
    }
    /**
     * Specifies how much the widget's value changes when using the spin buttons, Up/Down arrow keys, or mouse wheel.
     */
    get step() {
        return this._getOption('step');
    }
    set step(value) {
        this._setOption('step', value);
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
     * Specifies whether to use touch friendly spin buttons. Applies only if showSpinButtons is true.
     */
    get useLargeSpinButtons() {
        return this._getOption('useLargeSpinButtons');
    }
    set useLargeSpinButtons(value) {
        this._setOption('useLargeSpinButtons', value);
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
     * The current number box value.
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
        return new DxNumberBox(element, options);
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
DxNumberBoxComponent.ctorParameters = () => [
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
], DxNumberBoxComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "buttons", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "format", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "height", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "hint", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "inputAttr", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "invalidValueMessage", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "max", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "min", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "mode", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "name", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "placeholder", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "showClearButton", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "showSpinButtons", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "step", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "stylingMode", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "text", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "useLargeSpinButtons", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "value", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "valueChangeEvent", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "visible", null);
__decorate([
    Input()
], DxNumberBoxComponent.prototype, "width", null);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onCopy", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onCut", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onEnterKey", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onFocusIn", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onFocusOut", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onInput", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onKeyDown", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onKeyPress", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onKeyUp", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onPaste", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "buttonsChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "formatChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "inputAttrChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "invalidValueMessageChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "maxChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "minChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "modeChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "placeholderChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "showClearButtonChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "showSpinButtonsChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "stepChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "useLargeSpinButtonsChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "valueChangeEventChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxNumberBoxComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxNumberBoxComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxNumberBoxComponent.prototype, "touched", void 0);
__decorate([
    ContentChildren(DxiButtonComponent)
], DxNumberBoxComponent.prototype, "buttonsChildren", null);
DxNumberBoxComponent = __decorate([
    Component({
        selector: 'dx-number-box',
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
], DxNumberBoxComponent);
let DxNumberBoxModule = class DxNumberBoxModule {
};
DxNumberBoxModule = __decorate([
    NgModule({
        imports: [
            DxiButtonModule,
            DxoOptionsModule,
            DxoFormatModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxNumberBoxComponent
        ],
        exports: [
            DxNumberBoxComponent,
            DxiButtonModule,
            DxoOptionsModule,
            DxoFormatModule,
            DxTemplateModule
        ]
    })
], DxNumberBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxNumberBoxComponent, DxNumberBoxModule };
//# sourceMappingURL=devextreme-angular-ui-number-box.js.map

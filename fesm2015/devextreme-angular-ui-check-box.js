import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxCheckBox from 'devextreme/ui/check_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
    useExisting: forwardRef(() => DxCheckBoxComponent),
    multi: true
};
/**
 * The CheckBox is a small box, which when selected by the end user, shows that a particular feature has been enabled or a specific option has been chosen.
 */
let DxCheckBoxComponent = class DxCheckBoxComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this.touched = (_) => { };
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
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
     * Specifies whether the editor's value is valid.
     */
    get isValid() {
        return this._getOption('isValid');
    }
    set isValid(value) {
        this._setOption('isValid', value);
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
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * Specifies the text displayed by the check box.
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
     * Specifies the widget state.
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
    _createInstance(element, options) {
        return new DxCheckBox(element, options);
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
DxCheckBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    ContentChild(DxValidatorComponent)
], DxCheckBoxComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "height", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "hint", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "name", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "text", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "value", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "visible", null);
__decorate([
    Input()
], DxCheckBoxComponent.prototype, "width", null);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxCheckBoxComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxCheckBoxComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxCheckBoxComponent.prototype, "touched", void 0);
DxCheckBoxComponent = __decorate([
    Component({
        selector: 'dx-check-box',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            CUSTOM_VALUE_ACCESSOR_PROVIDER,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxCheckBoxComponent);
let DxCheckBoxModule = class DxCheckBoxModule {
};
DxCheckBoxModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxCheckBoxComponent
        ],
        exports: [
            DxCheckBoxComponent,
            DxTemplateModule
        ]
    })
], DxCheckBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxCheckBoxComponent, DxCheckBoxModule };
//# sourceMappingURL=devextreme-angular-ui-check-box.js.map

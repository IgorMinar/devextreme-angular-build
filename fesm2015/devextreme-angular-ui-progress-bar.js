import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxProgressBar from 'devextreme/ui/progress_bar';
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
    useExisting: forwardRef(() => DxProgressBarComponent),
    multi: true
};
/**
 * The ProgressBar is a widget that shows current progress.
 */
let DxProgressBarComponent = class DxProgressBarComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this.touched = (_) => { };
        this._createEventEmitters([
            { subscribe: 'complete', emit: 'onComplete' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showStatusChange' },
            { emit: 'statusFormatChange' },
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
     * The maximum value the widget can accept.
     */
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    /**
     * The minimum value the widget can accept.
     */
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
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
     * Specifies whether or not the widget displays a progress status.
     */
    get showStatus() {
        return this._getOption('showStatus');
    }
    set showStatus(value) {
        this._setOption('showStatus', value);
    }
    /**
     * Specifies a format for the progress status.
     */
    get statusFormat() {
        return this._getOption('statusFormat');
    }
    set statusFormat(value) {
        this._setOption('statusFormat', value);
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
     * The current widget value.
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
        return new DxProgressBar(element, options);
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
DxProgressBarComponent.ctorParameters = () => [
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
], DxProgressBarComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "height", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "hint", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "max", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "min", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "showStatus", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "statusFormat", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "value", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "visible", null);
__decorate([
    Input()
], DxProgressBarComponent.prototype, "width", null);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "onComplete", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "maxChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "minChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "showStatusChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "statusFormatChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxProgressBarComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxProgressBarComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxProgressBarComponent.prototype, "touched", void 0);
DxProgressBarComponent = __decorate([
    Component({
        selector: 'dx-progress-bar',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            CUSTOM_VALUE_ACCESSOR_PROVIDER,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxProgressBarComponent);
let DxProgressBarModule = class DxProgressBarModule {
};
DxProgressBarModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxProgressBarComponent
        ],
        exports: [
            DxProgressBarComponent,
            DxTemplateModule
        ]
    })
], DxProgressBarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxProgressBarComponent, DxProgressBarModule };
//# sourceMappingURL=devextreme-angular-ui-progress-bar.js.map

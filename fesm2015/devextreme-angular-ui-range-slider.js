import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxRangeSlider from 'devextreme/ui/range_slider';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoLabelModule, DxoFormatModule, DxoTooltipModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(() => DxRangeSliderComponent),
    multi: true
};
/**
 * The RangeSlider is a widget that allows an end user to choose a range of numeric values.
 */
let DxRangeSliderComponent = class DxRangeSliderComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
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
            { emit: 'endChange' },
            { emit: 'endNameChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'keyStepChange' },
            { emit: 'labelChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showRangeChange' },
            { emit: 'startChange' },
            { emit: 'startNameChange' },
            { emit: 'stepChange' },
            { emit: 'tabIndexChange' },
            { emit: 'tooltipChange' },
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
     * The right edge of the interval currently selected using the range slider.
     */
    get end() {
        return this._getOption('end');
    }
    set end(value) {
        this._setOption('end', value);
    }
    /**
     * The value to be assigned to the name attribute of the underlying `` element.
     */
    get endName() {
        return this._getOption('endName');
    }
    set endName(value) {
        this._setOption('endName', value);
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
     * Specifies the step by which a handle moves when a user presses Page Up or Page Down.
     */
    get keyStep() {
        return this._getOption('keyStep');
    }
    set keyStep(value) {
        this._setOption('keyStep', value);
    }
    /**
     * Configures the labels displayed at the min and max values.
     */
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
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
     * Specifies whether to highlight the selected range.
     */
    get showRange() {
        return this._getOption('showRange');
    }
    set showRange(value) {
        this._setOption('showRange', value);
    }
    /**
     * The left edge of the interval currently selected using the range slider.
     */
    get start() {
        return this._getOption('start');
    }
    set start(value) {
        this._setOption('start', value);
    }
    /**
     * The value to be assigned to the name attribute of the underlying `` element.
     */
    get startName() {
        return this._getOption('startName');
    }
    set startName(value) {
        this._setOption('startName', value);
    }
    /**
     * Specifies the step by which the widget's value changes when a user drags a handler.
     */
    get step() {
        return this._getOption('step');
    }
    set step(value) {
        this._setOption('step', value);
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
     * Configures a tooltip.
     */
    get tooltip() {
        return this._getOption('tooltip');
    }
    set tooltip(value) {
        this._setOption('tooltip', value);
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
     * Specifies the widget's value.
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
        return new DxRangeSlider(element, options);
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
        this.setupChanges('value', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('value');
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
DxRangeSliderComponent.ctorParameters = () => [
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
], DxRangeSliderComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "end", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "endName", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "height", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "hint", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "keyStep", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "label", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "max", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "min", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "showRange", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "start", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "startName", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "step", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "tooltip", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "value", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "visible", null);
__decorate([
    Input()
], DxRangeSliderComponent.prototype, "width", null);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "endChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "endNameChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "keyStepChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "labelChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "maxChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "minChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "showRangeChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "startChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "startNameChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "stepChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "tooltipChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxRangeSliderComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxRangeSliderComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxRangeSliderComponent.prototype, "touched", void 0);
DxRangeSliderComponent = __decorate([
    Component({
        selector: 'dx-range-slider',
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
], DxRangeSliderComponent);
let DxRangeSliderModule = class DxRangeSliderModule {
};
DxRangeSliderModule = __decorate([
    NgModule({
        imports: [
            DxoLabelModule,
            DxoFormatModule,
            DxoTooltipModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxRangeSliderComponent
        ],
        exports: [
            DxRangeSliderComponent,
            DxoLabelModule,
            DxoFormatModule,
            DxoTooltipModule,
            DxTemplateModule
        ]
    })
], DxRangeSliderModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxRangeSliderComponent, DxRangeSliderModule };
//# sourceMappingURL=devextreme-angular-ui-range-slider.js.map

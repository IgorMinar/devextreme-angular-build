import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxRadioGroup from 'devextreme/ui/radio_group';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxiItemModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(() => DxRadioGroupComponent),
    multi: true
};
/**
 * The RadioGroup is a widget that contains a set of radio buttons and allows an end user to make a single selection from the set.
 */
let DxRadioGroupComponent = class DxRadioGroupComponent extends DxComponent {
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
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'layoutChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueExprChange' },
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
     * Binds the widget to data.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
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
     * Specifies the radio group layout.
     */
    get layout() {
        return this._getOption('layout');
    }
    set layout(value) {
        this._setOption('layout', value);
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
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    _createInstance(element, options) {
        return new DxRadioGroup(element, options);
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
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
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
DxRadioGroupComponent.ctorParameters = () => [
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
], DxRadioGroupComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "height", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "hint", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "items", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "layout", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "name", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "value", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "valueExpr", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "visible", null);
__decorate([
    Input()
], DxRadioGroupComponent.prototype, "width", null);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "displayExprChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "layoutChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "valueExprChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxRadioGroupComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxRadioGroupComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxRadioGroupComponent.prototype, "touched", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxRadioGroupComponent.prototype, "itemsChildren", null);
DxRadioGroupComponent = __decorate([
    Component({
        selector: 'dx-radio-group',
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
], DxRadioGroupComponent);
let DxRadioGroupModule = class DxRadioGroupModule {
};
DxRadioGroupModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxRadioGroupComponent
        ],
        exports: [
            DxRadioGroupComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxRadioGroupModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxRadioGroupComponent, DxRadioGroupModule };
//# sourceMappingURL=devextreme-angular-ui-radio-group.js.map

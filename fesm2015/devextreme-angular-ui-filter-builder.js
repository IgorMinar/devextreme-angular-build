import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxFilterBuilder from 'devextreme/ui/filter_builder';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiCustomOperationComponent, DxiFieldComponent, DxiCustomOperationModule, DxiFieldModule, DxoFormatModule, DxoLookupModule, DxoFilterOperationDescriptionsModule, DxoGroupOperationDescriptionsModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(() => DxFilterBuilderComponent),
    multi: true
};
/**
 * The FilterBuilder widget allows a user to build complex filter expressions with an unlimited number of filter conditions, combined by logical operations using the UI.
 */
let DxFilterBuilderComponent = class DxFilterBuilderComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.touched = (_) => { };
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'editorPrepared', emit: 'onEditorPrepared' },
            { subscribe: 'editorPreparing', emit: 'onEditorPreparing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowHierarchicalFieldsChange' },
            { emit: 'customOperationsChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldsChange' },
            { emit: 'filterOperationDescriptionsChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupOperationDescriptionsChange' },
            { emit: 'groupOperationsChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxGroupLevelChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
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
     * Specifies whether the widget can display hierarchical data fields.
     */
    get allowHierarchicalFields() {
        return this._getOption('allowHierarchicalFields');
    }
    set allowHierarchicalFields(value) {
        this._setOption('allowHierarchicalFields', value);
    }
    /**
     * Configures custom filter operations.
     */
    get customOperations() {
        return this._getOption('customOperations');
    }
    set customOperations(value) {
        this._setOption('customOperations', value);
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
     * Configures fields.
     */
    get fields() {
        return this._getOption('fields');
    }
    set fields(value) {
        this._setOption('fields', value);
    }
    /**
     * Specifies filter operation descriptions.
     */
    get filterOperationDescriptions() {
        return this._getOption('filterOperationDescriptions');
    }
    set filterOperationDescriptions(value) {
        this._setOption('filterOperationDescriptions', value);
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
     * Specifies group operation descriptions.
     */
    get groupOperationDescriptions() {
        return this._getOption('groupOperationDescriptions');
    }
    set groupOperationDescriptions(value) {
        this._setOption('groupOperationDescriptions', value);
    }
    /**
     * Specifies a set of available group operations.
     */
    get groupOperations() {
        return this._getOption('groupOperations');
    }
    set groupOperations(value) {
        this._setOption('groupOperations', value);
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
     * Specifies groups' maximum nesting level.
     */
    get maxGroupLevel() {
        return this._getOption('maxGroupLevel');
    }
    set maxGroupLevel(value) {
        this._setOption('maxGroupLevel', value);
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
     * Allows you to specify a filter.
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
    get customOperationsChildren() {
        return this._getOption('customOperations');
    }
    set customOperationsChildren(value) {
        this.setChildren('customOperations', value);
    }
    get fieldsChildren() {
        return this._getOption('fields');
    }
    set fieldsChildren(value) {
        this.setChildren('fields', value);
    }
    _createInstance(element, options) {
        return new DxFilterBuilder(element, options);
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
        this.setupChanges('customOperations', changes);
        this.setupChanges('fields', changes);
        this.setupChanges('groupOperations', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('customOperations');
        this._idh.doCheck('fields');
        this._idh.doCheck('groupOperations');
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
DxFilterBuilderComponent.ctorParameters = () => [
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
], DxFilterBuilderComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "allowHierarchicalFields", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "customOperations", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "fields", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "filterOperationDescriptions", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "groupOperationDescriptions", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "groupOperations", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "height", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "hint", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "maxGroupLevel", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "value", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "visible", null);
__decorate([
    Input()
], DxFilterBuilderComponent.prototype, "width", null);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "onEditorPrepared", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "onEditorPreparing", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "allowHierarchicalFieldsChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "customOperationsChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "fieldsChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "filterOperationDescriptionsChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "groupOperationDescriptionsChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "groupOperationsChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "maxGroupLevelChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxFilterBuilderComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxFilterBuilderComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxFilterBuilderComponent.prototype, "touched", void 0);
__decorate([
    ContentChildren(DxiCustomOperationComponent)
], DxFilterBuilderComponent.prototype, "customOperationsChildren", null);
__decorate([
    ContentChildren(DxiFieldComponent)
], DxFilterBuilderComponent.prototype, "fieldsChildren", null);
DxFilterBuilderComponent = __decorate([
    Component({
        selector: 'dx-filter-builder',
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
], DxFilterBuilderComponent);
let DxFilterBuilderModule = class DxFilterBuilderModule {
};
DxFilterBuilderModule = __decorate([
    NgModule({
        imports: [
            DxiCustomOperationModule,
            DxiFieldModule,
            DxoFormatModule,
            DxoLookupModule,
            DxoFilterOperationDescriptionsModule,
            DxoGroupOperationDescriptionsModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxFilterBuilderComponent
        ],
        exports: [
            DxFilterBuilderComponent,
            DxiCustomOperationModule,
            DxiFieldModule,
            DxoFormatModule,
            DxoLookupModule,
            DxoFilterOperationDescriptionsModule,
            DxoGroupOperationDescriptionsModule,
            DxTemplateModule
        ]
    })
], DxFilterBuilderModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxFilterBuilderComponent, DxFilterBuilderModule };
//# sourceMappingURL=devextreme-angular-ui-filter-builder.js.map

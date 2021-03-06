import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxForm from 'devextreme/ui/form';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxoColCountByScreenModule, DxiItemModule, DxoLabelModule, DxiValidationRuleModule, DxoTabPanelOptionsModule, DxiTabModule, DxoButtonOptionsModule } from 'devextreme-angular/ui/nested';

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
/**
 * The Form widget represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.
 */
let DxFormComponent = class DxFormComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'editorEnterKey', emit: 'onEditorEnterKey' },
            { subscribe: 'fieldDataChanged', emit: 'onFieldDataChanged' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'alignItemLabelsChange' },
            { emit: 'alignItemLabelsInAllGroupsChange' },
            { emit: 'colCountChange' },
            { emit: 'colCountByScreenChange' },
            { emit: 'customizeItemChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'formDataChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'labelLocationChange' },
            { emit: 'minColWidthChange' },
            { emit: 'optionalMarkChange' },
            { emit: 'readOnlyChange' },
            { emit: 'requiredMarkChange' },
            { emit: 'requiredMessageChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'showColonAfterLabelChange' },
            { emit: 'showOptionalMarkChange' },
            { emit: 'showRequiredMarkChange' },
            { emit: 'showValidationSummaryChange' },
            { emit: 'tabIndexChange' },
            { emit: 'validationGroupChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
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
     * Specifies whether or not all root item labels are aligned.
     */
    get alignItemLabels() {
        return this._getOption('alignItemLabels');
    }
    set alignItemLabels(value) {
        this._setOption('alignItemLabels', value);
    }
    /**
     * Specifies whether or not item labels in all groups are aligned.
     */
    get alignItemLabelsInAllGroups() {
        return this._getOption('alignItemLabelsInAllGroups');
    }
    set alignItemLabelsInAllGroups(value) {
        this._setOption('alignItemLabelsInAllGroups', value);
    }
    /**
     * The count of columns in the form layout.
     */
    get colCount() {
        return this._getOption('colCount');
    }
    set colCount(value) {
        this._setOption('colCount', value);
    }
    /**
     * Specifies dependency between the screen factor and the count of columns in the form layout.
     */
    get colCountByScreen() {
        return this._getOption('colCountByScreen');
    }
    set colCountByScreen(value) {
        this._setOption('colCountByScreen', value);
    }
    /**
     * Specifies a function that customizes a form item after it has been created.
     */
    get customizeItem() {
        return this._getOption('customizeItem');
    }
    set customizeItem(value) {
        this._setOption('customizeItem', value);
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
     * Provides the Form's data. Gets updated every time form fields change.
     */
    get formData() {
        return this._getOption('formData');
    }
    set formData(value) {
        this._setOption('formData', value);
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
     * Holds an array of form items.
     */
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    /**
     * Specifies the location of a label against the editor.
     */
    get labelLocation() {
        return this._getOption('labelLocation');
    }
    set labelLocation(value) {
        this._setOption('labelLocation', value);
    }
    /**
     * The minimum column width used for calculating column count in the form layout.
     */
    get minColWidth() {
        return this._getOption('minColWidth');
    }
    set minColWidth(value) {
        this._setOption('minColWidth', value);
    }
    /**
     * The text displayed for optional fields.
     */
    get optionalMark() {
        return this._getOption('optionalMark');
    }
    set optionalMark(value) {
        this._setOption('optionalMark', value);
    }
    /**
     * Specifies whether all editors on the form are read-only. Applies only to non-templated items.
     */
    get readOnly() {
        return this._getOption('readOnly');
    }
    set readOnly(value) {
        this._setOption('readOnly', value);
    }
    /**
     * The text displayed for required fields.
     */
    get requiredMark() {
        return this._getOption('requiredMark');
    }
    set requiredMark(value) {
        this._setOption('requiredMark', value);
    }
    /**
     * Specifies the message that is shown for end-users if a required field value is not specified.
     */
    get requiredMessage() {
        return this._getOption('requiredMessage');
    }
    set requiredMessage(value) {
        this._setOption('requiredMessage', value);
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
     * Specifies a function that categorizes screens by their width.
     */
    get screenByWidth() {
        return this._getOption('screenByWidth');
    }
    set screenByWidth(value) {
        this._setOption('screenByWidth', value);
    }
    /**
     * A Boolean value specifying whether to enable or disable form scrolling.
     */
    get scrollingEnabled() {
        return this._getOption('scrollingEnabled');
    }
    set scrollingEnabled(value) {
        this._setOption('scrollingEnabled', value);
    }
    /**
     * Specifies whether or not a colon is displayed at the end of form labels.
     */
    get showColonAfterLabel() {
        return this._getOption('showColonAfterLabel');
    }
    set showColonAfterLabel(value) {
        this._setOption('showColonAfterLabel', value);
    }
    /**
     * Specifies whether or not the optional mark is displayed for optional fields.
     */
    get showOptionalMark() {
        return this._getOption('showOptionalMark');
    }
    set showOptionalMark(value) {
        this._setOption('showOptionalMark', value);
    }
    /**
     * Specifies whether or not the required mark is displayed for required fields.
     */
    get showRequiredMark() {
        return this._getOption('showRequiredMark');
    }
    set showRequiredMark(value) {
        this._setOption('showRequiredMark', value);
    }
    /**
     * Specifies whether or not the total validation summary is displayed on the form.
     */
    get showValidationSummary() {
        return this._getOption('showValidationSummary');
    }
    set showValidationSummary(value) {
        this._setOption('showValidationSummary', value);
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
     * Gives a name to the internal validation group.
     */
    get validationGroup() {
        return this._getOption('validationGroup');
    }
    set validationGroup(value) {
        this._setOption('validationGroup', value);
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
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    _createInstance(element, options) {
        return new DxForm(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('items', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
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
};
DxFormComponent.ctorParameters = () => [
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
    Input()
], DxFormComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxFormComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxFormComponent.prototype, "alignItemLabels", null);
__decorate([
    Input()
], DxFormComponent.prototype, "alignItemLabelsInAllGroups", null);
__decorate([
    Input()
], DxFormComponent.prototype, "colCount", null);
__decorate([
    Input()
], DxFormComponent.prototype, "colCountByScreen", null);
__decorate([
    Input()
], DxFormComponent.prototype, "customizeItem", null);
__decorate([
    Input()
], DxFormComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxFormComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxFormComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxFormComponent.prototype, "formData", null);
__decorate([
    Input()
], DxFormComponent.prototype, "height", null);
__decorate([
    Input()
], DxFormComponent.prototype, "hint", null);
__decorate([
    Input()
], DxFormComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxFormComponent.prototype, "items", null);
__decorate([
    Input()
], DxFormComponent.prototype, "labelLocation", null);
__decorate([
    Input()
], DxFormComponent.prototype, "minColWidth", null);
__decorate([
    Input()
], DxFormComponent.prototype, "optionalMark", null);
__decorate([
    Input()
], DxFormComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxFormComponent.prototype, "requiredMark", null);
__decorate([
    Input()
], DxFormComponent.prototype, "requiredMessage", null);
__decorate([
    Input()
], DxFormComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxFormComponent.prototype, "screenByWidth", null);
__decorate([
    Input()
], DxFormComponent.prototype, "scrollingEnabled", null);
__decorate([
    Input()
], DxFormComponent.prototype, "showColonAfterLabel", null);
__decorate([
    Input()
], DxFormComponent.prototype, "showOptionalMark", null);
__decorate([
    Input()
], DxFormComponent.prototype, "showRequiredMark", null);
__decorate([
    Input()
], DxFormComponent.prototype, "showValidationSummary", null);
__decorate([
    Input()
], DxFormComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxFormComponent.prototype, "validationGroup", null);
__decorate([
    Input()
], DxFormComponent.prototype, "visible", null);
__decorate([
    Input()
], DxFormComponent.prototype, "width", null);
__decorate([
    Output()
], DxFormComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "onEditorEnterKey", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "onFieldDataChanged", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "alignItemLabelsChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "alignItemLabelsInAllGroupsChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "colCountChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "colCountByScreenChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "customizeItemChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "formDataChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "labelLocationChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "minColWidthChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "optionalMarkChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "requiredMarkChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "requiredMessageChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "screenByWidthChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "scrollingEnabledChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "showColonAfterLabelChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "showOptionalMarkChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "showRequiredMarkChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "showValidationSummaryChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "validationGroupChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxFormComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxFormComponent.prototype, "itemsChildren", null);
DxFormComponent = __decorate([
    Component({
        selector: 'dx-form',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxFormComponent);
let DxFormModule = class DxFormModule {
};
DxFormModule = __decorate([
    NgModule({
        imports: [
            DxoColCountByScreenModule,
            DxiItemModule,
            DxoLabelModule,
            DxiValidationRuleModule,
            DxoTabPanelOptionsModule,
            DxiTabModule,
            DxoButtonOptionsModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxFormComponent
        ],
        exports: [
            DxFormComponent,
            DxoColCountByScreenModule,
            DxiItemModule,
            DxoLabelModule,
            DxiValidationRuleModule,
            DxoTabPanelOptionsModule,
            DxiTabModule,
            DxoButtonOptionsModule,
            DxTemplateModule
        ]
    })
], DxFormModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxFormComponent, DxFormModule };
//# sourceMappingURL=devextreme-angular-ui-form.js.map

import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxPivotGridFieldChooser from 'devextreme/ui/pivot_grid_field_chooser';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoHeaderFilterModule, DxoTextsModule } from 'devextreme-angular/ui/nested';

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
 * A complementary widget for the PivotGrid that allows you to manage data displayed in the PivotGrid. The field chooser is already integrated in the PivotGrid and can be invoked using the context menu. If you need to continuously display the field chooser near the PivotGrid widget, use the PivotGridFieldChooser widget.
 */
let DxPivotGridFieldChooserComponent = class DxPivotGridFieldChooserComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowSearchChange' },
            { emit: 'applyChangesModeChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'headerFilterChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'layoutChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'stateChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textsChange' },
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
     * Specifies whether the field chooser allows searching in the "All Fields" section.
     */
    get allowSearch() {
        return this._getOption('allowSearch');
    }
    set allowSearch(value) {
        this._setOption('allowSearch', value);
    }
    /**
     * Specifies when to apply changes made in the widget to the PivotGrid.
     */
    get applyChangesMode() {
        return this._getOption('applyChangesMode');
    }
    set applyChangesMode(value) {
        this._setOption('applyChangesMode', value);
    }
    /**
     * The data source of a PivotGrid widget.
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
     * Configures the header filter feature.
     */
    get headerFilter() {
        return this._getOption('headerFilter');
    }
    set headerFilter(value) {
        this._setOption('headerFilter', value);
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
     * Specifies the field chooser layout.
     */
    get layout() {
        return this._getOption('layout');
    }
    set layout(value) {
        this._setOption('layout', value);
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
     * Specifies a delay in milliseconds between when a user finishes typing in the field chooser's search panel, and when the search is executed.
     */
    get searchTimeout() {
        return this._getOption('searchTimeout');
    }
    set searchTimeout(value) {
        this._setOption('searchTimeout', value);
    }
    /**
     * The widget's state.
     */
    get state() {
        return this._getOption('state');
    }
    set state(value) {
        this._setOption('state', value);
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
     * Strings that can be changed or localized in the PivotGridFieldChooser widget.
     */
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
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
    _createInstance(element, options) {
        return new DxPivotGridFieldChooser(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
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
DxPivotGridFieldChooserComponent.ctorParameters = () => [
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
], DxPivotGridFieldChooserComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "allowSearch", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "applyChangesMode", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "headerFilter", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "height", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "hint", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "layout", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "searchTimeout", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "state", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "texts", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "visible", null);
__decorate([
    Input()
], DxPivotGridFieldChooserComponent.prototype, "width", null);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "onContextMenuPreparing", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "allowSearchChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "applyChangesModeChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "headerFilterChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "layoutChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "searchTimeoutChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "stateChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "textsChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxPivotGridFieldChooserComponent.prototype, "widthChange", void 0);
DxPivotGridFieldChooserComponent = __decorate([
    Component({
        selector: 'dx-pivot-grid-field-chooser',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxPivotGridFieldChooserComponent);
let DxPivotGridFieldChooserModule = class DxPivotGridFieldChooserModule {
};
DxPivotGridFieldChooserModule = __decorate([
    NgModule({
        imports: [
            DxoHeaderFilterModule,
            DxoTextsModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxPivotGridFieldChooserComponent
        ],
        exports: [
            DxPivotGridFieldChooserComponent,
            DxoHeaderFilterModule,
            DxoTextsModule,
            DxTemplateModule
        ]
    })
], DxPivotGridFieldChooserModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxPivotGridFieldChooserComponent, DxPivotGridFieldChooserModule };
//# sourceMappingURL=devextreme-angular-ui-pivot-grid-field-chooser.js.map

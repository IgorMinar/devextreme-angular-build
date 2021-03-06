import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxTreeView from 'devextreme/ui/tree_view';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxiItemModule, DxoSearchEditorOptionsModule, DxiButtonModule, DxoOptionsModule } from 'devextreme-angular/ui/nested';

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
 * The TreeView widget is a tree-like representation of textual data.
 */
let DxTreeViewComponent = class DxTreeViewComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemCollapsed', emit: 'onItemCollapsed' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemExpanded', emit: 'onItemExpanded' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'itemSelectionChanged', emit: 'onItemSelectionChanged' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'createChildrenChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dataStructureChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'expandAllEnabledChange' },
            { emit: 'expandedExprChange' },
            { emit: 'expandEventChange' },
            { emit: 'expandNodesRecursiveChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hasItemsExprChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemsExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'noDataTextChange' },
            { emit: 'parentIdExprChange' },
            { emit: 'rootValueChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollDirectionChange' },
            { emit: 'searchEditorOptionsChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'searchValueChange' },
            { emit: 'selectAllTextChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectedExprChange' },
            { emit: 'selectionModeChange' },
            { emit: 'selectNodesRecursiveChange' },
            { emit: 'showCheckBoxesModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'virtualModeEnabledChange' },
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
     * Specifies whether or not to animate item collapsing and expanding.
     */
    get animationEnabled() {
        return this._getOption('animationEnabled');
    }
    set animationEnabled(value) {
        this._setOption('animationEnabled', value);
    }
    /**
     * Allows you to load nodes on demand.
     */
    get createChildren() {
        return this._getOption('createChildren');
    }
    set createChildren(value) {
        this._setOption('createChildren', value);
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
     * Notifies the widget of the used data structure.
     */
    get dataStructure() {
        return this._getOption('dataStructure');
    }
    set dataStructure(value) {
        this._setOption('dataStructure', value);
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
     * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is disabled.
     */
    get disabledExpr() {
        return this._getOption('disabledExpr');
    }
    set disabledExpr(value) {
        this._setOption('disabledExpr', value);
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
     * Specifies whether or not a user can expand all tree view items by the "*" hot key.
     */
    get expandAllEnabled() {
        return this._getOption('expandAllEnabled');
    }
    set expandAllEnabled(value) {
        this._setOption('expandAllEnabled', value);
    }
    /**
     * Specifies which data source field specifies whether an item is expanded.
     */
    get expandedExpr() {
        return this._getOption('expandedExpr');
    }
    set expandedExpr(value) {
        this._setOption('expandedExpr', value);
    }
    /**
     * Specifies the event on which to expand/collapse a node.
     */
    get expandEvent() {
        return this._getOption('expandEvent');
    }
    set expandEvent(value) {
        this._setOption('expandEvent', value);
    }
    /**
     * Specifies whether or not all parent nodes of an initially expanded node are displayed expanded.
     */
    get expandNodesRecursive() {
        return this._getOption('expandNodesRecursive');
    }
    set expandNodesRecursive(value) {
        this._setOption('expandNodesRecursive', value);
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
     * Specifies the name of the data source item field whose value defines whether or not the corresponding node includes child nodes.
     */
    get hasItemsExpr() {
        return this._getOption('hasItemsExpr');
    }
    set hasItemsExpr(value) {
        this._setOption('hasItemsExpr', value);
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
     * The time period in milliseconds before the onItemHold event is raised.
     */
    get itemHoldTimeout() {
        return this._getOption('itemHoldTimeout');
    }
    set itemHoldTimeout(value) {
        this._setOption('itemHoldTimeout', value);
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
     * Specifies which data field contains nested items.
     */
    get itemsExpr() {
        return this._getOption('itemsExpr');
    }
    set itemsExpr(value) {
        this._setOption('itemsExpr', value);
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
     * Specifies which data field provides keys for TreeView items.
     */
    get keyExpr() {
        return this._getOption('keyExpr');
    }
    set keyExpr(value) {
        this._setOption('keyExpr', value);
    }
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    get noDataText() {
        return this._getOption('noDataText');
    }
    set noDataText(value) {
        this._setOption('noDataText', value);
    }
    /**
     * Specifies the name of the data source item field for holding the parent key of the corresponding node.
     */
    get parentIdExpr() {
        return this._getOption('parentIdExpr');
    }
    set parentIdExpr(value) {
        this._setOption('parentIdExpr', value);
    }
    /**
     * Specifies the parent ID value of the root item.
     */
    get rootValue() {
        return this._getOption('rootValue');
    }
    set rootValue(value) {
        this._setOption('rootValue', value);
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
     * A string value specifying available scrolling directions.
     */
    get scrollDirection() {
        return this._getOption('scrollDirection');
    }
    set scrollDirection(value) {
        this._setOption('scrollDirection', value);
    }
    /**
     * Configures the search panel.
     */
    get searchEditorOptions() {
        return this._getOption('searchEditorOptions');
    }
    set searchEditorOptions(value) {
        this._setOption('searchEditorOptions', value);
    }
    /**
     * Specifies whether the search panel is visible.
     */
    get searchEnabled() {
        return this._getOption('searchEnabled');
    }
    set searchEnabled(value) {
        this._setOption('searchEnabled', value);
    }
    /**
     * Specifies a data object's field name or an expression whose value is compared to the search string.
     */
    get searchExpr() {
        return this._getOption('searchExpr');
    }
    set searchExpr(value) {
        this._setOption('searchExpr', value);
    }
    /**
     * Specifies a comparison operation used to search widget items.
     */
    get searchMode() {
        return this._getOption('searchMode');
    }
    set searchMode(value) {
        this._setOption('searchMode', value);
    }
    /**
     * Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
     */
    get searchTimeout() {
        return this._getOption('searchTimeout');
    }
    set searchTimeout(value) {
        this._setOption('searchTimeout', value);
    }
    /**
     * Specifies the current search string.
     */
    get searchValue() {
        return this._getOption('searchValue');
    }
    set searchValue(value) {
        this._setOption('searchValue', value);
    }
    /**
     * Specifies the text displayed at the "Select All" check box.
     */
    get selectAllText() {
        return this._getOption('selectAllText');
    }
    set selectAllText(value) {
        this._setOption('selectAllText', value);
    }
    /**
     * Specifies whether or not an item becomes selected if a user clicks it.
     */
    get selectByClick() {
        return this._getOption('selectByClick');
    }
    set selectByClick(value) {
        this._setOption('selectByClick', value);
    }
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
     */
    get selectedExpr() {
        return this._getOption('selectedExpr');
    }
    set selectedExpr(value) {
        this._setOption('selectedExpr', value);
    }
    /**
     * Specifies item selection mode.
     */
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
    }
    /**
     * Specifies whether or not to select nodes recursively.
     */
    get selectNodesRecursive() {
        return this._getOption('selectNodesRecursive');
    }
    set selectNodesRecursive(value) {
        this._setOption('selectNodesRecursive', value);
    }
    /**
     * Specifies the current check boxes display mode.
     */
    get showCheckBoxesMode() {
        return this._getOption('showCheckBoxesMode');
    }
    set showCheckBoxesMode(value) {
        this._setOption('showCheckBoxesMode', value);
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
     * Enables the virtual mode in which nodes are loaded on demand. Use it to enhance the performance on large datasets.
     */
    get virtualModeEnabled() {
        return this._getOption('virtualModeEnabled');
    }
    set virtualModeEnabled(value) {
        this._setOption('virtualModeEnabled', value);
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
        return new DxTreeView(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
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
DxTreeViewComponent.ctorParameters = () => [
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
], DxTreeViewComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "animationEnabled", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "createChildren", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "dataStructure", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "disabledExpr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "expandAllEnabled", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "expandedExpr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "expandEvent", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "expandNodesRecursive", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "hasItemsExpr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "height", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "hint", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "items", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "itemsExpr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "keyExpr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "parentIdExpr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "rootValue", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "scrollDirection", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "searchEditorOptions", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "searchEnabled", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "searchExpr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "searchMode", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "searchTimeout", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "searchValue", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "selectAllText", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "selectByClick", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "selectedExpr", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "selectNodesRecursive", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "showCheckBoxesMode", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "virtualModeEnabled", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "visible", null);
__decorate([
    Input()
], DxTreeViewComponent.prototype, "width", null);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onItemCollapsed", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onItemExpanded", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onItemSelectionChanged", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onSelectAllValueChanged", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "animationEnabledChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "createChildrenChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "dataStructureChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "disabledExprChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "displayExprChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "expandAllEnabledChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "expandedExprChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "expandEventChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "expandNodesRecursiveChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "hasItemsExprChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "itemsExprChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "keyExprChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "parentIdExprChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "rootValueChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "scrollDirectionChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "searchEditorOptionsChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "searchEnabledChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "searchExprChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "searchModeChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "searchTimeoutChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "searchValueChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "selectAllTextChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "selectByClickChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "selectedExprChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "selectionModeChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "selectNodesRecursiveChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "showCheckBoxesModeChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "virtualModeEnabledChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxTreeViewComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxTreeViewComponent.prototype, "itemsChildren", null);
DxTreeViewComponent = __decorate([
    Component({
        selector: 'dx-tree-view',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxTreeViewComponent);
let DxTreeViewModule = class DxTreeViewModule {
};
DxTreeViewModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxoSearchEditorOptionsModule,
            DxiButtonModule,
            DxoOptionsModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxTreeViewComponent
        ],
        exports: [
            DxTreeViewComponent,
            DxiItemModule,
            DxoSearchEditorOptionsModule,
            DxiButtonModule,
            DxoOptionsModule,
            DxTemplateModule
        ]
    })
], DxTreeViewModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxTreeViewComponent, DxTreeViewModule };
//# sourceMappingURL=devextreme-angular-ui-tree-view.js.map

import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxTabPanel from 'devextreme/ui/tab_panel';
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
/**
 * The TabPanel is a widget consisting of the Tabs and MultiView widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.
 */
let DxTabPanelComponent = class DxTabPanelComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'titleClick', emit: 'onTitleClick' },
            { subscribe: 'titleHold', emit: 'onTitleHold' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemTitleTemplateChange' },
            { emit: 'loopChange' },
            { emit: 'noDataTextChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showNavButtonsChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'tabIndexChange' },
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
     * Specifies whether or not to animate the displayed item change.
     */
    get animationEnabled() {
        return this._getOption('animationEnabled');
    }
    set animationEnabled(value) {
        this._setOption('animationEnabled', value);
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
     * Specifies whether to render the view's content when it is displayed. If false, the content is rendered immediately.
     */
    get deferRendering() {
        return this._getOption('deferRendering');
    }
    set deferRendering(value) {
        this._setOption('deferRendering', value);
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
     * Specifies a custom template for items.
     */
    get itemTemplate() {
        return this._getOption('itemTemplate');
    }
    set itemTemplate(value) {
        this._setOption('itemTemplate', value);
    }
    /**
     * Specifies a custom template for item titles.
     */
    get itemTitleTemplate() {
        return this._getOption('itemTitleTemplate');
    }
    set itemTitleTemplate(value) {
        this._setOption('itemTitleTemplate', value);
    }
    /**
     * A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped.
     */
    get loop() {
        return this._getOption('loop');
    }
    set loop(value) {
        this._setOption('loop', value);
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
     * Specifies whether to repaint only those elements whose data changed.
     */
    get repaintChangesOnly() {
        return this._getOption('repaintChangesOnly');
    }
    set repaintChangesOnly(value) {
        this._setOption('repaintChangesOnly', value);
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
     * A Boolean value specifying if tabs in the title are scrolled by content.
     */
    get scrollByContent() {
        return this._getOption('scrollByContent');
    }
    set scrollByContent(value) {
        this._setOption('scrollByContent', value);
    }
    /**
     * A Boolean indicating whether or not to add scrolling support for tabs in the title.
     */
    get scrollingEnabled() {
        return this._getOption('scrollingEnabled');
    }
    set scrollingEnabled(value) {
        this._setOption('scrollingEnabled', value);
    }
    /**
     * The index of the currently displayed item.
     */
    get selectedIndex() {
        return this._getOption('selectedIndex');
    }
    set selectedIndex(value) {
        this._setOption('selectedIndex', value);
    }
    /**
     * The selected item object.
     */
    get selectedItem() {
        return this._getOption('selectedItem');
    }
    set selectedItem(value) {
        this._setOption('selectedItem', value);
    }
    /**
     * Specifies whether navigation buttons should be available when tabs exceed the widget's width.
     */
    get showNavButtons() {
        return this._getOption('showNavButtons');
    }
    set showNavButtons(value) {
        this._setOption('showNavButtons', value);
    }
    /**
     * A Boolean value specifying whether or not to allow users to change the selected index by swiping.
     */
    get swipeEnabled() {
        return this._getOption('swipeEnabled');
    }
    set swipeEnabled(value) {
        this._setOption('swipeEnabled', value);
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
        return new DxTabPanel(element, options);
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
};
DxTabPanelComponent.ctorParameters = () => [
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
], DxTabPanelComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "animationEnabled", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "height", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "hint", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "items", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "itemTitleTemplate", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "loop", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "repaintChangesOnly", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "scrollByContent", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "scrollingEnabled", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "showNavButtons", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "swipeEnabled", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "visible", null);
__decorate([
    Input()
], DxTabPanelComponent.prototype, "width", null);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onTitleClick", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onTitleHold", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "onTitleRendered", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "animationEnabledChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "itemTitleTemplateChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "loopChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "repaintChangesOnlyChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "scrollByContentChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "scrollingEnabledChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "selectedIndexChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "showNavButtonsChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "swipeEnabledChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxTabPanelComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxTabPanelComponent.prototype, "itemsChildren", null);
DxTabPanelComponent = __decorate([
    Component({
        selector: 'dx-tab-panel',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxTabPanelComponent);
let DxTabPanelModule = class DxTabPanelModule {
};
DxTabPanelModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxTabPanelComponent
        ],
        exports: [
            DxTabPanelComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxTabPanelModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxTabPanelComponent, DxTabPanelModule };
//# sourceMappingURL=devextreme-angular-ui-tab-panel.js.map

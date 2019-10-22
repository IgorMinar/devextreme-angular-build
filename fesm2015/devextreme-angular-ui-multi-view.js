import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxMultiView from 'devextreme/ui/multi_view';
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
 * The MultiView is a widget that contains several views. An end user navigates through the views by swiping them in the horizontal direction.
 */
let DxMultiViewComponent = class DxMultiViewComponent extends DxComponent {
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
            { emit: 'loopChange' },
            { emit: 'noDataTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
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
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
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
        return new DxMultiView(element, options);
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
DxMultiViewComponent.ctorParameters = () => [
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
], DxMultiViewComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "animationEnabled", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "height", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "hint", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "items", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "loop", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "swipeEnabled", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "visible", null);
__decorate([
    Input()
], DxMultiViewComponent.prototype, "width", null);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "animationEnabledChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "loopChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "selectedIndexChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "swipeEnabledChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxMultiViewComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxMultiViewComponent.prototype, "itemsChildren", null);
DxMultiViewComponent = __decorate([
    Component({
        selector: 'dx-multi-view',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxMultiViewComponent);
let DxMultiViewModule = class DxMultiViewModule {
};
DxMultiViewModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxMultiViewComponent
        ],
        exports: [
            DxMultiViewComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxMultiViewModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxMultiViewComponent, DxMultiViewModule };
//# sourceMappingURL=devextreme-angular-ui-multi-view.js.map

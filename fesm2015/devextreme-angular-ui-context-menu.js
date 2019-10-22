import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxContextMenu from 'devextreme/ui/context_menu';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxoAnimationModule, DxoHideModule, DxoShowModule, DxiItemModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxoShowEventModule, DxoShowSubmenuModeModule, DxoDelayModule } from 'devextreme-angular/ui/nested';

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
 * The ContextMenu widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.
 */
let DxContextMenuComponent = class DxContextMenuComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'positioning', emit: 'onPositioning' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'cssClassChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'itemsExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectedExprChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectionModeChange' },
            { emit: 'showEventChange' },
            { emit: 'showSubmenuModeChange' },
            { emit: 'submenuDirectionChange' },
            { emit: 'tabIndexChange' },
            { emit: 'targetChange' },
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
     * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Configures widget visibility animations. This object contains two fields: show and hide.
     */
    get animation() {
        return this._getOption('animation');
    }
    set animation(value) {
        this._setOption('animation', value);
    }
    /**
     * Specifies whether to close the ContextMenu if a user clicks outside it.
     */
    get closeOnOutsideClick() {
        return this._getOption('closeOnOutsideClick');
    }
    set closeOnOutsideClick(value) {
        this._setOption('closeOnOutsideClick', value);
    }
    /**
     * Specifies the name of the CSS class to be applied to the root menu level and all submenus.
     */
    get cssClass() {
        return this._getOption('cssClass');
    }
    set cssClass(value) {
        this._setOption('cssClass', value);
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
     * Holds an array of menu items.
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
     * An object defining widget positioning options.
     */
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
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
     * The selected item object.
     */
    get selectedItem() {
        return this._getOption('selectedItem');
    }
    set selectedItem(value) {
        this._setOption('selectedItem', value);
    }
    /**
     * Specifies the selection mode supported by the menu.
     */
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
    }
    /**
     * Specifies options for displaying the widget.
     */
    get showEvent() {
        return this._getOption('showEvent');
    }
    set showEvent(value) {
        this._setOption('showEvent', value);
    }
    /**
     * Specifies options of submenu showing and hiding.
     */
    get showSubmenuMode() {
        return this._getOption('showSubmenuMode');
    }
    set showSubmenuMode(value) {
        this._setOption('showSubmenuMode', value);
    }
    /**
     * Specifies the direction at which submenus are displayed.
     */
    get submenuDirection() {
        return this._getOption('submenuDirection');
    }
    set submenuDirection(value) {
        this._setOption('submenuDirection', value);
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
     * The target element associated with the context menu.
     */
    get target() {
        return this._getOption('target');
    }
    set target(value) {
        this._setOption('target', value);
    }
    /**
     * A Boolean value specifying whether or not the widget is visible.
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
        return new DxContextMenu(element, options);
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
DxContextMenuComponent.ctorParameters = () => [
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
], DxContextMenuComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "animation", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "closeOnOutsideClick", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "cssClass", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "disabledExpr", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "height", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "hint", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "items", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "itemsExpr", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "position", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "selectByClick", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "selectedExpr", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "showEvent", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "showSubmenuMode", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "submenuDirection", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "target", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "visible", null);
__decorate([
    Input()
], DxContextMenuComponent.prototype, "width", null);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onHidden", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onHiding", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onPositioning", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onShowing", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "onShown", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "animationChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "closeOnOutsideClickChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "cssClassChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "disabledExprChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "displayExprChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "itemsExprChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "positionChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "selectByClickChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "selectedExprChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "selectionModeChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "showEventChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "showSubmenuModeChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "submenuDirectionChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "targetChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxContextMenuComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxContextMenuComponent.prototype, "itemsChildren", null);
DxContextMenuComponent = __decorate([
    Component({
        selector: 'dx-context-menu',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxContextMenuComponent);
let DxContextMenuModule = class DxContextMenuModule {
};
DxContextMenuModule = __decorate([
    NgModule({
        imports: [
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxiItemModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxoShowEventModule,
            DxoShowSubmenuModeModule,
            DxoDelayModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxContextMenuComponent
        ],
        exports: [
            DxContextMenuComponent,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxiItemModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxoShowEventModule,
            DxoShowSubmenuModeModule,
            DxoDelayModule,
            DxTemplateModule
        ]
    })
], DxContextMenuModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxContextMenuComponent, DxContextMenuModule };
//# sourceMappingURL=devextreme-angular-ui-context-menu.js.map

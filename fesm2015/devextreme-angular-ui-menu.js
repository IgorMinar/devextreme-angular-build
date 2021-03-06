import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxMenu from 'devextreme/ui/menu';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxoAnimationModule, DxoHideModule, DxoShowModule, DxiItemModule, DxoShowFirstSubmenuModeModule, DxoDelayModule, DxoShowSubmenuModeModule } from 'devextreme-angular/ui/nested';

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
 * The Menu widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
 */
let DxMenuComponent = class DxMenuComponent extends DxComponent {
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
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'submenuHidden', emit: 'onSubmenuHidden' },
            { subscribe: 'submenuHiding', emit: 'onSubmenuHiding' },
            { subscribe: 'submenuShowing', emit: 'onSubmenuShowing' },
            { subscribe: 'submenuShown', emit: 'onSubmenuShown' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'adaptivityEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'cssClassChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hideSubmenuOnMouseLeaveChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'itemsExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'orientationChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectedExprChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectionModeChange' },
            { emit: 'showFirstSubmenuModeChange' },
            { emit: 'showSubmenuModeChange' },
            { emit: 'submenuDirectionChange' },
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
     * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Specifies whether adaptive widget rendering is enabled on small screens. Applies only if the orientation is "horizontal".
     */
    get adaptivityEnabled() {
        return this._getOption('adaptivityEnabled');
    }
    set adaptivityEnabled(value) {
        this._setOption('adaptivityEnabled', value);
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
     * Specifies whether or not the submenu is hidden when the mouse pointer leaves it.
     */
    get hideSubmenuOnMouseLeave() {
        return this._getOption('hideSubmenuOnMouseLeave');
    }
    set hideSubmenuOnMouseLeave(value) {
        this._setOption('hideSubmenuOnMouseLeave', value);
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
     * Specifies whether the menu has horizontal or vertical orientation.
     */
    get orientation() {
        return this._getOption('orientation');
    }
    set orientation(value) {
        this._setOption('orientation', value);
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
     * Specifies options for showing and hiding the first level submenu.
     */
    get showFirstSubmenuMode() {
        return this._getOption('showFirstSubmenuMode');
    }
    set showFirstSubmenuMode(value) {
        this._setOption('showFirstSubmenuMode', value);
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
     * Specifies the direction at which the submenus are displayed.
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
        return new DxMenu(element, options);
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
DxMenuComponent.ctorParameters = () => [
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
], DxMenuComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "adaptivityEnabled", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "animation", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "cssClass", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "disabledExpr", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "height", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "hideSubmenuOnMouseLeave", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "hint", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "items", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "itemsExpr", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "orientation", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "selectByClick", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "selectedExpr", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "showFirstSubmenuMode", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "showSubmenuMode", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "submenuDirection", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "visible", null);
__decorate([
    Input()
], DxMenuComponent.prototype, "width", null);
__decorate([
    Output()
], DxMenuComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onSubmenuHidden", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onSubmenuHiding", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onSubmenuShowing", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "onSubmenuShown", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "adaptivityEnabledChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "animationChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "cssClassChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "disabledExprChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "displayExprChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "hideSubmenuOnMouseLeaveChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "itemsExprChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "orientationChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "selectByClickChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "selectedExprChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "selectionModeChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "showFirstSubmenuModeChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "showSubmenuModeChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "submenuDirectionChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxMenuComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxMenuComponent.prototype, "itemsChildren", null);
DxMenuComponent = __decorate([
    Component({
        selector: 'dx-menu',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxMenuComponent);
let DxMenuModule = class DxMenuModule {
};
DxMenuModule = __decorate([
    NgModule({
        imports: [
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxiItemModule,
            DxoShowFirstSubmenuModeModule,
            DxoDelayModule,
            DxoShowSubmenuModeModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxMenuComponent
        ],
        exports: [
            DxMenuComponent,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxiItemModule,
            DxoShowFirstSubmenuModeModule,
            DxoDelayModule,
            DxoShowSubmenuModeModule,
            DxTemplateModule
        ]
    })
], DxMenuModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxMenuComponent, DxMenuModule };
//# sourceMappingURL=devextreme-angular-ui-menu.js.map

import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxDropDownButton from 'devextreme/ui/drop_down_button';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxoDropDownOptionsModule, DxoAnimationModule, DxoHideModule, DxoShowModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxiToolbarItemModule, DxiItemModule } from 'devextreme-angular/ui/nested';

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
 * The DropDownButton is a button that opens a drop-down menu.
 */
let DxDropDownButtonComponent = class DxDropDownButtonComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'buttonClick', emit: 'onButtonClick' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'dropDownContentTemplateChange' },
            { emit: 'dropDownOptionsChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'iconChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'noDataTextChange' },
            { emit: 'openedChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemKeyChange' },
            { emit: 'showArrowIconChange' },
            { emit: 'splitButtonChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'useSelectModeChange' },
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
     * Provides data for the drop-down menu.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    /**
     * Specifies whether to wait until the drop-down menu is opened the first time to render its content.
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
     * Specifies the data field whose values should be displayed in the drop-down menu.
     */
    get displayExpr() {
        return this._getOption('displayExpr');
    }
    set displayExpr(value) {
        this._setOption('displayExpr', value);
    }
    /**
     * Specifies custom content for the drop-down field.
     */
    get dropDownContentTemplate() {
        return this._getOption('dropDownContentTemplate');
    }
    set dropDownContentTemplate(value) {
        this._setOption('dropDownContentTemplate', value);
    }
    /**
     * Configures the drop-down field.
     */
    get dropDownOptions() {
        return this._getOption('dropDownOptions');
    }
    set dropDownOptions(value) {
        this._setOption('dropDownOptions', value);
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
     * Specifies whether users can use keyboard to focus the widget.
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
     * Specifies whether the widget changes its state when a user hovers the mouse pointer over it.
     */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    /**
     * Specifies the button's icon.
     */
    get icon() {
        return this._getOption('icon');
    }
    set icon(value) {
        this._setOption('icon', value);
    }
    /**
     * Provides drop-down menu items.
     */
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    /**
     * Specifies a custom template for drop-down menu items.
     */
    get itemTemplate() {
        return this._getOption('itemTemplate');
    }
    set itemTemplate(value) {
        this._setOption('itemTemplate', value);
    }
    /**
     * Specifies which data field provides keys used to distinguish between the selected drop-down menu items.
     */
    get keyExpr() {
        return this._getOption('keyExpr');
    }
    set keyExpr(value) {
        this._setOption('keyExpr', value);
    }
    /**
     * Specifies text or HTML markup displayed in the drop-down menu when it does not contain any items.
     */
    get noDataText() {
        return this._getOption('noDataText');
    }
    set noDataText(value) {
        this._setOption('noDataText', value);
    }
    /**
     * Specifies whether the drop-down menu is opened.
     */
    get opened() {
        return this._getOption('opened');
    }
    set opened(value) {
        this._setOption('opened', value);
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
     * Contains the selected item's data. Available when useSelectMode is true.
     */
    get selectedItem() {
        return this._getOption('selectedItem');
    }
    set selectedItem(value) {
        this._setOption('selectedItem', value);
    }
    /**
     * Contains the selected item's key and allows you to specify the initially selected item. Applies when useSelectMode is true.
     */
    get selectedItemKey() {
        return this._getOption('selectedItemKey');
    }
    set selectedItemKey(value) {
        this._setOption('selectedItemKey', value);
    }
    /**
     * Specifies whether the arrow icon should be displayed.
     */
    get showArrowIcon() {
        return this._getOption('showArrowIcon');
    }
    set showArrowIcon(value) {
        this._setOption('showArrowIcon', value);
    }
    /**
     * Specifies whether to split the button in two: one executes an action, the other opens and closes the drop-down menu.
     */
    get splitButton() {
        return this._getOption('splitButton');
    }
    set splitButton(value) {
        this._setOption('splitButton', value);
    }
    /**
     * Specifies how the button is styled.
     */
    get stylingMode() {
        return this._getOption('stylingMode');
    }
    set stylingMode(value) {
        this._setOption('stylingMode', value);
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
     * Specifies the button's text. Applies only if useSelectMode is false.
     */
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    /**
     * Specifies whether the widget stores the selected drop-down menu item.
     */
    get useSelectMode() {
        return this._getOption('useSelectMode');
    }
    set useSelectMode(value) {
        this._setOption('useSelectMode', value);
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
        return new DxDropDownButton(element, options);
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
DxDropDownButtonComponent.ctorParameters = () => [
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
], DxDropDownButtonComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "dropDownContentTemplate", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "dropDownOptions", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "height", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "hint", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "icon", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "items", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "keyExpr", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "opened", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "selectedItemKey", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "showArrowIcon", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "splitButton", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "stylingMode", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "text", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "useSelectMode", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "visible", null);
__decorate([
    Input()
], DxDropDownButtonComponent.prototype, "width", null);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "onButtonClick", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "displayExprChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "dropDownContentTemplateChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "dropDownOptionsChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "iconChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "keyExprChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "openedChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "selectedItemKeyChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "showArrowIconChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "splitButtonChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "useSelectModeChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxDropDownButtonComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxDropDownButtonComponent.prototype, "itemsChildren", null);
DxDropDownButtonComponent = __decorate([
    Component({
        selector: 'dx-drop-down-button',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxDropDownButtonComponent);
let DxDropDownButtonModule = class DxDropDownButtonModule {
};
DxDropDownButtonModule = __decorate([
    NgModule({
        imports: [
            DxoDropDownOptionsModule,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxiToolbarItemModule,
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxDropDownButtonComponent
        ],
        exports: [
            DxDropDownButtonComponent,
            DxoDropDownOptionsModule,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxiToolbarItemModule,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxDropDownButtonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxDropDownButtonComponent, DxDropDownButtonModule };
//# sourceMappingURL=devextreme-angular-ui-drop-down-button.js.map

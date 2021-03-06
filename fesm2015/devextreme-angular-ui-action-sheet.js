import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxActionSheet from 'devextreme/ui/action_sheet';
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
 * The ActionSheet widget is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.
 */
let DxActionSheetComponent = class DxActionSheetComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'cancelClick', emit: 'onCancelClick' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'cancelTextChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showCancelButtonChange' },
            { emit: 'showTitleChange' },
            { emit: 'targetChange' },
            { emit: 'titleChange' },
            { emit: 'usePopoverChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * The text displayed in the button that closes the action sheet.
     */
    get cancelText() {
        return this._getOption('cancelText');
    }
    set cancelText(value) {
        this._setOption('cancelText', value);
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
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
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
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Specifies whether or not to display the Cancel button in action sheet.
     */
    get showCancelButton() {
        return this._getOption('showCancelButton');
    }
    set showCancelButton(value) {
        this._setOption('showCancelButton', value);
    }
    /**
     * A Boolean value specifying whether or not the title of the action sheet is visible.
     */
    get showTitle() {
        return this._getOption('showTitle');
    }
    set showTitle(value) {
        this._setOption('showTitle', value);
    }
    /**
     * Specifies the element the action sheet popover points at. Applies only if usePopover is true.
     */
    get target() {
        return this._getOption('target');
    }
    set target(value) {
        this._setOption('target', value);
    }
    /**
     * The title of the action sheet.
     */
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    /**
     * Specifies whether or not to show the action sheet within a Popover widget.
     */
    get usePopover() {
        return this._getOption('usePopover');
    }
    set usePopover(value) {
        this._setOption('usePopover', value);
    }
    /**
     * A Boolean value specifying whether or not the ActionSheet widget is visible.
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
        return new DxActionSheet(element, options);
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
DxActionSheetComponent.ctorParameters = () => [
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
], DxActionSheetComponent.prototype, "cancelText", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "height", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "hint", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "items", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "showCancelButton", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "showTitle", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "target", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "title", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "usePopover", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "visible", null);
__decorate([
    Input()
], DxActionSheetComponent.prototype, "width", null);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "onCancelClick", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "cancelTextChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "showCancelButtonChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "showTitleChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "targetChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "titleChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "usePopoverChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxActionSheetComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxActionSheetComponent.prototype, "itemsChildren", null);
DxActionSheetComponent = __decorate([
    Component({
        selector: 'dx-action-sheet',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxActionSheetComponent);
let DxActionSheetModule = class DxActionSheetModule {
};
DxActionSheetModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxActionSheetComponent
        ],
        exports: [
            DxActionSheetComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxActionSheetModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxActionSheetComponent, DxActionSheetModule };
//# sourceMappingURL=devextreme-angular-ui-action-sheet.js.map

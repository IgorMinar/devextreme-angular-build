import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxAccordion from 'devextreme/ui/accordion';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
 * The Accordion widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.
 */
var DxAccordionComponent = /** @class */ (function (_super) {
    __extends(DxAccordionComponent, _super);
    function DxAccordionComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'itemTitleClick', emit: 'onItemTitleClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationDurationChange' },
            { emit: 'collapsibleChange' },
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
            { emit: 'keyExprChange' },
            { emit: 'multipleChange' },
            { emit: 'noDataTextChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemKeysChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxAccordionComponent.prototype, "accessKey", {
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "activeStateEnabled", {
        /**
         * Specifies whether or not the widget changes its state when interacting with a user.
         */
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "animationDuration", {
        /**
         * A number specifying the time in milliseconds spent on the animation of the expanding or collapsing of a panel.
         */
        get: function () {
            return this._getOption('animationDuration');
        },
        set: function (value) {
            this._setOption('animationDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "collapsible", {
        /**
         * Specifies whether all items can be collapsed or whether at least one item must always be expanded.
         */
        get: function () {
            return this._getOption('collapsible');
        },
        set: function (value) {
            this._setOption('collapsible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "dataSource", {
        /**
         * Binds the widget to data.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "deferRendering", {
        /**
         * Specifies whether to render the panel's content when it is displayed. If false, the content is rendered immediately.
         */
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "itemHoldTimeout", {
        /**
         * The time period in milliseconds before the onItemHold event is raised.
         */
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "items", {
        /**
         * An array of items displayed by the widget.
         */
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom template for items.
         */
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "itemTitleTemplate", {
        /**
         * Specifies a custom template for item titles.
         */
        get: function () {
            return this._getOption('itemTitleTemplate');
        },
        set: function (value) {
            this._setOption('itemTitleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "keyExpr", {
        /**
         * Specifies which data field provides keys for widget items.
         */
        get: function () {
            return this._getOption('keyExpr');
        },
        set: function (value) {
            this._setOption('keyExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "multiple", {
        /**
         * Specifies whether the widget can expand several items or only a single item at once.
         */
        get: function () {
            return this._getOption('multiple');
        },
        set: function (value) {
            this._setOption('multiple', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "noDataText", {
        /**
         * The text or HTML markup displayed by the widget if the item collection is empty.
         */
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "repaintChangesOnly", {
        /**
         * Specifies whether to repaint only those elements whose data changed.
         */
        get: function () {
            return this._getOption('repaintChangesOnly');
        },
        set: function (value) {
            this._setOption('repaintChangesOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "selectedIndex", {
        /**
         * The index number of the currently selected item.
         */
        get: function () {
            return this._getOption('selectedIndex');
        },
        set: function (value) {
            this._setOption('selectedIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "selectedItem", {
        /**
         * The selected item object.
         */
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "selectedItemKeys", {
        /**
         * Specifies an array of currently selected item keys.
         */
        get: function () {
            return this._getOption('selectedItemKeys');
        },
        set: function (value) {
            this._setOption('selectedItemKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "selectedItems", {
        /**
         * An array of currently selected item objects.
         */
        get: function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxAccordionComponent.prototype._createInstance = function (element, options) {
        return new DxAccordion(element, options);
    };
    DxAccordionComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxAccordionComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('selectedItemKeys', changes);
        this.setupChanges('selectedItems', changes);
    };
    DxAccordionComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxAccordionComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('selectedItemKeys');
        this._idh.doCheck('selectedItems');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxAccordionComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxAccordionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: IterableDifferHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "animationDuration", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "collapsible", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "itemTitleTemplate", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "keyExpr", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "multiple", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "repaintChangesOnly", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "selectedIndex", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "selectedItemKeys", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "selectedItems", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxAccordionComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onItemTitleClick", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "animationDurationChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "collapsibleChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "itemTitleTemplateChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "keyExprChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "multipleChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "repaintChangesOnlyChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "selectedIndexChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "selectedItemKeysChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "selectedItemsChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxAccordionComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxAccordionComponent.prototype, "itemsChildren", null);
    DxAccordionComponent = __decorate([
        Component({
            selector: 'dx-accordion',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxAccordionComponent);
    return DxAccordionComponent;
}(DxComponent));
var DxAccordionModule = /** @class */ (function () {
    function DxAccordionModule() {
    }
    DxAccordionModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxAccordionComponent
            ],
            exports: [
                DxAccordionComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxAccordionModule);
    return DxAccordionModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxAccordionComponent, DxAccordionModule };
//# sourceMappingURL=devextreme-angular-ui-accordion.js.map

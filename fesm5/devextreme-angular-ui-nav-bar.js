import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxNavBar from 'devextreme/ui/nav_bar';
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
 * The NavBar is a widget that navigates the application views.
 */
var DxNavBarComponent = /** @class */ (function (_super) {
    __extends(DxNavBarComponent, _super);
    function DxNavBarComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'noDataTextChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemKeysChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'selectionModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxNavBarComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "disabled", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "height", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "hint", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "items", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "keyExpr", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "noDataText", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "repaintChangesOnly", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "scrollByContent", {
        /**
         * Specifies whether or not an end-user can scroll tabs by swiping.
         */
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNavBarComponent.prototype, "selectedIndex", {
        /**
         * The index of the currently selected widget item.
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
    Object.defineProperty(DxNavBarComponent.prototype, "selectedItem", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "selectedItemKeys", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "selectedItems", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "selectionMode", {
        /**
         * Specifies whether the widget enables an end-user to select only a single item or multiple items.
         */
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNavBarComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "visible", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "width", {
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
    Object.defineProperty(DxNavBarComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxNavBarComponent.prototype._createInstance = function (element, options) {
        return new DxNavBar(element, options);
    };
    DxNavBarComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxNavBarComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('selectedItemKeys', changes);
        this.setupChanges('selectedItems', changes);
    };
    DxNavBarComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxNavBarComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('selectedItemKeys');
        this._idh.doCheck('selectedItems');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxNavBarComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxNavBarComponent.ctorParameters = function () { return [
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
    ], DxNavBarComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "keyExpr", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "repaintChangesOnly", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "scrollByContent", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "selectedIndex", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "selectedItemKeys", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "selectedItems", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxNavBarComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "keyExprChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "repaintChangesOnlyChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "scrollByContentChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "selectedIndexChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "selectedItemKeysChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "selectedItemsChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxNavBarComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxNavBarComponent.prototype, "itemsChildren", null);
    DxNavBarComponent = __decorate([
        Component({
            selector: 'dx-nav-bar',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxNavBarComponent);
    return DxNavBarComponent;
}(DxComponent));
var DxNavBarModule = /** @class */ (function () {
    function DxNavBarModule() {
    }
    DxNavBarModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxNavBarComponent
            ],
            exports: [
                DxNavBarComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxNavBarModule);
    return DxNavBarModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxNavBarComponent, DxNavBarModule };
//# sourceMappingURL=devextreme-angular-ui-nav-bar.js.map

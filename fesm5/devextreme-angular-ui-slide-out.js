import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxSlideOut from 'devextreme/ui/slide_out';
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
 * The SlideOut widget is a classic slide-out menu paired with a view. An end user opens the menu by swiping away the view.
 */
var DxSlideOutComponent = /** @class */ (function (_super) {
    __extends(DxSlideOutComponent, _super);
    function DxSlideOutComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { subscribe: 'menuGroupRendered', emit: 'onMenuGroupRendered' },
            { subscribe: 'menuItemRendered', emit: 'onMenuItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'menuGroupedChange' },
            { emit: 'menuGroupTemplateChange' },
            { emit: 'menuItemTemplateChange' },
            { emit: 'menuPositionChange' },
            { emit: 'menuVisibleChange' },
            { emit: 'noDataTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxSlideOutComponent.prototype, "activeStateEnabled", {
        /**
         * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
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
    Object.defineProperty(DxSlideOutComponent.prototype, "contentTemplate", {
        /**
         * Specifies a custom template for the widget content. Rendered only once - when the widget is created.
         */
        get: function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "disabled", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "height", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "hint", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "items", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "menuGrouped", {
        /**
         * A Boolean value specifying whether or not to display a grouped menu.
         */
        get: function () {
            return this._getOption('menuGrouped');
        },
        set: function (value) {
            this._setOption('menuGrouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "menuGroupTemplate", {
        /**
         * Specifies a custom template for group captions.
         */
        get: function () {
            return this._getOption('menuGroupTemplate');
        },
        set: function (value) {
            this._setOption('menuGroupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "menuItemTemplate", {
        /**
         * Specifies a custom template for menu items.
         */
        get: function () {
            return this._getOption('menuItemTemplate');
        },
        set: function (value) {
            this._setOption('menuItemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "menuPosition", {
        /**
         * Specifies the current menu position.
         */
        get: function () {
            return this._getOption('menuPosition');
        },
        set: function (value) {
            this._setOption('menuPosition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "menuVisible", {
        /**
         * Specifies whether or not the slide-out menu is displayed.
         */
        get: function () {
            return this._getOption('menuVisible');
        },
        set: function (value) {
            this._setOption('menuVisible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "noDataText", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "selectedIndex", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "selectedItem", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "swipeEnabled", {
        /**
         * Indicates whether the menu can be shown/hidden by swiping the widget's main panel.
         */
        get: function () {
            return this._getOption('swipeEnabled');
        },
        set: function (value) {
            this._setOption('swipeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "visible", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "width", {
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
    Object.defineProperty(DxSlideOutComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSlideOutComponent.prototype._createInstance = function (element, options) {
        return new DxSlideOut(element, options);
    };
    DxSlideOutComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSlideOutComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxSlideOutComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxSlideOutComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxSlideOutComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxSlideOutComponent.ctorParameters = function () { return [
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
    ], DxSlideOutComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "contentTemplate", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "menuGrouped", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "menuGroupTemplate", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "menuItemTemplate", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "menuPosition", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "menuVisible", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "selectedIndex", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "swipeEnabled", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxSlideOutComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onMenuGroupRendered", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onMenuItemRendered", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "contentTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "menuGroupedChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "menuGroupTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "menuItemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "menuPositionChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "menuVisibleChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "selectedIndexChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "swipeEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxSlideOutComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxSlideOutComponent.prototype, "itemsChildren", null);
    DxSlideOutComponent = __decorate([
        Component({
            selector: 'dx-slide-out',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxSlideOutComponent);
    return DxSlideOutComponent;
}(DxComponent));
var DxSlideOutModule = /** @class */ (function () {
    function DxSlideOutModule() {
    }
    DxSlideOutModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxSlideOutComponent
            ],
            exports: [
                DxSlideOutComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxSlideOutModule);
    return DxSlideOutModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxSlideOutComponent, DxSlideOutModule };
//# sourceMappingURL=devextreme-angular-ui-slide-out.js.map

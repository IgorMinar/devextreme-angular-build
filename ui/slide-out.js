"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var slide_out_1 = require("devextreme/ui/slide_out");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var item_dxi_1 = require("./nested/item-dxi");
var item_dxi_2 = require("./nested/item-dxi");
/**
 * The SlideOut widget is a classic slide-out menu paired with a view. An end user opens the menu by swiping away the view.
 */
var DxSlideOutComponent = (function (_super) {
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
        get: /**
             * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "contentTemplate", {
        get: /**
             * Specifies a custom template for the widget content. Rendered only once - when the widget is created.
             */
        function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "dataSource", {
        get: /**
             * Binds the widget to data.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "itemHoldTimeout", {
        get: /**
             * The time period in milliseconds before the onItemHold event is raised.
             */
        function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "items", {
        get: /**
             * An array of items displayed by the widget.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "menuGrouped", {
        get: /**
             * A Boolean value specifying whether or not to display a grouped menu.
             */
        function () {
            return this._getOption('menuGrouped');
        },
        set: function (value) {
            this._setOption('menuGrouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "menuGroupTemplate", {
        get: /**
             * Specifies a custom template for group captions.
             */
        function () {
            return this._getOption('menuGroupTemplate');
        },
        set: function (value) {
            this._setOption('menuGroupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "menuItemTemplate", {
        get: /**
             * Specifies a custom template for menu items.
             */
        function () {
            return this._getOption('menuItemTemplate');
        },
        set: function (value) {
            this._setOption('menuItemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "menuPosition", {
        get: /**
             * Specifies the current menu position.
             */
        function () {
            return this._getOption('menuPosition');
        },
        set: function (value) {
            this._setOption('menuPosition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "menuVisible", {
        get: /**
             * Specifies whether or not the slide-out menu is displayed.
             */
        function () {
            return this._getOption('menuVisible');
        },
        set: function (value) {
            this._setOption('menuVisible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "noDataText", {
        get: /**
             * The text or HTML markup displayed by the widget if the item collection is empty.
             */
        function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "selectedIndex", {
        get: /**
             * The index number of the currently selected item.
             */
        function () {
            return this._getOption('selectedIndex');
        },
        set: function (value) {
            this._setOption('selectedIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "selectedItem", {
        get: /**
             * The selected item object.
             */
        function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "swipeEnabled", {
        get: /**
             * Indicates whether the menu can be shown/hidden by swiping the widget's main panel.
             */
        function () {
            return this._getOption('swipeEnabled');
        },
        set: function (value) {
            this._setOption('swipeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSlideOutComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
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
        return new slide_out_1.default(element, options);
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
    DxSlideOutComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-slide-out',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxSlideOutComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxSlideOutComponent.propDecorators = {
        "activeStateEnabled": [{ type: core_1.Input },],
        "contentTemplate": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "itemHoldTimeout": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "itemTemplate": [{ type: core_1.Input },],
        "menuGrouped": [{ type: core_1.Input },],
        "menuGroupTemplate": [{ type: core_1.Input },],
        "menuItemTemplate": [{ type: core_1.Input },],
        "menuPosition": [{ type: core_1.Input },],
        "menuVisible": [{ type: core_1.Input },],
        "noDataText": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "selectedIndex": [{ type: core_1.Input },],
        "selectedItem": [{ type: core_1.Input },],
        "swipeEnabled": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onItemClick": [{ type: core_1.Output },],
        "onItemContextMenu": [{ type: core_1.Output },],
        "onItemHold": [{ type: core_1.Output },],
        "onItemRendered": [{ type: core_1.Output },],
        "onMenuGroupRendered": [{ type: core_1.Output },],
        "onMenuItemRendered": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "contentTemplateChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "itemHoldTimeoutChange": [{ type: core_1.Output },],
        "itemsChange": [{ type: core_1.Output },],
        "itemTemplateChange": [{ type: core_1.Output },],
        "menuGroupedChange": [{ type: core_1.Output },],
        "menuGroupTemplateChange": [{ type: core_1.Output },],
        "menuItemTemplateChange": [{ type: core_1.Output },],
        "menuPositionChange": [{ type: core_1.Output },],
        "menuVisibleChange": [{ type: core_1.Output },],
        "noDataTextChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "selectedIndexChange": [{ type: core_1.Output },],
        "selectedItemChange": [{ type: core_1.Output },],
        "swipeEnabledChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxSlideOutComponent;
}(component_1.DxComponent));
exports.DxSlideOutComponent = DxSlideOutComponent;
var DxSlideOutModule = (function () {
    function DxSlideOutModule() {
    }
    DxSlideOutModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxSlideOutComponent
                    ],
                    exports: [
                        DxSlideOutComponent,
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxSlideOutModule;
}());
exports.DxSlideOutModule = DxSlideOutModule;
//# sourceMappingURL=slide-out.js.map
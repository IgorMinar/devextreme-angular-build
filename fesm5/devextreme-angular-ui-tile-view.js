import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxTileView from 'devextreme/ui/tile_view';
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
 * The TileView widget contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.
 */
var DxTileViewComponent = /** @class */ (function (_super) {
    __extends(DxTileViewComponent, _super);
    function DxTileViewComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'baseItemHeightChange' },
            { emit: 'baseItemWidthChange' },
            { emit: 'dataSourceChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemMarginChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'noDataTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTileViewComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "baseItemHeight", {
        /**
         * Specifies the height of the base tile view item.
         */
        get: function () {
            return this._getOption('baseItemHeight');
        },
        set: function (value) {
            this._setOption('baseItemHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTileViewComponent.prototype, "baseItemWidth", {
        /**
         * Specifies the width of the base tile view item.
         */
        get: function () {
            return this._getOption('baseItemWidth');
        },
        set: function (value) {
            this._setOption('baseItemWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTileViewComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "direction", {
        /**
         * Specifies whether tiles are placed horizontally or vertically.
         */
        get: function () {
            return this._getOption('direction');
        },
        set: function (value) {
            this._setOption('direction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTileViewComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "height", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "hint", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "itemMargin", {
        /**
         * Specifies the distance in pixels between adjacent tiles.
         */
        get: function () {
            return this._getOption('itemMargin');
        },
        set: function (value) {
            this._setOption('itemMargin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTileViewComponent.prototype, "items", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "noDataText", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "showScrollbar", {
        /**
         * A Boolean value specifying whether or not to display a scrollbar.
         */
        get: function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTileViewComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "visible", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "width", {
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
    Object.defineProperty(DxTileViewComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTileViewComponent.prototype._createInstance = function (element, options) {
        return new DxTileView(element, options);
    };
    DxTileViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTileViewComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxTileViewComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTileViewComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxTileViewComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTileViewComponent.ctorParameters = function () { return [
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
    ], DxTileViewComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "baseItemHeight", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "baseItemWidth", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "direction", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "itemMargin", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "showScrollbar", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxTileViewComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "baseItemHeightChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "baseItemWidthChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "directionChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "itemMarginChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "showScrollbarChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxTileViewComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxTileViewComponent.prototype, "itemsChildren", null);
    DxTileViewComponent = __decorate([
        Component({
            selector: 'dx-tile-view',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxTileViewComponent);
    return DxTileViewComponent;
}(DxComponent));
var DxTileViewModule = /** @class */ (function () {
    function DxTileViewModule() {
    }
    DxTileViewModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxTileViewComponent
            ],
            exports: [
                DxTileViewComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxTileViewModule);
    return DxTileViewModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxTileViewComponent, DxTileViewModule };
//# sourceMappingURL=devextreme-angular-ui-tile-view.js.map

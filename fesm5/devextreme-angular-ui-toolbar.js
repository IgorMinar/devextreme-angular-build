import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxToolbar from 'devextreme/ui/toolbar';
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
 * The Toolbar is a widget containing items that usually manage screen content. Those items can be plain text or widgets.
 */
var DxToolbarComponent = /** @class */ (function (_super) {
    __extends(DxToolbarComponent, _super);
    function DxToolbarComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'menuItemTemplateChange' },
            { emit: 'noDataTextChange' },
            { emit: 'renderAsChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxToolbarComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "disabled", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "height", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "hint", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "items", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "menuItemTemplate", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "noDataText", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "renderAs", {
        /**
         * Informs the widget about its location in a view HTML markup.
         */
        get: function () {
            return this._getOption('renderAs');
        },
        set: function (value) {
            this._setOption('renderAs', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToolbarComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "visible", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "width", {
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
    Object.defineProperty(DxToolbarComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxToolbarComponent.prototype._createInstance = function (element, options) {
        return new DxToolbar(element, options);
    };
    DxToolbarComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxToolbarComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxToolbarComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxToolbarComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxToolbarComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxToolbarComponent.ctorParameters = function () { return [
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
    ], DxToolbarComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "menuItemTemplate", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "renderAs", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxToolbarComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "menuItemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "renderAsChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxToolbarComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxToolbarComponent.prototype, "itemsChildren", null);
    DxToolbarComponent = __decorate([
        Component({
            selector: 'dx-toolbar',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxToolbarComponent);
    return DxToolbarComponent;
}(DxComponent));
var DxToolbarModule = /** @class */ (function () {
    function DxToolbarModule() {
    }
    DxToolbarModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxToolbarComponent
            ],
            exports: [
                DxToolbarComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxToolbarModule);
    return DxToolbarModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxToolbarComponent, DxToolbarModule };
//# sourceMappingURL=devextreme-angular-ui-toolbar.js.map

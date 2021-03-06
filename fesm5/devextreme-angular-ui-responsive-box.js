import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxResponsiveBox from 'devextreme/ui/responsive_box';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiColComponent, DxiItemComponent, DxiRowComponent, DxiColModule, DxiItemModule, DxiLocationModule, DxiRowModule } from 'devextreme-angular/ui/nested';

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
 * The ResponsiveBox widget allows you to create an application or a website with a layout adapted to different screen sizes.
 */
var DxResponsiveBoxComponent = /** @class */ (function (_super) {
    __extends(DxResponsiveBoxComponent, _super);
    function DxResponsiveBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { emit: 'colsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'rowsChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'singleColumnScreenChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "cols", {
        /**
         * Specifies the collection of columns for the grid used to position layout elements.
         */
        get: function () {
            return this._getOption('cols');
        },
        set: function (value) {
            this._setOption('cols', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "items", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rows", {
        /**
         * Specifies the collection of rows for the grid used to position layout elements.
         */
        get: function () {
            return this._getOption('rows');
        },
        set: function (value) {
            this._setOption('rows', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "screenByWidth", {
        /**
         * Specifies the function returning the size qualifier depending on the screen's width.
         */
        get: function () {
            return this._getOption('screenByWidth');
        },
        set: function (value) {
            this._setOption('screenByWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "singleColumnScreen", {
        /**
         * Specifies on which screens all layout elements should be arranged in a single column. Accepts a single or several size qualifiers separated by a space.
         */
        get: function () {
            return this._getOption('singleColumnScreen');
        },
        set: function (value) {
            this._setOption('singleColumnScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "width", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "colsChildren", {
        get: function () {
            return this._getOption('cols');
        },
        set: function (value) {
            this.setChildren('cols', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rowsChildren", {
        get: function () {
            return this._getOption('rows');
        },
        set: function (value) {
            this.setChildren('rows', value);
        },
        enumerable: true,
        configurable: true
    });
    DxResponsiveBoxComponent.prototype._createInstance = function (element, options) {
        return new DxResponsiveBox(element, options);
    };
    DxResponsiveBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxResponsiveBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('cols', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('rows', changes);
    };
    DxResponsiveBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxResponsiveBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('cols');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('rows');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxResponsiveBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxResponsiveBoxComponent.ctorParameters = function () { return [
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
    ], DxResponsiveBoxComponent.prototype, "cols", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "rows", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "screenByWidth", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "singleColumnScreen", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxResponsiveBoxComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "colsChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "rowsChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "screenByWidthChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "singleColumnScreenChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxResponsiveBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiColComponent)
    ], DxResponsiveBoxComponent.prototype, "colsChildren", null);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxResponsiveBoxComponent.prototype, "itemsChildren", null);
    __decorate([
        ContentChildren(DxiRowComponent)
    ], DxResponsiveBoxComponent.prototype, "rowsChildren", null);
    DxResponsiveBoxComponent = __decorate([
        Component({
            selector: 'dx-responsive-box',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxResponsiveBoxComponent);
    return DxResponsiveBoxComponent;
}(DxComponent));
var DxResponsiveBoxModule = /** @class */ (function () {
    function DxResponsiveBoxModule() {
    }
    DxResponsiveBoxModule = __decorate([
        NgModule({
            imports: [
                DxiColModule,
                DxiItemModule,
                DxiLocationModule,
                DxiRowModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxResponsiveBoxComponent
            ],
            exports: [
                DxResponsiveBoxComponent,
                DxiColModule,
                DxiItemModule,
                DxiLocationModule,
                DxiRowModule,
                DxTemplateModule
            ]
        })
    ], DxResponsiveBoxModule);
    return DxResponsiveBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxResponsiveBoxComponent, DxResponsiveBoxModule };
//# sourceMappingURL=devextreme-angular-ui-responsive-box.js.map

import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxBox from 'devextreme/ui/box';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxiItemModule, DxoBoxModule } from 'devextreme-angular/ui/nested';

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
 * The Box widget allows you to arrange various elements within it. Separate and adaptive, the Box widget acts as a building block for the layout.
 */
var DxBoxComponent = /** @class */ (function (_super) {
    __extends(DxBoxComponent, _super);
    function DxBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { emit: 'alignChange' },
            { emit: 'crossAlignChange' },
            { emit: 'dataSourceChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxBoxComponent.prototype, "align", {
        /**
         * Specifies how widget items are aligned along the main direction.
         */
        get: function () {
            return this._getOption('align');
        },
        set: function (value) {
            this._setOption('align', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBoxComponent.prototype, "crossAlign", {
        /**
         * Specifies how widget items are aligned cross-wise.
         */
        get: function () {
            return this._getOption('crossAlign');
        },
        set: function (value) {
            this._setOption('crossAlign', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBoxComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxBoxComponent.prototype, "direction", {
        /**
         * Specifies the direction of item positioning in the widget.
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
    Object.defineProperty(DxBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxBoxComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxBoxComponent.prototype, "items", {
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
    Object.defineProperty(DxBoxComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxBoxComponent.prototype, "width", {
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
    Object.defineProperty(DxBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxBoxComponent.prototype._createInstance = function (element, options) {
        return new DxBox(element, options);
    };
    DxBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxBoxComponent.ctorParameters = function () { return [
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
    ], DxBoxComponent.prototype, "align", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "crossAlign", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "direction", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxBoxComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "alignChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "crossAlignChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "directionChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxBoxComponent.prototype, "itemsChildren", null);
    DxBoxComponent = __decorate([
        Component({
            selector: 'dx-box',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxBoxComponent);
    return DxBoxComponent;
}(DxComponent));
var DxBoxModule = /** @class */ (function () {
    function DxBoxModule() {
    }
    DxBoxModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxoBoxModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxBoxComponent
            ],
            exports: [
                DxBoxComponent,
                DxiItemModule,
                DxoBoxModule,
                DxTemplateModule
            ]
        })
    ], DxBoxModule);
    return DxBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxBoxComponent, DxBoxModule };
//# sourceMappingURL=devextreme-angular-ui-box.js.map

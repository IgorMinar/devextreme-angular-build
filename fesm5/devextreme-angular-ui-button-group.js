import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxButtonGroup from 'devextreme/ui/button_group';
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
 * The ButtonGroup is a widget that contains a set of toggle buttons and can be used as a mode switcher.
 */
var DxButtonGroupComponent = /** @class */ (function (_super) {
    __extends(DxButtonGroupComponent, _super);
    function DxButtonGroupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedItemKeysChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'selectionModeChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxButtonGroupComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "disabled", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "height", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "hint", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "items", {
        /**
         * Configures buttons in the group.
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom button template.
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "keyExpr", {
        /**
         * Specifies which data field provides keys used to distinguish between the selected buttons.
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "selectedItemKeys", {
        /**
         * Contains the keys of the selected buttons and allows selecting buttons initially.
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "selectedItems", {
        /**
         * Contains the data objects that correspond to the selected buttons. The data objects are taken from the items array.
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "selectionMode", {
        /**
         * Specifies whether a single or multiple buttons can be in the selected state simultaneously.
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "stylingMode", {
        /**
         * Specifies how buttons in the group are styled.
         */
        get: function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonGroupComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "visible", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "width", {
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
    Object.defineProperty(DxButtonGroupComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxButtonGroupComponent.prototype._createInstance = function (element, options) {
        return new DxButtonGroup(element, options);
    };
    DxButtonGroupComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxButtonGroupComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('items', changes);
        this.setupChanges('selectedItemKeys', changes);
        this.setupChanges('selectedItems', changes);
    };
    DxButtonGroupComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxButtonGroupComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('items');
        this._idh.doCheck('selectedItemKeys');
        this._idh.doCheck('selectedItems');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxButtonGroupComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxButtonGroupComponent.ctorParameters = function () { return [
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
    ], DxButtonGroupComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "keyExpr", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "selectedItemKeys", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "selectedItems", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxButtonGroupComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "keyExprChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "selectedItemKeysChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "selectedItemsChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxButtonGroupComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxButtonGroupComponent.prototype, "itemsChildren", null);
    DxButtonGroupComponent = __decorate([
        Component({
            selector: 'dx-button-group',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxButtonGroupComponent);
    return DxButtonGroupComponent;
}(DxComponent));
var DxButtonGroupModule = /** @class */ (function () {
    function DxButtonGroupModule() {
    }
    DxButtonGroupModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxButtonGroupComponent
            ],
            exports: [
                DxButtonGroupComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxButtonGroupModule);
    return DxButtonGroupModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxButtonGroupComponent, DxButtonGroupModule };
//# sourceMappingURL=devextreme-angular-ui-button-group.js.map

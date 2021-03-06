import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxContextMenu from 'devextreme/ui/context_menu';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxoAnimationModule, DxoHideModule, DxoShowModule, DxiItemModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxoShowEventModule, DxoShowSubmenuModeModule, DxoDelayModule } from 'devextreme-angular/ui/nested';

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
 * The ContextMenu widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.
 */
var DxContextMenuComponent = /** @class */ (function (_super) {
    __extends(DxContextMenuComponent, _super);
    function DxContextMenuComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'positioning', emit: 'onPositioning' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'cssClassChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'itemsExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectedExprChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectionModeChange' },
            { emit: 'showEventChange' },
            { emit: 'showSubmenuModeChange' },
            { emit: 'submenuDirectionChange' },
            { emit: 'tabIndexChange' },
            { emit: 'targetChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxContextMenuComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "animation", {
        /**
         * Configures widget visibility animations. This object contains two fields: show and hide.
         */
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "closeOnOutsideClick", {
        /**
         * Specifies whether to close the ContextMenu if a user clicks outside it.
         */
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "cssClass", {
        /**
         * Specifies the name of the CSS class to be applied to the root menu level and all submenus.
         */
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "disabled", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "disabledExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is disabled.
         */
        get: function () {
            return this._getOption('disabledExpr');
        },
        set: function (value) {
            this._setOption('disabledExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "displayExpr", {
        /**
         * Specifies the data field whose values should be displayed.
         */
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "height", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "hint", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "items", {
        /**
         * Holds an array of menu items.
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
    Object.defineProperty(DxContextMenuComponent.prototype, "itemsExpr", {
        /**
         * Specifies which data field contains nested items.
         */
        get: function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "position", {
        /**
         * An object defining widget positioning options.
         */
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "selectByClick", {
        /**
         * Specifies whether or not an item becomes selected if a user clicks it.
         */
        get: function () {
            return this._getOption('selectByClick');
        },
        set: function (value) {
            this._setOption('selectByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
         */
        get: function () {
            return this._getOption('selectedExpr');
        },
        set: function (value) {
            this._setOption('selectedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedItem", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "selectionMode", {
        /**
         * Specifies the selection mode supported by the menu.
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
    Object.defineProperty(DxContextMenuComponent.prototype, "showEvent", {
        /**
         * Specifies options for displaying the widget.
         */
        get: function () {
            return this._getOption('showEvent');
        },
        set: function (value) {
            this._setOption('showEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "showSubmenuMode", {
        /**
         * Specifies options of submenu showing and hiding.
         */
        get: function () {
            return this._getOption('showSubmenuMode');
        },
        set: function (value) {
            this._setOption('showSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "submenuDirection", {
        /**
         * Specifies the direction at which submenus are displayed.
         */
        get: function () {
            return this._getOption('submenuDirection');
        },
        set: function (value) {
            this._setOption('submenuDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "target", {
        /**
         * The target element associated with the context menu.
         */
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "visible", {
        /**
         * A Boolean value specifying whether or not the widget is visible.
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
    Object.defineProperty(DxContextMenuComponent.prototype, "width", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxContextMenuComponent.prototype._createInstance = function (element, options) {
        return new DxContextMenu(element, options);
    };
    DxContextMenuComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxContextMenuComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxContextMenuComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxContextMenuComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxContextMenuComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxContextMenuComponent.ctorParameters = function () { return [
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
    ], DxContextMenuComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "cssClass", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "disabledExpr", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "displayExpr", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "itemsExpr", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "position", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "selectByClick", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "selectedExpr", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "showEvent", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "showSubmenuMode", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "submenuDirection", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "target", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxContextMenuComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onHidden", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onHiding", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onPositioning", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onShowing", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "onShown", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "cssClassChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "disabledExprChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "displayExprChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "itemsExprChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "positionChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "selectByClickChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "selectedExprChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "showEventChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "showSubmenuModeChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "submenuDirectionChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "targetChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxContextMenuComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxContextMenuComponent.prototype, "itemsChildren", null);
    DxContextMenuComponent = __decorate([
        Component({
            selector: 'dx-context-menu',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxContextMenuComponent);
    return DxContextMenuComponent;
}(DxComponent));
var DxContextMenuModule = /** @class */ (function () {
    function DxContextMenuModule() {
    }
    DxContextMenuModule = __decorate([
        NgModule({
            imports: [
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxiItemModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxoShowEventModule,
                DxoShowSubmenuModeModule,
                DxoDelayModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxContextMenuComponent
            ],
            exports: [
                DxContextMenuComponent,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxiItemModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxoShowEventModule,
                DxoShowSubmenuModeModule,
                DxoDelayModule,
                DxTemplateModule
            ]
        })
    ], DxContextMenuModule);
    return DxContextMenuModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxContextMenuComponent, DxContextMenuModule };
//# sourceMappingURL=devextreme-angular-ui-context-menu.js.map

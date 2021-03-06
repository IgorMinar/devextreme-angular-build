import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxMenu from 'devextreme/ui/menu';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxoAnimationModule, DxoHideModule, DxoShowModule, DxiItemModule, DxoShowFirstSubmenuModeModule, DxoDelayModule, DxoShowSubmenuModeModule } from 'devextreme-angular/ui/nested';

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
 * The Menu widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
 */
var DxMenuComponent = /** @class */ (function (_super) {
    __extends(DxMenuComponent, _super);
    function DxMenuComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'submenuHidden', emit: 'onSubmenuHidden' },
            { subscribe: 'submenuHiding', emit: 'onSubmenuHiding' },
            { subscribe: 'submenuShowing', emit: 'onSubmenuShowing' },
            { subscribe: 'submenuShown', emit: 'onSubmenuShown' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'adaptivityEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'cssClassChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hideSubmenuOnMouseLeaveChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'itemsExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'orientationChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectedExprChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectionModeChange' },
            { emit: 'showFirstSubmenuModeChange' },
            { emit: 'showSubmenuModeChange' },
            { emit: 'submenuDirectionChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxMenuComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxMenuComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "adaptivityEnabled", {
        /**
         * Specifies whether adaptive widget rendering is enabled on small screens. Applies only if the orientation is "horizontal".
         */
        get: function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "animation", {
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
    Object.defineProperty(DxMenuComponent.prototype, "cssClass", {
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
    Object.defineProperty(DxMenuComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxMenuComponent.prototype, "disabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "disabledExpr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "displayExpr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "height", {
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
    Object.defineProperty(DxMenuComponent.prototype, "hideSubmenuOnMouseLeave", {
        /**
         * Specifies whether or not the submenu is hidden when the mouse pointer leaves it.
         */
        get: function () {
            return this._getOption('hideSubmenuOnMouseLeave');
        },
        set: function (value) {
            this._setOption('hideSubmenuOnMouseLeave', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "hint", {
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
    Object.defineProperty(DxMenuComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "items", {
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
    Object.defineProperty(DxMenuComponent.prototype, "itemsExpr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxMenuComponent.prototype, "orientation", {
        /**
         * Specifies whether the menu has horizontal or vertical orientation.
         */
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectByClick", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectedExpr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectedItem", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectionMode", {
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
    Object.defineProperty(DxMenuComponent.prototype, "showFirstSubmenuMode", {
        /**
         * Specifies options for showing and hiding the first level submenu.
         */
        get: function () {
            return this._getOption('showFirstSubmenuMode');
        },
        set: function (value) {
            this._setOption('showFirstSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "showSubmenuMode", {
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
    Object.defineProperty(DxMenuComponent.prototype, "submenuDirection", {
        /**
         * Specifies the direction at which the submenus are displayed.
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
    Object.defineProperty(DxMenuComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxMenuComponent.prototype, "visible", {
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
    Object.defineProperty(DxMenuComponent.prototype, "width", {
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
    Object.defineProperty(DxMenuComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxMenuComponent.prototype._createInstance = function (element, options) {
        return new DxMenu(element, options);
    };
    DxMenuComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxMenuComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxMenuComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxMenuComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxMenuComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxMenuComponent.ctorParameters = function () { return [
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
    ], DxMenuComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "adaptivityEnabled", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "cssClass", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "disabledExpr", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "displayExpr", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "hideSubmenuOnMouseLeave", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "itemsExpr", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "orientation", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "selectByClick", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "selectedExpr", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "showFirstSubmenuMode", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "showSubmenuMode", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "submenuDirection", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxMenuComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onSubmenuHidden", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onSubmenuHiding", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onSubmenuShowing", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "onSubmenuShown", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "adaptivityEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "cssClassChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "disabledExprChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "displayExprChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "hideSubmenuOnMouseLeaveChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "itemsExprChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "orientationChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "selectByClickChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "selectedExprChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "showFirstSubmenuModeChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "showSubmenuModeChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "submenuDirectionChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxMenuComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxMenuComponent.prototype, "itemsChildren", null);
    DxMenuComponent = __decorate([
        Component({
            selector: 'dx-menu',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxMenuComponent);
    return DxMenuComponent;
}(DxComponent));
var DxMenuModule = /** @class */ (function () {
    function DxMenuModule() {
    }
    DxMenuModule = __decorate([
        NgModule({
            imports: [
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxiItemModule,
                DxoShowFirstSubmenuModeModule,
                DxoDelayModule,
                DxoShowSubmenuModeModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxMenuComponent
            ],
            exports: [
                DxMenuComponent,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxiItemModule,
                DxoShowFirstSubmenuModeModule,
                DxoDelayModule,
                DxoShowSubmenuModeModule,
                DxTemplateModule
            ]
        })
    ], DxMenuModule);
    return DxMenuModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxMenuComponent, DxMenuModule };
//# sourceMappingURL=devextreme-angular-ui-menu.js.map

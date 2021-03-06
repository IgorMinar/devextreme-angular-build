import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxDropDownButton from 'devextreme/ui/drop_down_button';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxoDropDownOptionsModule, DxoAnimationModule, DxoHideModule, DxoShowModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxiToolbarItemModule, DxiItemModule } from 'devextreme-angular/ui/nested';

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
 * The DropDownButton is a button that opens a drop-down menu.
 */
var DxDropDownButtonComponent = /** @class */ (function (_super) {
    __extends(DxDropDownButtonComponent, _super);
    function DxDropDownButtonComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'buttonClick', emit: 'onButtonClick' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'dropDownContentTemplateChange' },
            { emit: 'dropDownOptionsChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'iconChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'noDataTextChange' },
            { emit: 'openedChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemKeyChange' },
            { emit: 'showArrowIconChange' },
            { emit: 'splitButtonChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'useSelectModeChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxDropDownButtonComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "dataSource", {
        /**
         * Provides data for the drop-down menu.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "deferRendering", {
        /**
         * Specifies whether to wait until the drop-down menu is opened the first time to render its content.
         */
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "disabled", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "displayExpr", {
        /**
         * Specifies the data field whose values should be displayed in the drop-down menu.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "dropDownContentTemplate", {
        /**
         * Specifies custom content for the drop-down field.
         */
        get: function () {
            return this._getOption('dropDownContentTemplate');
        },
        set: function (value) {
            this._setOption('dropDownContentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "dropDownOptions", {
        /**
         * Configures the drop-down field.
         */
        get: function () {
            return this._getOption('dropDownOptions');
        },
        set: function (value) {
            this._setOption('dropDownOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether users can use keyboard to focus the widget.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "height", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "hint", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user hovers the mouse pointer over it.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "icon", {
        /**
         * Specifies the button's icon.
         */
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "items", {
        /**
         * Provides drop-down menu items.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom template for drop-down menu items.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "keyExpr", {
        /**
         * Specifies which data field provides keys used to distinguish between the selected drop-down menu items.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "noDataText", {
        /**
         * Specifies text or HTML markup displayed in the drop-down menu when it does not contain any items.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "opened", {
        /**
         * Specifies whether the drop-down menu is opened.
         */
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "selectedItem", {
        /**
         * Contains the selected item's data. Available when useSelectMode is true.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "selectedItemKey", {
        /**
         * Contains the selected item's key and allows you to specify the initially selected item. Applies when useSelectMode is true.
         */
        get: function () {
            return this._getOption('selectedItemKey');
        },
        set: function (value) {
            this._setOption('selectedItemKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "showArrowIcon", {
        /**
         * Specifies whether the arrow icon should be displayed.
         */
        get: function () {
            return this._getOption('showArrowIcon');
        },
        set: function (value) {
            this._setOption('showArrowIcon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "splitButton", {
        /**
         * Specifies whether to split the button in two: one executes an action, the other opens and closes the drop-down menu.
         */
        get: function () {
            return this._getOption('splitButton');
        },
        set: function (value) {
            this._setOption('splitButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "stylingMode", {
        /**
         * Specifies how the button is styled.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "text", {
        /**
         * Specifies the button's text. Applies only if useSelectMode is false.
         */
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "useSelectMode", {
        /**
         * Specifies whether the widget stores the selected drop-down menu item.
         */
        get: function () {
            return this._getOption('useSelectMode');
        },
        set: function (value) {
            this._setOption('useSelectMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "visible", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "width", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDropDownButtonComponent.prototype._createInstance = function (element, options) {
        return new DxDropDownButton(element, options);
    };
    DxDropDownButtonComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDropDownButtonComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxDropDownButtonComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxDropDownButtonComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxDropDownButtonComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxDropDownButtonComponent.ctorParameters = function () { return [
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
    ], DxDropDownButtonComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "displayExpr", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "dropDownContentTemplate", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "dropDownOptions", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "icon", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "keyExpr", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "selectedItemKey", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "showArrowIcon", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "splitButton", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "useSelectMode", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxDropDownButtonComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "onButtonClick", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "displayExprChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "dropDownContentTemplateChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "dropDownOptionsChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "iconChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "keyExprChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "openedChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "selectedItemKeyChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "showArrowIconChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "splitButtonChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "useSelectModeChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxDropDownButtonComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxDropDownButtonComponent.prototype, "itemsChildren", null);
    DxDropDownButtonComponent = __decorate([
        Component({
            selector: 'dx-drop-down-button',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxDropDownButtonComponent);
    return DxDropDownButtonComponent;
}(DxComponent));
var DxDropDownButtonModule = /** @class */ (function () {
    function DxDropDownButtonModule() {
    }
    DxDropDownButtonModule = __decorate([
        NgModule({
            imports: [
                DxoDropDownOptionsModule,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxiToolbarItemModule,
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxDropDownButtonComponent
            ],
            exports: [
                DxDropDownButtonComponent,
                DxoDropDownOptionsModule,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxiToolbarItemModule,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxDropDownButtonModule);
    return DxDropDownButtonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxDropDownButtonComponent, DxDropDownButtonModule };
//# sourceMappingURL=devextreme-angular-ui-drop-down-button.js.map

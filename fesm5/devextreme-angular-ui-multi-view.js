import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxMultiView from 'devextreme/ui/multi_view';
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
 * The MultiView is a widget that contains several views. An end user navigates through the views by swiping them in the horizontal direction.
 */
var DxMultiViewComponent = /** @class */ (function (_super) {
    __extends(DxMultiViewComponent, _super);
    function DxMultiViewComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'loopChange' },
            { emit: 'noDataTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxMultiViewComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "animationEnabled", {
        /**
         * Specifies whether or not to animate the displayed item change.
         */
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMultiViewComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "deferRendering", {
        /**
         * Specifies whether to render the view's content when it is displayed. If false, the content is rendered immediately.
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
    Object.defineProperty(DxMultiViewComponent.prototype, "disabled", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "height", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "hint", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "items", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "loop", {
        /**
         * A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped.
         */
        get: function () {
            return this._getOption('loop');
        },
        set: function (value) {
            this._setOption('loop', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMultiViewComponent.prototype, "noDataText", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "selectedIndex", {
        /**
         * The index of the currently displayed item.
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
    Object.defineProperty(DxMultiViewComponent.prototype, "selectedItem", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "swipeEnabled", {
        /**
         * A Boolean value specifying whether or not to allow users to change the selected index by swiping.
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
    Object.defineProperty(DxMultiViewComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "visible", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "width", {
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
    Object.defineProperty(DxMultiViewComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxMultiViewComponent.prototype._createInstance = function (element, options) {
        return new DxMultiView(element, options);
    };
    DxMultiViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxMultiViewComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxMultiViewComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxMultiViewComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxMultiViewComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxMultiViewComponent.ctorParameters = function () { return [
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
    ], DxMultiViewComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "animationEnabled", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "loop", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "selectedIndex", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "swipeEnabled", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxMultiViewComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "animationEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "loopChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "selectedIndexChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "swipeEnabledChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxMultiViewComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxMultiViewComponent.prototype, "itemsChildren", null);
    DxMultiViewComponent = __decorate([
        Component({
            selector: 'dx-multi-view',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxMultiViewComponent);
    return DxMultiViewComponent;
}(DxComponent));
var DxMultiViewModule = /** @class */ (function () {
    function DxMultiViewModule() {
    }
    DxMultiViewModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxMultiViewComponent
            ],
            exports: [
                DxMultiViewComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxMultiViewModule);
    return DxMultiViewModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxMultiViewComponent, DxMultiViewModule };
//# sourceMappingURL=devextreme-angular-ui-multi-view.js.map

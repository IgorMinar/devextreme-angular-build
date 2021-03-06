import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxTabPanel from 'devextreme/ui/tab_panel';
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
 * The TabPanel is a widget consisting of the Tabs and MultiView widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.
 */
var DxTabPanelComponent = /** @class */ (function (_super) {
    __extends(DxTabPanelComponent, _super);
    function DxTabPanelComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { subscribe: 'titleClick', emit: 'onTitleClick' },
            { subscribe: 'titleHold', emit: 'onTitleHold' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
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
            { emit: 'itemTitleTemplateChange' },
            { emit: 'loopChange' },
            { emit: 'noDataTextChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showNavButtonsChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTabPanelComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "animationEnabled", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "deferRendering", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "height", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "hint", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "items", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "itemTitleTemplate", {
        /**
         * Specifies a custom template for item titles.
         */
        get: function () {
            return this._getOption('itemTitleTemplate');
        },
        set: function (value) {
            this._setOption('itemTitleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "loop", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "noDataText", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "repaintChangesOnly", {
        /**
         * Specifies whether to repaint only those elements whose data changed.
         */
        get: function () {
            return this._getOption('repaintChangesOnly');
        },
        set: function (value) {
            this._setOption('repaintChangesOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "scrollByContent", {
        /**
         * A Boolean value specifying if tabs in the title are scrolled by content.
         */
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "scrollingEnabled", {
        /**
         * A Boolean indicating whether or not to add scrolling support for tabs in the title.
         */
        get: function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "selectedIndex", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "selectedItem", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "showNavButtons", {
        /**
         * Specifies whether navigation buttons should be available when tabs exceed the widget's width.
         */
        get: function () {
            return this._getOption('showNavButtons');
        },
        set: function (value) {
            this._setOption('showNavButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "swipeEnabled", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "visible", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "width", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTabPanelComponent.prototype._createInstance = function (element, options) {
        return new DxTabPanel(element, options);
    };
    DxTabPanelComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTabPanelComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxTabPanelComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTabPanelComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxTabPanelComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTabPanelComponent.ctorParameters = function () { return [
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
    ], DxTabPanelComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "animationEnabled", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "itemTitleTemplate", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "loop", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "repaintChangesOnly", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "scrollByContent", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "scrollingEnabled", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "selectedIndex", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "showNavButtons", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "swipeEnabled", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxTabPanelComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onTitleClick", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onTitleHold", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "onTitleRendered", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "animationEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "itemTitleTemplateChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "loopChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "repaintChangesOnlyChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "scrollByContentChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "scrollingEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "selectedIndexChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "showNavButtonsChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "swipeEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxTabPanelComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxTabPanelComponent.prototype, "itemsChildren", null);
    DxTabPanelComponent = __decorate([
        Component({
            selector: 'dx-tab-panel',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxTabPanelComponent);
    return DxTabPanelComponent;
}(DxComponent));
var DxTabPanelModule = /** @class */ (function () {
    function DxTabPanelModule() {
    }
    DxTabPanelModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxTabPanelComponent
            ],
            exports: [
                DxTabPanelComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxTabPanelModule);
    return DxTabPanelModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxTabPanelComponent, DxTabPanelModule };
//# sourceMappingURL=devextreme-angular-ui-tab-panel.js.map

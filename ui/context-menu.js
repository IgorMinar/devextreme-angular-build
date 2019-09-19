var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';

import DxContextMenu from 'devextreme/ui/context_menu';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAnimationModule } from './nested/animation';
import { DxoHideModule } from './nested/hide';
import { DxoShowModule } from './nested/show';
import { DxiItemModule } from './nested/item-dxi';
import { DxoPositionModule } from './nested/position';
import { DxoAtModule } from './nested/at';
import { DxoBoundaryOffsetModule } from './nested/boundary-offset';
import { DxoCollisionModule } from './nested/collision';
import { DxoMyModule } from './nested/my';
import { DxoOffsetModule } from './nested/offset';
import { DxoShowEventModule } from './nested/show-event';
import { DxoShowSubmenuModeModule } from './nested/show-submenu-mode';
import { DxoDelayModule } from './nested/delay';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The ContextMenu widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.
 */
var DxContextMenuComponent = (function (_super) {
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
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "activeStateEnabled", {
        get: /**
             * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "animation", {
        get: /**
             * Configures widget visibility animations. This object contains two fields: show and hide.
             */
        function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "closeOnOutsideClick", {
        get: /**
             * Specifies whether to close the ContextMenu if a user clicks outside it.
             */
        function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "cssClass", {
        get: /**
             * Specifies the name of the CSS class to be applied to the root menu level and all submenus.
             */
        function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "dataSource", {
        get: /**
             * Binds the widget to data.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "disabledExpr", {
        get: /**
             * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is disabled.
             */
        function () {
            return this._getOption('disabledExpr');
        },
        set: function (value) {
            this._setOption('disabledExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "displayExpr", {
        get: /**
             * Specifies the data field whose values should be displayed.
             */
        function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "items", {
        get: /**
             * Holds an array of menu items.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemsExpr", {
        get: /**
             * Specifies which data field contains nested items.
             */
        function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "position", {
        get: /**
             * An object defining widget positioning options.
             */
        function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectByClick", {
        get: /**
             * Specifies whether or not an item becomes selected if a user clicks it.
             */
        function () {
            return this._getOption('selectByClick');
        },
        set: function (value) {
            this._setOption('selectByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedExpr", {
        get: /**
             * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
             */
        function () {
            return this._getOption('selectedExpr');
        },
        set: function (value) {
            this._setOption('selectedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedItem", {
        get: /**
             * The selected item object.
             */
        function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectionMode", {
        get: /**
             * Specifies the selection mode supported by the menu.
             */
        function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "showEvent", {
        get: /**
             * Specifies options for displaying the widget.
             */
        function () {
            return this._getOption('showEvent');
        },
        set: function (value) {
            this._setOption('showEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "showSubmenuMode", {
        get: /**
             * Specifies options of submenu showing and hiding.
             */
        function () {
            return this._getOption('showSubmenuMode');
        },
        set: function (value) {
            this._setOption('showSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "submenuDirection", {
        get: /**
             * Specifies the direction at which submenus are displayed.
             */
        function () {
            return this._getOption('submenuDirection');
        },
        set: function (value) {
            this._setOption('submenuDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "target", {
        get: /**
             * The target element associated with the context menu.
             */
        function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "visible", {
        get: /**
             * A Boolean value specifying whether or not the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
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
    DxContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-context-menu',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxContextMenuComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxContextMenuComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "animation": [{ type: Input },],
        "closeOnOutsideClick": [{ type: Input },],
        "cssClass": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "disabled": [{ type: Input },],
        "disabledExpr": [{ type: Input },],
        "displayExpr": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "items": [{ type: Input },],
        "itemsExpr": [{ type: Input },],
        "itemTemplate": [{ type: Input },],
        "position": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "selectByClick": [{ type: Input },],
        "selectedExpr": [{ type: Input },],
        "selectedItem": [{ type: Input },],
        "selectionMode": [{ type: Input },],
        "showEvent": [{ type: Input },],
        "showSubmenuMode": [{ type: Input },],
        "submenuDirection": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "target": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onHidden": [{ type: Output },],
        "onHiding": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onItemClick": [{ type: Output },],
        "onItemContextMenu": [{ type: Output },],
        "onItemRendered": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onPositioning": [{ type: Output },],
        "onSelectionChanged": [{ type: Output },],
        "onShowing": [{ type: Output },],
        "onShown": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "animationChange": [{ type: Output },],
        "closeOnOutsideClickChange": [{ type: Output },],
        "cssClassChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "disabledExprChange": [{ type: Output },],
        "displayExprChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "itemsChange": [{ type: Output },],
        "itemsExprChange": [{ type: Output },],
        "itemTemplateChange": [{ type: Output },],
        "positionChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "selectByClickChange": [{ type: Output },],
        "selectedExprChange": [{ type: Output },],
        "selectedItemChange": [{ type: Output },],
        "selectionModeChange": [{ type: Output },],
        "showEventChange": [{ type: Output },],
        "showSubmenuModeChange": [{ type: Output },],
        "submenuDirectionChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "targetChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [DxiItemComponent,] },],
    };
    return DxContextMenuComponent;
}(DxComponent));
export { DxContextMenuComponent };
var DxContextMenuModule = (function () {
    function DxContextMenuModule() {
    }
    DxContextMenuModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxContextMenuModule;
}());
export { DxContextMenuModule };
//# sourceMappingURL=context-menu.js.map
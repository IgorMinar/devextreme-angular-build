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
 * Build date: Fri Sep 20 2019
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
import DxMenu from 'devextreme/ui/menu';
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
import { DxoShowFirstSubmenuModeModule } from './nested/show-first-submenu-mode';
import { DxoDelayModule } from './nested/delay';
import { DxoShowSubmenuModeModule } from './nested/show-submenu-mode';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The Menu widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
 */
var DxMenuComponent = (function (_super) {
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
    Object.defineProperty(DxMenuComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "adaptivityEnabled", {
        get: /**
             * Specifies whether adaptive widget rendering is enabled on small screens. Applies only if the orientation is "horizontal".
             */
        function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "animation", {
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
    Object.defineProperty(DxMenuComponent.prototype, "cssClass", {
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
    Object.defineProperty(DxMenuComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxMenuComponent.prototype, "disabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "disabledExpr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "displayExpr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "height", {
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
    Object.defineProperty(DxMenuComponent.prototype, "hideSubmenuOnMouseLeave", {
        get: /**
             * Specifies whether or not the submenu is hidden when the mouse pointer leaves it.
             */
        function () {
            return this._getOption('hideSubmenuOnMouseLeave');
        },
        set: function (value) {
            this._setOption('hideSubmenuOnMouseLeave', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "hint", {
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
    Object.defineProperty(DxMenuComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "items", {
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
    Object.defineProperty(DxMenuComponent.prototype, "itemsExpr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxMenuComponent.prototype, "orientation", {
        get: /**
             * Specifies whether the menu has horizontal or vertical orientation.
             */
        function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectByClick", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectedExpr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectedItem", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectionMode", {
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
    Object.defineProperty(DxMenuComponent.prototype, "showFirstSubmenuMode", {
        get: /**
             * Specifies options for showing and hiding the first level submenu.
             */
        function () {
            return this._getOption('showFirstSubmenuMode');
        },
        set: function (value) {
            this._setOption('showFirstSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "showSubmenuMode", {
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
    Object.defineProperty(DxMenuComponent.prototype, "submenuDirection", {
        get: /**
             * Specifies the direction at which the submenus are displayed.
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
    Object.defineProperty(DxMenuComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxMenuComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
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
    Object.defineProperty(DxMenuComponent.prototype, "width", {
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
    DxMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-menu',
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
    DxMenuComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxMenuComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "adaptivityEnabled": [{ type: Input },],
        "animation": [{ type: Input },],
        "cssClass": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "disabled": [{ type: Input },],
        "disabledExpr": [{ type: Input },],
        "displayExpr": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "height": [{ type: Input },],
        "hideSubmenuOnMouseLeave": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "items": [{ type: Input },],
        "itemsExpr": [{ type: Input },],
        "itemTemplate": [{ type: Input },],
        "orientation": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "selectByClick": [{ type: Input },],
        "selectedExpr": [{ type: Input },],
        "selectedItem": [{ type: Input },],
        "selectionMode": [{ type: Input },],
        "showFirstSubmenuMode": [{ type: Input },],
        "showSubmenuMode": [{ type: Input },],
        "submenuDirection": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onItemClick": [{ type: Output },],
        "onItemContextMenu": [{ type: Output },],
        "onItemRendered": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onSelectionChanged": [{ type: Output },],
        "onSubmenuHidden": [{ type: Output },],
        "onSubmenuHiding": [{ type: Output },],
        "onSubmenuShowing": [{ type: Output },],
        "onSubmenuShown": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "adaptivityEnabledChange": [{ type: Output },],
        "animationChange": [{ type: Output },],
        "cssClassChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "disabledExprChange": [{ type: Output },],
        "displayExprChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hideSubmenuOnMouseLeaveChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "itemsChange": [{ type: Output },],
        "itemsExprChange": [{ type: Output },],
        "itemTemplateChange": [{ type: Output },],
        "orientationChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "selectByClickChange": [{ type: Output },],
        "selectedExprChange": [{ type: Output },],
        "selectedItemChange": [{ type: Output },],
        "selectionModeChange": [{ type: Output },],
        "showFirstSubmenuModeChange": [{ type: Output },],
        "showSubmenuModeChange": [{ type: Output },],
        "submenuDirectionChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [DxiItemComponent,] },],
    };
    return DxMenuComponent;
}(DxComponent));
export { DxMenuComponent };
var DxMenuModule = (function () {
    function DxMenuModule() {
    }
    DxMenuModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxMenuModule;
}());
export { DxMenuModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VpL21lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUVOLEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUlaLGVBQWUsRUFDZixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxNQUFNLE1BQU0sb0JBQW9CLENBQUM7QUFHeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQ0FB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QkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYiw2QkFBNkI7d0JBQzdCLGNBQWM7d0JBQ2Qsd0JBQXdCO3dCQUN4QixnQkFBZ0I7cUJBQ2pCO2lCQUNGOzt1QkEzeEJEOztTQTR4QmEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4TWVudSBmcm9tICdkZXZleHRyZW1lL3VpL21lbnUnO1xyXG5cclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeG9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBEeG9IaWRlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaGlkZSc7XHJcbmltcG9ydCB7IER4b1Nob3dNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaG93JztcclxuaW1wb3J0IHsgRHhpSXRlbU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2l0ZW0tZHhpJztcclxuaW1wb3J0IHsgRHhvU2hvd0ZpcnN0U3VibWVudU1vZGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaG93LWZpcnN0LXN1Ym1lbnUtbW9kZSc7XHJcbmltcG9ydCB7IER4b0RlbGF5TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZGVsYXknO1xyXG5pbXBvcnQgeyBEeG9TaG93U3VibWVudU1vZGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaG93LXN1Ym1lbnUtbW9kZSc7XHJcblxyXG5pbXBvcnQgeyBEeGlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvaXRlbS1keGknO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZW51IHdpZGdldCBpcyBhIHBhbmVsIHdpdGggY2xpY2thYmxlIGl0ZW1zLiBBIGNsaWNrIG9uIGFuIGl0ZW0gb3BlbnMgYSBkcm9wLWRvd24gbWVudSwgd2hpY2ggY2FuIGNvbnRhaW4gc2V2ZXJhbCBzdWJtZW51cy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1tZW51JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhNZW51Q29tcG9uZW50IGV4dGVuZHMgRHhDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgRG9DaGVjayB7XHJcbiAgICBpbnN0YW5jZTogRHhNZW51O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2hvcnRjdXQga2V5IHRoYXQgc2V0cyBmb2N1cyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjY2Vzc0tleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjY2Vzc0tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY2Nlc3NLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBCb29sZWFuIHZhbHVlIHNwZWNpZnlpbmcgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGludGVyYWN0aW5nIHdpdGggYSB1c2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmVTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhZGFwdGl2ZSB3aWRnZXQgcmVuZGVyaW5nIGlzIGVuYWJsZWQgb24gc21hbGwgc2NyZWVucy4gQXBwbGllcyBvbmx5IGlmIHRoZSBvcmllbnRhdGlvbiBpcyBcImhvcml6b250YWxcIi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZGFwdGl2aXR5RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhZGFwdGl2aXR5RW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFkYXB0aXZpdHlFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZGFwdGl2aXR5RW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHdpZGdldCB2aXNpYmlsaXR5IGFuaW1hdGlvbnMuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHR3byBmaWVsZHM6IHNob3cgYW5kIGhpZGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYW5pbWF0aW9uKCk6IHsgaGlkZT86IERldkV4cHJlc3MuYW5pbWF0aW9uQ29uZmlnLCBzaG93PzogRGV2RXhwcmVzcy5hbmltYXRpb25Db25maWcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYW5pbWF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYW5pbWF0aW9uKHZhbHVlOiB7IGhpZGU/OiBEZXZFeHByZXNzLmFuaW1hdGlvbkNvbmZpZywgc2hvdz86IERldkV4cHJlc3MuYW5pbWF0aW9uQ29uZmlnIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FuaW1hdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIENTUyBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHRoZSByb290IG1lbnUgbGV2ZWwgYW5kIGFsbCBzdWJtZW51cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nzc0NsYXNzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3NzQ2xhc3ModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3NzQ2xhc3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZHMgdGhlIHdpZGdldCB0byBkYXRhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFTb3VyY2UoKTogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxzdHJpbmcgfCBEZXZFeHByZXNzLnVpLkNvbGxlY3Rpb25XaWRnZXRJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8c3RyaW5nIHwgRGV2RXhwcmVzcy51aS5Db2xsZWN0aW9uV2lkZ2V0SXRlbT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB3aG9zZSB2YWx1ZSBkZWZpbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBjb3JyZXNwb25kaW5nIHdpZGdldCBpdGVtIGlzIGRpc2FibGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkRXhwcigpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWRFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWRFeHByKHZhbHVlOiBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWRFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZGF0YSBmaWVsZCB3aG9zZSB2YWx1ZXMgc2hvdWxkIGJlIGRpc3BsYXllZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNwbGF5RXhwcigpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzcGxheUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNwbGF5RXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc3BsYXlFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBiZSBmb2N1c2VkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSBzdWJtZW51IGlzIGhpZGRlbiB3aGVuIHRoZSBtb3VzZSBwb2ludGVyIGxlYXZlcyBpdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaWRlU3VibWVudU9uTW91c2VMZWF2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaWRlU3VibWVudU9uTW91c2VMZWF2ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpZGVTdWJtZW51T25Nb3VzZUxlYXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaWRlU3VibWVudU9uTW91c2VMZWF2ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGV4dCBmb3IgYSBoaW50IHRoYXQgYXBwZWFycyB3aGVuIGEgdXNlciBwYXVzZXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiBpdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3ZlclN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb2xkcyBhbiBhcnJheSBvZiBtZW51IGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGl0ZW1zKCk6IEFycmF5PERldkV4cHJlc3MudWkuZHhNZW51SXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXRlbXModmFsdWU6IEFycmF5PERldkV4cHJlc3MudWkuZHhNZW51SXRlbT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGljaCBkYXRhIGZpZWxkIGNvbnRhaW5zIG5lc3RlZCBpdGVtcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpdGVtc0V4cHIoKTogRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1zRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zRXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2l0ZW1zRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGl0ZW1UZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1UZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1UZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpdGVtVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIG1lbnUgaGFzIGhvcml6b250YWwgb3IgdmVydGljYWwgb3JpZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb3JpZW50YXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcmllbnRhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9yaWVudGF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29yaWVudGF0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IGFuIGl0ZW0gYmVjb21lcyBzZWxlY3RlZCBpZiBhIHVzZXIgY2xpY2tzIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdEJ5Q2xpY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0QnlDbGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdEJ5Q2xpY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlbGVjdEJ5Q2xpY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHdob3NlIHZhbHVlIGRlZmluZXMgd2hldGhlciBvciBub3QgdGhlIGNvcnJlc3BvbmRpbmcgd2lkZ2V0IGl0ZW1zIGlzIHNlbGVjdGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGVkRXhwcigpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0ZWRFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWRFeHByKHZhbHVlOiBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWRFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzZWxlY3RlZCBpdGVtIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3RlZEl0ZW0nKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZEl0ZW0odmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWRJdGVtJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2VsZWN0aW9uIG1vZGUgc3VwcG9ydGVkIGJ5IHRoZSBtZW51LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGlvbk1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3Rpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3Rpb25Nb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBvcHRpb25zIGZvciBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIGZpcnN0IGxldmVsIHN1Ym1lbnUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0ZpcnN0U3VibWVudU1vZGUoKTogc3RyaW5nIHwgeyBkZWxheT86IG51bWJlciB8IHsgaGlkZT86IG51bWJlciwgc2hvdz86IG51bWJlciB9LCBuYW1lPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dGaXJzdFN1Ym1lbnVNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0ZpcnN0U3VibWVudU1vZGUodmFsdWU6IHN0cmluZyB8IHsgZGVsYXk/OiBudW1iZXIgfCB7IGhpZGU/OiBudW1iZXIsIHNob3c/OiBudW1iZXIgfSwgbmFtZT86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Rmlyc3RTdWJtZW51TW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgb3B0aW9ucyBvZiBzdWJtZW51IHNob3dpbmcgYW5kIGhpZGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93U3VibWVudU1vZGUoKTogc3RyaW5nIHwgeyBkZWxheT86IG51bWJlciB8IHsgaGlkZT86IG51bWJlciwgc2hvdz86IG51bWJlciB9LCBuYW1lPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dTdWJtZW51TW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dTdWJtZW51TW9kZSh2YWx1ZTogc3RyaW5nIHwgeyBkZWxheT86IG51bWJlciB8IHsgaGlkZT86IG51bWJlciwgc2hvdz86IG51bWJlciB9LCBuYW1lPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dTdWJtZW51TW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGRpcmVjdGlvbiBhdCB3aGljaCB0aGUgc3VibWVudXMgYXJlIGRpc3BsYXllZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdWJtZW51RGlyZWN0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3VibWVudURpcmVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN1Ym1lbnVEaXJlY3Rpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3VibWVudURpcmVjdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBjb250ZW50IGlzIHJlYWR5IGFuZCBlYWNoIHRpbWUgdGhlIGNvbnRlbnQgaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ29udGVudFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIGNvbGxlY3Rpb24gaXRlbSBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgY29sbGVjdGlvbiBpdGVtIGlzIHJpZ2h0LWNsaWNrZWQgb3IgcHJlc3NlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSXRlbUNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIGNvbGxlY3Rpb24gaXRlbSBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSXRlbVJlbmRlcmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIGNvbGxlY3Rpb24gaXRlbSBpcyBzZWxlY3RlZCBvciBzZWxlY3Rpb24gaXMgY2FuY2VsZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblNlbGVjdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgc3VibWVudSBpcyBoaWRkZW4uXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblN1Ym1lbnVIaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIHN1Ym1lbnUgaXMgaGlkZGVuLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TdWJtZW51SGlkaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSBzdWJtZW51IGlzIGRpc3BsYXllZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU3VibWVudVNob3dpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgc3VibWVudSBpcyBkaXNwbGF5ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblN1Ym1lbnVTaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhZGFwdGl2aXR5RW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFkYXB0aXZpdHlFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbmltYXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbmltYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGhpZGU/OiBEZXZFeHByZXNzLmFuaW1hdGlvbkNvbmZpZywgc2hvdz86IERldkV4cHJlc3MuYW5pbWF0aW9uQ29uZmlnIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3NzQ2xhc3NDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjc3NDbGFzc0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU291cmNlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVNvdXJjZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8c3RyaW5nIHwgRGV2RXhwcmVzcy51aS5Db2xsZWN0aW9uV2lkZ2V0SXRlbT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGlzYWJsZWRFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzcGxheUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNwbGF5RXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnRBdHRyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZWxlbWVudEF0dHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGVpZ2h0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGlkZVN1Ym1lbnVPbk1vdXNlTGVhdmVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaWRlU3VibWVudU9uTW91c2VMZWF2ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGludENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhpbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaXRlbXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PERldkV4cHJlc3MudWkuZHhNZW51SXRlbT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaXRlbXNFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaXRlbXNFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaXRlbVRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaXRlbVRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG9yaWVudGF0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb3JpZW50YXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdEJ5Q2xpY2tDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RCeUNsaWNrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWxlY3RlZEV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWxlY3RlZEl0ZW1DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VsZWN0aW9uTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbk1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd0ZpcnN0U3VibWVudU1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Rmlyc3RTdWJtZW51TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IHsgZGVsYXk/OiBudW1iZXIgfCB7IGhpZGU/OiBudW1iZXIsIHNob3c/OiBudW1iZXIgfSwgbmFtZT86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dTdWJtZW51TW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dTdWJtZW51TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IHsgZGVsYXk/OiBudW1iZXIgfCB7IGhpZGU/OiBudW1iZXIsIHNob3c/OiBudW1iZXIgfSwgbmFtZT86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHN1Ym1lbnVEaXJlY3Rpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdWJtZW51RGlyZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRhYkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzaWJsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG5cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlJdGVtQ29tcG9uZW50KVxyXG4gICAgZ2V0IGl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3dhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2lkaDogSXRlcmFibGVEaWZmZXJIZWxwZXIsIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIHRlbXBsYXRlSG9zdCwgX3dhdGNoZXJIZWxwZXIsIHRyYW5zZmVyU3RhdGUsIHBsYXRmb3JtSWQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjb250ZW50UmVhZHknLCBlbWl0OiAnb25Db250ZW50UmVhZHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZGlzcG9zaW5nJywgZW1pdDogJ29uRGlzcG9zaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXRpYWxpemVkJywgZW1pdDogJ29uSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaXRlbUNsaWNrJywgZW1pdDogJ29uSXRlbUNsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2l0ZW1Db250ZXh0TWVudScsIGVtaXQ6ICdvbkl0ZW1Db250ZXh0TWVudScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpdGVtUmVuZGVyZWQnLCBlbWl0OiAnb25JdGVtUmVuZGVyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3B0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvbk9wdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2VsZWN0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvblNlbGVjdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc3VibWVudUhpZGRlbicsIGVtaXQ6ICdvblN1Ym1lbnVIaWRkZW4nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc3VibWVudUhpZGluZycsIGVtaXQ6ICdvblN1Ym1lbnVIaWRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc3VibWVudVNob3dpbmcnLCBlbWl0OiAnb25TdWJtZW51U2hvd2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzdWJtZW51U2hvd24nLCBlbWl0OiAnb25TdWJtZW51U2hvd24nIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjY2Vzc0tleUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhZGFwdGl2aXR5RW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYW5pbWF0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjc3NDbGFzc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YVNvdXJjZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzcGxheUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoaWRlU3VibWVudU9uTW91c2VMZWF2ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGludENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2l0ZW1zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpdGVtc0V4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2l0ZW1UZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnb3JpZW50YXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdEJ5Q2xpY2tDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0ZWRJdGVtQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3Rpb25Nb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Rmlyc3RTdWJtZW51TW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd1N1Ym1lbnVNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdWJtZW51RGlyZWN0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0YWJJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlzaWJsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd2lkdGhDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhNZW51KGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnaXRlbXMnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2l0ZW1zJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4b1Nob3dGaXJzdFN1Ym1lbnVNb2RlTW9kdWxlLFxyXG4gICAgRHhvRGVsYXlNb2R1bGUsXHJcbiAgICBEeG9TaG93U3VibWVudU1vZGVNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4TWVudUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhNZW51Q29tcG9uZW50LFxyXG4gICAgRHhvQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgRHhvSGlkZU1vZHVsZSxcclxuICAgIER4b1Nob3dNb2R1bGUsXHJcbiAgICBEeGlJdGVtTW9kdWxlLFxyXG4gICAgRHhvU2hvd0ZpcnN0U3VibWVudU1vZGVNb2R1bGUsXHJcbiAgICBEeG9EZWxheU1vZHVsZSxcclxuICAgIER4b1Nob3dTdWJtZW51TW9kZU1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeE1lbnVNb2R1bGUgeyB9XHJcbiJdfQ==
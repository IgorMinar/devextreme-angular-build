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

import DxDropDownButton from 'devextreme/ui/drop_down_button';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoDropDownOptionsModule } from './nested/drop-down-options';
import { DxoAnimationModule } from './nested/animation';
import { DxoHideModule } from './nested/hide';
import { DxoShowModule } from './nested/show';
import { DxoPositionModule } from './nested/position';
import { DxoAtModule } from './nested/at';
import { DxoBoundaryOffsetModule } from './nested/boundary-offset';
import { DxoCollisionModule } from './nested/collision';
import { DxoMyModule } from './nested/my';
import { DxoOffsetModule } from './nested/offset';
import { DxiToolbarItemModule } from './nested/toolbar-item-dxi';
import { DxiItemModule } from './nested/item-dxi';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The DropDownButton is a button that opens a drop-down menu.
 */
var DxDropDownButtonComponent = (function (_super) {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "dataSource", {
        get: /**
             * Provides data for the drop-down menu.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to wait until the drop-down menu is opened the first time to render its content.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "disabled", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "displayExpr", {
        get: /**
             * Specifies the data field whose values should be displayed in the drop-down menu.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "dropDownContentTemplate", {
        get: /**
             * Specifies custom content for the drop-down field.
             */
        function () {
            return this._getOption('dropDownContentTemplate');
        },
        set: function (value) {
            this._setOption('dropDownContentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "dropDownOptions", {
        get: /**
             * Configures the drop-down field.
             */
        function () {
            return this._getOption('dropDownOptions');
        },
        set: function (value) {
            this._setOption('dropDownOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether users can use keyboard to focus the widget.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "height", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "hint", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user hovers the mouse pointer over it.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "icon", {
        get: /**
             * Specifies the button's icon.
             */
        function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "items", {
        get: /**
             * Provides drop-down menu items.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for drop-down menu items.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "keyExpr", {
        get: /**
             * Specifies which data field provides keys used to distinguish between the selected drop-down menu items.
             */
        function () {
            return this._getOption('keyExpr');
        },
        set: function (value) {
            this._setOption('keyExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "noDataText", {
        get: /**
             * Specifies text or HTML markup displayed in the drop-down menu when it does not contain any items.
             */
        function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "opened", {
        get: /**
             * Specifies whether the drop-down menu is opened.
             */
        function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "selectedItem", {
        get: /**
             * Contains the selected item's data. Available when useSelectMode is true.
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "selectedItemKey", {
        get: /**
             * Contains the selected item's key and allows you to specify the initially selected item. Applies when useSelectMode is true.
             */
        function () {
            return this._getOption('selectedItemKey');
        },
        set: function (value) {
            this._setOption('selectedItemKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "showArrowIcon", {
        get: /**
             * Specifies whether the arrow icon should be displayed.
             */
        function () {
            return this._getOption('showArrowIcon');
        },
        set: function (value) {
            this._setOption('showArrowIcon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "splitButton", {
        get: /**
             * Specifies whether to split the button in two: one executes an action, the other opens and closes the drop-down menu.
             */
        function () {
            return this._getOption('splitButton');
        },
        set: function (value) {
            this._setOption('splitButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the button is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "text", {
        get: /**
             * Specifies the button's text. Applies only if useSelectMode is false.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "useSelectMode", {
        get: /**
             * Specifies whether the widget stores the selected drop-down menu item.
             */
        function () {
            return this._getOption('useSelectMode');
        },
        set: function (value) {
            this._setOption('useSelectMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownButtonComponent.prototype, "visible", {
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
    Object.defineProperty(DxDropDownButtonComponent.prototype, "width", {
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
    DxDropDownButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-drop-down-button',
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
    DxDropDownButtonComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxDropDownButtonComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "deferRendering": [{ type: Input },],
        "disabled": [{ type: Input },],
        "displayExpr": [{ type: Input },],
        "dropDownContentTemplate": [{ type: Input },],
        "dropDownOptions": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "icon": [{ type: Input },],
        "items": [{ type: Input },],
        "itemTemplate": [{ type: Input },],
        "keyExpr": [{ type: Input },],
        "noDataText": [{ type: Input },],
        "opened": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "selectedItem": [{ type: Input },],
        "selectedItemKey": [{ type: Input },],
        "showArrowIcon": [{ type: Input },],
        "splitButton": [{ type: Input },],
        "stylingMode": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "text": [{ type: Input },],
        "useSelectMode": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onButtonClick": [{ type: Output },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onItemClick": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onSelectionChanged": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "deferRenderingChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "displayExprChange": [{ type: Output },],
        "dropDownContentTemplateChange": [{ type: Output },],
        "dropDownOptionsChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "iconChange": [{ type: Output },],
        "itemsChange": [{ type: Output },],
        "itemTemplateChange": [{ type: Output },],
        "keyExprChange": [{ type: Output },],
        "noDataTextChange": [{ type: Output },],
        "openedChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "selectedItemChange": [{ type: Output },],
        "selectedItemKeyChange": [{ type: Output },],
        "showArrowIconChange": [{ type: Output },],
        "splitButtonChange": [{ type: Output },],
        "stylingModeChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "textChange": [{ type: Output },],
        "useSelectModeChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [DxiItemComponent,] },],
    };
    return DxDropDownButtonComponent;
}(DxComponent));
export { DxDropDownButtonComponent };
var DxDropDownButtonModule = (function () {
    function DxDropDownButtonModule() {
    }
    DxDropDownButtonModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxDropDownButtonModule;
}());
export { DxDropDownButtonModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VpL2Ryb3AtZG93bi1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUVOLEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUlaLGVBQWUsRUFDZixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxnQkFBZ0IsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxh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QzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLHdCQUF3Qjt3QkFDeEIsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixXQUFXO3dCQUNYLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLGdCQUFnQjtxQkFDakI7aUJBQ0Y7O2lDQTV3QkQ7O1NBNndCYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIE5nWm9uZSxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgSW5qZWN0LFxyXG5cclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgRG9DaGVjayxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCBEeERyb3BEb3duQnV0dG9uIGZyb20gJ2RldmV4dHJlbWUvdWkvZHJvcF9kb3duX2J1dHRvbic7XHJcblxyXG5cclxuaW1wb3J0IHsgRHhDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVIb3N0IH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZS1ob3N0JztcclxuaW1wb3J0IHsgRHhJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvaW50ZWdyYXRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBXYXRjaGVySGVscGVyIH0gZnJvbSAnLi4vY29yZS93YXRjaGVyLWhlbHBlcic7XHJcbmltcG9ydCB7IEl0ZXJhYmxlRGlmZmVySGVscGVyIH0gZnJvbSAnLi4vY29yZS9pdGVyYWJsZS1kaWZmZXItaGVscGVyJztcclxuXHJcbmltcG9ydCB7IER4b0Ryb3BEb3duT3B0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Ryb3AtZG93bi1vcHRpb25zJztcclxuaW1wb3J0IHsgRHhvQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgRHhvSGlkZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2hpZGUnO1xyXG5pbXBvcnQgeyBEeG9TaG93TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2hvdyc7XHJcbmltcG9ydCB7IER4b1Bvc2l0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcG9zaXRpb24nO1xyXG5pbXBvcnQgeyBEeG9BdE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2F0JztcclxuaW1wb3J0IHsgRHhvQm91bmRhcnlPZmZzZXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ib3VuZGFyeS1vZmZzZXQnO1xyXG5pbXBvcnQgeyBEeG9Db2xsaXNpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb2xsaXNpb24nO1xyXG5pbXBvcnQgeyBEeG9NeU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL215JztcclxuaW1wb3J0IHsgRHhvT2Zmc2V0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvb2Zmc2V0JztcclxuaW1wb3J0IHsgRHhpVG9vbGJhckl0ZW1Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC90b29sYmFyLWl0ZW0tZHhpJztcclxuaW1wb3J0IHsgRHhpSXRlbU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2l0ZW0tZHhpJztcclxuXHJcbmltcG9ydCB7IER4aUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9pdGVtLWR4aSc7XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERyb3BEb3duQnV0dG9uIGlzIGEgYnV0dG9uIHRoYXQgb3BlbnMgYSBkcm9wLWRvd24gbWVudS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1kcm9wLWRvd24tYnV0dG9uJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4RHJvcERvd25CdXR0b247XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBzaG9ydGN1dCBrZXkgdGhhdCBzZXRzIGZvY3VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWNjZXNzS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWNjZXNzS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjY2Vzc0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGludGVyYWN0aW5nIHdpdGggYSB1c2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmVTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm92aWRlcyBkYXRhIGZvciB0aGUgZHJvcC1kb3duIG1lbnUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PERldkV4cHJlc3MudWkuQ29sbGVjdGlvbldpZGdldEl0ZW0gfCBhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhU291cmNlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVNvdXJjZSh2YWx1ZTogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxEZXZFeHByZXNzLnVpLkNvbGxlY3Rpb25XaWRnZXRJdGVtIHwgYW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byB3YWl0IHVudGlsIHRoZSBkcm9wLWRvd24gbWVudSBpcyBvcGVuZWQgdGhlIGZpcnN0IHRpbWUgdG8gcmVuZGVyIGl0cyBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRlZmVyUmVuZGVyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RlZmVyUmVuZGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVmZXJSZW5kZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RlZmVyUmVuZGVyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgcmVzcG9uZHMgdG8gdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGRhdGEgZmllbGQgd2hvc2UgdmFsdWVzIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRyb3AtZG93biBtZW51LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc3BsYXlFeHByKCk6IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNwbGF5RXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc3BsYXlFeHByKHZhbHVlOiBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzcGxheUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGN1c3RvbSBjb250ZW50IGZvciB0aGUgZHJvcC1kb3duIGZpZWxkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRyb3BEb3duQ29udGVudFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZHJvcERvd25Db250ZW50VGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkcm9wRG93bkNvbnRlbnRUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkcm9wRG93bkNvbnRlbnRUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBkcm9wLWRvd24gZmllbGQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZHJvcERvd25PcHRpb25zKCk6IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Ryb3BEb3duT3B0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRyb3BEb3duT3B0aW9ucyh2YWx1ZTogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZHJvcERvd25PcHRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB1c2VycyBjYW4gdXNlIGtleWJvYXJkIHRvIGZvY3VzIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgZm9yIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGEgdXNlciBob3ZlcnMgdGhlIG1vdXNlIHBvaW50ZXIgb3ZlciBpdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3ZlclN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGJ1dHRvbidzIGljb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ljb24nKTtcclxuICAgIH1cclxuICAgIHNldCBpY29uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ljb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvdmlkZXMgZHJvcC1kb3duIG1lbnUgaXRlbXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaXRlbXMoKTogQXJyYXk8YW55IHwgeyBiYWRnZT86IHN0cmluZywgZGlzYWJsZWQ/OiBib29sZWFuLCBodG1sPzogc3RyaW5nLCBpY29uPzogc3RyaW5nLCB0ZW1wbGF0ZT86IGFueSwgdGV4dD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXRlbXModmFsdWU6IEFycmF5PGFueSB8IHsgYmFkZ2U/OiBzdHJpbmcsIGRpc2FibGVkPzogYm9vbGVhbiwgaHRtbD86IHN0cmluZywgaWNvbj86IHN0cmluZywgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIGRyb3AtZG93biBtZW51IGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGl0ZW1UZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1UZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1UZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpdGVtVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoaWNoIGRhdGEgZmllbGQgcHJvdmlkZXMga2V5cyB1c2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlIHNlbGVjdGVkIGRyb3AtZG93biBtZW51IGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGtleUV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdrZXlFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQga2V5RXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdrZXlFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IG9yIEhUTUwgbWFya3VwIGRpc3BsYXllZCBpbiB0aGUgZHJvcC1kb3duIG1lbnUgd2hlbiBpdCBkb2VzIG5vdCBjb250YWluIGFueSBpdGVtcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBub0RhdGFUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbm9EYXRhVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5vRGF0YVRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbm9EYXRhVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZHJvcC1kb3duIG1lbnUgaXMgb3BlbmVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcGVuZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wZW5lZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnRhaW5zIHRoZSBzZWxlY3RlZCBpdGVtJ3MgZGF0YS4gQXZhaWxhYmxlIHdoZW4gdXNlU2VsZWN0TW9kZSBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpOiBhbnkgfCBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGVkSXRlbScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGVkSXRlbSh2YWx1ZTogYW55IHwgbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3RlZEl0ZW0nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udGFpbnMgdGhlIHNlbGVjdGVkIGl0ZW0ncyBrZXkgYW5kIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgaW5pdGlhbGx5IHNlbGVjdGVkIGl0ZW0uIEFwcGxpZXMgd2hlbiB1c2VTZWxlY3RNb2RlIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0ZWRJdGVtS2V5KCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0ZWRJdGVtS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWRJdGVtS2V5KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlbGVjdGVkSXRlbUtleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYXJyb3cgaWNvbiBzaG91bGQgYmUgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dBcnJvd0ljb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0Fycm93SWNvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dBcnJvd0ljb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dBcnJvd0ljb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gc3BsaXQgdGhlIGJ1dHRvbiBpbiB0d286IG9uZSBleGVjdXRlcyBhbiBhY3Rpb24sIHRoZSBvdGhlciBvcGVucyBhbmQgY2xvc2VzIHRoZSBkcm9wLWRvd24gbWVudS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzcGxpdEJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzcGxpdEJ1dHRvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNwbGl0QnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzcGxpdEJ1dHRvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgaG93IHRoZSBidXR0b24gaXMgc3R5bGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0eWxpbmdNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3R5bGluZ01vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzdHlsaW5nTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdHlsaW5nTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYnV0dG9uJ3MgdGV4dC4gQXBwbGllcyBvbmx5IGlmIHVzZVNlbGVjdE1vZGUgaXMgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RleHQnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBzdG9yZXMgdGhlIHNlbGVjdGVkIGRyb3AtZG93biBtZW51IGl0ZW0uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdXNlU2VsZWN0TW9kZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1c2VTZWxlY3RNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlU2VsZWN0TW9kZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndXNlU2VsZWN0TW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgb3IgdGFwcGVkLiBJZiBzcGxpdEJ1dHRvbiBpcyB0cnVlLCB0aGlzIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIGZvciB0aGUgYWN0aW9uIGJ1dHRvbiBvbmx5LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25CdXR0b25DbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgY29udGVudCBpcyByZWFkeSBhbmQgZWFjaCB0aW1lIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZGlzcG9zZWQgb2YuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRpc3Bvc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHVzZWQgaW4gSmF2YVNjcmlwdCBmcmFtZXdvcmtzIHRvIHNhdmUgdGhlIHdpZGdldCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSW5pdGlhbGl6ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBkcm9wLWRvd24gbWVudSBpdGVtIGlzIGNsaWNrZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBzZWxlY3RlZCBvciBzZWxlY3Rpb24gaXMgY2FuY2VsZWQuIEluIGVmZmVjdCB3aGVuIHVzZVNlbGVjdE1vZGUgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU291cmNlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVNvdXJjZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8RGV2RXhwcmVzcy51aS5Db2xsZWN0aW9uV2lkZ2V0SXRlbSB8IGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGVmZXJSZW5kZXJpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkZWZlclJlbmRlcmluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzcGxheUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNwbGF5RXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRyb3BEb3duQ29udGVudFRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZHJvcERvd25Db250ZW50VGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZHJvcERvd25PcHRpb25zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZHJvcERvd25PcHRpb25zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhpbnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGljb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpY29uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGl0ZW1zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGJhZGdlPzogc3RyaW5nLCBkaXNhYmxlZD86IGJvb2xlYW4sIGh0bWw/OiBzdHJpbmcsIGljb24/OiBzdHJpbmcsIHRlbXBsYXRlPzogYW55LCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpdGVtVGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpdGVtVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUga2V5RXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGtleUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbm9EYXRhVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG5vRGF0YVRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgb3BlbmVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb3BlbmVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBydGxFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcnRsRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VsZWN0ZWRJdGVtQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRJdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55IHwgbnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkSXRlbUtleUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkSXRlbUtleUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93QXJyb3dJY29uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0Fycm93SWNvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3BsaXRCdXR0b25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzcGxpdEJ1dHRvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3R5bGluZ01vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdHlsaW5nTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0YWJJbmRleENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRhYkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRleHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0ZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHVzZVNlbGVjdE1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB1c2VTZWxlY3RNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2aXNpYmxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aUl0ZW1Db21wb25lbnQpXHJcbiAgICBnZXQgaXRlbXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpSXRlbUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXRlbXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBfd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBfaWRoOiBJdGVyYWJsZURpZmZlckhlbHBlciwgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcclxuICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55KSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgdGVtcGxhdGVIb3N0LCBfd2F0Y2hlckhlbHBlciwgdHJhbnNmZXJTdGF0ZSwgcGxhdGZvcm1JZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2J1dHRvbkNsaWNrJywgZW1pdDogJ29uQnV0dG9uQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGVudFJlYWR5JywgZW1pdDogJ29uQ29udGVudFJlYWR5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2l0ZW1DbGljaycsIGVtaXQ6ICdvbkl0ZW1DbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzZWxlY3Rpb25DaGFuZ2VkJywgZW1pdDogJ29uU2VsZWN0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWNjZXNzS2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY3RpdmVTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFTb3VyY2VDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RlZmVyUmVuZGVyaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzcGxheUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Ryb3BEb3duQ29udGVudFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkcm9wRG93bk9wdGlvbnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoaW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdob3ZlclN0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaWNvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaXRlbXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2l0ZW1UZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAna2V5RXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbm9EYXRhVGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnb3BlbmVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3RlZEl0ZW1DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkSXRlbUtleUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0Fycm93SWNvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3BsaXRCdXR0b25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0eWxpbmdNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0YWJJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndXNlU2VsZWN0TW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlzaWJsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd2lkdGhDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhEcm9wRG93bkJ1dHRvbihlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdkYXRhU291cmNlJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2l0ZW1zJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnZGF0YVNvdXJjZScpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdpdGVtcycpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoZXJIZWxwZXIuY2hlY2tXYXRjaGVycygpO1xyXG4gICAgICAgIHN1cGVyLm5nRG9DaGVjaygpO1xyXG4gICAgICAgIHN1cGVyLmNsZWFyQ2hhbmdlZE9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGxldCBpc1NldHVwID0gdGhpcy5faWRoLnNldHVwU2luZ2xlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBsZXQgaXNDaGFuZ2VkID0gdGhpcy5faWRoLmdldENoYW5nZXMobmFtZSwgdmFsdWUpICE9PSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaXNTZXR1cCB8fCBpc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuX3NldE9wdGlvbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBEeG9Ecm9wRG93bk9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9IaWRlTW9kdWxlLFxyXG4gICAgRHhvU2hvd01vZHVsZSxcclxuICAgIER4b1Bvc2l0aW9uTW9kdWxlLFxyXG4gICAgRHhvQXRNb2R1bGUsXHJcbiAgICBEeG9Cb3VuZGFyeU9mZnNldE1vZHVsZSxcclxuICAgIER4b0NvbGxpc2lvbk1vZHVsZSxcclxuICAgIER4b015TW9kdWxlLFxyXG4gICAgRHhvT2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhpVG9vbGJhckl0ZW1Nb2R1bGUsXHJcbiAgICBEeGlJdGVtTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeERyb3BEb3duQnV0dG9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeERyb3BEb3duQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgRHhvRHJvcERvd25PcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgRHhvSGlkZU1vZHVsZSxcclxuICAgIER4b1Nob3dNb2R1bGUsXHJcbiAgICBEeG9Qb3NpdGlvbk1vZHVsZSxcclxuICAgIER4b0F0TW9kdWxlLFxyXG4gICAgRHhvQm91bmRhcnlPZmZzZXRNb2R1bGUsXHJcbiAgICBEeG9Db2xsaXNpb25Nb2R1bGUsXHJcbiAgICBEeG9NeU1vZHVsZSxcclxuICAgIER4b09mZnNldE1vZHVsZSxcclxuICAgIER4aVRvb2xiYXJJdGVtTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeERyb3BEb3duQnV0dG9uTW9kdWxlIHsgfVxyXG4iXX0=
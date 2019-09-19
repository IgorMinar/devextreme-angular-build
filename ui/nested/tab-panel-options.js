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
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoTabPanelOptions } from './base/tab-panel-options';
import { DxiItemComponent } from './item-dxi';
var DxoTabPanelOptionsComponent = (function (_super) {
    __extends(DxoTabPanelOptionsComponent, _super);
    function DxoTabPanelOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'itemsChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoTabPanelOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'tabPanelOptions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTabPanelOptionsComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoTabPanelOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-tab-panel-options',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'activeStateEnabled',
                        'animationEnabled',
                        'dataSource',
                        'deferRendering',
                        'disabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'itemHoldTimeout',
                        'items',
                        'itemTemplate',
                        'itemTitleTemplate',
                        'loop',
                        'noDataText',
                        'onContentReady',
                        'onDisposing',
                        'onInitialized',
                        'onItemClick',
                        'onItemContextMenu',
                        'onItemHold',
                        'onItemRendered',
                        'onOptionChanged',
                        'onSelectionChanged',
                        'onTitleClick',
                        'onTitleHold',
                        'onTitleRendered',
                        'repaintChangesOnly',
                        'rtlEnabled',
                        'scrollByContent',
                        'scrollingEnabled',
                        'selectedIndex',
                        'selectedItem',
                        'showNavButtons',
                        'swipeEnabled',
                        'tabIndex',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoTabPanelOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoTabPanelOptionsComponent.propDecorators = {
        "itemsChange": [{ type: Output },],
        "selectedIndexChange": [{ type: Output },],
        "selectedItemChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiItemComponent; }),] },],
    };
    return DxoTabPanelOptionsComponent;
}(DxoTabPanelOptions));
export { DxoTabPanelOptionsComponent };
var DxoTabPanelOptionsModule = (function () {
    function DxoTabPanelOptionsModule() {
    }
    DxoTabPanelOptionsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoTabPanelOptionsComponent
                    ],
                    exports: [
                        DxoTabPanelOptionsComponent
                    ],
                },] },
    ];
    return DxoTabPanelOptionsModule;
}());
export { DxoTabPanelOptionsModule };
//# sourceMappingURL=tab-panel-options.js.map
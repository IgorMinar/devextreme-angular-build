"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nested_option_1 = require("../../core/nested-option");
var tab_panel_options_1 = require("./base/tab-panel-options");
var item_dxi_1 = require("./item-dxi");
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
        { type: core_1.Component, args: [{
                    selector: 'dxo-tab-panel-options',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
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
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoTabPanelOptionsComponent.propDecorators = {
        "itemsChange": [{ type: core_1.Output },],
        "selectedIndexChange": [{ type: core_1.Output },],
        "selectedItemChange": [{ type: core_1.Output },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return item_dxi_1.DxiItemComponent; }),] },],
    };
    return DxoTabPanelOptionsComponent;
}(tab_panel_options_1.DxoTabPanelOptions));
exports.DxoTabPanelOptionsComponent = DxoTabPanelOptionsComponent;
var DxoTabPanelOptionsModule = (function () {
    function DxoTabPanelOptionsModule() {
    }
    DxoTabPanelOptionsModule.decorators = [
        { type: core_1.NgModule, args: [{
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
exports.DxoTabPanelOptionsModule = DxoTabPanelOptionsModule;
//# sourceMappingURL=tab-panel-options.js.map
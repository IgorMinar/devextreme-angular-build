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
var nested_option_2 = require("../../core/nested-option");
var group_item_dxi_1 = require("./group-item-dxi");
var total_item_dxi_1 = require("./total-item-dxi");
var DxoSummaryComponent = (function (_super) {
    __extends(DxoSummaryComponent, _super);
    function DxoSummaryComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSummaryComponent.prototype, "calculateCustomSummary", {
        get: function () {
            return this._getOption('calculateCustomSummary');
        },
        set: function (value) {
            this._setOption('calculateCustomSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "groupItems", {
        get: function () {
            return this._getOption('groupItems');
        },
        set: function (value) {
            this._setOption('groupItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "recalculateWhileEditing", {
        get: function () {
            return this._getOption('recalculateWhileEditing');
        },
        set: function (value) {
            this._setOption('recalculateWhileEditing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "skipEmptyValues", {
        get: function () {
            return this._getOption('skipEmptyValues');
        },
        set: function (value) {
            this._setOption('skipEmptyValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "totalItems", {
        get: function () {
            return this._getOption('totalItems');
        },
        set: function (value) {
            this._setOption('totalItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "_optionPath", {
        get: function () {
            return 'summary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "groupItemsChildren", {
        get: function () {
            return this._getOption('groupItems');
        },
        set: function (value) {
            this.setChildren('groupItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "totalItemsChildren", {
        get: function () {
            return this._getOption('totalItems');
        },
        set: function (value) {
            this.setChildren('totalItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoSummaryComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-summary',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSummaryComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSummaryComponent.propDecorators = {
        "calculateCustomSummary": [{ type: core_1.Input },],
        "groupItems": [{ type: core_1.Input },],
        "recalculateWhileEditing": [{ type: core_1.Input },],
        "skipEmptyValues": [{ type: core_1.Input },],
        "texts": [{ type: core_1.Input },],
        "totalItems": [{ type: core_1.Input },],
        "groupItemsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return group_item_dxi_1.DxiGroupItemComponent; }),] },],
        "totalItemsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return total_item_dxi_1.DxiTotalItemComponent; }),] },],
    };
    return DxoSummaryComponent;
}(nested_option_2.NestedOption));
exports.DxoSummaryComponent = DxoSummaryComponent;
var DxoSummaryModule = (function () {
    function DxoSummaryModule() {
    }
    DxoSummaryModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSummaryComponent
                    ],
                    exports: [
                        DxoSummaryComponent
                    ],
                },] },
    ];
    return DxoSummaryModule;
}());
exports.DxoSummaryModule = DxoSummaryModule;
//# sourceMappingURL=summary.js.map
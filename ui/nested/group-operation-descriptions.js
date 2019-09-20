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
var DxoGroupOperationDescriptionsComponent = (function (_super) {
    __extends(DxoGroupOperationDescriptionsComponent, _super);
    function DxoGroupOperationDescriptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoGroupOperationDescriptionsComponent.prototype, "and", {
        get: function () {
            return this._getOption('and');
        },
        set: function (value) {
            this._setOption('and', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupOperationDescriptionsComponent.prototype, "notAnd", {
        get: function () {
            return this._getOption('notAnd');
        },
        set: function (value) {
            this._setOption('notAnd', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupOperationDescriptionsComponent.prototype, "notOr", {
        get: function () {
            return this._getOption('notOr');
        },
        set: function (value) {
            this._setOption('notOr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupOperationDescriptionsComponent.prototype, "or", {
        get: function () {
            return this._getOption('or');
        },
        set: function (value) {
            this._setOption('or', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupOperationDescriptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'groupOperationDescriptions';
        },
        enumerable: true,
        configurable: true
    });
    DxoGroupOperationDescriptionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-group-operation-descriptions',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoGroupOperationDescriptionsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoGroupOperationDescriptionsComponent.propDecorators = {
        "and": [{ type: core_1.Input },],
        "notAnd": [{ type: core_1.Input },],
        "notOr": [{ type: core_1.Input },],
        "or": [{ type: core_1.Input },],
    };
    return DxoGroupOperationDescriptionsComponent;
}(nested_option_2.NestedOption));
exports.DxoGroupOperationDescriptionsComponent = DxoGroupOperationDescriptionsComponent;
var DxoGroupOperationDescriptionsModule = (function () {
    function DxoGroupOperationDescriptionsModule() {
    }
    DxoGroupOperationDescriptionsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoGroupOperationDescriptionsComponent
                    ],
                    exports: [
                        DxoGroupOperationDescriptionsComponent
                    ],
                },] },
    ];
    return DxoGroupOperationDescriptionsModule;
}());
exports.DxoGroupOperationDescriptionsModule = DxoGroupOperationDescriptionsModule;
//# sourceMappingURL=group-operation-descriptions.js.map
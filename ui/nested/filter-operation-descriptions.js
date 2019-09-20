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
var DxoFilterOperationDescriptionsComponent = (function (_super) {
    __extends(DxoFilterOperationDescriptionsComponent, _super);
    function DxoFilterOperationDescriptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "between", {
        get: function () {
            return this._getOption('between');
        },
        set: function (value) {
            this._setOption('between', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "contains", {
        get: function () {
            return this._getOption('contains');
        },
        set: function (value) {
            this._setOption('contains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "endsWith", {
        get: function () {
            return this._getOption('endsWith');
        },
        set: function (value) {
            this._setOption('endsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "equal", {
        get: function () {
            return this._getOption('equal');
        },
        set: function (value) {
            this._setOption('equal', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "greaterThan", {
        get: function () {
            return this._getOption('greaterThan');
        },
        set: function (value) {
            this._setOption('greaterThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "greaterThanOrEqual", {
        get: function () {
            return this._getOption('greaterThanOrEqual');
        },
        set: function (value) {
            this._setOption('greaterThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "isBlank", {
        get: function () {
            return this._getOption('isBlank');
        },
        set: function (value) {
            this._setOption('isBlank', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "isNotBlank", {
        get: function () {
            return this._getOption('isNotBlank');
        },
        set: function (value) {
            this._setOption('isNotBlank', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "lessThan", {
        get: function () {
            return this._getOption('lessThan');
        },
        set: function (value) {
            this._setOption('lessThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "lessThanOrEqual", {
        get: function () {
            return this._getOption('lessThanOrEqual');
        },
        set: function (value) {
            this._setOption('lessThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "notContains", {
        get: function () {
            return this._getOption('notContains');
        },
        set: function (value) {
            this._setOption('notContains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "notEqual", {
        get: function () {
            return this._getOption('notEqual');
        },
        set: function (value) {
            this._setOption('notEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "startsWith", {
        get: function () {
            return this._getOption('startsWith');
        },
        set: function (value) {
            this._setOption('startsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterOperationDescriptions';
        },
        enumerable: true,
        configurable: true
    });
    DxoFilterOperationDescriptionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-filter-operation-descriptions',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoFilterOperationDescriptionsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoFilterOperationDescriptionsComponent.propDecorators = {
        "between": [{ type: core_1.Input },],
        "contains": [{ type: core_1.Input },],
        "endsWith": [{ type: core_1.Input },],
        "equal": [{ type: core_1.Input },],
        "greaterThan": [{ type: core_1.Input },],
        "greaterThanOrEqual": [{ type: core_1.Input },],
        "isBlank": [{ type: core_1.Input },],
        "isNotBlank": [{ type: core_1.Input },],
        "lessThan": [{ type: core_1.Input },],
        "lessThanOrEqual": [{ type: core_1.Input },],
        "notContains": [{ type: core_1.Input },],
        "notEqual": [{ type: core_1.Input },],
        "startsWith": [{ type: core_1.Input },],
    };
    return DxoFilterOperationDescriptionsComponent;
}(nested_option_2.NestedOption));
exports.DxoFilterOperationDescriptionsComponent = DxoFilterOperationDescriptionsComponent;
var DxoFilterOperationDescriptionsModule = (function () {
    function DxoFilterOperationDescriptionsModule() {
    }
    DxoFilterOperationDescriptionsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFilterOperationDescriptionsComponent
                    ],
                    exports: [
                        DxoFilterOperationDescriptionsComponent
                    ],
                },] },
    ];
    return DxoFilterOperationDescriptionsModule;
}());
exports.DxoFilterOperationDescriptionsModule = DxoFilterOperationDescriptionsModule;
//# sourceMappingURL=filter-operation-descriptions.js.map
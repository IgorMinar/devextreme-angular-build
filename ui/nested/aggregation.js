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
var DxoAggregationComponent = (function (_super) {
    __extends(DxoAggregationComponent, _super);
    function DxoAggregationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAggregationComponent.prototype, "calculate", {
        get: function () {
            return this._getOption('calculate');
        },
        set: function (value) {
            this._setOption('calculate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationComponent.prototype, "method", {
        get: function () {
            return this._getOption('method');
        },
        set: function (value) {
            this._setOption('method', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationComponent.prototype, "_optionPath", {
        get: function () {
            return 'aggregation';
        },
        enumerable: true,
        configurable: true
    });
    DxoAggregationComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-aggregation',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoAggregationComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoAggregationComponent.propDecorators = {
        "calculate": [{ type: core_1.Input },],
        "enabled": [{ type: core_1.Input },],
        "method": [{ type: core_1.Input },],
    };
    return DxoAggregationComponent;
}(nested_option_2.NestedOption));
exports.DxoAggregationComponent = DxoAggregationComponent;
var DxoAggregationModule = (function () {
    function DxoAggregationModule() {
    }
    DxoAggregationModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoAggregationComponent
                    ],
                    exports: [
                        DxoAggregationComponent
                    ],
                },] },
    ];
    return DxoAggregationModule;
}());
exports.DxoAggregationModule = DxoAggregationModule;
//# sourceMappingURL=aggregation.js.map
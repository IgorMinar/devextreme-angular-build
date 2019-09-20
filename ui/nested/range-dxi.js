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
var DxiRangeComponent = (function (_super) {
    __extends(DxiRangeComponent, _super);
    function DxiRangeComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiRangeComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRangeComponent.prototype, "endValue", {
        get: function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRangeComponent.prototype, "startValue", {
        get: function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRangeComponent.prototype, "_optionPath", {
        get: function () {
            return 'ranges';
        },
        enumerable: true,
        configurable: true
    });
    DxiRangeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-range',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiRangeComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiRangeComponent.propDecorators = {
        "color": [{ type: core_1.Input },],
        "endValue": [{ type: core_1.Input },],
        "startValue": [{ type: core_1.Input },],
    };
    return DxiRangeComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiRangeComponent = DxiRangeComponent;
var DxiRangeModule = (function () {
    function DxiRangeModule() {
    }
    DxiRangeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiRangeComponent
                    ],
                    exports: [
                        DxiRangeComponent
                    ],
                },] },
    ];
    return DxiRangeModule;
}());
exports.DxiRangeModule = DxiRangeModule;
//# sourceMappingURL=range-dxi.js.map
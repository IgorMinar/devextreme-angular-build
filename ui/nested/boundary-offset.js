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
var DxoBoundaryOffsetComponent = (function (_super) {
    __extends(DxoBoundaryOffsetComponent, _super);
    function DxoBoundaryOffsetComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoBoundaryOffsetComponent.prototype, "x", {
        get: function () {
            return this._getOption('x');
        },
        set: function (value) {
            this._setOption('x', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBoundaryOffsetComponent.prototype, "y", {
        get: function () {
            return this._getOption('y');
        },
        set: function (value) {
            this._setOption('y', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBoundaryOffsetComponent.prototype, "_optionPath", {
        get: function () {
            return 'boundaryOffset';
        },
        enumerable: true,
        configurable: true
    });
    DxoBoundaryOffsetComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-boundary-offset',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoBoundaryOffsetComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoBoundaryOffsetComponent.propDecorators = {
        "x": [{ type: core_1.Input },],
        "y": [{ type: core_1.Input },],
    };
    return DxoBoundaryOffsetComponent;
}(nested_option_2.NestedOption));
exports.DxoBoundaryOffsetComponent = DxoBoundaryOffsetComponent;
var DxoBoundaryOffsetModule = (function () {
    function DxoBoundaryOffsetModule() {
    }
    DxoBoundaryOffsetModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoBoundaryOffsetComponent
                    ],
                    exports: [
                        DxoBoundaryOffsetComponent
                    ],
                },] },
    ];
    return DxoBoundaryOffsetModule;
}());
exports.DxoBoundaryOffsetModule = DxoBoundaryOffsetModule;
//# sourceMappingURL=boundary-offset.js.map
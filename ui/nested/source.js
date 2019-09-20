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
var DxoSourceComponent = (function (_super) {
    __extends(DxoSourceComponent, _super);
    function DxoSourceComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSourceComponent.prototype, "grouping", {
        get: function () {
            return this._getOption('grouping');
        },
        set: function (value) {
            this._setOption('grouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSourceComponent.prototype, "layer", {
        get: function () {
            return this._getOption('layer');
        },
        set: function (value) {
            this._setOption('layer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSourceComponent.prototype, "_optionPath", {
        get: function () {
            return 'source';
        },
        enumerable: true,
        configurable: true
    });
    DxoSourceComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-source',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSourceComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSourceComponent.propDecorators = {
        "grouping": [{ type: core_1.Input },],
        "layer": [{ type: core_1.Input },],
    };
    return DxoSourceComponent;
}(nested_option_2.NestedOption));
exports.DxoSourceComponent = DxoSourceComponent;
var DxoSourceModule = (function () {
    function DxoSourceModule() {
    }
    DxoSourceModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSourceComponent
                    ],
                    exports: [
                        DxoSourceComponent
                    ],
                },] },
    ];
    return DxoSourceModule;
}());
exports.DxoSourceModule = DxoSourceModule;
//# sourceMappingURL=source.js.map
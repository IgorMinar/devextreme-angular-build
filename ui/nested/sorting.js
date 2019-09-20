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
var DxoSortingComponent = (function (_super) {
    __extends(DxoSortingComponent, _super);
    function DxoSortingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSortingComponent.prototype, "ascendingText", {
        get: function () {
            return this._getOption('ascendingText');
        },
        set: function (value) {
            this._setOption('ascendingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "clearText", {
        get: function () {
            return this._getOption('clearText');
        },
        set: function (value) {
            this._setOption('clearText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "descendingText", {
        get: function () {
            return this._getOption('descendingText');
        },
        set: function (value) {
            this._setOption('descendingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "_optionPath", {
        get: function () {
            return 'sorting';
        },
        enumerable: true,
        configurable: true
    });
    DxoSortingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-sorting',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSortingComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSortingComponent.propDecorators = {
        "ascendingText": [{ type: core_1.Input },],
        "clearText": [{ type: core_1.Input },],
        "descendingText": [{ type: core_1.Input },],
        "mode": [{ type: core_1.Input },],
    };
    return DxoSortingComponent;
}(nested_option_2.NestedOption));
exports.DxoSortingComponent = DxoSortingComponent;
var DxoSortingModule = (function () {
    function DxoSortingModule() {
    }
    DxoSortingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSortingComponent
                    ],
                    exports: [
                        DxoSortingComponent
                    ],
                },] },
    ];
    return DxoSortingModule;
}());
exports.DxoSortingModule = DxoSortingModule;
//# sourceMappingURL=sorting.js.map
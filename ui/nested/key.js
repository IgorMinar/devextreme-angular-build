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
var DxoKeyComponent = (function (_super) {
    __extends(DxoKeyComponent, _super);
    function DxoKeyComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoKeyComponent.prototype, "bing", {
        get: function () {
            return this._getOption('bing');
        },
        set: function (value) {
            this._setOption('bing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoKeyComponent.prototype, "google", {
        get: function () {
            return this._getOption('google');
        },
        set: function (value) {
            this._setOption('google', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoKeyComponent.prototype, "googleStatic", {
        get: function () {
            return this._getOption('googleStatic');
        },
        set: function (value) {
            this._setOption('googleStatic', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoKeyComponent.prototype, "_optionPath", {
        get: function () {
            return 'key';
        },
        enumerable: true,
        configurable: true
    });
    DxoKeyComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-key',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoKeyComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoKeyComponent.propDecorators = {
        "bing": [{ type: core_1.Input },],
        "google": [{ type: core_1.Input },],
        "googleStatic": [{ type: core_1.Input },],
    };
    return DxoKeyComponent;
}(nested_option_2.NestedOption));
exports.DxoKeyComponent = DxoKeyComponent;
var DxoKeyModule = (function () {
    function DxoKeyModule() {
    }
    DxoKeyModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoKeyComponent
                    ],
                    exports: [
                        DxoKeyComponent
                    ],
                },] },
    ];
    return DxoKeyModule;
}());
exports.DxoKeyModule = DxoKeyModule;
//# sourceMappingURL=key.js.map
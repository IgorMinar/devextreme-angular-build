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
var DxoColorizerComponent = (function (_super) {
    __extends(DxoColorizerComponent, _super);
    function DxoColorizerComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoColorizerComponent.prototype, "colorCodeField", {
        get: function () {
            return this._getOption('colorCodeField');
        },
        set: function (value) {
            this._setOption('colorCodeField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "colorizeGroups", {
        get: function () {
            return this._getOption('colorizeGroups');
        },
        set: function (value) {
            this._setOption('colorizeGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "paletteExtensionMode", {
        get: function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "range", {
        get: function () {
            return this._getOption('range');
        },
        set: function (value) {
            this._setOption('range', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColorizerComponent.prototype, "_optionPath", {
        get: function () {
            return 'colorizer';
        },
        enumerable: true,
        configurable: true
    });
    DxoColorizerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-colorizer',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoColorizerComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoColorizerComponent.propDecorators = {
        "colorCodeField": [{ type: core_1.Input },],
        "colorizeGroups": [{ type: core_1.Input },],
        "palette": [{ type: core_1.Input },],
        "paletteExtensionMode": [{ type: core_1.Input },],
        "range": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
    };
    return DxoColorizerComponent;
}(nested_option_2.NestedOption));
exports.DxoColorizerComponent = DxoColorizerComponent;
var DxoColorizerModule = (function () {
    function DxoColorizerModule() {
    }
    DxoColorizerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoColorizerComponent
                    ],
                    exports: [
                        DxoColorizerComponent
                    ],
                },] },
    ];
    return DxoColorizerModule;
}());
exports.DxoColorizerModule = DxoColorizerModule;
//# sourceMappingURL=colorizer.js.map
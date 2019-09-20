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
var DxoTextComponent = (function (_super) {
    __extends(DxoTextComponent, _super);
    function DxoTextComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoTextComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextComponent.prototype, "indent", {
        get: function () {
            return this._getOption('indent');
        },
        set: function (value) {
            this._setOption('indent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextComponent.prototype, "_optionPath", {
        get: function () {
            return 'text';
        },
        enumerable: true,
        configurable: true
    });
    DxoTextComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-text',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoTextComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoTextComponent.propDecorators = {
        "customizeText": [{ type: core_1.Input },],
        "font": [{ type: core_1.Input },],
        "format": [{ type: core_1.Input },],
        "indent": [{ type: core_1.Input },],
    };
    return DxoTextComponent;
}(nested_option_2.NestedOption));
exports.DxoTextComponent = DxoTextComponent;
var DxoTextModule = (function () {
    function DxoTextModule() {
    }
    DxoTextModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoTextComponent
                    ],
                    exports: [
                        DxoTextComponent
                    ],
                },] },
    ];
    return DxoTextModule;
}());
exports.DxoTextModule = DxoTextModule;
//# sourceMappingURL=text.js.map
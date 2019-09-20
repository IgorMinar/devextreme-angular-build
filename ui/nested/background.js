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
var DxoBackgroundComponent = (function (_super) {
    __extends(DxoBackgroundComponent, _super);
    function DxoBackgroundComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoBackgroundComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundComponent.prototype, "image", {
        get: function () {
            return this._getOption('image');
        },
        set: function (value) {
            this._setOption('image', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundComponent.prototype, "borderColor", {
        get: function () {
            return this._getOption('borderColor');
        },
        set: function (value) {
            this._setOption('borderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundComponent.prototype, "_optionPath", {
        get: function () {
            return 'background';
        },
        enumerable: true,
        configurable: true
    });
    DxoBackgroundComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-background',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoBackgroundComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoBackgroundComponent.propDecorators = {
        "color": [{ type: core_1.Input },],
        "image": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "borderColor": [{ type: core_1.Input },],
    };
    return DxoBackgroundComponent;
}(nested_option_2.NestedOption));
exports.DxoBackgroundComponent = DxoBackgroundComponent;
var DxoBackgroundModule = (function () {
    function DxoBackgroundModule() {
    }
    DxoBackgroundModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoBackgroundComponent
                    ],
                    exports: [
                        DxoBackgroundComponent
                    ],
                },] },
    ];
    return DxoBackgroundModule;
}());
exports.DxoBackgroundModule = DxoBackgroundModule;
//# sourceMappingURL=background.js.map
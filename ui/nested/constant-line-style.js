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
var DxoConstantLineStyleComponent = (function (_super) {
    __extends(DxoConstantLineStyleComponent, _super);
    function DxoConstantLineStyleComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoConstantLineStyleComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoConstantLineStyleComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoConstantLineStyleComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoConstantLineStyleComponent.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoConstantLineStyleComponent.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoConstantLineStyleComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoConstantLineStyleComponent.prototype, "_optionPath", {
        get: function () {
            return 'constantLineStyle';
        },
        enumerable: true,
        configurable: true
    });
    DxoConstantLineStyleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-constant-line-style',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoConstantLineStyleComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoConstantLineStyleComponent.propDecorators = {
        "color": [{ type: core_1.Input },],
        "dashStyle": [{ type: core_1.Input },],
        "label": [{ type: core_1.Input },],
        "paddingLeftRight": [{ type: core_1.Input },],
        "paddingTopBottom": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
    };
    return DxoConstantLineStyleComponent;
}(nested_option_2.NestedOption));
exports.DxoConstantLineStyleComponent = DxoConstantLineStyleComponent;
var DxoConstantLineStyleModule = (function () {
    function DxoConstantLineStyleModule() {
    }
    DxoConstantLineStyleModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoConstantLineStyleComponent
                    ],
                    exports: [
                        DxoConstantLineStyleComponent
                    ],
                },] },
    ];
    return DxoConstantLineStyleModule;
}());
exports.DxoConstantLineStyleModule = DxoConstantLineStyleModule;
//# sourceMappingURL=constant-line-style.js.map
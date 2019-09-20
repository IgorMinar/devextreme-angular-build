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
var DxoLinkComponent = (function (_super) {
    __extends(DxoLinkComponent, _super);
    function DxoLinkComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoLinkComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "colorMode", {
        get: function () {
            return this._getOption('colorMode');
        },
        set: function (value) {
            this._setOption('colorMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "hoverStyle", {
        get: function () {
            return this._getOption('hoverStyle');
        },
        set: function (value) {
            this._setOption('hoverStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "_optionPath", {
        get: function () {
            return 'link';
        },
        enumerable: true,
        configurable: true
    });
    DxoLinkComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-link',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoLinkComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoLinkComponent.propDecorators = {
        "border": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "colorMode": [{ type: core_1.Input },],
        "hoverStyle": [{ type: core_1.Input },],
        "opacity": [{ type: core_1.Input },],
    };
    return DxoLinkComponent;
}(nested_option_2.NestedOption));
exports.DxoLinkComponent = DxoLinkComponent;
var DxoLinkModule = (function () {
    function DxoLinkModule() {
    }
    DxoLinkModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoLinkComponent
                    ],
                    exports: [
                        DxoLinkComponent
                    ],
                },] },
    ];
    return DxoLinkModule;
}());
exports.DxoLinkModule = DxoLinkModule;
//# sourceMappingURL=link.js.map
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
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoPointComponent = (function (_super) {
    __extends(DxoPointComponent, _super);
    function DxoPointComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoPointComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "hoverMode", {
        get: function () {
            return this._getOption('hoverMode');
        },
        set: function (value) {
            this._setOption('hoverMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "hoverStyle", {
        get: function () {
            return this._getOption('hoverStyle');
        },
        set: function (value) {
            this._setOption('hoverStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "image", {
        get: function () {
            return this._getOption('image');
        },
        set: function (value) {
            this._setOption('image', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "selectionStyle", {
        get: function () {
            return this._getOption('selectionStyle');
        },
        set: function (value) {
            this._setOption('selectionStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "symbol", {
        get: function () {
            return this._getOption('symbol');
        },
        set: function (value) {
            this._setOption('symbol', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPointComponent.prototype, "_optionPath", {
        get: function () {
            return 'point';
        },
        enumerable: true,
        configurable: true
    });
    DxoPointComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-point',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoPointComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoPointComponent.propDecorators = {
        "border": [{ type: Input },],
        "color": [{ type: Input },],
        "hoverMode": [{ type: Input },],
        "hoverStyle": [{ type: Input },],
        "image": [{ type: Input },],
        "selectionMode": [{ type: Input },],
        "selectionStyle": [{ type: Input },],
        "size": [{ type: Input },],
        "symbol": [{ type: Input },],
        "visible": [{ type: Input },],
    };
    return DxoPointComponent;
}(NestedOption));
export { DxoPointComponent };
var DxoPointModule = (function () {
    function DxoPointModule() {
    }
    DxoPointModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoPointComponent
                    ],
                    exports: [
                        DxoPointComponent
                    ],
                },] },
    ];
    return DxoPointModule;
}());
export { DxoPointModule };
//# sourceMappingURL=point.js.map
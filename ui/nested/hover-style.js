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
var DxoHoverStyleComponent = (function (_super) {
    __extends(DxoHoverStyleComponent, _super);
    function DxoHoverStyleComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoHoverStyleComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHoverStyleComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHoverStyleComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHoverStyleComponent.prototype, "hatching", {
        get: function () {
            return this._getOption('hatching');
        },
        set: function (value) {
            this._setOption('hatching', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHoverStyleComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHoverStyleComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHoverStyleComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHoverStyleComponent.prototype, "_optionPath", {
        get: function () {
            return 'hoverStyle';
        },
        enumerable: true,
        configurable: true
    });
    DxoHoverStyleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-hover-style',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoHoverStyleComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoHoverStyleComponent.propDecorators = {
        "border": [{ type: Input },],
        "color": [{ type: Input },],
        "dashStyle": [{ type: Input },],
        "hatching": [{ type: Input },],
        "width": [{ type: Input },],
        "size": [{ type: Input },],
        "opacity": [{ type: Input },],
    };
    return DxoHoverStyleComponent;
}(NestedOption));
export { DxoHoverStyleComponent };
var DxoHoverStyleModule = (function () {
    function DxoHoverStyleModule() {
    }
    DxoHoverStyleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoHoverStyleComponent
                    ],
                    exports: [
                        DxoHoverStyleComponent
                    ],
                },] },
    ];
    return DxoHoverStyleModule;
}());
export { DxoHoverStyleModule };
//# sourceMappingURL=hover-style.js.map
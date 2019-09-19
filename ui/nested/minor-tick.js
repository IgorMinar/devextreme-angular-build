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
var DxoMinorTickComponent = (function (_super) {
    __extends(DxoMinorTickComponent, _super);
    function DxoMinorTickComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMinorTickComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "length", {
        get: function () {
            return this._getOption('length');
        },
        set: function (value) {
            this._setOption('length', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "shift", {
        get: function () {
            return this._getOption('shift');
        },
        set: function (value) {
            this._setOption('shift', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "_optionPath", {
        get: function () {
            return 'minorTick';
        },
        enumerable: true,
        configurable: true
    });
    DxoMinorTickComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-minor-tick',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoMinorTickComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoMinorTickComponent.propDecorators = {
        "color": [{ type: Input },],
        "length": [{ type: Input },],
        "opacity": [{ type: Input },],
        "shift": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
    };
    return DxoMinorTickComponent;
}(NestedOption));
export { DxoMinorTickComponent };
var DxoMinorTickModule = (function () {
    function DxoMinorTickModule() {
    }
    DxoMinorTickModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoMinorTickComponent
                    ],
                    exports: [
                        DxoMinorTickComponent
                    ],
                },] },
    ];
    return DxoMinorTickModule;
}());
export { DxoMinorTickModule };
//# sourceMappingURL=minor-tick.js.map
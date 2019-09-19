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
var DxoBreakStyleComponent = (function (_super) {
    __extends(DxoBreakStyleComponent, _super);
    function DxoBreakStyleComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoBreakStyleComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBreakStyleComponent.prototype, "line", {
        get: function () {
            return this._getOption('line');
        },
        set: function (value) {
            this._setOption('line', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBreakStyleComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBreakStyleComponent.prototype, "_optionPath", {
        get: function () {
            return 'breakStyle';
        },
        enumerable: true,
        configurable: true
    });
    DxoBreakStyleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-break-style',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoBreakStyleComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoBreakStyleComponent.propDecorators = {
        "color": [{ type: Input },],
        "line": [{ type: Input },],
        "width": [{ type: Input },],
    };
    return DxoBreakStyleComponent;
}(NestedOption));
export { DxoBreakStyleComponent };
var DxoBreakStyleModule = (function () {
    function DxoBreakStyleModule() {
    }
    DxoBreakStyleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoBreakStyleComponent
                    ],
                    exports: [
                        DxoBreakStyleComponent
                    ],
                },] },
    ];
    return DxoBreakStyleModule;
}());
export { DxoBreakStyleModule };
//# sourceMappingURL=break-style.js.map
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
var DxoMinorGridComponent = (function (_super) {
    __extends(DxoMinorGridComponent, _super);
    function DxoMinorGridComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMinorGridComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorGridComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorGridComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorGridComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorGridComponent.prototype, "_optionPath", {
        get: function () {
            return 'minorGrid';
        },
        enumerable: true,
        configurable: true
    });
    DxoMinorGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-minor-grid',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoMinorGridComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoMinorGridComponent.propDecorators = {
        "color": [{ type: Input },],
        "opacity": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
    };
    return DxoMinorGridComponent;
}(NestedOption));
export { DxoMinorGridComponent };
var DxoMinorGridModule = (function () {
    function DxoMinorGridModule() {
    }
    DxoMinorGridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoMinorGridComponent
                    ],
                    exports: [
                        DxoMinorGridComponent
                    ],
                },] },
    ];
    return DxoMinorGridModule;
}());
export { DxoMinorGridModule };
//# sourceMappingURL=minor-grid.js.map
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
var DxoGeometryComponent = (function (_super) {
    __extends(DxoGeometryComponent, _super);
    function DxoGeometryComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoGeometryComponent.prototype, "endAngle", {
        get: function () {
            return this._getOption('endAngle');
        },
        set: function (value) {
            this._setOption('endAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGeometryComponent.prototype, "startAngle", {
        get: function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGeometryComponent.prototype, "orientation", {
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGeometryComponent.prototype, "_optionPath", {
        get: function () {
            return 'geometry';
        },
        enumerable: true,
        configurable: true
    });
    DxoGeometryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-geometry',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoGeometryComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoGeometryComponent.propDecorators = {
        "endAngle": [{ type: Input },],
        "startAngle": [{ type: Input },],
        "orientation": [{ type: Input },],
    };
    return DxoGeometryComponent;
}(NestedOption));
export { DxoGeometryComponent };
var DxoGeometryModule = (function () {
    function DxoGeometryModule() {
    }
    DxoGeometryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoGeometryComponent
                    ],
                    exports: [
                        DxoGeometryComponent
                    ],
                },] },
    ];
    return DxoGeometryModule;
}());
export { DxoGeometryModule };
//# sourceMappingURL=geometry.js.map
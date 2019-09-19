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
var DxoCollisionComponent = (function (_super) {
    __extends(DxoCollisionComponent, _super);
    function DxoCollisionComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCollisionComponent.prototype, "x", {
        get: function () {
            return this._getOption('x');
        },
        set: function (value) {
            this._setOption('x', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCollisionComponent.prototype, "y", {
        get: function () {
            return this._getOption('y');
        },
        set: function (value) {
            this._setOption('y', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCollisionComponent.prototype, "_optionPath", {
        get: function () {
            return 'collision';
        },
        enumerable: true,
        configurable: true
    });
    DxoCollisionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-collision',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoCollisionComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoCollisionComponent.propDecorators = {
        "x": [{ type: Input },],
        "y": [{ type: Input },],
    };
    return DxoCollisionComponent;
}(NestedOption));
export { DxoCollisionComponent };
var DxoCollisionModule = (function () {
    function DxoCollisionModule() {
    }
    DxoCollisionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoCollisionComponent
                    ],
                    exports: [
                        DxoCollisionComponent
                    ],
                },] },
    ];
    return DxoCollisionModule;
}());
export { DxoCollisionModule };
//# sourceMappingURL=collision.js.map
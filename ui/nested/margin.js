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
var DxoMarginComponent = (function (_super) {
    __extends(DxoMarginComponent, _super);
    function DxoMarginComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMarginComponent.prototype, "bottom", {
        get: function () {
            return this._getOption('bottom');
        },
        set: function (value) {
            this._setOption('bottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarginComponent.prototype, "left", {
        get: function () {
            return this._getOption('left');
        },
        set: function (value) {
            this._setOption('left', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarginComponent.prototype, "right", {
        get: function () {
            return this._getOption('right');
        },
        set: function (value) {
            this._setOption('right', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarginComponent.prototype, "top", {
        get: function () {
            return this._getOption('top');
        },
        set: function (value) {
            this._setOption('top', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarginComponent.prototype, "_optionPath", {
        get: function () {
            return 'margin';
        },
        enumerable: true,
        configurable: true
    });
    DxoMarginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-margin',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoMarginComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoMarginComponent.propDecorators = {
        "bottom": [{ type: Input },],
        "left": [{ type: Input },],
        "right": [{ type: Input },],
        "top": [{ type: Input },],
    };
    return DxoMarginComponent;
}(NestedOption));
export { DxoMarginComponent };
var DxoMarginModule = (function () {
    function DxoMarginModule() {
    }
    DxoMarginModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoMarginComponent
                    ],
                    exports: [
                        DxoMarginComponent
                    ],
                },] },
    ];
    return DxoMarginModule;
}());
export { DxoMarginModule };
//# sourceMappingURL=margin.js.map
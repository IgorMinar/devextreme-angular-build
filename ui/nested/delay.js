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
var DxoDelayComponent = (function (_super) {
    __extends(DxoDelayComponent, _super);
    function DxoDelayComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoDelayComponent.prototype, "hide", {
        get: function () {
            return this._getOption('hide');
        },
        set: function (value) {
            this._setOption('hide', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDelayComponent.prototype, "show", {
        get: function () {
            return this._getOption('show');
        },
        set: function (value) {
            this._setOption('show', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDelayComponent.prototype, "_optionPath", {
        get: function () {
            return 'delay';
        },
        enumerable: true,
        configurable: true
    });
    DxoDelayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-delay',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoDelayComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoDelayComponent.propDecorators = {
        "hide": [{ type: Input },],
        "show": [{ type: Input },],
    };
    return DxoDelayComponent;
}(NestedOption));
export { DxoDelayComponent };
var DxoDelayModule = (function () {
    function DxoDelayModule() {
    }
    DxoDelayModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoDelayComponent
                    ],
                    exports: [
                        DxoDelayComponent
                    ],
                },] },
    ];
    return DxoDelayModule;
}());
export { DxoDelayModule };
//# sourceMappingURL=delay.js.map
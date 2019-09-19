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
var DxoUrlComponent = (function (_super) {
    __extends(DxoUrlComponent, _super);
    function DxoUrlComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoUrlComponent.prototype, "rangeMaxPoint", {
        get: function () {
            return this._getOption('rangeMaxPoint');
        },
        set: function (value) {
            this._setOption('rangeMaxPoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoUrlComponent.prototype, "rangeMinPoint", {
        get: function () {
            return this._getOption('rangeMinPoint');
        },
        set: function (value) {
            this._setOption('rangeMinPoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoUrlComponent.prototype, "_optionPath", {
        get: function () {
            return 'url';
        },
        enumerable: true,
        configurable: true
    });
    DxoUrlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-url',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoUrlComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoUrlComponent.propDecorators = {
        "rangeMaxPoint": [{ type: Input },],
        "rangeMinPoint": [{ type: Input },],
    };
    return DxoUrlComponent;
}(NestedOption));
export { DxoUrlComponent };
var DxoUrlModule = (function () {
    function DxoUrlModule() {
    }
    DxoUrlModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoUrlComponent
                    ],
                    exports: [
                        DxoUrlComponent
                    ],
                },] },
    ];
    return DxoUrlModule;
}());
export { DxoUrlModule };
//# sourceMappingURL=url.js.map
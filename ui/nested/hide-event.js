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
var DxoHideEventComponent = (function (_super) {
    __extends(DxoHideEventComponent, _super);
    function DxoHideEventComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoHideEventComponent.prototype, "delay", {
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHideEventComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHideEventComponent.prototype, "_optionPath", {
        get: function () {
            return 'hideEvent';
        },
        enumerable: true,
        configurable: true
    });
    DxoHideEventComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-hide-event',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoHideEventComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoHideEventComponent.propDecorators = {
        "delay": [{ type: Input },],
        "name": [{ type: Input },],
    };
    return DxoHideEventComponent;
}(NestedOption));
export { DxoHideEventComponent };
var DxoHideEventModule = (function () {
    function DxoHideEventModule() {
    }
    DxoHideEventModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoHideEventComponent
                    ],
                    exports: [
                        DxoHideEventComponent
                    ],
                },] },
    ];
    return DxoHideEventModule;
}());
export { DxoHideEventModule };
//# sourceMappingURL=hide-event.js.map
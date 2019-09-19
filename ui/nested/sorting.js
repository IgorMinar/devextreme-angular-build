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
var DxoSortingComponent = (function (_super) {
    __extends(DxoSortingComponent, _super);
    function DxoSortingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSortingComponent.prototype, "ascendingText", {
        get: function () {
            return this._getOption('ascendingText');
        },
        set: function (value) {
            this._setOption('ascendingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "clearText", {
        get: function () {
            return this._getOption('clearText');
        },
        set: function (value) {
            this._setOption('clearText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "descendingText", {
        get: function () {
            return this._getOption('descendingText');
        },
        set: function (value) {
            this._setOption('descendingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "_optionPath", {
        get: function () {
            return 'sorting';
        },
        enumerable: true,
        configurable: true
    });
    DxoSortingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-sorting',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSortingComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoSortingComponent.propDecorators = {
        "ascendingText": [{ type: Input },],
        "clearText": [{ type: Input },],
        "descendingText": [{ type: Input },],
        "mode": [{ type: Input },],
    };
    return DxoSortingComponent;
}(NestedOption));
export { DxoSortingComponent };
var DxoSortingModule = (function () {
    function DxoSortingModule() {
    }
    DxoSortingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoSortingComponent
                    ],
                    exports: [
                        DxoSortingComponent
                    ],
                },] },
    ];
    return DxoSortingModule;
}());
export { DxoSortingModule };
//# sourceMappingURL=sorting.js.map
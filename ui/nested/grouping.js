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
var DxoGroupingComponent = (function (_super) {
    __extends(DxoGroupingComponent, _super);
    function DxoGroupingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoGroupingComponent.prototype, "allowCollapsing", {
        get: function () {
            return this._getOption('allowCollapsing');
        },
        set: function (value) {
            this._setOption('allowCollapsing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "autoExpandAll", {
        get: function () {
            return this._getOption('autoExpandAll');
        },
        set: function (value) {
            this._setOption('autoExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "contextMenuEnabled", {
        get: function () {
            return this._getOption('contextMenuEnabled');
        },
        set: function (value) {
            this._setOption('contextMenuEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "expandMode", {
        get: function () {
            return this._getOption('expandMode');
        },
        set: function (value) {
            this._setOption('expandMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupingComponent.prototype, "_optionPath", {
        get: function () {
            return 'grouping';
        },
        enumerable: true,
        configurable: true
    });
    DxoGroupingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-grouping',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoGroupingComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoGroupingComponent.propDecorators = {
        "allowCollapsing": [{ type: Input },],
        "autoExpandAll": [{ type: Input },],
        "contextMenuEnabled": [{ type: Input },],
        "expandMode": [{ type: Input },],
        "texts": [{ type: Input },],
    };
    return DxoGroupingComponent;
}(NestedOption));
export { DxoGroupingComponent };
var DxoGroupingModule = (function () {
    function DxoGroupingModule() {
    }
    DxoGroupingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoGroupingComponent
                    ],
                    exports: [
                        DxoGroupingComponent
                    ],
                },] },
    ];
    return DxoGroupingModule;
}());
export { DxoGroupingModule };
//# sourceMappingURL=grouping.js.map
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
var DxoSmallValuesGroupingComponent = (function (_super) {
    __extends(DxoSmallValuesGroupingComponent, _super);
    function DxoSmallValuesGroupingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "groupName", {
        get: function () {
            return this._getOption('groupName');
        },
        set: function (value) {
            this._setOption('groupName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "threshold", {
        get: function () {
            return this._getOption('threshold');
        },
        set: function (value) {
            this._setOption('threshold', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "topCount", {
        get: function () {
            return this._getOption('topCount');
        },
        set: function (value) {
            this._setOption('topCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "_optionPath", {
        get: function () {
            return 'smallValuesGrouping';
        },
        enumerable: true,
        configurable: true
    });
    DxoSmallValuesGroupingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-small-values-grouping',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSmallValuesGroupingComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoSmallValuesGroupingComponent.propDecorators = {
        "groupName": [{ type: Input },],
        "mode": [{ type: Input },],
        "threshold": [{ type: Input },],
        "topCount": [{ type: Input },],
    };
    return DxoSmallValuesGroupingComponent;
}(NestedOption));
export { DxoSmallValuesGroupingComponent };
var DxoSmallValuesGroupingModule = (function () {
    function DxoSmallValuesGroupingModule() {
    }
    DxoSmallValuesGroupingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoSmallValuesGroupingComponent
                    ],
                    exports: [
                        DxoSmallValuesGroupingComponent
                    ],
                },] },
    ];
    return DxoSmallValuesGroupingModule;
}());
export { DxoSmallValuesGroupingModule };
//# sourceMappingURL=small-values-grouping.js.map
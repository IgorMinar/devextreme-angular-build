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
var DxoFilterRowComponent = (function (_super) {
    __extends(DxoFilterRowComponent, _super);
    function DxoFilterRowComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterRowComponent.prototype, "applyFilter", {
        get: function () {
            return this._getOption('applyFilter');
        },
        set: function (value) {
            this._setOption('applyFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "applyFilterText", {
        get: function () {
            return this._getOption('applyFilterText');
        },
        set: function (value) {
            this._setOption('applyFilterText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "betweenEndText", {
        get: function () {
            return this._getOption('betweenEndText');
        },
        set: function (value) {
            this._setOption('betweenEndText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "betweenStartText", {
        get: function () {
            return this._getOption('betweenStartText');
        },
        set: function (value) {
            this._setOption('betweenStartText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "operationDescriptions", {
        get: function () {
            return this._getOption('operationDescriptions');
        },
        set: function (value) {
            this._setOption('operationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "resetOperationText", {
        get: function () {
            return this._getOption('resetOperationText');
        },
        set: function (value) {
            this._setOption('resetOperationText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "showAllText", {
        get: function () {
            return this._getOption('showAllText');
        },
        set: function (value) {
            this._setOption('showAllText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "showOperationChooser", {
        get: function () {
            return this._getOption('showOperationChooser');
        },
        set: function (value) {
            this._setOption('showOperationChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterRow';
        },
        enumerable: true,
        configurable: true
    });
    DxoFilterRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-filter-row',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoFilterRowComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoFilterRowComponent.propDecorators = {
        "applyFilter": [{ type: Input },],
        "applyFilterText": [{ type: Input },],
        "betweenEndText": [{ type: Input },],
        "betweenStartText": [{ type: Input },],
        "operationDescriptions": [{ type: Input },],
        "resetOperationText": [{ type: Input },],
        "showAllText": [{ type: Input },],
        "showOperationChooser": [{ type: Input },],
        "visible": [{ type: Input },],
    };
    return DxoFilterRowComponent;
}(NestedOption));
export { DxoFilterRowComponent };
var DxoFilterRowModule = (function () {
    function DxoFilterRowModule() {
    }
    DxoFilterRowModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFilterRowComponent
                    ],
                    exports: [
                        DxoFilterRowComponent
                    ],
                },] },
    ];
    return DxoFilterRowModule;
}());
export { DxoFilterRowModule };
//# sourceMappingURL=filter-row.js.map
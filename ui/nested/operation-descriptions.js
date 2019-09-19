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
var DxoOperationDescriptionsComponent = (function (_super) {
    __extends(DxoOperationDescriptionsComponent, _super);
    function DxoOperationDescriptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "between", {
        get: function () {
            return this._getOption('between');
        },
        set: function (value) {
            this._setOption('between', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "contains", {
        get: function () {
            return this._getOption('contains');
        },
        set: function (value) {
            this._setOption('contains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "endsWith", {
        get: function () {
            return this._getOption('endsWith');
        },
        set: function (value) {
            this._setOption('endsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "equal", {
        get: function () {
            return this._getOption('equal');
        },
        set: function (value) {
            this._setOption('equal', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "greaterThan", {
        get: function () {
            return this._getOption('greaterThan');
        },
        set: function (value) {
            this._setOption('greaterThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "greaterThanOrEqual", {
        get: function () {
            return this._getOption('greaterThanOrEqual');
        },
        set: function (value) {
            this._setOption('greaterThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "lessThan", {
        get: function () {
            return this._getOption('lessThan');
        },
        set: function (value) {
            this._setOption('lessThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "lessThanOrEqual", {
        get: function () {
            return this._getOption('lessThanOrEqual');
        },
        set: function (value) {
            this._setOption('lessThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "notContains", {
        get: function () {
            return this._getOption('notContains');
        },
        set: function (value) {
            this._setOption('notContains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "notEqual", {
        get: function () {
            return this._getOption('notEqual');
        },
        set: function (value) {
            this._setOption('notEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "startsWith", {
        get: function () {
            return this._getOption('startsWith');
        },
        set: function (value) {
            this._setOption('startsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'operationDescriptions';
        },
        enumerable: true,
        configurable: true
    });
    DxoOperationDescriptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-operation-descriptions',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoOperationDescriptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoOperationDescriptionsComponent.propDecorators = {
        "between": [{ type: Input },],
        "contains": [{ type: Input },],
        "endsWith": [{ type: Input },],
        "equal": [{ type: Input },],
        "greaterThan": [{ type: Input },],
        "greaterThanOrEqual": [{ type: Input },],
        "lessThan": [{ type: Input },],
        "lessThanOrEqual": [{ type: Input },],
        "notContains": [{ type: Input },],
        "notEqual": [{ type: Input },],
        "startsWith": [{ type: Input },],
    };
    return DxoOperationDescriptionsComponent;
}(NestedOption));
export { DxoOperationDescriptionsComponent };
var DxoOperationDescriptionsModule = (function () {
    function DxoOperationDescriptionsModule() {
    }
    DxoOperationDescriptionsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoOperationDescriptionsComponent
                    ],
                    exports: [
                        DxoOperationDescriptionsComponent
                    ],
                },] },
    ];
    return DxoOperationDescriptionsModule;
}());
export { DxoOperationDescriptionsModule };
//# sourceMappingURL=operation-descriptions.js.map
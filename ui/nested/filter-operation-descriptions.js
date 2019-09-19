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
var DxoFilterOperationDescriptionsComponent = (function (_super) {
    __extends(DxoFilterOperationDescriptionsComponent, _super);
    function DxoFilterOperationDescriptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "between", {
        get: function () {
            return this._getOption('between');
        },
        set: function (value) {
            this._setOption('between', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "contains", {
        get: function () {
            return this._getOption('contains');
        },
        set: function (value) {
            this._setOption('contains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "endsWith", {
        get: function () {
            return this._getOption('endsWith');
        },
        set: function (value) {
            this._setOption('endsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "equal", {
        get: function () {
            return this._getOption('equal');
        },
        set: function (value) {
            this._setOption('equal', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "greaterThan", {
        get: function () {
            return this._getOption('greaterThan');
        },
        set: function (value) {
            this._setOption('greaterThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "greaterThanOrEqual", {
        get: function () {
            return this._getOption('greaterThanOrEqual');
        },
        set: function (value) {
            this._setOption('greaterThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "isBlank", {
        get: function () {
            return this._getOption('isBlank');
        },
        set: function (value) {
            this._setOption('isBlank', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "isNotBlank", {
        get: function () {
            return this._getOption('isNotBlank');
        },
        set: function (value) {
            this._setOption('isNotBlank', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "lessThan", {
        get: function () {
            return this._getOption('lessThan');
        },
        set: function (value) {
            this._setOption('lessThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "lessThanOrEqual", {
        get: function () {
            return this._getOption('lessThanOrEqual');
        },
        set: function (value) {
            this._setOption('lessThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "notContains", {
        get: function () {
            return this._getOption('notContains');
        },
        set: function (value) {
            this._setOption('notContains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "notEqual", {
        get: function () {
            return this._getOption('notEqual');
        },
        set: function (value) {
            this._setOption('notEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "startsWith", {
        get: function () {
            return this._getOption('startsWith');
        },
        set: function (value) {
            this._setOption('startsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterOperationDescriptions';
        },
        enumerable: true,
        configurable: true
    });
    DxoFilterOperationDescriptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-filter-operation-descriptions',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoFilterOperationDescriptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoFilterOperationDescriptionsComponent.propDecorators = {
        "between": [{ type: Input },],
        "contains": [{ type: Input },],
        "endsWith": [{ type: Input },],
        "equal": [{ type: Input },],
        "greaterThan": [{ type: Input },],
        "greaterThanOrEqual": [{ type: Input },],
        "isBlank": [{ type: Input },],
        "isNotBlank": [{ type: Input },],
        "lessThan": [{ type: Input },],
        "lessThanOrEqual": [{ type: Input },],
        "notContains": [{ type: Input },],
        "notEqual": [{ type: Input },],
        "startsWith": [{ type: Input },],
    };
    return DxoFilterOperationDescriptionsComponent;
}(NestedOption));
export { DxoFilterOperationDescriptionsComponent };
var DxoFilterOperationDescriptionsModule = (function () {
    function DxoFilterOperationDescriptionsModule() {
    }
    DxoFilterOperationDescriptionsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFilterOperationDescriptionsComponent
                    ],
                    exports: [
                        DxoFilterOperationDescriptionsComponent
                    ],
                },] },
    ];
    return DxoFilterOperationDescriptionsModule;
}());
export { DxoFilterOperationDescriptionsModule };
//# sourceMappingURL=filter-operation-descriptions.js.map
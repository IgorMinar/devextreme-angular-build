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
import { CollectionNestedOption } from '../../core/nested-option';
var DxiValidationRuleComponent = (function (_super) {
    __extends(DxiValidationRuleComponent, _super);
    function DxiValidationRuleComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiValidationRuleComponent.prototype, "message", {
        get: function () {
            return this._getOption('message');
        },
        set: function (value) {
            this._setOption('message', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "trim", {
        get: function () {
            return this._getOption('trim');
        },
        set: function (value) {
            this._setOption('trim', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "ignoreEmptyValue", {
        get: function () {
            return this._getOption('ignoreEmptyValue');
        },
        set: function (value) {
            this._setOption('ignoreEmptyValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "reevaluate", {
        get: function () {
            return this._getOption('reevaluate');
        },
        set: function (value) {
            this._setOption('reevaluate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "validationCallback", {
        get: function () {
            return this._getOption('validationCallback');
        },
        set: function (value) {
            this._setOption('validationCallback', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "comparisonTarget", {
        get: function () {
            return this._getOption('comparisonTarget');
        },
        set: function (value) {
            this._setOption('comparisonTarget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "comparisonType", {
        get: function () {
            return this._getOption('comparisonType');
        },
        set: function (value) {
            this._setOption('comparisonType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "pattern", {
        get: function () {
            return this._getOption('pattern');
        },
        set: function (value) {
            this._setOption('pattern', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValidationRuleComponent.prototype, "_optionPath", {
        get: function () {
            return 'validationRules';
        },
        enumerable: true,
        configurable: true
    });
    DxiValidationRuleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-validation-rule',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiValidationRuleComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiValidationRuleComponent.propDecorators = {
        "message": [{ type: Input },],
        "trim": [{ type: Input },],
        "type": [{ type: Input },],
        "ignoreEmptyValue": [{ type: Input },],
        "max": [{ type: Input },],
        "min": [{ type: Input },],
        "reevaluate": [{ type: Input },],
        "validationCallback": [{ type: Input },],
        "comparisonTarget": [{ type: Input },],
        "comparisonType": [{ type: Input },],
        "pattern": [{ type: Input },],
    };
    return DxiValidationRuleComponent;
}(CollectionNestedOption));
export { DxiValidationRuleComponent };
var DxiValidationRuleModule = (function () {
    function DxiValidationRuleModule() {
    }
    DxiValidationRuleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiValidationRuleComponent
                    ],
                    exports: [
                        DxiValidationRuleComponent
                    ],
                },] },
    ];
    return DxiValidationRuleModule;
}());
export { DxiValidationRuleModule };
//# sourceMappingURL=validation-rule-dxi.js.map
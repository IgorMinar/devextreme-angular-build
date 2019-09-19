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
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiGroupItemComponent } from './group-item-dxi';
import { DxiTotalItemComponent } from './total-item-dxi';
var DxoSummaryComponent = (function (_super) {
    __extends(DxoSummaryComponent, _super);
    function DxoSummaryComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSummaryComponent.prototype, "calculateCustomSummary", {
        get: function () {
            return this._getOption('calculateCustomSummary');
        },
        set: function (value) {
            this._setOption('calculateCustomSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "groupItems", {
        get: function () {
            return this._getOption('groupItems');
        },
        set: function (value) {
            this._setOption('groupItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "recalculateWhileEditing", {
        get: function () {
            return this._getOption('recalculateWhileEditing');
        },
        set: function (value) {
            this._setOption('recalculateWhileEditing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "skipEmptyValues", {
        get: function () {
            return this._getOption('skipEmptyValues');
        },
        set: function (value) {
            this._setOption('skipEmptyValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "totalItems", {
        get: function () {
            return this._getOption('totalItems');
        },
        set: function (value) {
            this._setOption('totalItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "_optionPath", {
        get: function () {
            return 'summary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "groupItemsChildren", {
        get: function () {
            return this._getOption('groupItems');
        },
        set: function (value) {
            this.setChildren('groupItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "totalItemsChildren", {
        get: function () {
            return this._getOption('totalItems');
        },
        set: function (value) {
            this.setChildren('totalItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-summary',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSummaryComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoSummaryComponent.propDecorators = {
        "calculateCustomSummary": [{ type: Input },],
        "groupItems": [{ type: Input },],
        "recalculateWhileEditing": [{ type: Input },],
        "skipEmptyValues": [{ type: Input },],
        "texts": [{ type: Input },],
        "totalItems": [{ type: Input },],
        "groupItemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiGroupItemComponent; }),] },],
        "totalItemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiTotalItemComponent; }),] },],
    };
    return DxoSummaryComponent;
}(NestedOption));
export { DxoSummaryComponent };
var DxoSummaryModule = (function () {
    function DxoSummaryModule() {
    }
    DxoSummaryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoSummaryComponent
                    ],
                    exports: [
                        DxoSummaryComponent
                    ],
                },] },
    ];
    return DxoSummaryModule;
}());
export { DxoSummaryModule };
//# sourceMappingURL=summary.js.map
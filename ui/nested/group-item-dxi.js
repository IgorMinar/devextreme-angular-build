"use strict";
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
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nested_option_1 = require("../../core/nested-option");
var nested_option_2 = require("../../core/nested-option");
var DxiGroupItemComponent = (function (_super) {
    __extends(DxiGroupItemComponent, _super);
    function DxiGroupItemComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiGroupItemComponent.prototype, "alignByColumn", {
        get: function () {
            return this._getOption('alignByColumn');
        },
        set: function (value) {
            this._setOption('alignByColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "column", {
        get: function () {
            return this._getOption('column');
        },
        set: function (value) {
            this._setOption('column', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "displayFormat", {
        get: function () {
            return this._getOption('displayFormat');
        },
        set: function (value) {
            this._setOption('displayFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "showInColumn", {
        get: function () {
            return this._getOption('showInColumn');
        },
        set: function (value) {
            this._setOption('showInColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "showInGroupFooter", {
        get: function () {
            return this._getOption('showInGroupFooter');
        },
        set: function (value) {
            this._setOption('showInGroupFooter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "skipEmptyValues", {
        get: function () {
            return this._getOption('skipEmptyValues');
        },
        set: function (value) {
            this._setOption('skipEmptyValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "summaryType", {
        get: function () {
            return this._getOption('summaryType');
        },
        set: function (value) {
            this._setOption('summaryType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "valueFormat", {
        get: function () {
            return this._getOption('valueFormat');
        },
        set: function (value) {
            this._setOption('valueFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'groupItems';
        },
        enumerable: true,
        configurable: true
    });
    DxiGroupItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-group-item',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiGroupItemComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiGroupItemComponent.propDecorators = {
        "alignByColumn": [{ type: core_1.Input },],
        "column": [{ type: core_1.Input },],
        "customizeText": [{ type: core_1.Input },],
        "displayFormat": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "showInColumn": [{ type: core_1.Input },],
        "showInGroupFooter": [{ type: core_1.Input },],
        "skipEmptyValues": [{ type: core_1.Input },],
        "summaryType": [{ type: core_1.Input },],
        "valueFormat": [{ type: core_1.Input },],
    };
    return DxiGroupItemComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiGroupItemComponent = DxiGroupItemComponent;
var DxiGroupItemModule = (function () {
    function DxiGroupItemModule() {
    }
    DxiGroupItemModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiGroupItemComponent
                    ],
                    exports: [
                        DxiGroupItemComponent
                    ],
                },] },
    ];
    return DxiGroupItemModule;
}());
exports.DxiGroupItemModule = DxiGroupItemModule;
//# sourceMappingURL=group-item-dxi.js.map
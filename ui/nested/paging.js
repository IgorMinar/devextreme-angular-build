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
var DxoPagingComponent = (function (_super) {
    __extends(DxoPagingComponent, _super);
    function DxoPagingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'pageIndexChange' },
            { emit: 'pageSizeChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoPagingComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPagingComponent.prototype, "pageIndex", {
        get: function () {
            return this._getOption('pageIndex');
        },
        set: function (value) {
            this._setOption('pageIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPagingComponent.prototype, "pageSize", {
        get: function () {
            return this._getOption('pageSize');
        },
        set: function (value) {
            this._setOption('pageSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPagingComponent.prototype, "_optionPath", {
        get: function () {
            return 'paging';
        },
        enumerable: true,
        configurable: true
    });
    DxoPagingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-paging',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoPagingComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoPagingComponent.propDecorators = {
        "enabled": [{ type: core_1.Input },],
        "pageIndex": [{ type: core_1.Input },],
        "pageSize": [{ type: core_1.Input },],
        "pageIndexChange": [{ type: core_1.Output },],
        "pageSizeChange": [{ type: core_1.Output },],
    };
    return DxoPagingComponent;
}(nested_option_2.NestedOption));
exports.DxoPagingComponent = DxoPagingComponent;
var DxoPagingModule = (function () {
    function DxoPagingModule() {
    }
    DxoPagingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoPagingComponent
                    ],
                    exports: [
                        DxoPagingComponent
                    ],
                },] },
    ];
    return DxoPagingModule;
}());
exports.DxoPagingModule = DxoPagingModule;
//# sourceMappingURL=paging.js.map
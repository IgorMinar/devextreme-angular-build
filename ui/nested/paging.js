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
import { Component, NgModule, Host, SkipSelf, Input, Output, EventEmitter } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
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
        { type: Component, args: [{
                    selector: 'dxo-paging',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoPagingComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoPagingComponent.propDecorators = {
        "enabled": [{ type: Input },],
        "pageIndex": [{ type: Input },],
        "pageSize": [{ type: Input },],
        "pageIndexChange": [{ type: Output },],
        "pageSizeChange": [{ type: Output },],
    };
    return DxoPagingComponent;
}(NestedOption));
export { DxoPagingComponent };
var DxoPagingModule = (function () {
    function DxoPagingModule() {
    }
    DxoPagingModule.decorators = [
        { type: NgModule, args: [{
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
export { DxoPagingModule };
//# sourceMappingURL=paging.js.map
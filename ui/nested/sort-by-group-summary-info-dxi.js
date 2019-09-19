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
var DxiSortByGroupSummaryInfoComponent = (function (_super) {
    __extends(DxiSortByGroupSummaryInfoComponent, _super);
    function DxiSortByGroupSummaryInfoComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "groupColumn", {
        get: function () {
            return this._getOption('groupColumn');
        },
        set: function (value) {
            this._setOption('groupColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "sortOrder", {
        get: function () {
            return this._getOption('sortOrder');
        },
        set: function (value) {
            this._setOption('sortOrder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "summaryItem", {
        get: function () {
            return this._getOption('summaryItem');
        },
        set: function (value) {
            this._setOption('summaryItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "_optionPath", {
        get: function () {
            return 'sortByGroupSummaryInfo';
        },
        enumerable: true,
        configurable: true
    });
    DxiSortByGroupSummaryInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-sort-by-group-summary-info',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiSortByGroupSummaryInfoComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiSortByGroupSummaryInfoComponent.propDecorators = {
        "groupColumn": [{ type: Input },],
        "sortOrder": [{ type: Input },],
        "summaryItem": [{ type: Input },],
    };
    return DxiSortByGroupSummaryInfoComponent;
}(CollectionNestedOption));
export { DxiSortByGroupSummaryInfoComponent };
var DxiSortByGroupSummaryInfoModule = (function () {
    function DxiSortByGroupSummaryInfoModule() {
    }
    DxiSortByGroupSummaryInfoModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiSortByGroupSummaryInfoComponent
                    ],
                    exports: [
                        DxiSortByGroupSummaryInfoComponent
                    ],
                },] },
    ];
    return DxiSortByGroupSummaryInfoModule;
}());
export { DxiSortByGroupSummaryInfoModule };
//# sourceMappingURL=sort-by-group-summary-info-dxi.js.map
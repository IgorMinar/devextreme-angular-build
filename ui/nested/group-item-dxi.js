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
        { type: Component, args: [{
                    selector: 'dxi-group-item',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiGroupItemComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiGroupItemComponent.propDecorators = {
        "alignByColumn": [{ type: Input },],
        "column": [{ type: Input },],
        "customizeText": [{ type: Input },],
        "displayFormat": [{ type: Input },],
        "name": [{ type: Input },],
        "showInColumn": [{ type: Input },],
        "showInGroupFooter": [{ type: Input },],
        "skipEmptyValues": [{ type: Input },],
        "summaryType": [{ type: Input },],
        "valueFormat": [{ type: Input },],
    };
    return DxiGroupItemComponent;
}(CollectionNestedOption));
export { DxiGroupItemComponent };
var DxiGroupItemModule = (function () {
    function DxiGroupItemModule() {
    }
    DxiGroupItemModule.decorators = [
        { type: NgModule, args: [{
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
export { DxiGroupItemModule };
//# sourceMappingURL=group-item-dxi.js.map
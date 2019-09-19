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
import { CollectionNestedOption } from '../../../core/nested-option';
var DxiFilterBuilderCustomOperation = (function (_super) {
    __extends(DxiFilterBuilderCustomOperation, _super);
    function DxiFilterBuilderCustomOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxiFilterBuilderCustomOperation.prototype, "calculateFilterExpression", {
        get: function () {
            return this._getOption('calculateFilterExpression');
        },
        set: function (value) {
            this._setOption('calculateFilterExpression', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderCustomOperation.prototype, "caption", {
        get: function () {
            return this._getOption('caption');
        },
        set: function (value) {
            this._setOption('caption', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderCustomOperation.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderCustomOperation.prototype, "dataTypes", {
        get: function () {
            return this._getOption('dataTypes');
        },
        set: function (value) {
            this._setOption('dataTypes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderCustomOperation.prototype, "editorTemplate", {
        get: function () {
            return this._getOption('editorTemplate');
        },
        set: function (value) {
            this._setOption('editorTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderCustomOperation.prototype, "hasValue", {
        get: function () {
            return this._getOption('hasValue');
        },
        set: function (value) {
            this._setOption('hasValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderCustomOperation.prototype, "icon", {
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderCustomOperation.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxiFilterBuilderCustomOperation;
}(CollectionNestedOption));
export { DxiFilterBuilderCustomOperation };
//# sourceMappingURL=filter-builder-custom-operation-dxi.js.map
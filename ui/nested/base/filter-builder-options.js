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
import { NestedOption } from '../../../core/nested-option';
var DxoFilterBuilderOptions = (function (_super) {
    __extends(DxoFilterBuilderOptions, _super);
    function DxoFilterBuilderOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "allowHierarchicalFields", {
        get: function () {
            return this._getOption('allowHierarchicalFields');
        },
        set: function (value) {
            this._setOption('allowHierarchicalFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "customOperations", {
        get: function () {
            return this._getOption('customOperations');
        },
        set: function (value) {
            this._setOption('customOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "fields", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this._setOption('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "filterOperationDescriptions", {
        get: function () {
            return this._getOption('filterOperationDescriptions');
        },
        set: function (value) {
            this._setOption('filterOperationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "groupOperationDescriptions", {
        get: function () {
            return this._getOption('groupOperationDescriptions');
        },
        set: function (value) {
            this._setOption('groupOperationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "groupOperations", {
        get: function () {
            return this._getOption('groupOperations');
        },
        set: function (value) {
            this._setOption('groupOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "maxGroupLevel", {
        get: function () {
            return this._getOption('maxGroupLevel');
        },
        set: function (value) {
            this._setOption('maxGroupLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "onContentReady", {
        get: function () {
            return this._getOption('onContentReady');
        },
        set: function (value) {
            this._setOption('onContentReady', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "onDisposing", {
        get: function () {
            return this._getOption('onDisposing');
        },
        set: function (value) {
            this._setOption('onDisposing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "onEditorPrepared", {
        get: function () {
            return this._getOption('onEditorPrepared');
        },
        set: function (value) {
            this._setOption('onEditorPrepared', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "onEditorPreparing", {
        get: function () {
            return this._getOption('onEditorPreparing');
        },
        set: function (value) {
            this._setOption('onEditorPreparing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "onInitialized", {
        get: function () {
            return this._getOption('onInitialized');
        },
        set: function (value) {
            this._setOption('onInitialized', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "onOptionChanged", {
        get: function () {
            return this._getOption('onOptionChanged');
        },
        set: function (value) {
            this._setOption('onOptionChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "onValueChanged", {
        get: function () {
            return this._getOption('onValueChanged');
        },
        set: function (value) {
            this._setOption('onValueChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderOptions.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoFilterBuilderOptions;
}(NestedOption));
export { DxoFilterBuilderOptions };
//# sourceMappingURL=filter-builder-options.js.map
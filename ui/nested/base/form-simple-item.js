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
var nested_option_1 = require("../../../core/nested-option");
var DxoFormSimpleItem = (function (_super) {
    __extends(DxoFormSimpleItem, _super);
    function DxoFormSimpleItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoFormSimpleItem.prototype, "colSpan", {
        get: function () {
            return this._getOption('colSpan');
        },
        set: function (value) {
            this._setOption('colSpan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "cssClass", {
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "editorOptions", {
        get: function () {
            return this._getOption('editorOptions');
        },
        set: function (value) {
            this._setOption('editorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "editorType", {
        get: function () {
            return this._getOption('editorType');
        },
        set: function (value) {
            this._setOption('editorType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "helpText", {
        get: function () {
            return this._getOption('helpText');
        },
        set: function (value) {
            this._setOption('helpText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "isRequired", {
        get: function () {
            return this._getOption('isRequired');
        },
        set: function (value) {
            this._setOption('isRequired', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "itemType", {
        get: function () {
            return this._getOption('itemType');
        },
        set: function (value) {
            this._setOption('itemType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "validationRules", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormSimpleItem.prototype, "visibleIndex", {
        get: function () {
            return this._getOption('visibleIndex');
        },
        set: function (value) {
            this._setOption('visibleIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoFormSimpleItem;
}(nested_option_1.NestedOption));
exports.DxoFormSimpleItem = DxoFormSimpleItem;
//# sourceMappingURL=form-simple-item.js.map
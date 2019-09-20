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
var DxoHtmlEditorMediaResizing = (function (_super) {
    __extends(DxoHtmlEditorMediaResizing, _super);
    function DxoHtmlEditorMediaResizing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoHtmlEditorMediaResizing.prototype, "allowedTargets", {
        get: function () {
            return this._getOption('allowedTargets');
        },
        set: function (value) {
            this._setOption('allowedTargets', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHtmlEditorMediaResizing.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoHtmlEditorMediaResizing;
}(nested_option_1.NestedOption));
exports.DxoHtmlEditorMediaResizing = DxoHtmlEditorMediaResizing;
//# sourceMappingURL=html-editor-media-resizing.js.map
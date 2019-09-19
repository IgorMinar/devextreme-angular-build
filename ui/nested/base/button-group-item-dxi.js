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
var DxiButtonGroupItem = (function (_super) {
    __extends(DxiButtonGroupItem, _super);
    function DxiButtonGroupItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxiButtonGroupItem.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "html", {
        get: function () {
            return this._getOption('html');
        },
        set: function (value) {
            this._setOption('html', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "icon", {
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "onClick", {
        get: function () {
            return this._getOption('onClick');
        },
        set: function (value) {
            this._setOption('onClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "baseSize", {
        get: function () {
            return this._getOption('baseSize');
        },
        set: function (value) {
            this._setOption('baseSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "box", {
        get: function () {
            return this._getOption('box');
        },
        set: function (value) {
            this._setOption('box', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "ratio", {
        get: function () {
            return this._getOption('ratio');
        },
        set: function (value) {
            this._setOption('ratio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "shrink", {
        get: function () {
            return this._getOption('shrink');
        },
        set: function (value) {
            this._setOption('shrink', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "beginGroup", {
        get: function () {
            return this._getOption('beginGroup');
        },
        set: function (value) {
            this._setOption('beginGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "closeMenuOnClick", {
        get: function () {
            return this._getOption('closeMenuOnClick');
        },
        set: function (value) {
            this._setOption('closeMenuOnClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "selectable", {
        get: function () {
            return this._getOption('selectable');
        },
        set: function (value) {
            this._setOption('selectable', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "selected", {
        get: function () {
            return this._getOption('selected');
        },
        set: function (value) {
            this._setOption('selected', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "colSpan", {
        get: function () {
            return this._getOption('colSpan');
        },
        set: function (value) {
            this._setOption('colSpan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "cssClass", {
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "editorOptions", {
        get: function () {
            return this._getOption('editorOptions');
        },
        set: function (value) {
            this._setOption('editorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "editorType", {
        get: function () {
            return this._getOption('editorType');
        },
        set: function (value) {
            this._setOption('editorType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "helpText", {
        get: function () {
            return this._getOption('helpText');
        },
        set: function (value) {
            this._setOption('helpText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "isRequired", {
        get: function () {
            return this._getOption('isRequired');
        },
        set: function (value) {
            this._setOption('isRequired', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "itemType", {
        get: function () {
            return this._getOption('itemType');
        },
        set: function (value) {
            this._setOption('itemType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "validationRules", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "visibleIndex", {
        get: function () {
            return this._getOption('visibleIndex');
        },
        set: function (value) {
            this._setOption('visibleIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "alignItemLabels", {
        get: function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "caption", {
        get: function () {
            return this._getOption('caption');
        },
        set: function (value) {
            this._setOption('caption', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "colCount", {
        get: function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "colCountByScreen", {
        get: function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "tabPanelOptions", {
        get: function () {
            return this._getOption('tabPanelOptions');
        },
        set: function (value) {
            this._setOption('tabPanelOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "tabs", {
        get: function () {
            return this._getOption('tabs');
        },
        set: function (value) {
            this._setOption('tabs', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "badge", {
        get: function () {
            return this._getOption('badge');
        },
        set: function (value) {
            this._setOption('badge', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "tabTemplate", {
        get: function () {
            return this._getOption('tabTemplate');
        },
        set: function (value) {
            this._setOption('tabTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "alignment", {
        get: function () {
            return this._getOption('alignment');
        },
        set: function (value) {
            this._setOption('alignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "buttonOptions", {
        get: function () {
            return this._getOption('buttonOptions');
        },
        set: function (value) {
            this._setOption('buttonOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "horizontalAlignment", {
        get: function () {
            return this._getOption('horizontalAlignment');
        },
        set: function (value) {
            this._setOption('horizontalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "verticalAlignment", {
        get: function () {
            return this._getOption('verticalAlignment');
        },
        set: function (value) {
            this._setOption('verticalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "imageAlt", {
        get: function () {
            return this._getOption('imageAlt');
        },
        set: function (value) {
            this._setOption('imageAlt', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "imageSrc", {
        get: function () {
            return this._getOption('imageSrc');
        },
        set: function (value) {
            this._setOption('imageSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "formatName", {
        get: function () {
            return this._getOption('formatName');
        },
        set: function (value) {
            this._setOption('formatName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "formatValues", {
        get: function () {
            return this._getOption('formatValues');
        },
        set: function (value) {
            this._setOption('formatValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "locateInMenu", {
        get: function () {
            return this._getOption('locateInMenu');
        },
        set: function (value) {
            this._setOption('locateInMenu', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "menuItemTemplate", {
        get: function () {
            return this._getOption('menuItemTemplate');
        },
        set: function (value) {
            this._setOption('menuItemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "options", {
        get: function () {
            return this._getOption('options');
        },
        set: function (value) {
            this._setOption('options', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "showText", {
        get: function () {
            return this._getOption('showText');
        },
        set: function (value) {
            this._setOption('showText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "widget", {
        get: function () {
            return this._getOption('widget');
        },
        set: function (value) {
            this._setOption('widget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "key", {
        get: function () {
            return this._getOption('key');
        },
        set: function (value) {
            this._setOption('key', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "showChevron", {
        get: function () {
            return this._getOption('showChevron');
        },
        set: function (value) {
            this._setOption('showChevron', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "menuTemplate", {
        get: function () {
            return this._getOption('menuTemplate');
        },
        set: function (value) {
            this._setOption('menuTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "heightRatio", {
        get: function () {
            return this._getOption('heightRatio');
        },
        set: function (value) {
            this._setOption('heightRatio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "widthRatio", {
        get: function () {
            return this._getOption('widthRatio');
        },
        set: function (value) {
            this._setOption('widthRatio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "expanded", {
        get: function () {
            return this._getOption('expanded');
        },
        set: function (value) {
            this._setOption('expanded', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "hasItems", {
        get: function () {
            return this._getOption('hasItems');
        },
        set: function (value) {
            this._setOption('hasItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiButtonGroupItem.prototype, "parentId", {
        get: function () {
            return this._getOption('parentId');
        },
        set: function (value) {
            this._setOption('parentId', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxiButtonGroupItem;
}(CollectionNestedOption));
export { DxiButtonGroupItem };
//# sourceMappingURL=button-group-item-dxi.js.map
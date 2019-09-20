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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLWl0ZW0tZHhpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvbmVzdGVkL2Jhc2UvYnV0dG9uLWdyb3VwLWl0ZW0tZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUlyRSxJQUFBO0lBQWlELHNDQUFzQjs7OztJQUNuRSxzQkFBSSx3Q0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7YUFDRCxVQUFhLEtBQWM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7OztPQUhBO0lBS0Qsc0JBQUksb0NBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO2FBQ0QsVUFBUyxLQUFhO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7T0FIQTtJQUtELHNCQUFJLG9DQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQzthQUNELFVBQVMsS0FBYTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsQzs7O09BSEE7SUFLRCxzQkFBSSx3Q0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7YUFDRCxVQUFhLEtBQVU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7OztPQUhBO0lBS0Qsc0JBQUksb0NBQUk7YUFBUjtZQUNJ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QUhBOzZCQTFiTDtFQW1CaUQsc0JBQXNCLEVBMmF0RSxDQUFBO0FBM2FELDhCQTJhQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhpQnV0dG9uR3JvdXBJdGVtIGV4dGVuZHMgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGh0bWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdodG1sJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaHRtbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdodG1sJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpY29uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaWNvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGljb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaWNvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0ZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aXRsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpdGxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkNsaWNrKCk6IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkNsaWNrJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb25DbGljayh2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29uQ2xpY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0eXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0eXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYXNlU2l6ZSgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Jhc2VTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFzZVNpemUodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFzZVNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJveCgpOiBEZXZFeHByZXNzLnVpLmR4Qm94T3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYm94Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYm94KHZhbHVlOiBEZXZFeHByZXNzLnVpLmR4Qm94T3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYm94JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByYXRpbygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JhdGlvJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmF0aW8odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmF0aW8nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNocmluaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NocmluaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNocmluayh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaHJpbmsnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiZWdpbkdyb3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JlZ2luR3JvdXAnKTtcclxuICAgIH1cclxuICAgIHNldCBiZWdpbkdyb3VwKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiZWdpbkdyb3VwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbG9zZU1lbnVPbkNsaWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nsb3NlTWVudU9uQ2xpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBjbG9zZU1lbnVPbkNsaWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjbG9zZU1lbnVPbkNsaWNrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpdGVtcygpOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4Q29udGV4dE1lbnVJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1TaW1wbGVJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1Hcm91cEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybVRhYmJlZEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUVtcHR5SXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtQnV0dG9uSXRlbSB8IERldkV4cHJlc3MudWkuZHhNZW51SXRlbSB8IERldkV4cHJlc3MudWkuZHhUcmVlVmlld0l0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4Q29udGV4dE1lbnVJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1TaW1wbGVJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1Hcm91cEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybVRhYmJlZEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUVtcHR5SXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtQnV0dG9uSXRlbSB8IERldkV4cHJlc3MudWkuZHhNZW51SXRlbSB8IERldkV4cHJlc3MudWkuZHhUcmVlVmlld0l0ZW0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0YWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3RhYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0YWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0ZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbFNwYW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xTcGFuJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sU3Bhbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2xTcGFuJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nzc0NsYXNzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3NzQ2xhc3ModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3NzQ2xhc3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGFGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVkaXRvck9wdGlvbnMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlZGl0b3JPcHRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWRpdG9yT3B0aW9ucyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlZGl0b3JPcHRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWRpdG9yVHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVkaXRvclR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWRpdG9yVHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVscFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWxwVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlbHBUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlbHBUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1JlcXVpcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2lzUmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBpc1JlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpc1JlcXVpcmVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpdGVtVHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1UeXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXRlbVR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXRlbVR5cGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhYmVsKCk6IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgc2hvd0NvbG9uPzogYm9vbGVhbiwgdGV4dD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGFiZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBsYWJlbCh2YWx1ZTogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGxvY2F0aW9uPzogc3RyaW5nLCBzaG93Q29sb24/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYWJlbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25hbWUnKTtcclxuICAgIH1cclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25hbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbGlkYXRpb25SdWxlcygpOiBBcnJheTxEZXZFeHByZXNzLnVpLlJlcXVpcmVkUnVsZSB8IERldkV4cHJlc3MudWkuTnVtZXJpY1J1bGUgfCBEZXZFeHByZXNzLnVpLlJhbmdlUnVsZSB8IERldkV4cHJlc3MudWkuU3RyaW5nTGVuZ3RoUnVsZSB8IERldkV4cHJlc3MudWkuQ3VzdG9tUnVsZSB8IERldkV4cHJlc3MudWkuQ29tcGFyZVJ1bGUgfCBEZXZFeHByZXNzLnVpLlBhdHRlcm5SdWxlIHwgRGV2RXhwcmVzcy51aS5FbWFpbFJ1bGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWxpZGF0aW9uUnVsZXMnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWxpZGF0aW9uUnVsZXModmFsdWU6IEFycmF5PERldkV4cHJlc3MudWkuUmVxdWlyZWRSdWxlIHwgRGV2RXhwcmVzcy51aS5OdW1lcmljUnVsZSB8IERldkV4cHJlc3MudWkuUmFuZ2VSdWxlIHwgRGV2RXhwcmVzcy51aS5TdHJpbmdMZW5ndGhSdWxlIHwgRGV2RXhwcmVzcy51aS5DdXN0b21SdWxlIHwgRGV2RXhwcmVzcy51aS5Db21wYXJlUnVsZSB8IERldkV4cHJlc3MudWkuUGF0dGVyblJ1bGUgfCBEZXZFeHByZXNzLnVpLkVtYWlsUnVsZT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbGlkYXRpb25SdWxlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlzaWJsZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZUluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGVJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxpZ25JdGVtTGFiZWxzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsaWduSXRlbUxhYmVscycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsaWduSXRlbUxhYmVscyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxpZ25JdGVtTGFiZWxzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FwdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhcHRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FwdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xDb3VudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbENvdW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2xDb3VudEJ5U2NyZWVuKCk6IHsgbGc/OiBudW1iZXIsIG1kPzogbnVtYmVyLCBzbT86IG51bWJlciwgeHM/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sQ291bnRCeVNjcmVlbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbENvdW50QnlTY3JlZW4odmFsdWU6IHsgbGc/OiBudW1iZXIsIG1kPzogbnVtYmVyLCBzbT86IG51bWJlciwgeHM/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sQ291bnRCeVNjcmVlbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGFiUGFuZWxPcHRpb25zKCk6IERldkV4cHJlc3MudWkuZHhUYWJQYW5lbE9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYlBhbmVsT3B0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYlBhbmVsT3B0aW9ucyh2YWx1ZTogRGV2RXhwcmVzcy51aS5keFRhYlBhbmVsT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFiUGFuZWxPcHRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0YWJzKCk6IEFycmF5PGFueSB8IHsgYWxpZ25JdGVtTGFiZWxzPzogYm9vbGVhbiwgYmFkZ2U/OiBzdHJpbmcsIGNvbENvdW50PzogbnVtYmVyLCBjb2xDb3VudEJ5U2NyZWVuPzogeyBsZz86IG51bWJlciwgbWQ/OiBudW1iZXIsIHNtPzogbnVtYmVyLCB4cz86IG51bWJlciB9LCBkaXNhYmxlZD86IGJvb2xlYW4sIGljb24/OiBzdHJpbmcsIGl0ZW1zPzogQXJyYXk8RGV2RXhwcmVzcy51aS5keEZvcm1TaW1wbGVJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1Hcm91cEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybVRhYmJlZEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUVtcHR5SXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtQnV0dG9uSXRlbT4sIHRhYlRlbXBsYXRlPzogYW55LCB0ZW1wbGF0ZT86IGFueSwgdGl0bGU/OiBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYnMnKTtcclxuICAgIH1cclxuICAgIHNldCB0YWJzKHZhbHVlOiBBcnJheTxhbnkgfCB7IGFsaWduSXRlbUxhYmVscz86IGJvb2xlYW4sIGJhZGdlPzogc3RyaW5nLCBjb2xDb3VudD86IG51bWJlciwgY29sQ291bnRCeVNjcmVlbj86IHsgbGc/OiBudW1iZXIsIG1kPzogbnVtYmVyLCBzbT86IG51bWJlciwgeHM/OiBudW1iZXIgfSwgZGlzYWJsZWQ/OiBib29sZWFuLCBpY29uPzogc3RyaW5nLCBpdGVtcz86IEFycmF5PERldkV4cHJlc3MudWkuZHhGb3JtU2ltcGxlSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtR3JvdXBJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1UYWJiZWRJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1FbXB0eUl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUJ1dHRvbkl0ZW0+LCB0YWJUZW1wbGF0ZT86IGFueSwgdGVtcGxhdGU/OiBhbnksIHRpdGxlPzogc3RyaW5nIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0YWJzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYWRnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JhZGdlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFkZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFkZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRhYlRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGFiVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0YWJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0YWJUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxpZ25tZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxpZ25tZW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxpZ25tZW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsaWdubWVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYnV0dG9uT3B0aW9ucygpOiBEZXZFeHByZXNzLnVpLmR4QnV0dG9uT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnV0dG9uT3B0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJ1dHRvbk9wdGlvbnModmFsdWU6IERldkV4cHJlc3MudWkuZHhCdXR0b25PcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdidXR0b25PcHRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBob3Jpem9udGFsQWxpZ25tZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG9yaXpvbnRhbEFsaWdubWVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvcml6b250YWxBbGlnbm1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG9yaXpvbnRhbEFsaWdubWVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmVydGljYWxBbGlnbm1lbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2ZXJ0aWNhbEFsaWdubWVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZlcnRpY2FsQWxpZ25tZW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZlcnRpY2FsQWxpZ25tZW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbWFnZUFsdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ltYWdlQWx0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaW1hZ2VBbHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaW1hZ2VBbHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGltYWdlU3JjKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW1hZ2VTcmMnKTtcclxuICAgIH1cclxuICAgIHNldCBpbWFnZVNyYyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpbWFnZVNyYycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9ybWF0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Zvcm1hdE5hbWUnKTtcclxuICAgIH1cclxuICAgIHNldCBmb3JtYXROYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Zvcm1hdE5hbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvcm1hdFZhbHVlcygpOiBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9ybWF0VmFsdWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9ybWF0VmFsdWVzKHZhbHVlOiBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9ybWF0VmFsdWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb2NhdGVJbk1lbnUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2NhdGVJbk1lbnUnKTtcclxuICAgIH1cclxuICAgIHNldCBsb2NhdGVJbk1lbnUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbG9jYXRlSW5NZW51JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb2NhdGlvbigpOiBzdHJpbmcgfCBBcnJheTxhbnkgfCB7IGNvbD86IG51bWJlciwgY29sc3Bhbj86IG51bWJlciwgcm93PzogbnVtYmVyLCByb3dzcGFuPzogbnVtYmVyLCBzY3JlZW4/OiBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvY2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9jYXRpb24odmFsdWU6IHN0cmluZyB8IEFycmF5PGFueSB8IHsgY29sPzogbnVtYmVyLCBjb2xzcGFuPzogbnVtYmVyLCByb3c/OiBudW1iZXIsIHJvd3NwYW4/OiBudW1iZXIsIHNjcmVlbj86IHN0cmluZyB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbG9jYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lbnVJdGVtVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtZW51SXRlbVRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWVudUl0ZW1UZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtZW51SXRlbVRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcHRpb25zKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3B0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wdGlvbnModmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb3B0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2hvd1RleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93VGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWRnZXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWRnZXQnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWRnZXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkZ2V0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBrZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdrZXknKTtcclxuICAgIH1cclxuICAgIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigna2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93Q2hldnJvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Q2hldnJvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dDaGV2cm9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q2hldnJvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVudVRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWVudVRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWVudVRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21lbnVUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVpZ2h0UmF0aW8oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHRSYXRpbycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodFJhdGlvKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodFJhdGlvJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aFJhdGlvKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGhSYXRpbycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoUmF0aW8odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGhSYXRpbycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXhwYW5kZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwYW5kZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBhbmRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwYW5kZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0l0ZW1zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hhc0l0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGFzSXRlbXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hhc0l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwYXJlbnRJZCgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhcmVudElkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFyZW50SWQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFyZW50SWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19
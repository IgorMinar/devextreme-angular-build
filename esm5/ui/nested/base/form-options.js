/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { NestedOption } from 'devextreme-angular/core';
var DxoFormOptions = /** @class */ (function (_super) {
    tslib_1.__extends(DxoFormOptions, _super);
    function DxoFormOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoFormOptions.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "alignItemLabels", {
        get: function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "alignItemLabelsInAllGroups", {
        get: function () {
            return this._getOption('alignItemLabelsInAllGroups');
        },
        set: function (value) {
            this._setOption('alignItemLabelsInAllGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "colCount", {
        get: function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "colCountByScreen", {
        get: function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "customizeItem", {
        get: function () {
            return this._getOption('customizeItem');
        },
        set: function (value) {
            this._setOption('customizeItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "formData", {
        get: function () {
            return this._getOption('formData');
        },
        set: function (value) {
            this._setOption('formData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "labelLocation", {
        get: function () {
            return this._getOption('labelLocation');
        },
        set: function (value) {
            this._setOption('labelLocation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "minColWidth", {
        get: function () {
            return this._getOption('minColWidth');
        },
        set: function (value) {
            this._setOption('minColWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "onContentReady", {
        get: function () {
            return this._getOption('onContentReady');
        },
        set: function (value) {
            this._setOption('onContentReady', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "onDisposing", {
        get: function () {
            return this._getOption('onDisposing');
        },
        set: function (value) {
            this._setOption('onDisposing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "onEditorEnterKey", {
        get: function () {
            return this._getOption('onEditorEnterKey');
        },
        set: function (value) {
            this._setOption('onEditorEnterKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "onFieldDataChanged", {
        get: function () {
            return this._getOption('onFieldDataChanged');
        },
        set: function (value) {
            this._setOption('onFieldDataChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "onInitialized", {
        get: function () {
            return this._getOption('onInitialized');
        },
        set: function (value) {
            this._setOption('onInitialized', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "onOptionChanged", {
        get: function () {
            return this._getOption('onOptionChanged');
        },
        set: function (value) {
            this._setOption('onOptionChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "optionalMark", {
        get: function () {
            return this._getOption('optionalMark');
        },
        set: function (value) {
            this._setOption('optionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "requiredMark", {
        get: function () {
            return this._getOption('requiredMark');
        },
        set: function (value) {
            this._setOption('requiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "requiredMessage", {
        get: function () {
            return this._getOption('requiredMessage');
        },
        set: function (value) {
            this._setOption('requiredMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "screenByWidth", {
        get: function () {
            return this._getOption('screenByWidth');
        },
        set: function (value) {
            this._setOption('screenByWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "scrollingEnabled", {
        get: function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "showColonAfterLabel", {
        get: function () {
            return this._getOption('showColonAfterLabel');
        },
        set: function (value) {
            this._setOption('showColonAfterLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "showOptionalMark", {
        get: function () {
            return this._getOption('showOptionalMark');
        },
        set: function (value) {
            this._setOption('showOptionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "showRequiredMark", {
        get: function () {
            return this._getOption('showRequiredMark');
        },
        set: function (value) {
            this._setOption('showRequiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "showValidationSummary", {
        get: function () {
            return this._getOption('showValidationSummary');
        },
        set: function (value) {
            this._setOption('showValidationSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "validationGroup", {
        get: function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormOptions.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoFormOptions;
}(NestedOption));
export { DxoFormOptions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbImJhc2UvZm9ybS1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUVwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJdkQ7SUFBNkMsMENBQVk7SUFBekQ7O0lBMFFBLENBQUM7SUF6UUcsc0JBQUkscUNBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO2FBQ0QsVUFBYyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksOENBQWtCO2FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDakQsQ0FBQzthQUNELFVBQXVCLEtBQWM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLDJDQUFlO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUNELFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLHNEQUEwQjthQUE5QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3pELENBQUM7YUFDRCxVQUErQixLQUFjO1lBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxD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QzthQUNELFVBQVksS0FBYztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLGlDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQzthQUNELFVBQVUsS0FBaUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BSEE7SUFJTCxxQkFBQztBQUFELENBQUMsQUExUUQsQ0FBNkMsWUFBWSxHQTBReEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeG9Gb3JtT3B0aW9ucyBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBnZXQgYWNjZXNzS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWNjZXNzS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjY2Vzc0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWN0aXZlU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGlnbkl0ZW1MYWJlbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxpZ25JdGVtTGFiZWxzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxpZ25JdGVtTGFiZWxzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGlnbkl0ZW1MYWJlbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsaWduSXRlbUxhYmVsc0luQWxsR3JvdXBzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsaWduSXRlbUxhYmVsc0luQWxsR3JvdXBzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxpZ25JdGVtTGFiZWxzSW5BbGxHcm91cHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsaWduSXRlbUxhYmVsc0luQWxsR3JvdXBzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2xDb3VudCgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbENvdW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sQ291bnQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sQ291bnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbENvdW50QnlTY3JlZW4oKTogeyBsZz86IG51bWJlciwgbWQ/OiBudW1iZXIsIHNtPzogbnVtYmVyLCB4cz86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xDb3VudEJ5U2NyZWVuJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sQ291bnRCeVNjcmVlbih2YWx1ZTogeyBsZz86IG51bWJlciwgbWQ/OiBudW1iZXIsIHNtPzogbnVtYmVyLCB4cz86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2xDb3VudEJ5U2NyZWVuJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXN0b21pemVJdGVtKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVJdGVtJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplSXRlbSh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZUl0ZW0nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvY3VzU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb3JtRGF0YSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Zvcm1EYXRhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9ybURhdGEodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9ybURhdGEnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaG92ZXJTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBob3ZlclN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGl0ZW1zKCk6IEFycmF5PERldkV4cHJlc3MudWkuZHhGb3JtU2ltcGxlSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtR3JvdXBJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1UYWJiZWRJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1FbXB0eUl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUJ1dHRvbkl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4Rm9ybVNpbXBsZUl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUdyb3VwSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtVGFiYmVkSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtRW1wdHlJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1CdXR0b25JdGVtPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhYmVsTG9jYXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsYWJlbExvY2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGFiZWxMb2NhdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYWJlbExvY2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtaW5Db2xXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbkNvbFdpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluQ29sV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluQ29sV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uQ29udGVudFJlYWR5KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkNvbnRlbnRSZWFkeScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9uQ29udGVudFJlYWR5KHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25Db250ZW50UmVhZHknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uRGlzcG9zaW5nKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkRpc3Bvc2luZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9uRGlzcG9zaW5nKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25EaXNwb3NpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uRWRpdG9yRW50ZXJLZXkoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29uRWRpdG9yRW50ZXJLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBvbkVkaXRvckVudGVyS2V5KHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25FZGl0b3JFbnRlcktleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25GaWVsZERhdGFDaGFuZ2VkKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkZpZWxkRGF0YUNoYW5nZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvbkZpZWxkRGF0YUNoYW5nZWQodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvbkZpZWxkRGF0YUNoYW5nZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uSW5pdGlhbGl6ZWQoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29uSW5pdGlhbGl6ZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvbkluaXRpYWxpemVkKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25Jbml0aWFsaXplZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25PcHRpb25DaGFuZ2VkKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbk9wdGlvbkNoYW5nZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvbk9wdGlvbkNoYW5nZWQodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvbk9wdGlvbkNoYW5nZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9wdGlvbmFsTWFyaygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29wdGlvbmFsTWFyaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wdGlvbmFsTWFyayh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvcHRpb25hbE1hcmsnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlYWRPbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlYWRPbmx5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVhZE9ubHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlYWRPbmx5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZXF1aXJlZE1hcmsoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXF1aXJlZE1hcmsnKTtcclxuICAgIH1cclxuICAgIHNldCByZXF1aXJlZE1hcmsodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVxdWlyZWRNYXJrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZXF1aXJlZE1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXF1aXJlZE1lc3NhZ2UnKTtcclxuICAgIH1cclxuICAgIHNldCByZXF1aXJlZE1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVxdWlyZWRNZXNzYWdlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY3JlZW5CeVdpZHRoKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY3JlZW5CeVdpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2NyZWVuQnlXaWR0aCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NjcmVlbkJ5V2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjcm9sbGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2Nyb2xsaW5nRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNjcm9sbGluZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Njcm9sbGluZ0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dDb2xvbkFmdGVyTGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NvbG9uQWZ0ZXJMYWJlbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dDb2xvbkFmdGVyTGFiZWwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dDb2xvbkFmdGVyTGFiZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dPcHRpb25hbE1hcmsoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd09wdGlvbmFsTWFyaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dPcHRpb25hbE1hcmsodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dPcHRpb25hbE1hcmsnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dSZXF1aXJlZE1hcmsoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd1JlcXVpcmVkTWFyaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dSZXF1aXJlZE1hcmsodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dSZXF1aXJlZE1hcmsnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dWYWxpZGF0aW9uU3VtbWFyeSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93VmFsaWRhdGlvblN1bW1hcnknKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93VmFsaWRhdGlvblN1bW1hcnkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dWYWxpZGF0aW9uU3VtbWFyeScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWxpZGF0aW9uR3JvdXAoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWxpZGF0aW9uR3JvdXAnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWxpZGF0aW9uR3JvdXAodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsaWRhdGlvbkdyb3VwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
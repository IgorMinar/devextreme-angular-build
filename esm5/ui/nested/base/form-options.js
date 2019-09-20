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
import { NestedOption } from '../../../core/nested-option';
var DxoFormOptions = (function (_super) {
    __extends(DxoFormOptions, _super);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvbmVzdGVkL2Jhc2UvZm9ybS1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJM0QsSUFBQTtJQUE2QyxrQ0FBWTs7OztJQUNyRCxzQkFBSSxxQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7YUFDRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7OztPQUhBO0lBS0Qsc0JBQUksOENBQWtCO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNoRDthQUNELFVBQXVCLEtBQWM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRDs7O09BSEE7SUFLRCxzQkFBSSwyQ0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDN0M7YUFDRCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7OztPQUhBO0lBS0Qsc0JBQUksc0RBQTBCO2FBQTlCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUN4RDthQUNELFVBQStCLEtBQWM7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4RDs7O09BSEE7SUFLRCxzQkFBSSxvQ0FBUTthQUFaO1lBQ0ks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SyxDQUFDLENBQUM7U0FDbkM7OztPQUhBO3lCQXpSTDtFQW1CNkMsWUFBWSxFQTBReEQsQ0FBQTtBQTFRRCwwQkEwUUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhvRm9ybU9wdGlvbnMgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgZ2V0IGFjY2Vzc0tleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjY2Vzc0tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY2Nlc3NLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmVTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxpZ25JdGVtTGFiZWxzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsaWduSXRlbUxhYmVscycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsaWduSXRlbUxhYmVscyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxpZ25JdGVtTGFiZWxzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGlnbkl0ZW1MYWJlbHNJbkFsbEdyb3VwcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGlnbkl0ZW1MYWJlbHNJbkFsbEdyb3VwcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsaWduSXRlbUxhYmVsc0luQWxsR3JvdXBzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGlnbkl0ZW1MYWJlbHNJbkFsbEdyb3VwcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sQ291bnQoKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xDb3VudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbENvdW50KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbENvdW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2xDb3VudEJ5U2NyZWVuKCk6IHsgbGc/OiBudW1iZXIsIG1kPzogbnVtYmVyLCBzbT86IG51bWJlciwgeHM/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sQ291bnRCeVNjcmVlbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbENvdW50QnlTY3JlZW4odmFsdWU6IHsgbGc/OiBudW1iZXIsIG1kPzogbnVtYmVyLCBzbT86IG51bWJlciwgeHM/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sQ291bnRCeVNjcmVlbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VzdG9taXplSXRlbSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplSXRlbScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZUl0ZW0odmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVJdGVtJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb2N1c1N0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c1N0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c1N0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9ybURhdGEoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb3JtRGF0YScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvcm1EYXRhKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Zvcm1EYXRhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhvdmVyU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpdGVtcygpOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4Rm9ybVNpbXBsZUl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUdyb3VwSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtVGFiYmVkSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtRW1wdHlJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1CdXR0b25JdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy51aS5keEZvcm1TaW1wbGVJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1Hcm91cEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybVRhYmJlZEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUVtcHR5SXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtQnV0dG9uSXRlbT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbExvY2F0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGFiZWxMb2NhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhYmVsTG9jYXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbGFiZWxMb2NhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWluQ29sV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5Db2xXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbkNvbFdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbkNvbFdpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkNvbnRlbnRSZWFkeSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb25Db250ZW50UmVhZHknKTtcclxuICAgIH1cclxuICAgIHNldCBvbkNvbnRlbnRSZWFkeSh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29uQ29udGVudFJlYWR5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkRpc3Bvc2luZygpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb25EaXNwb3NpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBvbkRpc3Bvc2luZyh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29uRGlzcG9zaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkVkaXRvckVudGVyS2V5KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkVkaXRvckVudGVyS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb25FZGl0b3JFbnRlcktleSh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29uRWRpdG9yRW50ZXJLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uRmllbGREYXRhQ2hhbmdlZCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb25GaWVsZERhdGFDaGFuZ2VkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb25GaWVsZERhdGFDaGFuZ2VkKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25GaWVsZERhdGFDaGFuZ2VkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkluaXRpYWxpemVkKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkluaXRpYWxpemVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb25Jbml0aWFsaXplZCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29uSW5pdGlhbGl6ZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uT3B0aW9uQ2hhbmdlZCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb25PcHRpb25DaGFuZ2VkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb25PcHRpb25DaGFuZ2VkKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25PcHRpb25DaGFuZ2VkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcHRpb25hbE1hcmsoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcHRpb25hbE1hcmsnKTtcclxuICAgIH1cclxuICAgIHNldCBvcHRpb25hbE1hcmsodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb3B0aW9uYWxNYXJrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWFkT25seScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlYWRPbmx5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWFkT25seScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVxdWlyZWRNYXJrKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVxdWlyZWRNYXJrJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVxdWlyZWRNYXJrKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlcXVpcmVkTWFyaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVxdWlyZWRNZXNzYWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVxdWlyZWRNZXNzYWdlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVxdWlyZWRNZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlcXVpcmVkTWVzc2FnZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NyZWVuQnlXaWR0aCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2NyZWVuQnlXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNjcmVlbkJ5V2lkdGgodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY3JlZW5CeVdpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY3JvbGxpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Njcm9sbGluZ0VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBzY3JvbGxpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY3JvbGxpbmdFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93Q29sb25BZnRlckxhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dDb2xvbkFmdGVyTGFiZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q29sb25BZnRlckxhYmVsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q29sb25BZnRlckxhYmVsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93T3B0aW9uYWxNYXJrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dPcHRpb25hbE1hcmsnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93T3B0aW9uYWxNYXJrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93T3B0aW9uYWxNYXJrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93UmVxdWlyZWRNYXJrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dSZXF1aXJlZE1hcmsnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93UmVxdWlyZWRNYXJrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93UmVxdWlyZWRNYXJrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93VmFsaWRhdGlvblN1bW1hcnkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd1ZhbGlkYXRpb25TdW1tYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd1ZhbGlkYXRpb25TdW1tYXJ5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93VmFsaWRhdGlvblN1bW1hcnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGFiSW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCB0YWJJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0YWJJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsaWRhdGlvbkdyb3VwKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvbkdyb3VwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvbkdyb3VwKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbGlkYXRpb25Hcm91cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=
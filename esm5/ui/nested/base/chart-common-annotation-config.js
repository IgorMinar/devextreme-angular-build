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
var DxoChartCommonAnnotationConfig = (function (_super) {
    __extends(DxoChartCommonAnnotationConfig, _super);
    function DxoChartCommonAnnotationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "allowDragging", {
        get: function () {
            return this._getOption('allowDragging');
        },
        set: function (value) {
            this._setOption('allowDragging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "argument", {
        get: function () {
            return this._getOption('argument');
        },
        set: function (value) {
            this._setOption('argument', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "arrowLength", {
        get: function () {
            return this._getOption('arrowLength');
        },
        set: function (value) {
            this._setOption('arrowLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "arrowWidth", {
        get: function () {
            return this._getOption('arrowWidth');
        },
        set: function (value) {
            this._setOption('arrowWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "axis", {
        get: function () {
            return this._getOption('axis');
        },
        set: function (value) {
            this._setOption('axis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "customizeTooltip", {
        get: function () {
            return this._getOption('customizeTooltip');
        },
        set: function (value) {
            this._setOption('customizeTooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "description", {
        get: function () {
            return this._getOption('description');
        },
        set: function (value) {
            this._setOption('description', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "image", {
        get: function () {
            return this._getOption('image');
        },
        set: function (value) {
            this._setOption('image', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "offsetX", {
        get: function () {
            return this._getOption('offsetX');
        },
        set: function (value) {
            this._setOption('offsetX', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "offsetY", {
        get: function () {
            return this._getOption('offsetY');
        },
        set: function (value) {
            this._setOption('offsetY', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "series", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "shadow", {
        get: function () {
            return this._getOption('shadow');
        },
        set: function (value) {
            this._setOption('shadow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "textOverflow", {
        get: function () {
            return this._getOption('textOverflow');
        },
        set: function (value) {
            this._setOption('textOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "tooltipEnabled", {
        get: function () {
            return this._getOption('tooltipEnabled');
        },
        set: function (value) {
            this._setOption('tooltipEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "wordWrap", {
        get: function () {
            return this._getOption('wordWrap');
        },
        set: function (value) {
            this._setOption('wordWrap', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "x", {
        get: function () {
            return this._getOption('x');
        },
        set: function (value) {
            this._setOption('x', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonAnnotationConfig.prototype, "y", {
        get: function () {
            return this._getOption('y');
        },
        set: function (value) {
            this._setOption('y', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoChartCommonAnnotationConfig;
}(NestedOption));
export { DxoChartCommonAnnotationConfig };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtY29tbW9uLWFubm90YXRpb24tY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvbmVzdGVkL2Jhc2UvY2hhcnQtY29tbW9uLWFubm90YXRpb24tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJM0QsSUFBQTtJQUE2RCxrREFBWTs7OztJQUNyRSxzQkFBSSx5REFBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNDO2FBQ0QsVUFBa0IsS0FBYztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQzs7O09BSEE7SUFLRCxzQkFBSSxvREFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7YUFDRCxVQUFhLEtBQTZCO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDOzs7T0FIQTtJQUtELHNCQUFJLHVEQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QzthQUNELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7OztPQUhBO0lBS0Qsc0JBQUksc0RBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hDO2FBQ0QsVUFBZSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hDOzs7T0FIQTtJQUtELHNC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R0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQy9COzs7T0FIQTtJQUtELHNCQUFJLDZDQUFDO2FBQUw7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjthQUNELFVBQU0sS0FBYTtZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQy9COzs7T0FIQTt5Q0FuTkw7RUFtQjZELFlBQVksRUFvTXhFLENBQUE7QUFwTUQsMENBb01DIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER4b0NoYXJ0Q29tbW9uQW5ub3RhdGlvbkNvbmZpZyBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBnZXQgYWxsb3dEcmFnZ2luZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0RyYWdnaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dEcmFnZ2luZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dEcmFnZ2luZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXJndW1lbnQoKTogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJndW1lbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBhcmd1bWVudCh2YWx1ZTogRGF0ZSB8IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXJndW1lbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFycm93TGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJyb3dMZW5ndGgnKTtcclxuICAgIH1cclxuICAgIHNldCBhcnJvd0xlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcnJvd0xlbmd0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXJyb3dXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Fycm93V2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBhcnJvd1dpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Fycm93V2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGF4aXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdheGlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXhpcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdheGlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBib3JkZXIoKTogeyBjb2xvcj86IHN0cmluZywgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdib3JkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBib3JkZXIodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIGNvcm5lclJhZGl1cz86IG51bWJlciwgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYm9yZGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1c3RvbWl6ZVRvb2x0aXAoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZVRvb2x0aXAnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVUb29sdGlwKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplVG9vbHRpcCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rlc2NyaXB0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb250KCk6IERldkV4cHJlc3Mudml6LkZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb250KHZhbHVlOiBEZXZFeHByZXNzLnZpei5Gb250KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb250JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbWFnZSgpOiBzdHJpbmcgfCB7IGhlaWdodD86IG51bWJlciwgdXJsPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpbWFnZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGltYWdlKHZhbHVlOiBzdHJpbmcgfCB7IGhlaWdodD86IG51bWJlciwgdXJsPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpbWFnZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb2Zmc2V0WCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29mZnNldFgnKTtcclxuICAgIH1cclxuICAgIHNldCBvZmZzZXRYKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29mZnNldFgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9mZnNldFkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvZmZzZXRZJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb2Zmc2V0WSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvZmZzZXRZJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3BhY2l0eScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wYWNpdHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb3BhY2l0eScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFkZGluZ0xlZnRSaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhZGRpbmdMZWZ0UmlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBwYWRkaW5nTGVmdFJpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhZGRpbmdMZWZ0UmlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhZGRpbmdUb3BCb3R0b20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWRkaW5nVG9wQm90dG9tJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFkZGluZ1RvcEJvdHRvbSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWRkaW5nVG9wQm90dG9tJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXJpZXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZXJpZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXJpZXModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VyaWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaGFkb3coKTogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaGFkb3cnKTtcclxuICAgIH1cclxuICAgIHNldCBzaGFkb3codmFsdWU6IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hhZG93JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0ZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGV4dE92ZXJmbG93KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dE92ZXJmbG93Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dE92ZXJmbG93KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RleHRPdmVyZmxvdycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9vbHRpcEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9vbHRpcEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCB0b29sdGlwRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndG9vbHRpcEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0eXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0eXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3b3JkV3JhcCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dvcmRXcmFwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd29yZFdyYXAodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29yZFdyYXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigneScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigneScsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=
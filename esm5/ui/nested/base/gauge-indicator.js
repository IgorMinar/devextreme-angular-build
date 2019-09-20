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
var DxoGaugeIndicator = (function (_super) {
    __extends(DxoGaugeIndicator, _super);
    function DxoGaugeIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoGaugeIndicator.prototype, "arrowLength", {
        get: function () {
            return this._getOption('arrowLength');
        },
        set: function (value) {
            this._setOption('arrowLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "baseValue", {
        get: function () {
            return this._getOption('baseValue');
        },
        set: function (value) {
            this._setOption('baseValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "beginAdaptingAtRadius", {
        get: function () {
            return this._getOption('beginAdaptingAtRadius');
        },
        set: function (value) {
            this._setOption('beginAdaptingAtRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "horizontalOrientation", {
        get: function () {
            return this._getOption('horizontalOrientation');
        },
        set: function (value) {
            this._setOption('horizontalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "indentFromCenter", {
        get: function () {
            return this._getOption('indentFromCenter');
        },
        set: function (value) {
            this._setOption('indentFromCenter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "length", {
        get: function () {
            return this._getOption('length');
        },
        set: function (value) {
            this._setOption('length', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "offset", {
        get: function () {
            return this._getOption('offset');
        },
        set: function (value) {
            this._setOption('offset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "secondColor", {
        get: function () {
            return this._getOption('secondColor');
        },
        set: function (value) {
            this._setOption('secondColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "secondFraction", {
        get: function () {
            return this._getOption('secondFraction');
        },
        set: function (value) {
            this._setOption('secondFraction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "spindleGapSize", {
        get: function () {
            return this._getOption('spindleGapSize');
        },
        set: function (value) {
            this._setOption('spindleGapSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "spindleSize", {
        get: function () {
            return this._getOption('spindleSize');
        },
        set: function (value) {
            this._setOption('spindleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "verticalOrientation", {
        get: function () {
            return this._getOption('verticalOrientation');
        },
        set: function (value) {
            this._setOption('verticalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoGaugeIndicator;
}(NestedOption));
export { DxoGaugeIndicator };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvbmVzdGVkL2Jhc2UvZ2F1Z2UtaW5kaWNhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJM0QsSUFBQTtJQUFnRCxxQ0FBWTs7OztJQUN4RCxzQkFBSSwwQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7YUFDRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDOzs7T0FIQTtJQUtELHNCQUFJLDhDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM3QzthQUNELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3Qzs7O09BSEE7SUFLRCxzQkFBSSx3Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7YUFDRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7OztPQUhBO0lBS0Qsc0JBQUksb0RBQXFCO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNuRDthQUNELFVBQTBCLEtBQWE7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRDs7O09BSEE7SUFLRCxzQkFBSSxvQ0FBSzthQUFUO1lBQ0ks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O1NBQ2xDO2FBQ0QsVUFBUyxLQUF3SDtZQUM3SCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsQzs7O09BSEE7SUFLRCxzQkFBSSxtQ0FBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7YUFDRCxVQUFTLEtBQWE7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbEM7OztPQUhBO0lBS0Qsc0JBQUksa0RBQW1CO2FBQXZCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNqRDthQUNELFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqRDs7O09BSEE7SUFLRCxzQkFBSSxvQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7YUFDRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUhBOzRCQXBKTDtFQW1CZ0QsWUFBWSxFQXFJM0QsQ0FBQTtBQXJJRCw2QkFxSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhvR2F1Z2VJbmRpY2F0b3IgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgZ2V0IGFycm93TGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJyb3dMZW5ndGgnKTtcclxuICAgIH1cclxuICAgIHNldCBhcnJvd0xlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcnJvd0xlbmd0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmFja2dyb3VuZENvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFja2dyb3VuZENvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JhY2tncm91bmRDb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmFzZVZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFzZVZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFzZVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Jhc2VWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmVnaW5BZGFwdGluZ0F0UmFkaXVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmVnaW5BZGFwdGluZ0F0UmFkaXVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmVnaW5BZGFwdGluZ0F0UmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JlZ2luQWRhcHRpbmdBdFJhZGl1cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBob3Jpem9udGFsT3JpZW50YXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3Jpem9udGFsT3JpZW50YXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBob3Jpem9udGFsT3JpZW50YXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG9yaXpvbnRhbE9yaWVudGF0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbmRlbnRGcm9tQ2VudGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW5kZW50RnJvbUNlbnRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGluZGVudEZyb21DZW50ZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaW5kZW50RnJvbUNlbnRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGVuZ3RoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xlbmd0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb2Zmc2V0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29mZnNldCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFsZXR0ZSgpOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWxldHRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFsZXR0ZSh2YWx1ZTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFsZXR0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Vjb25kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWNvbmRDb2xvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlY29uZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlY29uZENvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWNvbmRGcmFjdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlY29uZEZyYWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2Vjb25kRnJhY3Rpb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2Vjb25kRnJhY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzcGluZGxlR2FwU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NwaW5kbGVHYXBTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3BpbmRsZUdhcFNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3BpbmRsZUdhcFNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNwaW5kbGVTaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3BpbmRsZVNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCBzcGluZGxlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzcGluZGxlU2l6ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGV4dCgpOiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnQ/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRleHQodmFsdWU6IHsgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmVydGljYWxPcmllbnRhdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZlcnRpY2FsT3JpZW50YXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCB2ZXJ0aWNhbE9yaWVudGF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZlcnRpY2FsT3JpZW50YXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=
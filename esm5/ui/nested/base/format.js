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
var DxoFormat = (function (_super) {
    __extends(DxoFormat, _super);
    function DxoFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoFormat.prototype, "currency", {
        get: function () {
            return this._getOption('currency');
        },
        set: function (value) {
            this._setOption('currency', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "formatter", {
        get: function () {
            return this._getOption('formatter');
        },
        set: function (value) {
            this._setOption('formatter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "parser", {
        get: function () {
            return this._getOption('parser');
        },
        set: function (value) {
            this._setOption('parser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "precision", {
        get: function () {
            return this._getOption('precision');
        },
        set: function (value) {
            this._setOption('precision', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoFormat;
}(NestedOption));
export { DxoFormat };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvbmVzdGVkL2Jhc2UvZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHM0QsSUFBQTtJQUF3Qyw2QkFBWTs7OztJQUNoRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7YUFDRCxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7OztPQUhBO0lBS0Qsc0JBQUksZ0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQ0QsVUFBYyxLQUFlO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOzs7T0FIQTtJQUtELHNCQUFJLDZCQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQzthQUNELFVBQVcsS0FBZTtZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQzs7O09BSEE7SUFLRCxzQkFBSSxnQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7YUFDRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7OztPQUhBO0lBS0Qsc0JBQUksMkJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO2FBQ0QsVUFBUyxLQUFhO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7T0FIQTtvQkFqREw7RUFrQndDLFlBQVksRUFtQ25ELENBQUE7QUFuQ0QscUJBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhvRm9ybWF0IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIGdldCBjdXJyZW5jeSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1cnJlbmN5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VycmVuY3kodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VycmVuY3knLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvcm1hdHRlcigpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9ybWF0dGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9ybWF0dGVyKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9ybWF0dGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwYXJzZXIoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhcnNlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhcnNlcih2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhcnNlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJlY2lzaW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncHJlY2lzaW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcHJlY2lzaW9uKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ByZWNpc2lvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3R5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3R5cGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
var DxoPivotGridDataSource = (function (_super) {
    __extends(DxoPivotGridDataSource, _super);
    function DxoPivotGridDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoPivotGridDataSource.prototype, "fields", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this._setOption('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "filter", {
        get: function () {
            return this._getOption('filter');
        },
        set: function (value) {
            this._setOption('filter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onChanged", {
        get: function () {
            return this._getOption('onChanged');
        },
        set: function (value) {
            this._setOption('onChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onFieldsPrepared", {
        get: function () {
            return this._getOption('onFieldsPrepared');
        },
        set: function (value) {
            this._setOption('onFieldsPrepared', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onLoadError", {
        get: function () {
            return this._getOption('onLoadError');
        },
        set: function (value) {
            this._setOption('onLoadError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onLoadingChanged", {
        get: function () {
            return this._getOption('onLoadingChanged');
        },
        set: function (value) {
            this._setOption('onLoadingChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "remoteOperations", {
        get: function () {
            return this._getOption('remoteOperations');
        },
        set: function (value) {
            this._setOption('remoteOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "retrieveFields", {
        get: function () {
            return this._getOption('retrieveFields');
        },
        set: function (value) {
            this._setOption('retrieveFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "store", {
        get: function () {
            return this._getOption('store');
        },
        set: function (value) {
            this._setOption('store', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoPivotGridDataSource;
}(NestedOption));
export { DxoPivotGridDataSource };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3QtZ3JpZC1kYXRhLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VpL25lc3RlZC9iYXNlL3Bpdm90LWdyaWQtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUkzRCxJQUFBO0lBQXFELDBDQUFZOzs7O0lBQzdELHNCQUFJLDBDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQzthQUNELFVBQVcsS0FBa2hDO1lBQ3poQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQzs7O09BSEE7SUFLRCxzQkFBSSwwQ0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEM7YUFDRCxVQUFXLEtBQVU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEM7OztPQUhBO0lBS0Qsc0JBQUksNkNBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQ0QsVUFBYyxLQUFlO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOzs7T0FIQTtJQUtELHNCQUFJLG9EQUFnQjthQUFwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDOUM7YUFDRCxVQUFxQixLQUFlO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUM7OztPQUhBO0lBS0Qsc0JBQUksK0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pDO2FBQ0QsVUFBZ0IsS0FBZTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7O09BSEE7SUFLRCxzQkFBSSxvREFBZ0I7YUFBcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzlDO2FBQ0QsVUFBcUIsS0FBZTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlDOzs7T0FIQTtJQUtELHNCQUFJLG9EQUFnQjthQUFwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDOUM7YUFDRCxVQUFxQixLQUFjO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUM7OztPQUhBO0lBS0Qsc0JBQUksa0RBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVDO2FBQ0QsVUFBbUIsS0FBYztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVDOzs7T0FIQTtJQUtELHNCQUFJLHlDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQzthQUNELFVBQVUsS0FBMko7WUFDakssSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUhBO2lDQTlFTDtFQW1CcUQsWUFBWSxFQStEaEUsQ0FBQTtBQS9ERCxrQ0ErREMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhvUGl2b3RHcmlkRGF0YVNvdXJjZSBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBnZXQgZmllbGRzKCk6IEFycmF5PGFueSB8IHsgYWxsb3dDcm9zc0dyb3VwQ2FsY3VsYXRpb24/OiBib29sZWFuLCBhbGxvd0V4cGFuZEFsbD86IGJvb2xlYW4sIGFsbG93RmlsdGVyaW5nPzogYm9vbGVhbiwgYWxsb3dTb3J0aW5nPzogYm9vbGVhbiwgYWxsb3dTb3J0aW5nQnlTdW1tYXJ5PzogYm9vbGVhbiwgYXJlYT86IHN0cmluZywgYXJlYUluZGV4PzogbnVtYmVyLCBjYWxjdWxhdGVDdXN0b21TdW1tYXJ5PzogRnVuY3Rpb24sIGNhbGN1bGF0ZVN1bW1hcnlWYWx1ZT86IEZ1bmN0aW9uLCBjYXB0aW9uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRhdGFGaWVsZD86IHN0cmluZywgZGF0YVR5cGU/OiBzdHJpbmcsIGRpc3BsYXlGb2xkZXI/OiBzdHJpbmcsIGV4cGFuZGVkPzogYm9vbGVhbiwgZmlsdGVyVHlwZT86IHN0cmluZywgZmlsdGVyVmFsdWVzPzogQXJyYXk8YW55PiwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGdyb3VwSW5kZXg/OiBudW1iZXIsIGdyb3VwSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcsIGdyb3VwTmFtZT86IHN0cmluZywgaGVhZGVyRmlsdGVyPzogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgaXNNZWFzdXJlPzogYm9vbGVhbiwgcHJlY2lzaW9uPzogbnVtYmVyLCBydW5uaW5nVG90YWw/OiBzdHJpbmcsIHNlbGVjdG9yPzogRnVuY3Rpb24sIHNob3dHcmFuZFRvdGFscz86IGJvb2xlYW4sIHNob3dUb3RhbHM/OiBib29sZWFuLCBzaG93VmFsdWVzPzogYm9vbGVhbiwgc29ydEJ5Pzogc3RyaW5nLCBzb3J0QnlTdW1tYXJ5RmllbGQ/OiBzdHJpbmcsIHNvcnRCeVN1bW1hcnlQYXRoPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiwgc29ydGluZ01ldGhvZD86IEZ1bmN0aW9uLCBzb3J0T3JkZXI/OiBzdHJpbmcsIHN1bW1hcnlEaXNwbGF5TW9kZT86IHN0cmluZywgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciwgd29yZFdyYXBFbmFibGVkPzogYm9vbGVhbiB9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmllbGRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmllbGRzKHZhbHVlOiBBcnJheTxhbnkgfCB7IGFsbG93Q3Jvc3NHcm91cENhbGN1bGF0aW9uPzogYm9vbGVhbiwgYWxsb3dFeHBhbmRBbGw/OiBib29sZWFuLCBhbGxvd0ZpbHRlcmluZz86IGJvb2xlYW4sIGFsbG93U29ydGluZz86IGJvb2xlYW4sIGFsbG93U29ydGluZ0J5U3VtbWFyeT86IGJvb2xlYW4sIGFyZWE/OiBzdHJpbmcsIGFyZWFJbmRleD86IG51bWJlciwgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeT86IEZ1bmN0aW9uLCBjYWxjdWxhdGVTdW1tYXJ5VmFsdWU/OiBGdW5jdGlvbiwgY2FwdGlvbj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkYXRhRmllbGQ/OiBzdHJpbmcsIGRhdGFUeXBlPzogc3RyaW5nLCBkaXNwbGF5Rm9sZGVyPzogc3RyaW5nLCBleHBhbmRlZD86IGJvb2xlYW4sIGZpbHRlclR5cGU/OiBzdHJpbmcsIGZpbHRlclZhbHVlcz86IEFycmF5PGFueT4sIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBncm91cEluZGV4PzogbnVtYmVyLCBncm91cEludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nLCBncm91cE5hbWU/OiBzdHJpbmcsIGhlYWRlckZpbHRlcj86IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIGlzTWVhc3VyZT86IGJvb2xlYW4sIHByZWNpc2lvbj86IG51bWJlciwgcnVubmluZ1RvdGFsPzogc3RyaW5nLCBzZWxlY3Rvcj86IEZ1bmN0aW9uLCBzaG93R3JhbmRUb3RhbHM/OiBib29sZWFuLCBzaG93VG90YWxzPzogYm9vbGVhbiwgc2hvd1ZhbHVlcz86IGJvb2xlYW4sIHNvcnRCeT86IHN0cmluZywgc29ydEJ5U3VtbWFyeUZpZWxkPzogc3RyaW5nLCBzb3J0QnlTdW1tYXJ5UGF0aD86IEFycmF5PG51bWJlciB8IHN0cmluZz4sIHNvcnRpbmdNZXRob2Q/OiBGdW5jdGlvbiwgc29ydE9yZGVyPzogc3RyaW5nLCBzdW1tYXJ5RGlzcGxheU1vZGU/OiBzdHJpbmcsIHN1bW1hcnlUeXBlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIsIHdvcmRXcmFwRW5hYmxlZD86IGJvb2xlYW4gfT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpZWxkcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmlsdGVyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25DaGFuZ2VkKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkNoYW5nZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvbkNoYW5nZWQodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvbkNoYW5nZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uRmllbGRzUHJlcGFyZWQoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29uRmllbGRzUHJlcGFyZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvbkZpZWxkc1ByZXBhcmVkKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25GaWVsZHNQcmVwYXJlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25Mb2FkRXJyb3IoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29uTG9hZEVycm9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb25Mb2FkRXJyb3IodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvbkxvYWRFcnJvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25Mb2FkaW5nQ2hhbmdlZCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb25Mb2FkaW5nQ2hhbmdlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9uTG9hZGluZ0NoYW5nZWQodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvbkxvYWRpbmdDaGFuZ2VkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZW1vdGVPcGVyYXRpb25zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbW90ZU9wZXJhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCByZW1vdGVPcGVyYXRpb25zKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZW1vdGVPcGVyYXRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZXRyaWV2ZUZpZWxkcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXRyaWV2ZUZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJldHJpZXZlRmllbGRzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZXRyaWV2ZUZpZWxkcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RvcmUoKTogRGV2RXhwcmVzcy5kYXRhLlN0b3JlIHwgRGV2RXhwcmVzcy5kYXRhLlN0b3JlT3B0aW9ucyB8IERldkV4cHJlc3MuZGF0YS5YbWxhU3RvcmUgfCBEZXZFeHByZXNzLmRhdGEuWG1sYVN0b3JlT3B0aW9ucyB8IHsgdHlwZT86IHN0cmluZyB9IHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RvcmUnKTtcclxuICAgIH1cclxuICAgIHNldCBzdG9yZSh2YWx1ZTogRGV2RXhwcmVzcy5kYXRhLlN0b3JlIHwgRGV2RXhwcmVzcy5kYXRhLlN0b3JlT3B0aW9ucyB8IERldkV4cHJlc3MuZGF0YS5YbWxhU3RvcmUgfCBEZXZFeHByZXNzLmRhdGEuWG1sYVN0b3JlT3B0aW9ucyB8IHsgdHlwZT86IHN0cmluZyB9IHwgQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RvcmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19
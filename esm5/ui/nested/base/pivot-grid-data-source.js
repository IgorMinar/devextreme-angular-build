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
var DxoPivotGridDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(DxoPivotGridDataSource, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3QtZ3JpZC1kYXRhLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQvIiwic291cmNlcyI6WyJiYXNlL3Bpdm90LWdyaWQtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUl2RDtJQUFxRCxrREFBWTtJQUFqRTs7SUErREEsQ0FBQztJQTlERyxzQkFBSSwwQ0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7YUFDRCxVQUFXLEtBQWtoQztZQUN6aEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSwwQ0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7YUFDRCxVQUFXLEtBQVU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSw2Q0FBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7YUFDRCxVQUFjLEtBQWU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSxvREFBZ0I7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxDQUFDO2FBQ0QsVUFBcUIsS0FBZTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksK0NBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO2FBQ0QsVUFBZ0IsS0FBZTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLG9EQUFnQjthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9DLENBQUM7YUFDRCxVQUFxQixLQUFlO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSxvREFBZ0I7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxDQUFDO2FBQ0QsVUFBcUIsS0FBYztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksa0RBQWM7YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3QyxDQUFDO2FBQ0QsVUFBbUIsS0FBYztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUhBO0lBS0Qsc0JBQUkseUNBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDO2FBQ0QsVUFBVSxLQUEySjtZQUNqSyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FIQTtJQUlMLDZCQUFDO0FBQUQsQ0FBQyxBQS9ERCxDQUFxRCxZQUFZLEdBK0RoRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER4b1Bpdm90R3JpZERhdGFTb3VyY2UgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgZ2V0IGZpZWxkcygpOiBBcnJheTxhbnkgfCB7IGFsbG93Q3Jvc3NHcm91cENhbGN1bGF0aW9uPzogYm9vbGVhbiwgYWxsb3dFeHBhbmRBbGw/OiBib29sZWFuLCBhbGxvd0ZpbHRlcmluZz86IGJvb2xlYW4sIGFsbG93U29ydGluZz86IGJvb2xlYW4sIGFsbG93U29ydGluZ0J5U3VtbWFyeT86IGJvb2xlYW4sIGFyZWE/OiBzdHJpbmcsIGFyZWFJbmRleD86IG51bWJlciwgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeT86IEZ1bmN0aW9uLCBjYWxjdWxhdGVTdW1tYXJ5VmFsdWU/OiBGdW5jdGlvbiwgY2FwdGlvbj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkYXRhRmllbGQ/OiBzdHJpbmcsIGRhdGFUeXBlPzogc3RyaW5nLCBkaXNwbGF5Rm9sZGVyPzogc3RyaW5nLCBleHBhbmRlZD86IGJvb2xlYW4sIGZpbHRlclR5cGU/OiBzdHJpbmcsIGZpbHRlclZhbHVlcz86IEFycmF5PGFueT4sIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBncm91cEluZGV4PzogbnVtYmVyLCBncm91cEludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nLCBncm91cE5hbWU/OiBzdHJpbmcsIGhlYWRlckZpbHRlcj86IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIGlzTWVhc3VyZT86IGJvb2xlYW4sIHByZWNpc2lvbj86IG51bWJlciwgcnVubmluZ1RvdGFsPzogc3RyaW5nLCBzZWxlY3Rvcj86IEZ1bmN0aW9uLCBzaG93R3JhbmRUb3RhbHM/OiBib29sZWFuLCBzaG93VG90YWxzPzogYm9vbGVhbiwgc2hvd1ZhbHVlcz86IGJvb2xlYW4sIHNvcnRCeT86IHN0cmluZywgc29ydEJ5U3VtbWFyeUZpZWxkPzogc3RyaW5nLCBzb3J0QnlTdW1tYXJ5UGF0aD86IEFycmF5PG51bWJlciB8IHN0cmluZz4sIHNvcnRpbmdNZXRob2Q/OiBGdW5jdGlvbiwgc29ydE9yZGVyPzogc3RyaW5nLCBzdW1tYXJ5RGlzcGxheU1vZGU/OiBzdHJpbmcsIHN1bW1hcnlUeXBlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIsIHdvcmRXcmFwRW5hYmxlZD86IGJvb2xlYW4gfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkcyh2YWx1ZTogQXJyYXk8YW55IHwgeyBhbGxvd0Nyb3NzR3JvdXBDYWxjdWxhdGlvbj86IGJvb2xlYW4sIGFsbG93RXhwYW5kQWxsPzogYm9vbGVhbiwgYWxsb3dGaWx0ZXJpbmc/OiBib29sZWFuLCBhbGxvd1NvcnRpbmc/OiBib29sZWFuLCBhbGxvd1NvcnRpbmdCeVN1bW1hcnk/OiBib29sZWFuLCBhcmVhPzogc3RyaW5nLCBhcmVhSW5kZXg/OiBudW1iZXIsIGNhbGN1bGF0ZUN1c3RvbVN1bW1hcnk/OiBGdW5jdGlvbiwgY2FsY3VsYXRlU3VtbWFyeVZhbHVlPzogRnVuY3Rpb24sIGNhcHRpb24/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGF0YUZpZWxkPzogc3RyaW5nLCBkYXRhVHlwZT86IHN0cmluZywgZGlzcGxheUZvbGRlcj86IHN0cmluZywgZXhwYW5kZWQ/OiBib29sZWFuLCBmaWx0ZXJUeXBlPzogc3RyaW5nLCBmaWx0ZXJWYWx1ZXM/OiBBcnJheTxhbnk+LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgZ3JvdXBJbmRleD86IG51bWJlciwgZ3JvdXBJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZywgZ3JvdXBOYW1lPzogc3RyaW5nLCBoZWFkZXJGaWx0ZXI/OiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBpc01lYXN1cmU/OiBib29sZWFuLCBwcmVjaXNpb24/OiBudW1iZXIsIHJ1bm5pbmdUb3RhbD86IHN0cmluZywgc2VsZWN0b3I/OiBGdW5jdGlvbiwgc2hvd0dyYW5kVG90YWxzPzogYm9vbGVhbiwgc2hvd1RvdGFscz86IGJvb2xlYW4sIHNob3dWYWx1ZXM/OiBib29sZWFuLCBzb3J0Qnk/OiBzdHJpbmcsIHNvcnRCeVN1bW1hcnlGaWVsZD86IHN0cmluZywgc29ydEJ5U3VtbWFyeVBhdGg/OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+LCBzb3J0aW5nTWV0aG9kPzogRnVuY3Rpb24sIHNvcnRPcmRlcj86IHN0cmluZywgc3VtbWFyeURpc3BsYXlNb2RlPzogc3RyaW5nLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyLCB3b3JkV3JhcEVuYWJsZWQ/OiBib29sZWFuIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWVsZHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbHRlcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uQ2hhbmdlZCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb25DaGFuZ2VkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb25DaGFuZ2VkKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25DaGFuZ2VkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkZpZWxkc1ByZXBhcmVkKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkZpZWxkc1ByZXBhcmVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb25GaWVsZHNQcmVwYXJlZCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29uRmllbGRzUHJlcGFyZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uTG9hZEVycm9yKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkxvYWRFcnJvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9uTG9hZEVycm9yKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25Mb2FkRXJyb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uTG9hZGluZ0NoYW5nZWQoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29uTG9hZGluZ0NoYW5nZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvbkxvYWRpbmdDaGFuZ2VkKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25Mb2FkaW5nQ2hhbmdlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVtb3RlT3BlcmF0aW9ucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZW1vdGVPcGVyYXRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVtb3RlT3BlcmF0aW9ucyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVtb3RlT3BlcmF0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmV0cmlldmVGaWVsZHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmV0cmlldmVGaWVsZHMnKTtcclxuICAgIH1cclxuICAgIHNldCByZXRyaWV2ZUZpZWxkcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmV0cmlldmVGaWVsZHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0b3JlKCk6IERldkV4cHJlc3MuZGF0YS5TdG9yZSB8IERldkV4cHJlc3MuZGF0YS5TdG9yZU9wdGlvbnMgfCBEZXZFeHByZXNzLmRhdGEuWG1sYVN0b3JlIHwgRGV2RXhwcmVzcy5kYXRhLlhtbGFTdG9yZU9wdGlvbnMgfCB7IHR5cGU/OiBzdHJpbmcgfSB8IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0b3JlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RvcmUodmFsdWU6IERldkV4cHJlc3MuZGF0YS5TdG9yZSB8IERldkV4cHJlc3MuZGF0YS5TdG9yZU9wdGlvbnMgfCBEZXZFeHByZXNzLmRhdGEuWG1sYVN0b3JlIHwgRGV2RXhwcmVzcy5kYXRhLlhtbGFTdG9yZU9wdGlvbnMgfCB7IHR5cGU/OiBzdHJpbmcgfSB8IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0b3JlJywgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
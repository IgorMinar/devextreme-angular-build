/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { NestedOption } from '../../../core/nested-option';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3QtZ3JpZC1kYXRhLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9iYXNlL3Bpdm90LWdyaWQtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJM0Q7SUFBcUQsa0RBQVk7SUFBakU7O0lBK0RBLENBQUM7SUE5REcsc0JBQUksMENBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7YUFDRCxVQUFXLEtBQWtoQztZQUN6aEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSwwQ0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQzthQUNELFVBQVcsS0FBVTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLDZDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO2FBQ0QsVUFBYyxLQUFlO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksb0RBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxDQUFDO2FBQ0QsVUFBcUIsS0FBZTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksK0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7YUFDRCxVQUFnQixLQUFlO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksb0RBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxDQUFDO2FBQ0QsVUFBcUIsS0FBZTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksb0RBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxDQUFDO2FBQ0QsVUFBcUIsS0FBYztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksa0RBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLENBQUM7YUFDRCxVQUFtQixLQUFjO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSx5Q0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQzthQUNELFVBQVUsS0FBMko7WUFDakssSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BSEE7SUFJTCw2QkFBQztBQUFELENBQUMsQUEvREQsQ0FBcUQsWUFBWSxHQStEaEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeG9QaXZvdEdyaWREYXRhU291cmNlIGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIGdldCBmaWVsZHMoKTogQXJyYXk8YW55IHwgeyBhbGxvd0Nyb3NzR3JvdXBDYWxjdWxhdGlvbj86IGJvb2xlYW4sIGFsbG93RXhwYW5kQWxsPzogYm9vbGVhbiwgYWxsb3dGaWx0ZXJpbmc/OiBib29sZWFuLCBhbGxvd1NvcnRpbmc/OiBib29sZWFuLCBhbGxvd1NvcnRpbmdCeVN1bW1hcnk/OiBib29sZWFuLCBhcmVhPzogc3RyaW5nLCBhcmVhSW5kZXg/OiBudW1iZXIsIGNhbGN1bGF0ZUN1c3RvbVN1bW1hcnk/OiBGdW5jdGlvbiwgY2FsY3VsYXRlU3VtbWFyeVZhbHVlPzogRnVuY3Rpb24sIGNhcHRpb24/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGF0YUZpZWxkPzogc3RyaW5nLCBkYXRhVHlwZT86IHN0cmluZywgZGlzcGxheUZvbGRlcj86IHN0cmluZywgZXhwYW5kZWQ/OiBib29sZWFuLCBmaWx0ZXJUeXBlPzogc3RyaW5nLCBmaWx0ZXJWYWx1ZXM/OiBBcnJheTxhbnk+LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgZ3JvdXBJbmRleD86IG51bWJlciwgZ3JvdXBJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZywgZ3JvdXBOYW1lPzogc3RyaW5nLCBoZWFkZXJGaWx0ZXI/OiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCBpc01lYXN1cmU/OiBib29sZWFuLCBwcmVjaXNpb24/OiBudW1iZXIsIHJ1bm5pbmdUb3RhbD86IHN0cmluZywgc2VsZWN0b3I/OiBGdW5jdGlvbiwgc2hvd0dyYW5kVG90YWxzPzogYm9vbGVhbiwgc2hvd1RvdGFscz86IGJvb2xlYW4sIHNob3dWYWx1ZXM/OiBib29sZWFuLCBzb3J0Qnk/OiBzdHJpbmcsIHNvcnRCeVN1bW1hcnlGaWVsZD86IHN0cmluZywgc29ydEJ5U3VtbWFyeVBhdGg/OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+LCBzb3J0aW5nTWV0aG9kPzogRnVuY3Rpb24sIHNvcnRPcmRlcj86IHN0cmluZywgc3VtbWFyeURpc3BsYXlNb2RlPzogc3RyaW5nLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyLCB3b3JkV3JhcEVuYWJsZWQ/OiBib29sZWFuIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWVsZHMnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWVsZHModmFsdWU6IEFycmF5PGFueSB8IHsgYWxsb3dDcm9zc0dyb3VwQ2FsY3VsYXRpb24/OiBib29sZWFuLCBhbGxvd0V4cGFuZEFsbD86IGJvb2xlYW4sIGFsbG93RmlsdGVyaW5nPzogYm9vbGVhbiwgYWxsb3dTb3J0aW5nPzogYm9vbGVhbiwgYWxsb3dTb3J0aW5nQnlTdW1tYXJ5PzogYm9vbGVhbiwgYXJlYT86IHN0cmluZywgYXJlYUluZGV4PzogbnVtYmVyLCBjYWxjdWxhdGVDdXN0b21TdW1tYXJ5PzogRnVuY3Rpb24sIGNhbGN1bGF0ZVN1bW1hcnlWYWx1ZT86IEZ1bmN0aW9uLCBjYXB0aW9uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRhdGFGaWVsZD86IHN0cmluZywgZGF0YVR5cGU/OiBzdHJpbmcsIGRpc3BsYXlGb2xkZXI/OiBzdHJpbmcsIGV4cGFuZGVkPzogYm9vbGVhbiwgZmlsdGVyVHlwZT86IHN0cmluZywgZmlsdGVyVmFsdWVzPzogQXJyYXk8YW55PiwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGdyb3VwSW5kZXg/OiBudW1iZXIsIGdyb3VwSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcsIGdyb3VwTmFtZT86IHN0cmluZywgaGVhZGVyRmlsdGVyPzogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgaXNNZWFzdXJlPzogYm9vbGVhbiwgcHJlY2lzaW9uPzogbnVtYmVyLCBydW5uaW5nVG90YWw/OiBzdHJpbmcsIHNlbGVjdG9yPzogRnVuY3Rpb24sIHNob3dHcmFuZFRvdGFscz86IGJvb2xlYW4sIHNob3dUb3RhbHM/OiBib29sZWFuLCBzaG93VmFsdWVzPzogYm9vbGVhbiwgc29ydEJ5Pzogc3RyaW5nLCBzb3J0QnlTdW1tYXJ5RmllbGQ/OiBzdHJpbmcsIHNvcnRCeVN1bW1hcnlQYXRoPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiwgc29ydGluZ01ldGhvZD86IEZ1bmN0aW9uLCBzb3J0T3JkZXI/OiBzdHJpbmcsIHN1bW1hcnlEaXNwbGF5TW9kZT86IHN0cmluZywgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciwgd29yZFdyYXBFbmFibGVkPzogYm9vbGVhbiB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWx0ZXIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkNoYW5nZWQoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29uQ2hhbmdlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9uQ2hhbmdlZCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29uQ2hhbmdlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25GaWVsZHNQcmVwYXJlZCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb25GaWVsZHNQcmVwYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9uRmllbGRzUHJlcGFyZWQodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvbkZpZWxkc1ByZXBhcmVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkxvYWRFcnJvcigpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb25Mb2FkRXJyb3InKTtcclxuICAgIH1cclxuICAgIHNldCBvbkxvYWRFcnJvcih2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29uTG9hZEVycm9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkxvYWRpbmdDaGFuZ2VkKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvbkxvYWRpbmdDaGFuZ2VkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb25Mb2FkaW5nQ2hhbmdlZCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29uTG9hZGluZ0NoYW5nZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlbW90ZU9wZXJhdGlvbnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVtb3RlT3BlcmF0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlbW90ZU9wZXJhdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlbW90ZU9wZXJhdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJldHJpZXZlRmllbGRzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JldHJpZXZlRmllbGRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmV0cmlldmVGaWVsZHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JldHJpZXZlRmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdG9yZSgpOiBEZXZFeHByZXNzLmRhdGEuU3RvcmUgfCBEZXZFeHByZXNzLmRhdGEuU3RvcmVPcHRpb25zIHwgRGV2RXhwcmVzcy5kYXRhLlhtbGFTdG9yZSB8IERldkV4cHJlc3MuZGF0YS5YbWxhU3RvcmVPcHRpb25zIHwgeyB0eXBlPzogc3RyaW5nIH0gfCBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdG9yZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0b3JlKHZhbHVlOiBEZXZFeHByZXNzLmRhdGEuU3RvcmUgfCBEZXZFeHByZXNzLmRhdGEuU3RvcmVPcHRpb25zIHwgRGV2RXhwcmVzcy5kYXRhLlhtbGFTdG9yZSB8IERldkV4cHJlc3MuZGF0YS5YbWxhU3RvcmVPcHRpb25zIHwgeyB0eXBlPzogc3RyaW5nIH0gfCBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdG9yZScsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as commonUtils from 'devextreme/core/utils/common';
var WatcherHelper = /** @class */ (function () {
    function WatcherHelper() {
        this._watchers = [];
    }
    WatcherHelper.prototype.getWatchMethod = function () {
        var _this = this;
        var watchMethod = function (valueGetter, valueChangeCallback, options) {
            var oldValue = valueGetter();
            options = options || {};
            if (!options.skipImmediate) {
                valueChangeCallback(oldValue);
            }
            var watcher = function () {
                var newValue = valueGetter();
                if (_this._isDifferentValues(oldValue, newValue, options.deep)) {
                    valueChangeCallback(newValue);
                    oldValue = newValue;
                }
            };
            _this._watchers.push(watcher);
            return function () {
                var index = _this._watchers.indexOf(watcher);
                if (index !== -1) {
                    _this._watchers.splice(index, 1);
                }
            };
        };
        return watchMethod;
    };
    WatcherHelper.prototype._isDifferentValues = function (oldValue, newValue, deepCheck) {
        var comparableNewValue = this._toComparable(newValue);
        var comparableOldValue = this._toComparable(oldValue);
        var isObjectValues = comparableNewValue instanceof Object && comparableOldValue instanceof Object;
        if (deepCheck && isObjectValues) {
            return this._checkObjectsFields(newValue, oldValue);
        }
        return comparableNewValue !== comparableOldValue;
    };
    WatcherHelper.prototype._toComparable = function (value) {
        if (value instanceof Date) {
            return value.getTime();
        }
        return value;
    };
    WatcherHelper.prototype._checkObjectsFields = function (checkingFromObject, checkingToObject) {
        for (var field in checkingFromObject) {
            var oldValue = this._toComparable(checkingFromObject[field]);
            var newValue = this._toComparable(checkingToObject[field]);
            var isEqualObjects = false;
            if (typeof oldValue === 'object' && typeof newValue === 'object') {
                isEqualObjects = commonUtils.equalByValue(oldValue, newValue);
            }
            if (oldValue !== newValue && !isEqualObjects) {
                return true;
            }
        }
    };
    WatcherHelper.prototype.checkWatchers = function () {
        try {
            for (var _a = tslib_1.__values(this._watchers), _b = _a.next(); !_b.done; _b = _a.next()) {
                var watcher = _b.value;
                watcher();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    WatcherHelper = tslib_1.__decorate([
        Injectable()
    ], WatcherHelper);
    return WatcherHelper;
}());
export { WatcherHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hlci1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJjb3JlL3dhdGNoZXItaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsVUFBVSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sS0FBSyxXQUFXLE1BQU0sOEJBQThCLENBQUM7QUFHNUQ7SUFEQTtRQUVZLGNBQVMsR0FBVSxFQUFFLENBQUM7SUF5RWxDLENBQUM7SUF2RUcsc0NBQWMsR0FBZDtRQUFBLGlCQThCQztRQTdCRyxJQUFJLFdBQVcsR0FBRyxVQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxPQUFPO1lBQ3hELElBQUksUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDO1lBQzdCLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxJQUFJLE9BQU8sR0FBRztnQkFDVixJQUFJLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztnQkFFN0IsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlCLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDLENBQUM7WUFFRixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU3QixNQUFNLENBQUM7Z0JBQ0gsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRTVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRU8sMENBQWtCLEdBQTFCLFVBQTJCLFFBQWEsRUFBRSxRQUFhLEVBQUUsU0FBa0I7UUFDdkUsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLGNBQWMsR0FBRyxrQkFBa0IsWUFBWSxNQUFNLElBQUksa0JBQWtCLFlBQVksTUFBTSxDQUFDO1FBRWxHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxNQUFNLENBQUMsa0JBQWtCLEtBQUssa0JBQWtCLENBQUM7SUFDckQsQ0FBQztJQUVPLHFDQUFhLEdBQXJCLFVBQXNCLEtBQUs7UUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sMkNBQW1CLEdBQTNCLFVBQTRCLGtCQUEwQixFQUFFLGdCQUF3QjtRQUM1RSxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFFM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELGNBQWMsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQWEsR0FBYjs7WUFDRyxHQUFHLENBQUMsQ0FBZ0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxTQUFTLENBQUEsZ0JBQUE7Z0JBQTdCLElBQUksT0FBTyxXQUFBO2dCQUNYLE9BQU8sRUFBRSxDQUFDO2FBQ2I7Ozs7Ozs7Ozs7SUFDTCxDQUFDO0lBekVRLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYSxDQTBFekI7SUFBRCxvQkFBQztDQUFBLEFBMUVELElBMEVDO1NBMUVZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgY29tbW9uVXRpbHMgZnJvbSAnZGV2ZXh0cmVtZS9jb3JlL3V0aWxzL2NvbW1vbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXYXRjaGVySGVscGVyIHtcclxuICAgIHByaXZhdGUgX3dhdGNoZXJzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGdldFdhdGNoTWV0aG9kKCkge1xyXG4gICAgICAgIGxldCB3YXRjaE1ldGhvZCA9ICh2YWx1ZUdldHRlciwgdmFsdWVDaGFuZ2VDYWxsYmFjaywgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb2xkVmFsdWUgPSB2YWx1ZUdldHRlcigpO1xyXG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5za2lwSW1tZWRpYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZUNhbGxiYWNrKG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHdhdGNoZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZUdldHRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0RpZmZlcmVudFZhbHVlcyhvbGRWYWx1ZSwgbmV3VmFsdWUsIG9wdGlvbnMuZGVlcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZUNhbGxiYWNrKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fd2F0Y2hlcnMucHVzaCh3YXRjaGVyKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl93YXRjaGVycy5pbmRleE9mKHdhdGNoZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXRjaGVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB3YXRjaE1ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0RpZmZlcmVudFZhbHVlcyhvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55LCBkZWVwQ2hlY2s6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgY29tcGFyYWJsZU5ld1ZhbHVlID0gdGhpcy5fdG9Db21wYXJhYmxlKG5ld1ZhbHVlKTtcclxuICAgICAgICBsZXQgY29tcGFyYWJsZU9sZFZhbHVlID0gdGhpcy5fdG9Db21wYXJhYmxlKG9sZFZhbHVlKTtcclxuICAgICAgICBsZXQgaXNPYmplY3RWYWx1ZXMgPSBjb21wYXJhYmxlTmV3VmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgY29tcGFyYWJsZU9sZFZhbHVlIGluc3RhbmNlb2YgT2JqZWN0O1xyXG5cclxuICAgICAgICBpZiAoZGVlcENoZWNrICYmIGlzT2JqZWN0VmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGVja09iamVjdHNGaWVsZHMobmV3VmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmFibGVOZXdWYWx1ZSAhPT0gY29tcGFyYWJsZU9sZFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3RvQ29tcGFyYWJsZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jaGVja09iamVjdHNGaWVsZHMoY2hlY2tpbmdGcm9tT2JqZWN0OiBPYmplY3QsIGNoZWNraW5nVG9PYmplY3Q6IE9iamVjdCkge1xyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIGNoZWNraW5nRnJvbU9iamVjdCkge1xyXG4gICAgICAgICAgICBsZXQgb2xkVmFsdWUgPSB0aGlzLl90b0NvbXBhcmFibGUoY2hlY2tpbmdGcm9tT2JqZWN0W2ZpZWxkXSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHRoaXMuX3RvQ29tcGFyYWJsZShjaGVja2luZ1RvT2JqZWN0W2ZpZWxkXSk7XHJcbiAgICAgICAgICAgIGxldCBpc0VxdWFsT2JqZWN0cyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbGRWYWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgaXNFcXVhbE9iamVjdHMgPSBjb21tb25VdGlscy5lcXVhbEJ5VmFsdWUob2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlICYmICFpc0VxdWFsT2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tXYXRjaGVycygpIHtcclxuICAgICAgIGZvciAobGV0IHdhdGNoZXIgb2YgdGhpcy5fd2F0Y2hlcnMpIHtcclxuICAgICAgICAgICAgd2F0Y2hlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
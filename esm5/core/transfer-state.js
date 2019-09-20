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
import { PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import * as ajax from 'devextreme/core/utils/ajax';
import * as deferred from 'devextreme/core/utils/deferred';
import { TransferState, makeStateKey, BrowserTransferStateModule } from '@angular/platform-browser';
var DxServerTransferStateModule = (function () {
    function DxServerTransferStateModule(state, platformId) {
        this.state = state;
        this.platformId = platformId;
        var that = this;
        ajax.inject({
            sendRequest: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var key = makeStateKey(that.generateKey(args)), cachedData = that.state.get(key, null);
                if (isPlatformServer(that.platformId)) {
                    var result = this.callBase.apply(this, args);
                    result.always(function (data, status) {
                        var dataForCache = {
                            data: data,
                            status: status
                        };
                        that.state.set(key, dataForCache);
                    });
                    return result;
                }
                else {
                    if (cachedData) {
                        var d = new deferred.Deferred();
                        d.resolve(cachedData.data, cachedData.status);
                        that.state.set(key, null);
                        return d.promise();
                    }
                    return this.callBase.apply(this, args);
                }
            }
        });
    }
    DxServerTransferStateModule.prototype.generateKey = function (args) {
        var keyValue = '';
        for (var key in args) {
            if (typeof args[key] === 'object') {
                var objKey = this.generateKey(args[key]);
                keyValue += key + objKey;
            }
            else {
                keyValue += key + args[key];
            }
        }
        return keyValue;
    };
    DxServerTransferStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserTransferStateModule
                    ]
                },] },
    ];
    /** @nocollapse */
    DxServerTransferStateModule.ctorParameters = function () { return [
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    return DxServerTransferStateModule;
}());
export { DxServerTransferStateModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb3JlL3RyYW5zZmVyLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQWFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssSUFBSSxNQUFNLDRCQUE0QixDQUFDO0FBQ25ELE9BQU8sS0FBSyxRQUFRLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFTaEcscUNBQW9CLEtBQW9CLEVBQStCO1FBQW5ELFVBQUssR0FBTCxLQUFLLENBQWU7UUFBK0IsZUFBVSxHQUFWLFVBQVU7UUFDN0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDUixXQUFXLEVBQUU7Z0JBQVMsY0FBTztxQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO29CQUFQLHlCQUFPOztnQkFDekIsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDMUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFXLENBQUMsQ0FBQztnQkFFbEQsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLE1BQU07d0JBQ3ZCLElBQUksWUFBWSxHQUFHOzRCQUNmLElBQUksRUFBRSxJQUFJOzRCQUNWLE1BQU0sRUFBRSxNQUFNO3lCQUNqQixDQUFDO3dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFtQixDQUFDLENBQUM7cUJBQzVDLENBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNqQjtnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNoQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBVyxDQUFDLENBQUM7d0JBRWpDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ3RCO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzFDO2FBQ0o7U0FDSixDQUFDLENBQUM7S0FDTjtJQUVELGlEQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ1osSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekMsUUFBUSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUM7YUFDNUI7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQjtTQUNKO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUNuQjs7Z0JBbkRKLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsMEJBQTBCO3FCQUMzQjtpQkFDRjs7OztnQkFOUSxhQUFhO2dEQVN5QixNQUFNLFNBQUMsV0FBVzs7c0NBMUJqRTs7U0F5QmEsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgKiBhcyBhamF4IGZyb20gJ2RldmV4dHJlbWUvY29yZS91dGlscy9hamF4JztcclxuaW1wb3J0ICogYXMgZGVmZXJyZWQgZnJvbSAnZGV2ZXh0cmVtZS9jb3JlL3V0aWxzL2RlZmVycmVkJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSwgbWFrZVN0YXRlS2V5LCBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEeFNlcnZlclRyYW5zZmVyU3RhdGVNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogVHJhbnNmZXJTdGF0ZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGFqYXguaW5qZWN0KHtcclxuICAgICAgICAgICAgc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBtYWtlU3RhdGVLZXkodGhhdC5nZW5lcmF0ZUtleShhcmdzKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkRGF0YSA9IHRoYXQuc3RhdGUuZ2V0KGtleSwgbnVsbCBhcyBhbnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoYXQucGxhdGZvcm1JZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5jYWxsQmFzZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWx3YXlzKChkYXRhLCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFGb3JDYWNoZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0YXRlLnNldChrZXksIGRhdGFGb3JDYWNoZSBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZWREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkID0gbmV3IGRlZmVycmVkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQucmVzb2x2ZShjYWNoZWREYXRhLmRhdGEsIGNhY2hlZERhdGEuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdGF0ZS5zZXQoa2V5LCBudWxsIGFzIGFueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5wcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxCYXNlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVLZXkoYXJncykge1xyXG4gICAgICAgIGxldCBrZXlWYWx1ZSA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhcmdzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1trZXldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaktleSA9IHRoaXMuZ2VuZXJhdGVLZXkoYXJnc1trZXldKTtcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlICs9IGtleSArIG9iaktleTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlICs9IGtleSArIGFyZ3Nba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGtleVZhbHVlO1xyXG4gICAgfVxyXG4gfVxyXG4iXX0=
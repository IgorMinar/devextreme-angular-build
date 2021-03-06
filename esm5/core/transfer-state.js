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
import { PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import * as ajax from 'devextreme/core/utils/ajax';
import * as deferred from 'devextreme/core/utils/deferred';
import { TransferState, makeStateKey, BrowserTransferStateModule } from '@angular/platform-browser';
var DxServerTransferStateModule = /** @class */ (function () {
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
    DxServerTransferStateModule.ctorParameters = function () { return [
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    DxServerTransferStateModule = tslib_1.__decorate([
        NgModule({
            imports: [
                BrowserTransferStateModule
            ]
        }),
        tslib_1.__param(1, Inject(PLATFORM_ID))
    ], DxServerTransferStateModule);
    return DxServerTransferStateModule;
}());
export { DxServerTransferStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvY29yZS8iLCJzb3VyY2VzIjpbInRyYW5zZmVyLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssSUFBSSxNQUFNLDRCQUE0QixDQUFDO0FBQ25ELE9BQU8sS0FBSyxRQUFRLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVFwRztJQUNJLHFDQUFvQixLQUFvQixFQUErQixVQUFlO1FBQWxFLFVBQUssR0FBTCxLQUFLLENBQWU7UUFBK0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNsRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNSLFdBQVcsRUFBRTtnQkFBUyxjQUFPO3FCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87b0JBQVAseUJBQU87O2dCQUN6QixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUMxQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQVcsQ0FBQyxDQUFDO2dCQUVsRCxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLE1BQU07d0JBQ3ZCLElBQUksWUFBWSxHQUFHOzRCQUNmLElBQUksRUFBRSxJQUFJOzRCQUNWLE1BQU0sRUFBRSxNQUFNO3lCQUNqQixDQUFDO3dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFtQixDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO29CQUNILE9BQU8sTUFBTSxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDSCxJQUFJLFVBQVUsRUFBRTt3QkFDWixJQUFJLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDaEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQVcsQ0FBQyxDQUFDO3dCQUVqQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDdEI7b0JBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzFDO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpREFBVyxHQUFYLFVBQVksSUFBSTtRQUNaLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNsQixJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekMsUUFBUSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0gsUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0I7U0FDSjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7O2dCQTVDMEIsYUFBYTtnREFBRyxNQUFNLFNBQUMsV0FBVzs7SUFEcEQsMkJBQTJCO1FBTnZDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCwwQkFBMEI7YUFDM0I7U0FDRixDQUFDO1FBRzZDLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtPQURyRCwyQkFBMkIsQ0E4Q3RDO0lBQUQsa0NBQUM7Q0FBQSxBQTlDRixJQThDRTtTQTlDVywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCAqIGFzIGFqYXggZnJvbSAnZGV2ZXh0cmVtZS9jb3JlL3V0aWxzL2FqYXgnO1xyXG5pbXBvcnQgKiBhcyBkZWZlcnJlZCBmcm9tICdkZXZleHRyZW1lL2NvcmUvdXRpbHMvZGVmZXJyZWQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlLCBtYWtlU3RhdGVLZXksIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIER4U2VydmVyVHJhbnNmZXJTdGF0ZU1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBUcmFuc2ZlclN0YXRlLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgYWpheC5pbmplY3Qoe1xyXG4gICAgICAgICAgICBzZW5kUmVxdWVzdDogZnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IG1ha2VTdGF0ZUtleSh0aGF0LmdlbmVyYXRlS2V5KGFyZ3MpKSxcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZWREYXRhID0gdGhhdC5zdGF0ZS5nZXQoa2V5LCBudWxsIGFzIGFueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhhdC5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmNhbGxCYXNlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hbHdheXMoKGRhdGEsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUZvckNhY2hlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RhdGUuc2V0KGtleSwgZGF0YUZvckNhY2hlIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlZERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBuZXcgZGVmZXJyZWQuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5yZXNvbHZlKGNhY2hlZERhdGEuZGF0YSwgY2FjaGVkRGF0YS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0YXRlLnNldChrZXksIG51bGwgYXMgYW55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLnByb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbEJhc2UuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUtleShhcmdzKSB7XHJcbiAgICAgICAgbGV0IGtleVZhbHVlID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFyZ3MpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2tleV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqS2V5ID0gdGhpcy5nZW5lcmF0ZUtleShhcmdzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAga2V5VmFsdWUgKz0ga2V5ICsgb2JqS2V5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAga2V5VmFsdWUgKz0ga2V5ICsgYXJnc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ga2V5VmFsdWU7XHJcbiAgICB9XHJcbiB9XHJcbiJdfQ==
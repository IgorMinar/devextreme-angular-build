import * as tslib_1 from "tslib";
import { PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import * as ajax from 'devextreme/core/utils/ajax';
import * as deferred from 'devextreme/core/utils/deferred';
import { TransferState, makeStateKey, BrowserTransferStateModule } from '@angular/platform-browser';
let DxServerTransferStateModule = class DxServerTransferStateModule {
    constructor(state, platformId) {
        this.state = state;
        this.platformId = platformId;
        let that = this;
        ajax.inject({
            sendRequest: function (...args) {
                let key = makeStateKey(that.generateKey(args)), cachedData = that.state.get(key, null);
                if (isPlatformServer(that.platformId)) {
                    let result = this.callBase.apply(this, args);
                    result.always((data, status) => {
                        let dataForCache = {
                            data: data,
                            status: status
                        };
                        that.state.set(key, dataForCache);
                    });
                    return result;
                }
                else {
                    if (cachedData) {
                        let d = new deferred.Deferred();
                        d.resolve(cachedData.data, cachedData.status);
                        that.state.set(key, null);
                        return d.promise();
                    }
                    return this.callBase.apply(this, args);
                }
            }
        });
    }
    generateKey(args) {
        let keyValue = '';
        for (let key in args) {
            if (typeof args[key] === 'object') {
                let objKey = this.generateKey(args[key]);
                keyValue += key + objKey;
            }
            else {
                keyValue += key + args[key];
            }
        }
        return keyValue;
    }
};
DxServerTransferStateModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserTransferStateModule
        ]
    }),
    tslib_1.__param(1, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [TransferState, Object])
], DxServerTransferStateModule);
export { DxServerTransferStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJjb3JlL3RyYW5zZmVyLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxLQUFLLElBQUksTUFBTSw0QkFBNEIsQ0FBQztBQUNuRCxPQUFPLEtBQUssUUFBUSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRcEcsSUFBYSwyQkFBMkIsR0FBeEM7SUFDSSxZQUFvQixLQUFvQixFQUErQixVQUFlO1FBQWxFLFVBQUssR0FBTCxLQUFLLENBQWU7UUFBK0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNsRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNSLFdBQVcsRUFBRSxVQUFTLEdBQUcsSUFBSTtnQkFDekIsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDMUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFXLENBQUMsQ0FBQztnQkFFbEQsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFO3dCQUMzQixJQUFJLFlBQVksR0FBRzs0QkFDZixJQUFJLEVBQUUsSUFBSTs0QkFDVixNQUFNLEVBQUUsTUFBTTt5QkFDakIsQ0FBQzt3QkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBbUIsQ0FBQyxDQUFDO29CQUM3QyxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ2hDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFXLENBQUMsQ0FBQzt3QkFFakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBSTtRQUNaLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLFFBQVEsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQzdCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUNILENBQUE7QUE5Q1csMkJBQTJCO0lBTnZDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDBCQUEwQjtTQUMzQjtLQUNGLENBQUM7SUFHNkMsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzZDQUFuQyxhQUFhO0dBRC9CLDJCQUEyQixDQThDdEM7U0E5Q1csMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCAqIGFzIGFqYXggZnJvbSAnZGV2ZXh0cmVtZS9jb3JlL3V0aWxzL2FqYXgnO1xyXG5pbXBvcnQgKiBhcyBkZWZlcnJlZCBmcm9tICdkZXZleHRyZW1lL2NvcmUvdXRpbHMvZGVmZXJyZWQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlLCBtYWtlU3RhdGVLZXksIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIER4U2VydmVyVHJhbnNmZXJTdGF0ZU1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBUcmFuc2ZlclN0YXRlLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgYWpheC5pbmplY3Qoe1xyXG4gICAgICAgICAgICBzZW5kUmVxdWVzdDogZnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IG1ha2VTdGF0ZUtleSh0aGF0LmdlbmVyYXRlS2V5KGFyZ3MpKSxcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZWREYXRhID0gdGhhdC5zdGF0ZS5nZXQoa2V5LCBudWxsIGFzIGFueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhhdC5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmNhbGxCYXNlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hbHdheXMoKGRhdGEsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUZvckNhY2hlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RhdGUuc2V0KGtleSwgZGF0YUZvckNhY2hlIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlZERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBuZXcgZGVmZXJyZWQuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5yZXNvbHZlKGNhY2hlZERhdGEuZGF0YSwgY2FjaGVkRGF0YS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0YXRlLnNldChrZXksIG51bGwgYXMgYW55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLnByb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbEJhc2UuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUtleShhcmdzKSB7XHJcbiAgICAgICAgbGV0IGtleVZhbHVlID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFyZ3MpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2tleV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqS2V5ID0gdGhpcy5nZW5lcmF0ZUtleShhcmdzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAga2V5VmFsdWUgKz0ga2V5ICsgb2JqS2V5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAga2V5VmFsdWUgKz0ga2V5ICsgYXJnc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ga2V5VmFsdWU7XHJcbiAgICB9XHJcbiB9XHJcbiJdfQ==
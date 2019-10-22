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
DxServerTransferStateModule.ctorParameters = () => [
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
DxServerTransferStateModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserTransferStateModule
        ]
    }),
    tslib_1.__param(1, Inject(PLATFORM_ID))
], DxServerTransferStateModule);
export { DxServerTransferStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvY29yZS8iLCJzb3VyY2VzIjpbInRyYW5zZmVyLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssSUFBSSxNQUFNLDRCQUE0QixDQUFDO0FBQ25ELE9BQU8sS0FBSyxRQUFRLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVFwRyxJQUFhLDJCQUEyQixHQUF4QztJQUNJLFlBQW9CLEtBQW9CLEVBQStCLFVBQWU7UUFBbEUsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUErQixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ2xGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ1IsV0FBVyxFQUFFLFVBQVMsR0FBRyxJQUFJO2dCQUN6QixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUMxQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQVcsQ0FBQyxDQUFDO2dCQUVsRCxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFO3dCQUMzQixJQUFJLFlBQVksR0FBRzs0QkFDZixJQUFJLEVBQUUsSUFBSTs0QkFDVixNQUFNLEVBQUUsTUFBTTt5QkFDakIsQ0FBQzt3QkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBbUIsQ0FBQyxDQUFDO29CQUM3QyxDQUFDLENBQUMsQ0FBQztvQkFDSCxPQUFPLE1BQU0sQ0FBQztpQkFDakI7cUJBQU07b0JBQ0gsSUFBSSxVQUFVLEVBQUU7d0JBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ2hDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFXLENBQUMsQ0FBQzt3QkFFakMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ3RCO29CQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUMxQztZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQUk7UUFDWixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLFFBQVEsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNILFFBQVEsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO1NBQ0o7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBQ0gsQ0FBQTs7WUE3QzZCLGFBQWE7NENBQUcsTUFBTSxTQUFDLFdBQVc7O0FBRHBELDJCQUEyQjtJQU52QyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCwwQkFBMEI7U0FDM0I7S0FDRixDQUFDO0lBRzZDLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtHQURyRCwyQkFBMkIsQ0E4Q3RDO1NBOUNXLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0ICogYXMgYWpheCBmcm9tICdkZXZleHRyZW1lL2NvcmUvdXRpbHMvYWpheCc7XHJcbmltcG9ydCAqIGFzIGRlZmVycmVkIGZyb20gJ2RldmV4dHJlbWUvY29yZS91dGlscy9kZWZlcnJlZCc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUsIG1ha2VTdGF0ZUtleSwgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRHhTZXJ2ZXJUcmFuc2ZlclN0YXRlTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IFRyYW5zZmVyU3RhdGUsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBhamF4LmluamVjdCh7XHJcbiAgICAgICAgICAgIHNlbmRSZXF1ZXN0OiBmdW5jdGlvbiguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gbWFrZVN0YXRlS2V5KHRoYXQuZ2VuZXJhdGVLZXkoYXJncykpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlZERhdGEgPSB0aGF0LnN0YXRlLmdldChrZXksIG51bGwgYXMgYW55KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGF0LnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuY2FsbEJhc2UuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFsd2F5cygoZGF0YSwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhRm9yQ2FjaGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdGF0ZS5zZXQoa2V5LCBkYXRhRm9yQ2FjaGUgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZCA9IG5ldyBkZWZlcnJlZC5EZWZlcnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLnJlc29sdmUoY2FjaGVkRGF0YS5kYXRhLCBjYWNoZWREYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RhdGUuc2V0KGtleSwgbnVsbCBhcyBhbnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQucHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsQmFzZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlS2V5KGFyZ3MpIHtcclxuICAgICAgICBsZXQga2V5VmFsdWUgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXJncykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3Nba2V5XSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmpLZXkgPSB0aGlzLmdlbmVyYXRlS2V5KGFyZ3Nba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZSArPSBrZXkgKyBvYmpLZXk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZSArPSBrZXkgKyBhcmdzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlWYWx1ZTtcclxuICAgIH1cclxuIH1cclxuIl19
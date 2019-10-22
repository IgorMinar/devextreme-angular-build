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
import { NgModule, Inject, NgZone, Optional } from '@angular/core';
import { XhrFactory } from '@angular/common/http';
import * as httpRequest from 'devextreme/core/http_request';
import { DOCUMENT } from '@angular/common';
import * as domAdapter from 'devextreme/core/dom_adapter';
import * as readyCallbacks from 'devextreme/core/utils/ready_callbacks';
import * as eventsEngine from 'devextreme/events/core/events_engine';
const outsideZoneEvents = ['mousemove', 'mouseover', 'mouseout'];
const insideZoneEvents = ['mouseup', 'click', 'mousedown', 'transitionend', 'wheel'];
let originalAdd;
let callbacks = [];
readyCallbacks.inject({
    add: function (callback) {
        originalAdd = this.callBase.bind(this);
        callbacks.push(callback);
    }
});
let DxIntegrationModule = class DxIntegrationModule {
    constructor(document, ngZone, xhrFactory) {
        domAdapter.inject({
            _document: document,
            listen: function (...args) {
                const eventName = args[1];
                if (outsideZoneEvents.indexOf(eventName) !== -1) {
                    return ngZone.runOutsideAngular(() => {
                        return this.callBase.apply(this, args);
                    });
                }
                if (ngZone.isStable && insideZoneEvents.indexOf(eventName) !== -1) {
                    return ngZone.run(() => {
                        return this.callBase.apply(this, args);
                    });
                }
                return this.callBase.apply(this, args);
            },
            isElementNode: function (element) {
                return element && element.nodeType === 1;
            },
            isTextNode: function (element) {
                return element && element.nodeType === 3;
            },
            isDocument: function (element) {
                return element && element.nodeType === 9;
            }
        });
        httpRequest.inject({
            getXhr: function () {
                if (!xhrFactory) {
                    return this.callBase.apply(this);
                }
                let _xhr = xhrFactory.build();
                if (!('withCredentials' in _xhr)) {
                    _xhr['withCredentials'] = false;
                }
                return _xhr;
            }
        });
        ngZone.run(() => {
            eventsEngine.set({});
            callbacks.forEach(callback => originalAdd.call(null, callback));
            callbacks = [];
            readyCallbacks.fire();
        });
    }
};
DxIntegrationModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: XhrFactory, decorators: [{ type: Optional }] }
];
DxIntegrationModule = tslib_1.__decorate([
    NgModule({}),
    tslib_1.__param(0, Inject(DOCUMENT)), tslib_1.__param(2, Optional())
], DxIntegrationModule);
export { DxIntegrationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvY29yZS8iLCJzb3VyY2VzIjpbImludGVncmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUdILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sS0FBSyxXQUFXLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sS0FBSyxVQUFVLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxLQUFLLGNBQWMsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEtBQUssWUFBWSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2pFLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFckYsSUFBSSxXQUFXLENBQUM7QUFDaEIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDbEIsR0FBRyxFQUFFLFVBQVMsUUFBUTtRQUNsQixXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBR0gsSUFBYSxtQkFBbUIsR0FBaEM7SUFDSSxZQUE4QixRQUFhLEVBQUUsTUFBYyxFQUFjLFVBQXNCO1FBQzNGLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDZCxTQUFTLEVBQUUsUUFBUTtZQUVuQixNQUFNLEVBQUUsVUFBUyxHQUFHLElBQUk7Z0JBQ3BCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzdDLE9BQU8sTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTt3QkFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzNDLENBQUMsQ0FBQyxDQUFDO2lCQUNOO2dCQUVELElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQy9ELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7d0JBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMzQyxDQUFDLENBQUMsQ0FBQztpQkFDTjtnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBRUQsYUFBYSxFQUFFLFVBQVMsT0FBTztnQkFDM0IsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQztZQUVELFVBQVUsRUFBRSxVQUFTLE9BQU87Z0JBQ3hCLE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFFRCxVQUFVLEVBQUUsVUFBUyxPQUFPO2dCQUN4QixPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNmLE1BQU0sRUFBRTtnQkFDSixJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDbkM7Z0JBRUQsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1osWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ2YsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUE7OzRDQXZEZ0IsTUFBTSxTQUFDLFFBQVE7WUFBeUIsTUFBTTtZQUEwQixVQUFVLHVCQUFqQyxRQUFROztBQUQ3RCxtQkFBbUI7SUFEL0IsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUVJLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQSxFQUFpQyxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtHQUQvRCxtQkFBbUIsQ0F3RC9CO1NBeERZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdCwgTmdab25lLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgKiBhcyBodHRwUmVxdWVzdCBmcm9tICdkZXZleHRyZW1lL2NvcmUvaHR0cF9yZXF1ZXN0JztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0ICogYXMgZG9tQWRhcHRlciBmcm9tICdkZXZleHRyZW1lL2NvcmUvZG9tX2FkYXB0ZXInO1xyXG5pbXBvcnQgKiBhcyByZWFkeUNhbGxiYWNrcyBmcm9tICdkZXZleHRyZW1lL2NvcmUvdXRpbHMvcmVhZHlfY2FsbGJhY2tzJztcclxuaW1wb3J0ICogYXMgZXZlbnRzRW5naW5lIGZyb20gJ2RldmV4dHJlbWUvZXZlbnRzL2NvcmUvZXZlbnRzX2VuZ2luZSc7XHJcblxyXG5jb25zdCBvdXRzaWRlWm9uZUV2ZW50cyA9IFsnbW91c2Vtb3ZlJywgJ21vdXNlb3ZlcicsICdtb3VzZW91dCddO1xyXG5jb25zdCBpbnNpZGVab25lRXZlbnRzID0gWydtb3VzZXVwJywgJ2NsaWNrJywgJ21vdXNlZG93bicsICd0cmFuc2l0aW9uZW5kJywgJ3doZWVsJ107XHJcblxyXG5sZXQgb3JpZ2luYWxBZGQ7XHJcbmxldCBjYWxsYmFja3MgPSBbXTtcclxucmVhZHlDYWxsYmFja3MuaW5qZWN0KHtcclxuICAgIGFkZDogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICBvcmlnaW5hbEFkZCA9IHRoaXMuY2FsbEJhc2UuYmluZCh0aGlzKTtcclxuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQE5nTW9kdWxlKHt9KVxyXG5leHBvcnQgY2xhc3MgRHhJbnRlZ3JhdGlvbk1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55LCBuZ1pvbmU6IE5nWm9uZSwgQE9wdGlvbmFsKCkgeGhyRmFjdG9yeTogWGhyRmFjdG9yeSkge1xyXG4gICAgICAgIGRvbUFkYXB0ZXIuaW5qZWN0KHtcclxuICAgICAgICAgICAgX2RvY3VtZW50OiBkb2N1bWVudCxcclxuXHJcbiAgICAgICAgICAgIGxpc3RlbjogZnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gYXJnc1sxXTtcclxuICAgICAgICAgICAgICAgIGlmIChvdXRzaWRlWm9uZUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxCYXNlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChuZ1pvbmUuaXNTdGFibGUgJiYgaW5zaWRlWm9uZUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsQmFzZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsQmFzZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGlzRWxlbWVudE5vZGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDE7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpc1RleHROb2RlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAzO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaXNEb2N1bWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBodHRwUmVxdWVzdC5pbmplY3Qoe1xyXG4gICAgICAgICAgICBnZXRYaHI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF4aHJGYWN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbEJhc2UuYXBwbHkodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgX3hociA9IHhockZhY3RvcnkuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghKCd3aXRoQ3JlZGVudGlhbHMnIGluIF94aHIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3hoclsnd2l0aENyZWRlbnRpYWxzJ10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3hocjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgZXZlbnRzRW5naW5lLnNldCh7fSk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IG9yaWdpbmFsQWRkLmNhbGwobnVsbCwgY2FsbGJhY2spKTtcclxuICAgICAgICAgICAgY2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgICAgIHJlYWR5Q2FsbGJhY2tzLmZpcmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
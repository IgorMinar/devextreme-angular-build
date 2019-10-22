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
var outsideZoneEvents = ['mousemove', 'mouseover', 'mouseout'];
var insideZoneEvents = ['mouseup', 'click', 'mousedown', 'transitionend', 'wheel'];
var originalAdd;
var callbacks = [];
readyCallbacks.inject({
    add: function (callback) {
        originalAdd = this.callBase.bind(this);
        callbacks.push(callback);
    }
});
var DxIntegrationModule = /** @class */ (function () {
    function DxIntegrationModule(document, ngZone, xhrFactory) {
        domAdapter.inject({
            _document: document,
            listen: function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var eventName = args[1];
                if (outsideZoneEvents.indexOf(eventName) !== -1) {
                    return ngZone.runOutsideAngular(function () {
                        return _this.callBase.apply(_this, args);
                    });
                }
                if (ngZone.isStable && insideZoneEvents.indexOf(eventName) !== -1) {
                    return ngZone.run(function () {
                        return _this.callBase.apply(_this, args);
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
                var _xhr = xhrFactory.build();
                if (!('withCredentials' in _xhr)) {
                    _xhr['withCredentials'] = false;
                }
                return _xhr;
            }
        });
        ngZone.run(function () {
            eventsEngine.set({});
            callbacks.forEach(function (callback) { return originalAdd.call(null, callback); });
            callbacks = [];
            readyCallbacks.fire();
        });
    }
    DxIntegrationModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone },
        { type: XhrFactory, decorators: [{ type: Optional }] }
    ]; };
    DxIntegrationModule = tslib_1.__decorate([
        NgModule({}),
        tslib_1.__param(0, Inject(DOCUMENT)), tslib_1.__param(2, Optional())
    ], DxIntegrationModule);
    return DxIntegrationModule;
}());
export { DxIntegrationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvY29yZS8iLCJzb3VyY2VzIjpbImludGVncmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUdILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sS0FBSyxXQUFXLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sS0FBSyxVQUFVLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxLQUFLLGNBQWMsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEtBQUssWUFBWSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFckYsSUFBSSxXQUFXLENBQUM7QUFDaEIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDbEIsR0FBRyxFQUFFLFVBQVMsUUFBUTtRQUNsQixXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBR0g7SUFDSSw2QkFBOEIsUUFBYSxFQUFFLE1BQWMsRUFBYyxVQUFzQjtRQUMzRixVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ2QsU0FBUyxFQUFFLFFBQVE7WUFFbkIsTUFBTSxFQUFFO2dCQUFBLGlCQWVQO2dCQWZnQixjQUFPO3FCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87b0JBQVAseUJBQU87O2dCQUNwQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUM3QyxPQUFPLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDNUIsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzNDLENBQUMsQ0FBQyxDQUFDO2lCQUNOO2dCQUVELElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQy9ELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFDZCxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLENBQUM7aUJBQ047Z0JBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUVELGFBQWEsRUFBRSxVQUFTLE9BQU87Z0JBQzNCLE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFFRCxVQUFVLEVBQUUsVUFBUyxPQUFPO2dCQUN4QixPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBRUQsVUFBVSxFQUFFLFVBQVMsT0FBTztnQkFDeEIsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUVILFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDZixNQUFNLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQztnQkFDRCxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxFQUFFO29CQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ25DO2dCQUVELE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUM7U0FDSixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1AsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztZQUNoRSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ2YsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0RBdERZLE1BQU0sU0FBQyxRQUFRO2dCQUF5QixNQUFNO2dCQUEwQixVQUFVLHVCQUFqQyxRQUFROztJQUQ3RCxtQkFBbUI7UUFEL0IsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUVJLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQSxFQUFpQyxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtPQUQvRCxtQkFBbUIsQ0F3RC9CO0lBQUQsMEJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXhEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3QsIE5nWm9uZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0ICogYXMgaHR0cFJlcXVlc3QgZnJvbSAnZGV2ZXh0cmVtZS9jb3JlL2h0dHBfcmVxdWVzdCc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCAqIGFzIGRvbUFkYXB0ZXIgZnJvbSAnZGV2ZXh0cmVtZS9jb3JlL2RvbV9hZGFwdGVyJztcclxuaW1wb3J0ICogYXMgcmVhZHlDYWxsYmFja3MgZnJvbSAnZGV2ZXh0cmVtZS9jb3JlL3V0aWxzL3JlYWR5X2NhbGxiYWNrcyc7XHJcbmltcG9ydCAqIGFzIGV2ZW50c0VuZ2luZSBmcm9tICdkZXZleHRyZW1lL2V2ZW50cy9jb3JlL2V2ZW50c19lbmdpbmUnO1xyXG5cclxuY29uc3Qgb3V0c2lkZVpvbmVFdmVudHMgPSBbJ21vdXNlbW92ZScsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnXTtcclxuY29uc3QgaW5zaWRlWm9uZUV2ZW50cyA9IFsnbW91c2V1cCcsICdjbGljaycsICdtb3VzZWRvd24nLCAndHJhbnNpdGlvbmVuZCcsICd3aGVlbCddO1xyXG5cclxubGV0IG9yaWdpbmFsQWRkO1xyXG5sZXQgY2FsbGJhY2tzID0gW107XHJcbnJlYWR5Q2FsbGJhY2tzLmluamVjdCh7XHJcbiAgICBhZGQ6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb3JpZ2luYWxBZGQgPSB0aGlzLmNhbGxCYXNlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkBOZ01vZHVsZSh7fSlcclxuZXhwb3J0IGNsYXNzIER4SW50ZWdyYXRpb25Nb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSwgbmdab25lOiBOZ1pvbmUsIEBPcHRpb25hbCgpIHhockZhY3Rvcnk6IFhockZhY3RvcnkpIHtcclxuICAgICAgICBkb21BZGFwdGVyLmluamVjdCh7XHJcbiAgICAgICAgICAgIF9kb2N1bWVudDogZG9jdW1lbnQsXHJcblxyXG4gICAgICAgICAgICBsaXN0ZW46IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAob3V0c2lkZVpvbmVFdmVudHMuaW5kZXhPZihldmVudE5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsQmFzZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobmdab25lLmlzU3RhYmxlICYmIGluc2lkZVpvbmVFdmVudHMuaW5kZXhPZihldmVudE5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbEJhc2UuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbEJhc2UuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpc0VsZW1lbnROb2RlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaXNUZXh0Tm9kZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMztcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGlzRG9jdW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaW5qZWN0KHtcclxuICAgICAgICAgICAgZ2V0WGhyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICgheGhyRmFjdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxCYXNlLmFwcGx5KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IF94aHIgPSB4aHJGYWN0b3J5LmJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISgnd2l0aENyZWRlbnRpYWxzJyBpbiBfeGhyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF94aHJbJ3dpdGhDcmVkZW50aWFscyddID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF94aHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50c0VuZ2luZS5zZXQoe30pO1xyXG4gICAgICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBvcmlnaW5hbEFkZC5jYWxsKG51bGwsIGNhbGxiYWNrKSk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgICAgICByZWFkeUNhbGxiYWNrcy5maXJlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
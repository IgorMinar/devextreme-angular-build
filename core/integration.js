/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
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
var DxIntegrationModule = (function () {
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
    DxIntegrationModule.decorators = [
        { type: NgModule, args: [{},] },
    ];
    /** @nocollapse */
    DxIntegrationModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: NgZone, },
        { type: XhrFactory, decorators: [{ type: Optional },] },
    ]; };
    return DxIntegrationModule;
}());
export { DxIntegrationModule };
//# sourceMappingURL=integration.js.map
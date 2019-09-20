"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpRequest = require("devextreme/core/http_request");
var common_1 = require("@angular/common");
var domAdapter = require("devextreme/core/dom_adapter");
var readyCallbacks = require("devextreme/core/utils/ready_callbacks");
var eventsEngine = require("devextreme/events/core/events_engine");
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
        { type: core_1.NgModule, args: [{},] },
    ];
    /** @nocollapse */
    DxIntegrationModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [common_1.DOCUMENT,] },] },
        { type: core_1.NgZone, },
        { type: http_1.XhrFactory, decorators: [{ type: core_1.Optional },] },
    ]; };
    return DxIntegrationModule;
}());
exports.DxIntegrationModule = DxIntegrationModule;
//# sourceMappingURL=integration.js.map
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
var common_1 = require("@angular/common");
var ajax = require("devextreme/core/utils/ajax");
var deferred = require("devextreme/core/utils/deferred");
var platform_browser_1 = require("@angular/platform-browser");
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
                var key = platform_browser_1.makeStateKey(that.generateKey(args)), cachedData = that.state.get(key, null);
                if (common_1.isPlatformServer(that.platformId)) {
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
        { type: core_1.NgModule, args: [{
                    imports: [
                        platform_browser_1.BrowserTransferStateModule
                    ]
                },] },
    ];
    /** @nocollapse */
    DxServerTransferStateModule.ctorParameters = function () { return [
        { type: platform_browser_1.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    return DxServerTransferStateModule;
}());
exports.DxServerTransferStateModule = DxServerTransferStateModule;
//# sourceMappingURL=transfer-state.js.map
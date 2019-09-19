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
//# sourceMappingURL=transfer-state.js.map
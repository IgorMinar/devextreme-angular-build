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
import { Injectable } from '@angular/core';
import * as commonUtils from 'devextreme/core/utils/common';
var WatcherHelper = (function () {
    function WatcherHelper() {
        this._watchers = [];
    }
    WatcherHelper.prototype.getWatchMethod = function () {
        var _this = this;
        var watchMethod = function (valueGetter, valueChangeCallback, options) {
            var oldValue = valueGetter();
            options = options || {};
            if (!options.skipImmediate) {
                valueChangeCallback(oldValue);
            }
            var watcher = function () {
                var newValue = valueGetter();
                if (_this._isDifferentValues(oldValue, newValue, options.deep)) {
                    valueChangeCallback(newValue);
                    oldValue = newValue;
                }
            };
            _this._watchers.push(watcher);
            return function () {
                var index = _this._watchers.indexOf(watcher);
                if (index !== -1) {
                    _this._watchers.splice(index, 1);
                }
            };
        };
        return watchMethod;
    };
    WatcherHelper.prototype._isDifferentValues = function (oldValue, newValue, deepCheck) {
        var comparableNewValue = this._toComparable(newValue);
        var comparableOldValue = this._toComparable(oldValue);
        var isObjectValues = comparableNewValue instanceof Object && comparableOldValue instanceof Object;
        if (deepCheck && isObjectValues) {
            return this._checkObjectsFields(newValue, oldValue);
        }
        return comparableNewValue !== comparableOldValue;
    };
    WatcherHelper.prototype._toComparable = function (value) {
        if (value instanceof Date) {
            return value.getTime();
        }
        return value;
    };
    WatcherHelper.prototype._checkObjectsFields = function (checkingFromObject, checkingToObject) {
        for (var field in checkingFromObject) {
            var oldValue = this._toComparable(checkingFromObject[field]);
            var newValue = this._toComparable(checkingToObject[field]);
            var isEqualObjects = false;
            if (typeof oldValue === 'object' && typeof newValue === 'object') {
                isEqualObjects = commonUtils.equalByValue(oldValue, newValue);
            }
            if (oldValue !== newValue && !isEqualObjects) {
                return true;
            }
        }
    };
    WatcherHelper.prototype.checkWatchers = function () {
        for (var _i = 0, _a = this._watchers; _i < _a.length; _i++) {
            var watcher = _a[_i];
            watcher();
        }
    };
    WatcherHelper.decorators = [
        { type: Injectable },
    ];
    return WatcherHelper;
}());
export { WatcherHelper };
//# sourceMappingURL=watcher-helper.js.map
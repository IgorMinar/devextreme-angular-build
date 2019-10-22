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
import { Injectable } from '@angular/core';
import * as commonUtils from 'devextreme/core/utils/common';
let WatcherHelper = class WatcherHelper {
    constructor() {
        this._watchers = [];
    }
    getWatchMethod() {
        let watchMethod = (valueGetter, valueChangeCallback, options) => {
            let oldValue = valueGetter();
            options = options || {};
            if (!options.skipImmediate) {
                valueChangeCallback(oldValue);
            }
            let watcher = () => {
                let newValue = valueGetter();
                if (this._isDifferentValues(oldValue, newValue, options.deep)) {
                    valueChangeCallback(newValue);
                    oldValue = newValue;
                }
            };
            this._watchers.push(watcher);
            return () => {
                let index = this._watchers.indexOf(watcher);
                if (index !== -1) {
                    this._watchers.splice(index, 1);
                }
            };
        };
        return watchMethod;
    }
    _isDifferentValues(oldValue, newValue, deepCheck) {
        let comparableNewValue = this._toComparable(newValue);
        let comparableOldValue = this._toComparable(oldValue);
        let isObjectValues = comparableNewValue instanceof Object && comparableOldValue instanceof Object;
        if (deepCheck && isObjectValues) {
            return this._checkObjectsFields(newValue, oldValue);
        }
        return comparableNewValue !== comparableOldValue;
    }
    _toComparable(value) {
        if (value instanceof Date) {
            return value.getTime();
        }
        return value;
    }
    _checkObjectsFields(checkingFromObject, checkingToObject) {
        for (let field in checkingFromObject) {
            let oldValue = this._toComparable(checkingFromObject[field]);
            let newValue = this._toComparable(checkingToObject[field]);
            let isEqualObjects = false;
            if (typeof oldValue === 'object' && typeof newValue === 'object') {
                isEqualObjects = commonUtils.equalByValue(oldValue, newValue);
            }
            if (oldValue !== newValue && !isEqualObjects) {
                return true;
            }
        }
    }
    checkWatchers() {
        for (let watcher of this._watchers) {
            watcher();
        }
    }
};
WatcherHelper = tslib_1.__decorate([
    Injectable()
], WatcherHelper);
export { WatcherHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hlci1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvY29yZS8iLCJzb3VyY2VzIjpbIndhdGNoZXItaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILE9BQU8sRUFDSCxVQUFVLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLFdBQVcsTUFBTSw4QkFBOEIsQ0FBQztBQUc1RCxJQUFhLGFBQWEsR0FBMUI7SUFEQTtRQUVZLGNBQVMsR0FBVSxFQUFFLENBQUM7SUF5RWxDLENBQUM7SUF2RUcsY0FBYztRQUNWLElBQUksV0FBVyxHQUFHLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQzVELElBQUksUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDO1lBQzdCLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1lBRXhCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO2dCQUN4QixtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqQztZQUVELElBQUksT0FBTyxHQUFHLEdBQUcsRUFBRTtnQkFDZixJQUFJLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztnQkFFN0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzNELG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5QixRQUFRLEdBQUcsUUFBUSxDQUFDO2lCQUN2QjtZQUNMLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTdCLE9BQU8sR0FBRyxFQUFFO2dCQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUU1QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO1lBQ0wsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRUYsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFFBQWEsRUFBRSxRQUFhLEVBQUUsU0FBa0I7UUFDdkUsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLGNBQWMsR0FBRyxrQkFBa0IsWUFBWSxNQUFNLElBQUksa0JBQWtCLFlBQVksTUFBTSxDQUFDO1FBRWxHLElBQUksU0FBUyxJQUFJLGNBQWMsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLGtCQUFrQixLQUFLLGtCQUFrQixDQUFDO0lBQ3JELENBQUM7SUFFTyxhQUFhLENBQUMsS0FBSztRQUN2QixJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7WUFDdkIsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sbUJBQW1CLENBQUMsa0JBQTBCLEVBQUUsZ0JBQXdCO1FBQzVFLEtBQUssSUFBSSxLQUFLLElBQUksa0JBQWtCLEVBQUU7WUFDbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFFM0IsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUM5RCxjQUFjLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDakU7WUFDRCxJQUFJLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtJQUNMLENBQUM7SUFFRCxhQUFhO1FBQ1YsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQTFFWSxhQUFhO0lBRHpCLFVBQVUsRUFBRTtHQUNBLGFBQWEsQ0EwRXpCO1NBMUVZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuaW1wb3J0IHtcclxuICAgIEluamVjdGFibGVcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCAqIGFzIGNvbW1vblV0aWxzIGZyb20gJ2RldmV4dHJlbWUvY29yZS91dGlscy9jb21tb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2F0Y2hlckhlbHBlciB7XHJcbiAgICBwcml2YXRlIF93YXRjaGVyczogYW55W10gPSBbXTtcclxuXHJcbiAgICBnZXRXYXRjaE1ldGhvZCgpIHtcclxuICAgICAgICBsZXQgd2F0Y2hNZXRob2QgPSAodmFsdWVHZXR0ZXIsIHZhbHVlQ2hhbmdlQ2FsbGJhY2ssIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgbGV0IG9sZFZhbHVlID0gdmFsdWVHZXR0ZXIoKTtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuc2tpcEltbWVkaWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVDaGFuZ2VDYWxsYmFjayhvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB3YXRjaGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWVHZXR0ZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNEaWZmZXJlbnRWYWx1ZXMob2xkVmFsdWUsIG5ld1ZhbHVlLCBvcHRpb25zLmRlZXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVDaGFuZ2VDYWxsYmFjayhuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3dhdGNoZXJzLnB1c2god2F0Y2hlcik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fd2F0Y2hlcnMuaW5kZXhPZih3YXRjaGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2F0Y2hlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gd2F0Y2hNZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNEaWZmZXJlbnRWYWx1ZXMob2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSwgZGVlcENoZWNrOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGNvbXBhcmFibGVOZXdWYWx1ZSA9IHRoaXMuX3RvQ29tcGFyYWJsZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgbGV0IGNvbXBhcmFibGVPbGRWYWx1ZSA9IHRoaXMuX3RvQ29tcGFyYWJsZShvbGRWYWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzT2JqZWN0VmFsdWVzID0gY29tcGFyYWJsZU5ld1ZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmIGNvbXBhcmFibGVPbGRWYWx1ZSBpbnN0YW5jZW9mIE9iamVjdDtcclxuXHJcbiAgICAgICAgaWYgKGRlZXBDaGVjayAmJiBpc09iamVjdFZhbHVlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tPYmplY3RzRmllbGRzKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21wYXJhYmxlTmV3VmFsdWUgIT09IGNvbXBhcmFibGVPbGRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90b0NvbXBhcmFibGUodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tPYmplY3RzRmllbGRzKGNoZWNraW5nRnJvbU9iamVjdDogT2JqZWN0LCBjaGVja2luZ1RvT2JqZWN0OiBPYmplY3QpIHtcclxuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiBjaGVja2luZ0Zyb21PYmplY3QpIHtcclxuICAgICAgICAgICAgbGV0IG9sZFZhbHVlID0gdGhpcy5fdG9Db21wYXJhYmxlKGNoZWNraW5nRnJvbU9iamVjdFtmaWVsZF0pO1xyXG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB0aGlzLl90b0NvbXBhcmFibGUoY2hlY2tpbmdUb09iamVjdFtmaWVsZF0pO1xyXG4gICAgICAgICAgICBsZXQgaXNFcXVhbE9iamVjdHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2xkVmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGlzRXF1YWxPYmplY3RzID0gY29tbW9uVXRpbHMuZXF1YWxCeVZhbHVlKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSAmJiAhaXNFcXVhbE9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrV2F0Y2hlcnMoKSB7XHJcbiAgICAgICBmb3IgKGxldCB3YXRjaGVyIG9mIHRoaXMuX3dhdGNoZXJzKSB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
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
import { Injectable, IterableDiffers } from '@angular/core';
var IterableDifferHelper = (function () {
    function IterableDifferHelper(_differs) {
        this._differs = _differs;
        this._propertyDiffers = {};
    }
    IterableDifferHelper.prototype.setHost = function (host) {
        this._host = host;
    };
    IterableDifferHelper.prototype.setup = function (prop, changes) {
        if (prop in changes) {
            var value = changes[prop].currentValue;
            this.setupSingle(prop, value);
        }
    };
    IterableDifferHelper.prototype.setupSingle = function (prop, value) {
        if (value && Array.isArray(value)) {
            if (!this._propertyDiffers[prop]) {
                try {
                    this._propertyDiffers[prop] = this._differs.find(value).create(null);
                    return true;
                }
                catch (e) { }
            }
        }
        else {
            delete this._propertyDiffers[prop];
        }
        return false;
    };
    IterableDifferHelper.prototype.getChanges = function (prop, value) {
        if (this._propertyDiffers[prop]) {
            return this._propertyDiffers[prop].diff(value);
        }
    };
    IterableDifferHelper.prototype.checkChangedOptions = function (propName, hostValue) {
        return this._host.changedOptions[propName] === hostValue;
    };
    ;
    IterableDifferHelper.prototype.doCheck = function (prop) {
        if (this._propertyDiffers[prop]) {
            var hostValue = this._host[prop], isChangedOption = this.checkChangedOptions(prop, hostValue);
            var changes = this.getChanges(prop, hostValue);
            if (changes && this._host.instance && !isChangedOption) {
                this._host.lockWidgetUpdate();
                this._host.instance.option(prop, hostValue);
            }
        }
    };
    IterableDifferHelper.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    IterableDifferHelper.ctorParameters = function () { return [
        { type: IterableDiffers, },
    ]; };
    return IterableDifferHelper;
}());
export { IterableDifferHelper };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlcmFibGUtZGlmZmVyLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFhQSxPQUFPLEVBQ0gsVUFBVSxFQUVWLGVBQWUsRUFDbEIsTUFBTSxlQUFlLENBQUM7O0lBWW5CLDhCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtnQ0FGTSxFQUFFO0tBRUg7SUFFbEQsc0NBQU8sR0FBUCxVQUFRLElBQWlCO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ3JCO0lBRUQsb0NBQUssR0FBTCxVQUFNLElBQVksRUFBRSxPQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0tBQ0o7SUFFRCwwQ0FBVyxHQUFYLFVBQVksSUFBWSxFQUFFLEtBQVU7UUFDaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDO29CQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ2Y7Z0JBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTthQUNsQjtTQUNKO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDaEI7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLEtBQVU7UUFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDtLQUNKO0lBRUQsa0RBQW1CLEdBQW5CLFVBQW9CLFFBQWdCLEVBQUUsU0FBYztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxDQUFDO0tBQzVEO0lBQUEsQ0FBQztJQUVGLHNDQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFDNUIsZUFBZSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFaEUsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQy9DO1NBQ0o7S0FDSjs7Z0JBdkRKLFVBQVU7Ozs7Z0JBUFAsZUFBZTs7K0JBaEJuQjs7U0F3QmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbmltcG9ydCB7XHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIEl0ZXJhYmxlRGlmZmVyc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIER4Q29tcG9uZW50XHJcbn0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSXRlcmFibGVEaWZmZXJIZWxwZXIge1xyXG5cclxuICAgIHByaXZhdGUgX2hvc3Q6IER4Q29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfcHJvcGVydHlEaWZmZXJzOiB7IFtpZDogc3RyaW5nXTogYW55OyB9ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKSB7IH1cclxuXHJcbiAgICBzZXRIb3N0KGhvc3Q6IER4Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5faG9zdCA9IGhvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXAocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHByb3AgaW4gY2hhbmdlcykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwU2luZ2xlKHByb3AsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBTaW5nbGUocHJvcDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fcHJvcGVydHlEaWZmZXJzW3Byb3BdKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BlcnR5RGlmZmVyc1twcm9wXSA9IHRoaXMuX2RpZmZlcnMuZmluZCh2YWx1ZSkuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcHJvcGVydHlEaWZmZXJzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoYW5nZXMocHJvcDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb3BlcnR5RGlmZmVyc1twcm9wXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHlEaWZmZXJzW3Byb3BdLmRpZmYodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NoYW5nZWRPcHRpb25zKHByb3BOYW1lOiBzdHJpbmcsIGhvc3RWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3QuY2hhbmdlZE9wdGlvbnNbcHJvcE5hbWVdID09PSBob3N0VmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvQ2hlY2socHJvcDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb3BlcnR5RGlmZmVyc1twcm9wXSkge1xyXG4gICAgICAgICAgICBsZXQgaG9zdFZhbHVlID0gdGhpcy5faG9zdFtwcm9wXSxcclxuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZE9wdGlvbiA9IHRoaXMuY2hlY2tDaGFuZ2VkT3B0aW9ucyhwcm9wLCBob3N0VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZ2V0Q2hhbmdlcyhwcm9wLCBob3N0VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlcyAmJiB0aGlzLl9ob3N0Lmluc3RhbmNlICYmICFpc0NoYW5nZWRPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hvc3QubG9ja1dpZGdldFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faG9zdC5pbnN0YW5jZS5vcHRpb24ocHJvcCwgaG9zdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
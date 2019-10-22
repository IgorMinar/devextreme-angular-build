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
import { Injectable, SimpleChanges, IterableDiffers } from '@angular/core';
let IterableDifferHelper = class IterableDifferHelper {
    constructor(_differs) {
        this._differs = _differs;
        this._propertyDiffers = {};
    }
    setHost(host) {
        this._host = host;
    }
    setup(prop, changes) {
        if (prop in changes) {
            const value = changes[prop].currentValue;
            this.setupSingle(prop, value);
        }
    }
    setupSingle(prop, value) {
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
    }
    getChanges(prop, value) {
        if (this._propertyDiffers[prop]) {
            return this._propertyDiffers[prop].diff(value);
        }
    }
    checkChangedOptions(propName, hostValue) {
        return this._host.changedOptions[propName] === hostValue;
    }
    ;
    doCheck(prop) {
        if (this._propertyDiffers[prop]) {
            let hostValue = this._host[prop], isChangedOption = this.checkChangedOptions(prop, hostValue);
            const changes = this.getChanges(prop, hostValue);
            if (changes && this._host.instance && !isChangedOption) {
                this._host.lockWidgetUpdate();
                this._host.instance.option(prop, hostValue);
            }
        }
    }
};
IterableDifferHelper.ctorParameters = () => [
    { type: IterableDiffers }
];
IterableDifferHelper = tslib_1.__decorate([
    Injectable()
], IterableDifferHelper);
export { IterableDifferHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlcmFibGUtZGlmZmVyLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci9jb3JlLyIsInNvdXJjZXMiOlsiaXRlcmFibGUtZGlmZmVyLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxPQUFPLEVBQ0gsVUFBVSxFQUNWLGFBQWEsRUFDYixlQUFlLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLElBQWEsb0JBQW9CLEdBQWpDO0lBS0ksWUFBb0IsUUFBeUI7UUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFGckMscUJBQWdCLEdBQTJCLEVBQUUsQ0FBQztJQUVMLENBQUM7SUFFbEQsT0FBTyxDQUFDLElBQWlCO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBWSxFQUFFLE9BQXNCO1FBQ3RDLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUNqQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZLEVBQUUsS0FBVTtRQUNoQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLElBQUk7b0JBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckUsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7Z0JBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRzthQUNsQjtTQUNKO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLEtBQVU7UUFDL0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUVELG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsU0FBYztRQUNoRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUM3RCxDQUFDO0lBQUEsQ0FBQztJQUVGLE9BQU8sQ0FBQyxJQUFZO1FBQ2hCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQzVCLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRWhFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDL0M7U0FDSjtJQUNMLENBQUM7Q0FFSixDQUFBOztZQW5EaUMsZUFBZTs7QUFMcEMsb0JBQW9CO0lBRGhDLFVBQVUsRUFBRTtHQUNBLG9CQUFvQixDQXdEaEM7U0F4RFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbmltcG9ydCB7XHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIEl0ZXJhYmxlRGlmZmVyc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIER4Q29tcG9uZW50XHJcbn0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSXRlcmFibGVEaWZmZXJIZWxwZXIge1xyXG5cclxuICAgIHByaXZhdGUgX2hvc3Q6IER4Q29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfcHJvcGVydHlEaWZmZXJzOiB7IFtpZDogc3RyaW5nXTogYW55OyB9ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKSB7IH1cclxuXHJcbiAgICBzZXRIb3N0KGhvc3Q6IER4Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5faG9zdCA9IGhvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXAocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHByb3AgaW4gY2hhbmdlcykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwU2luZ2xlKHByb3AsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBTaW5nbGUocHJvcDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fcHJvcGVydHlEaWZmZXJzW3Byb3BdKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BlcnR5RGlmZmVyc1twcm9wXSA9IHRoaXMuX2RpZmZlcnMuZmluZCh2YWx1ZSkuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcHJvcGVydHlEaWZmZXJzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoYW5nZXMocHJvcDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb3BlcnR5RGlmZmVyc1twcm9wXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHlEaWZmZXJzW3Byb3BdLmRpZmYodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NoYW5nZWRPcHRpb25zKHByb3BOYW1lOiBzdHJpbmcsIGhvc3RWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3QuY2hhbmdlZE9wdGlvbnNbcHJvcE5hbWVdID09PSBob3N0VmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvQ2hlY2socHJvcDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb3BlcnR5RGlmZmVyc1twcm9wXSkge1xyXG4gICAgICAgICAgICBsZXQgaG9zdFZhbHVlID0gdGhpcy5faG9zdFtwcm9wXSxcclxuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZE9wdGlvbiA9IHRoaXMuY2hlY2tDaGFuZ2VkT3B0aW9ucyhwcm9wLCBob3N0VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZ2V0Q2hhbmdlcyhwcm9wLCBob3N0VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlcyAmJiB0aGlzLl9ob3N0Lmluc3RhbmNlICYmICFpc0NoYW5nZWRPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hvc3QubG9ja1dpZGdldFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faG9zdC5pbnN0YW5jZS5vcHRpb24ocHJvcCwgaG9zdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
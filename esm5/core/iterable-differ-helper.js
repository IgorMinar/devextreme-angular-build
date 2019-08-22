import * as tslib_1 from "tslib";
import { Injectable, IterableDiffers } from '@angular/core';
var IterableDifferHelper = /** @class */ (function () {
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
    IterableDifferHelper = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [IterableDiffers])
    ], IterableDifferHelper);
    return IterableDifferHelper;
}());
export { IterableDifferHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlcmFibGUtZGlmZmVyLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbImNvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFVBQVUsRUFFVixlQUFlLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBT3ZCO0lBS0ksOEJBQW9CLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBRnJDLHFCQUFnQixHQUEyQixFQUFFLENBQUM7SUFFTCxDQUFDO0lBRWxELHNDQUFPLEdBQVAsVUFBUSxJQUFpQjtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsb0NBQUssR0FBTCxVQUFNLElBQVksRUFBRSxPQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLElBQVksRUFBRSxLQUFVO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQztvQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLElBQVksRUFBRSxLQUFVO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsQ0FBQztJQUNMLENBQUM7SUFFRCxrREFBbUIsR0FBbkIsVUFBb0IsUUFBZ0IsRUFBRSxTQUFjO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLENBQUM7SUFDN0QsQ0FBQztJQUFBLENBQUM7SUFFRixzQ0FBTyxHQUFQLFVBQVEsSUFBWTtRQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQzVCLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRWhFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNoRCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUF0RFEsb0JBQW9CO1FBRGhDLFVBQVUsRUFBRTtpREFNcUIsZUFBZTtPQUxwQyxvQkFBb0IsQ0F3RGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXhEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBJdGVyYWJsZURpZmZlcnNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBEeENvbXBvbmVudFxyXG59IGZyb20gJy4vY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEl0ZXJhYmxlRGlmZmVySGVscGVyIHtcclxuXHJcbiAgICBwcml2YXRlIF9ob3N0OiBEeENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3Byb3BlcnR5RGlmZmVyczogeyBbaWQ6IHN0cmluZ106IGFueTsgfSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycykgeyB9XHJcblxyXG4gICAgc2V0SG9zdChob3N0OiBEeENvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuX2hvc3QgPSBob3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmIChwcm9wIGluIGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFNpbmdsZShwcm9wLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwU2luZ2xlKHByb3A6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3Byb3BlcnR5RGlmZmVyc1twcm9wXSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wZXJ0eURpZmZlcnNbcHJvcF0gPSB0aGlzLl9kaWZmZXJzLmZpbmQodmFsdWUpLmNyZWF0ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3Byb3BlcnR5RGlmZmVyc1twcm9wXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGFuZ2VzKHByb3A6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wcm9wZXJ0eURpZmZlcnNbcHJvcF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5RGlmZmVyc1twcm9wXS5kaWZmKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDaGFuZ2VkT3B0aW9ucyhwcm9wTmFtZTogc3RyaW5nLCBob3N0VmFsdWU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0LmNoYW5nZWRPcHRpb25zW3Byb3BOYW1lXSA9PT0gaG9zdFZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb0NoZWNrKHByb3A6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9wcm9wZXJ0eURpZmZlcnNbcHJvcF0pIHtcclxuICAgICAgICAgICAgbGV0IGhvc3RWYWx1ZSA9IHRoaXMuX2hvc3RbcHJvcF0sXHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWRPcHRpb24gPSB0aGlzLmNoZWNrQ2hhbmdlZE9wdGlvbnMocHJvcCwgaG9zdFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmdldENoYW5nZXMocHJvcCwgaG9zdFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMgJiYgdGhpcy5faG9zdC5pbnN0YW5jZSAmJiAhaXNDaGFuZ2VkT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ob3N0LmxvY2tXaWRnZXRVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hvc3QuaW5zdGFuY2Uub3B0aW9uKHByb3AsIGhvc3RWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
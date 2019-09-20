var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoDataPrepareSettingsComponent = (function (_super) {
    __extends(DxoDataPrepareSettingsComponent, _super);
    function DxoDataPrepareSettingsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "checkTypeForAllData", {
        get: function () {
            return this._getOption('checkTypeForAllData');
        },
        set: function (value) {
            this._setOption('checkTypeForAllData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "convertToAxisDataType", {
        get: function () {
            return this._getOption('convertToAxisDataType');
        },
        set: function (value) {
            this._setOption('convertToAxisDataType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "sortingMethod", {
        get: function () {
            return this._getOption('sortingMethod');
        },
        set: function (value) {
            this._setOption('sortingMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'dataPrepareSettings';
        },
        enumerable: true,
        configurable: true
    });
    DxoDataPrepareSettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-data-prepare-settings',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoDataPrepareSettingsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoDataPrepareSettingsComponent.propDecorators = {
        "checkTypeForAllData": [{ type: Input },],
        "convertToAxisDataType": [{ type: Input },],
        "sortingMethod": [{ type: Input },],
    };
    return DxoDataPrepareSettingsComponent;
}(NestedOption));
export { DxoDataPrepareSettingsComponent };
var DxoDataPrepareSettingsModule = (function () {
    function DxoDataPrepareSettingsModule() {
    }
    DxoDataPrepareSettingsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoDataPrepareSettingsComponent
                    ],
                    exports: [
                        DxoDataPrepareSettingsComponent
                    ],
                },] },
    ];
    return DxoDataPrepareSettingsModule;
}());
export { DxoDataPrepareSettingsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcmVwYXJlLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL2RhdGEtcHJlcGFyZS1zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFTSCxtREFBWTtJQStCN0QseUNBQWdDLGtCQUNoQjtRQURoQixZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7MEJBbENHLGdFQUFtQjs7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7YUFFbEQsVUFBd0IsS0FBYztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pEOzs7OzBCQUdHLGtFQUFxQjs7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7YUFFcEQsVUFBMEIsS0FBYztZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25EOzs7OzBCQUdHLDBEQUFhOztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzthQUU1QyxVQUFrQixLQUF5QjtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQzs7OztJQUdELHNCQUFjLHdEQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLHFCQUFxQixDQUFDO1NBQ2hDOzs7T0FBQTs7Z0JBbENKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2hDOzs7O2dCQVRRLGdCQUFnQix1QkF5Q1IsUUFBUSxZQUFJLElBQUk7Z0JBekN4QixnQkFBZ0IsdUJBMENaLElBQUk7Ozt3Q0EvQlosS0FBSzswQ0FRTCxLQUFLO2tDQVFMLEtBQUs7OzBDQXZEVjtFQXNDcUQsWUFBWTtTQUFwRCwrQkFBK0I7Ozs7O2dCQXdDM0MsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWiwrQkFBK0I7cUJBQ2hDO29CQUNELE9BQU8sRUFBRTt3QkFDUCwrQkFBK0I7cUJBQ2hDO2lCQUNGOzt1Q0FyRkQ7O1NBc0ZhLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tZGF0YS1wcmVwYXJlLXNldHRpbmdzJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EYXRhUHJlcGFyZVNldHRpbmdzQ29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2hlY2tUeXBlRm9yQWxsRGF0YSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjaGVja1R5cGVGb3JBbGxEYXRhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2hlY2tUeXBlRm9yQWxsRGF0YSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2hlY2tUeXBlRm9yQWxsRGF0YScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbnZlcnRUb0F4aXNEYXRhVHlwZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb252ZXJ0VG9BeGlzRGF0YVR5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCBjb252ZXJ0VG9BeGlzRGF0YVR5cGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbnZlcnRUb0F4aXNEYXRhVHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNvcnRpbmdNZXRob2QoKTogYm9vbGVhbiB8IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzb3J0aW5nTWV0aG9kJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydGluZ01ldGhvZCh2YWx1ZTogYm9vbGVhbiB8IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0aW5nTWV0aG9kJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZGF0YVByZXBhcmVTZXR0aW5ncyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvRGF0YVByZXBhcmVTZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRGF0YVByZXBhcmVTZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EYXRhUHJlcGFyZVNldHRpbmdzTW9kdWxlIHsgfVxyXG4iXX0=
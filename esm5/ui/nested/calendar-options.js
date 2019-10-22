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
/* tslint:disable:max-line-length */
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { DxoCalendarOptions } from './base/calendar-options';
var DxoCalendarOptionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoCalendarOptionsComponent, _super);
    function DxoCalendarOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'valueChange' },
            { emit: 'zoomLevelChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCalendarOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'calendarOptions';
        },
        enumerable: true,
        configurable: true
    });
    DxoCalendarOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Output()
    ], DxoCalendarOptionsComponent.prototype, "valueChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxoCalendarOptionsComponent.prototype, "zoomLevelChange", void 0);
    DxoCalendarOptionsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-calendar-options',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'accessKey',
                'activeStateEnabled',
                'cellTemplate',
                'dateSerializationFormat',
                'disabled',
                'disabledDates',
                'elementAttr',
                'firstDayOfWeek',
                'focusStateEnabled',
                'height',
                'hint',
                'hoverStateEnabled',
                'isValid',
                'max',
                'maxZoomLevel',
                'min',
                'minZoomLevel',
                'name',
                'onDisposing',
                'onInitialized',
                'onOptionChanged',
                'onValueChanged',
                'readOnly',
                'rtlEnabled',
                'showTodayButton',
                'tabIndex',
                'validationError',
                'validationMessageMode',
                'value',
                'visible',
                'width',
                'zoomLevel'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoCalendarOptionsComponent);
    return DxoCalendarOptionsComponent;
}(DxoCalendarOptions));
export { DxoCalendarOptionsComponent };
var DxoCalendarOptionsModule = /** @class */ (function () {
    function DxoCalendarOptionsModule() {
    }
    DxoCalendarOptionsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoCalendarOptionsComponent
            ],
            exports: [
                DxoCalendarOptionsComponent
            ],
        })
    ], DxoCalendarOptionsModule);
    return DxoCalendarOptionsModule;
}());
export { DxoCalendarOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQvIiwic291cmNlcyI6WyJjYWxlbmRhci1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBMkM3RDtJQUFpRCx1REFBa0I7SUFnQi9ELHFDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQVNWO1FBUEcsS0FBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN2QixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtTQUM5QixDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQWhCRCxzQkFBYyxvREFBVzthQUF6QjtZQUNJLE9BQU8saUJBQWlCLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7O2dCQUdpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUFaSDtRQUFULE1BQU0sRUFBRTtvRUFBbUQ7SUFLbEQ7UUFBVCxNQUFNLEVBQUU7d0VBQXVDO0lBVnZDLDJCQUEyQjtRQXhDdkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFDZCx5QkFBeUI7Z0JBQ3pCLFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZixhQUFhO2dCQUNiLGdCQUFnQjtnQkFDaEIsbUJBQW1CO2dCQUNuQixRQUFRO2dCQUNSLE1BQU07Z0JBQ04sbUJBQW1CO2dCQUNuQixTQUFTO2dCQUNULEtBQUs7Z0JBQ0wsY0FBYztnQkFDZCxLQUFLO2dCQUNMLGNBQWM7Z0JBQ2QsTUFBTTtnQkFDTixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixnQkFBZ0I7Z0JBQ2hCLFVBQVU7Z0JBQ1YsWUFBWTtnQkFDWixpQkFBaUI7Z0JBQ2pCLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQix1QkFBdUI7Z0JBQ3ZCLE9BQU87Z0JBQ1AsU0FBUztnQkFDVCxPQUFPO2dCQUNQLFdBQVc7YUFDZDtxQkFuQ1EsRUFBRTtTQW9DZCxDQUFDO1FBaUJlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7T0FqQk4sMkJBQTJCLENBNkJ2QztJQUFELGtDQUFDO0NBQUEsQUE3QkQsQ0FBaUQsa0JBQWtCLEdBNkJsRTtTQTdCWSwyQkFBMkI7QUF1Q3hDO0lBQUE7SUFBd0MsQ0FBQztJQUE1Qix3QkFBd0I7UUFScEMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDJCQUEyQjthQUM1QjtZQUNELE9BQU8sRUFBRTtnQkFDUCwyQkFBMkI7YUFDNUI7U0FDRixDQUFDO09BQ1csd0JBQXdCLENBQUk7SUFBRCwrQkFBQztDQUFBLEFBQXpDLElBQXlDO1NBQTVCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHhvQ2FsZW5kYXJPcHRpb25zIH0gZnJvbSAnLi9iYXNlL2NhbGVuZGFyLW9wdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tY2FsZW5kYXItb3B0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhY2Nlc3NLZXknLFxyXG4gICAgICAgICdhY3RpdmVTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdjZWxsVGVtcGxhdGUnLFxyXG4gICAgICAgICdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCcsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZGlzYWJsZWREYXRlcycsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZmlyc3REYXlPZldlZWsnLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2lzVmFsaWQnLFxyXG4gICAgICAgICdtYXgnLFxyXG4gICAgICAgICdtYXhab29tTGV2ZWwnLFxyXG4gICAgICAgICdtaW4nLFxyXG4gICAgICAgICdtaW5ab29tTGV2ZWwnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25PcHRpb25DaGFuZ2VkJyxcclxuICAgICAgICAnb25WYWx1ZUNoYW5nZWQnLFxyXG4gICAgICAgICdyZWFkT25seScsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaG93VG9kYXlCdXR0b24nLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25FcnJvcicsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnem9vbUxldmVsJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ2FsZW5kYXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2FsZW5kYXJPcHRpb25zIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGUgfCBudW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHpvb21MZXZlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY2FsZW5kYXJPcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3pvb21MZXZlbENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQ2FsZW5kYXJPcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9DYWxlbmRhck9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ2FsZW5kYXJPcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=
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
import { CollectionNestedOption } from '../../core/nested-option';
var DxiViewComponent = (function (_super) {
    __extends(DxiViewComponent, _super);
    function DxiViewComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiViewComponent.prototype, "agendaDuration", {
        get: function () {
            return this._getOption('agendaDuration');
        },
        set: function (value) {
            this._setOption('agendaDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "appointmentCollectorTemplate", {
        get: function () {
            return this._getOption('appointmentCollectorTemplate');
        },
        set: function (value) {
            this._setOption('appointmentCollectorTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "appointmentTemplate", {
        get: function () {
            return this._getOption('appointmentTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "appointmentTooltipTemplate", {
        get: function () {
            return this._getOption('appointmentTooltipTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTooltipTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "cellDuration", {
        get: function () {
            return this._getOption('cellDuration');
        },
        set: function (value) {
            this._setOption('cellDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "dataCellTemplate", {
        get: function () {
            return this._getOption('dataCellTemplate');
        },
        set: function (value) {
            this._setOption('dataCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "dateCellTemplate", {
        get: function () {
            return this._getOption('dateCellTemplate');
        },
        set: function (value) {
            this._setOption('dateCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "dropDownAppointmentTemplate", {
        get: function () {
            return this._getOption('dropDownAppointmentTemplate');
        },
        set: function (value) {
            this._setOption('dropDownAppointmentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "endDayHour", {
        get: function () {
            return this._getOption('endDayHour');
        },
        set: function (value) {
            this._setOption('endDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "firstDayOfWeek", {
        get: function () {
            return this._getOption('firstDayOfWeek');
        },
        set: function (value) {
            this._setOption('firstDayOfWeek', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "groupByDate", {
        get: function () {
            return this._getOption('groupByDate');
        },
        set: function (value) {
            this._setOption('groupByDate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "groupOrientation", {
        get: function () {
            return this._getOption('groupOrientation');
        },
        set: function (value) {
            this._setOption('groupOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "groups", {
        get: function () {
            return this._getOption('groups');
        },
        set: function (value) {
            this._setOption('groups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "intervalCount", {
        get: function () {
            return this._getOption('intervalCount');
        },
        set: function (value) {
            this._setOption('intervalCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "maxAppointmentsPerCell", {
        get: function () {
            return this._getOption('maxAppointmentsPerCell');
        },
        set: function (value) {
            this._setOption('maxAppointmentsPerCell', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "resourceCellTemplate", {
        get: function () {
            return this._getOption('resourceCellTemplate');
        },
        set: function (value) {
            this._setOption('resourceCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "startDate", {
        get: function () {
            return this._getOption('startDate');
        },
        set: function (value) {
            this._setOption('startDate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "startDayHour", {
        get: function () {
            return this._getOption('startDayHour');
        },
        set: function (value) {
            this._setOption('startDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "timeCellTemplate", {
        get: function () {
            return this._getOption('timeCellTemplate');
        },
        set: function (value) {
            this._setOption('timeCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "_optionPath", {
        get: function () {
            return 'views';
        },
        enumerable: true,
        configurable: true
    });
    DxiViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-view',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiViewComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiViewComponent.propDecorators = {
        "agendaDuration": [{ type: Input },],
        "appointmentCollectorTemplate": [{ type: Input },],
        "appointmentTemplate": [{ type: Input },],
        "appointmentTooltipTemplate": [{ type: Input },],
        "cellDuration": [{ type: Input },],
        "dataCellTemplate": [{ type: Input },],
        "dateCellTemplate": [{ type: Input },],
        "dropDownAppointmentTemplate": [{ type: Input },],
        "endDayHour": [{ type: Input },],
        "firstDayOfWeek": [{ type: Input },],
        "groupByDate": [{ type: Input },],
        "groupOrientation": [{ type: Input },],
        "groups": [{ type: Input },],
        "intervalCount": [{ type: Input },],
        "maxAppointmentsPerCell": [{ type: Input },],
        "name": [{ type: Input },],
        "resourceCellTemplate": [{ type: Input },],
        "startDate": [{ type: Input },],
        "startDayHour": [{ type: Input },],
        "timeCellTemplate": [{ type: Input },],
        "type": [{ type: Input },],
    };
    return DxiViewComponent;
}(CollectionNestedOption));
export { DxiViewComponent };
var DxiViewModule = (function () {
    function DxiViewModule() {
    }
    DxiViewModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiViewComponent
                    ],
                    exports: [
                        DxiViewComponent
                    ],
                },] },
    ];
    return DxiViewModule;
}());
export { DxiViewModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1keGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvdmlldy1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFTNUIsb0NBQXNCO0lBK0t4RCwwQkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDswQkFsTEcsNENBQWM7O1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7YUFFN0MsVUFBbUIsS0FBYTtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVDOzs7OzBCQUdHLDBEQUE0Qjs7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7YUFFM0QsVUFBaUMsS0FBVTtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFEOzs7OzBCQUdHLGlEQUFtQjs7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7YUFFbEQsVUFBd0IsS0FBVTtZQUM5QixJQUFJLENBQUMsVUFB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LFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUNoQzs7OztnQkFUUSxnQkFBZ0IsdUJBeUxSLFFBQVEsWUFBSSxJQUFJO2dCQXpMeEIsZ0JBQWdCLHVCQTBMWixJQUFJOzs7bUNBL0taLEtBQUs7aURBUUwsS0FBSzt3Q0FRTCxLQUFLOytDQVFMLEtBQUs7aUNBUUwsS0FBSztxQ0FRTCxLQUFLO3FDQVFMLEtBQUs7Z0RBUUwsS0FBSzsrQkFRTCxLQUFLO21DQVFMLEtBQUs7Z0NBUUwsS0FBSztxQ0FRTCxLQUFLOzJCQVFMLEtBQUs7a0NBUUwsS0FBSzsyQ0FRTCxLQUFLO3lCQVFMLEtBQUs7eUNBUUwsS0FBSzs4QkFRTCxLQUFLO2lDQVFMLEtBQUs7cUNBUUwsS0FBSzt5QkFRTCxLQUFLOzsyQkF2TVY7RUFzQ3NDLHNCQUFzQjtTQUEvQyxnQkFBZ0I7Ozs7O2dCQXdMNUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO2lCQUNGOzt3QkFyT0Q7O1NBc09hLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS12aWV3JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFnZW5kYUR1cmF0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWdlbmRhRHVyYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBhZ2VuZGFEdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZ2VuZGFEdXJhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXBwb2ludG1lbnRDb2xsZWN0b3JUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXBwb2ludG1lbnRUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FwcG9pbnRtZW50VGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBhcHBvaW50bWVudFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FwcG9pbnRtZW50VGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjZWxsRHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjZWxsRHVyYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBjZWxsRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2VsbER1cmF0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YUNlbGxUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFDZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhQ2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFDZWxsVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRlQ2VsbFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0ZUNlbGxUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGVDZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0ZUNlbGxUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRyb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Ryb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRyb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbmREYXlIb3VyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5kRGF5SG91cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuZERheUhvdXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW5kRGF5SG91cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlyc3REYXlPZldlZWsnKTtcclxuICAgIH1cclxuICAgIHNldCBmaXJzdERheU9mV2Vlayh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaXJzdERheU9mV2VlaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwQnlEYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwQnlEYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBCeURhdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwQnlEYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBPcmllbnRhdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwT3JpZW50YXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cE9yaWVudGF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwT3JpZW50YXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncm91cHMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpbnRlcnZhbENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW50ZXJ2YWxDb3VudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGludGVydmFsQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaW50ZXJ2YWxDb3VudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heEFwcG9pbnRtZW50c1BlckNlbGwoKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhBcHBvaW50bWVudHNQZXJDZWxsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4QXBwb2ludG1lbnRzUGVyQ2VsbCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhBcHBvaW50bWVudHNQZXJDZWxsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25hbWUnKTtcclxuICAgIH1cclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25hbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZXNvdXJjZUNlbGxUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jlc291cmNlQ2VsbFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVzb3VyY2VDZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVzb3VyY2VDZWxsVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGFydERhdGUoKTogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RhcnREYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhcnREYXRlKHZhbHVlOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFydERhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGFydERheUhvdXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFydERheUhvdXInKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFydERheUhvdXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhcnREYXlIb3VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGltZUNlbGxUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpbWVDZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aW1lQ2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpbWVDZWxsVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3ZpZXdzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlWaWV3Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlWaWV3Q29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aVZpZXdNb2R1bGUgeyB9XHJcbiJdfQ==
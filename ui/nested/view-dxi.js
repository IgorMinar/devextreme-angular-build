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
 * Build date: Thu Sep 19 2019
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
//# sourceMappingURL=view-dxi.js.map
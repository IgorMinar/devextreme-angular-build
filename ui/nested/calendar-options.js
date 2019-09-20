"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nested_option_1 = require("../../core/nested-option");
var calendar_options_1 = require("./base/calendar-options");
var DxoCalendarOptionsComponent = (function (_super) {
    __extends(DxoCalendarOptionsComponent, _super);
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
    DxoCalendarOptionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-calendar-options',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoCalendarOptionsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoCalendarOptionsComponent.propDecorators = {
        "valueChange": [{ type: core_1.Output },],
        "zoomLevelChange": [{ type: core_1.Output },],
    };
    return DxoCalendarOptionsComponent;
}(calendar_options_1.DxoCalendarOptions));
exports.DxoCalendarOptionsComponent = DxoCalendarOptionsComponent;
var DxoCalendarOptionsModule = (function () {
    function DxoCalendarOptionsModule() {
    }
    DxoCalendarOptionsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoCalendarOptionsComponent
                    ],
                    exports: [
                        DxoCalendarOptionsComponent
                    ],
                },] },
    ];
    return DxoCalendarOptionsModule;
}());
exports.DxoCalendarOptionsModule = DxoCalendarOptionsModule;
//# sourceMappingURL=calendar-options.js.map
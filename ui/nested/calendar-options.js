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
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoCalendarOptions } from './base/calendar-options';
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
        { type: Component, args: [{
                    selector: 'dxo-calendar-options',
                    template: '',
                    styles: [''],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoCalendarOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoCalendarOptionsComponent.propDecorators = {
        "valueChange": [{ type: Output },],
        "zoomLevelChange": [{ type: Output },],
    };
    return DxoCalendarOptionsComponent;
}(DxoCalendarOptions));
export { DxoCalendarOptionsComponent };
var DxoCalendarOptionsModule = (function () {
    function DxoCalendarOptionsModule() {
    }
    DxoCalendarOptionsModule.decorators = [
        { type: NgModule, args: [{
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
export { DxoCalendarOptionsModule };
//# sourceMappingURL=calendar-options.js.map
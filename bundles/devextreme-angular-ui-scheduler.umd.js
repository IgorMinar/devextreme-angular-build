(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/scheduler'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/scheduler', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/scheduler', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.scheduler = {}), global.ng.platformBrowser, global.ng.core, global.DxScheduler, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxScheduler, core$1, nested) { 'use strict';

    DxScheduler = DxScheduler && DxScheduler.hasOwnProperty('default') ? DxScheduler['default'] : DxScheduler;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
    /**
     * The Scheduler is a widget that represents scheduled data and allows a user to manage and edit it.
     */
    var DxSchedulerComponent = /** @class */ (function (_super) {
        __extends(DxSchedulerComponent, _super);
        function DxSchedulerComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'appointmentAdded', emit: 'onAppointmentAdded' },
                { subscribe: 'appointmentAdding', emit: 'onAppointmentAdding' },
                { subscribe: 'appointmentClick', emit: 'onAppointmentClick' },
                { subscribe: 'appointmentContextMenu', emit: 'onAppointmentContextMenu' },
                { subscribe: 'appointmentDblClick', emit: 'onAppointmentDblClick' },
                { subscribe: 'appointmentDeleted', emit: 'onAppointmentDeleted' },
                { subscribe: 'appointmentDeleting', emit: 'onAppointmentDeleting' },
                { subscribe: 'appointmentFormCreated', emit: 'onAppointmentFormCreated' },
                { subscribe: 'appointmentFormOpening', emit: 'onAppointmentFormOpening' },
                { subscribe: 'appointmentRendered', emit: 'onAppointmentRendered' },
                { subscribe: 'appointmentUpdated', emit: 'onAppointmentUpdated' },
                { subscribe: 'appointmentUpdating', emit: 'onAppointmentUpdating' },
                { subscribe: 'cellClick', emit: 'onCellClick' },
                { subscribe: 'cellContextMenu', emit: 'onCellContextMenu' },
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { emit: 'accessKeyChange' },
                { emit: 'adaptivityEnabledChange' },
                { emit: 'allDayExprChange' },
                { emit: 'appointmentCollectorTemplateChange' },
                { emit: 'appointmentTemplateChange' },
                { emit: 'appointmentTooltipTemplateChange' },
                { emit: 'cellDurationChange' },
                { emit: 'crossScrollingEnabledChange' },
                { emit: 'currentDateChange' },
                { emit: 'currentViewChange' },
                { emit: 'customizeDateNavigatorTextChange' },
                { emit: 'dataCellTemplateChange' },
                { emit: 'dataSourceChange' },
                { emit: 'dateCellTemplateChange' },
                { emit: 'dateSerializationFormatChange' },
                { emit: 'descriptionExprChange' },
                { emit: 'disabledChange' },
                { emit: 'dropDownAppointmentTemplateChange' },
                { emit: 'editingChange' },
                { emit: 'elementAttrChange' },
                { emit: 'endDateExprChange' },
                { emit: 'endDateTimeZoneExprChange' },
                { emit: 'endDayHourChange' },
                { emit: 'firstDayOfWeekChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'groupByDateChange' },
                { emit: 'groupsChange' },
                { emit: 'heightChange' },
                { emit: 'hintChange' },
                { emit: 'indicatorUpdateIntervalChange' },
                { emit: 'maxChange' },
                { emit: 'maxAppointmentsPerCellChange' },
                { emit: 'minChange' },
                { emit: 'noDataTextChange' },
                { emit: 'recurrenceEditModeChange' },
                { emit: 'recurrenceExceptionExprChange' },
                { emit: 'recurrenceRuleExprChange' },
                { emit: 'remoteFilteringChange' },
                { emit: 'resourceCellTemplateChange' },
                { emit: 'resourcesChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'selectedCellDataChange' },
                { emit: 'shadeUntilCurrentTimeChange' },
                { emit: 'showAllDayPanelChange' },
                { emit: 'showCurrentTimeIndicatorChange' },
                { emit: 'startDateExprChange' },
                { emit: 'startDateTimeZoneExprChange' },
                { emit: 'startDayHourChange' },
                { emit: 'tabIndexChange' },
                { emit: 'textExprChange' },
                { emit: 'timeCellTemplateChange' },
                { emit: 'timeZoneChange' },
                { emit: 'useDropDownViewSwitcherChange' },
                { emit: 'viewsChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxSchedulerComponent.prototype, "accessKey", {
            /**
             * Specifies the shortcut key that sets focus on the widget.
             */
            get: function () {
                return this._getOption('accessKey');
            },
            set: function (value) {
                this._setOption('accessKey', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "adaptivityEnabled", {
            /**
             * Specifies whether the widget adapts to small screens.
             */
            get: function () {
                return this._getOption('adaptivityEnabled');
            },
            set: function (value) {
                this._setOption('adaptivityEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "allDayExpr", {
            /**
             * Specifies the name of the data source item field whose value defines whether or not the corresponding appointment is an all-day appointment.
             */
            get: function () {
                return this._getOption('allDayExpr');
            },
            set: function (value) {
                this._setOption('allDayExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "appointmentCollectorTemplate", {
            /**
             * Specifies an appointment collector's custom template.
             */
            get: function () {
                return this._getOption('appointmentCollectorTemplate');
            },
            set: function (value) {
                this._setOption('appointmentCollectorTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "appointmentTemplate", {
            /**
             * Specifies a custom template for appointments.
             */
            get: function () {
                return this._getOption('appointmentTemplate');
            },
            set: function (value) {
                this._setOption('appointmentTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "appointmentTooltipTemplate", {
            /**
             * Specifies a custom template for appointment tooltips and appointments in the appointment collector's drop-down list.
             */
            get: function () {
                return this._getOption('appointmentTooltipTemplate');
            },
            set: function (value) {
                this._setOption('appointmentTooltipTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "cellDuration", {
            /**
             * Specifies cell duration in minutes.
             */
            get: function () {
                return this._getOption('cellDuration');
            },
            set: function (value) {
                this._setOption('cellDuration', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "crossScrollingEnabled", {
            /**
             * Specifies whether or not an end-user can scroll the view in both directions at the same time.
             */
            get: function () {
                return this._getOption('crossScrollingEnabled');
            },
            set: function (value) {
                this._setOption('crossScrollingEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "currentDate", {
            /**
             * Specifies a date displayed on the current scheduler view by default.
             */
            get: function () {
                return this._getOption('currentDate');
            },
            set: function (value) {
                this._setOption('currentDate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "currentView", {
            /**
             * Specifies the currently displayed view. Accepts the view's name or type.
             */
            get: function () {
                return this._getOption('currentView');
            },
            set: function (value) {
                this._setOption('currentView', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "customizeDateNavigatorText", {
            /**
             * Customizes the date navigator's text.
             */
            get: function () {
                return this._getOption('customizeDateNavigatorText');
            },
            set: function (value) {
                this._setOption('customizeDateNavigatorText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "dataCellTemplate", {
            /**
             * Specifies a custom template for table cells.
             */
            get: function () {
                return this._getOption('dataCellTemplate');
            },
            set: function (value) {
                this._setOption('dataCellTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "dataSource", {
            /**
             * Binds the widget to data.
             */
            get: function () {
                return this._getOption('dataSource');
            },
            set: function (value) {
                this._setOption('dataSource', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "dateCellTemplate", {
            /**
             * Specifies a custom template for day scale items.
             */
            get: function () {
                return this._getOption('dateCellTemplate');
            },
            set: function (value) {
                this._setOption('dateCellTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "dateSerializationFormat", {
            /**
             * Specifies the date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
             */
            get: function () {
                return this._getOption('dateSerializationFormat');
            },
            set: function (value) {
                this._setOption('dateSerializationFormat', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "descriptionExpr", {
            /**
             * Specifies the name of the data source item field whose value holds the description of the corresponding appointment.
             */
            get: function () {
                return this._getOption('descriptionExpr');
            },
            set: function (value) {
                this._setOption('descriptionExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "disabled", {
            /**
             * Specifies whether the widget responds to user interaction.
             */
            get: function () {
                return this._getOption('disabled');
            },
            set: function (value) {
                this._setOption('disabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "dropDownAppointmentTemplate", {
            /**
             * Specifies a custom template for appointments in the appointment collector's drop-down list.
             */
            get: function () {
                return this._getOption('dropDownAppointmentTemplate');
            },
            set: function (value) {
                this._setOption('dropDownAppointmentTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "editing", {
            /**
             * Specifies which editing operations an end-user can perform on appointments.
             */
            get: function () {
                return this._getOption('editing');
            },
            set: function (value) {
                this._setOption('editing', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "elementAttr", {
            /**
             * Specifies the attributes to be attached to the widget's root element.
             */
            get: function () {
                return this._getOption('elementAttr');
            },
            set: function (value) {
                this._setOption('elementAttr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "endDateExpr", {
            /**
             * Specifies the name of the data source item field that defines the ending of an appointment.
             */
            get: function () {
                return this._getOption('endDateExpr');
            },
            set: function (value) {
                this._setOption('endDateExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "endDateTimeZoneExpr", {
            /**
             * Specifies the name of the data source item field that defines the timezone of the appointment end date.
             */
            get: function () {
                return this._getOption('endDateTimeZoneExpr');
            },
            set: function (value) {
                this._setOption('endDateTimeZoneExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "endDayHour", {
            /**
             * Specifies the last hour on the time scale. Accepts integer values from 0 to 24.
             */
            get: function () {
                return this._getOption('endDayHour');
            },
            set: function (value) {
                this._setOption('endDayHour', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "firstDayOfWeek", {
            /**
             * Specifies the first day of a week. Does not apply to the agenda view.
             */
            get: function () {
                return this._getOption('firstDayOfWeek');
            },
            set: function (value) {
                this._setOption('firstDayOfWeek', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "focusStateEnabled", {
            /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
            get: function () {
                return this._getOption('focusStateEnabled');
            },
            set: function (value) {
                this._setOption('focusStateEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "groupByDate", {
            /**
             * Specifies whether to group appointments by date first. Applies only if groupOrientation is "horizontal".
             */
            get: function () {
                return this._getOption('groupByDate');
            },
            set: function (value) {
                this._setOption('groupByDate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "groups", {
            /**
             * Specifies the resource kinds by which the scheduler's appointments are grouped in a timetable.
             */
            get: function () {
                return this._getOption('groups');
            },
            set: function (value) {
                this._setOption('groups', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "height", {
            /**
             * Specifies the widget's height.
             */
            get: function () {
                return this._getOption('height');
            },
            set: function (value) {
                this._setOption('height', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "hint", {
            /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
            get: function () {
                return this._getOption('hint');
            },
            set: function (value) {
                this._setOption('hint', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "indicatorUpdateInterval", {
            /**
             * Specifies the time interval between when the date-time indicator changes its position, in milliseconds.
             */
            get: function () {
                return this._getOption('indicatorUpdateInterval');
            },
            set: function (value) {
                this._setOption('indicatorUpdateInterval', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "max", {
            /**
             * The latest date the widget allows you to select.
             */
            get: function () {
                return this._getOption('max');
            },
            set: function (value) {
                this._setOption('max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "maxAppointmentsPerCell", {
            /**
             * Specifies the limit of full-sized appointments displayed per cell. Applies to all views except "agenda".
             */
            get: function () {
                return this._getOption('maxAppointmentsPerCell');
            },
            set: function (value) {
                this._setOption('maxAppointmentsPerCell', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "min", {
            /**
             * The earliest date the widget allows you to select.
             */
            get: function () {
                return this._getOption('min');
            },
            set: function (value) {
                this._setOption('min', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "noDataText", {
            /**
             * The text or HTML markup displayed by the widget if the item collection is empty. Available for the Agenda view only.
             */
            get: function () {
                return this._getOption('noDataText');
            },
            set: function (value) {
                this._setOption('noDataText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceEditMode", {
            /**
             * Specifies the edit mode for recurring appointments.
             */
            get: function () {
                return this._getOption('recurrenceEditMode');
            },
            set: function (value) {
                this._setOption('recurrenceEditMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceExceptionExpr", {
            /**
             * Specifies the name of the data source item field that defines exceptions for the current recurring appointment.
             */
            get: function () {
                return this._getOption('recurrenceExceptionExpr');
            },
            set: function (value) {
                this._setOption('recurrenceExceptionExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceRuleExpr", {
            /**
             * Specifies the name of the data source item field that defines a recurrence rule for generating recurring appointments.
             */
            get: function () {
                return this._getOption('recurrenceRuleExpr');
            },
            set: function (value) {
                this._setOption('recurrenceRuleExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "remoteFiltering", {
            /**
             * Specifies whether filtering is performed on the server or client side.
             */
            get: function () {
                return this._getOption('remoteFiltering');
            },
            set: function (value) {
                this._setOption('remoteFiltering', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "resourceCellTemplate", {
            /**
             * Specifies a custom template for resource headers.
             */
            get: function () {
                return this._getOption('resourceCellTemplate');
            },
            set: function (value) {
                this._setOption('resourceCellTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "resources", {
            /**
             * Specifies an array of resources available in the scheduler.
             */
            get: function () {
                return this._getOption('resources');
            },
            set: function (value) {
                this._setOption('resources', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "rtlEnabled", {
            /**
             * Switches the widget to a right-to-left representation.
             */
            get: function () {
                return this._getOption('rtlEnabled');
            },
            set: function (value) {
                this._setOption('rtlEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "selectedCellData", {
            /**
             * Currently selected cells' data.
             */
            get: function () {
                return this._getOption('selectedCellData');
            },
            set: function (value) {
                this._setOption('selectedCellData', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "shadeUntilCurrentTime", {
            /**
             * Specifies whether to apply shading to cover the timetable up to the current time.
             */
            get: function () {
                return this._getOption('shadeUntilCurrentTime');
            },
            set: function (value) {
                this._setOption('shadeUntilCurrentTime', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "showAllDayPanel", {
            /**
             * Specifies the "All-day" panel's visibility. Setting this option to false hides the panel along with the all-day appointments.
             */
            get: function () {
                return this._getOption('showAllDayPanel');
            },
            set: function (value) {
                this._setOption('showAllDayPanel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "showCurrentTimeIndicator", {
            /**
             * Specifies the current date-time indicator's visibility.
             */
            get: function () {
                return this._getOption('showCurrentTimeIndicator');
            },
            set: function (value) {
                this._setOption('showCurrentTimeIndicator', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "startDateExpr", {
            /**
             * Specifies the name of the data source item field that defines the start of an appointment.
             */
            get: function () {
                return this._getOption('startDateExpr');
            },
            set: function (value) {
                this._setOption('startDateExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "startDateTimeZoneExpr", {
            /**
             * Specifies the name of the data source item field that defines the timezone of the appointment start date.
             */
            get: function () {
                return this._getOption('startDateTimeZoneExpr');
            },
            set: function (value) {
                this._setOption('startDateTimeZoneExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "startDayHour", {
            /**
             * Specifies the first hour on the time scale. Accepts integer values from 0 to 24.
             */
            get: function () {
                return this._getOption('startDayHour');
            },
            set: function (value) {
                this._setOption('startDayHour', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "tabIndex", {
            /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
            get: function () {
                return this._getOption('tabIndex');
            },
            set: function (value) {
                this._setOption('tabIndex', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "textExpr", {
            /**
             * Specifies the name of the data source item field that holds the subject of an appointment.
             */
            get: function () {
                return this._getOption('textExpr');
            },
            set: function (value) {
                this._setOption('textExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "timeCellTemplate", {
            /**
             * Specifies a custom template for time scale items.
             */
            get: function () {
                return this._getOption('timeCellTemplate');
            },
            set: function (value) {
                this._setOption('timeCellTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "timeZone", {
            /**
             * Specifies the timezone of the widget.
             */
            get: function () {
                return this._getOption('timeZone');
            },
            set: function (value) {
                this._setOption('timeZone', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "useDropDownViewSwitcher", {
            /**
             * Specifies whether a user can switch views using tabs or a drop-down menu.
             */
            get: function () {
                return this._getOption('useDropDownViewSwitcher');
            },
            set: function (value) {
                this._setOption('useDropDownViewSwitcher', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "views", {
            /**
             * Specifies and configures the views to be available in the view switcher.
             */
            get: function () {
                return this._getOption('views');
            },
            set: function (value) {
                this._setOption('views', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "visible", {
            /**
             * Specifies whether the widget is visible.
             */
            get: function () {
                return this._getOption('visible');
            },
            set: function (value) {
                this._setOption('visible', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "width", {
            /**
             * Specifies the widget's width.
             */
            get: function () {
                return this._getOption('width');
            },
            set: function (value) {
                this._setOption('width', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "resourcesChildren", {
            get: function () {
                return this._getOption('resources');
            },
            set: function (value) {
                this.setChildren('resources', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSchedulerComponent.prototype, "viewsChildren", {
            get: function () {
                return this._getOption('views');
            },
            set: function (value) {
                this.setChildren('views', value);
            },
            enumerable: true,
            configurable: true
        });
        DxSchedulerComponent.prototype._createInstance = function (element, options) {
            return new DxScheduler(element, options);
        };
        DxSchedulerComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxSchedulerComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('groups', changes);
            this.setupChanges('resources', changes);
            this.setupChanges('selectedCellData', changes);
            this.setupChanges('views', changes);
        };
        DxSchedulerComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxSchedulerComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._idh.doCheck('groups');
            this._idh.doCheck('resources');
            this._idh.doCheck('selectedCellData');
            this._idh.doCheck('views');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxSchedulerComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxSchedulerComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: core$1.DxTemplateHost },
            { type: core$1.WatcherHelper },
            { type: core$1.IterableDifferHelper },
            { type: core$1.NestedOptionHost },
            { type: platformBrowser.TransferState },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "adaptivityEnabled", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "allDayExpr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "appointmentCollectorTemplate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "appointmentTemplate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "appointmentTooltipTemplate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "cellDuration", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "crossScrollingEnabled", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "currentDate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "currentView", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "customizeDateNavigatorText", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "dataCellTemplate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "dateCellTemplate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "dateSerializationFormat", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "descriptionExpr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "dropDownAppointmentTemplate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "editing", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "endDateExpr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "endDateTimeZoneExpr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "endDayHour", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "firstDayOfWeek", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "groupByDate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "groups", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "indicatorUpdateInterval", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "maxAppointmentsPerCell", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "noDataText", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "recurrenceEditMode", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "recurrenceExceptionExpr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "recurrenceRuleExpr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "remoteFiltering", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "resourceCellTemplate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "resources", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "selectedCellData", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "shadeUntilCurrentTime", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "showAllDayPanel", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "showCurrentTimeIndicator", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "startDateExpr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "startDateTimeZoneExpr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "startDayHour", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "textExpr", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "timeCellTemplate", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "timeZone", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "useDropDownViewSwitcher", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "views", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxSchedulerComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentAdded", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentAdding", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentClick", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentContextMenu", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentDblClick", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentDeleted", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentDeleting", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentFormCreated", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentFormOpening", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentRendered", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentUpdated", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onAppointmentUpdating", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onCellClick", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onCellContextMenu", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "adaptivityEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "allDayExprChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "appointmentCollectorTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "appointmentTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "appointmentTooltipTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "cellDurationChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "crossScrollingEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "currentDateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "currentViewChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "customizeDateNavigatorTextChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "dataCellTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "dateCellTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "dateSerializationFormatChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "descriptionExprChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "dropDownAppointmentTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "editingChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "endDateExprChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "endDateTimeZoneExprChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "endDayHourChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "firstDayOfWeekChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "groupByDateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "groupsChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "indicatorUpdateIntervalChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "maxChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "maxAppointmentsPerCellChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "minChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "noDataTextChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "recurrenceEditModeChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "recurrenceExceptionExprChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "recurrenceRuleExprChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "remoteFilteringChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "resourceCellTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "resourcesChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "selectedCellDataChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "shadeUntilCurrentTimeChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "showAllDayPanelChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "showCurrentTimeIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "startDateExprChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "startDateTimeZoneExprChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "startDayHourChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "textExprChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "timeCellTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "timeZoneChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "useDropDownViewSwitcherChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "viewsChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxSchedulerComponent.prototype, "widthChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiResourceComponent)
        ], DxSchedulerComponent.prototype, "resourcesChildren", null);
        __decorate([
            core.ContentChildren(nested.DxiViewComponent)
        ], DxSchedulerComponent.prototype, "viewsChildren", null);
        DxSchedulerComponent = __decorate([
            core.Component({
                selector: 'dx-scheduler',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxSchedulerComponent);
        return DxSchedulerComponent;
    }(core$1.DxComponent));
    var DxSchedulerModule = /** @class */ (function () {
        function DxSchedulerModule() {
        }
        DxSchedulerModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoEditingModule,
                    nested.DxiResourceModule,
                    nested.DxiViewModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxSchedulerComponent
                ],
                exports: [
                    DxSchedulerComponent,
                    nested.DxoEditingModule,
                    nested.DxiResourceModule,
                    nested.DxiViewModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxSchedulerModule);
        return DxSchedulerModule;
    }());

    exports.DxSchedulerComponent = DxSchedulerComponent;
    exports.DxSchedulerModule = DxSchedulerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-scheduler.umd.js.map

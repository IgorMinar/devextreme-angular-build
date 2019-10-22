(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/date_box'), require('devextreme-angular/ui/validator'), require('@angular/forms'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/date-box', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/date_box', 'devextreme-angular/ui/validator', '@angular/forms', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['date-box'] = {}), global.ng.platformBrowser, global.ng.core, global.DxDateBox, global['devextreme-angular'].ui.validator, global.ng.forms, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxDateBox, validator, forms, core$1, nested) { 'use strict';

    DxDateBox = DxDateBox && DxDateBox.hasOwnProperty('default') ? DxDateBox['default'] : DxDateBox;

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
    var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return DxDateBoxComponent; }),
        multi: true
    };
    /**
     * The DateBox is a widget that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.
     */
    var DxDateBoxComponent = /** @class */ (function (_super) {
        __extends(DxDateBoxComponent, _super);
        function DxDateBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this.touched = function (_) { };
            _this._createEventEmitters([
                { subscribe: 'change', emit: 'onChange' },
                { subscribe: 'closed', emit: 'onClosed' },
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'copy', emit: 'onCopy' },
                { subscribe: 'cut', emit: 'onCut' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'enterKey', emit: 'onEnterKey' },
                { subscribe: 'focusIn', emit: 'onFocusIn' },
                { subscribe: 'focusOut', emit: 'onFocusOut' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'input', emit: 'onInput' },
                { subscribe: 'keyDown', emit: 'onKeyDown' },
                { subscribe: 'keyPress', emit: 'onKeyPress' },
                { subscribe: 'keyUp', emit: 'onKeyUp' },
                { subscribe: 'opened', emit: 'onOpened' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'paste', emit: 'onPaste' },
                { subscribe: 'valueChanged', emit: 'onValueChanged' },
                { emit: 'acceptCustomValueChange' },
                { emit: 'accessKeyChange' },
                { emit: 'activeStateEnabledChange' },
                { emit: 'adaptivityEnabledChange' },
                { emit: 'applyButtonTextChange' },
                { emit: 'applyValueModeChange' },
                { emit: 'buttonsChange' },
                { emit: 'calendarOptionsChange' },
                { emit: 'cancelButtonTextChange' },
                { emit: 'dateOutOfRangeMessageChange' },
                { emit: 'dateSerializationFormatChange' },
                { emit: 'deferRenderingChange' },
                { emit: 'disabledChange' },
                { emit: 'disabledDatesChange' },
                { emit: 'displayFormatChange' },
                { emit: 'dropDownButtonTemplateChange' },
                { emit: 'elementAttrChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'heightChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'inputAttrChange' },
                { emit: 'intervalChange' },
                { emit: 'invalidDateMessageChange' },
                { emit: 'isValidChange' },
                { emit: 'maxChange' },
                { emit: 'maxLengthChange' },
                { emit: 'maxZoomLevelChange' },
                { emit: 'minChange' },
                { emit: 'minZoomLevelChange' },
                { emit: 'nameChange' },
                { emit: 'openedChange' },
                { emit: 'openOnFieldClickChange' },
                { emit: 'pickerTypeChange' },
                { emit: 'placeholderChange' },
                { emit: 'readOnlyChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'showAnalogClockChange' },
                { emit: 'showClearButtonChange' },
                { emit: 'showDropDownButtonChange' },
                { emit: 'spellcheckChange' },
                { emit: 'stylingModeChange' },
                { emit: 'tabIndexChange' },
                { emit: 'textChange' },
                { emit: 'typeChange' },
                { emit: 'useMaskBehaviorChange' },
                { emit: 'validationErrorChange' },
                { emit: 'validationMessageModeChange' },
                { emit: 'valueChange' },
                { emit: 'valueChangeEventChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' },
                { emit: 'onBlur' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxDateBoxComponent.prototype, "acceptCustomValue", {
            /**
             * Specifies whether or not the widget allows an end-user to enter a custom value.
             */
            get: function () {
                return this._getOption('acceptCustomValue');
            },
            set: function (value) {
                this._setOption('acceptCustomValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxDateBoxComponent.prototype, "activeStateEnabled", {
            /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
            get: function () {
                return this._getOption('activeStateEnabled');
            },
            set: function (value) {
                this._setOption('activeStateEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "adaptivityEnabled", {
            /**
             * Specifies whether or not adaptive widget rendering is enabled on a small screen.
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
        Object.defineProperty(DxDateBoxComponent.prototype, "applyButtonText", {
            /**
             * The text displayed on the Apply button.
             */
            get: function () {
                return this._getOption('applyButtonText');
            },
            set: function (value) {
                this._setOption('applyButtonText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "applyValueMode", {
            /**
             * Specifies the way an end-user applies the selected value.
             */
            get: function () {
                return this._getOption('applyValueMode');
            },
            set: function (value) {
                this._setOption('applyValueMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "buttons", {
            /**
             * Allows you to add custom buttons to the input text field.
             */
            get: function () {
                return this._getOption('buttons');
            },
            set: function (value) {
                this._setOption('buttons', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "calendarOptions", {
            /**
             * Configures the calendar's value picker. Applies only if the pickerType is "calendar".
             */
            get: function () {
                return this._getOption('calendarOptions');
            },
            set: function (value) {
                this._setOption('calendarOptions', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "cancelButtonText", {
            /**
             * The text displayed on the Cancel button.
             */
            get: function () {
                return this._getOption('cancelButtonText');
            },
            set: function (value) {
                this._setOption('cancelButtonText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "dateOutOfRangeMessage", {
            /**
             * Specifies the message displayed if the specified date is later than the max value or earlier than the min value.
             */
            get: function () {
                return this._getOption('dateOutOfRangeMessage');
            },
            set: function (value) {
                this._setOption('dateOutOfRangeMessage', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "dateSerializationFormat", {
            /**
             * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
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
        Object.defineProperty(DxDateBoxComponent.prototype, "deferRendering", {
            /**
             * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
             */
            get: function () {
                return this._getOption('deferRendering');
            },
            set: function (value) {
                this._setOption('deferRendering', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "disabled", {
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
        Object.defineProperty(DxDateBoxComponent.prototype, "disabledDates", {
            /**
             * Specifies dates to be disabled. Applies only if pickerType is "calendar".
             */
            get: function () {
                return this._getOption('disabledDates');
            },
            set: function (value) {
                this._setOption('disabledDates', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "displayFormat", {
            /**
             * Specifies the date display format. Ignored if the pickerType option is "native"
             */
            get: function () {
                return this._getOption('displayFormat');
            },
            set: function (value) {
                this._setOption('displayFormat', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "dropDownButtonTemplate", {
            /**
             * Specifies a custom template for the drop-down button.
             */
            get: function () {
                return this._getOption('dropDownButtonTemplate');
            },
            set: function (value) {
                this._setOption('dropDownButtonTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxDateBoxComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxDateBoxComponent.prototype, "height", {
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
        Object.defineProperty(DxDateBoxComponent.prototype, "hint", {
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
        Object.defineProperty(DxDateBoxComponent.prototype, "hoverStateEnabled", {
            /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
            get: function () {
                return this._getOption('hoverStateEnabled');
            },
            set: function (value) {
                this._setOption('hoverStateEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "inputAttr", {
            /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
            get: function () {
                return this._getOption('inputAttr');
            },
            set: function (value) {
                this._setOption('inputAttr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "interval", {
            /**
             * Specifies the interval between neighboring values in the popup list in minutes.
             */
            get: function () {
                return this._getOption('interval');
            },
            set: function (value) {
                this._setOption('interval', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "invalidDateMessage", {
            /**
             * Specifies the message displayed if the typed value is not a valid date or time.
             */
            get: function () {
                return this._getOption('invalidDateMessage');
            },
            set: function (value) {
                this._setOption('invalidDateMessage', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "isValid", {
            /**
             * Specifies whether the editor's value is valid.
             */
            get: function () {
                return this._getOption('isValid');
            },
            set: function (value) {
                this._setOption('isValid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "max", {
            /**
             * The last date that can be selected within the widget.
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
        Object.defineProperty(DxDateBoxComponent.prototype, "maxLength", {
            /**
             * Specifies the maximum number of characters you can enter into the textbox.
             */
            get: function () {
                return this._getOption('maxLength');
            },
            set: function (value) {
                this._setOption('maxLength', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "maxZoomLevel", {
            /**
             * Use the calendarOptions option instead.
             */
            get: function () {
                return this._getOption('maxZoomLevel');
            },
            set: function (value) {
                this._setOption('maxZoomLevel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "min", {
            /**
             * The minimum date that can be selected within the widget.
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
        Object.defineProperty(DxDateBoxComponent.prototype, "minZoomLevel", {
            /**
             * Use the calendarOptions option instead.
             */
            get: function () {
                return this._getOption('minZoomLevel');
            },
            set: function (value) {
                this._setOption('minZoomLevel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "name", {
            /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
            get: function () {
                return this._getOption('name');
            },
            set: function (value) {
                this._setOption('name', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "opened", {
            /**
             * Specifies whether or not the drop-down editor is displayed.
             */
            get: function () {
                return this._getOption('opened');
            },
            set: function (value) {
                this._setOption('opened', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "openOnFieldClick", {
            /**
             * Specifies whether a user can open the drop-down list by clicking a text field.
             */
            get: function () {
                return this._getOption('openOnFieldClick');
            },
            set: function (value) {
                this._setOption('openOnFieldClick', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "pickerType", {
            /**
             * Specifies the type of the date/time picker.
             */
            get: function () {
                return this._getOption('pickerType');
            },
            set: function (value) {
                this._setOption('pickerType', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "placeholder", {
            /**
             * Specifies a placeholder for the input field.
             */
            get: function () {
                return this._getOption('placeholder');
            },
            set: function (value) {
                this._setOption('placeholder', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "readOnly", {
            /**
             * Specifies whether the editor is read-only.
             */
            get: function () {
                return this._getOption('readOnly');
            },
            set: function (value) {
                this._setOption('readOnly', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxDateBoxComponent.prototype, "showAnalogClock", {
            /**
             * Specifies whether to show the analog clock in the value picker. Applies only if type is "datetime" and pickerType is "calendar".
             */
            get: function () {
                return this._getOption('showAnalogClock');
            },
            set: function (value) {
                this._setOption('showAnalogClock', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "showClearButton", {
            /**
             * Specifies whether to display the Clear button in the widget.
             */
            get: function () {
                return this._getOption('showClearButton');
            },
            set: function (value) {
                this._setOption('showClearButton', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "showDropDownButton", {
            /**
             * Specifies whether the drop-down button is visible.
             */
            get: function () {
                return this._getOption('showDropDownButton');
            },
            set: function (value) {
                this._setOption('showDropDownButton', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "spellcheck", {
            /**
             * Specifies whether or not the widget checks the inner text for spelling mistakes.
             */
            get: function () {
                return this._getOption('spellcheck');
            },
            set: function (value) {
                this._setOption('spellcheck', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "stylingMode", {
            /**
             * Specifies how the widget's text field is styled.
             */
            get: function () {
                return this._getOption('stylingMode');
            },
            set: function (value) {
                this._setOption('stylingMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxDateBoxComponent.prototype, "text", {
            /**
             * The read-only option that holds the text displayed by the widget input element.
             */
            get: function () {
                return this._getOption('text');
            },
            set: function (value) {
                this._setOption('text', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "type", {
            /**
             * A format used to display date/time information.
             */
            get: function () {
                return this._getOption('type');
            },
            set: function (value) {
                this._setOption('type', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "useMaskBehavior", {
            /**
             * Specifies whether to control user input using a mask created based on the displayFormat.
             */
            get: function () {
                return this._getOption('useMaskBehavior');
            },
            set: function (value) {
                this._setOption('useMaskBehavior', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "validationError", {
            /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
            get: function () {
                return this._getOption('validationError');
            },
            set: function (value) {
                this._setOption('validationError', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "validationMessageMode", {
            /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
            get: function () {
                return this._getOption('validationMessageMode');
            },
            set: function (value) {
                this._setOption('validationMessageMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "value", {
            /**
             * An object or a value specifying the date and time currently selected using the date box.
             */
            get: function () {
                return this._getOption('value');
            },
            set: function (value) {
                this._setOption('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "valueChangeEvent", {
            /**
             * Specifies the DOM events after which the widget's value should be updated.
             */
            get: function () {
                return this._getOption('valueChangeEvent');
            },
            set: function (value) {
                this._setOption('valueChangeEvent', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDateBoxComponent.prototype, "visible", {
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
        Object.defineProperty(DxDateBoxComponent.prototype, "width", {
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
        DxDateBoxComponent.prototype.change = function (_) { };
        Object.defineProperty(DxDateBoxComponent.prototype, "buttonsChildren", {
            get: function () {
                return this._getOption('buttons');
            },
            set: function (value) {
                this.setChildren('buttons', value);
            },
            enumerable: true,
            configurable: true
        });
        DxDateBoxComponent.prototype._createInstance = function (element, options) {
            return new DxDateBox(element, options);
        };
        DxDateBoxComponent.prototype.writeValue = function (value) {
            this.eventHelper.lockedValueChangeEvent = true;
            this.value = value;
            this.eventHelper.lockedValueChangeEvent = false;
        };
        DxDateBoxComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        DxDateBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
        DxDateBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
        DxDateBoxComponent.prototype._createWidget = function (element) {
            var _this = this;
            _super.prototype._createWidget.call(this, element);
            this.instance.on('focusOut', function (e) {
                _this.eventHelper.fireNgEvent('onBlur', [e]);
            });
        };
        DxDateBoxComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxDateBoxComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('buttons', changes);
            this.setupChanges('disabledDates', changes);
        };
        DxDateBoxComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxDateBoxComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('buttons');
            this._idh.doCheck('disabledDates');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxDateBoxComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxDateBoxComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            if (this.validator) {
                this.validator.createInstanceOnInit = false;
            }
        };
        DxDateBoxComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
            if (this.validator) {
                this.validator.createInstance(this.element.nativeElement);
            }
        };
        DxDateBoxComponent.ctorParameters = function () { return [
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
            core.ContentChild(validator.DxValidatorComponent)
        ], DxDateBoxComponent.prototype, "validator", void 0);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "acceptCustomValue", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "adaptivityEnabled", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "applyButtonText", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "applyValueMode", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "buttons", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "calendarOptions", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "cancelButtonText", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "dateOutOfRangeMessage", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "dateSerializationFormat", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "deferRendering", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "disabledDates", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "displayFormat", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "dropDownButtonTemplate", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "inputAttr", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "interval", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "invalidDateMessage", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "isValid", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "maxLength", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "maxZoomLevel", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "minZoomLevel", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "openOnFieldClick", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "pickerType", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "readOnly", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "showAnalogClock", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "showClearButton", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "showDropDownButton", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "spellcheck", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "stylingMode", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "text", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "type", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "useMaskBehavior", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "validationError", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "validationMessageMode", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "valueChangeEvent", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxDateBoxComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onClosed", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onCopy", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onCut", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onEnterKey", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onFocusIn", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onFocusOut", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onInput", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onKeyDown", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onKeyPress", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onKeyUp", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onOpened", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onPaste", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onValueChanged", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "acceptCustomValueChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "adaptivityEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "applyButtonTextChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "applyValueModeChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "buttonsChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "calendarOptionsChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "cancelButtonTextChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "dateOutOfRangeMessageChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "dateSerializationFormatChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "deferRenderingChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "disabledDatesChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "displayFormatChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "inputAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "intervalChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "invalidDateMessageChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "isValidChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "maxChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "maxLengthChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "maxZoomLevelChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "minChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "minZoomLevelChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "nameChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "openedChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "openOnFieldClickChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "pickerTypeChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "placeholderChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "readOnlyChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "showAnalogClockChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "showClearButtonChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "showDropDownButtonChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "spellcheckChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "stylingModeChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "textChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "typeChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "useMaskBehaviorChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "validationErrorChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "validationMessageModeChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "valueChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "valueChangeEventChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "widthChange", void 0);
        __decorate([
            core.Output()
        ], DxDateBoxComponent.prototype, "onBlur", void 0);
        __decorate([
            core.HostListener('valueChange', ['$event'])
        ], DxDateBoxComponent.prototype, "change", null);
        __decorate([
            core.HostListener('onBlur', ['$event'])
        ], DxDateBoxComponent.prototype, "touched", void 0);
        __decorate([
            core.ContentChildren(nested.DxiButtonComponent)
        ], DxDateBoxComponent.prototype, "buttonsChildren", null);
        DxDateBoxComponent = __decorate([
            core.Component({
                selector: 'dx-date-box',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    CUSTOM_VALUE_ACCESSOR_PROVIDER,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxDateBoxComponent);
        return DxDateBoxComponent;
    }(core$1.DxComponent));
    var DxDateBoxModule = /** @class */ (function () {
        function DxDateBoxModule() {
        }
        DxDateBoxModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxiButtonModule,
                    nested.DxoOptionsModule,
                    nested.DxoCalendarOptionsModule,
                    nested.DxoDisplayFormatModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxDateBoxComponent
                ],
                exports: [
                    DxDateBoxComponent,
                    nested.DxiButtonModule,
                    nested.DxoOptionsModule,
                    nested.DxoCalendarOptionsModule,
                    nested.DxoDisplayFormatModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxDateBoxModule);
        return DxDateBoxModule;
    }());

    exports.DxDateBoxComponent = DxDateBoxComponent;
    exports.DxDateBoxModule = DxDateBoxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-date-box.umd.js.map

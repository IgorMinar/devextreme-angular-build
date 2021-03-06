(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/switch'), require('devextreme-angular/ui/validator'), require('@angular/forms'), require('devextreme-angular/core')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/switch', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/switch', 'devextreme-angular/ui/validator', '@angular/forms', 'devextreme-angular/core'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.switch = {}), global.ng.platformBrowser, global.ng.core, global.DxSwitch, global['devextreme-angular'].ui.validator, global.ng.forms, global['devextreme-angular'].core));
}(this, function (exports, platformBrowser, core, DxSwitch, validator, forms, core$1) { 'use strict';

    DxSwitch = DxSwitch && DxSwitch.hasOwnProperty('default') ? DxSwitch['default'] : DxSwitch;

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
        useExisting: core.forwardRef(function () { return DxSwitchComponent; }),
        multi: true
    };
    /**
     * The Switch is a widget that can be in two states: "On" and "Off".
     */
    var DxSwitchComponent = /** @class */ (function (_super) {
        __extends(DxSwitchComponent, _super);
        function DxSwitchComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this.touched = function (_) { };
            _this._createEventEmitters([
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'valueChanged', emit: 'onValueChanged' },
                { emit: 'accessKeyChange' },
                { emit: 'activeStateEnabledChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'heightChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'isValidChange' },
                { emit: 'nameChange' },
                { emit: 'offTextChange' },
                { emit: 'onTextChange' },
                { emit: 'readOnlyChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'switchedOffTextChange' },
                { emit: 'switchedOnTextChange' },
                { emit: 'tabIndexChange' },
                { emit: 'validationErrorChange' },
                { emit: 'validationMessageModeChange' },
                { emit: 'valueChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' },
                { emit: 'onBlur' }
            ]);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxSwitchComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "activeStateEnabled", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "disabled", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "height", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "hint", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "hoverStateEnabled", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "isValid", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "name", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "offText", {
            /**
             * Use the switchedOffText option instead.
             */
            get: function () {
                return this._getOption('offText');
            },
            set: function (value) {
                this._setOption('offText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSwitchComponent.prototype, "onText", {
            /**
             * Use the switchedOnText option instead.
             */
            get: function () {
                return this._getOption('onText');
            },
            set: function (value) {
                this._setOption('onText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSwitchComponent.prototype, "readOnly", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "switchedOffText", {
            /**
             * Specifies the text displayed when the widget is switched off.
             */
            get: function () {
                return this._getOption('switchedOffText');
            },
            set: function (value) {
                this._setOption('switchedOffText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSwitchComponent.prototype, "switchedOnText", {
            /**
             * Specifies the text displayed when the widget is switched on.
             */
            get: function () {
                return this._getOption('switchedOnText');
            },
            set: function (value) {
                this._setOption('switchedOnText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSwitchComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "validationError", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "validationMessageMode", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "value", {
            /**
             * A Boolean value specifying whether the current switch state is "On" or "Off".
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
        Object.defineProperty(DxSwitchComponent.prototype, "visible", {
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
        Object.defineProperty(DxSwitchComponent.prototype, "width", {
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
        DxSwitchComponent.prototype.change = function (_) { };
        DxSwitchComponent.prototype._createInstance = function (element, options) {
            return new DxSwitch(element, options);
        };
        DxSwitchComponent.prototype.writeValue = function (value) {
            this.eventHelper.lockedValueChangeEvent = true;
            this.value = value;
            this.eventHelper.lockedValueChangeEvent = false;
        };
        DxSwitchComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        DxSwitchComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
        DxSwitchComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
        DxSwitchComponent.prototype._createWidget = function (element) {
            var _this = this;
            _super.prototype._createWidget.call(this, element);
            this.instance.on('focusOut', function (e) {
                _this.eventHelper.fireNgEvent('onBlur', [e]);
            });
        };
        DxSwitchComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxSwitchComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            if (this.validator) {
                this.validator.createInstanceOnInit = false;
            }
        };
        DxSwitchComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
            if (this.validator) {
                this.validator.createInstance(this.element.nativeElement);
            }
        };
        DxSwitchComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: core$1.DxTemplateHost },
            { type: core$1.WatcherHelper },
            { type: core$1.NestedOptionHost },
            { type: platformBrowser.TransferState },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        __decorate([
            core.ContentChild(validator.DxValidatorComponent)
        ], DxSwitchComponent.prototype, "validator", void 0);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "isValid", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "offText", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "onText", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "readOnly", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "switchedOffText", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "switchedOnText", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "validationError", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "validationMessageMode", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxSwitchComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "onValueChanged", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "isValidChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "nameChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "offTextChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "onTextChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "readOnlyChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "switchedOffTextChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "switchedOnTextChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "validationErrorChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "validationMessageModeChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "valueChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "widthChange", void 0);
        __decorate([
            core.Output()
        ], DxSwitchComponent.prototype, "onBlur", void 0);
        __decorate([
            core.HostListener('valueChange', ['$event'])
        ], DxSwitchComponent.prototype, "change", null);
        __decorate([
            core.HostListener('onBlur', ['$event'])
        ], DxSwitchComponent.prototype, "touched", void 0);
        DxSwitchComponent = __decorate([
            core.Component({
                selector: 'dx-switch',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    CUSTOM_VALUE_ACCESSOR_PROVIDER,
                    core$1.NestedOptionHost
                ]
            }),
            __param(6, core.Inject(core.PLATFORM_ID))
        ], DxSwitchComponent);
        return DxSwitchComponent;
    }(core$1.DxComponent));
    var DxSwitchModule = /** @class */ (function () {
        function DxSwitchModule() {
        }
        DxSwitchModule = __decorate([
            core.NgModule({
                imports: [
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxSwitchComponent
                ],
                exports: [
                    DxSwitchComponent,
                    core$1.DxTemplateModule
                ]
            })
        ], DxSwitchModule);
        return DxSwitchModule;
    }());

    exports.DxSwitchComponent = DxSwitchComponent;
    exports.DxSwitchModule = DxSwitchModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-switch.umd.js.map

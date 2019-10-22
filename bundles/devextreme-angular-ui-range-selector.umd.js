(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/range_selector'), require('devextreme-angular/ui/validator'), require('@angular/forms'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/range-selector', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/range_selector', 'devextreme-angular/ui/validator', '@angular/forms', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['range-selector'] = {}), global.ng.platformBrowser, global.ng.core, global.DxRangeSelector, global['devextreme-angular'].ui.validator, global.ng.forms, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxRangeSelector, validator, forms, core$1, nested) { 'use strict';

    DxRangeSelector = DxRangeSelector && DxRangeSelector.hasOwnProperty('default') ? DxRangeSelector['default'] : DxRangeSelector;

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
        useExisting: core.forwardRef(function () { return DxRangeSelectorComponent; }),
        multi: true
    };
    /**
     * The RangeSelector is a widget that allows a user to select a range of values on a scale.
     */
    var DxRangeSelectorComponent = /** @class */ (function (_super) {
        __extends(DxRangeSelectorComponent, _super);
        function DxRangeSelectorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this.touched = function (_) { };
            _this._createEventEmitters([
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'drawn', emit: 'onDrawn' },
                { subscribe: 'exported', emit: 'onExported' },
                { subscribe: 'exporting', emit: 'onExporting' },
                { subscribe: 'fileSaving', emit: 'onFileSaving' },
                { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'valueChanged', emit: 'onValueChanged' },
                { emit: 'backgroundChange' },
                { emit: 'behaviorChange' },
                { emit: 'chartChange' },
                { emit: 'containerBackgroundColorChange' },
                { emit: 'dataSourceChange' },
                { emit: 'dataSourceFieldChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'exportChange' },
                { emit: 'indentChange' },
                { emit: 'loadingIndicatorChange' },
                { emit: 'marginChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'redrawOnResizeChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'scaleChange' },
                { emit: 'selectedRangeColorChange' },
                { emit: 'selectedRangeUpdateModeChange' },
                { emit: 'shutterChange' },
                { emit: 'sizeChange' },
                { emit: 'sliderHandleChange' },
                { emit: 'sliderMarkerChange' },
                { emit: 'themeChange' },
                { emit: 'titleChange' },
                { emit: 'valueChange' },
                { emit: 'onBlur' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxRangeSelectorComponent.prototype, "background", {
            /**
             * Specifies the options for the range selector's background.
             */
            get: function () {
                return this._getOption('background');
            },
            set: function (value) {
                this._setOption('background', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "behavior", {
            /**
             * Specifies the RangeSelector's behavior options.
             */
            get: function () {
                return this._getOption('behavior');
            },
            set: function (value) {
                this._setOption('behavior', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "chart", {
            /**
             * Specifies the options required to display a chart as the range selector's background.
             */
            get: function () {
                return this._getOption('chart');
            },
            set: function (value) {
                this._setOption('chart', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "containerBackgroundColor", {
            /**
             * Specifies the color of the parent page element.
             */
            get: function () {
                return this._getOption('containerBackgroundColor');
            },
            set: function (value) {
                this._setOption('containerBackgroundColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSource", {
            /**
             * Specifies a data source for the scale values and for the chart at the background.
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
        Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSourceField", {
            /**
             * Specifies the data source field that provides data for the scale.
             */
            get: function () {
                return this._getOption('dataSourceField');
            },
            set: function (value) {
                this._setOption('dataSourceField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "disabled", {
            /**
             * Specifies whether the widget responds to the user interaction.
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
        Object.defineProperty(DxRangeSelectorComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxRangeSelectorComponent.prototype, "export", {
            /**
             * Configures the exporting and printing features.
             */
            get: function () {
                return this._getOption('export');
            },
            set: function (value) {
                this._setOption('export', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "indent", {
            /**
             * Range selector's indent options.
             */
            get: function () {
                return this._getOption('indent');
            },
            set: function (value) {
                this._setOption('indent', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "loadingIndicator", {
            /**
             * Configures the loading indicator.
             */
            get: function () {
                return this._getOption('loadingIndicator');
            },
            set: function (value) {
                this._setOption('loadingIndicator', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "margin", {
            /**
             * Generates space around the widget.
             */
            get: function () {
                return this._getOption('margin');
            },
            set: function (value) {
                this._setOption('margin', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "pathModified", {
            /**
             * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
             */
            get: function () {
                return this._getOption('pathModified');
            },
            set: function (value) {
                this._setOption('pathModified', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "redrawOnResize", {
            /**
             * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
             */
            get: function () {
                return this._getOption('redrawOnResize');
            },
            set: function (value) {
                this._setOption('redrawOnResize', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxRangeSelectorComponent.prototype, "scale", {
            /**
             * Specifies options of the range selector's scale.
             */
            get: function () {
                return this._getOption('scale');
            },
            set: function (value) {
                this._setOption('scale', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRangeColor", {
            /**
             * Specifies the color of the selected range.
             */
            get: function () {
                return this._getOption('selectedRangeColor');
            },
            set: function (value) {
                this._setOption('selectedRangeColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRangeUpdateMode", {
            /**
             * Specifies how the selected range should behave when data is updated. Applies only when the RangeSelector is bound to a data source.
             */
            get: function () {
                return this._getOption('selectedRangeUpdateMode');
            },
            set: function (value) {
                this._setOption('selectedRangeUpdateMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "shutter", {
            /**
             * Specifies range selector shutter options.
             */
            get: function () {
                return this._getOption('shutter');
            },
            set: function (value) {
                this._setOption('shutter', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "size", {
            /**
             * Specifies the widget's size in pixels.
             */
            get: function () {
                return this._getOption('size');
            },
            set: function (value) {
                this._setOption('size', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderHandle", {
            /**
             * Specifies the appearance of the range selector's slider handles.
             */
            get: function () {
                return this._getOption('sliderHandle');
            },
            set: function (value) {
                this._setOption('sliderHandle', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderMarker", {
            /**
             * Defines the options of the range selector slider markers.
             */
            get: function () {
                return this._getOption('sliderMarker');
            },
            set: function (value) {
                this._setOption('sliderMarker', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "theme", {
            /**
             * Sets the name of the theme the widget uses.
             */
            get: function () {
                return this._getOption('theme');
            },
            set: function (value) {
                this._setOption('theme', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "title", {
            /**
             * Configures the widget's title.
             */
            get: function () {
                return this._getOption('title');
            },
            set: function (value) {
                this._setOption('title', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxRangeSelectorComponent.prototype, "value", {
            /**
             * The selected range (initial or current). Equals the entire scale when not set.
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
        DxRangeSelectorComponent.prototype.change = function (_) { };
        DxRangeSelectorComponent.prototype._createInstance = function (element, options) {
            return new DxRangeSelector(element, options);
        };
        DxRangeSelectorComponent.prototype.writeValue = function (value) {
            this.eventHelper.lockedValueChangeEvent = true;
            this.value = value;
            this.eventHelper.lockedValueChangeEvent = false;
        };
        DxRangeSelectorComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
        DxRangeSelectorComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
        DxRangeSelectorComponent.prototype._createWidget = function (element) {
            var _this = this;
            _super.prototype._createWidget.call(this, element);
            this.instance.on('focusOut', function (e) {
                _this.eventHelper.fireNgEvent('onBlur', [e]);
            });
        };
        DxRangeSelectorComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxRangeSelectorComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('value', changes);
        };
        DxRangeSelectorComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxRangeSelectorComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._idh.doCheck('value');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxRangeSelectorComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxRangeSelectorComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            if (this.validator) {
                this.validator.createInstanceOnInit = false;
            }
        };
        DxRangeSelectorComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
            if (this.validator) {
                this.validator.createInstance(this.element.nativeElement);
            }
        };
        DxRangeSelectorComponent.ctorParameters = function () { return [
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
        ], DxRangeSelectorComponent.prototype, "validator", void 0);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "background", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "behavior", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "chart", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "containerBackgroundColor", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "dataSourceField", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "indent", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "loadingIndicator", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "margin", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "redrawOnResize", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "scale", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "selectedRangeColor", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "selectedRangeUpdateMode", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "shutter", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "sliderHandle", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "sliderMarker", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "title", null);
        __decorate([
            core.Input()
        ], DxRangeSelectorComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onValueChanged", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "backgroundChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "behaviorChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "chartChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "containerBackgroundColorChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "dataSourceFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "indentChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "loadingIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "marginChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "redrawOnResizeChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "scaleChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "selectedRangeColorChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "selectedRangeUpdateModeChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "shutterChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "sliderHandleChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "sliderMarkerChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "titleChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "valueChange", void 0);
        __decorate([
            core.Output()
        ], DxRangeSelectorComponent.prototype, "onBlur", void 0);
        __decorate([
            core.HostListener('valueChange', ['$event'])
        ], DxRangeSelectorComponent.prototype, "change", null);
        __decorate([
            core.HostListener('onBlur', ['$event'])
        ], DxRangeSelectorComponent.prototype, "touched", void 0);
        DxRangeSelectorComponent = __decorate([
            core.Component({
                selector: 'dx-range-selector',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    CUSTOM_VALUE_ACCESSOR_PROVIDER,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ],
                styles: [' :host {  display: block; }']
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxRangeSelectorComponent);
        return DxRangeSelectorComponent;
    }(core$1.DxComponent));
    var DxRangeSelectorModule = /** @class */ (function () {
        function DxRangeSelectorModule() {
        }
        DxRangeSelectorModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoBackgroundModule,
                    nested.DxoImageModule,
                    nested.DxoBehaviorModule,
                    nested.DxoChartModule,
                    nested.DxoCommonSeriesSettingsModule,
                    nested.DxoAggregationModule,
                    nested.DxoAreaModule,
                    nested.DxoBorderModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
                    nested.DxoLabelModule,
                    nested.DxoConnectorModule,
                    nested.DxoPointModule,
                    nested.DxoHeightModule,
                    nested.DxoUrlModule,
                    nested.DxoWidthModule,
                    nested.DxoSelectionStyleModule,
                    nested.DxoReductionModule,
                    nested.DxoValueErrorBarModule,
                    nested.DxoBarModule,
                    nested.DxoBubbleModule,
                    nested.DxoCandlestickModule,
                    nested.DxoFullstackedareaModule,
                    nested.DxoFullstackedbarModule,
                    nested.DxoFullstackedlineModule,
                    nested.DxoFullstackedsplineModule,
                    nested.DxoFullstackedsplineareaModule,
                    nested.DxoArgumentFormatModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoLineModule,
                    nested.DxoRangeareaModule,
                    nested.DxoRangebarModule,
                    nested.DxoScatterModule,
                    nested.DxoSplineModule,
                    nested.DxoSplineareaModule,
                    nested.DxoStackedareaModule,
                    nested.DxoStackedbarModule,
                    nested.DxoStackedlineModule,
                    nested.DxoStackedsplineModule,
                    nested.DxoStackedsplineareaModule,
                    nested.DxoStepareaModule,
                    nested.DxoSteplineModule,
                    nested.DxoStockModule,
                    nested.DxoDataPrepareSettingsModule,
                    nested.DxiSeriesModule,
                    nested.DxoSeriesTemplateModule,
                    nested.DxoValueAxisModule,
                    nested.DxoExportModule,
                    nested.DxoIndentModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxoMarginModule,
                    nested.DxoScaleModule,
                    nested.DxoAggregationIntervalModule,
                    nested.DxiBreakModule,
                    nested.DxoBreakStyleModule,
                    nested.DxoMarkerModule,
                    nested.DxoMaxRangeModule,
                    nested.DxoMinorTickModule,
                    nested.DxoMinorTickIntervalModule,
                    nested.DxoMinRangeModule,
                    nested.DxoTickModule,
                    nested.DxoTickIntervalModule,
                    nested.DxoShutterModule,
                    nested.DxoSizeModule,
                    nested.DxoSliderHandleModule,
                    nested.DxoSliderMarkerModule,
                    nested.DxoTitleModule,
                    nested.DxoSubtitleModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxRangeSelectorComponent
                ],
                exports: [
                    DxRangeSelectorComponent,
                    nested.DxoBackgroundModule,
                    nested.DxoImageModule,
                    nested.DxoBehaviorModule,
                    nested.DxoChartModule,
                    nested.DxoCommonSeriesSettingsModule,
                    nested.DxoAggregationModule,
                    nested.DxoAreaModule,
                    nested.DxoBorderModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
                    nested.DxoLabelModule,
                    nested.DxoConnectorModule,
                    nested.DxoPointModule,
                    nested.DxoHeightModule,
                    nested.DxoUrlModule,
                    nested.DxoWidthModule,
                    nested.DxoSelectionStyleModule,
                    nested.DxoReductionModule,
                    nested.DxoValueErrorBarModule,
                    nested.DxoBarModule,
                    nested.DxoBubbleModule,
                    nested.DxoCandlestickModule,
                    nested.DxoFullstackedareaModule,
                    nested.DxoFullstackedbarModule,
                    nested.DxoFullstackedlineModule,
                    nested.DxoFullstackedsplineModule,
                    nested.DxoFullstackedsplineareaModule,
                    nested.DxoArgumentFormatModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoLineModule,
                    nested.DxoRangeareaModule,
                    nested.DxoRangebarModule,
                    nested.DxoScatterModule,
                    nested.DxoSplineModule,
                    nested.DxoSplineareaModule,
                    nested.DxoStackedareaModule,
                    nested.DxoStackedbarModule,
                    nested.DxoStackedlineModule,
                    nested.DxoStackedsplineModule,
                    nested.DxoStackedsplineareaModule,
                    nested.DxoStepareaModule,
                    nested.DxoSteplineModule,
                    nested.DxoStockModule,
                    nested.DxoDataPrepareSettingsModule,
                    nested.DxiSeriesModule,
                    nested.DxoSeriesTemplateModule,
                    nested.DxoValueAxisModule,
                    nested.DxoExportModule,
                    nested.DxoIndentModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxoMarginModule,
                    nested.DxoScaleModule,
                    nested.DxoAggregationIntervalModule,
                    nested.DxiBreakModule,
                    nested.DxoBreakStyleModule,
                    nested.DxoMarkerModule,
                    nested.DxoMaxRangeModule,
                    nested.DxoMinorTickModule,
                    nested.DxoMinorTickIntervalModule,
                    nested.DxoMinRangeModule,
                    nested.DxoTickModule,
                    nested.DxoTickIntervalModule,
                    nested.DxoShutterModule,
                    nested.DxoSizeModule,
                    nested.DxoSliderHandleModule,
                    nested.DxoSliderMarkerModule,
                    nested.DxoTitleModule,
                    nested.DxoSubtitleModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxRangeSelectorModule);
        return DxRangeSelectorModule;
    }());

    exports.DxRangeSelectorComponent = DxRangeSelectorComponent;
    exports.DxRangeSelectorModule = DxRangeSelectorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-range-selector.umd.js.map

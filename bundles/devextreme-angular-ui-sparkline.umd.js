(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/sparkline'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/sparkline', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/sparkline', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.sparkline = {}), global.ng.platformBrowser, global.ng.core, global.DxSparkline, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxSparkline, core$1, nested) { 'use strict';

    DxSparkline = DxSparkline && DxSparkline.hasOwnProperty('default') ? DxSparkline['default'] : DxSparkline;

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
     * The Sparkline widget is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.
     */
    var DxSparklineComponent = /** @class */ (function (_super) {
        __extends(DxSparklineComponent, _super);
        function DxSparklineComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'drawn', emit: 'onDrawn' },
                { subscribe: 'exported', emit: 'onExported' },
                { subscribe: 'exporting', emit: 'onExporting' },
                { subscribe: 'fileSaving', emit: 'onFileSaving' },
                { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
                { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
                { emit: 'argumentFieldChange' },
                { emit: 'barNegativeColorChange' },
                { emit: 'barPositiveColorChange' },
                { emit: 'dataSourceChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'firstLastColorChange' },
                { emit: 'ignoreEmptyPointsChange' },
                { emit: 'lineColorChange' },
                { emit: 'lineWidthChange' },
                { emit: 'lossColorChange' },
                { emit: 'marginChange' },
                { emit: 'maxColorChange' },
                { emit: 'maxValueChange' },
                { emit: 'minColorChange' },
                { emit: 'minValueChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'pointColorChange' },
                { emit: 'pointSizeChange' },
                { emit: 'pointSymbolChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'showFirstLastChange' },
                { emit: 'showMinMaxChange' },
                { emit: 'sizeChange' },
                { emit: 'themeChange' },
                { emit: 'tooltipChange' },
                { emit: 'typeChange' },
                { emit: 'valueFieldChange' },
                { emit: 'winColorChange' },
                { emit: 'winlossThresholdChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxSparklineComponent.prototype, "argumentField", {
            /**
             * Specifies the data source field that provides arguments for a sparkline.
             */
            get: function () {
                return this._getOption('argumentField');
            },
            set: function (value) {
                this._setOption('argumentField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "barNegativeColor", {
            /**
             * Sets a color for the bars indicating negative values. Available for a sparkline of the bar type only.
             */
            get: function () {
                return this._getOption('barNegativeColor');
            },
            set: function (value) {
                this._setOption('barNegativeColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "barPositiveColor", {
            /**
             * Sets a color for the bars indicating positive values. Available for a sparkline of the bar type only.
             */
            get: function () {
                return this._getOption('barPositiveColor');
            },
            set: function (value) {
                this._setOption('barPositiveColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxSparklineComponent.prototype, "disabled", {
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
        Object.defineProperty(DxSparklineComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxSparklineComponent.prototype, "firstLastColor", {
            /**
             * Sets a color for the boundary of both the first and last points on a sparkline.
             */
            get: function () {
                return this._getOption('firstLastColor');
            },
            set: function (value) {
                this._setOption('firstLastColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "ignoreEmptyPoints", {
            /**
             * Specifies whether the sparkline should ignore null data points.
             */
            get: function () {
                return this._getOption('ignoreEmptyPoints');
            },
            set: function (value) {
                this._setOption('ignoreEmptyPoints', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "lineColor", {
            /**
             * Sets a color for a line on a sparkline. Available for the sparklines of the line- and area-like types.
             */
            get: function () {
                return this._getOption('lineColor');
            },
            set: function (value) {
                this._setOption('lineColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "lineWidth", {
            /**
             * Specifies a width for a line on a sparkline. Available for the sparklines of the line- and area-like types.
             */
            get: function () {
                return this._getOption('lineWidth');
            },
            set: function (value) {
                this._setOption('lineWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "lossColor", {
            /**
             * Sets a color for the bars indicating the values that are less than the winloss threshold. Available for a sparkline of the winloss type only.
             */
            get: function () {
                return this._getOption('lossColor');
            },
            set: function (value) {
                this._setOption('lossColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "margin", {
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
        Object.defineProperty(DxSparklineComponent.prototype, "maxColor", {
            /**
             * Sets a color for the boundary of the maximum point on a sparkline.
             */
            get: function () {
                return this._getOption('maxColor');
            },
            set: function (value) {
                this._setOption('maxColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "maxValue", {
            /**
             * Specifies the maximum value of the sparkline's value axis.
             */
            get: function () {
                return this._getOption('maxValue');
            },
            set: function (value) {
                this._setOption('maxValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "minColor", {
            /**
             * Sets a color for the boundary of the minimum point on a sparkline.
             */
            get: function () {
                return this._getOption('minColor');
            },
            set: function (value) {
                this._setOption('minColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "minValue", {
            /**
             * Specifies the minimum value of the sparkline value axis.
             */
            get: function () {
                return this._getOption('minValue');
            },
            set: function (value) {
                this._setOption('minValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "pathModified", {
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
        Object.defineProperty(DxSparklineComponent.prototype, "pointColor", {
            /**
             * Sets a color for points on a sparkline. Available for the sparklines of the line- and area-like types.
             */
            get: function () {
                return this._getOption('pointColor');
            },
            set: function (value) {
                this._setOption('pointColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "pointSize", {
            /**
             * Specifies the diameter of sparkline points in pixels. Available for the sparklines of line- and area-like types.
             */
            get: function () {
                return this._getOption('pointSize');
            },
            set: function (value) {
                this._setOption('pointSize', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "pointSymbol", {
            /**
             * Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types.
             */
            get: function () {
                return this._getOption('pointSymbol');
            },
            set: function (value) {
                this._setOption('pointSymbol', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxSparklineComponent.prototype, "showFirstLast", {
            /**
             * Specifies whether or not to indicate both the first and last values on a sparkline.
             */
            get: function () {
                return this._getOption('showFirstLast');
            },
            set: function (value) {
                this._setOption('showFirstLast', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "showMinMax", {
            /**
             * Specifies whether or not to indicate both the minimum and maximum values on a sparkline.
             */
            get: function () {
                return this._getOption('showMinMax');
            },
            set: function (value) {
                this._setOption('showMinMax', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "size", {
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
        Object.defineProperty(DxSparklineComponent.prototype, "theme", {
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
        Object.defineProperty(DxSparklineComponent.prototype, "tooltip", {
            /**
             * Configures the tooltip.
             */
            get: function () {
                return this._getOption('tooltip');
            },
            set: function (value) {
                this._setOption('tooltip', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "type", {
            /**
             * Determines the type of a sparkline.
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
        Object.defineProperty(DxSparklineComponent.prototype, "valueField", {
            /**
             * Specifies the data source field that provides values for a sparkline.
             */
            get: function () {
                return this._getOption('valueField');
            },
            set: function (value) {
                this._setOption('valueField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "winColor", {
            /**
             * Sets a color for the bars indicating the values greater than a winloss threshold. Available for a sparkline of the winloss type only.
             */
            get: function () {
                return this._getOption('winColor');
            },
            set: function (value) {
                this._setOption('winColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSparklineComponent.prototype, "winlossThreshold", {
            /**
             * Specifies a value that serves as a threshold for the sparkline of the winloss type.
             */
            get: function () {
                return this._getOption('winlossThreshold');
            },
            set: function (value) {
                this._setOption('winlossThreshold', value);
            },
            enumerable: true,
            configurable: true
        });
        DxSparklineComponent.prototype._createInstance = function (element, options) {
            return new DxSparkline(element, options);
        };
        DxSparklineComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxSparklineComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
        };
        DxSparklineComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxSparklineComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxSparklineComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxSparklineComponent.ctorParameters = function () { return [
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
        ], DxSparklineComponent.prototype, "argumentField", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "barNegativeColor", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "barPositiveColor", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "firstLastColor", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "ignoreEmptyPoints", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "lineColor", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "lineWidth", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "lossColor", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "margin", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "maxColor", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "maxValue", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "minColor", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "minValue", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "pointColor", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "pointSize", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "pointSymbol", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "showFirstLast", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "showMinMax", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "type", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "valueField", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "winColor", null);
        __decorate([
            core.Input()
        ], DxSparklineComponent.prototype, "winlossThreshold", null);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onTooltipHidden", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "onTooltipShown", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "argumentFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "barNegativeColorChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "barPositiveColorChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "firstLastColorChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "ignoreEmptyPointsChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "lineColorChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "lineWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "lossColorChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "marginChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "maxColorChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "maxValueChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "minColorChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "minValueChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "pointColorChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "pointSizeChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "pointSymbolChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "showFirstLastChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "showMinMaxChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "tooltipChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "typeChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "valueFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "winColorChange", void 0);
        __decorate([
            core.Output()
        ], DxSparklineComponent.prototype, "winlossThresholdChange", void 0);
        DxSparklineComponent = __decorate([
            core.Component({
                selector: 'dx-sparkline',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ],
                styles: [' :host {  display: block; }']
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxSparklineComponent);
        return DxSparklineComponent;
    }(core$1.DxComponent));
    var DxSparklineModule = /** @class */ (function () {
        function DxSparklineModule() {
        }
        DxSparklineModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoMarginModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxoBorderModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoShadowModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxSparklineComponent
                ],
                exports: [
                    DxSparklineComponent,
                    nested.DxoMarginModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxoBorderModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoShadowModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxSparklineModule);
        return DxSparklineModule;
    }());

    exports.DxSparklineComponent = DxSparklineComponent;
    exports.DxSparklineModule = DxSparklineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-sparkline.umd.js.map

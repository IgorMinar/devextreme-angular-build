(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/polar_chart'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/polar-chart', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/polar_chart', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['polar-chart'] = {}), global.ng.platformBrowser, global.ng.core, global.DxPolarChart, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxPolarChart, core$1, nested) { 'use strict';

    DxPolarChart = DxPolarChart && DxPolarChart.hasOwnProperty('default') ? DxPolarChart['default'] : DxPolarChart;

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
     * The PolarChart is a widget that visualizes data in a polar coordinate system.
     */
    var DxPolarChartComponent = /** @class */ (function (_super) {
        __extends(DxPolarChartComponent, _super);
        function DxPolarChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'argumentAxisClick', emit: 'onArgumentAxisClick' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'done', emit: 'onDone' },
                { subscribe: 'drawn', emit: 'onDrawn' },
                { subscribe: 'exported', emit: 'onExported' },
                { subscribe: 'exporting', emit: 'onExporting' },
                { subscribe: 'fileSaving', emit: 'onFileSaving' },
                { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'legendClick', emit: 'onLegendClick' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'pointClick', emit: 'onPointClick' },
                { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
                { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
                { subscribe: 'seriesClick', emit: 'onSeriesClick' },
                { subscribe: 'seriesHoverChanged', emit: 'onSeriesHoverChanged' },
                { subscribe: 'seriesSelectionChanged', emit: 'onSeriesSelectionChanged' },
                { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
                { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
                { emit: 'adaptiveLayoutChange' },
                { emit: 'animationChange' },
                { emit: 'argumentAxisChange' },
                { emit: 'barGroupPaddingChange' },
                { emit: 'barGroupWidthChange' },
                { emit: 'barWidthChange' },
                { emit: 'commonAxisSettingsChange' },
                { emit: 'commonSeriesSettingsChange' },
                { emit: 'containerBackgroundColorChange' },
                { emit: 'customizeLabelChange' },
                { emit: 'customizePointChange' },
                { emit: 'dataPrepareSettingsChange' },
                { emit: 'dataSourceChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'equalBarWidthChange' },
                { emit: 'exportChange' },
                { emit: 'legendChange' },
                { emit: 'loadingIndicatorChange' },
                { emit: 'marginChange' },
                { emit: 'negativesAsZeroesChange' },
                { emit: 'paletteChange' },
                { emit: 'paletteExtensionModeChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'pointSelectionModeChange' },
                { emit: 'redrawOnResizeChange' },
                { emit: 'resolveLabelOverlappingChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'seriesChange' },
                { emit: 'seriesSelectionModeChange' },
                { emit: 'seriesTemplateChange' },
                { emit: 'sizeChange' },
                { emit: 'themeChange' },
                { emit: 'titleChange' },
                { emit: 'tooltipChange' },
                { emit: 'useSpiderWebChange' },
                { emit: 'valueAxisChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxPolarChartComponent.prototype, "adaptiveLayout", {
            /**
             * Specifies adaptive layout options.
             */
            get: function () {
                return this._getOption('adaptiveLayout');
            },
            set: function (value) {
                this._setOption('adaptiveLayout', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "animation", {
            /**
             * Specifies animation options.
             */
            get: function () {
                return this._getOption('animation');
            },
            set: function (value) {
                this._setOption('animation', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "argumentAxis", {
            /**
             * Specifies argument axis options for the PolarChart widget.
             */
            get: function () {
                return this._getOption('argumentAxis');
            },
            set: function (value) {
                this._setOption('argumentAxis', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "barGroupPadding", {
            /**
             * Controls the padding and consequently the angular width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth option is set.
             */
            get: function () {
                return this._getOption('barGroupPadding');
            },
            set: function (value) {
                this._setOption('barGroupPadding', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "barGroupWidth", {
            /**
             * Specifies a fixed angular width for groups of bars with the same argument, measured in degrees. Takes precedence over the barGroupPadding option.
             */
            get: function () {
                return this._getOption('barGroupWidth');
            },
            set: function (value) {
                this._setOption('barGroupWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "barWidth", {
            /**
             * Use CommonPolarChartSeries.barPadding instead.
             */
            get: function () {
                return this._getOption('barWidth');
            },
            set: function (value) {
                this._setOption('barWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "commonAxisSettings", {
            /**
             * An object defining the configuration options that are common for all axes of the PolarChart widget.
             */
            get: function () {
                return this._getOption('commonAxisSettings');
            },
            set: function (value) {
                this._setOption('commonAxisSettings', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "commonSeriesSettings", {
            /**
             * An object defining the configuration options that are common for all series of the PolarChart widget.
             */
            get: function () {
                return this._getOption('commonSeriesSettings');
            },
            set: function (value) {
                this._setOption('commonSeriesSettings', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "containerBackgroundColor", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "customizeLabel", {
            /**
             * Customizes the appearance of an individual point label.
             */
            get: function () {
                return this._getOption('customizeLabel');
            },
            set: function (value) {
                this._setOption('customizeLabel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "customizePoint", {
            /**
             * Customizes the appearance of an individual series point.
             */
            get: function () {
                return this._getOption('customizePoint');
            },
            set: function (value) {
                this._setOption('customizePoint', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "dataPrepareSettings", {
            /**
             * An object providing options for managing data from a data source.
             */
            get: function () {
                return this._getOption('dataPrepareSettings');
            },
            set: function (value) {
                this._setOption('dataPrepareSettings', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "disabled", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "equalBarWidth", {
            /**
             * Use CommonPolarChartSeries.ignoreEmptyPoints instead.
             */
            get: function () {
                return this._getOption('equalBarWidth');
            },
            set: function (value) {
                this._setOption('equalBarWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "export", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "legend", {
            /**
             * Specifies the options of a chart's legend.
             */
            get: function () {
                return this._getOption('legend');
            },
            set: function (value) {
                this._setOption('legend', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "loadingIndicator", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "margin", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "negativesAsZeroes", {
            /**
             * Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.
             */
            get: function () {
                return this._getOption('negativesAsZeroes');
            },
            set: function (value) {
                this._setOption('negativesAsZeroes', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "palette", {
            /**
             * Sets the palette to be used for colorizing series and their elements.
             */
            get: function () {
                return this._getOption('palette');
            },
            set: function (value) {
                this._setOption('palette', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "paletteExtensionMode", {
            /**
             * Specifies what to do with colors in the palette when their number is less than the number of series (in the Chart widget) or points in a series (in the PieChart widget).
             */
            get: function () {
                return this._getOption('paletteExtensionMode');
            },
            set: function (value) {
                this._setOption('paletteExtensionMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "pathModified", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "pointSelectionMode", {
            /**
             * Specifies whether a single point or multiple points can be selected in the chart.
             */
            get: function () {
                return this._getOption('pointSelectionMode');
            },
            set: function (value) {
                this._setOption('pointSelectionMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "redrawOnResize", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "resolveLabelOverlapping", {
            /**
             * Specifies how the chart must behave when series point labels overlap.
             */
            get: function () {
                return this._getOption('resolveLabelOverlapping');
            },
            set: function (value) {
                this._setOption('resolveLabelOverlapping', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "series", {
            /**
             * Specifies options for PolarChart widget series.
             */
            get: function () {
                return this._getOption('series');
            },
            set: function (value) {
                this._setOption('series', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "seriesSelectionMode", {
            /**
             * Specifies whether a single series or multiple series can be selected in the chart.
             */
            get: function () {
                return this._getOption('seriesSelectionMode');
            },
            set: function (value) {
                this._setOption('seriesSelectionMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "seriesTemplate", {
            /**
             * Defines options for the series template.
             */
            get: function () {
                return this._getOption('seriesTemplate');
            },
            set: function (value) {
                this._setOption('seriesTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "size", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "theme", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "title", {
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
        Object.defineProperty(DxPolarChartComponent.prototype, "tooltip", {
            /**
             * Configures tooltips.
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
        Object.defineProperty(DxPolarChartComponent.prototype, "useSpiderWeb", {
            /**
             * Indicates whether or not to display a "spider web".
             */
            get: function () {
                return this._getOption('useSpiderWeb');
            },
            set: function (value) {
                this._setOption('useSpiderWeb', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "valueAxis", {
            /**
             * Specifies value axis options for the PolarChart widget.
             */
            get: function () {
                return this._getOption('valueAxis');
            },
            set: function (value) {
                this._setOption('valueAxis', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPolarChartComponent.prototype, "seriesChildren", {
            get: function () {
                return this._getOption('series');
            },
            set: function (value) {
                this.setChildren('series', value);
            },
            enumerable: true,
            configurable: true
        });
        DxPolarChartComponent.prototype._createInstance = function (element, options) {
            return new DxPolarChart(element, options);
        };
        DxPolarChartComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxPolarChartComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('palette', changes);
            this.setupChanges('series', changes);
        };
        DxPolarChartComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxPolarChartComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._idh.doCheck('palette');
            this._idh.doCheck('series');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxPolarChartComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxPolarChartComponent.ctorParameters = function () { return [
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
        ], DxPolarChartComponent.prototype, "adaptiveLayout", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "argumentAxis", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "barGroupPadding", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "barGroupWidth", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "barWidth", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "commonAxisSettings", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "commonSeriesSettings", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "containerBackgroundColor", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "customizeLabel", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "customizePoint", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "dataPrepareSettings", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "equalBarWidth", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "legend", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "loadingIndicator", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "margin", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "negativesAsZeroes", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "palette", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "paletteExtensionMode", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "pointSelectionMode", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "redrawOnResize", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "resolveLabelOverlapping", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "series", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "seriesSelectionMode", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "seriesTemplate", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "title", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "useSpiderWeb", null);
        __decorate([
            core.Input()
        ], DxPolarChartComponent.prototype, "valueAxis", null);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onArgumentAxisClick", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onDone", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onLegendClick", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onPointClick", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onPointHoverChanged", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onPointSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onSeriesClick", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onSeriesHoverChanged", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onSeriesSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onTooltipHidden", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "onTooltipShown", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "adaptiveLayoutChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "animationChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "argumentAxisChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "barGroupPaddingChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "barGroupWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "barWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "commonAxisSettingsChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "commonSeriesSettingsChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "containerBackgroundColorChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "customizeLabelChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "customizePointChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "dataPrepareSettingsChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "equalBarWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "legendChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "loadingIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "marginChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "negativesAsZeroesChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "paletteChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "paletteExtensionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "pointSelectionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "redrawOnResizeChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "seriesChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "seriesSelectionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "seriesTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "titleChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "tooltipChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "useSpiderWebChange", void 0);
        __decorate([
            core.Output()
        ], DxPolarChartComponent.prototype, "valueAxisChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiSeriesComponent)
        ], DxPolarChartComponent.prototype, "seriesChildren", null);
        DxPolarChartComponent = __decorate([
            core.Component({
                selector: 'dx-polar-chart',
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
        ], DxPolarChartComponent);
        return DxPolarChartComponent;
    }(core$1.DxComponent));
    var DxPolarChartModule = /** @class */ (function () {
        function DxPolarChartModule() {
        }
        DxPolarChartModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoAdaptiveLayoutModule,
                    nested.DxoAnimationModule,
                    nested.DxoArgumentAxisModule,
                    nested.DxiConstantLineModule,
                    nested.DxoLabelModule,
                    nested.DxoFontModule,
                    nested.DxoConstantLineStyleModule,
                    nested.DxoGridModule,
                    nested.DxoFormatModule,
                    nested.DxoMinorGridModule,
                    nested.DxoMinorTickModule,
                    nested.DxoMinorTickIntervalModule,
                    nested.DxiStripModule,
                    nested.DxoStripStyleModule,
                    nested.DxoTickModule,
                    nested.DxoTickIntervalModule,
                    nested.DxoCommonAxisSettingsModule,
                    nested.DxoCommonSeriesSettingsModule,
                    nested.DxoAreaModule,
                    nested.DxoBorderModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
                    nested.DxoConnectorModule,
                    nested.DxoPointModule,
                    nested.DxoImageModule,
                    nested.DxoSelectionStyleModule,
                    nested.DxoValueErrorBarModule,
                    nested.DxoBarModule,
                    nested.DxoArgumentFormatModule,
                    nested.DxoLineModule,
                    nested.DxoScatterModule,
                    nested.DxoStackedbarModule,
                    nested.DxoDataPrepareSettingsModule,
                    nested.DxoExportModule,
                    nested.DxoLegendModule,
                    nested.DxoMarginModule,
                    nested.DxoTitleModule,
                    nested.DxoSubtitleModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxiSeriesModule,
                    nested.DxoSeriesTemplateModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxoShadowModule,
                    nested.DxoValueAxisModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxPolarChartComponent
                ],
                exports: [
                    DxPolarChartComponent,
                    nested.DxoAdaptiveLayoutModule,
                    nested.DxoAnimationModule,
                    nested.DxoArgumentAxisModule,
                    nested.DxiConstantLineModule,
                    nested.DxoLabelModule,
                    nested.DxoFontModule,
                    nested.DxoConstantLineStyleModule,
                    nested.DxoGridModule,
                    nested.DxoFormatModule,
                    nested.DxoMinorGridModule,
                    nested.DxoMinorTickModule,
                    nested.DxoMinorTickIntervalModule,
                    nested.DxiStripModule,
                    nested.DxoStripStyleModule,
                    nested.DxoTickModule,
                    nested.DxoTickIntervalModule,
                    nested.DxoCommonAxisSettingsModule,
                    nested.DxoCommonSeriesSettingsModule,
                    nested.DxoAreaModule,
                    nested.DxoBorderModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
                    nested.DxoConnectorModule,
                    nested.DxoPointModule,
                    nested.DxoImageModule,
                    nested.DxoSelectionStyleModule,
                    nested.DxoValueErrorBarModule,
                    nested.DxoBarModule,
                    nested.DxoArgumentFormatModule,
                    nested.DxoLineModule,
                    nested.DxoScatterModule,
                    nested.DxoStackedbarModule,
                    nested.DxoDataPrepareSettingsModule,
                    nested.DxoExportModule,
                    nested.DxoLegendModule,
                    nested.DxoMarginModule,
                    nested.DxoTitleModule,
                    nested.DxoSubtitleModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxiSeriesModule,
                    nested.DxoSeriesTemplateModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxoShadowModule,
                    nested.DxoValueAxisModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxPolarChartModule);
        return DxPolarChartModule;
    }());

    exports.DxPolarChartComponent = DxPolarChartComponent;
    exports.DxPolarChartModule = DxPolarChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-polar-chart.umd.js.map

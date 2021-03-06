(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/chart'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/chart', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/chart', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.chart = {}), global.ng.platformBrowser, global.ng.core, global.DxChart, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxChart, core$1, nested) { 'use strict';

    DxChart = DxChart && DxChart.hasOwnProperty('default') ? DxChart['default'] : DxChart;

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
     * The Chart is a widget that visualizes data from a local or remote storage using a great variety of series types along with different interactive elements, such as tooltips, crosshair pointer, legend, etc.
     */
    var DxChartComponent = /** @class */ (function (_super) {
        __extends(DxChartComponent, _super);
        function DxChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
                { subscribe: 'zoomEnd', emit: 'onZoomEnd' },
                { subscribe: 'zoomStart', emit: 'onZoomStart' },
                { emit: 'adaptiveLayoutChange' },
                { emit: 'adjustOnZoomChange' },
                { emit: 'animationChange' },
                { emit: 'annotationsChange' },
                { emit: 'argumentAxisChange' },
                { emit: 'autoHidePointMarkersChange' },
                { emit: 'barGroupPaddingChange' },
                { emit: 'barGroupWidthChange' },
                { emit: 'barWidthChange' },
                { emit: 'commonAnnotationSettingsChange' },
                { emit: 'commonAxisSettingsChange' },
                { emit: 'commonPaneSettingsChange' },
                { emit: 'commonSeriesSettingsChange' },
                { emit: 'containerBackgroundColorChange' },
                { emit: 'crosshairChange' },
                { emit: 'customizeAnnotationChange' },
                { emit: 'customizeLabelChange' },
                { emit: 'customizePointChange' },
                { emit: 'dataPrepareSettingsChange' },
                { emit: 'dataSourceChange' },
                { emit: 'defaultPaneChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'equalBarWidthChange' },
                { emit: 'exportChange' },
                { emit: 'legendChange' },
                { emit: 'loadingIndicatorChange' },
                { emit: 'marginChange' },
                { emit: 'maxBubbleSizeChange' },
                { emit: 'minBubbleSizeChange' },
                { emit: 'negativesAsZeroesChange' },
                { emit: 'paletteChange' },
                { emit: 'paletteExtensionModeChange' },
                { emit: 'panesChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'pointSelectionModeChange' },
                { emit: 'redrawOnResizeChange' },
                { emit: 'resolveLabelOverlappingChange' },
                { emit: 'rotatedChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'scrollBarChange' },
                { emit: 'scrollingModeChange' },
                { emit: 'seriesChange' },
                { emit: 'seriesSelectionModeChange' },
                { emit: 'seriesTemplateChange' },
                { emit: 'sizeChange' },
                { emit: 'stickyHoveringChange' },
                { emit: 'synchronizeMultiAxesChange' },
                { emit: 'themeChange' },
                { emit: 'titleChange' },
                { emit: 'tooltipChange' },
                { emit: 'useAggregationChange' },
                { emit: 'valueAxisChange' },
                { emit: 'zoomAndPanChange' },
                { emit: 'zoomingModeChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxChartComponent.prototype, "adaptiveLayout", {
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
        Object.defineProperty(DxChartComponent.prototype, "adjustOnZoom", {
            /**
             * Specifies whether to adjust the value axis's visualRange when the argument axis is being zoomed or panned.
             */
            get: function () {
                return this._getOption('adjustOnZoom');
            },
            set: function (value) {
                this._setOption('adjustOnZoom', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "animation", {
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
        Object.defineProperty(DxChartComponent.prototype, "annotations", {
            /**
             * Specifies the annotation collection.
             */
            get: function () {
                return this._getOption('annotations');
            },
            set: function (value) {
                this._setOption('annotations', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "argumentAxis", {
            /**
             * Configures the argument axis.
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
        Object.defineProperty(DxChartComponent.prototype, "autoHidePointMarkers", {
            /**
             * Specifies whether to hide series point markers automatically to reduce visual clutter.
             */
            get: function () {
                return this._getOption('autoHidePointMarkers');
            },
            set: function (value) {
                this._setOption('autoHidePointMarkers', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "barGroupPadding", {
            /**
             * Controls the padding and consequently the width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth option is set.
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
        Object.defineProperty(DxChartComponent.prototype, "barGroupWidth", {
            /**
             * Specifies a fixed width for groups of bars with the same argument, measured in pixels. Takes precedence over the barGroupPadding option.
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
        Object.defineProperty(DxChartComponent.prototype, "barWidth", {
            /**
             * Use CommonSeries.barPadding instead.
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
        Object.defineProperty(DxChartComponent.prototype, "commonAnnotationSettings", {
            /**
             * Specifies settings common for all annotations in the chart.
             */
            get: function () {
                return this._getOption('commonAnnotationSettings');
            },
            set: function (value) {
                this._setOption('commonAnnotationSettings', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "commonAxisSettings", {
            /**
             * Defines common settings for both the argument and value axis in a chart.
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
        Object.defineProperty(DxChartComponent.prototype, "commonPaneSettings", {
            /**
             * Defines common settings for all panes in a chart.
             */
            get: function () {
                return this._getOption('commonPaneSettings');
            },
            set: function (value) {
                this._setOption('commonPaneSettings', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "commonSeriesSettings", {
            /**
             * Specifies settings common for all series in the chart.
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
        Object.defineProperty(DxChartComponent.prototype, "containerBackgroundColor", {
            /**
             * Colors the background of the chart container.
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
        Object.defineProperty(DxChartComponent.prototype, "crosshair", {
            /**
             * Configures the crosshair feature.
             */
            get: function () {
                return this._getOption('crosshair');
            },
            set: function (value) {
                this._setOption('crosshair', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "customizeAnnotation", {
            /**
             * Customizes an individual annotation.
             */
            get: function () {
                return this._getOption('customizeAnnotation');
            },
            set: function (value) {
                this._setOption('customizeAnnotation', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "customizeLabel", {
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
        Object.defineProperty(DxChartComponent.prototype, "customizePoint", {
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
        Object.defineProperty(DxChartComponent.prototype, "dataPrepareSettings", {
            /**
             * Processes data before visualizing it.
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
        Object.defineProperty(DxChartComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxChartComponent.prototype, "defaultPane", {
            /**
             * Specifies which pane should be used by default.
             */
            get: function () {
                return this._getOption('defaultPane');
            },
            set: function (value) {
                this._setOption('defaultPane', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "disabled", {
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
        Object.defineProperty(DxChartComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxChartComponent.prototype, "equalBarWidth", {
            /**
             * Use CommonSeries.ignoreEmptyPoints instead.
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
        Object.defineProperty(DxChartComponent.prototype, "export", {
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
        Object.defineProperty(DxChartComponent.prototype, "legend", {
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
        Object.defineProperty(DxChartComponent.prototype, "loadingIndicator", {
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
        Object.defineProperty(DxChartComponent.prototype, "margin", {
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
        Object.defineProperty(DxChartComponent.prototype, "maxBubbleSize", {
            /**
             * Specifies a coefficient determining the diameter of the largest bubble.
             */
            get: function () {
                return this._getOption('maxBubbleSize');
            },
            set: function (value) {
                this._setOption('maxBubbleSize', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "minBubbleSize", {
            /**
             * Specifies the diameter of the smallest bubble measured in pixels.
             */
            get: function () {
                return this._getOption('minBubbleSize');
            },
            set: function (value) {
                this._setOption('minBubbleSize', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "negativesAsZeroes", {
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
        Object.defineProperty(DxChartComponent.prototype, "palette", {
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
        Object.defineProperty(DxChartComponent.prototype, "paletteExtensionMode", {
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
        Object.defineProperty(DxChartComponent.prototype, "panes", {
            /**
             * Declares a collection of panes.
             */
            get: function () {
                return this._getOption('panes');
            },
            set: function (value) {
                this._setOption('panes', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "pathModified", {
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
        Object.defineProperty(DxChartComponent.prototype, "pointSelectionMode", {
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
        Object.defineProperty(DxChartComponent.prototype, "redrawOnResize", {
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
        Object.defineProperty(DxChartComponent.prototype, "resolveLabelOverlapping", {
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
        Object.defineProperty(DxChartComponent.prototype, "rotated", {
            /**
             * Swaps the axes around making the value axis horizontal and the argument axis vertical.
             */
            get: function () {
                return this._getOption('rotated');
            },
            set: function (value) {
                this._setOption('rotated', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxChartComponent.prototype, "scrollBar", {
            /**
             * Specifies the settings of the scroll bar.
             */
            get: function () {
                return this._getOption('scrollBar');
            },
            set: function (value) {
                this._setOption('scrollBar', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "scrollingMode", {
            /**
             * Use the zoomAndPan option instead.
             */
            get: function () {
                return this._getOption('scrollingMode');
            },
            set: function (value) {
                this._setOption('scrollingMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "series", {
            /**
             * Specifies options for Chart widget series.
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
        Object.defineProperty(DxChartComponent.prototype, "seriesSelectionMode", {
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
        Object.defineProperty(DxChartComponent.prototype, "seriesTemplate", {
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
        Object.defineProperty(DxChartComponent.prototype, "size", {
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
        Object.defineProperty(DxChartComponent.prototype, "stickyHovering", {
            /**
             * Specifies whether a point should remain in the hover state when the mouse pointer moves away.
             */
            get: function () {
                return this._getOption('stickyHovering');
            },
            set: function (value) {
                this._setOption('stickyHovering', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "synchronizeMultiAxes", {
            /**
             * Indicates whether or not to synchronize value axes when they are displayed on a single pane.
             */
            get: function () {
                return this._getOption('synchronizeMultiAxes');
            },
            set: function (value) {
                this._setOption('synchronizeMultiAxes', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "theme", {
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
        Object.defineProperty(DxChartComponent.prototype, "title", {
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
        Object.defineProperty(DxChartComponent.prototype, "tooltip", {
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
        Object.defineProperty(DxChartComponent.prototype, "useAggregation", {
            /**
             * Use CommonSeries.aggregation.enabled instead.
             */
            get: function () {
                return this._getOption('useAggregation');
            },
            set: function (value) {
                this._setOption('useAggregation', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "valueAxis", {
            /**
             * Configures the value axis.
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
        Object.defineProperty(DxChartComponent.prototype, "zoomAndPan", {
            /**
             * Configures zooming and panning.
             */
            get: function () {
                return this._getOption('zoomAndPan');
            },
            set: function (value) {
                this._setOption('zoomAndPan', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "zoomingMode", {
            /**
             * Use the zoomAndPan option instead.
             */
            get: function () {
                return this._getOption('zoomingMode');
            },
            set: function (value) {
                this._setOption('zoomingMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "annotationsChildren", {
            get: function () {
                return this._getOption('annotations');
            },
            set: function (value) {
                this.setChildren('annotations', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "panesChildren", {
            get: function () {
                return this._getOption('panes');
            },
            set: function (value) {
                this.setChildren('panes', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "seriesChildren", {
            get: function () {
                return this._getOption('series');
            },
            set: function (value) {
                this.setChildren('series', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxChartComponent.prototype, "valueAxisChildren", {
            get: function () {
                return this._getOption('valueAxis');
            },
            set: function (value) {
                this.setChildren('valueAxis', value);
            },
            enumerable: true,
            configurable: true
        });
        DxChartComponent.prototype._createInstance = function (element, options) {
            return new DxChart(element, options);
        };
        DxChartComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxChartComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('annotations', changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('palette', changes);
            this.setupChanges('panes', changes);
            this.setupChanges('series', changes);
            this.setupChanges('valueAxis', changes);
        };
        DxChartComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxChartComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('annotations');
            this._idh.doCheck('dataSource');
            this._idh.doCheck('palette');
            this._idh.doCheck('panes');
            this._idh.doCheck('series');
            this._idh.doCheck('valueAxis');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxChartComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxChartComponent.ctorParameters = function () { return [
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
        ], DxChartComponent.prototype, "adaptiveLayout", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "adjustOnZoom", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "annotations", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "argumentAxis", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "autoHidePointMarkers", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "barGroupPadding", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "barGroupWidth", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "barWidth", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "commonAnnotationSettings", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "commonAxisSettings", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "commonPaneSettings", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "commonSeriesSettings", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "containerBackgroundColor", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "crosshair", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "customizeAnnotation", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "customizeLabel", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "customizePoint", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "dataPrepareSettings", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "defaultPane", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "equalBarWidth", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "legend", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "loadingIndicator", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "margin", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "maxBubbleSize", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "minBubbleSize", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "negativesAsZeroes", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "palette", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "paletteExtensionMode", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "panes", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "pointSelectionMode", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "redrawOnResize", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "resolveLabelOverlapping", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "rotated", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "scrollBar", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "scrollingMode", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "series", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "seriesSelectionMode", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "seriesTemplate", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "stickyHovering", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "synchronizeMultiAxes", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "title", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "useAggregation", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "valueAxis", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "zoomAndPan", null);
        __decorate([
            core.Input()
        ], DxChartComponent.prototype, "zoomingMode", null);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onArgumentAxisClick", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onDone", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onLegendClick", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onPointClick", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onPointHoverChanged", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onPointSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onSeriesClick", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onSeriesHoverChanged", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onSeriesSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onTooltipHidden", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onTooltipShown", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onZoomEnd", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "onZoomStart", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "adaptiveLayoutChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "adjustOnZoomChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "animationChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "annotationsChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "argumentAxisChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "autoHidePointMarkersChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "barGroupPaddingChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "barGroupWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "barWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "commonAnnotationSettingsChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "commonAxisSettingsChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "commonPaneSettingsChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "commonSeriesSettingsChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "containerBackgroundColorChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "crosshairChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "customizeAnnotationChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "customizeLabelChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "customizePointChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "dataPrepareSettingsChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "defaultPaneChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "equalBarWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "legendChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "loadingIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "marginChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "maxBubbleSizeChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "minBubbleSizeChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "negativesAsZeroesChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "paletteChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "paletteExtensionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "panesChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "pointSelectionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "redrawOnResizeChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "rotatedChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "scrollBarChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "scrollingModeChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "seriesChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "seriesSelectionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "seriesTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "stickyHoveringChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "synchronizeMultiAxesChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "titleChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "tooltipChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "useAggregationChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "valueAxisChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "zoomAndPanChange", void 0);
        __decorate([
            core.Output()
        ], DxChartComponent.prototype, "zoomingModeChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiAnnotationComponent)
        ], DxChartComponent.prototype, "annotationsChildren", null);
        __decorate([
            core.ContentChildren(nested.DxiPaneComponent)
        ], DxChartComponent.prototype, "panesChildren", null);
        __decorate([
            core.ContentChildren(nested.DxiSeriesComponent)
        ], DxChartComponent.prototype, "seriesChildren", null);
        __decorate([
            core.ContentChildren(nested.DxiValueAxisComponent)
        ], DxChartComponent.prototype, "valueAxisChildren", null);
        DxChartComponent = __decorate([
            core.Component({
                selector: 'dx-chart',
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
        ], DxChartComponent);
        return DxChartComponent;
    }(core$1.DxComponent));
    var DxChartModule = /** @class */ (function () {
        function DxChartModule() {
        }
        DxChartModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoAdaptiveLayoutModule,
                    nested.DxoAnimationModule,
                    nested.DxiAnnotationModule,
                    nested.DxoBorderModule,
                    nested.DxoFontModule,
                    nested.DxoImageModule,
                    nested.DxoShadowModule,
                    nested.DxoArgumentAxisModule,
                    nested.DxoAggregationIntervalModule,
                    nested.DxiBreakModule,
                    nested.DxoBreakStyleModule,
                    nested.DxiConstantLineModule,
                    nested.DxoLabelModule,
                    nested.DxoConstantLineStyleModule,
                    nested.DxoGridModule,
                    nested.DxoFormatModule,
                    nested.DxoMinorGridModule,
                    nested.DxoMinorTickModule,
                    nested.DxoMinorTickIntervalModule,
                    nested.DxoMinVisualRangeLengthModule,
                    nested.DxiStripModule,
                    nested.DxoStripStyleModule,
                    nested.DxoTickModule,
                    nested.DxoTickIntervalModule,
                    nested.DxoTitleModule,
                    nested.DxoCommonAnnotationSettingsModule,
                    nested.DxoCommonAxisSettingsModule,
                    nested.DxoCommonPaneSettingsModule,
                    nested.DxoCommonSeriesSettingsModule,
                    nested.DxoAggregationModule,
                    nested.DxoAreaModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
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
                    nested.DxoCrosshairModule,
                    nested.DxoHorizontalLineModule,
                    nested.DxoVerticalLineModule,
                    nested.DxoDataPrepareSettingsModule,
                    nested.DxoExportModule,
                    nested.DxoLegendModule,
                    nested.DxoMarginModule,
                    nested.DxoSubtitleModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxiPaneModule,
                    nested.DxoScrollBarModule,
                    nested.DxiSeriesModule,
                    nested.DxoSeriesTemplateModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxiValueAxisModule,
                    nested.DxoZoomAndPanModule,
                    nested.DxoDragBoxStyleModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxChartComponent
                ],
                exports: [
                    DxChartComponent,
                    nested.DxoAdaptiveLayoutModule,
                    nested.DxoAnimationModule,
                    nested.DxiAnnotationModule,
                    nested.DxoBorderModule,
                    nested.DxoFontModule,
                    nested.DxoImageModule,
                    nested.DxoShadowModule,
                    nested.DxoArgumentAxisModule,
                    nested.DxoAggregationIntervalModule,
                    nested.DxiBreakModule,
                    nested.DxoBreakStyleModule,
                    nested.DxiConstantLineModule,
                    nested.DxoLabelModule,
                    nested.DxoConstantLineStyleModule,
                    nested.DxoGridModule,
                    nested.DxoFormatModule,
                    nested.DxoMinorGridModule,
                    nested.DxoMinorTickModule,
                    nested.DxoMinorTickIntervalModule,
                    nested.DxoMinVisualRangeLengthModule,
                    nested.DxiStripModule,
                    nested.DxoStripStyleModule,
                    nested.DxoTickModule,
                    nested.DxoTickIntervalModule,
                    nested.DxoTitleModule,
                    nested.DxoCommonAnnotationSettingsModule,
                    nested.DxoCommonAxisSettingsModule,
                    nested.DxoCommonPaneSettingsModule,
                    nested.DxoCommonSeriesSettingsModule,
                    nested.DxoAggregationModule,
                    nested.DxoAreaModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
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
                    nested.DxoCrosshairModule,
                    nested.DxoHorizontalLineModule,
                    nested.DxoVerticalLineModule,
                    nested.DxoDataPrepareSettingsModule,
                    nested.DxoExportModule,
                    nested.DxoLegendModule,
                    nested.DxoMarginModule,
                    nested.DxoSubtitleModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxiPaneModule,
                    nested.DxoScrollBarModule,
                    nested.DxiSeriesModule,
                    nested.DxoSeriesTemplateModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxiValueAxisModule,
                    nested.DxoZoomAndPanModule,
                    nested.DxoDragBoxStyleModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxChartModule);
        return DxChartModule;
    }());

    exports.DxChartComponent = DxChartComponent;
    exports.DxChartModule = DxChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-chart.umd.js.map

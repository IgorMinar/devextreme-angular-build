(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/bar_gauge'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/bar-gauge', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/bar_gauge', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['bar-gauge'] = {}), global.ng.platformBrowser, global.ng.core, global.DxBarGauge, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxBarGauge, core$1, nested) { 'use strict';

    DxBarGauge = DxBarGauge && DxBarGauge.hasOwnProperty('default') ? DxBarGauge['default'] : DxBarGauge;

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
     * The BarGauge widget contains several circular bars that each indicates a single value.
     */
    var DxBarGaugeComponent = /** @class */ (function (_super) {
        __extends(DxBarGaugeComponent, _super);
        function DxBarGaugeComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
                { emit: 'animationChange' },
                { emit: 'backgroundColorChange' },
                { emit: 'barSpacingChange' },
                { emit: 'baseValueChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'endValueChange' },
                { emit: 'exportChange' },
                { emit: 'geometryChange' },
                { emit: 'labelChange' },
                { emit: 'legendChange' },
                { emit: 'loadingIndicatorChange' },
                { emit: 'marginChange' },
                { emit: 'paletteChange' },
                { emit: 'paletteExtensionModeChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'redrawOnResizeChange' },
                { emit: 'relativeInnerRadiusChange' },
                { emit: 'resolveLabelOverlappingChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'sizeChange' },
                { emit: 'startValueChange' },
                { emit: 'themeChange' },
                { emit: 'titleChange' },
                { emit: 'tooltipChange' },
                { emit: 'valuesChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxBarGaugeComponent.prototype, "animation", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "backgroundColor", {
            /**
             * Specifies a color for the remaining segment of the bar's track.
             */
            get: function () {
                return this._getOption('backgroundColor');
            },
            set: function (value) {
                this._setOption('backgroundColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBarGaugeComponent.prototype, "barSpacing", {
            /**
             * Specifies a distance between bars in pixels.
             */
            get: function () {
                return this._getOption('barSpacing');
            },
            set: function (value) {
                this._setOption('barSpacing', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBarGaugeComponent.prototype, "baseValue", {
            /**
             * Specifies a base value for bars.
             */
            get: function () {
                return this._getOption('baseValue');
            },
            set: function (value) {
                this._setOption('baseValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBarGaugeComponent.prototype, "disabled", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "endValue", {
            /**
             * Specifies an end value for the gauge's invisible scale.
             */
            get: function () {
                return this._getOption('endValue');
            },
            set: function (value) {
                this._setOption('endValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBarGaugeComponent.prototype, "export", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "geometry", {
            /**
             * Defines the shape of the gauge's arc.
             */
            get: function () {
                return this._getOption('geometry');
            },
            set: function (value) {
                this._setOption('geometry', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBarGaugeComponent.prototype, "label", {
            /**
             * Specifies the options of the labels that accompany gauge bars.
             */
            get: function () {
                return this._getOption('label');
            },
            set: function (value) {
                this._setOption('label', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBarGaugeComponent.prototype, "legend", {
            /**
             * Configures the legend.
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "loadingIndicator", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "margin", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "palette", {
            /**
             * Sets the palette to be used for colorizing bars in the gauge.
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "paletteExtensionMode", {
            /**
             * Specifies what to do with colors in the palette when their number is less than the number of bars in the gauge.
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "pathModified", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "redrawOnResize", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "relativeInnerRadius", {
            /**
             * Defines the radius of the bar that is closest to the center relatively to the radius of the topmost bar.
             */
            get: function () {
                return this._getOption('relativeInnerRadius');
            },
            set: function (value) {
                this._setOption('relativeInnerRadius', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBarGaugeComponent.prototype, "resolveLabelOverlapping", {
            /**
             * Specifies how the widget should behave when bar labels overlap: hide certain labels or leave them overlapped.
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "size", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "startValue", {
            /**
             * Specifies a start value for the gauge's invisible scale.
             */
            get: function () {
                return this._getOption('startValue');
            },
            set: function (value) {
                this._setOption('startValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBarGaugeComponent.prototype, "theme", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "title", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "tooltip", {
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
        Object.defineProperty(DxBarGaugeComponent.prototype, "values", {
            /**
             * Specifies the array of values to be indicated on a bar gauge.
             */
            get: function () {
                return this._getOption('values');
            },
            set: function (value) {
                this._setOption('values', value);
            },
            enumerable: true,
            configurable: true
        });
        DxBarGaugeComponent.prototype._createInstance = function (element, options) {
            return new DxBarGauge(element, options);
        };
        DxBarGaugeComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxBarGaugeComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('palette', changes);
            this.setupChanges('values', changes);
        };
        DxBarGaugeComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxBarGaugeComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('palette');
            this._idh.doCheck('values');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxBarGaugeComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxBarGaugeComponent.ctorParameters = function () { return [
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
        ], DxBarGaugeComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "backgroundColor", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "barSpacing", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "baseValue", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "endValue", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "geometry", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "legend", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "loadingIndicator", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "margin", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "palette", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "paletteExtensionMode", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "redrawOnResize", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "relativeInnerRadius", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "resolveLabelOverlapping", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "startValue", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "title", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], DxBarGaugeComponent.prototype, "values", null);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onTooltipHidden", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "onTooltipShown", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "animationChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "backgroundColorChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "barSpacingChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "baseValueChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "endValueChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "geometryChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "labelChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "legendChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "loadingIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "marginChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "paletteChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "paletteExtensionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "redrawOnResizeChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "relativeInnerRadiusChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "resolveLabelOverlappingChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "startValueChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "titleChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "tooltipChange", void 0);
        __decorate([
            core.Output()
        ], DxBarGaugeComponent.prototype, "valuesChange", void 0);
        DxBarGaugeComponent = __decorate([
            core.Component({
                selector: 'dx-bar-gauge',
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
        ], DxBarGaugeComponent);
        return DxBarGaugeComponent;
    }(core$1.DxComponent));
    var DxBarGaugeModule = /** @class */ (function () {
        function DxBarGaugeModule() {
        }
        DxBarGaugeModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoAnimationModule,
                    nested.DxoExportModule,
                    nested.DxoGeometryModule,
                    nested.DxoLabelModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoLegendModule,
                    nested.DxoBorderModule,
                    nested.DxoItemTextFormatModule,
                    nested.DxoMarginModule,
                    nested.DxoTitleModule,
                    nested.DxoSubtitleModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxoShadowModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxBarGaugeComponent
                ],
                exports: [
                    DxBarGaugeComponent,
                    nested.DxoAnimationModule,
                    nested.DxoExportModule,
                    nested.DxoGeometryModule,
                    nested.DxoLabelModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoLegendModule,
                    nested.DxoBorderModule,
                    nested.DxoItemTextFormatModule,
                    nested.DxoMarginModule,
                    nested.DxoTitleModule,
                    nested.DxoSubtitleModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxoShadowModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxBarGaugeModule);
        return DxBarGaugeModule;
    }());

    exports.DxBarGaugeComponent = DxBarGaugeComponent;
    exports.DxBarGaugeModule = DxBarGaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-bar-gauge.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/vector_map'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/vector-map', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/vector_map', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['vector-map'] = {}), global.ng.platformBrowser, global.ng.core, global.DxVectorMap, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxVectorMap, core$1, nested) { 'use strict';

    DxVectorMap = DxVectorMap && DxVectorMap.hasOwnProperty('default') ? DxVectorMap['default'] : DxVectorMap;

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
     * The VectorMap is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
     */
    var DxVectorMapComponent = /** @class */ (function (_super) {
        __extends(DxVectorMapComponent, _super);
        function DxVectorMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'centerChanged', emit: 'onCenterChanged' },
                { subscribe: 'click', emit: 'onClick' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'drawn', emit: 'onDrawn' },
                { subscribe: 'exported', emit: 'onExported' },
                { subscribe: 'exporting', emit: 'onExporting' },
                { subscribe: 'fileSaving', emit: 'onFileSaving' },
                { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
                { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
                { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
                { subscribe: 'zoomFactorChanged', emit: 'onZoomFactorChanged' },
                { emit: 'backgroundChange' },
                { emit: 'boundsChange' },
                { emit: 'centerChange' },
                { emit: 'controlBarChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'exportChange' },
                { emit: 'layersChange' },
                { emit: 'legendsChange' },
                { emit: 'loadingIndicatorChange' },
                { emit: 'maxZoomFactorChange' },
                { emit: 'panningEnabledChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'projectionChange' },
                { emit: 'redrawOnResizeChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'sizeChange' },
                { emit: 'themeChange' },
                { emit: 'titleChange' },
                { emit: 'tooltipChange' },
                { emit: 'touchEnabledChange' },
                { emit: 'wheelEnabledChange' },
                { emit: 'zoomFactorChange' },
                { emit: 'zoomingEnabledChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxVectorMapComponent.prototype, "background", {
            /**
             * Specifies the options for the map background.
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
        Object.defineProperty(DxVectorMapComponent.prototype, "bounds", {
            /**
             * Specifies the positioning of a map in geographical coordinates.
             */
            get: function () {
                return this._getOption('bounds');
            },
            set: function (value) {
                this._setOption('bounds', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "center", {
            /**
             * Specifies the geographical coordinates of the center for a map.
             */
            get: function () {
                return this._getOption('center');
            },
            set: function (value) {
                this._setOption('center', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "controlBar", {
            /**
             * Configures the control bar.
             */
            get: function () {
                return this._getOption('controlBar');
            },
            set: function (value) {
                this._setOption('controlBar', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "disabled", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "export", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "layers", {
            /**
             * Specifies options for VectorMap widget layers.
             */
            get: function () {
                return this._getOption('layers');
            },
            set: function (value) {
                this._setOption('layers', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "legends", {
            /**
             * Configures map legends.
             */
            get: function () {
                return this._getOption('legends');
            },
            set: function (value) {
                this._setOption('legends', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "loadingIndicator", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "maxZoomFactor", {
            /**
             * Specifies a map's maximum zoom factor.
             */
            get: function () {
                return this._getOption('maxZoomFactor');
            },
            set: function (value) {
                this._setOption('maxZoomFactor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "panningEnabled", {
            /**
             * Disables the panning capability.
             */
            get: function () {
                return this._getOption('panningEnabled');
            },
            set: function (value) {
                this._setOption('panningEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "pathModified", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "projection", {
            /**
             * Specifies the map projection.
             */
            get: function () {
                return this._getOption('projection');
            },
            set: function (value) {
                this._setOption('projection', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "redrawOnResize", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "size", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "theme", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "title", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "tooltip", {
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
        Object.defineProperty(DxVectorMapComponent.prototype, "touchEnabled", {
            /**
             * Specifies whether the map should respond to touch gestures.
             */
            get: function () {
                return this._getOption('touchEnabled');
            },
            set: function (value) {
                this._setOption('touchEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "wheelEnabled", {
            /**
             * Specifies whether or not the map should respond when a user rolls the mouse wheel.
             */
            get: function () {
                return this._getOption('wheelEnabled');
            },
            set: function (value) {
                this._setOption('wheelEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "zoomFactor", {
            /**
             * Specifies a number that is used to zoom a map initially.
             */
            get: function () {
                return this._getOption('zoomFactor');
            },
            set: function (value) {
                this._setOption('zoomFactor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "zoomingEnabled", {
            /**
             * Disables the zooming capability.
             */
            get: function () {
                return this._getOption('zoomingEnabled');
            },
            set: function (value) {
                this._setOption('zoomingEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "layersChildren", {
            get: function () {
                return this._getOption('layers');
            },
            set: function (value) {
                this.setChildren('layers', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxVectorMapComponent.prototype, "legendsChildren", {
            get: function () {
                return this._getOption('legends');
            },
            set: function (value) {
                this.setChildren('legends', value);
            },
            enumerable: true,
            configurable: true
        });
        DxVectorMapComponent.prototype._createInstance = function (element, options) {
            return new DxVectorMap(element, options);
        };
        DxVectorMapComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxVectorMapComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('bounds', changes);
            this.setupChanges('center', changes);
            this.setupChanges('layers', changes);
            this.setupChanges('legends', changes);
        };
        DxVectorMapComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxVectorMapComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('bounds');
            this._idh.doCheck('center');
            this._idh.doCheck('layers');
            this._idh.doCheck('legends');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxVectorMapComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxVectorMapComponent.ctorParameters = function () { return [
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
        ], DxVectorMapComponent.prototype, "background", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "bounds", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "center", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "controlBar", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "layers", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "legends", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "loadingIndicator", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "maxZoomFactor", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "panningEnabled", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "projection", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "redrawOnResize", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "title", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "touchEnabled", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "wheelEnabled", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "zoomFactor", null);
        __decorate([
            core.Input()
        ], DxVectorMapComponent.prototype, "zoomingEnabled", null);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onCenterChanged", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onClick", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onTooltipHidden", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onTooltipShown", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "onZoomFactorChanged", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "backgroundChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "boundsChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "centerChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "controlBarChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "layersChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "legendsChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "loadingIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "maxZoomFactorChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "panningEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "projectionChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "redrawOnResizeChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "titleChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "tooltipChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "touchEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "wheelEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "zoomFactorChange", void 0);
        __decorate([
            core.Output()
        ], DxVectorMapComponent.prototype, "zoomingEnabledChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiLayerComponent)
        ], DxVectorMapComponent.prototype, "layersChildren", null);
        __decorate([
            core.ContentChildren(nested.DxiLegendComponent)
        ], DxVectorMapComponent.prototype, "legendsChildren", null);
        DxVectorMapComponent = __decorate([
            core.Component({
                selector: 'dx-vector-map',
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
        ], DxVectorMapComponent);
        return DxVectorMapComponent;
    }(core$1.DxComponent));
    var DxVectorMapModule = /** @class */ (function () {
        function DxVectorMapModule() {
        }
        DxVectorMapModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoBackgroundModule,
                    nested.DxoControlBarModule,
                    nested.DxoExportModule,
                    nested.DxiLayerModule,
                    nested.DxoLabelModule,
                    nested.DxoFontModule,
                    nested.DxiLegendModule,
                    nested.DxoBorderModule,
                    nested.DxoMarginModule,
                    nested.DxoSourceModule,
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
                    DxVectorMapComponent
                ],
                exports: [
                    DxVectorMapComponent,
                    nested.DxoBackgroundModule,
                    nested.DxoControlBarModule,
                    nested.DxoExportModule,
                    nested.DxiLayerModule,
                    nested.DxoLabelModule,
                    nested.DxoFontModule,
                    nested.DxiLegendModule,
                    nested.DxoBorderModule,
                    nested.DxoMarginModule,
                    nested.DxoSourceModule,
                    nested.DxoTitleModule,
                    nested.DxoSubtitleModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxoShadowModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxVectorMapModule);
        return DxVectorMapModule;
    }());

    exports.DxVectorMapComponent = DxVectorMapComponent;
    exports.DxVectorMapModule = DxVectorMapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-vector-map.umd.js.map

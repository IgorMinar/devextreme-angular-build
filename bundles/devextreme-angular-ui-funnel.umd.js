(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/funnel'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/funnel', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/funnel', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.funnel = {}), global.ng.platformBrowser, global.ng.core, global.DxFunnel, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxFunnel, core$1, nested) { 'use strict';

    DxFunnel = DxFunnel && DxFunnel.hasOwnProperty('default') ? DxFunnel['default'] : DxFunnel;

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
     * The Funnel is a widget that visualizes a value at different stages. It helps assess value changes throughout these stages and identify potential issues. The Funnel widget conveys information using different interactive elements (tooltips, labels, legend) and enables you to create not only a funnel, but also a pyramid chart.
     */
    var DxFunnelComponent = /** @class */ (function (_super) {
        __extends(DxFunnelComponent, _super);
        function DxFunnelComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'drawn', emit: 'onDrawn' },
                { subscribe: 'exported', emit: 'onExported' },
                { subscribe: 'exporting', emit: 'onExporting' },
                { subscribe: 'fileSaving', emit: 'onFileSaving' },
                { subscribe: 'hoverChanged', emit: 'onHoverChanged' },
                { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'itemClick', emit: 'onItemClick' },
                { subscribe: 'legendClick', emit: 'onLegendClick' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
                { emit: 'adaptiveLayoutChange' },
                { emit: 'algorithmChange' },
                { emit: 'argumentFieldChange' },
                { emit: 'colorFieldChange' },
                { emit: 'dataSourceChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'exportChange' },
                { emit: 'hoverEnabledChange' },
                { emit: 'invertedChange' },
                { emit: 'itemChange' },
                { emit: 'labelChange' },
                { emit: 'legendChange' },
                { emit: 'loadingIndicatorChange' },
                { emit: 'marginChange' },
                { emit: 'neckHeightChange' },
                { emit: 'neckWidthChange' },
                { emit: 'paletteChange' },
                { emit: 'paletteExtensionModeChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'redrawOnResizeChange' },
                { emit: 'resolveLabelOverlappingChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'selectionModeChange' },
                { emit: 'sizeChange' },
                { emit: 'sortDataChange' },
                { emit: 'themeChange' },
                { emit: 'titleChange' },
                { emit: 'tooltipChange' },
                { emit: 'valueFieldChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxFunnelComponent.prototype, "adaptiveLayout", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "algorithm", {
            /**
             * Specifies the algorithm for building the funnel.
             */
            get: function () {
                return this._getOption('algorithm');
            },
            set: function (value) {
                this._setOption('algorithm', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFunnelComponent.prototype, "argumentField", {
            /**
             * Specifies which data source field provides arguments for funnel items. The argument identifies a funnel item and represents it on the legend.
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
        Object.defineProperty(DxFunnelComponent.prototype, "colorField", {
            /**
             * Specifies which data source field provides colors for funnel items. If this field is absent, the palette provides the colors.
             */
            get: function () {
                return this._getOption('colorField');
            },
            set: function (value) {
                this._setOption('colorField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFunnelComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "disabled", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "export", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "hoverEnabled", {
            /**
             * Specifies whether funnel items change their style when a user pauses on them.
             */
            get: function () {
                return this._getOption('hoverEnabled');
            },
            set: function (value) {
                this._setOption('hoverEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFunnelComponent.prototype, "inverted", {
            /**
             * Turns the funnel upside down.
             */
            get: function () {
                return this._getOption('inverted');
            },
            set: function (value) {
                this._setOption('inverted', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFunnelComponent.prototype, "item", {
            /**
             * Configures funnel items' appearance.
             */
            get: function () {
                return this._getOption('item');
            },
            set: function (value) {
                this._setOption('item', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFunnelComponent.prototype, "label", {
            /**
             * Configures funnel item labels.
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
        Object.defineProperty(DxFunnelComponent.prototype, "legend", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "loadingIndicator", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "margin", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "neckHeight", {
            /**
             * Specifies the ratio between the height of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
             */
            get: function () {
                return this._getOption('neckHeight');
            },
            set: function (value) {
                this._setOption('neckHeight', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFunnelComponent.prototype, "neckWidth", {
            /**
             * Specifies the ratio between the width of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
             */
            get: function () {
                return this._getOption('neckWidth');
            },
            set: function (value) {
                this._setOption('neckWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFunnelComponent.prototype, "palette", {
            /**
             * Sets the palette to be used to colorize funnel items.
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
        Object.defineProperty(DxFunnelComponent.prototype, "paletteExtensionMode", {
            /**
             * Specifies what to do with colors in the palette when their number is less than the number of funnel items.
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
        Object.defineProperty(DxFunnelComponent.prototype, "pathModified", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "redrawOnResize", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "resolveLabelOverlapping", {
            /**
             * Specifies how item labels should behave when they overlap.
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
        Object.defineProperty(DxFunnelComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "selectionMode", {
            /**
             * Specifies whether a single or multiple funnel items can be in the selected state at a time. Assigning "none" disables the selection feature.
             */
            get: function () {
                return this._getOption('selectionMode');
            },
            set: function (value) {
                this._setOption('selectionMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFunnelComponent.prototype, "size", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "sortData", {
            /**
             * Specifies whether to sort funnel items.
             */
            get: function () {
                return this._getOption('sortData');
            },
            set: function (value) {
                this._setOption('sortData', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFunnelComponent.prototype, "theme", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "title", {
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
        Object.defineProperty(DxFunnelComponent.prototype, "tooltip", {
            /**
             * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
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
        Object.defineProperty(DxFunnelComponent.prototype, "valueField", {
            /**
             * Specifies which data source field provides values for funnel items. The value defines a funnel item's area.
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
        DxFunnelComponent.prototype._createInstance = function (element, options) {
            return new DxFunnel(element, options);
        };
        DxFunnelComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxFunnelComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('palette', changes);
        };
        DxFunnelComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxFunnelComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._idh.doCheck('palette');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxFunnelComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxFunnelComponent.ctorParameters = function () { return [
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
        ], DxFunnelComponent.prototype, "adaptiveLayout", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "algorithm", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "argumentField", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "colorField", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "hoverEnabled", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "inverted", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "item", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "legend", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "loadingIndicator", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "margin", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "neckHeight", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "neckWidth", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "palette", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "paletteExtensionMode", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "redrawOnResize", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "resolveLabelOverlapping", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "sortData", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "title", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], DxFunnelComponent.prototype, "valueField", null);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onHoverChanged", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onLegendClick", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "onSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "adaptiveLayoutChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "algorithmChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "argumentFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "colorFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "hoverEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "invertedChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "itemChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "labelChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "legendChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "loadingIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "marginChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "neckHeightChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "neckWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "paletteChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "paletteExtensionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "redrawOnResizeChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "resolveLabelOverlappingChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "selectionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "sortDataChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "titleChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "tooltipChange", void 0);
        __decorate([
            core.Output()
        ], DxFunnelComponent.prototype, "valueFieldChange", void 0);
        DxFunnelComponent = __decorate([
            core.Component({
                selector: 'dx-funnel',
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
        ], DxFunnelComponent);
        return DxFunnelComponent;
    }(core$1.DxComponent));
    var DxFunnelModule = /** @class */ (function () {
        function DxFunnelModule() {
        }
        DxFunnelModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoAdaptiveLayoutModule,
                    nested.DxoExportModule,
                    nested.DxoItemModule,
                    nested.DxoBorderModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
                    nested.DxoSelectionStyleModule,
                    nested.DxoLabelModule,
                    nested.DxoConnectorModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoLegendModule,
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
                    DxFunnelComponent
                ],
                exports: [
                    DxFunnelComponent,
                    nested.DxoAdaptiveLayoutModule,
                    nested.DxoExportModule,
                    nested.DxoItemModule,
                    nested.DxoBorderModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
                    nested.DxoSelectionStyleModule,
                    nested.DxoLabelModule,
                    nested.DxoConnectorModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoLegendModule,
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
        ], DxFunnelModule);
        return DxFunnelModule;
    }());

    exports.DxFunnelComponent = DxFunnelComponent;
    exports.DxFunnelModule = DxFunnelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-funnel.umd.js.map

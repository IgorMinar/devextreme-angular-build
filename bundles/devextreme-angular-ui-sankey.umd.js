(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/sankey'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/sankey', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/sankey', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.sankey = {}), global.ng.platformBrowser, global.ng.core, global.DxSankey, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxSankey, core$1, nested) { 'use strict';

    DxSankey = DxSankey && DxSankey.hasOwnProperty('default') ? DxSankey['default'] : DxSankey;

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
     * The Sankey is a widget that visualizes the flow magnitude between value sets. The values being connected are called nodes; the connections - links. The higher the flow magnitude, the wider the link is.
     */
    var DxSankeyComponent = /** @class */ (function (_super) {
        __extends(DxSankeyComponent, _super);
        function DxSankeyComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
                { subscribe: 'linkClick', emit: 'onLinkClick' },
                { subscribe: 'linkHoverChanged', emit: 'onLinkHoverChanged' },
                { subscribe: 'nodeClick', emit: 'onNodeClick' },
                { subscribe: 'nodeHoverChanged', emit: 'onNodeHoverChanged' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { emit: 'adaptiveLayoutChange' },
                { emit: 'alignmentChange' },
                { emit: 'dataSourceChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'exportChange' },
                { emit: 'hoverEnabledChange' },
                { emit: 'labelChange' },
                { emit: 'linkChange' },
                { emit: 'loadingIndicatorChange' },
                { emit: 'marginChange' },
                { emit: 'nodeChange' },
                { emit: 'paletteChange' },
                { emit: 'paletteExtensionModeChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'redrawOnResizeChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'sizeChange' },
                { emit: 'sortDataChange' },
                { emit: 'sourceFieldChange' },
                { emit: 'targetFieldChange' },
                { emit: 'themeChange' },
                { emit: 'titleChange' },
                { emit: 'tooltipChange' },
                { emit: 'weightFieldChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxSankeyComponent.prototype, "adaptiveLayout", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "alignment", {
            /**
             * Aligns node columns vertically.
             */
            get: function () {
                return this._getOption('alignment');
            },
            set: function (value) {
                this._setOption('alignment', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSankeyComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "disabled", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "export", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "hoverEnabled", {
            /**
             * Specifies whether nodes and links change their style when they are hovered over or pressed.
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
        Object.defineProperty(DxSankeyComponent.prototype, "label", {
            /**
             * Configures sankey nodes' labels.
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
        Object.defineProperty(DxSankeyComponent.prototype, "link", {
            /**
             * Configures sankey links' appearance.
             */
            get: function () {
                return this._getOption('link');
            },
            set: function (value) {
                this._setOption('link', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSankeyComponent.prototype, "loadingIndicator", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "margin", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "node", {
            /**
             * Configures sankey nodes' appearance.
             */
            get: function () {
                return this._getOption('node');
            },
            set: function (value) {
                this._setOption('node', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSankeyComponent.prototype, "palette", {
            /**
             * Sets the palette to be used to colorize sankey nodes.
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
        Object.defineProperty(DxSankeyComponent.prototype, "paletteExtensionMode", {
            /**
             * Specifies how to extend the palette when it contains less colors than the number of sankey nodes.
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
        Object.defineProperty(DxSankeyComponent.prototype, "pathModified", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "redrawOnResize", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "size", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "sortData", {
            /**
             * Specifies nodes' sorting order in their columns.
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
        Object.defineProperty(DxSankeyComponent.prototype, "sourceField", {
            /**
             * Specifies which data source field provides links' source nodes.
             */
            get: function () {
                return this._getOption('sourceField');
            },
            set: function (value) {
                this._setOption('sourceField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSankeyComponent.prototype, "targetField", {
            /**
             * Specifies which data source field provides links' target nodes.
             */
            get: function () {
                return this._getOption('targetField');
            },
            set: function (value) {
                this._setOption('targetField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxSankeyComponent.prototype, "theme", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "title", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "tooltip", {
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
        Object.defineProperty(DxSankeyComponent.prototype, "weightField", {
            /**
             * Specifies which data source field provides links' weights.
             */
            get: function () {
                return this._getOption('weightField');
            },
            set: function (value) {
                this._setOption('weightField', value);
            },
            enumerable: true,
            configurable: true
        });
        DxSankeyComponent.prototype._createInstance = function (element, options) {
            return new DxSankey(element, options);
        };
        DxSankeyComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxSankeyComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('alignment', changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('palette', changes);
        };
        DxSankeyComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxSankeyComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('alignment');
            this._idh.doCheck('dataSource');
            this._idh.doCheck('palette');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxSankeyComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxSankeyComponent.ctorParameters = function () { return [
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
        ], DxSankeyComponent.prototype, "adaptiveLayout", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "alignment", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "hoverEnabled", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "link", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "loadingIndicator", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "margin", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "node", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "palette", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "paletteExtensionMode", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "redrawOnResize", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "sortData", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "sourceField", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "targetField", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "title", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], DxSankeyComponent.prototype, "weightField", null);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onLinkClick", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onLinkHoverChanged", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onNodeClick", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onNodeHoverChanged", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "adaptiveLayoutChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "alignmentChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "hoverEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "labelChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "linkChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "loadingIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "marginChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "nodeChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "paletteChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "paletteExtensionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "redrawOnResizeChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "sortDataChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "sourceFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "targetFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "titleChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "tooltipChange", void 0);
        __decorate([
            core.Output()
        ], DxSankeyComponent.prototype, "weightFieldChange", void 0);
        DxSankeyComponent = __decorate([
            core.Component({
                selector: 'dx-sankey',
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
        ], DxSankeyComponent);
        return DxSankeyComponent;
    }(core$1.DxComponent));
    var DxSankeyModule = /** @class */ (function () {
        function DxSankeyModule() {
        }
        DxSankeyModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoAdaptiveLayoutModule,
                    nested.DxoExportModule,
                    nested.DxoLabelModule,
                    nested.DxoBorderModule,
                    nested.DxoFontModule,
                    nested.DxoShadowModule,
                    nested.DxoLinkModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxoMarginModule,
                    nested.DxoNodeModule,
                    nested.DxoSizeModule,
                    nested.DxoTitleModule,
                    nested.DxoSubtitleModule,
                    nested.DxoTooltipModule,
                    nested.DxoFormatModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxSankeyComponent
                ],
                exports: [
                    DxSankeyComponent,
                    nested.DxoAdaptiveLayoutModule,
                    nested.DxoExportModule,
                    nested.DxoLabelModule,
                    nested.DxoBorderModule,
                    nested.DxoFontModule,
                    nested.DxoShadowModule,
                    nested.DxoLinkModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoHatchingModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxoMarginModule,
                    nested.DxoNodeModule,
                    nested.DxoSizeModule,
                    nested.DxoTitleModule,
                    nested.DxoSubtitleModule,
                    nested.DxoTooltipModule,
                    nested.DxoFormatModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxSankeyModule);
        return DxSankeyModule;
    }());

    exports.DxSankeyComponent = DxSankeyComponent;
    exports.DxSankeyModule = DxSankeyModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-sankey.umd.js.map

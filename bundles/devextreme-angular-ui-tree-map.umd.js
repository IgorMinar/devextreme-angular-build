(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/tree_map'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/tree-map', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/tree_map', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['tree-map'] = {}), global.ng.platformBrowser, global.ng.core, global.DxTreeMap, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxTreeMap, core$1, nested) { 'use strict';

    DxTreeMap = DxTreeMap && DxTreeMap.hasOwnProperty('default') ? DxTreeMap['default'] : DxTreeMap;

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
     * The TreeMap is a widget that displays hierarchical data by using nested rectangles.
     */
    var DxTreeMapComponent = /** @class */ (function (_super) {
        __extends(DxTreeMapComponent, _super);
        function DxTreeMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'click', emit: 'onClick' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'drawn', emit: 'onDrawn' },
                { subscribe: 'drill', emit: 'onDrill' },
                { subscribe: 'exported', emit: 'onExported' },
                { subscribe: 'exporting', emit: 'onExporting' },
                { subscribe: 'fileSaving', emit: 'onFileSaving' },
                { subscribe: 'hoverChanged', emit: 'onHoverChanged' },
                { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'nodesInitialized', emit: 'onNodesInitialized' },
                { subscribe: 'nodesRendering', emit: 'onNodesRendering' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
                { emit: 'childrenFieldChange' },
                { emit: 'colorFieldChange' },
                { emit: 'colorizerChange' },
                { emit: 'dataSourceChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'exportChange' },
                { emit: 'groupChange' },
                { emit: 'hoverEnabledChange' },
                { emit: 'idFieldChange' },
                { emit: 'interactWithGroupChange' },
                { emit: 'labelFieldChange' },
                { emit: 'layoutAlgorithmChange' },
                { emit: 'layoutDirectionChange' },
                { emit: 'loadingIndicatorChange' },
                { emit: 'maxDepthChange' },
                { emit: 'parentFieldChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'redrawOnResizeChange' },
                { emit: 'resolveLabelOverflowChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'selectionModeChange' },
                { emit: 'sizeChange' },
                { emit: 'themeChange' },
                { emit: 'tileChange' },
                { emit: 'titleChange' },
                { emit: 'tooltipChange' },
                { emit: 'valueFieldChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxTreeMapComponent.prototype, "childrenField", {
            /**
             * Specifies the name of the data source field that provides nested items for a group. Applies to hierarchical data sources only.
             */
            get: function () {
                return this._getOption('childrenField');
            },
            set: function (value) {
                this._setOption('childrenField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "colorField", {
            /**
             * Specifies the name of the data source field that provides colors for tiles.
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
        Object.defineProperty(DxTreeMapComponent.prototype, "colorizer", {
            /**
             * Manages the color settings.
             */
            get: function () {
                return this._getOption('colorizer');
            },
            set: function (value) {
                this._setOption('colorizer', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "disabled", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "export", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "group", {
            /**
             * Configures groups.
             */
            get: function () {
                return this._getOption('group');
            },
            set: function (value) {
                this._setOption('group', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "hoverEnabled", {
            /**
             * Specifies whether tiles and groups change their style when a user pauses on them.
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
        Object.defineProperty(DxTreeMapComponent.prototype, "idField", {
            /**
             * Specifies the name of the data source field that provides IDs for items. Applies to plain data sources only.
             */
            get: function () {
                return this._getOption('idField');
            },
            set: function (value) {
                this._setOption('idField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "interactWithGroup", {
            /**
             * Specifies whether the user will interact with a single tile or its group.
             */
            get: function () {
                return this._getOption('interactWithGroup');
            },
            set: function (value) {
                this._setOption('interactWithGroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "labelField", {
            /**
             * Specifies the name of the data source field that provides texts for tile and group labels.
             */
            get: function () {
                return this._getOption('labelField');
            },
            set: function (value) {
                this._setOption('labelField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "layoutAlgorithm", {
            /**
             * Specifies the layout algorithm.
             */
            get: function () {
                return this._getOption('layoutAlgorithm');
            },
            set: function (value) {
                this._setOption('layoutAlgorithm', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "layoutDirection", {
            /**
             * Specifies the direction in which the items will be laid out.
             */
            get: function () {
                return this._getOption('layoutDirection');
            },
            set: function (value) {
                this._setOption('layoutDirection', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "loadingIndicator", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "maxDepth", {
            /**
             * Specifies how many hierarchical levels must be visualized.
             */
            get: function () {
                return this._getOption('maxDepth');
            },
            set: function (value) {
                this._setOption('maxDepth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "parentField", {
            /**
             * Specifies the name of the data source field that provides parent IDs for items. Applies to plain data sources only.
             */
            get: function () {
                return this._getOption('parentField');
            },
            set: function (value) {
                this._setOption('parentField', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "pathModified", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "redrawOnResize", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "resolveLabelOverflow", {
            /**
             * Use the tile.label.textOverflow option instead.
             */
            get: function () {
                return this._getOption('resolveLabelOverflow');
            },
            set: function (value) {
                this._setOption('resolveLabelOverflow', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "selectionMode", {
            /**
             * Specifies whether a single or multiple nodes can be in the selected state simultaneously.
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
        Object.defineProperty(DxTreeMapComponent.prototype, "size", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "theme", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "tile", {
            /**
             * Configures tiles.
             */
            get: function () {
                return this._getOption('tile');
            },
            set: function (value) {
                this._setOption('tile', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTreeMapComponent.prototype, "title", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "tooltip", {
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
        Object.defineProperty(DxTreeMapComponent.prototype, "valueField", {
            /**
             * Specifies the name of the data source field that provides values for tiles.
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
        DxTreeMapComponent.prototype._createInstance = function (element, options) {
            return new DxTreeMap(element, options);
        };
        DxTreeMapComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxTreeMapComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
        };
        DxTreeMapComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxTreeMapComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxTreeMapComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxTreeMapComponent.ctorParameters = function () { return [
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
        ], DxTreeMapComponent.prototype, "childrenField", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "colorField", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "colorizer", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "group", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "hoverEnabled", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "idField", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "interactWithGroup", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "labelField", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "layoutAlgorithm", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "layoutDirection", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "loadingIndicator", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "maxDepth", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "parentField", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "redrawOnResize", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "resolveLabelOverflow", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "tile", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "title", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], DxTreeMapComponent.prototype, "valueField", null);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onClick", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onDrill", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onHoverChanged", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onNodesInitialized", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onNodesRendering", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "onSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "childrenFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "colorFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "colorizerChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "groupChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "hoverEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "idFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "interactWithGroupChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "labelFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "layoutAlgorithmChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "layoutDirectionChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "loadingIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "maxDepthChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "parentFieldChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "redrawOnResizeChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "resolveLabelOverflowChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "selectionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "tileChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "titleChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "tooltipChange", void 0);
        __decorate([
            core.Output()
        ], DxTreeMapComponent.prototype, "valueFieldChange", void 0);
        DxTreeMapComponent = __decorate([
            core.Component({
                selector: 'dx-tree-map',
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
        ], DxTreeMapComponent);
        return DxTreeMapComponent;
    }(core$1.DxComponent));
    var DxTreeMapModule = /** @class */ (function () {
        function DxTreeMapModule() {
        }
        DxTreeMapModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoColorizerModule,
                    nested.DxoExportModule,
                    nested.DxoGroupModule,
                    nested.DxoBorderModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoLabelModule,
                    nested.DxoFontModule,
                    nested.DxoSelectionStyleModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxoSizeModule,
                    nested.DxoTileModule,
                    nested.DxoTitleModule,
                    nested.DxoMarginModule,
                    nested.DxoSubtitleModule,
                    nested.DxoTooltipModule,
                    nested.DxoFormatModule,
                    nested.DxoShadowModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxTreeMapComponent
                ],
                exports: [
                    DxTreeMapComponent,
                    nested.DxoColorizerModule,
                    nested.DxoExportModule,
                    nested.DxoGroupModule,
                    nested.DxoBorderModule,
                    nested.DxoHoverStyleModule,
                    nested.DxoLabelModule,
                    nested.DxoFontModule,
                    nested.DxoSelectionStyleModule,
                    nested.DxoLoadingIndicatorModule,
                    nested.DxoSizeModule,
                    nested.DxoTileModule,
                    nested.DxoTitleModule,
                    nested.DxoMarginModule,
                    nested.DxoSubtitleModule,
                    nested.DxoTooltipModule,
                    nested.DxoFormatModule,
                    nested.DxoShadowModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxTreeMapModule);
        return DxTreeMapModule;
    }());

    exports.DxTreeMapComponent = DxTreeMapComponent;
    exports.DxTreeMapModule = DxTreeMapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-tree-map.umd.js.map

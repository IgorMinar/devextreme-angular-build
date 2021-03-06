(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/tile_view'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/tile-view', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/tile_view', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['tile-view'] = {}), global.ng.platformBrowser, global.ng.core, global.DxTileView, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxTileView, core$1, nested) { 'use strict';

    DxTileView = DxTileView && DxTileView.hasOwnProperty('default') ? DxTileView['default'] : DxTileView;

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
     * The TileView widget contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.
     */
    var DxTileViewComponent = /** @class */ (function (_super) {
        __extends(DxTileViewComponent, _super);
        function DxTileViewComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'itemClick', emit: 'onItemClick' },
                { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
                { subscribe: 'itemHold', emit: 'onItemHold' },
                { subscribe: 'itemRendered', emit: 'onItemRendered' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { emit: 'accessKeyChange' },
                { emit: 'activeStateEnabledChange' },
                { emit: 'baseItemHeightChange' },
                { emit: 'baseItemWidthChange' },
                { emit: 'dataSourceChange' },
                { emit: 'directionChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'heightChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'itemHoldTimeoutChange' },
                { emit: 'itemMarginChange' },
                { emit: 'itemsChange' },
                { emit: 'itemTemplateChange' },
                { emit: 'noDataTextChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'showScrollbarChange' },
                { emit: 'tabIndexChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxTileViewComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "activeStateEnabled", {
            /**
             * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
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
        Object.defineProperty(DxTileViewComponent.prototype, "baseItemHeight", {
            /**
             * Specifies the height of the base tile view item.
             */
            get: function () {
                return this._getOption('baseItemHeight');
            },
            set: function (value) {
                this._setOption('baseItemHeight', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTileViewComponent.prototype, "baseItemWidth", {
            /**
             * Specifies the width of the base tile view item.
             */
            get: function () {
                return this._getOption('baseItemWidth');
            },
            set: function (value) {
                this._setOption('baseItemWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTileViewComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "direction", {
            /**
             * Specifies whether tiles are placed horizontally or vertically.
             */
            get: function () {
                return this._getOption('direction');
            },
            set: function (value) {
                this._setOption('direction', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTileViewComponent.prototype, "disabled", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "height", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "hint", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "hoverStateEnabled", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "itemHoldTimeout", {
            /**
             * The time period in milliseconds before the onItemHold event is raised.
             */
            get: function () {
                return this._getOption('itemHoldTimeout');
            },
            set: function (value) {
                this._setOption('itemHoldTimeout', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTileViewComponent.prototype, "itemMargin", {
            /**
             * Specifies the distance in pixels between adjacent tiles.
             */
            get: function () {
                return this._getOption('itemMargin');
            },
            set: function (value) {
                this._setOption('itemMargin', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTileViewComponent.prototype, "items", {
            /**
             * An array of items displayed by the widget.
             */
            get: function () {
                return this._getOption('items');
            },
            set: function (value) {
                this._setOption('items', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTileViewComponent.prototype, "itemTemplate", {
            /**
             * Specifies a custom template for items.
             */
            get: function () {
                return this._getOption('itemTemplate');
            },
            set: function (value) {
                this._setOption('itemTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTileViewComponent.prototype, "noDataText", {
            /**
             * The text or HTML markup displayed by the widget if the item collection is empty.
             */
            get: function () {
                return this._getOption('noDataText');
            },
            set: function (value) {
                this._setOption('noDataText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTileViewComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "showScrollbar", {
            /**
             * A Boolean value specifying whether or not to display a scrollbar.
             */
            get: function () {
                return this._getOption('showScrollbar');
            },
            set: function (value) {
                this._setOption('showScrollbar', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTileViewComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "visible", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "width", {
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
        Object.defineProperty(DxTileViewComponent.prototype, "itemsChildren", {
            get: function () {
                return this._getOption('items');
            },
            set: function (value) {
                this.setChildren('items', value);
            },
            enumerable: true,
            configurable: true
        });
        DxTileViewComponent.prototype._createInstance = function (element, options) {
            return new DxTileView(element, options);
        };
        DxTileViewComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxTileViewComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('items', changes);
        };
        DxTileViewComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxTileViewComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._idh.doCheck('items');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxTileViewComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxTileViewComponent.ctorParameters = function () { return [
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
        ], DxTileViewComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "baseItemHeight", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "baseItemWidth", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "direction", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "itemHoldTimeout", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "itemMargin", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "noDataText", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "showScrollbar", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxTileViewComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "onItemContextMenu", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "onItemHold", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "onItemRendered", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "baseItemHeightChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "baseItemWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "directionChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "itemHoldTimeoutChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "itemMarginChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "itemsChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "itemTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "noDataTextChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "showScrollbarChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxTileViewComponent.prototype, "widthChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiItemComponent)
        ], DxTileViewComponent.prototype, "itemsChildren", null);
        DxTileViewComponent = __decorate([
            core.Component({
                selector: 'dx-tile-view',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxTileViewComponent);
        return DxTileViewComponent;
    }(core$1.DxComponent));
    var DxTileViewModule = /** @class */ (function () {
        function DxTileViewModule() {
        }
        DxTileViewModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxiItemModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxTileViewComponent
                ],
                exports: [
                    DxTileViewComponent,
                    nested.DxiItemModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxTileViewModule);
        return DxTileViewModule;
    }());

    exports.DxTileViewComponent = DxTileViewComponent;
    exports.DxTileViewModule = DxTileViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-tile-view.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/menu'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/menu', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/menu', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.menu = {}), global.ng.platformBrowser, global.ng.core, global.DxMenu, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxMenu, core$1, nested) { 'use strict';

    DxMenu = DxMenu && DxMenu.hasOwnProperty('default') ? DxMenu['default'] : DxMenu;

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
     * The Menu widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
     */
    var DxMenuComponent = /** @class */ (function (_super) {
        __extends(DxMenuComponent, _super);
        function DxMenuComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'itemClick', emit: 'onItemClick' },
                { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
                { subscribe: 'itemRendered', emit: 'onItemRendered' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
                { subscribe: 'submenuHidden', emit: 'onSubmenuHidden' },
                { subscribe: 'submenuHiding', emit: 'onSubmenuHiding' },
                { subscribe: 'submenuShowing', emit: 'onSubmenuShowing' },
                { subscribe: 'submenuShown', emit: 'onSubmenuShown' },
                { emit: 'accessKeyChange' },
                { emit: 'activeStateEnabledChange' },
                { emit: 'adaptivityEnabledChange' },
                { emit: 'animationChange' },
                { emit: 'cssClassChange' },
                { emit: 'dataSourceChange' },
                { emit: 'disabledChange' },
                { emit: 'disabledExprChange' },
                { emit: 'displayExprChange' },
                { emit: 'elementAttrChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'heightChange' },
                { emit: 'hideSubmenuOnMouseLeaveChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'itemsChange' },
                { emit: 'itemsExprChange' },
                { emit: 'itemTemplateChange' },
                { emit: 'orientationChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'selectByClickChange' },
                { emit: 'selectedExprChange' },
                { emit: 'selectedItemChange' },
                { emit: 'selectionModeChange' },
                { emit: 'showFirstSubmenuModeChange' },
                { emit: 'showSubmenuModeChange' },
                { emit: 'submenuDirectionChange' },
                { emit: 'tabIndexChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxMenuComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxMenuComponent.prototype, "activeStateEnabled", {
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
        Object.defineProperty(DxMenuComponent.prototype, "adaptivityEnabled", {
            /**
             * Specifies whether adaptive widget rendering is enabled on small screens. Applies only if the orientation is "horizontal".
             */
            get: function () {
                return this._getOption('adaptivityEnabled');
            },
            set: function (value) {
                this._setOption('adaptivityEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "animation", {
            /**
             * Configures widget visibility animations. This object contains two fields: show and hide.
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
        Object.defineProperty(DxMenuComponent.prototype, "cssClass", {
            /**
             * Specifies the name of the CSS class to be applied to the root menu level and all submenus.
             */
            get: function () {
                return this._getOption('cssClass');
            },
            set: function (value) {
                this._setOption('cssClass', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxMenuComponent.prototype, "disabled", {
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
        Object.defineProperty(DxMenuComponent.prototype, "disabledExpr", {
            /**
             * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is disabled.
             */
            get: function () {
                return this._getOption('disabledExpr');
            },
            set: function (value) {
                this._setOption('disabledExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "displayExpr", {
            /**
             * Specifies the data field whose values should be displayed.
             */
            get: function () {
                return this._getOption('displayExpr');
            },
            set: function (value) {
                this._setOption('displayExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxMenuComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxMenuComponent.prototype, "height", {
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
        Object.defineProperty(DxMenuComponent.prototype, "hideSubmenuOnMouseLeave", {
            /**
             * Specifies whether or not the submenu is hidden when the mouse pointer leaves it.
             */
            get: function () {
                return this._getOption('hideSubmenuOnMouseLeave');
            },
            set: function (value) {
                this._setOption('hideSubmenuOnMouseLeave', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "hint", {
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
        Object.defineProperty(DxMenuComponent.prototype, "hoverStateEnabled", {
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
        Object.defineProperty(DxMenuComponent.prototype, "items", {
            /**
             * Holds an array of menu items.
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
        Object.defineProperty(DxMenuComponent.prototype, "itemsExpr", {
            /**
             * Specifies which data field contains nested items.
             */
            get: function () {
                return this._getOption('itemsExpr');
            },
            set: function (value) {
                this._setOption('itemsExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "itemTemplate", {
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
        Object.defineProperty(DxMenuComponent.prototype, "orientation", {
            /**
             * Specifies whether the menu has horizontal or vertical orientation.
             */
            get: function () {
                return this._getOption('orientation');
            },
            set: function (value) {
                this._setOption('orientation', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxMenuComponent.prototype, "selectByClick", {
            /**
             * Specifies whether or not an item becomes selected if a user clicks it.
             */
            get: function () {
                return this._getOption('selectByClick');
            },
            set: function (value) {
                this._setOption('selectByClick', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "selectedExpr", {
            /**
             * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
             */
            get: function () {
                return this._getOption('selectedExpr');
            },
            set: function (value) {
                this._setOption('selectedExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "selectedItem", {
            /**
             * The selected item object.
             */
            get: function () {
                return this._getOption('selectedItem');
            },
            set: function (value) {
                this._setOption('selectedItem', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "selectionMode", {
            /**
             * Specifies the selection mode supported by the menu.
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
        Object.defineProperty(DxMenuComponent.prototype, "showFirstSubmenuMode", {
            /**
             * Specifies options for showing and hiding the first level submenu.
             */
            get: function () {
                return this._getOption('showFirstSubmenuMode');
            },
            set: function (value) {
                this._setOption('showFirstSubmenuMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "showSubmenuMode", {
            /**
             * Specifies options of submenu showing and hiding.
             */
            get: function () {
                return this._getOption('showSubmenuMode');
            },
            set: function (value) {
                this._setOption('showSubmenuMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "submenuDirection", {
            /**
             * Specifies the direction at which the submenus are displayed.
             */
            get: function () {
                return this._getOption('submenuDirection');
            },
            set: function (value) {
                this._setOption('submenuDirection', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxMenuComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxMenuComponent.prototype, "visible", {
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
        Object.defineProperty(DxMenuComponent.prototype, "width", {
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
        Object.defineProperty(DxMenuComponent.prototype, "itemsChildren", {
            get: function () {
                return this._getOption('items');
            },
            set: function (value) {
                this.setChildren('items', value);
            },
            enumerable: true,
            configurable: true
        });
        DxMenuComponent.prototype._createInstance = function (element, options) {
            return new DxMenu(element, options);
        };
        DxMenuComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxMenuComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('items', changes);
        };
        DxMenuComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxMenuComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._idh.doCheck('items');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxMenuComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxMenuComponent.ctorParameters = function () { return [
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
        ], DxMenuComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "adaptivityEnabled", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "cssClass", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "disabledExpr", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "displayExpr", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "hideSubmenuOnMouseLeave", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "itemsExpr", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "orientation", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "selectByClick", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "selectedExpr", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "selectedItem", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "showFirstSubmenuMode", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "showSubmenuMode", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "submenuDirection", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxMenuComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onItemContextMenu", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onItemRendered", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onSubmenuHidden", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onSubmenuHiding", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onSubmenuShowing", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "onSubmenuShown", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "adaptivityEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "animationChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "cssClassChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "disabledExprChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "displayExprChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "hideSubmenuOnMouseLeaveChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "itemsChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "itemsExprChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "itemTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "orientationChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "selectByClickChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "selectedExprChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "selectedItemChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "selectionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "showFirstSubmenuModeChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "showSubmenuModeChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "submenuDirectionChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxMenuComponent.prototype, "widthChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiItemComponent)
        ], DxMenuComponent.prototype, "itemsChildren", null);
        DxMenuComponent = __decorate([
            core.Component({
                selector: 'dx-menu',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxMenuComponent);
        return DxMenuComponent;
    }(core$1.DxComponent));
    var DxMenuModule = /** @class */ (function () {
        function DxMenuModule() {
        }
        DxMenuModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoAnimationModule,
                    nested.DxoHideModule,
                    nested.DxoShowModule,
                    nested.DxiItemModule,
                    nested.DxoShowFirstSubmenuModeModule,
                    nested.DxoDelayModule,
                    nested.DxoShowSubmenuModeModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxMenuComponent
                ],
                exports: [
                    DxMenuComponent,
                    nested.DxoAnimationModule,
                    nested.DxoHideModule,
                    nested.DxoShowModule,
                    nested.DxiItemModule,
                    nested.DxoShowFirstSubmenuModeModule,
                    nested.DxoDelayModule,
                    nested.DxoShowSubmenuModeModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxMenuModule);
        return DxMenuModule;
    }());

    exports.DxMenuComponent = DxMenuComponent;
    exports.DxMenuModule = DxMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-menu.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/list'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/list', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/list', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.list = {}), global.ng.platformBrowser, global.ng.core, global.DxList, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxList, core$1, nested) { 'use strict';

    DxList = DxList && DxList.hasOwnProperty('default') ? DxList['default'] : DxList;

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
     * The List is a widget that represents a collection of items in a scrollable list.
     */
    var DxListComponent = /** @class */ (function (_super) {
        __extends(DxListComponent, _super);
        function DxListComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'groupRendered', emit: 'onGroupRendered' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'itemClick', emit: 'onItemClick' },
                { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
                { subscribe: 'itemDeleted', emit: 'onItemDeleted' },
                { subscribe: 'itemDeleting', emit: 'onItemDeleting' },
                { subscribe: 'itemHold', emit: 'onItemHold' },
                { subscribe: 'itemRendered', emit: 'onItemRendered' },
                { subscribe: 'itemReordered', emit: 'onItemReordered' },
                { subscribe: 'itemSwipe', emit: 'onItemSwipe' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'pageLoading', emit: 'onPageLoading' },
                { subscribe: 'pullRefresh', emit: 'onPullRefresh' },
                { subscribe: 'scroll', emit: 'onScroll' },
                { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
                { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
                { emit: 'accessKeyChange' },
                { emit: 'activeStateEnabledChange' },
                { emit: 'allowItemDeletingChange' },
                { emit: 'allowItemReorderingChange' },
                { emit: 'bounceEnabledChange' },
                { emit: 'collapsibleGroupsChange' },
                { emit: 'dataSourceChange' },
                { emit: 'disabledChange' },
                { emit: 'displayExprChange' },
                { emit: 'elementAttrChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'groupedChange' },
                { emit: 'groupTemplateChange' },
                { emit: 'heightChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'indicateLoadingChange' },
                { emit: 'itemDeleteModeChange' },
                { emit: 'itemHoldTimeoutChange' },
                { emit: 'itemsChange' },
                { emit: 'itemTemplateChange' },
                { emit: 'keyExprChange' },
                { emit: 'menuItemsChange' },
                { emit: 'menuModeChange' },
                { emit: 'nextButtonTextChange' },
                { emit: 'noDataTextChange' },
                { emit: 'pageLoadingTextChange' },
                { emit: 'pageLoadModeChange' },
                { emit: 'pulledDownTextChange' },
                { emit: 'pullingDownTextChange' },
                { emit: 'pullRefreshEnabledChange' },
                { emit: 'refreshingTextChange' },
                { emit: 'repaintChangesOnlyChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'scrollByContentChange' },
                { emit: 'scrollByThumbChange' },
                { emit: 'scrollingEnabledChange' },
                { emit: 'searchEditorOptionsChange' },
                { emit: 'searchEnabledChange' },
                { emit: 'searchExprChange' },
                { emit: 'searchModeChange' },
                { emit: 'searchTimeoutChange' },
                { emit: 'searchValueChange' },
                { emit: 'selectAllModeChange' },
                { emit: 'selectedItemKeysChange' },
                { emit: 'selectedItemsChange' },
                { emit: 'selectionModeChange' },
                { emit: 'showScrollbarChange' },
                { emit: 'showSelectionControlsChange' },
                { emit: 'tabIndexChange' },
                { emit: 'useNativeScrollingChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxListComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxListComponent.prototype, "activeStateEnabled", {
            /**
             * Specifies whether or not the widget changes its state when interacting with a user.
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
        Object.defineProperty(DxListComponent.prototype, "allowItemDeleting", {
            /**
             * Specifies whether or not an end user can delete list items.
             */
            get: function () {
                return this._getOption('allowItemDeleting');
            },
            set: function (value) {
                this._setOption('allowItemDeleting', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "allowItemReordering", {
            /**
             * Specifies whether a user can reorder list items. Grouped items cannot be moved from one group to another.
             */
            get: function () {
                return this._getOption('allowItemReordering');
            },
            set: function (value) {
                this._setOption('allowItemReordering', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "bounceEnabled", {
            /**
             * A Boolean value specifying whether to enable or disable the bounce-back effect.
             */
            get: function () {
                return this._getOption('bounceEnabled');
            },
            set: function (value) {
                this._setOption('bounceEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "collapsibleGroups", {
            /**
             * Specifies whether or not an end-user can collapse groups.
             */
            get: function () {
                return this._getOption('collapsibleGroups');
            },
            set: function (value) {
                this._setOption('collapsibleGroups', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxListComponent.prototype, "disabled", {
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
        Object.defineProperty(DxListComponent.prototype, "displayExpr", {
            /**
             * Specifies the data field whose values should be displayed. Defaults to "text" when the data source contains objects.
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
        Object.defineProperty(DxListComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxListComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxListComponent.prototype, "grouped", {
            /**
             * Specifies whether data items should be grouped.
             */
            get: function () {
                return this._getOption('grouped');
            },
            set: function (value) {
                this._setOption('grouped', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "groupTemplate", {
            /**
             * Specifies a custom template for group captions.
             */
            get: function () {
                return this._getOption('groupTemplate');
            },
            set: function (value) {
                this._setOption('groupTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "height", {
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
        Object.defineProperty(DxListComponent.prototype, "hint", {
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
        Object.defineProperty(DxListComponent.prototype, "hoverStateEnabled", {
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
        Object.defineProperty(DxListComponent.prototype, "indicateLoading", {
            /**
             * Specifies whether or not to show the loading panel when the DataSource bound to the widget is loading data.
             */
            get: function () {
                return this._getOption('indicateLoading');
            },
            set: function (value) {
                this._setOption('indicateLoading', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "itemDeleteMode", {
            /**
             * Specifies the way a user can delete items from the list.
             */
            get: function () {
                return this._getOption('itemDeleteMode');
            },
            set: function (value) {
                this._setOption('itemDeleteMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "itemHoldTimeout", {
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
        Object.defineProperty(DxListComponent.prototype, "items", {
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
        Object.defineProperty(DxListComponent.prototype, "itemTemplate", {
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
        Object.defineProperty(DxListComponent.prototype, "keyExpr", {
            /**
             * Specifies which data field provides keys for widget items.
             */
            get: function () {
                return this._getOption('keyExpr');
            },
            set: function (value) {
                this._setOption('keyExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "menuItems", {
            /**
             * Specifies the array of items for a context menu called for a list item.
             */
            get: function () {
                return this._getOption('menuItems');
            },
            set: function (value) {
                this._setOption('menuItems', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "menuMode", {
            /**
             * Specifies whether an item context menu is shown when a user holds or swipes an item.
             */
            get: function () {
                return this._getOption('menuMode');
            },
            set: function (value) {
                this._setOption('menuMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "nextButtonText", {
            /**
             * The text displayed on the button used to load the next page from the data source.
             */
            get: function () {
                return this._getOption('nextButtonText');
            },
            set: function (value) {
                this._setOption('nextButtonText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "noDataText", {
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
        Object.defineProperty(DxListComponent.prototype, "pageLoadingText", {
            /**
             * Specifies the text shown in the pullDown panel, which is displayed when the list is scrolled to the bottom.
             */
            get: function () {
                return this._getOption('pageLoadingText');
            },
            set: function (value) {
                this._setOption('pageLoadingText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "pageLoadMode", {
            /**
             * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
             */
            get: function () {
                return this._getOption('pageLoadMode');
            },
            set: function (value) {
                this._setOption('pageLoadMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "pulledDownText", {
            /**
             * Specifies the text displayed in the pullDown panel when the list is pulled below the refresh threshold.
             */
            get: function () {
                return this._getOption('pulledDownText');
            },
            set: function (value) {
                this._setOption('pulledDownText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "pullingDownText", {
            /**
             * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
             */
            get: function () {
                return this._getOption('pullingDownText');
            },
            set: function (value) {
                this._setOption('pullingDownText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "pullRefreshEnabled", {
            /**
             * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
             */
            get: function () {
                return this._getOption('pullRefreshEnabled');
            },
            set: function (value) {
                this._setOption('pullRefreshEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "refreshingText", {
            /**
             * Specifies the text displayed in the pullDown panel while the list is being refreshed.
             */
            get: function () {
                return this._getOption('refreshingText');
            },
            set: function (value) {
                this._setOption('refreshingText', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "repaintChangesOnly", {
            /**
             * Specifies whether to repaint only those elements whose data changed.
             */
            get: function () {
                return this._getOption('repaintChangesOnly');
            },
            set: function (value) {
                this._setOption('repaintChangesOnly', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxListComponent.prototype, "scrollByContent", {
            /**
             * A Boolean value specifying if the list is scrolled by content.
             */
            get: function () {
                return this._getOption('scrollByContent');
            },
            set: function (value) {
                this._setOption('scrollByContent', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "scrollByThumb", {
            /**
             * A Boolean value specifying if the list is scrolled using the scrollbar.
             */
            get: function () {
                return this._getOption('scrollByThumb');
            },
            set: function (value) {
                this._setOption('scrollByThumb', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "scrollingEnabled", {
            /**
             * A Boolean value specifying whether to enable or disable list scrolling.
             */
            get: function () {
                return this._getOption('scrollingEnabled');
            },
            set: function (value) {
                this._setOption('scrollingEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "searchEditorOptions", {
            /**
             * Configures the search panel.
             */
            get: function () {
                return this._getOption('searchEditorOptions');
            },
            set: function (value) {
                this._setOption('searchEditorOptions', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "searchEnabled", {
            /**
             * Specifies whether the search panel is visible.
             */
            get: function () {
                return this._getOption('searchEnabled');
            },
            set: function (value) {
                this._setOption('searchEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "searchExpr", {
            /**
             * Specifies a data object's field name or an expression whose value is compared to the search string.
             */
            get: function () {
                return this._getOption('searchExpr');
            },
            set: function (value) {
                this._setOption('searchExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "searchMode", {
            /**
             * Specifies a comparison operation used to search widget items.
             */
            get: function () {
                return this._getOption('searchMode');
            },
            set: function (value) {
                this._setOption('searchMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "searchTimeout", {
            /**
             * Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
             */
            get: function () {
                return this._getOption('searchTimeout');
            },
            set: function (value) {
                this._setOption('searchTimeout', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "searchValue", {
            /**
             * Specifies the current search string.
             */
            get: function () {
                return this._getOption('searchValue');
            },
            set: function (value) {
                this._setOption('searchValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "selectAllMode", {
            /**
             * Specifies the mode in which all items are selected.
             */
            get: function () {
                return this._getOption('selectAllMode');
            },
            set: function (value) {
                this._setOption('selectAllMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "selectedItemKeys", {
            /**
             * Specifies an array of currently selected item keys.
             */
            get: function () {
                return this._getOption('selectedItemKeys');
            },
            set: function (value) {
                this._setOption('selectedItemKeys', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "selectedItems", {
            /**
             * An array of currently selected item objects.
             */
            get: function () {
                return this._getOption('selectedItems');
            },
            set: function (value) {
                this._setOption('selectedItems', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "selectionMode", {
            /**
             * Specifies item selection mode.
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
        Object.defineProperty(DxListComponent.prototype, "showScrollbar", {
            /**
             * Specifies when the widget shows the scrollbar.
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
        Object.defineProperty(DxListComponent.prototype, "showSelectionControls", {
            /**
             * Specifies whether or not to display controls used to select list items.
             */
            get: function () {
                return this._getOption('showSelectionControls');
            },
            set: function (value) {
                this._setOption('showSelectionControls', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxListComponent.prototype, "useNativeScrolling", {
            /**
             * Specifies whether or not the widget uses native scrolling.
             */
            get: function () {
                return this._getOption('useNativeScrolling');
            },
            set: function (value) {
                this._setOption('useNativeScrolling', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "visible", {
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
        Object.defineProperty(DxListComponent.prototype, "width", {
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
        Object.defineProperty(DxListComponent.prototype, "itemsChildren", {
            get: function () {
                return this._getOption('items');
            },
            set: function (value) {
                this.setChildren('items', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxListComponent.prototype, "menuItemsChildren", {
            get: function () {
                return this._getOption('menuItems');
            },
            set: function (value) {
                this.setChildren('menuItems', value);
            },
            enumerable: true,
            configurable: true
        });
        DxListComponent.prototype._createInstance = function (element, options) {
            return new DxList(element, options);
        };
        DxListComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxListComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('items', changes);
            this.setupChanges('menuItems', changes);
            this.setupChanges('searchExpr', changes);
            this.setupChanges('selectedItemKeys', changes);
            this.setupChanges('selectedItems', changes);
        };
        DxListComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxListComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._idh.doCheck('items');
            this._idh.doCheck('menuItems');
            this._idh.doCheck('searchExpr');
            this._idh.doCheck('selectedItemKeys');
            this._idh.doCheck('selectedItems');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxListComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxListComponent.ctorParameters = function () { return [
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
        ], DxListComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "allowItemDeleting", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "allowItemReordering", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "bounceEnabled", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "collapsibleGroups", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "displayExpr", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "grouped", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "groupTemplate", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "indicateLoading", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "itemDeleteMode", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "itemHoldTimeout", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "keyExpr", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "menuItems", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "menuMode", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "nextButtonText", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "noDataText", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "pageLoadingText", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "pageLoadMode", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "pulledDownText", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "pullingDownText", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "pullRefreshEnabled", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "refreshingText", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "repaintChangesOnly", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "scrollByContent", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "scrollByThumb", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "scrollingEnabled", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "searchEditorOptions", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "searchEnabled", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "searchExpr", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "searchMode", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "searchTimeout", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "searchValue", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "selectAllMode", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "selectedItemKeys", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "selectedItems", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "showScrollbar", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "showSelectionControls", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "useNativeScrolling", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxListComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onGroupRendered", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onItemContextMenu", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onItemDeleted", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onItemDeleting", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onItemHold", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onItemRendered", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onItemReordered", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onItemSwipe", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onPageLoading", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onPullRefresh", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onScroll", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onSelectAllValueChanged", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "onSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "allowItemDeletingChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "allowItemReorderingChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "bounceEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "collapsibleGroupsChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "displayExprChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "groupedChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "groupTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "indicateLoadingChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "itemDeleteModeChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "itemHoldTimeoutChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "itemsChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "itemTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "keyExprChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "menuItemsChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "menuModeChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "nextButtonTextChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "noDataTextChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "pageLoadingTextChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "pageLoadModeChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "pulledDownTextChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "pullingDownTextChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "pullRefreshEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "refreshingTextChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "repaintChangesOnlyChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "scrollByContentChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "scrollByThumbChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "scrollingEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "searchEditorOptionsChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "searchEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "searchExprChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "searchModeChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "searchTimeoutChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "searchValueChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "selectAllModeChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "selectedItemKeysChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "selectedItemsChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "selectionModeChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "showScrollbarChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "showSelectionControlsChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "useNativeScrollingChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxListComponent.prototype, "widthChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiItemComponent)
        ], DxListComponent.prototype, "itemsChildren", null);
        __decorate([
            core.ContentChildren(nested.DxiMenuItemComponent)
        ], DxListComponent.prototype, "menuItemsChildren", null);
        DxListComponent = __decorate([
            core.Component({
                selector: 'dx-list',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxListComponent);
        return DxListComponent;
    }(core$1.DxComponent));
    var DxListModule = /** @class */ (function () {
        function DxListModule() {
        }
        DxListModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxiItemModule,
                    nested.DxiMenuItemModule,
                    nested.DxoSearchEditorOptionsModule,
                    nested.DxiButtonModule,
                    nested.DxoOptionsModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxListComponent
                ],
                exports: [
                    DxListComponent,
                    nested.DxiItemModule,
                    nested.DxiMenuItemModule,
                    nested.DxoSearchEditorOptionsModule,
                    nested.DxiButtonModule,
                    nested.DxoOptionsModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxListModule);
        return DxListModule;
    }());

    exports.DxListComponent = DxListComponent;
    exports.DxListModule = DxListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-list.umd.js.map

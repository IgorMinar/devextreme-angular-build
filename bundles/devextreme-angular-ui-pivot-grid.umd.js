(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/pivot_grid'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/pivot-grid', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/pivot_grid', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['pivot-grid'] = {}), global.ng.platformBrowser, global.ng.core, global.DxPivotGrid, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxPivotGrid, core$1, nested) { 'use strict';

    DxPivotGrid = DxPivotGrid && DxPivotGrid.hasOwnProperty('default') ? DxPivotGrid['default'] : DxPivotGrid;

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
     * The PivotGrid is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
     */
    var DxPivotGridComponent = /** @class */ (function (_super) {
        __extends(DxPivotGridComponent, _super);
        function DxPivotGridComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'cellClick', emit: 'onCellClick' },
                { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'exported', emit: 'onExported' },
                { subscribe: 'exporting', emit: 'onExporting' },
                { subscribe: 'fileSaving', emit: 'onFileSaving' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { emit: 'allowExpandAllChange' },
                { emit: 'allowFilteringChange' },
                { emit: 'allowSortingChange' },
                { emit: 'allowSortingBySummaryChange' },
                { emit: 'dataFieldAreaChange' },
                { emit: 'dataSourceChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'exportChange' },
                { emit: 'fieldChooserChange' },
                { emit: 'fieldPanelChange' },
                { emit: 'headerFilterChange' },
                { emit: 'heightChange' },
                { emit: 'hideEmptySummaryCellsChange' },
                { emit: 'hintChange' },
                { emit: 'loadPanelChange' },
                { emit: 'rowHeaderLayoutChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'scrollingChange' },
                { emit: 'showBordersChange' },
                { emit: 'showColumnGrandTotalsChange' },
                { emit: 'showColumnTotalsChange' },
                { emit: 'showRowGrandTotalsChange' },
                { emit: 'showRowTotalsChange' },
                { emit: 'showTotalsPriorChange' },
                { emit: 'stateStoringChange' },
                { emit: 'tabIndexChange' },
                { emit: 'textsChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' },
                { emit: 'wordWrapEnabledChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxPivotGridComponent.prototype, "allowExpandAll", {
            /**
             * Allows an end-user to expand/collapse all header items within a header level.
             */
            get: function () {
                return this._getOption('allowExpandAll');
            },
            set: function (value) {
                this._setOption('allowExpandAll', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "allowFiltering", {
            /**
             * Allows a user to filter fields by selecting or deselecting values in the popup menu.
             */
            get: function () {
                return this._getOption('allowFiltering');
            },
            set: function (value) {
                this._setOption('allowFiltering', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "allowSorting", {
            /**
             * Allows an end-user to change sorting options.
             */
            get: function () {
                return this._getOption('allowSorting');
            },
            set: function (value) {
                this._setOption('allowSorting', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "allowSortingBySummary", {
            /**
             * Allows an end-user to sort columns by summary values.
             */
            get: function () {
                return this._getOption('allowSortingBySummary');
            },
            set: function (value) {
                this._setOption('allowSortingBySummary', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "dataFieldArea", {
            /**
             * Specifies the area to which data field headers must belong.
             */
            get: function () {
                return this._getOption('dataFieldArea');
            },
            set: function (value) {
                this._setOption('dataFieldArea', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxPivotGridComponent.prototype, "disabled", {
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
        Object.defineProperty(DxPivotGridComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxPivotGridComponent.prototype, "export", {
            /**
             * Configures client-side exporting.
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
        Object.defineProperty(DxPivotGridComponent.prototype, "fieldChooser", {
            /**
             * The Field Chooser configuration options.
             */
            get: function () {
                return this._getOption('fieldChooser');
            },
            set: function (value) {
                this._setOption('fieldChooser', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "fieldPanel", {
            /**
             * Configures the field panel.
             */
            get: function () {
                return this._getOption('fieldPanel');
            },
            set: function (value) {
                this._setOption('fieldPanel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "headerFilter", {
            /**
             * Configures the header filter feature.
             */
            get: function () {
                return this._getOption('headerFilter');
            },
            set: function (value) {
                this._setOption('headerFilter', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "height", {
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
        Object.defineProperty(DxPivotGridComponent.prototype, "hideEmptySummaryCells", {
            /**
             * Specifies whether or not to hide rows and columns with no data.
             */
            get: function () {
                return this._getOption('hideEmptySummaryCells');
            },
            set: function (value) {
                this._setOption('hideEmptySummaryCells', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "hint", {
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
        Object.defineProperty(DxPivotGridComponent.prototype, "loadPanel", {
            /**
             * Specifies options configuring the load panel.
             */
            get: function () {
                return this._getOption('loadPanel');
            },
            set: function (value) {
                this._setOption('loadPanel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "rowHeaderLayout", {
            /**
             * Specifies the layout of items in the row header.
             */
            get: function () {
                return this._getOption('rowHeaderLayout');
            },
            set: function (value) {
                this._setOption('rowHeaderLayout', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxPivotGridComponent.prototype, "scrolling", {
            /**
             * A configuration object specifying scrolling options.
             */
            get: function () {
                return this._getOption('scrolling');
            },
            set: function (value) {
                this._setOption('scrolling', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "showBorders", {
            /**
             * Specifies whether the outer borders of the grid are visible or not.
             */
            get: function () {
                return this._getOption('showBorders');
            },
            set: function (value) {
                this._setOption('showBorders', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "showColumnGrandTotals", {
            /**
             * Specifies whether to display the Grand Total column.
             */
            get: function () {
                return this._getOption('showColumnGrandTotals');
            },
            set: function (value) {
                this._setOption('showColumnGrandTotals', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "showColumnTotals", {
            /**
             * Specifies whether to display the Total columns.
             */
            get: function () {
                return this._getOption('showColumnTotals');
            },
            set: function (value) {
                this._setOption('showColumnTotals', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "showRowGrandTotals", {
            /**
             * Specifies whether to display the Grand Total row.
             */
            get: function () {
                return this._getOption('showRowGrandTotals');
            },
            set: function (value) {
                this._setOption('showRowGrandTotals', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "showRowTotals", {
            /**
             * Specifies whether to display the Total rows. Applies only if rowHeaderLayout is "standard".
             */
            get: function () {
                return this._getOption('showRowTotals');
            },
            set: function (value) {
                this._setOption('showRowTotals', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "showTotalsPrior", {
            /**
             * Specifies where to show the total rows or columns. Applies only if rowHeaderLayout is "standard".
             */
            get: function () {
                return this._getOption('showTotalsPrior');
            },
            set: function (value) {
                this._setOption('showTotalsPrior', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "stateStoring", {
            /**
             * A configuration object specifying options related to state storing.
             */
            get: function () {
                return this._getOption('stateStoring');
            },
            set: function (value) {
                this._setOption('stateStoring', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxPivotGridComponent.prototype, "texts", {
            /**
             * Strings that can be changed or localized in the PivotGrid widget.
             */
            get: function () {
                return this._getOption('texts');
            },
            set: function (value) {
                this._setOption('texts', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPivotGridComponent.prototype, "visible", {
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
        Object.defineProperty(DxPivotGridComponent.prototype, "width", {
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
        Object.defineProperty(DxPivotGridComponent.prototype, "wordWrapEnabled", {
            /**
             * Specifies whether long text in header items should be wrapped.
             */
            get: function () {
                return this._getOption('wordWrapEnabled');
            },
            set: function (value) {
                this._setOption('wordWrapEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        DxPivotGridComponent.prototype._createInstance = function (element, options) {
            return new DxPivotGrid(element, options);
        };
        DxPivotGridComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxPivotGridComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('dataSource', changes);
        };
        DxPivotGridComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxPivotGridComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('dataSource');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxPivotGridComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxPivotGridComponent.ctorParameters = function () { return [
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
        ], DxPivotGridComponent.prototype, "allowExpandAll", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "allowFiltering", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "allowSorting", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "allowSortingBySummary", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "dataFieldArea", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "fieldChooser", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "fieldPanel", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "headerFilter", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "hideEmptySummaryCells", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "loadPanel", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "rowHeaderLayout", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "scrolling", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "showBorders", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "showColumnGrandTotals", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "showColumnTotals", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "showRowGrandTotals", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "showRowTotals", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "showTotalsPrior", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "stateStoring", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "texts", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "width", null);
        __decorate([
            core.Input()
        ], DxPivotGridComponent.prototype, "wordWrapEnabled", null);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onCellClick", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onCellPrepared", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onContextMenuPreparing", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "allowExpandAllChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "allowFilteringChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "allowSortingChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "allowSortingBySummaryChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "dataFieldAreaChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "fieldChooserChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "fieldPanelChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "headerFilterChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "hideEmptySummaryCellsChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "loadPanelChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "rowHeaderLayoutChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "scrollingChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "showBordersChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "showColumnGrandTotalsChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "showColumnTotalsChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "showRowGrandTotalsChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "showRowTotalsChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "showTotalsPriorChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "stateStoringChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "textsChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "widthChange", void 0);
        __decorate([
            core.Output()
        ], DxPivotGridComponent.prototype, "wordWrapEnabledChange", void 0);
        DxPivotGridComponent = __decorate([
            core.Component({
                selector: 'dx-pivot-grid',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxPivotGridComponent);
        return DxPivotGridComponent;
    }(core$1.DxComponent));
    var DxPivotGridModule = /** @class */ (function () {
        function DxPivotGridModule() {
        }
        DxPivotGridModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoDataSourceModule,
                    nested.DxiFieldModule,
                    nested.DxoFormatModule,
                    nested.DxoHeaderFilterModule,
                    nested.DxoStoreModule,
                    nested.DxoExportModule,
                    nested.DxoFieldChooserModule,
                    nested.DxoTextsModule,
                    nested.DxoFieldPanelModule,
                    nested.DxoLoadPanelModule,
                    nested.DxoScrollingModule,
                    nested.DxoStateStoringModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxPivotGridComponent
                ],
                exports: [
                    DxPivotGridComponent,
                    nested.DxoDataSourceModule,
                    nested.DxiFieldModule,
                    nested.DxoFormatModule,
                    nested.DxoHeaderFilterModule,
                    nested.DxoStoreModule,
                    nested.DxoExportModule,
                    nested.DxoFieldChooserModule,
                    nested.DxoTextsModule,
                    nested.DxoFieldPanelModule,
                    nested.DxoLoadPanelModule,
                    nested.DxoScrollingModule,
                    nested.DxoStateStoringModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxPivotGridModule);
        return DxPivotGridModule;
    }());

    exports.DxPivotGridComponent = DxPivotGridComponent;
    exports.DxPivotGridModule = DxPivotGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-pivot-grid.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/data_grid'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/data-grid', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/data_grid', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['data-grid'] = {}), global.ng.platformBrowser, global.ng.core, global.DxDataGrid, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxDataGrid, core$1, nested) { 'use strict';

    DxDataGrid = DxDataGrid && DxDataGrid.hasOwnProperty('default') ? DxDataGrid['default'] : DxDataGrid;

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
     * The DataGrid is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as sorting, grouping, filtering, as well as more advanced capabilities, like state storing, export to Excel, master-detail interface, and many others.
     */
    var DxDataGridComponent = /** @class */ (function (_super) {
        __extends(DxDataGridComponent, _super);
        function DxDataGridComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'adaptiveDetailRowPreparing', emit: 'onAdaptiveDetailRowPreparing' },
                { subscribe: 'cellClick', emit: 'onCellClick' },
                { subscribe: 'cellDblClick', emit: 'onCellDblClick' },
                { subscribe: 'cellHoverChanged', emit: 'onCellHoverChanged' },
                { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
                { subscribe: 'dataErrorOccurred', emit: 'onDataErrorOccurred' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'editingStart', emit: 'onEditingStart' },
                { subscribe: 'editorPrepared', emit: 'onEditorPrepared' },
                { subscribe: 'editorPreparing', emit: 'onEditorPreparing' },
                { subscribe: 'exported', emit: 'onExported' },
                { subscribe: 'exporting', emit: 'onExporting' },
                { subscribe: 'fileSaving', emit: 'onFileSaving' },
                { subscribe: 'focusedCellChanged', emit: 'onFocusedCellChanged' },
                { subscribe: 'focusedCellChanging', emit: 'onFocusedCellChanging' },
                { subscribe: 'focusedRowChanged', emit: 'onFocusedRowChanged' },
                { subscribe: 'focusedRowChanging', emit: 'onFocusedRowChanging' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'initNewRow', emit: 'onInitNewRow' },
                { subscribe: 'keyDown', emit: 'onKeyDown' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'rowClick', emit: 'onRowClick' },
                { subscribe: 'rowCollapsed', emit: 'onRowCollapsed' },
                { subscribe: 'rowCollapsing', emit: 'onRowCollapsing' },
                { subscribe: 'rowDblClick', emit: 'onRowDblClick' },
                { subscribe: 'rowExpanded', emit: 'onRowExpanded' },
                { subscribe: 'rowExpanding', emit: 'onRowExpanding' },
                { subscribe: 'rowInserted', emit: 'onRowInserted' },
                { subscribe: 'rowInserting', emit: 'onRowInserting' },
                { subscribe: 'rowPrepared', emit: 'onRowPrepared' },
                { subscribe: 'rowRemoved', emit: 'onRowRemoved' },
                { subscribe: 'rowRemoving', emit: 'onRowRemoving' },
                { subscribe: 'rowUpdated', emit: 'onRowUpdated' },
                { subscribe: 'rowUpdating', emit: 'onRowUpdating' },
                { subscribe: 'rowValidating', emit: 'onRowValidating' },
                { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
                { subscribe: 'toolbarPreparing', emit: 'onToolbarPreparing' },
                { emit: 'accessKeyChange' },
                { emit: 'activeStateEnabledChange' },
                { emit: 'allowColumnReorderingChange' },
                { emit: 'allowColumnResizingChange' },
                { emit: 'cacheEnabledChange' },
                { emit: 'cellHintEnabledChange' },
                { emit: 'columnAutoWidthChange' },
                { emit: 'columnChooserChange' },
                { emit: 'columnFixingChange' },
                { emit: 'columnHidingEnabledChange' },
                { emit: 'columnMinWidthChange' },
                { emit: 'columnResizingModeChange' },
                { emit: 'columnsChange' },
                { emit: 'columnWidthChange' },
                { emit: 'customizeColumnsChange' },
                { emit: 'customizeExportDataChange' },
                { emit: 'dataSourceChange' },
                { emit: 'dateSerializationFormatChange' },
                { emit: 'disabledChange' },
                { emit: 'editingChange' },
                { emit: 'elementAttrChange' },
                { emit: 'errorRowEnabledChange' },
                { emit: 'exportChange' },
                { emit: 'filterBuilderChange' },
                { emit: 'filterBuilderPopupChange' },
                { emit: 'filterPanelChange' },
                { emit: 'filterRowChange' },
                { emit: 'filterSyncEnabledChange' },
                { emit: 'filterValueChange' },
                { emit: 'focusedColumnIndexChange' },
                { emit: 'focusedRowEnabledChange' },
                { emit: 'focusedRowIndexChange' },
                { emit: 'focusedRowKeyChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'groupingChange' },
                { emit: 'groupPanelChange' },
                { emit: 'headerFilterChange' },
                { emit: 'heightChange' },
                { emit: 'highlightChangesChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'keyboardNavigationChange' },
                { emit: 'keyExprChange' },
                { emit: 'loadPanelChange' },
                { emit: 'masterDetailChange' },
                { emit: 'noDataTextChange' },
                { emit: 'pagerChange' },
                { emit: 'pagingChange' },
                { emit: 'remoteOperationsChange' },
                { emit: 'renderAsyncChange' },
                { emit: 'repaintChangesOnlyChange' },
                { emit: 'rowAlternationEnabledChange' },
                { emit: 'rowTemplateChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'scrollingChange' },
                { emit: 'searchPanelChange' },
                { emit: 'selectedRowKeysChange' },
                { emit: 'selectionChange' },
                { emit: 'selectionFilterChange' },
                { emit: 'showBordersChange' },
                { emit: 'showColumnHeadersChange' },
                { emit: 'showColumnLinesChange' },
                { emit: 'showRowLinesChange' },
                { emit: 'sortByGroupSummaryInfoChange' },
                { emit: 'sortingChange' },
                { emit: 'stateStoringChange' },
                { emit: 'summaryChange' },
                { emit: 'tabIndexChange' },
                { emit: 'twoWayBindingEnabledChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' },
                { emit: 'wordWrapEnabledChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxDataGridComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "activeStateEnabled", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "allowColumnReordering", {
            /**
             * Specifies whether a user can reorder columns.
             */
            get: function () {
                return this._getOption('allowColumnReordering');
            },
            set: function (value) {
                this._setOption('allowColumnReordering', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "allowColumnResizing", {
            /**
             * Specifies whether a user can resize columns.
             */
            get: function () {
                return this._getOption('allowColumnResizing');
            },
            set: function (value) {
                this._setOption('allowColumnResizing', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "cacheEnabled", {
            /**
             * Specifies whether data should be cached.
             */
            get: function () {
                return this._getOption('cacheEnabled');
            },
            set: function (value) {
                this._setOption('cacheEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "cellHintEnabled", {
            /**
             * Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content.
             */
            get: function () {
                return this._getOption('cellHintEnabled');
            },
            set: function (value) {
                this._setOption('cellHintEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "columnAutoWidth", {
            get: function () {
                return this._getOption('columnAutoWidth');
            },
            set: function (value) {
                this._setOption('columnAutoWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "columnChooser", {
            /**
             * Configures the column chooser.
             */
            get: function () {
                return this._getOption('columnChooser');
            },
            set: function (value) {
                this._setOption('columnChooser', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "columnFixing", {
            /**
             * Configures column fixing.
             */
            get: function () {
                return this._getOption('columnFixing');
            },
            set: function (value) {
                this._setOption('columnFixing', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "columnHidingEnabled", {
            /**
             * Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if allowColumnResizing is true and columnResizingMode is "widget".
             */
            get: function () {
                return this._getOption('columnHidingEnabled');
            },
            set: function (value) {
                this._setOption('columnHidingEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "columnMinWidth", {
            /**
             * Specifies the minimum width of columns.
             */
            get: function () {
                return this._getOption('columnMinWidth');
            },
            set: function (value) {
                this._setOption('columnMinWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "columnResizingMode", {
            /**
             * Specifies how the widget resizes columns. Applies only if allowColumnResizing is true.
             */
            get: function () {
                return this._getOption('columnResizingMode');
            },
            set: function (value) {
                this._setOption('columnResizingMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "columns", {
            /**
             * An array of grid columns.
             */
            get: function () {
                return this._getOption('columns');
            },
            set: function (value) {
                this._setOption('columns', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "columnWidth", {
            /**
             * Specifies the width for all data columns. Has a lower priority than the column.width option.
             */
            get: function () {
                return this._getOption('columnWidth');
            },
            set: function (value) {
                this._setOption('columnWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "customizeColumns", {
            /**
             * Customizes columns after they are created.
             */
            get: function () {
                return this._getOption('customizeColumns');
            },
            set: function (value) {
                this._setOption('customizeColumns', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "customizeExportData", {
            /**
             * Customizes data before export. You can use the export.customizeExcelCell function instead.
             */
            get: function () {
                return this._getOption('customizeExportData');
            },
            set: function (value) {
                this._setOption('customizeExportData', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "dateSerializationFormat", {
            /**
             * Specifies the format in which date-time values should be sent to the server. Use it only if you do not specify the dataSource at design time.
             */
            get: function () {
                return this._getOption('dateSerializationFormat');
            },
            set: function (value) {
                this._setOption('dateSerializationFormat', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "disabled", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "editing", {
            /**
             * Configures editing.
             */
            get: function () {
                return this._getOption('editing');
            },
            set: function (value) {
                this._setOption('editing', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "errorRowEnabled", {
            /**
             * Indicates whether to show the error row.
             */
            get: function () {
                return this._getOption('errorRowEnabled');
            },
            set: function (value) {
                this._setOption('errorRowEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "export", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "filterBuilder", {
            /**
             * Configures the integrated filter builder.
             */
            get: function () {
                return this._getOption('filterBuilder');
            },
            set: function (value) {
                this._setOption('filterBuilder', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "filterBuilderPopup", {
            /**
             * Configures the popup in which the integrated filter builder is shown.
             */
            get: function () {
                return this._getOption('filterBuilderPopup');
            },
            set: function (value) {
                this._setOption('filterBuilderPopup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "filterPanel", {
            /**
             * Configures the filter panel.
             */
            get: function () {
                return this._getOption('filterPanel');
            },
            set: function (value) {
                this._setOption('filterPanel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "filterRow", {
            /**
             * Configures the filter row.
             */
            get: function () {
                return this._getOption('filterRow');
            },
            set: function (value) {
                this._setOption('filterRow', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "filterSyncEnabled", {
            /**
             * Specifies whether to synchronize the filter row, header filter, and filter builder. The synchronized filter expression is stored in the filterValue option.
             */
            get: function () {
                return this._getOption('filterSyncEnabled');
            },
            set: function (value) {
                this._setOption('filterSyncEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "filterValue", {
            /**
             * Specifies a filter expression.
             */
            get: function () {
                return this._getOption('filterValue');
            },
            set: function (value) {
                this._setOption('filterValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "focusedColumnIndex", {
            /**
             * Specifies the index of the column focused initially or currently in the data row area.
             */
            get: function () {
                return this._getOption('focusedColumnIndex');
            },
            set: function (value) {
                this._setOption('focusedColumnIndex', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "focusedRowEnabled", {
            /**
             * Specifies whether the focused row feature is enabled.
             */
            get: function () {
                return this._getOption('focusedRowEnabled');
            },
            set: function (value) {
                this._setOption('focusedRowEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "focusedRowIndex", {
            /**
             * Specifies the initially or currently focused grid row's index. Use it when focusedRowEnabled is true.
             */
            get: function () {
                return this._getOption('focusedRowIndex');
            },
            set: function (value) {
                this._setOption('focusedRowIndex', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "focusedRowKey", {
            /**
             * Specifies initially or currently focused grid row's key. Use it when focusedRowEnabled is true.
             */
            get: function () {
                return this._getOption('focusedRowKey');
            },
            set: function (value) {
                this._setOption('focusedRowKey', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "grouping", {
            /**
             * Configures grouping.
             */
            get: function () {
                return this._getOption('grouping');
            },
            set: function (value) {
                this._setOption('grouping', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "groupPanel", {
            /**
             * Configures the group panel.
             */
            get: function () {
                return this._getOption('groupPanel');
            },
            set: function (value) {
                this._setOption('groupPanel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "headerFilter", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "height", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "highlightChanges", {
            /**
             * Specifies whether to highlight rows and cells with edited data. repaintChangesOnly should be true.
             */
            get: function () {
                return this._getOption('highlightChanges');
            },
            set: function (value) {
                this._setOption('highlightChanges', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "hint", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "hoverStateEnabled", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "keyboardNavigation", {
            /**
             * Configures keyboard navigation.
             */
            get: function () {
                return this._getOption('keyboardNavigation');
            },
            set: function (value) {
                this._setOption('keyboardNavigation', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "keyExpr", {
            /**
             * Specifies which data field provides keys for data items. Applies only if data is a simple array.
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
        Object.defineProperty(DxDataGridComponent.prototype, "loadPanel", {
            /**
             * Configures the load panel.
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
        Object.defineProperty(DxDataGridComponent.prototype, "masterDetail", {
            /**
             * Allows you to build a master-detail interface in the grid.
             */
            get: function () {
                return this._getOption('masterDetail');
            },
            set: function (value) {
                this._setOption('masterDetail', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "noDataText", {
            /**
             * Specifies text shown when the widget does not display any data.
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
        Object.defineProperty(DxDataGridComponent.prototype, "pager", {
            /**
             * Configures the pager.
             */
            get: function () {
                return this._getOption('pager');
            },
            set: function (value) {
                this._setOption('pager', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "paging", {
            /**
             * Configures paging.
             */
            get: function () {
                return this._getOption('paging');
            },
            set: function (value) {
                this._setOption('paging', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "remoteOperations", {
            /**
             * Notifies the DataGrid of the server's data processing operations.
             */
            get: function () {
                return this._getOption('remoteOperations');
            },
            set: function (value) {
                this._setOption('remoteOperations', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "renderAsync", {
            /**
             * Specifies whether to render the filter row, command columns, and columns with showEditorAlways set to true after other elements.
             */
            get: function () {
                return this._getOption('renderAsync');
            },
            set: function (value) {
                this._setOption('renderAsync', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "repaintChangesOnly", {
            /**
             * Specifies whether to repaint only those cells whose data changed.
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
        Object.defineProperty(DxDataGridComponent.prototype, "rowAlternationEnabled", {
            /**
             * Specifies whether rows should be shaded differently.
             */
            get: function () {
                return this._getOption('rowAlternationEnabled');
            },
            set: function (value) {
                this._setOption('rowAlternationEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "rowTemplate", {
            /**
             * Specifies a custom template for rows.
             */
            get: function () {
                return this._getOption('rowTemplate');
            },
            set: function (value) {
                this._setOption('rowTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "scrolling", {
            /**
             * Configures scrolling.
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
        Object.defineProperty(DxDataGridComponent.prototype, "searchPanel", {
            /**
             * Configures the search panel.
             */
            get: function () {
                return this._getOption('searchPanel');
            },
            set: function (value) {
                this._setOption('searchPanel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "selectedRowKeys", {
            /**
             * Allows you to select rows or determine which rows are selected.
             */
            get: function () {
                return this._getOption('selectedRowKeys');
            },
            set: function (value) {
                this._setOption('selectedRowKeys', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "selection", {
            /**
             * Configures runtime selection.
             */
            get: function () {
                return this._getOption('selection');
            },
            set: function (value) {
                this._setOption('selection', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "selectionFilter", {
            /**
             * Specifies filters for the rows that must be selected initially. Applies only if selection.deferred is true.
             */
            get: function () {
                return this._getOption('selectionFilter');
            },
            set: function (value) {
                this._setOption('selectionFilter', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "showBorders", {
            /**
             * Specifies whether the outer borders of the widget are visible.
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
        Object.defineProperty(DxDataGridComponent.prototype, "showColumnHeaders", {
            /**
             * Specifies whether column headers are visible.
             */
            get: function () {
                return this._getOption('showColumnHeaders');
            },
            set: function (value) {
                this._setOption('showColumnHeaders', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "showColumnLines", {
            /**
             * Specifies whether vertical lines that separate one column from another are visible.
             */
            get: function () {
                return this._getOption('showColumnLines');
            },
            set: function (value) {
                this._setOption('showColumnLines', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "showRowLines", {
            /**
             * Specifies whether horizontal lines that separate one row from another are visible.
             */
            get: function () {
                return this._getOption('showRowLines');
            },
            set: function (value) {
                this._setOption('showRowLines', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfo", {
            /**
             * Allows you to sort groups according to the values of group summary items.
             */
            get: function () {
                return this._getOption('sortByGroupSummaryInfo');
            },
            set: function (value) {
                this._setOption('sortByGroupSummaryInfo', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "sorting", {
            /**
             * Configures runtime sorting.
             */
            get: function () {
                return this._getOption('sorting');
            },
            set: function (value) {
                this._setOption('sorting', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "stateStoring", {
            /**
             * Configures state storing.
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
        Object.defineProperty(DxDataGridComponent.prototype, "summary", {
            /**
             * Specifies the options of the grid summary.
             */
            get: function () {
                return this._getOption('summary');
            },
            set: function (value) {
                this._setOption('summary', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "twoWayBindingEnabled", {
            /**
             * Specifies whether to enable two-way data binding.
             */
            get: function () {
                return this._getOption('twoWayBindingEnabled');
            },
            set: function (value) {
                this._setOption('twoWayBindingEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "visible", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "width", {
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
        Object.defineProperty(DxDataGridComponent.prototype, "wordWrapEnabled", {
            /**
             * Specifies whether text that does not fit into a column should be wrapped.
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
        Object.defineProperty(DxDataGridComponent.prototype, "columnsChildren", {
            get: function () {
                return this._getOption('columns');
            },
            set: function (value) {
                this.setChildren('columns', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfoChildren", {
            get: function () {
                return this._getOption('sortByGroupSummaryInfo');
            },
            set: function (value) {
                this.setChildren('sortByGroupSummaryInfo', value);
            },
            enumerable: true,
            configurable: true
        });
        DxDataGridComponent.prototype._createInstance = function (element, options) {
            return new DxDataGrid(element, options);
        };
        DxDataGridComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxDataGridComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('columns', changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('keyExpr', changes);
            this.setupChanges('selectedRowKeys', changes);
            this.setupChanges('sortByGroupSummaryInfo', changes);
        };
        DxDataGridComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxDataGridComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('columns');
            this._idh.doCheck('dataSource');
            this._idh.doCheck('keyExpr');
            this._idh.doCheck('selectedRowKeys');
            this._idh.doCheck('sortByGroupSummaryInfo');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxDataGridComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxDataGridComponent.ctorParameters = function () { return [
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
        ], DxDataGridComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "allowColumnReordering", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "allowColumnResizing", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "cacheEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "cellHintEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "columnAutoWidth", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "columnChooser", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "columnFixing", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "columnHidingEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "columnMinWidth", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "columnResizingMode", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "columnWidth", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "customizeColumns", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "customizeExportData", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "dateSerializationFormat", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "editing", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "errorRowEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "export", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "filterBuilder", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "filterBuilderPopup", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "filterPanel", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "filterRow", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "filterSyncEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "filterValue", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "focusedColumnIndex", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "focusedRowEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "focusedRowIndex", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "focusedRowKey", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "grouping", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "groupPanel", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "headerFilter", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "highlightChanges", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "keyboardNavigation", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "keyExpr", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "loadPanel", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "masterDetail", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "noDataText", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "pager", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "paging", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "remoteOperations", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "renderAsync", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "repaintChangesOnly", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "rowAlternationEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "rowTemplate", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "scrolling", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "searchPanel", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "selectedRowKeys", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "selection", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "selectionFilter", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "showBorders", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "showColumnHeaders", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "showColumnLines", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "showRowLines", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "sortByGroupSummaryInfo", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "sorting", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "stateStoring", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "summary", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "twoWayBindingEnabled", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "width", null);
        __decorate([
            core.Input()
        ], DxDataGridComponent.prototype, "wordWrapEnabled", null);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onAdaptiveDetailRowPreparing", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onCellClick", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onCellDblClick", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onCellHoverChanged", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onCellPrepared", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onContextMenuPreparing", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onDataErrorOccurred", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onEditingStart", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onEditorPrepared", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onEditorPreparing", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onFocusedCellChanged", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onFocusedCellChanging", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onFocusedRowChanged", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onFocusedRowChanging", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onInitNewRow", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onKeyDown", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowClick", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowCollapsed", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowCollapsing", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowDblClick", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowExpanded", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowExpanding", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowInserted", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowInserting", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowPrepared", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowRemoved", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowRemoving", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowUpdated", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowUpdating", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onRowValidating", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "onToolbarPreparing", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "allowColumnReorderingChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "allowColumnResizingChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "cacheEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "cellHintEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "columnAutoWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "columnChooserChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "columnFixingChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "columnHidingEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "columnMinWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "columnResizingModeChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "columnsChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "columnWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "customizeColumnsChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "customizeExportDataChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "dateSerializationFormatChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "editingChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "errorRowEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "exportChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "filterBuilderChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "filterBuilderPopupChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "filterPanelChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "filterRowChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "filterSyncEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "filterValueChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "focusedColumnIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "focusedRowEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "focusedRowIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "focusedRowKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "groupingChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "groupPanelChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "headerFilterChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "highlightChangesChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "keyboardNavigationChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "keyExprChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "loadPanelChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "masterDetailChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "noDataTextChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "pagerChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "pagingChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "remoteOperationsChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "renderAsyncChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "repaintChangesOnlyChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "rowAlternationEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "rowTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "scrollingChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "searchPanelChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "selectedRowKeysChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "selectionChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "selectionFilterChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "showBordersChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "showColumnHeadersChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "showColumnLinesChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "showRowLinesChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "sortByGroupSummaryInfoChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "sortingChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "stateStoringChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "summaryChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "twoWayBindingEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "widthChange", void 0);
        __decorate([
            core.Output()
        ], DxDataGridComponent.prototype, "wordWrapEnabledChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiColumnComponent)
        ], DxDataGridComponent.prototype, "columnsChildren", null);
        __decorate([
            core.ContentChildren(nested.DxiSortByGroupSummaryInfoComponent)
        ], DxDataGridComponent.prototype, "sortByGroupSummaryInfoChildren", null);
        DxDataGridComponent = __decorate([
            core.Component({
                selector: 'dx-data-grid',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxDataGridComponent);
        return DxDataGridComponent;
    }(core$1.DxComponent));
    var DxDataGridModule = /** @class */ (function () {
        function DxDataGridModule() {
        }
        DxDataGridModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoColumnChooserModule,
                    nested.DxoColumnFixingModule,
                    nested.DxoTextsModule,
                    nested.DxiColumnModule,
                    nested.DxiButtonModule,
                    nested.DxoHeaderFilterModule,
                    nested.DxoLookupModule,
                    nested.DxoFormatModule,
                    nested.DxoFormItemModule,
                    nested.DxoLabelModule,
                    nested.DxiValidationRuleModule,
                    nested.DxoEditingModule,
                    nested.DxoFormModule,
                    nested.DxoColCountByScreenModule,
                    nested.DxiItemModule,
                    nested.DxoTabPanelOptionsModule,
                    nested.DxiTabModule,
                    nested.DxoButtonOptionsModule,
                    nested.DxoPopupModule,
                    nested.DxoAnimationModule,
                    nested.DxoHideModule,
                    nested.DxoShowModule,
                    nested.DxoPositionModule,
                    nested.DxoAtModule,
                    nested.DxoBoundaryOffsetModule,
                    nested.DxoCollisionModule,
                    nested.DxoMyModule,
                    nested.DxoOffsetModule,
                    nested.DxiToolbarItemModule,
                    nested.DxoExportModule,
                    nested.DxoFilterBuilderModule,
                    nested.DxiCustomOperationModule,
                    nested.DxiFieldModule,
                    nested.DxoFilterOperationDescriptionsModule,
                    nested.DxoGroupOperationDescriptionsModule,
                    nested.DxoFilterBuilderPopupModule,
                    nested.DxoFilterPanelModule,
                    nested.DxoFilterRowModule,
                    nested.DxoOperationDescriptionsModule,
                    nested.DxoGroupingModule,
                    nested.DxoGroupPanelModule,
                    nested.DxoKeyboardNavigationModule,
                    nested.DxoLoadPanelModule,
                    nested.DxoMasterDetailModule,
                    nested.DxoPagerModule,
                    nested.DxoPagingModule,
                    nested.DxoRemoteOperationsModule,
                    nested.DxoScrollingModule,
                    nested.DxoSearchPanelModule,
                    nested.DxoSelectionModule,
                    nested.DxiSortByGroupSummaryInfoModule,
                    nested.DxoSortingModule,
                    nested.DxoStateStoringModule,
                    nested.DxoSummaryModule,
                    nested.DxiGroupItemModule,
                    nested.DxoValueFormatModule,
                    nested.DxiTotalItemModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxDataGridComponent
                ],
                exports: [
                    DxDataGridComponent,
                    nested.DxoColumnChooserModule,
                    nested.DxoColumnFixingModule,
                    nested.DxoTextsModule,
                    nested.DxiColumnModule,
                    nested.DxiButtonModule,
                    nested.DxoHeaderFilterModule,
                    nested.DxoLookupModule,
                    nested.DxoFormatModule,
                    nested.DxoFormItemModule,
                    nested.DxoLabelModule,
                    nested.DxiValidationRuleModule,
                    nested.DxoEditingModule,
                    nested.DxoFormModule,
                    nested.DxoColCountByScreenModule,
                    nested.DxiItemModule,
                    nested.DxoTabPanelOptionsModule,
                    nested.DxiTabModule,
                    nested.DxoButtonOptionsModule,
                    nested.DxoPopupModule,
                    nested.DxoAnimationModule,
                    nested.DxoHideModule,
                    nested.DxoShowModule,
                    nested.DxoPositionModule,
                    nested.DxoAtModule,
                    nested.DxoBoundaryOffsetModule,
                    nested.DxoCollisionModule,
                    nested.DxoMyModule,
                    nested.DxoOffsetModule,
                    nested.DxiToolbarItemModule,
                    nested.DxoExportModule,
                    nested.DxoFilterBuilderModule,
                    nested.DxiCustomOperationModule,
                    nested.DxiFieldModule,
                    nested.DxoFilterOperationDescriptionsModule,
                    nested.DxoGroupOperationDescriptionsModule,
                    nested.DxoFilterBuilderPopupModule,
                    nested.DxoFilterPanelModule,
                    nested.DxoFilterRowModule,
                    nested.DxoOperationDescriptionsModule,
                    nested.DxoGroupingModule,
                    nested.DxoGroupPanelModule,
                    nested.DxoKeyboardNavigationModule,
                    nested.DxoLoadPanelModule,
                    nested.DxoMasterDetailModule,
                    nested.DxoPagerModule,
                    nested.DxoPagingModule,
                    nested.DxoRemoteOperationsModule,
                    nested.DxoScrollingModule,
                    nested.DxoSearchPanelModule,
                    nested.DxoSelectionModule,
                    nested.DxiSortByGroupSummaryInfoModule,
                    nested.DxoSortingModule,
                    nested.DxoStateStoringModule,
                    nested.DxoSummaryModule,
                    nested.DxiGroupItemModule,
                    nested.DxoValueFormatModule,
                    nested.DxiTotalItemModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxDataGridModule);
        return DxDataGridModule;
    }());

    exports.DxDataGridComponent = DxDataGridComponent;
    exports.DxDataGridModule = DxDataGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-data-grid.umd.js.map

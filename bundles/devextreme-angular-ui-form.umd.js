(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/form'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/form', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/form', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.form = {}), global.ng.platformBrowser, global.ng.core, global.DxForm, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxForm, core$1, nested) { 'use strict';

    DxForm = DxForm && DxForm.hasOwnProperty('default') ? DxForm['default'] : DxForm;

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
     * The Form widget represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.
     */
    var DxFormComponent = /** @class */ (function (_super) {
        __extends(DxFormComponent, _super);
        function DxFormComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'editorEnterKey', emit: 'onEditorEnterKey' },
                { subscribe: 'fieldDataChanged', emit: 'onFieldDataChanged' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { emit: 'accessKeyChange' },
                { emit: 'activeStateEnabledChange' },
                { emit: 'alignItemLabelsChange' },
                { emit: 'alignItemLabelsInAllGroupsChange' },
                { emit: 'colCountChange' },
                { emit: 'colCountByScreenChange' },
                { emit: 'customizeItemChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'formDataChange' },
                { emit: 'heightChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'itemsChange' },
                { emit: 'labelLocationChange' },
                { emit: 'minColWidthChange' },
                { emit: 'optionalMarkChange' },
                { emit: 'readOnlyChange' },
                { emit: 'requiredMarkChange' },
                { emit: 'requiredMessageChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'screenByWidthChange' },
                { emit: 'scrollingEnabledChange' },
                { emit: 'showColonAfterLabelChange' },
                { emit: 'showOptionalMarkChange' },
                { emit: 'showRequiredMarkChange' },
                { emit: 'showValidationSummaryChange' },
                { emit: 'tabIndexChange' },
                { emit: 'validationGroupChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxFormComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxFormComponent.prototype, "activeStateEnabled", {
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
        Object.defineProperty(DxFormComponent.prototype, "alignItemLabels", {
            /**
             * Specifies whether or not all root item labels are aligned.
             */
            get: function () {
                return this._getOption('alignItemLabels');
            },
            set: function (value) {
                this._setOption('alignItemLabels', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "alignItemLabelsInAllGroups", {
            /**
             * Specifies whether or not item labels in all groups are aligned.
             */
            get: function () {
                return this._getOption('alignItemLabelsInAllGroups');
            },
            set: function (value) {
                this._setOption('alignItemLabelsInAllGroups', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "colCount", {
            /**
             * The count of columns in the form layout.
             */
            get: function () {
                return this._getOption('colCount');
            },
            set: function (value) {
                this._setOption('colCount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "colCountByScreen", {
            /**
             * Specifies dependency between the screen factor and the count of columns in the form layout.
             */
            get: function () {
                return this._getOption('colCountByScreen');
            },
            set: function (value) {
                this._setOption('colCountByScreen', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "customizeItem", {
            /**
             * Specifies a function that customizes a form item after it has been created.
             */
            get: function () {
                return this._getOption('customizeItem');
            },
            set: function (value) {
                this._setOption('customizeItem', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "disabled", {
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
        Object.defineProperty(DxFormComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxFormComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxFormComponent.prototype, "formData", {
            /**
             * Provides the Form's data. Gets updated every time form fields change.
             */
            get: function () {
                return this._getOption('formData');
            },
            set: function (value) {
                this._setOption('formData', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "height", {
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
        Object.defineProperty(DxFormComponent.prototype, "hint", {
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
        Object.defineProperty(DxFormComponent.prototype, "hoverStateEnabled", {
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
        Object.defineProperty(DxFormComponent.prototype, "items", {
            /**
             * Holds an array of form items.
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
        Object.defineProperty(DxFormComponent.prototype, "labelLocation", {
            /**
             * Specifies the location of a label against the editor.
             */
            get: function () {
                return this._getOption('labelLocation');
            },
            set: function (value) {
                this._setOption('labelLocation', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "minColWidth", {
            /**
             * The minimum column width used for calculating column count in the form layout.
             */
            get: function () {
                return this._getOption('minColWidth');
            },
            set: function (value) {
                this._setOption('minColWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "optionalMark", {
            /**
             * The text displayed for optional fields.
             */
            get: function () {
                return this._getOption('optionalMark');
            },
            set: function (value) {
                this._setOption('optionalMark', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "readOnly", {
            /**
             * Specifies whether all editors on the form are read-only. Applies only to non-templated items.
             */
            get: function () {
                return this._getOption('readOnly');
            },
            set: function (value) {
                this._setOption('readOnly', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "requiredMark", {
            /**
             * The text displayed for required fields.
             */
            get: function () {
                return this._getOption('requiredMark');
            },
            set: function (value) {
                this._setOption('requiredMark', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "requiredMessage", {
            /**
             * Specifies the message that is shown for end-users if a required field value is not specified.
             */
            get: function () {
                return this._getOption('requiredMessage');
            },
            set: function (value) {
                this._setOption('requiredMessage', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxFormComponent.prototype, "screenByWidth", {
            /**
             * Specifies a function that categorizes screens by their width.
             */
            get: function () {
                return this._getOption('screenByWidth');
            },
            set: function (value) {
                this._setOption('screenByWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "scrollingEnabled", {
            /**
             * A Boolean value specifying whether to enable or disable form scrolling.
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
        Object.defineProperty(DxFormComponent.prototype, "showColonAfterLabel", {
            /**
             * Specifies whether or not a colon is displayed at the end of form labels.
             */
            get: function () {
                return this._getOption('showColonAfterLabel');
            },
            set: function (value) {
                this._setOption('showColonAfterLabel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "showOptionalMark", {
            /**
             * Specifies whether or not the optional mark is displayed for optional fields.
             */
            get: function () {
                return this._getOption('showOptionalMark');
            },
            set: function (value) {
                this._setOption('showOptionalMark', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "showRequiredMark", {
            /**
             * Specifies whether or not the required mark is displayed for required fields.
             */
            get: function () {
                return this._getOption('showRequiredMark');
            },
            set: function (value) {
                this._setOption('showRequiredMark', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "showValidationSummary", {
            /**
             * Specifies whether or not the total validation summary is displayed on the form.
             */
            get: function () {
                return this._getOption('showValidationSummary');
            },
            set: function (value) {
                this._setOption('showValidationSummary', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxFormComponent.prototype, "validationGroup", {
            /**
             * Gives a name to the internal validation group.
             */
            get: function () {
                return this._getOption('validationGroup');
            },
            set: function (value) {
                this._setOption('validationGroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxFormComponent.prototype, "visible", {
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
        Object.defineProperty(DxFormComponent.prototype, "width", {
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
        Object.defineProperty(DxFormComponent.prototype, "itemsChildren", {
            get: function () {
                return this._getOption('items');
            },
            set: function (value) {
                this.setChildren('items', value);
            },
            enumerable: true,
            configurable: true
        });
        DxFormComponent.prototype._createInstance = function (element, options) {
            return new DxForm(element, options);
        };
        DxFormComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxFormComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('items', changes);
        };
        DxFormComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxFormComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('items');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxFormComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxFormComponent.ctorParameters = function () { return [
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
        ], DxFormComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "alignItemLabels", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "alignItemLabelsInAllGroups", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "colCount", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "colCountByScreen", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "customizeItem", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "formData", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "labelLocation", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "minColWidth", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "optionalMark", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "readOnly", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "requiredMark", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "requiredMessage", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "screenByWidth", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "scrollingEnabled", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "showColonAfterLabel", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "showOptionalMark", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "showRequiredMark", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "showValidationSummary", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "validationGroup", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxFormComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "onEditorEnterKey", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "onFieldDataChanged", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "alignItemLabelsChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "alignItemLabelsInAllGroupsChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "colCountChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "colCountByScreenChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "customizeItemChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "formDataChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "itemsChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "labelLocationChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "minColWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "optionalMarkChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "readOnlyChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "requiredMarkChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "requiredMessageChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "screenByWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "scrollingEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "showColonAfterLabelChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "showOptionalMarkChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "showRequiredMarkChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "showValidationSummaryChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "validationGroupChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxFormComponent.prototype, "widthChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiItemComponent)
        ], DxFormComponent.prototype, "itemsChildren", null);
        DxFormComponent = __decorate([
            core.Component({
                selector: 'dx-form',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxFormComponent);
        return DxFormComponent;
    }(core$1.DxComponent));
    var DxFormModule = /** @class */ (function () {
        function DxFormModule() {
        }
        DxFormModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoColCountByScreenModule,
                    nested.DxiItemModule,
                    nested.DxoLabelModule,
                    nested.DxiValidationRuleModule,
                    nested.DxoTabPanelOptionsModule,
                    nested.DxiTabModule,
                    nested.DxoButtonOptionsModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxFormComponent
                ],
                exports: [
                    DxFormComponent,
                    nested.DxoColCountByScreenModule,
                    nested.DxiItemModule,
                    nested.DxoLabelModule,
                    nested.DxiValidationRuleModule,
                    nested.DxoTabPanelOptionsModule,
                    nested.DxiTabModule,
                    nested.DxoButtonOptionsModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxFormModule);
        return DxFormModule;
    }());

    exports.DxFormComponent = DxFormComponent;
    exports.DxFormModule = DxFormModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-form.umd.js.map

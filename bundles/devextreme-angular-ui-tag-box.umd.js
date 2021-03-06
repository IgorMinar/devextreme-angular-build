(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/tag_box'), require('devextreme-angular/ui/validator'), require('@angular/forms'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/tag-box', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/tag_box', 'devextreme-angular/ui/validator', '@angular/forms', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['tag-box'] = {}), global.ng.platformBrowser, global.ng.core, global.DxTagBox, global['devextreme-angular'].ui.validator, global.ng.forms, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxTagBox, validator, forms, core$1, nested) { 'use strict';

    DxTagBox = DxTagBox && DxTagBox.hasOwnProperty('default') ? DxTagBox['default'] : DxTagBox;

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
    var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return DxTagBoxComponent; }),
        multi: true
    };
    /**
     * The TagBox widget is an editor that allows an end user to select multiple items from a drop-down list.
     */
    var DxTagBoxComponent = /** @class */ (function (_super) {
        __extends(DxTagBoxComponent, _super);
        function DxTagBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this.touched = function (_) { };
            _this._createEventEmitters([
                { subscribe: 'change', emit: 'onChange' },
                { subscribe: 'closed', emit: 'onClosed' },
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'customItemCreating', emit: 'onCustomItemCreating' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'enterKey', emit: 'onEnterKey' },
                { subscribe: 'focusIn', emit: 'onFocusIn' },
                { subscribe: 'focusOut', emit: 'onFocusOut' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'input', emit: 'onInput' },
                { subscribe: 'itemClick', emit: 'onItemClick' },
                { subscribe: 'keyDown', emit: 'onKeyDown' },
                { subscribe: 'keyPress', emit: 'onKeyPress' },
                { subscribe: 'keyUp', emit: 'onKeyUp' },
                { subscribe: 'multiTagPreparing', emit: 'onMultiTagPreparing' },
                { subscribe: 'opened', emit: 'onOpened' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
                { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
                { subscribe: 'valueChanged', emit: 'onValueChanged' },
                { emit: 'acceptCustomValueChange' },
                { emit: 'accessKeyChange' },
                { emit: 'activeStateEnabledChange' },
                { emit: 'applyValueModeChange' },
                { emit: 'buttonsChange' },
                { emit: 'dataSourceChange' },
                { emit: 'deferRenderingChange' },
                { emit: 'disabledChange' },
                { emit: 'displayExprChange' },
                { emit: 'dropDownButtonTemplateChange' },
                { emit: 'elementAttrChange' },
                { emit: 'fieldTemplateChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'groupedChange' },
                { emit: 'groupTemplateChange' },
                { emit: 'heightChange' },
                { emit: 'hideSelectedItemsChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'inputAttrChange' },
                { emit: 'isValidChange' },
                { emit: 'itemsChange' },
                { emit: 'itemTemplateChange' },
                { emit: 'maxDisplayedTagsChange' },
                { emit: 'maxLengthChange' },
                { emit: 'minSearchLengthChange' },
                { emit: 'multilineChange' },
                { emit: 'nameChange' },
                { emit: 'noDataTextChange' },
                { emit: 'openedChange' },
                { emit: 'openOnFieldClickChange' },
                { emit: 'placeholderChange' },
                { emit: 'readOnlyChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'searchEnabledChange' },
                { emit: 'searchExprChange' },
                { emit: 'searchModeChange' },
                { emit: 'searchTimeoutChange' },
                { emit: 'selectAllModeChange' },
                { emit: 'selectedItemsChange' },
                { emit: 'showClearButtonChange' },
                { emit: 'showDataBeforeSearchChange' },
                { emit: 'showDropDownButtonChange' },
                { emit: 'showMultiTagOnlyChange' },
                { emit: 'showSelectionControlsChange' },
                { emit: 'stylingModeChange' },
                { emit: 'tabIndexChange' },
                { emit: 'tagTemplateChange' },
                { emit: 'textChange' },
                { emit: 'validationErrorChange' },
                { emit: 'validationMessageModeChange' },
                { emit: 'valueChange' },
                { emit: 'valueExprChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' },
                { emit: 'onBlur' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxTagBoxComponent.prototype, "acceptCustomValue", {
            /**
             * Specifies whether the widget allows a user to enter a custom value. Requires the onCustomItemCreating handler implementation.
             */
            get: function () {
                return this._getOption('acceptCustomValue');
            },
            set: function (value) {
                this._setOption('acceptCustomValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "activeStateEnabled", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "applyValueMode", {
            /**
             * Specifies how the widget applies values.
             */
            get: function () {
                return this._getOption('applyValueMode');
            },
            set: function (value) {
                this._setOption('applyValueMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "buttons", {
            /**
             * Allows you to add custom buttons to the input text field.
             */
            get: function () {
                return this._getOption('buttons');
            },
            set: function (value) {
                this._setOption('buttons', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "dataSource", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "deferRendering", {
            /**
             * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
             */
            get: function () {
                return this._getOption('deferRendering');
            },
            set: function (value) {
                this._setOption('deferRendering', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "disabled", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "displayExpr", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "dropDownButtonTemplate", {
            /**
             * Specifies a custom template for the drop-down button.
             */
            get: function () {
                return this._getOption('dropDownButtonTemplate');
            },
            set: function (value) {
                this._setOption('dropDownButtonTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "fieldTemplate", {
            /**
             * Specifies a custom template for the text field. Must contain the TextBox widget.
             */
            get: function () {
                return this._getOption('fieldTemplate');
            },
            set: function (value) {
                this._setOption('fieldTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "grouped", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "groupTemplate", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "height", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "hideSelectedItems", {
            /**
             * A Boolean value specifying whether or not to hide selected items.
             */
            get: function () {
                return this._getOption('hideSelectedItems');
            },
            set: function (value) {
                this._setOption('hideSelectedItems', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "hint", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "hoverStateEnabled", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "inputAttr", {
            /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
            get: function () {
                return this._getOption('inputAttr');
            },
            set: function (value) {
                this._setOption('inputAttr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "isValid", {
            /**
             * Specifies whether the editor's value is valid.
             */
            get: function () {
                return this._getOption('isValid');
            },
            set: function (value) {
                this._setOption('isValid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "items", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "itemTemplate", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "maxDisplayedTags", {
            /**
             * Specifies the limit on displayed tags. On exceeding it, the widget replaces all tags with a single multi-tag that displays the number of selected items.
             */
            get: function () {
                return this._getOption('maxDisplayedTags');
            },
            set: function (value) {
                this._setOption('maxDisplayedTags', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "maxLength", {
            /**
             * Specifies the maximum number of characters you can enter into the textbox.
             */
            get: function () {
                return this._getOption('maxLength');
            },
            set: function (value) {
                this._setOption('maxLength', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "minSearchLength", {
            /**
             * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
             */
            get: function () {
                return this._getOption('minSearchLength');
            },
            set: function (value) {
                this._setOption('minSearchLength', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "multiline", {
            /**
             * A Boolean value specifying whether or not the widget is multiline.
             */
            get: function () {
                return this._getOption('multiline');
            },
            set: function (value) {
                this._setOption('multiline', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "name", {
            /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
            get: function () {
                return this._getOption('name');
            },
            set: function (value) {
                this._setOption('name', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "noDataText", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "opened", {
            /**
             * Specifies whether or not the drop-down editor is displayed.
             */
            get: function () {
                return this._getOption('opened');
            },
            set: function (value) {
                this._setOption('opened', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "openOnFieldClick", {
            /**
             * Specifies whether a user can open the drop-down list by clicking a text field.
             */
            get: function () {
                return this._getOption('openOnFieldClick');
            },
            set: function (value) {
                this._setOption('openOnFieldClick', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "placeholder", {
            /**
             * The text that is provided as a hint in the select box editor.
             */
            get: function () {
                return this._getOption('placeholder');
            },
            set: function (value) {
                this._setOption('placeholder', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "readOnly", {
            /**
             * Specifies whether the editor is read-only.
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
        Object.defineProperty(DxTagBoxComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "searchEnabled", {
            /**
             * Specifies whether to allow searching.
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
        Object.defineProperty(DxTagBoxComponent.prototype, "searchExpr", {
            /**
             * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
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
        Object.defineProperty(DxTagBoxComponent.prototype, "searchMode", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "searchTimeout", {
            /**
             * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
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
        Object.defineProperty(DxTagBoxComponent.prototype, "selectAllMode", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "selectedItems", {
            /**
             * Gets the currently selected items.
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
        Object.defineProperty(DxTagBoxComponent.prototype, "showClearButton", {
            /**
             * Specifies whether to display the Clear button in the widget.
             */
            get: function () {
                return this._getOption('showClearButton');
            },
            set: function (value) {
                this._setOption('showClearButton', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "showDataBeforeSearch", {
            /**
             * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
             */
            get: function () {
                return this._getOption('showDataBeforeSearch');
            },
            set: function (value) {
                this._setOption('showDataBeforeSearch', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "showDropDownButton", {
            /**
             * Specifies whether the drop-down button is visible.
             */
            get: function () {
                return this._getOption('showDropDownButton');
            },
            set: function (value) {
                this._setOption('showDropDownButton', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "showMultiTagOnly", {
            /**
             * Specifies whether the multi-tag is shown without ordinary tags.
             */
            get: function () {
                return this._getOption('showMultiTagOnly');
            },
            set: function (value) {
                this._setOption('showMultiTagOnly', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "showSelectionControls", {
            /**
             * Specifies whether or not to display selection controls.
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
        Object.defineProperty(DxTagBoxComponent.prototype, "stylingMode", {
            /**
             * Specifies how the widget's text field is styled.
             */
            get: function () {
                return this._getOption('stylingMode');
            },
            set: function (value) {
                this._setOption('stylingMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "tagTemplate", {
            /**
             * Specifies a custom template for tags.
             */
            get: function () {
                return this._getOption('tagTemplate');
            },
            set: function (value) {
                this._setOption('tagTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "text", {
            /**
             * The read-only option that holds the text displayed by the widget input element.
             */
            get: function () {
                return this._getOption('text');
            },
            set: function (value) {
                this._setOption('text', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "validationError", {
            /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
            get: function () {
                return this._getOption('validationError');
            },
            set: function (value) {
                this._setOption('validationError', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "validationMessageMode", {
            /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
            get: function () {
                return this._getOption('validationMessageMode');
            },
            set: function (value) {
                this._setOption('validationMessageMode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "value", {
            /**
             * Specifies the selected items.
             */
            get: function () {
                return this._getOption('value');
            },
            set: function (value) {
                this._setOption('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "valueExpr", {
            /**
             * Specifies which data field provides unique values to the widget's value.
             */
            get: function () {
                return this._getOption('valueExpr');
            },
            set: function (value) {
                this._setOption('valueExpr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "visible", {
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
        Object.defineProperty(DxTagBoxComponent.prototype, "width", {
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
        DxTagBoxComponent.prototype.change = function (_) { };
        Object.defineProperty(DxTagBoxComponent.prototype, "buttonsChildren", {
            get: function () {
                return this._getOption('buttons');
            },
            set: function (value) {
                this.setChildren('buttons', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxTagBoxComponent.prototype, "itemsChildren", {
            get: function () {
                return this._getOption('items');
            },
            set: function (value) {
                this.setChildren('items', value);
            },
            enumerable: true,
            configurable: true
        });
        DxTagBoxComponent.prototype._createInstance = function (element, options) {
            return new DxTagBox(element, options);
        };
        DxTagBoxComponent.prototype.writeValue = function (value) {
            this.eventHelper.lockedValueChangeEvent = true;
            this.value = value;
            this.eventHelper.lockedValueChangeEvent = false;
        };
        DxTagBoxComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        DxTagBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
        DxTagBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
        DxTagBoxComponent.prototype._createWidget = function (element) {
            var _this = this;
            _super.prototype._createWidget.call(this, element);
            this.instance.on('focusOut', function (e) {
                _this.eventHelper.fireNgEvent('onBlur', [e]);
            });
        };
        DxTagBoxComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxTagBoxComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('buttons', changes);
            this.setupChanges('dataSource', changes);
            this.setupChanges('items', changes);
            this.setupChanges('searchExpr', changes);
            this.setupChanges('selectedItems', changes);
            this.setupChanges('value', changes);
        };
        DxTagBoxComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxTagBoxComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('buttons');
            this._idh.doCheck('dataSource');
            this._idh.doCheck('items');
            this._idh.doCheck('searchExpr');
            this._idh.doCheck('selectedItems');
            this._idh.doCheck('value');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxTagBoxComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxTagBoxComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            if (this.validator) {
                this.validator.createInstanceOnInit = false;
            }
        };
        DxTagBoxComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
            if (this.validator) {
                this.validator.createInstance(this.element.nativeElement);
            }
        };
        DxTagBoxComponent.ctorParameters = function () { return [
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
            core.ContentChild(validator.DxValidatorComponent)
        ], DxTagBoxComponent.prototype, "validator", void 0);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "acceptCustomValue", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "applyValueMode", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "buttons", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "deferRendering", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "displayExpr", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "dropDownButtonTemplate", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "fieldTemplate", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "grouped", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "groupTemplate", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "hideSelectedItems", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "inputAttr", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "isValid", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "maxDisplayedTags", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "maxLength", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "minSearchLength", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "multiline", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "noDataText", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "openOnFieldClick", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "readOnly", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "searchEnabled", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "searchExpr", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "searchMode", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "searchTimeout", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "selectAllMode", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "selectedItems", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "showClearButton", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "showDataBeforeSearch", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "showDropDownButton", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "showMultiTagOnly", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "showSelectionControls", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "stylingMode", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "tagTemplate", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "text", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "validationError", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "validationMessageMode", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "valueExpr", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxTagBoxComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onClosed", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onCustomItemCreating", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onEnterKey", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onFocusIn", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onFocusOut", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onInput", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onKeyDown", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onKeyPress", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onKeyUp", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onMultiTagPreparing", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onOpened", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onSelectAllValueChanged", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onValueChanged", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "acceptCustomValueChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "applyValueModeChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "buttonsChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "dataSourceChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "deferRenderingChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "displayExprChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "fieldTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "groupedChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "groupTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "hideSelectedItemsChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "inputAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "isValidChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "itemsChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "itemTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "maxDisplayedTagsChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "maxLengthChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "minSearchLengthChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "multilineChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "nameChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "noDataTextChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "openedChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "openOnFieldClickChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "placeholderChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "readOnlyChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "searchEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "searchExprChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "searchModeChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "searchTimeoutChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "selectAllModeChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "selectedItemsChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "showClearButtonChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "showDataBeforeSearchChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "showDropDownButtonChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "showMultiTagOnlyChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "showSelectionControlsChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "stylingModeChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "tagTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "textChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "validationErrorChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "validationMessageModeChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "valueChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "valueExprChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "widthChange", void 0);
        __decorate([
            core.Output()
        ], DxTagBoxComponent.prototype, "onBlur", void 0);
        __decorate([
            core.HostListener('valueChange', ['$event'])
        ], DxTagBoxComponent.prototype, "change", null);
        __decorate([
            core.HostListener('onBlur', ['$event'])
        ], DxTagBoxComponent.prototype, "touched", void 0);
        __decorate([
            core.ContentChildren(nested.DxiButtonComponent)
        ], DxTagBoxComponent.prototype, "buttonsChildren", null);
        __decorate([
            core.ContentChildren(nested.DxiItemComponent)
        ], DxTagBoxComponent.prototype, "itemsChildren", null);
        DxTagBoxComponent = __decorate([
            core.Component({
                selector: 'dx-tag-box',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    CUSTOM_VALUE_ACCESSOR_PROVIDER,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxTagBoxComponent);
        return DxTagBoxComponent;
    }(core$1.DxComponent));
    var DxTagBoxModule = /** @class */ (function () {
        function DxTagBoxModule() {
        }
        DxTagBoxModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxiButtonModule,
                    nested.DxoOptionsModule,
                    nested.DxiItemModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxTagBoxComponent
                ],
                exports: [
                    DxTagBoxComponent,
                    nested.DxiButtonModule,
                    nested.DxoOptionsModule,
                    nested.DxiItemModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxTagBoxModule);
        return DxTagBoxModule;
    }());

    exports.DxTagBoxComponent = DxTagBoxComponent;
    exports.DxTagBoxModule = DxTagBoxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-tag-box.umd.js.map

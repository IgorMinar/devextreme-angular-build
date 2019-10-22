(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/popup'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/popup', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/popup', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.popup = {}), global.ng.platformBrowser, global.ng.core, global.DxPopup, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxPopup, core$1, nested) { 'use strict';

    DxPopup = DxPopup && DxPopup.hasOwnProperty('default') ? DxPopup['default'] : DxPopup;

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
     * The Popup widget is a pop-up window overlaying the current view.
     */
    var DxPopupComponent = /** @class */ (function (_super) {
        __extends(DxPopupComponent, _super);
        function DxPopupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._watcherHelper = _watcherHelper;
            _this._idh = _idh;
            _this._createEventEmitters([
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'hidden', emit: 'onHidden' },
                { subscribe: 'hiding', emit: 'onHiding' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'resize', emit: 'onResize' },
                { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
                { subscribe: 'resizeStart', emit: 'onResizeStart' },
                { subscribe: 'showing', emit: 'onShowing' },
                { subscribe: 'shown', emit: 'onShown' },
                { subscribe: 'titleRendered', emit: 'onTitleRendered' },
                { emit: 'accessKeyChange' },
                { emit: 'animationChange' },
                { emit: 'closeOnBackButtonChange' },
                { emit: 'closeOnOutsideClickChange' },
                { emit: 'containerChange' },
                { emit: 'contentTemplateChange' },
                { emit: 'deferRenderingChange' },
                { emit: 'disabledChange' },
                { emit: 'dragEnabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'fullScreenChange' },
                { emit: 'heightChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'maxHeightChange' },
                { emit: 'maxWidthChange' },
                { emit: 'minHeightChange' },
                { emit: 'minWidthChange' },
                { emit: 'positionChange' },
                { emit: 'resizeEnabledChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'shadingChange' },
                { emit: 'shadingColorChange' },
                { emit: 'showCloseButtonChange' },
                { emit: 'showTitleChange' },
                { emit: 'tabIndexChange' },
                { emit: 'titleChange' },
                { emit: 'titleTemplateChange' },
                { emit: 'toolbarItemsChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' }
            ]);
            _this._idh.setHost(_this);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxPopupComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxPopupComponent.prototype, "animation", {
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
        Object.defineProperty(DxPopupComponent.prototype, "closeOnBackButton", {
            /**
             * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
             */
            get: function () {
                return this._getOption('closeOnBackButton');
            },
            set: function (value) {
                this._setOption('closeOnBackButton', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "closeOnOutsideClick", {
            /**
             * Specifies whether to close the widget if a user clicks outside it.
             */
            get: function () {
                return this._getOption('closeOnOutsideClick');
            },
            set: function (value) {
                this._setOption('closeOnOutsideClick', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "container", {
            /**
             * Specifies the container in which to place the widget.
             */
            get: function () {
                return this._getOption('container');
            },
            set: function (value) {
                this._setOption('container', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "contentTemplate", {
            /**
             * Specifies a custom template for the widget content.
             */
            get: function () {
                return this._getOption('contentTemplate');
            },
            set: function (value) {
                this._setOption('contentTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "deferRendering", {
            /**
             * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
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
        Object.defineProperty(DxPopupComponent.prototype, "disabled", {
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
        Object.defineProperty(DxPopupComponent.prototype, "dragEnabled", {
            /**
             * Specifies whether or not to allow a user to drag the popup window.
             */
            get: function () {
                return this._getOption('dragEnabled');
            },
            set: function (value) {
                this._setOption('dragEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxPopupComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxPopupComponent.prototype, "fullScreen", {
            /**
             * A Boolean value specifying whether or not to display the widget in full-screen mode.
             */
            get: function () {
                return this._getOption('fullScreen');
            },
            set: function (value) {
                this._setOption('fullScreen', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "height", {
            /**
             * Specifies the widget's height in pixels.
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
        Object.defineProperty(DxPopupComponent.prototype, "hint", {
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
        Object.defineProperty(DxPopupComponent.prototype, "hoverStateEnabled", {
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
        Object.defineProperty(DxPopupComponent.prototype, "maxHeight", {
            /**
             * Specifies the maximum height the widget can reach while resizing.
             */
            get: function () {
                return this._getOption('maxHeight');
            },
            set: function (value) {
                this._setOption('maxHeight', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "maxWidth", {
            /**
             * Specifies the maximum width the widget can reach while resizing.
             */
            get: function () {
                return this._getOption('maxWidth');
            },
            set: function (value) {
                this._setOption('maxWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "minHeight", {
            /**
             * Specifies the minimum height the widget can reach while resizing.
             */
            get: function () {
                return this._getOption('minHeight');
            },
            set: function (value) {
                this._setOption('minHeight', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "minWidth", {
            /**
             * Specifies the minimum width the widget can reach while resizing.
             */
            get: function () {
                return this._getOption('minWidth');
            },
            set: function (value) {
                this._setOption('minWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "position", {
            /**
             * Positions the widget.
             */
            get: function () {
                return this._getOption('position');
            },
            set: function (value) {
                this._setOption('position', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "resizeEnabled", {
            /**
             * Specifies whether or not an end user can resize the widget.
             */
            get: function () {
                return this._getOption('resizeEnabled');
            },
            set: function (value) {
                this._setOption('resizeEnabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxPopupComponent.prototype, "shading", {
            /**
             * Specifies whether to shade the background when the widget is active.
             */
            get: function () {
                return this._getOption('shading');
            },
            set: function (value) {
                this._setOption('shading', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "shadingColor", {
            /**
             * Specifies the shading color.
             */
            get: function () {
                return this._getOption('shadingColor');
            },
            set: function (value) {
                this._setOption('shadingColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "showCloseButton", {
            /**
             * Specifies whether or not the widget displays the Close button.
             */
            get: function () {
                return this._getOption('showCloseButton');
            },
            set: function (value) {
                this._setOption('showCloseButton', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "showTitle", {
            /**
             * A Boolean value specifying whether or not to display the title in the popup window.
             */
            get: function () {
                return this._getOption('showTitle');
            },
            set: function (value) {
                this._setOption('showTitle', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxPopupComponent.prototype, "title", {
            /**
             * The title in the overlay window.
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
        Object.defineProperty(DxPopupComponent.prototype, "titleTemplate", {
            /**
             * Specifies a custom template for the widget title. Does not apply if the title is defined.
             */
            get: function () {
                return this._getOption('titleTemplate');
            },
            set: function (value) {
                this._setOption('titleTemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "toolbarItems", {
            /**
             * Configures toolbar items.
             */
            get: function () {
                return this._getOption('toolbarItems');
            },
            set: function (value) {
                this._setOption('toolbarItems', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxPopupComponent.prototype, "visible", {
            /**
             * A Boolean value specifying whether or not the widget is visible.
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
        Object.defineProperty(DxPopupComponent.prototype, "width", {
            /**
             * Specifies the widget's width in pixels.
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
        Object.defineProperty(DxPopupComponent.prototype, "toolbarItemsChildren", {
            get: function () {
                return this._getOption('toolbarItems');
            },
            set: function (value) {
                this.setChildren('toolbarItems', value);
            },
            enumerable: true,
            configurable: true
        });
        DxPopupComponent.prototype._createInstance = function (element, options) {
            return new DxPopup(element, options);
        };
        DxPopupComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxPopupComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.setupChanges('toolbarItems', changes);
        };
        DxPopupComponent.prototype.setupChanges = function (prop, changes) {
            if (!(prop in this._optionsToUpdate)) {
                this._idh.setup(prop, changes);
            }
        };
        DxPopupComponent.prototype.ngDoCheck = function () {
            this._idh.doCheck('toolbarItems');
            this._watcherHelper.checkWatchers();
            _super.prototype.ngDoCheck.call(this);
            _super.prototype.clearChangedOptions.call(this);
        };
        DxPopupComponent.prototype._setOption = function (name, value) {
            var isSetup = this._idh.setupSingle(name, value);
            var isChanged = this._idh.getChanges(name, value) !== null;
            if (isSetup || isChanged) {
                _super.prototype._setOption.call(this, name, value);
            }
        };
        DxPopupComponent.ctorParameters = function () { return [
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
        ], DxPopupComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "closeOnBackButton", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "closeOnOutsideClick", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "container", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "contentTemplate", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "deferRendering", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "dragEnabled", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "fullScreen", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "maxHeight", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "maxWidth", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "minHeight", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "minWidth", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "position", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "resizeEnabled", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "shading", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "shadingColor", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "showCloseButton", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "showTitle", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "title", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "titleTemplate", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "toolbarItems", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxPopupComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onHidden", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onHiding", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onResize", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onResizeEnd", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onResizeStart", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onShowing", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onShown", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "onTitleRendered", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "animationChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "closeOnBackButtonChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "closeOnOutsideClickChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "containerChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "contentTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "deferRenderingChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "dragEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "fullScreenChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "maxHeightChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "maxWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "minHeightChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "minWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "positionChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "resizeEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "shadingChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "shadingColorChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "showCloseButtonChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "showTitleChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "titleChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "titleTemplateChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "toolbarItemsChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxPopupComponent.prototype, "widthChange", void 0);
        __decorate([
            core.ContentChildren(nested.DxiToolbarItemComponent)
        ], DxPopupComponent.prototype, "toolbarItemsChildren", null);
        DxPopupComponent = __decorate([
            core.Component({
                selector: 'dx-popup',
                template: '<ng-content></ng-content>',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxPopupComponent);
        return DxPopupComponent;
    }(core$1.DxComponent));
    var DxPopupModule = /** @class */ (function () {
        function DxPopupModule() {
        }
        DxPopupModule = __decorate([
            core.NgModule({
                imports: [
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
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxPopupComponent
                ],
                exports: [
                    DxPopupComponent,
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
                    core$1.DxTemplateModule
                ]
            })
        ], DxPopupModule);
        return DxPopupModule;
    }());

    exports.DxPopupComponent = DxPopupComponent;
    exports.DxPopupModule = DxPopupModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-popup.umd.js.map
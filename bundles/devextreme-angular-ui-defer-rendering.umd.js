(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/defer_rendering'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/defer-rendering', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/defer_rendering', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['defer-rendering'] = {}), global.ng.platformBrowser, global.ng.core, global.DxDeferRendering, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxDeferRendering, core$1, nested) { 'use strict';

    DxDeferRendering = DxDeferRendering && DxDeferRendering.hasOwnProperty('default') ? DxDeferRendering['default'] : DxDeferRendering;

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
     * The DeferRendering is a widget that waits for its content to be ready before rendering it. While the content is getting ready, the DeferRendering displays a loading indicator.
     */
    var DxDeferRenderingComponent = /** @class */ (function (_super) {
        __extends(DxDeferRenderingComponent, _super);
        function DxDeferRenderingComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._createEventEmitters([
                { subscribe: 'contentReady', emit: 'onContentReady' },
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'rendered', emit: 'onRendered' },
                { subscribe: 'shown', emit: 'onShown' },
                { emit: 'accessKeyChange' },
                { emit: 'activeStateEnabledChange' },
                { emit: 'animationChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'focusStateEnabledChange' },
                { emit: 'heightChange' },
                { emit: 'hintChange' },
                { emit: 'hoverStateEnabledChange' },
                { emit: 'renderWhenChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'showLoadIndicatorChange' },
                { emit: 'staggerItemSelectorChange' },
                { emit: 'tabIndexChange' },
                { emit: 'visibleChange' },
                { emit: 'widthChange' }
            ]);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxDeferRenderingComponent.prototype, "accessKey", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "activeStateEnabled", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "animation", {
            /**
             * Specifies the animation to be used to show the rendered content.
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "disabled", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "focusStateEnabled", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "height", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "hint", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "hoverStateEnabled", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "renderWhen", {
            /**
             * Specifies when the widget content is rendered.
             */
            get: function () {
                return this._getOption('renderWhen');
            },
            set: function (value) {
                this._setOption('renderWhen', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDeferRenderingComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "showLoadIndicator", {
            /**
             * Indicates if a load indicator should be shown until the widget's content is rendered.
             */
            get: function () {
                return this._getOption('showLoadIndicator');
            },
            set: function (value) {
                this._setOption('showLoadIndicator', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDeferRenderingComponent.prototype, "staggerItemSelector", {
            /**
             * Specifies a jQuery selector of items that should be rendered using a staggered animation.
             */
            get: function () {
                return this._getOption('staggerItemSelector');
            },
            set: function (value) {
                this._setOption('staggerItemSelector', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxDeferRenderingComponent.prototype, "tabIndex", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "visible", {
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
        Object.defineProperty(DxDeferRenderingComponent.prototype, "width", {
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
        DxDeferRenderingComponent.prototype._createInstance = function (element, options) {
            return new DxDeferRendering(element, options);
        };
        DxDeferRenderingComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxDeferRenderingComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: core$1.DxTemplateHost },
            { type: core$1.WatcherHelper },
            { type: core$1.NestedOptionHost },
            { type: platformBrowser.TransferState },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "renderWhen", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "showLoadIndicator", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "staggerItemSelector", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxDeferRenderingComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "onRendered", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "onShown", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "animationChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "renderWhenChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "showLoadIndicatorChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "staggerItemSelectorChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxDeferRenderingComponent.prototype, "widthChange", void 0);
        DxDeferRenderingComponent = __decorate([
            core.Component({
                selector: 'dx-defer-rendering',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost
                ]
            }),
            __param(6, core.Inject(core.PLATFORM_ID))
        ], DxDeferRenderingComponent);
        return DxDeferRenderingComponent;
    }(core$1.DxComponent));
    var DxDeferRenderingModule = /** @class */ (function () {
        function DxDeferRenderingModule() {
        }
        DxDeferRenderingModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoAnimationModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxDeferRenderingComponent
                ],
                exports: [
                    DxDeferRenderingComponent,
                    nested.DxoAnimationModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxDeferRenderingModule);
        return DxDeferRenderingModule;
    }());

    exports.DxDeferRenderingComponent = DxDeferRenderingComponent;
    exports.DxDeferRenderingModule = DxDeferRenderingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-defer-rendering.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/viz/bullet'), require('devextreme-angular/core'), require('devextreme-angular/ui/nested')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/bullet', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/viz/bullet', 'devextreme-angular/core', 'devextreme-angular/ui/nested'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui.bullet = {}), global.ng.platformBrowser, global.ng.core, global.DxBullet, global['devextreme-angular'].core, global['devextreme-angular'].ui.nested));
}(this, function (exports, platformBrowser, core, DxBullet, core$1, nested) { 'use strict';

    DxBullet = DxBullet && DxBullet.hasOwnProperty('default') ? DxBullet['default'] : DxBullet;

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
     * The Bullet widget is useful when you need to compare a single measure to a target value. The widget comprises a horizontal bar indicating the measure and a vertical line indicating the target value.
     */
    var DxBulletComponent = /** @class */ (function (_super) {
        __extends(DxBulletComponent, _super);
        function DxBulletComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
            var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
            _this._createEventEmitters([
                { subscribe: 'disposing', emit: 'onDisposing' },
                { subscribe: 'drawn', emit: 'onDrawn' },
                { subscribe: 'exported', emit: 'onExported' },
                { subscribe: 'exporting', emit: 'onExporting' },
                { subscribe: 'fileSaving', emit: 'onFileSaving' },
                { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
                { subscribe: 'initialized', emit: 'onInitialized' },
                { subscribe: 'optionChanged', emit: 'onOptionChanged' },
                { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
                { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
                { emit: 'colorChange' },
                { emit: 'disabledChange' },
                { emit: 'elementAttrChange' },
                { emit: 'endScaleValueChange' },
                { emit: 'marginChange' },
                { emit: 'pathModifiedChange' },
                { emit: 'rtlEnabledChange' },
                { emit: 'showTargetChange' },
                { emit: 'showZeroLevelChange' },
                { emit: 'sizeChange' },
                { emit: 'startScaleValueChange' },
                { emit: 'targetChange' },
                { emit: 'targetColorChange' },
                { emit: 'targetWidthChange' },
                { emit: 'themeChange' },
                { emit: 'tooltipChange' },
                { emit: 'valueChange' }
            ]);
            optionHost.setHost(_this);
            return _this;
        }
        Object.defineProperty(DxBulletComponent.prototype, "color", {
            /**
             * Specifies a color for the bullet bar.
             */
            get: function () {
                return this._getOption('color');
            },
            set: function (value) {
                this._setOption('color', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBulletComponent.prototype, "disabled", {
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
        Object.defineProperty(DxBulletComponent.prototype, "elementAttr", {
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
        Object.defineProperty(DxBulletComponent.prototype, "endScaleValue", {
            /**
             * Specifies an end value for the invisible scale.
             */
            get: function () {
                return this._getOption('endScaleValue');
            },
            set: function (value) {
                this._setOption('endScaleValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBulletComponent.prototype, "margin", {
            /**
             * Generates space around the widget.
             */
            get: function () {
                return this._getOption('margin');
            },
            set: function (value) {
                this._setOption('margin', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBulletComponent.prototype, "pathModified", {
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
        Object.defineProperty(DxBulletComponent.prototype, "rtlEnabled", {
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
        Object.defineProperty(DxBulletComponent.prototype, "showTarget", {
            /**
             * Specifies whether or not to show the target line.
             */
            get: function () {
                return this._getOption('showTarget');
            },
            set: function (value) {
                this._setOption('showTarget', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBulletComponent.prototype, "showZeroLevel", {
            /**
             * Specifies whether or not to show the line indicating zero on the invisible scale.
             */
            get: function () {
                return this._getOption('showZeroLevel');
            },
            set: function (value) {
                this._setOption('showZeroLevel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBulletComponent.prototype, "size", {
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
        Object.defineProperty(DxBulletComponent.prototype, "startScaleValue", {
            /**
             * Specifies a start value for the invisible scale.
             */
            get: function () {
                return this._getOption('startScaleValue');
            },
            set: function (value) {
                this._setOption('startScaleValue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBulletComponent.prototype, "target", {
            /**
             * Specifies the value indicated by the target line.
             */
            get: function () {
                return this._getOption('target');
            },
            set: function (value) {
                this._setOption('target', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBulletComponent.prototype, "targetColor", {
            /**
             * Specifies a color for both the target and zero level lines.
             */
            get: function () {
                return this._getOption('targetColor');
            },
            set: function (value) {
                this._setOption('targetColor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBulletComponent.prototype, "targetWidth", {
            /**
             * Specifies the width of the target line.
             */
            get: function () {
                return this._getOption('targetWidth');
            },
            set: function (value) {
                this._setOption('targetWidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DxBulletComponent.prototype, "theme", {
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
        Object.defineProperty(DxBulletComponent.prototype, "tooltip", {
            /**
             * Configures the tooltip.
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
        Object.defineProperty(DxBulletComponent.prototype, "value", {
            /**
             * Specifies the primary value indicated by the bullet bar.
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
        DxBulletComponent.prototype._createInstance = function (element, options) {
            return new DxBullet(element, options);
        };
        DxBulletComponent.prototype.ngOnDestroy = function () {
            this._destroyWidget();
        };
        DxBulletComponent.ctorParameters = function () { return [
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
        ], DxBulletComponent.prototype, "color", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "endScaleValue", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "margin", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "pathModified", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "showTarget", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "showZeroLevel", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "startScaleValue", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "target", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "targetColor", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "targetWidth", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], DxBulletComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onDrawn", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onExported", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onExporting", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onFileSaving", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onIncidentOccurred", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onTooltipHidden", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "onTooltipShown", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "colorChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "endScaleValueChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "marginChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "pathModifiedChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "showTargetChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "showZeroLevelChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "sizeChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "startScaleValueChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "targetChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "targetColorChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "targetWidthChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "themeChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "tooltipChange", void 0);
        __decorate([
            core.Output()
        ], DxBulletComponent.prototype, "valueChange", void 0);
        DxBulletComponent = __decorate([
            core.Component({
                selector: 'dx-bullet',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    core$1.NestedOptionHost
                ],
                styles: [' :host {  display: block; }']
            }),
            __param(6, core.Inject(core.PLATFORM_ID))
        ], DxBulletComponent);
        return DxBulletComponent;
    }(core$1.DxComponent));
    var DxBulletModule = /** @class */ (function () {
        function DxBulletModule() {
        }
        DxBulletModule = __decorate([
            core.NgModule({
                imports: [
                    nested.DxoMarginModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxoBorderModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoShadowModule,
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxBulletComponent
                ],
                exports: [
                    DxBulletComponent,
                    nested.DxoMarginModule,
                    nested.DxoSizeModule,
                    nested.DxoTooltipModule,
                    nested.DxoBorderModule,
                    nested.DxoFontModule,
                    nested.DxoFormatModule,
                    nested.DxoShadowModule,
                    core$1.DxTemplateModule
                ]
            })
        ], DxBulletModule);
        return DxBulletModule;
    }());

    exports.DxBulletComponent = DxBulletComponent;
    exports.DxBulletModule = DxBulletModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-bullet.umd.js.map

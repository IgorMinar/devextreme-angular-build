(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser'), require('devextreme/core/dom_adapter'), require('devextreme/events'), require('devextreme/core/renderer'), require('@angular/common/http'), require('devextreme/core/http_request'), require('devextreme/core/utils/ready_callbacks'), require('devextreme/events/core/events_engine'), require('devextreme/core/utils/ajax'), require('devextreme/core/utils/deferred'), require('devextreme/core/utils/common')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/core', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser', 'devextreme/core/dom_adapter', 'devextreme/events', 'devextreme/core/renderer', '@angular/common/http', 'devextreme/core/http_request', 'devextreme/core/utils/ready_callbacks', 'devextreme/events/core/events_engine', 'devextreme/core/utils/ajax', 'devextreme/core/utils/deferred', 'devextreme/core/utils/common'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].core = {}), global.ng.core, global.ng.common, global.ng.platformBrowser, global.dom_adapter, global.events, global.render, global.ng.common.http, global.http_request, global.ready_callbacks, global.events_engine, global.ajax, global.deferred, global.common$1));
}(this, function (exports, core, common, platformBrowser, dom_adapter, events, render, http, http_request, ready_callbacks, events_engine, ajax, deferred, common$1) { 'use strict';

    render = render && render.hasOwnProperty('default') ? render['default'] : render;

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
    var NgEventsStrategy = /** @class */ (function () {
        function NgEventsStrategy(instance) {
            this.instance = instance;
            this.subscriptions = {};
            this.events = {};
        }
        NgEventsStrategy.prototype.hasEvent = function (name) {
            return this.getEmitter(name).observers.length !== 0;
        };
        NgEventsStrategy.prototype.fireEvent = function (name, args) {
            var emitter = this.getEmitter(name);
            if (emitter.observers.length) {
                emitter.next(args && args[0]);
            }
        };
        NgEventsStrategy.prototype.on = function (name, handler) {
            var eventSubscriptions = this.subscriptions[name] || [], subcription = this.getEmitter(name).subscribe(handler.bind(this.instance)), unsubscribe = subcription.unsubscribe.bind(subcription);
            eventSubscriptions.push({ handler: handler, unsubscribe: unsubscribe });
            this.subscriptions[name] = eventSubscriptions;
        };
        NgEventsStrategy.prototype.off = function (name, handler) {
            var eventSubscriptions = this.subscriptions[name] || [];
            if (handler) {
                eventSubscriptions.some(function (subscription, i) {
                    if (subscription.handler === handler) {
                        subscription.unsubscribe();
                        eventSubscriptions.splice(i, 1);
                        return true;
                    }
                });
            }
            else {
                eventSubscriptions.forEach(function (subscription) {
                    subscription.unsubscribe();
                });
                eventSubscriptions.splice(0, eventSubscriptions.length);
            }
        };
        NgEventsStrategy.prototype.dispose = function () { };
        NgEventsStrategy.prototype.addEmitter = function (eventName, emitter) {
            this.events[eventName] = emitter;
        };
        NgEventsStrategy.prototype.getEmitter = function (eventName) {
            if (!this.events[eventName]) {
                this.events[eventName] = new core.EventEmitter();
            }
            return this.events[eventName];
        };
        return NgEventsStrategy;
    }());
    var EmitterHelper = /** @class */ (function () {
        function EmitterHelper(zone, component) {
            this.zone = zone;
            this.component = component;
            this.lockedValueChangeEvent = false;
        }
        EmitterHelper.prototype.fireNgEvent = function (eventName, eventArgs) {
            if (this.lockedValueChangeEvent && eventName === 'valueChange') {
                return;
            }
            var emitter = this.component[eventName];
            if (emitter && emitter.observers.length) {
                this.zone.run(function () {
                    emitter.next(eventArgs && eventArgs[0]);
                });
            }
        };
        EmitterHelper.prototype.createEmitters = function (events) {
            var _this = this;
            events.forEach(function (event) {
                _this.component[event.emit] = new core.EventEmitter();
            });
        };
        return EmitterHelper;
    }());

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
    ;
    var DxTemplateHost = /** @class */ (function () {
        function DxTemplateHost() {
        }
        DxTemplateHost.prototype.setHost = function (host) {
            this.host = host;
        };
        DxTemplateHost.prototype.setTemplate = function (template) {
            this.host.setTemplate(template);
        };
        return DxTemplateHost;
    }());

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
    function getElement(element) {
        return element.get ? element.get(0) : element;
    }
    ;

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
    var DX_TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
    var RenderData = /** @class */ (function () {
        function RenderData() {
        }
        return RenderData;
    }());
    var DxTemplateDirective = /** @class */ (function () {
        function DxTemplateDirective(templateRef, viewContainerRef, templateHost, renderer, zone) {
            this.templateRef = templateRef;
            this.viewContainerRef = viewContainerRef;
            this.renderer = renderer;
            this.zone = zone;
            templateHost.setTemplate(this);
        }
        Object.defineProperty(DxTemplateDirective.prototype, "dxTemplateOf", {
            set: function (value) {
                this.name = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        DxTemplateDirective.prototype.renderTemplate = function (renderData) {
            var _this = this;
            var childView = this.viewContainerRef.createEmbeddedView(this.templateRef, {
                '$implicit': renderData.model,
                index: renderData.index
            });
            var container = getElement(renderData.container);
            if (renderData.container) {
                childView.rootNodes.forEach(function (element) {
                    _this.renderer.appendChild(container, element);
                });
            }
            return childView;
        };
        DxTemplateDirective.prototype.render = function (renderData) {
            var _this = this;
            var childView;
            if (this.zone.isStable) {
                childView = this.zone.run(function () {
                    return _this.renderTemplate(renderData);
                });
            }
            else {
                childView = this.renderTemplate(renderData);
                // =========== WORKAROUND =============
                // https://github.com/angular/angular/issues/12243
                childView['detectChanges']();
                // =========== /WORKAROUND =============
            }
            childView.rootNodes.forEach(function (element) {
                if (element.nodeType === 1) {
                    _this.renderer.addClass(element, DX_TEMPLATE_WRAPPER_CLASS);
                }
                events.one(element, 'dxremove', function (_a, params) {
                    if (!params || !params._angularIntegration) {
                        childView.destroy();
                    }
                });
            });
            return childView.rootNodes;
        };
        DxTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef },
            { type: DxTemplateHost },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        __decorate([
            core.Input()
        ], DxTemplateDirective.prototype, "dxTemplateOf", null);
        DxTemplateDirective = __decorate([
            core.Directive({
                selector: '[dxTemplate]'
            })
        ], DxTemplateDirective);
        return DxTemplateDirective;
    }());
    var DxTemplateModule = /** @class */ (function () {
        function DxTemplateModule() {
        }
        DxTemplateModule = __decorate([
            core.NgModule({
                declarations: [DxTemplateDirective],
                exports: [DxTemplateDirective]
            })
        ], DxTemplateModule);
        return DxTemplateModule;
    }());

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
    var VISIBILITY_CHANGE_SELECTOR = 'dx-visibility-change-handler';
    var BaseNestedOption = /** @class */ (function () {
        function BaseNestedOption() {
            this._initialOptions = {};
            this._collectionContainerImpl = new CollectionNestedOptionContainerImpl(this._setOption.bind(this), this._filterItems.bind(this));
        }
        BaseNestedOption.prototype._optionChangedHandler = function (e) {
            var fullOptionPath = this._fullOptionPath();
            if (e.fullName.indexOf(fullOptionPath) === 0) {
                var optionName = e.fullName.slice(fullOptionPath.length);
                var emitter = this[optionName + 'Change'];
                if (emitter) {
                    emitter.next(e.value);
                }
            }
        };
        BaseNestedOption.prototype._createEventEmitters = function (events) {
            var _this = this;
            events.forEach(function (event) {
                _this[event.emit] = new core.EventEmitter();
            });
        };
        BaseNestedOption.prototype._getOption = function (name) {
            if (this.isLinked) {
                return this.instance.option(this._fullOptionPath() + name);
            }
            else {
                return this._initialOptions[name];
            }
        };
        BaseNestedOption.prototype._setOption = function (name, value) {
            if (this.isLinked) {
                this.instance.option(this._fullOptionPath() + name, value);
            }
            else {
                this._initialOptions[name] = value;
            }
        };
        BaseNestedOption.prototype.setHost = function (host, optionPath) {
            this._host = host;
            this._hostOptionPath = optionPath;
            this.optionChangedHandlers.subscribe(this._optionChangedHandler.bind(this));
        };
        BaseNestedOption.prototype.setChildren = function (propertyName, items) {
            return this._collectionContainerImpl.setChildren(propertyName, items);
        };
        BaseNestedOption.prototype._filterItems = function (items) {
            var _this = this;
            return items.filter(function (item) { return item !== _this; });
        };
        Object.defineProperty(BaseNestedOption.prototype, "instance", {
            get: function () {
                return this._host && this._host.instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseNestedOption.prototype, "isLinked", {
            get: function () {
                return !!this.instance && this._host.isLinked;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseNestedOption.prototype, "optionChangedHandlers", {
            get: function () {
                return this._host && this._host.optionChangedHandlers;
            },
            enumerable: true,
            configurable: true
        });
        return BaseNestedOption;
    }());
    var CollectionNestedOptionContainerImpl = /** @class */ (function () {
        function CollectionNestedOptionContainerImpl(_setOption, _filterItems) {
            this._setOption = _setOption;
            this._filterItems = _filterItems;
            this._activatedQueries = {};
        }
        CollectionNestedOptionContainerImpl.prototype.setChildren = function (propertyName, items) {
            if (this._filterItems) {
                items = this._filterItems(items);
            }
            if (items.length) {
                this._activatedQueries[propertyName] = true;
            }
            if (this._activatedQueries[propertyName]) {
                var widgetItems = items.map(function (item, index) {
                    item._index = index;
                    return item._value;
                });
                this._setOption(propertyName, widgetItems);
            }
        };
        return CollectionNestedOptionContainerImpl;
    }());
    var NestedOption = /** @class */ (function (_super) {
        __extends(NestedOption, _super);
        function NestedOption() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NestedOption.prototype.setHost = function (host, optionPath) {
            _super.prototype.setHost.call(this, host, optionPath);
            this._host[this._optionPath] = this._initialOptions;
        };
        NestedOption.prototype._fullOptionPath = function () {
            return this._hostOptionPath() + this._optionPath + '.';
        };
        return NestedOption;
    }(BaseNestedOption));
    var CollectionNestedOption = /** @class */ (function (_super) {
        __extends(CollectionNestedOption, _super);
        function CollectionNestedOption() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollectionNestedOption.prototype._fullOptionPath = function () {
            return this._hostOptionPath() + this._optionPath + '[' + this._index + ']' + '.';
        };
        Object.defineProperty(CollectionNestedOption.prototype, "_value", {
            get: function () {
                return this._initialOptions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CollectionNestedOption.prototype, "isLinked", {
            get: function () {
                return this._index !== undefined && !!this.instance && this._host.isLinked;
            },
            enumerable: true,
            configurable: true
        });
        return CollectionNestedOption;
    }(BaseNestedOption));
    var triggerShownEvent = function (element) {
        var changeHandlers = [];
        if (!render(element).hasClass(VISIBILITY_CHANGE_SELECTOR)) {
            changeHandlers.push(element);
        }
        changeHandlers.push.apply(changeHandlers, element.querySelectorAll('.' + VISIBILITY_CHANGE_SELECTOR));
        for (var i = 0; i < changeHandlers.length; i++) {
            events.triggerHandler(changeHandlers[i], 'dxshown');
        }
    };
    var ɵ0 = triggerShownEvent;
    function extractTemplate(option, element, renderer, document) {
        if (!option.template === undefined || !element.nativeElement.hasChildNodes()) {
            return;
        }
        var childNodes = [].slice.call(element.nativeElement.childNodes);
        var userContent = childNodes.filter(function (n) {
            if (n.tagName) {
                var tagNamePrefix = n.tagName.toLowerCase().substr(0, 3);
                return !(tagNamePrefix === 'dxi' || tagNamePrefix === 'dxo');
            }
            else {
                return n.nodeName !== '#comment' && n.textContent.replace(/\s/g, '').length;
            }
        });
        if (!userContent.length) {
            return;
        }
        option.template = {
            render: function (renderData) {
                var result = element.nativeElement;
                renderer.addClass(result, DX_TEMPLATE_WRAPPER_CLASS);
                if (renderData.container) {
                    var container = getElement(renderData.container);
                    var resultInContainer = container.contains(element.nativeElement);
                    renderer.appendChild(container, element.nativeElement);
                    if (!resultInContainer) {
                        var resultInBody = document.body.contains(container);
                        if (resultInBody) {
                            triggerShownEvent(result);
                        }
                    }
                }
                return result;
            }
        };
    }
    var NestedOptionHost = /** @class */ (function () {
        function NestedOptionHost() {
        }
        NestedOptionHost.prototype.setHost = function (host, optionPath) {
            this._host = host;
            this._optionPath = optionPath || (function () { return ''; });
        };
        NestedOptionHost.prototype.setNestedOption = function (nestedOption) {
            nestedOption.setHost(this._host, this._optionPath);
        };
        return NestedOptionHost;
    }());

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
    var IS_PLATFORM_SERVER = platformBrowser.makeStateKey('DX_isPlatformServer');
    var DxComponent = /** @class */ (function () {
        function DxComponent(element, ngZone, templateHost, watcherHelper, transferState, platformId) {
            this.element = element;
            this.watcherHelper = watcherHelper;
            this.transferState = transferState;
            this.platformId = platformId;
            this._initialOptions = {};
            this._optionsToUpdate = {};
            this.optionChangedHandlers = new core.EventEmitter();
            this.isLinked = true;
            this.changedOptions = {};
            this.createInstanceOnInit = true;
            this.widgetUpdateLocked = false;
            this.templates = [];
            templateHost.setHost(this);
            this._collectionContainerImpl = new CollectionNestedOptionContainerImpl(this._setOption.bind(this));
            this.eventHelper = new EmitterHelper(ngZone, this);
        }
        DxComponent.prototype._initTemplates = function () {
            if (this.templates.length) {
                var initialTemplates_1 = {};
                this.templates.forEach(function (template) {
                    initialTemplates_1[template.name] = template;
                });
                this.instance.option('integrationOptions.templates', initialTemplates_1);
            }
        };
        DxComponent.prototype._initEvents = function () {
            var _this = this;
            this.instance.on('optionChanged', function (e) {
                _this.changedOptions[e.name] = e.value;
                var value = e.name === e.fullName ? e.value : e.component.option(e.name);
                _this.eventHelper.fireNgEvent(e.name + 'Change', [value]);
                _this.optionChangedHandlers.emit(e);
            });
        };
        DxComponent.prototype._initOptions = function () {
            this._initialOptions.integrationOptions.watchMethod = this.watcherHelper.getWatchMethod();
        };
        DxComponent.prototype._initPlatform = function () {
            if (this.transferState.hasKey(IS_PLATFORM_SERVER)) {
                this._initialOptions.integrationOptions.renderedOnServer = this.transferState.get(IS_PLATFORM_SERVER, null);
            }
            else if (common.isPlatformServer(this.platformId)) {
                this.transferState.set(IS_PLATFORM_SERVER, true);
            }
        };
        DxComponent.prototype._createEventEmitters = function (events) {
            var _this = this;
            this.eventHelper.createEmitters(events);
            this._initialOptions.eventsStrategy = function (instance) {
                var strategy = new NgEventsStrategy(instance);
                events.filter(function (event) { return event.subscribe; }).forEach(function (event) {
                    strategy.addEmitter(event.subscribe, _this[event.emit]);
                });
                return strategy;
            };
            this._initialOptions.nestedComponentOptions = function (component) {
                return {
                    eventsStrategy: function (instance) { return new NgEventsStrategy(instance); },
                    nestedComponentOptions: component.option('nestedComponentOptions')
                };
            };
        };
        DxComponent.prototype._shouldOptionChange = function (name, value) {
            if (this.changedOptions.hasOwnProperty(name)) {
                var prevValue = this.changedOptions[name];
                delete this.changedOptions[name];
                return value !== prevValue;
            }
            return true;
        };
        DxComponent.prototype.clearChangedOptions = function () {
            this.changedOptions = {};
        };
        DxComponent.prototype._getOption = function (name) {
            return this.instance ?
                this.instance.option(name) :
                this._initialOptions[name];
        };
        DxComponent.prototype.lockWidgetUpdate = function () {
            if (!this.widgetUpdateLocked && this.instance) {
                this.instance.beginUpdate();
                this.widgetUpdateLocked = true;
            }
        };
        DxComponent.prototype.unlockWidgetUpdate = function () {
            if (this.widgetUpdateLocked) {
                this.widgetUpdateLocked = false;
                this.instance.endUpdate();
            }
        };
        DxComponent.prototype._setOption = function (name, value) {
            this.lockWidgetUpdate();
            if (!this._shouldOptionChange(name, value)) {
                return;
            }
            if (this.instance) {
                this.instance.option(name, value);
            }
            else {
                this._initialOptions[name] = value;
            }
        };
        DxComponent.prototype._createWidget = function (element) {
            this._initialOptions.integrationOptions = {};
            this._initPlatform();
            this._initOptions();
            var createInstanceOnInit = this.createInstanceOnInit;
            this._initialOptions.onInitializing = function () {
                if (createInstanceOnInit) {
                    this.beginUpdate();
                }
            };
            this.instance = this._createInstance(element, this._initialOptions);
            this._initEvents();
            this._initialOptions = {};
        };
        DxComponent.prototype._destroyWidget = function () {
            if (this.instance) {
                var element = this.instance.element();
                events.triggerHandler(element, 'dxremove', { _angularIntegration: true });
                this.instance.dispose();
                dom_adapter.removeElement(element);
            }
        };
        DxComponent.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                var change = changes[key];
                if (change.currentValue !== this[key]) {
                    this._optionsToUpdate[key] = changes[key].currentValue;
                }
            }
        };
        DxComponent.prototype.ngOnInit = function () {
            if (this.createInstanceOnInit) {
                this._createWidget(this.element.nativeElement);
            }
        };
        DxComponent.prototype.ngDoCheck = function () {
            this.applyOptions();
        };
        DxComponent.prototype.ngAfterContentChecked = function () {
            this.applyOptions();
            this.unlockWidgetUpdate();
        };
        DxComponent.prototype.ngAfterViewInit = function () {
            this._initTemplates();
            if (this.createInstanceOnInit) {
                this.instance.endUpdate();
            }
        };
        DxComponent.prototype.applyOptions = function () {
            if (Object.keys(this._optionsToUpdate).length) {
                if (this.instance) {
                    this.instance.option(this._optionsToUpdate);
                }
                this._optionsToUpdate = {};
            }
        };
        DxComponent.prototype.setTemplate = function (template) {
            this.templates.push(template);
        };
        DxComponent.prototype.setChildren = function (propertyName, items) {
            return this._collectionContainerImpl.setChildren(propertyName, items);
        };
        DxComponent = __decorate([
            __param(5, core.Inject(core.PLATFORM_ID))
        ], DxComponent);
        return DxComponent;
    }());
    var DxComponentExtension = /** @class */ (function (_super) {
        __extends(DxComponentExtension, _super);
        function DxComponentExtension() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DxComponentExtension.prototype.createInstance = function (element) {
            this._createWidget(element);
        };
        return DxComponentExtension;
    }(DxComponent));

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
    var outsideZoneEvents = ['mousemove', 'mouseover', 'mouseout'];
    var insideZoneEvents = ['mouseup', 'click', 'mousedown', 'transitionend', 'wheel'];
    var originalAdd;
    var callbacks = [];
    ready_callbacks.inject({
        add: function (callback) {
            originalAdd = this.callBase.bind(this);
            callbacks.push(callback);
        }
    });
    var DxIntegrationModule = /** @class */ (function () {
        function DxIntegrationModule(document, ngZone, xhrFactory) {
            dom_adapter.inject({
                _document: document,
                listen: function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var eventName = args[1];
                    if (outsideZoneEvents.indexOf(eventName) !== -1) {
                        return ngZone.runOutsideAngular(function () {
                            return _this.callBase.apply(_this, args);
                        });
                    }
                    if (ngZone.isStable && insideZoneEvents.indexOf(eventName) !== -1) {
                        return ngZone.run(function () {
                            return _this.callBase.apply(_this, args);
                        });
                    }
                    return this.callBase.apply(this, args);
                },
                isElementNode: function (element) {
                    return element && element.nodeType === 1;
                },
                isTextNode: function (element) {
                    return element && element.nodeType === 3;
                },
                isDocument: function (element) {
                    return element && element.nodeType === 9;
                }
            });
            http_request.inject({
                getXhr: function () {
                    if (!xhrFactory) {
                        return this.callBase.apply(this);
                    }
                    var _xhr = xhrFactory.build();
                    if (!('withCredentials' in _xhr)) {
                        _xhr['withCredentials'] = false;
                    }
                    return _xhr;
                }
            });
            ngZone.run(function () {
                events_engine.set({});
                callbacks.forEach(function (callback) { return originalAdd.call(null, callback); });
                callbacks = [];
                ready_callbacks.fire();
            });
        }
        DxIntegrationModule.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.NgZone },
            { type: http.XhrFactory, decorators: [{ type: core.Optional }] }
        ]; };
        DxIntegrationModule = __decorate([
            core.NgModule({}),
            __param(0, core.Inject(common.DOCUMENT)), __param(2, core.Optional())
        ], DxIntegrationModule);
        return DxIntegrationModule;
    }());

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
    var IterableDifferHelper = /** @class */ (function () {
        function IterableDifferHelper(_differs) {
            this._differs = _differs;
            this._propertyDiffers = {};
        }
        IterableDifferHelper.prototype.setHost = function (host) {
            this._host = host;
        };
        IterableDifferHelper.prototype.setup = function (prop, changes) {
            if (prop in changes) {
                var value = changes[prop].currentValue;
                this.setupSingle(prop, value);
            }
        };
        IterableDifferHelper.prototype.setupSingle = function (prop, value) {
            if (value && Array.isArray(value)) {
                if (!this._propertyDiffers[prop]) {
                    try {
                        this._propertyDiffers[prop] = this._differs.find(value).create(null);
                        return true;
                    }
                    catch (e) { }
                }
            }
            else {
                delete this._propertyDiffers[prop];
            }
            return false;
        };
        IterableDifferHelper.prototype.getChanges = function (prop, value) {
            if (this._propertyDiffers[prop]) {
                return this._propertyDiffers[prop].diff(value);
            }
        };
        IterableDifferHelper.prototype.checkChangedOptions = function (propName, hostValue) {
            return this._host.changedOptions[propName] === hostValue;
        };
        ;
        IterableDifferHelper.prototype.doCheck = function (prop) {
            if (this._propertyDiffers[prop]) {
                var hostValue = this._host[prop], isChangedOption = this.checkChangedOptions(prop, hostValue);
                var changes = this.getChanges(prop, hostValue);
                if (changes && this._host.instance && !isChangedOption) {
                    this._host.lockWidgetUpdate();
                    this._host.instance.option(prop, hostValue);
                }
            }
        };
        IterableDifferHelper.ctorParameters = function () { return [
            { type: core.IterableDiffers }
        ]; };
        IterableDifferHelper = __decorate([
            core.Injectable()
        ], IterableDifferHelper);
        return IterableDifferHelper;
    }());

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
    var DxServerTransferStateModule = /** @class */ (function () {
        function DxServerTransferStateModule(state, platformId) {
            this.state = state;
            this.platformId = platformId;
            var that = this;
            ajax.inject({
                sendRequest: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var key = platformBrowser.makeStateKey(that.generateKey(args)), cachedData = that.state.get(key, null);
                    if (common.isPlatformServer(that.platformId)) {
                        var result = this.callBase.apply(this, args);
                        result.always(function (data, status) {
                            var dataForCache = {
                                data: data,
                                status: status
                            };
                            that.state.set(key, dataForCache);
                        });
                        return result;
                    }
                    else {
                        if (cachedData) {
                            var d = new deferred.Deferred();
                            d.resolve(cachedData.data, cachedData.status);
                            that.state.set(key, null);
                            return d.promise();
                        }
                        return this.callBase.apply(this, args);
                    }
                }
            });
        }
        DxServerTransferStateModule.prototype.generateKey = function (args) {
            var keyValue = '';
            for (var key in args) {
                if (typeof args[key] === 'object') {
                    var objKey = this.generateKey(args[key]);
                    keyValue += key + objKey;
                }
                else {
                    keyValue += key + args[key];
                }
            }
            return keyValue;
        };
        DxServerTransferStateModule.ctorParameters = function () { return [
            { type: platformBrowser.TransferState },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        DxServerTransferStateModule = __decorate([
            core.NgModule({
                imports: [
                    platformBrowser.BrowserTransferStateModule
                ]
            }),
            __param(1, core.Inject(core.PLATFORM_ID))
        ], DxServerTransferStateModule);
        return DxServerTransferStateModule;
    }());

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
    var WatcherHelper = /** @class */ (function () {
        function WatcherHelper() {
            this._watchers = [];
        }
        WatcherHelper.prototype.getWatchMethod = function () {
            var _this = this;
            var watchMethod = function (valueGetter, valueChangeCallback, options) {
                var oldValue = valueGetter();
                options = options || {};
                if (!options.skipImmediate) {
                    valueChangeCallback(oldValue);
                }
                var watcher = function () {
                    var newValue = valueGetter();
                    if (_this._isDifferentValues(oldValue, newValue, options.deep)) {
                        valueChangeCallback(newValue);
                        oldValue = newValue;
                    }
                };
                _this._watchers.push(watcher);
                return function () {
                    var index = _this._watchers.indexOf(watcher);
                    if (index !== -1) {
                        _this._watchers.splice(index, 1);
                    }
                };
            };
            return watchMethod;
        };
        WatcherHelper.prototype._isDifferentValues = function (oldValue, newValue, deepCheck) {
            var comparableNewValue = this._toComparable(newValue);
            var comparableOldValue = this._toComparable(oldValue);
            var isObjectValues = comparableNewValue instanceof Object && comparableOldValue instanceof Object;
            if (deepCheck && isObjectValues) {
                return this._checkObjectsFields(newValue, oldValue);
            }
            return comparableNewValue !== comparableOldValue;
        };
        WatcherHelper.prototype._toComparable = function (value) {
            if (value instanceof Date) {
                return value.getTime();
            }
            return value;
        };
        WatcherHelper.prototype._checkObjectsFields = function (checkingFromObject, checkingToObject) {
            for (var field in checkingFromObject) {
                var oldValue = this._toComparable(checkingFromObject[field]);
                var newValue = this._toComparable(checkingToObject[field]);
                var isEqualObjects = false;
                if (typeof oldValue === 'object' && typeof newValue === 'object') {
                    isEqualObjects = common$1.equalByValue(oldValue, newValue);
                }
                if (oldValue !== newValue && !isEqualObjects) {
                    return true;
                }
            }
        };
        WatcherHelper.prototype.checkWatchers = function () {
            try {
                for (var _a = __values(this._watchers), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var watcher = _b.value;
                    watcher();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var e_1, _c;
        };
        WatcherHelper = __decorate([
            core.Injectable()
        ], WatcherHelper);
        return WatcherHelper;
    }());

    exports.BaseNestedOption = BaseNestedOption;
    exports.CollectionNestedOption = CollectionNestedOption;
    exports.CollectionNestedOptionContainerImpl = CollectionNestedOptionContainerImpl;
    exports.DX_TEMPLATE_WRAPPER_CLASS = DX_TEMPLATE_WRAPPER_CLASS;
    exports.DxComponent = DxComponent;
    exports.DxComponentExtension = DxComponentExtension;
    exports.DxIntegrationModule = DxIntegrationModule;
    exports.DxServerTransferStateModule = DxServerTransferStateModule;
    exports.DxTemplateDirective = DxTemplateDirective;
    exports.DxTemplateHost = DxTemplateHost;
    exports.DxTemplateModule = DxTemplateModule;
    exports.EmitterHelper = EmitterHelper;
    exports.IS_PLATFORM_SERVER = IS_PLATFORM_SERVER;
    exports.IterableDifferHelper = IterableDifferHelper;
    exports.NestedOption = NestedOption;
    exports.NestedOptionHost = NestedOptionHost;
    exports.NgEventsStrategy = NgEventsStrategy;
    exports.RenderData = RenderData;
    exports.WatcherHelper = WatcherHelper;
    exports.extractTemplate = extractTemplate;
    exports.getElement = getElement;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-core.umd.js.map

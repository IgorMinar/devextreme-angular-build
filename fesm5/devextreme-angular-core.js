import { __decorate, __extends, __param, __values } from 'tslib';
import { EventEmitter, TemplateRef, ViewContainerRef, Renderer2, NgZone, Input, Directive, NgModule, Inject, PLATFORM_ID, Optional, IterableDiffers, Injectable } from '@angular/core';
import { isPlatformServer, DOCUMENT } from '@angular/common';
import { makeStateKey, TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { removeElement, inject as inject$1 } from 'devextreme/core/dom_adapter';
import { one, triggerHandler } from 'devextreme/events';
import render from 'devextreme/core/renderer';
import { XhrFactory } from '@angular/common/http';
import { inject as inject$2 } from 'devextreme/core/http_request';
import { inject, fire } from 'devextreme/core/utils/ready_callbacks';
import { set } from 'devextreme/events/core/events_engine';
import { inject as inject$3 } from 'devextreme/core/utils/ajax';
import { Deferred } from 'devextreme/core/utils/deferred';
import { equalByValue } from 'devextreme/core/utils/common';

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
            this.events[eventName] = new EventEmitter();
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
            _this.component[event.emit] = new EventEmitter();
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
            one(element, 'dxremove', function (_a, params) {
                if (!params || !params._angularIntegration) {
                    childView.destroy();
                }
            });
        });
        return childView.rootNodes;
    };
    DxTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: DxTemplateHost },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    __decorate([
        Input()
    ], DxTemplateDirective.prototype, "dxTemplateOf", null);
    DxTemplateDirective = __decorate([
        Directive({
            selector: '[dxTemplate]'
        })
    ], DxTemplateDirective);
    return DxTemplateDirective;
}());
var DxTemplateModule = /** @class */ (function () {
    function DxTemplateModule() {
    }
    DxTemplateModule = __decorate([
        NgModule({
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
            _this[event.emit] = new EventEmitter();
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
        triggerHandler(changeHandlers[i], 'dxshown');
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
var IS_PLATFORM_SERVER = makeStateKey('DX_isPlatformServer');
var DxComponent = /** @class */ (function () {
    function DxComponent(element, ngZone, templateHost, watcherHelper, transferState, platformId) {
        this.element = element;
        this.watcherHelper = watcherHelper;
        this.transferState = transferState;
        this.platformId = platformId;
        this._initialOptions = {};
        this._optionsToUpdate = {};
        this.optionChangedHandlers = new EventEmitter();
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
        else if (isPlatformServer(this.platformId)) {
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
            triggerHandler(element, 'dxremove', { _angularIntegration: true });
            this.instance.dispose();
            removeElement(element);
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
        __param(5, Inject(PLATFORM_ID))
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
inject({
    add: function (callback) {
        originalAdd = this.callBase.bind(this);
        callbacks.push(callback);
    }
});
var DxIntegrationModule = /** @class */ (function () {
    function DxIntegrationModule(document, ngZone, xhrFactory) {
        inject$1({
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
        inject$2({
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
            set({});
            callbacks.forEach(function (callback) { return originalAdd.call(null, callback); });
            callbacks = [];
            fire();
        });
    }
    DxIntegrationModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone },
        { type: XhrFactory, decorators: [{ type: Optional }] }
    ]; };
    DxIntegrationModule = __decorate([
        NgModule({}),
        __param(0, Inject(DOCUMENT)), __param(2, Optional())
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
        { type: IterableDiffers }
    ]; };
    IterableDifferHelper = __decorate([
        Injectable()
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
        inject$3({
            sendRequest: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var key = makeStateKey(that.generateKey(args)), cachedData = that.state.get(key, null);
                if (isPlatformServer(that.platformId)) {
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
                        var d = new Deferred();
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
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    DxServerTransferStateModule = __decorate([
        NgModule({
            imports: [
                BrowserTransferStateModule
            ]
        }),
        __param(1, Inject(PLATFORM_ID))
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
                isEqualObjects = equalByValue(oldValue, newValue);
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
        Injectable()
    ], WatcherHelper);
    return WatcherHelper;
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

/**
 * Generated bundle index. Do not edit.
 */

export { BaseNestedOption, CollectionNestedOption, CollectionNestedOptionContainerImpl, DX_TEMPLATE_WRAPPER_CLASS, DxComponent, DxComponentExtension, DxIntegrationModule, DxServerTransferStateModule, DxTemplateDirective, DxTemplateHost, DxTemplateModule, EmitterHelper, IS_PLATFORM_SERVER, IterableDifferHelper, NestedOption, NestedOptionHost, NgEventsStrategy, RenderData, WatcherHelper, extractTemplate, getElement, ɵ0 };
//# sourceMappingURL=devextreme-angular-core.js.map

import { __decorate, __param } from 'tslib';
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
class NgEventsStrategy {
    constructor(instance) {
        this.instance = instance;
        this.subscriptions = {};
        this.events = {};
    }
    hasEvent(name) {
        return this.getEmitter(name).observers.length !== 0;
    }
    fireEvent(name, args) {
        let emitter = this.getEmitter(name);
        if (emitter.observers.length) {
            emitter.next(args && args[0]);
        }
    }
    on(name, handler) {
        let eventSubscriptions = this.subscriptions[name] || [], subcription = this.getEmitter(name).subscribe(handler.bind(this.instance)), unsubscribe = subcription.unsubscribe.bind(subcription);
        eventSubscriptions.push({ handler, unsubscribe });
        this.subscriptions[name] = eventSubscriptions;
    }
    off(name, handler) {
        let eventSubscriptions = this.subscriptions[name] || [];
        if (handler) {
            eventSubscriptions.some((subscription, i) => {
                if (subscription.handler === handler) {
                    subscription.unsubscribe();
                    eventSubscriptions.splice(i, 1);
                    return true;
                }
            });
        }
        else {
            eventSubscriptions.forEach(subscription => {
                subscription.unsubscribe();
            });
            eventSubscriptions.splice(0, eventSubscriptions.length);
        }
    }
    dispose() { }
    addEmitter(eventName, emitter) {
        this.events[eventName] = emitter;
    }
    getEmitter(eventName) {
        if (!this.events[eventName]) {
            this.events[eventName] = new EventEmitter();
        }
        return this.events[eventName];
    }
}
class EmitterHelper {
    constructor(zone, component) {
        this.zone = zone;
        this.component = component;
        this.lockedValueChangeEvent = false;
    }
    fireNgEvent(eventName, eventArgs) {
        if (this.lockedValueChangeEvent && eventName === 'valueChange') {
            return;
        }
        let emitter = this.component[eventName];
        if (emitter && emitter.observers.length) {
            this.zone.run(() => {
                emitter.next(eventArgs && eventArgs[0]);
            });
        }
    }
    createEmitters(events) {
        events.forEach(event => {
            this.component[event.emit] = new EventEmitter();
        });
    }
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
;
class DxTemplateHost {
    setHost(host) {
        this.host = host;
    }
    setTemplate(template) {
        this.host.setTemplate(template);
    }
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
const DX_TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
class RenderData {
}
let DxTemplateDirective = class DxTemplateDirective {
    constructor(templateRef, viewContainerRef, templateHost, renderer, zone) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.zone = zone;
        templateHost.setTemplate(this);
    }
    set dxTemplateOf(value) {
        this.name = value;
    }
    ;
    renderTemplate(renderData) {
        const childView = this.viewContainerRef.createEmbeddedView(this.templateRef, {
            '$implicit': renderData.model,
            index: renderData.index
        });
        const container = getElement(renderData.container);
        if (renderData.container) {
            childView.rootNodes.forEach((element) => {
                this.renderer.appendChild(container, element);
            });
        }
        return childView;
    }
    render(renderData) {
        let childView;
        if (this.zone.isStable) {
            childView = this.zone.run(() => {
                return this.renderTemplate(renderData);
            });
        }
        else {
            childView = this.renderTemplate(renderData);
            // =========== WORKAROUND =============
            // https://github.com/angular/angular/issues/12243
            childView['detectChanges']();
            // =========== /WORKAROUND =============
        }
        childView.rootNodes.forEach((element) => {
            if (element.nodeType === 1) {
                this.renderer.addClass(element, DX_TEMPLATE_WRAPPER_CLASS);
            }
            one(element, 'dxremove', ({}, params) => {
                if (!params || !params._angularIntegration) {
                    childView.destroy();
                }
            });
        });
        return childView.rootNodes;
    }
};
DxTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: DxTemplateHost },
    { type: Renderer2 },
    { type: NgZone }
];
__decorate([
    Input()
], DxTemplateDirective.prototype, "dxTemplateOf", null);
DxTemplateDirective = __decorate([
    Directive({
        selector: '[dxTemplate]'
    })
], DxTemplateDirective);
let DxTemplateModule = class DxTemplateModule {
};
DxTemplateModule = __decorate([
    NgModule({
        declarations: [DxTemplateDirective],
        exports: [DxTemplateDirective]
    })
], DxTemplateModule);

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
const VISIBILITY_CHANGE_SELECTOR = 'dx-visibility-change-handler';
class BaseNestedOption {
    constructor() {
        this._initialOptions = {};
        this._collectionContainerImpl = new CollectionNestedOptionContainerImpl(this._setOption.bind(this), this._filterItems.bind(this));
    }
    _optionChangedHandler(e) {
        let fullOptionPath = this._fullOptionPath();
        if (e.fullName.indexOf(fullOptionPath) === 0) {
            let optionName = e.fullName.slice(fullOptionPath.length);
            let emitter = this[optionName + 'Change'];
            if (emitter) {
                emitter.next(e.value);
            }
        }
    }
    _createEventEmitters(events) {
        events.forEach(event => {
            this[event.emit] = new EventEmitter();
        });
    }
    _getOption(name) {
        if (this.isLinked) {
            return this.instance.option(this._fullOptionPath() + name);
        }
        else {
            return this._initialOptions[name];
        }
    }
    _setOption(name, value) {
        if (this.isLinked) {
            this.instance.option(this._fullOptionPath() + name, value);
        }
        else {
            this._initialOptions[name] = value;
        }
    }
    setHost(host, optionPath) {
        this._host = host;
        this._hostOptionPath = optionPath;
        this.optionChangedHandlers.subscribe(this._optionChangedHandler.bind(this));
    }
    setChildren(propertyName, items) {
        return this._collectionContainerImpl.setChildren(propertyName, items);
    }
    _filterItems(items) {
        return items.filter((item) => { return item !== this; });
    }
    get instance() {
        return this._host && this._host.instance;
    }
    get isLinked() {
        return !!this.instance && this._host.isLinked;
    }
    get optionChangedHandlers() {
        return this._host && this._host.optionChangedHandlers;
    }
}
class CollectionNestedOptionContainerImpl {
    constructor(_setOption, _filterItems) {
        this._setOption = _setOption;
        this._filterItems = _filterItems;
        this._activatedQueries = {};
    }
    setChildren(propertyName, items) {
        if (this._filterItems) {
            items = this._filterItems(items);
        }
        if (items.length) {
            this._activatedQueries[propertyName] = true;
        }
        if (this._activatedQueries[propertyName]) {
            let widgetItems = items.map((item, index) => {
                item._index = index;
                return item._value;
            });
            this._setOption(propertyName, widgetItems);
        }
    }
}
class NestedOption extends BaseNestedOption {
    setHost(host, optionPath) {
        super.setHost(host, optionPath);
        this._host[this._optionPath] = this._initialOptions;
    }
    _fullOptionPath() {
        return this._hostOptionPath() + this._optionPath + '.';
    }
}
class CollectionNestedOption extends BaseNestedOption {
    _fullOptionPath() {
        return this._hostOptionPath() + this._optionPath + '[' + this._index + ']' + '.';
    }
    get _value() {
        return this._initialOptions;
    }
    get isLinked() {
        return this._index !== undefined && !!this.instance && this._host.isLinked;
    }
}
let triggerShownEvent = function (element) {
    let changeHandlers = [];
    if (!render(element).hasClass(VISIBILITY_CHANGE_SELECTOR)) {
        changeHandlers.push(element);
    }
    changeHandlers.push.apply(changeHandlers, element.querySelectorAll('.' + VISIBILITY_CHANGE_SELECTOR));
    for (let i = 0; i < changeHandlers.length; i++) {
        triggerHandler(changeHandlers[i], 'dxshown');
    }
};
const ɵ0 = triggerShownEvent;
function extractTemplate(option, element, renderer, document) {
    if (!option.template === undefined || !element.nativeElement.hasChildNodes()) {
        return;
    }
    let childNodes = [].slice.call(element.nativeElement.childNodes);
    let userContent = childNodes.filter((n) => {
        if (n.tagName) {
            let tagNamePrefix = n.tagName.toLowerCase().substr(0, 3);
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
        render: (renderData) => {
            let result = element.nativeElement;
            renderer.addClass(result, DX_TEMPLATE_WRAPPER_CLASS);
            if (renderData.container) {
                let container = getElement(renderData.container);
                let resultInContainer = container.contains(element.nativeElement);
                renderer.appendChild(container, element.nativeElement);
                if (!resultInContainer) {
                    let resultInBody = document.body.contains(container);
                    if (resultInBody) {
                        triggerShownEvent(result);
                    }
                }
            }
            return result;
        }
    };
}
class NestedOptionHost {
    setHost(host, optionPath) {
        this._host = host;
        this._optionPath = optionPath || (() => '');
    }
    setNestedOption(nestedOption) {
        nestedOption.setHost(this._host, this._optionPath);
    }
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
const IS_PLATFORM_SERVER = makeStateKey('DX_isPlatformServer');
let DxComponent = class DxComponent {
    constructor(element, ngZone, templateHost, watcherHelper, transferState, platformId) {
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
    _initTemplates() {
        if (this.templates.length) {
            let initialTemplates = {};
            this.templates.forEach(template => {
                initialTemplates[template.name] = template;
            });
            this.instance.option('integrationOptions.templates', initialTemplates);
        }
    }
    _initEvents() {
        this.instance.on('optionChanged', (e) => {
            this.changedOptions[e.name] = e.value;
            const value = e.name === e.fullName ? e.value : e.component.option(e.name);
            this.eventHelper.fireNgEvent(e.name + 'Change', [value]);
            this.optionChangedHandlers.emit(e);
        });
    }
    _initOptions() {
        this._initialOptions.integrationOptions.watchMethod = this.watcherHelper.getWatchMethod();
    }
    _initPlatform() {
        if (this.transferState.hasKey(IS_PLATFORM_SERVER)) {
            this._initialOptions.integrationOptions.renderedOnServer = this.transferState.get(IS_PLATFORM_SERVER, null);
        }
        else if (isPlatformServer(this.platformId)) {
            this.transferState.set(IS_PLATFORM_SERVER, true);
        }
    }
    _createEventEmitters(events) {
        this.eventHelper.createEmitters(events);
        this._initialOptions.eventsStrategy = (instance) => {
            let strategy = new NgEventsStrategy(instance);
            events.filter(event => event.subscribe).forEach(event => {
                strategy.addEmitter(event.subscribe, this[event.emit]);
            });
            return strategy;
        };
        this._initialOptions.nestedComponentOptions = function (component) {
            return {
                eventsStrategy: (instance) => { return new NgEventsStrategy(instance); },
                nestedComponentOptions: component.option('nestedComponentOptions')
            };
        };
    }
    _shouldOptionChange(name, value) {
        if (this.changedOptions.hasOwnProperty(name)) {
            const prevValue = this.changedOptions[name];
            delete this.changedOptions[name];
            return value !== prevValue;
        }
        return true;
    }
    clearChangedOptions() {
        this.changedOptions = {};
    }
    _getOption(name) {
        return this.instance ?
            this.instance.option(name) :
            this._initialOptions[name];
    }
    lockWidgetUpdate() {
        if (!this.widgetUpdateLocked && this.instance) {
            this.instance.beginUpdate();
            this.widgetUpdateLocked = true;
        }
    }
    unlockWidgetUpdate() {
        if (this.widgetUpdateLocked) {
            this.widgetUpdateLocked = false;
            this.instance.endUpdate();
        }
    }
    _setOption(name, value) {
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
    }
    _createWidget(element) {
        this._initialOptions.integrationOptions = {};
        this._initPlatform();
        this._initOptions();
        let createInstanceOnInit = this.createInstanceOnInit;
        this._initialOptions.onInitializing = function () {
            if (createInstanceOnInit) {
                this.beginUpdate();
            }
        };
        this.instance = this._createInstance(element, this._initialOptions);
        this._initEvents();
        this._initialOptions = {};
    }
    _destroyWidget() {
        if (this.instance) {
            let element = this.instance.element();
            triggerHandler(element, 'dxremove', { _angularIntegration: true });
            this.instance.dispose();
            removeElement(element);
        }
    }
    ngOnChanges(changes) {
        for (let key in changes) {
            let change = changes[key];
            if (change.currentValue !== this[key]) {
                this._optionsToUpdate[key] = changes[key].currentValue;
            }
        }
    }
    ngOnInit() {
        if (this.createInstanceOnInit) {
            this._createWidget(this.element.nativeElement);
        }
    }
    ngDoCheck() {
        this.applyOptions();
    }
    ngAfterContentChecked() {
        this.applyOptions();
        this.unlockWidgetUpdate();
    }
    ngAfterViewInit() {
        this._initTemplates();
        if (this.createInstanceOnInit) {
            this.instance.endUpdate();
        }
    }
    applyOptions() {
        if (Object.keys(this._optionsToUpdate).length) {
            if (this.instance) {
                this.instance.option(this._optionsToUpdate);
            }
            this._optionsToUpdate = {};
        }
    }
    setTemplate(template) {
        this.templates.push(template);
    }
    setChildren(propertyName, items) {
        return this._collectionContainerImpl.setChildren(propertyName, items);
    }
};
DxComponent = __decorate([
    __param(5, Inject(PLATFORM_ID))
], DxComponent);
class DxComponentExtension extends DxComponent {
    createInstance(element) {
        this._createWidget(element);
    }
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
const outsideZoneEvents = ['mousemove', 'mouseover', 'mouseout'];
const insideZoneEvents = ['mouseup', 'click', 'mousedown', 'transitionend', 'wheel'];
let originalAdd;
let callbacks = [];
inject({
    add: function (callback) {
        originalAdd = this.callBase.bind(this);
        callbacks.push(callback);
    }
});
let DxIntegrationModule = class DxIntegrationModule {
    constructor(document, ngZone, xhrFactory) {
        inject$1({
            _document: document,
            listen: function (...args) {
                const eventName = args[1];
                if (outsideZoneEvents.indexOf(eventName) !== -1) {
                    return ngZone.runOutsideAngular(() => {
                        return this.callBase.apply(this, args);
                    });
                }
                if (ngZone.isStable && insideZoneEvents.indexOf(eventName) !== -1) {
                    return ngZone.run(() => {
                        return this.callBase.apply(this, args);
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
                let _xhr = xhrFactory.build();
                if (!('withCredentials' in _xhr)) {
                    _xhr['withCredentials'] = false;
                }
                return _xhr;
            }
        });
        ngZone.run(() => {
            set({});
            callbacks.forEach(callback => originalAdd.call(null, callback));
            callbacks = [];
            fire();
        });
    }
};
DxIntegrationModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: XhrFactory, decorators: [{ type: Optional }] }
];
DxIntegrationModule = __decorate([
    NgModule({}),
    __param(0, Inject(DOCUMENT)), __param(2, Optional())
], DxIntegrationModule);

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
let IterableDifferHelper = class IterableDifferHelper {
    constructor(_differs) {
        this._differs = _differs;
        this._propertyDiffers = {};
    }
    setHost(host) {
        this._host = host;
    }
    setup(prop, changes) {
        if (prop in changes) {
            const value = changes[prop].currentValue;
            this.setupSingle(prop, value);
        }
    }
    setupSingle(prop, value) {
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
    }
    getChanges(prop, value) {
        if (this._propertyDiffers[prop]) {
            return this._propertyDiffers[prop].diff(value);
        }
    }
    checkChangedOptions(propName, hostValue) {
        return this._host.changedOptions[propName] === hostValue;
    }
    ;
    doCheck(prop) {
        if (this._propertyDiffers[prop]) {
            let hostValue = this._host[prop], isChangedOption = this.checkChangedOptions(prop, hostValue);
            const changes = this.getChanges(prop, hostValue);
            if (changes && this._host.instance && !isChangedOption) {
                this._host.lockWidgetUpdate();
                this._host.instance.option(prop, hostValue);
            }
        }
    }
};
IterableDifferHelper.ctorParameters = () => [
    { type: IterableDiffers }
];
IterableDifferHelper = __decorate([
    Injectable()
], IterableDifferHelper);

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
let DxServerTransferStateModule = class DxServerTransferStateModule {
    constructor(state, platformId) {
        this.state = state;
        this.platformId = platformId;
        let that = this;
        inject$3({
            sendRequest: function (...args) {
                let key = makeStateKey(that.generateKey(args)), cachedData = that.state.get(key, null);
                if (isPlatformServer(that.platformId)) {
                    let result = this.callBase.apply(this, args);
                    result.always((data, status) => {
                        let dataForCache = {
                            data: data,
                            status: status
                        };
                        that.state.set(key, dataForCache);
                    });
                    return result;
                }
                else {
                    if (cachedData) {
                        let d = new Deferred();
                        d.resolve(cachedData.data, cachedData.status);
                        that.state.set(key, null);
                        return d.promise();
                    }
                    return this.callBase.apply(this, args);
                }
            }
        });
    }
    generateKey(args) {
        let keyValue = '';
        for (let key in args) {
            if (typeof args[key] === 'object') {
                let objKey = this.generateKey(args[key]);
                keyValue += key + objKey;
            }
            else {
                keyValue += key + args[key];
            }
        }
        return keyValue;
    }
};
DxServerTransferStateModule.ctorParameters = () => [
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
DxServerTransferStateModule = __decorate([
    NgModule({
        imports: [
            BrowserTransferStateModule
        ]
    }),
    __param(1, Inject(PLATFORM_ID))
], DxServerTransferStateModule);

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
let WatcherHelper = class WatcherHelper {
    constructor() {
        this._watchers = [];
    }
    getWatchMethod() {
        let watchMethod = (valueGetter, valueChangeCallback, options) => {
            let oldValue = valueGetter();
            options = options || {};
            if (!options.skipImmediate) {
                valueChangeCallback(oldValue);
            }
            let watcher = () => {
                let newValue = valueGetter();
                if (this._isDifferentValues(oldValue, newValue, options.deep)) {
                    valueChangeCallback(newValue);
                    oldValue = newValue;
                }
            };
            this._watchers.push(watcher);
            return () => {
                let index = this._watchers.indexOf(watcher);
                if (index !== -1) {
                    this._watchers.splice(index, 1);
                }
            };
        };
        return watchMethod;
    }
    _isDifferentValues(oldValue, newValue, deepCheck) {
        let comparableNewValue = this._toComparable(newValue);
        let comparableOldValue = this._toComparable(oldValue);
        let isObjectValues = comparableNewValue instanceof Object && comparableOldValue instanceof Object;
        if (deepCheck && isObjectValues) {
            return this._checkObjectsFields(newValue, oldValue);
        }
        return comparableNewValue !== comparableOldValue;
    }
    _toComparable(value) {
        if (value instanceof Date) {
            return value.getTime();
        }
        return value;
    }
    _checkObjectsFields(checkingFromObject, checkingToObject) {
        for (let field in checkingFromObject) {
            let oldValue = this._toComparable(checkingFromObject[field]);
            let newValue = this._toComparable(checkingToObject[field]);
            let isEqualObjects = false;
            if (typeof oldValue === 'object' && typeof newValue === 'object') {
                isEqualObjects = equalByValue(oldValue, newValue);
            }
            if (oldValue !== newValue && !isEqualObjects) {
                return true;
            }
        }
    }
    checkWatchers() {
        for (let watcher of this._watchers) {
            watcher();
        }
    }
};
WatcherHelper = __decorate([
    Injectable()
], WatcherHelper);

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

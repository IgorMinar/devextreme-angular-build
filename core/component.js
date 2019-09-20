"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var events_strategy_1 = require("./events-strategy");
var domAdapter = require("devextreme/core/dom_adapter");
var events = require("devextreme/events");
var nested_option_1 = require("./nested-option");
exports.IS_PLATFORM_SERVER = platform_browser_1.makeStateKey('DX_isPlatformServer');
var DxComponent = (function () {
    function DxComponent(element, ngZone, templateHost, watcherHelper, transferState, platformId) {
        this.element = element;
        this.watcherHelper = watcherHelper;
        this.transferState = transferState;
        this.platformId = platformId;
        this._initialOptions = {};
        this._optionsToUpdate = {};
        this.optionChangedHandlers = new core_1.EventEmitter();
        this.isLinked = true;
        this.changedOptions = {};
        this.createInstanceOnInit = true;
        this.widgetUpdateLocked = false;
        this.templates = [];
        templateHost.setHost(this);
        this._collectionContainerImpl = new nested_option_1.CollectionNestedOptionContainerImpl(this._setOption.bind(this));
        this.eventHelper = new events_strategy_1.EmitterHelper(ngZone, this);
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
        if (this.transferState.hasKey(exports.IS_PLATFORM_SERVER)) {
            this._initialOptions.integrationOptions.renderedOnServer = this.transferState.get(exports.IS_PLATFORM_SERVER, null);
        }
        else if (common_1.isPlatformServer(this.platformId)) {
            this.transferState.set(exports.IS_PLATFORM_SERVER, true);
        }
    };
    DxComponent.prototype._createEventEmitters = function (events) {
        var _this = this;
        this.eventHelper.createEmitters(events);
        this._initialOptions.eventsStrategy = function (instance) {
            var strategy = new events_strategy_1.NgEventsStrategy(instance);
            events.filter(function (event) { return event.subscribe; }).forEach(function (event) {
                strategy.addEmitter(event.subscribe, _this[event.emit]);
            });
            return strategy;
        };
        this._initialOptions.nestedComponentOptions = function (component) {
            return {
                eventsStrategy: function (instance) { return new events_strategy_1.NgEventsStrategy(instance); },
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
            domAdapter.removeElement(element);
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
    /** @nocollapse */
    DxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: platform_browser_1.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    return DxComponent;
}());
exports.DxComponent = DxComponent;
var DxComponentExtension = (function (_super) {
    __extends(DxComponentExtension, _super);
    function DxComponentExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DxComponentExtension.prototype.createInstance = function (element) {
        this._createWidget(element);
    };
    return DxComponentExtension;
}(DxComponent));
exports.DxComponentExtension = DxComponentExtension;
//# sourceMappingURL=component.js.map
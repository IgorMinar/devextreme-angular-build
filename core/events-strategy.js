"use strict";
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
var NgEventsStrategy = (function () {
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
            this.events[eventName] = new core_1.EventEmitter();
        }
        return this.events[eventName];
    };
    return NgEventsStrategy;
}());
exports.NgEventsStrategy = NgEventsStrategy;
var EmitterHelper = (function () {
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
            _this.component[event.emit] = new core_1.EventEmitter();
        });
    };
    return EmitterHelper;
}());
exports.EmitterHelper = EmitterHelper;
//# sourceMappingURL=events-strategy.js.map
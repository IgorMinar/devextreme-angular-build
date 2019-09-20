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
import { EventEmitter } from '@angular/core';
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
            this.events[eventName] = new EventEmitter();
        }
        return this.events[eventName];
    };
    return NgEventsStrategy;
}());
export { NgEventsStrategy };
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
            _this.component[event.emit] = new EventEmitter();
        });
    };
    return EmitterHelper;
}());
export { EmitterHelper };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29yZS9ldmVudHMtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBYUEsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9yRCxJQUFBO0lBSUksMEJBQW9CLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLOzZCQUhnQyxFQUFFO3NCQUNaLEVBQUU7S0FFbkI7SUFFdEMsbUNBQVEsR0FBUixVQUFTLElBQVk7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7S0FDdkQ7SUFFRCxvQ0FBUyxHQUFULFVBQVUsSUFBSSxFQUFFLElBQUk7UUFDaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7S0FDSjtJQUVELDZCQUFFLEdBQUYsVUFBRyxJQUFJLEVBQUUsT0FBTztRQUNaLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQ25ELFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUMxRSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUQsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUs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ICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5cclxuaW50ZXJmYWNlIElFdmVudFN1YnNjcmlwdGlvbiB7XHJcbiAgICBoYW5kbGVyOiBhbnk7XHJcbiAgICB1bnN1YnNjcmliZTogKCkgPT4gdm9pZDtcclxufVxyXG5leHBvcnQgY2xhc3MgTmdFdmVudHNTdHJhdGVneSB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IHsgW2tleTogc3RyaW5nXTogSUV2ZW50U3Vic2NyaXB0aW9uW10gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBldmVudHM6IHsgW2tleTogc3RyaW5nXTogRXZlbnRFbWl0dGVyPGFueT4gfSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFuY2U6IGFueSkgeyB9XHJcblxyXG4gICAgaGFzRXZlbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1pdHRlcihuYW1lKS5vYnNlcnZlcnMubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmVFdmVudChuYW1lLCBhcmdzKSB7XHJcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzLmdldEVtaXR0ZXIobmFtZSk7XHJcbiAgICAgICAgaWYgKGVtaXR0ZXIub2JzZXJ2ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbWl0dGVyLm5leHQoYXJncyAmJiBhcmdzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb24obmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIGxldCBldmVudFN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnNbbmFtZV0gfHwgW10sXHJcbiAgICAgICAgICAgIHN1YmNyaXB0aW9uID0gdGhpcy5nZXRFbWl0dGVyKG5hbWUpLnN1YnNjcmliZShoYW5kbGVyLmJpbmQodGhpcy5pbnN0YW5jZSkpLFxyXG4gICAgICAgICAgICB1bnN1YnNjcmliZSA9IHN1YmNyaXB0aW9uLnVuc3Vic2NyaWJlLmJpbmQoc3ViY3JpcHRpb24pO1xyXG5cclxuICAgICAgICBldmVudFN1YnNjcmlwdGlvbnMucHVzaCh7IGhhbmRsZXIsIHVuc3Vic2NyaWJlIH0pO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1tuYW1lXSA9IGV2ZW50U3Vic2NyaXB0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBvZmYobmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIGxldCBldmVudFN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnNbbmFtZV0gfHwgW107XHJcblxyXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9ucy5zb21lKChzdWJzY3JpcHRpb24sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24uaGFuZGxlciA9PT0gaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9ucy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9ucy5zcGxpY2UoMCwgZXZlbnRTdWJzY3JpcHRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBhZGRFbWl0dGVyKGV2ZW50TmFtZTogc3RyaW5nLCBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55Pikge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBlbWl0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RW1pdHRlcihldmVudE5hbWU6IHN0cmluZyk6IEV2ZW50RW1pdHRlcjxhbnk+IHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbWl0dGVySGVscGVyIHtcclxuICAgIGxvY2tlZFZhbHVlQ2hhbmdlRXZlbnQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjb21wb25lbnQ6IER4Q29tcG9uZW50KSB7IH1cclxuXHJcbiAgICBmaXJlTmdFdmVudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRBcmdzOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWRWYWx1ZUNoYW5nZUV2ZW50ICYmIGV2ZW50TmFtZSA9PT0gJ3ZhbHVlQ2hhbmdlJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbWl0dGVyID0gdGhpcy5jb21wb25lbnRbZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoZW1pdHRlciAmJiBlbWl0dGVyLm9ic2VydmVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbWl0dGVyLm5leHQoZXZlbnRBcmdzICYmIGV2ZW50QXJnc1swXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbWl0dGVycyhldmVudHM6IGFueVtdKSB7XHJcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFtldmVudC5lbWl0XSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
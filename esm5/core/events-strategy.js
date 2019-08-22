import { EventEmitter } from '@angular/core';
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
export { NgEventsStrategy };
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
export { EmitterHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY29yZS9ldmVudHMtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9yRDtJQUlJLDBCQUFvQixRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUh6QixrQkFBYSxHQUE0QyxFQUFFLENBQUM7UUFDNUQsV0FBTSxHQUF5QyxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUV0QyxtQ0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLElBQUksRUFBRSxJQUFJO1FBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQUUsR0FBRixVQUFHLElBQUksRUFBRSxPQUFPO1FBQ1osSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFDbkQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQzFFLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUks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QUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5cclxuaW50ZXJmYWNlIElFdmVudFN1YnNjcmlwdGlvbiB7XHJcbiAgICBoYW5kbGVyOiBhbnk7XHJcbiAgICB1bnN1YnNjcmliZTogKCkgPT4gdm9pZDtcclxufVxyXG5leHBvcnQgY2xhc3MgTmdFdmVudHNTdHJhdGVneSB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IHsgW2tleTogc3RyaW5nXTogSUV2ZW50U3Vic2NyaXB0aW9uW10gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBldmVudHM6IHsgW2tleTogc3RyaW5nXTogRXZlbnRFbWl0dGVyPGFueT4gfSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFuY2U6IGFueSkgeyB9XHJcblxyXG4gICAgaGFzRXZlbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1pdHRlcihuYW1lKS5vYnNlcnZlcnMubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmVFdmVudChuYW1lLCBhcmdzKSB7XHJcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzLmdldEVtaXR0ZXIobmFtZSk7XHJcbiAgICAgICAgaWYgKGVtaXR0ZXIub2JzZXJ2ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbWl0dGVyLm5leHQoYXJncyAmJiBhcmdzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb24obmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIGxldCBldmVudFN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnNbbmFtZV0gfHwgW10sXHJcbiAgICAgICAgICAgIHN1YmNyaXB0aW9uID0gdGhpcy5nZXRFbWl0dGVyKG5hbWUpLnN1YnNjcmliZShoYW5kbGVyLmJpbmQodGhpcy5pbnN0YW5jZSkpLFxyXG4gICAgICAgICAgICB1bnN1YnNjcmliZSA9IHN1YmNyaXB0aW9uLnVuc3Vic2NyaWJlLmJpbmQoc3ViY3JpcHRpb24pO1xyXG5cclxuICAgICAgICBldmVudFN1YnNjcmlwdGlvbnMucHVzaCh7IGhhbmRsZXIsIHVuc3Vic2NyaWJlIH0pO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1tuYW1lXSA9IGV2ZW50U3Vic2NyaXB0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBvZmYobmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIGxldCBldmVudFN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnNbbmFtZV0gfHwgW107XHJcblxyXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9ucy5zb21lKChzdWJzY3JpcHRpb24sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24uaGFuZGxlciA9PT0gaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9ucy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9ucy5zcGxpY2UoMCwgZXZlbnRTdWJzY3JpcHRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBhZGRFbWl0dGVyKGV2ZW50TmFtZTogc3RyaW5nLCBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55Pikge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBlbWl0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RW1pdHRlcihldmVudE5hbWU6IHN0cmluZyk6IEV2ZW50RW1pdHRlcjxhbnk+IHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbWl0dGVySGVscGVyIHtcclxuICAgIGxvY2tlZFZhbHVlQ2hhbmdlRXZlbnQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjb21wb25lbnQ6IER4Q29tcG9uZW50KSB7IH1cclxuXHJcbiAgICBmaXJlTmdFdmVudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRBcmdzOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWRWYWx1ZUNoYW5nZUV2ZW50ICYmIGV2ZW50TmFtZSA9PT0gJ3ZhbHVlQ2hhbmdlJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbWl0dGVyID0gdGhpcy5jb21wb25lbnRbZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoZW1pdHRlciAmJiBlbWl0dGVyLm9ic2VydmVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbWl0dGVyLm5leHQoZXZlbnRBcmdzICYmIGV2ZW50QXJnc1swXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbWl0dGVycyhldmVudHM6IGFueVtdKSB7XHJcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFtldmVudC5lbWl0XSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
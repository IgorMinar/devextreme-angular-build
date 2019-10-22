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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUvIiwic291cmNlcyI6WyJldmVudHMtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT3JEO0lBSUksMEJBQW9CLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBSHpCLGtCQUFhLEdBQTRDLEVBQUUsQ0FBQztRQUM1RCxXQUFNLEdBQXlDLEVBQUUsQ0FBQztJQUVyQixDQUFDO0lBRXRDLG1DQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLElBQUksRUFBRSxJQUFJO1FBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRCw2QkFBRSxHQUFGLFVBQUcsSUFBSSxFQUFFLE9BQU87UUFDWixJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUNuRCxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDMUUsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVELGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0lBQ2xELENBQUM7SUFFRCw4QkFBRyxHQUFILFVBQUksSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXhELElBQUksT0FBTyxFQUFFO1lBQ1Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BDLElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7b0JBQ2xDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDM0Isa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZO2dCQUNuQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELGtDQUFPLEdBQVAsY0FBVyxDQUFDO0lBRUwscUNBQVUsR0FBakIsVUFBa0IsU0FBaUIsRUFBRSxPQUEwQjtRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDO0lBRU8scUNBQVUsR0FBbEIsVUFBbUIsU0FBaUI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7O0FBRUQ7SUFHSSx1QkFBb0IsSUFBWSxFQUFVLFNBQXNCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBRmhFLDJCQUFzQixHQUFHLEtBQUssQ0FBQztJQUVxQyxDQUFDO0lBRXJFLG1DQUFXLEdBQVgsVUFBWSxTQUFpQixFQUFFLFNBQWM7UUFDekMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLElBQUksU0FBUyxLQUFLLGFBQWEsRUFBRTtZQUM1RCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLE1BQWE7UUFBNUIsaUJBSUM7UUFIRyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcclxuXHJcbmludGVyZmFjZSBJRXZlbnRTdWJzY3JpcHRpb24ge1xyXG4gICAgaGFuZGxlcjogYW55O1xyXG4gICAgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIE5nRXZlbnRzU3RyYXRlZ3kge1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IElFdmVudFN1YnNjcmlwdGlvbltdIH0gPSB7fTtcclxuICAgIHByaXZhdGUgZXZlbnRzOiB7IFtrZXk6IHN0cmluZ106IEV2ZW50RW1pdHRlcjxhbnk+IH0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhbmNlOiBhbnkpIHsgfVxyXG5cclxuICAgIGhhc0V2ZW50KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVtaXR0ZXIobmFtZSkub2JzZXJ2ZXJzLmxlbmd0aCAhPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlRXZlbnQobmFtZSwgYXJncykge1xyXG4gICAgICAgIGxldCBlbWl0dGVyID0gdGhpcy5nZXRFbWl0dGVyKG5hbWUpO1xyXG4gICAgICAgIGlmIChlbWl0dGVyLm9ic2VydmVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZW1pdHRlci5uZXh0KGFyZ3MgJiYgYXJnc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICBsZXQgZXZlbnRTdWJzY3JpcHRpb25zID0gdGhpcy5zdWJzY3JpcHRpb25zW25hbWVdIHx8IFtdLFxyXG4gICAgICAgICAgICBzdWJjcmlwdGlvbiA9IHRoaXMuZ2V0RW1pdHRlcihuYW1lKS5zdWJzY3JpYmUoaGFuZGxlci5iaW5kKHRoaXMuaW5zdGFuY2UpKSxcclxuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBzdWJjcmlwdGlvbi51bnN1YnNjcmliZS5iaW5kKHN1YmNyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgZXZlbnRTdWJzY3JpcHRpb25zLnB1c2goeyBoYW5kbGVyLCB1bnN1YnNjcmliZSB9KTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbbmFtZV0gPSBldmVudFN1YnNjcmlwdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICBsZXQgZXZlbnRTdWJzY3JpcHRpb25zID0gdGhpcy5zdWJzY3JpcHRpb25zW25hbWVdIHx8IFtdO1xyXG5cclxuICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbnMuc29tZSgoc3Vic2NyaXB0aW9uLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uLmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbnMuc3BsaWNlKDAsIGV2ZW50U3Vic2NyaXB0aW9ucy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCkge31cclxuXHJcbiAgICBwdWJsaWMgYWRkRW1pdHRlcihldmVudE5hbWU6IHN0cmluZywgZW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4pIHtcclxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gZW1pdHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVtaXR0ZXIoZXZlbnROYW1lOiBzdHJpbmcpOiBFdmVudEVtaXR0ZXI8YW55PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1pdHRlckhlbHBlciB7XHJcbiAgICBsb2NrZWRWYWx1ZUNoYW5nZUV2ZW50ID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY29tcG9uZW50OiBEeENvbXBvbmVudCkgeyB9XHJcblxyXG4gICAgZmlyZU5nRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50QXJnczogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkVmFsdWVDaGFuZ2VFdmVudCAmJiBldmVudE5hbWUgPT09ICd2YWx1ZUNoYW5nZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZW1pdHRlciA9IHRoaXMuY29tcG9uZW50W2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGVtaXR0ZXIgJiYgZW1pdHRlci5vYnNlcnZlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW1pdHRlci5uZXh0KGV2ZW50QXJncyAmJiBldmVudEFyZ3NbMF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRW1pdHRlcnMoZXZlbnRzOiBhbnlbXSkge1xyXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRbZXZlbnQuZW1pdF0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
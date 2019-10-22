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
import * as tslib_1 from "tslib";
import { PLATFORM_ID, Inject, EventEmitter } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { makeStateKey } from '@angular/platform-browser';
import { EmitterHelper, NgEventsStrategy } from './events-strategy';
import * as domAdapter from 'devextreme/core/dom_adapter';
import * as events from 'devextreme/events';
import { CollectionNestedOptionContainerImpl } from './nested-option';
export var IS_PLATFORM_SERVER = makeStateKey('DX_isPlatformServer');
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
    DxComponent = tslib_1.__decorate([
        tslib_1.__param(5, Inject(PLATFORM_ID))
    ], DxComponent);
    return DxComponent;
}());
export { DxComponent };
var DxComponentExtension = /** @class */ (function (_super) {
    tslib_1.__extends(DxComponentExtension, _super);
    function DxComponentExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DxComponentExtension.prototype.createInstance = function (element) {
        this._createWidget(element);
    };
    return DxComponentExtension;
}(DxComponent));
export { DxComponentExtension };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUvIiwic291cmNlcyI6WyJjb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsT0FBTyxFQUtILFdBQVcsRUFDWCxNQUFNLEVBQ04sWUFBWSxFQU9mLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBaUIsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBFLE9BQU8sS0FBSyxVQUFVLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxLQUFLLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxPQUFPLEVBSUgsbUNBQW1DLEVBQ3RDLE1BQU0saUJBQWlCLENBQUM7QUFFekIsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFNLHFCQUFxQixDQUFDLENBQUM7QUFFM0U7SUErSUkscUJBQXNCLE9BQW1CLEVBQ3JDLE1BQWMsRUFDZCxZQUE0QixFQUNwQixhQUE0QixFQUM1QixhQUE0QixFQUNQLFVBQWU7UUFMMUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUc3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNQLGVBQVUsR0FBVixVQUFVLENBQUs7UUFsSnhDLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUdyQywwQkFBcUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc5RCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLHlCQUFvQixHQUFHLElBQUksQ0FBQztR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bnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbmltcG9ydCB7XHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUXVlcnlMaXN0LFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgSW5qZWN0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG5cclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uSW5pdCxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUsIG1ha2VTdGF0ZUtleSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHsgRHhUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBJRHhUZW1wbGF0ZUhvc3QsIER4VGVtcGxhdGVIb3N0IH0gZnJvbSAnLi90ZW1wbGF0ZS1ob3N0JztcclxuaW1wb3J0IHsgRW1pdHRlckhlbHBlciwgTmdFdmVudHNTdHJhdGVneSB9IGZyb20gJy4vZXZlbnRzLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4vd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgKiBhcyBkb21BZGFwdGVyIGZyb20gJ2RldmV4dHJlbWUvY29yZS9kb21fYWRhcHRlcic7XHJcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICdkZXZleHRyZW1lL2V2ZW50cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgSU5lc3RlZE9wdGlvbkNvbnRhaW5lcixcclxuICAgIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uLFxyXG4gICAgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXIsXHJcbiAgICBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVySW1wbFxyXG59IGZyb20gJy4vbmVzdGVkLW9wdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgSVNfUExBVEZPUk1fU0VSVkVSID0gbWFrZVN0YXRlS2V5PGFueT4oJ0RYX2lzUGxhdGZvcm1TZXJ2ZXInKTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0LFxyXG4gICAgSU5lc3RlZE9wdGlvbkNvbnRhaW5lciwgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXIsIElEeFRlbXBsYXRlSG9zdCB7XHJcbiAgICBwcml2YXRlIF9pbml0aWFsT3B0aW9uczogYW55ID0ge307XHJcbiAgICBwcm90ZWN0ZWQgX29wdGlvbnNUb1VwZGF0ZTogYW55ID0ge307XHJcbiAgICBwcml2YXRlIF9jb2xsZWN0aW9uQ29udGFpbmVySW1wbDogSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXI7XHJcbiAgICBldmVudEhlbHBlcjogRW1pdHRlckhlbHBlcjtcclxuICAgIG9wdGlvbkNoYW5nZWRIYW5kbGVyczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB0ZW1wbGF0ZXM6IER4VGVtcGxhdGVEaXJlY3RpdmVbXTtcclxuICAgIGluc3RhbmNlOiBhbnk7XHJcbiAgICBpc0xpbmtlZCA9IHRydWU7XHJcbiAgICBjaGFuZ2VkT3B0aW9ucyA9IHt9O1xyXG4gICAgY3JlYXRlSW5zdGFuY2VPbkluaXQgPSB0cnVlO1xyXG4gICAgd2lkZ2V0VXBkYXRlTG9ja2VkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdFRlbXBsYXRlcygpIHtcclxuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbml0aWFsVGVtcGxhdGVzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFRlbXBsYXRlc1t0ZW1wbGF0ZS5uYW1lXSA9IHRlbXBsYXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5vcHRpb24oJ2ludGVncmF0aW9uT3B0aW9ucy50ZW1wbGF0ZXMnLCBpbml0aWFsVGVtcGxhdGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdvcHRpb25DaGFuZ2VkJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkT3B0aW9uc1tlLm5hbWVdID0gZS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS5uYW1lID09PSBlLmZ1bGxOYW1lID8gZS52YWx1ZSA6IGUuY29tcG9uZW50Lm9wdGlvbihlLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmZpcmVOZ0V2ZW50KGUubmFtZSArICdDaGFuZ2UnLCBbdmFsdWVdKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25DaGFuZ2VkSGFuZGxlcnMuZW1pdChlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0T3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLl9pbml0aWFsT3B0aW9ucy5pbnRlZ3JhdGlvbk9wdGlvbnMud2F0Y2hNZXRob2QgPSB0aGlzLndhdGNoZXJIZWxwZXIuZ2V0V2F0Y2hNZXRob2QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0UGxhdGZvcm0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmZXJTdGF0ZS5oYXNLZXkoSVNfUExBVEZPUk1fU0VSVkVSKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsT3B0aW9ucy5pbnRlZ3JhdGlvbk9wdGlvbnMucmVuZGVyZWRPblNlcnZlciA9IHRoaXMudHJhbnNmZXJTdGF0ZS5nZXQoSVNfUExBVEZPUk1fU0VSVkVSLCBudWxsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZmVyU3RhdGUuc2V0KElTX1BMQVRGT1JNX1NFUlZFUiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlRXZlbnRFbWl0dGVycyhldmVudHMpIHtcclxuICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmNyZWF0ZUVtaXR0ZXJzKGV2ZW50cyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRpYWxPcHRpb25zLmV2ZW50c1N0cmF0ZWd5ID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdHJhdGVneSA9IG5ldyBOZ0V2ZW50c1N0cmF0ZWd5KGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy5maWx0ZXIoZXZlbnQgPT4gZXZlbnQuc3Vic2NyaWJlKS5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHN0cmF0ZWd5LmFkZEVtaXR0ZXIoZXZlbnQuc3Vic2NyaWJlLCB0aGlzW2V2ZW50LmVtaXRdKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RyYXRlZ3k7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnMubmVzdGVkQ29tcG9uZW50T3B0aW9ucyA9IGZ1bmN0aW9uKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzU3RyYXRlZ3k6IChpbnN0YW5jZSkgPT4geyByZXR1cm4gbmV3IE5nRXZlbnRzU3RyYXRlZ3koaW5zdGFuY2UpOyB9LFxyXG4gICAgICAgICAgICAgICAgbmVzdGVkQ29tcG9uZW50T3B0aW9uczogY29tcG9uZW50Lm9wdGlvbignbmVzdGVkQ29tcG9uZW50T3B0aW9ucycpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkT3B0aW9uQ2hhbmdlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRPcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuY2hhbmdlZE9wdGlvbnNbbmFtZV07XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5nZWRPcHRpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBwcmV2VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ2hhbmdlZE9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkT3B0aW9ucyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0T3B0aW9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlID9cclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5vcHRpb24obmFtZSkgOlxyXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsT3B0aW9uc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBsb2NrV2lkZ2V0VXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy53aWRnZXRVcGRhdGVMb2NrZWQgJiYgdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmJlZ2luVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0VXBkYXRlTG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2NrV2lkZ2V0VXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLndpZGdldFVwZGF0ZUxvY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLndpZGdldFVwZGF0ZUxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmVuZFVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmxvY2tXaWRnZXRVcGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zaG91bGRPcHRpb25DaGFuZ2UobmFtZSwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsT3B0aW9uc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpXHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVXaWRnZXQoZWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnMuaW50ZWdyYXRpb25PcHRpb25zID0ge307XHJcbiAgICAgICAgdGhpcy5faW5pdFBsYXRmb3JtKCk7XHJcbiAgICAgICAgdGhpcy5faW5pdE9wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgbGV0IGNyZWF0ZUluc3RhbmNlT25Jbml0ID0gdGhpcy5jcmVhdGVJbnN0YW5jZU9uSW5pdDtcclxuXHJcbiAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnMub25Jbml0aWFsaXppbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjcmVhdGVJbnN0YW5jZU9uSW5pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWdpblVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5fY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgdGhpcy5faW5pdGlhbE9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX2luaXRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLl9pbml0aWFsT3B0aW9ucyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZGVzdHJveVdpZGdldCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuaW5zdGFuY2UuZWxlbWVudCgpO1xyXG4gICAgICAgICAgICBldmVudHMudHJpZ2dlckhhbmRsZXIoZWxlbWVudCwgJ2R4cmVtb3ZlJywgeyBfYW5ndWxhckludGVncmF0aW9uOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgZG9tQWRhcHRlci5yZW1vdmVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIHByaXZhdGUgd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBwcml2YXRlIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlcyA9IFtdO1xyXG4gICAgICAgIHRlbXBsYXRlSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2NvbGxlY3Rpb25Db250YWluZXJJbXBsID0gbmV3IENvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXJJbXBsKHRoaXMuX3NldE9wdGlvbi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGVscGVyID0gbmV3IEVtaXR0ZXJIZWxwZXIobmdab25lLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgbGV0IGNoYW5nZSA9IGNoYW5nZXNba2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZS5jdXJyZW50VmFsdWUgIT09IHRoaXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1RvVXBkYXRlW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZUluc3RhbmNlT25Jbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVdpZGdldCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLmFwcGx5T3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgICAgICB0aGlzLmFwcGx5T3B0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudW5sb2NrV2lkZ2V0VXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2luaXRUZW1wbGF0ZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5jcmVhdGVJbnN0YW5jZU9uSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmVuZFVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHBseU9wdGlvbnMoKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX29wdGlvbnNUb1VwZGF0ZSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLm9wdGlvbih0aGlzLl9vcHRpb25zVG9VcGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNUb1VwZGF0ZSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUZW1wbGF0ZSh0ZW1wbGF0ZTogRHhUZW1wbGF0ZURpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVzLnB1c2godGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoaWxkcmVuPFQgZXh0ZW5kcyBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbj4ocHJvcGVydHlOYW1lOiBzdHJpbmcsIGl0ZW1zOiBRdWVyeUxpc3Q8VD4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbkNvbnRhaW5lckltcGwuc2V0Q2hpbGRyZW4ocHJvcGVydHlOYW1lLCBpdGVtcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeENvbXBvbmVudEV4dGVuc2lvbiBleHRlbmRzIER4Q29tcG9uZW50IHtcclxuICAgIGNyZWF0ZUluc3RhbmNlKGVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVdpZGdldChlbGVtZW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=
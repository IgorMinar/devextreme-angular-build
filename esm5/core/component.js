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
import { PLATFORM_ID, Inject, EventEmitter } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { makeStateKey } from '@angular/platform-browser';
import { EmitterHelper, NgEventsStrategy } from './events-strategy';
import * as domAdapter from 'devextreme/core/dom_adapter';
import * as events from 'devextreme/events';
import { CollectionNestedOptionContainerImpl } from './nested-option';
export var IS_PLATFORM_SERVER = makeStateKey('DX_isPlatformServer');
var DxComponent = (function () {
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
    /** @nocollapse */
    DxComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    return DxComponent;
}());
export { DxComponent };
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
export { DxComponentExtension };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29yZS9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLE9BQU8sRUFLSCxXQUFXLEVBQ1gsTUFBTSxFQUNOLFlBQVksRUFPZixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSXhFLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRSxPQUFPLEtBQUssVUFBVSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sS0FBSyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFNUMsT0FBTyxFQUlILG1DQUFtQyxFQUN0QyxNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLFlBQVksQ0FBTSxxQkFBcUIsQ0FBQyxDQUFDOztJQWlKdkUscUJBQXNCLE9BQW1CLEVBQ3JDLE1BQWMsRUFDZCxZQUE0QixFQUNwQixhQUE0QixFQUM1QixhQUE0QixFQUNQO1FBTFgsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUc3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNQLGVBQVUsR0FBVixVQUFVOytCQWxKWixFQUFFO2dDQUNDLEVBQUU7cUNBR08sSUFBSSxZQUFZLEVBQUU7d0JBR2xELElBQUk7OEJBQ0UsRUFBRTtvQ0FDSSxJQUFJO2tDQUNOLEtBQUs7UUF5SXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksbUNBQW1DLENB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QUFXLEVBSTdELENBQUE7QUFKRCxnQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG5pbXBvcnQge1xyXG4gICAgRWxlbWVudFJlZixcclxuICAgIE5nWm9uZSxcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICAgIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlLCBtYWtlU3RhdGVLZXkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7IER4VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgSUR4VGVtcGxhdGVIb3N0LCBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4vdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IEVtaXR0ZXJIZWxwZXIsIE5nRXZlbnRzU3RyYXRlZ3kgfSBmcm9tICcuL2V2ZW50cy1zdHJhdGVneSc7XHJcbmltcG9ydCB7IFdhdGNoZXJIZWxwZXIgfSBmcm9tICcuL3dhdGNoZXItaGVscGVyJztcclxuaW1wb3J0ICogYXMgZG9tQWRhcHRlciBmcm9tICdkZXZleHRyZW1lL2NvcmUvZG9tX2FkYXB0ZXInO1xyXG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSAnZGV2ZXh0cmVtZS9ldmVudHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElOZXN0ZWRPcHRpb25Db250YWluZXIsXHJcbiAgICBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbixcclxuICAgIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVyLFxyXG4gICAgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbkNvbnRhaW5lckltcGxcclxufSBmcm9tICcuL25lc3RlZC1vcHRpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IElTX1BMQVRGT1JNX1NFUlZFUiA9IG1ha2VTdGF0ZUtleTxhbnk+KCdEWF9pc1BsYXRmb3JtU2VydmVyJyk7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIElOZXN0ZWRPcHRpb25Db250YWluZXIsIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVyLCBJRHhUZW1wbGF0ZUhvc3Qge1xyXG4gICAgcHJpdmF0ZSBfaW5pdGlhbE9wdGlvbnM6IGFueSA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIF9vcHRpb25zVG9VcGRhdGU6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvbkNvbnRhaW5lckltcGw6IElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVyO1xyXG4gICAgZXZlbnRIZWxwZXI6IEVtaXR0ZXJIZWxwZXI7XHJcbiAgICBvcHRpb25DaGFuZ2VkSGFuZGxlcnM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgdGVtcGxhdGVzOiBEeFRlbXBsYXRlRGlyZWN0aXZlW107XHJcbiAgICBpbnN0YW5jZTogYW55O1xyXG4gICAgaXNMaW5rZWQgPSB0cnVlO1xyXG4gICAgY2hhbmdlZE9wdGlvbnMgPSB7fTtcclxuICAgIGNyZWF0ZUluc3RhbmNlT25Jbml0ID0gdHJ1ZTtcclxuICAgIHdpZGdldFVwZGF0ZUxvY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2luaXRUZW1wbGF0ZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFRlbXBsYXRlcyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxUZW1wbGF0ZXNbdGVtcGxhdGUubmFtZV0gPSB0ZW1wbGF0ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub3B0aW9uKCdpbnRlZ3JhdGlvbk9wdGlvbnMudGVtcGxhdGVzJywgaW5pdGlhbFRlbXBsYXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbignb3B0aW9uQ2hhbmdlZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZE9wdGlvbnNbZS5uYW1lXSA9IGUudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUubmFtZSA9PT0gZS5mdWxsTmFtZSA/IGUudmFsdWUgOiBlLmNvbXBvbmVudC5vcHRpb24oZS5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEhlbHBlci5maXJlTmdFdmVudChlLm5hbWUgKyAnQ2hhbmdlJywgW3ZhbHVlXSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uQ2hhbmdlZEhhbmRsZXJzLmVtaXQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnMuaW50ZWdyYXRpb25PcHRpb25zLndhdGNoTWV0aG9kID0gdGhpcy53YXRjaGVySGVscGVyLmdldFdhdGNoTWV0aG9kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdFBsYXRmb3JtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZmVyU3RhdGUuaGFzS2V5KElTX1BMQVRGT1JNX1NFUlZFUikpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnMuaW50ZWdyYXRpb25PcHRpb25zLnJlbmRlcmVkT25TZXJ2ZXIgPSB0aGlzLnRyYW5zZmVyU3RhdGUuZ2V0KElTX1BMQVRGT1JNX1NFUlZFUiwgbnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2ZlclN0YXRlLnNldChJU19QTEFURk9STV9TRVJWRVIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUV2ZW50RW1pdHRlcnMoZXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudEhlbHBlci5jcmVhdGVFbWl0dGVycyhldmVudHMpO1xyXG5cclxuICAgICAgICB0aGlzLl9pbml0aWFsT3B0aW9ucy5ldmVudHNTdHJhdGVneSA9IChpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3RyYXRlZ3kgPSBuZXcgTmdFdmVudHNTdHJhdGVneShpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgICAgICBldmVudHMuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnN1YnNjcmliZSkuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdHJhdGVneS5hZGRFbWl0dGVyKGV2ZW50LnN1YnNjcmliZSwgdGhpc1tldmVudC5lbWl0XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN0cmF0ZWd5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRpYWxPcHRpb25zLm5lc3RlZENvbXBvbmVudE9wdGlvbnMgPSBmdW5jdGlvbihjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50c1N0cmF0ZWd5OiAoaW5zdGFuY2UpID0+IHsgcmV0dXJuIG5ldyBOZ0V2ZW50c1N0cmF0ZWd5KGluc3RhbmNlKTsgfSxcclxuICAgICAgICAgICAgICAgIG5lc3RlZENvbXBvbmVudE9wdGlvbnM6IGNvbXBvbmVudC5vcHRpb24oJ25lc3RlZENvbXBvbmVudE9wdGlvbnMnKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZE9wdGlvbkNoYW5nZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkT3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLmNoYW5nZWRPcHRpb25zW25hbWVdO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jaGFuZ2VkT3B0aW9uc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gcHJldlZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNoYW5nZWRPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZE9wdGlvbnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2dldE9wdGlvbihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSA/XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub3B0aW9uKG5hbWUpIDpcclxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgbG9ja1dpZGdldFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMud2lkZ2V0VXBkYXRlTG9ja2VkICYmIHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5iZWdpblVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLndpZGdldFVwZGF0ZUxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVubG9ja1dpZGdldFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy53aWRnZXRVcGRhdGVMb2NrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy53aWRnZXRVcGRhdGVMb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5lbmRVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5sb2NrV2lkZ2V0VXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2hvdWxkT3B0aW9uQ2hhbmdlKG5hbWUsIHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLm9wdGlvbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlV2lkZ2V0KGVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxPcHRpb25zLmludGVncmF0aW9uT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2luaXRQbGF0Zm9ybSgpO1xyXG4gICAgICAgIHRoaXMuX2luaXRPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIGxldCBjcmVhdGVJbnN0YW5jZU9uSW5pdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2VPbkluaXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRpYWxPcHRpb25zLm9uSW5pdGlhbGl6aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY3JlYXRlSW5zdGFuY2VPbkluaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5VcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHRoaXMuX2luaXRpYWxPcHRpb25zKTtcclxuICAgICAgICB0aGlzLl9pbml0RXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2Rlc3Ryb3lXaWRnZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmluc3RhbmNlLmVsZW1lbnQoKTtcclxuICAgICAgICAgICAgZXZlbnRzLnRyaWdnZXJIYW5kbGVyKGVsZW1lbnQsICdkeHJlbW92ZScsIHsgX2FuZ3VsYXJJbnRlZ3JhdGlvbjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIGRvbUFkYXB0ZXIucmVtb3ZlRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBwcml2YXRlIHdhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBbXTtcclxuICAgICAgICB0ZW1wbGF0ZUhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uQ29udGFpbmVySW1wbCA9IG5ldyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVySW1wbCh0aGlzLl9zZXRPcHRpb24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhlbHBlciA9IG5ldyBFbWl0dGVySGVscGVyKG5nWm9uZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2UgPSBjaGFuZ2VzW2tleV07XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2UuY3VycmVudFZhbHVlICE9PSB0aGlzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnNUb1VwZGF0ZVtrZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jcmVhdGVJbnN0YW5jZU9uSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVXaWRnZXQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5hcHBseU9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBseU9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnVubG9ja1dpZGdldFVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0VGVtcGxhdGVzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlSW5zdGFuY2VPbkluaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5lbmRVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlPcHRpb25zKCkge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9vcHRpb25zVG9VcGRhdGUpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5vcHRpb24odGhpcy5fb3B0aW9uc1RvVXBkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zVG9VcGRhdGUgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGVtcGxhdGUodGVtcGxhdGU6IER4VGVtcGxhdGVEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKHRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGlsZHJlbjxUIGV4dGVuZHMgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb24+KHByb3BlcnR5TmFtZTogc3RyaW5nLCBpdGVtczogUXVlcnlMaXN0PFQ+KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb25Db250YWluZXJJbXBsLnNldENoaWxkcmVuKHByb3BlcnR5TmFtZSwgaXRlbXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhDb21wb25lbnRFeHRlbnNpb24gZXh0ZW5kcyBEeENvbXBvbmVudCB7XHJcbiAgICBjcmVhdGVJbnN0YW5jZShlbGVtZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVXaWRnZXQoZWxlbWVudCk7XHJcbiAgICB9XHJcbn1cclxuIl19
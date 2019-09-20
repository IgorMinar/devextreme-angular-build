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
import { EventEmitter } from '@angular/core';
import { DX_TEMPLATE_WRAPPER_CLASS } from './template';
import { getElement } from './utils';
import * as render from 'devextreme/core/renderer';
import * as events from 'devextreme/events';
var VISIBILITY_CHANGE_SELECTOR = 'dx-visibility-change-handler';
var BaseNestedOption = (function () {
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
export { BaseNestedOption };
var CollectionNestedOptionContainerImpl = (function () {
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
export { CollectionNestedOptionContainerImpl };
var NestedOption = (function (_super) {
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
export { NestedOption };
var CollectionNestedOption = (function (_super) {
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
export { CollectionNestedOption };
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
export function extractTemplate(option, element, renderer, document) {
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
var NestedOptionHost = (function () {
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
export { NestedOptionHost };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsT0FBTyxFQUFvQyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFckMsT0FBTyxLQUFLLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEtBQUssTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBRTVDLElBQU0sMEJBQTBCLEdBQUcsOEJBQThCLENBQUM7QUFVbEUsSUFBQTtJQVNJOytCQUw0QixFQUFFO1FBTTFCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDckk7SUFFUyxnREFBcUIsR0FBL0IsVUFBZ0MsQ0FBTTtRQUNsQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUUxQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLE9BQU8sQ0FB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LENBQUM7Z0JBRWxFLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUVyRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUNmLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUM3QjtpQkFDSjthQUNKO1lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNqQjtLQUNKLENBQUM7Q0FDTDtBQUVELElBQUE7OztJQUlJLGtDQUFPLEdBQVAsVUFBUSxJQUE0QixFQUFFLFVBQThCO1FBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFLENBQUMsQ0FBQztLQUMvQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsWUFBOEI7UUFDMUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN0RDsyQkE5T0w7SUErT0MsQ0FBQTtBQVpELDRCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbmltcG9ydCB7IFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERYX1RFTVBMQVRFX1dSQVBQRVJfQ0xBU1MgfSBmcm9tICcuL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgZ2V0RWxlbWVudCB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgcmVuZGVyIGZyb20gJ2RldmV4dHJlbWUvY29yZS9yZW5kZXJlcic7XHJcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICdkZXZleHRyZW1lL2V2ZW50cyc7XHJcblxyXG5jb25zdCBWSVNJQklMSVRZX0NIQU5HRV9TRUxFQ1RPUiA9ICdkeC12aXNpYmlsaXR5LWNoYW5nZS1oYW5kbGVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5lc3RlZE9wdGlvbkNvbnRhaW5lciB7XHJcbiAgICBpbnN0YW5jZTogYW55O1xyXG4gICAgaXNMaW5rZWQ6IGJvb2xlYW47XHJcbiAgICBvcHRpb25DaGFuZ2VkSGFuZGxlcnM6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPcHRpb25QYXRoR2V0dGVyIHsgKCk6IHN0cmluZzsgfVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VOZXN0ZWRPcHRpb24gaW1wbGVtZW50cyBJTmVzdGVkT3B0aW9uQ29udGFpbmVyLCBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbkNvbnRhaW5lciB7XHJcbiAgICBwcm90ZWN0ZWQgX2hvc3Q6IElOZXN0ZWRPcHRpb25Db250YWluZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2hvc3RPcHRpb25QYXRoOiBJT3B0aW9uUGF0aEdldHRlcjtcclxuICAgIHByaXZhdGUgX2NvbGxlY3Rpb25Db250YWluZXJJbXBsOiBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbkNvbnRhaW5lcjtcclxuICAgIHByb3RlY3RlZCBfaW5pdGlhbE9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IF9vcHRpb25QYXRoKCk6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfZnVsbE9wdGlvblBhdGgoKTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbGxlY3Rpb25Db250YWluZXJJbXBsID0gbmV3IENvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXJJbXBsKHRoaXMuX3NldE9wdGlvbi5iaW5kKHRoaXMpLCB0aGlzLl9maWx0ZXJJdGVtcy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29wdGlvbkNoYW5nZWRIYW5kbGVyKGU6IGFueSkge1xyXG4gICAgICAgIGxldCBmdWxsT3B0aW9uUGF0aCA9IHRoaXMuX2Z1bGxPcHRpb25QYXRoKCk7XHJcblxyXG4gICAgICAgIGlmIChlLmZ1bGxOYW1lLmluZGV4T2YoZnVsbE9wdGlvblBhdGgpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25OYW1lID0gZS5mdWxsTmFtZS5zbGljZShmdWxsT3B0aW9uUGF0aC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgZW1pdHRlciA9IHRoaXNbb3B0aW9uTmFtZSArICdDaGFuZ2UnXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbWl0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBlbWl0dGVyLm5leHQoZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVFdmVudEVtaXR0ZXJzKGV2ZW50cykge1xyXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpc1tldmVudC5lbWl0XSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2dldE9wdGlvbihuYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGlua2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLm9wdGlvbih0aGlzLl9mdWxsT3B0aW9uUGF0aCgpICsgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxPcHRpb25zW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xpbmtlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLm9wdGlvbih0aGlzLl9mdWxsT3B0aW9uUGF0aCgpICsgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxPcHRpb25zW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEhvc3QoaG9zdDogSU5lc3RlZE9wdGlvbkNvbnRhaW5lciwgb3B0aW9uUGF0aDogSU9wdGlvblBhdGhHZXR0ZXIpIHtcclxuICAgICAgICB0aGlzLl9ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLl9ob3N0T3B0aW9uUGF0aCA9IG9wdGlvblBhdGg7XHJcbiAgICAgICAgdGhpcy5vcHRpb25DaGFuZ2VkSGFuZGxlcnMuc3Vic2NyaWJlKHRoaXMuX29wdGlvbkNoYW5nZWRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoaWxkcmVuPFQgZXh0ZW5kcyBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbj4ocHJvcGVydHlOYW1lOiBzdHJpbmcsIGl0ZW1zOiBRdWVyeUxpc3Q8VD4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbkNvbnRhaW5lckltcGwuc2V0Q2hpbGRyZW4ocHJvcGVydHlOYW1lLCBpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2ZpbHRlckl0ZW1zKGl0ZW1zOiBRdWVyeUxpc3Q8QmFzZU5lc3RlZE9wdGlvbj4pIHtcclxuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7IHJldHVybiBpdGVtICE9PSB0aGlzOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3QgJiYgdGhpcy5faG9zdC5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNMaW5rZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5pbnN0YW5jZSAmJiB0aGlzLl9ob3N0LmlzTGlua2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcHRpb25DaGFuZ2VkSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3QgJiYgdGhpcy5faG9zdC5vcHRpb25DaGFuZ2VkSGFuZGxlcnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXIge1xyXG4gICAgc2V0Q2hpbGRyZW48VCBleHRlbmRzIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uPihwcm9wZXJ0eU5hbWU6IHN0cmluZywgaXRlbXM6IFF1ZXJ5TGlzdDxUPik7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVySW1wbCBpbXBsZW1lbnRzIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVyIHtcclxuICAgIHByaXZhdGUgX2FjdGl2YXRlZFF1ZXJpZXMgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXRPcHRpb246IEZ1bmN0aW9uLCBwcml2YXRlIF9maWx0ZXJJdGVtcz86IEZ1bmN0aW9uKSB7fVxyXG5cclxuICAgIHNldENoaWxkcmVuPFQgZXh0ZW5kcyBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbj4ocHJvcGVydHlOYW1lOiBzdHJpbmcsIGl0ZW1zOiBRdWVyeUxpc3Q8VD4pIHtcclxuICAgICAgICBpZiAodGhpcy5fZmlsdGVySXRlbXMpIHtcclxuICAgICAgICAgICAgaXRlbXMgPSB0aGlzLl9maWx0ZXJJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVkUXVlcmllc1twcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2YXRlZFF1ZXJpZXNbcHJvcGVydHlOYW1lXSkge1xyXG4gICAgICAgICAgICBsZXQgd2lkZ2V0SXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLl9pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uX3ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fc2V0T3B0aW9uKHByb3BlcnR5TmFtZSwgd2lkZ2V0SXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5lc3RlZE9wdGlvbiBleHRlbmRzIEJhc2VOZXN0ZWRPcHRpb24ge1xyXG4gICAgc2V0SG9zdChob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyLCBvcHRpb25QYXRoOiBJT3B0aW9uUGF0aEdldHRlcikge1xyXG4gICAgICAgIHN1cGVyLnNldEhvc3QoaG9zdCwgb3B0aW9uUGF0aCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hvc3RbdGhpcy5fb3B0aW9uUGF0aF0gPSB0aGlzLl9pbml0aWFsT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2Z1bGxPcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0T3B0aW9uUGF0aCgpICsgdGhpcy5fb3B0aW9uUGF0aCArICcuJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBfaW5kZXg6IG51bWJlcjtcclxuICAgIF92YWx1ZTogT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiBleHRlbmRzIEJhc2VOZXN0ZWRPcHRpb24gaW1wbGVtZW50cyBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBfaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2Z1bGxPcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0T3B0aW9uUGF0aCgpICsgdGhpcy5fb3B0aW9uUGF0aCArICdbJyArIHRoaXMuX2luZGV4ICsgJ10nICsgJy4nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBfdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxPcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0xpbmtlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXggIT09IHVuZGVmaW5lZCAmJiAhIXRoaXMuaW5zdGFuY2UgJiYgdGhpcy5faG9zdC5pc0xpbmtlZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uV2l0aFRlbXBsYXRlIGV4dGVuZHMgQmFzZU5lc3RlZE9wdGlvbiB7XHJcbiAgICB0ZW1wbGF0ZTogYW55O1xyXG59XHJcblxyXG5sZXQgdHJpZ2dlclNob3duRXZlbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICBsZXQgY2hhbmdlSGFuZGxlcnMgPSBbXTtcclxuXHJcbiAgICBpZiAoIXJlbmRlcihlbGVtZW50KS5oYXNDbGFzcyhWSVNJQklMSVRZX0NIQU5HRV9TRUxFQ1RPUikpIHtcclxuICAgICAgICBjaGFuZ2VIYW5kbGVycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUhhbmRsZXJzLnB1c2guYXBwbHkoY2hhbmdlSGFuZGxlcnMsIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBWSVNJQklMSVRZX0NIQU5HRV9TRUxFQ1RPUikpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlSGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBldmVudHMudHJpZ2dlckhhbmRsZXIoY2hhbmdlSGFuZGxlcnNbaV0sICdkeHNob3duJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRlbXBsYXRlKG9wdGlvbjogSU9wdGlvbldpdGhUZW1wbGF0ZSwgZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgaWYgKCFvcHRpb24udGVtcGxhdGUgPT09IHVuZGVmaW5lZCB8fCAhZWxlbWVudC5uYXRpdmVFbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2hpbGROb2RlcyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMpO1xyXG4gICAgbGV0IHVzZXJDb250ZW50ID0gY2hpbGROb2Rlcy5maWx0ZXIoKG4pID0+IHtcclxuICAgICAgICBpZiAobi50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWdOYW1lUHJlZml4ID0gbi50YWdOYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyKDAsIDMpO1xyXG4gICAgICAgICAgICByZXR1cm4gISh0YWdOYW1lUHJlZml4ID09PSAnZHhpJyB8fCB0YWdOYW1lUHJlZml4ID09PSAnZHhvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG4ubm9kZU5hbWUgIT09ICcjY29tbWVudCcgJiYgbi50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHMvZywgJycpLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghdXNlckNvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbi50ZW1wbGF0ZSA9IHtcclxuICAgICAgICByZW5kZXI6IChyZW5kZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJlci5hZGRDbGFzcyhyZXN1bHQsIERYX1RFTVBMQVRFX1dSQVBQRVJfQ0xBU1MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlbmRlckRhdGEuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZ2V0RWxlbWVudChyZW5kZXJEYXRhLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0SW5Db250YWluZXIgPSBjb250YWluZXIuY29udGFpbnMoZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5hcHBlbmRDaGlsZChjb250YWluZXIsIGVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRJbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRJbkJvZHkgPSBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRJbkJvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlclNob3duRXZlbnQocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5lc3RlZE9wdGlvbkhvc3Qge1xyXG4gICAgcHJpdmF0ZSBfaG9zdDogSU5lc3RlZE9wdGlvbkNvbnRhaW5lcjtcclxuICAgIHByaXZhdGUgX29wdGlvblBhdGg6IElPcHRpb25QYXRoR2V0dGVyO1xyXG5cclxuICAgIHNldEhvc3QoaG9zdDogSU5lc3RlZE9wdGlvbkNvbnRhaW5lciwgb3B0aW9uUGF0aD86IElPcHRpb25QYXRoR2V0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5faG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9uUGF0aCA9IG9wdGlvblBhdGggfHwgKCgpID0+ICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXN0ZWRPcHRpb24obmVzdGVkT3B0aW9uOiBCYXNlTmVzdGVkT3B0aW9uKSB7XHJcbiAgICAgICAgbmVzdGVkT3B0aW9uLnNldEhvc3QodGhpcy5faG9zdCwgdGhpcy5fb3B0aW9uUGF0aCk7XHJcbiAgICB9XHJcbn1cclxuIl19
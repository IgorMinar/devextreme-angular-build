import * as tslib_1 from "tslib";
import { EventEmitter } from '@angular/core';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';
import { DX_TEMPLATE_WRAPPER_CLASS } from './template';
import { getElement } from './utils';
import * as events from 'devextreme/events';
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
export { BaseNestedOption };
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
export { CollectionNestedOptionContainerImpl };
var NestedOption = /** @class */ (function (_super) {
    tslib_1.__extends(NestedOption, _super);
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
var CollectionNestedOption = /** @class */ (function (_super) {
    tslib_1.__extends(CollectionNestedOption, _super);
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
    if (getDOM().hasClass(element, VISIBILITY_CHANGE_SELECTOR)) {
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
export { NestedOptionHost };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbImNvcmUvbmVzdGVkLW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVyQyxPQUFPLEtBQUssTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBRTVDLElBQU0sMEJBQTBCLEdBQUcsOEJBQThCLENBQUM7QUFVbEU7SUFTSTtRQUxVLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBTTNCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEksQ0FBQztJQUVTLGdEQUFxQixHQUEvQixVQUFnQyxDQUFNO1FBQ2xDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBRTFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FB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Q0FBQyxBQVpELElBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUxpc3QsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IMm1Z2V0RE9NIGFzIGdldERPTSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHsgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyB9IGZyb20gJy4vdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSAnZGV2ZXh0cmVtZS9ldmVudHMnO1xyXG5cclxuY29uc3QgVklTSUJJTElUWV9DSEFOR0VfU0VMRUNUT1IgPSAnZHgtdmlzaWJpbGl0eS1jaGFuZ2UtaGFuZGxlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXN0ZWRPcHRpb25Db250YWluZXIge1xyXG4gICAgaW5zdGFuY2U6IGFueTtcclxuICAgIGlzTGlua2VkOiBib29sZWFuO1xyXG4gICAgb3B0aW9uQ2hhbmdlZEhhbmRsZXJzOiBFdmVudEVtaXR0ZXI8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uUGF0aEdldHRlciB7ICgpOiBzdHJpbmc7IH1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTmVzdGVkT3B0aW9uIGltcGxlbWVudHMgSU5lc3RlZE9wdGlvbkNvbnRhaW5lciwgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXIge1xyXG4gICAgcHJvdGVjdGVkIF9ob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyO1xyXG4gICAgcHJvdGVjdGVkIF9ob3N0T3B0aW9uUGF0aDogSU9wdGlvblBhdGhHZXR0ZXI7XHJcbiAgICBwcml2YXRlIF9jb2xsZWN0aW9uQ29udGFpbmVySW1wbDogSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2luaXRpYWxPcHRpb25zID0ge307XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBfb3B0aW9uUGF0aCgpOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2Z1bGxPcHRpb25QYXRoKCk6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uQ29udGFpbmVySW1wbCA9IG5ldyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVySW1wbCh0aGlzLl9zZXRPcHRpb24uYmluZCh0aGlzKSwgdGhpcy5fZmlsdGVySXRlbXMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vcHRpb25DaGFuZ2VkSGFuZGxlcihlOiBhbnkpIHtcclxuICAgICAgICBsZXQgZnVsbE9wdGlvblBhdGggPSB0aGlzLl9mdWxsT3B0aW9uUGF0aCgpO1xyXG5cclxuICAgICAgICBpZiAoZS5mdWxsTmFtZS5pbmRleE9mKGZ1bGxPcHRpb25QYXRoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uTmFtZSA9IGUuZnVsbE5hbWUuc2xpY2UoZnVsbE9wdGlvblBhdGgubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzW29wdGlvbk5hbWUgKyAnQ2hhbmdlJ107XHJcblxyXG4gICAgICAgICAgICBpZiAoZW1pdHRlcikge1xyXG4gICAgICAgICAgICAgICAgZW1pdHRlci5uZXh0KGUudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlRXZlbnRFbWl0dGVycyhldmVudHMpIHtcclxuICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbZXZlbnQuZW1pdF0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9nZXRPcHRpb24obmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5pc0xpbmtlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5vcHRpb24odGhpcy5fZnVsbE9wdGlvblBhdGgoKSArIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsT3B0aW9uc1tuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMaW5rZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5vcHRpb24odGhpcy5fZnVsbE9wdGlvblBhdGgoKSArIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsT3B0aW9uc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRIb3N0KGhvc3Q6IElOZXN0ZWRPcHRpb25Db250YWluZXIsIG9wdGlvblBhdGg6IElPcHRpb25QYXRoR2V0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5faG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgdGhpcy5faG9zdE9wdGlvblBhdGggPSBvcHRpb25QYXRoO1xyXG4gICAgICAgIHRoaXMub3B0aW9uQ2hhbmdlZEhhbmRsZXJzLnN1YnNjcmliZSh0aGlzLl9vcHRpb25DaGFuZ2VkSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGlsZHJlbjxUIGV4dGVuZHMgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb24+KHByb3BlcnR5TmFtZTogc3RyaW5nLCBpdGVtczogUXVlcnlMaXN0PFQ+KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb25Db250YWluZXJJbXBsLnNldENoaWxkcmVuKHByb3BlcnR5TmFtZSwgaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9maWx0ZXJJdGVtcyhpdGVtczogUXVlcnlMaXN0PEJhc2VOZXN0ZWRPcHRpb24+KSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4geyByZXR1cm4gaXRlbSAhPT0gdGhpczsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0ICYmIHRoaXMuX2hvc3QuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzTGlua2VkKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuaW5zdGFuY2UgJiYgdGhpcy5faG9zdC5pc0xpbmtlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3B0aW9uQ2hhbmdlZEhhbmRsZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0ICYmIHRoaXMuX2hvc3Qub3B0aW9uQ2hhbmdlZEhhbmRsZXJzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVyIHtcclxuICAgIHNldENoaWxkcmVuPFQgZXh0ZW5kcyBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbj4ocHJvcGVydHlOYW1lOiBzdHJpbmcsIGl0ZW1zOiBRdWVyeUxpc3Q8VD4pO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbkNvbnRhaW5lckltcGwgaW1wbGVtZW50cyBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbkNvbnRhaW5lciB7XHJcbiAgICBwcml2YXRlIF9hY3RpdmF0ZWRRdWVyaWVzID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2V0T3B0aW9uOiBGdW5jdGlvbiwgcHJpdmF0ZSBfZmlsdGVySXRlbXM/OiBGdW5jdGlvbikge31cclxuXHJcbiAgICBzZXRDaGlsZHJlbjxUIGV4dGVuZHMgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb24+KHByb3BlcnR5TmFtZTogc3RyaW5nLCBpdGVtczogUXVlcnlMaXN0PFQ+KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlckl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zID0gdGhpcy5fZmlsdGVySXRlbXMoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2YXRlZFF1ZXJpZXNbcHJvcGVydHlOYW1lXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmF0ZWRRdWVyaWVzW3Byb3BlcnR5TmFtZV0pIHtcclxuICAgICAgICAgICAgbGV0IHdpZGdldEl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5faW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLl92YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldE9wdGlvbihwcm9wZXJ0eU5hbWUsIHdpZGdldEl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZXN0ZWRPcHRpb24gZXh0ZW5kcyBCYXNlTmVzdGVkT3B0aW9uIHtcclxuICAgIHNldEhvc3QoaG9zdDogSU5lc3RlZE9wdGlvbkNvbnRhaW5lciwgb3B0aW9uUGF0aDogSU9wdGlvblBhdGhHZXR0ZXIpIHtcclxuICAgICAgICBzdXBlci5zZXRIb3N0KGhvc3QsIG9wdGlvblBhdGgpO1xyXG5cclxuICAgICAgICB0aGlzLl9ob3N0W3RoaXMuX29wdGlvblBhdGhdID0gdGhpcy5faW5pdGlhbE9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9mdWxsT3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9zdE9wdGlvblBhdGgoKSArIHRoaXMuX29wdGlvblBhdGggKyAnLic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb24ge1xyXG4gICAgX2luZGV4OiBudW1iZXI7XHJcbiAgICBfdmFsdWU6IE9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gZXh0ZW5kcyBCYXNlTmVzdGVkT3B0aW9uIGltcGxlbWVudHMgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb24ge1xyXG4gICAgX2luZGV4OiBudW1iZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9mdWxsT3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9zdE9wdGlvblBhdGgoKSArIHRoaXMuX29wdGlvblBhdGggKyAnWycgKyB0aGlzLl9pbmRleCArICddJyArICcuJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3ZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNMaW5rZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4ICE9PSB1bmRlZmluZWQgJiYgISF0aGlzLmluc3RhbmNlICYmIHRoaXMuX2hvc3QuaXNMaW5rZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbldpdGhUZW1wbGF0ZSBleHRlbmRzIEJhc2VOZXN0ZWRPcHRpb24ge1xyXG4gICAgdGVtcGxhdGU6IGFueTtcclxufVxyXG5cclxubGV0IHRyaWdnZXJTaG93bkV2ZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgbGV0IGNoYW5nZUhhbmRsZXJzID0gW107XHJcblxyXG4gICAgaWYgKGdldERPTSgpLmhhc0NsYXNzKGVsZW1lbnQsIFZJU0lCSUxJVFlfQ0hBTkdFX1NFTEVDVE9SKSkge1xyXG4gICAgICAgIGNoYW5nZUhhbmRsZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSGFuZGxlcnMucHVzaC5hcHBseShjaGFuZ2VIYW5kbGVycywgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIFZJU0lCSUxJVFlfQ0hBTkdFX1NFTEVDVE9SKSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VIYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGV2ZW50cy50cmlnZ2VySGFuZGxlcihjaGFuZ2VIYW5kbGVyc1tpXSwgJ2R4c2hvd24nKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGVtcGxhdGUob3B0aW9uOiBJT3B0aW9uV2l0aFRlbXBsYXRlLCBlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBkb2N1bWVudDogYW55KSB7XHJcbiAgICBpZiAoIW9wdGlvbi50ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkIHx8ICFlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjaGlsZE5vZGVzID0gW10uc2xpY2UuY2FsbChlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcyk7XHJcbiAgICBsZXQgdXNlckNvbnRlbnQgPSBjaGlsZE5vZGVzLmZpbHRlcigobikgPT4ge1xyXG4gICAgICAgIGlmIChuLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHRhZ05hbWVQcmVmaXggPSBuLnRhZ05hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgICAgIHJldHVybiAhKHRhZ05hbWVQcmVmaXggPT09ICdkeGknIHx8IHRhZ05hbWVQcmVmaXggPT09ICdkeG8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbi5ub2RlTmFtZSAhPT0gJyNjb21tZW50JyAmJiBuLnRleHRDb250ZW50LnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKCF1c2VyQ29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uLnRlbXBsYXRlID0ge1xyXG4gICAgICAgIHJlbmRlcjogKHJlbmRlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLmFkZENsYXNzKHJlc3VsdCwgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVuZGVyRGF0YS5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBnZXRFbGVtZW50KHJlbmRlckRhdGEuY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHRJbkNvbnRhaW5lciA9IGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lciwgZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdEluQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdEluQm9keSA9IGRvY3VtZW50LmJvZHkuY29udGFpbnMoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdEluQm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyU2hvd25FdmVudChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmVzdGVkT3B0aW9uSG9zdCB7XHJcbiAgICBwcml2YXRlIF9ob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyO1xyXG4gICAgcHJpdmF0ZSBfb3B0aW9uUGF0aDogSU9wdGlvblBhdGhHZXR0ZXI7XHJcblxyXG4gICAgc2V0SG9zdChob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyLCBvcHRpb25QYXRoPzogSU9wdGlvblBhdGhHZXR0ZXIpIHtcclxuICAgICAgICB0aGlzLl9ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLl9vcHRpb25QYXRoID0gb3B0aW9uUGF0aCB8fCAoKCkgPT4gJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5lc3RlZE9wdGlvbihuZXN0ZWRPcHRpb246IEJhc2VOZXN0ZWRPcHRpb24pIHtcclxuICAgICAgICBuZXN0ZWRPcHRpb24uc2V0SG9zdCh0aGlzLl9ob3N0LCB0aGlzLl9vcHRpb25QYXRoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
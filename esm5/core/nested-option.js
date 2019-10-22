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
import { EventEmitter } from '@angular/core';
import { DX_TEMPLATE_WRAPPER_CLASS } from './template';
import { getElement } from './utils';
import render from 'devextreme/core/renderer';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci9jb3JlLyIsInNvdXJjZXMiOlsibmVzdGVkLW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxPQUFPLEVBQW9DLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVyQyxPQUFPLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUM5QyxPQUFPLEtBQUssTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBRTVDLElBQU0sMEJBQTBCLEdBQUcsOEJBQThCLENBQUM7QUFVbEU7SUFTSTtRQUxVLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBTTNCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEksQ0FBQztJQUVTLGdEQUFxQixHQUEvQixVQUFnQyxDQUFNO1FBQ2xDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUUxQyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLENB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QyxDQUFDO3FCQUM3QjtpQkFDSjthQUNKO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDO0FBRUQ7SUFBQTtJQVlBLENBQUM7SUFSRyxrQ0FBTyxHQUFQLFVBQVEsSUFBNEIsRUFBRSxVQUE4QjtRQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLEVBQUYsQ0FBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsWUFBOEI7UUFDMUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG5pbXBvcnQgeyBRdWVyeUxpc3QsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEWF9URU1QTEFURV9XUkFQUEVSX0NMQVNTIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IGdldEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmltcG9ydCByZW5kZXIgZnJvbSAnZGV2ZXh0cmVtZS9jb3JlL3JlbmRlcmVyJztcclxuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJ2RldmV4dHJlbWUvZXZlbnRzJztcclxuXHJcbmNvbnN0IFZJU0lCSUxJVFlfQ0hBTkdFX1NFTEVDVE9SID0gJ2R4LXZpc2liaWxpdHktY2hhbmdlLWhhbmRsZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmVzdGVkT3B0aW9uQ29udGFpbmVyIHtcclxuICAgIGluc3RhbmNlOiBhbnk7XHJcbiAgICBpc0xpbmtlZDogYm9vbGVhbjtcclxuICAgIG9wdGlvbkNoYW5nZWRIYW5kbGVyczogRXZlbnRFbWl0dGVyPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvblBhdGhHZXR0ZXIgeyAoKTogc3RyaW5nOyB9XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU5lc3RlZE9wdGlvbiBpbXBsZW1lbnRzIElOZXN0ZWRPcHRpb25Db250YWluZXIsIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVyIHtcclxuICAgIHByb3RlY3RlZCBfaG9zdDogSU5lc3RlZE9wdGlvbkNvbnRhaW5lcjtcclxuICAgIHByb3RlY3RlZCBfaG9zdE9wdGlvblBhdGg6IElPcHRpb25QYXRoR2V0dGVyO1xyXG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvbkNvbnRhaW5lckltcGw6IElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVyO1xyXG4gICAgcHJvdGVjdGVkIF9pbml0aWFsT3B0aW9ucyA9IHt9O1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgX29wdGlvblBhdGgoKTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9mdWxsT3B0aW9uUGF0aCgpOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvbkNvbnRhaW5lckltcGwgPSBuZXcgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbkNvbnRhaW5lckltcGwodGhpcy5fc2V0T3B0aW9uLmJpbmQodGhpcyksIHRoaXMuX2ZpbHRlckl0ZW1zLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfb3B0aW9uQ2hhbmdlZEhhbmRsZXIoZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGZ1bGxPcHRpb25QYXRoID0gdGhpcy5fZnVsbE9wdGlvblBhdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKGUuZnVsbE5hbWUuaW5kZXhPZihmdWxsT3B0aW9uUGF0aCkgPT09IDApIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbk5hbWUgPSBlLmZ1bGxOYW1lLnNsaWNlKGZ1bGxPcHRpb25QYXRoLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBlbWl0dGVyID0gdGhpc1tvcHRpb25OYW1lICsgJ0NoYW5nZSddO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGVtaXR0ZXIubmV4dChlLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUV2ZW50RW1pdHRlcnMoZXZlbnRzKSB7XHJcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2V2ZW50LmVtaXRdID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0T3B0aW9uKG5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMaW5rZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2Uub3B0aW9uKHRoaXMuX2Z1bGxPcHRpb25QYXRoKCkgKyBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbE9wdGlvbnNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGlua2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub3B0aW9uKHRoaXMuX2Z1bGxPcHRpb25QYXRoKCkgKyBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SG9zdChob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyLCBvcHRpb25QYXRoOiBJT3B0aW9uUGF0aEdldHRlcikge1xyXG4gICAgICAgIHRoaXMuX2hvc3QgPSBob3N0O1xyXG4gICAgICAgIHRoaXMuX2hvc3RPcHRpb25QYXRoID0gb3B0aW9uUGF0aDtcclxuICAgICAgICB0aGlzLm9wdGlvbkNoYW5nZWRIYW5kbGVycy5zdWJzY3JpYmUodGhpcy5fb3B0aW9uQ2hhbmdlZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hpbGRyZW48VCBleHRlbmRzIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uPihwcm9wZXJ0eU5hbWU6IHN0cmluZywgaXRlbXM6IFF1ZXJ5TGlzdDxUPikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uQ29udGFpbmVySW1wbC5zZXRDaGlsZHJlbihwcm9wZXJ0eU5hbWUsIGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVySXRlbXMoaXRlbXM6IFF1ZXJ5TGlzdDxCYXNlTmVzdGVkT3B0aW9uPikge1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0gIT09IHRoaXM7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9zdCAmJiB0aGlzLl9ob3N0Lmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0xpbmtlZCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmluc3RhbmNlICYmIHRoaXMuX2hvc3QuaXNMaW5rZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9wdGlvbkNoYW5nZWRIYW5kbGVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9zdCAmJiB0aGlzLl9ob3N0Lm9wdGlvbkNoYW5nZWRIYW5kbGVycztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbkNvbnRhaW5lciB7XHJcbiAgICBzZXRDaGlsZHJlbjxUIGV4dGVuZHMgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb24+KHByb3BlcnR5TmFtZTogc3RyaW5nLCBpdGVtczogUXVlcnlMaXN0PFQ+KTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXJJbXBsIGltcGxlbWVudHMgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXIge1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVkUXVlcmllcyA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NldE9wdGlvbjogRnVuY3Rpb24sIHByaXZhdGUgX2ZpbHRlckl0ZW1zPzogRnVuY3Rpb24pIHt9XHJcblxyXG4gICAgc2V0Q2hpbGRyZW48VCBleHRlbmRzIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uPihwcm9wZXJ0eU5hbWU6IHN0cmluZywgaXRlbXM6IFF1ZXJ5TGlzdDxUPikge1xyXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJJdGVtcykge1xyXG4gICAgICAgICAgICBpdGVtcyA9IHRoaXMuX2ZpbHRlckl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmF0ZWRRdWVyaWVzW3Byb3BlcnR5TmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGVkUXVlcmllc1twcm9wZXJ0eU5hbWVdKSB7XHJcbiAgICAgICAgICAgIGxldCB3aWRnZXRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uX2luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5fdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRPcHRpb24ocHJvcGVydHlOYW1lLCB3aWRnZXRJdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmVzdGVkT3B0aW9uIGV4dGVuZHMgQmFzZU5lc3RlZE9wdGlvbiB7XHJcbiAgICBzZXRIb3N0KGhvc3Q6IElOZXN0ZWRPcHRpb25Db250YWluZXIsIG9wdGlvblBhdGg6IElPcHRpb25QYXRoR2V0dGVyKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0SG9zdChob3N0LCBvcHRpb25QYXRoKTtcclxuXHJcbiAgICAgICAgdGhpcy5faG9zdFt0aGlzLl9vcHRpb25QYXRoXSA9IHRoaXMuX2luaXRpYWxPcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZnVsbE9wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3RPcHRpb25QYXRoKCkgKyB0aGlzLl9vcHRpb25QYXRoICsgJy4nO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIHtcclxuICAgIF9pbmRleDogbnVtYmVyO1xyXG4gICAgX3ZhbHVlOiBPYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIGV4dGVuZHMgQmFzZU5lc3RlZE9wdGlvbiBpbXBsZW1lbnRzIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIHtcclxuICAgIF9pbmRleDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBfZnVsbE9wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3RPcHRpb25QYXRoKCkgKyB0aGlzLl9vcHRpb25QYXRoICsgJ1snICsgdGhpcy5faW5kZXggKyAnXScgKyAnLic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF92YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbE9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzTGlua2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleCAhPT0gdW5kZWZpbmVkICYmICEhdGhpcy5pbnN0YW5jZSAmJiB0aGlzLl9ob3N0LmlzTGlua2VkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPcHRpb25XaXRoVGVtcGxhdGUgZXh0ZW5kcyBCYXNlTmVzdGVkT3B0aW9uIHtcclxuICAgIHRlbXBsYXRlOiBhbnk7XHJcbn1cclxuXHJcbmxldCB0cmlnZ2VyU2hvd25FdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGxldCBjaGFuZ2VIYW5kbGVycyA9IFtdO1xyXG5cclxuICAgIGlmICghcmVuZGVyKGVsZW1lbnQpLmhhc0NsYXNzKFZJU0lCSUxJVFlfQ0hBTkdFX1NFTEVDVE9SKSkge1xyXG4gICAgICAgIGNoYW5nZUhhbmRsZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSGFuZGxlcnMucHVzaC5hcHBseShjaGFuZ2VIYW5kbGVycywgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIFZJU0lCSUxJVFlfQ0hBTkdFX1NFTEVDVE9SKSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VIYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGV2ZW50cy50cmlnZ2VySGFuZGxlcihjaGFuZ2VIYW5kbGVyc1tpXSwgJ2R4c2hvd24nKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGVtcGxhdGUob3B0aW9uOiBJT3B0aW9uV2l0aFRlbXBsYXRlLCBlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBkb2N1bWVudDogYW55KSB7XHJcbiAgICBpZiAoIW9wdGlvbi50ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkIHx8ICFlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjaGlsZE5vZGVzID0gW10uc2xpY2UuY2FsbChlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcyk7XHJcbiAgICBsZXQgdXNlckNvbnRlbnQgPSBjaGlsZE5vZGVzLmZpbHRlcigobikgPT4ge1xyXG4gICAgICAgIGlmIChuLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHRhZ05hbWVQcmVmaXggPSBuLnRhZ05hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgICAgIHJldHVybiAhKHRhZ05hbWVQcmVmaXggPT09ICdkeGknIHx8IHRhZ05hbWVQcmVmaXggPT09ICdkeG8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbi5ub2RlTmFtZSAhPT0gJyNjb21tZW50JyAmJiBuLnRleHRDb250ZW50LnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKCF1c2VyQ29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uLnRlbXBsYXRlID0ge1xyXG4gICAgICAgIHJlbmRlcjogKHJlbmRlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLmFkZENsYXNzKHJlc3VsdCwgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVuZGVyRGF0YS5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBnZXRFbGVtZW50KHJlbmRlckRhdGEuY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHRJbkNvbnRhaW5lciA9IGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lciwgZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdEluQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdEluQm9keSA9IGRvY3VtZW50LmJvZHkuY29udGFpbnMoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdEluQm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyU2hvd25FdmVudChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmVzdGVkT3B0aW9uSG9zdCB7XHJcbiAgICBwcml2YXRlIF9ob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyO1xyXG4gICAgcHJpdmF0ZSBfb3B0aW9uUGF0aDogSU9wdGlvblBhdGhHZXR0ZXI7XHJcblxyXG4gICAgc2V0SG9zdChob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyLCBvcHRpb25QYXRoPzogSU9wdGlvblBhdGhHZXR0ZXIpIHtcclxuICAgICAgICB0aGlzLl9ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLl9vcHRpb25QYXRoID0gb3B0aW9uUGF0aCB8fCAoKCkgPT4gJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5lc3RlZE9wdGlvbihuZXN0ZWRPcHRpb246IEJhc2VOZXN0ZWRPcHRpb24pIHtcclxuICAgICAgICBuZXN0ZWRPcHRpb24uc2V0SG9zdCh0aGlzLl9ob3N0LCB0aGlzLl9vcHRpb25QYXRoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
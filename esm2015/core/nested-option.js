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
import { DX_TEMPLATE_WRAPPER_CLASS } from './template';
import { getElement } from './utils';
import render from 'devextreme/core/renderer';
import * as events from 'devextreme/events';
const VISIBILITY_CHANGE_SELECTOR = 'dx-visibility-change-handler';
export class BaseNestedOption {
    constructor() {
        this._initialOptions = {};
        this._collectionContainerImpl = new CollectionNestedOptionContainerImpl(this._setOption.bind(this), this._filterItems.bind(this));
    }
    _optionChangedHandler(e) {
        let fullOptionPath = this._fullOptionPath();
        if (e.fullName.indexOf(fullOptionPath) === 0) {
            let optionName = e.fullName.slice(fullOptionPath.length);
            let emitter = this[optionName + 'Change'];
            if (emitter) {
                emitter.next(e.value);
            }
        }
    }
    _createEventEmitters(events) {
        events.forEach(event => {
            this[event.emit] = new EventEmitter();
        });
    }
    _getOption(name) {
        if (this.isLinked) {
            return this.instance.option(this._fullOptionPath() + name);
        }
        else {
            return this._initialOptions[name];
        }
    }
    _setOption(name, value) {
        if (this.isLinked) {
            this.instance.option(this._fullOptionPath() + name, value);
        }
        else {
            this._initialOptions[name] = value;
        }
    }
    setHost(host, optionPath) {
        this._host = host;
        this._hostOptionPath = optionPath;
        this.optionChangedHandlers.subscribe(this._optionChangedHandler.bind(this));
    }
    setChildren(propertyName, items) {
        return this._collectionContainerImpl.setChildren(propertyName, items);
    }
    _filterItems(items) {
        return items.filter((item) => { return item !== this; });
    }
    get instance() {
        return this._host && this._host.instance;
    }
    get isLinked() {
        return !!this.instance && this._host.isLinked;
    }
    get optionChangedHandlers() {
        return this._host && this._host.optionChangedHandlers;
    }
}
export class CollectionNestedOptionContainerImpl {
    constructor(_setOption, _filterItems) {
        this._setOption = _setOption;
        this._filterItems = _filterItems;
        this._activatedQueries = {};
    }
    setChildren(propertyName, items) {
        if (this._filterItems) {
            items = this._filterItems(items);
        }
        if (items.length) {
            this._activatedQueries[propertyName] = true;
        }
        if (this._activatedQueries[propertyName]) {
            let widgetItems = items.map((item, index) => {
                item._index = index;
                return item._value;
            });
            this._setOption(propertyName, widgetItems);
        }
    }
}
export class NestedOption extends BaseNestedOption {
    setHost(host, optionPath) {
        super.setHost(host, optionPath);
        this._host[this._optionPath] = this._initialOptions;
    }
    _fullOptionPath() {
        return this._hostOptionPath() + this._optionPath + '.';
    }
}
export class CollectionNestedOption extends BaseNestedOption {
    _fullOptionPath() {
        return this._hostOptionPath() + this._optionPath + '[' + this._index + ']' + '.';
    }
    get _value() {
        return this._initialOptions;
    }
    get isLinked() {
        return this._index !== undefined && !!this.instance && this._host.isLinked;
    }
}
let triggerShownEvent = function (element) {
    let changeHandlers = [];
    if (!render(element).hasClass(VISIBILITY_CHANGE_SELECTOR)) {
        changeHandlers.push(element);
    }
    changeHandlers.push.apply(changeHandlers, element.querySelectorAll('.' + VISIBILITY_CHANGE_SELECTOR));
    for (let i = 0; i < changeHandlers.length; i++) {
        events.triggerHandler(changeHandlers[i], 'dxshown');
    }
};
const ɵ0 = triggerShownEvent;
export function extractTemplate(option, element, renderer, document) {
    if (!option.template === undefined || !element.nativeElement.hasChildNodes()) {
        return;
    }
    let childNodes = [].slice.call(element.nativeElement.childNodes);
    let userContent = childNodes.filter((n) => {
        if (n.tagName) {
            let tagNamePrefix = n.tagName.toLowerCase().substr(0, 3);
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
        render: (renderData) => {
            let result = element.nativeElement;
            renderer.addClass(result, DX_TEMPLATE_WRAPPER_CLASS);
            if (renderData.container) {
                let container = getElement(renderData.container);
                let resultInContainer = container.contains(element.nativeElement);
                renderer.appendChild(container, element.nativeElement);
                if (!resultInContainer) {
                    let resultInBody = document.body.contains(container);
                    if (resultInBody) {
                        triggerShownEvent(result);
                    }
                }
            }
            return result;
        }
    };
}
export class NestedOptionHost {
    setHost(host, optionPath) {
        this._host = host;
        this._optionPath = optionPath || (() => '');
    }
    setNestedOption(nestedOption) {
        nestedOption.setHost(this._host, this._optionPath);
    }
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci9jb3JlLyIsInNvdXJjZXMiOlsibmVzdGVkLW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRztBQUVILE9BQU8sRUFBb0MsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXJDLE9BQU8sTUFBTSxNQUFNLDBCQUEwQixDQUFDO0FBQzlDLE9BQU8sS0FBSyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFNUMsTUFBTSwwQkFBMEIsR0FBRyw4QkFBOEIsQ0FBQztBQVVsRSxNQUFNO0lBU0Y7UUFMVSxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQU0zQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RJLENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxDQUFNO1FBQ2xDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUUxQyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMs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QjtRQUMxQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG5pbXBvcnQgeyBRdWVyeUxpc3QsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEWF9URU1QTEFURV9XUkFQUEVSX0NMQVNTIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IGdldEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmltcG9ydCByZW5kZXIgZnJvbSAnZGV2ZXh0cmVtZS9jb3JlL3JlbmRlcmVyJztcclxuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJ2RldmV4dHJlbWUvZXZlbnRzJztcclxuXHJcbmNvbnN0IFZJU0lCSUxJVFlfQ0hBTkdFX1NFTEVDVE9SID0gJ2R4LXZpc2liaWxpdHktY2hhbmdlLWhhbmRsZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmVzdGVkT3B0aW9uQ29udGFpbmVyIHtcclxuICAgIGluc3RhbmNlOiBhbnk7XHJcbiAgICBpc0xpbmtlZDogYm9vbGVhbjtcclxuICAgIG9wdGlvbkNoYW5nZWRIYW5kbGVyczogRXZlbnRFbWl0dGVyPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvblBhdGhHZXR0ZXIgeyAoKTogc3RyaW5nOyB9XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU5lc3RlZE9wdGlvbiBpbXBsZW1lbnRzIElOZXN0ZWRPcHRpb25Db250YWluZXIsIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVyIHtcclxuICAgIHByb3RlY3RlZCBfaG9zdDogSU5lc3RlZE9wdGlvbkNvbnRhaW5lcjtcclxuICAgIHByb3RlY3RlZCBfaG9zdE9wdGlvblBhdGg6IElPcHRpb25QYXRoR2V0dGVyO1xyXG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvbkNvbnRhaW5lckltcGw6IElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uQ29udGFpbmVyO1xyXG4gICAgcHJvdGVjdGVkIF9pbml0aWFsT3B0aW9ucyA9IHt9O1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgX29wdGlvblBhdGgoKTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9mdWxsT3B0aW9uUGF0aCgpOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvbkNvbnRhaW5lckltcGwgPSBuZXcgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbkNvbnRhaW5lckltcGwodGhpcy5fc2V0T3B0aW9uLmJpbmQodGhpcyksIHRoaXMuX2ZpbHRlckl0ZW1zLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfb3B0aW9uQ2hhbmdlZEhhbmRsZXIoZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGZ1bGxPcHRpb25QYXRoID0gdGhpcy5fZnVsbE9wdGlvblBhdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKGUuZnVsbE5hbWUuaW5kZXhPZihmdWxsT3B0aW9uUGF0aCkgPT09IDApIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbk5hbWUgPSBlLmZ1bGxOYW1lLnNsaWNlKGZ1bGxPcHRpb25QYXRoLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBlbWl0dGVyID0gdGhpc1tvcHRpb25OYW1lICsgJ0NoYW5nZSddO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGVtaXR0ZXIubmV4dChlLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUV2ZW50RW1pdHRlcnMoZXZlbnRzKSB7XHJcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2V2ZW50LmVtaXRdID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0T3B0aW9uKG5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMaW5rZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2Uub3B0aW9uKHRoaXMuX2Z1bGxPcHRpb25QYXRoKCkgKyBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbE9wdGlvbnNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGlua2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub3B0aW9uKHRoaXMuX2Z1bGxPcHRpb25QYXRoKCkgKyBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbE9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SG9zdChob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyLCBvcHRpb25QYXRoOiBJT3B0aW9uUGF0aEdldHRlcikge1xyXG4gICAgICAgIHRoaXMuX2hvc3QgPSBob3N0O1xyXG4gICAgICAgIHRoaXMuX2hvc3RPcHRpb25QYXRoID0gb3B0aW9uUGF0aDtcclxuICAgICAgICB0aGlzLm9wdGlvbkNoYW5nZWRIYW5kbGVycy5zdWJzY3JpYmUodGhpcy5fb3B0aW9uQ2hhbmdlZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hpbGRyZW48VCBleHRlbmRzIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uPihwcm9wZXJ0eU5hbWU6IHN0cmluZywgaXRlbXM6IFF1ZXJ5TGlzdDxUPikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uQ29udGFpbmVySW1wbC5zZXRDaGlsZHJlbihwcm9wZXJ0eU5hbWUsIGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVySXRlbXMoaXRlbXM6IFF1ZXJ5TGlzdDxCYXNlTmVzdGVkT3B0aW9uPikge1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0gIT09IHRoaXM7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9zdCAmJiB0aGlzLl9ob3N0Lmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0xpbmtlZCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmluc3RhbmNlICYmIHRoaXMuX2hvc3QuaXNMaW5rZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9wdGlvbkNoYW5nZWRIYW5kbGVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9zdCAmJiB0aGlzLl9ob3N0Lm9wdGlvbkNoYW5nZWRIYW5kbGVycztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGVjdGlvbk5lc3RlZE9wdGlvbkNvbnRhaW5lciB7XHJcbiAgICBzZXRDaGlsZHJlbjxUIGV4dGVuZHMgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb24+KHByb3BlcnR5TmFtZTogc3RyaW5nLCBpdGVtczogUXVlcnlMaXN0PFQ+KTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXJJbXBsIGltcGxlbWVudHMgSUNvbGxlY3Rpb25OZXN0ZWRPcHRpb25Db250YWluZXIge1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVkUXVlcmllcyA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NldE9wdGlvbjogRnVuY3Rpb24sIHByaXZhdGUgX2ZpbHRlckl0ZW1zPzogRnVuY3Rpb24pIHt9XHJcblxyXG4gICAgc2V0Q2hpbGRyZW48VCBleHRlbmRzIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uPihwcm9wZXJ0eU5hbWU6IHN0cmluZywgaXRlbXM6IFF1ZXJ5TGlzdDxUPikge1xyXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJJdGVtcykge1xyXG4gICAgICAgICAgICBpdGVtcyA9IHRoaXMuX2ZpbHRlckl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmF0ZWRRdWVyaWVzW3Byb3BlcnR5TmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGVkUXVlcmllc1twcm9wZXJ0eU5hbWVdKSB7XHJcbiAgICAgICAgICAgIGxldCB3aWRnZXRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uX2luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5fdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRPcHRpb24ocHJvcGVydHlOYW1lLCB3aWRnZXRJdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmVzdGVkT3B0aW9uIGV4dGVuZHMgQmFzZU5lc3RlZE9wdGlvbiB7XHJcbiAgICBzZXRIb3N0KGhvc3Q6IElOZXN0ZWRPcHRpb25Db250YWluZXIsIG9wdGlvblBhdGg6IElPcHRpb25QYXRoR2V0dGVyKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0SG9zdChob3N0LCBvcHRpb25QYXRoKTtcclxuXHJcbiAgICAgICAgdGhpcy5faG9zdFt0aGlzLl9vcHRpb25QYXRoXSA9IHRoaXMuX2luaXRpYWxPcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZnVsbE9wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3RPcHRpb25QYXRoKCkgKyB0aGlzLl9vcHRpb25QYXRoICsgJy4nO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIHtcclxuICAgIF9pbmRleDogbnVtYmVyO1xyXG4gICAgX3ZhbHVlOiBPYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIGV4dGVuZHMgQmFzZU5lc3RlZE9wdGlvbiBpbXBsZW1lbnRzIElDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIHtcclxuICAgIF9pbmRleDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBfZnVsbE9wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3RPcHRpb25QYXRoKCkgKyB0aGlzLl9vcHRpb25QYXRoICsgJ1snICsgdGhpcy5faW5kZXggKyAnXScgKyAnLic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF92YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbE9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzTGlua2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleCAhPT0gdW5kZWZpbmVkICYmICEhdGhpcy5pbnN0YW5jZSAmJiB0aGlzLl9ob3N0LmlzTGlua2VkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPcHRpb25XaXRoVGVtcGxhdGUgZXh0ZW5kcyBCYXNlTmVzdGVkT3B0aW9uIHtcclxuICAgIHRlbXBsYXRlOiBhbnk7XHJcbn1cclxuXHJcbmxldCB0cmlnZ2VyU2hvd25FdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGxldCBjaGFuZ2VIYW5kbGVycyA9IFtdO1xyXG5cclxuICAgIGlmICghcmVuZGVyKGVsZW1lbnQpLmhhc0NsYXNzKFZJU0lCSUxJVFlfQ0hBTkdFX1NFTEVDVE9SKSkge1xyXG4gICAgICAgIGNoYW5nZUhhbmRsZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSGFuZGxlcnMucHVzaC5hcHBseShjaGFuZ2VIYW5kbGVycywgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIFZJU0lCSUxJVFlfQ0hBTkdFX1NFTEVDVE9SKSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VIYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGV2ZW50cy50cmlnZ2VySGFuZGxlcihjaGFuZ2VIYW5kbGVyc1tpXSwgJ2R4c2hvd24nKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGVtcGxhdGUob3B0aW9uOiBJT3B0aW9uV2l0aFRlbXBsYXRlLCBlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBkb2N1bWVudDogYW55KSB7XHJcbiAgICBpZiAoIW9wdGlvbi50ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkIHx8ICFlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjaGlsZE5vZGVzID0gW10uc2xpY2UuY2FsbChlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcyk7XHJcbiAgICBsZXQgdXNlckNvbnRlbnQgPSBjaGlsZE5vZGVzLmZpbHRlcigobikgPT4ge1xyXG4gICAgICAgIGlmIChuLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHRhZ05hbWVQcmVmaXggPSBuLnRhZ05hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgICAgIHJldHVybiAhKHRhZ05hbWVQcmVmaXggPT09ICdkeGknIHx8IHRhZ05hbWVQcmVmaXggPT09ICdkeG8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbi5ub2RlTmFtZSAhPT0gJyNjb21tZW50JyAmJiBuLnRleHRDb250ZW50LnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKCF1c2VyQ29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uLnRlbXBsYXRlID0ge1xyXG4gICAgICAgIHJlbmRlcjogKHJlbmRlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLmFkZENsYXNzKHJlc3VsdCwgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVuZGVyRGF0YS5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBnZXRFbGVtZW50KHJlbmRlckRhdGEuY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHRJbkNvbnRhaW5lciA9IGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lciwgZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdEluQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdEluQm9keSA9IGRvY3VtZW50LmJvZHkuY29udGFpbnMoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdEluQm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyU2hvd25FdmVudChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmVzdGVkT3B0aW9uSG9zdCB7XHJcbiAgICBwcml2YXRlIF9ob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyO1xyXG4gICAgcHJpdmF0ZSBfb3B0aW9uUGF0aDogSU9wdGlvblBhdGhHZXR0ZXI7XHJcblxyXG4gICAgc2V0SG9zdChob3N0OiBJTmVzdGVkT3B0aW9uQ29udGFpbmVyLCBvcHRpb25QYXRoPzogSU9wdGlvblBhdGhHZXR0ZXIpIHtcclxuICAgICAgICB0aGlzLl9ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLl9vcHRpb25QYXRoID0gb3B0aW9uUGF0aCB8fCAoKCkgPT4gJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5lc3RlZE9wdGlvbihuZXN0ZWRPcHRpb246IEJhc2VOZXN0ZWRPcHRpb24pIHtcclxuICAgICAgICBuZXN0ZWRPcHRpb24uc2V0SG9zdCh0aGlzLl9ob3N0LCB0aGlzLl9vcHRpb25QYXRoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
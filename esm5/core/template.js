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
import { Directive, NgModule, TemplateRef, ViewContainerRef, Input, Renderer2, NgZone } from '@angular/core';
import { DxTemplateHost } from './template-host';
import { getElement } from './utils';
import * as events from 'devextreme/events';
export var DX_TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
var RenderData = (function () {
    function RenderData() {
    }
    return RenderData;
}());
export { RenderData };
var DxTemplateDirective = (function () {
    function DxTemplateDirective(templateRef, viewContainerRef, templateHost, renderer, zone) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.zone = zone;
        templateHost.setTemplate(this);
    }
    Object.defineProperty(DxTemplateDirective.prototype, "dxTemplateOf", {
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    DxTemplateDirective.prototype.renderTemplate = function (renderData) {
        var _this = this;
        var childView = this.viewContainerRef.createEmbeddedView(this.templateRef, {
            '$implicit': renderData.model,
            index: renderData.index
        });
        var container = getElement(renderData.container);
        if (renderData.container) {
            childView.rootNodes.forEach(function (element) {
                _this.renderer.appendChild(container, element);
            });
        }
        return childView;
    };
    DxTemplateDirective.prototype.render = function (renderData) {
        var _this = this;
        var childView;
        if (this.zone.isStable) {
            childView = this.zone.run(function () {
                return _this.renderTemplate(renderData);
            });
        }
        else {
            childView = this.renderTemplate(renderData);
            // =========== WORKAROUND =============
            // https://github.com/angular/angular/issues/12243
            childView['detectChanges']();
            // =========== /WORKAROUND =============
        }
        childView.rootNodes.forEach(function (element) {
            if (element.nodeType === 1) {
                _this.renderer.addClass(element, DX_TEMPLATE_WRAPPER_CLASS);
            }
            events.one(element, 'dxremove', function (_a, params) {
                if (!params || !params._angularIntegration) {
                    childView.destroy();
                }
            });
        });
        return childView.rootNodes;
    };
    DxTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dxTemplate]'
                },] },
    ];
    /** @nocollapse */
    DxTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
        { type: DxTemplateHost, },
        { type: Renderer2, },
        { type: NgZone, },
    ]; };
    DxTemplateDirective.propDecorators = {
        "dxTemplateOf": [{ type: Input },],
    };
    return DxTemplateDirective;
}());
export { DxTemplateDirective };
var DxTemplateModule = (function () {
    function DxTemplateModule() {
    }
    DxTemplateModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DxTemplateDirective],
                    exports: [DxTemplateDirective]
                },] },
    ];
    return DxTemplateModule;
}());
export { DxTemplateModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb3JlL3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQWVBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxLQUFLLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxxQkFBcUIsQ0FBQztBQUUvRCxJQUFBOzs7cUJBaENBO0lBb0NDLENBQUE7QUFKRCxzQkFJQzs7SUFZRyw2QkFBb0IsV0FBNkIsRUFDckMsZ0JBQWtDLEVBQzFDLFlBQTRCLEVBQ3BCLFFBQW1CLEVBQ25CLElBQVk7UUFKSixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUVsQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDcEIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzswQkFYRyw2Q0FBWTt1QkFBQyxLQUFLO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDOzs7OztJQUNyQixDQUFDO0lBV00sNENBQWMsR0FBdEIsVUFBdUIsVUFBc0I7UUFBN0MsaUJBY0M7UUFiRyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN6RSxXQUFXLEVBQUUsVUFBVSxDQUFDLEtBQUs7WUFDN0IsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUNoQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDakQsQ0FBQyxDQUFDO1NBQ047UUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDO0tBQ3BCO0lBRUQsb0NBQU0sR0FBTixVQUFPLFVBQXNCO1FBQTdCLGlCQTJCQztRQTFCRyxJQUFJLFNBQVMsQ0FBQztRQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNyQixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFDLENBQUMsQ0FBQztTQUNOO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7O1lBRzVDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDOztTQUVoQztRQUVELFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO2FBQzlEO1lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQUMsRUFBRSxFQUFFLE1BQU07Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztvQkFDekMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN2QjthQUNKLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0tBQzlCOztnQkE3REosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO2lCQUMzQjs7OztnQkF0QkcsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBT1gsY0FBYztnQkFMbkIsU0FBUztnQkFDVCxNQUFNOzs7aUNBb0JMLEtBQUs7OzhCQTFDVjs7U0F5Q2EsbUJBQW1COzs7OztnQkE2RC9CLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDOzsyQkF6R0Q7O1NBMEdhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBUZW1wbGF0ZVJlZixcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIFJlbmRlcmVyMixcclxuICAgIE5nWm9uZSxcclxuICAgIEVtYmVkZGVkVmlld1JlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICdkZXZleHRyZW1lL2V2ZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyA9ICdkeC10ZW1wbGF0ZS13cmFwcGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJEYXRhIHtcclxuICAgIG1vZGVsOiBhbnk7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgY29udGFpbmVyOiBhbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZHhUZW1wbGF0ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgZHhUZW1wbGF0ZU9mKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7XHJcbiAgICAgICAgdGVtcGxhdGVIb3N0LnNldFRlbXBsYXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVGVtcGxhdGUocmVuZGVyRGF0YTogUmVuZGVyRGF0YSk6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHtcclxuICAgICAgICBjb25zdCBjaGlsZFZpZXcgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYsIHtcclxuICAgICAgICAgICAgJyRpbXBsaWNpdCc6IHJlbmRlckRhdGEubW9kZWwsXHJcbiAgICAgICAgICAgIGluZGV4OiByZW5kZXJEYXRhLmluZGV4XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldEVsZW1lbnQocmVuZGVyRGF0YS5jb250YWluZXIpO1xyXG4gICAgICAgIGlmIChyZW5kZXJEYXRhLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjaGlsZFZpZXcucm9vdE5vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJEYXRhOiBSZW5kZXJEYXRhKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkVmlldztcclxuICAgICAgICBpZiAodGhpcy56b25lLmlzU3RhYmxlKSB7XHJcbiAgICAgICAgICAgIGNoaWxkVmlldyA9IHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGVtcGxhdGUocmVuZGVyRGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoaWxkVmlldyA9IHRoaXMucmVuZGVyVGVtcGxhdGUocmVuZGVyRGF0YSk7XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09IFdPUktBUk9VTkQgPT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjI0M1xyXG4gICAgICAgICAgICBjaGlsZFZpZXdbJ2RldGVjdENoYW5nZXMnXSgpO1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PSAvV09SS0FST1VORCA9PT09PT09PT09PT09XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZFZpZXcucm9vdE5vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy5vbmUoZWxlbWVudCwgJ2R4cmVtb3ZlJywgKHt9LCBwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMuX2FuZ3VsYXJJbnRlZ3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRWaWV3LnJvb3ROb2RlcztcclxuICAgIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0R4VGVtcGxhdGVEaXJlY3RpdmVdLFxyXG4gICAgZXhwb3J0czogW0R4VGVtcGxhdGVEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRlbXBsYXRlTW9kdWxlIHsgfVxyXG4iXX0=
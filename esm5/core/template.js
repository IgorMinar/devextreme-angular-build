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
/* tslint:disable:use-input-property-decorator */
import { Directive, NgModule, TemplateRef, ViewContainerRef, Input, Renderer2, NgZone, EmbeddedViewRef } from '@angular/core';
import { DxTemplateHost } from './template-host';
import { getElement } from './utils';
import * as events from 'devextreme/events';
export var DX_TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
var RenderData = /** @class */ (function () {
    function RenderData() {
    }
    return RenderData;
}());
export { RenderData };
var DxTemplateDirective = /** @class */ (function () {
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
    DxTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: DxTemplateHost },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxTemplateDirective.prototype, "dxTemplateOf", null);
    DxTemplateDirective = tslib_1.__decorate([
        Directive({
            selector: '[dxTemplate]'
        })
    ], DxTemplateDirective);
    return DxTemplateDirective;
}());
export { DxTemplateDirective };
var DxTemplateModule = /** @class */ (function () {
    function DxTemplateModule() {
    }
    DxTemplateModule = tslib_1.__decorate([
        NgModule({
            declarations: [DxTemplateDirective],
            exports: [DxTemplateDirective]
        })
    ], DxTemplateModule);
    return DxTemplateModule;
}());
export { DxTemplateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvY29yZS8iLCJzb3VyY2VzIjpbInRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLGVBQWUsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxLQUFLLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxxQkFBcUIsQ0FBQztBQUUvRDtJQUFBO0lBSUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBS0Q7SUFPSSw2QkFBb0IsV0FBNkIsRUFDckMsZ0JBQWtDLEVBQzFDLFlBQTRCLEVBQ3BCLFFBQW1CLEVBQ25CLElBQVk7UUFKSixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUVsQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDcEIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBWEQsc0JBQUksNkNBQVk7YUFBaEIsVUFBaUIsS0FBSztZQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFXTSw0Q0FBYyxHQUF0QixVQUF1QixVQUFzQjtRQUE3QyxpQkFjQztRQWJHLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pFLFdBQVcsRUFBRSxVQUFVLENBQUMsS0FBSztZQUM3QixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUNoQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sVUFBc0I7UUFBN0IsaUJBMkJDO1FBMUJHLElBQUksU0FBUyxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3RCLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1Qyx1Q0FBdUM7WUFDdkMsa0RBQWtEO1lBQ2xELFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDO1lBQzdCLHdDQUF3QztTQUMzQztRQUVELFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUseUJBQXlCLENBQUMsQ0FBQzthQUM5RDtZQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFDLEVBQUUsRUFBRSxNQUFNO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFO29CQUN4QyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3ZCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUMvQixDQUFDOztnQkFuRGdDLFdBQVc7Z0JBQ2QsZ0JBQWdCO2dCQUM1QixjQUFjO2dCQUNWLFNBQVM7Z0JBQ2IsTUFBTTs7SUFUeEI7UUFEQyxLQUFLLEVBQUU7MkRBR1A7SUFKUSxtQkFBbUI7UUFIL0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7U0FDM0IsQ0FBQztPQUNXLG1CQUFtQixDQTJEL0I7SUFBRCwwQkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLG1CQUFtQjtBQWlFaEM7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBUZW1wbGF0ZVJlZixcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIFJlbmRlcmVyMixcclxuICAgIE5nWm9uZSxcclxuICAgIEVtYmVkZGVkVmlld1JlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICdkZXZleHRyZW1lL2V2ZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyA9ICdkeC10ZW1wbGF0ZS13cmFwcGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJEYXRhIHtcclxuICAgIG1vZGVsOiBhbnk7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgY29udGFpbmVyOiBhbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZHhUZW1wbGF0ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgZHhUZW1wbGF0ZU9mKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7XHJcbiAgICAgICAgdGVtcGxhdGVIb3N0LnNldFRlbXBsYXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVGVtcGxhdGUocmVuZGVyRGF0YTogUmVuZGVyRGF0YSk6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHtcclxuICAgICAgICBjb25zdCBjaGlsZFZpZXcgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYsIHtcclxuICAgICAgICAgICAgJyRpbXBsaWNpdCc6IHJlbmRlckRhdGEubW9kZWwsXHJcbiAgICAgICAgICAgIGluZGV4OiByZW5kZXJEYXRhLmluZGV4XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldEVsZW1lbnQocmVuZGVyRGF0YS5jb250YWluZXIpO1xyXG4gICAgICAgIGlmIChyZW5kZXJEYXRhLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjaGlsZFZpZXcucm9vdE5vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJEYXRhOiBSZW5kZXJEYXRhKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkVmlldztcclxuICAgICAgICBpZiAodGhpcy56b25lLmlzU3RhYmxlKSB7XHJcbiAgICAgICAgICAgIGNoaWxkVmlldyA9IHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGVtcGxhdGUocmVuZGVyRGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoaWxkVmlldyA9IHRoaXMucmVuZGVyVGVtcGxhdGUocmVuZGVyRGF0YSk7XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09IFdPUktBUk9VTkQgPT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjI0M1xyXG4gICAgICAgICAgICBjaGlsZFZpZXdbJ2RldGVjdENoYW5nZXMnXSgpO1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PSAvV09SS0FST1VORCA9PT09PT09PT09PT09XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZFZpZXcucm9vdE5vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy5vbmUoZWxlbWVudCwgJ2R4cmVtb3ZlJywgKHt9LCBwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMuX2FuZ3VsYXJJbnRlZ3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRWaWV3LnJvb3ROb2RlcztcclxuICAgIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0R4VGVtcGxhdGVEaXJlY3RpdmVdLFxyXG4gICAgZXhwb3J0czogW0R4VGVtcGxhdGVEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRlbXBsYXRlTW9kdWxlIHsgfVxyXG4iXX0=
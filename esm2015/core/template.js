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
export const DX_TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
export class RenderData {
}
let DxTemplateDirective = class DxTemplateDirective {
    constructor(templateRef, viewContainerRef, templateHost, renderer, zone) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.zone = zone;
        templateHost.setTemplate(this);
    }
    set dxTemplateOf(value) {
        this.name = value;
    }
    ;
    renderTemplate(renderData) {
        const childView = this.viewContainerRef.createEmbeddedView(this.templateRef, {
            '$implicit': renderData.model,
            index: renderData.index
        });
        const container = getElement(renderData.container);
        if (renderData.container) {
            childView.rootNodes.forEach((element) => {
                this.renderer.appendChild(container, element);
            });
        }
        return childView;
    }
    render(renderData) {
        let childView;
        if (this.zone.isStable) {
            childView = this.zone.run(() => {
                return this.renderTemplate(renderData);
            });
        }
        else {
            childView = this.renderTemplate(renderData);
            // =========== WORKAROUND =============
            // https://github.com/angular/angular/issues/12243
            childView['detectChanges']();
            // =========== /WORKAROUND =============
        }
        childView.rootNodes.forEach((element) => {
            if (element.nodeType === 1) {
                this.renderer.addClass(element, DX_TEMPLATE_WRAPPER_CLASS);
            }
            events.one(element, 'dxremove', ({}, params) => {
                if (!params || !params._angularIntegration) {
                    childView.destroy();
                }
            });
        });
        return childView.rootNodes;
    }
};
DxTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: DxTemplateHost },
    { type: Renderer2 },
    { type: NgZone }
];
tslib_1.__decorate([
    Input()
], DxTemplateDirective.prototype, "dxTemplateOf", null);
DxTemplateDirective = tslib_1.__decorate([
    Directive({
        selector: '[dxTemplate]'
    })
], DxTemplateDirective);
export { DxTemplateDirective };
let DxTemplateModule = class DxTemplateModule {
};
DxTemplateModule = tslib_1.__decorate([
    NgModule({
        declarations: [DxTemplateDirective],
        exports: [DxTemplateDirective]
    })
], DxTemplateModule);
export { DxTemplateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvY29yZS8iLCJzb3VyY2VzIjpbInRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLGVBQWUsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxLQUFLLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxxQkFBcUIsQ0FBQztBQUUvRCxNQUFNO0NBSUw7QUFLRCxJQUFhLG1CQUFtQixHQUFoQztJQU9JLFlBQW9CLFdBQTZCLEVBQ3JDLGdCQUFrQyxFQUMxQyxZQUE0QixFQUNwQixRQUFtQixFQUNuQixJQUFZO1FBSkosZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ3JDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ3BCLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQVhELElBQUksWUFBWSxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUFBLENBQUM7SUFXTSxjQUFjLENBQUMsVUFBc0I7UUFDekMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQzdCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFFSCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUN0QixTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBc0I7UUFDekIsSUFBSSxTQUFTLENBQUM7UUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BCLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1Qyx1Q0FBdUM7WUFDdkMsa0RBQWtEO1lBQ2xELFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDO1lBQzdCLHdDQUF3QztTQUMzQztRQUVELFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDLENBQUM7YUFDOUQ7WUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUU7b0JBQ3hDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7Q0FDSixDQUFBOztZQXBEb0MsV0FBVztZQUNkLGdCQUFnQjtZQUM1QixjQUFjO1lBQ1YsU0FBUztZQUNiLE1BQU07O0FBVHhCO0lBREMsS0FBSyxFQUFFO3VEQUdQO0FBSlEsbUJBQW1CO0lBSC9CLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO0tBQzNCLENBQUM7R0FDVyxtQkFBbUIsQ0EyRC9CO1NBM0RZLG1CQUFtQjtBQWlFaEMsSUFBYSxnQkFBZ0IsR0FBN0I7Q0FBaUMsQ0FBQTtBQUFwQixnQkFBZ0I7SUFKNUIsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDakMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBUZW1wbGF0ZVJlZixcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIFJlbmRlcmVyMixcclxuICAgIE5nWm9uZSxcclxuICAgIEVtYmVkZGVkVmlld1JlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICdkZXZleHRyZW1lL2V2ZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyA9ICdkeC10ZW1wbGF0ZS13cmFwcGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJEYXRhIHtcclxuICAgIG1vZGVsOiBhbnk7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgY29udGFpbmVyOiBhbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZHhUZW1wbGF0ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgZHhUZW1wbGF0ZU9mKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7XHJcbiAgICAgICAgdGVtcGxhdGVIb3N0LnNldFRlbXBsYXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVGVtcGxhdGUocmVuZGVyRGF0YTogUmVuZGVyRGF0YSk6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHtcclxuICAgICAgICBjb25zdCBjaGlsZFZpZXcgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYsIHtcclxuICAgICAgICAgICAgJyRpbXBsaWNpdCc6IHJlbmRlckRhdGEubW9kZWwsXHJcbiAgICAgICAgICAgIGluZGV4OiByZW5kZXJEYXRhLmluZGV4XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldEVsZW1lbnQocmVuZGVyRGF0YS5jb250YWluZXIpO1xyXG4gICAgICAgIGlmIChyZW5kZXJEYXRhLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjaGlsZFZpZXcucm9vdE5vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJEYXRhOiBSZW5kZXJEYXRhKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkVmlldztcclxuICAgICAgICBpZiAodGhpcy56b25lLmlzU3RhYmxlKSB7XHJcbiAgICAgICAgICAgIGNoaWxkVmlldyA9IHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGVtcGxhdGUocmVuZGVyRGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoaWxkVmlldyA9IHRoaXMucmVuZGVyVGVtcGxhdGUocmVuZGVyRGF0YSk7XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09IFdPUktBUk9VTkQgPT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjI0M1xyXG4gICAgICAgICAgICBjaGlsZFZpZXdbJ2RldGVjdENoYW5nZXMnXSgpO1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PSAvV09SS0FST1VORCA9PT09PT09PT09PT09XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZFZpZXcucm9vdE5vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgRFhfVEVNUExBVEVfV1JBUFBFUl9DTEFTUyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy5vbmUoZWxlbWVudCwgJ2R4cmVtb3ZlJywgKHt9LCBwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMuX2FuZ3VsYXJJbnRlZ3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRWaWV3LnJvb3ROb2RlcztcclxuICAgIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0R4VGVtcGxhdGVEaXJlY3RpdmVdLFxyXG4gICAgZXhwb3J0czogW0R4VGVtcGxhdGVEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRlbXBsYXRlTW9kdWxlIHsgfVxyXG4iXX0=
/* tslint:disable:use-input-property-decorator */
import * as tslib_1 from "tslib";
import { Directive, NgModule, TemplateRef, ViewContainerRef, Input, Renderer2, NgZone } from '@angular/core';
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxTemplateDirective.prototype, "dxTemplateOf", null);
    DxTemplateDirective = tslib_1.__decorate([
        Directive({
            selector: '[dxTemplate]'
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef,
            ViewContainerRef,
            DxTemplateHost,
            Renderer2,
            NgZone])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJjb3JlL3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEtBQUssTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBRTVDLE1BQU0sQ0FBQyxJQUFNLHlCQUF5QixHQUFHLHFCQUFxQixDQUFDO0FBRS9EO0lBQUE7SUFJQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7QUFLRDtJQU9JLDZCQUFvQixXQUE2QixFQUNyQyxnQkFBa0MsRUFDMUMsWUFBNEIsRUFDcEIsUUFBbUIsRUFDbkIsSUFBWTtRQUpKLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUNyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRWxDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNwQixZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFYRCxzQkFBSSw2Q0FBWTthQUFoQixVQUFpQixLQUFLO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQVdNLDRDQUFjLEdBQXRCLFVBQXVCLFVBQXNCO1FBQTdDLGlCQWNDO1FBYkcsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQzdCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFFSCxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDaEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELG9DQUFNLEdBQU4sVUFBTyxVQUFzQjtRQUE3QixpQkEyQkM7UUExQkcsSUFBSSxTQUFTLENBQUM7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckIsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUN0QixNQUFNLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLHVDQUF1QztZQUN2QyxrREFBa0Q7WUFDbEQsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7WUFDN0Isd0NBQXdDO1FBQzVDLENBQUM7UUFFRCxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUseUJBQXlCLENBQUMsQ0FBQztZQUMvRCxDQUFDO1lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQUMsRUFBRSxFQUFFLE1BQU07Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztvQkFDekMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUF4REQ7UUFEQyxLQUFLLEVBQUU7OzsyREFHUDtJQUpRLG1CQUFtQjtRQUgvQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztTQUMzQixDQUFDO2lEQVFtQyxXQUFXO1lBQ2QsZ0JBQWdCO1lBQzVCLGNBQWM7WUFDVixTQUFTO1lBQ2IsTUFBTTtPQVhmLG1CQUFtQixDQTJEL0I7SUFBRCwwQkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLG1CQUFtQjtBQWlFaEM7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIFRlbXBsYXRlUmVmLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIElucHV0LFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgTmdab25lLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4vdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IGdldEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJ2RldmV4dHJlbWUvZXZlbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEWF9URU1QTEFURV9XUkFQUEVSX0NMQVNTID0gJ2R4LXRlbXBsYXRlLXdyYXBwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckRhdGEge1xyXG4gICAgbW9kZWw6IGFueTtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBjb250YWluZXI6IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkeFRlbXBsYXRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIER4VGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgQElucHV0KClcclxuICAgIHNldCBkeFRlbXBsYXRlT2YodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcclxuICAgIH07XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcclxuICAgICAgICB0ZW1wbGF0ZUhvc3Quc2V0VGVtcGxhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUZW1wbGF0ZShyZW5kZXJEYXRhOiBSZW5kZXJEYXRhKTogRW1iZWRkZWRWaWV3UmVmPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkVmlldyA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZiwge1xyXG4gICAgICAgICAgICAnJGltcGxpY2l0JzogcmVuZGVyRGF0YS5tb2RlbCxcclxuICAgICAgICAgICAgaW5kZXg6IHJlbmRlckRhdGEuaW5kZXhcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZ2V0RWxlbWVudChyZW5kZXJEYXRhLmNvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKHJlbmRlckRhdGEuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNoaWxkVmlldy5yb290Tm9kZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChjb250YWluZXIsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZFZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlckRhdGE6IFJlbmRlckRhdGEpIHtcclxuICAgICAgICBsZXQgY2hpbGRWaWV3O1xyXG4gICAgICAgIGlmICh0aGlzLnpvbmUuaXNTdGFibGUpIHtcclxuICAgICAgICAgICAgY2hpbGRWaWV3ID0gdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZShyZW5kZXJEYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hpbGRWaWV3ID0gdGhpcy5yZW5kZXJUZW1wbGF0ZShyZW5kZXJEYXRhKTtcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT0gV09SS0FST1VORCA9PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyMjQzXHJcbiAgICAgICAgICAgIGNoaWxkVmlld1snZGV0ZWN0Q2hhbmdlcyddKCk7XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09IC9XT1JLQVJPVU5EID09PT09PT09PT09PT1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkVmlldy5yb290Tm9kZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBEWF9URU1QTEFURV9XUkFQUEVSX0NMQVNTKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnRzLm9uZShlbGVtZW50LCAnZHhyZW1vdmUnLCAoe30sIHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5fYW5ndWxhckludGVncmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWaWV3LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZFZpZXcucm9vdE5vZGVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbRHhUZW1wbGF0ZURpcmVjdGl2ZV0sXHJcbiAgICBleHBvcnRzOiBbRHhUZW1wbGF0ZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4VGVtcGxhdGVNb2R1bGUgeyB9XHJcbiJdfQ==
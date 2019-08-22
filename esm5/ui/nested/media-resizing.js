/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoHtmlEditorMediaResizing } from './base/html-editor-media-resizing';
var DxoMediaResizingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoMediaResizingComponent, _super);
    function DxoMediaResizingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMediaResizingComponent.prototype, "_optionPath", {
        get: function () {
            return 'mediaResizing';
        },
        enumerable: true,
        configurable: true
    });
    DxoMediaResizingComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-media-resizing',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'allowedTargets',
                'enabled'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoMediaResizingComponent);
    return DxoMediaResizingComponent;
}(DxoHtmlEditorMediaResizing));
export { DxoMediaResizingComponent };
var DxoMediaResizingModule = /** @class */ (function () {
    function DxoMediaResizingModule() {
    }
    DxoMediaResizingModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoMediaResizingComponent
            ],
            exports: [
                DxoMediaResizingComponent
            ],
        })
    ], DxoMediaResizingModule);
    return DxoMediaResizingModule;
}());
export { DxoMediaResizingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtcmVzaXppbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvbWVkaWEtcmVzaXppbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWEvRTtJQUErQyxxREFBMEI7SUFPckUsbUNBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLGtEQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUpRLHlCQUF5QjtRQVZyQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLGdCQUFnQjtnQkFDaEIsU0FBUzthQUNaO3FCQUxRLEVBQUU7U0FNZCxDQUFDO1FBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQVJuQyx5QkFBeUIsQ0FjckM7SUFBRCxnQ0FBQztDQUFBLEFBZEQsQ0FBK0MsMEJBQTBCLEdBY3hFO1NBZFkseUJBQXlCO0FBd0J0QztJQUFBO0lBQXNDLENBQUM7SUFBMUIsc0JBQXNCO1FBUmxDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWix5QkFBeUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AseUJBQXlCO2FBQzFCO1NBQ0YsQ0FBQztPQUNXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQSxBQUF2QyxJQUF1QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9IdG1sRWRpdG9yTWVkaWFSZXNpemluZyB9IGZyb20gJy4vYmFzZS9odG1sLWVkaXRvci1tZWRpYS1yZXNpemluZyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1tZWRpYS1yZXNpemluZycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhbGxvd2VkVGFyZ2V0cycsXHJcbiAgICAgICAgJ2VuYWJsZWQnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9NZWRpYVJlc2l6aW5nQ29tcG9uZW50IGV4dGVuZHMgRHhvSHRtbEVkaXRvck1lZGlhUmVzaXppbmcge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdtZWRpYVJlc2l6aW5nJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9NZWRpYVJlc2l6aW5nQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9NZWRpYVJlc2l6aW5nQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b01lZGlhUmVzaXppbmdNb2R1bGUgeyB9XHJcbiJdfQ==
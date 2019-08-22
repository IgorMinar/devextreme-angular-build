/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoHtmlEditorMediaResizing } from './base/html-editor-media-resizing';
let DxoMediaResizingComponent = class DxoMediaResizingComponent extends DxoHtmlEditorMediaResizing {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'mediaResizing';
    }
};
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
export { DxoMediaResizingComponent };
let DxoMediaResizingModule = class DxoMediaResizingModule {
};
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
export { DxoMediaResizingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtcmVzaXppbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvbWVkaWEtcmVzaXppbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWEvRSxJQUFhLHlCQUF5QixHQUF0QywrQkFBdUMsU0FBUSwwQkFBMEI7SUFPckUsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVZELElBQWMsV0FBVztRQUNyQixNQUFNLENBQUMsZUFBZSxDQUFDO0lBQzNCLENBQUM7Q0FVSixDQUFBO0FBZFkseUJBQXlCO0lBVnJDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixnQkFBZ0I7WUFDaEIsU0FBUztTQUNaO2lCQUxRLEVBQUU7S0FNZCxDQUFDO0lBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQVJuQyx5QkFBeUIsQ0FjckM7U0FkWSx5QkFBeUI7QUF3QnRDLElBQWEsc0JBQXNCLEdBQW5DO0NBQXVDLENBQUE7QUFBMUIsc0JBQXNCO0lBUmxDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLHlCQUF5QjtTQUMxQjtRQUNELE9BQU8sRUFBRTtZQUNQLHlCQUF5QjtTQUMxQjtLQUNGLENBQUM7R0FDVyxzQkFBc0IsQ0FBSTtTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9IdG1sRWRpdG9yTWVkaWFSZXNpemluZyB9IGZyb20gJy4vYmFzZS9odG1sLWVkaXRvci1tZWRpYS1yZXNpemluZyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1tZWRpYS1yZXNpemluZycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhbGxvd2VkVGFyZ2V0cycsXHJcbiAgICAgICAgJ2VuYWJsZWQnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9NZWRpYVJlc2l6aW5nQ29tcG9uZW50IGV4dGVuZHMgRHhvSHRtbEVkaXRvck1lZGlhUmVzaXppbmcge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdtZWRpYVJlc2l6aW5nJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9NZWRpYVJlc2l6aW5nQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9NZWRpYVJlc2l6aW5nQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b01lZGlhUmVzaXppbmdNb2R1bGUgeyB9XHJcbiJdfQ==
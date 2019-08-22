/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoHtmlEditorVariables } from './base/html-editor-variables';
var DxoVariablesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoVariablesComponent, _super);
    function DxoVariablesComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoVariablesComponent.prototype, "_optionPath", {
        get: function () {
            return 'variables';
        },
        enumerable: true,
        configurable: true
    });
    DxoVariablesComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-variables',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'dataSource',
                'escapeChar'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoVariablesComponent);
    return DxoVariablesComponent;
}(DxoHtmlEditorVariables));
export { DxoVariablesComponent };
var DxoVariablesModule = /** @class */ (function () {
    function DxoVariablesModule() {
    }
    DxoVariablesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoVariablesComponent
            ],
            exports: [
                DxoVariablesComponent
            ],
        })
    ], DxoVariablesModule);
    return DxoVariablesModule;
}());
export { DxoVariablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3ZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBYXRFO0lBQTJDLGlEQUFzQjtJQU83RCwrQkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBVkQsc0JBQWMsOENBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBSlEscUJBQXFCO1FBVmpDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLFlBQVk7Z0JBQ1osWUFBWTthQUNmO3FCQUxRLEVBQUU7U0FNZCxDQUFDO1FBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQVJuQyxxQkFBcUIsQ0FjakM7SUFBRCw0QkFBQztDQUFBLEFBZEQsQ0FBMkMsc0JBQXNCLEdBY2hFO1NBZFkscUJBQXFCO0FBd0JsQztJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBUjlCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixxQkFBcUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AscUJBQXFCO2FBQ3RCO1NBQ0YsQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztTQUF0QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9IdG1sRWRpdG9yVmFyaWFibGVzIH0gZnJvbSAnLi9iYXNlL2h0bWwtZWRpdG9yLXZhcmlhYmxlcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by12YXJpYWJsZXMnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnZGF0YVNvdXJjZScsXHJcbiAgICAgICAgJ2VzY2FwZUNoYXInXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9WYXJpYWJsZXNDb21wb25lbnQgZXh0ZW5kcyBEeG9IdG1sRWRpdG9yVmFyaWFibGVzIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAndmFyaWFibGVzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9WYXJpYWJsZXNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1ZhcmlhYmxlc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9WYXJpYWJsZXNNb2R1bGUgeyB9XHJcbiJdfQ==
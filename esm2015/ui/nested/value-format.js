/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormat } from './base/format';
let DxoValueFormatComponent = class DxoValueFormatComponent extends DxoFormat {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'valueFormat';
    }
};
DxoValueFormatComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-value-format',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'currency',
            'formatter',
            'parser',
            'precision',
            'type'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoValueFormatComponent);
export { DxoValueFormatComponent };
let DxoValueFormatModule = class DxoValueFormatModule {
};
DxoValueFormatModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoValueFormatComponent
        ],
        exports: [
            DxoValueFormatComponent
        ],
    })
], DxoValueFormatModule);
export { DxoValueFormatModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3ZhbHVlLWZvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQjFDLElBQWEsdUJBQXVCLEdBQXBDLDZCQUFxQyxTQUFRLFNBQVM7SUFPbEQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVZELElBQWMsV0FBVztRQUNyQixNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3pCLENBQUM7Q0FVSixDQUFBO0FBZFksdUJBQXVCO0lBYm5DLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixVQUFVO1lBQ1YsV0FBVztZQUNYLFFBQVE7WUFDUixXQUFXO1lBQ1gsTUFBTTtTQUNUO2lCQVJRLEVBQUU7S0FTZCxDQUFDO0lBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQVJuQyx1QkFBdUIsQ0FjbkM7U0FkWSx1QkFBdUI7QUF3QnBDLElBQWEsb0JBQW9CLEdBQWpDO0NBQXFDLENBQUE7QUFBeEIsb0JBQW9CO0lBUmhDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLHVCQUF1QjtTQUN4QjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUF1QjtTQUN4QjtLQUNGLENBQUM7R0FDVyxvQkFBb0IsQ0FBSTtTQUF4QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9Gb3JtYXQgfSBmcm9tICcuL2Jhc2UvZm9ybWF0JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXZhbHVlLWZvcm1hdCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdjdXJyZW5jeScsXHJcbiAgICAgICAgJ2Zvcm1hdHRlcicsXHJcbiAgICAgICAgJ3BhcnNlcicsXHJcbiAgICAgICAgJ3ByZWNpc2lvbicsXHJcbiAgICAgICAgJ3R5cGUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9WYWx1ZUZvcm1hdENvbXBvbmVudCBleHRlbmRzIER4b0Zvcm1hdCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3ZhbHVlRm9ybWF0JztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9WYWx1ZUZvcm1hdENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvVmFsdWVGb3JtYXRDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvVmFsdWVGb3JtYXRNb2R1bGUgeyB9XHJcbiJdfQ==
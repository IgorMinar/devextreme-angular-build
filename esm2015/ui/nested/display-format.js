/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormat } from './base/format';
let DxoDisplayFormatComponent = class DxoDisplayFormatComponent extends DxoFormat {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'displayFormat';
    }
};
DxoDisplayFormatComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-display-format',
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
], DxoDisplayFormatComponent);
export { DxoDisplayFormatComponent };
let DxoDisplayFormatModule = class DxoDisplayFormatModule {
};
DxoDisplayFormatModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoDisplayFormatComponent
        ],
        exports: [
            DxoDisplayFormatComponent
        ],
    })
], DxoDisplayFormatModule);
export { DxoDisplayFormatModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS1mb3JtYXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvZGlzcGxheS1mb3JtYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0IxQyxJQUFhLHlCQUF5QixHQUF0QywrQkFBdUMsU0FBUSxTQUFTO0lBT3BELFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUMzQixDQUFDO0NBVUosQ0FBQTtBQWRZLHlCQUF5QjtJQWJyQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osVUFBVTtZQUNWLFdBQVc7WUFDWCxRQUFRO1lBQ1IsV0FBVztZQUNYLE1BQU07U0FDVDtpQkFSUSxFQUFFO0tBU2QsQ0FBQztJQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBRG1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7R0FSbkMseUJBQXlCLENBY3JDO1NBZFkseUJBQXlCO0FBd0J0QyxJQUFhLHNCQUFzQixHQUFuQztDQUF1QyxDQUFBO0FBQTFCLHNCQUFzQjtJQVJsQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWix5QkFBeUI7U0FDMUI7UUFDRCxPQUFPLEVBQUU7WUFDUCx5QkFBeUI7U0FDMUI7S0FDRixDQUFDO0dBQ1csc0JBQXNCLENBQUk7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0IH0gZnJvbSAnLi9iYXNlL2Zvcm1hdCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1kaXNwbGF5LWZvcm1hdCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdjdXJyZW5jeScsXHJcbiAgICAgICAgJ2Zvcm1hdHRlcicsXHJcbiAgICAgICAgJ3BhcnNlcicsXHJcbiAgICAgICAgJ3ByZWNpc2lvbicsXHJcbiAgICAgICAgJ3R5cGUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EaXNwbGF5Rm9ybWF0Q29tcG9uZW50IGV4dGVuZHMgRHhvRm9ybWF0IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZGlzcGxheUZvcm1hdCc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvRGlzcGxheUZvcm1hdENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRGlzcGxheUZvcm1hdENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EaXNwbGF5Rm9ybWF0TW9kdWxlIHsgfVxyXG4iXX0=
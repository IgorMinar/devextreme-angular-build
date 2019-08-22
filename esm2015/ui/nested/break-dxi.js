/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiVizScaleBreak } from './base/viz-scale-break-dxi';
let DxiBreakComponent = class DxiBreakComponent extends DxiVizScaleBreak {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'breaks';
    }
};
DxiBreakComponent = tslib_1.__decorate([
    Component({
        selector: 'dxi-break',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'endValue',
            'startValue'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxiBreakComponent);
export { DxiBreakComponent };
let DxiBreakModule = class DxiBreakModule {
};
DxiBreakModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxiBreakComponent
        ],
        exports: [
            DxiBreakComponent
        ],
    })
], DxiBreakModule);
export { DxiBreakModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWstZHhpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2JyZWFrLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBYTlELElBQWEsaUJBQWlCLEdBQTlCLHVCQUErQixTQUFRLGdCQUFnQjtJQU9uRCxZQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFDUixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBVkQsSUFBYyxXQUFXO1FBQ3JCLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQVVKLENBQUE7QUFkWSxpQkFBaUI7SUFWN0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixVQUFVO1lBQ1YsWUFBWTtTQUNmO2lCQUxRLEVBQUU7S0FNZCxDQUFDO0lBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQVJuQyxpQkFBaUIsQ0FjN0I7U0FkWSxpQkFBaUI7QUF3QjlCLElBQWEsY0FBYyxHQUEzQjtDQUErQixDQUFBO0FBQWxCLGNBQWM7SUFSMUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osaUJBQWlCO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsaUJBQWlCO1NBQ2xCO0tBQ0YsQ0FBQztHQUNXLGNBQWMsQ0FBSTtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpVml6U2NhbGVCcmVhayB9IGZyb20gJy4vYmFzZS92aXotc2NhbGUtYnJlYWstZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLWJyZWFrJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2VuZFZhbHVlJyxcclxuICAgICAgICAnc3RhcnRWYWx1ZSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUJyZWFrQ29tcG9uZW50IGV4dGVuZHMgRHhpVml6U2NhbGVCcmVhayB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2JyZWFrcyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpQnJlYWtDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aUJyZWFrQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUJyZWFrTW9kdWxlIHsgfVxyXG4iXX0=
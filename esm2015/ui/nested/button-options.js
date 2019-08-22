/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoButtonOptions } from './base/button-options';
let DxoButtonOptionsComponent = class DxoButtonOptionsComponent extends DxoButtonOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'buttonOptions';
    }
};
DxoButtonOptionsComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-button-options',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'activeStateEnabled',
            'disabled',
            'elementAttr',
            'focusStateEnabled',
            'height',
            'hint',
            'hoverStateEnabled',
            'icon',
            'onClick',
            'onContentReady',
            'onDisposing',
            'onInitialized',
            'onOptionChanged',
            'rtlEnabled',
            'stylingMode',
            'tabIndex',
            'template',
            'text',
            'type',
            'useSubmitBehavior',
            'validationGroup',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoButtonOptionsComponent);
export { DxoButtonOptionsComponent };
let DxoButtonOptionsModule = class DxoButtonOptionsModule {
};
DxoButtonOptionsModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoButtonOptionsComponent
        ],
        exports: [
            DxoButtonOptionsComponent
        ],
    })
], DxoButtonOptionsModule);
export { DxoButtonOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvYnV0dG9uLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQW1DekQsSUFBYSx5QkFBeUIsR0FBdEMsK0JBQXVDLFNBQVEsZ0JBQWdCO0lBTzNELFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUMzQixDQUFDO0NBVUosQ0FBQTtBQWRZLHlCQUF5QjtJQWhDckMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLE1BQU0sRUFBRTtZQUNKLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsVUFBVTtZQUNWLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsUUFBUTtZQUNSLE1BQU07WUFDTixtQkFBbUI7WUFDbkIsTUFBTTtZQUNOLFNBQVM7WUFDVCxnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsWUFBWTtZQUNaLGFBQWE7WUFDYixVQUFVO1lBQ1YsVUFBVTtZQUNWLE1BQU07WUFDTixNQUFNO1lBQ04sbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsT0FBTztTQUNWO2lCQTNCUSxFQUFFO0tBNEJkLENBQUM7SUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBOzZDQURtQyxnQkFBZ0I7UUFDdEMsZ0JBQWdCO0dBUm5DLHlCQUF5QixDQWNyQztTQWRZLHlCQUF5QjtBQXdCdEMsSUFBYSxzQkFBc0IsR0FBbkM7Q0FBdUMsQ0FBQTtBQUExQixzQkFBc0I7SUFSbEMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1oseUJBQXlCO1NBQzFCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AseUJBQXlCO1NBQzFCO0tBQ0YsQ0FBQztHQUNXLHNCQUFzQixDQUFJO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0J1dHRvbk9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvYnV0dG9uLW9wdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tYnV0dG9uLW9wdGlvbnMnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdlbGVtZW50QXR0cicsXHJcbiAgICAgICAgJ2ZvY3VzU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2hvdmVyU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnaWNvbicsXHJcbiAgICAgICAgJ29uQ2xpY2snLFxyXG4gICAgICAgICdvbkNvbnRlbnRSZWFkeScsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzdHlsaW5nTW9kZScsXHJcbiAgICAgICAgJ3RhYkluZGV4JyxcclxuICAgICAgICAndGVtcGxhdGUnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3VzZVN1Ym1pdEJlaGF2aW9yJyxcclxuICAgICAgICAndmFsaWRhdGlvbkdyb3VwJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQnV0dG9uT3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIER4b0J1dHRvbk9wdGlvbnMge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdidXR0b25PcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9CdXR0b25PcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9CdXR0b25PcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0J1dHRvbk9wdGlvbnNNb2R1bGUgeyB9XHJcbiJdfQ==
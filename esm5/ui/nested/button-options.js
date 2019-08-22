/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoButtonOptions } from './base/button-options';
var DxoButtonOptionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoButtonOptionsComponent, _super);
    function DxoButtonOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoButtonOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'buttonOptions';
        },
        enumerable: true,
        configurable: true
    });
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
    return DxoButtonOptionsComponent;
}(DxoButtonOptions));
export { DxoButtonOptionsComponent };
var DxoButtonOptionsModule = /** @class */ (function () {
    function DxoButtonOptionsModule() {
    }
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
    return DxoButtonOptionsModule;
}());
export { DxoButtonOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvYnV0dG9uLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQW1DekQ7SUFBK0MscURBQWdCO0lBTzNELG1DQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYyxrREFBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFKUSx5QkFBeUI7UUFoQ3JDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osV0FBVztnQkFDWCxvQkFBb0I7Z0JBQ3BCLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLFFBQVE7Z0JBQ1IsTUFBTTtnQkFDTixtQkFBbUI7Z0JBQ25CLE1BQU07Z0JBQ04sU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixNQUFNO2dCQUNOLG1CQUFtQjtnQkFDbkIsaUJBQWlCO2dCQUNqQixTQUFTO2dCQUNULE9BQU87YUFDVjtxQkEzQlEsRUFBRTtTQTRCZCxDQUFDO1FBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQVJuQyx5QkFBeUIsQ0FjckM7SUFBRCxnQ0FBQztDQUFBLEFBZEQsQ0FBK0MsZ0JBQWdCLEdBYzlEO1NBZFkseUJBQXlCO0FBd0J0QztJQUFBO0lBQXNDLENBQUM7SUFBMUIsc0JBQXNCO1FBUmxDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWix5QkFBeUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AseUJBQXlCO2FBQzFCO1NBQ0YsQ0FBQztPQUNXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQSxBQUF2QyxJQUF1QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9CdXR0b25PcHRpb25zIH0gZnJvbSAnLi9iYXNlL2J1dHRvbi1vcHRpb25zJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWJ1dHRvbi1vcHRpb25zJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2ljb24nLFxyXG4gICAgICAgICdvbkNsaWNrJyxcclxuICAgICAgICAnb25Db250ZW50UmVhZHknLFxyXG4gICAgICAgICdvbkRpc3Bvc2luZycsXHJcbiAgICAgICAgJ29uSW5pdGlhbGl6ZWQnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdydGxFbmFibGVkJyxcclxuICAgICAgICAnc3R5bGluZ01vZGUnLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3RlbXBsYXRlJyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd1c2VTdWJtaXRCZWhhdmlvcicsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25Hcm91cCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0J1dHRvbk9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEeG9CdXR0b25PcHRpb25zIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnYnV0dG9uT3B0aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQnV0dG9uT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQnV0dG9uT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9CdXR0b25PcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=
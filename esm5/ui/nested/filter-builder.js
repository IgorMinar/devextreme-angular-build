/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFilterBuilderOptions } from './base/filter-builder-options';
import { DxiCustomOperationComponent } from './custom-operation-dxi';
import { DxiFieldComponent } from './field-dxi';
var DxoFilterBuilderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoFilterBuilderComponent, _super);
    function DxoFilterBuilderComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'valueChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterBuilderComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterBuilder';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderComponent.prototype, "customOperationsChildren", {
        get: function () {
            return this._getOption('customOperations');
        },
        set: function (value) {
            this.setChildren('customOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderComponent.prototype, "fieldsChildren", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this.setChildren('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoFilterBuilderComponent.prototype, "valueChange", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiCustomOperationComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoFilterBuilderComponent.prototype, "customOperationsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiFieldComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoFilterBuilderComponent.prototype, "fieldsChildren", null);
    DxoFilterBuilderComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-filter-builder',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'accessKey',
                'activeStateEnabled',
                'allowHierarchicalFields',
                'customOperations',
                'disabled',
                'elementAttr',
                'fields',
                'filterOperationDescriptions',
                'focusStateEnabled',
                'groupOperationDescriptions',
                'groupOperations',
                'height',
                'hint',
                'hoverStateEnabled',
                'maxGroupLevel',
                'onContentReady',
                'onDisposing',
                'onEditorPrepared',
                'onEditorPreparing',
                'onInitialized',
                'onOptionChanged',
                'onValueChanged',
                'rtlEnabled',
                'tabIndex',
                'value',
                'visible',
                'width'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoFilterBuilderComponent);
    return DxoFilterBuilderComponent;
}(DxoFilterBuilderOptions));
export { DxoFilterBuilderComponent };
var DxoFilterBuilderModule = /** @class */ (function () {
    function DxoFilterBuilderModule() {
    }
    DxoFilterBuilderModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoFilterBuilderComponent
            ],
            exports: [
                DxoFilterBuilderComponent
            ],
        })
    ], DxoFilterBuilderModule);
    return DxoFilterBuilderModule;
}());
export { DxoFilterBuilderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvZmlsdGVyLWJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQXNDaEQ7SUFBK0MscURBQXVCO0lBMkJsRSxtQ0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FRVjtRQU5HLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUEvQkQsc0JBQWMsa0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksK0RBQXdCO2FBQTVCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxDQUFDO2FBQ0QsVUFBNkIsS0FBSztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQUhBO0lBTUQsc0JBQUkscURBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO2FBQ0QsVUFBbUIsS0FBSztZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQWpCUztRQUFULE1BQU0sRUFBRTswQ0FBYyxZQUFZO2tFQUFNO0lBT3pDO1FBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMkJBQTJCLEVBQTNCLENBQTJCLENBQUMsQ0FBQzswQ0FDL0IsU0FBUzs7NkVBRXhDO0lBTUQ7UUFEQyxlQUFlLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDOzBDQUMvQixTQUFTOzttRUFFOUI7SUF0QlEseUJBQXlCO1FBbkNyQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLFdBQVc7Z0JBQ1gsb0JBQW9CO2dCQUNwQix5QkFBeUI7Z0JBQ3pCLGtCQUFrQjtnQkFDbEIsVUFBVTtnQkFDVixhQUFhO2dCQUNiLFFBQVE7Z0JBQ1IsNkJBQTZCO2dCQUM3QixtQkFBbUI7Z0JBQ25CLDRCQUE0QjtnQkFDNUIsaUJBQWlCO2dCQUNqQixRQUFRO2dCQUNSLE1BQU07Z0JBQ04sbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsYUFBYTtnQkFDYixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixVQUFVO2dCQUNWLE9BQU87Z0JBQ1AsU0FBUztnQkFDVCxPQUFPO2FBQ1Y7cUJBOUJRLEVBQUU7U0ErQmQsQ0FBQztRQTRCZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BNUJuQyx5QkFBeUIsQ0F1Q3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQXZDRCxDQUErQyx1QkFBdUIsR0F1Q3JFO1NBdkNZLHlCQUF5QjtBQWlEdEM7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQVJsQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1oseUJBQXlCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHlCQUF5QjthQUMxQjtTQUNGLENBQUM7T0FDVyxzQkFBc0IsQ0FBSTtJQUFELDZCQUFDO0NBQUEsQUFBdkMsSUFBdUM7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0ZpbHRlckJ1aWxkZXJPcHRpb25zIH0gZnJvbSAnLi9iYXNlL2ZpbHRlci1idWlsZGVyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEeGlDdXN0b21PcGVyYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbS1vcGVyYXRpb24tZHhpJztcclxuaW1wb3J0IHsgRHhpRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1maWx0ZXItYnVpbGRlcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhY2Nlc3NLZXknLFxyXG4gICAgICAgICdhY3RpdmVTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdhbGxvd0hpZXJhcmNoaWNhbEZpZWxkcycsXHJcbiAgICAgICAgJ2N1c3RvbU9wZXJhdGlvbnMnLFxyXG4gICAgICAgICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZmllbGRzJyxcclxuICAgICAgICAnZmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zJyxcclxuICAgICAgICAnZm9jdXNTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdncm91cE9wZXJhdGlvbkRlc2NyaXB0aW9ucycsXHJcbiAgICAgICAgJ2dyb3VwT3BlcmF0aW9ucycsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ21heEdyb3VwTGV2ZWwnLFxyXG4gICAgICAgICdvbkNvbnRlbnRSZWFkeScsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25FZGl0b3JQcmVwYXJlZCcsXHJcbiAgICAgICAgJ29uRWRpdG9yUHJlcGFyaW5nJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uVmFsdWVDaGFuZ2VkJyxcclxuICAgICAgICAncnRsRW5hYmxlZCcsXHJcbiAgICAgICAgJ3RhYkluZGV4JyxcclxuICAgICAgICAndmFsdWUnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GaWx0ZXJCdWlsZGVyQ29tcG9uZW50IGV4dGVuZHMgRHhvRmlsdGVyQnVpbGRlck9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZmlsdGVyQnVpbGRlcic7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlDdXN0b21PcGVyYXRpb25Db21wb25lbnQpKVxyXG4gICAgZ2V0IGN1c3RvbU9wZXJhdGlvbnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQ3VzdG9tT3BlcmF0aW9uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9tT3BlcmF0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbU9wZXJhdGlvbnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2N1c3RvbU9wZXJhdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUZpZWxkQ29tcG9uZW50KSlcclxuICAgIGdldCBmaWVsZHNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpRmllbGRDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWVsZHMnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWVsZHNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2ZpZWxkcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUNoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvRmlsdGVyQnVpbGRlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRmlsdGVyQnVpbGRlckNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GaWx0ZXJCdWlsZGVyTW9kdWxlIHsgfVxyXG4iXX0=
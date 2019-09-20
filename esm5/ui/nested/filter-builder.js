var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFilterBuilderOptions } from './base/filter-builder-options';
import { DxiCustomOperationComponent } from './custom-operation-dxi';
import { DxiFieldComponent } from './field-dxi';
var DxoFilterBuilderComponent = (function (_super) {
    __extends(DxoFilterBuilderComponent, _super);
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
    DxoFilterBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-filter-builder',
                    template: '',
                    styles: [''],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoFilterBuilderComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoFilterBuilderComponent.propDecorators = {
        "valueChange": [{ type: Output },],
        "customOperationsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiCustomOperationComponent; }),] },],
        "fieldsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiFieldComponent; }),] },],
    };
    return DxoFilterBuilderComponent;
}(DxoFilterBuilderOptions));
export { DxoFilterBuilderComponent };
var DxoFilterBuilderModule = (function () {
    function DxoFilterBuilderModule() {
    }
    DxoFilterBuilderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFilterBuilderComponent
                    ],
                    exports: [
                        DxoFilterBuilderComponent
                    ],
                },] },
    ];
    return DxoFilterBuilderModule;
}());
export { DxoFilterBuilderModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvZmlsdGVyLWJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDOztJQXNDRCw2Q0FBdUI7SUEyQmxFLG1DQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQVFWO1FBTkcsS0FBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtTQUMxQixDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7SUEvQkQsc0JBQWMsa0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQzFCOzs7T0FBQTswQkFJRywrREFBd0I7O1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O2FBRS9DLFVBQTZCLEtBQUs7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQzs7OzswQkFHRyxxREFBYzs7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7YUFFckMsVUFBbUIsS0FBSztZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQzs7Ozs7Z0JBNURKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE1BQU0sRUFBRTt3QkFDSixXQUFXO3dCQUNYLG9CQUFvQjt3QkFDcEIseUJBQXlCO3dCQUN6QixrQkFBa0I7d0JBQ2xCLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixRQUFRO3dCQUNSLDZCQUE2Qjt3QkFDN0IsbUJBQW1CO3dCQUNuQiw0QkFBNEI7d0JBQzVCLGlCQUFpQjt3QkFDakIsUUFBUTt3QkFDUixNQUFNO3dCQUNOLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixPQUFPO3dCQUNQLFNBQVM7d0JBQ1QsT0FBTztxQkFDVjtpQkFDSjs7OztnQkF4Q1EsZ0JBQWdCLHVCQW9FUixRQUFRLFlBQUksSUFBSTtnQkFwRXhCLGdCQUFnQix1QkFxRVosSUFBSTs7O2dDQXZCWixNQUFNOzZDQU1OLGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLDJCQUEyQixFQUEzQixDQUEyQixDQUFDO21DQVE3RCxlQUFlLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs7b0NBN0Z4RDtFQTBFK0MsdUJBQXVCO1NBQXpELHlCQUF5Qjs7Ozs7Z0JBeUNyQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5QjtxQkFDMUI7aUJBQ0Y7O2lDQTFIRDs7U0EySGEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJCdWlsZGVyT3B0aW9ucyB9IGZyb20gJy4vYmFzZS9maWx0ZXItYnVpbGRlci1vcHRpb25zJztcclxuaW1wb3J0IHsgRHhpQ3VzdG9tT3BlcmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20tb3BlcmF0aW9uLWR4aSc7XHJcbmltcG9ydCB7IER4aUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tZmlsdGVyLWJ1aWxkZXInLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnYWxsb3dIaWVyYXJjaGljYWxGaWVsZHMnLFxyXG4gICAgICAgICdjdXN0b21PcGVyYXRpb25zJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdlbGVtZW50QXR0cicsXHJcbiAgICAgICAgJ2ZpZWxkcycsXHJcbiAgICAgICAgJ2ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9ucycsXHJcbiAgICAgICAgJ2ZvY3VzU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnZ3JvdXBPcGVyYXRpb25EZXNjcmlwdGlvbnMnLFxyXG4gICAgICAgICdncm91cE9wZXJhdGlvbnMnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdoaW50JyxcclxuICAgICAgICAnaG92ZXJTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdtYXhHcm91cExldmVsJyxcclxuICAgICAgICAnb25Db250ZW50UmVhZHknLFxyXG4gICAgICAgICdvbkRpc3Bvc2luZycsXHJcbiAgICAgICAgJ29uRWRpdG9yUHJlcGFyZWQnLFxyXG4gICAgICAgICdvbkVkaXRvclByZXBhcmluZycsXHJcbiAgICAgICAgJ29uSW5pdGlhbGl6ZWQnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvblZhbHVlQ2hhbmdlZCcsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRmlsdGVyQnVpbGRlckNvbXBvbmVudCBleHRlbmRzIER4b0ZpbHRlckJ1aWxkZXJPcHRpb25zIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbHRlckJ1aWxkZXInO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpQ3VzdG9tT3BlcmF0aW9uQ29tcG9uZW50KSlcclxuICAgIGdldCBjdXN0b21PcGVyYXRpb25zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbU9wZXJhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21PcGVyYXRpb25zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdjdXN0b21PcGVyYXRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlGaWVsZENvbXBvbmVudCkpXHJcbiAgICBnZXQgZmllbGRzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUZpZWxkQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmllbGRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmllbGRzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdmaWVsZHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRmlsdGVyQnVpbGRlck1vZHVsZSB7IH1cclxuIl19
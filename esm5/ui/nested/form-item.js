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
import { Component, NgModule, Host, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormSimpleItem } from './base/form-simple-item';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
var DxoFormItemComponent = (function (_super) {
    __extends(DxoFormItemComponent, _super);
    function DxoFormItemComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFormItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'formItem';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormItemComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoFormItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-form-item',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'colSpan',
                        'cssClass',
                        'dataField',
                        'editorOptions',
                        'editorType',
                        'helpText',
                        'isRequired',
                        'itemType',
                        'label',
                        'name',
                        'template',
                        'validationRules',
                        'visible',
                        'visibleIndex'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoFormItemComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoFormItemComponent.propDecorators = {
        "validationRulesChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiValidationRuleComponent; }),] },],
    };
    return DxoFormItemComponent;
}(DxoFormSimpleItem));
export { DxoFormItemComponent };
var DxoFormItemModule = (function () {
    function DxoFormItemModule() {
    }
    DxoFormItemModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFormItemComponent
                    ],
                    exports: [
                        DxoFormItemComponent
                    ],
                },] },
    ];
    return DxoFormItemModule;
}());
export { DxoFormItemModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL2Zvcm0taXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBeUJ6Qix3Q0FBaUI7SUFldkQsOEJBQWdDLGtCQUNoQjtRQURoQixZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7SUFsQkQsc0JBQWMsNkNBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3JCOzs7T0FBQTswQkFJRyx5REFBdUI7O1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O2FBRTlDLFVBQTRCLEtBQUs7WUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5Qzs7Ozs7Z0JBbkNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM3QixNQUFNLEVBQUU7d0JBQ0osU0FBUzt3QkFDVCxVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixVQUFVO3dCQUNWLE9BQU87d0JBQ1AsTUFBTTt3QkFDTixVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsU0FBUzt3QkFDVCxjQUFjO3FCQUNqQjtpQkFDSjs7OztnQkExQlEsZ0JBQWdCLHVCQTBDUixRQUFRLFlBQUksSUFBSTtnQkExQ3hCLGdCQUFnQix1QkEyQ1osSUFBSTs7OzRDQVRaLGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLDBCQUEwQixFQUExQixDQUEwQixDQUFDOzsrQkFqRWpFO0VBMEQwQyxpQkFBaUI7U0FBOUMsb0JBQW9COzs7OztnQkF3QmhDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3FCQUNyQjtpQkFDRjs7NEJBekZEOztTQTBGYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0Zvcm1TaW1wbGVJdGVtIH0gZnJvbSAnLi9iYXNlL2Zvcm0tc2ltcGxlLWl0ZW0nO1xyXG5pbXBvcnQgeyBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdGlvbi1ydWxlLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1mb3JtLWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnY29sU3BhbicsXHJcbiAgICAgICAgJ2Nzc0NsYXNzJyxcclxuICAgICAgICAnZGF0YUZpZWxkJyxcclxuICAgICAgICAnZWRpdG9yT3B0aW9ucycsXHJcbiAgICAgICAgJ2VkaXRvclR5cGUnLFxyXG4gICAgICAgICdoZWxwVGV4dCcsXHJcbiAgICAgICAgJ2lzUmVxdWlyZWQnLFxyXG4gICAgICAgICdpdGVtVHlwZScsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ3RlbXBsYXRlJyxcclxuICAgICAgICAndmFsaWRhdGlvblJ1bGVzJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3Zpc2libGVJbmRleCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0Zvcm1JdGVtQ29tcG9uZW50IGV4dGVuZHMgRHhvRm9ybVNpbXBsZUl0ZW0ge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdmb3JtSXRlbSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCkpXHJcbiAgICBnZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvblJ1bGVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd2YWxpZGF0aW9uUnVsZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9Gb3JtSXRlbUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRm9ybUl0ZW1Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRm9ybUl0ZW1Nb2R1bGUgeyB9XHJcbiJdfQ==
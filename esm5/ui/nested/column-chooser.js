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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoColumnChooserComponent = (function (_super) {
    __extends(DxoColumnChooserComponent, _super);
    function DxoColumnChooserComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoColumnChooserComponent.prototype, "allowSearch", {
        get: function () {
            return this._getOption('allowSearch');
        },
        set: function (value) {
            this._setOption('allowSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "emptyPanelText", {
        get: function () {
            return this._getOption('emptyPanelText');
        },
        set: function (value) {
            this._setOption('emptyPanelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "_optionPath", {
        get: function () {
            return 'columnChooser';
        },
        enumerable: true,
        configurable: true
    });
    DxoColumnChooserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-column-chooser',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoColumnChooserComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoColumnChooserComponent.propDecorators = {
        "allowSearch": [{ type: Input },],
        "emptyPanelText": [{ type: Input },],
        "enabled": [{ type: Input },],
        "height": [{ type: Input },],
        "mode": [{ type: Input },],
        "searchTimeout": [{ type: Input },],
        "title": [{ type: Input },],
        "width": [{ type: Input },],
    };
    return DxoColumnChooserComponent;
}(NestedOption));
export { DxoColumnChooserComponent };
var DxoColumnChooserModule = (function () {
    function DxoColumnChooserModule() {
    }
    DxoColumnChooserModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoColumnChooserComponent
                    ],
                    exports: [
                        DxoColumnChooserComponent
                    ],
                },] },
    ];
    return DxoColumnChooserModule;
}());
export { DxoColumnChooserModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWNob29zZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvY29sdW1uLWNob29zZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBU1QsNkNBQVk7SUF1RXZELG1DQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEOzBCQTFFRyxrREFBVzs7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7YUFFMUMsVUFBZ0IsS0FBYztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7OzswQkFHRyxxREFBYzs7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzthQUU3QyxVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7Ozs7MEJBR0csOENBQU87O1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7O2FBRXRDLFVBQVksS0FBYztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQzs7OzswQkFHRyw2Q0FBTTs7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7YUFFckMsVUFBVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7OzBCQUdHLDJDQUFJOztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzthQUVuQyxVQUFTLEtBQWE7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbEM7Ozs7MEJBR0csb0RBQWE7O1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7O2FBRTVDLFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0M7Ozs7MEJBR0csNENBQUs7O1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O2FBRXBDLFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuQzs7OzswQkFHRyw0Q0FBSzs7WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7YUFFcEMsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7O0lBR0Qsc0JBQWMsa0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQzFCOzs7T0FBQTs7Z0JBMUVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2hDOzs7O2dCQVRRLGdCQUFnQix1QkFpRlIsUUFBUSxZQUFJLElBQUk7Z0JBakZ4QixnQkFBZ0IsdUJBa0ZaLElBQUk7OztnQ0F2RVosS0FBSzttQ0FRTCxLQUFLOzRCQVFMLEtBQUs7MkJBUUwsS0FBSzt5QkFRTCxLQUFLO2tDQVFMLEtBQUs7MEJBUUwsS0FBSzswQkFRTCxLQUFLOztvQ0EvRlY7RUFzQytDLFlBQVk7U0FBOUMseUJBQXlCOzs7OztnQkFnRnJDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AseUJBQXlCO3FCQUMxQjtpQkFDRjs7aUNBN0hEOztTQThIYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWNvbHVtbi1jaG9vc2VyJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db2x1bW5DaG9vc2VyQ29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dTZWFyY2gnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd1NlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dTZWFyY2gnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbXB0eVBhbmVsVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VtcHR5UGFuZWxUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZW1wdHlQYW5lbFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW1wdHlQYW5lbFRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VhcmNoVGltZW91dCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlYXJjaFRpbWVvdXQnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWFyY2hUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlYXJjaFRpbWVvdXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpdGxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGl0bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdjb2x1bW5DaG9vc2VyJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9Db2x1bW5DaG9vc2VyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9Db2x1bW5DaG9vc2VyQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0NvbHVtbkNob29zZXJNb2R1bGUgeyB9XHJcbiJdfQ==
/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoFilterRowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoFilterRowComponent, _super);
    function DxoFilterRowComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterRowComponent.prototype, "applyFilter", {
        get: function () {
            return this._getOption('applyFilter');
        },
        set: function (value) {
            this._setOption('applyFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "applyFilterText", {
        get: function () {
            return this._getOption('applyFilterText');
        },
        set: function (value) {
            this._setOption('applyFilterText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "betweenEndText", {
        get: function () {
            return this._getOption('betweenEndText');
        },
        set: function (value) {
            this._setOption('betweenEndText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "betweenStartText", {
        get: function () {
            return this._getOption('betweenStartText');
        },
        set: function (value) {
            this._setOption('betweenStartText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "operationDescriptions", {
        get: function () {
            return this._getOption('operationDescriptions');
        },
        set: function (value) {
            this._setOption('operationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "resetOperationText", {
        get: function () {
            return this._getOption('resetOperationText');
        },
        set: function (value) {
            this._setOption('resetOperationText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "showAllText", {
        get: function () {
            return this._getOption('showAllText');
        },
        set: function (value) {
            this._setOption('showAllText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "showOperationChooser", {
        get: function () {
            return this._getOption('showOperationChooser');
        },
        set: function (value) {
            this._setOption('showOperationChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterRow';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterRowComponent.prototype, "applyFilter", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterRowComponent.prototype, "applyFilterText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterRowComponent.prototype, "betweenEndText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterRowComponent.prototype, "betweenStartText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoFilterRowComponent.prototype, "operationDescriptions", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterRowComponent.prototype, "resetOperationText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterRowComponent.prototype, "showAllText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoFilterRowComponent.prototype, "showOperationChooser", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoFilterRowComponent.prototype, "visible", null);
    DxoFilterRowComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-filter-row',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoFilterRowComponent);
    return DxoFilterRowComponent;
}(NestedOption));
export { DxoFilterRowComponent };
var DxoFilterRowModule = /** @class */ (function () {
    function DxoFilterRowModule() {
    }
    DxoFilterRowModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoFilterRowComponent
            ],
            exports: [
                DxoFilterRowComponent
            ],
        })
    ], DxoFilterRowModule);
    return DxoFilterRowModule;
}());
export { DxoFilterRowModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJvdy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9maWx0ZXItcm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU3hEO0lBQTJDLGlEQUFZO0lBK0VuRCwrQkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBbEZELHNCQUFJLDhDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO2FBQ0QsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLGtEQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxDQUFDO2FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksaURBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLENBQUM7YUFDRCxVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxtREFBZ0I7YUFBcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9DLENBQUM7YUFDRCxVQUFxQixLQUFhO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSx3REFBcUI7YUFBekI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3BELENBQUM7YUFDRCxVQUEwQixLQUErTztZQUNyUSxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUhBO0lBTUQsc0JBQUkscURBQWtCO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNqRCxDQUFDO2FBQ0QsVUFBdUIsS0FBYTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQUhBO0lBTUQsc0JBQUksOENBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7YUFDRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksdURBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNuRCxDQUFDO2FBQ0QsVUFBeUIsS0FBYztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUhBO0lBTUQsc0JBQUksMENBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7YUFDRCxVQUFZLEtBQWM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBYyw4Q0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUExRUQ7UUFEQyxLQUFLLEVBQUU7Ozs0REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7Z0VBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7OytEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OztpRUFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7c0VBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7O21FQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7Ozs0REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7cUVBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7O3dEQUdQO0lBcEVRLHFCQUFxQjtRQU5qQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBRHBCLEVBQUU7U0FFZCxDQUFDO1FBZ0ZlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FoRm5DLHFCQUFxQixDQXNGakM7SUFBRCw0QkFBQztDQUFBLEFBdEZELENBQTJDLFlBQVksR0FzRnREO1NBdEZZLHFCQUFxQjtBQWdHbEM7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQVI5QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1oscUJBQXFCO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFCQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWZpbHRlci1yb3cnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0ZpbHRlclJvd0NvbXBvbmVudCBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFwcGx5RmlsdGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXBwbHlGaWx0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcHBseUZpbHRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFwcGx5RmlsdGVyVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FwcGx5RmlsdGVyVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFwcGx5RmlsdGVyVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcHBseUZpbHRlclRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBiZXR3ZWVuRW5kVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JldHdlZW5FbmRUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmV0d2VlbkVuZFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmV0d2VlbkVuZFRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBiZXR3ZWVuU3RhcnRUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmV0d2VlblN0YXJ0VGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJldHdlZW5TdGFydFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmV0d2VlblN0YXJ0VGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9wZXJhdGlvbkRlc2NyaXB0aW9ucygpOiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcGVyYXRpb25EZXNjcmlwdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBvcGVyYXRpb25EZXNjcmlwdGlvbnModmFsdWU6IHsgYmV0d2Vlbj86IHN0cmluZywgY29udGFpbnM/OiBzdHJpbmcsIGVuZHNXaXRoPzogc3RyaW5nLCBlcXVhbD86IHN0cmluZywgZ3JlYXRlclRoYW4/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuT3JFcXVhbD86IHN0cmluZywgbGVzc1RoYW4/OiBzdHJpbmcsIGxlc3NUaGFuT3JFcXVhbD86IHN0cmluZywgbm90Q29udGFpbnM/OiBzdHJpbmcsIG5vdEVxdWFsPzogc3RyaW5nLCBzdGFydHNXaXRoPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wZXJhdGlvbkRlc2NyaXB0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlc2V0T3BlcmF0aW9uVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jlc2V0T3BlcmF0aW9uVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlc2V0T3BlcmF0aW9uVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZXNldE9wZXJhdGlvblRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93QWxsVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dBbGxUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0FsbFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0FsbFRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93T3BlcmF0aW9uQ2hvb3NlcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93T3BlcmF0aW9uQ2hvb3NlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dPcGVyYXRpb25DaG9vc2VyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93T3BlcmF0aW9uQ2hvb3NlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWx0ZXJSb3cnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0ZpbHRlclJvd0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRmlsdGVyUm93Q29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0ZpbHRlclJvd01vZHVsZSB7IH1cclxuIl19
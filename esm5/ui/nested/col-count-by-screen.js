/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoColCountByScreenComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoColCountByScreenComponent, _super);
    function DxoColCountByScreenComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "lg", {
        get: function () {
            return this._getOption('lg');
        },
        set: function (value) {
            this._setOption('lg', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "md", {
        get: function () {
            return this._getOption('md');
        },
        set: function (value) {
            this._setOption('md', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "sm", {
        get: function () {
            return this._getOption('sm');
        },
        set: function (value) {
            this._setOption('sm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "xs", {
        get: function () {
            return this._getOption('xs');
        },
        set: function (value) {
            this._setOption('xs', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "_optionPath", {
        get: function () {
            return 'colCountByScreen';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoColCountByScreenComponent.prototype, "lg", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoColCountByScreenComponent.prototype, "md", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoColCountByScreenComponent.prototype, "sm", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoColCountByScreenComponent.prototype, "xs", null);
    DxoColCountByScreenComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-col-count-by-screen',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoColCountByScreenComponent);
    return DxoColCountByScreenComponent;
}(NestedOption));
export { DxoColCountByScreenComponent };
var DxoColCountByScreenModule = /** @class */ (function () {
    function DxoColCountByScreenModule() {
    }
    DxoColCountByScreenModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoColCountByScreenComponent
            ],
            exports: [
                DxoColCountByScreenComponent
            ],
        })
    ], DxoColCountByScreenModule);
    return DxoColCountByScreenModule;
}());
export { DxoColCountByScreenModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLWNvdW50LWJ5LXNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9jb2wtY291bnQtYnktc2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU3hEO0lBQWtELHdEQUFZO0lBdUMxRCxzQ0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBMUNELHNCQUFJLDRDQUFFO2FBQU47WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDO2FBQ0QsVUFBTyxLQUFhO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksNENBQUU7YUFBTjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7YUFDRCxVQUFPLEtBQWE7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw0Q0FBRTthQUFOO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUNELFVBQU8sS0FBYTtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDRDQUFFO2FBQU47WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDO2FBQ0QsVUFBTyxLQUFhO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQUhBO0lBTUQsc0JBQWMscURBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFsQ0Q7UUFEQyxLQUFLLEVBQUU7OzswREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7MERBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7OzBEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OzswREFHUDtJQTVCUSw0QkFBNEI7UUFOeEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQURwQixFQUFFO1NBRWQsQ0FBQztRQXdDZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BeENuQyw0QkFBNEIsQ0E4Q3hDO0lBQUQsbUNBQUM7Q0FBQSxBQTlDRCxDQUFrRCxZQUFZLEdBOEM3RDtTQTlDWSw0QkFBNEI7QUF3RHpDO0lBQUE7SUFBeUMsQ0FBQztJQUE3Qix5QkFBeUI7UUFSckMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDRCQUE0QjthQUM3QjtZQUNELE9BQU8sRUFBRTtnQkFDUCw0QkFBNEI7YUFDN0I7U0FDRixDQUFDO09BQ1cseUJBQXlCLENBQUk7SUFBRCxnQ0FBQztDQUFBLEFBQTFDLElBQTBDO1NBQTdCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1jb2wtY291bnQtYnktc2NyZWVuJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db2xDb3VudEJ5U2NyZWVuQ29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxnKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xnJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1kKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21kJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzbScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNtKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NtJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgeHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd4cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHhzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3hzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY29sQ291bnRCeVNjcmVlbic7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQ29sQ291bnRCeVNjcmVlbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQ29sQ291bnRCeVNjcmVlbkNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlIHsgfVxyXG4iXX0=
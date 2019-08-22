/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
let DxoGroupComponent = class DxoGroupComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get border() {
        return this._getOption('border');
    }
    set border(value) {
        this._setOption('border', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get headerHeight() {
        return this._getOption('headerHeight');
    }
    set headerHeight(value) {
        this._setOption('headerHeight', value);
    }
    get hoverEnabled() {
        return this._getOption('hoverEnabled');
    }
    set hoverEnabled(value) {
        this._setOption('hoverEnabled', value);
    }
    get hoverStyle() {
        return this._getOption('hoverStyle');
    }
    set hoverStyle(value) {
        this._setOption('hoverStyle', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get selectionStyle() {
        return this._getOption('selectionStyle');
    }
    set selectionStyle(value) {
        this._setOption('selectionStyle', value);
    }
    get _optionPath() {
        return 'group';
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoGroupComponent.prototype, "border", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxoGroupComponent.prototype, "color", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoGroupComponent.prototype, "headerHeight", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoGroupComponent.prototype, "hoverEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoGroupComponent.prototype, "hoverStyle", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoGroupComponent.prototype, "label", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoGroupComponent.prototype, "selectionStyle", null);
DxoGroupComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-group',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoGroupComponent);
export { DxoGroupComponent };
let DxoGroupModule = class DxoGroupModule {
};
DxoGroupModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoGroupComponent
        ],
        exports: [
            DxoGroupComponent
        ],
    })
], DxoGroupModule);
export { DxoGroupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU92QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFTeEQsSUFBYSxpQkFBaUIsR0FBOUIsdUJBQStCLFNBQVEsWUFBWTtJQStEL0MsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQWxFRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBeUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdELElBQUksS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCxJQUFJLFlBQVk7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0QsSUFBSSxZQUFZO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELElBQUksVUFBVTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFzRTtRQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR0QsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQStFO1FBQ3JGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCxJQUFJLGNBQWM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFzRTtRQUNyRixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBVUosQ0FBQTtBQXBFRztJQURDLEtBQUssRUFBRTs7OytDQUdQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7Ozs4Q0FHUDtBQU1EO0lBREMsS0FBSyxFQUFFOzs7cURBR1A7QUFNRDtJQURDLEtBQUssRUFBRTs7O3FEQUdQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7OzttREFHUDtBQU1EO0lBREMsS0FBSyxFQUFFOzs7OENBR1A7QUFNRDtJQURDLEtBQUssRUFBRTs7O3VEQUdQO0FBcERRLGlCQUFpQjtJQU43QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQURwQixFQUFFO0tBRWQsQ0FBQztJQWdFZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBOzZDQURtQyxnQkFBZ0I7UUFDdEMsZ0JBQWdCO0dBaEVuQyxpQkFBaUIsQ0FzRTdCO1NBdEVZLGlCQUFpQjtBQWdGOUIsSUFBYSxjQUFjLEdBQTNCO0NBQStCLENBQUE7QUFBbEIsY0FBYztJQVIxQixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixpQkFBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUI7U0FDbEI7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFJO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWdyb3VwJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Hcm91cENvbXBvbmVudCBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJvcmRlcigpOiB7IGNvbG9yPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdib3JkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBib3JkZXIodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JvcmRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlYWRlckhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlYWRlckhlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlYWRlckhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWFkZXJIZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3ZlckVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3ZlckVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3ZlclN0eWxlKCk6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJTdHlsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyU3R5bGUodmFsdWU6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJTdHlsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGxhYmVsKCk6IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGFiZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBsYWJlbCh2YWx1ZTogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYWJlbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGlvblN0eWxlKCk6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0aW9uU3R5bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3Rpb25TdHlsZSh2YWx1ZTogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3Rpb25TdHlsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2dyb3VwJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9Hcm91cENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvR3JvdXBDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvR3JvdXBNb2R1bGUgeyB9XHJcbiJdfQ==
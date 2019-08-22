/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoLabelComponent, _super);
    function DxoLabelComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoLabelComponent.prototype, "connectorColor", {
        get: function () {
            return this._getOption('connectorColor');
        },
        set: function (value) {
            this._setOption('connectorColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "connectorWidth", {
        get: function () {
            return this._getOption('connectorWidth');
        },
        set: function (value) {
            this._setOption('connectorWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "indent", {
        get: function () {
            return this._getOption('indent');
        },
        set: function (value) {
            this._setOption('indent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "horizontalAlignment", {
        get: function () {
            return this._getOption('horizontalAlignment');
        },
        set: function (value) {
            this._setOption('horizontalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "verticalAlignment", {
        get: function () {
            return this._getOption('verticalAlignment');
        },
        set: function (value) {
            this._setOption('verticalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "alignment", {
        get: function () {
            return this._getOption('alignment');
        },
        set: function (value) {
            this._setOption('alignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "customizeHint", {
        get: function () {
            return this._getOption('customizeHint');
        },
        set: function (value) {
            this._setOption('customizeHint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "displayMode", {
        get: function () {
            return this._getOption('displayMode');
        },
        set: function (value) {
            this._setOption('displayMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "indentFromAxis", {
        get: function () {
            return this._getOption('indentFromAxis');
        },
        set: function (value) {
            this._setOption('indentFromAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "overlappingBehavior", {
        get: function () {
            return this._getOption('overlappingBehavior');
        },
        set: function (value) {
            this._setOption('overlappingBehavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "rotationAngle", {
        get: function () {
            return this._getOption('rotationAngle');
        },
        set: function (value) {
            this._setOption('rotationAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "staggeringSpacing", {
        get: function () {
            return this._getOption('staggeringSpacing');
        },
        set: function (value) {
            this._setOption('staggeringSpacing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "textOverflow", {
        get: function () {
            return this._getOption('textOverflow');
        },
        set: function (value) {
            this._setOption('textOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "wordWrap", {
        get: function () {
            return this._getOption('wordWrap');
        },
        set: function (value) {
            this._setOption('wordWrap', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "argumentFormat", {
        get: function () {
            return this._getOption('argumentFormat');
        },
        set: function (value) {
            this._setOption('argumentFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "connector", {
        get: function () {
            return this._getOption('connector');
        },
        set: function (value) {
            this._setOption('connector', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "horizontalOffset", {
        get: function () {
            return this._getOption('horizontalOffset');
        },
        set: function (value) {
            this._setOption('horizontalOffset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "showForZeroValues", {
        get: function () {
            return this._getOption('showForZeroValues');
        },
        set: function (value) {
            this._setOption('showForZeroValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "verticalOffset", {
        get: function () {
            return this._getOption('verticalOffset');
        },
        set: function (value) {
            this._setOption('verticalOffset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "hideFirstOrLast", {
        get: function () {
            return this._getOption('hideFirstOrLast');
        },
        set: function (value) {
            this._setOption('hideFirstOrLast', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "indentFromTick", {
        get: function () {
            return this._getOption('indentFromTick');
        },
        set: function (value) {
            this._setOption('indentFromTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "useRangeColors", {
        get: function () {
            return this._getOption('useRangeColors');
        },
        set: function (value) {
            this._setOption('useRangeColors', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "showColon", {
        get: function () {
            return this._getOption('showColon');
        },
        set: function (value) {
            this._setOption('showColon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "radialOffset", {
        get: function () {
            return this._getOption('radialOffset');
        },
        set: function (value) {
            this._setOption('radialOffset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "topIndent", {
        get: function () {
            return this._getOption('topIndent');
        },
        set: function (value) {
            this._setOption('topIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "shadow", {
        get: function () {
            return this._getOption('shadow');
        },
        set: function (value) {
            this._setOption('shadow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "useNodeColors", {
        get: function () {
            return this._getOption('useNodeColors');
        },
        set: function (value) {
            this._setOption('useNodeColors', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "_optionPath", {
        get: function () {
            return 'label';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "connectorColor", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "connectorWidth", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function])
    ], DxoLabelComponent.prototype, "customizeText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoLabelComponent.prototype, "font", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoLabelComponent.prototype, "format", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "indent", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoLabelComponent.prototype, "visible", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "horizontalAlignment", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "position", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "text", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "verticalAlignment", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "alignment", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function])
    ], DxoLabelComponent.prototype, "customizeHint", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "displayMode", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "indentFromAxis", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "overlappingBehavior", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "rotationAngle", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "staggeringSpacing", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "textOverflow", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "wordWrap", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoLabelComponent.prototype, "argumentFormat", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "backgroundColor", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoLabelComponent.prototype, "border", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoLabelComponent.prototype, "connector", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "horizontalOffset", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoLabelComponent.prototype, "showForZeroValues", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "verticalOffset", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "hideFirstOrLast", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "indentFromTick", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoLabelComponent.prototype, "useRangeColors", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "location", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoLabelComponent.prototype, "showColon", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "radialOffset", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoLabelComponent.prototype, "topIndent", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoLabelComponent.prototype, "shadow", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoLabelComponent.prototype, "useNodeColors", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoLabelComponent.prototype, "dataField", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoLabelComponent.prototype, "enabled", null);
    DxoLabelComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-label',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoLabelComponent);
    return DxoLabelComponent;
}(NestedOption));
export { DxoLabelComponent };
var DxoLabelModule = /** @class */ (function () {
    function DxoLabelModule() {
    }
    DxoLabelModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoLabelComponent
            ],
            exports: [
                DxoLabelComponent
            ],
        })
    ], DxoLabelModule);
    return DxoLabelModule;
}());
export { DxoLabelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvbGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFTeEQ7SUFBdUMsNkNBQVk7SUF1VC9DLDJCQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUExVEQsc0JBQUksNkNBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLENBQUM7YUFDRCxVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw2Q0FBYzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsQ0FBQzthQUNELFVBQW1CLEtBQWE7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FI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bURBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7OzBEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OztzREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7b0RBR1A7SUE1U1EsaUJBQWlCO1FBTjdCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBRHBCLEVBQUU7U0FFZCxDQUFDO1FBd1RlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0F4VG5DLGlCQUFpQixDQThUN0I7SUFBRCx3QkFBQztDQUFBLEFBOVRELENBQXVDLFlBQVksR0E4VGxEO1NBOVRZLGlCQUFpQjtBQXdVOUI7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFSMUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlCQUFpQjthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1sYWJlbCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvTGFiZWxDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb25uZWN0b3JDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nvbm5lY3RvckNvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29ubmVjdG9yQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29ubmVjdG9yQ29sb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb25uZWN0b3JXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nvbm5lY3RvcldpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29ubmVjdG9yV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29ubmVjdG9yV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVUZXh0KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplVGV4dCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb250KCk6IERldkV4cHJlc3Mudml6LkZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb250KHZhbHVlOiBEZXZFeHByZXNzLnZpei5Gb250KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb250JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9ybWF0KCk6IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb3JtYXQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb3JtYXQodmFsdWU6IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb3JtYXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpbmRlbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpbmRlbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBpbmRlbnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaW5kZW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvcml6b250YWxBbGlnbm1lbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3Jpem9udGFsQWxpZ25tZW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG9yaXpvbnRhbEFsaWdubWVudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3Jpem9udGFsQWxpZ25tZW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Bvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RleHQnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2ZXJ0aWNhbEFsaWdubWVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZlcnRpY2FsQWxpZ25tZW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmVydGljYWxBbGlnbm1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmVydGljYWxBbGlnbm1lbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGlnbm1lbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGlnbm1lbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGlnbm1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxpZ25tZW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplSGludCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplSGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZUhpbnQodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVIaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzcGxheU1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNwbGF5TW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc3BsYXlNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc3BsYXlNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaW5kZW50RnJvbUF4aXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpbmRlbnRGcm9tQXhpcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGluZGVudEZyb21BeGlzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2luZGVudEZyb21BeGlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb3ZlcmxhcHBpbmdCZWhhdmlvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ292ZXJsYXBwaW5nQmVoYXZpb3InKTtcclxuICAgIH1cclxuICAgIHNldCBvdmVybGFwcGluZ0JlaGF2aW9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ292ZXJsYXBwaW5nQmVoYXZpb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb3RhdGlvbkFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncm90YXRpb25BbmdsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJvdGF0aW9uQW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm90YXRpb25BbmdsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YWdnZXJpbmdTcGFjaW5nKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RhZ2dlcmluZ1NwYWNpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFnZ2VyaW5nU3BhY2luZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFnZ2VyaW5nU3BhY2luZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHRPdmVyZmxvdygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RleHRPdmVyZmxvdycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRleHRPdmVyZmxvdyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0T3ZlcmZsb3cnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3b3JkV3JhcCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dvcmRXcmFwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd29yZFdyYXAodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29yZFdyYXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcmd1bWVudEZvcm1hdCgpOiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJndW1lbnRGb3JtYXQnKTtcclxuICAgIH1cclxuICAgIHNldCBhcmd1bWVudEZvcm1hdCh2YWx1ZTogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FyZ3VtZW50Rm9ybWF0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFja2dyb3VuZENvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFja2dyb3VuZENvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JhY2tncm91bmRDb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJvcmRlcigpOiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHwgeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JvcmRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJvcmRlcih2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB8IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdib3JkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb25uZWN0b3IoKTogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0gfCB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29ubmVjdG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29ubmVjdG9yKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB8IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb25uZWN0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3Jpem9udGFsT2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG9yaXpvbnRhbE9mZnNldCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvcml6b250YWxPZmZzZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG9yaXpvbnRhbE9mZnNldCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dGb3JaZXJvVmFsdWVzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dGb3JaZXJvVmFsdWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0Zvclplcm9WYWx1ZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dGb3JaZXJvVmFsdWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmVydGljYWxPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2ZXJ0aWNhbE9mZnNldCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZlcnRpY2FsT2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZlcnRpY2FsT2Zmc2V0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGlkZUZpcnN0T3JMYXN0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGlkZUZpcnN0T3JMYXN0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGlkZUZpcnN0T3JMYXN0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpZGVGaXJzdE9yTGFzdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGluZGVudEZyb21UaWNrKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW5kZW50RnJvbVRpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBpbmRlbnRGcm9tVGljayh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpbmRlbnRGcm9tVGljaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVzZVJhbmdlQ29sb3JzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3VzZVJhbmdlQ29sb3JzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlUmFuZ2VDb2xvcnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VzZVJhbmdlQ29sb3JzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9jYXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2NhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvY2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0NvbG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dDb2xvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dDb2xvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0NvbG9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmFkaWFsT2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmFkaWFsT2Zmc2V0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmFkaWFsT2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JhZGlhbE9mZnNldCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvcEluZGVudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RvcEluZGVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvcEluZGVudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0b3BJbmRlbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaGFkb3coKTogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaGFkb3cnKTtcclxuICAgIH1cclxuICAgIHNldCBzaGFkb3codmFsdWU6IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hhZG93JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdXNlTm9kZUNvbG9ycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1c2VOb2RlQ29sb3JzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlTm9kZUNvbG9ycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndXNlTm9kZUNvbG9ycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnbGFiZWwnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0xhYmVsQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9MYWJlbENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9MYWJlbE1vZHVsZSB7IH1cclxuIl19
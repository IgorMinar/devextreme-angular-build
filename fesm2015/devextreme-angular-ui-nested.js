import { __decorate, __param } from 'tslib';
import { SkipSelf, Host, Input, Component, NgModule, Output, ContentChildren, forwardRef, Renderer2, Inject, ElementRef } from '@angular/core';
import { NestedOption, NestedOptionHost, CollectionNestedOption, extractTemplate, DxTemplateHost } from 'devextreme-angular/core';
import { DOCUMENT } from '@angular/common';

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoAdapterComponent = class DxoAdapterComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get applyValidationResults() {
        return this._getOption('applyValidationResults');
    }
    set applyValidationResults(value) {
        this._setOption('applyValidationResults', value);
    }
    get bypass() {
        return this._getOption('bypass');
    }
    set bypass(value) {
        this._setOption('bypass', value);
    }
    get focus() {
        return this._getOption('focus');
    }
    set focus(value) {
        this._setOption('focus', value);
    }
    get getValue() {
        return this._getOption('getValue');
    }
    set getValue(value) {
        this._setOption('getValue', value);
    }
    get reset() {
        return this._getOption('reset');
    }
    set reset(value) {
        this._setOption('reset', value);
    }
    get validationRequestsCallbacks() {
        return this._getOption('validationRequestsCallbacks');
    }
    set validationRequestsCallbacks(value) {
        this._setOption('validationRequestsCallbacks', value);
    }
    get _optionPath() {
        return 'adapter';
    }
};
DxoAdapterComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoAdapterComponent.prototype, "applyValidationResults", null);
__decorate([
    Input()
], DxoAdapterComponent.prototype, "bypass", null);
__decorate([
    Input()
], DxoAdapterComponent.prototype, "focus", null);
__decorate([
    Input()
], DxoAdapterComponent.prototype, "getValue", null);
__decorate([
    Input()
], DxoAdapterComponent.prototype, "reset", null);
__decorate([
    Input()
], DxoAdapterComponent.prototype, "validationRequestsCallbacks", null);
DxoAdapterComponent = __decorate([
    Component({
        selector: 'dxo-adapter',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoAdapterComponent);
let DxoAdapterModule = class DxoAdapterModule {
};
DxoAdapterModule = __decorate([
    NgModule({
        declarations: [
            DxoAdapterComponent
        ],
        exports: [
            DxoAdapterComponent
        ],
    })
], DxoAdapterModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoAdaptiveLayoutComponent = class DxoAdaptiveLayoutComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get keepLabels() {
        return this._getOption('keepLabels');
    }
    set keepLabels(value) {
        this._setOption('keepLabels', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'adaptiveLayout';
    }
};
DxoAdaptiveLayoutComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoAdaptiveLayoutComponent.prototype, "height", null);
__decorate([
    Input()
], DxoAdaptiveLayoutComponent.prototype, "keepLabels", null);
__decorate([
    Input()
], DxoAdaptiveLayoutComponent.prototype, "width", null);
DxoAdaptiveLayoutComponent = __decorate([
    Component({
        selector: 'dxo-adaptive-layout',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoAdaptiveLayoutComponent);
let DxoAdaptiveLayoutModule = class DxoAdaptiveLayoutModule {
};
DxoAdaptiveLayoutModule = __decorate([
    NgModule({
        declarations: [
            DxoAdaptiveLayoutComponent
        ],
        exports: [
            DxoAdaptiveLayoutComponent
        ],
    })
], DxoAdaptiveLayoutModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoAggregationIntervalComponent = class DxoAggregationIntervalComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get days() {
        return this._getOption('days');
    }
    set days(value) {
        this._setOption('days', value);
    }
    get hours() {
        return this._getOption('hours');
    }
    set hours(value) {
        this._setOption('hours', value);
    }
    get milliseconds() {
        return this._getOption('milliseconds');
    }
    set milliseconds(value) {
        this._setOption('milliseconds', value);
    }
    get minutes() {
        return this._getOption('minutes');
    }
    set minutes(value) {
        this._setOption('minutes', value);
    }
    get months() {
        return this._getOption('months');
    }
    set months(value) {
        this._setOption('months', value);
    }
    get quarters() {
        return this._getOption('quarters');
    }
    set quarters(value) {
        this._setOption('quarters', value);
    }
    get seconds() {
        return this._getOption('seconds');
    }
    set seconds(value) {
        this._setOption('seconds', value);
    }
    get weeks() {
        return this._getOption('weeks');
    }
    set weeks(value) {
        this._setOption('weeks', value);
    }
    get years() {
        return this._getOption('years');
    }
    set years(value) {
        this._setOption('years', value);
    }
    get _optionPath() {
        return 'aggregationInterval';
    }
};
DxoAggregationIntervalComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoAggregationIntervalComponent.prototype, "days", null);
__decorate([
    Input()
], DxoAggregationIntervalComponent.prototype, "hours", null);
__decorate([
    Input()
], DxoAggregationIntervalComponent.prototype, "milliseconds", null);
__decorate([
    Input()
], DxoAggregationIntervalComponent.prototype, "minutes", null);
__decorate([
    Input()
], DxoAggregationIntervalComponent.prototype, "months", null);
__decorate([
    Input()
], DxoAggregationIntervalComponent.prototype, "quarters", null);
__decorate([
    Input()
], DxoAggregationIntervalComponent.prototype, "seconds", null);
__decorate([
    Input()
], DxoAggregationIntervalComponent.prototype, "weeks", null);
__decorate([
    Input()
], DxoAggregationIntervalComponent.prototype, "years", null);
DxoAggregationIntervalComponent = __decorate([
    Component({
        selector: 'dxo-aggregation-interval',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoAggregationIntervalComponent);
let DxoAggregationIntervalModule = class DxoAggregationIntervalModule {
};
DxoAggregationIntervalModule = __decorate([
    NgModule({
        declarations: [
            DxoAggregationIntervalComponent
        ],
        exports: [
            DxoAggregationIntervalComponent
        ],
    })
], DxoAggregationIntervalModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoAggregationComponent = class DxoAggregationComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get calculate() {
        return this._getOption('calculate');
    }
    set calculate(value) {
        this._setOption('calculate', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get method() {
        return this._getOption('method');
    }
    set method(value) {
        this._setOption('method', value);
    }
    get _optionPath() {
        return 'aggregation';
    }
};
DxoAggregationComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoAggregationComponent.prototype, "calculate", null);
__decorate([
    Input()
], DxoAggregationComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoAggregationComponent.prototype, "method", null);
DxoAggregationComponent = __decorate([
    Component({
        selector: 'dxo-aggregation',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoAggregationComponent);
let DxoAggregationModule = class DxoAggregationModule {
};
DxoAggregationModule = __decorate([
    NgModule({
        declarations: [
            DxoAggregationComponent
        ],
        exports: [
            DxoAggregationComponent
        ],
    })
], DxoAggregationModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoAnimationConfig extends NestedOption {
    get duration() {
        return this._getOption('duration');
    }
    set duration(value) {
        this._setOption('duration', value);
    }
    get easing() {
        return this._getOption('easing');
    }
    set easing(value) {
        this._setOption('easing', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get maxPointCountSupported() {
        return this._getOption('maxPointCountSupported');
    }
    set maxPointCountSupported(value) {
        this._setOption('maxPointCountSupported', value);
    }
    get hide() {
        return this._getOption('hide');
    }
    set hide(value) {
        this._setOption('hide', value);
    }
    get show() {
        return this._getOption('show');
    }
    set show(value) {
        this._setOption('show', value);
    }
    get complete() {
        return this._getOption('complete');
    }
    set complete(value) {
        this._setOption('complete', value);
    }
    get delay() {
        return this._getOption('delay');
    }
    set delay(value) {
        this._setOption('delay', value);
    }
    get direction() {
        return this._getOption('direction');
    }
    set direction(value) {
        this._setOption('direction', value);
    }
    get from() {
        return this._getOption('from');
    }
    set from(value) {
        this._setOption('from', value);
    }
    get staggerDelay() {
        return this._getOption('staggerDelay');
    }
    set staggerDelay(value) {
        this._setOption('staggerDelay', value);
    }
    get start() {
        return this._getOption('start');
    }
    set start(value) {
        this._setOption('start', value);
    }
    get to() {
        return this._getOption('to');
    }
    set to(value) {
        this._setOption('to', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoAnimationComponent = class DxoAnimationComponent extends DxoAnimationConfig {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'animation';
    }
};
DxoAnimationComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoAnimationComponent = __decorate([
    Component({
        selector: 'dxo-animation',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'duration',
            'easing',
            'enabled',
            'maxPointCountSupported',
            'hide',
            'show',
            'complete',
            'delay',
            'direction',
            'from',
            'staggerDelay',
            'start',
            'to',
            'type'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoAnimationComponent);
let DxoAnimationModule = class DxoAnimationModule {
};
DxoAnimationModule = __decorate([
    NgModule({
        declarations: [
            DxoAnimationComponent
        ],
        exports: [
            DxoAnimationComponent
        ],
    })
], DxoAnimationModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxiChartAnnotationConfig extends CollectionNestedOption {
    get allowDragging() {
        return this._getOption('allowDragging');
    }
    set allowDragging(value) {
        this._setOption('allowDragging', value);
    }
    get argument() {
        return this._getOption('argument');
    }
    set argument(value) {
        this._setOption('argument', value);
    }
    get arrowLength() {
        return this._getOption('arrowLength');
    }
    set arrowLength(value) {
        this._setOption('arrowLength', value);
    }
    get arrowWidth() {
        return this._getOption('arrowWidth');
    }
    set arrowWidth(value) {
        this._setOption('arrowWidth', value);
    }
    get axis() {
        return this._getOption('axis');
    }
    set axis(value) {
        this._setOption('axis', value);
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
    get customizeTooltip() {
        return this._getOption('customizeTooltip');
    }
    set customizeTooltip(value) {
        this._setOption('customizeTooltip', value);
    }
    get description() {
        return this._getOption('description');
    }
    set description(value) {
        this._setOption('description', value);
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get image() {
        return this._getOption('image');
    }
    set image(value) {
        this._setOption('image', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get offsetX() {
        return this._getOption('offsetX');
    }
    set offsetX(value) {
        this._setOption('offsetX', value);
    }
    get offsetY() {
        return this._getOption('offsetY');
    }
    set offsetY(value) {
        this._setOption('offsetY', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get series() {
        return this._getOption('series');
    }
    set series(value) {
        this._setOption('series', value);
    }
    get shadow() {
        return this._getOption('shadow');
    }
    set shadow(value) {
        this._setOption('shadow', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get textOverflow() {
        return this._getOption('textOverflow');
    }
    set textOverflow(value) {
        this._setOption('textOverflow', value);
    }
    get tooltipEnabled() {
        return this._getOption('tooltipEnabled');
    }
    set tooltipEnabled(value) {
        this._setOption('tooltipEnabled', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get wordWrap() {
        return this._getOption('wordWrap');
    }
    set wordWrap(value) {
        this._setOption('wordWrap', value);
    }
    get x() {
        return this._getOption('x');
    }
    set x(value) {
        this._setOption('x', value);
    }
    get y() {
        return this._getOption('y');
    }
    set y(value) {
        this._setOption('y', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiAnnotationComponent = class DxiAnnotationComponent extends DxiChartAnnotationConfig {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'annotations';
    }
};
DxiAnnotationComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxiAnnotationComponent = __decorate([
    Component({
        selector: 'dxi-annotation',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'allowDragging',
            'argument',
            'arrowLength',
            'arrowWidth',
            'axis',
            'border',
            'color',
            'customizeTooltip',
            'description',
            'font',
            'height',
            'image',
            'name',
            'offsetX',
            'offsetY',
            'opacity',
            'paddingLeftRight',
            'paddingTopBottom',
            'series',
            'shadow',
            'text',
            'textOverflow',
            'tooltipEnabled',
            'type',
            'value',
            'width',
            'wordWrap',
            'x',
            'y'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiAnnotationComponent);
let DxiAnnotationModule = class DxiAnnotationModule {
};
DxiAnnotationModule = __decorate([
    NgModule({
        declarations: [
            DxiAnnotationComponent
        ],
        exports: [
            DxiAnnotationComponent
        ],
    })
], DxiAnnotationModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoChartCommonSeriesSettings extends NestedOption {
    get aggregation() {
        return this._getOption('aggregation');
    }
    set aggregation(value) {
        this._setOption('aggregation', value);
    }
    get area() {
        return this._getOption('area');
    }
    set area(value) {
        this._setOption('area', value);
    }
    get argumentField() {
        return this._getOption('argumentField');
    }
    set argumentField(value) {
        this._setOption('argumentField', value);
    }
    get axis() {
        return this._getOption('axis');
    }
    set axis(value) {
        this._setOption('axis', value);
    }
    get bar() {
        return this._getOption('bar');
    }
    set bar(value) {
        this._setOption('bar', value);
    }
    get barOverlapGroup() {
        return this._getOption('barOverlapGroup');
    }
    set barOverlapGroup(value) {
        this._setOption('barOverlapGroup', value);
    }
    get barPadding() {
        return this._getOption('barPadding');
    }
    set barPadding(value) {
        this._setOption('barPadding', value);
    }
    get barWidth() {
        return this._getOption('barWidth');
    }
    set barWidth(value) {
        this._setOption('barWidth', value);
    }
    get border() {
        return this._getOption('border');
    }
    set border(value) {
        this._setOption('border', value);
    }
    get bubble() {
        return this._getOption('bubble');
    }
    set bubble(value) {
        this._setOption('bubble', value);
    }
    get candlestick() {
        return this._getOption('candlestick');
    }
    set candlestick(value) {
        this._setOption('candlestick', value);
    }
    get closeValueField() {
        return this._getOption('closeValueField');
    }
    set closeValueField(value) {
        this._setOption('closeValueField', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get cornerRadius() {
        return this._getOption('cornerRadius');
    }
    set cornerRadius(value) {
        this._setOption('cornerRadius', value);
    }
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get fullstackedarea() {
        return this._getOption('fullstackedarea');
    }
    set fullstackedarea(value) {
        this._setOption('fullstackedarea', value);
    }
    get fullstackedbar() {
        return this._getOption('fullstackedbar');
    }
    set fullstackedbar(value) {
        this._setOption('fullstackedbar', value);
    }
    get fullstackedline() {
        return this._getOption('fullstackedline');
    }
    set fullstackedline(value) {
        this._setOption('fullstackedline', value);
    }
    get fullstackedspline() {
        return this._getOption('fullstackedspline');
    }
    set fullstackedspline(value) {
        this._setOption('fullstackedspline', value);
    }
    get fullstackedsplinearea() {
        return this._getOption('fullstackedsplinearea');
    }
    set fullstackedsplinearea(value) {
        this._setOption('fullstackedsplinearea', value);
    }
    get highValueField() {
        return this._getOption('highValueField');
    }
    set highValueField(value) {
        this._setOption('highValueField', value);
    }
    get hoverMode() {
        return this._getOption('hoverMode');
    }
    set hoverMode(value) {
        this._setOption('hoverMode', value);
    }
    get hoverStyle() {
        return this._getOption('hoverStyle');
    }
    set hoverStyle(value) {
        this._setOption('hoverStyle', value);
    }
    get ignoreEmptyPoints() {
        return this._getOption('ignoreEmptyPoints');
    }
    set ignoreEmptyPoints(value) {
        this._setOption('ignoreEmptyPoints', value);
    }
    get innerColor() {
        return this._getOption('innerColor');
    }
    set innerColor(value) {
        this._setOption('innerColor', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get line() {
        return this._getOption('line');
    }
    set line(value) {
        this._setOption('line', value);
    }
    get lowValueField() {
        return this._getOption('lowValueField');
    }
    set lowValueField(value) {
        this._setOption('lowValueField', value);
    }
    get maxLabelCount() {
        return this._getOption('maxLabelCount');
    }
    set maxLabelCount(value) {
        this._setOption('maxLabelCount', value);
    }
    get minBarSize() {
        return this._getOption('minBarSize');
    }
    set minBarSize(value) {
        this._setOption('minBarSize', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get openValueField() {
        return this._getOption('openValueField');
    }
    set openValueField(value) {
        this._setOption('openValueField', value);
    }
    get pane() {
        return this._getOption('pane');
    }
    set pane(value) {
        this._setOption('pane', value);
    }
    get point() {
        return this._getOption('point');
    }
    set point(value) {
        this._setOption('point', value);
    }
    get rangearea() {
        return this._getOption('rangearea');
    }
    set rangearea(value) {
        this._setOption('rangearea', value);
    }
    get rangebar() {
        return this._getOption('rangebar');
    }
    set rangebar(value) {
        this._setOption('rangebar', value);
    }
    get rangeValue1Field() {
        return this._getOption('rangeValue1Field');
    }
    set rangeValue1Field(value) {
        this._setOption('rangeValue1Field', value);
    }
    get rangeValue2Field() {
        return this._getOption('rangeValue2Field');
    }
    set rangeValue2Field(value) {
        this._setOption('rangeValue2Field', value);
    }
    get reduction() {
        return this._getOption('reduction');
    }
    set reduction(value) {
        this._setOption('reduction', value);
    }
    get scatter() {
        return this._getOption('scatter');
    }
    set scatter(value) {
        this._setOption('scatter', value);
    }
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
    }
    get selectionStyle() {
        return this._getOption('selectionStyle');
    }
    set selectionStyle(value) {
        this._setOption('selectionStyle', value);
    }
    get showInLegend() {
        return this._getOption('showInLegend');
    }
    set showInLegend(value) {
        this._setOption('showInLegend', value);
    }
    get sizeField() {
        return this._getOption('sizeField');
    }
    set sizeField(value) {
        this._setOption('sizeField', value);
    }
    get spline() {
        return this._getOption('spline');
    }
    set spline(value) {
        this._setOption('spline', value);
    }
    get splinearea() {
        return this._getOption('splinearea');
    }
    set splinearea(value) {
        this._setOption('splinearea', value);
    }
    get stack() {
        return this._getOption('stack');
    }
    set stack(value) {
        this._setOption('stack', value);
    }
    get stackedarea() {
        return this._getOption('stackedarea');
    }
    set stackedarea(value) {
        this._setOption('stackedarea', value);
    }
    get stackedbar() {
        return this._getOption('stackedbar');
    }
    set stackedbar(value) {
        this._setOption('stackedbar', value);
    }
    get stackedline() {
        return this._getOption('stackedline');
    }
    set stackedline(value) {
        this._setOption('stackedline', value);
    }
    get stackedspline() {
        return this._getOption('stackedspline');
    }
    set stackedspline(value) {
        this._setOption('stackedspline', value);
    }
    get stackedsplinearea() {
        return this._getOption('stackedsplinearea');
    }
    set stackedsplinearea(value) {
        this._setOption('stackedsplinearea', value);
    }
    get steparea() {
        return this._getOption('steparea');
    }
    set steparea(value) {
        this._setOption('steparea', value);
    }
    get stepline() {
        return this._getOption('stepline');
    }
    set stepline(value) {
        this._setOption('stepline', value);
    }
    get stock() {
        return this._getOption('stock');
    }
    set stock(value) {
        this._setOption('stock', value);
    }
    get tagField() {
        return this._getOption('tagField');
    }
    set tagField(value) {
        this._setOption('tagField', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get valueErrorBar() {
        return this._getOption('valueErrorBar');
    }
    set valueErrorBar(value) {
        this._setOption('valueErrorBar', value);
    }
    get valueField() {
        return this._getOption('valueField');
    }
    set valueField(value) {
        this._setOption('valueField', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get argumentType() {
        return this._getOption('argumentType');
    }
    set argumentType(value) {
        this._setOption('argumentType', value);
    }
    get minSegmentSize() {
        return this._getOption('minSegmentSize');
    }
    set minSegmentSize(value) {
        this._setOption('minSegmentSize', value);
    }
    get smallValuesGrouping() {
        return this._getOption('smallValuesGrouping');
    }
    set smallValuesGrouping(value) {
        this._setOption('smallValuesGrouping', value);
    }
    get closed() {
        return this._getOption('closed');
    }
    set closed(value) {
        this._setOption('closed', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoAreaComponent = class DxoAreaComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'area';
    }
};
DxoAreaComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoAreaComponent = __decorate([
    Component({
        selector: 'dxo-area',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width',
            'closed'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoAreaComponent);
let DxoAreaModule = class DxoAreaModule {
};
DxoAreaModule = __decorate([
    NgModule({
        declarations: [
            DxoAreaComponent
        ],
        exports: [
            DxoAreaComponent
        ],
    })
], DxoAreaModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxiVizScaleBreak extends CollectionNestedOption {
    get endValue() {
        return this._getOption('endValue');
    }
    set endValue(value) {
        this._setOption('endValue', value);
    }
    get startValue() {
        return this._getOption('startValue');
    }
    set startValue(value) {
        this._setOption('startValue', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiBreakComponent = class DxiBreakComponent extends DxiVizScaleBreak {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'breaks';
    }
};
DxiBreakComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxiBreakComponent = __decorate([
    Component({
        selector: 'dxi-break',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'endValue',
            'startValue'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiBreakComponent);
let DxiBreakModule = class DxiBreakModule {
};
DxiBreakModule = __decorate([
    NgModule({
        declarations: [
            DxiBreakComponent
        ],
        exports: [
            DxiBreakComponent
        ],
    })
], DxiBreakModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiConstantLineComponent = class DxiConstantLineComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get displayBehindSeries() {
        return this._getOption('displayBehindSeries');
    }
    set displayBehindSeries(value) {
        this._setOption('displayBehindSeries', value);
    }
    get extendAxis() {
        return this._getOption('extendAxis');
    }
    set extendAxis(value) {
        this._setOption('extendAxis', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'constantLines';
    }
};
DxiConstantLineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiConstantLineComponent.prototype, "color", null);
__decorate([
    Input()
], DxiConstantLineComponent.prototype, "dashStyle", null);
__decorate([
    Input()
], DxiConstantLineComponent.prototype, "displayBehindSeries", null);
__decorate([
    Input()
], DxiConstantLineComponent.prototype, "extendAxis", null);
__decorate([
    Input()
], DxiConstantLineComponent.prototype, "label", null);
__decorate([
    Input()
], DxiConstantLineComponent.prototype, "paddingLeftRight", null);
__decorate([
    Input()
], DxiConstantLineComponent.prototype, "paddingTopBottom", null);
__decorate([
    Input()
], DxiConstantLineComponent.prototype, "value", null);
__decorate([
    Input()
], DxiConstantLineComponent.prototype, "width", null);
DxiConstantLineComponent = __decorate([
    Component({
        selector: 'dxi-constant-line',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiConstantLineComponent);
let DxiConstantLineModule = class DxiConstantLineModule {
};
DxiConstantLineModule = __decorate([
    NgModule({
        declarations: [
            DxiConstantLineComponent
        ],
        exports: [
            DxiConstantLineComponent
        ],
    })
], DxiConstantLineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiStripComponent = class DxiStripComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get endValue() {
        return this._getOption('endValue');
    }
    set endValue(value) {
        this._setOption('endValue', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get startValue() {
        return this._getOption('startValue');
    }
    set startValue(value) {
        this._setOption('startValue', value);
    }
    get _optionPath() {
        return 'strips';
    }
};
DxiStripComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiStripComponent.prototype, "color", null);
__decorate([
    Input()
], DxiStripComponent.prototype, "endValue", null);
__decorate([
    Input()
], DxiStripComponent.prototype, "label", null);
__decorate([
    Input()
], DxiStripComponent.prototype, "paddingLeftRight", null);
__decorate([
    Input()
], DxiStripComponent.prototype, "paddingTopBottom", null);
__decorate([
    Input()
], DxiStripComponent.prototype, "startValue", null);
DxiStripComponent = __decorate([
    Component({
        selector: 'dxi-strip',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiStripComponent);
let DxiStripModule = class DxiStripModule {
};
DxiStripModule = __decorate([
    NgModule({
        declarations: [
            DxiStripComponent
        ],
        exports: [
            DxiStripComponent
        ],
    })
], DxiStripModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoArgumentAxisComponent = class DxoArgumentAxisComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'visualRangeChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get aggregationGroupWidth() {
        return this._getOption('aggregationGroupWidth');
    }
    set aggregationGroupWidth(value) {
        this._setOption('aggregationGroupWidth', value);
    }
    get aggregationInterval() {
        return this._getOption('aggregationInterval');
    }
    set aggregationInterval(value) {
        this._setOption('aggregationInterval', value);
    }
    get allowDecimals() {
        return this._getOption('allowDecimals');
    }
    set allowDecimals(value) {
        this._setOption('allowDecimals', value);
    }
    get argumentType() {
        return this._getOption('argumentType');
    }
    set argumentType(value) {
        this._setOption('argumentType', value);
    }
    get axisDivisionFactor() {
        return this._getOption('axisDivisionFactor');
    }
    set axisDivisionFactor(value) {
        this._setOption('axisDivisionFactor', value);
    }
    get breaks() {
        return this._getOption('breaks');
    }
    set breaks(value) {
        this._setOption('breaks', value);
    }
    get breakStyle() {
        return this._getOption('breakStyle');
    }
    set breakStyle(value) {
        this._setOption('breakStyle', value);
    }
    get categories() {
        return this._getOption('categories');
    }
    set categories(value) {
        this._setOption('categories', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get constantLines() {
        return this._getOption('constantLines');
    }
    set constantLines(value) {
        this._setOption('constantLines', value);
    }
    get constantLineStyle() {
        return this._getOption('constantLineStyle');
    }
    set constantLineStyle(value) {
        this._setOption('constantLineStyle', value);
    }
    get discreteAxisDivisionMode() {
        return this._getOption('discreteAxisDivisionMode');
    }
    set discreteAxisDivisionMode(value) {
        this._setOption('discreteAxisDivisionMode', value);
    }
    get endOnTick() {
        return this._getOption('endOnTick');
    }
    set endOnTick(value) {
        this._setOption('endOnTick', value);
    }
    get grid() {
        return this._getOption('grid');
    }
    set grid(value) {
        this._setOption('grid', value);
    }
    get holidays() {
        return this._getOption('holidays');
    }
    set holidays(value) {
        this._setOption('holidays', value);
    }
    get hoverMode() {
        return this._getOption('hoverMode');
    }
    set hoverMode(value) {
        this._setOption('hoverMode', value);
    }
    get inverted() {
        return this._getOption('inverted');
    }
    set inverted(value) {
        this._setOption('inverted', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get logarithmBase() {
        return this._getOption('logarithmBase');
    }
    set logarithmBase(value) {
        this._setOption('logarithmBase', value);
    }
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    get maxValueMargin() {
        return this._getOption('maxValueMargin');
    }
    set maxValueMargin(value) {
        this._setOption('maxValueMargin', value);
    }
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    get minorGrid() {
        return this._getOption('minorGrid');
    }
    set minorGrid(value) {
        this._setOption('minorGrid', value);
    }
    get minorTick() {
        return this._getOption('minorTick');
    }
    set minorTick(value) {
        this._setOption('minorTick', value);
    }
    get minorTickCount() {
        return this._getOption('minorTickCount');
    }
    set minorTickCount(value) {
        this._setOption('minorTickCount', value);
    }
    get minorTickInterval() {
        return this._getOption('minorTickInterval');
    }
    set minorTickInterval(value) {
        this._setOption('minorTickInterval', value);
    }
    get minValueMargin() {
        return this._getOption('minValueMargin');
    }
    set minValueMargin(value) {
        this._setOption('minValueMargin', value);
    }
    get minVisualRangeLength() {
        return this._getOption('minVisualRangeLength');
    }
    set minVisualRangeLength(value) {
        this._setOption('minVisualRangeLength', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get placeholderSize() {
        return this._getOption('placeholderSize');
    }
    set placeholderSize(value) {
        this._setOption('placeholderSize', value);
    }
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
    }
    get singleWorkdays() {
        return this._getOption('singleWorkdays');
    }
    set singleWorkdays(value) {
        this._setOption('singleWorkdays', value);
    }
    get strips() {
        return this._getOption('strips');
    }
    set strips(value) {
        this._setOption('strips', value);
    }
    get stripStyle() {
        return this._getOption('stripStyle');
    }
    set stripStyle(value) {
        this._setOption('stripStyle', value);
    }
    get tick() {
        return this._getOption('tick');
    }
    set tick(value) {
        this._setOption('tick', value);
    }
    get tickInterval() {
        return this._getOption('tickInterval');
    }
    set tickInterval(value) {
        this._setOption('tickInterval', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get valueMarginsEnabled() {
        return this._getOption('valueMarginsEnabled');
    }
    set valueMarginsEnabled(value) {
        this._setOption('valueMarginsEnabled', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get visualRange() {
        return this._getOption('visualRange');
    }
    set visualRange(value) {
        this._setOption('visualRange', value);
    }
    get visualRangeUpdateMode() {
        return this._getOption('visualRangeUpdateMode');
    }
    set visualRangeUpdateMode(value) {
        this._setOption('visualRangeUpdateMode', value);
    }
    get wholeRange() {
        return this._getOption('wholeRange');
    }
    set wholeRange(value) {
        this._setOption('wholeRange', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get workdaysOnly() {
        return this._getOption('workdaysOnly');
    }
    set workdaysOnly(value) {
        this._setOption('workdaysOnly', value);
    }
    get workWeek() {
        return this._getOption('workWeek');
    }
    set workWeek(value) {
        this._setOption('workWeek', value);
    }
    get firstPointOnStartAngle() {
        return this._getOption('firstPointOnStartAngle');
    }
    set firstPointOnStartAngle(value) {
        this._setOption('firstPointOnStartAngle', value);
    }
    get originValue() {
        return this._getOption('originValue');
    }
    set originValue(value) {
        this._setOption('originValue', value);
    }
    get period() {
        return this._getOption('period');
    }
    set period(value) {
        this._setOption('period', value);
    }
    get startAngle() {
        return this._getOption('startAngle');
    }
    set startAngle(value) {
        this._setOption('startAngle', value);
    }
    get _optionPath() {
        return 'argumentAxis';
    }
    get breaksChildren() {
        return this._getOption('breaks');
    }
    set breaksChildren(value) {
        this.setChildren('breaks', value);
    }
    get constantLinesChildren() {
        return this._getOption('constantLines');
    }
    set constantLinesChildren(value) {
        this.setChildren('constantLines', value);
    }
    get stripsChildren() {
        return this._getOption('strips');
    }
    set stripsChildren(value) {
        this.setChildren('strips', value);
    }
};
DxoArgumentAxisComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "aggregationGroupWidth", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "aggregationInterval", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "allowDecimals", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "argumentType", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "axisDivisionFactor", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "breaks", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "breakStyle", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "categories", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "color", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "constantLines", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "constantLineStyle", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "discreteAxisDivisionMode", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "endOnTick", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "grid", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "holidays", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "hoverMode", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "inverted", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "label", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "logarithmBase", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "max", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "maxValueMargin", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "min", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "minorGrid", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "minorTick", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "minorTickCount", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "minorTickInterval", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "minValueMargin", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "minVisualRangeLength", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "placeholderSize", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "position", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "singleWorkdays", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "strips", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "stripStyle", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "tick", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "tickInterval", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "title", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "type", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "valueMarginsEnabled", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "visualRange", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "visualRangeUpdateMode", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "wholeRange", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "width", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "workdaysOnly", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "workWeek", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "firstPointOnStartAngle", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "originValue", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "period", null);
__decorate([
    Input()
], DxoArgumentAxisComponent.prototype, "startAngle", null);
__decorate([
    Output()
], DxoArgumentAxisComponent.prototype, "visualRangeChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiBreakComponent))
], DxoArgumentAxisComponent.prototype, "breaksChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiConstantLineComponent))
], DxoArgumentAxisComponent.prototype, "constantLinesChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiStripComponent))
], DxoArgumentAxisComponent.prototype, "stripsChildren", null);
DxoArgumentAxisComponent = __decorate([
    Component({
        selector: 'dxo-argument-axis',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoArgumentAxisComponent);
let DxoArgumentAxisModule = class DxoArgumentAxisModule {
};
DxoArgumentAxisModule = __decorate([
    NgModule({
        declarations: [
            DxoArgumentAxisComponent
        ],
        exports: [
            DxoArgumentAxisComponent
        ],
    })
], DxoArgumentAxisModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoFormat extends NestedOption {
    get currency() {
        return this._getOption('currency');
    }
    set currency(value) {
        this._setOption('currency', value);
    }
    get formatter() {
        return this._getOption('formatter');
    }
    set formatter(value) {
        this._setOption('formatter', value);
    }
    get parser() {
        return this._getOption('parser');
    }
    set parser(value) {
        this._setOption('parser', value);
    }
    get precision() {
        return this._getOption('precision');
    }
    set precision(value) {
        this._setOption('precision', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoArgumentFormatComponent = class DxoArgumentFormatComponent extends DxoFormat {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'argumentFormat';
    }
};
DxoArgumentFormatComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoArgumentFormatComponent = __decorate([
    Component({
        selector: 'dxo-argument-format',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'currency',
            'formatter',
            'parser',
            'precision',
            'type'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoArgumentFormatComponent);
let DxoArgumentFormatModule = class DxoArgumentFormatModule {
};
DxoArgumentFormatModule = __decorate([
    NgModule({
        declarations: [
            DxoArgumentFormatComponent
        ],
        exports: [
            DxoArgumentFormatComponent
        ],
    })
], DxoArgumentFormatModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoAtComponent = class DxoAtComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get x() {
        return this._getOption('x');
    }
    set x(value) {
        this._setOption('x', value);
    }
    get y() {
        return this._getOption('y');
    }
    set y(value) {
        this._setOption('y', value);
    }
    get _optionPath() {
        return 'at';
    }
};
DxoAtComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoAtComponent.prototype, "x", null);
__decorate([
    Input()
], DxoAtComponent.prototype, "y", null);
DxoAtComponent = __decorate([
    Component({
        selector: 'dxo-at',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoAtComponent);
let DxoAtModule = class DxoAtModule {
};
DxoAtModule = __decorate([
    NgModule({
        declarations: [
            DxoAtComponent
        ],
        exports: [
            DxoAtComponent
        ],
    })
], DxoAtModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoBackgroundComponent = class DxoBackgroundComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get image() {
        return this._getOption('image');
    }
    set image(value) {
        this._setOption('image', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get borderColor() {
        return this._getOption('borderColor');
    }
    set borderColor(value) {
        this._setOption('borderColor', value);
    }
    get _optionPath() {
        return 'background';
    }
};
DxoBackgroundComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoBackgroundComponent.prototype, "color", null);
__decorate([
    Input()
], DxoBackgroundComponent.prototype, "image", null);
__decorate([
    Input()
], DxoBackgroundComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoBackgroundComponent.prototype, "borderColor", null);
DxoBackgroundComponent = __decorate([
    Component({
        selector: 'dxo-background',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoBackgroundComponent);
let DxoBackgroundModule = class DxoBackgroundModule {
};
DxoBackgroundModule = __decorate([
    NgModule({
        declarations: [
            DxoBackgroundComponent
        ],
        exports: [
            DxoBackgroundComponent
        ],
    })
], DxoBackgroundModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoBarComponent = class DxoBarComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'bar';
    }
};
DxoBarComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoBarComponent = __decorate([
    Component({
        selector: 'dxo-bar',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width',
            'closed'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoBarComponent);
let DxoBarModule = class DxoBarModule {
};
DxoBarModule = __decorate([
    NgModule({
        declarations: [
            DxoBarComponent
        ],
        exports: [
            DxoBarComponent
        ],
    })
], DxoBarModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoBehaviorComponent = class DxoBehaviorComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowSlidersSwap() {
        return this._getOption('allowSlidersSwap');
    }
    set allowSlidersSwap(value) {
        this._setOption('allowSlidersSwap', value);
    }
    get animationEnabled() {
        return this._getOption('animationEnabled');
    }
    set animationEnabled(value) {
        this._setOption('animationEnabled', value);
    }
    get callValueChanged() {
        return this._getOption('callValueChanged');
    }
    set callValueChanged(value) {
        this._setOption('callValueChanged', value);
    }
    get manualRangeSelectionEnabled() {
        return this._getOption('manualRangeSelectionEnabled');
    }
    set manualRangeSelectionEnabled(value) {
        this._setOption('manualRangeSelectionEnabled', value);
    }
    get moveSelectedRangeByClick() {
        return this._getOption('moveSelectedRangeByClick');
    }
    set moveSelectedRangeByClick(value) {
        this._setOption('moveSelectedRangeByClick', value);
    }
    get snapToTicks() {
        return this._getOption('snapToTicks');
    }
    set snapToTicks(value) {
        this._setOption('snapToTicks', value);
    }
    get _optionPath() {
        return 'behavior';
    }
};
DxoBehaviorComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoBehaviorComponent.prototype, "allowSlidersSwap", null);
__decorate([
    Input()
], DxoBehaviorComponent.prototype, "animationEnabled", null);
__decorate([
    Input()
], DxoBehaviorComponent.prototype, "callValueChanged", null);
__decorate([
    Input()
], DxoBehaviorComponent.prototype, "manualRangeSelectionEnabled", null);
__decorate([
    Input()
], DxoBehaviorComponent.prototype, "moveSelectedRangeByClick", null);
__decorate([
    Input()
], DxoBehaviorComponent.prototype, "snapToTicks", null);
DxoBehaviorComponent = __decorate([
    Component({
        selector: 'dxo-behavior',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoBehaviorComponent);
let DxoBehaviorModule = class DxoBehaviorModule {
};
DxoBehaviorModule = __decorate([
    NgModule({
        declarations: [
            DxoBehaviorComponent
        ],
        exports: [
            DxoBehaviorComponent
        ],
    })
], DxoBehaviorModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoBorderComponent = class DxoBorderComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get cornerRadius() {
        return this._getOption('cornerRadius');
    }
    set cornerRadius(value) {
        this._setOption('cornerRadius', value);
    }
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get bottom() {
        return this._getOption('bottom');
    }
    set bottom(value) {
        this._setOption('bottom', value);
    }
    get left() {
        return this._getOption('left');
    }
    set left(value) {
        this._setOption('left', value);
    }
    get right() {
        return this._getOption('right');
    }
    set right(value) {
        this._setOption('right', value);
    }
    get top() {
        return this._getOption('top');
    }
    set top(value) {
        this._setOption('top', value);
    }
    get _optionPath() {
        return 'border';
    }
};
DxoBorderComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoBorderComponent.prototype, "color", null);
__decorate([
    Input()
], DxoBorderComponent.prototype, "cornerRadius", null);
__decorate([
    Input()
], DxoBorderComponent.prototype, "dashStyle", null);
__decorate([
    Input()
], DxoBorderComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoBorderComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoBorderComponent.prototype, "width", null);
__decorate([
    Input()
], DxoBorderComponent.prototype, "bottom", null);
__decorate([
    Input()
], DxoBorderComponent.prototype, "left", null);
__decorate([
    Input()
], DxoBorderComponent.prototype, "right", null);
__decorate([
    Input()
], DxoBorderComponent.prototype, "top", null);
DxoBorderComponent = __decorate([
    Component({
        selector: 'dxo-border',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoBorderComponent);
let DxoBorderModule = class DxoBorderModule {
};
DxoBorderModule = __decorate([
    NgModule({
        declarations: [
            DxoBorderComponent
        ],
        exports: [
            DxoBorderComponent
        ],
    })
], DxoBorderModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoBoundaryOffsetComponent = class DxoBoundaryOffsetComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get x() {
        return this._getOption('x');
    }
    set x(value) {
        this._setOption('x', value);
    }
    get y() {
        return this._getOption('y');
    }
    set y(value) {
        this._setOption('y', value);
    }
    get _optionPath() {
        return 'boundaryOffset';
    }
};
DxoBoundaryOffsetComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoBoundaryOffsetComponent.prototype, "x", null);
__decorate([
    Input()
], DxoBoundaryOffsetComponent.prototype, "y", null);
DxoBoundaryOffsetComponent = __decorate([
    Component({
        selector: 'dxo-boundary-offset',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoBoundaryOffsetComponent);
let DxoBoundaryOffsetModule = class DxoBoundaryOffsetModule {
};
DxoBoundaryOffsetModule = __decorate([
    NgModule({
        declarations: [
            DxoBoundaryOffsetComponent
        ],
        exports: [
            DxoBoundaryOffsetComponent
        ],
    })
], DxoBoundaryOffsetModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoBoxOptions extends NestedOption {
    get align() {
        return this._getOption('align');
    }
    set align(value) {
        this._setOption('align', value);
    }
    get crossAlign() {
        return this._getOption('crossAlign');
    }
    set crossAlign(value) {
        this._setOption('crossAlign', value);
    }
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    get direction() {
        return this._getOption('direction');
    }
    set direction(value) {
        this._setOption('direction', value);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    get itemHoldTimeout() {
        return this._getOption('itemHoldTimeout');
    }
    set itemHoldTimeout(value) {
        this._setOption('itemHoldTimeout', value);
    }
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    get itemTemplate() {
        return this._getOption('itemTemplate');
    }
    set itemTemplate(value) {
        this._setOption('itemTemplate', value);
    }
    get onContentReady() {
        return this._getOption('onContentReady');
    }
    set onContentReady(value) {
        this._setOption('onContentReady', value);
    }
    get onDisposing() {
        return this._getOption('onDisposing');
    }
    set onDisposing(value) {
        this._setOption('onDisposing', value);
    }
    get onInitialized() {
        return this._getOption('onInitialized');
    }
    set onInitialized(value) {
        this._setOption('onInitialized', value);
    }
    get onItemClick() {
        return this._getOption('onItemClick');
    }
    set onItemClick(value) {
        this._setOption('onItemClick', value);
    }
    get onItemContextMenu() {
        return this._getOption('onItemContextMenu');
    }
    set onItemContextMenu(value) {
        this._setOption('onItemContextMenu', value);
    }
    get onItemHold() {
        return this._getOption('onItemHold');
    }
    set onItemHold(value) {
        this._setOption('onItemHold', value);
    }
    get onItemRendered() {
        return this._getOption('onItemRendered');
    }
    set onItemRendered(value) {
        this._setOption('onItemRendered', value);
    }
    get onOptionChanged() {
        return this._getOption('onOptionChanged');
    }
    set onOptionChanged(value) {
        this._setOption('onOptionChanged', value);
    }
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxiButtonGroupItem extends CollectionNestedOption {
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get html() {
        return this._getOption('html');
    }
    set html(value) {
        this._setOption('html', value);
    }
    get icon() {
        return this._getOption('icon');
    }
    set icon(value) {
        this._setOption('icon', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get onClick() {
        return this._getOption('onClick');
    }
    set onClick(value) {
        this._setOption('onClick', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get baseSize() {
        return this._getOption('baseSize');
    }
    set baseSize(value) {
        this._setOption('baseSize', value);
    }
    get box() {
        return this._getOption('box');
    }
    set box(value) {
        this._setOption('box', value);
    }
    get ratio() {
        return this._getOption('ratio');
    }
    set ratio(value) {
        this._setOption('ratio', value);
    }
    get shrink() {
        return this._getOption('shrink');
    }
    set shrink(value) {
        this._setOption('shrink', value);
    }
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    get beginGroup() {
        return this._getOption('beginGroup');
    }
    set beginGroup(value) {
        this._setOption('beginGroup', value);
    }
    get closeMenuOnClick() {
        return this._getOption('closeMenuOnClick');
    }
    set closeMenuOnClick(value) {
        this._setOption('closeMenuOnClick', value);
    }
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    get selectable() {
        return this._getOption('selectable');
    }
    set selectable(value) {
        this._setOption('selectable', value);
    }
    get selected() {
        return this._getOption('selected');
    }
    set selected(value) {
        this._setOption('selected', value);
    }
    get colSpan() {
        return this._getOption('colSpan');
    }
    set colSpan(value) {
        this._setOption('colSpan', value);
    }
    get cssClass() {
        return this._getOption('cssClass');
    }
    set cssClass(value) {
        this._setOption('cssClass', value);
    }
    get dataField() {
        return this._getOption('dataField');
    }
    set dataField(value) {
        this._setOption('dataField', value);
    }
    get editorOptions() {
        return this._getOption('editorOptions');
    }
    set editorOptions(value) {
        this._setOption('editorOptions', value);
    }
    get editorType() {
        return this._getOption('editorType');
    }
    set editorType(value) {
        this._setOption('editorType', value);
    }
    get helpText() {
        return this._getOption('helpText');
    }
    set helpText(value) {
        this._setOption('helpText', value);
    }
    get isRequired() {
        return this._getOption('isRequired');
    }
    set isRequired(value) {
        this._setOption('isRequired', value);
    }
    get itemType() {
        return this._getOption('itemType');
    }
    set itemType(value) {
        this._setOption('itemType', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get validationRules() {
        return this._getOption('validationRules');
    }
    set validationRules(value) {
        this._setOption('validationRules', value);
    }
    get visibleIndex() {
        return this._getOption('visibleIndex');
    }
    set visibleIndex(value) {
        this._setOption('visibleIndex', value);
    }
    get alignItemLabels() {
        return this._getOption('alignItemLabels');
    }
    set alignItemLabels(value) {
        this._setOption('alignItemLabels', value);
    }
    get caption() {
        return this._getOption('caption');
    }
    set caption(value) {
        this._setOption('caption', value);
    }
    get colCount() {
        return this._getOption('colCount');
    }
    set colCount(value) {
        this._setOption('colCount', value);
    }
    get colCountByScreen() {
        return this._getOption('colCountByScreen');
    }
    set colCountByScreen(value) {
        this._setOption('colCountByScreen', value);
    }
    get tabPanelOptions() {
        return this._getOption('tabPanelOptions');
    }
    set tabPanelOptions(value) {
        this._setOption('tabPanelOptions', value);
    }
    get tabs() {
        return this._getOption('tabs');
    }
    set tabs(value) {
        this._setOption('tabs', value);
    }
    get badge() {
        return this._getOption('badge');
    }
    set badge(value) {
        this._setOption('badge', value);
    }
    get tabTemplate() {
        return this._getOption('tabTemplate');
    }
    set tabTemplate(value) {
        this._setOption('tabTemplate', value);
    }
    get alignment() {
        return this._getOption('alignment');
    }
    set alignment(value) {
        this._setOption('alignment', value);
    }
    get buttonOptions() {
        return this._getOption('buttonOptions');
    }
    set buttonOptions(value) {
        this._setOption('buttonOptions', value);
    }
    get horizontalAlignment() {
        return this._getOption('horizontalAlignment');
    }
    set horizontalAlignment(value) {
        this._setOption('horizontalAlignment', value);
    }
    get verticalAlignment() {
        return this._getOption('verticalAlignment');
    }
    set verticalAlignment(value) {
        this._setOption('verticalAlignment', value);
    }
    get imageAlt() {
        return this._getOption('imageAlt');
    }
    set imageAlt(value) {
        this._setOption('imageAlt', value);
    }
    get imageSrc() {
        return this._getOption('imageSrc');
    }
    set imageSrc(value) {
        this._setOption('imageSrc', value);
    }
    get formatName() {
        return this._getOption('formatName');
    }
    set formatName(value) {
        this._setOption('formatName', value);
    }
    get formatValues() {
        return this._getOption('formatValues');
    }
    set formatValues(value) {
        this._setOption('formatValues', value);
    }
    get locateInMenu() {
        return this._getOption('locateInMenu');
    }
    set locateInMenu(value) {
        this._setOption('locateInMenu', value);
    }
    get location() {
        return this._getOption('location');
    }
    set location(value) {
        this._setOption('location', value);
    }
    get menuItemTemplate() {
        return this._getOption('menuItemTemplate');
    }
    set menuItemTemplate(value) {
        this._setOption('menuItemTemplate', value);
    }
    get options() {
        return this._getOption('options');
    }
    set options(value) {
        this._setOption('options', value);
    }
    get showText() {
        return this._getOption('showText');
    }
    set showText(value) {
        this._setOption('showText', value);
    }
    get widget() {
        return this._getOption('widget');
    }
    set widget(value) {
        this._setOption('widget', value);
    }
    get key() {
        return this._getOption('key');
    }
    set key(value) {
        this._setOption('key', value);
    }
    get showChevron() {
        return this._getOption('showChevron');
    }
    set showChevron(value) {
        this._setOption('showChevron', value);
    }
    get menuTemplate() {
        return this._getOption('menuTemplate');
    }
    set menuTemplate(value) {
        this._setOption('menuTemplate', value);
    }
    get heightRatio() {
        return this._getOption('heightRatio');
    }
    set heightRatio(value) {
        this._setOption('heightRatio', value);
    }
    get widthRatio() {
        return this._getOption('widthRatio');
    }
    set widthRatio(value) {
        this._setOption('widthRatio', value);
    }
    get expanded() {
        return this._getOption('expanded');
    }
    set expanded(value) {
        this._setOption('expanded', value);
    }
    get hasItems() {
        return this._getOption('hasItems');
    }
    set hasItems(value) {
        this._setOption('hasItems', value);
    }
    get parentId() {
        return this._getOption('parentId');
    }
    set parentId(value) {
        this._setOption('parentId', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiValidationRuleComponent = class DxiValidationRuleComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get message() {
        return this._getOption('message');
    }
    set message(value) {
        this._setOption('message', value);
    }
    get trim() {
        return this._getOption('trim');
    }
    set trim(value) {
        this._setOption('trim', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get ignoreEmptyValue() {
        return this._getOption('ignoreEmptyValue');
    }
    set ignoreEmptyValue(value) {
        this._setOption('ignoreEmptyValue', value);
    }
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    get reevaluate() {
        return this._getOption('reevaluate');
    }
    set reevaluate(value) {
        this._setOption('reevaluate', value);
    }
    get validationCallback() {
        return this._getOption('validationCallback');
    }
    set validationCallback(value) {
        this._setOption('validationCallback', value);
    }
    get comparisonTarget() {
        return this._getOption('comparisonTarget');
    }
    set comparisonTarget(value) {
        this._setOption('comparisonTarget', value);
    }
    get comparisonType() {
        return this._getOption('comparisonType');
    }
    set comparisonType(value) {
        this._setOption('comparisonType', value);
    }
    get pattern() {
        return this._getOption('pattern');
    }
    set pattern(value) {
        this._setOption('pattern', value);
    }
    get _optionPath() {
        return 'validationRules';
    }
};
DxiValidationRuleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "message", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "trim", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "type", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "ignoreEmptyValue", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "max", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "min", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "reevaluate", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "validationCallback", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "comparisonTarget", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "comparisonType", null);
__decorate([
    Input()
], DxiValidationRuleComponent.prototype, "pattern", null);
DxiValidationRuleComponent = __decorate([
    Component({
        selector: 'dxi-validation-rule',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiValidationRuleComponent);
let DxiValidationRuleModule = class DxiValidationRuleModule {
};
DxiValidationRuleModule = __decorate([
    NgModule({
        declarations: [
            DxiValidationRuleComponent
        ],
        exports: [
            DxiValidationRuleComponent
        ],
    })
], DxiValidationRuleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiTabComponent = class DxiTabComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        super();
        this.renderer = renderer;
        this.document = document;
        this.element = element;
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        templateHost.setHost(this);
    }
    get alignItemLabels() {
        return this._getOption('alignItemLabels');
    }
    set alignItemLabels(value) {
        this._setOption('alignItemLabels', value);
    }
    get badge() {
        return this._getOption('badge');
    }
    set badge(value) {
        this._setOption('badge', value);
    }
    get colCount() {
        return this._getOption('colCount');
    }
    set colCount(value) {
        this._setOption('colCount', value);
    }
    get colCountByScreen() {
        return this._getOption('colCountByScreen');
    }
    set colCountByScreen(value) {
        this._setOption('colCountByScreen', value);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get icon() {
        return this._getOption('icon');
    }
    set icon(value) {
        this._setOption('icon', value);
    }
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    get tabTemplate() {
        return this._getOption('tabTemplate');
    }
    set tabTemplate(value) {
        this._setOption('tabTemplate', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get _optionPath() {
        return 'tabs';
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    setTemplate(template) {
        this.template = template;
    }
    ngAfterViewInit() {
        extractTemplate(this, this.element, this.renderer, this.document);
    }
};
DxiTabComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: DxTemplateHost, decorators: [{ type: Host }] },
    { type: ElementRef }
];
__decorate([
    Input()
], DxiTabComponent.prototype, "alignItemLabels", null);
__decorate([
    Input()
], DxiTabComponent.prototype, "badge", null);
__decorate([
    Input()
], DxiTabComponent.prototype, "colCount", null);
__decorate([
    Input()
], DxiTabComponent.prototype, "colCountByScreen", null);
__decorate([
    Input()
], DxiTabComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxiTabComponent.prototype, "icon", null);
__decorate([
    Input()
], DxiTabComponent.prototype, "items", null);
__decorate([
    Input()
], DxiTabComponent.prototype, "tabTemplate", null);
__decorate([
    Input()
], DxiTabComponent.prototype, "template", null);
__decorate([
    Input()
], DxiTabComponent.prototype, "title", null);
__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent))
], DxiTabComponent.prototype, "itemsChildren", null);
DxiTabComponent = __decorate([
    Component({
        selector: 'dxi-tab',
        template: '<ng-content></ng-content>',
        providers: [NestedOptionHost, DxTemplateHost],
        styles: [':host { display: block; }']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host()),
    __param(3, Inject(DOCUMENT)),
    __param(4, Host())
], DxiTabComponent);
let DxiTabModule = class DxiTabModule {
};
DxiTabModule = __decorate([
    NgModule({
        declarations: [
            DxiTabComponent
        ],
        exports: [
            DxiTabComponent
        ],
    })
], DxiTabModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiLocationComponent = class DxiLocationComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get lat() {
        return this._getOption('lat');
    }
    set lat(value) {
        this._setOption('lat', value);
    }
    get lng() {
        return this._getOption('lng');
    }
    set lng(value) {
        this._setOption('lng', value);
    }
    get col() {
        return this._getOption('col');
    }
    set col(value) {
        this._setOption('col', value);
    }
    get colspan() {
        return this._getOption('colspan');
    }
    set colspan(value) {
        this._setOption('colspan', value);
    }
    get row() {
        return this._getOption('row');
    }
    set row(value) {
        this._setOption('row', value);
    }
    get rowspan() {
        return this._getOption('rowspan');
    }
    set rowspan(value) {
        this._setOption('rowspan', value);
    }
    get screen() {
        return this._getOption('screen');
    }
    set screen(value) {
        this._setOption('screen', value);
    }
    get _optionPath() {
        return 'location';
    }
};
DxiLocationComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiLocationComponent.prototype, "lat", null);
__decorate([
    Input()
], DxiLocationComponent.prototype, "lng", null);
__decorate([
    Input()
], DxiLocationComponent.prototype, "col", null);
__decorate([
    Input()
], DxiLocationComponent.prototype, "colspan", null);
__decorate([
    Input()
], DxiLocationComponent.prototype, "row", null);
__decorate([
    Input()
], DxiLocationComponent.prototype, "rowspan", null);
__decorate([
    Input()
], DxiLocationComponent.prototype, "screen", null);
DxiLocationComponent = __decorate([
    Component({
        selector: 'dxi-location',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiLocationComponent);
let DxiLocationModule = class DxiLocationModule {
};
DxiLocationModule = __decorate([
    NgModule({
        declarations: [
            DxiLocationComponent
        ],
        exports: [
            DxiLocationComponent
        ],
    })
], DxiLocationModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiItemComponent = DxiItemComponent_1 = class DxiItemComponent extends DxiButtonGroupItem {
    constructor(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        super();
        this.renderer = renderer;
        this.document = document;
        this.element = element;
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        templateHost.setHost(this);
    }
    get _optionPath() {
        return 'items';
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    get validationRulesChildren() {
        return this._getOption('validationRules');
    }
    set validationRulesChildren(value) {
        this.setChildren('validationRules', value);
    }
    get tabsChildren() {
        return this._getOption('tabs');
    }
    set tabsChildren(value) {
        this.setChildren('tabs', value);
    }
    get locationChildren() {
        return this._getOption('location');
    }
    set locationChildren(value) {
        this.setChildren('location', value);
    }
    setTemplate(template) {
        this.template = template;
    }
    ngAfterViewInit() {
        extractTemplate(this, this.element, this.renderer, this.document);
    }
};
DxiItemComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: DxTemplateHost, decorators: [{ type: Host }] },
    { type: ElementRef }
];
__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent_1))
], DxiItemComponent.prototype, "itemsChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiValidationRuleComponent))
], DxiItemComponent.prototype, "validationRulesChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiTabComponent))
], DxiItemComponent.prototype, "tabsChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiLocationComponent))
], DxiItemComponent.prototype, "locationChildren", null);
DxiItemComponent = DxiItemComponent_1 = __decorate([
    Component({
        selector: 'dxi-item',
        template: '<ng-content></ng-content>',
        providers: [NestedOptionHost, DxTemplateHost],
        inputs: [
            'disabled',
            'html',
            'icon',
            'template',
            'text',
            'title',
            'visible',
            'onClick',
            'type',
            'baseSize',
            'box',
            'ratio',
            'shrink',
            'hint',
            'beginGroup',
            'closeMenuOnClick',
            'items',
            'selectable',
            'selected',
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
            'validationRules',
            'visibleIndex',
            'alignItemLabels',
            'caption',
            'colCount',
            'colCountByScreen',
            'tabPanelOptions',
            'tabs',
            'badge',
            'tabTemplate',
            'alignment',
            'buttonOptions',
            'horizontalAlignment',
            'verticalAlignment',
            'imageAlt',
            'imageSrc',
            'formatName',
            'formatValues',
            'locateInMenu',
            'location',
            'menuItemTemplate',
            'options',
            'showText',
            'widget',
            'key',
            'showChevron',
            'menuTemplate',
            'heightRatio',
            'widthRatio',
            'expanded',
            'hasItems',
            'parentId'
        ],
        styles: [':host { display: block; }']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host()),
    __param(3, Inject(DOCUMENT)),
    __param(4, Host())
], DxiItemComponent);
let DxiItemModule = class DxiItemModule {
};
DxiItemModule = __decorate([
    NgModule({
        declarations: [
            DxiItemComponent
        ],
        exports: [
            DxiItemComponent
        ],
    })
], DxiItemModule);
var DxiItemComponent_1;

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoBoxComponent = class DxoBoxComponent extends DxoBoxOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'itemsChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'box';
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
};
DxoBoxComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxoBoxComponent.prototype, "itemsChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent))
], DxoBoxComponent.prototype, "itemsChildren", null);
DxoBoxComponent = __decorate([
    Component({
        selector: 'dxo-box',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'align',
            'crossAlign',
            'dataSource',
            'direction',
            'disabled',
            'elementAttr',
            'height',
            'hoverStateEnabled',
            'itemHoldTimeout',
            'items',
            'itemTemplate',
            'onContentReady',
            'onDisposing',
            'onInitialized',
            'onItemClick',
            'onItemContextMenu',
            'onItemHold',
            'onItemRendered',
            'onOptionChanged',
            'rtlEnabled',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoBoxComponent);
let DxoBoxModule = class DxoBoxModule {
};
DxoBoxModule = __decorate([
    NgModule({
        declarations: [
            DxoBoxComponent
        ],
        exports: [
            DxoBoxComponent
        ],
    })
], DxoBoxModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoBreakStyleComponent = class DxoBreakStyleComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get line() {
        return this._getOption('line');
    }
    set line(value) {
        this._setOption('line', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'breakStyle';
    }
};
DxoBreakStyleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoBreakStyleComponent.prototype, "color", null);
__decorate([
    Input()
], DxoBreakStyleComponent.prototype, "line", null);
__decorate([
    Input()
], DxoBreakStyleComponent.prototype, "width", null);
DxoBreakStyleComponent = __decorate([
    Component({
        selector: 'dxo-break-style',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoBreakStyleComponent);
let DxoBreakStyleModule = class DxoBreakStyleModule {
};
DxoBreakStyleModule = __decorate([
    NgModule({
        declarations: [
            DxoBreakStyleComponent
        ],
        exports: [
            DxoBreakStyleComponent
        ],
    })
], DxoBreakStyleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoBubbleComponent = class DxoBubbleComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'bubble';
    }
};
DxoBubbleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoBubbleComponent = __decorate([
    Component({
        selector: 'dxo-bubble',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoBubbleComponent);
let DxoBubbleModule = class DxoBubbleModule {
};
DxoBubbleModule = __decorate([
    NgModule({
        declarations: [
            DxoBubbleComponent
        ],
        exports: [
            DxoBubbleComponent
        ],
    })
], DxoBubbleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxiTextEditorButton extends CollectionNestedOption {
    get location() {
        return this._getOption('location');
    }
    set location(value) {
        this._setOption('location', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get options() {
        return this._getOption('options');
    }
    set options(value) {
        this._setOption('options', value);
    }
    get cssClass() {
        return this._getOption('cssClass');
    }
    set cssClass(value) {
        this._setOption('cssClass', value);
    }
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    get icon() {
        return this._getOption('icon');
    }
    set icon(value) {
        this._setOption('icon', value);
    }
    get onClick() {
        return this._getOption('onClick');
    }
    set onClick(value) {
        this._setOption('onClick', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiButtonComponent = class DxiButtonComponent extends DxiTextEditorButton {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'buttons';
    }
};
DxiButtonComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxiButtonComponent = __decorate([
    Component({
        selector: 'dxi-button',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'location',
            'name',
            'options',
            'cssClass',
            'hint',
            'icon',
            'onClick',
            'template',
            'text',
            'visible'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiButtonComponent);
let DxiButtonModule = class DxiButtonModule {
};
DxiButtonModule = __decorate([
    NgModule({
        declarations: [
            DxiButtonComponent
        ],
        exports: [
            DxiButtonComponent
        ],
    })
], DxiButtonModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoButtonOptions extends NestedOption {
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    get icon() {
        return this._getOption('icon');
    }
    set icon(value) {
        this._setOption('icon', value);
    }
    get onClick() {
        return this._getOption('onClick');
    }
    set onClick(value) {
        this._setOption('onClick', value);
    }
    get onContentReady() {
        return this._getOption('onContentReady');
    }
    set onContentReady(value) {
        this._setOption('onContentReady', value);
    }
    get onDisposing() {
        return this._getOption('onDisposing');
    }
    set onDisposing(value) {
        this._setOption('onDisposing', value);
    }
    get onInitialized() {
        return this._getOption('onInitialized');
    }
    set onInitialized(value) {
        this._setOption('onInitialized', value);
    }
    get onOptionChanged() {
        return this._getOption('onOptionChanged');
    }
    set onOptionChanged(value) {
        this._setOption('onOptionChanged', value);
    }
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    get stylingMode() {
        return this._getOption('stylingMode');
    }
    set stylingMode(value) {
        this._setOption('stylingMode', value);
    }
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get useSubmitBehavior() {
        return this._getOption('useSubmitBehavior');
    }
    set useSubmitBehavior(value) {
        this._setOption('useSubmitBehavior', value);
    }
    get validationGroup() {
        return this._getOption('validationGroup');
    }
    set validationGroup(value) {
        this._setOption('validationGroup', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
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
DxoButtonOptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoButtonOptionsComponent = __decorate([
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
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoButtonOptionsComponent);
let DxoButtonOptionsModule = class DxoButtonOptionsModule {
};
DxoButtonOptionsModule = __decorate([
    NgModule({
        declarations: [
            DxoButtonOptionsComponent
        ],
        exports: [
            DxoButtonOptionsComponent
        ],
    })
], DxoButtonOptionsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoCalendarOptions extends NestedOption {
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    get cellTemplate() {
        return this._getOption('cellTemplate');
    }
    set cellTemplate(value) {
        this._setOption('cellTemplate', value);
    }
    get dateSerializationFormat() {
        return this._getOption('dateSerializationFormat');
    }
    set dateSerializationFormat(value) {
        this._setOption('dateSerializationFormat', value);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get disabledDates() {
        return this._getOption('disabledDates');
    }
    set disabledDates(value) {
        this._setOption('disabledDates', value);
    }
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    get firstDayOfWeek() {
        return this._getOption('firstDayOfWeek');
    }
    set firstDayOfWeek(value) {
        this._setOption('firstDayOfWeek', value);
    }
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    get isValid() {
        return this._getOption('isValid');
    }
    set isValid(value) {
        this._setOption('isValid', value);
    }
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    get maxZoomLevel() {
        return this._getOption('maxZoomLevel');
    }
    set maxZoomLevel(value) {
        this._setOption('maxZoomLevel', value);
    }
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    get minZoomLevel() {
        return this._getOption('minZoomLevel');
    }
    set minZoomLevel(value) {
        this._setOption('minZoomLevel', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get onDisposing() {
        return this._getOption('onDisposing');
    }
    set onDisposing(value) {
        this._setOption('onDisposing', value);
    }
    get onInitialized() {
        return this._getOption('onInitialized');
    }
    set onInitialized(value) {
        this._setOption('onInitialized', value);
    }
    get onOptionChanged() {
        return this._getOption('onOptionChanged');
    }
    set onOptionChanged(value) {
        this._setOption('onOptionChanged', value);
    }
    get onValueChanged() {
        return this._getOption('onValueChanged');
    }
    set onValueChanged(value) {
        this._setOption('onValueChanged', value);
    }
    get readOnly() {
        return this._getOption('readOnly');
    }
    set readOnly(value) {
        this._setOption('readOnly', value);
    }
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    get showTodayButton() {
        return this._getOption('showTodayButton');
    }
    set showTodayButton(value) {
        this._setOption('showTodayButton', value);
    }
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    get validationError() {
        return this._getOption('validationError');
    }
    set validationError(value) {
        this._setOption('validationError', value);
    }
    get validationMessageMode() {
        return this._getOption('validationMessageMode');
    }
    set validationMessageMode(value) {
        this._setOption('validationMessageMode', value);
    }
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get zoomLevel() {
        return this._getOption('zoomLevel');
    }
    set zoomLevel(value) {
        this._setOption('zoomLevel', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoCalendarOptionsComponent = class DxoCalendarOptionsComponent extends DxoCalendarOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'valueChange' },
            { emit: 'zoomLevelChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'calendarOptions';
    }
};
DxoCalendarOptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxoCalendarOptionsComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxoCalendarOptionsComponent.prototype, "zoomLevelChange", void 0);
DxoCalendarOptionsComponent = __decorate([
    Component({
        selector: 'dxo-calendar-options',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'activeStateEnabled',
            'cellTemplate',
            'dateSerializationFormat',
            'disabled',
            'disabledDates',
            'elementAttr',
            'firstDayOfWeek',
            'focusStateEnabled',
            'height',
            'hint',
            'hoverStateEnabled',
            'isValid',
            'max',
            'maxZoomLevel',
            'min',
            'minZoomLevel',
            'name',
            'onDisposing',
            'onInitialized',
            'onOptionChanged',
            'onValueChanged',
            'readOnly',
            'rtlEnabled',
            'showTodayButton',
            'tabIndex',
            'validationError',
            'validationMessageMode',
            'value',
            'visible',
            'width',
            'zoomLevel'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoCalendarOptionsComponent);
let DxoCalendarOptionsModule = class DxoCalendarOptionsModule {
};
DxoCalendarOptionsModule = __decorate([
    NgModule({
        declarations: [
            DxoCalendarOptionsComponent
        ],
        exports: [
            DxoCalendarOptionsComponent
        ],
    })
], DxoCalendarOptionsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoCandlestickComponent = class DxoCandlestickComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'candlestick';
    }
};
DxoCandlestickComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoCandlestickComponent = __decorate([
    Component({
        selector: 'dxo-candlestick',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoCandlestickComponent);
let DxoCandlestickModule = class DxoCandlestickModule {
};
DxoCandlestickModule = __decorate([
    NgModule({
        declarations: [
            DxoCandlestickComponent
        ],
        exports: [
            DxoCandlestickComponent
        ],
    })
], DxoCandlestickModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiCenterComponent = class DxiCenterComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get lat() {
        return this._getOption('lat');
    }
    set lat(value) {
        this._setOption('lat', value);
    }
    get lng() {
        return this._getOption('lng');
    }
    set lng(value) {
        this._setOption('lng', value);
    }
    get _optionPath() {
        return 'center';
    }
};
DxiCenterComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiCenterComponent.prototype, "lat", null);
__decorate([
    Input()
], DxiCenterComponent.prototype, "lng", null);
DxiCenterComponent = __decorate([
    Component({
        selector: 'dxi-center',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiCenterComponent);
let DxiCenterModule = class DxiCenterModule {
};
DxiCenterModule = __decorate([
    NgModule({
        declarations: [
            DxiCenterComponent
        ],
        exports: [
            DxiCenterComponent
        ],
    })
], DxiCenterModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxiChartSeries extends CollectionNestedOption {
    get aggregation() {
        return this._getOption('aggregation');
    }
    set aggregation(value) {
        this._setOption('aggregation', value);
    }
    get argumentField() {
        return this._getOption('argumentField');
    }
    set argumentField(value) {
        this._setOption('argumentField', value);
    }
    get axis() {
        return this._getOption('axis');
    }
    set axis(value) {
        this._setOption('axis', value);
    }
    get barOverlapGroup() {
        return this._getOption('barOverlapGroup');
    }
    set barOverlapGroup(value) {
        this._setOption('barOverlapGroup', value);
    }
    get barPadding() {
        return this._getOption('barPadding');
    }
    set barPadding(value) {
        this._setOption('barPadding', value);
    }
    get barWidth() {
        return this._getOption('barWidth');
    }
    set barWidth(value) {
        this._setOption('barWidth', value);
    }
    get border() {
        return this._getOption('border');
    }
    set border(value) {
        this._setOption('border', value);
    }
    get closeValueField() {
        return this._getOption('closeValueField');
    }
    set closeValueField(value) {
        this._setOption('closeValueField', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get cornerRadius() {
        return this._getOption('cornerRadius');
    }
    set cornerRadius(value) {
        this._setOption('cornerRadius', value);
    }
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get highValueField() {
        return this._getOption('highValueField');
    }
    set highValueField(value) {
        this._setOption('highValueField', value);
    }
    get hoverMode() {
        return this._getOption('hoverMode');
    }
    set hoverMode(value) {
        this._setOption('hoverMode', value);
    }
    get hoverStyle() {
        return this._getOption('hoverStyle');
    }
    set hoverStyle(value) {
        this._setOption('hoverStyle', value);
    }
    get ignoreEmptyPoints() {
        return this._getOption('ignoreEmptyPoints');
    }
    set ignoreEmptyPoints(value) {
        this._setOption('ignoreEmptyPoints', value);
    }
    get innerColor() {
        return this._getOption('innerColor');
    }
    set innerColor(value) {
        this._setOption('innerColor', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get lowValueField() {
        return this._getOption('lowValueField');
    }
    set lowValueField(value) {
        this._setOption('lowValueField', value);
    }
    get maxLabelCount() {
        return this._getOption('maxLabelCount');
    }
    set maxLabelCount(value) {
        this._setOption('maxLabelCount', value);
    }
    get minBarSize() {
        return this._getOption('minBarSize');
    }
    set minBarSize(value) {
        this._setOption('minBarSize', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get openValueField() {
        return this._getOption('openValueField');
    }
    set openValueField(value) {
        this._setOption('openValueField', value);
    }
    get pane() {
        return this._getOption('pane');
    }
    set pane(value) {
        this._setOption('pane', value);
    }
    get point() {
        return this._getOption('point');
    }
    set point(value) {
        this._setOption('point', value);
    }
    get rangeValue1Field() {
        return this._getOption('rangeValue1Field');
    }
    set rangeValue1Field(value) {
        this._setOption('rangeValue1Field', value);
    }
    get rangeValue2Field() {
        return this._getOption('rangeValue2Field');
    }
    set rangeValue2Field(value) {
        this._setOption('rangeValue2Field', value);
    }
    get reduction() {
        return this._getOption('reduction');
    }
    set reduction(value) {
        this._setOption('reduction', value);
    }
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
    }
    get selectionStyle() {
        return this._getOption('selectionStyle');
    }
    set selectionStyle(value) {
        this._setOption('selectionStyle', value);
    }
    get showInLegend() {
        return this._getOption('showInLegend');
    }
    set showInLegend(value) {
        this._setOption('showInLegend', value);
    }
    get sizeField() {
        return this._getOption('sizeField');
    }
    set sizeField(value) {
        this._setOption('sizeField', value);
    }
    get stack() {
        return this._getOption('stack');
    }
    set stack(value) {
        this._setOption('stack', value);
    }
    get tag() {
        return this._getOption('tag');
    }
    set tag(value) {
        this._setOption('tag', value);
    }
    get tagField() {
        return this._getOption('tagField');
    }
    set tagField(value) {
        this._setOption('tagField', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get valueErrorBar() {
        return this._getOption('valueErrorBar');
    }
    set valueErrorBar(value) {
        this._setOption('valueErrorBar', value);
    }
    get valueField() {
        return this._getOption('valueField');
    }
    set valueField(value) {
        this._setOption('valueField', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get argumentType() {
        return this._getOption('argumentType');
    }
    set argumentType(value) {
        this._setOption('argumentType', value);
    }
    get minSegmentSize() {
        return this._getOption('minSegmentSize');
    }
    set minSegmentSize(value) {
        this._setOption('minSegmentSize', value);
    }
    get smallValuesGrouping() {
        return this._getOption('smallValuesGrouping');
    }
    set smallValuesGrouping(value) {
        this._setOption('smallValuesGrouping', value);
    }
    get closed() {
        return this._getOption('closed');
    }
    set closed(value) {
        this._setOption('closed', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiSeriesComponent = class DxiSeriesComponent extends DxiChartSeries {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'series';
    }
};
DxiSeriesComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxiSeriesComponent = __decorate([
    Component({
        selector: 'dxi-series',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'argumentField',
            'axis',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'name',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'stack',
            'tag',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width',
            'argumentType',
            'minSegmentSize',
            'smallValuesGrouping',
            'closed'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiSeriesComponent);
let DxiSeriesModule = class DxiSeriesModule {
};
DxiSeriesModule = __decorate([
    NgModule({
        declarations: [
            DxiSeriesComponent
        ],
        exports: [
            DxiSeriesComponent
        ],
    })
], DxiSeriesModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoChartComponent = class DxoChartComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get barGroupPadding() {
        return this._getOption('barGroupPadding');
    }
    set barGroupPadding(value) {
        this._setOption('barGroupPadding', value);
    }
    get barGroupWidth() {
        return this._getOption('barGroupWidth');
    }
    set barGroupWidth(value) {
        this._setOption('barGroupWidth', value);
    }
    get barWidth() {
        return this._getOption('barWidth');
    }
    set barWidth(value) {
        this._setOption('barWidth', value);
    }
    get bottomIndent() {
        return this._getOption('bottomIndent');
    }
    set bottomIndent(value) {
        this._setOption('bottomIndent', value);
    }
    get commonSeriesSettings() {
        return this._getOption('commonSeriesSettings');
    }
    set commonSeriesSettings(value) {
        this._setOption('commonSeriesSettings', value);
    }
    get dataPrepareSettings() {
        return this._getOption('dataPrepareSettings');
    }
    set dataPrepareSettings(value) {
        this._setOption('dataPrepareSettings', value);
    }
    get equalBarWidth() {
        return this._getOption('equalBarWidth');
    }
    set equalBarWidth(value) {
        this._setOption('equalBarWidth', value);
    }
    get maxBubbleSize() {
        return this._getOption('maxBubbleSize');
    }
    set maxBubbleSize(value) {
        this._setOption('maxBubbleSize', value);
    }
    get minBubbleSize() {
        return this._getOption('minBubbleSize');
    }
    set minBubbleSize(value) {
        this._setOption('minBubbleSize', value);
    }
    get negativesAsZeroes() {
        return this._getOption('negativesAsZeroes');
    }
    set negativesAsZeroes(value) {
        this._setOption('negativesAsZeroes', value);
    }
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    get paletteExtensionMode() {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value) {
        this._setOption('paletteExtensionMode', value);
    }
    get series() {
        return this._getOption('series');
    }
    set series(value) {
        this._setOption('series', value);
    }
    get seriesTemplate() {
        return this._getOption('seriesTemplate');
    }
    set seriesTemplate(value) {
        this._setOption('seriesTemplate', value);
    }
    get topIndent() {
        return this._getOption('topIndent');
    }
    set topIndent(value) {
        this._setOption('topIndent', value);
    }
    get useAggregation() {
        return this._getOption('useAggregation');
    }
    set useAggregation(value) {
        this._setOption('useAggregation', value);
    }
    get valueAxis() {
        return this._getOption('valueAxis');
    }
    set valueAxis(value) {
        this._setOption('valueAxis', value);
    }
    get _optionPath() {
        return 'chart';
    }
    get seriesChildren() {
        return this._getOption('series');
    }
    set seriesChildren(value) {
        this.setChildren('series', value);
    }
};
DxoChartComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoChartComponent.prototype, "barGroupPadding", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "barGroupWidth", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "barWidth", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "bottomIndent", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "commonSeriesSettings", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "dataPrepareSettings", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "equalBarWidth", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "maxBubbleSize", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "minBubbleSize", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "negativesAsZeroes", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "palette", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "paletteExtensionMode", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "series", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "seriesTemplate", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "topIndent", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "useAggregation", null);
__decorate([
    Input()
], DxoChartComponent.prototype, "valueAxis", null);
__decorate([
    ContentChildren(forwardRef(() => DxiSeriesComponent))
], DxoChartComponent.prototype, "seriesChildren", null);
DxoChartComponent = __decorate([
    Component({
        selector: 'dxo-chart',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoChartComponent);
let DxoChartModule = class DxoChartModule {
};
DxoChartModule = __decorate([
    NgModule({
        declarations: [
            DxoChartComponent
        ],
        exports: [
            DxoChartComponent
        ],
    })
], DxoChartModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoColCountByScreenComponent = class DxoColCountByScreenComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get lg() {
        return this._getOption('lg');
    }
    set lg(value) {
        this._setOption('lg', value);
    }
    get md() {
        return this._getOption('md');
    }
    set md(value) {
        this._setOption('md', value);
    }
    get sm() {
        return this._getOption('sm');
    }
    set sm(value) {
        this._setOption('sm', value);
    }
    get xs() {
        return this._getOption('xs');
    }
    set xs(value) {
        this._setOption('xs', value);
    }
    get _optionPath() {
        return 'colCountByScreen';
    }
};
DxoColCountByScreenComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoColCountByScreenComponent.prototype, "lg", null);
__decorate([
    Input()
], DxoColCountByScreenComponent.prototype, "md", null);
__decorate([
    Input()
], DxoColCountByScreenComponent.prototype, "sm", null);
__decorate([
    Input()
], DxoColCountByScreenComponent.prototype, "xs", null);
DxoColCountByScreenComponent = __decorate([
    Component({
        selector: 'dxo-col-count-by-screen',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoColCountByScreenComponent);
let DxoColCountByScreenModule = class DxoColCountByScreenModule {
};
DxoColCountByScreenModule = __decorate([
    NgModule({
        declarations: [
            DxoColCountByScreenComponent
        ],
        exports: [
            DxoColCountByScreenComponent
        ],
    })
], DxoColCountByScreenModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiColComponent = class DxiColComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get baseSize() {
        return this._getOption('baseSize');
    }
    set baseSize(value) {
        this._setOption('baseSize', value);
    }
    get ratio() {
        return this._getOption('ratio');
    }
    set ratio(value) {
        this._setOption('ratio', value);
    }
    get screen() {
        return this._getOption('screen');
    }
    set screen(value) {
        this._setOption('screen', value);
    }
    get shrink() {
        return this._getOption('shrink');
    }
    set shrink(value) {
        this._setOption('shrink', value);
    }
    get _optionPath() {
        return 'cols';
    }
};
DxiColComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiColComponent.prototype, "baseSize", null);
__decorate([
    Input()
], DxiColComponent.prototype, "ratio", null);
__decorate([
    Input()
], DxiColComponent.prototype, "screen", null);
__decorate([
    Input()
], DxiColComponent.prototype, "shrink", null);
DxiColComponent = __decorate([
    Component({
        selector: 'dxi-col',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiColComponent);
let DxiColModule = class DxiColModule {
};
DxiColModule = __decorate([
    NgModule({
        declarations: [
            DxiColComponent
        ],
        exports: [
            DxiColComponent
        ],
    })
], DxiColModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoCollisionComponent = class DxoCollisionComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get x() {
        return this._getOption('x');
    }
    set x(value) {
        this._setOption('x', value);
    }
    get y() {
        return this._getOption('y');
    }
    set y(value) {
        this._setOption('y', value);
    }
    get _optionPath() {
        return 'collision';
    }
};
DxoCollisionComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoCollisionComponent.prototype, "x", null);
__decorate([
    Input()
], DxoCollisionComponent.prototype, "y", null);
DxoCollisionComponent = __decorate([
    Component({
        selector: 'dxo-collision',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoCollisionComponent);
let DxoCollisionModule = class DxoCollisionModule {
};
DxoCollisionModule = __decorate([
    NgModule({
        declarations: [
            DxoCollisionComponent
        ],
        exports: [
            DxoCollisionComponent
        ],
    })
], DxoCollisionModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoColorizerComponent = class DxoColorizerComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get colorCodeField() {
        return this._getOption('colorCodeField');
    }
    set colorCodeField(value) {
        this._setOption('colorCodeField', value);
    }
    get colorizeGroups() {
        return this._getOption('colorizeGroups');
    }
    set colorizeGroups(value) {
        this._setOption('colorizeGroups', value);
    }
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    get paletteExtensionMode() {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value) {
        this._setOption('paletteExtensionMode', value);
    }
    get range() {
        return this._getOption('range');
    }
    set range(value) {
        this._setOption('range', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get _optionPath() {
        return 'colorizer';
    }
};
DxoColorizerComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoColorizerComponent.prototype, "colorCodeField", null);
__decorate([
    Input()
], DxoColorizerComponent.prototype, "colorizeGroups", null);
__decorate([
    Input()
], DxoColorizerComponent.prototype, "palette", null);
__decorate([
    Input()
], DxoColorizerComponent.prototype, "paletteExtensionMode", null);
__decorate([
    Input()
], DxoColorizerComponent.prototype, "range", null);
__decorate([
    Input()
], DxoColorizerComponent.prototype, "type", null);
DxoColorizerComponent = __decorate([
    Component({
        selector: 'dxo-colorizer',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoColorizerComponent);
let DxoColorizerModule = class DxoColorizerModule {
};
DxoColorizerModule = __decorate([
    NgModule({
        declarations: [
            DxoColorizerComponent
        ],
        exports: [
            DxoColorizerComponent
        ],
    })
], DxoColorizerModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoColumnChooserComponent = class DxoColumnChooserComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowSearch() {
        return this._getOption('allowSearch');
    }
    set allowSearch(value) {
        this._setOption('allowSearch', value);
    }
    get emptyPanelText() {
        return this._getOption('emptyPanelText');
    }
    set emptyPanelText(value) {
        this._setOption('emptyPanelText', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
    }
    get searchTimeout() {
        return this._getOption('searchTimeout');
    }
    set searchTimeout(value) {
        this._setOption('searchTimeout', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'columnChooser';
    }
};
DxoColumnChooserComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoColumnChooserComponent.prototype, "allowSearch", null);
__decorate([
    Input()
], DxoColumnChooserComponent.prototype, "emptyPanelText", null);
__decorate([
    Input()
], DxoColumnChooserComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoColumnChooserComponent.prototype, "height", null);
__decorate([
    Input()
], DxoColumnChooserComponent.prototype, "mode", null);
__decorate([
    Input()
], DxoColumnChooserComponent.prototype, "searchTimeout", null);
__decorate([
    Input()
], DxoColumnChooserComponent.prototype, "title", null);
__decorate([
    Input()
], DxoColumnChooserComponent.prototype, "width", null);
DxoColumnChooserComponent = __decorate([
    Component({
        selector: 'dxo-column-chooser',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoColumnChooserComponent);
let DxoColumnChooserModule = class DxoColumnChooserModule {
};
DxoColumnChooserModule = __decorate([
    NgModule({
        declarations: [
            DxoColumnChooserComponent
        ],
        exports: [
            DxoColumnChooserComponent
        ],
    })
], DxoColumnChooserModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxiDataGridColumn extends CollectionNestedOption {
    get alignment() {
        return this._getOption('alignment');
    }
    set alignment(value) {
        this._setOption('alignment', value);
    }
    get allowEditing() {
        return this._getOption('allowEditing');
    }
    set allowEditing(value) {
        this._setOption('allowEditing', value);
    }
    get allowExporting() {
        return this._getOption('allowExporting');
    }
    set allowExporting(value) {
        this._setOption('allowExporting', value);
    }
    get allowFiltering() {
        return this._getOption('allowFiltering');
    }
    set allowFiltering(value) {
        this._setOption('allowFiltering', value);
    }
    get allowFixing() {
        return this._getOption('allowFixing');
    }
    set allowFixing(value) {
        this._setOption('allowFixing', value);
    }
    get allowGrouping() {
        return this._getOption('allowGrouping');
    }
    set allowGrouping(value) {
        this._setOption('allowGrouping', value);
    }
    get allowHeaderFiltering() {
        return this._getOption('allowHeaderFiltering');
    }
    set allowHeaderFiltering(value) {
        this._setOption('allowHeaderFiltering', value);
    }
    get allowHiding() {
        return this._getOption('allowHiding');
    }
    set allowHiding(value) {
        this._setOption('allowHiding', value);
    }
    get allowReordering() {
        return this._getOption('allowReordering');
    }
    set allowReordering(value) {
        this._setOption('allowReordering', value);
    }
    get allowResizing() {
        return this._getOption('allowResizing');
    }
    set allowResizing(value) {
        this._setOption('allowResizing', value);
    }
    get allowSearch() {
        return this._getOption('allowSearch');
    }
    set allowSearch(value) {
        this._setOption('allowSearch', value);
    }
    get allowSorting() {
        return this._getOption('allowSorting');
    }
    set allowSorting(value) {
        this._setOption('allowSorting', value);
    }
    get autoExpandGroup() {
        return this._getOption('autoExpandGroup');
    }
    set autoExpandGroup(value) {
        this._setOption('autoExpandGroup', value);
    }
    get buttons() {
        return this._getOption('buttons');
    }
    set buttons(value) {
        this._setOption('buttons', value);
    }
    get calculateCellValue() {
        return this._getOption('calculateCellValue');
    }
    set calculateCellValue(value) {
        this._setOption('calculateCellValue', value);
    }
    get calculateDisplayValue() {
        return this._getOption('calculateDisplayValue');
    }
    set calculateDisplayValue(value) {
        this._setOption('calculateDisplayValue', value);
    }
    get calculateFilterExpression() {
        return this._getOption('calculateFilterExpression');
    }
    set calculateFilterExpression(value) {
        this._setOption('calculateFilterExpression', value);
    }
    get calculateGroupValue() {
        return this._getOption('calculateGroupValue');
    }
    set calculateGroupValue(value) {
        this._setOption('calculateGroupValue', value);
    }
    get calculateSortValue() {
        return this._getOption('calculateSortValue');
    }
    set calculateSortValue(value) {
        this._setOption('calculateSortValue', value);
    }
    get caption() {
        return this._getOption('caption');
    }
    set caption(value) {
        this._setOption('caption', value);
    }
    get cellTemplate() {
        return this._getOption('cellTemplate');
    }
    set cellTemplate(value) {
        this._setOption('cellTemplate', value);
    }
    get columns() {
        return this._getOption('columns');
    }
    set columns(value) {
        this._setOption('columns', value);
    }
    get cssClass() {
        return this._getOption('cssClass');
    }
    set cssClass(value) {
        this._setOption('cssClass', value);
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get dataField() {
        return this._getOption('dataField');
    }
    set dataField(value) {
        this._setOption('dataField', value);
    }
    get dataType() {
        return this._getOption('dataType');
    }
    set dataType(value) {
        this._setOption('dataType', value);
    }
    get editCellTemplate() {
        return this._getOption('editCellTemplate');
    }
    set editCellTemplate(value) {
        this._setOption('editCellTemplate', value);
    }
    get editorOptions() {
        return this._getOption('editorOptions');
    }
    set editorOptions(value) {
        this._setOption('editorOptions', value);
    }
    get encodeHtml() {
        return this._getOption('encodeHtml');
    }
    set encodeHtml(value) {
        this._setOption('encodeHtml', value);
    }
    get falseText() {
        return this._getOption('falseText');
    }
    set falseText(value) {
        this._setOption('falseText', value);
    }
    get filterOperations() {
        return this._getOption('filterOperations');
    }
    set filterOperations(value) {
        this._setOption('filterOperations', value);
    }
    get filterType() {
        return this._getOption('filterType');
    }
    set filterType(value) {
        this._setOption('filterType', value);
    }
    get filterValue() {
        return this._getOption('filterValue');
    }
    set filterValue(value) {
        this._setOption('filterValue', value);
    }
    get filterValues() {
        return this._getOption('filterValues');
    }
    set filterValues(value) {
        this._setOption('filterValues', value);
    }
    get fixed() {
        return this._getOption('fixed');
    }
    set fixed(value) {
        this._setOption('fixed', value);
    }
    get fixedPosition() {
        return this._getOption('fixedPosition');
    }
    set fixedPosition(value) {
        this._setOption('fixedPosition', value);
    }
    get format() {
        return this._getOption('format');
    }
    set format(value) {
        this._setOption('format', value);
    }
    get formItem() {
        return this._getOption('formItem');
    }
    set formItem(value) {
        this._setOption('formItem', value);
    }
    get groupCellTemplate() {
        return this._getOption('groupCellTemplate');
    }
    set groupCellTemplate(value) {
        this._setOption('groupCellTemplate', value);
    }
    get groupIndex() {
        return this._getOption('groupIndex');
    }
    set groupIndex(value) {
        this._setOption('groupIndex', value);
    }
    get headerCellTemplate() {
        return this._getOption('headerCellTemplate');
    }
    set headerCellTemplate(value) {
        this._setOption('headerCellTemplate', value);
    }
    get headerFilter() {
        return this._getOption('headerFilter');
    }
    set headerFilter(value) {
        this._setOption('headerFilter', value);
    }
    get hidingPriority() {
        return this._getOption('hidingPriority');
    }
    set hidingPriority(value) {
        this._setOption('hidingPriority', value);
    }
    get isBand() {
        return this._getOption('isBand');
    }
    set isBand(value) {
        this._setOption('isBand', value);
    }
    get lookup() {
        return this._getOption('lookup');
    }
    set lookup(value) {
        this._setOption('lookup', value);
    }
    get minWidth() {
        return this._getOption('minWidth');
    }
    set minWidth(value) {
        this._setOption('minWidth', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get ownerBand() {
        return this._getOption('ownerBand');
    }
    set ownerBand(value) {
        this._setOption('ownerBand', value);
    }
    get renderAsync() {
        return this._getOption('renderAsync');
    }
    set renderAsync(value) {
        this._setOption('renderAsync', value);
    }
    get selectedFilterOperation() {
        return this._getOption('selectedFilterOperation');
    }
    set selectedFilterOperation(value) {
        this._setOption('selectedFilterOperation', value);
    }
    get setCellValue() {
        return this._getOption('setCellValue');
    }
    set setCellValue(value) {
        this._setOption('setCellValue', value);
    }
    get showEditorAlways() {
        return this._getOption('showEditorAlways');
    }
    set showEditorAlways(value) {
        this._setOption('showEditorAlways', value);
    }
    get showInColumnChooser() {
        return this._getOption('showInColumnChooser');
    }
    set showInColumnChooser(value) {
        this._setOption('showInColumnChooser', value);
    }
    get showWhenGrouped() {
        return this._getOption('showWhenGrouped');
    }
    set showWhenGrouped(value) {
        this._setOption('showWhenGrouped', value);
    }
    get sortIndex() {
        return this._getOption('sortIndex');
    }
    set sortIndex(value) {
        this._setOption('sortIndex', value);
    }
    get sortingMethod() {
        return this._getOption('sortingMethod');
    }
    set sortingMethod(value) {
        this._setOption('sortingMethod', value);
    }
    get sortOrder() {
        return this._getOption('sortOrder');
    }
    set sortOrder(value) {
        this._setOption('sortOrder', value);
    }
    get trueText() {
        return this._getOption('trueText');
    }
    set trueText(value) {
        this._setOption('trueText', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get validationRules() {
        return this._getOption('validationRules');
    }
    set validationRules(value) {
        this._setOption('validationRules', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get visibleIndex() {
        return this._getOption('visibleIndex');
    }
    set visibleIndex(value) {
        this._setOption('visibleIndex', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiColumnComponent = DxiColumnComponent_1 = class DxiColumnComponent extends DxiDataGridColumn {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'filterValueChange' },
            { emit: 'filterValuesChange' },
            { emit: 'groupIndexChange' },
            { emit: 'selectedFilterOperationChange' },
            { emit: 'sortIndexChange' },
            { emit: 'sortOrderChange' },
            { emit: 'visibleChange' },
            { emit: 'visibleIndexChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'columns';
    }
    get buttonsChildren() {
        return this._getOption('buttons');
    }
    set buttonsChildren(value) {
        this.setChildren('buttons', value);
    }
    get columnsChildren() {
        return this._getOption('columns');
    }
    set columnsChildren(value) {
        this.setChildren('columns', value);
    }
    get validationRulesChildren() {
        return this._getOption('validationRules');
    }
    set validationRulesChildren(value) {
        this.setChildren('validationRules', value);
    }
};
DxiColumnComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxiColumnComponent.prototype, "filterValueChange", void 0);
__decorate([
    Output()
], DxiColumnComponent.prototype, "filterValuesChange", void 0);
__decorate([
    Output()
], DxiColumnComponent.prototype, "groupIndexChange", void 0);
__decorate([
    Output()
], DxiColumnComponent.prototype, "selectedFilterOperationChange", void 0);
__decorate([
    Output()
], DxiColumnComponent.prototype, "sortIndexChange", void 0);
__decorate([
    Output()
], DxiColumnComponent.prototype, "sortOrderChange", void 0);
__decorate([
    Output()
], DxiColumnComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxiColumnComponent.prototype, "visibleIndexChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiButtonComponent))
], DxiColumnComponent.prototype, "buttonsChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiColumnComponent_1))
], DxiColumnComponent.prototype, "columnsChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiValidationRuleComponent))
], DxiColumnComponent.prototype, "validationRulesChildren", null);
DxiColumnComponent = DxiColumnComponent_1 = __decorate([
    Component({
        selector: 'dxi-column',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'alignment',
            'allowEditing',
            'allowExporting',
            'allowFiltering',
            'allowFixing',
            'allowGrouping',
            'allowHeaderFiltering',
            'allowHiding',
            'allowReordering',
            'allowResizing',
            'allowSearch',
            'allowSorting',
            'autoExpandGroup',
            'buttons',
            'calculateCellValue',
            'calculateDisplayValue',
            'calculateFilterExpression',
            'calculateGroupValue',
            'calculateSortValue',
            'caption',
            'cellTemplate',
            'columns',
            'cssClass',
            'customizeText',
            'dataField',
            'dataType',
            'editCellTemplate',
            'editorOptions',
            'encodeHtml',
            'falseText',
            'filterOperations',
            'filterType',
            'filterValue',
            'filterValues',
            'fixed',
            'fixedPosition',
            'format',
            'formItem',
            'groupCellTemplate',
            'groupIndex',
            'headerCellTemplate',
            'headerFilter',
            'hidingPriority',
            'isBand',
            'lookup',
            'minWidth',
            'name',
            'ownerBand',
            'renderAsync',
            'selectedFilterOperation',
            'setCellValue',
            'showEditorAlways',
            'showInColumnChooser',
            'showWhenGrouped',
            'sortIndex',
            'sortingMethod',
            'sortOrder',
            'trueText',
            'type',
            'validationRules',
            'visible',
            'visibleIndex',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiColumnComponent);
let DxiColumnModule = class DxiColumnModule {
};
DxiColumnModule = __decorate([
    NgModule({
        declarations: [
            DxiColumnComponent
        ],
        exports: [
            DxiColumnComponent
        ],
    })
], DxiColumnModule);
var DxiColumnComponent_1;

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoColumnFixingComponent = class DxoColumnFixingComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get _optionPath() {
        return 'columnFixing';
    }
};
DxoColumnFixingComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoColumnFixingComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoColumnFixingComponent.prototype, "texts", null);
DxoColumnFixingComponent = __decorate([
    Component({
        selector: 'dxo-column-fixing',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoColumnFixingComponent);
let DxoColumnFixingModule = class DxoColumnFixingModule {
};
DxoColumnFixingModule = __decorate([
    NgModule({
        declarations: [
            DxoColumnFixingComponent
        ],
        exports: [
            DxoColumnFixingComponent
        ],
    })
], DxoColumnFixingModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoChartCommonAnnotationConfig extends NestedOption {
    get allowDragging() {
        return this._getOption('allowDragging');
    }
    set allowDragging(value) {
        this._setOption('allowDragging', value);
    }
    get argument() {
        return this._getOption('argument');
    }
    set argument(value) {
        this._setOption('argument', value);
    }
    get arrowLength() {
        return this._getOption('arrowLength');
    }
    set arrowLength(value) {
        this._setOption('arrowLength', value);
    }
    get arrowWidth() {
        return this._getOption('arrowWidth');
    }
    set arrowWidth(value) {
        this._setOption('arrowWidth', value);
    }
    get axis() {
        return this._getOption('axis');
    }
    set axis(value) {
        this._setOption('axis', value);
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
    get customizeTooltip() {
        return this._getOption('customizeTooltip');
    }
    set customizeTooltip(value) {
        this._setOption('customizeTooltip', value);
    }
    get description() {
        return this._getOption('description');
    }
    set description(value) {
        this._setOption('description', value);
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get image() {
        return this._getOption('image');
    }
    set image(value) {
        this._setOption('image', value);
    }
    get offsetX() {
        return this._getOption('offsetX');
    }
    set offsetX(value) {
        this._setOption('offsetX', value);
    }
    get offsetY() {
        return this._getOption('offsetY');
    }
    set offsetY(value) {
        this._setOption('offsetY', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get series() {
        return this._getOption('series');
    }
    set series(value) {
        this._setOption('series', value);
    }
    get shadow() {
        return this._getOption('shadow');
    }
    set shadow(value) {
        this._setOption('shadow', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get textOverflow() {
        return this._getOption('textOverflow');
    }
    set textOverflow(value) {
        this._setOption('textOverflow', value);
    }
    get tooltipEnabled() {
        return this._getOption('tooltipEnabled');
    }
    set tooltipEnabled(value) {
        this._setOption('tooltipEnabled', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get wordWrap() {
        return this._getOption('wordWrap');
    }
    set wordWrap(value) {
        this._setOption('wordWrap', value);
    }
    get x() {
        return this._getOption('x');
    }
    set x(value) {
        this._setOption('x', value);
    }
    get y() {
        return this._getOption('y');
    }
    set y(value) {
        this._setOption('y', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoCommonAnnotationSettingsComponent = class DxoCommonAnnotationSettingsComponent extends DxoChartCommonAnnotationConfig {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'commonAnnotationSettings';
    }
};
DxoCommonAnnotationSettingsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoCommonAnnotationSettingsComponent = __decorate([
    Component({
        selector: 'dxo-common-annotation-settings',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'allowDragging',
            'argument',
            'arrowLength',
            'arrowWidth',
            'axis',
            'border',
            'color',
            'customizeTooltip',
            'description',
            'font',
            'height',
            'image',
            'offsetX',
            'offsetY',
            'opacity',
            'paddingLeftRight',
            'paddingTopBottom',
            'series',
            'shadow',
            'text',
            'textOverflow',
            'tooltipEnabled',
            'type',
            'value',
            'width',
            'wordWrap',
            'x',
            'y'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoCommonAnnotationSettingsComponent);
let DxoCommonAnnotationSettingsModule = class DxoCommonAnnotationSettingsModule {
};
DxoCommonAnnotationSettingsModule = __decorate([
    NgModule({
        declarations: [
            DxoCommonAnnotationSettingsComponent
        ],
        exports: [
            DxoCommonAnnotationSettingsComponent
        ],
    })
], DxoCommonAnnotationSettingsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoCommonAxisSettingsComponent = class DxoCommonAxisSettingsComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowDecimals() {
        return this._getOption('allowDecimals');
    }
    set allowDecimals(value) {
        this._setOption('allowDecimals', value);
    }
    get breakStyle() {
        return this._getOption('breakStyle');
    }
    set breakStyle(value) {
        this._setOption('breakStyle', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get constantLineStyle() {
        return this._getOption('constantLineStyle');
    }
    set constantLineStyle(value) {
        this._setOption('constantLineStyle', value);
    }
    get discreteAxisDivisionMode() {
        return this._getOption('discreteAxisDivisionMode');
    }
    set discreteAxisDivisionMode(value) {
        this._setOption('discreteAxisDivisionMode', value);
    }
    get endOnTick() {
        return this._getOption('endOnTick');
    }
    set endOnTick(value) {
        this._setOption('endOnTick', value);
    }
    get grid() {
        return this._getOption('grid');
    }
    set grid(value) {
        this._setOption('grid', value);
    }
    get inverted() {
        return this._getOption('inverted');
    }
    set inverted(value) {
        this._setOption('inverted', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get maxValueMargin() {
        return this._getOption('maxValueMargin');
    }
    set maxValueMargin(value) {
        this._setOption('maxValueMargin', value);
    }
    get minorGrid() {
        return this._getOption('minorGrid');
    }
    set minorGrid(value) {
        this._setOption('minorGrid', value);
    }
    get minorTick() {
        return this._getOption('minorTick');
    }
    set minorTick(value) {
        this._setOption('minorTick', value);
    }
    get minValueMargin() {
        return this._getOption('minValueMargin');
    }
    set minValueMargin(value) {
        this._setOption('minValueMargin', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get placeholderSize() {
        return this._getOption('placeholderSize');
    }
    set placeholderSize(value) {
        this._setOption('placeholderSize', value);
    }
    get stripStyle() {
        return this._getOption('stripStyle');
    }
    set stripStyle(value) {
        this._setOption('stripStyle', value);
    }
    get tick() {
        return this._getOption('tick');
    }
    set tick(value) {
        this._setOption('tick', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get valueMarginsEnabled() {
        return this._getOption('valueMarginsEnabled');
    }
    set valueMarginsEnabled(value) {
        this._setOption('valueMarginsEnabled', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'commonAxisSettings';
    }
};
DxoCommonAxisSettingsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "allowDecimals", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "breakStyle", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "color", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "constantLineStyle", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "discreteAxisDivisionMode", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "endOnTick", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "grid", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "inverted", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "label", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "maxValueMargin", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "minorGrid", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "minorTick", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "minValueMargin", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "placeholderSize", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "stripStyle", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "tick", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "title", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "valueMarginsEnabled", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoCommonAxisSettingsComponent.prototype, "width", null);
DxoCommonAxisSettingsComponent = __decorate([
    Component({
        selector: 'dxo-common-axis-settings',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoCommonAxisSettingsComponent);
let DxoCommonAxisSettingsModule = class DxoCommonAxisSettingsModule {
};
DxoCommonAxisSettingsModule = __decorate([
    NgModule({
        declarations: [
            DxoCommonAxisSettingsComponent
        ],
        exports: [
            DxoCommonAxisSettingsComponent
        ],
    })
], DxoCommonAxisSettingsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoCommonPaneSettingsComponent = class DxoCommonPaneSettingsComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    get border() {
        return this._getOption('border');
    }
    set border(value) {
        this._setOption('border', value);
    }
    get _optionPath() {
        return 'commonPaneSettings';
    }
};
DxoCommonPaneSettingsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoCommonPaneSettingsComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], DxoCommonPaneSettingsComponent.prototype, "border", null);
DxoCommonPaneSettingsComponent = __decorate([
    Component({
        selector: 'dxo-common-pane-settings',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoCommonPaneSettingsComponent);
let DxoCommonPaneSettingsModule = class DxoCommonPaneSettingsModule {
};
DxoCommonPaneSettingsModule = __decorate([
    NgModule({
        declarations: [
            DxoCommonPaneSettingsComponent
        ],
        exports: [
            DxoCommonPaneSettingsComponent
        ],
    })
], DxoCommonPaneSettingsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoCommonSeriesSettingsComponent = class DxoCommonSeriesSettingsComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'commonSeriesSettings';
    }
};
DxoCommonSeriesSettingsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoCommonSeriesSettingsComponent = __decorate([
    Component({
        selector: 'dxo-common-series-settings',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width',
            'argumentType',
            'minSegmentSize',
            'smallValuesGrouping',
            'closed'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoCommonSeriesSettingsComponent);
let DxoCommonSeriesSettingsModule = class DxoCommonSeriesSettingsModule {
};
DxoCommonSeriesSettingsModule = __decorate([
    NgModule({
        declarations: [
            DxoCommonSeriesSettingsComponent
        ],
        exports: [
            DxoCommonSeriesSettingsComponent
        ],
    })
], DxoCommonSeriesSettingsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoConnectorComponent = class DxoConnectorComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get _optionPath() {
        return 'connector';
    }
};
DxoConnectorComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoConnectorComponent.prototype, "color", null);
__decorate([
    Input()
], DxoConnectorComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoConnectorComponent.prototype, "width", null);
__decorate([
    Input()
], DxoConnectorComponent.prototype, "opacity", null);
DxoConnectorComponent = __decorate([
    Component({
        selector: 'dxo-connector',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoConnectorComponent);
let DxoConnectorModule = class DxoConnectorModule {
};
DxoConnectorModule = __decorate([
    NgModule({
        declarations: [
            DxoConnectorComponent
        ],
        exports: [
            DxoConnectorComponent
        ],
    })
], DxoConnectorModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoConstantLineStyleComponent = class DxoConstantLineStyleComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'constantLineStyle';
    }
};
DxoConstantLineStyleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoConstantLineStyleComponent.prototype, "color", null);
__decorate([
    Input()
], DxoConstantLineStyleComponent.prototype, "dashStyle", null);
__decorate([
    Input()
], DxoConstantLineStyleComponent.prototype, "label", null);
__decorate([
    Input()
], DxoConstantLineStyleComponent.prototype, "paddingLeftRight", null);
__decorate([
    Input()
], DxoConstantLineStyleComponent.prototype, "paddingTopBottom", null);
__decorate([
    Input()
], DxoConstantLineStyleComponent.prototype, "width", null);
DxoConstantLineStyleComponent = __decorate([
    Component({
        selector: 'dxo-constant-line-style',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoConstantLineStyleComponent);
let DxoConstantLineStyleModule = class DxoConstantLineStyleModule {
};
DxoConstantLineStyleModule = __decorate([
    NgModule({
        declarations: [
            DxoConstantLineStyleComponent
        ],
        exports: [
            DxoConstantLineStyleComponent
        ],
    })
], DxoConstantLineStyleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoControlBarComponent = class DxoControlBarComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get borderColor() {
        return this._getOption('borderColor');
    }
    set borderColor(value) {
        this._setOption('borderColor', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get horizontalAlignment() {
        return this._getOption('horizontalAlignment');
    }
    set horizontalAlignment(value) {
        this._setOption('horizontalAlignment', value);
    }
    get margin() {
        return this._getOption('margin');
    }
    set margin(value) {
        this._setOption('margin', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get verticalAlignment() {
        return this._getOption('verticalAlignment');
    }
    set verticalAlignment(value) {
        this._setOption('verticalAlignment', value);
    }
    get _optionPath() {
        return 'controlBar';
    }
};
DxoControlBarComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoControlBarComponent.prototype, "borderColor", null);
__decorate([
    Input()
], DxoControlBarComponent.prototype, "color", null);
__decorate([
    Input()
], DxoControlBarComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoControlBarComponent.prototype, "horizontalAlignment", null);
__decorate([
    Input()
], DxoControlBarComponent.prototype, "margin", null);
__decorate([
    Input()
], DxoControlBarComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoControlBarComponent.prototype, "verticalAlignment", null);
DxoControlBarComponent = __decorate([
    Component({
        selector: 'dxo-control-bar',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoControlBarComponent);
let DxoControlBarModule = class DxoControlBarModule {
};
DxoControlBarModule = __decorate([
    NgModule({
        declarations: [
            DxoControlBarComponent
        ],
        exports: [
            DxoControlBarComponent
        ],
    })
], DxoControlBarModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoCrosshairComponent = class DxoCrosshairComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get horizontalLine() {
        return this._getOption('horizontalLine');
    }
    set horizontalLine(value) {
        this._setOption('horizontalLine', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get verticalLine() {
        return this._getOption('verticalLine');
    }
    set verticalLine(value) {
        this._setOption('verticalLine', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'crosshair';
    }
};
DxoCrosshairComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoCrosshairComponent.prototype, "color", null);
__decorate([
    Input()
], DxoCrosshairComponent.prototype, "dashStyle", null);
__decorate([
    Input()
], DxoCrosshairComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoCrosshairComponent.prototype, "horizontalLine", null);
__decorate([
    Input()
], DxoCrosshairComponent.prototype, "label", null);
__decorate([
    Input()
], DxoCrosshairComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoCrosshairComponent.prototype, "verticalLine", null);
__decorate([
    Input()
], DxoCrosshairComponent.prototype, "width", null);
DxoCrosshairComponent = __decorate([
    Component({
        selector: 'dxo-crosshair',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoCrosshairComponent);
let DxoCrosshairModule = class DxoCrosshairModule {
};
DxoCrosshairModule = __decorate([
    NgModule({
        declarations: [
            DxoCrosshairComponent
        ],
        exports: [
            DxoCrosshairComponent
        ],
    })
], DxoCrosshairModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxiFilterBuilderCustomOperation extends CollectionNestedOption {
    get calculateFilterExpression() {
        return this._getOption('calculateFilterExpression');
    }
    set calculateFilterExpression(value) {
        this._setOption('calculateFilterExpression', value);
    }
    get caption() {
        return this._getOption('caption');
    }
    set caption(value) {
        this._setOption('caption', value);
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get dataTypes() {
        return this._getOption('dataTypes');
    }
    set dataTypes(value) {
        this._setOption('dataTypes', value);
    }
    get editorTemplate() {
        return this._getOption('editorTemplate');
    }
    set editorTemplate(value) {
        this._setOption('editorTemplate', value);
    }
    get hasValue() {
        return this._getOption('hasValue');
    }
    set hasValue(value) {
        this._setOption('hasValue', value);
    }
    get icon() {
        return this._getOption('icon');
    }
    set icon(value) {
        this._setOption('icon', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiCustomOperationComponent = class DxiCustomOperationComponent extends DxiFilterBuilderCustomOperation {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'customOperations';
    }
};
DxiCustomOperationComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxiCustomOperationComponent = __decorate([
    Component({
        selector: 'dxi-custom-operation',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'calculateFilterExpression',
            'caption',
            'customizeText',
            'dataTypes',
            'editorTemplate',
            'hasValue',
            'icon',
            'name'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiCustomOperationComponent);
let DxiCustomOperationModule = class DxiCustomOperationModule {
};
DxiCustomOperationModule = __decorate([
    NgModule({
        declarations: [
            DxiCustomOperationComponent
        ],
        exports: [
            DxiCustomOperationComponent
        ],
    })
], DxiCustomOperationModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoDataPrepareSettingsComponent = class DxoDataPrepareSettingsComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get checkTypeForAllData() {
        return this._getOption('checkTypeForAllData');
    }
    set checkTypeForAllData(value) {
        this._setOption('checkTypeForAllData', value);
    }
    get convertToAxisDataType() {
        return this._getOption('convertToAxisDataType');
    }
    set convertToAxisDataType(value) {
        this._setOption('convertToAxisDataType', value);
    }
    get sortingMethod() {
        return this._getOption('sortingMethod');
    }
    set sortingMethod(value) {
        this._setOption('sortingMethod', value);
    }
    get _optionPath() {
        return 'dataPrepareSettings';
    }
};
DxoDataPrepareSettingsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoDataPrepareSettingsComponent.prototype, "checkTypeForAllData", null);
__decorate([
    Input()
], DxoDataPrepareSettingsComponent.prototype, "convertToAxisDataType", null);
__decorate([
    Input()
], DxoDataPrepareSettingsComponent.prototype, "sortingMethod", null);
DxoDataPrepareSettingsComponent = __decorate([
    Component({
        selector: 'dxo-data-prepare-settings',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoDataPrepareSettingsComponent);
let DxoDataPrepareSettingsModule = class DxoDataPrepareSettingsModule {
};
DxoDataPrepareSettingsModule = __decorate([
    NgModule({
        declarations: [
            DxoDataPrepareSettingsComponent
        ],
        exports: [
            DxoDataPrepareSettingsComponent
        ],
    })
], DxoDataPrepareSettingsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoPivotGridDataSource extends NestedOption {
    get fields() {
        return this._getOption('fields');
    }
    set fields(value) {
        this._setOption('fields', value);
    }
    get filter() {
        return this._getOption('filter');
    }
    set filter(value) {
        this._setOption('filter', value);
    }
    get onChanged() {
        return this._getOption('onChanged');
    }
    set onChanged(value) {
        this._setOption('onChanged', value);
    }
    get onFieldsPrepared() {
        return this._getOption('onFieldsPrepared');
    }
    set onFieldsPrepared(value) {
        this._setOption('onFieldsPrepared', value);
    }
    get onLoadError() {
        return this._getOption('onLoadError');
    }
    set onLoadError(value) {
        this._setOption('onLoadError', value);
    }
    get onLoadingChanged() {
        return this._getOption('onLoadingChanged');
    }
    set onLoadingChanged(value) {
        this._setOption('onLoadingChanged', value);
    }
    get remoteOperations() {
        return this._getOption('remoteOperations');
    }
    set remoteOperations(value) {
        this._setOption('remoteOperations', value);
    }
    get retrieveFields() {
        return this._getOption('retrieveFields');
    }
    set retrieveFields(value) {
        this._setOption('retrieveFields', value);
    }
    get store() {
        return this._getOption('store');
    }
    set store(value) {
        this._setOption('store', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxiFilterBuilderField extends CollectionNestedOption {
    get calculateFilterExpression() {
        return this._getOption('calculateFilterExpression');
    }
    set calculateFilterExpression(value) {
        this._setOption('calculateFilterExpression', value);
    }
    get caption() {
        return this._getOption('caption');
    }
    set caption(value) {
        this._setOption('caption', value);
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get dataField() {
        return this._getOption('dataField');
    }
    set dataField(value) {
        this._setOption('dataField', value);
    }
    get dataType() {
        return this._getOption('dataType');
    }
    set dataType(value) {
        this._setOption('dataType', value);
    }
    get editorOptions() {
        return this._getOption('editorOptions');
    }
    set editorOptions(value) {
        this._setOption('editorOptions', value);
    }
    get editorTemplate() {
        return this._getOption('editorTemplate');
    }
    set editorTemplate(value) {
        this._setOption('editorTemplate', value);
    }
    get falseText() {
        return this._getOption('falseText');
    }
    set falseText(value) {
        this._setOption('falseText', value);
    }
    get filterOperations() {
        return this._getOption('filterOperations');
    }
    set filterOperations(value) {
        this._setOption('filterOperations', value);
    }
    get format() {
        return this._getOption('format');
    }
    set format(value) {
        this._setOption('format', value);
    }
    get lookup() {
        return this._getOption('lookup');
    }
    set lookup(value) {
        this._setOption('lookup', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get trueText() {
        return this._getOption('trueText');
    }
    set trueText(value) {
        this._setOption('trueText', value);
    }
    get allowCrossGroupCalculation() {
        return this._getOption('allowCrossGroupCalculation');
    }
    set allowCrossGroupCalculation(value) {
        this._setOption('allowCrossGroupCalculation', value);
    }
    get allowExpandAll() {
        return this._getOption('allowExpandAll');
    }
    set allowExpandAll(value) {
        this._setOption('allowExpandAll', value);
    }
    get allowFiltering() {
        return this._getOption('allowFiltering');
    }
    set allowFiltering(value) {
        this._setOption('allowFiltering', value);
    }
    get allowSorting() {
        return this._getOption('allowSorting');
    }
    set allowSorting(value) {
        this._setOption('allowSorting', value);
    }
    get allowSortingBySummary() {
        return this._getOption('allowSortingBySummary');
    }
    set allowSortingBySummary(value) {
        this._setOption('allowSortingBySummary', value);
    }
    get area() {
        return this._getOption('area');
    }
    set area(value) {
        this._setOption('area', value);
    }
    get areaIndex() {
        return this._getOption('areaIndex');
    }
    set areaIndex(value) {
        this._setOption('areaIndex', value);
    }
    get calculateCustomSummary() {
        return this._getOption('calculateCustomSummary');
    }
    set calculateCustomSummary(value) {
        this._setOption('calculateCustomSummary', value);
    }
    get calculateSummaryValue() {
        return this._getOption('calculateSummaryValue');
    }
    set calculateSummaryValue(value) {
        this._setOption('calculateSummaryValue', value);
    }
    get displayFolder() {
        return this._getOption('displayFolder');
    }
    set displayFolder(value) {
        this._setOption('displayFolder', value);
    }
    get expanded() {
        return this._getOption('expanded');
    }
    set expanded(value) {
        this._setOption('expanded', value);
    }
    get filterType() {
        return this._getOption('filterType');
    }
    set filterType(value) {
        this._setOption('filterType', value);
    }
    get filterValues() {
        return this._getOption('filterValues');
    }
    set filterValues(value) {
        this._setOption('filterValues', value);
    }
    get groupIndex() {
        return this._getOption('groupIndex');
    }
    set groupIndex(value) {
        this._setOption('groupIndex', value);
    }
    get groupInterval() {
        return this._getOption('groupInterval');
    }
    set groupInterval(value) {
        this._setOption('groupInterval', value);
    }
    get groupName() {
        return this._getOption('groupName');
    }
    set groupName(value) {
        this._setOption('groupName', value);
    }
    get headerFilter() {
        return this._getOption('headerFilter');
    }
    set headerFilter(value) {
        this._setOption('headerFilter', value);
    }
    get isMeasure() {
        return this._getOption('isMeasure');
    }
    set isMeasure(value) {
        this._setOption('isMeasure', value);
    }
    get precision() {
        return this._getOption('precision');
    }
    set precision(value) {
        this._setOption('precision', value);
    }
    get runningTotal() {
        return this._getOption('runningTotal');
    }
    set runningTotal(value) {
        this._setOption('runningTotal', value);
    }
    get selector() {
        return this._getOption('selector');
    }
    set selector(value) {
        this._setOption('selector', value);
    }
    get showGrandTotals() {
        return this._getOption('showGrandTotals');
    }
    set showGrandTotals(value) {
        this._setOption('showGrandTotals', value);
    }
    get showTotals() {
        return this._getOption('showTotals');
    }
    set showTotals(value) {
        this._setOption('showTotals', value);
    }
    get showValues() {
        return this._getOption('showValues');
    }
    set showValues(value) {
        this._setOption('showValues', value);
    }
    get sortBy() {
        return this._getOption('sortBy');
    }
    set sortBy(value) {
        this._setOption('sortBy', value);
    }
    get sortBySummaryField() {
        return this._getOption('sortBySummaryField');
    }
    set sortBySummaryField(value) {
        this._setOption('sortBySummaryField', value);
    }
    get sortBySummaryPath() {
        return this._getOption('sortBySummaryPath');
    }
    set sortBySummaryPath(value) {
        this._setOption('sortBySummaryPath', value);
    }
    get sortingMethod() {
        return this._getOption('sortingMethod');
    }
    set sortingMethod(value) {
        this._setOption('sortingMethod', value);
    }
    get sortOrder() {
        return this._getOption('sortOrder');
    }
    set sortOrder(value) {
        this._setOption('sortOrder', value);
    }
    get summaryDisplayMode() {
        return this._getOption('summaryDisplayMode');
    }
    set summaryDisplayMode(value) {
        this._setOption('summaryDisplayMode', value);
    }
    get summaryType() {
        return this._getOption('summaryType');
    }
    set summaryType(value) {
        this._setOption('summaryType', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get wordWrapEnabled() {
        return this._getOption('wordWrapEnabled');
    }
    set wordWrapEnabled(value) {
        this._setOption('wordWrapEnabled', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiFieldComponent = class DxiFieldComponent extends DxiFilterBuilderField {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'fields';
    }
};
DxiFieldComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxiFieldComponent = __decorate([
    Component({
        selector: 'dxi-field',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'calculateFilterExpression',
            'caption',
            'customizeText',
            'dataField',
            'dataType',
            'editorOptions',
            'editorTemplate',
            'falseText',
            'filterOperations',
            'format',
            'lookup',
            'name',
            'trueText',
            'allowCrossGroupCalculation',
            'allowExpandAll',
            'allowFiltering',
            'allowSorting',
            'allowSortingBySummary',
            'area',
            'areaIndex',
            'calculateCustomSummary',
            'calculateSummaryValue',
            'displayFolder',
            'expanded',
            'filterType',
            'filterValues',
            'groupIndex',
            'groupInterval',
            'groupName',
            'headerFilter',
            'isMeasure',
            'precision',
            'runningTotal',
            'selector',
            'showGrandTotals',
            'showTotals',
            'showValues',
            'sortBy',
            'sortBySummaryField',
            'sortBySummaryPath',
            'sortingMethod',
            'sortOrder',
            'summaryDisplayMode',
            'summaryType',
            'visible',
            'width',
            'wordWrapEnabled'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiFieldComponent);
let DxiFieldModule = class DxiFieldModule {
};
DxiFieldModule = __decorate([
    NgModule({
        declarations: [
            DxiFieldComponent
        ],
        exports: [
            DxiFieldComponent
        ],
    })
], DxiFieldModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoDataSourceComponent = class DxoDataSourceComponent extends DxoPivotGridDataSource {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        if ((console) && (console.warn)) {
            console.warn('The nested \'dxo-data-source\' component is deprecated in 17.2. ' +
                'Use the \'dataSource\' option instead. ' +
                'See:\nhttps://github.com/DevExpress/devextreme-angular/blob/master/CHANGELOG.md#17.2.3');
        }
    }
    get _optionPath() {
        return 'dataSource';
    }
    get fieldsChildren() {
        return this._getOption('fields');
    }
    set fieldsChildren(value) {
        this.setChildren('fields', value);
    }
};
DxoDataSourceComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    ContentChildren(forwardRef(() => DxiFieldComponent))
], DxoDataSourceComponent.prototype, "fieldsChildren", null);
DxoDataSourceComponent = __decorate([
    Component({
        selector: 'dxo-data-source',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'fields',
            'filter',
            'onChanged',
            'onFieldsPrepared',
            'onLoadError',
            'onLoadingChanged',
            'remoteOperations',
            'retrieveFields',
            'store'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoDataSourceComponent);
let DxoDataSourceModule = class DxoDataSourceModule {
};
DxoDataSourceModule = __decorate([
    NgModule({
        declarations: [
            DxoDataSourceComponent
        ],
        exports: [
            DxoDataSourceComponent
        ],
    })
], DxoDataSourceModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoDelayComponent = class DxoDelayComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get hide() {
        return this._getOption('hide');
    }
    set hide(value) {
        this._setOption('hide', value);
    }
    get show() {
        return this._getOption('show');
    }
    set show(value) {
        this._setOption('show', value);
    }
    get _optionPath() {
        return 'delay';
    }
};
DxoDelayComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoDelayComponent.prototype, "hide", null);
__decorate([
    Input()
], DxoDelayComponent.prototype, "show", null);
DxoDelayComponent = __decorate([
    Component({
        selector: 'dxo-delay',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoDelayComponent);
let DxoDelayModule = class DxoDelayModule {
};
DxoDelayModule = __decorate([
    NgModule({
        declarations: [
            DxoDelayComponent
        ],
        exports: [
            DxoDelayComponent
        ],
    })
], DxoDelayModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoDisplayFormatComponent = class DxoDisplayFormatComponent extends DxoFormat {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'displayFormat';
    }
};
DxoDisplayFormatComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoDisplayFormatComponent = __decorate([
    Component({
        selector: 'dxo-display-format',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'currency',
            'formatter',
            'parser',
            'precision',
            'type'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoDisplayFormatComponent);
let DxoDisplayFormatModule = class DxoDisplayFormatModule {
};
DxoDisplayFormatModule = __decorate([
    NgModule({
        declarations: [
            DxoDisplayFormatComponent
        ],
        exports: [
            DxoDisplayFormatComponent
        ],
    })
], DxoDisplayFormatModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoDragBoxStyleComponent = class DxoDragBoxStyleComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get _optionPath() {
        return 'dragBoxStyle';
    }
};
DxoDragBoxStyleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoDragBoxStyleComponent.prototype, "color", null);
__decorate([
    Input()
], DxoDragBoxStyleComponent.prototype, "opacity", null);
DxoDragBoxStyleComponent = __decorate([
    Component({
        selector: 'dxo-drag-box-style',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoDragBoxStyleComponent);
let DxoDragBoxStyleModule = class DxoDragBoxStyleModule {
};
DxoDragBoxStyleModule = __decorate([
    NgModule({
        declarations: [
            DxoDragBoxStyleComponent
        ],
        exports: [
            DxoDragBoxStyleComponent
        ],
    })
], DxoDragBoxStyleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoPopupOptions extends NestedOption {
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    get animation() {
        return this._getOption('animation');
    }
    set animation(value) {
        this._setOption('animation', value);
    }
    get closeOnBackButton() {
        return this._getOption('closeOnBackButton');
    }
    set closeOnBackButton(value) {
        this._setOption('closeOnBackButton', value);
    }
    get closeOnOutsideClick() {
        return this._getOption('closeOnOutsideClick');
    }
    set closeOnOutsideClick(value) {
        this._setOption('closeOnOutsideClick', value);
    }
    get container() {
        return this._getOption('container');
    }
    set container(value) {
        this._setOption('container', value);
    }
    get contentTemplate() {
        return this._getOption('contentTemplate');
    }
    set contentTemplate(value) {
        this._setOption('contentTemplate', value);
    }
    get deferRendering() {
        return this._getOption('deferRendering');
    }
    set deferRendering(value) {
        this._setOption('deferRendering', value);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get dragEnabled() {
        return this._getOption('dragEnabled');
    }
    set dragEnabled(value) {
        this._setOption('dragEnabled', value);
    }
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    get fullScreen() {
        return this._getOption('fullScreen');
    }
    set fullScreen(value) {
        this._setOption('fullScreen', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    get maxHeight() {
        return this._getOption('maxHeight');
    }
    set maxHeight(value) {
        this._setOption('maxHeight', value);
    }
    get maxWidth() {
        return this._getOption('maxWidth');
    }
    set maxWidth(value) {
        this._setOption('maxWidth', value);
    }
    get minHeight() {
        return this._getOption('minHeight');
    }
    set minHeight(value) {
        this._setOption('minHeight', value);
    }
    get minWidth() {
        return this._getOption('minWidth');
    }
    set minWidth(value) {
        this._setOption('minWidth', value);
    }
    get onContentReady() {
        return this._getOption('onContentReady');
    }
    set onContentReady(value) {
        this._setOption('onContentReady', value);
    }
    get onDisposing() {
        return this._getOption('onDisposing');
    }
    set onDisposing(value) {
        this._setOption('onDisposing', value);
    }
    get onHidden() {
        return this._getOption('onHidden');
    }
    set onHidden(value) {
        this._setOption('onHidden', value);
    }
    get onHiding() {
        return this._getOption('onHiding');
    }
    set onHiding(value) {
        this._setOption('onHiding', value);
    }
    get onInitialized() {
        return this._getOption('onInitialized');
    }
    set onInitialized(value) {
        this._setOption('onInitialized', value);
    }
    get onOptionChanged() {
        return this._getOption('onOptionChanged');
    }
    set onOptionChanged(value) {
        this._setOption('onOptionChanged', value);
    }
    get onResize() {
        return this._getOption('onResize');
    }
    set onResize(value) {
        this._setOption('onResize', value);
    }
    get onResizeEnd() {
        return this._getOption('onResizeEnd');
    }
    set onResizeEnd(value) {
        this._setOption('onResizeEnd', value);
    }
    get onResizeStart() {
        return this._getOption('onResizeStart');
    }
    set onResizeStart(value) {
        this._setOption('onResizeStart', value);
    }
    get onShowing() {
        return this._getOption('onShowing');
    }
    set onShowing(value) {
        this._setOption('onShowing', value);
    }
    get onShown() {
        return this._getOption('onShown');
    }
    set onShown(value) {
        this._setOption('onShown', value);
    }
    get onTitleRendered() {
        return this._getOption('onTitleRendered');
    }
    set onTitleRendered(value) {
        this._setOption('onTitleRendered', value);
    }
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
    }
    get resizeEnabled() {
        return this._getOption('resizeEnabled');
    }
    set resizeEnabled(value) {
        this._setOption('resizeEnabled', value);
    }
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    get shading() {
        return this._getOption('shading');
    }
    set shading(value) {
        this._setOption('shading', value);
    }
    get shadingColor() {
        return this._getOption('shadingColor');
    }
    set shadingColor(value) {
        this._setOption('shadingColor', value);
    }
    get showCloseButton() {
        return this._getOption('showCloseButton');
    }
    set showCloseButton(value) {
        this._setOption('showCloseButton', value);
    }
    get showTitle() {
        return this._getOption('showTitle');
    }
    set showTitle(value) {
        this._setOption('showTitle', value);
    }
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get titleTemplate() {
        return this._getOption('titleTemplate');
    }
    set titleTemplate(value) {
        this._setOption('titleTemplate', value);
    }
    get toolbarItems() {
        return this._getOption('toolbarItems');
    }
    set toolbarItems(value) {
        this._setOption('toolbarItems', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiToolbarItemComponent = class DxiToolbarItemComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        super();
        this.renderer = renderer;
        this.document = document;
        this.element = element;
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        templateHost.setHost(this);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get html() {
        return this._getOption('html');
    }
    set html(value) {
        this._setOption('html', value);
    }
    get location() {
        return this._getOption('location');
    }
    set location(value) {
        this._setOption('location', value);
    }
    get options() {
        return this._getOption('options');
    }
    set options(value) {
        this._setOption('options', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get toolbar() {
        return this._getOption('toolbar');
    }
    set toolbar(value) {
        this._setOption('toolbar', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get widget() {
        return this._getOption('widget');
    }
    set widget(value) {
        this._setOption('widget', value);
    }
    get _optionPath() {
        return 'toolbarItems';
    }
    setTemplate(template) {
        this.template = template;
    }
    ngAfterViewInit() {
        extractTemplate(this, this.element, this.renderer, this.document);
    }
};
DxiToolbarItemComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: DxTemplateHost, decorators: [{ type: Host }] },
    { type: ElementRef }
];
__decorate([
    Input()
], DxiToolbarItemComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxiToolbarItemComponent.prototype, "html", null);
__decorate([
    Input()
], DxiToolbarItemComponent.prototype, "location", null);
__decorate([
    Input()
], DxiToolbarItemComponent.prototype, "options", null);
__decorate([
    Input()
], DxiToolbarItemComponent.prototype, "template", null);
__decorate([
    Input()
], DxiToolbarItemComponent.prototype, "text", null);
__decorate([
    Input()
], DxiToolbarItemComponent.prototype, "toolbar", null);
__decorate([
    Input()
], DxiToolbarItemComponent.prototype, "visible", null);
__decorate([
    Input()
], DxiToolbarItemComponent.prototype, "widget", null);
DxiToolbarItemComponent = __decorate([
    Component({
        selector: 'dxi-toolbar-item',
        template: '<ng-content></ng-content>',
        providers: [NestedOptionHost, DxTemplateHost],
        styles: [':host { display: block; }']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host()),
    __param(3, Inject(DOCUMENT)),
    __param(4, Host())
], DxiToolbarItemComponent);
let DxiToolbarItemModule = class DxiToolbarItemModule {
};
DxiToolbarItemModule = __decorate([
    NgModule({
        declarations: [
            DxiToolbarItemComponent
        ],
        exports: [
            DxiToolbarItemComponent
        ],
    })
], DxiToolbarItemModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoDropDownOptionsComponent = class DxoDropDownOptionsComponent extends DxoPopupOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'heightChange' },
            { emit: 'positionChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'dropDownOptions';
    }
    get toolbarItemsChildren() {
        return this._getOption('toolbarItems');
    }
    set toolbarItemsChildren(value) {
        this.setChildren('toolbarItems', value);
    }
};
DxoDropDownOptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxoDropDownOptionsComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxoDropDownOptionsComponent.prototype, "positionChange", void 0);
__decorate([
    Output()
], DxoDropDownOptionsComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxoDropDownOptionsComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiToolbarItemComponent))
], DxoDropDownOptionsComponent.prototype, "toolbarItemsChildren", null);
DxoDropDownOptionsComponent = __decorate([
    Component({
        selector: 'dxo-drop-down-options',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'animation',
            'closeOnBackButton',
            'closeOnOutsideClick',
            'container',
            'contentTemplate',
            'deferRendering',
            'disabled',
            'dragEnabled',
            'elementAttr',
            'focusStateEnabled',
            'fullScreen',
            'height',
            'hint',
            'hoverStateEnabled',
            'maxHeight',
            'maxWidth',
            'minHeight',
            'minWidth',
            'onContentReady',
            'onDisposing',
            'onHidden',
            'onHiding',
            'onInitialized',
            'onOptionChanged',
            'onResize',
            'onResizeEnd',
            'onResizeStart',
            'onShowing',
            'onShown',
            'onTitleRendered',
            'position',
            'resizeEnabled',
            'rtlEnabled',
            'shading',
            'shadingColor',
            'showCloseButton',
            'showTitle',
            'tabIndex',
            'title',
            'titleTemplate',
            'toolbarItems',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoDropDownOptionsComponent);
let DxoDropDownOptionsModule = class DxoDropDownOptionsModule {
};
DxoDropDownOptionsModule = __decorate([
    NgModule({
        declarations: [
            DxoDropDownOptionsComponent
        ],
        exports: [
            DxoDropDownOptionsComponent
        ],
    })
], DxoDropDownOptionsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoEditingComponent = class DxoEditingComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowAdding() {
        return this._getOption('allowAdding');
    }
    set allowAdding(value) {
        this._setOption('allowAdding', value);
    }
    get allowDeleting() {
        return this._getOption('allowDeleting');
    }
    set allowDeleting(value) {
        this._setOption('allowDeleting', value);
    }
    get allowUpdating() {
        return this._getOption('allowUpdating');
    }
    set allowUpdating(value) {
        this._setOption('allowUpdating', value);
    }
    get form() {
        return this._getOption('form');
    }
    set form(value) {
        this._setOption('form', value);
    }
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
    }
    get popup() {
        return this._getOption('popup');
    }
    set popup(value) {
        this._setOption('popup', value);
    }
    get refreshMode() {
        return this._getOption('refreshMode');
    }
    set refreshMode(value) {
        this._setOption('refreshMode', value);
    }
    get selectTextOnEditStart() {
        return this._getOption('selectTextOnEditStart');
    }
    set selectTextOnEditStart(value) {
        this._setOption('selectTextOnEditStart', value);
    }
    get startEditAction() {
        return this._getOption('startEditAction');
    }
    set startEditAction(value) {
        this._setOption('startEditAction', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get useIcons() {
        return this._getOption('useIcons');
    }
    set useIcons(value) {
        this._setOption('useIcons', value);
    }
    get allowDragging() {
        return this._getOption('allowDragging');
    }
    set allowDragging(value) {
        this._setOption('allowDragging', value);
    }
    get allowResizing() {
        return this._getOption('allowResizing');
    }
    set allowResizing(value) {
        this._setOption('allowResizing', value);
    }
    get _optionPath() {
        return 'editing';
    }
};
DxoEditingComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoEditingComponent.prototype, "allowAdding", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "allowDeleting", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "allowUpdating", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "form", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "mode", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "popup", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "refreshMode", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "selectTextOnEditStart", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "startEditAction", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "texts", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "useIcons", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "allowDragging", null);
__decorate([
    Input()
], DxoEditingComponent.prototype, "allowResizing", null);
DxoEditingComponent = __decorate([
    Component({
        selector: 'dxo-editing',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoEditingComponent);
let DxoEditingModule = class DxoEditingModule {
};
DxoEditingModule = __decorate([
    NgModule({
        declarations: [
            DxoEditingComponent
        ],
        exports: [
            DxoEditingComponent
        ],
    })
], DxoEditingModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoExportComponent = class DxoExportComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get fileName() {
        return this._getOption('fileName');
    }
    set fileName(value) {
        this._setOption('fileName', value);
    }
    get formats() {
        return this._getOption('formats');
    }
    set formats(value) {
        this._setOption('formats', value);
    }
    get margin() {
        return this._getOption('margin');
    }
    set margin(value) {
        this._setOption('margin', value);
    }
    get printingEnabled() {
        return this._getOption('printingEnabled');
    }
    set printingEnabled(value) {
        this._setOption('printingEnabled', value);
    }
    get proxyUrl() {
        return this._getOption('proxyUrl');
    }
    set proxyUrl(value) {
        this._setOption('proxyUrl', value);
    }
    get allowExportSelectedData() {
        return this._getOption('allowExportSelectedData');
    }
    set allowExportSelectedData(value) {
        this._setOption('allowExportSelectedData', value);
    }
    get customizeExcelCell() {
        return this._getOption('customizeExcelCell');
    }
    set customizeExcelCell(value) {
        this._setOption('customizeExcelCell', value);
    }
    get excelFilterEnabled() {
        return this._getOption('excelFilterEnabled');
    }
    set excelFilterEnabled(value) {
        this._setOption('excelFilterEnabled', value);
    }
    get excelWrapTextEnabled() {
        return this._getOption('excelWrapTextEnabled');
    }
    set excelWrapTextEnabled(value) {
        this._setOption('excelWrapTextEnabled', value);
    }
    get ignoreExcelErrors() {
        return this._getOption('ignoreExcelErrors');
    }
    set ignoreExcelErrors(value) {
        this._setOption('ignoreExcelErrors', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get _optionPath() {
        return 'export';
    }
};
DxoExportComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoExportComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "fileName", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "formats", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "margin", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "printingEnabled", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "proxyUrl", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "allowExportSelectedData", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "customizeExcelCell", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "excelFilterEnabled", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "excelWrapTextEnabled", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "ignoreExcelErrors", null);
__decorate([
    Input()
], DxoExportComponent.prototype, "texts", null);
DxoExportComponent = __decorate([
    Component({
        selector: 'dxo-export',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoExportComponent);
let DxoExportModule = class DxoExportModule {
};
DxoExportModule = __decorate([
    NgModule({
        declarations: [
            DxoExportComponent
        ],
        exports: [
            DxoExportComponent
        ],
    })
], DxoExportModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFieldChooserComponent = class DxoFieldChooserComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowSearch() {
        return this._getOption('allowSearch');
    }
    set allowSearch(value) {
        this._setOption('allowSearch', value);
    }
    get applyChangesMode() {
        return this._getOption('applyChangesMode');
    }
    set applyChangesMode(value) {
        this._setOption('applyChangesMode', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get layout() {
        return this._getOption('layout');
    }
    set layout(value) {
        this._setOption('layout', value);
    }
    get searchTimeout() {
        return this._getOption('searchTimeout');
    }
    set searchTimeout(value) {
        this._setOption('searchTimeout', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'fieldChooser';
    }
};
DxoFieldChooserComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoFieldChooserComponent.prototype, "allowSearch", null);
__decorate([
    Input()
], DxoFieldChooserComponent.prototype, "applyChangesMode", null);
__decorate([
    Input()
], DxoFieldChooserComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoFieldChooserComponent.prototype, "height", null);
__decorate([
    Input()
], DxoFieldChooserComponent.prototype, "layout", null);
__decorate([
    Input()
], DxoFieldChooserComponent.prototype, "searchTimeout", null);
__decorate([
    Input()
], DxoFieldChooserComponent.prototype, "texts", null);
__decorate([
    Input()
], DxoFieldChooserComponent.prototype, "title", null);
__decorate([
    Input()
], DxoFieldChooserComponent.prototype, "width", null);
DxoFieldChooserComponent = __decorate([
    Component({
        selector: 'dxo-field-chooser',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFieldChooserComponent);
let DxoFieldChooserModule = class DxoFieldChooserModule {
};
DxoFieldChooserModule = __decorate([
    NgModule({
        declarations: [
            DxoFieldChooserComponent
        ],
        exports: [
            DxoFieldChooserComponent
        ],
    })
], DxoFieldChooserModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFieldPanelComponent = class DxoFieldPanelComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowFieldDragging() {
        return this._getOption('allowFieldDragging');
    }
    set allowFieldDragging(value) {
        this._setOption('allowFieldDragging', value);
    }
    get showColumnFields() {
        return this._getOption('showColumnFields');
    }
    set showColumnFields(value) {
        this._setOption('showColumnFields', value);
    }
    get showDataFields() {
        return this._getOption('showDataFields');
    }
    set showDataFields(value) {
        this._setOption('showDataFields', value);
    }
    get showFilterFields() {
        return this._getOption('showFilterFields');
    }
    set showFilterFields(value) {
        this._setOption('showFilterFields', value);
    }
    get showRowFields() {
        return this._getOption('showRowFields');
    }
    set showRowFields(value) {
        this._setOption('showRowFields', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get _optionPath() {
        return 'fieldPanel';
    }
};
DxoFieldPanelComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoFieldPanelComponent.prototype, "allowFieldDragging", null);
__decorate([
    Input()
], DxoFieldPanelComponent.prototype, "showColumnFields", null);
__decorate([
    Input()
], DxoFieldPanelComponent.prototype, "showDataFields", null);
__decorate([
    Input()
], DxoFieldPanelComponent.prototype, "showFilterFields", null);
__decorate([
    Input()
], DxoFieldPanelComponent.prototype, "showRowFields", null);
__decorate([
    Input()
], DxoFieldPanelComponent.prototype, "texts", null);
__decorate([
    Input()
], DxoFieldPanelComponent.prototype, "visible", null);
DxoFieldPanelComponent = __decorate([
    Component({
        selector: 'dxo-field-panel',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFieldPanelComponent);
let DxoFieldPanelModule = class DxoFieldPanelModule {
};
DxoFieldPanelModule = __decorate([
    NgModule({
        declarations: [
            DxoFieldPanelComponent
        ],
        exports: [
            DxoFieldPanelComponent
        ],
    })
], DxoFieldPanelModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFilterBuilderPopupComponent = class DxoFilterBuilderPopupComponent extends DxoPopupOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'heightChange' },
            { emit: 'positionChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'filterBuilderPopup';
    }
    get toolbarItemsChildren() {
        return this._getOption('toolbarItems');
    }
    set toolbarItemsChildren(value) {
        this.setChildren('toolbarItems', value);
    }
};
DxoFilterBuilderPopupComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxoFilterBuilderPopupComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxoFilterBuilderPopupComponent.prototype, "positionChange", void 0);
__decorate([
    Output()
], DxoFilterBuilderPopupComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxoFilterBuilderPopupComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiToolbarItemComponent))
], DxoFilterBuilderPopupComponent.prototype, "toolbarItemsChildren", null);
DxoFilterBuilderPopupComponent = __decorate([
    Component({
        selector: 'dxo-filter-builder-popup',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'animation',
            'closeOnBackButton',
            'closeOnOutsideClick',
            'container',
            'contentTemplate',
            'deferRendering',
            'disabled',
            'dragEnabled',
            'elementAttr',
            'focusStateEnabled',
            'fullScreen',
            'height',
            'hint',
            'hoverStateEnabled',
            'maxHeight',
            'maxWidth',
            'minHeight',
            'minWidth',
            'onContentReady',
            'onDisposing',
            'onHidden',
            'onHiding',
            'onInitialized',
            'onOptionChanged',
            'onResize',
            'onResizeEnd',
            'onResizeStart',
            'onShowing',
            'onShown',
            'onTitleRendered',
            'position',
            'resizeEnabled',
            'rtlEnabled',
            'shading',
            'shadingColor',
            'showCloseButton',
            'showTitle',
            'tabIndex',
            'title',
            'titleTemplate',
            'toolbarItems',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFilterBuilderPopupComponent);
let DxoFilterBuilderPopupModule = class DxoFilterBuilderPopupModule {
};
DxoFilterBuilderPopupModule = __decorate([
    NgModule({
        declarations: [
            DxoFilterBuilderPopupComponent
        ],
        exports: [
            DxoFilterBuilderPopupComponent
        ],
    })
], DxoFilterBuilderPopupModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoFilterBuilderOptions extends NestedOption {
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    get allowHierarchicalFields() {
        return this._getOption('allowHierarchicalFields');
    }
    set allowHierarchicalFields(value) {
        this._setOption('allowHierarchicalFields', value);
    }
    get customOperations() {
        return this._getOption('customOperations');
    }
    set customOperations(value) {
        this._setOption('customOperations', value);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    get fields() {
        return this._getOption('fields');
    }
    set fields(value) {
        this._setOption('fields', value);
    }
    get filterOperationDescriptions() {
        return this._getOption('filterOperationDescriptions');
    }
    set filterOperationDescriptions(value) {
        this._setOption('filterOperationDescriptions', value);
    }
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    get groupOperationDescriptions() {
        return this._getOption('groupOperationDescriptions');
    }
    set groupOperationDescriptions(value) {
        this._setOption('groupOperationDescriptions', value);
    }
    get groupOperations() {
        return this._getOption('groupOperations');
    }
    set groupOperations(value) {
        this._setOption('groupOperations', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    get maxGroupLevel() {
        return this._getOption('maxGroupLevel');
    }
    set maxGroupLevel(value) {
        this._setOption('maxGroupLevel', value);
    }
    get onContentReady() {
        return this._getOption('onContentReady');
    }
    set onContentReady(value) {
        this._setOption('onContentReady', value);
    }
    get onDisposing() {
        return this._getOption('onDisposing');
    }
    set onDisposing(value) {
        this._setOption('onDisposing', value);
    }
    get onEditorPrepared() {
        return this._getOption('onEditorPrepared');
    }
    set onEditorPrepared(value) {
        this._setOption('onEditorPrepared', value);
    }
    get onEditorPreparing() {
        return this._getOption('onEditorPreparing');
    }
    set onEditorPreparing(value) {
        this._setOption('onEditorPreparing', value);
    }
    get onInitialized() {
        return this._getOption('onInitialized');
    }
    set onInitialized(value) {
        this._setOption('onInitialized', value);
    }
    get onOptionChanged() {
        return this._getOption('onOptionChanged');
    }
    set onOptionChanged(value) {
        this._setOption('onOptionChanged', value);
    }
    get onValueChanged() {
        return this._getOption('onValueChanged');
    }
    set onValueChanged(value) {
        this._setOption('onValueChanged', value);
    }
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFilterBuilderComponent = class DxoFilterBuilderComponent extends DxoFilterBuilderOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'valueChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'filterBuilder';
    }
    get customOperationsChildren() {
        return this._getOption('customOperations');
    }
    set customOperationsChildren(value) {
        this.setChildren('customOperations', value);
    }
    get fieldsChildren() {
        return this._getOption('fields');
    }
    set fieldsChildren(value) {
        this.setChildren('fields', value);
    }
};
DxoFilterBuilderComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxoFilterBuilderComponent.prototype, "valueChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiCustomOperationComponent))
], DxoFilterBuilderComponent.prototype, "customOperationsChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiFieldComponent))
], DxoFilterBuilderComponent.prototype, "fieldsChildren", null);
DxoFilterBuilderComponent = __decorate([
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
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFilterBuilderComponent);
let DxoFilterBuilderModule = class DxoFilterBuilderModule {
};
DxoFilterBuilderModule = __decorate([
    NgModule({
        declarations: [
            DxoFilterBuilderComponent
        ],
        exports: [
            DxoFilterBuilderComponent
        ],
    })
], DxoFilterBuilderModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFilterOperationDescriptionsComponent = class DxoFilterOperationDescriptionsComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get between() {
        return this._getOption('between');
    }
    set between(value) {
        this._setOption('between', value);
    }
    get contains() {
        return this._getOption('contains');
    }
    set contains(value) {
        this._setOption('contains', value);
    }
    get endsWith() {
        return this._getOption('endsWith');
    }
    set endsWith(value) {
        this._setOption('endsWith', value);
    }
    get equal() {
        return this._getOption('equal');
    }
    set equal(value) {
        this._setOption('equal', value);
    }
    get greaterThan() {
        return this._getOption('greaterThan');
    }
    set greaterThan(value) {
        this._setOption('greaterThan', value);
    }
    get greaterThanOrEqual() {
        return this._getOption('greaterThanOrEqual');
    }
    set greaterThanOrEqual(value) {
        this._setOption('greaterThanOrEqual', value);
    }
    get isBlank() {
        return this._getOption('isBlank');
    }
    set isBlank(value) {
        this._setOption('isBlank', value);
    }
    get isNotBlank() {
        return this._getOption('isNotBlank');
    }
    set isNotBlank(value) {
        this._setOption('isNotBlank', value);
    }
    get lessThan() {
        return this._getOption('lessThan');
    }
    set lessThan(value) {
        this._setOption('lessThan', value);
    }
    get lessThanOrEqual() {
        return this._getOption('lessThanOrEqual');
    }
    set lessThanOrEqual(value) {
        this._setOption('lessThanOrEqual', value);
    }
    get notContains() {
        return this._getOption('notContains');
    }
    set notContains(value) {
        this._setOption('notContains', value);
    }
    get notEqual() {
        return this._getOption('notEqual');
    }
    set notEqual(value) {
        this._setOption('notEqual', value);
    }
    get startsWith() {
        return this._getOption('startsWith');
    }
    set startsWith(value) {
        this._setOption('startsWith', value);
    }
    get _optionPath() {
        return 'filterOperationDescriptions';
    }
};
DxoFilterOperationDescriptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "between", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "contains", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "endsWith", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "equal", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "greaterThan", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "greaterThanOrEqual", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "isBlank", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "isNotBlank", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "lessThan", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "lessThanOrEqual", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "notContains", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "notEqual", null);
__decorate([
    Input()
], DxoFilterOperationDescriptionsComponent.prototype, "startsWith", null);
DxoFilterOperationDescriptionsComponent = __decorate([
    Component({
        selector: 'dxo-filter-operation-descriptions',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFilterOperationDescriptionsComponent);
let DxoFilterOperationDescriptionsModule = class DxoFilterOperationDescriptionsModule {
};
DxoFilterOperationDescriptionsModule = __decorate([
    NgModule({
        declarations: [
            DxoFilterOperationDescriptionsComponent
        ],
        exports: [
            DxoFilterOperationDescriptionsComponent
        ],
    })
], DxoFilterOperationDescriptionsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFilterPanelComponent = class DxoFilterPanelComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'filterEnabledChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get filterEnabled() {
        return this._getOption('filterEnabled');
    }
    set filterEnabled(value) {
        this._setOption('filterEnabled', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get _optionPath() {
        return 'filterPanel';
    }
};
DxoFilterPanelComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoFilterPanelComponent.prototype, "customizeText", null);
__decorate([
    Input()
], DxoFilterPanelComponent.prototype, "filterEnabled", null);
__decorate([
    Input()
], DxoFilterPanelComponent.prototype, "texts", null);
__decorate([
    Input()
], DxoFilterPanelComponent.prototype, "visible", null);
__decorate([
    Output()
], DxoFilterPanelComponent.prototype, "filterEnabledChange", void 0);
DxoFilterPanelComponent = __decorate([
    Component({
        selector: 'dxo-filter-panel',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFilterPanelComponent);
let DxoFilterPanelModule = class DxoFilterPanelModule {
};
DxoFilterPanelModule = __decorate([
    NgModule({
        declarations: [
            DxoFilterPanelComponent
        ],
        exports: [
            DxoFilterPanelComponent
        ],
    })
], DxoFilterPanelModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFilterRowComponent = class DxoFilterRowComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get applyFilter() {
        return this._getOption('applyFilter');
    }
    set applyFilter(value) {
        this._setOption('applyFilter', value);
    }
    get applyFilterText() {
        return this._getOption('applyFilterText');
    }
    set applyFilterText(value) {
        this._setOption('applyFilterText', value);
    }
    get betweenEndText() {
        return this._getOption('betweenEndText');
    }
    set betweenEndText(value) {
        this._setOption('betweenEndText', value);
    }
    get betweenStartText() {
        return this._getOption('betweenStartText');
    }
    set betweenStartText(value) {
        this._setOption('betweenStartText', value);
    }
    get operationDescriptions() {
        return this._getOption('operationDescriptions');
    }
    set operationDescriptions(value) {
        this._setOption('operationDescriptions', value);
    }
    get resetOperationText() {
        return this._getOption('resetOperationText');
    }
    set resetOperationText(value) {
        this._setOption('resetOperationText', value);
    }
    get showAllText() {
        return this._getOption('showAllText');
    }
    set showAllText(value) {
        this._setOption('showAllText', value);
    }
    get showOperationChooser() {
        return this._getOption('showOperationChooser');
    }
    set showOperationChooser(value) {
        this._setOption('showOperationChooser', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get _optionPath() {
        return 'filterRow';
    }
};
DxoFilterRowComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoFilterRowComponent.prototype, "applyFilter", null);
__decorate([
    Input()
], DxoFilterRowComponent.prototype, "applyFilterText", null);
__decorate([
    Input()
], DxoFilterRowComponent.prototype, "betweenEndText", null);
__decorate([
    Input()
], DxoFilterRowComponent.prototype, "betweenStartText", null);
__decorate([
    Input()
], DxoFilterRowComponent.prototype, "operationDescriptions", null);
__decorate([
    Input()
], DxoFilterRowComponent.prototype, "resetOperationText", null);
__decorate([
    Input()
], DxoFilterRowComponent.prototype, "showAllText", null);
__decorate([
    Input()
], DxoFilterRowComponent.prototype, "showOperationChooser", null);
__decorate([
    Input()
], DxoFilterRowComponent.prototype, "visible", null);
DxoFilterRowComponent = __decorate([
    Component({
        selector: 'dxo-filter-row',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFilterRowComponent);
let DxoFilterRowModule = class DxoFilterRowModule {
};
DxoFilterRowModule = __decorate([
    NgModule({
        declarations: [
            DxoFilterRowComponent
        ],
        exports: [
            DxoFilterRowComponent
        ],
    })
], DxoFilterRowModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoVizFont extends NestedOption {
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get family() {
        return this._getOption('family');
    }
    set family(value) {
        this._setOption('family', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
    }
    get weight() {
        return this._getOption('weight');
    }
    set weight(value) {
        this._setOption('weight', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFontComponent = class DxoFontComponent extends DxoVizFont {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'font';
    }
};
DxoFontComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoFontComponent = __decorate([
    Component({
        selector: 'dxo-font',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'color',
            'family',
            'opacity',
            'size',
            'weight'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFontComponent);
let DxoFontModule = class DxoFontModule {
};
DxoFontModule = __decorate([
    NgModule({
        declarations: [
            DxoFontComponent
        ],
        exports: [
            DxoFontComponent
        ],
    })
], DxoFontModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoFormSimpleItem extends NestedOption {
    get colSpan() {
        return this._getOption('colSpan');
    }
    set colSpan(value) {
        this._setOption('colSpan', value);
    }
    get cssClass() {
        return this._getOption('cssClass');
    }
    set cssClass(value) {
        this._setOption('cssClass', value);
    }
    get dataField() {
        return this._getOption('dataField');
    }
    set dataField(value) {
        this._setOption('dataField', value);
    }
    get editorOptions() {
        return this._getOption('editorOptions');
    }
    set editorOptions(value) {
        this._setOption('editorOptions', value);
    }
    get editorType() {
        return this._getOption('editorType');
    }
    set editorType(value) {
        this._setOption('editorType', value);
    }
    get helpText() {
        return this._getOption('helpText');
    }
    set helpText(value) {
        this._setOption('helpText', value);
    }
    get isRequired() {
        return this._getOption('isRequired');
    }
    set isRequired(value) {
        this._setOption('isRequired', value);
    }
    get itemType() {
        return this._getOption('itemType');
    }
    set itemType(value) {
        this._setOption('itemType', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get validationRules() {
        return this._getOption('validationRules');
    }
    set validationRules(value) {
        this._setOption('validationRules', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get visibleIndex() {
        return this._getOption('visibleIndex');
    }
    set visibleIndex(value) {
        this._setOption('visibleIndex', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFormItemComponent = class DxoFormItemComponent extends DxoFormSimpleItem {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'formItem';
    }
    get validationRulesChildren() {
        return this._getOption('validationRules');
    }
    set validationRulesChildren(value) {
        this.setChildren('validationRules', value);
    }
};
DxoFormItemComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    ContentChildren(forwardRef(() => DxiValidationRuleComponent))
], DxoFormItemComponent.prototype, "validationRulesChildren", null);
DxoFormItemComponent = __decorate([
    Component({
        selector: 'dxo-form-item',
        template: '',
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
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFormItemComponent);
let DxoFormItemModule = class DxoFormItemModule {
};
DxoFormItemModule = __decorate([
    NgModule({
        declarations: [
            DxoFormItemComponent
        ],
        exports: [
            DxoFormItemComponent
        ],
    })
], DxoFormItemModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoFormOptions extends NestedOption {
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    get alignItemLabels() {
        return this._getOption('alignItemLabels');
    }
    set alignItemLabels(value) {
        this._setOption('alignItemLabels', value);
    }
    get alignItemLabelsInAllGroups() {
        return this._getOption('alignItemLabelsInAllGroups');
    }
    set alignItemLabelsInAllGroups(value) {
        this._setOption('alignItemLabelsInAllGroups', value);
    }
    get colCount() {
        return this._getOption('colCount');
    }
    set colCount(value) {
        this._setOption('colCount', value);
    }
    get colCountByScreen() {
        return this._getOption('colCountByScreen');
    }
    set colCountByScreen(value) {
        this._setOption('colCountByScreen', value);
    }
    get customizeItem() {
        return this._getOption('customizeItem');
    }
    set customizeItem(value) {
        this._setOption('customizeItem', value);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    get formData() {
        return this._getOption('formData');
    }
    set formData(value) {
        this._setOption('formData', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    get labelLocation() {
        return this._getOption('labelLocation');
    }
    set labelLocation(value) {
        this._setOption('labelLocation', value);
    }
    get minColWidth() {
        return this._getOption('minColWidth');
    }
    set minColWidth(value) {
        this._setOption('minColWidth', value);
    }
    get onContentReady() {
        return this._getOption('onContentReady');
    }
    set onContentReady(value) {
        this._setOption('onContentReady', value);
    }
    get onDisposing() {
        return this._getOption('onDisposing');
    }
    set onDisposing(value) {
        this._setOption('onDisposing', value);
    }
    get onEditorEnterKey() {
        return this._getOption('onEditorEnterKey');
    }
    set onEditorEnterKey(value) {
        this._setOption('onEditorEnterKey', value);
    }
    get onFieldDataChanged() {
        return this._getOption('onFieldDataChanged');
    }
    set onFieldDataChanged(value) {
        this._setOption('onFieldDataChanged', value);
    }
    get onInitialized() {
        return this._getOption('onInitialized');
    }
    set onInitialized(value) {
        this._setOption('onInitialized', value);
    }
    get onOptionChanged() {
        return this._getOption('onOptionChanged');
    }
    set onOptionChanged(value) {
        this._setOption('onOptionChanged', value);
    }
    get optionalMark() {
        return this._getOption('optionalMark');
    }
    set optionalMark(value) {
        this._setOption('optionalMark', value);
    }
    get readOnly() {
        return this._getOption('readOnly');
    }
    set readOnly(value) {
        this._setOption('readOnly', value);
    }
    get requiredMark() {
        return this._getOption('requiredMark');
    }
    set requiredMark(value) {
        this._setOption('requiredMark', value);
    }
    get requiredMessage() {
        return this._getOption('requiredMessage');
    }
    set requiredMessage(value) {
        this._setOption('requiredMessage', value);
    }
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    get screenByWidth() {
        return this._getOption('screenByWidth');
    }
    set screenByWidth(value) {
        this._setOption('screenByWidth', value);
    }
    get scrollingEnabled() {
        return this._getOption('scrollingEnabled');
    }
    set scrollingEnabled(value) {
        this._setOption('scrollingEnabled', value);
    }
    get showColonAfterLabel() {
        return this._getOption('showColonAfterLabel');
    }
    set showColonAfterLabel(value) {
        this._setOption('showColonAfterLabel', value);
    }
    get showOptionalMark() {
        return this._getOption('showOptionalMark');
    }
    set showOptionalMark(value) {
        this._setOption('showOptionalMark', value);
    }
    get showRequiredMark() {
        return this._getOption('showRequiredMark');
    }
    set showRequiredMark(value) {
        this._setOption('showRequiredMark', value);
    }
    get showValidationSummary() {
        return this._getOption('showValidationSummary');
    }
    set showValidationSummary(value) {
        this._setOption('showValidationSummary', value);
    }
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    get validationGroup() {
        return this._getOption('validationGroup');
    }
    set validationGroup(value) {
        this._setOption('validationGroup', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFormComponent = class DxoFormComponent extends DxoFormOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'formDataChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'form';
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
};
DxoFormComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxoFormComponent.prototype, "formDataChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent))
], DxoFormComponent.prototype, "itemsChildren", null);
DxoFormComponent = __decorate([
    Component({
        selector: 'dxo-form',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'activeStateEnabled',
            'alignItemLabels',
            'alignItemLabelsInAllGroups',
            'colCount',
            'colCountByScreen',
            'customizeItem',
            'disabled',
            'elementAttr',
            'focusStateEnabled',
            'formData',
            'height',
            'hint',
            'hoverStateEnabled',
            'items',
            'labelLocation',
            'minColWidth',
            'onContentReady',
            'onDisposing',
            'onEditorEnterKey',
            'onFieldDataChanged',
            'onInitialized',
            'onOptionChanged',
            'optionalMark',
            'readOnly',
            'requiredMark',
            'requiredMessage',
            'rtlEnabled',
            'screenByWidth',
            'scrollingEnabled',
            'showColonAfterLabel',
            'showOptionalMark',
            'showRequiredMark',
            'showValidationSummary',
            'tabIndex',
            'validationGroup',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFormComponent);
let DxoFormModule = class DxoFormModule {
};
DxoFormModule = __decorate([
    NgModule({
        declarations: [
            DxoFormComponent
        ],
        exports: [
            DxoFormComponent
        ],
    })
], DxoFormModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFormatComponent = class DxoFormatComponent extends DxoFormat {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'format';
    }
};
DxoFormatComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoFormatComponent = __decorate([
    Component({
        selector: 'dxo-format',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'currency',
            'formatter',
            'parser',
            'precision',
            'type'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFormatComponent);
let DxoFormatModule = class DxoFormatModule {
};
DxoFormatModule = __decorate([
    NgModule({
        declarations: [
            DxoFormatComponent
        ],
        exports: [
            DxoFormatComponent
        ],
    })
], DxoFormatModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFullstackedareaComponent = class DxoFullstackedareaComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'fullstackedarea';
    }
};
DxoFullstackedareaComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoFullstackedareaComponent = __decorate([
    Component({
        selector: 'dxo-fullstackedarea',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFullstackedareaComponent);
let DxoFullstackedareaModule = class DxoFullstackedareaModule {
};
DxoFullstackedareaModule = __decorate([
    NgModule({
        declarations: [
            DxoFullstackedareaComponent
        ],
        exports: [
            DxoFullstackedareaComponent
        ],
    })
], DxoFullstackedareaModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFullstackedbarComponent = class DxoFullstackedbarComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'fullstackedbar';
    }
};
DxoFullstackedbarComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoFullstackedbarComponent = __decorate([
    Component({
        selector: 'dxo-fullstackedbar',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFullstackedbarComponent);
let DxoFullstackedbarModule = class DxoFullstackedbarModule {
};
DxoFullstackedbarModule = __decorate([
    NgModule({
        declarations: [
            DxoFullstackedbarComponent
        ],
        exports: [
            DxoFullstackedbarComponent
        ],
    })
], DxoFullstackedbarModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFullstackedlineComponent = class DxoFullstackedlineComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'fullstackedline';
    }
};
DxoFullstackedlineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoFullstackedlineComponent = __decorate([
    Component({
        selector: 'dxo-fullstackedline',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFullstackedlineComponent);
let DxoFullstackedlineModule = class DxoFullstackedlineModule {
};
DxoFullstackedlineModule = __decorate([
    NgModule({
        declarations: [
            DxoFullstackedlineComponent
        ],
        exports: [
            DxoFullstackedlineComponent
        ],
    })
], DxoFullstackedlineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFullstackedsplineComponent = class DxoFullstackedsplineComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'fullstackedspline';
    }
};
DxoFullstackedsplineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoFullstackedsplineComponent = __decorate([
    Component({
        selector: 'dxo-fullstackedspline',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFullstackedsplineComponent);
let DxoFullstackedsplineModule = class DxoFullstackedsplineModule {
};
DxoFullstackedsplineModule = __decorate([
    NgModule({
        declarations: [
            DxoFullstackedsplineComponent
        ],
        exports: [
            DxoFullstackedsplineComponent
        ],
    })
], DxoFullstackedsplineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoFullstackedsplineareaComponent = class DxoFullstackedsplineareaComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'fullstackedsplinearea';
    }
};
DxoFullstackedsplineareaComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoFullstackedsplineareaComponent = __decorate([
    Component({
        selector: 'dxo-fullstackedsplinearea',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoFullstackedsplineareaComponent);
let DxoFullstackedsplineareaModule = class DxoFullstackedsplineareaModule {
};
DxoFullstackedsplineareaModule = __decorate([
    NgModule({
        declarations: [
            DxoFullstackedsplineareaComponent
        ],
        exports: [
            DxoFullstackedsplineareaComponent
        ],
    })
], DxoFullstackedsplineareaModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoGeometryComponent = class DxoGeometryComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get endAngle() {
        return this._getOption('endAngle');
    }
    set endAngle(value) {
        this._setOption('endAngle', value);
    }
    get startAngle() {
        return this._getOption('startAngle');
    }
    set startAngle(value) {
        this._setOption('startAngle', value);
    }
    get orientation() {
        return this._getOption('orientation');
    }
    set orientation(value) {
        this._setOption('orientation', value);
    }
    get _optionPath() {
        return 'geometry';
    }
};
DxoGeometryComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoGeometryComponent.prototype, "endAngle", null);
__decorate([
    Input()
], DxoGeometryComponent.prototype, "startAngle", null);
__decorate([
    Input()
], DxoGeometryComponent.prototype, "orientation", null);
DxoGeometryComponent = __decorate([
    Component({
        selector: 'dxo-geometry',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoGeometryComponent);
let DxoGeometryModule = class DxoGeometryModule {
};
DxoGeometryModule = __decorate([
    NgModule({
        declarations: [
            DxoGeometryComponent
        ],
        exports: [
            DxoGeometryComponent
        ],
    })
], DxoGeometryModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoGridComponent = class DxoGridComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'grid';
    }
};
DxoGridComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoGridComponent.prototype, "color", null);
__decorate([
    Input()
], DxoGridComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoGridComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoGridComponent.prototype, "width", null);
DxoGridComponent = __decorate([
    Component({
        selector: 'dxo-grid',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoGridComponent);
let DxoGridModule = class DxoGridModule {
};
DxoGridModule = __decorate([
    NgModule({
        declarations: [
            DxoGridComponent
        ],
        exports: [
            DxoGridComponent
        ],
    })
], DxoGridModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiGroupItemComponent = class DxiGroupItemComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get alignByColumn() {
        return this._getOption('alignByColumn');
    }
    set alignByColumn(value) {
        this._setOption('alignByColumn', value);
    }
    get column() {
        return this._getOption('column');
    }
    set column(value) {
        this._setOption('column', value);
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get displayFormat() {
        return this._getOption('displayFormat');
    }
    set displayFormat(value) {
        this._setOption('displayFormat', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get showInColumn() {
        return this._getOption('showInColumn');
    }
    set showInColumn(value) {
        this._setOption('showInColumn', value);
    }
    get showInGroupFooter() {
        return this._getOption('showInGroupFooter');
    }
    set showInGroupFooter(value) {
        this._setOption('showInGroupFooter', value);
    }
    get skipEmptyValues() {
        return this._getOption('skipEmptyValues');
    }
    set skipEmptyValues(value) {
        this._setOption('skipEmptyValues', value);
    }
    get summaryType() {
        return this._getOption('summaryType');
    }
    set summaryType(value) {
        this._setOption('summaryType', value);
    }
    get valueFormat() {
        return this._getOption('valueFormat');
    }
    set valueFormat(value) {
        this._setOption('valueFormat', value);
    }
    get _optionPath() {
        return 'groupItems';
    }
};
DxiGroupItemComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "alignByColumn", null);
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "column", null);
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "customizeText", null);
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "displayFormat", null);
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "name", null);
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "showInColumn", null);
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "showInGroupFooter", null);
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "skipEmptyValues", null);
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "summaryType", null);
__decorate([
    Input()
], DxiGroupItemComponent.prototype, "valueFormat", null);
DxiGroupItemComponent = __decorate([
    Component({
        selector: 'dxi-group-item',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiGroupItemComponent);
let DxiGroupItemModule = class DxiGroupItemModule {
};
DxiGroupItemModule = __decorate([
    NgModule({
        declarations: [
            DxiGroupItemComponent
        ],
        exports: [
            DxiGroupItemComponent
        ],
    })
], DxiGroupItemModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoGroupOperationDescriptionsComponent = class DxoGroupOperationDescriptionsComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get and() {
        return this._getOption('and');
    }
    set and(value) {
        this._setOption('and', value);
    }
    get notAnd() {
        return this._getOption('notAnd');
    }
    set notAnd(value) {
        this._setOption('notAnd', value);
    }
    get notOr() {
        return this._getOption('notOr');
    }
    set notOr(value) {
        this._setOption('notOr', value);
    }
    get or() {
        return this._getOption('or');
    }
    set or(value) {
        this._setOption('or', value);
    }
    get _optionPath() {
        return 'groupOperationDescriptions';
    }
};
DxoGroupOperationDescriptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoGroupOperationDescriptionsComponent.prototype, "and", null);
__decorate([
    Input()
], DxoGroupOperationDescriptionsComponent.prototype, "notAnd", null);
__decorate([
    Input()
], DxoGroupOperationDescriptionsComponent.prototype, "notOr", null);
__decorate([
    Input()
], DxoGroupOperationDescriptionsComponent.prototype, "or", null);
DxoGroupOperationDescriptionsComponent = __decorate([
    Component({
        selector: 'dxo-group-operation-descriptions',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoGroupOperationDescriptionsComponent);
let DxoGroupOperationDescriptionsModule = class DxoGroupOperationDescriptionsModule {
};
DxoGroupOperationDescriptionsModule = __decorate([
    NgModule({
        declarations: [
            DxoGroupOperationDescriptionsComponent
        ],
        exports: [
            DxoGroupOperationDescriptionsComponent
        ],
    })
], DxoGroupOperationDescriptionsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoGroupPanelComponent = class DxoGroupPanelComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowColumnDragging() {
        return this._getOption('allowColumnDragging');
    }
    set allowColumnDragging(value) {
        this._setOption('allowColumnDragging', value);
    }
    get emptyPanelText() {
        return this._getOption('emptyPanelText');
    }
    set emptyPanelText(value) {
        this._setOption('emptyPanelText', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get _optionPath() {
        return 'groupPanel';
    }
};
DxoGroupPanelComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoGroupPanelComponent.prototype, "allowColumnDragging", null);
__decorate([
    Input()
], DxoGroupPanelComponent.prototype, "emptyPanelText", null);
__decorate([
    Input()
], DxoGroupPanelComponent.prototype, "visible", null);
DxoGroupPanelComponent = __decorate([
    Component({
        selector: 'dxo-group-panel',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoGroupPanelComponent);
let DxoGroupPanelModule = class DxoGroupPanelModule {
};
DxoGroupPanelModule = __decorate([
    NgModule({
        declarations: [
            DxoGroupPanelComponent
        ],
        exports: [
            DxoGroupPanelComponent
        ],
    })
], DxoGroupPanelModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
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
DxoGroupComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoGroupComponent.prototype, "border", null);
__decorate([
    Input()
], DxoGroupComponent.prototype, "color", null);
__decorate([
    Input()
], DxoGroupComponent.prototype, "headerHeight", null);
__decorate([
    Input()
], DxoGroupComponent.prototype, "hoverEnabled", null);
__decorate([
    Input()
], DxoGroupComponent.prototype, "hoverStyle", null);
__decorate([
    Input()
], DxoGroupComponent.prototype, "label", null);
__decorate([
    Input()
], DxoGroupComponent.prototype, "selectionStyle", null);
DxoGroupComponent = __decorate([
    Component({
        selector: 'dxo-group',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoGroupComponent);
let DxoGroupModule = class DxoGroupModule {
};
DxoGroupModule = __decorate([
    NgModule({
        declarations: [
            DxoGroupComponent
        ],
        exports: [
            DxoGroupComponent
        ],
    })
], DxoGroupModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoGroupingComponent = class DxoGroupingComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowCollapsing() {
        return this._getOption('allowCollapsing');
    }
    set allowCollapsing(value) {
        this._setOption('allowCollapsing', value);
    }
    get autoExpandAll() {
        return this._getOption('autoExpandAll');
    }
    set autoExpandAll(value) {
        this._setOption('autoExpandAll', value);
    }
    get contextMenuEnabled() {
        return this._getOption('contextMenuEnabled');
    }
    set contextMenuEnabled(value) {
        this._setOption('contextMenuEnabled', value);
    }
    get expandMode() {
        return this._getOption('expandMode');
    }
    set expandMode(value) {
        this._setOption('expandMode', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get _optionPath() {
        return 'grouping';
    }
};
DxoGroupingComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoGroupingComponent.prototype, "allowCollapsing", null);
__decorate([
    Input()
], DxoGroupingComponent.prototype, "autoExpandAll", null);
__decorate([
    Input()
], DxoGroupingComponent.prototype, "contextMenuEnabled", null);
__decorate([
    Input()
], DxoGroupingComponent.prototype, "expandMode", null);
__decorate([
    Input()
], DxoGroupingComponent.prototype, "texts", null);
DxoGroupingComponent = __decorate([
    Component({
        selector: 'dxo-grouping',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoGroupingComponent);
let DxoGroupingModule = class DxoGroupingModule {
};
DxoGroupingModule = __decorate([
    NgModule({
        declarations: [
            DxoGroupingComponent
        ],
        exports: [
            DxoGroupingComponent
        ],
    })
], DxoGroupingModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoHatchingComponent = class DxoHatchingComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get direction() {
        return this._getOption('direction');
    }
    set direction(value) {
        this._setOption('direction', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get step() {
        return this._getOption('step');
    }
    set step(value) {
        this._setOption('step', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'hatching';
    }
};
DxoHatchingComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoHatchingComponent.prototype, "direction", null);
__decorate([
    Input()
], DxoHatchingComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoHatchingComponent.prototype, "step", null);
__decorate([
    Input()
], DxoHatchingComponent.prototype, "width", null);
DxoHatchingComponent = __decorate([
    Component({
        selector: 'dxo-hatching',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoHatchingComponent);
let DxoHatchingModule = class DxoHatchingModule {
};
DxoHatchingModule = __decorate([
    NgModule({
        declarations: [
            DxoHatchingComponent
        ],
        exports: [
            DxoHatchingComponent
        ],
    })
], DxoHatchingModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoHeaderFilterComponent = class DxoHeaderFilterComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowSearch() {
        return this._getOption('allowSearch');
    }
    set allowSearch(value) {
        this._setOption('allowSearch', value);
    }
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    get groupInterval() {
        return this._getOption('groupInterval');
    }
    set groupInterval(value) {
        this._setOption('groupInterval', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get searchMode() {
        return this._getOption('searchMode');
    }
    set searchMode(value) {
        this._setOption('searchMode', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get searchTimeout() {
        return this._getOption('searchTimeout');
    }
    set searchTimeout(value) {
        this._setOption('searchTimeout', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get showRelevantValues() {
        return this._getOption('showRelevantValues');
    }
    set showRelevantValues(value) {
        this._setOption('showRelevantValues', value);
    }
    get _optionPath() {
        return 'headerFilter';
    }
};
DxoHeaderFilterComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "allowSearch", null);
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "groupInterval", null);
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "height", null);
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "searchMode", null);
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "width", null);
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "searchTimeout", null);
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "texts", null);
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoHeaderFilterComponent.prototype, "showRelevantValues", null);
DxoHeaderFilterComponent = __decorate([
    Component({
        selector: 'dxo-header-filter',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoHeaderFilterComponent);
let DxoHeaderFilterModule = class DxoHeaderFilterModule {
};
DxoHeaderFilterModule = __decorate([
    NgModule({
        declarations: [
            DxoHeaderFilterComponent
        ],
        exports: [
            DxoHeaderFilterComponent
        ],
    })
], DxoHeaderFilterModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoHeightComponent = class DxoHeightComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get rangeMaxPoint() {
        return this._getOption('rangeMaxPoint');
    }
    set rangeMaxPoint(value) {
        this._setOption('rangeMaxPoint', value);
    }
    get rangeMinPoint() {
        return this._getOption('rangeMinPoint');
    }
    set rangeMinPoint(value) {
        this._setOption('rangeMinPoint', value);
    }
    get _optionPath() {
        return 'height';
    }
};
DxoHeightComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoHeightComponent.prototype, "rangeMaxPoint", null);
__decorate([
    Input()
], DxoHeightComponent.prototype, "rangeMinPoint", null);
DxoHeightComponent = __decorate([
    Component({
        selector: 'dxo-height',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoHeightComponent);
let DxoHeightModule = class DxoHeightModule {
};
DxoHeightModule = __decorate([
    NgModule({
        declarations: [
            DxoHeightComponent
        ],
        exports: [
            DxoHeightComponent
        ],
    })
], DxoHeightModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoHideEventComponent = class DxoHideEventComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get delay() {
        return this._getOption('delay');
    }
    set delay(value) {
        this._setOption('delay', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get _optionPath() {
        return 'hideEvent';
    }
};
DxoHideEventComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoHideEventComponent.prototype, "delay", null);
__decorate([
    Input()
], DxoHideEventComponent.prototype, "name", null);
DxoHideEventComponent = __decorate([
    Component({
        selector: 'dxo-hide-event',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoHideEventComponent);
let DxoHideEventModule = class DxoHideEventModule {
};
DxoHideEventModule = __decorate([
    NgModule({
        declarations: [
            DxoHideEventComponent
        ],
        exports: [
            DxoHideEventComponent
        ],
    })
], DxoHideEventModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoHideComponent = class DxoHideComponent extends DxoAnimationConfig {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'hide';
    }
};
DxoHideComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoHideComponent = __decorate([
    Component({
        selector: 'dxo-hide',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'complete',
            'delay',
            'direction',
            'duration',
            'easing',
            'from',
            'staggerDelay',
            'start',
            'to',
            'type'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoHideComponent);
let DxoHideModule = class DxoHideModule {
};
DxoHideModule = __decorate([
    NgModule({
        declarations: [
            DxoHideComponent
        ],
        exports: [
            DxoHideComponent
        ],
    })
], DxoHideModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoHorizontalLineComponent = class DxoHorizontalLineComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'horizontalLine';
    }
};
DxoHorizontalLineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoHorizontalLineComponent.prototype, "color", null);
__decorate([
    Input()
], DxoHorizontalLineComponent.prototype, "dashStyle", null);
__decorate([
    Input()
], DxoHorizontalLineComponent.prototype, "label", null);
__decorate([
    Input()
], DxoHorizontalLineComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoHorizontalLineComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoHorizontalLineComponent.prototype, "width", null);
DxoHorizontalLineComponent = __decorate([
    Component({
        selector: 'dxo-horizontal-line',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoHorizontalLineComponent);
let DxoHorizontalLineModule = class DxoHorizontalLineModule {
};
DxoHorizontalLineModule = __decorate([
    NgModule({
        declarations: [
            DxoHorizontalLineComponent
        ],
        exports: [
            DxoHorizontalLineComponent
        ],
    })
], DxoHorizontalLineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoHoverStyleComponent = class DxoHoverStyleComponent extends NestedOption {
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
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get hatching() {
        return this._getOption('hatching');
    }
    set hatching(value) {
        this._setOption('hatching', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get _optionPath() {
        return 'hoverStyle';
    }
};
DxoHoverStyleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoHoverStyleComponent.prototype, "border", null);
__decorate([
    Input()
], DxoHoverStyleComponent.prototype, "color", null);
__decorate([
    Input()
], DxoHoverStyleComponent.prototype, "dashStyle", null);
__decorate([
    Input()
], DxoHoverStyleComponent.prototype, "hatching", null);
__decorate([
    Input()
], DxoHoverStyleComponent.prototype, "width", null);
__decorate([
    Input()
], DxoHoverStyleComponent.prototype, "size", null);
__decorate([
    Input()
], DxoHoverStyleComponent.prototype, "opacity", null);
DxoHoverStyleComponent = __decorate([
    Component({
        selector: 'dxo-hover-style',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoHoverStyleComponent);
let DxoHoverStyleModule = class DxoHoverStyleModule {
};
DxoHoverStyleModule = __decorate([
    NgModule({
        declarations: [
            DxoHoverStyleComponent
        ],
        exports: [
            DxoHoverStyleComponent
        ],
    })
], DxoHoverStyleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoImageComponent = class DxoImageComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get url() {
        return this._getOption('url');
    }
    set url(value) {
        this._setOption('url', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get location() {
        return this._getOption('location');
    }
    set location(value) {
        this._setOption('location', value);
    }
    get _optionPath() {
        return 'image';
    }
};
DxoImageComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoImageComponent.prototype, "height", null);
__decorate([
    Input()
], DxoImageComponent.prototype, "url", null);
__decorate([
    Input()
], DxoImageComponent.prototype, "width", null);
__decorate([
    Input()
], DxoImageComponent.prototype, "location", null);
DxoImageComponent = __decorate([
    Component({
        selector: 'dxo-image',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoImageComponent);
let DxoImageModule = class DxoImageModule {
};
DxoImageModule = __decorate([
    NgModule({
        declarations: [
            DxoImageComponent
        ],
        exports: [
            DxoImageComponent
        ],
    })
], DxoImageModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoIndentComponent = class DxoIndentComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get left() {
        return this._getOption('left');
    }
    set left(value) {
        this._setOption('left', value);
    }
    get right() {
        return this._getOption('right');
    }
    set right(value) {
        this._setOption('right', value);
    }
    get _optionPath() {
        return 'indent';
    }
};
DxoIndentComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoIndentComponent.prototype, "left", null);
__decorate([
    Input()
], DxoIndentComponent.prototype, "right", null);
DxoIndentComponent = __decorate([
    Component({
        selector: 'dxo-indent',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoIndentComponent);
let DxoIndentModule = class DxoIndentModule {
};
DxoIndentModule = __decorate([
    NgModule({
        declarations: [
            DxoIndentComponent
        ],
        exports: [
            DxoIndentComponent
        ],
    })
], DxoIndentModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoItemTextFormatComponent = class DxoItemTextFormatComponent extends DxoFormat {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'itemTextFormat';
    }
};
DxoItemTextFormatComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoItemTextFormatComponent = __decorate([
    Component({
        selector: 'dxo-item-text-format',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'currency',
            'formatter',
            'parser',
            'precision',
            'type'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoItemTextFormatComponent);
let DxoItemTextFormatModule = class DxoItemTextFormatModule {
};
DxoItemTextFormatModule = __decorate([
    NgModule({
        declarations: [
            DxoItemTextFormatComponent
        ],
        exports: [
            DxoItemTextFormatComponent
        ],
    })
], DxoItemTextFormatModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoItemComponent = class DxoItemComponent extends NestedOption {
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
    get hoverStyle() {
        return this._getOption('hoverStyle');
    }
    set hoverStyle(value) {
        this._setOption('hoverStyle', value);
    }
    get selectionStyle() {
        return this._getOption('selectionStyle');
    }
    set selectionStyle(value) {
        this._setOption('selectionStyle', value);
    }
    get _optionPath() {
        return 'item';
    }
};
DxoItemComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoItemComponent.prototype, "border", null);
__decorate([
    Input()
], DxoItemComponent.prototype, "hoverStyle", null);
__decorate([
    Input()
], DxoItemComponent.prototype, "selectionStyle", null);
DxoItemComponent = __decorate([
    Component({
        selector: 'dxo-item',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoItemComponent);
let DxoItemModule = class DxoItemModule {
};
DxoItemModule = __decorate([
    NgModule({
        declarations: [
            DxoItemComponent
        ],
        exports: [
            DxoItemComponent
        ],
    })
], DxoItemModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoKeyComponent = class DxoKeyComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get bing() {
        return this._getOption('bing');
    }
    set bing(value) {
        this._setOption('bing', value);
    }
    get google() {
        return this._getOption('google');
    }
    set google(value) {
        this._setOption('google', value);
    }
    get googleStatic() {
        return this._getOption('googleStatic');
    }
    set googleStatic(value) {
        this._setOption('googleStatic', value);
    }
    get _optionPath() {
        return 'key';
    }
};
DxoKeyComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoKeyComponent.prototype, "bing", null);
__decorate([
    Input()
], DxoKeyComponent.prototype, "google", null);
__decorate([
    Input()
], DxoKeyComponent.prototype, "googleStatic", null);
DxoKeyComponent = __decorate([
    Component({
        selector: 'dxo-key',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoKeyComponent);
let DxoKeyModule = class DxoKeyModule {
};
DxoKeyModule = __decorate([
    NgModule({
        declarations: [
            DxoKeyComponent
        ],
        exports: [
            DxoKeyComponent
        ],
    })
], DxoKeyModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoKeyboardNavigationComponent = class DxoKeyboardNavigationComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get editOnKeyPress() {
        return this._getOption('editOnKeyPress');
    }
    set editOnKeyPress(value) {
        this._setOption('editOnKeyPress', value);
    }
    get enterKeyAction() {
        return this._getOption('enterKeyAction');
    }
    set enterKeyAction(value) {
        this._setOption('enterKeyAction', value);
    }
    get enterKeyDirection() {
        return this._getOption('enterKeyDirection');
    }
    set enterKeyDirection(value) {
        this._setOption('enterKeyDirection', value);
    }
    get _optionPath() {
        return 'keyboardNavigation';
    }
};
DxoKeyboardNavigationComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoKeyboardNavigationComponent.prototype, "editOnKeyPress", null);
__decorate([
    Input()
], DxoKeyboardNavigationComponent.prototype, "enterKeyAction", null);
__decorate([
    Input()
], DxoKeyboardNavigationComponent.prototype, "enterKeyDirection", null);
DxoKeyboardNavigationComponent = __decorate([
    Component({
        selector: 'dxo-keyboard-navigation',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoKeyboardNavigationComponent);
let DxoKeyboardNavigationModule = class DxoKeyboardNavigationModule {
};
DxoKeyboardNavigationModule = __decorate([
    NgModule({
        declarations: [
            DxoKeyboardNavigationComponent
        ],
        exports: [
            DxoKeyboardNavigationComponent
        ],
    })
], DxoKeyboardNavigationModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoLabelComponent = class DxoLabelComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get connectorColor() {
        return this._getOption('connectorColor');
    }
    set connectorColor(value) {
        this._setOption('connectorColor', value);
    }
    get connectorWidth() {
        return this._getOption('connectorWidth');
    }
    set connectorWidth(value) {
        this._setOption('connectorWidth', value);
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get format() {
        return this._getOption('format');
    }
    set format(value) {
        this._setOption('format', value);
    }
    get indent() {
        return this._getOption('indent');
    }
    set indent(value) {
        this._setOption('indent', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get horizontalAlignment() {
        return this._getOption('horizontalAlignment');
    }
    set horizontalAlignment(value) {
        this._setOption('horizontalAlignment', value);
    }
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get verticalAlignment() {
        return this._getOption('verticalAlignment');
    }
    set verticalAlignment(value) {
        this._setOption('verticalAlignment', value);
    }
    get alignment() {
        return this._getOption('alignment');
    }
    set alignment(value) {
        this._setOption('alignment', value);
    }
    get customizeHint() {
        return this._getOption('customizeHint');
    }
    set customizeHint(value) {
        this._setOption('customizeHint', value);
    }
    get displayMode() {
        return this._getOption('displayMode');
    }
    set displayMode(value) {
        this._setOption('displayMode', value);
    }
    get indentFromAxis() {
        return this._getOption('indentFromAxis');
    }
    set indentFromAxis(value) {
        this._setOption('indentFromAxis', value);
    }
    get overlappingBehavior() {
        return this._getOption('overlappingBehavior');
    }
    set overlappingBehavior(value) {
        this._setOption('overlappingBehavior', value);
    }
    get rotationAngle() {
        return this._getOption('rotationAngle');
    }
    set rotationAngle(value) {
        this._setOption('rotationAngle', value);
    }
    get staggeringSpacing() {
        return this._getOption('staggeringSpacing');
    }
    set staggeringSpacing(value) {
        this._setOption('staggeringSpacing', value);
    }
    get textOverflow() {
        return this._getOption('textOverflow');
    }
    set textOverflow(value) {
        this._setOption('textOverflow', value);
    }
    get wordWrap() {
        return this._getOption('wordWrap');
    }
    set wordWrap(value) {
        this._setOption('wordWrap', value);
    }
    get argumentFormat() {
        return this._getOption('argumentFormat');
    }
    set argumentFormat(value) {
        this._setOption('argumentFormat', value);
    }
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    get border() {
        return this._getOption('border');
    }
    set border(value) {
        this._setOption('border', value);
    }
    get connector() {
        return this._getOption('connector');
    }
    set connector(value) {
        this._setOption('connector', value);
    }
    get horizontalOffset() {
        return this._getOption('horizontalOffset');
    }
    set horizontalOffset(value) {
        this._setOption('horizontalOffset', value);
    }
    get showForZeroValues() {
        return this._getOption('showForZeroValues');
    }
    set showForZeroValues(value) {
        this._setOption('showForZeroValues', value);
    }
    get verticalOffset() {
        return this._getOption('verticalOffset');
    }
    set verticalOffset(value) {
        this._setOption('verticalOffset', value);
    }
    get hideFirstOrLast() {
        return this._getOption('hideFirstOrLast');
    }
    set hideFirstOrLast(value) {
        this._setOption('hideFirstOrLast', value);
    }
    get indentFromTick() {
        return this._getOption('indentFromTick');
    }
    set indentFromTick(value) {
        this._setOption('indentFromTick', value);
    }
    get useRangeColors() {
        return this._getOption('useRangeColors');
    }
    set useRangeColors(value) {
        this._setOption('useRangeColors', value);
    }
    get location() {
        return this._getOption('location');
    }
    set location(value) {
        this._setOption('location', value);
    }
    get showColon() {
        return this._getOption('showColon');
    }
    set showColon(value) {
        this._setOption('showColon', value);
    }
    get radialOffset() {
        return this._getOption('radialOffset');
    }
    set radialOffset(value) {
        this._setOption('radialOffset', value);
    }
    get topIndent() {
        return this._getOption('topIndent');
    }
    set topIndent(value) {
        this._setOption('topIndent', value);
    }
    get shadow() {
        return this._getOption('shadow');
    }
    set shadow(value) {
        this._setOption('shadow', value);
    }
    get useNodeColors() {
        return this._getOption('useNodeColors');
    }
    set useNodeColors(value) {
        this._setOption('useNodeColors', value);
    }
    get dataField() {
        return this._getOption('dataField');
    }
    set dataField(value) {
        this._setOption('dataField', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get _optionPath() {
        return 'label';
    }
};
DxoLabelComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoLabelComponent.prototype, "connectorColor", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "connectorWidth", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "customizeText", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "font", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "format", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "indent", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "horizontalAlignment", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "position", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "text", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "verticalAlignment", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "alignment", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "customizeHint", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "displayMode", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "indentFromAxis", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "overlappingBehavior", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "rotationAngle", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "staggeringSpacing", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "textOverflow", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "wordWrap", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "argumentFormat", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "border", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "connector", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "horizontalOffset", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "showForZeroValues", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "verticalOffset", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "hideFirstOrLast", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "indentFromTick", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "useRangeColors", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "location", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "showColon", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "radialOffset", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "topIndent", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "shadow", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "useNodeColors", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "dataField", null);
__decorate([
    Input()
], DxoLabelComponent.prototype, "enabled", null);
DxoLabelComponent = __decorate([
    Component({
        selector: 'dxo-label',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoLabelComponent);
let DxoLabelModule = class DxoLabelModule {
};
DxoLabelModule = __decorate([
    NgModule({
        declarations: [
            DxoLabelComponent
        ],
        exports: [
            DxoLabelComponent
        ],
    })
], DxoLabelModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiLayerComponent = class DxiLayerComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get borderColor() {
        return this._getOption('borderColor');
    }
    set borderColor(value) {
        this._setOption('borderColor', value);
    }
    get borderWidth() {
        return this._getOption('borderWidth');
    }
    set borderWidth(value) {
        this._setOption('borderWidth', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get colorGroupingField() {
        return this._getOption('colorGroupingField');
    }
    set colorGroupingField(value) {
        this._setOption('colorGroupingField', value);
    }
    get colorGroups() {
        return this._getOption('colorGroups');
    }
    set colorGroups(value) {
        this._setOption('colorGroups', value);
    }
    get customize() {
        return this._getOption('customize');
    }
    set customize(value) {
        this._setOption('customize', value);
    }
    get dataField() {
        return this._getOption('dataField');
    }
    set dataField(value) {
        this._setOption('dataField', value);
    }
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    get elementType() {
        return this._getOption('elementType');
    }
    set elementType(value) {
        this._setOption('elementType', value);
    }
    get hoveredBorderColor() {
        return this._getOption('hoveredBorderColor');
    }
    set hoveredBorderColor(value) {
        this._setOption('hoveredBorderColor', value);
    }
    get hoveredBorderWidth() {
        return this._getOption('hoveredBorderWidth');
    }
    set hoveredBorderWidth(value) {
        this._setOption('hoveredBorderWidth', value);
    }
    get hoveredColor() {
        return this._getOption('hoveredColor');
    }
    set hoveredColor(value) {
        this._setOption('hoveredColor', value);
    }
    get hoverEnabled() {
        return this._getOption('hoverEnabled');
    }
    set hoverEnabled(value) {
        this._setOption('hoverEnabled', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get maxSize() {
        return this._getOption('maxSize');
    }
    set maxSize(value) {
        this._setOption('maxSize', value);
    }
    get minSize() {
        return this._getOption('minSize');
    }
    set minSize(value) {
        this._setOption('minSize', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    get paletteSize() {
        return this._getOption('paletteSize');
    }
    set paletteSize(value) {
        this._setOption('paletteSize', value);
    }
    get selectedBorderColor() {
        return this._getOption('selectedBorderColor');
    }
    set selectedBorderColor(value) {
        this._setOption('selectedBorderColor', value);
    }
    get selectedBorderWidth() {
        return this._getOption('selectedBorderWidth');
    }
    set selectedBorderWidth(value) {
        this._setOption('selectedBorderWidth', value);
    }
    get selectedColor() {
        return this._getOption('selectedColor');
    }
    set selectedColor(value) {
        this._setOption('selectedColor', value);
    }
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
    }
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
    }
    get sizeGroupingField() {
        return this._getOption('sizeGroupingField');
    }
    set sizeGroupingField(value) {
        this._setOption('sizeGroupingField', value);
    }
    get sizeGroups() {
        return this._getOption('sizeGroups');
    }
    set sizeGroups(value) {
        this._setOption('sizeGroups', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get _optionPath() {
        return 'layers';
    }
};
DxiLayerComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiLayerComponent.prototype, "borderColor", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "borderWidth", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "color", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "colorGroupingField", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "colorGroups", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "customize", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "dataField", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "elementType", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "hoveredBorderColor", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "hoveredBorderWidth", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "hoveredColor", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "hoverEnabled", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "label", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "maxSize", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "minSize", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "name", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "palette", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "paletteSize", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "selectedBorderColor", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "selectedBorderWidth", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "selectedColor", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "size", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "sizeGroupingField", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "sizeGroups", null);
__decorate([
    Input()
], DxiLayerComponent.prototype, "type", null);
DxiLayerComponent = __decorate([
    Component({
        selector: 'dxi-layer',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiLayerComponent);
let DxiLayerModule = class DxiLayerModule {
};
DxiLayerModule = __decorate([
    NgModule({
        declarations: [
            DxiLayerComponent
        ],
        exports: [
            DxiLayerComponent
        ],
    })
], DxiLayerModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiLegendComponent = class DxiLegendComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    get border() {
        return this._getOption('border');
    }
    set border(value) {
        this._setOption('border', value);
    }
    get columnCount() {
        return this._getOption('columnCount');
    }
    set columnCount(value) {
        this._setOption('columnCount', value);
    }
    get columnItemSpacing() {
        return this._getOption('columnItemSpacing');
    }
    set columnItemSpacing(value) {
        this._setOption('columnItemSpacing', value);
    }
    get customizeHint() {
        return this._getOption('customizeHint');
    }
    set customizeHint(value) {
        this._setOption('customizeHint', value);
    }
    get customizeItems() {
        return this._getOption('customizeItems');
    }
    set customizeItems(value) {
        this._setOption('customizeItems', value);
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get horizontalAlignment() {
        return this._getOption('horizontalAlignment');
    }
    set horizontalAlignment(value) {
        this._setOption('horizontalAlignment', value);
    }
    get itemsAlignment() {
        return this._getOption('itemsAlignment');
    }
    set itemsAlignment(value) {
        this._setOption('itemsAlignment', value);
    }
    get itemTextPosition() {
        return this._getOption('itemTextPosition');
    }
    set itemTextPosition(value) {
        this._setOption('itemTextPosition', value);
    }
    get margin() {
        return this._getOption('margin');
    }
    set margin(value) {
        this._setOption('margin', value);
    }
    get markerColor() {
        return this._getOption('markerColor');
    }
    set markerColor(value) {
        this._setOption('markerColor', value);
    }
    get markerShape() {
        return this._getOption('markerShape');
    }
    set markerShape(value) {
        this._setOption('markerShape', value);
    }
    get markerSize() {
        return this._getOption('markerSize');
    }
    set markerSize(value) {
        this._setOption('markerSize', value);
    }
    get orientation() {
        return this._getOption('orientation');
    }
    set orientation(value) {
        this._setOption('orientation', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get rowCount() {
        return this._getOption('rowCount');
    }
    set rowCount(value) {
        this._setOption('rowCount', value);
    }
    get rowItemSpacing() {
        return this._getOption('rowItemSpacing');
    }
    set rowItemSpacing(value) {
        this._setOption('rowItemSpacing', value);
    }
    get source() {
        return this._getOption('source');
    }
    set source(value) {
        this._setOption('source', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get verticalAlignment() {
        return this._getOption('verticalAlignment');
    }
    set verticalAlignment(value) {
        this._setOption('verticalAlignment', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get _optionPath() {
        return 'legends';
    }
};
DxiLegendComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiLegendComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "border", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "columnCount", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "columnItemSpacing", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "customizeHint", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "customizeItems", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "customizeText", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "font", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "horizontalAlignment", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "itemsAlignment", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "itemTextPosition", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "margin", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "markerColor", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "markerShape", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "markerSize", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "orientation", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "paddingLeftRight", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "paddingTopBottom", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "rowCount", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "rowItemSpacing", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "source", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "title", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "verticalAlignment", null);
__decorate([
    Input()
], DxiLegendComponent.prototype, "visible", null);
DxiLegendComponent = __decorate([
    Component({
        selector: 'dxi-legend',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiLegendComponent);
let DxiLegendModule = class DxiLegendModule {
};
DxiLegendModule = __decorate([
    NgModule({
        declarations: [
            DxiLegendComponent
        ],
        exports: [
            DxiLegendComponent
        ],
    })
], DxiLegendModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoLegendComponent = class DxoLegendComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    get border() {
        return this._getOption('border');
    }
    set border(value) {
        this._setOption('border', value);
    }
    get columnCount() {
        return this._getOption('columnCount');
    }
    set columnCount(value) {
        this._setOption('columnCount', value);
    }
    get columnItemSpacing() {
        return this._getOption('columnItemSpacing');
    }
    set columnItemSpacing(value) {
        this._setOption('columnItemSpacing', value);
    }
    get customizeHint() {
        return this._getOption('customizeHint');
    }
    set customizeHint(value) {
        this._setOption('customizeHint', value);
    }
    get customizeItems() {
        return this._getOption('customizeItems');
    }
    set customizeItems(value) {
        this._setOption('customizeItems', value);
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get horizontalAlignment() {
        return this._getOption('horizontalAlignment');
    }
    set horizontalAlignment(value) {
        this._setOption('horizontalAlignment', value);
    }
    get itemsAlignment() {
        return this._getOption('itemsAlignment');
    }
    set itemsAlignment(value) {
        this._setOption('itemsAlignment', value);
    }
    get itemTextFormat() {
        return this._getOption('itemTextFormat');
    }
    set itemTextFormat(value) {
        this._setOption('itemTextFormat', value);
    }
    get itemTextPosition() {
        return this._getOption('itemTextPosition');
    }
    set itemTextPosition(value) {
        this._setOption('itemTextPosition', value);
    }
    get margin() {
        return this._getOption('margin');
    }
    set margin(value) {
        this._setOption('margin', value);
    }
    get markerSize() {
        return this._getOption('markerSize');
    }
    set markerSize(value) {
        this._setOption('markerSize', value);
    }
    get orientation() {
        return this._getOption('orientation');
    }
    set orientation(value) {
        this._setOption('orientation', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get rowCount() {
        return this._getOption('rowCount');
    }
    set rowCount(value) {
        this._setOption('rowCount', value);
    }
    get rowItemSpacing() {
        return this._getOption('rowItemSpacing');
    }
    set rowItemSpacing(value) {
        this._setOption('rowItemSpacing', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get verticalAlignment() {
        return this._getOption('verticalAlignment');
    }
    set verticalAlignment(value) {
        this._setOption('verticalAlignment', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get hoverMode() {
        return this._getOption('hoverMode');
    }
    set hoverMode(value) {
        this._setOption('hoverMode', value);
    }
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
    }
    get _optionPath() {
        return 'legend';
    }
};
DxoLegendComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoLegendComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "border", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "columnCount", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "columnItemSpacing", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "customizeHint", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "customizeItems", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "customizeText", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "font", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "horizontalAlignment", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "itemsAlignment", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "itemTextFormat", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "itemTextPosition", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "margin", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "markerSize", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "orientation", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "paddingLeftRight", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "paddingTopBottom", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "rowCount", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "rowItemSpacing", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "title", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "verticalAlignment", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "hoverMode", null);
__decorate([
    Input()
], DxoLegendComponent.prototype, "position", null);
DxoLegendComponent = __decorate([
    Component({
        selector: 'dxo-legend',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoLegendComponent);
let DxoLegendModule = class DxoLegendModule {
};
DxoLegendModule = __decorate([
    NgModule({
        declarations: [
            DxoLegendComponent
        ],
        exports: [
            DxoLegendComponent
        ],
    })
], DxoLegendModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoLineComponent = class DxoLineComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'line';
    }
};
DxoLineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoLineComponent = __decorate([
    Component({
        selector: 'dxo-line',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width',
            'closed'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoLineComponent);
let DxoLineModule = class DxoLineModule {
};
DxoLineModule = __decorate([
    NgModule({
        declarations: [
            DxoLineComponent
        ],
        exports: [
            DxoLineComponent
        ],
    })
], DxoLineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoLinkComponent = class DxoLinkComponent extends NestedOption {
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
    get colorMode() {
        return this._getOption('colorMode');
    }
    set colorMode(value) {
        this._setOption('colorMode', value);
    }
    get hoverStyle() {
        return this._getOption('hoverStyle');
    }
    set hoverStyle(value) {
        this._setOption('hoverStyle', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get _optionPath() {
        return 'link';
    }
};
DxoLinkComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoLinkComponent.prototype, "border", null);
__decorate([
    Input()
], DxoLinkComponent.prototype, "color", null);
__decorate([
    Input()
], DxoLinkComponent.prototype, "colorMode", null);
__decorate([
    Input()
], DxoLinkComponent.prototype, "hoverStyle", null);
__decorate([
    Input()
], DxoLinkComponent.prototype, "opacity", null);
DxoLinkComponent = __decorate([
    Component({
        selector: 'dxo-link',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoLinkComponent);
let DxoLinkModule = class DxoLinkModule {
};
DxoLinkModule = __decorate([
    NgModule({
        declarations: [
            DxoLinkComponent
        ],
        exports: [
            DxoLinkComponent
        ],
    })
], DxoLinkModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoLoadPanelComponent = class DxoLoadPanelComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get indicatorSrc() {
        return this._getOption('indicatorSrc');
    }
    set indicatorSrc(value) {
        this._setOption('indicatorSrc', value);
    }
    get shading() {
        return this._getOption('shading');
    }
    set shading(value) {
        this._setOption('shading', value);
    }
    get shadingColor() {
        return this._getOption('shadingColor');
    }
    set shadingColor(value) {
        this._setOption('shadingColor', value);
    }
    get showIndicator() {
        return this._getOption('showIndicator');
    }
    set showIndicator(value) {
        this._setOption('showIndicator', value);
    }
    get showPane() {
        return this._getOption('showPane');
    }
    set showPane(value) {
        this._setOption('showPane', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'loadPanel';
    }
};
DxoLoadPanelComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoLoadPanelComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoLoadPanelComponent.prototype, "height", null);
__decorate([
    Input()
], DxoLoadPanelComponent.prototype, "indicatorSrc", null);
__decorate([
    Input()
], DxoLoadPanelComponent.prototype, "shading", null);
__decorate([
    Input()
], DxoLoadPanelComponent.prototype, "shadingColor", null);
__decorate([
    Input()
], DxoLoadPanelComponent.prototype, "showIndicator", null);
__decorate([
    Input()
], DxoLoadPanelComponent.prototype, "showPane", null);
__decorate([
    Input()
], DxoLoadPanelComponent.prototype, "text", null);
__decorate([
    Input()
], DxoLoadPanelComponent.prototype, "width", null);
DxoLoadPanelComponent = __decorate([
    Component({
        selector: 'dxo-load-panel',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoLoadPanelComponent);
let DxoLoadPanelModule = class DxoLoadPanelModule {
};
DxoLoadPanelModule = __decorate([
    NgModule({
        declarations: [
            DxoLoadPanelComponent
        ],
        exports: [
            DxoLoadPanelComponent
        ],
    })
], DxoLoadPanelModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoLoadingIndicatorComponent = class DxoLoadingIndicatorComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'showChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get show() {
        return this._getOption('show');
    }
    set show(value) {
        this._setOption('show', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get _optionPath() {
        return 'loadingIndicator';
    }
};
DxoLoadingIndicatorComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoLoadingIndicatorComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], DxoLoadingIndicatorComponent.prototype, "font", null);
__decorate([
    Input()
], DxoLoadingIndicatorComponent.prototype, "show", null);
__decorate([
    Input()
], DxoLoadingIndicatorComponent.prototype, "text", null);
__decorate([
    Input()
], DxoLoadingIndicatorComponent.prototype, "enabled", null);
__decorate([
    Output()
], DxoLoadingIndicatorComponent.prototype, "showChange", void 0);
DxoLoadingIndicatorComponent = __decorate([
    Component({
        selector: 'dxo-loading-indicator',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoLoadingIndicatorComponent);
let DxoLoadingIndicatorModule = class DxoLoadingIndicatorModule {
};
DxoLoadingIndicatorModule = __decorate([
    NgModule({
        declarations: [
            DxoLoadingIndicatorComponent
        ],
        exports: [
            DxoLoadingIndicatorComponent
        ],
    })
], DxoLoadingIndicatorModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoLookupComponent = class DxoLookupComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowClearing() {
        return this._getOption('allowClearing');
    }
    set allowClearing(value) {
        this._setOption('allowClearing', value);
    }
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    get displayExpr() {
        return this._getOption('displayExpr');
    }
    set displayExpr(value) {
        this._setOption('displayExpr', value);
    }
    get valueExpr() {
        return this._getOption('valueExpr');
    }
    set valueExpr(value) {
        this._setOption('valueExpr', value);
    }
    get _optionPath() {
        return 'lookup';
    }
};
DxoLookupComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoLookupComponent.prototype, "allowClearing", null);
__decorate([
    Input()
], DxoLookupComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxoLookupComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxoLookupComponent.prototype, "valueExpr", null);
DxoLookupComponent = __decorate([
    Component({
        selector: 'dxo-lookup',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoLookupComponent);
let DxoLookupModule = class DxoLookupModule {
};
DxoLookupModule = __decorate([
    NgModule({
        declarations: [
            DxoLookupComponent
        ],
        exports: [
            DxoLookupComponent
        ],
    })
], DxoLookupModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMarginComponent = class DxoMarginComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get bottom() {
        return this._getOption('bottom');
    }
    set bottom(value) {
        this._setOption('bottom', value);
    }
    get left() {
        return this._getOption('left');
    }
    set left(value) {
        this._setOption('left', value);
    }
    get right() {
        return this._getOption('right');
    }
    set right(value) {
        this._setOption('right', value);
    }
    get top() {
        return this._getOption('top');
    }
    set top(value) {
        this._setOption('top', value);
    }
    get _optionPath() {
        return 'margin';
    }
};
DxoMarginComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoMarginComponent.prototype, "bottom", null);
__decorate([
    Input()
], DxoMarginComponent.prototype, "left", null);
__decorate([
    Input()
], DxoMarginComponent.prototype, "right", null);
__decorate([
    Input()
], DxoMarginComponent.prototype, "top", null);
DxoMarginComponent = __decorate([
    Component({
        selector: 'dxo-margin',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMarginComponent);
let DxoMarginModule = class DxoMarginModule {
};
DxoMarginModule = __decorate([
    NgModule({
        declarations: [
            DxoMarginComponent
        ],
        exports: [
            DxoMarginComponent
        ],
    })
], DxoMarginModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiMarkerComponent = class DxiMarkerComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get iconSrc() {
        return this._getOption('iconSrc');
    }
    set iconSrc(value) {
        this._setOption('iconSrc', value);
    }
    get location() {
        return this._getOption('location');
    }
    set location(value) {
        this._setOption('location', value);
    }
    get onClick() {
        return this._getOption('onClick');
    }
    set onClick(value) {
        this._setOption('onClick', value);
    }
    get tooltip() {
        return this._getOption('tooltip');
    }
    set tooltip(value) {
        this._setOption('tooltip', value);
    }
    get _optionPath() {
        return 'markers';
    }
    get locationChildren() {
        return this._getOption('location');
    }
    set locationChildren(value) {
        this.setChildren('location', value);
    }
};
DxiMarkerComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiMarkerComponent.prototype, "iconSrc", null);
__decorate([
    Input()
], DxiMarkerComponent.prototype, "location", null);
__decorate([
    Input()
], DxiMarkerComponent.prototype, "onClick", null);
__decorate([
    Input()
], DxiMarkerComponent.prototype, "tooltip", null);
__decorate([
    ContentChildren(forwardRef(() => DxiLocationComponent))
], DxiMarkerComponent.prototype, "locationChildren", null);
DxiMarkerComponent = __decorate([
    Component({
        selector: 'dxi-marker',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiMarkerComponent);
let DxiMarkerModule = class DxiMarkerModule {
};
DxiMarkerModule = __decorate([
    NgModule({
        declarations: [
            DxiMarkerComponent
        ],
        exports: [
            DxiMarkerComponent
        ],
    })
], DxiMarkerModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMarkerComponent = class DxoMarkerComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get separatorHeight() {
        return this._getOption('separatorHeight');
    }
    set separatorHeight(value) {
        this._setOption('separatorHeight', value);
    }
    get textLeftIndent() {
        return this._getOption('textLeftIndent');
    }
    set textLeftIndent(value) {
        this._setOption('textLeftIndent', value);
    }
    get textTopIndent() {
        return this._getOption('textTopIndent');
    }
    set textTopIndent(value) {
        this._setOption('textTopIndent', value);
    }
    get topIndent() {
        return this._getOption('topIndent');
    }
    set topIndent(value) {
        this._setOption('topIndent', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get _optionPath() {
        return 'marker';
    }
};
DxoMarkerComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoMarkerComponent.prototype, "label", null);
__decorate([
    Input()
], DxoMarkerComponent.prototype, "separatorHeight", null);
__decorate([
    Input()
], DxoMarkerComponent.prototype, "textLeftIndent", null);
__decorate([
    Input()
], DxoMarkerComponent.prototype, "textTopIndent", null);
__decorate([
    Input()
], DxoMarkerComponent.prototype, "topIndent", null);
__decorate([
    Input()
], DxoMarkerComponent.prototype, "visible", null);
DxoMarkerComponent = __decorate([
    Component({
        selector: 'dxo-marker',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMarkerComponent);
let DxoMarkerModule = class DxoMarkerModule {
};
DxoMarkerModule = __decorate([
    NgModule({
        declarations: [
            DxoMarkerComponent
        ],
        exports: [
            DxoMarkerComponent
        ],
    })
], DxoMarkerModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMasterDetailComponent = class DxoMasterDetailComponent extends NestedOption {
    constructor(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        super();
        this.renderer = renderer;
        this.document = document;
        this.element = element;
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        templateHost.setHost(this);
    }
    get autoExpandAll() {
        return this._getOption('autoExpandAll');
    }
    set autoExpandAll(value) {
        this._setOption('autoExpandAll', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get _optionPath() {
        return 'masterDetail';
    }
    setTemplate(template) {
        this.template = template;
    }
    ngAfterViewInit() {
        extractTemplate(this, this.element, this.renderer, this.document);
    }
};
DxoMasterDetailComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: DxTemplateHost, decorators: [{ type: Host }] },
    { type: ElementRef }
];
__decorate([
    Input()
], DxoMasterDetailComponent.prototype, "autoExpandAll", null);
__decorate([
    Input()
], DxoMasterDetailComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoMasterDetailComponent.prototype, "template", null);
DxoMasterDetailComponent = __decorate([
    Component({
        selector: 'dxo-master-detail',
        template: '<ng-content></ng-content>',
        providers: [NestedOptionHost, DxTemplateHost],
        styles: [':host { display: block; }']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host()),
    __param(3, Inject(DOCUMENT)),
    __param(4, Host())
], DxoMasterDetailComponent);
let DxoMasterDetailModule = class DxoMasterDetailModule {
};
DxoMasterDetailModule = __decorate([
    NgModule({
        declarations: [
            DxoMasterDetailComponent
        ],
        exports: [
            DxoMasterDetailComponent
        ],
    })
], DxoMasterDetailModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMaxRangeComponent = class DxoMaxRangeComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get days() {
        return this._getOption('days');
    }
    set days(value) {
        this._setOption('days', value);
    }
    get hours() {
        return this._getOption('hours');
    }
    set hours(value) {
        this._setOption('hours', value);
    }
    get milliseconds() {
        return this._getOption('milliseconds');
    }
    set milliseconds(value) {
        this._setOption('milliseconds', value);
    }
    get minutes() {
        return this._getOption('minutes');
    }
    set minutes(value) {
        this._setOption('minutes', value);
    }
    get months() {
        return this._getOption('months');
    }
    set months(value) {
        this._setOption('months', value);
    }
    get quarters() {
        return this._getOption('quarters');
    }
    set quarters(value) {
        this._setOption('quarters', value);
    }
    get seconds() {
        return this._getOption('seconds');
    }
    set seconds(value) {
        this._setOption('seconds', value);
    }
    get weeks() {
        return this._getOption('weeks');
    }
    set weeks(value) {
        this._setOption('weeks', value);
    }
    get years() {
        return this._getOption('years');
    }
    set years(value) {
        this._setOption('years', value);
    }
    get _optionPath() {
        return 'maxRange';
    }
};
DxoMaxRangeComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoMaxRangeComponent.prototype, "days", null);
__decorate([
    Input()
], DxoMaxRangeComponent.prototype, "hours", null);
__decorate([
    Input()
], DxoMaxRangeComponent.prototype, "milliseconds", null);
__decorate([
    Input()
], DxoMaxRangeComponent.prototype, "minutes", null);
__decorate([
    Input()
], DxoMaxRangeComponent.prototype, "months", null);
__decorate([
    Input()
], DxoMaxRangeComponent.prototype, "quarters", null);
__decorate([
    Input()
], DxoMaxRangeComponent.prototype, "seconds", null);
__decorate([
    Input()
], DxoMaxRangeComponent.prototype, "weeks", null);
__decorate([
    Input()
], DxoMaxRangeComponent.prototype, "years", null);
DxoMaxRangeComponent = __decorate([
    Component({
        selector: 'dxo-max-range',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMaxRangeComponent);
let DxoMaxRangeModule = class DxoMaxRangeModule {
};
DxoMaxRangeModule = __decorate([
    NgModule({
        declarations: [
            DxoMaxRangeComponent
        ],
        exports: [
            DxoMaxRangeComponent
        ],
    })
], DxoMaxRangeModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoHtmlEditorMediaResizing extends NestedOption {
    get allowedTargets() {
        return this._getOption('allowedTargets');
    }
    set allowedTargets(value) {
        this._setOption('allowedTargets', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMediaResizingComponent = class DxoMediaResizingComponent extends DxoHtmlEditorMediaResizing {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'mediaResizing';
    }
};
DxoMediaResizingComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoMediaResizingComponent = __decorate([
    Component({
        selector: 'dxo-media-resizing',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'allowedTargets',
            'enabled'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMediaResizingComponent);
let DxoMediaResizingModule = class DxoMediaResizingModule {
};
DxoMediaResizingModule = __decorate([
    NgModule({
        declarations: [
            DxoMediaResizingComponent
        ],
        exports: [
            DxoMediaResizingComponent
        ],
    })
], DxoMediaResizingModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxiHtmlEditorMention extends CollectionNestedOption {
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    get displayExpr() {
        return this._getOption('displayExpr');
    }
    set displayExpr(value) {
        this._setOption('displayExpr', value);
    }
    get itemTemplate() {
        return this._getOption('itemTemplate');
    }
    set itemTemplate(value) {
        this._setOption('itemTemplate', value);
    }
    get marker() {
        return this._getOption('marker');
    }
    set marker(value) {
        this._setOption('marker', value);
    }
    get minSearchLength() {
        return this._getOption('minSearchLength');
    }
    set minSearchLength(value) {
        this._setOption('minSearchLength', value);
    }
    get searchExpr() {
        return this._getOption('searchExpr');
    }
    set searchExpr(value) {
        this._setOption('searchExpr', value);
    }
    get searchTimeout() {
        return this._getOption('searchTimeout');
    }
    set searchTimeout(value) {
        this._setOption('searchTimeout', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get valueExpr() {
        return this._getOption('valueExpr');
    }
    set valueExpr(value) {
        this._setOption('valueExpr', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiMentionComponent = class DxiMentionComponent extends DxiHtmlEditorMention {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'mentions';
    }
};
DxiMentionComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxiMentionComponent = __decorate([
    Component({
        selector: 'dxi-mention',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'dataSource',
            'displayExpr',
            'itemTemplate',
            'marker',
            'minSearchLength',
            'searchExpr',
            'searchTimeout',
            'template',
            'valueExpr'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiMentionComponent);
let DxiMentionModule = class DxiMentionModule {
};
DxiMentionModule = __decorate([
    NgModule({
        declarations: [
            DxiMentionComponent
        ],
        exports: [
            DxiMentionComponent
        ],
    })
], DxiMentionModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiMenuItemComponent = class DxiMenuItemComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get action() {
        return this._getOption('action');
    }
    set action(value) {
        this._setOption('action', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get _optionPath() {
        return 'menuItems';
    }
};
DxiMenuItemComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiMenuItemComponent.prototype, "action", null);
__decorate([
    Input()
], DxiMenuItemComponent.prototype, "text", null);
DxiMenuItemComponent = __decorate([
    Component({
        selector: 'dxi-menu-item',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiMenuItemComponent);
let DxiMenuItemModule = class DxiMenuItemModule {
};
DxiMenuItemModule = __decorate([
    NgModule({
        declarations: [
            DxiMenuItemComponent
        ],
        exports: [
            DxiMenuItemComponent
        ],
    })
], DxiMenuItemModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMinRangeComponent = class DxoMinRangeComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get days() {
        return this._getOption('days');
    }
    set days(value) {
        this._setOption('days', value);
    }
    get hours() {
        return this._getOption('hours');
    }
    set hours(value) {
        this._setOption('hours', value);
    }
    get milliseconds() {
        return this._getOption('milliseconds');
    }
    set milliseconds(value) {
        this._setOption('milliseconds', value);
    }
    get minutes() {
        return this._getOption('minutes');
    }
    set minutes(value) {
        this._setOption('minutes', value);
    }
    get months() {
        return this._getOption('months');
    }
    set months(value) {
        this._setOption('months', value);
    }
    get quarters() {
        return this._getOption('quarters');
    }
    set quarters(value) {
        this._setOption('quarters', value);
    }
    get seconds() {
        return this._getOption('seconds');
    }
    set seconds(value) {
        this._setOption('seconds', value);
    }
    get weeks() {
        return this._getOption('weeks');
    }
    set weeks(value) {
        this._setOption('weeks', value);
    }
    get years() {
        return this._getOption('years');
    }
    set years(value) {
        this._setOption('years', value);
    }
    get _optionPath() {
        return 'minRange';
    }
};
DxoMinRangeComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoMinRangeComponent.prototype, "days", null);
__decorate([
    Input()
], DxoMinRangeComponent.prototype, "hours", null);
__decorate([
    Input()
], DxoMinRangeComponent.prototype, "milliseconds", null);
__decorate([
    Input()
], DxoMinRangeComponent.prototype, "minutes", null);
__decorate([
    Input()
], DxoMinRangeComponent.prototype, "months", null);
__decorate([
    Input()
], DxoMinRangeComponent.prototype, "quarters", null);
__decorate([
    Input()
], DxoMinRangeComponent.prototype, "seconds", null);
__decorate([
    Input()
], DxoMinRangeComponent.prototype, "weeks", null);
__decorate([
    Input()
], DxoMinRangeComponent.prototype, "years", null);
DxoMinRangeComponent = __decorate([
    Component({
        selector: 'dxo-min-range',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMinRangeComponent);
let DxoMinRangeModule = class DxoMinRangeModule {
};
DxoMinRangeModule = __decorate([
    NgModule({
        declarations: [
            DxoMinRangeComponent
        ],
        exports: [
            DxoMinRangeComponent
        ],
    })
], DxoMinRangeModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMinVisualRangeLengthComponent = class DxoMinVisualRangeLengthComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get days() {
        return this._getOption('days');
    }
    set days(value) {
        this._setOption('days', value);
    }
    get hours() {
        return this._getOption('hours');
    }
    set hours(value) {
        this._setOption('hours', value);
    }
    get milliseconds() {
        return this._getOption('milliseconds');
    }
    set milliseconds(value) {
        this._setOption('milliseconds', value);
    }
    get minutes() {
        return this._getOption('minutes');
    }
    set minutes(value) {
        this._setOption('minutes', value);
    }
    get months() {
        return this._getOption('months');
    }
    set months(value) {
        this._setOption('months', value);
    }
    get quarters() {
        return this._getOption('quarters');
    }
    set quarters(value) {
        this._setOption('quarters', value);
    }
    get seconds() {
        return this._getOption('seconds');
    }
    set seconds(value) {
        this._setOption('seconds', value);
    }
    get weeks() {
        return this._getOption('weeks');
    }
    set weeks(value) {
        this._setOption('weeks', value);
    }
    get years() {
        return this._getOption('years');
    }
    set years(value) {
        this._setOption('years', value);
    }
    get _optionPath() {
        return 'minVisualRangeLength';
    }
};
DxoMinVisualRangeLengthComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoMinVisualRangeLengthComponent.prototype, "days", null);
__decorate([
    Input()
], DxoMinVisualRangeLengthComponent.prototype, "hours", null);
__decorate([
    Input()
], DxoMinVisualRangeLengthComponent.prototype, "milliseconds", null);
__decorate([
    Input()
], DxoMinVisualRangeLengthComponent.prototype, "minutes", null);
__decorate([
    Input()
], DxoMinVisualRangeLengthComponent.prototype, "months", null);
__decorate([
    Input()
], DxoMinVisualRangeLengthComponent.prototype, "quarters", null);
__decorate([
    Input()
], DxoMinVisualRangeLengthComponent.prototype, "seconds", null);
__decorate([
    Input()
], DxoMinVisualRangeLengthComponent.prototype, "weeks", null);
__decorate([
    Input()
], DxoMinVisualRangeLengthComponent.prototype, "years", null);
DxoMinVisualRangeLengthComponent = __decorate([
    Component({
        selector: 'dxo-min-visual-range-length',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMinVisualRangeLengthComponent);
let DxoMinVisualRangeLengthModule = class DxoMinVisualRangeLengthModule {
};
DxoMinVisualRangeLengthModule = __decorate([
    NgModule({
        declarations: [
            DxoMinVisualRangeLengthComponent
        ],
        exports: [
            DxoMinVisualRangeLengthComponent
        ],
    })
], DxoMinVisualRangeLengthModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMinorGridComponent = class DxoMinorGridComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'minorGrid';
    }
};
DxoMinorGridComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoMinorGridComponent.prototype, "color", null);
__decorate([
    Input()
], DxoMinorGridComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoMinorGridComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoMinorGridComponent.prototype, "width", null);
DxoMinorGridComponent = __decorate([
    Component({
        selector: 'dxo-minor-grid',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMinorGridComponent);
let DxoMinorGridModule = class DxoMinorGridModule {
};
DxoMinorGridModule = __decorate([
    NgModule({
        declarations: [
            DxoMinorGridComponent
        ],
        exports: [
            DxoMinorGridComponent
        ],
    })
], DxoMinorGridModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMinorTickIntervalComponent = class DxoMinorTickIntervalComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get days() {
        return this._getOption('days');
    }
    set days(value) {
        this._setOption('days', value);
    }
    get hours() {
        return this._getOption('hours');
    }
    set hours(value) {
        this._setOption('hours', value);
    }
    get milliseconds() {
        return this._getOption('milliseconds');
    }
    set milliseconds(value) {
        this._setOption('milliseconds', value);
    }
    get minutes() {
        return this._getOption('minutes');
    }
    set minutes(value) {
        this._setOption('minutes', value);
    }
    get months() {
        return this._getOption('months');
    }
    set months(value) {
        this._setOption('months', value);
    }
    get quarters() {
        return this._getOption('quarters');
    }
    set quarters(value) {
        this._setOption('quarters', value);
    }
    get seconds() {
        return this._getOption('seconds');
    }
    set seconds(value) {
        this._setOption('seconds', value);
    }
    get weeks() {
        return this._getOption('weeks');
    }
    set weeks(value) {
        this._setOption('weeks', value);
    }
    get years() {
        return this._getOption('years');
    }
    set years(value) {
        this._setOption('years', value);
    }
    get _optionPath() {
        return 'minorTickInterval';
    }
};
DxoMinorTickIntervalComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoMinorTickIntervalComponent.prototype, "days", null);
__decorate([
    Input()
], DxoMinorTickIntervalComponent.prototype, "hours", null);
__decorate([
    Input()
], DxoMinorTickIntervalComponent.prototype, "milliseconds", null);
__decorate([
    Input()
], DxoMinorTickIntervalComponent.prototype, "minutes", null);
__decorate([
    Input()
], DxoMinorTickIntervalComponent.prototype, "months", null);
__decorate([
    Input()
], DxoMinorTickIntervalComponent.prototype, "quarters", null);
__decorate([
    Input()
], DxoMinorTickIntervalComponent.prototype, "seconds", null);
__decorate([
    Input()
], DxoMinorTickIntervalComponent.prototype, "weeks", null);
__decorate([
    Input()
], DxoMinorTickIntervalComponent.prototype, "years", null);
DxoMinorTickIntervalComponent = __decorate([
    Component({
        selector: 'dxo-minor-tick-interval',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMinorTickIntervalComponent);
let DxoMinorTickIntervalModule = class DxoMinorTickIntervalModule {
};
DxoMinorTickIntervalModule = __decorate([
    NgModule({
        declarations: [
            DxoMinorTickIntervalComponent
        ],
        exports: [
            DxoMinorTickIntervalComponent
        ],
    })
], DxoMinorTickIntervalModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMinorTickComponent = class DxoMinorTickComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get length() {
        return this._getOption('length');
    }
    set length(value) {
        this._setOption('length', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get shift() {
        return this._getOption('shift');
    }
    set shift(value) {
        this._setOption('shift', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'minorTick';
    }
};
DxoMinorTickComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoMinorTickComponent.prototype, "color", null);
__decorate([
    Input()
], DxoMinorTickComponent.prototype, "length", null);
__decorate([
    Input()
], DxoMinorTickComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoMinorTickComponent.prototype, "shift", null);
__decorate([
    Input()
], DxoMinorTickComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoMinorTickComponent.prototype, "width", null);
DxoMinorTickComponent = __decorate([
    Component({
        selector: 'dxo-minor-tick',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMinorTickComponent);
let DxoMinorTickModule = class DxoMinorTickModule {
};
DxoMinorTickModule = __decorate([
    NgModule({
        declarations: [
            DxoMinorTickComponent
        ],
        exports: [
            DxoMinorTickComponent
        ],
    })
], DxoMinorTickModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoMyComponent = class DxoMyComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get x() {
        return this._getOption('x');
    }
    set x(value) {
        this._setOption('x', value);
    }
    get y() {
        return this._getOption('y');
    }
    set y(value) {
        this._setOption('y', value);
    }
    get _optionPath() {
        return 'my';
    }
};
DxoMyComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoMyComponent.prototype, "x", null);
__decorate([
    Input()
], DxoMyComponent.prototype, "y", null);
DxoMyComponent = __decorate([
    Component({
        selector: 'dxo-my',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoMyComponent);
let DxoMyModule = class DxoMyModule {
};
DxoMyModule = __decorate([
    NgModule({
        declarations: [
            DxoMyComponent
        ],
        exports: [
            DxoMyComponent
        ],
    })
], DxoMyModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoNodeComponent = class DxoNodeComponent extends NestedOption {
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
    get hoverStyle() {
        return this._getOption('hoverStyle');
    }
    set hoverStyle(value) {
        this._setOption('hoverStyle', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get padding() {
        return this._getOption('padding');
    }
    set padding(value) {
        this._setOption('padding', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'node';
    }
};
DxoNodeComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoNodeComponent.prototype, "border", null);
__decorate([
    Input()
], DxoNodeComponent.prototype, "color", null);
__decorate([
    Input()
], DxoNodeComponent.prototype, "hoverStyle", null);
__decorate([
    Input()
], DxoNodeComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoNodeComponent.prototype, "padding", null);
__decorate([
    Input()
], DxoNodeComponent.prototype, "width", null);
DxoNodeComponent = __decorate([
    Component({
        selector: 'dxo-node',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoNodeComponent);
let DxoNodeModule = class DxoNodeModule {
};
DxoNodeModule = __decorate([
    NgModule({
        declarations: [
            DxoNodeComponent
        ],
        exports: [
            DxoNodeComponent
        ],
    })
], DxoNodeModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoOffsetComponent = class DxoOffsetComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get x() {
        return this._getOption('x');
    }
    set x(value) {
        this._setOption('x', value);
    }
    get y() {
        return this._getOption('y');
    }
    set y(value) {
        this._setOption('y', value);
    }
    get _optionPath() {
        return 'offset';
    }
};
DxoOffsetComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoOffsetComponent.prototype, "x", null);
__decorate([
    Input()
], DxoOffsetComponent.prototype, "y", null);
DxoOffsetComponent = __decorate([
    Component({
        selector: 'dxo-offset',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoOffsetComponent);
let DxoOffsetModule = class DxoOffsetModule {
};
DxoOffsetModule = __decorate([
    NgModule({
        declarations: [
            DxoOffsetComponent
        ],
        exports: [
            DxoOffsetComponent
        ],
    })
], DxoOffsetModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoOperationDescriptionsComponent = class DxoOperationDescriptionsComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get between() {
        return this._getOption('between');
    }
    set between(value) {
        this._setOption('between', value);
    }
    get contains() {
        return this._getOption('contains');
    }
    set contains(value) {
        this._setOption('contains', value);
    }
    get endsWith() {
        return this._getOption('endsWith');
    }
    set endsWith(value) {
        this._setOption('endsWith', value);
    }
    get equal() {
        return this._getOption('equal');
    }
    set equal(value) {
        this._setOption('equal', value);
    }
    get greaterThan() {
        return this._getOption('greaterThan');
    }
    set greaterThan(value) {
        this._setOption('greaterThan', value);
    }
    get greaterThanOrEqual() {
        return this._getOption('greaterThanOrEqual');
    }
    set greaterThanOrEqual(value) {
        this._setOption('greaterThanOrEqual', value);
    }
    get lessThan() {
        return this._getOption('lessThan');
    }
    set lessThan(value) {
        this._setOption('lessThan', value);
    }
    get lessThanOrEqual() {
        return this._getOption('lessThanOrEqual');
    }
    set lessThanOrEqual(value) {
        this._setOption('lessThanOrEqual', value);
    }
    get notContains() {
        return this._getOption('notContains');
    }
    set notContains(value) {
        this._setOption('notContains', value);
    }
    get notEqual() {
        return this._getOption('notEqual');
    }
    set notEqual(value) {
        this._setOption('notEqual', value);
    }
    get startsWith() {
        return this._getOption('startsWith');
    }
    set startsWith(value) {
        this._setOption('startsWith', value);
    }
    get _optionPath() {
        return 'operationDescriptions';
    }
};
DxoOperationDescriptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "between", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "contains", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "endsWith", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "equal", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "greaterThan", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "greaterThanOrEqual", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "lessThan", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "lessThanOrEqual", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "notContains", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "notEqual", null);
__decorate([
    Input()
], DxoOperationDescriptionsComponent.prototype, "startsWith", null);
DxoOperationDescriptionsComponent = __decorate([
    Component({
        selector: 'dxo-operation-descriptions',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoOperationDescriptionsComponent);
let DxoOperationDescriptionsModule = class DxoOperationDescriptionsModule {
};
DxoOperationDescriptionsModule = __decorate([
    NgModule({
        declarations: [
            DxoOperationDescriptionsComponent
        ],
        exports: [
            DxoOperationDescriptionsComponent
        ],
    })
], DxoOperationDescriptionsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoOptionsComponent = class DxoOptionsComponent extends DxoButtonOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'options';
    }
};
DxoOptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoOptionsComponent = __decorate([
    Component({
        selector: 'dxo-options',
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
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoOptionsComponent);
let DxoOptionsModule = class DxoOptionsModule {
};
DxoOptionsModule = __decorate([
    NgModule({
        declarations: [
            DxoOptionsComponent
        ],
        exports: [
            DxoOptionsComponent
        ],
    })
], DxoOptionsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoPagerComponent = class DxoPagerComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowedPageSizes() {
        return this._getOption('allowedPageSizes');
    }
    set allowedPageSizes(value) {
        this._setOption('allowedPageSizes', value);
    }
    get infoText() {
        return this._getOption('infoText');
    }
    set infoText(value) {
        this._setOption('infoText', value);
    }
    get showInfo() {
        return this._getOption('showInfo');
    }
    set showInfo(value) {
        this._setOption('showInfo', value);
    }
    get showNavigationButtons() {
        return this._getOption('showNavigationButtons');
    }
    set showNavigationButtons(value) {
        this._setOption('showNavigationButtons', value);
    }
    get showPageSizeSelector() {
        return this._getOption('showPageSizeSelector');
    }
    set showPageSizeSelector(value) {
        this._setOption('showPageSizeSelector', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get _optionPath() {
        return 'pager';
    }
};
DxoPagerComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoPagerComponent.prototype, "allowedPageSizes", null);
__decorate([
    Input()
], DxoPagerComponent.prototype, "infoText", null);
__decorate([
    Input()
], DxoPagerComponent.prototype, "showInfo", null);
__decorate([
    Input()
], DxoPagerComponent.prototype, "showNavigationButtons", null);
__decorate([
    Input()
], DxoPagerComponent.prototype, "showPageSizeSelector", null);
__decorate([
    Input()
], DxoPagerComponent.prototype, "visible", null);
DxoPagerComponent = __decorate([
    Component({
        selector: 'dxo-pager',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoPagerComponent);
let DxoPagerModule = class DxoPagerModule {
};
DxoPagerModule = __decorate([
    NgModule({
        declarations: [
            DxoPagerComponent
        ],
        exports: [
            DxoPagerComponent
        ],
    })
], DxoPagerModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoPagingComponent = class DxoPagingComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'pageIndexChange' },
            { emit: 'pageSizeChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get pageIndex() {
        return this._getOption('pageIndex');
    }
    set pageIndex(value) {
        this._setOption('pageIndex', value);
    }
    get pageSize() {
        return this._getOption('pageSize');
    }
    set pageSize(value) {
        this._setOption('pageSize', value);
    }
    get _optionPath() {
        return 'paging';
    }
};
DxoPagingComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoPagingComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoPagingComponent.prototype, "pageIndex", null);
__decorate([
    Input()
], DxoPagingComponent.prototype, "pageSize", null);
__decorate([
    Output()
], DxoPagingComponent.prototype, "pageIndexChange", void 0);
__decorate([
    Output()
], DxoPagingComponent.prototype, "pageSizeChange", void 0);
DxoPagingComponent = __decorate([
    Component({
        selector: 'dxo-paging',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoPagingComponent);
let DxoPagingModule = class DxoPagingModule {
};
DxoPagingModule = __decorate([
    NgModule({
        declarations: [
            DxoPagingComponent
        ],
        exports: [
            DxoPagingComponent
        ],
    })
], DxoPagingModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiPaneComponent = class DxiPaneComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    get border() {
        return this._getOption('border');
    }
    set border(value) {
        this._setOption('border', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get _optionPath() {
        return 'panes';
    }
};
DxiPaneComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiPaneComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], DxiPaneComponent.prototype, "border", null);
__decorate([
    Input()
], DxiPaneComponent.prototype, "name", null);
DxiPaneComponent = __decorate([
    Component({
        selector: 'dxi-pane',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiPaneComponent);
let DxiPaneModule = class DxiPaneModule {
};
DxiPaneModule = __decorate([
    NgModule({
        declarations: [
            DxiPaneComponent
        ],
        exports: [
            DxiPaneComponent
        ],
    })
], DxiPaneModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoPointComponent = class DxoPointComponent extends NestedOption {
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
    get hoverMode() {
        return this._getOption('hoverMode');
    }
    set hoverMode(value) {
        this._setOption('hoverMode', value);
    }
    get hoverStyle() {
        return this._getOption('hoverStyle');
    }
    set hoverStyle(value) {
        this._setOption('hoverStyle', value);
    }
    get image() {
        return this._getOption('image');
    }
    set image(value) {
        this._setOption('image', value);
    }
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
    }
    get selectionStyle() {
        return this._getOption('selectionStyle');
    }
    set selectionStyle(value) {
        this._setOption('selectionStyle', value);
    }
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
    }
    get symbol() {
        return this._getOption('symbol');
    }
    set symbol(value) {
        this._setOption('symbol', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get _optionPath() {
        return 'point';
    }
};
DxoPointComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoPointComponent.prototype, "border", null);
__decorate([
    Input()
], DxoPointComponent.prototype, "color", null);
__decorate([
    Input()
], DxoPointComponent.prototype, "hoverMode", null);
__decorate([
    Input()
], DxoPointComponent.prototype, "hoverStyle", null);
__decorate([
    Input()
], DxoPointComponent.prototype, "image", null);
__decorate([
    Input()
], DxoPointComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], DxoPointComponent.prototype, "selectionStyle", null);
__decorate([
    Input()
], DxoPointComponent.prototype, "size", null);
__decorate([
    Input()
], DxoPointComponent.prototype, "symbol", null);
__decorate([
    Input()
], DxoPointComponent.prototype, "visible", null);
DxoPointComponent = __decorate([
    Component({
        selector: 'dxo-point',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoPointComponent);
let DxoPointModule = class DxoPointModule {
};
DxoPointModule = __decorate([
    NgModule({
        declarations: [
            DxoPointComponent
        ],
        exports: [
            DxoPointComponent
        ],
    })
], DxoPointModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoPopupComponent = class DxoPopupComponent extends DxoPopupOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'heightChange' },
            { emit: 'positionChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'popup';
    }
    get toolbarItemsChildren() {
        return this._getOption('toolbarItems');
    }
    set toolbarItemsChildren(value) {
        this.setChildren('toolbarItems', value);
    }
};
DxoPopupComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxoPopupComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxoPopupComponent.prototype, "positionChange", void 0);
__decorate([
    Output()
], DxoPopupComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxoPopupComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiToolbarItemComponent))
], DxoPopupComponent.prototype, "toolbarItemsChildren", null);
DxoPopupComponent = __decorate([
    Component({
        selector: 'dxo-popup',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'animation',
            'closeOnBackButton',
            'closeOnOutsideClick',
            'container',
            'contentTemplate',
            'deferRendering',
            'disabled',
            'dragEnabled',
            'elementAttr',
            'focusStateEnabled',
            'fullScreen',
            'height',
            'hint',
            'hoverStateEnabled',
            'maxHeight',
            'maxWidth',
            'minHeight',
            'minWidth',
            'onContentReady',
            'onDisposing',
            'onHidden',
            'onHiding',
            'onInitialized',
            'onOptionChanged',
            'onResize',
            'onResizeEnd',
            'onResizeStart',
            'onShowing',
            'onShown',
            'onTitleRendered',
            'position',
            'resizeEnabled',
            'rtlEnabled',
            'shading',
            'shadingColor',
            'showCloseButton',
            'showTitle',
            'tabIndex',
            'title',
            'titleTemplate',
            'toolbarItems',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoPopupComponent);
let DxoPopupModule = class DxoPopupModule {
};
DxoPopupModule = __decorate([
    NgModule({
        declarations: [
            DxoPopupComponent
        ],
        exports: [
            DxoPopupComponent
        ],
    })
], DxoPopupModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoPositionConfig extends NestedOption {
    get at() {
        return this._getOption('at');
    }
    set at(value) {
        this._setOption('at', value);
    }
    get boundary() {
        return this._getOption('boundary');
    }
    set boundary(value) {
        this._setOption('boundary', value);
    }
    get boundaryOffset() {
        return this._getOption('boundaryOffset');
    }
    set boundaryOffset(value) {
        this._setOption('boundaryOffset', value);
    }
    get collision() {
        return this._getOption('collision');
    }
    set collision(value) {
        this._setOption('collision', value);
    }
    get my() {
        return this._getOption('my');
    }
    set my(value) {
        this._setOption('my', value);
    }
    get of() {
        return this._getOption('of');
    }
    set of(value) {
        this._setOption('of', value);
    }
    get offset() {
        return this._getOption('offset');
    }
    set offset(value) {
        this._setOption('offset', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoPositionComponent = class DxoPositionComponent extends DxoPositionConfig {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'position';
    }
};
DxoPositionComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoPositionComponent = __decorate([
    Component({
        selector: 'dxo-position',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'at',
            'boundary',
            'boundaryOffset',
            'collision',
            'my',
            'of',
            'offset'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoPositionComponent);
let DxoPositionModule = class DxoPositionModule {
};
DxoPositionModule = __decorate([
    NgModule({
        declarations: [
            DxoPositionComponent
        ],
        exports: [
            DxoPositionComponent
        ],
    })
], DxoPositionModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiRangeComponent = class DxiRangeComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get endValue() {
        return this._getOption('endValue');
    }
    set endValue(value) {
        this._setOption('endValue', value);
    }
    get startValue() {
        return this._getOption('startValue');
    }
    set startValue(value) {
        this._setOption('startValue', value);
    }
    get _optionPath() {
        return 'ranges';
    }
};
DxiRangeComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiRangeComponent.prototype, "color", null);
__decorate([
    Input()
], DxiRangeComponent.prototype, "endValue", null);
__decorate([
    Input()
], DxiRangeComponent.prototype, "startValue", null);
DxiRangeComponent = __decorate([
    Component({
        selector: 'dxi-range',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiRangeComponent);
let DxiRangeModule = class DxiRangeModule {
};
DxiRangeModule = __decorate([
    NgModule({
        declarations: [
            DxiRangeComponent
        ],
        exports: [
            DxiRangeComponent
        ],
    })
], DxiRangeModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoRangeContainerComponent = class DxoRangeContainerComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    get offset() {
        return this._getOption('offset');
    }
    set offset(value) {
        this._setOption('offset', value);
    }
    get orientation() {
        return this._getOption('orientation');
    }
    set orientation(value) {
        this._setOption('orientation', value);
    }
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    get paletteExtensionMode() {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value) {
        this._setOption('paletteExtensionMode', value);
    }
    get ranges() {
        return this._getOption('ranges');
    }
    set ranges(value) {
        this._setOption('ranges', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get horizontalOrientation() {
        return this._getOption('horizontalOrientation');
    }
    set horizontalOrientation(value) {
        this._setOption('horizontalOrientation', value);
    }
    get verticalOrientation() {
        return this._getOption('verticalOrientation');
    }
    set verticalOrientation(value) {
        this._setOption('verticalOrientation', value);
    }
    get _optionPath() {
        return 'rangeContainer';
    }
    get rangesChildren() {
        return this._getOption('ranges');
    }
    set rangesChildren(value) {
        this.setChildren('ranges', value);
    }
};
DxoRangeContainerComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoRangeContainerComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], DxoRangeContainerComponent.prototype, "offset", null);
__decorate([
    Input()
], DxoRangeContainerComponent.prototype, "orientation", null);
__decorate([
    Input()
], DxoRangeContainerComponent.prototype, "palette", null);
__decorate([
    Input()
], DxoRangeContainerComponent.prototype, "paletteExtensionMode", null);
__decorate([
    Input()
], DxoRangeContainerComponent.prototype, "ranges", null);
__decorate([
    Input()
], DxoRangeContainerComponent.prototype, "width", null);
__decorate([
    Input()
], DxoRangeContainerComponent.prototype, "horizontalOrientation", null);
__decorate([
    Input()
], DxoRangeContainerComponent.prototype, "verticalOrientation", null);
__decorate([
    ContentChildren(forwardRef(() => DxiRangeComponent))
], DxoRangeContainerComponent.prototype, "rangesChildren", null);
DxoRangeContainerComponent = __decorate([
    Component({
        selector: 'dxo-range-container',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoRangeContainerComponent);
let DxoRangeContainerModule = class DxoRangeContainerModule {
};
DxoRangeContainerModule = __decorate([
    NgModule({
        declarations: [
            DxoRangeContainerComponent
        ],
        exports: [
            DxoRangeContainerComponent
        ],
    })
], DxoRangeContainerModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoRangeareaComponent = class DxoRangeareaComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'rangearea';
    }
};
DxoRangeareaComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoRangeareaComponent = __decorate([
    Component({
        selector: 'dxo-rangearea',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoRangeareaComponent);
let DxoRangeareaModule = class DxoRangeareaModule {
};
DxoRangeareaModule = __decorate([
    NgModule({
        declarations: [
            DxoRangeareaComponent
        ],
        exports: [
            DxoRangeareaComponent
        ],
    })
], DxoRangeareaModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoRangebarComponent = class DxoRangebarComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'rangebar';
    }
};
DxoRangebarComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoRangebarComponent = __decorate([
    Component({
        selector: 'dxo-rangebar',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoRangebarComponent);
let DxoRangebarModule = class DxoRangebarModule {
};
DxoRangebarModule = __decorate([
    NgModule({
        declarations: [
            DxoRangebarComponent
        ],
        exports: [
            DxoRangebarComponent
        ],
    })
], DxoRangebarModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoReductionComponent = class DxoReductionComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get level() {
        return this._getOption('level');
    }
    set level(value) {
        this._setOption('level', value);
    }
    get _optionPath() {
        return 'reduction';
    }
};
DxoReductionComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoReductionComponent.prototype, "color", null);
__decorate([
    Input()
], DxoReductionComponent.prototype, "level", null);
DxoReductionComponent = __decorate([
    Component({
        selector: 'dxo-reduction',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoReductionComponent);
let DxoReductionModule = class DxoReductionModule {
};
DxoReductionModule = __decorate([
    NgModule({
        declarations: [
            DxoReductionComponent
        ],
        exports: [
            DxoReductionComponent
        ],
    })
], DxoReductionModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoRemoteOperationsComponent = class DxoRemoteOperationsComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get filtering() {
        return this._getOption('filtering');
    }
    set filtering(value) {
        this._setOption('filtering', value);
    }
    get grouping() {
        return this._getOption('grouping');
    }
    set grouping(value) {
        this._setOption('grouping', value);
    }
    get groupPaging() {
        return this._getOption('groupPaging');
    }
    set groupPaging(value) {
        this._setOption('groupPaging', value);
    }
    get paging() {
        return this._getOption('paging');
    }
    set paging(value) {
        this._setOption('paging', value);
    }
    get sorting() {
        return this._getOption('sorting');
    }
    set sorting(value) {
        this._setOption('sorting', value);
    }
    get summary() {
        return this._getOption('summary');
    }
    set summary(value) {
        this._setOption('summary', value);
    }
    get _optionPath() {
        return 'remoteOperations';
    }
};
DxoRemoteOperationsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoRemoteOperationsComponent.prototype, "filtering", null);
__decorate([
    Input()
], DxoRemoteOperationsComponent.prototype, "grouping", null);
__decorate([
    Input()
], DxoRemoteOperationsComponent.prototype, "groupPaging", null);
__decorate([
    Input()
], DxoRemoteOperationsComponent.prototype, "paging", null);
__decorate([
    Input()
], DxoRemoteOperationsComponent.prototype, "sorting", null);
__decorate([
    Input()
], DxoRemoteOperationsComponent.prototype, "summary", null);
DxoRemoteOperationsComponent = __decorate([
    Component({
        selector: 'dxo-remote-operations',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoRemoteOperationsComponent);
let DxoRemoteOperationsModule = class DxoRemoteOperationsModule {
};
DxoRemoteOperationsModule = __decorate([
    NgModule({
        declarations: [
            DxoRemoteOperationsComponent
        ],
        exports: [
            DxoRemoteOperationsComponent
        ],
    })
], DxoRemoteOperationsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiResourceComponent = class DxiResourceComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowMultiple() {
        return this._getOption('allowMultiple');
    }
    set allowMultiple(value) {
        this._setOption('allowMultiple', value);
    }
    get colorExpr() {
        return this._getOption('colorExpr');
    }
    set colorExpr(value) {
        this._setOption('colorExpr', value);
    }
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    get displayExpr() {
        return this._getOption('displayExpr');
    }
    set displayExpr(value) {
        this._setOption('displayExpr', value);
    }
    get fieldExpr() {
        return this._getOption('fieldExpr');
    }
    set fieldExpr(value) {
        this._setOption('fieldExpr', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get useColorAsDefault() {
        return this._getOption('useColorAsDefault');
    }
    set useColorAsDefault(value) {
        this._setOption('useColorAsDefault', value);
    }
    get valueExpr() {
        return this._getOption('valueExpr');
    }
    set valueExpr(value) {
        this._setOption('valueExpr', value);
    }
    get _optionPath() {
        return 'resources';
    }
};
DxiResourceComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiResourceComponent.prototype, "allowMultiple", null);
__decorate([
    Input()
], DxiResourceComponent.prototype, "colorExpr", null);
__decorate([
    Input()
], DxiResourceComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxiResourceComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxiResourceComponent.prototype, "fieldExpr", null);
__decorate([
    Input()
], DxiResourceComponent.prototype, "label", null);
__decorate([
    Input()
], DxiResourceComponent.prototype, "useColorAsDefault", null);
__decorate([
    Input()
], DxiResourceComponent.prototype, "valueExpr", null);
DxiResourceComponent = __decorate([
    Component({
        selector: 'dxi-resource',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiResourceComponent);
let DxiResourceModule = class DxiResourceModule {
};
DxiResourceModule = __decorate([
    NgModule({
        declarations: [
            DxiResourceComponent
        ],
        exports: [
            DxiResourceComponent
        ],
    })
], DxiResourceModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiRouteComponent = class DxiRouteComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get locations() {
        return this._getOption('locations');
    }
    set locations(value) {
        this._setOption('locations', value);
    }
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get weight() {
        return this._getOption('weight');
    }
    set weight(value) {
        this._setOption('weight', value);
    }
    get _optionPath() {
        return 'routes';
    }
    get locationsChildren() {
        return this._getOption('locations');
    }
    set locationsChildren(value) {
        this.setChildren('locations', value);
    }
};
DxiRouteComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiRouteComponent.prototype, "color", null);
__decorate([
    Input()
], DxiRouteComponent.prototype, "locations", null);
__decorate([
    Input()
], DxiRouteComponent.prototype, "mode", null);
__decorate([
    Input()
], DxiRouteComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxiRouteComponent.prototype, "weight", null);
__decorate([
    ContentChildren(forwardRef(() => DxiLocationComponent))
], DxiRouteComponent.prototype, "locationsChildren", null);
DxiRouteComponent = __decorate([
    Component({
        selector: 'dxi-route',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiRouteComponent);
let DxiRouteModule = class DxiRouteModule {
};
DxiRouteModule = __decorate([
    NgModule({
        declarations: [
            DxiRouteComponent
        ],
        exports: [
            DxiRouteComponent
        ],
    })
], DxiRouteModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiRowComponent = class DxiRowComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get baseSize() {
        return this._getOption('baseSize');
    }
    set baseSize(value) {
        this._setOption('baseSize', value);
    }
    get ratio() {
        return this._getOption('ratio');
    }
    set ratio(value) {
        this._setOption('ratio', value);
    }
    get screen() {
        return this._getOption('screen');
    }
    set screen(value) {
        this._setOption('screen', value);
    }
    get shrink() {
        return this._getOption('shrink');
    }
    set shrink(value) {
        this._setOption('shrink', value);
    }
    get _optionPath() {
        return 'rows';
    }
};
DxiRowComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiRowComponent.prototype, "baseSize", null);
__decorate([
    Input()
], DxiRowComponent.prototype, "ratio", null);
__decorate([
    Input()
], DxiRowComponent.prototype, "screen", null);
__decorate([
    Input()
], DxiRowComponent.prototype, "shrink", null);
DxiRowComponent = __decorate([
    Component({
        selector: 'dxi-row',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiRowComponent);
let DxiRowModule = class DxiRowModule {
};
DxiRowModule = __decorate([
    NgModule({
        declarations: [
            DxiRowComponent
        ],
        exports: [
            DxiRowComponent
        ],
    })
], DxiRowModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoScaleComponent = class DxoScaleComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowDecimals() {
        return this._getOption('allowDecimals');
    }
    set allowDecimals(value) {
        this._setOption('allowDecimals', value);
    }
    get customMinorTicks() {
        return this._getOption('customMinorTicks');
    }
    set customMinorTicks(value) {
        this._setOption('customMinorTicks', value);
    }
    get customTicks() {
        return this._getOption('customTicks');
    }
    set customTicks(value) {
        this._setOption('customTicks', value);
    }
    get endValue() {
        return this._getOption('endValue');
    }
    set endValue(value) {
        this._setOption('endValue', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get minorTick() {
        return this._getOption('minorTick');
    }
    set minorTick(value) {
        this._setOption('minorTick', value);
    }
    get minorTickInterval() {
        return this._getOption('minorTickInterval');
    }
    set minorTickInterval(value) {
        this._setOption('minorTickInterval', value);
    }
    get orientation() {
        return this._getOption('orientation');
    }
    set orientation(value) {
        this._setOption('orientation', value);
    }
    get scaleDivisionFactor() {
        return this._getOption('scaleDivisionFactor');
    }
    set scaleDivisionFactor(value) {
        this._setOption('scaleDivisionFactor', value);
    }
    get startValue() {
        return this._getOption('startValue');
    }
    set startValue(value) {
        this._setOption('startValue', value);
    }
    get tick() {
        return this._getOption('tick');
    }
    set tick(value) {
        this._setOption('tick', value);
    }
    get tickInterval() {
        return this._getOption('tickInterval');
    }
    set tickInterval(value) {
        this._setOption('tickInterval', value);
    }
    get horizontalOrientation() {
        return this._getOption('horizontalOrientation');
    }
    set horizontalOrientation(value) {
        this._setOption('horizontalOrientation', value);
    }
    get verticalOrientation() {
        return this._getOption('verticalOrientation');
    }
    set verticalOrientation(value) {
        this._setOption('verticalOrientation', value);
    }
    get aggregationGroupWidth() {
        return this._getOption('aggregationGroupWidth');
    }
    set aggregationGroupWidth(value) {
        this._setOption('aggregationGroupWidth', value);
    }
    get aggregationInterval() {
        return this._getOption('aggregationInterval');
    }
    set aggregationInterval(value) {
        this._setOption('aggregationInterval', value);
    }
    get breaks() {
        return this._getOption('breaks');
    }
    set breaks(value) {
        this._setOption('breaks', value);
    }
    get breakStyle() {
        return this._getOption('breakStyle');
    }
    set breakStyle(value) {
        this._setOption('breakStyle', value);
    }
    get categories() {
        return this._getOption('categories');
    }
    set categories(value) {
        this._setOption('categories', value);
    }
    get endOnTick() {
        return this._getOption('endOnTick');
    }
    set endOnTick(value) {
        this._setOption('endOnTick', value);
    }
    get holidays() {
        return this._getOption('holidays');
    }
    set holidays(value) {
        this._setOption('holidays', value);
    }
    get logarithmBase() {
        return this._getOption('logarithmBase');
    }
    set logarithmBase(value) {
        this._setOption('logarithmBase', value);
    }
    get marker() {
        return this._getOption('marker');
    }
    set marker(value) {
        this._setOption('marker', value);
    }
    get maxRange() {
        return this._getOption('maxRange');
    }
    set maxRange(value) {
        this._setOption('maxRange', value);
    }
    get minorTickCount() {
        return this._getOption('minorTickCount');
    }
    set minorTickCount(value) {
        this._setOption('minorTickCount', value);
    }
    get minRange() {
        return this._getOption('minRange');
    }
    set minRange(value) {
        this._setOption('minRange', value);
    }
    get placeholderHeight() {
        return this._getOption('placeholderHeight');
    }
    set placeholderHeight(value) {
        this._setOption('placeholderHeight', value);
    }
    get showCustomBoundaryTicks() {
        return this._getOption('showCustomBoundaryTicks');
    }
    set showCustomBoundaryTicks(value) {
        this._setOption('showCustomBoundaryTicks', value);
    }
    get singleWorkdays() {
        return this._getOption('singleWorkdays');
    }
    set singleWorkdays(value) {
        this._setOption('singleWorkdays', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get valueType() {
        return this._getOption('valueType');
    }
    set valueType(value) {
        this._setOption('valueType', value);
    }
    get workdaysOnly() {
        return this._getOption('workdaysOnly');
    }
    set workdaysOnly(value) {
        this._setOption('workdaysOnly', value);
    }
    get workWeek() {
        return this._getOption('workWeek');
    }
    set workWeek(value) {
        this._setOption('workWeek', value);
    }
    get _optionPath() {
        return 'scale';
    }
    get breaksChildren() {
        return this._getOption('breaks');
    }
    set breaksChildren(value) {
        this.setChildren('breaks', value);
    }
};
DxoScaleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoScaleComponent.prototype, "allowDecimals", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "customMinorTicks", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "customTicks", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "endValue", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "label", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "minorTick", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "minorTickInterval", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "orientation", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "scaleDivisionFactor", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "startValue", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "tick", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "tickInterval", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "horizontalOrientation", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "verticalOrientation", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "aggregationGroupWidth", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "aggregationInterval", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "breaks", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "breakStyle", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "categories", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "endOnTick", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "holidays", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "logarithmBase", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "marker", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "maxRange", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "minorTickCount", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "minRange", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "placeholderHeight", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "showCustomBoundaryTicks", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "singleWorkdays", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "type", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "valueType", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "workdaysOnly", null);
__decorate([
    Input()
], DxoScaleComponent.prototype, "workWeek", null);
__decorate([
    ContentChildren(forwardRef(() => DxiBreakComponent))
], DxoScaleComponent.prototype, "breaksChildren", null);
DxoScaleComponent = __decorate([
    Component({
        selector: 'dxo-scale',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoScaleComponent);
let DxoScaleModule = class DxoScaleModule {
};
DxoScaleModule = __decorate([
    NgModule({
        declarations: [
            DxoScaleComponent
        ],
        exports: [
            DxoScaleComponent
        ],
    })
], DxoScaleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoScatterComponent = class DxoScatterComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'scatter';
    }
};
DxoScatterComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoScatterComponent = __decorate([
    Component({
        selector: 'dxo-scatter',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width',
            'closed'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoScatterComponent);
let DxoScatterModule = class DxoScatterModule {
};
DxoScatterModule = __decorate([
    NgModule({
        declarations: [
            DxoScatterComponent
        ],
        exports: [
            DxoScatterComponent
        ],
    })
], DxoScatterModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoScrollBarComponent = class DxoScrollBarComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get offset() {
        return this._getOption('offset');
    }
    set offset(value) {
        this._setOption('offset', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'scrollBar';
    }
};
DxoScrollBarComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoScrollBarComponent.prototype, "color", null);
__decorate([
    Input()
], DxoScrollBarComponent.prototype, "offset", null);
__decorate([
    Input()
], DxoScrollBarComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoScrollBarComponent.prototype, "position", null);
__decorate([
    Input()
], DxoScrollBarComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoScrollBarComponent.prototype, "width", null);
DxoScrollBarComponent = __decorate([
    Component({
        selector: 'dxo-scroll-bar',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoScrollBarComponent);
let DxoScrollBarModule = class DxoScrollBarModule {
};
DxoScrollBarModule = __decorate([
    NgModule({
        declarations: [
            DxoScrollBarComponent
        ],
        exports: [
            DxoScrollBarComponent
        ],
    })
], DxoScrollBarModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoScrollingComponent = class DxoScrollingComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get columnRenderingMode() {
        return this._getOption('columnRenderingMode');
    }
    set columnRenderingMode(value) {
        this._setOption('columnRenderingMode', value);
    }
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
    }
    get preloadEnabled() {
        return this._getOption('preloadEnabled');
    }
    set preloadEnabled(value) {
        this._setOption('preloadEnabled', value);
    }
    get rowRenderingMode() {
        return this._getOption('rowRenderingMode');
    }
    set rowRenderingMode(value) {
        this._setOption('rowRenderingMode', value);
    }
    get scrollByContent() {
        return this._getOption('scrollByContent');
    }
    set scrollByContent(value) {
        this._setOption('scrollByContent', value);
    }
    get scrollByThumb() {
        return this._getOption('scrollByThumb');
    }
    set scrollByThumb(value) {
        this._setOption('scrollByThumb', value);
    }
    get showScrollbar() {
        return this._getOption('showScrollbar');
    }
    set showScrollbar(value) {
        this._setOption('showScrollbar', value);
    }
    get useNative() {
        return this._getOption('useNative');
    }
    set useNative(value) {
        this._setOption('useNative', value);
    }
    get _optionPath() {
        return 'scrolling';
    }
};
DxoScrollingComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoScrollingComponent.prototype, "columnRenderingMode", null);
__decorate([
    Input()
], DxoScrollingComponent.prototype, "mode", null);
__decorate([
    Input()
], DxoScrollingComponent.prototype, "preloadEnabled", null);
__decorate([
    Input()
], DxoScrollingComponent.prototype, "rowRenderingMode", null);
__decorate([
    Input()
], DxoScrollingComponent.prototype, "scrollByContent", null);
__decorate([
    Input()
], DxoScrollingComponent.prototype, "scrollByThumb", null);
__decorate([
    Input()
], DxoScrollingComponent.prototype, "showScrollbar", null);
__decorate([
    Input()
], DxoScrollingComponent.prototype, "useNative", null);
DxoScrollingComponent = __decorate([
    Component({
        selector: 'dxo-scrolling',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoScrollingComponent);
let DxoScrollingModule = class DxoScrollingModule {
};
DxoScrollingModule = __decorate([
    NgModule({
        declarations: [
            DxoScrollingComponent
        ],
        exports: [
            DxoScrollingComponent
        ],
    })
], DxoScrollingModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoTextBoxOptions extends NestedOption {
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    get buttons() {
        return this._getOption('buttons');
    }
    set buttons(value) {
        this._setOption('buttons', value);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    get inputAttr() {
        return this._getOption('inputAttr');
    }
    set inputAttr(value) {
        this._setOption('inputAttr', value);
    }
    get isValid() {
        return this._getOption('isValid');
    }
    set isValid(value) {
        this._setOption('isValid', value);
    }
    get mask() {
        return this._getOption('mask');
    }
    set mask(value) {
        this._setOption('mask', value);
    }
    get maskChar() {
        return this._getOption('maskChar');
    }
    set maskChar(value) {
        this._setOption('maskChar', value);
    }
    get maskInvalidMessage() {
        return this._getOption('maskInvalidMessage');
    }
    set maskInvalidMessage(value) {
        this._setOption('maskInvalidMessage', value);
    }
    get maskRules() {
        return this._getOption('maskRules');
    }
    set maskRules(value) {
        this._setOption('maskRules', value);
    }
    get maxLength() {
        return this._getOption('maxLength');
    }
    set maxLength(value) {
        this._setOption('maxLength', value);
    }
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get onChange() {
        return this._getOption('onChange');
    }
    set onChange(value) {
        this._setOption('onChange', value);
    }
    get onContentReady() {
        return this._getOption('onContentReady');
    }
    set onContentReady(value) {
        this._setOption('onContentReady', value);
    }
    get onCopy() {
        return this._getOption('onCopy');
    }
    set onCopy(value) {
        this._setOption('onCopy', value);
    }
    get onCut() {
        return this._getOption('onCut');
    }
    set onCut(value) {
        this._setOption('onCut', value);
    }
    get onDisposing() {
        return this._getOption('onDisposing');
    }
    set onDisposing(value) {
        this._setOption('onDisposing', value);
    }
    get onEnterKey() {
        return this._getOption('onEnterKey');
    }
    set onEnterKey(value) {
        this._setOption('onEnterKey', value);
    }
    get onFocusIn() {
        return this._getOption('onFocusIn');
    }
    set onFocusIn(value) {
        this._setOption('onFocusIn', value);
    }
    get onFocusOut() {
        return this._getOption('onFocusOut');
    }
    set onFocusOut(value) {
        this._setOption('onFocusOut', value);
    }
    get onInitialized() {
        return this._getOption('onInitialized');
    }
    set onInitialized(value) {
        this._setOption('onInitialized', value);
    }
    get onInput() {
        return this._getOption('onInput');
    }
    set onInput(value) {
        this._setOption('onInput', value);
    }
    get onKeyDown() {
        return this._getOption('onKeyDown');
    }
    set onKeyDown(value) {
        this._setOption('onKeyDown', value);
    }
    get onKeyPress() {
        return this._getOption('onKeyPress');
    }
    set onKeyPress(value) {
        this._setOption('onKeyPress', value);
    }
    get onKeyUp() {
        return this._getOption('onKeyUp');
    }
    set onKeyUp(value) {
        this._setOption('onKeyUp', value);
    }
    get onOptionChanged() {
        return this._getOption('onOptionChanged');
    }
    set onOptionChanged(value) {
        this._setOption('onOptionChanged', value);
    }
    get onPaste() {
        return this._getOption('onPaste');
    }
    set onPaste(value) {
        this._setOption('onPaste', value);
    }
    get onValueChanged() {
        return this._getOption('onValueChanged');
    }
    set onValueChanged(value) {
        this._setOption('onValueChanged', value);
    }
    get placeholder() {
        return this._getOption('placeholder');
    }
    set placeholder(value) {
        this._setOption('placeholder', value);
    }
    get readOnly() {
        return this._getOption('readOnly');
    }
    set readOnly(value) {
        this._setOption('readOnly', value);
    }
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    get showClearButton() {
        return this._getOption('showClearButton');
    }
    set showClearButton(value) {
        this._setOption('showClearButton', value);
    }
    get showMaskMode() {
        return this._getOption('showMaskMode');
    }
    set showMaskMode(value) {
        this._setOption('showMaskMode', value);
    }
    get spellcheck() {
        return this._getOption('spellcheck');
    }
    set spellcheck(value) {
        this._setOption('spellcheck', value);
    }
    get stylingMode() {
        return this._getOption('stylingMode');
    }
    set stylingMode(value) {
        this._setOption('stylingMode', value);
    }
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get useMaskedValue() {
        return this._getOption('useMaskedValue');
    }
    set useMaskedValue(value) {
        this._setOption('useMaskedValue', value);
    }
    get validationError() {
        return this._getOption('validationError');
    }
    set validationError(value) {
        this._setOption('validationError', value);
    }
    get validationMessageMode() {
        return this._getOption('validationMessageMode');
    }
    set validationMessageMode(value) {
        this._setOption('validationMessageMode', value);
    }
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    get valueChangeEvent() {
        return this._getOption('valueChangeEvent');
    }
    set valueChangeEvent(value) {
        this._setOption('valueChangeEvent', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSearchEditorOptionsComponent = class DxoSearchEditorOptionsComponent extends DxoTextBoxOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'textChange' },
            { emit: 'valueChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'searchEditorOptions';
    }
    get buttonsChildren() {
        return this._getOption('buttons');
    }
    set buttonsChildren(value) {
        this.setChildren('buttons', value);
    }
};
DxoSearchEditorOptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxoSearchEditorOptionsComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxoSearchEditorOptionsComponent.prototype, "valueChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiButtonComponent))
], DxoSearchEditorOptionsComponent.prototype, "buttonsChildren", null);
DxoSearchEditorOptionsComponent = __decorate([
    Component({
        selector: 'dxo-search-editor-options',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'activeStateEnabled',
            'buttons',
            'disabled',
            'elementAttr',
            'focusStateEnabled',
            'height',
            'hint',
            'hoverStateEnabled',
            'inputAttr',
            'isValid',
            'mask',
            'maskChar',
            'maskInvalidMessage',
            'maskRules',
            'maxLength',
            'mode',
            'name',
            'onChange',
            'onContentReady',
            'onCopy',
            'onCut',
            'onDisposing',
            'onEnterKey',
            'onFocusIn',
            'onFocusOut',
            'onInitialized',
            'onInput',
            'onKeyDown',
            'onKeyPress',
            'onKeyUp',
            'onOptionChanged',
            'onPaste',
            'onValueChanged',
            'placeholder',
            'readOnly',
            'rtlEnabled',
            'showClearButton',
            'showMaskMode',
            'spellcheck',
            'stylingMode',
            'tabIndex',
            'text',
            'useMaskedValue',
            'validationError',
            'validationMessageMode',
            'value',
            'valueChangeEvent',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSearchEditorOptionsComponent);
let DxoSearchEditorOptionsModule = class DxoSearchEditorOptionsModule {
};
DxoSearchEditorOptionsModule = __decorate([
    NgModule({
        declarations: [
            DxoSearchEditorOptionsComponent
        ],
        exports: [
            DxoSearchEditorOptionsComponent
        ],
    })
], DxoSearchEditorOptionsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSearchPanelComponent = class DxoSearchPanelComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'textChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get highlightCaseSensitive() {
        return this._getOption('highlightCaseSensitive');
    }
    set highlightCaseSensitive(value) {
        this._setOption('highlightCaseSensitive', value);
    }
    get highlightSearchText() {
        return this._getOption('highlightSearchText');
    }
    set highlightSearchText(value) {
        this._setOption('highlightSearchText', value);
    }
    get placeholder() {
        return this._getOption('placeholder');
    }
    set placeholder(value) {
        this._setOption('placeholder', value);
    }
    get searchVisibleColumnsOnly() {
        return this._getOption('searchVisibleColumnsOnly');
    }
    set searchVisibleColumnsOnly(value) {
        this._setOption('searchVisibleColumnsOnly', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'searchPanel';
    }
};
DxoSearchPanelComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSearchPanelComponent.prototype, "highlightCaseSensitive", null);
__decorate([
    Input()
], DxoSearchPanelComponent.prototype, "highlightSearchText", null);
__decorate([
    Input()
], DxoSearchPanelComponent.prototype, "placeholder", null);
__decorate([
    Input()
], DxoSearchPanelComponent.prototype, "searchVisibleColumnsOnly", null);
__decorate([
    Input()
], DxoSearchPanelComponent.prototype, "text", null);
__decorate([
    Input()
], DxoSearchPanelComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoSearchPanelComponent.prototype, "width", null);
__decorate([
    Output()
], DxoSearchPanelComponent.prototype, "textChange", void 0);
DxoSearchPanelComponent = __decorate([
    Component({
        selector: 'dxo-search-panel',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSearchPanelComponent);
let DxoSearchPanelModule = class DxoSearchPanelModule {
};
DxoSearchPanelModule = __decorate([
    NgModule({
        declarations: [
            DxoSearchPanelComponent
        ],
        exports: [
            DxoSearchPanelComponent
        ],
    })
], DxoSearchPanelModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSelectionStyleComponent = class DxoSelectionStyleComponent extends NestedOption {
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
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
    }
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get hatching() {
        return this._getOption('hatching');
    }
    set hatching(value) {
        this._setOption('hatching', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'selectionStyle';
    }
};
DxoSelectionStyleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSelectionStyleComponent.prototype, "border", null);
__decorate([
    Input()
], DxoSelectionStyleComponent.prototype, "color", null);
__decorate([
    Input()
], DxoSelectionStyleComponent.prototype, "size", null);
__decorate([
    Input()
], DxoSelectionStyleComponent.prototype, "dashStyle", null);
__decorate([
    Input()
], DxoSelectionStyleComponent.prototype, "hatching", null);
__decorate([
    Input()
], DxoSelectionStyleComponent.prototype, "width", null);
DxoSelectionStyleComponent = __decorate([
    Component({
        selector: 'dxo-selection-style',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSelectionStyleComponent);
let DxoSelectionStyleModule = class DxoSelectionStyleModule {
};
DxoSelectionStyleModule = __decorate([
    NgModule({
        declarations: [
            DxoSelectionStyleComponent
        ],
        exports: [
            DxoSelectionStyleComponent
        ],
    })
], DxoSelectionStyleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSelectionComponent = class DxoSelectionComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowSelectAll() {
        return this._getOption('allowSelectAll');
    }
    set allowSelectAll(value) {
        this._setOption('allowSelectAll', value);
    }
    get deferred() {
        return this._getOption('deferred');
    }
    set deferred(value) {
        this._setOption('deferred', value);
    }
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
    }
    get selectAllMode() {
        return this._getOption('selectAllMode');
    }
    set selectAllMode(value) {
        this._setOption('selectAllMode', value);
    }
    get showCheckBoxesMode() {
        return this._getOption('showCheckBoxesMode');
    }
    set showCheckBoxesMode(value) {
        this._setOption('showCheckBoxesMode', value);
    }
    get recursive() {
        return this._getOption('recursive');
    }
    set recursive(value) {
        this._setOption('recursive', value);
    }
    get _optionPath() {
        return 'selection';
    }
};
DxoSelectionComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSelectionComponent.prototype, "allowSelectAll", null);
__decorate([
    Input()
], DxoSelectionComponent.prototype, "deferred", null);
__decorate([
    Input()
], DxoSelectionComponent.prototype, "mode", null);
__decorate([
    Input()
], DxoSelectionComponent.prototype, "selectAllMode", null);
__decorate([
    Input()
], DxoSelectionComponent.prototype, "showCheckBoxesMode", null);
__decorate([
    Input()
], DxoSelectionComponent.prototype, "recursive", null);
DxoSelectionComponent = __decorate([
    Component({
        selector: 'dxo-selection',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSelectionComponent);
let DxoSelectionModule = class DxoSelectionModule {
};
DxoSelectionModule = __decorate([
    NgModule({
        declarations: [
            DxoSelectionComponent
        ],
        exports: [
            DxoSelectionComponent
        ],
    })
], DxoSelectionModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSeriesTemplateComponent = class DxoSeriesTemplateComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get customizeSeries() {
        return this._getOption('customizeSeries');
    }
    set customizeSeries(value) {
        this._setOption('customizeSeries', value);
    }
    get nameField() {
        return this._getOption('nameField');
    }
    set nameField(value) {
        this._setOption('nameField', value);
    }
    get _optionPath() {
        return 'seriesTemplate';
    }
};
DxoSeriesTemplateComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSeriesTemplateComponent.prototype, "customizeSeries", null);
__decorate([
    Input()
], DxoSeriesTemplateComponent.prototype, "nameField", null);
DxoSeriesTemplateComponent = __decorate([
    Component({
        selector: 'dxo-series-template',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSeriesTemplateComponent);
let DxoSeriesTemplateModule = class DxoSeriesTemplateModule {
};
DxoSeriesTemplateModule = __decorate([
    NgModule({
        declarations: [
            DxoSeriesTemplateComponent
        ],
        exports: [
            DxoSeriesTemplateComponent
        ],
    })
], DxoSeriesTemplateModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoShadowComponent = class DxoShadowComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get blur() {
        return this._getOption('blur');
    }
    set blur(value) {
        this._setOption('blur', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get offsetX() {
        return this._getOption('offsetX');
    }
    set offsetX(value) {
        this._setOption('offsetX', value);
    }
    get offsetY() {
        return this._getOption('offsetY');
    }
    set offsetY(value) {
        this._setOption('offsetY', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get _optionPath() {
        return 'shadow';
    }
};
DxoShadowComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoShadowComponent.prototype, "blur", null);
__decorate([
    Input()
], DxoShadowComponent.prototype, "color", null);
__decorate([
    Input()
], DxoShadowComponent.prototype, "offsetX", null);
__decorate([
    Input()
], DxoShadowComponent.prototype, "offsetY", null);
__decorate([
    Input()
], DxoShadowComponent.prototype, "opacity", null);
DxoShadowComponent = __decorate([
    Component({
        selector: 'dxo-shadow',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoShadowComponent);
let DxoShadowModule = class DxoShadowModule {
};
DxoShadowModule = __decorate([
    NgModule({
        declarations: [
            DxoShadowComponent
        ],
        exports: [
            DxoShadowComponent
        ],
    })
], DxoShadowModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoShowEventComponent = class DxoShowEventComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get delay() {
        return this._getOption('delay');
    }
    set delay(value) {
        this._setOption('delay', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get _optionPath() {
        return 'showEvent';
    }
};
DxoShowEventComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoShowEventComponent.prototype, "delay", null);
__decorate([
    Input()
], DxoShowEventComponent.prototype, "name", null);
DxoShowEventComponent = __decorate([
    Component({
        selector: 'dxo-show-event',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoShowEventComponent);
let DxoShowEventModule = class DxoShowEventModule {
};
DxoShowEventModule = __decorate([
    NgModule({
        declarations: [
            DxoShowEventComponent
        ],
        exports: [
            DxoShowEventComponent
        ],
    })
], DxoShowEventModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoShowFirstSubmenuModeComponent = class DxoShowFirstSubmenuModeComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get delay() {
        return this._getOption('delay');
    }
    set delay(value) {
        this._setOption('delay', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get _optionPath() {
        return 'showFirstSubmenuMode';
    }
};
DxoShowFirstSubmenuModeComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoShowFirstSubmenuModeComponent.prototype, "delay", null);
__decorate([
    Input()
], DxoShowFirstSubmenuModeComponent.prototype, "name", null);
DxoShowFirstSubmenuModeComponent = __decorate([
    Component({
        selector: 'dxo-show-first-submenu-mode',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoShowFirstSubmenuModeComponent);
let DxoShowFirstSubmenuModeModule = class DxoShowFirstSubmenuModeModule {
};
DxoShowFirstSubmenuModeModule = __decorate([
    NgModule({
        declarations: [
            DxoShowFirstSubmenuModeComponent
        ],
        exports: [
            DxoShowFirstSubmenuModeComponent
        ],
    })
], DxoShowFirstSubmenuModeModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoShowSubmenuModeComponent = class DxoShowSubmenuModeComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get delay() {
        return this._getOption('delay');
    }
    set delay(value) {
        this._setOption('delay', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get _optionPath() {
        return 'showSubmenuMode';
    }
};
DxoShowSubmenuModeComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoShowSubmenuModeComponent.prototype, "delay", null);
__decorate([
    Input()
], DxoShowSubmenuModeComponent.prototype, "name", null);
DxoShowSubmenuModeComponent = __decorate([
    Component({
        selector: 'dxo-show-submenu-mode',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoShowSubmenuModeComponent);
let DxoShowSubmenuModeModule = class DxoShowSubmenuModeModule {
};
DxoShowSubmenuModeModule = __decorate([
    NgModule({
        declarations: [
            DxoShowSubmenuModeComponent
        ],
        exports: [
            DxoShowSubmenuModeComponent
        ],
    })
], DxoShowSubmenuModeModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoShowComponent = class DxoShowComponent extends DxoAnimationConfig {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'show';
    }
};
DxoShowComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoShowComponent = __decorate([
    Component({
        selector: 'dxo-show',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'complete',
            'delay',
            'direction',
            'duration',
            'easing',
            'from',
            'staggerDelay',
            'start',
            'to',
            'type'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoShowComponent);
let DxoShowModule = class DxoShowModule {
};
DxoShowModule = __decorate([
    NgModule({
        declarations: [
            DxoShowComponent
        ],
        exports: [
            DxoShowComponent
        ],
    })
], DxoShowModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoShutterComponent = class DxoShutterComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get _optionPath() {
        return 'shutter';
    }
};
DxoShutterComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoShutterComponent.prototype, "color", null);
__decorate([
    Input()
], DxoShutterComponent.prototype, "opacity", null);
DxoShutterComponent = __decorate([
    Component({
        selector: 'dxo-shutter',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoShutterComponent);
let DxoShutterModule = class DxoShutterModule {
};
DxoShutterModule = __decorate([
    NgModule({
        declarations: [
            DxoShutterComponent
        ],
        exports: [
            DxoShutterComponent
        ],
    })
], DxoShutterModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSizeComponent = class DxoSizeComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'size';
    }
};
DxoSizeComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSizeComponent.prototype, "height", null);
__decorate([
    Input()
], DxoSizeComponent.prototype, "width", null);
DxoSizeComponent = __decorate([
    Component({
        selector: 'dxo-size',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSizeComponent);
let DxoSizeModule = class DxoSizeModule {
};
DxoSizeModule = __decorate([
    NgModule({
        declarations: [
            DxoSizeComponent
        ],
        exports: [
            DxoSizeComponent
        ],
    })
], DxoSizeModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSliderHandleComponent = class DxoSliderHandleComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'sliderHandle';
    }
};
DxoSliderHandleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSliderHandleComponent.prototype, "color", null);
__decorate([
    Input()
], DxoSliderHandleComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoSliderHandleComponent.prototype, "width", null);
DxoSliderHandleComponent = __decorate([
    Component({
        selector: 'dxo-slider-handle',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSliderHandleComponent);
let DxoSliderHandleModule = class DxoSliderHandleModule {
};
DxoSliderHandleModule = __decorate([
    NgModule({
        declarations: [
            DxoSliderHandleComponent
        ],
        exports: [
            DxoSliderHandleComponent
        ],
    })
], DxoSliderHandleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSliderMarkerComponent = class DxoSliderMarkerComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get format() {
        return this._getOption('format');
    }
    set format(value) {
        this._setOption('format', value);
    }
    get invalidRangeColor() {
        return this._getOption('invalidRangeColor');
    }
    set invalidRangeColor(value) {
        this._setOption('invalidRangeColor', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get placeholderHeight() {
        return this._getOption('placeholderHeight');
    }
    set placeholderHeight(value) {
        this._setOption('placeholderHeight', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get _optionPath() {
        return 'sliderMarker';
    }
};
DxoSliderMarkerComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSliderMarkerComponent.prototype, "color", null);
__decorate([
    Input()
], DxoSliderMarkerComponent.prototype, "customizeText", null);
__decorate([
    Input()
], DxoSliderMarkerComponent.prototype, "font", null);
__decorate([
    Input()
], DxoSliderMarkerComponent.prototype, "format", null);
__decorate([
    Input()
], DxoSliderMarkerComponent.prototype, "invalidRangeColor", null);
__decorate([
    Input()
], DxoSliderMarkerComponent.prototype, "paddingLeftRight", null);
__decorate([
    Input()
], DxoSliderMarkerComponent.prototype, "paddingTopBottom", null);
__decorate([
    Input()
], DxoSliderMarkerComponent.prototype, "placeholderHeight", null);
__decorate([
    Input()
], DxoSliderMarkerComponent.prototype, "visible", null);
DxoSliderMarkerComponent = __decorate([
    Component({
        selector: 'dxo-slider-marker',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSliderMarkerComponent);
let DxoSliderMarkerModule = class DxoSliderMarkerModule {
};
DxoSliderMarkerModule = __decorate([
    NgModule({
        declarations: [
            DxoSliderMarkerComponent
        ],
        exports: [
            DxoSliderMarkerComponent
        ],
    })
], DxoSliderMarkerModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSmallValuesGroupingComponent = class DxoSmallValuesGroupingComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get groupName() {
        return this._getOption('groupName');
    }
    set groupName(value) {
        this._setOption('groupName', value);
    }
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
    }
    get threshold() {
        return this._getOption('threshold');
    }
    set threshold(value) {
        this._setOption('threshold', value);
    }
    get topCount() {
        return this._getOption('topCount');
    }
    set topCount(value) {
        this._setOption('topCount', value);
    }
    get _optionPath() {
        return 'smallValuesGrouping';
    }
};
DxoSmallValuesGroupingComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSmallValuesGroupingComponent.prototype, "groupName", null);
__decorate([
    Input()
], DxoSmallValuesGroupingComponent.prototype, "mode", null);
__decorate([
    Input()
], DxoSmallValuesGroupingComponent.prototype, "threshold", null);
__decorate([
    Input()
], DxoSmallValuesGroupingComponent.prototype, "topCount", null);
DxoSmallValuesGroupingComponent = __decorate([
    Component({
        selector: 'dxo-small-values-grouping',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSmallValuesGroupingComponent);
let DxoSmallValuesGroupingModule = class DxoSmallValuesGroupingModule {
};
DxoSmallValuesGroupingModule = __decorate([
    NgModule({
        declarations: [
            DxoSmallValuesGroupingComponent
        ],
        exports: [
            DxoSmallValuesGroupingComponent
        ],
    })
], DxoSmallValuesGroupingModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiSortByGroupSummaryInfoComponent = class DxiSortByGroupSummaryInfoComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get groupColumn() {
        return this._getOption('groupColumn');
    }
    set groupColumn(value) {
        this._setOption('groupColumn', value);
    }
    get sortOrder() {
        return this._getOption('sortOrder');
    }
    set sortOrder(value) {
        this._setOption('sortOrder', value);
    }
    get summaryItem() {
        return this._getOption('summaryItem');
    }
    set summaryItem(value) {
        this._setOption('summaryItem', value);
    }
    get _optionPath() {
        return 'sortByGroupSummaryInfo';
    }
};
DxiSortByGroupSummaryInfoComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiSortByGroupSummaryInfoComponent.prototype, "groupColumn", null);
__decorate([
    Input()
], DxiSortByGroupSummaryInfoComponent.prototype, "sortOrder", null);
__decorate([
    Input()
], DxiSortByGroupSummaryInfoComponent.prototype, "summaryItem", null);
DxiSortByGroupSummaryInfoComponent = __decorate([
    Component({
        selector: 'dxi-sort-by-group-summary-info',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiSortByGroupSummaryInfoComponent);
let DxiSortByGroupSummaryInfoModule = class DxiSortByGroupSummaryInfoModule {
};
DxiSortByGroupSummaryInfoModule = __decorate([
    NgModule({
        declarations: [
            DxiSortByGroupSummaryInfoComponent
        ],
        exports: [
            DxiSortByGroupSummaryInfoComponent
        ],
    })
], DxiSortByGroupSummaryInfoModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSortingComponent = class DxoSortingComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get ascendingText() {
        return this._getOption('ascendingText');
    }
    set ascendingText(value) {
        this._setOption('ascendingText', value);
    }
    get clearText() {
        return this._getOption('clearText');
    }
    set clearText(value) {
        this._setOption('clearText', value);
    }
    get descendingText() {
        return this._getOption('descendingText');
    }
    set descendingText(value) {
        this._setOption('descendingText', value);
    }
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
    }
    get _optionPath() {
        return 'sorting';
    }
};
DxoSortingComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSortingComponent.prototype, "ascendingText", null);
__decorate([
    Input()
], DxoSortingComponent.prototype, "clearText", null);
__decorate([
    Input()
], DxoSortingComponent.prototype, "descendingText", null);
__decorate([
    Input()
], DxoSortingComponent.prototype, "mode", null);
DxoSortingComponent = __decorate([
    Component({
        selector: 'dxo-sorting',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSortingComponent);
let DxoSortingModule = class DxoSortingModule {
};
DxoSortingModule = __decorate([
    NgModule({
        declarations: [
            DxoSortingComponent
        ],
        exports: [
            DxoSortingComponent
        ],
    })
], DxoSortingModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSourceComponent = class DxoSourceComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get grouping() {
        return this._getOption('grouping');
    }
    set grouping(value) {
        this._setOption('grouping', value);
    }
    get layer() {
        return this._getOption('layer');
    }
    set layer(value) {
        this._setOption('layer', value);
    }
    get _optionPath() {
        return 'source';
    }
};
DxoSourceComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSourceComponent.prototype, "grouping", null);
__decorate([
    Input()
], DxoSourceComponent.prototype, "layer", null);
DxoSourceComponent = __decorate([
    Component({
        selector: 'dxo-source',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSourceComponent);
let DxoSourceModule = class DxoSourceModule {
};
DxoSourceModule = __decorate([
    NgModule({
        declarations: [
            DxoSourceComponent
        ],
        exports: [
            DxoSourceComponent
        ],
    })
], DxoSourceModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSplineComponent = class DxoSplineComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'spline';
    }
};
DxoSplineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoSplineComponent = __decorate([
    Component({
        selector: 'dxo-spline',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSplineComponent);
let DxoSplineModule = class DxoSplineModule {
};
DxoSplineModule = __decorate([
    NgModule({
        declarations: [
            DxoSplineComponent
        ],
        exports: [
            DxoSplineComponent
        ],
    })
], DxoSplineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSplineareaComponent = class DxoSplineareaComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'splinearea';
    }
};
DxoSplineareaComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoSplineareaComponent = __decorate([
    Component({
        selector: 'dxo-splinearea',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSplineareaComponent);
let DxoSplineareaModule = class DxoSplineareaModule {
};
DxoSplineareaModule = __decorate([
    NgModule({
        declarations: [
            DxoSplineareaComponent
        ],
        exports: [
            DxoSplineareaComponent
        ],
    })
], DxoSplineareaModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStackedareaComponent = class DxoStackedareaComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'stackedarea';
    }
};
DxoStackedareaComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoStackedareaComponent = __decorate([
    Component({
        selector: 'dxo-stackedarea',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStackedareaComponent);
let DxoStackedareaModule = class DxoStackedareaModule {
};
DxoStackedareaModule = __decorate([
    NgModule({
        declarations: [
            DxoStackedareaComponent
        ],
        exports: [
            DxoStackedareaComponent
        ],
    })
], DxoStackedareaModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStackedbarComponent = class DxoStackedbarComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'stackedbar';
    }
};
DxoStackedbarComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoStackedbarComponent = __decorate([
    Component({
        selector: 'dxo-stackedbar',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width',
            'closed'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStackedbarComponent);
let DxoStackedbarModule = class DxoStackedbarModule {
};
DxoStackedbarModule = __decorate([
    NgModule({
        declarations: [
            DxoStackedbarComponent
        ],
        exports: [
            DxoStackedbarComponent
        ],
    })
], DxoStackedbarModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStackedlineComponent = class DxoStackedlineComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'stackedline';
    }
};
DxoStackedlineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoStackedlineComponent = __decorate([
    Component({
        selector: 'dxo-stackedline',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStackedlineComponent);
let DxoStackedlineModule = class DxoStackedlineModule {
};
DxoStackedlineModule = __decorate([
    NgModule({
        declarations: [
            DxoStackedlineComponent
        ],
        exports: [
            DxoStackedlineComponent
        ],
    })
], DxoStackedlineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStackedsplineComponent = class DxoStackedsplineComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'stackedspline';
    }
};
DxoStackedsplineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoStackedsplineComponent = __decorate([
    Component({
        selector: 'dxo-stackedspline',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStackedsplineComponent);
let DxoStackedsplineModule = class DxoStackedsplineModule {
};
DxoStackedsplineModule = __decorate([
    NgModule({
        declarations: [
            DxoStackedsplineComponent
        ],
        exports: [
            DxoStackedsplineComponent
        ],
    })
], DxoStackedsplineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStackedsplineareaComponent = class DxoStackedsplineareaComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'stackedsplinearea';
    }
};
DxoStackedsplineareaComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoStackedsplineareaComponent = __decorate([
    Component({
        selector: 'dxo-stackedsplinearea',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStackedsplineareaComponent);
let DxoStackedsplineareaModule = class DxoStackedsplineareaModule {
};
DxoStackedsplineareaModule = __decorate([
    NgModule({
        declarations: [
            DxoStackedsplineareaComponent
        ],
        exports: [
            DxoStackedsplineareaComponent
        ],
    })
], DxoStackedsplineareaModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStateStoringComponent = class DxoStateStoringComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get customLoad() {
        return this._getOption('customLoad');
    }
    set customLoad(value) {
        this._setOption('customLoad', value);
    }
    get customSave() {
        return this._getOption('customSave');
    }
    set customSave(value) {
        this._setOption('customSave', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get savingTimeout() {
        return this._getOption('savingTimeout');
    }
    set savingTimeout(value) {
        this._setOption('savingTimeout', value);
    }
    get storageKey() {
        return this._getOption('storageKey');
    }
    set storageKey(value) {
        this._setOption('storageKey', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get _optionPath() {
        return 'stateStoring';
    }
};
DxoStateStoringComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoStateStoringComponent.prototype, "customLoad", null);
__decorate([
    Input()
], DxoStateStoringComponent.prototype, "customSave", null);
__decorate([
    Input()
], DxoStateStoringComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoStateStoringComponent.prototype, "savingTimeout", null);
__decorate([
    Input()
], DxoStateStoringComponent.prototype, "storageKey", null);
__decorate([
    Input()
], DxoStateStoringComponent.prototype, "type", null);
DxoStateStoringComponent = __decorate([
    Component({
        selector: 'dxo-state-storing',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStateStoringComponent);
let DxoStateStoringModule = class DxoStateStoringModule {
};
DxoStateStoringModule = __decorate([
    NgModule({
        declarations: [
            DxoStateStoringComponent
        ],
        exports: [
            DxoStateStoringComponent
        ],
    })
], DxoStateStoringModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStepareaComponent = class DxoStepareaComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'steparea';
    }
};
DxoStepareaComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoStepareaComponent = __decorate([
    Component({
        selector: 'dxo-steparea',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStepareaComponent);
let DxoStepareaModule = class DxoStepareaModule {
};
DxoStepareaModule = __decorate([
    NgModule({
        declarations: [
            DxoStepareaComponent
        ],
        exports: [
            DxoStepareaComponent
        ],
    })
], DxoStepareaModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSteplineComponent = class DxoSteplineComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'stepline';
    }
};
DxoSteplineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoSteplineComponent = __decorate([
    Component({
        selector: 'dxo-stepline',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSteplineComponent);
let DxoSteplineModule = class DxoSteplineModule {
};
DxoSteplineModule = __decorate([
    NgModule({
        declarations: [
            DxoSteplineComponent
        ],
        exports: [
            DxoSteplineComponent
        ],
    })
], DxoSteplineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStockComponent = class DxoStockComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'stock';
    }
};
DxoStockComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoStockComponent = __decorate([
    Component({
        selector: 'dxo-stock',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'aggregation',
            'area',
            'argumentField',
            'axis',
            'bar',
            'barOverlapGroup',
            'barPadding',
            'barWidth',
            'border',
            'bubble',
            'candlestick',
            'closeValueField',
            'color',
            'cornerRadius',
            'dashStyle',
            'fullstackedarea',
            'fullstackedbar',
            'fullstackedline',
            'fullstackedspline',
            'fullstackedsplinearea',
            'highValueField',
            'hoverMode',
            'hoverStyle',
            'ignoreEmptyPoints',
            'innerColor',
            'label',
            'line',
            'lowValueField',
            'maxLabelCount',
            'minBarSize',
            'opacity',
            'openValueField',
            'pane',
            'point',
            'rangearea',
            'rangebar',
            'rangeValue1Field',
            'rangeValue2Field',
            'reduction',
            'scatter',
            'selectionMode',
            'selectionStyle',
            'showInLegend',
            'sizeField',
            'spline',
            'splinearea',
            'stack',
            'stackedarea',
            'stackedbar',
            'stackedline',
            'stackedspline',
            'stackedsplinearea',
            'steparea',
            'stepline',
            'stock',
            'tagField',
            'type',
            'valueErrorBar',
            'valueField',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStockComponent);
let DxoStockModule = class DxoStockModule {
};
DxoStockModule = __decorate([
    NgModule({
        declarations: [
            DxoStockComponent
        ],
        exports: [
            DxoStockComponent
        ],
    })
], DxoStockModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStoreComponent = class DxoStoreComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get _optionPath() {
        return 'store';
    }
};
DxoStoreComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoStoreComponent.prototype, "type", null);
DxoStoreComponent = __decorate([
    Component({
        selector: 'dxo-store',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStoreComponent);
let DxoStoreModule = class DxoStoreModule {
};
DxoStoreModule = __decorate([
    NgModule({
        declarations: [
            DxoStoreComponent
        ],
        exports: [
            DxoStoreComponent
        ],
    })
], DxoStoreModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoStripStyleComponent = class DxoStripStyleComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get _optionPath() {
        return 'stripStyle';
    }
};
DxoStripStyleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoStripStyleComponent.prototype, "label", null);
__decorate([
    Input()
], DxoStripStyleComponent.prototype, "paddingLeftRight", null);
__decorate([
    Input()
], DxoStripStyleComponent.prototype, "paddingTopBottom", null);
DxoStripStyleComponent = __decorate([
    Component({
        selector: 'dxo-strip-style',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoStripStyleComponent);
let DxoStripStyleModule = class DxoStripStyleModule {
};
DxoStripStyleModule = __decorate([
    NgModule({
        declarations: [
            DxoStripStyleComponent
        ],
        exports: [
            DxoStripStyleComponent
        ],
    })
], DxoStripStyleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSubtitleComponent = class DxoSubtitleComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get offset() {
        return this._getOption('offset');
    }
    set offset(value) {
        this._setOption('offset', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get textOverflow() {
        return this._getOption('textOverflow');
    }
    set textOverflow(value) {
        this._setOption('textOverflow', value);
    }
    get wordWrap() {
        return this._getOption('wordWrap');
    }
    set wordWrap(value) {
        this._setOption('wordWrap', value);
    }
    get _optionPath() {
        return 'subtitle';
    }
};
DxoSubtitleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSubtitleComponent.prototype, "font", null);
__decorate([
    Input()
], DxoSubtitleComponent.prototype, "offset", null);
__decorate([
    Input()
], DxoSubtitleComponent.prototype, "text", null);
__decorate([
    Input()
], DxoSubtitleComponent.prototype, "textOverflow", null);
__decorate([
    Input()
], DxoSubtitleComponent.prototype, "wordWrap", null);
DxoSubtitleComponent = __decorate([
    Component({
        selector: 'dxo-subtitle',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSubtitleComponent);
let DxoSubtitleModule = class DxoSubtitleModule {
};
DxoSubtitleModule = __decorate([
    NgModule({
        declarations: [
            DxoSubtitleComponent
        ],
        exports: [
            DxoSubtitleComponent
        ],
    })
], DxoSubtitleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoGaugeIndicator extends NestedOption {
    get arrowLength() {
        return this._getOption('arrowLength');
    }
    set arrowLength(value) {
        this._setOption('arrowLength', value);
    }
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    get baseValue() {
        return this._getOption('baseValue');
    }
    set baseValue(value) {
        this._setOption('baseValue', value);
    }
    get beginAdaptingAtRadius() {
        return this._getOption('beginAdaptingAtRadius');
    }
    set beginAdaptingAtRadius(value) {
        this._setOption('beginAdaptingAtRadius', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get horizontalOrientation() {
        return this._getOption('horizontalOrientation');
    }
    set horizontalOrientation(value) {
        this._setOption('horizontalOrientation', value);
    }
    get indentFromCenter() {
        return this._getOption('indentFromCenter');
    }
    set indentFromCenter(value) {
        this._setOption('indentFromCenter', value);
    }
    get length() {
        return this._getOption('length');
    }
    set length(value) {
        this._setOption('length', value);
    }
    get offset() {
        return this._getOption('offset');
    }
    set offset(value) {
        this._setOption('offset', value);
    }
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    get secondColor() {
        return this._getOption('secondColor');
    }
    set secondColor(value) {
        this._setOption('secondColor', value);
    }
    get secondFraction() {
        return this._getOption('secondFraction');
    }
    set secondFraction(value) {
        this._setOption('secondFraction', value);
    }
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
    }
    get spindleGapSize() {
        return this._getOption('spindleGapSize');
    }
    set spindleGapSize(value) {
        this._setOption('spindleGapSize', value);
    }
    get spindleSize() {
        return this._getOption('spindleSize');
    }
    set spindleSize(value) {
        this._setOption('spindleSize', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get verticalOrientation() {
        return this._getOption('verticalOrientation');
    }
    set verticalOrientation(value) {
        this._setOption('verticalOrientation', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSubvalueIndicatorComponent = class DxoSubvalueIndicatorComponent extends DxoGaugeIndicator {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'subvalueIndicator';
    }
};
DxoSubvalueIndicatorComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoSubvalueIndicatorComponent = __decorate([
    Component({
        selector: 'dxo-subvalue-indicator',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'arrowLength',
            'backgroundColor',
            'baseValue',
            'beginAdaptingAtRadius',
            'color',
            'horizontalOrientation',
            'indentFromCenter',
            'length',
            'offset',
            'palette',
            'secondColor',
            'secondFraction',
            'size',
            'spindleGapSize',
            'spindleSize',
            'text',
            'type',
            'verticalOrientation',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSubvalueIndicatorComponent);
let DxoSubvalueIndicatorModule = class DxoSubvalueIndicatorModule {
};
DxoSubvalueIndicatorModule = __decorate([
    NgModule({
        declarations: [
            DxoSubvalueIndicatorComponent
        ],
        exports: [
            DxoSubvalueIndicatorComponent
        ],
    })
], DxoSubvalueIndicatorModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiTotalItemComponent = class DxiTotalItemComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get alignment() {
        return this._getOption('alignment');
    }
    set alignment(value) {
        this._setOption('alignment', value);
    }
    get column() {
        return this._getOption('column');
    }
    set column(value) {
        this._setOption('column', value);
    }
    get cssClass() {
        return this._getOption('cssClass');
    }
    set cssClass(value) {
        this._setOption('cssClass', value);
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get displayFormat() {
        return this._getOption('displayFormat');
    }
    set displayFormat(value) {
        this._setOption('displayFormat', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get showInColumn() {
        return this._getOption('showInColumn');
    }
    set showInColumn(value) {
        this._setOption('showInColumn', value);
    }
    get skipEmptyValues() {
        return this._getOption('skipEmptyValues');
    }
    set skipEmptyValues(value) {
        this._setOption('skipEmptyValues', value);
    }
    get summaryType() {
        return this._getOption('summaryType');
    }
    set summaryType(value) {
        this._setOption('summaryType', value);
    }
    get valueFormat() {
        return this._getOption('valueFormat');
    }
    set valueFormat(value) {
        this._setOption('valueFormat', value);
    }
    get _optionPath() {
        return 'totalItems';
    }
};
DxiTotalItemComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "alignment", null);
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "column", null);
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "cssClass", null);
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "customizeText", null);
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "displayFormat", null);
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "name", null);
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "showInColumn", null);
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "skipEmptyValues", null);
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "summaryType", null);
__decorate([
    Input()
], DxiTotalItemComponent.prototype, "valueFormat", null);
DxiTotalItemComponent = __decorate([
    Component({
        selector: 'dxi-total-item',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiTotalItemComponent);
let DxiTotalItemModule = class DxiTotalItemModule {
};
DxiTotalItemModule = __decorate([
    NgModule({
        declarations: [
            DxiTotalItemComponent
        ],
        exports: [
            DxiTotalItemComponent
        ],
    })
], DxiTotalItemModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoSummaryComponent = class DxoSummaryComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get calculateCustomSummary() {
        return this._getOption('calculateCustomSummary');
    }
    set calculateCustomSummary(value) {
        this._setOption('calculateCustomSummary', value);
    }
    get groupItems() {
        return this._getOption('groupItems');
    }
    set groupItems(value) {
        this._setOption('groupItems', value);
    }
    get recalculateWhileEditing() {
        return this._getOption('recalculateWhileEditing');
    }
    set recalculateWhileEditing(value) {
        this._setOption('recalculateWhileEditing', value);
    }
    get skipEmptyValues() {
        return this._getOption('skipEmptyValues');
    }
    set skipEmptyValues(value) {
        this._setOption('skipEmptyValues', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get totalItems() {
        return this._getOption('totalItems');
    }
    set totalItems(value) {
        this._setOption('totalItems', value);
    }
    get _optionPath() {
        return 'summary';
    }
    get groupItemsChildren() {
        return this._getOption('groupItems');
    }
    set groupItemsChildren(value) {
        this.setChildren('groupItems', value);
    }
    get totalItemsChildren() {
        return this._getOption('totalItems');
    }
    set totalItemsChildren(value) {
        this.setChildren('totalItems', value);
    }
};
DxoSummaryComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoSummaryComponent.prototype, "calculateCustomSummary", null);
__decorate([
    Input()
], DxoSummaryComponent.prototype, "groupItems", null);
__decorate([
    Input()
], DxoSummaryComponent.prototype, "recalculateWhileEditing", null);
__decorate([
    Input()
], DxoSummaryComponent.prototype, "skipEmptyValues", null);
__decorate([
    Input()
], DxoSummaryComponent.prototype, "texts", null);
__decorate([
    Input()
], DxoSummaryComponent.prototype, "totalItems", null);
__decorate([
    ContentChildren(forwardRef(() => DxiGroupItemComponent))
], DxoSummaryComponent.prototype, "groupItemsChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiTotalItemComponent))
], DxoSummaryComponent.prototype, "totalItemsChildren", null);
DxoSummaryComponent = __decorate([
    Component({
        selector: 'dxo-summary',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoSummaryComponent);
let DxoSummaryModule = class DxoSummaryModule {
};
DxoSummaryModule = __decorate([
    NgModule({
        declarations: [
            DxoSummaryComponent
        ],
        exports: [
            DxoSummaryComponent
        ],
    })
], DxoSummaryModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoTabPanelOptions extends NestedOption {
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    get animationEnabled() {
        return this._getOption('animationEnabled');
    }
    set animationEnabled(value) {
        this._setOption('animationEnabled', value);
    }
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    get deferRendering() {
        return this._getOption('deferRendering');
    }
    set deferRendering(value) {
        this._setOption('deferRendering', value);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    get itemHoldTimeout() {
        return this._getOption('itemHoldTimeout');
    }
    set itemHoldTimeout(value) {
        this._setOption('itemHoldTimeout', value);
    }
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    get itemTemplate() {
        return this._getOption('itemTemplate');
    }
    set itemTemplate(value) {
        this._setOption('itemTemplate', value);
    }
    get itemTitleTemplate() {
        return this._getOption('itemTitleTemplate');
    }
    set itemTitleTemplate(value) {
        this._setOption('itemTitleTemplate', value);
    }
    get loop() {
        return this._getOption('loop');
    }
    set loop(value) {
        this._setOption('loop', value);
    }
    get noDataText() {
        return this._getOption('noDataText');
    }
    set noDataText(value) {
        this._setOption('noDataText', value);
    }
    get onContentReady() {
        return this._getOption('onContentReady');
    }
    set onContentReady(value) {
        this._setOption('onContentReady', value);
    }
    get onDisposing() {
        return this._getOption('onDisposing');
    }
    set onDisposing(value) {
        this._setOption('onDisposing', value);
    }
    get onInitialized() {
        return this._getOption('onInitialized');
    }
    set onInitialized(value) {
        this._setOption('onInitialized', value);
    }
    get onItemClick() {
        return this._getOption('onItemClick');
    }
    set onItemClick(value) {
        this._setOption('onItemClick', value);
    }
    get onItemContextMenu() {
        return this._getOption('onItemContextMenu');
    }
    set onItemContextMenu(value) {
        this._setOption('onItemContextMenu', value);
    }
    get onItemHold() {
        return this._getOption('onItemHold');
    }
    set onItemHold(value) {
        this._setOption('onItemHold', value);
    }
    get onItemRendered() {
        return this._getOption('onItemRendered');
    }
    set onItemRendered(value) {
        this._setOption('onItemRendered', value);
    }
    get onOptionChanged() {
        return this._getOption('onOptionChanged');
    }
    set onOptionChanged(value) {
        this._setOption('onOptionChanged', value);
    }
    get onSelectionChanged() {
        return this._getOption('onSelectionChanged');
    }
    set onSelectionChanged(value) {
        this._setOption('onSelectionChanged', value);
    }
    get onTitleClick() {
        return this._getOption('onTitleClick');
    }
    set onTitleClick(value) {
        this._setOption('onTitleClick', value);
    }
    get onTitleHold() {
        return this._getOption('onTitleHold');
    }
    set onTitleHold(value) {
        this._setOption('onTitleHold', value);
    }
    get onTitleRendered() {
        return this._getOption('onTitleRendered');
    }
    set onTitleRendered(value) {
        this._setOption('onTitleRendered', value);
    }
    get repaintChangesOnly() {
        return this._getOption('repaintChangesOnly');
    }
    set repaintChangesOnly(value) {
        this._setOption('repaintChangesOnly', value);
    }
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    get scrollByContent() {
        return this._getOption('scrollByContent');
    }
    set scrollByContent(value) {
        this._setOption('scrollByContent', value);
    }
    get scrollingEnabled() {
        return this._getOption('scrollingEnabled');
    }
    set scrollingEnabled(value) {
        this._setOption('scrollingEnabled', value);
    }
    get selectedIndex() {
        return this._getOption('selectedIndex');
    }
    set selectedIndex(value) {
        this._setOption('selectedIndex', value);
    }
    get selectedItem() {
        return this._getOption('selectedItem');
    }
    set selectedItem(value) {
        this._setOption('selectedItem', value);
    }
    get showNavButtons() {
        return this._getOption('showNavButtons');
    }
    set showNavButtons(value) {
        this._setOption('showNavButtons', value);
    }
    get swipeEnabled() {
        return this._getOption('swipeEnabled');
    }
    set swipeEnabled(value) {
        this._setOption('swipeEnabled', value);
    }
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoTabPanelOptionsComponent = class DxoTabPanelOptionsComponent extends DxoTabPanelOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'itemsChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'tabPanelOptions';
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
};
DxoTabPanelOptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Output()
], DxoTabPanelOptionsComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxoTabPanelOptionsComponent.prototype, "selectedIndexChange", void 0);
__decorate([
    Output()
], DxoTabPanelOptionsComponent.prototype, "selectedItemChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent))
], DxoTabPanelOptionsComponent.prototype, "itemsChildren", null);
DxoTabPanelOptionsComponent = __decorate([
    Component({
        selector: 'dxo-tab-panel-options',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'activeStateEnabled',
            'animationEnabled',
            'dataSource',
            'deferRendering',
            'disabled',
            'elementAttr',
            'focusStateEnabled',
            'height',
            'hint',
            'hoverStateEnabled',
            'itemHoldTimeout',
            'items',
            'itemTemplate',
            'itemTitleTemplate',
            'loop',
            'noDataText',
            'onContentReady',
            'onDisposing',
            'onInitialized',
            'onItemClick',
            'onItemContextMenu',
            'onItemHold',
            'onItemRendered',
            'onOptionChanged',
            'onSelectionChanged',
            'onTitleClick',
            'onTitleHold',
            'onTitleRendered',
            'repaintChangesOnly',
            'rtlEnabled',
            'scrollByContent',
            'scrollingEnabled',
            'selectedIndex',
            'selectedItem',
            'showNavButtons',
            'swipeEnabled',
            'tabIndex',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoTabPanelOptionsComponent);
let DxoTabPanelOptionsModule = class DxoTabPanelOptionsModule {
};
DxoTabPanelOptionsModule = __decorate([
    NgModule({
        declarations: [
            DxoTabPanelOptionsComponent
        ],
        exports: [
            DxoTabPanelOptionsComponent
        ],
    })
], DxoTabPanelOptionsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoTextComponent = class DxoTextComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get customizeText() {
        return this._getOption('customizeText');
    }
    set customizeText(value) {
        this._setOption('customizeText', value);
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get format() {
        return this._getOption('format');
    }
    set format(value) {
        this._setOption('format', value);
    }
    get indent() {
        return this._getOption('indent');
    }
    set indent(value) {
        this._setOption('indent', value);
    }
    get _optionPath() {
        return 'text';
    }
};
DxoTextComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoTextComponent.prototype, "customizeText", null);
__decorate([
    Input()
], DxoTextComponent.prototype, "font", null);
__decorate([
    Input()
], DxoTextComponent.prototype, "format", null);
__decorate([
    Input()
], DxoTextComponent.prototype, "indent", null);
DxoTextComponent = __decorate([
    Component({
        selector: 'dxo-text',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoTextComponent);
let DxoTextModule = class DxoTextModule {
};
DxoTextModule = __decorate([
    NgModule({
        declarations: [
            DxoTextComponent
        ],
        exports: [
            DxoTextComponent
        ],
    })
], DxoTextModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoTextsComponent = class DxoTextsComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get fix() {
        return this._getOption('fix');
    }
    set fix(value) {
        this._setOption('fix', value);
    }
    get leftPosition() {
        return this._getOption('leftPosition');
    }
    set leftPosition(value) {
        this._setOption('leftPosition', value);
    }
    get rightPosition() {
        return this._getOption('rightPosition');
    }
    set rightPosition(value) {
        this._setOption('rightPosition', value);
    }
    get unfix() {
        return this._getOption('unfix');
    }
    set unfix(value) {
        this._setOption('unfix', value);
    }
    get addRow() {
        return this._getOption('addRow');
    }
    set addRow(value) {
        this._setOption('addRow', value);
    }
    get cancelAllChanges() {
        return this._getOption('cancelAllChanges');
    }
    set cancelAllChanges(value) {
        this._setOption('cancelAllChanges', value);
    }
    get cancelRowChanges() {
        return this._getOption('cancelRowChanges');
    }
    set cancelRowChanges(value) {
        this._setOption('cancelRowChanges', value);
    }
    get confirmDeleteMessage() {
        return this._getOption('confirmDeleteMessage');
    }
    set confirmDeleteMessage(value) {
        this._setOption('confirmDeleteMessage', value);
    }
    get confirmDeleteTitle() {
        return this._getOption('confirmDeleteTitle');
    }
    set confirmDeleteTitle(value) {
        this._setOption('confirmDeleteTitle', value);
    }
    get deleteRow() {
        return this._getOption('deleteRow');
    }
    set deleteRow(value) {
        this._setOption('deleteRow', value);
    }
    get editRow() {
        return this._getOption('editRow');
    }
    set editRow(value) {
        this._setOption('editRow', value);
    }
    get saveAllChanges() {
        return this._getOption('saveAllChanges');
    }
    set saveAllChanges(value) {
        this._setOption('saveAllChanges', value);
    }
    get saveRowChanges() {
        return this._getOption('saveRowChanges');
    }
    set saveRowChanges(value) {
        this._setOption('saveRowChanges', value);
    }
    get undeleteRow() {
        return this._getOption('undeleteRow');
    }
    set undeleteRow(value) {
        this._setOption('undeleteRow', value);
    }
    get validationCancelChanges() {
        return this._getOption('validationCancelChanges');
    }
    set validationCancelChanges(value) {
        this._setOption('validationCancelChanges', value);
    }
    get exportAll() {
        return this._getOption('exportAll');
    }
    set exportAll(value) {
        this._setOption('exportAll', value);
    }
    get exportSelectedRows() {
        return this._getOption('exportSelectedRows');
    }
    set exportSelectedRows(value) {
        this._setOption('exportSelectedRows', value);
    }
    get exportTo() {
        return this._getOption('exportTo');
    }
    set exportTo(value) {
        this._setOption('exportTo', value);
    }
    get clearFilter() {
        return this._getOption('clearFilter');
    }
    set clearFilter(value) {
        this._setOption('clearFilter', value);
    }
    get createFilter() {
        return this._getOption('createFilter');
    }
    set createFilter(value) {
        this._setOption('createFilter', value);
    }
    get filterEnabledHint() {
        return this._getOption('filterEnabledHint');
    }
    set filterEnabledHint(value) {
        this._setOption('filterEnabledHint', value);
    }
    get groupByThisColumn() {
        return this._getOption('groupByThisColumn');
    }
    set groupByThisColumn(value) {
        this._setOption('groupByThisColumn', value);
    }
    get groupContinuedMessage() {
        return this._getOption('groupContinuedMessage');
    }
    set groupContinuedMessage(value) {
        this._setOption('groupContinuedMessage', value);
    }
    get groupContinuesMessage() {
        return this._getOption('groupContinuesMessage');
    }
    set groupContinuesMessage(value) {
        this._setOption('groupContinuesMessage', value);
    }
    get ungroup() {
        return this._getOption('ungroup');
    }
    set ungroup(value) {
        this._setOption('ungroup', value);
    }
    get ungroupAll() {
        return this._getOption('ungroupAll');
    }
    set ungroupAll(value) {
        this._setOption('ungroupAll', value);
    }
    get cancel() {
        return this._getOption('cancel');
    }
    set cancel(value) {
        this._setOption('cancel', value);
    }
    get emptyValue() {
        return this._getOption('emptyValue');
    }
    set emptyValue(value) {
        this._setOption('emptyValue', value);
    }
    get ok() {
        return this._getOption('ok');
    }
    set ok(value) {
        this._setOption('ok', value);
    }
    get avg() {
        return this._getOption('avg');
    }
    set avg(value) {
        this._setOption('avg', value);
    }
    get avgOtherColumn() {
        return this._getOption('avgOtherColumn');
    }
    set avgOtherColumn(value) {
        this._setOption('avgOtherColumn', value);
    }
    get count() {
        return this._getOption('count');
    }
    set count(value) {
        this._setOption('count', value);
    }
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    get maxOtherColumn() {
        return this._getOption('maxOtherColumn');
    }
    set maxOtherColumn(value) {
        this._setOption('maxOtherColumn', value);
    }
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    get minOtherColumn() {
        return this._getOption('minOtherColumn');
    }
    set minOtherColumn(value) {
        this._setOption('minOtherColumn', value);
    }
    get sum() {
        return this._getOption('sum');
    }
    set sum(value) {
        this._setOption('sum', value);
    }
    get sumOtherColumn() {
        return this._getOption('sumOtherColumn');
    }
    set sumOtherColumn(value) {
        this._setOption('sumOtherColumn', value);
    }
    get allFields() {
        return this._getOption('allFields');
    }
    set allFields(value) {
        this._setOption('allFields', value);
    }
    get columnFields() {
        return this._getOption('columnFields');
    }
    set columnFields(value) {
        this._setOption('columnFields', value);
    }
    get dataFields() {
        return this._getOption('dataFields');
    }
    set dataFields(value) {
        this._setOption('dataFields', value);
    }
    get filterFields() {
        return this._getOption('filterFields');
    }
    set filterFields(value) {
        this._setOption('filterFields', value);
    }
    get rowFields() {
        return this._getOption('rowFields');
    }
    set rowFields(value) {
        this._setOption('rowFields', value);
    }
    get columnFieldArea() {
        return this._getOption('columnFieldArea');
    }
    set columnFieldArea(value) {
        this._setOption('columnFieldArea', value);
    }
    get dataFieldArea() {
        return this._getOption('dataFieldArea');
    }
    set dataFieldArea(value) {
        this._setOption('dataFieldArea', value);
    }
    get filterFieldArea() {
        return this._getOption('filterFieldArea');
    }
    set filterFieldArea(value) {
        this._setOption('filterFieldArea', value);
    }
    get rowFieldArea() {
        return this._getOption('rowFieldArea');
    }
    set rowFieldArea(value) {
        this._setOption('rowFieldArea', value);
    }
    get collapseAll() {
        return this._getOption('collapseAll');
    }
    set collapseAll(value) {
        this._setOption('collapseAll', value);
    }
    get dataNotAvailable() {
        return this._getOption('dataNotAvailable');
    }
    set dataNotAvailable(value) {
        this._setOption('dataNotAvailable', value);
    }
    get expandAll() {
        return this._getOption('expandAll');
    }
    set expandAll(value) {
        this._setOption('expandAll', value);
    }
    get exportToExcel() {
        return this._getOption('exportToExcel');
    }
    set exportToExcel(value) {
        this._setOption('exportToExcel', value);
    }
    get grandTotal() {
        return this._getOption('grandTotal');
    }
    set grandTotal(value) {
        this._setOption('grandTotal', value);
    }
    get noData() {
        return this._getOption('noData');
    }
    set noData(value) {
        this._setOption('noData', value);
    }
    get removeAllSorting() {
        return this._getOption('removeAllSorting');
    }
    set removeAllSorting(value) {
        this._setOption('removeAllSorting', value);
    }
    get showFieldChooser() {
        return this._getOption('showFieldChooser');
    }
    set showFieldChooser(value) {
        this._setOption('showFieldChooser', value);
    }
    get sortColumnBySummary() {
        return this._getOption('sortColumnBySummary');
    }
    set sortColumnBySummary(value) {
        this._setOption('sortColumnBySummary', value);
    }
    get sortRowBySummary() {
        return this._getOption('sortRowBySummary');
    }
    set sortRowBySummary(value) {
        this._setOption('sortRowBySummary', value);
    }
    get total() {
        return this._getOption('total');
    }
    set total(value) {
        this._setOption('total', value);
    }
    get addRowToNode() {
        return this._getOption('addRowToNode');
    }
    set addRowToNode(value) {
        this._setOption('addRowToNode', value);
    }
    get _optionPath() {
        return 'texts';
    }
};
DxoTextsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoTextsComponent.prototype, "fix", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "leftPosition", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "rightPosition", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "unfix", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "addRow", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "cancelAllChanges", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "cancelRowChanges", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "confirmDeleteMessage", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "confirmDeleteTitle", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "deleteRow", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "editRow", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "saveAllChanges", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "saveRowChanges", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "undeleteRow", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "validationCancelChanges", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "exportAll", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "exportSelectedRows", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "exportTo", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "clearFilter", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "createFilter", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "filterEnabledHint", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "groupByThisColumn", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "groupContinuedMessage", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "groupContinuesMessage", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "ungroup", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "ungroupAll", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "cancel", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "emptyValue", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "ok", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "avg", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "avgOtherColumn", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "count", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "max", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "maxOtherColumn", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "min", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "minOtherColumn", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "sum", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "sumOtherColumn", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "allFields", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "columnFields", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "dataFields", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "filterFields", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "rowFields", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "columnFieldArea", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "dataFieldArea", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "filterFieldArea", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "rowFieldArea", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "collapseAll", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "dataNotAvailable", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "expandAll", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "exportToExcel", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "grandTotal", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "noData", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "removeAllSorting", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "showFieldChooser", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "sortColumnBySummary", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "sortRowBySummary", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "total", null);
__decorate([
    Input()
], DxoTextsComponent.prototype, "addRowToNode", null);
DxoTextsComponent = __decorate([
    Component({
        selector: 'dxo-texts',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoTextsComponent);
let DxoTextsModule = class DxoTextsModule {
};
DxoTextsModule = __decorate([
    NgModule({
        declarations: [
            DxoTextsComponent
        ],
        exports: [
            DxoTextsComponent
        ],
    })
], DxoTextsModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoTickIntervalComponent = class DxoTickIntervalComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get days() {
        return this._getOption('days');
    }
    set days(value) {
        this._setOption('days', value);
    }
    get hours() {
        return this._getOption('hours');
    }
    set hours(value) {
        this._setOption('hours', value);
    }
    get milliseconds() {
        return this._getOption('milliseconds');
    }
    set milliseconds(value) {
        this._setOption('milliseconds', value);
    }
    get minutes() {
        return this._getOption('minutes');
    }
    set minutes(value) {
        this._setOption('minutes', value);
    }
    get months() {
        return this._getOption('months');
    }
    set months(value) {
        this._setOption('months', value);
    }
    get quarters() {
        return this._getOption('quarters');
    }
    set quarters(value) {
        this._setOption('quarters', value);
    }
    get seconds() {
        return this._getOption('seconds');
    }
    set seconds(value) {
        this._setOption('seconds', value);
    }
    get weeks() {
        return this._getOption('weeks');
    }
    set weeks(value) {
        this._setOption('weeks', value);
    }
    get years() {
        return this._getOption('years');
    }
    set years(value) {
        this._setOption('years', value);
    }
    get _optionPath() {
        return 'tickInterval';
    }
};
DxoTickIntervalComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoTickIntervalComponent.prototype, "days", null);
__decorate([
    Input()
], DxoTickIntervalComponent.prototype, "hours", null);
__decorate([
    Input()
], DxoTickIntervalComponent.prototype, "milliseconds", null);
__decorate([
    Input()
], DxoTickIntervalComponent.prototype, "minutes", null);
__decorate([
    Input()
], DxoTickIntervalComponent.prototype, "months", null);
__decorate([
    Input()
], DxoTickIntervalComponent.prototype, "quarters", null);
__decorate([
    Input()
], DxoTickIntervalComponent.prototype, "seconds", null);
__decorate([
    Input()
], DxoTickIntervalComponent.prototype, "weeks", null);
__decorate([
    Input()
], DxoTickIntervalComponent.prototype, "years", null);
DxoTickIntervalComponent = __decorate([
    Component({
        selector: 'dxo-tick-interval',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoTickIntervalComponent);
let DxoTickIntervalModule = class DxoTickIntervalModule {
};
DxoTickIntervalModule = __decorate([
    NgModule({
        declarations: [
            DxoTickIntervalComponent
        ],
        exports: [
            DxoTickIntervalComponent
        ],
    })
], DxoTickIntervalModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoTickComponent = class DxoTickComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get length() {
        return this._getOption('length');
    }
    set length(value) {
        this._setOption('length', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get shift() {
        return this._getOption('shift');
    }
    set shift(value) {
        this._setOption('shift', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'tick';
    }
};
DxoTickComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoTickComponent.prototype, "color", null);
__decorate([
    Input()
], DxoTickComponent.prototype, "length", null);
__decorate([
    Input()
], DxoTickComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoTickComponent.prototype, "shift", null);
__decorate([
    Input()
], DxoTickComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoTickComponent.prototype, "width", null);
DxoTickComponent = __decorate([
    Component({
        selector: 'dxo-tick',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoTickComponent);
let DxoTickModule = class DxoTickModule {
};
DxoTickModule = __decorate([
    NgModule({
        declarations: [
            DxoTickComponent
        ],
        exports: [
            DxoTickComponent
        ],
    })
], DxoTickModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoTileComponent = class DxoTileComponent extends NestedOption {
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
        return 'tile';
    }
};
DxoTileComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoTileComponent.prototype, "border", null);
__decorate([
    Input()
], DxoTileComponent.prototype, "color", null);
__decorate([
    Input()
], DxoTileComponent.prototype, "hoverStyle", null);
__decorate([
    Input()
], DxoTileComponent.prototype, "label", null);
__decorate([
    Input()
], DxoTileComponent.prototype, "selectionStyle", null);
DxoTileComponent = __decorate([
    Component({
        selector: 'dxo-tile',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoTileComponent);
let DxoTileModule = class DxoTileModule {
};
DxoTileModule = __decorate([
    NgModule({
        declarations: [
            DxoTileComponent
        ],
        exports: [
            DxoTileComponent
        ],
    })
], DxoTileModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoTitleComponent = class DxoTitleComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get horizontalAlignment() {
        return this._getOption('horizontalAlignment');
    }
    set horizontalAlignment(value) {
        this._setOption('horizontalAlignment', value);
    }
    get margin() {
        return this._getOption('margin');
    }
    set margin(value) {
        this._setOption('margin', value);
    }
    get placeholderSize() {
        return this._getOption('placeholderSize');
    }
    set placeholderSize(value) {
        this._setOption('placeholderSize', value);
    }
    get subtitle() {
        return this._getOption('subtitle');
    }
    set subtitle(value) {
        this._setOption('subtitle', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get verticalAlignment() {
        return this._getOption('verticalAlignment');
    }
    set verticalAlignment(value) {
        this._setOption('verticalAlignment', value);
    }
    get textOverflow() {
        return this._getOption('textOverflow');
    }
    set textOverflow(value) {
        this._setOption('textOverflow', value);
    }
    get wordWrap() {
        return this._getOption('wordWrap');
    }
    set wordWrap(value) {
        this._setOption('wordWrap', value);
    }
    get alignment() {
        return this._getOption('alignment');
    }
    set alignment(value) {
        this._setOption('alignment', value);
    }
    get _optionPath() {
        return 'title';
    }
};
DxoTitleComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoTitleComponent.prototype, "font", null);
__decorate([
    Input()
], DxoTitleComponent.prototype, "horizontalAlignment", null);
__decorate([
    Input()
], DxoTitleComponent.prototype, "margin", null);
__decorate([
    Input()
], DxoTitleComponent.prototype, "placeholderSize", null);
__decorate([
    Input()
], DxoTitleComponent.prototype, "subtitle", null);
__decorate([
    Input()
], DxoTitleComponent.prototype, "text", null);
__decorate([
    Input()
], DxoTitleComponent.prototype, "verticalAlignment", null);
__decorate([
    Input()
], DxoTitleComponent.prototype, "textOverflow", null);
__decorate([
    Input()
], DxoTitleComponent.prototype, "wordWrap", null);
__decorate([
    Input()
], DxoTitleComponent.prototype, "alignment", null);
DxoTitleComponent = __decorate([
    Component({
        selector: 'dxo-title',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoTitleComponent);
let DxoTitleModule = class DxoTitleModule {
};
DxoTitleModule = __decorate([
    NgModule({
        declarations: [
            DxoTitleComponent
        ],
        exports: [
            DxoTitleComponent
        ],
    })
], DxoTitleModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoHtmlEditorToolbar extends NestedOption {
    get container() {
        return this._getOption('container');
    }
    set container(value) {
        this._setOption('container', value);
    }
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoToolbarComponent = class DxoToolbarComponent extends DxoHtmlEditorToolbar {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'toolbar';
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
};
DxoToolbarComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent))
], DxoToolbarComponent.prototype, "itemsChildren", null);
DxoToolbarComponent = __decorate([
    Component({
        selector: 'dxo-toolbar',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'container',
            'items'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoToolbarComponent);
let DxoToolbarModule = class DxoToolbarModule {
};
DxoToolbarModule = __decorate([
    NgModule({
        declarations: [
            DxoToolbarComponent
        ],
        exports: [
            DxoToolbarComponent
        ],
    })
], DxoToolbarModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoTooltipComponent = class DxoTooltipComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get arrowLength() {
        return this._getOption('arrowLength');
    }
    set arrowLength(value) {
        this._setOption('arrowLength', value);
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
    get container() {
        return this._getOption('container');
    }
    set container(value) {
        this._setOption('container', value);
    }
    get cornerRadius() {
        return this._getOption('cornerRadius');
    }
    set cornerRadius(value) {
        this._setOption('cornerRadius', value);
    }
    get customizeTooltip() {
        return this._getOption('customizeTooltip');
    }
    set customizeTooltip(value) {
        this._setOption('customizeTooltip', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get font() {
        return this._getOption('font');
    }
    set font(value) {
        this._setOption('font', value);
    }
    get format() {
        return this._getOption('format');
    }
    set format(value) {
        this._setOption('format', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get paddingLeftRight() {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value) {
        this._setOption('paddingLeftRight', value);
    }
    get paddingTopBottom() {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value) {
        this._setOption('paddingTopBottom', value);
    }
    get shadow() {
        return this._getOption('shadow');
    }
    set shadow(value) {
        this._setOption('shadow', value);
    }
    get zIndex() {
        return this._getOption('zIndex');
    }
    set zIndex(value) {
        this._setOption('zIndex', value);
    }
    get argumentFormat() {
        return this._getOption('argumentFormat');
    }
    set argumentFormat(value) {
        this._setOption('argumentFormat', value);
    }
    get location() {
        return this._getOption('location');
    }
    set location(value) {
        this._setOption('location', value);
    }
    get shared() {
        return this._getOption('shared');
    }
    set shared(value) {
        this._setOption('shared', value);
    }
    get isShown() {
        return this._getOption('isShown');
    }
    set isShown(value) {
        this._setOption('isShown', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
    }
    get showMode() {
        return this._getOption('showMode');
    }
    set showMode(value) {
        this._setOption('showMode', value);
    }
    get customizeLinkTooltip() {
        return this._getOption('customizeLinkTooltip');
    }
    set customizeLinkTooltip(value) {
        this._setOption('customizeLinkTooltip', value);
    }
    get customizeNodeTooltip() {
        return this._getOption('customizeNodeTooltip');
    }
    set customizeNodeTooltip(value) {
        this._setOption('customizeNodeTooltip', value);
    }
    get _optionPath() {
        return 'tooltip';
    }
};
DxoTooltipComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoTooltipComponent.prototype, "arrowLength", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "border", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "color", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "container", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "cornerRadius", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "customizeTooltip", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "enabled", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "font", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "format", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "paddingLeftRight", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "paddingTopBottom", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "shadow", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "zIndex", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "argumentFormat", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "location", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "shared", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "isShown", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "text", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "position", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "showMode", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "customizeLinkTooltip", null);
__decorate([
    Input()
], DxoTooltipComponent.prototype, "customizeNodeTooltip", null);
DxoTooltipComponent = __decorate([
    Component({
        selector: 'dxo-tooltip',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoTooltipComponent);
let DxoTooltipModule = class DxoTooltipModule {
};
DxoTooltipModule = __decorate([
    NgModule({
        declarations: [
            DxoTooltipComponent
        ],
        exports: [
            DxoTooltipComponent
        ],
    })
], DxoTooltipModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoUrlComponent = class DxoUrlComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get rangeMaxPoint() {
        return this._getOption('rangeMaxPoint');
    }
    set rangeMaxPoint(value) {
        this._setOption('rangeMaxPoint', value);
    }
    get rangeMinPoint() {
        return this._getOption('rangeMinPoint');
    }
    set rangeMinPoint(value) {
        this._setOption('rangeMinPoint', value);
    }
    get _optionPath() {
        return 'url';
    }
};
DxoUrlComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoUrlComponent.prototype, "rangeMaxPoint", null);
__decorate([
    Input()
], DxoUrlComponent.prototype, "rangeMinPoint", null);
DxoUrlComponent = __decorate([
    Component({
        selector: 'dxo-url',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoUrlComponent);
let DxoUrlModule = class DxoUrlModule {
};
DxoUrlModule = __decorate([
    NgModule({
        declarations: [
            DxoUrlComponent
        ],
        exports: [
            DxoUrlComponent
        ],
    })
], DxoUrlModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiValueAxisComponent = class DxiValueAxisComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'visualRangeChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowDecimals() {
        return this._getOption('allowDecimals');
    }
    set allowDecimals(value) {
        this._setOption('allowDecimals', value);
    }
    get autoBreaksEnabled() {
        return this._getOption('autoBreaksEnabled');
    }
    set autoBreaksEnabled(value) {
        this._setOption('autoBreaksEnabled', value);
    }
    get axisDivisionFactor() {
        return this._getOption('axisDivisionFactor');
    }
    set axisDivisionFactor(value) {
        this._setOption('axisDivisionFactor', value);
    }
    get breaks() {
        return this._getOption('breaks');
    }
    set breaks(value) {
        this._setOption('breaks', value);
    }
    get breakStyle() {
        return this._getOption('breakStyle');
    }
    set breakStyle(value) {
        this._setOption('breakStyle', value);
    }
    get categories() {
        return this._getOption('categories');
    }
    set categories(value) {
        this._setOption('categories', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get constantLines() {
        return this._getOption('constantLines');
    }
    set constantLines(value) {
        this._setOption('constantLines', value);
    }
    get constantLineStyle() {
        return this._getOption('constantLineStyle');
    }
    set constantLineStyle(value) {
        this._setOption('constantLineStyle', value);
    }
    get discreteAxisDivisionMode() {
        return this._getOption('discreteAxisDivisionMode');
    }
    set discreteAxisDivisionMode(value) {
        this._setOption('discreteAxisDivisionMode', value);
    }
    get endOnTick() {
        return this._getOption('endOnTick');
    }
    set endOnTick(value) {
        this._setOption('endOnTick', value);
    }
    get grid() {
        return this._getOption('grid');
    }
    set grid(value) {
        this._setOption('grid', value);
    }
    get inverted() {
        return this._getOption('inverted');
    }
    set inverted(value) {
        this._setOption('inverted', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get logarithmBase() {
        return this._getOption('logarithmBase');
    }
    set logarithmBase(value) {
        this._setOption('logarithmBase', value);
    }
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    get maxAutoBreakCount() {
        return this._getOption('maxAutoBreakCount');
    }
    set maxAutoBreakCount(value) {
        this._setOption('maxAutoBreakCount', value);
    }
    get maxValueMargin() {
        return this._getOption('maxValueMargin');
    }
    set maxValueMargin(value) {
        this._setOption('maxValueMargin', value);
    }
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    get minorGrid() {
        return this._getOption('minorGrid');
    }
    set minorGrid(value) {
        this._setOption('minorGrid', value);
    }
    get minorTick() {
        return this._getOption('minorTick');
    }
    set minorTick(value) {
        this._setOption('minorTick', value);
    }
    get minorTickCount() {
        return this._getOption('minorTickCount');
    }
    set minorTickCount(value) {
        this._setOption('minorTickCount', value);
    }
    get minorTickInterval() {
        return this._getOption('minorTickInterval');
    }
    set minorTickInterval(value) {
        this._setOption('minorTickInterval', value);
    }
    get minValueMargin() {
        return this._getOption('minValueMargin');
    }
    set minValueMargin(value) {
        this._setOption('minValueMargin', value);
    }
    get minVisualRangeLength() {
        return this._getOption('minVisualRangeLength');
    }
    set minVisualRangeLength(value) {
        this._setOption('minVisualRangeLength', value);
    }
    get multipleAxesSpacing() {
        return this._getOption('multipleAxesSpacing');
    }
    set multipleAxesSpacing(value) {
        this._setOption('multipleAxesSpacing', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get pane() {
        return this._getOption('pane');
    }
    set pane(value) {
        this._setOption('pane', value);
    }
    get placeholderSize() {
        return this._getOption('placeholderSize');
    }
    set placeholderSize(value) {
        this._setOption('placeholderSize', value);
    }
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
    }
    get showZero() {
        return this._getOption('showZero');
    }
    set showZero(value) {
        this._setOption('showZero', value);
    }
    get strips() {
        return this._getOption('strips');
    }
    set strips(value) {
        this._setOption('strips', value);
    }
    get stripStyle() {
        return this._getOption('stripStyle');
    }
    set stripStyle(value) {
        this._setOption('stripStyle', value);
    }
    get synchronizedValue() {
        return this._getOption('synchronizedValue');
    }
    set synchronizedValue(value) {
        this._setOption('synchronizedValue', value);
    }
    get tick() {
        return this._getOption('tick');
    }
    set tick(value) {
        this._setOption('tick', value);
    }
    get tickInterval() {
        return this._getOption('tickInterval');
    }
    set tickInterval(value) {
        this._setOption('tickInterval', value);
    }
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get valueMarginsEnabled() {
        return this._getOption('valueMarginsEnabled');
    }
    set valueMarginsEnabled(value) {
        this._setOption('valueMarginsEnabled', value);
    }
    get valueType() {
        return this._getOption('valueType');
    }
    set valueType(value) {
        this._setOption('valueType', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get visualRange() {
        return this._getOption('visualRange');
    }
    set visualRange(value) {
        this._setOption('visualRange', value);
    }
    get visualRangeUpdateMode() {
        return this._getOption('visualRangeUpdateMode');
    }
    set visualRangeUpdateMode(value) {
        this._setOption('visualRangeUpdateMode', value);
    }
    get wholeRange() {
        return this._getOption('wholeRange');
    }
    set wholeRange(value) {
        this._setOption('wholeRange', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'valueAxis';
    }
    get breaksChildren() {
        return this._getOption('breaks');
    }
    set breaksChildren(value) {
        this.setChildren('breaks', value);
    }
    get constantLinesChildren() {
        return this._getOption('constantLines');
    }
    set constantLinesChildren(value) {
        this.setChildren('constantLines', value);
    }
    get stripsChildren() {
        return this._getOption('strips');
    }
    set stripsChildren(value) {
        this.setChildren('strips', value);
    }
};
DxiValueAxisComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "allowDecimals", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "autoBreaksEnabled", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "axisDivisionFactor", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "breaks", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "breakStyle", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "categories", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "color", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "constantLines", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "constantLineStyle", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "discreteAxisDivisionMode", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "endOnTick", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "grid", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "inverted", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "label", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "logarithmBase", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "max", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "maxAutoBreakCount", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "maxValueMargin", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "min", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "minorGrid", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "minorTick", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "minorTickCount", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "minorTickInterval", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "minValueMargin", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "minVisualRangeLength", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "multipleAxesSpacing", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "name", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "pane", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "placeholderSize", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "position", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "showZero", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "strips", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "stripStyle", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "synchronizedValue", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "tick", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "tickInterval", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "title", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "type", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "valueMarginsEnabled", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "valueType", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "visible", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "visualRange", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "visualRangeUpdateMode", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "wholeRange", null);
__decorate([
    Input()
], DxiValueAxisComponent.prototype, "width", null);
__decorate([
    Output()
], DxiValueAxisComponent.prototype, "visualRangeChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => DxiBreakComponent))
], DxiValueAxisComponent.prototype, "breaksChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiConstantLineComponent))
], DxiValueAxisComponent.prototype, "constantLinesChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiStripComponent))
], DxiValueAxisComponent.prototype, "stripsChildren", null);
DxiValueAxisComponent = __decorate([
    Component({
        selector: 'dxi-value-axis',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiValueAxisComponent);
let DxiValueAxisModule = class DxiValueAxisModule {
};
DxiValueAxisModule = __decorate([
    NgModule({
        declarations: [
            DxiValueAxisComponent
        ],
        exports: [
            DxiValueAxisComponent
        ],
    })
], DxiValueAxisModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoValueAxisComponent = class DxoValueAxisComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowDecimals() {
        return this._getOption('allowDecimals');
    }
    set allowDecimals(value) {
        this._setOption('allowDecimals', value);
    }
    get axisDivisionFactor() {
        return this._getOption('axisDivisionFactor');
    }
    set axisDivisionFactor(value) {
        this._setOption('axisDivisionFactor', value);
    }
    get categories() {
        return this._getOption('categories');
    }
    set categories(value) {
        this._setOption('categories', value);
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get constantLines() {
        return this._getOption('constantLines');
    }
    set constantLines(value) {
        this._setOption('constantLines', value);
    }
    get constantLineStyle() {
        return this._getOption('constantLineStyle');
    }
    set constantLineStyle(value) {
        this._setOption('constantLineStyle', value);
    }
    get discreteAxisDivisionMode() {
        return this._getOption('discreteAxisDivisionMode');
    }
    set discreteAxisDivisionMode(value) {
        this._setOption('discreteAxisDivisionMode', value);
    }
    get endOnTick() {
        return this._getOption('endOnTick');
    }
    set endOnTick(value) {
        this._setOption('endOnTick', value);
    }
    get grid() {
        return this._getOption('grid');
    }
    set grid(value) {
        this._setOption('grid', value);
    }
    get inverted() {
        return this._getOption('inverted');
    }
    set inverted(value) {
        this._setOption('inverted', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get logarithmBase() {
        return this._getOption('logarithmBase');
    }
    set logarithmBase(value) {
        this._setOption('logarithmBase', value);
    }
    get maxValueMargin() {
        return this._getOption('maxValueMargin');
    }
    set maxValueMargin(value) {
        this._setOption('maxValueMargin', value);
    }
    get minorGrid() {
        return this._getOption('minorGrid');
    }
    set minorGrid(value) {
        this._setOption('minorGrid', value);
    }
    get minorTick() {
        return this._getOption('minorTick');
    }
    set minorTick(value) {
        this._setOption('minorTick', value);
    }
    get minorTickCount() {
        return this._getOption('minorTickCount');
    }
    set minorTickCount(value) {
        this._setOption('minorTickCount', value);
    }
    get minorTickInterval() {
        return this._getOption('minorTickInterval');
    }
    set minorTickInterval(value) {
        this._setOption('minorTickInterval', value);
    }
    get minValueMargin() {
        return this._getOption('minValueMargin');
    }
    set minValueMargin(value) {
        this._setOption('minValueMargin', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get showZero() {
        return this._getOption('showZero');
    }
    set showZero(value) {
        this._setOption('showZero', value);
    }
    get strips() {
        return this._getOption('strips');
    }
    set strips(value) {
        this._setOption('strips', value);
    }
    get stripStyle() {
        return this._getOption('stripStyle');
    }
    set stripStyle(value) {
        this._setOption('stripStyle', value);
    }
    get tick() {
        return this._getOption('tick');
    }
    set tick(value) {
        this._setOption('tick', value);
    }
    get tickInterval() {
        return this._getOption('tickInterval');
    }
    set tickInterval(value) {
        this._setOption('tickInterval', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get valueMarginsEnabled() {
        return this._getOption('valueMarginsEnabled');
    }
    set valueMarginsEnabled(value) {
        this._setOption('valueMarginsEnabled', value);
    }
    get valueType() {
        return this._getOption('valueType');
    }
    set valueType(value) {
        this._setOption('valueType', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    get _optionPath() {
        return 'valueAxis';
    }
    get constantLinesChildren() {
        return this._getOption('constantLines');
    }
    set constantLinesChildren(value) {
        this.setChildren('constantLines', value);
    }
    get stripsChildren() {
        return this._getOption('strips');
    }
    set stripsChildren(value) {
        this.setChildren('strips', value);
    }
};
DxoValueAxisComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "allowDecimals", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "axisDivisionFactor", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "categories", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "color", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "constantLines", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "constantLineStyle", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "discreteAxisDivisionMode", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "endOnTick", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "grid", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "inverted", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "label", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "logarithmBase", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "maxValueMargin", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "minorGrid", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "minorTick", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "minorTickCount", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "minorTickInterval", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "minValueMargin", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "showZero", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "strips", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "stripStyle", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "tick", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "tickInterval", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "type", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "valueMarginsEnabled", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "valueType", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "width", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "max", null);
__decorate([
    Input()
], DxoValueAxisComponent.prototype, "min", null);
__decorate([
    ContentChildren(forwardRef(() => DxiConstantLineComponent))
], DxoValueAxisComponent.prototype, "constantLinesChildren", null);
__decorate([
    ContentChildren(forwardRef(() => DxiStripComponent))
], DxoValueAxisComponent.prototype, "stripsChildren", null);
DxoValueAxisComponent = __decorate([
    Component({
        selector: 'dxo-value-axis',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoValueAxisComponent);
let DxoValueAxisModule = class DxoValueAxisModule {
};
DxoValueAxisModule = __decorate([
    NgModule({
        declarations: [
            DxoValueAxisComponent
        ],
        exports: [
            DxoValueAxisComponent
        ],
    })
], DxoValueAxisModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoValueErrorBarComponent = class DxoValueErrorBarComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get displayMode() {
        return this._getOption('displayMode');
    }
    set displayMode(value) {
        this._setOption('displayMode', value);
    }
    get edgeLength() {
        return this._getOption('edgeLength');
    }
    set edgeLength(value) {
        this._setOption('edgeLength', value);
    }
    get highValueField() {
        return this._getOption('highValueField');
    }
    set highValueField(value) {
        this._setOption('highValueField', value);
    }
    get lineWidth() {
        return this._getOption('lineWidth');
    }
    set lineWidth(value) {
        this._setOption('lineWidth', value);
    }
    get lowValueField() {
        return this._getOption('lowValueField');
    }
    set lowValueField(value) {
        this._setOption('lowValueField', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    get _optionPath() {
        return 'valueErrorBar';
    }
};
DxoValueErrorBarComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoValueErrorBarComponent.prototype, "color", null);
__decorate([
    Input()
], DxoValueErrorBarComponent.prototype, "displayMode", null);
__decorate([
    Input()
], DxoValueErrorBarComponent.prototype, "edgeLength", null);
__decorate([
    Input()
], DxoValueErrorBarComponent.prototype, "highValueField", null);
__decorate([
    Input()
], DxoValueErrorBarComponent.prototype, "lineWidth", null);
__decorate([
    Input()
], DxoValueErrorBarComponent.prototype, "lowValueField", null);
__decorate([
    Input()
], DxoValueErrorBarComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoValueErrorBarComponent.prototype, "type", null);
__decorate([
    Input()
], DxoValueErrorBarComponent.prototype, "value", null);
DxoValueErrorBarComponent = __decorate([
    Component({
        selector: 'dxo-value-error-bar',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoValueErrorBarComponent);
let DxoValueErrorBarModule = class DxoValueErrorBarModule {
};
DxoValueErrorBarModule = __decorate([
    NgModule({
        declarations: [
            DxoValueErrorBarComponent
        ],
        exports: [
            DxoValueErrorBarComponent
        ],
    })
], DxoValueErrorBarModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoValueFormatComponent = class DxoValueFormatComponent extends DxoFormat {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'valueFormat';
    }
};
DxoValueFormatComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoValueFormatComponent = __decorate([
    Component({
        selector: 'dxo-value-format',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'currency',
            'formatter',
            'parser',
            'precision',
            'type'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoValueFormatComponent);
let DxoValueFormatModule = class DxoValueFormatModule {
};
DxoValueFormatModule = __decorate([
    NgModule({
        declarations: [
            DxoValueFormatComponent
        ],
        exports: [
            DxoValueFormatComponent
        ],
    })
], DxoValueFormatModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoValueIndicatorComponent = class DxoValueIndicatorComponent extends DxoGaugeIndicator {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'valueIndicator';
    }
};
DxoValueIndicatorComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoValueIndicatorComponent = __decorate([
    Component({
        selector: 'dxo-value-indicator',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'arrowLength',
            'backgroundColor',
            'baseValue',
            'beginAdaptingAtRadius',
            'color',
            'horizontalOrientation',
            'indentFromCenter',
            'length',
            'offset',
            'palette',
            'secondColor',
            'secondFraction',
            'size',
            'spindleGapSize',
            'spindleSize',
            'text',
            'type',
            'verticalOrientation',
            'width'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoValueIndicatorComponent);
let DxoValueIndicatorModule = class DxoValueIndicatorModule {
};
DxoValueIndicatorModule = __decorate([
    NgModule({
        declarations: [
            DxoValueIndicatorComponent
        ],
        exports: [
            DxoValueIndicatorComponent
        ],
    })
], DxoValueIndicatorModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
class DxoHtmlEditorVariables extends NestedOption {
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    get escapeChar() {
        return this._getOption('escapeChar');
    }
    set escapeChar(value) {
        this._setOption('escapeChar', value);
    }
}

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoVariablesComponent = class DxoVariablesComponent extends DxoHtmlEditorVariables {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'variables';
    }
};
DxoVariablesComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoVariablesComponent = __decorate([
    Component({
        selector: 'dxo-variables',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'dataSource',
            'escapeChar'
        ],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoVariablesComponent);
let DxoVariablesModule = class DxoVariablesModule {
};
DxoVariablesModule = __decorate([
    NgModule({
        declarations: [
            DxoVariablesComponent
        ],
        exports: [
            DxoVariablesComponent
        ],
    })
], DxoVariablesModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoVerticalLineComponent = class DxoVerticalLineComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get color() {
        return this._getOption('color');
    }
    set color(value) {
        this._setOption('color', value);
    }
    get dashStyle() {
        return this._getOption('dashStyle');
    }
    set dashStyle(value) {
        this._setOption('dashStyle', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get opacity() {
        return this._getOption('opacity');
    }
    set opacity(value) {
        this._setOption('opacity', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get _optionPath() {
        return 'verticalLine';
    }
};
DxoVerticalLineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoVerticalLineComponent.prototype, "color", null);
__decorate([
    Input()
], DxoVerticalLineComponent.prototype, "dashStyle", null);
__decorate([
    Input()
], DxoVerticalLineComponent.prototype, "label", null);
__decorate([
    Input()
], DxoVerticalLineComponent.prototype, "opacity", null);
__decorate([
    Input()
], DxoVerticalLineComponent.prototype, "visible", null);
__decorate([
    Input()
], DxoVerticalLineComponent.prototype, "width", null);
DxoVerticalLineComponent = __decorate([
    Component({
        selector: 'dxo-vertical-line',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoVerticalLineComponent);
let DxoVerticalLineModule = class DxoVerticalLineModule {
};
DxoVerticalLineModule = __decorate([
    NgModule({
        declarations: [
            DxoVerticalLineComponent
        ],
        exports: [
            DxoVerticalLineComponent
        ],
    })
], DxoVerticalLineModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxiViewComponent = class DxiViewComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get agendaDuration() {
        return this._getOption('agendaDuration');
    }
    set agendaDuration(value) {
        this._setOption('agendaDuration', value);
    }
    get appointmentCollectorTemplate() {
        return this._getOption('appointmentCollectorTemplate');
    }
    set appointmentCollectorTemplate(value) {
        this._setOption('appointmentCollectorTemplate', value);
    }
    get appointmentTemplate() {
        return this._getOption('appointmentTemplate');
    }
    set appointmentTemplate(value) {
        this._setOption('appointmentTemplate', value);
    }
    get appointmentTooltipTemplate() {
        return this._getOption('appointmentTooltipTemplate');
    }
    set appointmentTooltipTemplate(value) {
        this._setOption('appointmentTooltipTemplate', value);
    }
    get cellDuration() {
        return this._getOption('cellDuration');
    }
    set cellDuration(value) {
        this._setOption('cellDuration', value);
    }
    get dataCellTemplate() {
        return this._getOption('dataCellTemplate');
    }
    set dataCellTemplate(value) {
        this._setOption('dataCellTemplate', value);
    }
    get dateCellTemplate() {
        return this._getOption('dateCellTemplate');
    }
    set dateCellTemplate(value) {
        this._setOption('dateCellTemplate', value);
    }
    get dropDownAppointmentTemplate() {
        return this._getOption('dropDownAppointmentTemplate');
    }
    set dropDownAppointmentTemplate(value) {
        this._setOption('dropDownAppointmentTemplate', value);
    }
    get endDayHour() {
        return this._getOption('endDayHour');
    }
    set endDayHour(value) {
        this._setOption('endDayHour', value);
    }
    get firstDayOfWeek() {
        return this._getOption('firstDayOfWeek');
    }
    set firstDayOfWeek(value) {
        this._setOption('firstDayOfWeek', value);
    }
    get groupByDate() {
        return this._getOption('groupByDate');
    }
    set groupByDate(value) {
        this._setOption('groupByDate', value);
    }
    get groupOrientation() {
        return this._getOption('groupOrientation');
    }
    set groupOrientation(value) {
        this._setOption('groupOrientation', value);
    }
    get groups() {
        return this._getOption('groups');
    }
    set groups(value) {
        this._setOption('groups', value);
    }
    get intervalCount() {
        return this._getOption('intervalCount');
    }
    set intervalCount(value) {
        this._setOption('intervalCount', value);
    }
    get maxAppointmentsPerCell() {
        return this._getOption('maxAppointmentsPerCell');
    }
    set maxAppointmentsPerCell(value) {
        this._setOption('maxAppointmentsPerCell', value);
    }
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    get resourceCellTemplate() {
        return this._getOption('resourceCellTemplate');
    }
    set resourceCellTemplate(value) {
        this._setOption('resourceCellTemplate', value);
    }
    get startDate() {
        return this._getOption('startDate');
    }
    set startDate(value) {
        this._setOption('startDate', value);
    }
    get startDayHour() {
        return this._getOption('startDayHour');
    }
    set startDayHour(value) {
        this._setOption('startDayHour', value);
    }
    get timeCellTemplate() {
        return this._getOption('timeCellTemplate');
    }
    set timeCellTemplate(value) {
        this._setOption('timeCellTemplate', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get _optionPath() {
        return 'views';
    }
};
DxiViewComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxiViewComponent.prototype, "agendaDuration", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "appointmentCollectorTemplate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "appointmentTemplate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "appointmentTooltipTemplate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "cellDuration", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "dataCellTemplate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "dateCellTemplate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "dropDownAppointmentTemplate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "endDayHour", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "firstDayOfWeek", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "groupByDate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "groupOrientation", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "groups", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "intervalCount", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "maxAppointmentsPerCell", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "name", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "resourceCellTemplate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "startDate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "startDayHour", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "timeCellTemplate", null);
__decorate([
    Input()
], DxiViewComponent.prototype, "type", null);
DxiViewComponent = __decorate([
    Component({
        selector: 'dxi-view',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxiViewComponent);
let DxiViewModule = class DxiViewModule {
};
DxiViewModule = __decorate([
    NgModule({
        declarations: [
            DxiViewComponent
        ],
        exports: [
            DxiViewComponent
        ],
    })
], DxiViewModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoWidthComponent = class DxoWidthComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get rangeMaxPoint() {
        return this._getOption('rangeMaxPoint');
    }
    set rangeMaxPoint(value) {
        this._setOption('rangeMaxPoint', value);
    }
    get rangeMinPoint() {
        return this._getOption('rangeMinPoint');
    }
    set rangeMinPoint(value) {
        this._setOption('rangeMinPoint', value);
    }
    get end() {
        return this._getOption('end');
    }
    set end(value) {
        this._setOption('end', value);
    }
    get start() {
        return this._getOption('start');
    }
    set start(value) {
        this._setOption('start', value);
    }
    get _optionPath() {
        return 'width';
    }
};
DxoWidthComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoWidthComponent.prototype, "rangeMaxPoint", null);
__decorate([
    Input()
], DxoWidthComponent.prototype, "rangeMinPoint", null);
__decorate([
    Input()
], DxoWidthComponent.prototype, "end", null);
__decorate([
    Input()
], DxoWidthComponent.prototype, "start", null);
DxoWidthComponent = __decorate([
    Component({
        selector: 'dxo-width',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoWidthComponent);
let DxoWidthModule = class DxoWidthModule {
};
DxoWidthModule = __decorate([
    NgModule({
        declarations: [
            DxoWidthComponent
        ],
        exports: [
            DxoWidthComponent
        ],
    })
], DxoWidthModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
let DxoZoomAndPanComponent = class DxoZoomAndPanComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowMouseWheel() {
        return this._getOption('allowMouseWheel');
    }
    set allowMouseWheel(value) {
        this._setOption('allowMouseWheel', value);
    }
    get allowTouchGestures() {
        return this._getOption('allowTouchGestures');
    }
    set allowTouchGestures(value) {
        this._setOption('allowTouchGestures', value);
    }
    get argumentAxis() {
        return this._getOption('argumentAxis');
    }
    set argumentAxis(value) {
        this._setOption('argumentAxis', value);
    }
    get dragBoxStyle() {
        return this._getOption('dragBoxStyle');
    }
    set dragBoxStyle(value) {
        this._setOption('dragBoxStyle', value);
    }
    get dragToZoom() {
        return this._getOption('dragToZoom');
    }
    set dragToZoom(value) {
        this._setOption('dragToZoom', value);
    }
    get panKey() {
        return this._getOption('panKey');
    }
    set panKey(value) {
        this._setOption('panKey', value);
    }
    get valueAxis() {
        return this._getOption('valueAxis');
    }
    set valueAxis(value) {
        this._setOption('valueAxis', value);
    }
    get _optionPath() {
        return 'zoomAndPan';
    }
};
DxoZoomAndPanComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], DxoZoomAndPanComponent.prototype, "allowMouseWheel", null);
__decorate([
    Input()
], DxoZoomAndPanComponent.prototype, "allowTouchGestures", null);
__decorate([
    Input()
], DxoZoomAndPanComponent.prototype, "argumentAxis", null);
__decorate([
    Input()
], DxoZoomAndPanComponent.prototype, "dragBoxStyle", null);
__decorate([
    Input()
], DxoZoomAndPanComponent.prototype, "dragToZoom", null);
__decorate([
    Input()
], DxoZoomAndPanComponent.prototype, "panKey", null);
__decorate([
    Input()
], DxoZoomAndPanComponent.prototype, "valueAxis", null);
DxoZoomAndPanComponent = __decorate([
    Component({
        selector: 'dxo-zoom-and-pan',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    __param(0, SkipSelf()), __param(0, Host()),
    __param(1, Host())
], DxoZoomAndPanComponent);
let DxoZoomAndPanModule = class DxoZoomAndPanModule {
};
DxoZoomAndPanModule = __decorate([
    NgModule({
        declarations: [
            DxoZoomAndPanComponent
        ],
        exports: [
            DxoZoomAndPanComponent
        ],
    })
], DxoZoomAndPanModule);

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DxiAnnotationComponent, DxiAnnotationModule, DxiBreakComponent, DxiBreakModule, DxiButtonComponent, DxiButtonModule, DxiCenterComponent, DxiCenterModule, DxiColComponent, DxiColModule, DxiColumnComponent, DxiColumnModule, DxiConstantLineComponent, DxiConstantLineModule, DxiCustomOperationComponent, DxiCustomOperationModule, DxiFieldComponent, DxiFieldModule, DxiGroupItemComponent, DxiGroupItemModule, DxiItemComponent, DxiItemModule, DxiLayerComponent, DxiLayerModule, DxiLegendComponent, DxiLegendModule, DxiLocationComponent, DxiLocationModule, DxiMarkerComponent, DxiMarkerModule, DxiMentionComponent, DxiMentionModule, DxiMenuItemComponent, DxiMenuItemModule, DxiPaneComponent, DxiPaneModule, DxiRangeComponent, DxiRangeModule, DxiResourceComponent, DxiResourceModule, DxiRouteComponent, DxiRouteModule, DxiRowComponent, DxiRowModule, DxiSeriesComponent, DxiSeriesModule, DxiSortByGroupSummaryInfoComponent, DxiSortByGroupSummaryInfoModule, DxiStripComponent, DxiStripModule, DxiTabComponent, DxiTabModule, DxiToolbarItemComponent, DxiToolbarItemModule, DxiTotalItemComponent, DxiTotalItemModule, DxiValidationRuleComponent, DxiValidationRuleModule, DxiValueAxisComponent, DxiValueAxisModule, DxiViewComponent, DxiViewModule, DxoAdapterComponent, DxoAdapterModule, DxoAdaptiveLayoutComponent, DxoAdaptiveLayoutModule, DxoAggregationComponent, DxoAggregationIntervalComponent, DxoAggregationIntervalModule, DxoAggregationModule, DxoAnimationComponent, DxoAnimationModule, DxoAreaComponent, DxoAreaModule, DxoArgumentAxisComponent, DxoArgumentAxisModule, DxoArgumentFormatComponent, DxoArgumentFormatModule, DxoAtComponent, DxoAtModule, DxoBackgroundComponent, DxoBackgroundModule, DxoBarComponent, DxoBarModule, DxoBehaviorComponent, DxoBehaviorModule, DxoBorderComponent, DxoBorderModule, DxoBoundaryOffsetComponent, DxoBoundaryOffsetModule, DxoBoxComponent, DxoBoxModule, DxoBreakStyleComponent, DxoBreakStyleModule, DxoBubbleComponent, DxoBubbleModule, DxoButtonOptionsComponent, DxoButtonOptionsModule, DxoCalendarOptionsComponent, DxoCalendarOptionsModule, DxoCandlestickComponent, DxoCandlestickModule, DxoChartComponent, DxoChartModule, DxoColCountByScreenComponent, DxoColCountByScreenModule, DxoCollisionComponent, DxoCollisionModule, DxoColorizerComponent, DxoColorizerModule, DxoColumnChooserComponent, DxoColumnChooserModule, DxoColumnFixingComponent, DxoColumnFixingModule, DxoCommonAnnotationSettingsComponent, DxoCommonAnnotationSettingsModule, DxoCommonAxisSettingsComponent, DxoCommonAxisSettingsModule, DxoCommonPaneSettingsComponent, DxoCommonPaneSettingsModule, DxoCommonSeriesSettingsComponent, DxoCommonSeriesSettingsModule, DxoConnectorComponent, DxoConnectorModule, DxoConstantLineStyleComponent, DxoConstantLineStyleModule, DxoControlBarComponent, DxoControlBarModule, DxoCrosshairComponent, DxoCrosshairModule, DxoDataPrepareSettingsComponent, DxoDataPrepareSettingsModule, DxoDataSourceComponent, DxoDataSourceModule, DxoDelayComponent, DxoDelayModule, DxoDisplayFormatComponent, DxoDisplayFormatModule, DxoDragBoxStyleComponent, DxoDragBoxStyleModule, DxoDropDownOptionsComponent, DxoDropDownOptionsModule, DxoEditingComponent, DxoEditingModule, DxoExportComponent, DxoExportModule, DxoFieldChooserComponent, DxoFieldChooserModule, DxoFieldPanelComponent, DxoFieldPanelModule, DxoFilterBuilderComponent, DxoFilterBuilderModule, DxoFilterBuilderPopupComponent, DxoFilterBuilderPopupModule, DxoFilterOperationDescriptionsComponent, DxoFilterOperationDescriptionsModule, DxoFilterPanelComponent, DxoFilterPanelModule, DxoFilterRowComponent, DxoFilterRowModule, DxoFontComponent, DxoFontModule, DxoFormComponent, DxoFormItemComponent, DxoFormItemModule, DxoFormModule, DxoFormatComponent, DxoFormatModule, DxoFullstackedareaComponent, DxoFullstackedareaModule, DxoFullstackedbarComponent, DxoFullstackedbarModule, DxoFullstackedlineComponent, DxoFullstackedlineModule, DxoFullstackedsplineComponent, DxoFullstackedsplineModule, DxoFullstackedsplineareaComponent, DxoFullstackedsplineareaModule, DxoGeometryComponent, DxoGeometryModule, DxoGridComponent, DxoGridModule, DxoGroupComponent, DxoGroupModule, DxoGroupOperationDescriptionsComponent, DxoGroupOperationDescriptionsModule, DxoGroupPanelComponent, DxoGroupPanelModule, DxoGroupingComponent, DxoGroupingModule, DxoHatchingComponent, DxoHatchingModule, DxoHeaderFilterComponent, DxoHeaderFilterModule, DxoHeightComponent, DxoHeightModule, DxoHideComponent, DxoHideEventComponent, DxoHideEventModule, DxoHideModule, DxoHorizontalLineComponent, DxoHorizontalLineModule, DxoHoverStyleComponent, DxoHoverStyleModule, DxoImageComponent, DxoImageModule, DxoIndentComponent, DxoIndentModule, DxoItemComponent, DxoItemModule, DxoItemTextFormatComponent, DxoItemTextFormatModule, DxoKeyComponent, DxoKeyModule, DxoKeyboardNavigationComponent, DxoKeyboardNavigationModule, DxoLabelComponent, DxoLabelModule, DxoLegendComponent, DxoLegendModule, DxoLineComponent, DxoLineModule, DxoLinkComponent, DxoLinkModule, DxoLoadPanelComponent, DxoLoadPanelModule, DxoLoadingIndicatorComponent, DxoLoadingIndicatorModule, DxoLookupComponent, DxoLookupModule, DxoMarginComponent, DxoMarginModule, DxoMarkerComponent, DxoMarkerModule, DxoMasterDetailComponent, DxoMasterDetailModule, DxoMaxRangeComponent, DxoMaxRangeModule, DxoMediaResizingComponent, DxoMediaResizingModule, DxoMinRangeComponent, DxoMinRangeModule, DxoMinVisualRangeLengthComponent, DxoMinVisualRangeLengthModule, DxoMinorGridComponent, DxoMinorGridModule, DxoMinorTickComponent, DxoMinorTickIntervalComponent, DxoMinorTickIntervalModule, DxoMinorTickModule, DxoMyComponent, DxoMyModule, DxoNodeComponent, DxoNodeModule, DxoOffsetComponent, DxoOffsetModule, DxoOperationDescriptionsComponent, DxoOperationDescriptionsModule, DxoOptionsComponent, DxoOptionsModule, DxoPagerComponent, DxoPagerModule, DxoPagingComponent, DxoPagingModule, DxoPointComponent, DxoPointModule, DxoPopupComponent, DxoPopupModule, DxoPositionComponent, DxoPositionModule, DxoRangeContainerComponent, DxoRangeContainerModule, DxoRangeareaComponent, DxoRangeareaModule, DxoRangebarComponent, DxoRangebarModule, DxoReductionComponent, DxoReductionModule, DxoRemoteOperationsComponent, DxoRemoteOperationsModule, DxoScaleComponent, DxoScaleModule, DxoScatterComponent, DxoScatterModule, DxoScrollBarComponent, DxoScrollBarModule, DxoScrollingComponent, DxoScrollingModule, DxoSearchEditorOptionsComponent, DxoSearchEditorOptionsModule, DxoSearchPanelComponent, DxoSearchPanelModule, DxoSelectionComponent, DxoSelectionModule, DxoSelectionStyleComponent, DxoSelectionStyleModule, DxoSeriesTemplateComponent, DxoSeriesTemplateModule, DxoShadowComponent, DxoShadowModule, DxoShowComponent, DxoShowEventComponent, DxoShowEventModule, DxoShowFirstSubmenuModeComponent, DxoShowFirstSubmenuModeModule, DxoShowModule, DxoShowSubmenuModeComponent, DxoShowSubmenuModeModule, DxoShutterComponent, DxoShutterModule, DxoSizeComponent, DxoSizeModule, DxoSliderHandleComponent, DxoSliderHandleModule, DxoSliderMarkerComponent, DxoSliderMarkerModule, DxoSmallValuesGroupingComponent, DxoSmallValuesGroupingModule, DxoSortingComponent, DxoSortingModule, DxoSourceComponent, DxoSourceModule, DxoSplineComponent, DxoSplineModule, DxoSplineareaComponent, DxoSplineareaModule, DxoStackedareaComponent, DxoStackedareaModule, DxoStackedbarComponent, DxoStackedbarModule, DxoStackedlineComponent, DxoStackedlineModule, DxoStackedsplineComponent, DxoStackedsplineModule, DxoStackedsplineareaComponent, DxoStackedsplineareaModule, DxoStateStoringComponent, DxoStateStoringModule, DxoStepareaComponent, DxoStepareaModule, DxoSteplineComponent, DxoSteplineModule, DxoStockComponent, DxoStockModule, DxoStoreComponent, DxoStoreModule, DxoStripStyleComponent, DxoStripStyleModule, DxoSubtitleComponent, DxoSubtitleModule, DxoSubvalueIndicatorComponent, DxoSubvalueIndicatorModule, DxoSummaryComponent, DxoSummaryModule, DxoTabPanelOptionsComponent, DxoTabPanelOptionsModule, DxoTextComponent, DxoTextModule, DxoTextsComponent, DxoTextsModule, DxoTickComponent, DxoTickIntervalComponent, DxoTickIntervalModule, DxoTickModule, DxoTileComponent, DxoTileModule, DxoTitleComponent, DxoTitleModule, DxoToolbarComponent, DxoToolbarModule, DxoTooltipComponent, DxoTooltipModule, DxoUrlComponent, DxoUrlModule, DxoValueAxisComponent, DxoValueAxisModule, DxoValueErrorBarComponent, DxoValueErrorBarModule, DxoValueFormatComponent, DxoValueFormatModule, DxoValueIndicatorComponent, DxoValueIndicatorModule, DxoVariablesComponent, DxoVariablesModule, DxoVerticalLineComponent, DxoVerticalLineModule, DxoWidthComponent, DxoWidthModule, DxoZoomAndPanComponent, DxoZoomAndPanModule, DxoAnimationConfig as ɵa, DxiChartAnnotationConfig as ɵb, DxoTabPanelOptions as ɵba, DxoHtmlEditorToolbar as ɵbb, DxoHtmlEditorVariables as ɵbc, DxoChartCommonSeriesSettings as ɵc, DxiVizScaleBreak as ɵd, DxoFormat as ɵe, DxoBoxOptions as ɵf, DxiButtonGroupItem as ɵg, DxiTextEditorButton as ɵh, DxoButtonOptions as ɵi, DxoCalendarOptions as ɵj, DxiChartSeries as ɵk, DxiDataGridColumn as ɵl, DxoChartCommonAnnotationConfig as ɵm, DxiFilterBuilderCustomOperation as ɵn, DxoPivotGridDataSource as ɵo, DxiFilterBuilderField as ɵp, DxoPopupOptions as ɵq, DxoFilterBuilderOptions as ɵr, DxoVizFont as ɵs, DxoFormSimpleItem as ɵt, DxoFormOptions as ɵu, DxoHtmlEditorMediaResizing as ɵv, DxiHtmlEditorMention as ɵw, DxoPositionConfig as ɵx, DxoTextBoxOptions as ɵy, DxoGaugeIndicator as ɵz };
//# sourceMappingURL=devextreme-angular-ui-nested.js.map

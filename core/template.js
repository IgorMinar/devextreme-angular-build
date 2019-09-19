/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Directive, NgModule, TemplateRef, ViewContainerRef, Input, Renderer2, NgZone } from '@angular/core';
import { DxTemplateHost } from './template-host';
import { getElement } from './utils';
import * as events from 'devextreme/events';
export var DX_TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
var RenderData = (function () {
    function RenderData() {
    }
    return RenderData;
}());
export { RenderData };
var DxTemplateDirective = (function () {
    function DxTemplateDirective(templateRef, viewContainerRef, templateHost, renderer, zone) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.zone = zone;
        templateHost.setTemplate(this);
    }
    Object.defineProperty(DxTemplateDirective.prototype, "dxTemplateOf", {
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    DxTemplateDirective.prototype.renderTemplate = function (renderData) {
        var _this = this;
        var childView = this.viewContainerRef.createEmbeddedView(this.templateRef, {
            '$implicit': renderData.model,
            index: renderData.index
        });
        var container = getElement(renderData.container);
        if (renderData.container) {
            childView.rootNodes.forEach(function (element) {
                _this.renderer.appendChild(container, element);
            });
        }
        return childView;
    };
    DxTemplateDirective.prototype.render = function (renderData) {
        var _this = this;
        var childView;
        if (this.zone.isStable) {
            childView = this.zone.run(function () {
                return _this.renderTemplate(renderData);
            });
        }
        else {
            childView = this.renderTemplate(renderData);
            // =========== WORKAROUND =============
            // https://github.com/angular/angular/issues/12243
            childView['detectChanges']();
            // =========== /WORKAROUND =============
        }
        childView.rootNodes.forEach(function (element) {
            if (element.nodeType === 1) {
                _this.renderer.addClass(element, DX_TEMPLATE_WRAPPER_CLASS);
            }
            events.one(element, 'dxremove', function (_a, params) {
                if (!params || !params._angularIntegration) {
                    childView.destroy();
                }
            });
        });
        return childView.rootNodes;
    };
    DxTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dxTemplate]'
                },] },
    ];
    /** @nocollapse */
    DxTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
        { type: DxTemplateHost, },
        { type: Renderer2, },
        { type: NgZone, },
    ]; };
    DxTemplateDirective.propDecorators = {
        "dxTemplateOf": [{ type: Input },],
    };
    return DxTemplateDirective;
}());
export { DxTemplateDirective };
var DxTemplateModule = (function () {
    function DxTemplateModule() {
    }
    DxTemplateModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DxTemplateDirective],
                    exports: [DxTemplateDirective]
                },] },
    ];
    return DxTemplateModule;
}());
export { DxTemplateModule };
//# sourceMappingURL=template.js.map
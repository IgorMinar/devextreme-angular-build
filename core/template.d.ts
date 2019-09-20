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
import { TemplateRef, ViewContainerRef, Renderer2, NgZone } from '@angular/core';
import { DxTemplateHost } from './template-host';
export declare const DX_TEMPLATE_WRAPPER_CLASS = "dx-template-wrapper";
export declare class RenderData {
    model: any;
    index: number;
    container: any;
}
export declare class DxTemplateDirective {
    private templateRef;
    private viewContainerRef;
    private renderer;
    private zone;
    dxTemplateOf: any;
    name: string;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, templateHost: DxTemplateHost, renderer: Renderer2, zone: NgZone);
    private renderTemplate(renderData);
    render(renderData: RenderData): any;
}
export declare class DxTemplateModule {
}

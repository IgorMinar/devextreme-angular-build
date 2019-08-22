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

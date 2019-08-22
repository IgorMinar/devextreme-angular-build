import { ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxTemplateDirective } from '../../core/template';
import { IDxTemplateHost, DxTemplateHost } from '../../core/template-host';
import { NestedOption } from '../../core/nested-option';
export declare class DxoMasterDetailComponent extends NestedOption implements AfterViewInit, IDxTemplateHost {
    private renderer;
    private document;
    private element;
    autoExpandAll: boolean;
    enabled: boolean;
    template: any;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost, renderer: Renderer2, document: any, templateHost: DxTemplateHost, element: ElementRef);
    setTemplate(template: DxTemplateDirective): void;
    ngAfterViewInit(): void;
}
export declare class DxoMasterDetailModule {
}

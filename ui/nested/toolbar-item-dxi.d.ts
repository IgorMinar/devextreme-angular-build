import { ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxTemplateDirective } from '../../core/template';
import { IDxTemplateHost, DxTemplateHost } from '../../core/template-host';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiToolbarItemComponent extends CollectionNestedOption implements AfterViewInit, IDxTemplateHost {
    private renderer;
    private document;
    private element;
    disabled: boolean;
    html: string;
    location: string;
    options: any;
    template: any;
    text: string;
    toolbar: string;
    visible: boolean;
    widget: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost, renderer: Renderer2, document: any, templateHost: DxTemplateHost, element: ElementRef);
    setTemplate(template: DxTemplateDirective): void;
    ngAfterViewInit(): void;
}
export declare class DxiToolbarItemModule {
}

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
import { ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { NestedOptionHost, DxTemplateDirective, IDxTemplateHost, DxTemplateHost } from 'devextreme-angular/core';
import { CollectionNestedOption } from 'devextreme-angular/core';
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

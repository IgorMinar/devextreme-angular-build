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

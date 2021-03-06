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
import { ElementRef, Renderer2, AfterViewInit, QueryList } from '@angular/core';
import { NestedOptionHost, DxTemplateDirective, IDxTemplateHost, DxTemplateHost } from 'devextreme-angular/core';
import { DxiButtonGroupItem } from './base/button-group-item-dxi';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
import { DxiTabComponent } from './tab-dxi';
import { DxiLocationComponent } from './location-dxi';
export declare class DxiItemComponent extends DxiButtonGroupItem implements AfterViewInit, IDxTemplateHost {
    private renderer;
    private document;
    private element;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    validationRulesChildren: QueryList<DxiValidationRuleComponent>;
    tabsChildren: QueryList<DxiTabComponent>;
    locationChildren: QueryList<DxiLocationComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost, renderer: Renderer2, document: any, templateHost: DxTemplateHost, element: ElementRef);
    setTemplate(template: DxTemplateDirective): void;
    ngAfterViewInit(): void;
}
export declare class DxiItemModule {
}

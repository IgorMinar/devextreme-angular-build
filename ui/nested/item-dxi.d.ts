import { ElementRef, Renderer2, AfterViewInit, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxTemplateDirective } from '../../core/template';
import { IDxTemplateHost, DxTemplateHost } from '../../core/template-host';
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

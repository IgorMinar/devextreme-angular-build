import { DxTemplateDirective } from './template';
export interface IDxTemplateHost {
    setTemplate(template: DxTemplateDirective): any;
}
export declare class DxTemplateHost {
    host: IDxTemplateHost;
    setHost(host: IDxTemplateHost): void;
    setTemplate(template: DxTemplateDirective): void;
}

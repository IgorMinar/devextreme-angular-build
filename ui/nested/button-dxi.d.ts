import { NestedOptionHost } from '../../core/nested-option';
import { DxiTextEditorButton } from './base/text-editor-button-dxi';
export declare class DxiButtonComponent extends DxiTextEditorButton {
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiButtonModule {
}

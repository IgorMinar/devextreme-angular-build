import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoColorizerComponent extends NestedOption {
    colorCodeField: string;
    colorizeGroups: boolean;
    palette: string | Array<string>;
    paletteExtensionMode: string;
    range: Array<number>;
    type: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoColorizerModule {
}

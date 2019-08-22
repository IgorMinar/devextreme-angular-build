import { NestedOptionHost } from '../../core/nested-option';
import { DxoGaugeIndicator } from './base/gauge-indicator';
export declare class DxoSubvalueIndicatorComponent extends DxoGaugeIndicator {
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSubvalueIndicatorModule {
}

import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoExportComponent extends NestedOption {
    backgroundColor: string;
    enabled: boolean;
    fileName: string;
    formats: Array<string>;
    margin: number;
    printingEnabled: boolean;
    proxyUrl: string;
    allowExportSelectedData: boolean;
    customizeExcelCell: Function;
    excelFilterEnabled: boolean;
    excelWrapTextEnabled: boolean;
    ignoreExcelErrors: boolean;
    texts: {
        exportAll?: string;
        exportSelectedRows?: string;
        exportTo?: string;
    };
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoExportModule {
}

import { SimpleChanges, IterableDiffers } from '@angular/core';
import { DxComponent } from './component';
export declare class IterableDifferHelper {
    private _differs;
    private _host;
    private _propertyDiffers;
    constructor(_differs: IterableDiffers);
    setHost(host: DxComponent): void;
    setup(prop: string, changes: SimpleChanges): void;
    setupSingle(prop: string, value: any): boolean;
    getChanges(prop: string, value: any): any;
    checkChangedOptions(propName: string, hostValue: any): boolean;
    doCheck(prop: string): void;
}

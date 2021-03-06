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

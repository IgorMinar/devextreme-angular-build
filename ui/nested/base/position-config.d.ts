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
import { NestedOption } from 'devextreme-angular/core';
export declare abstract class DxoPositionConfig extends NestedOption {
    at: string | {
        x?: string;
        y?: string;
    };
    boundary: Element | JQuery | Window;
    boundaryOffset: string | {
        x?: number;
        y?: number;
    };
    collision: string | {
        x?: string;
        y?: string;
    };
    my: string | {
        x?: string;
        y?: string;
    };
    of: Element | JQuery | Window;
    offset: string | {
        x?: number;
        y?: number;
    };
}

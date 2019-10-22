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
export declare class WatcherHelper {
    private _watchers;
    getWatchMethod(): (valueGetter: any, valueChangeCallback: any, options: any) => () => void;
    private _isDifferentValues(oldValue, newValue, deepCheck);
    private _toComparable(value);
    private _checkObjectsFields(checkingFromObject, checkingToObject);
    checkWatchers(): void;
}

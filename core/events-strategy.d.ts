import { EventEmitter, NgZone } from '@angular/core';
import { DxComponent } from './component';
export declare class NgEventsStrategy {
    private instance;
    private subscriptions;
    private events;
    constructor(instance: any);
    hasEvent(name: string): boolean;
    fireEvent(name: any, args: any): void;
    on(name: any, handler: any): void;
    off(name: any, handler: any): void;
    dispose(): void;
    addEmitter(eventName: string, emitter: EventEmitter<any>): void;
    private getEmitter(eventName);
}
export declare class EmitterHelper {
    private zone;
    private component;
    lockedValueChangeEvent: boolean;
    constructor(zone: NgZone, component: DxComponent);
    fireNgEvent(eventName: string, eventArgs: any): void;
    createEmitters(events: any[]): void;
}

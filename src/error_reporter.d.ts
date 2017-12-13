import { ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Notification } from 'rxjs/Notification';
import { Action } from '@ngrx/store';
export interface EffectError extends Error {
    Source: any;
    Effect: Observable<any> | (() => Observable<any>);
    Error: any;
    Notification: Notification<Action | null | undefined>;
}
export interface InvalidActionError extends Error {
    Source: any;
    Effect: Observable<any> | (() => Observable<any>);
    Dispatched: Action | null | undefined;
    Notification: Notification<Action | null | undefined>;
}
export declare class ErrorReporter implements ErrorHandler {
    private console;
    constructor(console: any);
    handleError(error: any): void;
}

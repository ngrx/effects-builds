import { ErrorHandler } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
export declare type EffectsErrorHandler = <T extends Action>(observable$: Observable<T>, errorHandler: ErrorHandler) => Observable<T>;
export declare const defaultEffectsErrorHandler: EffectsErrorHandler;

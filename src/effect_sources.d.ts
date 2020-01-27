import { ErrorHandler } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { EffectsErrorHandler } from './effects_error_handler';
export declare class EffectSources extends Subject<any> {
    private errorHandler;
    private store;
    private effectsErrorHandler;
    constructor(errorHandler: ErrorHandler, store: Store<any>, effectsErrorHandler: EffectsErrorHandler);
    addEffects(effectSourceInstance: any): void;
}

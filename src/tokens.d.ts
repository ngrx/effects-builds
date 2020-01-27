import { InjectionToken, Type } from '@angular/core';
import { EffectsErrorHandler } from './effects_error_handler';
export declare const _ROOT_EFFECTS_GUARD: InjectionToken<void>;
export declare const IMMEDIATE_EFFECTS: InjectionToken<any[]>;
export declare const ROOT_EFFECTS: InjectionToken<Type<any>[]>;
export declare const FEATURE_EFFECTS: InjectionToken<any[][]>;
export declare const EFFECTS_ERROR_HANDLER: InjectionToken<EffectsErrorHandler>;

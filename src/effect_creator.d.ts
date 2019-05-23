import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { EffectMetadata, EffectConfig } from './models';
declare type DispatchType<T> = T extends {
    dispatch: infer U;
} ? U : unknown;
export declare function createEffect<C extends EffectConfig, T extends DispatchType<C>, O extends T extends false ? Observable<unknown> : Observable<Action>, R extends O | ((...args: any[]) => O)>(source: () => R, config?: Partial<C>): R;
export declare function getCreateEffectMetadata<T>(instance: T): EffectMetadata<T>[];
export {};

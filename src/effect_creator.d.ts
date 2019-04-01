import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { EffectMetadata } from './models';
export declare function createEffect<T extends Action>(source: (() => Observable<T>), options: {
    dispatch: false;
}): Observable<T>;
export declare function createEffect<T extends Action>(source: (() => (...args: any[]) => Observable<T>), options: {
    dispatch: false;
}): ((...args: any[]) => Observable<T>);
export declare function createEffect<T extends Action>(source: (() => Observable<T>), options?: {
    dispatch: true;
}): Observable<T>;
export declare function createEffect<T extends Action>(source: (() => (...args: any[]) => Observable<T>), options?: {
    dispatch: true;
}): ((...args: any[]) => Observable<T>);
export declare function getCreateEffectMetadata<T>(instance: T): EffectMetadata<T>[];

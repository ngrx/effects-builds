import { Action } from '@ngrx/store';
import { Observable, Operator, OperatorFunction } from 'rxjs';
export declare class Actions<V = Action> extends Observable<V> {
    constructor(source?: Observable<V>);
    lift<R>(operator: Operator<V, R>): Observable<R>;
    /**
     * @deprecated from 6.1.0. Use the pipeable `ofType` operator instead.
     */
    ofType<V2 extends V = V>(...allowedTypes: string[]): Actions<V2>;
}
export declare function ofType<T extends Action>(...allowedTypes: string[]): OperatorFunction<Action, T>;

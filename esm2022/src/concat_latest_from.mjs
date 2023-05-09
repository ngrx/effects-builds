import { of } from 'rxjs';
import { concatMap, withLatestFrom } from 'rxjs/operators';
/**
 * `concatLatestFrom` combines the source value
 * and the last available value from a lazily evaluated Observable
 * in a new array
 *
 * @usageNotes
 *
 * Select the active customer from the NgRx Store
 *
 * ```ts
 * import { concatLatestFrom } from '@ngrx/effects';
 * import * as fromCustomers from '../customers';
 *
 * this.actions$.pipe(
 *  concatLatestFrom(() => this.store.select(fromCustomers.selectActiveCustomer))
 * )
 * ```
 *
 * Select a customer from the NgRx Store by its id that is available on the action
 *
 * ```ts
 * import { concatLatestFrom } from '@ngrx/effects';
 * import * fromCustomers from '../customers';
 *
 * this.actions$.pipe(
 *  concatLatestFrom((action) => this.store.select(fromCustomers.selectCustomer(action.customerId)))
 * )
 * ```
 */
export function concatLatestFrom(observablesFactory) {
    return concatMap((value) => {
        const observables = observablesFactory(value);
        const observablesAsArray = Array.isArray(observables)
            ? observables
            : [observables];
        return of(value).pipe(withLatestFrom(...observablesAsArray));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2F0X2xhdGVzdF9mcm9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lZmZlY3RzL3NyYy9jb25jYXRfbGF0ZXN0X2Zyb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUErQixFQUFFLEVBQXFDLE1BQU0sTUFBTSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBUzlCLGtCQUFtQztJQUNuQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3pCLE1BQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDbkQsQ0FBQyxDQUFDLFdBQVc7WUFDYixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ25CLGNBQWMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQ1YsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXQsIG9mLCBPYnNlcnZlZFZhbHVlT2YsIE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8vIFRoZSBhcnJheSBvdmVybG9hZCBpcyBuZWVkZWQgZmlyc3QgYmVjYXVzZSB3ZSB3YW50IHRvIG1haW50YWluIHRoZSBwcm9wZXIgb3JkZXIgaW4gdGhlIHJlc3VsdGluZyB0dXBsZVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdExhdGVzdEZyb208VCBleHRlbmRzIE9ic2VydmFibGU8dW5rbm93bj5bXSwgVj4oXG4gIG9ic2VydmFibGVzRmFjdG9yeTogKHZhbHVlOiBWKSA9PiBbLi4uVF1cbik6IE9wZXJhdG9yRnVuY3Rpb248ViwgW1YsIC4uLnsgW2kgaW4ga2V5b2YgVF06IE9ic2VydmVkVmFsdWVPZjxUW2ldPiB9XT47XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0TGF0ZXN0RnJvbTxUIGV4dGVuZHMgT2JzZXJ2YWJsZTx1bmtub3duPiwgVj4oXG4gIG9ic2VydmFibGVGYWN0b3J5OiAodmFsdWU6IFYpID0+IFRcbik6IE9wZXJhdG9yRnVuY3Rpb248ViwgW1YsIE9ic2VydmVkVmFsdWVPZjxUPl0+O1xuLyoqXG4gKiBgY29uY2F0TGF0ZXN0RnJvbWAgY29tYmluZXMgdGhlIHNvdXJjZSB2YWx1ZVxuICogYW5kIHRoZSBsYXN0IGF2YWlsYWJsZSB2YWx1ZSBmcm9tIGEgbGF6aWx5IGV2YWx1YXRlZCBPYnNlcnZhYmxlXG4gKiBpbiBhIG5ldyBhcnJheVxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogU2VsZWN0IHRoZSBhY3RpdmUgY3VzdG9tZXIgZnJvbSB0aGUgTmdSeCBTdG9yZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBjb25jYXRMYXRlc3RGcm9tIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG4gKiBpbXBvcnQgKiBhcyBmcm9tQ3VzdG9tZXJzIGZyb20gJy4uL2N1c3RvbWVycyc7XG4gKlxuICogdGhpcy5hY3Rpb25zJC5waXBlKFxuICogIGNvbmNhdExhdGVzdEZyb20oKCkgPT4gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbUN1c3RvbWVycy5zZWxlY3RBY3RpdmVDdXN0b21lcikpXG4gKiApXG4gKiBgYGBcbiAqXG4gKiBTZWxlY3QgYSBjdXN0b21lciBmcm9tIHRoZSBOZ1J4IFN0b3JlIGJ5IGl0cyBpZCB0aGF0IGlzIGF2YWlsYWJsZSBvbiB0aGUgYWN0aW9uXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGNvbmNhdExhdGVzdEZyb20gfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbiAqIGltcG9ydCAqIGZyb21DdXN0b21lcnMgZnJvbSAnLi4vY3VzdG9tZXJzJztcbiAqXG4gKiB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gKiAgY29uY2F0TGF0ZXN0RnJvbSgoYWN0aW9uKSA9PiB0aGlzLnN0b3JlLnNlbGVjdChmcm9tQ3VzdG9tZXJzLnNlbGVjdEN1c3RvbWVyKGFjdGlvbi5jdXN0b21lcklkKSkpXG4gKiApXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdExhdGVzdEZyb208XG4gIFQgZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8dW5rbm93bj5bXSB8IE9ic2VydmFibGVJbnB1dDx1bmtub3duPixcbiAgVixcbiAgUiA9IFtcbiAgICBWLFxuICAgIC4uLihUIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PHVua25vd24+W11cbiAgICAgID8geyBbaSBpbiBrZXlvZiBUXTogT2JzZXJ2ZWRWYWx1ZU9mPFRbaV0+IH1cbiAgICAgIDogW09ic2VydmVkVmFsdWVPZjxUPl0pXG4gIF1cbj4ob2JzZXJ2YWJsZXNGYWN0b3J5OiAodmFsdWU6IFYpID0+IFQpOiBPcGVyYXRvckZ1bmN0aW9uPFYsIFI+IHtcbiAgcmV0dXJuIGNvbmNhdE1hcCgodmFsdWUpID0+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlcyA9IG9ic2VydmFibGVzRmFjdG9yeSh2YWx1ZSk7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZXNBc0FycmF5ID0gQXJyYXkuaXNBcnJheShvYnNlcnZhYmxlcylcbiAgICAgID8gb2JzZXJ2YWJsZXNcbiAgICAgIDogW29ic2VydmFibGVzXTtcbiAgICByZXR1cm4gb2YodmFsdWUpLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSguLi5vYnNlcnZhYmxlc0FzQXJyYXkpXG4gICAgKSBhcyB1bmtub3duIGFzIE9ic2VydmFibGU8Uj47XG4gIH0pXG59XG4iXX0=
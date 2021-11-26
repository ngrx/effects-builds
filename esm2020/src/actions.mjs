import { Inject, Injectable } from '@angular/core';
import { ScannedActionsSubject, } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
export class Actions extends Observable {
    constructor(source) {
        super();
        if (source) {
            this.source = source;
        }
    }
    lift(operator) {
        const observable = new Actions();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
}
/** @nocollapse */ /** @nocollapse */ Actions.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: Actions, deps: [{ token: ScannedActionsSubject }], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ /** @nocollapse */ Actions.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: Actions });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: Actions, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [ScannedActionsSubject]
                }] }]; } });
/**
 * `ofType` filters an Observable of `Actions` into an Observable of the actions
 * whose type strings are passed to it.
 *
 * For example, if `actions` has type `Actions<AdditionAction|SubstractionAction>`, and
 * the type of the `Addition` action is `add`, then
 * `actions.pipe(ofType('add'))` returns an `Observable<AdditionAction>`.
 *
 * Properly typing this function is hard and requires some advanced TS tricks
 * below.
 *
 * Type narrowing automatically works, as long as your `actions` object
 * starts with a `Actions<SomeUnionOfActions>` instead of generic `Actions`.
 *
 * For backwards compatibility, when one passes a single type argument
 * `ofType<T>('something')` the result is an `Observable<T>`. Note, that `T`
 * completely overrides any possible inference from 'something'.
 *
 * Unfortunately, for unknown 'actions: Actions' these types will produce
 * 'Observable<never>'. In such cases one has to manually set the generic type
 * like `actions.ofType<AdditionAction>('add')`.
 *
 * @usageNotes
 *
 * Filter the Actions stream on the "customers page loaded" action
 *
 * ```ts
 * import { ofType } from '@ngrx/effects';
 * import * fromCustomers from '../customers';
 *
 * this.actions$.pipe(
 *  ofType(fromCustomers.pageLoaded)
 * )
 * ```
 */
export function ofType(...allowedTypes) {
    return filter((action) => allowedTypes.some((typeOrActionCreator) => {
        if (typeof typeOrActionCreator === 'string') {
            // Comparing the string to type
            return typeOrActionCreator === action.type;
        }
        // We are filtering by ActionCreator
        return typeOrActionCreator.type === action.type;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBSUwscUJBQXFCLEdBQ3RCLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxVQUFVLEVBQThCLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3hDLE1BQU0sT0FBTyxPQUFvQixTQUFRLFVBQWE7SUFDcEQsWUFBMkMsTUFBc0I7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVRLElBQUksQ0FBSSxRQUF3QjtRQUN2QyxNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBSyxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7OzBJQWRVLE9BQU8sa0JBQ0UscUJBQXFCOzhJQUQ5QixPQUFPOzJGQUFQLE9BQU87a0JBRG5CLFVBQVU7OzBCQUVJLE1BQU07MkJBQUMscUJBQXFCOztBQXFGM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0c7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUNwQixHQUFHLFlBQTREO0lBRS9ELE9BQU8sTUFBTSxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEVBQUU7UUFDeEMsSUFBSSxPQUFPLG1CQUFtQixLQUFLLFFBQVEsRUFBRTtZQUMzQywrQkFBK0I7WUFDL0IsT0FBTyxtQkFBbUIsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzVDO1FBRUQsb0NBQW9DO1FBQ3BDLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uQ3JlYXRvcixcbiAgQ3JlYXRvcixcbiAgU2Nhbm5lZEFjdGlvbnNTdWJqZWN0LFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aW9uczxWID0gQWN0aW9uPiBleHRlbmRzIE9ic2VydmFibGU8Vj4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNjYW5uZWRBY3Rpb25zU3ViamVjdCkgc291cmNlPzogT2JzZXJ2YWJsZTxWPikge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBsaWZ0PFI+KG9wZXJhdG9yOiBPcGVyYXRvcjxWLCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgQWN0aW9uczxSPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cbn1cblxuLy8gTW9kdWxlLXByaXZhdGUgaGVscGVyIHR5cGVcbnR5cGUgQWN0aW9uRXh0cmFjdG9yPFxuICBUIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBFXG4+ID0gVCBleHRlbmRzIHN0cmluZyA/IEUgOiBSZXR1cm5UeXBlPEV4dHJhY3Q8VCwgQUM+PjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZTxcbiAgQUMgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj5bXSxcbiAgVSBleHRlbmRzIEFjdGlvbiA9IEFjdGlvbixcbiAgViA9IFJldHVyblR5cGU8QUNbbnVtYmVyXT5cbj4oLi4uYWxsb3dlZFR5cGVzOiBBQyk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5cbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGU8XG4gIEUgZXh0ZW5kcyBFeHRyYWN0PFUsIHsgdHlwZTogVDEgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gVDEgZXh0ZW5kcyBzdHJpbmcgPyBFIDogUmV0dXJuVHlwZTxFeHRyYWN0PFQxLCBBQz4+XG4+KHQxOiBUMSk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMiBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gQWN0aW9uRXh0cmFjdG9yPFQxIHwgVDIsIEFDLCBFPlxuPih0MTogVDEsIHQyOiBUMik6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB9PixcbiAgQUMgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4sXG4gIFQxIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQyIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQzIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFUgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb24sXG4gIFYgPSBBY3Rpb25FeHRyYWN0b3I8VDEgfCBUMiB8IFQzLCBBQywgRT5cbj4odDE6IFQxLCB0MjogVDIsIHQzOiBUMyk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB8IFQ0IH0+LFxuICBBQyBleHRlbmRzIEFjdGlvbkNyZWF0b3I8c3RyaW5nLCBDcmVhdG9yPixcbiAgVDEgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDIgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDMgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDQgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVSBleHRlbmRzIEFjdGlvbiA9IEFjdGlvbixcbiAgViA9IEFjdGlvbkV4dHJhY3RvcjxUMSB8IFQyIHwgVDMgfCBUNCwgQUMsIEU+XG4+KHQxOiBUMSwgdDI6IFQyLCB0MzogVDMsIHQ0OiBUNCk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB8IFQ0IHwgVDUgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMiBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMyBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUNCBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUNSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gQWN0aW9uRXh0cmFjdG9yPFQxIHwgVDIgfCBUMyB8IFQ0IHwgVDUsIEFDLCBFPlxuPih0MTogVDEsIHQyOiBUMiwgdDM6IFQzLCB0NDogVDQsIHQ1OiBUNSk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG4vKipcbiAqIEZhbGxiYWNrIGZvciBtb3JlIHRoYW4gNSBhcmd1bWVudHMuXG4gKiBUaGVyZSBpcyBubyBpbmZlcmVuY2UsIHNvIHRoZSByZXR1cm4gdHlwZSBpcyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgLVxuICogT2JzZXJ2YWJsZTxBY3Rpb24+LlxuICpcbiAqIFdlIHByb3ZpZGUgYSB0eXBlIHBhcmFtZXRlciwgZXZlbiB0aG91Z2ggVFMgd2lsbCBub3QgaW5mZXIgaXQgZnJvbSB0aGVcbiAqIGFyZ3VtZW50cywgdG8gcHJlc2VydmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBvbGQgdmVyc2lvbnMgb2YgbmdyeC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZTxWIGV4dGVuZHMgQWN0aW9uPihcbiAgLi4uYWxsb3dlZFR5cGVzOiBBcnJheTxzdHJpbmcgfCBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4+XG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbiwgVj47XG4vKipcbiAqIGBvZlR5cGVgIGZpbHRlcnMgYW4gT2JzZXJ2YWJsZSBvZiBgQWN0aW9uc2AgaW50byBhbiBPYnNlcnZhYmxlIG9mIHRoZSBhY3Rpb25zXG4gKiB3aG9zZSB0eXBlIHN0cmluZ3MgYXJlIHBhc3NlZCB0byBpdC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaWYgYGFjdGlvbnNgIGhhcyB0eXBlIGBBY3Rpb25zPEFkZGl0aW9uQWN0aW9ufFN1YnN0cmFjdGlvbkFjdGlvbj5gLCBhbmRcbiAqIHRoZSB0eXBlIG9mIHRoZSBgQWRkaXRpb25gIGFjdGlvbiBpcyBgYWRkYCwgdGhlblxuICogYGFjdGlvbnMucGlwZShvZlR5cGUoJ2FkZCcpKWAgcmV0dXJucyBhbiBgT2JzZXJ2YWJsZTxBZGRpdGlvbkFjdGlvbj5gLlxuICpcbiAqIFByb3Blcmx5IHR5cGluZyB0aGlzIGZ1bmN0aW9uIGlzIGhhcmQgYW5kIHJlcXVpcmVzIHNvbWUgYWR2YW5jZWQgVFMgdHJpY2tzXG4gKiBiZWxvdy5cbiAqXG4gKiBUeXBlIG5hcnJvd2luZyBhdXRvbWF0aWNhbGx5IHdvcmtzLCBhcyBsb25nIGFzIHlvdXIgYGFjdGlvbnNgIG9iamVjdFxuICogc3RhcnRzIHdpdGggYSBgQWN0aW9uczxTb21lVW5pb25PZkFjdGlvbnM+YCBpbnN0ZWFkIG9mIGdlbmVyaWMgYEFjdGlvbnNgLlxuICpcbiAqIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgd2hlbiBvbmUgcGFzc2VzIGEgc2luZ2xlIHR5cGUgYXJndW1lbnRcbiAqIGBvZlR5cGU8VD4oJ3NvbWV0aGluZycpYCB0aGUgcmVzdWx0IGlzIGFuIGBPYnNlcnZhYmxlPFQ+YC4gTm90ZSwgdGhhdCBgVGBcbiAqIGNvbXBsZXRlbHkgb3ZlcnJpZGVzIGFueSBwb3NzaWJsZSBpbmZlcmVuY2UgZnJvbSAnc29tZXRoaW5nJy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBmb3IgdW5rbm93biAnYWN0aW9uczogQWN0aW9ucycgdGhlc2UgdHlwZXMgd2lsbCBwcm9kdWNlXG4gKiAnT2JzZXJ2YWJsZTxuZXZlcj4nLiBJbiBzdWNoIGNhc2VzIG9uZSBoYXMgdG8gbWFudWFsbHkgc2V0IHRoZSBnZW5lcmljIHR5cGVcbiAqIGxpa2UgYGFjdGlvbnMub2ZUeXBlPEFkZGl0aW9uQWN0aW9uPignYWRkJylgLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogRmlsdGVyIHRoZSBBY3Rpb25zIHN0cmVhbSBvbiB0aGUgXCJjdXN0b21lcnMgcGFnZSBsb2FkZWRcIiBhY3Rpb25cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG4gKiBpbXBvcnQgKiBmcm9tQ3VzdG9tZXJzIGZyb20gJy4uL2N1c3RvbWVycyc7XG4gKlxuICogdGhpcy5hY3Rpb25zJC5waXBlKFxuICogIG9mVHlwZShmcm9tQ3VzdG9tZXJzLnBhZ2VMb2FkZWQpXG4gKiApXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZShcbiAgLi4uYWxsb3dlZFR5cGVzOiBBcnJheTxzdHJpbmcgfCBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4+XG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbiwgQWN0aW9uPiB7XG4gIHJldHVybiBmaWx0ZXIoKGFjdGlvbjogQWN0aW9uKSA9PlxuICAgIGFsbG93ZWRUeXBlcy5zb21lKCh0eXBlT3JBY3Rpb25DcmVhdG9yKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVPckFjdGlvbkNyZWF0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIENvbXBhcmluZyB0aGUgc3RyaW5nIHRvIHR5cGVcbiAgICAgICAgcmV0dXJuIHR5cGVPckFjdGlvbkNyZWF0b3IgPT09IGFjdGlvbi50eXBlO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBhcmUgZmlsdGVyaW5nIGJ5IEFjdGlvbkNyZWF0b3JcbiAgICAgIHJldHVybiB0eXBlT3JBY3Rpb25DcmVhdG9yLnR5cGUgPT09IGFjdGlvbi50eXBlO1xuICAgIH0pXG4gICk7XG59XG4iXX0=
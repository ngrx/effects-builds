/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { ScannedActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
/**
 * @template V
 */
export class Actions extends Observable {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        if (source) {
            this.source = source;
        }
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        /** @type {?} */
        const observable = new Actions();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    /**
     * @deprecated from 6.1.0. Use the pipeable `ofType` operator instead.
     * @template V2
     * @param {...?} allowedTypes
     * @return {?}
     */
    ofType(...allowedTypes) {
        return /** @type {?} */ (ofType(...allowedTypes)(/** @type {?} */ (this)));
    }
}
Actions.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Actions.ctorParameters = () => [
    { type: Observable, decorators: [{ type: Inject, args: [ScannedActionsSubject,] }] }
];
/**
 * @template T
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofType(...allowedTypes) {
    return filter((action) => allowedTypes.some(type => type === action.type));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFVLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQThCLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUd4QyxNQUFNLGNBQTJCLFNBQVEsVUFBYTs7OztJQUNwRCxZQUEyQyxNQUFzQjtRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7S0FDRjs7Ozs7O0lBRUQsSUFBSSxDQUFJLFFBQXdCOztRQUM5QixNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBSyxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDO0tBQ25COzs7Ozs7O0lBS0QsTUFBTSxDQUFtQixHQUFHLFlBQXNCO1FBQ2hELHlCQUFPLE1BQU0sQ0FBTSxHQUFHLFlBQVksQ0FBQyxtQkFBQyxJQUFvQixFQUFnQixFQUFDO0tBQzFFOzs7WUF0QkYsVUFBVTs7OztZQUhGLFVBQVUsdUJBS0osTUFBTSxTQUFDLHFCQUFxQjs7Ozs7OztBQXVCM0MsTUFBTSxpQkFDSixHQUFHLFlBQXNCO0lBRXpCLE9BQU8sTUFBTSxDQUNYLENBQUMsTUFBYyxFQUFlLEVBQUUsQ0FDOUIsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQ2xELENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uLCBTY2FubmVkQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvciwgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aW9uczxWID0gQWN0aW9uPiBleHRlbmRzIE9ic2VydmFibGU8Vj4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNjYW5uZWRBY3Rpb25zU3ViamVjdCkgc291cmNlPzogT2JzZXJ2YWJsZTxWPikge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG4gIH1cblxuICBsaWZ0PFI+KG9wZXJhdG9yOiBPcGVyYXRvcjxWLCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgQWN0aW9uczxSPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgZnJvbSA2LjEuMC4gVXNlIHRoZSBwaXBlYWJsZSBgb2ZUeXBlYCBvcGVyYXRvciBpbnN0ZWFkLlxuICAgKi9cbiAgb2ZUeXBlPFYyIGV4dGVuZHMgViA9IFY+KC4uLmFsbG93ZWRUeXBlczogc3RyaW5nW10pOiBBY3Rpb25zPFYyPiB7XG4gICAgcmV0dXJuIG9mVHlwZTxhbnk+KC4uLmFsbG93ZWRUeXBlcykodGhpcyBhcyBBY3Rpb25zPGFueT4pIGFzIEFjdGlvbnM8VjI+O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGU8VCBleHRlbmRzIEFjdGlvbj4oXG4gIC4uLmFsbG93ZWRUeXBlczogc3RyaW5nW11cbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uLCBUPiB7XG4gIHJldHVybiBmaWx0ZXIoXG4gICAgKGFjdGlvbjogQWN0aW9uKTogYWN0aW9uIGlzIFQgPT5cbiAgICAgIGFsbG93ZWRUeXBlcy5zb21lKHR5cGUgPT4gdHlwZSA9PT0gYWN0aW9uLnR5cGUpXG4gICk7XG59XG4iXX0=
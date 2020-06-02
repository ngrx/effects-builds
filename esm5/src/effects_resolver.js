var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * @fileoverview added by tsickle
 * Generated from: src/effects_resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { merge } from 'rxjs';
import { ignoreElements, map, materialize } from 'rxjs/operators';
import { getSourceMetadata } from './effects_metadata';
import { getSourceForInstance } from './utils';
/**
 * @param {?} sourceInstance
 * @param {?} globalErrorHandler
 * @param {?} effectsErrorHandler
 * @return {?}
 */
export function mergeEffects(sourceInstance, globalErrorHandler, effectsErrorHandler) {
    /** @type {?} */
    var sourceName = getSourceForInstance(sourceInstance).constructor.name;
    /** @type {?} */
    var observables$ = getSourceMetadata(sourceInstance).map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch, useEffectsErrorHandler = _a.useEffectsErrorHandler;
        /** @type {?} */
        var observable$ = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        /** @type {?} */
        var effectAction$ = useEffectsErrorHandler
            ? effectsErrorHandler(observable$, globalErrorHandler)
            : observable$;
        if (dispatch === false) {
            return effectAction$.pipe(ignoreElements());
        }
        /** @type {?} */
        var materialized$ = effectAction$.pipe(materialize());
        return materialized$.pipe(map((/**
         * @param {?} notification
         * @return {?}
         */
        function (notification) { return ({
            effect: sourceInstance[propertyName],
            notification: notification,
            propertyName: propertyName,
            sourceName: sourceName,
            sourceInstance: sourceInstance,
        }); })));
    }));
    return merge.apply(void 0, __spread(observables$));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3J4L2VmZmVjdHMvIiwic291cmNlcyI6WyJzcmMvZWZmZWN0c19yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7O0FBRy9DLE1BQU0sVUFBVSxZQUFZLENBQzFCLGNBQW1CLEVBQ25CLGtCQUFnQyxFQUNoQyxtQkFBd0M7O1FBRWxDLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSTs7UUFFbEUsWUFBWSxHQUFzQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHOzs7O0lBQzNFLFVBQUMsRUFJQTtZQUhDLDhCQUFZLEVBQ1osc0JBQVEsRUFDUixrREFBc0I7O1lBRWhCLFdBQVcsR0FDZixPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVO1lBQ2hELENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7O1lBRTVCLGFBQWEsR0FBRyxzQkFBc0I7WUFDMUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztZQUN0RCxDQUFDLENBQUMsV0FBVztRQUVmLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtZQUN0QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUM3Qzs7WUFFSyxhQUFhLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV2RCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQ3ZCLEdBQUc7Ozs7UUFDRCxVQUFDLFlBQWtDLElBQXlCLE9BQUEsQ0FBQztZQUMzRCxNQUFNLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQztZQUNwQyxZQUFZLGNBQUE7WUFDWixZQUFZLGNBQUE7WUFDWixVQUFVLFlBQUE7WUFDVixjQUFjLGdCQUFBO1NBQ2YsQ0FBQyxFQU4wRCxDQU0xRCxFQUNILENBQ0YsQ0FBQztJQUNKLENBQUMsRUFDRjtJQUVELE9BQU8sS0FBSyx3QkFBSSxZQUFZLEdBQUU7QUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IG1lcmdlLCBOb3RpZmljYXRpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlnbm9yZUVsZW1lbnRzLCBtYXAsIG1hdGVyaWFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFZmZlY3ROb3RpZmljYXRpb24gfSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZ2V0U291cmNlTWV0YWRhdGEgfSBmcm9tICcuL2VmZmVjdHNfbWV0YWRhdGEnO1xuaW1wb3J0IHsgRWZmZWN0c0Vycm9ySGFuZGxlciB9IGZyb20gJy4vZWZmZWN0c19lcnJvcl9oYW5kbGVyJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRWZmZWN0cyhcbiAgc291cmNlSW5zdGFuY2U6IGFueSxcbiAgZ2xvYmFsRXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gIGVmZmVjdHNFcnJvckhhbmRsZXI6IEVmZmVjdHNFcnJvckhhbmRsZXJcbik6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPiB7XG4gIGNvbnN0IHNvdXJjZU5hbWUgPSBnZXRTb3VyY2VGb3JJbnN0YW5jZShzb3VyY2VJbnN0YW5jZSkuY29uc3RydWN0b3IubmFtZTtcblxuICBjb25zdCBvYnNlcnZhYmxlcyQ6IE9ic2VydmFibGU8YW55PltdID0gZ2V0U291cmNlTWV0YWRhdGEoc291cmNlSW5zdGFuY2UpLm1hcChcbiAgICAoe1xuICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgZGlzcGF0Y2gsXG4gICAgICB1c2VFZmZlY3RzRXJyb3JIYW5kbGVyLFxuICAgIH0pOiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj4gPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8YW55PiA9XG4gICAgICAgIHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdKClcbiAgICAgICAgICA6IHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV07XG5cbiAgICAgIGNvbnN0IGVmZmVjdEFjdGlvbiQgPSB1c2VFZmZlY3RzRXJyb3JIYW5kbGVyXG4gICAgICAgID8gZWZmZWN0c0Vycm9ySGFuZGxlcihvYnNlcnZhYmxlJCwgZ2xvYmFsRXJyb3JIYW5kbGVyKVxuICAgICAgICA6IG9ic2VydmFibGUkO1xuXG4gICAgICBpZiAoZGlzcGF0Y2ggPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBlZmZlY3RBY3Rpb24kLnBpcGUoaWdub3JlRWxlbWVudHMoKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsaXplZCQgPSBlZmZlY3RBY3Rpb24kLnBpcGUobWF0ZXJpYWxpemUoKSk7XG5cbiAgICAgIHJldHVybiBtYXRlcmlhbGl6ZWQkLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248QWN0aW9uPik6IEVmZmVjdE5vdGlmaWNhdGlvbiA9PiAoe1xuICAgICAgICAgICAgZWZmZWN0OiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgc291cmNlTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZUluc3RhbmNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiBtZXJnZSguLi5vYnNlcnZhYmxlcyQpO1xufVxuIl19
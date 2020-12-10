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
    const sourceName = getSourceForInstance(sourceInstance).constructor.name;
    /** @type {?} */
    const observables$ = getSourceMetadata(sourceInstance).map((/**
     * @param {?} __0
     * @return {?}
     */
    ({ propertyName, dispatch, useEffectsErrorHandler, }) => {
        /** @type {?} */
        const observable$ = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        /** @type {?} */
        const effectAction$ = useEffectsErrorHandler
            ? effectsErrorHandler(observable$, globalErrorHandler)
            : observable$;
        if (dispatch === false) {
            return effectAction$.pipe(ignoreElements());
        }
        /** @type {?} */
        const materialized$ = effectAction$.pipe(materialize());
        return materialized$.pipe(map((/**
         * @param {?} notification
         * @return {?}
         */
        (notification) => ({
            effect: sourceInstance[propertyName],
            notification,
            propertyName,
            sourceName,
            sourceInstance,
        }))));
    }));
    return merge(...observables$);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvIiwic291cmNlcyI6WyJzcmMvZWZmZWN0c19yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7O0FBRy9DLE1BQU0sVUFBVSxZQUFZLENBQzFCLGNBQW1CLEVBQ25CLGtCQUFnQyxFQUNoQyxtQkFBd0M7O1VBRWxDLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSTs7VUFFbEUsWUFBWSxHQUFzQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHOzs7O0lBQzNFLENBQUMsRUFDQyxZQUFZLEVBQ1osUUFBUSxFQUNSLHNCQUFzQixHQUN2QixFQUFrQyxFQUFFOztjQUM3QixXQUFXLEdBQ2YsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVTtZQUNoRCxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2hDLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDOztjQUU1QixhQUFhLEdBQUcsc0JBQXNCO1lBQzFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUM7WUFDdEQsQ0FBQyxDQUFDLFdBQVc7UUFFZixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDdEIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDN0M7O2NBRUssYUFBYSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFVLENBQUM7UUFFL0QsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUN2QixHQUFHOzs7O1FBQ0QsQ0FBQyxZQUFZLEVBQXNCLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sRUFBRSxjQUFjLENBQUMsWUFBWSxDQUFDO1lBQ3BDLFlBQVk7WUFDWixZQUFZO1lBQ1osVUFBVTtZQUNWLGNBQWM7U0FDZixDQUFDLEVBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQyxFQUNGO0lBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlnbm9yZUVsZW1lbnRzLCBtYXAsIG1hdGVyaWFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFZmZlY3ROb3RpZmljYXRpb24gfSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZ2V0U291cmNlTWV0YWRhdGEgfSBmcm9tICcuL2VmZmVjdHNfbWV0YWRhdGEnO1xuaW1wb3J0IHsgRWZmZWN0c0Vycm9ySGFuZGxlciB9IGZyb20gJy4vZWZmZWN0c19lcnJvcl9oYW5kbGVyJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRWZmZWN0cyhcbiAgc291cmNlSW5zdGFuY2U6IGFueSxcbiAgZ2xvYmFsRXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gIGVmZmVjdHNFcnJvckhhbmRsZXI6IEVmZmVjdHNFcnJvckhhbmRsZXJcbik6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPiB7XG4gIGNvbnN0IHNvdXJjZU5hbWUgPSBnZXRTb3VyY2VGb3JJbnN0YW5jZShzb3VyY2VJbnN0YW5jZSkuY29uc3RydWN0b3IubmFtZTtcblxuICBjb25zdCBvYnNlcnZhYmxlcyQ6IE9ic2VydmFibGU8YW55PltdID0gZ2V0U291cmNlTWV0YWRhdGEoc291cmNlSW5zdGFuY2UpLm1hcChcbiAgICAoe1xuICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgZGlzcGF0Y2gsXG4gICAgICB1c2VFZmZlY3RzRXJyb3JIYW5kbGVyLFxuICAgIH0pOiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj4gPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8YW55PiA9XG4gICAgICAgIHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdKClcbiAgICAgICAgICA6IHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV07XG5cbiAgICAgIGNvbnN0IGVmZmVjdEFjdGlvbiQgPSB1c2VFZmZlY3RzRXJyb3JIYW5kbGVyXG4gICAgICAgID8gZWZmZWN0c0Vycm9ySGFuZGxlcihvYnNlcnZhYmxlJCwgZ2xvYmFsRXJyb3JIYW5kbGVyKVxuICAgICAgICA6IG9ic2VydmFibGUkO1xuXG4gICAgICBpZiAoZGlzcGF0Y2ggPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBlZmZlY3RBY3Rpb24kLnBpcGUoaWdub3JlRWxlbWVudHMoKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsaXplZCQgPSBlZmZlY3RBY3Rpb24kLnBpcGUobWF0ZXJpYWxpemU8QWN0aW9uPigpKTtcblxuICAgICAgcmV0dXJuIG1hdGVyaWFsaXplZCQucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChub3RpZmljYXRpb24pOiBFZmZlY3ROb3RpZmljYXRpb24gPT4gKHtcbiAgICAgICAgICAgIGVmZmVjdDogc291cmNlSW5zdGFuY2VbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIHNvdXJjZU5hbWUsXG4gICAgICAgICAgICBzb3VyY2VJbnN0YW5jZSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gbWVyZ2UoLi4ub2JzZXJ2YWJsZXMkKTtcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { merge } from 'rxjs';
import { ignoreElements, map, materialize } from 'rxjs/operators';
import { getSourceForInstance, getSourceMetadata } from './effects_metadata';
import { isOnRunEffects } from './on_run_effects';
/**
 * @param {?} sourceInstance
 * @return {?}
 */
export function mergeEffects(sourceInstance) {
    /** @type {?} */
    const sourceName = getSourceForInstance(sourceInstance).constructor.name;
    /** @type {?} */
    const observables = getSourceMetadata(sourceInstance).map(({ propertyName, dispatch }) => {
        /** @type {?} */
        const observable = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        if (dispatch === false) {
            return observable.pipe(ignoreElements());
        }
        /** @type {?} */
        const materialized$ = observable.pipe(materialize());
        return materialized$.pipe(map((notification) => ({
            effect: sourceInstance[propertyName],
            notification,
            propertyName,
            sourceName,
            sourceInstance,
        })));
    });
    return merge(...observables);
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
export function resolveEffectSource(sourceInstance) {
    /** @type {?} */
    const mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQUVsRCxNQUFNLHVCQUNKLGNBQW1COztJQUVuQixNQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDOztJQUV6RSxNQUFNLFdBQVcsR0FBc0IsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUMxRSxDQUFDLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxFQUFrQyxFQUFFOztRQUM3RCxNQUFNLFVBQVUsR0FDZCxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVO1lBQ2hELENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuQyxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDdEIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDMUM7O1FBRUQsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXJELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FDdkIsR0FBRyxDQUNELENBQUMsWUFBa0MsRUFBc0IsRUFBRSxDQUFDLENBQUM7WUFDM0QsTUFBTSxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDcEMsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsY0FBYztTQUNmLENBQUMsQ0FDSCxDQUNGLENBQUM7S0FDSCxDQUNGLENBQUM7SUFFRixPQUFPLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0NBQzlCOzs7OztBQUVELE1BQU0sOEJBQThCLGNBQW1COztJQUNyRCxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFcEQsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDbEMsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxPQUFPLGNBQWMsQ0FBQztDQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IG1lcmdlLCBOb3RpZmljYXRpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlnbm9yZUVsZW1lbnRzLCBtYXAsIG1hdGVyaWFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFZmZlY3ROb3RpZmljYXRpb24gfSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UsIGdldFNvdXJjZU1ldGFkYXRhIH0gZnJvbSAnLi9lZmZlY3RzX21ldGFkYXRhJztcbmltcG9ydCB7IGlzT25SdW5FZmZlY3RzIH0gZnJvbSAnLi9vbl9ydW5fZWZmZWN0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVmZmVjdHMoXG4gIHNvdXJjZUluc3RhbmNlOiBhbnlcbik6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPiB7XG4gIGNvbnN0IHNvdXJjZU5hbWUgPSBnZXRTb3VyY2VGb3JJbnN0YW5jZShzb3VyY2VJbnN0YW5jZSkuY29uc3RydWN0b3IubmFtZTtcblxuICBjb25zdCBvYnNlcnZhYmxlczogT2JzZXJ2YWJsZTxhbnk+W10gPSBnZXRTb3VyY2VNZXRhZGF0YShzb3VyY2VJbnN0YW5jZSkubWFwKFxuICAgICh7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfSk6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPiA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4gPVxuICAgICAgICB0eXBlb2Ygc291cmNlSW5zdGFuY2VbcHJvcGVydHlOYW1lXSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gc291cmNlSW5zdGFuY2VbcHJvcGVydHlOYW1lXSgpXG4gICAgICAgICAgOiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdO1xuXG4gICAgICBpZiAoZGlzcGF0Y2ggPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoaWdub3JlRWxlbWVudHMoKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsaXplZCQgPSBvYnNlcnZhYmxlLnBpcGUobWF0ZXJpYWxpemUoKSk7XG5cbiAgICAgIHJldHVybiBtYXRlcmlhbGl6ZWQkLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248QWN0aW9uPik6IEVmZmVjdE5vdGlmaWNhdGlvbiA9PiAoe1xuICAgICAgICAgICAgZWZmZWN0OiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgc291cmNlTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZUluc3RhbmNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiBtZXJnZSguLi5vYnNlcnZhYmxlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlRWZmZWN0U291cmNlKHNvdXJjZUluc3RhbmNlOiBhbnkpIHtcbiAgY29uc3QgbWVyZ2VkRWZmZWN0cyQgPSBtZXJnZUVmZmVjdHMoc291cmNlSW5zdGFuY2UpO1xuXG4gIGlmIChpc09uUnVuRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSkpIHtcbiAgICByZXR1cm4gc291cmNlSW5zdGFuY2UubmdyeE9uUnVuRWZmZWN0cyhtZXJnZWRFZmZlY3RzJCk7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkRWZmZWN0cyQ7XG59XG4iXX0=
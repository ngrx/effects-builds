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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQUVsRCxNQUFNLFVBQVUsWUFBWSxDQUMxQixjQUFtQjs7SUFFbkIsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzs7SUFFekUsTUFBTSxXQUFXLEdBQXNCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FDMUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBa0MsRUFBRTs7UUFDN0QsTUFBTSxVQUFVLEdBQ2QsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVTtZQUNoRCxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2hDLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkMsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ3RCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQzFDOztRQUVELE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUVyRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQ3ZCLEdBQUcsQ0FDRCxDQUFDLFlBQWtDLEVBQXNCLEVBQUUsQ0FBQyxDQUFDO1lBQzNELE1BQU0sRUFBRSxjQUFjLENBQUMsWUFBWSxDQUFDO1lBQ3BDLFlBQVk7WUFDWixZQUFZO1lBQ1osVUFBVTtZQUNWLGNBQWM7U0FDZixDQUFDLENBQ0gsQ0FDRixDQUFDO0tBQ0gsQ0FDRixDQUFDO0lBRUYsT0FBTyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztDQUM5Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsY0FBbUI7O0lBQ3JELE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVwRCxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNsQyxPQUFPLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUN4RDtJQUVELE9BQU8sY0FBYyxDQUFDO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE5vdGlmaWNhdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaWdub3JlRWxlbWVudHMsIG1hcCwgbWF0ZXJpYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEVmZmVjdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vZWZmZWN0X25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBnZXRTb3VyY2VGb3JJbnN0YW5jZSwgZ2V0U291cmNlTWV0YWRhdGEgfSBmcm9tICcuL2VmZmVjdHNfbWV0YWRhdGEnO1xuaW1wb3J0IHsgaXNPblJ1bkVmZmVjdHMgfSBmcm9tICcuL29uX3J1bl9lZmZlY3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRWZmZWN0cyhcbiAgc291cmNlSW5zdGFuY2U6IGFueVxuKTogT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+IHtcbiAgY29uc3Qgc291cmNlTmFtZSA9IGdldFNvdXJjZUZvckluc3RhbmNlKHNvdXJjZUluc3RhbmNlKS5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gIGNvbnN0IG9ic2VydmFibGVzOiBPYnNlcnZhYmxlPGFueT5bXSA9IGdldFNvdXJjZU1ldGFkYXRhKHNvdXJjZUluc3RhbmNlKS5tYXAoXG4gICAgKHsgcHJvcGVydHlOYW1lLCBkaXNwYXRjaCB9KTogT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+ID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiA9XG4gICAgICAgIHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdKClcbiAgICAgICAgICA6IHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV07XG5cbiAgICAgIGlmIChkaXNwYXRjaCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShpZ25vcmVFbGVtZW50cygpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWF0ZXJpYWxpemVkJCA9IG9ic2VydmFibGUucGlwZShtYXRlcmlhbGl6ZSgpKTtcblxuICAgICAgcmV0dXJuIG1hdGVyaWFsaXplZCQucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbjxBY3Rpb24+KTogRWZmZWN0Tm90aWZpY2F0aW9uID0+ICh7XG4gICAgICAgICAgICBlZmZlY3Q6IHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICBub3RpZmljYXRpb24sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBzb3VyY2VOYW1lLFxuICAgICAgICAgICAgc291cmNlSW5zdGFuY2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIG1lcmdlKC4uLm9ic2VydmFibGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFZmZlY3RTb3VyY2Uoc291cmNlSW5zdGFuY2U6IGFueSkge1xuICBjb25zdCBtZXJnZWRFZmZlY3RzJCA9IG1lcmdlRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSk7XG5cbiAgaWYgKGlzT25SdW5FZmZlY3RzKHNvdXJjZUluc3RhbmNlKSkge1xuICAgIHJldHVybiBzb3VyY2VJbnN0YW5jZS5uZ3J4T25SdW5FZmZlY3RzKG1lcmdlZEVmZmVjdHMkKTtcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRFZmZlY3RzJDtcbn1cbiJdfQ==
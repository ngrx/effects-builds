/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/effects_resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { merge } from 'rxjs';
import { ignoreElements, map, materialize, catchError } from 'rxjs/operators';
import { getSourceMetadata } from './effects_metadata';
import { getSourceForInstance } from './utils';
/**
 * @param {?} sourceInstance
 * @param {?=} errorHandler
 * @return {?}
 */
export function mergeEffects(sourceInstance, errorHandler) {
    /** @type {?} */
    const sourceName = getSourceForInstance(sourceInstance).constructor.name;
    /** @type {?} */
    const observables$ = getSourceMetadata(sourceInstance).map((/**
     * @param {?} __0
     * @return {?}
     */
    ({ propertyName, dispatch, resubscribeOnError, }) => {
        /** @type {?} */
        const observable$ = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        /** @type {?} */
        const resubscribable$ = resubscribeOnError
            ? resubscribeInCaseOfError(observable$, errorHandler)
            : observable$;
        if (dispatch === false) {
            return resubscribable$.pipe(ignoreElements());
        }
        /** @type {?} */
        const materialized$ = resubscribable$.pipe(materialize());
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
/**
 * @template T
 * @param {?} observable$
 * @param {?=} errorHandler
 * @return {?}
 */
function resubscribeInCaseOfError(observable$, errorHandler) {
    return observable$.pipe(catchError((/**
     * @param {?} error
     * @return {?}
     */
    error => {
        if (errorHandler)
            errorHandler.handleError(error);
        // Return observable that produces this particular effect
        return resubscribeInCaseOfError(observable$, errorHandler);
    })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7OztBQUcvQyxNQUFNLFVBQVUsWUFBWSxDQUMxQixjQUFtQixFQUNuQixZQUEyQjs7VUFFckIsVUFBVSxHQUFHLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJOztVQUVsRSxZQUFZLEdBQXNCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUc7Ozs7SUFDM0UsQ0FBQyxFQUNDLFlBQVksRUFDWixRQUFRLEVBQ1Isa0JBQWtCLEdBQ25CLEVBQWtDLEVBQUU7O2NBQzdCLFdBQVcsR0FDZixPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVO1lBQ2hELENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7O2NBRTVCLGVBQWUsR0FBRyxrQkFBa0I7WUFDeEMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7WUFDckQsQ0FBQyxDQUFDLFdBQVc7UUFFZixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDdEIsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDL0M7O2NBRUssYUFBYSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFekQsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUN2QixHQUFHOzs7O1FBQ0QsQ0FBQyxZQUFrQyxFQUFzQixFQUFFLENBQUMsQ0FBQztZQUMzRCxNQUFNLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQztZQUNwQyxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixjQUFjO1NBQ2YsQ0FBQyxFQUNILENBQ0YsQ0FBQztJQUNKLENBQUMsRUFDRjtJQUVELE9BQU8sS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7QUFDaEMsQ0FBQzs7Ozs7OztBQUVELFNBQVMsd0JBQXdCLENBQy9CLFdBQTBCLEVBQzFCLFlBQTJCO0lBRTNCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FDckIsVUFBVTs7OztJQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2pCLElBQUksWUFBWTtZQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQseURBQXlEO1FBQ3pELE9BQU8sd0JBQXdCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUMsRUFBQyxDQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE5vdGlmaWNhdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaWdub3JlRWxlbWVudHMsIG1hcCwgbWF0ZXJpYWxpemUsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEVmZmVjdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vZWZmZWN0X25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBnZXRTb3VyY2VNZXRhZGF0YSB9IGZyb20gJy4vZWZmZWN0c19tZXRhZGF0YSc7XG5pbXBvcnQgeyBnZXRTb3VyY2VGb3JJbnN0YW5jZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVmZmVjdHMoXG4gIHNvdXJjZUluc3RhbmNlOiBhbnksXG4gIGVycm9ySGFuZGxlcj86IEVycm9ySGFuZGxlclxuKTogT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+IHtcbiAgY29uc3Qgc291cmNlTmFtZSA9IGdldFNvdXJjZUZvckluc3RhbmNlKHNvdXJjZUluc3RhbmNlKS5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gIGNvbnN0IG9ic2VydmFibGVzJDogT2JzZXJ2YWJsZTxhbnk+W10gPSBnZXRTb3VyY2VNZXRhZGF0YShzb3VyY2VJbnN0YW5jZSkubWFwKFxuICAgICh7XG4gICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICBkaXNwYXRjaCxcbiAgICAgIHJlc3Vic2NyaWJlT25FcnJvcixcbiAgICB9KTogT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+ID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmFibGUkOiBPYnNlcnZhYmxlPGFueT4gPVxuICAgICAgICB0eXBlb2Ygc291cmNlSW5zdGFuY2VbcHJvcGVydHlOYW1lXSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gc291cmNlSW5zdGFuY2VbcHJvcGVydHlOYW1lXSgpXG4gICAgICAgICAgOiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdO1xuXG4gICAgICBjb25zdCByZXN1YnNjcmliYWJsZSQgPSByZXN1YnNjcmliZU9uRXJyb3JcbiAgICAgICAgPyByZXN1YnNjcmliZUluQ2FzZU9mRXJyb3Iob2JzZXJ2YWJsZSQsIGVycm9ySGFuZGxlcilcbiAgICAgICAgOiBvYnNlcnZhYmxlJDtcblxuICAgICAgaWYgKGRpc3BhdGNoID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gcmVzdWJzY3JpYmFibGUkLnBpcGUoaWdub3JlRWxlbWVudHMoKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsaXplZCQgPSByZXN1YnNjcmliYWJsZSQucGlwZShtYXRlcmlhbGl6ZSgpKTtcblxuICAgICAgcmV0dXJuIG1hdGVyaWFsaXplZCQucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbjxBY3Rpb24+KTogRWZmZWN0Tm90aWZpY2F0aW9uID0+ICh7XG4gICAgICAgICAgICBlZmZlY3Q6IHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICBub3RpZmljYXRpb24sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBzb3VyY2VOYW1lLFxuICAgICAgICAgICAgc291cmNlSW5zdGFuY2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIG1lcmdlKC4uLm9ic2VydmFibGVzJCk7XG59XG5cbmZ1bmN0aW9uIHJlc3Vic2NyaWJlSW5DYXNlT2ZFcnJvcjxUIGV4dGVuZHMgQWN0aW9uPihcbiAgb2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8VD4sXG4gIGVycm9ySGFuZGxlcj86IEVycm9ySGFuZGxlclxuKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBvYnNlcnZhYmxlJC5waXBlKFxuICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgaWYgKGVycm9ySGFuZGxlcikgZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgIC8vIFJldHVybiBvYnNlcnZhYmxlIHRoYXQgcHJvZHVjZXMgdGhpcyBwYXJ0aWN1bGFyIGVmZmVjdFxuICAgICAgcmV0dXJuIHJlc3Vic2NyaWJlSW5DYXNlT2ZFcnJvcihvYnNlcnZhYmxlJCwgZXJyb3JIYW5kbGVyKTtcbiAgICB9KVxuICApO1xufVxuIl19
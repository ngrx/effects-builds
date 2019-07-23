/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const resubscribeInCaseOfError = (/**
         * @param {?} observable$
         * @return {?}
         */
        (observable$) => observable$.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            if (errorHandler)
                errorHandler.handleError(error);
            // Return observable that produces this particular effect
            return resubscribeInCaseOfError(observable$);
        }))));
        /** @type {?} */
        const resubscribable$ = resubscribeOnError
            ? resubscribeInCaseOfError(observable$)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBRy9DLE1BQU0sVUFBVSxZQUFZLENBQzFCLGNBQW1CLEVBQ25CLFlBQTJCOztVQUVyQixVQUFVLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUk7O1VBRWxFLFlBQVksR0FBc0IsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRzs7OztJQUMzRSxDQUFDLEVBQ0MsWUFBWSxFQUNaLFFBQVEsRUFDUixrQkFBa0IsR0FDbkIsRUFBa0MsRUFBRTs7Y0FDN0IsV0FBVyxHQUNmLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVU7WUFDaEQsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNoQyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQzs7Y0FFNUIsd0JBQXdCOzs7O1FBQUcsQ0FDL0IsV0FBNEIsRUFDWCxFQUFFLENBQ25CLFdBQVcsQ0FBQyxJQUFJLENBQ2QsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksWUFBWTtnQkFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELHlEQUF5RDtZQUN6RCxPQUFPLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUNILENBQUE7O2NBRUcsZUFBZSxHQUFHLGtCQUFrQjtZQUN4QyxDQUFDLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxXQUFXO1FBRWYsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ3RCLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQy9DOztjQUVLLGFBQWEsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXpELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FDdkIsR0FBRzs7OztRQUNELENBQUMsWUFBa0MsRUFBc0IsRUFBRSxDQUFDLENBQUM7WUFDM0QsTUFBTSxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDcEMsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsY0FBYztTQUNmLENBQUMsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDLEVBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBtZXJnZSwgTm90aWZpY2F0aW9uLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpZ25vcmVFbGVtZW50cywgbWFwLCBtYXRlcmlhbGl6ZSwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRWZmZWN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi9lZmZlY3Rfbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGdldFNvdXJjZU1ldGFkYXRhIH0gZnJvbSAnLi9lZmZlY3RzX21ldGFkYXRhJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRWZmZWN0cyhcbiAgc291cmNlSW5zdGFuY2U6IGFueSxcbiAgZXJyb3JIYW5kbGVyPzogRXJyb3JIYW5kbGVyXG4pOiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj4ge1xuICBjb25zdCBzb3VyY2VOYW1lID0gZ2V0U291cmNlRm9ySW5zdGFuY2Uoc291cmNlSW5zdGFuY2UpLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgY29uc3Qgb2JzZXJ2YWJsZXMkOiBPYnNlcnZhYmxlPGFueT5bXSA9IGdldFNvdXJjZU1ldGFkYXRhKHNvdXJjZUluc3RhbmNlKS5tYXAoXG4gICAgKHtcbiAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgIGRpc3BhdGNoLFxuICAgICAgcmVzdWJzY3JpYmVPbkVycm9yLFxuICAgIH0pOiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj4gPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8YW55PiA9XG4gICAgICAgIHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdKClcbiAgICAgICAgICA6IHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV07XG5cbiAgICAgIGNvbnN0IHJlc3Vic2NyaWJlSW5DYXNlT2ZFcnJvciA9IChcbiAgICAgICAgb2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8YW55PlxuICAgICAgKTogT2JzZXJ2YWJsZTxhbnk+ID0+XG4gICAgICAgIG9ic2VydmFibGUkLnBpcGUoXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3JIYW5kbGVyKSBlcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgLy8gUmV0dXJuIG9ic2VydmFibGUgdGhhdCBwcm9kdWNlcyB0aGlzIHBhcnRpY3VsYXIgZWZmZWN0XG4gICAgICAgICAgICByZXR1cm4gcmVzdWJzY3JpYmVJbkNhc2VPZkVycm9yKG9ic2VydmFibGUkKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICBjb25zdCByZXN1YnNjcmliYWJsZSQgPSByZXN1YnNjcmliZU9uRXJyb3JcbiAgICAgICAgPyByZXN1YnNjcmliZUluQ2FzZU9mRXJyb3Iob2JzZXJ2YWJsZSQpXG4gICAgICAgIDogb2JzZXJ2YWJsZSQ7XG5cbiAgICAgIGlmIChkaXNwYXRjaCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3Vic2NyaWJhYmxlJC5waXBlKGlnbm9yZUVsZW1lbnRzKCkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXRlcmlhbGl6ZWQkID0gcmVzdWJzY3JpYmFibGUkLnBpcGUobWF0ZXJpYWxpemUoKSk7XG5cbiAgICAgIHJldHVybiBtYXRlcmlhbGl6ZWQkLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248QWN0aW9uPik6IEVmZmVjdE5vdGlmaWNhdGlvbiA9PiAoe1xuICAgICAgICAgICAgZWZmZWN0OiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgc291cmNlTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZUluc3RhbmNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiBtZXJnZSguLi5vYnNlcnZhYmxlcyQpO1xufVxuIl19
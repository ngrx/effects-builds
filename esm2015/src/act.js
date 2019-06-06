/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defer, merge, Notification, Subject, NotificationKind, } from 'rxjs';
import { concatMap, dematerialize, filter, finalize, map, materialize, } from 'rxjs/operators';
/**
 * Represents config with named paratemeters for act
 * @record
 * @template Input, OutputAction, ErrorAction, CompleteAction, UnsubscribeAction
 */
export function ActConfig() { }
if (false) {
    /** @type {?} */
    ActConfig.prototype.project;
    /** @type {?} */
    ActConfig.prototype.error;
    /** @type {?|undefined} */
    ActConfig.prototype.complete;
    /** @type {?|undefined} */
    ActConfig.prototype.operator;
    /** @type {?|undefined} */
    ActConfig.prototype.unsubscribe;
}
/**
 * @template Input, OutputAction, ErrorAction, CompleteAction, UnsubscribeAction
 * @param {?} configOrProject
 * @param {?=} errorFn
 * @return {?}
 */
export function act(
/** Allow to take either config object or project/error functions */
configOrProject, errorFn) {
    const { project, error, complete, operator, unsubscribe } = typeof configOrProject === 'function'
        ? {
            project: configOrProject,
            error: (/** @type {?} */ (errorFn)),
            operator: concatMap,
            complete: undefined,
            unsubscribe: undefined,
        }
        : Object.assign({}, configOrProject, { operator: configOrProject.operator || concatMap });
    return (/**
     * @param {?} source
     * @return {?}
     */
    source => defer((/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const subject = new Subject();
        return merge(source.pipe(operator((/**
         * @param {?} input
         * @param {?} index
         * @return {?}
         */
        (input, index) => defer((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let completed = false;
            /** @type {?} */
            let errored = false;
            /** @type {?} */
            let projectedCount = 0;
            return project(input, index).pipe(materialize(), map((/**
             * @param {?} notification
             * @return {?}
             */
            (notification) => {
                switch (notification.kind) {
                    case NotificationKind.ERROR:
                        errored = true;
                        return new Notification(NotificationKind.NEXT, error(notification.error, input));
                    case NotificationKind.COMPLETE:
                        completed = true;
                        return complete
                            ? new Notification(NotificationKind.NEXT, complete(projectedCount, input))
                            : undefined;
                    default:
                        ++projectedCount;
                        return notification;
                }
            })), filter((/**
             * @param {?} n
             * @return {?}
             */
            (n) => n != null)), dematerialize(), finalize((/**
             * @return {?}
             */
            () => {
                if (!completed && !errored && unsubscribe) {
                    subject.next(unsubscribe(projectedCount, input));
                }
            })));
        }))))), subject);
    })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lZmZlY3RzL3NyYy9hY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFlBQVksRUFHWixPQUFPLEVBQ1AsZ0JBQWdCLEdBQ2pCLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLFNBQVMsRUFDVCxhQUFhLEVBQ2IsTUFBTSxFQUNOLFFBQVEsRUFDUixHQUFHLEVBQ0gsV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUd4QiwrQkF5QkM7OztJQWpCQyw0QkFBbUU7O0lBSW5FLDBCQUFpRDs7SUFJakQsNkJBQTJEOztJQUUzRCw2QkFFMkM7O0lBSTNDLGdDQUFpRTs7Ozs7Ozs7QUFtQ25FLE1BQU0sVUFBVSxHQUFHO0FBT2pCLG9FQUFvRTtBQUNwRSxlQVErRCxFQUMvRCxPQUFtRDtVQU03QyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsR0FDdkQsT0FBTyxlQUFlLEtBQUssVUFBVTtRQUNuQyxDQUFDLENBQUM7WUFDRSxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUUsbUJBQUEsT0FBTyxFQUFDO1lBQ2YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLFNBQVM7U0FDdkI7UUFDSCxDQUFDLG1CQUFNLGVBQWUsSUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLFFBQVEsSUFBSSxTQUFTLEdBQUU7SUFPN0U7Ozs7SUFBTyxNQUFNLENBQUMsRUFBRSxDQUNkLEtBQUs7OztJQUNILEdBQTZCLEVBQUU7O2NBQ3ZCLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBcUI7UUFDaEQsT0FBTyxLQUFLLENBQ1YsTUFBTSxDQUFDLElBQUksQ0FDVCxRQUFROzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3hCLEtBQUs7OztRQUFDLEdBQUcsRUFBRTs7Z0JBQ0wsU0FBUyxHQUFHLEtBQUs7O2dCQUNqQixPQUFPLEdBQUcsS0FBSzs7Z0JBQ2YsY0FBYyxHQUFHLENBQUM7WUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDL0IsV0FBVyxFQUFFLEVBQ2IsR0FBRzs7OztZQUNELENBQUMsWUFBWSxFQUEwQyxFQUFFO2dCQUN2RCxRQUFRLFlBQVksQ0FBQyxJQUFJLEVBQUU7b0JBQ3pCLEtBQUssZ0JBQWdCLENBQUMsS0FBSzt3QkFDekIsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDZixPQUFPLElBQUksWUFBWSxDQUNyQixnQkFBZ0IsQ0FBQyxJQUFJLEVBQ3JCLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUNqQyxDQUFDO29CQUNKLEtBQUssZ0JBQWdCLENBQUMsUUFBUTt3QkFDNUIsU0FBUyxHQUFHLElBQUksQ0FBQzt3QkFDakIsT0FBTyxRQUFROzRCQUNiLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FDZCxnQkFBZ0IsQ0FBQyxJQUFJLEVBQ3JCLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQ2hDOzRCQUNILENBQUMsQ0FBQyxTQUFTLENBQUM7b0JBQ2hCO3dCQUNFLEVBQUUsY0FBYyxDQUFDO3dCQUNqQixPQUFPLFlBQVksQ0FBQztpQkFDdkI7WUFDSCxDQUFDLEVBQ0YsRUFDRCxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQThCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFDLEVBQ3BELGFBQWEsRUFBRSxFQUNmLFFBQVE7OztZQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxJQUFJLFdBQVcsRUFBRTtvQkFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ2xEO1lBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsRUFBQyxFQUNILENBQ0YsRUFDRCxPQUFPLENBQ1IsQ0FBQztJQUNKLENBQUMsRUFDRixFQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIGRlZmVyLFxuICBtZXJnZSxcbiAgTm90aWZpY2F0aW9uLFxuICBPYnNlcnZhYmxlLFxuICBPcGVyYXRvckZ1bmN0aW9uLFxuICBTdWJqZWN0LFxuICBOb3RpZmljYXRpb25LaW5kLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNvbmNhdE1hcCxcbiAgZGVtYXRlcmlhbGl6ZSxcbiAgZmlsdGVyLFxuICBmaW5hbGl6ZSxcbiAgbWFwLFxuICBtYXRlcmlhbGl6ZSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogUmVwcmVzZW50cyBjb25maWcgd2l0aCBuYW1lZCBwYXJhdGVtZXRlcnMgZm9yIGFjdCAqL1xuZXhwb3J0IGludGVyZmFjZSBBY3RDb25maWc8XG4gIElucHV0LFxuICBPdXRwdXRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sXG4gIEVycm9yQWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBDb21wbGV0ZUFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgVW5zdWJzY3JpYmVBY3Rpb24gZXh0ZW5kcyBBY3Rpb25cbj4ge1xuICAvLyBQcm9qZWN0IGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgdGhlIG91dHB1dCBhY3Rpb25zIGluIHN1Y2Nlc3MgY2FzZXNcbiAgcHJvamVjdDogKGlucHV0OiBJbnB1dCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZTxPdXRwdXRBY3Rpb24+O1xuICAvLyBFcnJvciBoYW5kbGUgZnVuY3Rpb24gZm9yIHByb2plY3RcbiAgLy8gZXJyb3IgdGhhdCBoYXBwZW5lZCBkdXJpbmcgcHJvamVjdCBleGVjdXRpb25cbiAgLy8gaW5wdXQgdmFsdWUgdGhhdCBwcm9qZWN0IGVycm9yZWQgd2l0aFxuICBlcnJvcjogKGVycm9yOiBhbnksIGlucHV0OiBJbnB1dCkgPT4gRXJyb3JBY3Rpb247XG4gIC8vIE9wdGlvbmFsIGNvbXBsZXRlIGFjdGlvbiBwcm92aWRlclxuICAvLyBjb3VudCBpcyB0aGUgbnVtYmVyIG9mIGFjdGlvbnMgcHJvamVjdCBlbWl0dGVkIGJlZm9yZSBjb21wbGV0aW9uXG4gIC8vIGlucHV0IHZhbHVlIHRoYXQgcHJvamVjdCBjb21wbGV0ZWQgd2l0aFxuICBjb21wbGV0ZT86IChjb3VudDogbnVtYmVyLCBpbnB1dDogSW5wdXQpID0+IENvbXBsZXRlQWN0aW9uO1xuICAvLyBPcHRpb25hbCBmbGF0dGVuaW5nIG9wZXJhdG9yXG4gIG9wZXJhdG9yPzogPElucHV0LCBPdXRwdXRBY3Rpb24+KFxuICAgIHByb2plY3Q6IChpbnB1dDogSW5wdXQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGU8T3V0cHV0QWN0aW9uPlxuICApID0+IE9wZXJhdG9yRnVuY3Rpb248SW5wdXQsIE91dHB1dEFjdGlvbj47XG4gIC8vIE9wdGlvbmFsIHVuc3Vic2NyaWJlIGFjdGlvbiBwcm92aWRlclxuICAvLyBjb3VudCBpcyB0aGUgbnVtYmVyIG9mIGFjdGlvbnMgcHJvamVjdCBlbWl0dGVkIGJlZm9yZSB1bnN1YnNjcmliaW5nXG4gIC8vIGlucHV0IHZhbHVlIHRoYXQgd2FzIHVuc3Vic2NyaWJlZCBmcm9tXG4gIHVuc3Vic2NyaWJlPzogKGNvdW50OiBudW1iZXIsIGlucHV0OiBJbnB1dCkgPT4gVW5zdWJzY3JpYmVBY3Rpb247XG59XG5cbi8qKlxuICogV3JhcHMgcHJvamVjdCBmbiB3aXRoIGVycm9yIGhhbmRsaW5nIG1ha2luZyBpdCBzYWZlIHRvIHVzZSBpbiBFZmZlY3RzLlxuICogVGFrZXMgZWl0aGVyIGNvbmZpZyB3aXRoIG5hbWVkIHByb3BlcnRpZXMgdGhhdCByZXByZXNlbnQgZGlmZmVyZW50IHBvc3NpYmxlXG4gKiBjYWxsYmFja3Mgb3IgcHJvamVjdC9lcnJvciBjYWxsYmFja3MgdGhhdCBhcmUgcmVxdWlyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3Q8XG4gIElucHV0LFxuICBPdXRwdXRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sXG4gIEVycm9yQWN0aW9uIGV4dGVuZHMgQWN0aW9uXG4+KFxuICBwcm9qZWN0OiAoaW5wdXQ6IElucHV0LCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPE91dHB1dEFjdGlvbj4sXG4gIGVycm9yOiAoZXJyb3I6IGFueSwgaW5wdXQ6IElucHV0KSA9PiBFcnJvckFjdGlvblxuKTogKHNvdXJjZTogT2JzZXJ2YWJsZTxJbnB1dD4pID0+IE9ic2VydmFibGU8T3V0cHV0QWN0aW9uIHwgRXJyb3JBY3Rpb24+O1xuZXhwb3J0IGZ1bmN0aW9uIGFjdDxcbiAgSW5wdXQsXG4gIE91dHB1dEFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgRXJyb3JBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sXG4gIENvbXBsZXRlQWN0aW9uIGV4dGVuZHMgQWN0aW9uID0gbmV2ZXIsXG4gIFVuc3Vic2NyaWJlQWN0aW9uIGV4dGVuZHMgQWN0aW9uID0gbmV2ZXJcbj4oXG4gIGNvbmZpZzogQWN0Q29uZmlnPFxuICAgIElucHV0LFxuICAgIE91dHB1dEFjdGlvbixcbiAgICBFcnJvckFjdGlvbixcbiAgICBDb21wbGV0ZUFjdGlvbixcbiAgICBVbnN1YnNjcmliZUFjdGlvblxuICA+XG4pOiAoXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxJbnB1dD5cbikgPT4gT2JzZXJ2YWJsZTxcbiAgT3V0cHV0QWN0aW9uIHwgRXJyb3JBY3Rpb24gfCBDb21wbGV0ZUFjdGlvbiB8IFVuc3Vic2NyaWJlQWN0aW9uXG4+O1xuZXhwb3J0IGZ1bmN0aW9uIGFjdDxcbiAgSW5wdXQsXG4gIE91dHB1dEFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgRXJyb3JBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sXG4gIENvbXBsZXRlQWN0aW9uIGV4dGVuZHMgQWN0aW9uID0gbmV2ZXIsXG4gIFVuc3Vic2NyaWJlQWN0aW9uIGV4dGVuZHMgQWN0aW9uID0gbmV2ZXJcbj4oXG4gIC8qKiBBbGxvdyB0byB0YWtlIGVpdGhlciBjb25maWcgb2JqZWN0IG9yIHByb2plY3QvZXJyb3IgZnVuY3Rpb25zICovXG4gIGNvbmZpZ09yUHJvamVjdDpcbiAgICB8IEFjdENvbmZpZzxcbiAgICAgICAgSW5wdXQsXG4gICAgICAgIE91dHB1dEFjdGlvbixcbiAgICAgICAgRXJyb3JBY3Rpb24sXG4gICAgICAgIENvbXBsZXRlQWN0aW9uLFxuICAgICAgICBVbnN1YnNjcmliZUFjdGlvblxuICAgICAgPlxuICAgIHwgKChpbnB1dDogSW5wdXQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGU8T3V0cHV0QWN0aW9uPiksXG4gIGVycm9yRm4/OiAoZXJyb3I6IGFueSwgaW5wdXQ6IElucHV0KSA9PiBFcnJvckFjdGlvblxuKTogKFxuICBzb3VyY2U6IE9ic2VydmFibGU8SW5wdXQ+XG4pID0+IE9ic2VydmFibGU8XG4gIE91dHB1dEFjdGlvbiB8IEVycm9yQWN0aW9uIHwgQ29tcGxldGVBY3Rpb24gfCBVbnN1YnNjcmliZUFjdGlvblxuPiB7XG4gIGNvbnN0IHsgcHJvamVjdCwgZXJyb3IsIGNvbXBsZXRlLCBvcGVyYXRvciwgdW5zdWJzY3JpYmUgfSA9XG4gICAgdHlwZW9mIGNvbmZpZ09yUHJvamVjdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyB7XG4gICAgICAgICAgcHJvamVjdDogY29uZmlnT3JQcm9qZWN0LFxuICAgICAgICAgIGVycm9yOiBlcnJvckZuISxcbiAgICAgICAgICBvcGVyYXRvcjogY29uY2F0TWFwLFxuICAgICAgICAgIGNvbXBsZXRlOiB1bmRlZmluZWQsXG4gICAgICAgICAgdW5zdWJzY3JpYmU6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgICAgOiB7IC4uLmNvbmZpZ09yUHJvamVjdCwgb3BlcmF0b3I6IGNvbmZpZ09yUHJvamVjdC5vcGVyYXRvciB8fCBjb25jYXRNYXAgfTtcblxuICB0eXBlIFJlc3VsdEFjdGlvbiA9XG4gICAgfCBPdXRwdXRBY3Rpb25cbiAgICB8IEVycm9yQWN0aW9uXG4gICAgfCBDb21wbGV0ZUFjdGlvblxuICAgIHwgVW5zdWJzY3JpYmVBY3Rpb247XG4gIHJldHVybiBzb3VyY2UgPT5cbiAgICBkZWZlcihcbiAgICAgICgpOiBPYnNlcnZhYmxlPFJlc3VsdEFjdGlvbj4gPT4ge1xuICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8VW5zdWJzY3JpYmVBY3Rpb24+KCk7XG4gICAgICAgIHJldHVybiBtZXJnZShcbiAgICAgICAgICBzb3VyY2UucGlwZShcbiAgICAgICAgICAgIG9wZXJhdG9yKChpbnB1dCwgaW5kZXgpID0+XG4gICAgICAgICAgICAgIGRlZmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdGVkQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0KGlucHV0LCBpbmRleCkucGlwZShcbiAgICAgICAgICAgICAgICAgIG1hdGVyaWFsaXplKCksXG4gICAgICAgICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgICAgICAgIChub3RpZmljYXRpb24pOiBOb3RpZmljYXRpb248UmVzdWx0QWN0aW9uPiB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24ua2luZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25LaW5kLkVSUk9SOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOb3RpZmljYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uS2luZC5ORVhULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKG5vdGlmaWNhdGlvbi5lcnJvciwgaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbktpbmQuQ09NUExFVEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IE5vdGlmaWNhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uS2luZC5ORVhULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZShwcm9qZWN0ZWRDb3VudCwgaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICArK3Byb2plY3RlZENvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcigobik6IG4gaXMgTm9uTnVsbGFibGU8dHlwZW9mIG4+ID0+IG4gIT0gbnVsbCksXG4gICAgICAgICAgICAgICAgICBkZW1hdGVyaWFsaXplKCksXG4gICAgICAgICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcGxldGVkICYmICFlcnJvcmVkICYmIHVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5uZXh0KHVuc3Vic2NyaWJlKHByb2plY3RlZENvdW50LCBpbnB1dCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzdWJqZWN0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbn1cbiJdfQ==
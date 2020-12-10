/**
 * @fileoverview added by tsickle
 * Generated from: src/act.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defer, merge, Notification, Subject, } from 'rxjs';
import { concatMap, dematerialize, filter, finalize, map, materialize, } from 'rxjs/operators';
/**
 * Represents config with named parameters for act
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
        : Object.assign(Object.assign({}, configOrProject), { operator: configOrProject.operator || concatMap });
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => defer((/**
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
                    case 'E':
                        errored = true;
                        return (/** @type {?} */ (new Notification('N', error(notification.error, input))));
                    case 'C':
                        completed = true;
                        return complete
                            ? ((/** @type {?} */ (new Notification('N', complete(projectedCount, input)))))
                            : undefined;
                    default:
                        ++projectedCount;
                        return (/** @type {?} */ (notification));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy8iLCJzb3VyY2VzIjpbInNyYy9hY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxZQUFZLEVBR1osT0FBTyxHQUNSLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLFNBQVMsRUFDVCxhQUFhLEVBQ2IsTUFBTSxFQUNOLFFBQVEsRUFDUixHQUFHLEVBQ0gsV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUd4QiwrQkF5QkM7OztJQWpCQyw0QkFBbUU7O0lBSW5FLDBCQUFpRDs7SUFJakQsNkJBQTJEOztJQUUzRCw2QkFFMkM7O0lBSTNDLGdDQUFpRTs7Ozs7Ozs7QUFtQ25FLE1BQU0sVUFBVSxHQUFHO0FBT2pCLG9FQUFvRTtBQUNwRSxlQVErRCxFQUMvRCxPQUFtRDtVQU03QyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsR0FDdkQsT0FBTyxlQUFlLEtBQUssVUFBVTtRQUNuQyxDQUFDLENBQUM7WUFDRSxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUUsbUJBQUEsT0FBTyxFQUFDO1lBQ2YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLFNBQVM7U0FDdkI7UUFDSCxDQUFDLGlDQUFNLGVBQWUsS0FBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLFFBQVEsSUFBSSxTQUFTLEdBQUU7SUFPN0U7Ozs7SUFBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ2hCLEtBQUs7OztJQUNILEdBQTZCLEVBQUU7O2NBQ3ZCLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBcUI7UUFDaEQsT0FBTyxLQUFLLENBQ1YsTUFBTSxDQUFDLElBQUksQ0FDVCxRQUFROzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3hCLEtBQUs7OztRQUFDLEdBQUcsRUFBRTs7Z0JBQ0wsU0FBUyxHQUFHLEtBQUs7O2dCQUNqQixPQUFPLEdBQUcsS0FBSzs7Z0JBQ2YsY0FBYyxHQUFHLENBQUM7WUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDL0IsV0FBVyxFQUFFLEVBQ2IsR0FBRzs7OztZQUFDLENBQUMsWUFBWSxFQU9ILEVBQUU7Z0JBQ2QsUUFBUSxZQUFZLENBQUMsSUFBSSxFQUFFO29CQUN6QixLQUFLLEdBQUc7d0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDZixPQUFPLG1CQUFBLElBQUksWUFBWSxDQUNyQixHQUFHLEVBQ0gsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQ2pDLEVBR0EsQ0FBQztvQkFDSixLQUFLLEdBQUc7d0JBQ04sU0FBUyxHQUFHLElBQUksQ0FBQzt3QkFDakIsT0FBTyxRQUFROzRCQUNiLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksWUFBWSxDQUNmLEdBQUcsRUFDSCxRQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUNoQyxFQUdBLENBQUM7NEJBQ0osQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFDaEI7d0JBQ0UsRUFBRSxjQUFjLENBQUM7d0JBQ2pCLE9BQU8sbUJBQUEsWUFBWSxFQUdsQixDQUFDO2lCQUNMO1lBQ0gsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUE4QixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBQyxFQUNwRCxhQUFhLEVBQUUsRUFDZixRQUFROzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sSUFBSSxXQUFXLEVBQUU7b0JBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNsRDtZQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUFDSixDQUFDLEVBQUMsRUFDSCxDQUNGLEVBQ0QsT0FBTyxDQUNSLENBQUM7SUFDSixDQUFDLEVBQ0YsRUFBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBkZWZlcixcbiAgbWVyZ2UsXG4gIE5vdGlmaWNhdGlvbixcbiAgT2JzZXJ2YWJsZSxcbiAgT3BlcmF0b3JGdW5jdGlvbixcbiAgU3ViamVjdCxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjb25jYXRNYXAsXG4gIGRlbWF0ZXJpYWxpemUsXG4gIGZpbHRlcixcbiAgZmluYWxpemUsXG4gIG1hcCxcbiAgbWF0ZXJpYWxpemUsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIFJlcHJlc2VudHMgY29uZmlnIHdpdGggbmFtZWQgcGFyYW1ldGVycyBmb3IgYWN0ICovXG5leHBvcnQgaW50ZXJmYWNlIEFjdENvbmZpZzxcbiAgSW5wdXQsXG4gIE91dHB1dEFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgRXJyb3JBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sXG4gIENvbXBsZXRlQWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBVbnN1YnNjcmliZUFjdGlvbiBleHRlbmRzIEFjdGlvblxuPiB7XG4gIC8vIFByb2plY3QgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyB0aGUgb3V0cHV0IGFjdGlvbnMgaW4gc3VjY2VzcyBjYXNlc1xuICBwcm9qZWN0OiAoaW5wdXQ6IElucHV0LCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPE91dHB1dEFjdGlvbj47XG4gIC8vIEVycm9yIGhhbmRsZSBmdW5jdGlvbiBmb3IgcHJvamVjdFxuICAvLyBlcnJvciB0aGF0IGhhcHBlbmVkIGR1cmluZyBwcm9qZWN0IGV4ZWN1dGlvblxuICAvLyBpbnB1dCB2YWx1ZSB0aGF0IHByb2plY3QgZXJyb3JlZCB3aXRoXG4gIGVycm9yOiAoZXJyb3I6IGFueSwgaW5wdXQ6IElucHV0KSA9PiBFcnJvckFjdGlvbjtcbiAgLy8gT3B0aW9uYWwgY29tcGxldGUgYWN0aW9uIHByb3ZpZGVyXG4gIC8vIGNvdW50IGlzIHRoZSBudW1iZXIgb2YgYWN0aW9ucyBwcm9qZWN0IGVtaXR0ZWQgYmVmb3JlIGNvbXBsZXRpb25cbiAgLy8gaW5wdXQgdmFsdWUgdGhhdCBwcm9qZWN0IGNvbXBsZXRlZCB3aXRoXG4gIGNvbXBsZXRlPzogKGNvdW50OiBudW1iZXIsIGlucHV0OiBJbnB1dCkgPT4gQ29tcGxldGVBY3Rpb247XG4gIC8vIE9wdGlvbmFsIGZsYXR0ZW5pbmcgb3BlcmF0b3JcbiAgb3BlcmF0b3I/OiA8SW5wdXQsIE91dHB1dEFjdGlvbj4oXG4gICAgcHJvamVjdDogKGlucHV0OiBJbnB1dCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZTxPdXRwdXRBY3Rpb24+XG4gICkgPT4gT3BlcmF0b3JGdW5jdGlvbjxJbnB1dCwgT3V0cHV0QWN0aW9uPjtcbiAgLy8gT3B0aW9uYWwgdW5zdWJzY3JpYmUgYWN0aW9uIHByb3ZpZGVyXG4gIC8vIGNvdW50IGlzIHRoZSBudW1iZXIgb2YgYWN0aW9ucyBwcm9qZWN0IGVtaXR0ZWQgYmVmb3JlIHVuc3Vic2NyaWJpbmdcbiAgLy8gaW5wdXQgdmFsdWUgdGhhdCB3YXMgdW5zdWJzY3JpYmVkIGZyb21cbiAgdW5zdWJzY3JpYmU/OiAoY291bnQ6IG51bWJlciwgaW5wdXQ6IElucHV0KSA9PiBVbnN1YnNjcmliZUFjdGlvbjtcbn1cblxuLyoqXG4gKiBXcmFwcyBwcm9qZWN0IGZuIHdpdGggZXJyb3IgaGFuZGxpbmcgbWFraW5nIGl0IHNhZmUgdG8gdXNlIGluIEVmZmVjdHMuXG4gKiBUYWtlcyBlaXRoZXIgY29uZmlnIHdpdGggbmFtZWQgcHJvcGVydGllcyB0aGF0IHJlcHJlc2VudCBkaWZmZXJlbnQgcG9zc2libGVcbiAqIGNhbGxiYWNrcyBvciBwcm9qZWN0L2Vycm9yIGNhbGxiYWNrcyB0aGF0IGFyZSByZXF1aXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdDxcbiAgSW5wdXQsXG4gIE91dHB1dEFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgRXJyb3JBY3Rpb24gZXh0ZW5kcyBBY3Rpb25cbj4oXG4gIHByb2plY3Q6IChpbnB1dDogSW5wdXQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGU8T3V0cHV0QWN0aW9uPixcbiAgZXJyb3I6IChlcnJvcjogYW55LCBpbnB1dDogSW5wdXQpID0+IEVycm9yQWN0aW9uXG4pOiAoc291cmNlOiBPYnNlcnZhYmxlPElucHV0PikgPT4gT2JzZXJ2YWJsZTxPdXRwdXRBY3Rpb24gfCBFcnJvckFjdGlvbj47XG5leHBvcnQgZnVuY3Rpb24gYWN0PFxuICBJbnB1dCxcbiAgT3V0cHV0QWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBFcnJvckFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgQ29tcGxldGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlcixcbiAgVW5zdWJzY3JpYmVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlclxuPihcbiAgY29uZmlnOiBBY3RDb25maWc8XG4gICAgSW5wdXQsXG4gICAgT3V0cHV0QWN0aW9uLFxuICAgIEVycm9yQWN0aW9uLFxuICAgIENvbXBsZXRlQWN0aW9uLFxuICAgIFVuc3Vic2NyaWJlQWN0aW9uXG4gID5cbik6IChcbiAgc291cmNlOiBPYnNlcnZhYmxlPElucHV0PlxuKSA9PiBPYnNlcnZhYmxlPFxuICBPdXRwdXRBY3Rpb24gfCBFcnJvckFjdGlvbiB8IENvbXBsZXRlQWN0aW9uIHwgVW5zdWJzY3JpYmVBY3Rpb25cbj47XG5leHBvcnQgZnVuY3Rpb24gYWN0PFxuICBJbnB1dCxcbiAgT3V0cHV0QWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBFcnJvckFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgQ29tcGxldGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlcixcbiAgVW5zdWJzY3JpYmVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlclxuPihcbiAgLyoqIEFsbG93IHRvIHRha2UgZWl0aGVyIGNvbmZpZyBvYmplY3Qgb3IgcHJvamVjdC9lcnJvciBmdW5jdGlvbnMgKi9cbiAgY29uZmlnT3JQcm9qZWN0OlxuICAgIHwgQWN0Q29uZmlnPFxuICAgICAgICBJbnB1dCxcbiAgICAgICAgT3V0cHV0QWN0aW9uLFxuICAgICAgICBFcnJvckFjdGlvbixcbiAgICAgICAgQ29tcGxldGVBY3Rpb24sXG4gICAgICAgIFVuc3Vic2NyaWJlQWN0aW9uXG4gICAgICA+XG4gICAgfCAoKGlucHV0OiBJbnB1dCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZTxPdXRwdXRBY3Rpb24+KSxcbiAgZXJyb3JGbj86IChlcnJvcjogYW55LCBpbnB1dDogSW5wdXQpID0+IEVycm9yQWN0aW9uXG4pOiAoXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxJbnB1dD5cbikgPT4gT2JzZXJ2YWJsZTxcbiAgT3V0cHV0QWN0aW9uIHwgRXJyb3JBY3Rpb24gfCBDb21wbGV0ZUFjdGlvbiB8IFVuc3Vic2NyaWJlQWN0aW9uXG4+IHtcbiAgY29uc3QgeyBwcm9qZWN0LCBlcnJvciwgY29tcGxldGUsIG9wZXJhdG9yLCB1bnN1YnNjcmliZSB9ID1cbiAgICB0eXBlb2YgY29uZmlnT3JQcm9qZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHtcbiAgICAgICAgICBwcm9qZWN0OiBjb25maWdPclByb2plY3QsXG4gICAgICAgICAgZXJyb3I6IGVycm9yRm4hLFxuICAgICAgICAgIG9wZXJhdG9yOiBjb25jYXRNYXAsXG4gICAgICAgICAgY29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5kZWZpbmVkLFxuICAgICAgICB9XG4gICAgICA6IHsgLi4uY29uZmlnT3JQcm9qZWN0LCBvcGVyYXRvcjogY29uZmlnT3JQcm9qZWN0Lm9wZXJhdG9yIHx8IGNvbmNhdE1hcCB9O1xuXG4gIHR5cGUgUmVzdWx0QWN0aW9uID1cbiAgICB8IE91dHB1dEFjdGlvblxuICAgIHwgRXJyb3JBY3Rpb25cbiAgICB8IENvbXBsZXRlQWN0aW9uXG4gICAgfCBVbnN1YnNjcmliZUFjdGlvbjtcbiAgcmV0dXJuIChzb3VyY2UpID0+XG4gICAgZGVmZXIoXG4gICAgICAoKTogT2JzZXJ2YWJsZTxSZXN1bHRBY3Rpb24+ID0+IHtcbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PFVuc3Vic2NyaWJlQWN0aW9uPigpO1xuICAgICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgICAgc291cmNlLnBpcGUoXG4gICAgICAgICAgICBvcGVyYXRvcigoaW5wdXQsIGluZGV4KSA9PlxuICAgICAgICAgICAgICBkZWZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBlcnJvcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RlZENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdChpbnB1dCwgaW5kZXgpLnBpcGUoXG4gICAgICAgICAgICAgICAgICBtYXRlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgICAgbWFwKChub3RpZmljYXRpb24pOlxuICAgICAgICAgICAgICAgICAgICB8IChOb3RpZmljYXRpb248XG4gICAgICAgICAgICAgICAgICAgICAgICBFcnJvckFjdGlvbiB8IENvbXBsZXRlQWN0aW9uIHwgT3V0cHV0QWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPiAmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBFcnJvckFjdGlvbiB8IENvbXBsZXRlQWN0aW9uIHwgT3V0cHV0QWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24ua2luZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ04nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihub3RpZmljYXRpb24uZXJyb3IsIGlucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSBhcyBOb3RpZmljYXRpb248RXJyb3JBY3Rpb24+ICYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBFcnJvckFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gKG5ldyBOb3RpZmljYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZShwcm9qZWN0ZWRDb3VudCwgaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBhcyBOb3RpZmljYXRpb248Q29tcGxldGVBY3Rpb24+ICYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ04nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IENvbXBsZXRlQWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICArK3Byb2plY3RlZENvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbiBhcyBOb3RpZmljYXRpb248T3V0cHV0QWN0aW9uPiAmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ04nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogT3V0cHV0QWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBmaWx0ZXIoKG4pOiBuIGlzIE5vbk51bGxhYmxlPHR5cGVvZiBuPiA9PiBuICE9IG51bGwpLFxuICAgICAgICAgICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRlZCAmJiAhZXJyb3JlZCAmJiB1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dCh1bnN1YnNjcmliZShwcm9qZWN0ZWRDb3VudCwgaW5wdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgc3ViamVjdFxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG59XG4iXX0=
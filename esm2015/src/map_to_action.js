/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defer, merge, Notification, Subject, NotificationKind, } from 'rxjs';
import { concatMap, dematerialize, filter, finalize, map, materialize, } from 'rxjs/operators';
/**
 * Represents config with named paratemeters for mapToAction
 * @record
 * @template Input, OutputAction, ErrorAction, CompleteAction, UnsubscribeAction
 */
export function MapToActionConfig() { }
if (false) {
    /** @type {?} */
    MapToActionConfig.prototype.project;
    /** @type {?} */
    MapToActionConfig.prototype.error;
    /** @type {?|undefined} */
    MapToActionConfig.prototype.complete;
    /** @type {?|undefined} */
    MapToActionConfig.prototype.operator;
    /** @type {?|undefined} */
    MapToActionConfig.prototype.unsubscribe;
}
/**
 * @template Input, OutputAction, ErrorAction, CompleteAction, UnsubscribeAction
 * @param {?} configOrProject
 * @param {?=} errorFn
 * @return {?}
 */
export function mapToAction(
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwX3RvX2FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvbWFwX3RvX2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsWUFBWSxFQUdaLE9BQU8sRUFDUCxnQkFBZ0IsR0FDakIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsU0FBUyxFQUNULGFBQWEsRUFDYixNQUFNLEVBQ04sUUFBUSxFQUNSLEdBQUcsRUFDSCxXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBR3hCLHVDQXlCQzs7O0lBakJDLG9DQUFtRTs7SUFJbkUsa0NBQWlEOztJQUlqRCxxQ0FBMkQ7O0lBRTNELHFDQUUyQzs7SUFJM0Msd0NBQWlFOzs7Ozs7OztBQW1DbkUsTUFBTSxVQUFVLFdBQVc7QUFPekIsb0VBQW9FO0FBQ3BFLGVBUStELEVBQy9ELE9BQW1EO1VBTTdDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxHQUN2RCxPQUFPLGVBQWUsS0FBSyxVQUFVO1FBQ25DLENBQUMsQ0FBQztZQUNFLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRSxtQkFBQSxPQUFPLEVBQUM7WUFDZixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsU0FBUztTQUN2QjtRQUNILENBQUMsbUJBQU0sZUFBZSxJQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsUUFBUSxJQUFJLFNBQVMsR0FBRTtJQU83RTs7OztJQUFPLE1BQU0sQ0FBQyxFQUFFLENBQ2QsS0FBSzs7O0lBQ0gsR0FBNkIsRUFBRTs7Y0FDdkIsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFxQjtRQUNoRCxPQUFPLEtBQUssQ0FDVixNQUFNLENBQUMsSUFBSSxDQUNULFFBQVE7Ozs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDeEIsS0FBSzs7O1FBQUMsR0FBRyxFQUFFOztnQkFDTCxTQUFTLEdBQUcsS0FBSzs7Z0JBQ2pCLE9BQU8sR0FBRyxLQUFLOztnQkFDZixjQUFjLEdBQUcsQ0FBQztZQUN0QixPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUMvQixXQUFXLEVBQUUsRUFDYixHQUFHOzs7O1lBQ0QsQ0FBQyxZQUFZLEVBQTBDLEVBQUU7Z0JBQ3ZELFFBQVEsWUFBWSxDQUFDLElBQUksRUFBRTtvQkFDekIsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLO3dCQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNmLE9BQU8sSUFBSSxZQUFZLENBQ3JCLGdCQUFnQixDQUFDLElBQUksRUFDckIsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQ2pDLENBQUM7b0JBQ0osS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRO3dCQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUNqQixPQUFPLFFBQVE7NEJBQ2IsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUNkLGdCQUFnQixDQUFDLElBQUksRUFDckIsUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FDaEM7NEJBQ0gsQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFDaEI7d0JBQ0UsRUFBRSxjQUFjLENBQUM7d0JBQ2pCLE9BQU8sWUFBWSxDQUFDO2lCQUN2QjtZQUNILENBQUMsRUFDRixFQUNELE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBOEIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUMsRUFDcEQsYUFBYSxFQUFFLEVBQ2YsUUFBUTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLElBQUksV0FBVyxFQUFFO29CQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxFQUFDLEVBQ0gsQ0FDRixFQUNELE9BQU8sQ0FDUixDQUFDO0lBQ0osQ0FBQyxFQUNGLEVBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgZGVmZXIsXG4gIG1lcmdlLFxuICBOb3RpZmljYXRpb24sXG4gIE9ic2VydmFibGUsXG4gIE9wZXJhdG9yRnVuY3Rpb24sXG4gIFN1YmplY3QsXG4gIE5vdGlmaWNhdGlvbktpbmQsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY29uY2F0TWFwLFxuICBkZW1hdGVyaWFsaXplLFxuICBmaWx0ZXIsXG4gIGZpbmFsaXplLFxuICBtYXAsXG4gIG1hdGVyaWFsaXplLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBSZXByZXNlbnRzIGNvbmZpZyB3aXRoIG5hbWVkIHBhcmF0ZW1ldGVycyBmb3IgbWFwVG9BY3Rpb24gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFwVG9BY3Rpb25Db25maWc8XG4gIElucHV0LFxuICBPdXRwdXRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sXG4gIEVycm9yQWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBDb21wbGV0ZUFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgVW5zdWJzY3JpYmVBY3Rpb24gZXh0ZW5kcyBBY3Rpb25cbj4ge1xuICAvLyBQcm9qZWN0IGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgdGhlIG91dHB1dCBhY3Rpb25zIGluIHN1Y2Nlc3MgY2FzZXNcbiAgcHJvamVjdDogKGlucHV0OiBJbnB1dCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZTxPdXRwdXRBY3Rpb24+O1xuICAvLyBFcnJvciBoYW5kbGUgZnVuY3Rpb24gZm9yIHByb2plY3RcbiAgLy8gZXJyb3IgdGhhdCBoYXBwZW5lZCBkdXJpbmcgcHJvamVjdCBleGVjdXRpb25cbiAgLy8gaW5wdXQgdmFsdWUgdGhhdCBwcm9qZWN0IGVycm9yZWQgd2l0aFxuICBlcnJvcjogKGVycm9yOiBhbnksIGlucHV0OiBJbnB1dCkgPT4gRXJyb3JBY3Rpb247XG4gIC8vIE9wdGlvbmFsIGNvbXBsZXRlIGFjdGlvbiBwcm92aWRlclxuICAvLyBjb3VudCBpcyB0aGUgbnVtYmVyIG9mIGFjdGlvbnMgcHJvamVjdCBlbWl0dGVkIGJlZm9yZSBjb21wbGV0aW9uXG4gIC8vIGlucHV0IHZhbHVlIHRoYXQgcHJvamVjdCBjb21wbGV0ZWQgd2l0aFxuICBjb21wbGV0ZT86IChjb3VudDogbnVtYmVyLCBpbnB1dDogSW5wdXQpID0+IENvbXBsZXRlQWN0aW9uO1xuICAvLyBPcHRpb25hbCBmbGF0dGVuaW5nIG9wZXJhdG9yXG4gIG9wZXJhdG9yPzogPElucHV0LCBPdXRwdXRBY3Rpb24+KFxuICAgIHByb2plY3Q6IChpbnB1dDogSW5wdXQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGU8T3V0cHV0QWN0aW9uPlxuICApID0+IE9wZXJhdG9yRnVuY3Rpb248SW5wdXQsIE91dHB1dEFjdGlvbj47XG4gIC8vIE9wdGlvbmFsIHVuc3Vic2NyaWJlIGFjdGlvbiBwcm92aWRlclxuICAvLyBjb3VudCBpcyB0aGUgbnVtYmVyIG9mIGFjdGlvbnMgcHJvamVjdCBlbWl0dGVkIGJlZm9yZSB1bnN1YnNjcmliaW5nXG4gIC8vIGlucHV0IHZhbHVlIHRoYXQgd2FzIHVuc3Vic2NyaWJlZCBmcm9tXG4gIHVuc3Vic2NyaWJlPzogKGNvdW50OiBudW1iZXIsIGlucHV0OiBJbnB1dCkgPT4gVW5zdWJzY3JpYmVBY3Rpb247XG59XG5cbi8qKlxuICogV3JhcHMgcHJvamVjdCBmbiB3aXRoIGVycm9yIGhhbmRsaW5nIG1ha2luZyBpdCBzYWZlIHRvIHVzZSBpbiBFZmZlY3RzLlxuICogVGFrZXMgZWl0aGVyIGNvbmZpZyB3aXRoIG5hbWVkIHByb3BlcnRpZXMgdGhhdCByZXByZXNlbnQgZGlmZmVyZW50IHBvc3NpYmxlXG4gKiBjYWxsYmFja3Mgb3IgcHJvamVjdC9lcnJvciBjYWxsYmFja3MgdGhhdCBhcmUgcmVxdWlyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb0FjdGlvbjxcbiAgSW5wdXQsXG4gIE91dHB1dEFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgRXJyb3JBY3Rpb24gZXh0ZW5kcyBBY3Rpb25cbj4oXG4gIHByb2plY3Q6IChpbnB1dDogSW5wdXQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGU8T3V0cHV0QWN0aW9uPixcbiAgZXJyb3I6IChlcnJvcjogYW55LCBpbnB1dDogSW5wdXQpID0+IEVycm9yQWN0aW9uXG4pOiAoc291cmNlOiBPYnNlcnZhYmxlPElucHV0PikgPT4gT2JzZXJ2YWJsZTxPdXRwdXRBY3Rpb24gfCBFcnJvckFjdGlvbj47XG5leHBvcnQgZnVuY3Rpb24gbWFwVG9BY3Rpb248XG4gIElucHV0LFxuICBPdXRwdXRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sXG4gIEVycm9yQWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBDb21wbGV0ZUFjdGlvbiBleHRlbmRzIEFjdGlvbiA9IG5ldmVyLFxuICBVbnN1YnNjcmliZUFjdGlvbiBleHRlbmRzIEFjdGlvbiA9IG5ldmVyXG4+KFxuICBjb25maWc6IE1hcFRvQWN0aW9uQ29uZmlnPFxuICAgIElucHV0LFxuICAgIE91dHB1dEFjdGlvbixcbiAgICBFcnJvckFjdGlvbixcbiAgICBDb21wbGV0ZUFjdGlvbixcbiAgICBVbnN1YnNjcmliZUFjdGlvblxuICA+XG4pOiAoXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxJbnB1dD5cbikgPT4gT2JzZXJ2YWJsZTxcbiAgT3V0cHV0QWN0aW9uIHwgRXJyb3JBY3Rpb24gfCBDb21wbGV0ZUFjdGlvbiB8IFVuc3Vic2NyaWJlQWN0aW9uXG4+O1xuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvQWN0aW9uPFxuICBJbnB1dCxcbiAgT3V0cHV0QWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBFcnJvckFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgQ29tcGxldGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlcixcbiAgVW5zdWJzY3JpYmVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlclxuPihcbiAgLyoqIEFsbG93IHRvIHRha2UgZWl0aGVyIGNvbmZpZyBvYmplY3Qgb3IgcHJvamVjdC9lcnJvciBmdW5jdGlvbnMgKi9cbiAgY29uZmlnT3JQcm9qZWN0OlxuICAgIHwgTWFwVG9BY3Rpb25Db25maWc8XG4gICAgICAgIElucHV0LFxuICAgICAgICBPdXRwdXRBY3Rpb24sXG4gICAgICAgIEVycm9yQWN0aW9uLFxuICAgICAgICBDb21wbGV0ZUFjdGlvbixcbiAgICAgICAgVW5zdWJzY3JpYmVBY3Rpb25cbiAgICAgID5cbiAgICB8ICgoaW5wdXQ6IElucHV0LCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPE91dHB1dEFjdGlvbj4pLFxuICBlcnJvckZuPzogKGVycm9yOiBhbnksIGlucHV0OiBJbnB1dCkgPT4gRXJyb3JBY3Rpb25cbik6IChcbiAgc291cmNlOiBPYnNlcnZhYmxlPElucHV0PlxuKSA9PiBPYnNlcnZhYmxlPFxuICBPdXRwdXRBY3Rpb24gfCBFcnJvckFjdGlvbiB8IENvbXBsZXRlQWN0aW9uIHwgVW5zdWJzY3JpYmVBY3Rpb25cbj4ge1xuICBjb25zdCB7IHByb2plY3QsIGVycm9yLCBjb21wbGV0ZSwgb3BlcmF0b3IsIHVuc3Vic2NyaWJlIH0gPVxuICAgIHR5cGVvZiBjb25maWdPclByb2plY3QgPT09ICdmdW5jdGlvbidcbiAgICAgID8ge1xuICAgICAgICAgIHByb2plY3Q6IGNvbmZpZ09yUHJvamVjdCxcbiAgICAgICAgICBlcnJvcjogZXJyb3JGbiEsXG4gICAgICAgICAgb3BlcmF0b3I6IGNvbmNhdE1hcCxcbiAgICAgICAgICBjb21wbGV0ZTogdW5kZWZpbmVkLFxuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICAgIDogeyAuLi5jb25maWdPclByb2plY3QsIG9wZXJhdG9yOiBjb25maWdPclByb2plY3Qub3BlcmF0b3IgfHwgY29uY2F0TWFwIH07XG5cbiAgdHlwZSBSZXN1bHRBY3Rpb24gPVxuICAgIHwgT3V0cHV0QWN0aW9uXG4gICAgfCBFcnJvckFjdGlvblxuICAgIHwgQ29tcGxldGVBY3Rpb25cbiAgICB8IFVuc3Vic2NyaWJlQWN0aW9uO1xuICByZXR1cm4gc291cmNlID0+XG4gICAgZGVmZXIoXG4gICAgICAoKTogT2JzZXJ2YWJsZTxSZXN1bHRBY3Rpb24+ID0+IHtcbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PFVuc3Vic2NyaWJlQWN0aW9uPigpO1xuICAgICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgICAgc291cmNlLnBpcGUoXG4gICAgICAgICAgICBvcGVyYXRvcigoaW5wdXQsIGluZGV4KSA9PlxuICAgICAgICAgICAgICBkZWZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBlcnJvcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RlZENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdChpbnB1dCwgaW5kZXgpLnBpcGUoXG4gICAgICAgICAgICAgICAgICBtYXRlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgICAgICAobm90aWZpY2F0aW9uKTogTm90aWZpY2F0aW9uPFJlc3VsdEFjdGlvbj4gfCB1bmRlZmluZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobm90aWZpY2F0aW9uLmtpbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9uS2luZC5FUlJPUjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbktpbmQuTkVYVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihub3RpZmljYXRpb24uZXJyb3IsIGlucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25LaW5kLkNPTVBMRVRFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBOb3RpZmljYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbktpbmQuTkVYVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUocHJvamVjdGVkQ291bnQsIGlucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKytwcm9qZWN0ZWRDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBmaWx0ZXIoKG4pOiBuIGlzIE5vbk51bGxhYmxlPHR5cGVvZiBuPiA9PiBuICE9IG51bGwpLFxuICAgICAgICAgICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRlZCAmJiAhZXJyb3JlZCAmJiB1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dCh1bnN1YnNjcmliZShwcm9qZWN0ZWRDb3VudCwgaW5wdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgc3ViamVjdFxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG59XG4iXX0=
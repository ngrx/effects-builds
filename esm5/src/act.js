var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @fileoverview added by tsickle
 * Generated from: src/act.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defer, merge, Notification, Subject, } from 'rxjs';
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
    var _a = typeof configOrProject === 'function'
        ? {
            project: configOrProject,
            error: (/** @type {?} */ (errorFn)),
            operator: concatMap,
            complete: undefined,
            unsubscribe: undefined,
        }
        : __assign(__assign({}, configOrProject), { operator: configOrProject.operator || concatMap }), project = _a.project, error = _a.error, complete = _a.complete, operator = _a.operator, unsubscribe = _a.unsubscribe;
    return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return defer((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var subject = new Subject();
            return merge(source.pipe(operator((/**
             * @param {?} input
             * @param {?} index
             * @return {?}
             */
            function (input, index) {
                return defer((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var completed = false;
                    /** @type {?} */
                    var errored = false;
                    /** @type {?} */
                    var projectedCount = 0;
                    return project(input, index).pipe(materialize(), map((/**
                     * @param {?} notification
                     * @return {?}
                     */
                    function (notification) {
                        switch (notification.kind) {
                            case 'E':
                                errored = true;
                                return new Notification((/** @type {?} */ (
                                // TODO: remove any in RxJS 6.5
                                'N')), error(notification.error, input));
                            case 'C':
                                completed = true;
                                return complete
                                    ? new Notification((/** @type {?} */ (
                                    // TODO: remove any in RxJS 6.5
                                    'N')), complete(projectedCount, input))
                                    : undefined;
                            default:
                                ++projectedCount;
                                return notification;
                        }
                    })), filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n != null; })), dematerialize(), finalize((/**
                     * @return {?}
                     */
                    function () {
                        if (!completed && !errored && unsubscribe) {
                            subject.next(unsubscribe(projectedCount, input));
                        }
                    })));
                }));
            }))), subject);
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5ncngvZWZmZWN0cy8iLCJzb3VyY2VzIjpbInNyYy9hY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFlBQVksRUFHWixPQUFPLEdBQ1IsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsU0FBUyxFQUNULGFBQWEsRUFDYixNQUFNLEVBQ04sUUFBUSxFQUNSLEdBQUcsRUFDSCxXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBR3hCLCtCQXlCQzs7O0lBakJDLDRCQUFtRTs7SUFJbkUsMEJBQWlEOztJQUlqRCw2QkFBMkQ7O0lBRTNELDZCQUUyQzs7SUFJM0MsZ0NBQWlFOzs7Ozs7OztBQW1DbkUsTUFBTSxVQUFVLEdBQUc7QUFPakIsb0VBQW9FO0FBQ3BFLGVBUStELEVBQy9ELE9BQW1EO0lBTTdDLElBQUE7Ozs7Ozs7O3NHQVN1RSxFQVRyRSxvQkFBTyxFQUFFLGdCQUFLLEVBQUUsc0JBQVEsRUFBRSxzQkFBUSxFQUFFLDRCQVNpQztJQU83RTs7OztJQUFPLFVBQUMsTUFBTTtRQUNaLE9BQUEsS0FBSzs7O1FBQ0g7O2dCQUNRLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBcUI7WUFDaEQsT0FBTyxLQUFLLENBQ1YsTUFBTSxDQUFDLElBQUksQ0FDVCxRQUFROzs7OztZQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7Z0JBQ3BCLE9BQUEsS0FBSzs7O2dCQUFDOzt3QkFDQSxTQUFTLEdBQUcsS0FBSzs7d0JBQ2pCLE9BQU8sR0FBRyxLQUFLOzt3QkFDZixjQUFjLEdBQUcsQ0FBQztvQkFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDL0IsV0FBVyxFQUFFLEVBQ2IsR0FBRzs7OztvQkFBQyxVQUFDLFlBQVk7d0JBR2YsUUFBUSxZQUFZLENBQUMsSUFBSSxFQUFFOzRCQUN6QixLQUFLLEdBQUc7Z0NBQ04sT0FBTyxHQUFHLElBQUksQ0FBQztnQ0FDZixPQUFPLElBQUksWUFBWSxDQUVyQjtnQ0FEQSwrQkFBK0I7Z0NBQy9CLEdBQUcsRUFBTyxFQUNWLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUNqQyxDQUFDOzRCQUNKLEtBQUssR0FBRztnQ0FDTixTQUFTLEdBQUcsSUFBSSxDQUFDO2dDQUNqQixPQUFPLFFBQVE7b0NBQ2IsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUVkO29DQURBLCtCQUErQjtvQ0FDL0IsR0FBRyxFQUFPLEVBQ1YsUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FDaEM7b0NBQ0gsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDaEI7Z0NBQ0UsRUFBRSxjQUFjLENBQUM7Z0NBQ2pCLE9BQU8sWUFBWSxDQUFDO3lCQUN2QjtvQkFDSCxDQUFDLEVBQUMsRUFDRixNQUFNOzs7O29CQUFDLFVBQUMsQ0FBQyxJQUFpQyxPQUFBLENBQUMsSUFBSSxJQUFJLEVBQVQsQ0FBUyxFQUFDLEVBQ3BELGFBQWEsRUFBRSxFQUNmLFFBQVE7OztvQkFBQzt3QkFDUCxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxJQUFJLFdBQVcsRUFBRTs0QkFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQ2xEO29CQUNILENBQUMsRUFBQyxDQUNILENBQUM7Z0JBQ0osQ0FBQyxFQUFDO1lBdkNGLENBdUNFLEVBQ0gsQ0FDRixFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0osQ0FBQyxFQUNGO0lBbkRELENBbURDLEVBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgZGVmZXIsXG4gIG1lcmdlLFxuICBOb3RpZmljYXRpb24sXG4gIE9ic2VydmFibGUsXG4gIE9wZXJhdG9yRnVuY3Rpb24sXG4gIFN1YmplY3QsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY29uY2F0TWFwLFxuICBkZW1hdGVyaWFsaXplLFxuICBmaWx0ZXIsXG4gIGZpbmFsaXplLFxuICBtYXAsXG4gIG1hdGVyaWFsaXplLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBSZXByZXNlbnRzIGNvbmZpZyB3aXRoIG5hbWVkIHBhcmF0ZW1ldGVycyBmb3IgYWN0ICovXG5leHBvcnQgaW50ZXJmYWNlIEFjdENvbmZpZzxcbiAgSW5wdXQsXG4gIE91dHB1dEFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgRXJyb3JBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sXG4gIENvbXBsZXRlQWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBVbnN1YnNjcmliZUFjdGlvbiBleHRlbmRzIEFjdGlvblxuPiB7XG4gIC8vIFByb2plY3QgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyB0aGUgb3V0cHV0IGFjdGlvbnMgaW4gc3VjY2VzcyBjYXNlc1xuICBwcm9qZWN0OiAoaW5wdXQ6IElucHV0LCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPE91dHB1dEFjdGlvbj47XG4gIC8vIEVycm9yIGhhbmRsZSBmdW5jdGlvbiBmb3IgcHJvamVjdFxuICAvLyBlcnJvciB0aGF0IGhhcHBlbmVkIGR1cmluZyBwcm9qZWN0IGV4ZWN1dGlvblxuICAvLyBpbnB1dCB2YWx1ZSB0aGF0IHByb2plY3QgZXJyb3JlZCB3aXRoXG4gIGVycm9yOiAoZXJyb3I6IGFueSwgaW5wdXQ6IElucHV0KSA9PiBFcnJvckFjdGlvbjtcbiAgLy8gT3B0aW9uYWwgY29tcGxldGUgYWN0aW9uIHByb3ZpZGVyXG4gIC8vIGNvdW50IGlzIHRoZSBudW1iZXIgb2YgYWN0aW9ucyBwcm9qZWN0IGVtaXR0ZWQgYmVmb3JlIGNvbXBsZXRpb25cbiAgLy8gaW5wdXQgdmFsdWUgdGhhdCBwcm9qZWN0IGNvbXBsZXRlZCB3aXRoXG4gIGNvbXBsZXRlPzogKGNvdW50OiBudW1iZXIsIGlucHV0OiBJbnB1dCkgPT4gQ29tcGxldGVBY3Rpb247XG4gIC8vIE9wdGlvbmFsIGZsYXR0ZW5pbmcgb3BlcmF0b3JcbiAgb3BlcmF0b3I/OiA8SW5wdXQsIE91dHB1dEFjdGlvbj4oXG4gICAgcHJvamVjdDogKGlucHV0OiBJbnB1dCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZTxPdXRwdXRBY3Rpb24+XG4gICkgPT4gT3BlcmF0b3JGdW5jdGlvbjxJbnB1dCwgT3V0cHV0QWN0aW9uPjtcbiAgLy8gT3B0aW9uYWwgdW5zdWJzY3JpYmUgYWN0aW9uIHByb3ZpZGVyXG4gIC8vIGNvdW50IGlzIHRoZSBudW1iZXIgb2YgYWN0aW9ucyBwcm9qZWN0IGVtaXR0ZWQgYmVmb3JlIHVuc3Vic2NyaWJpbmdcbiAgLy8gaW5wdXQgdmFsdWUgdGhhdCB3YXMgdW5zdWJzY3JpYmVkIGZyb21cbiAgdW5zdWJzY3JpYmU/OiAoY291bnQ6IG51bWJlciwgaW5wdXQ6IElucHV0KSA9PiBVbnN1YnNjcmliZUFjdGlvbjtcbn1cblxuLyoqXG4gKiBXcmFwcyBwcm9qZWN0IGZuIHdpdGggZXJyb3IgaGFuZGxpbmcgbWFraW5nIGl0IHNhZmUgdG8gdXNlIGluIEVmZmVjdHMuXG4gKiBUYWtlcyBlaXRoZXIgY29uZmlnIHdpdGggbmFtZWQgcHJvcGVydGllcyB0aGF0IHJlcHJlc2VudCBkaWZmZXJlbnQgcG9zc2libGVcbiAqIGNhbGxiYWNrcyBvciBwcm9qZWN0L2Vycm9yIGNhbGxiYWNrcyB0aGF0IGFyZSByZXF1aXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdDxcbiAgSW5wdXQsXG4gIE91dHB1dEFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgRXJyb3JBY3Rpb24gZXh0ZW5kcyBBY3Rpb25cbj4oXG4gIHByb2plY3Q6IChpbnB1dDogSW5wdXQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGU8T3V0cHV0QWN0aW9uPixcbiAgZXJyb3I6IChlcnJvcjogYW55LCBpbnB1dDogSW5wdXQpID0+IEVycm9yQWN0aW9uXG4pOiAoc291cmNlOiBPYnNlcnZhYmxlPElucHV0PikgPT4gT2JzZXJ2YWJsZTxPdXRwdXRBY3Rpb24gfCBFcnJvckFjdGlvbj47XG5leHBvcnQgZnVuY3Rpb24gYWN0PFxuICBJbnB1dCxcbiAgT3V0cHV0QWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBFcnJvckFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgQ29tcGxldGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlcixcbiAgVW5zdWJzY3JpYmVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlclxuPihcbiAgY29uZmlnOiBBY3RDb25maWc8XG4gICAgSW5wdXQsXG4gICAgT3V0cHV0QWN0aW9uLFxuICAgIEVycm9yQWN0aW9uLFxuICAgIENvbXBsZXRlQWN0aW9uLFxuICAgIFVuc3Vic2NyaWJlQWN0aW9uXG4gID5cbik6IChcbiAgc291cmNlOiBPYnNlcnZhYmxlPElucHV0PlxuKSA9PiBPYnNlcnZhYmxlPFxuICBPdXRwdXRBY3Rpb24gfCBFcnJvckFjdGlvbiB8IENvbXBsZXRlQWN0aW9uIHwgVW5zdWJzY3JpYmVBY3Rpb25cbj47XG5leHBvcnQgZnVuY3Rpb24gYWN0PFxuICBJbnB1dCxcbiAgT3V0cHV0QWN0aW9uIGV4dGVuZHMgQWN0aW9uLFxuICBFcnJvckFjdGlvbiBleHRlbmRzIEFjdGlvbixcbiAgQ29tcGxldGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlcixcbiAgVW5zdWJzY3JpYmVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24gPSBuZXZlclxuPihcbiAgLyoqIEFsbG93IHRvIHRha2UgZWl0aGVyIGNvbmZpZyBvYmplY3Qgb3IgcHJvamVjdC9lcnJvciBmdW5jdGlvbnMgKi9cbiAgY29uZmlnT3JQcm9qZWN0OlxuICAgIHwgQWN0Q29uZmlnPFxuICAgICAgICBJbnB1dCxcbiAgICAgICAgT3V0cHV0QWN0aW9uLFxuICAgICAgICBFcnJvckFjdGlvbixcbiAgICAgICAgQ29tcGxldGVBY3Rpb24sXG4gICAgICAgIFVuc3Vic2NyaWJlQWN0aW9uXG4gICAgICA+XG4gICAgfCAoKGlucHV0OiBJbnB1dCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZTxPdXRwdXRBY3Rpb24+KSxcbiAgZXJyb3JGbj86IChlcnJvcjogYW55LCBpbnB1dDogSW5wdXQpID0+IEVycm9yQWN0aW9uXG4pOiAoXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxJbnB1dD5cbikgPT4gT2JzZXJ2YWJsZTxcbiAgT3V0cHV0QWN0aW9uIHwgRXJyb3JBY3Rpb24gfCBDb21wbGV0ZUFjdGlvbiB8IFVuc3Vic2NyaWJlQWN0aW9uXG4+IHtcbiAgY29uc3QgeyBwcm9qZWN0LCBlcnJvciwgY29tcGxldGUsIG9wZXJhdG9yLCB1bnN1YnNjcmliZSB9ID1cbiAgICB0eXBlb2YgY29uZmlnT3JQcm9qZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHtcbiAgICAgICAgICBwcm9qZWN0OiBjb25maWdPclByb2plY3QsXG4gICAgICAgICAgZXJyb3I6IGVycm9yRm4hLFxuICAgICAgICAgIG9wZXJhdG9yOiBjb25jYXRNYXAsXG4gICAgICAgICAgY29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5kZWZpbmVkLFxuICAgICAgICB9XG4gICAgICA6IHsgLi4uY29uZmlnT3JQcm9qZWN0LCBvcGVyYXRvcjogY29uZmlnT3JQcm9qZWN0Lm9wZXJhdG9yIHx8IGNvbmNhdE1hcCB9O1xuXG4gIHR5cGUgUmVzdWx0QWN0aW9uID1cbiAgICB8IE91dHB1dEFjdGlvblxuICAgIHwgRXJyb3JBY3Rpb25cbiAgICB8IENvbXBsZXRlQWN0aW9uXG4gICAgfCBVbnN1YnNjcmliZUFjdGlvbjtcbiAgcmV0dXJuIChzb3VyY2UpID0+XG4gICAgZGVmZXIoXG4gICAgICAoKTogT2JzZXJ2YWJsZTxSZXN1bHRBY3Rpb24+ID0+IHtcbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PFVuc3Vic2NyaWJlQWN0aW9uPigpO1xuICAgICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgICAgc291cmNlLnBpcGUoXG4gICAgICAgICAgICBvcGVyYXRvcigoaW5wdXQsIGluZGV4KSA9PlxuICAgICAgICAgICAgICBkZWZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBlcnJvcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RlZENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdChpbnB1dCwgaW5kZXgpLnBpcGUoXG4gICAgICAgICAgICAgICAgICBtYXRlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgICAgbWFwKChub3RpZmljYXRpb24pOlxuICAgICAgICAgICAgICAgICAgICB8IE5vdGlmaWNhdGlvbjxSZXN1bHRBY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24ua2luZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGFueSBpbiBSeEpTIDYuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAnTicgYXMgYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihub3RpZmljYXRpb24uZXJyb3IsIGlucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgTm90aWZpY2F0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGFueSBpbiBSeEpTIDYuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ04nIGFzIGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKHByb2plY3RlZENvdW50LCBpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICArK3Byb2plY3RlZENvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBmaWx0ZXIoKG4pOiBuIGlzIE5vbk51bGxhYmxlPHR5cGVvZiBuPiA9PiBuICE9IG51bGwpLFxuICAgICAgICAgICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRlZCAmJiAhZXJyb3JlZCAmJiB1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dCh1bnN1YnNjcmliZShwcm9qZWN0ZWRDb3VudCwgaW5wdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgc3ViamVjdFxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG59XG4iXX0=
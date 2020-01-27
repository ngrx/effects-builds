/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/effects_error_handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { catchError } from 'rxjs/operators';
/** @type {?} */
export const defaultEffectsErrorHandler = (/**
 * @template T
 * @param {?} observable$
 * @param {?} errorHandler
 * @return {?}
 */
(observable$, errorHandler) => {
    return observable$.pipe(catchError((/**
     * @param {?} error
     * @return {?}
     */
    error => {
        if (errorHandler)
            errorHandler.handleError(error);
        // Return observable that produces this particular effect
        return defaultEffectsErrorHandler(observable$, errorHandler);
    })));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19lcnJvcl9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lZmZlY3RzL3NyYy9lZmZlY3RzX2Vycm9yX2hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBTzVDLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztBQUF3QixDQUc3RCxXQUEwQixFQUMxQixZQUEwQixFQUNYLEVBQUU7SUFDakIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUNyQixVQUFVOzs7O0lBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakIsSUFBSSxZQUFZO1lBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCx5REFBeUQ7UUFDekQsT0FBTywwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxFQUFDLENBQ0gsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgRWZmZWN0c0Vycm9ySGFuZGxlciA9IDxUIGV4dGVuZHMgQWN0aW9uPihcbiAgb2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8VD4sXG4gIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyXG4pID0+IE9ic2VydmFibGU8VD47XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0RWZmZWN0c0Vycm9ySGFuZGxlcjogRWZmZWN0c0Vycm9ySGFuZGxlciA9IDxcbiAgVCBleHRlbmRzIEFjdGlvblxuPihcbiAgb2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8VD4sXG4gIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyXG4pOiBPYnNlcnZhYmxlPFQ+ID0+IHtcbiAgcmV0dXJuIG9ic2VydmFibGUkLnBpcGUoXG4gICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICBpZiAoZXJyb3JIYW5kbGVyKSBlcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgLy8gUmV0dXJuIG9ic2VydmFibGUgdGhhdCBwcm9kdWNlcyB0aGlzIHBhcnRpY3VsYXIgZWZmZWN0XG4gICAgICByZXR1cm4gZGVmYXVsdEVmZmVjdHNFcnJvckhhbmRsZXIob2JzZXJ2YWJsZSQsIGVycm9ySGFuZGxlcik7XG4gICAgfSlcbiAgKTtcbn07XG4iXX0=
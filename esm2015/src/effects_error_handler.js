/**
 * @fileoverview added by tsickle
 * Generated from: src/effects_error_handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { catchError } from 'rxjs/operators';
/** @type {?} */
const MAX_NUMBER_OF_RETRY_ATTEMPTS = 10;
/**
 * @template T
 * @param {?} observable$
 * @param {?} errorHandler
 * @param {?=} retryAttemptLeft
 * @return {?}
 */
export function defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft = MAX_NUMBER_OF_RETRY_ATTEMPTS) {
    return observable$.pipe(catchError((/**
     * @param {?} error
     * @return {?}
     */
    error => {
        if (errorHandler)
            errorHandler.handleError(error);
        if (retryAttemptLeft <= 1) {
            return observable$; // last attempt
        }
        // Return observable that produces this particular effect
        return defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft - 1);
    })));
}
//# sourceMappingURL=effects_error_handler.js.map
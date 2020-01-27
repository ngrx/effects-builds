/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/effect_sources.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, tap, } from 'rxjs/operators';
import { reportInvalidActions, } from './effect_notification';
import { mergeEffects } from './effects_resolver';
import { isOnIdentifyEffects, isOnRunEffects, isOnInitEffects, } from './lifecycle_hooks';
import { EFFECTS_ERROR_HANDLER } from './tokens';
import { getSourceForInstance } from './utils';
export class EffectSources extends Subject {
    /**
     * @param {?} errorHandler
     * @param {?} store
     * @param {?} effectsErrorHandler
     */
    constructor(errorHandler, store, effectsErrorHandler) {
        super();
        this.errorHandler = errorHandler;
        this.store = store;
        this.effectsErrorHandler = effectsErrorHandler;
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    addEffects(effectSourceInstance) {
        this.next(effectSourceInstance);
    }
    /**
     * \@internal
     * @return {?}
     */
    toActions() {
        return this.pipe(groupBy(getSourceForInstance), mergeMap((/**
         * @param {?} source$
         * @return {?}
         */
        source$ => {
            return source$.pipe(groupBy(effectsInstance), tap((/**
             * @return {?}
             */
            () => {
                if (isOnInitEffects(source$.key)) {
                    this.store.dispatch(source$.key.ngrxOnInitEffects());
                }
            })));
        })), mergeMap((/**
         * @param {?} source$
         * @return {?}
         */
        source$ => source$.pipe(exhaustMap(resolveEffectSource(this.errorHandler, this.effectsErrorHandler)), map((/**
         * @param {?} output
         * @return {?}
         */
        output => {
            reportInvalidActions(output, this.errorHandler);
            return output.notification;
        })), filter((/**
         * @param {?} notification
         * @return {?}
         */
        (notification) => notification.kind === 'N')), dematerialize()))));
    }
}
EffectSources.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EffectSources.ctorParameters = () => [
    { type: ErrorHandler },
    { type: Store },
    { type: undefined, decorators: [{ type: Inject, args: [EFFECTS_ERROR_HANDLER,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EffectSources.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    EffectSources.prototype.store;
    /**
     * @type {?}
     * @private
     */
    EffectSources.prototype.effectsErrorHandler;
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function effectsInstance(sourceInstance) {
    if (isOnIdentifyEffects(sourceInstance)) {
        return sourceInstance.ngrxOnIdentifyEffects();
    }
    return '';
}
/**
 * @param {?} errorHandler
 * @param {?} effectsErrorHandler
 * @return {?}
 */
function resolveEffectSource(errorHandler, effectsErrorHandler) {
    return (/**
     * @param {?} sourceInstance
     * @return {?}
     */
    sourceInstance => {
        /** @type {?} */
        const mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
        /** @type {?} */
        const source = getSourceForInstance(sourceInstance);
        if (isOnRunEffects(source)) {
            return source.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBVSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUE0QixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUNMLGFBQWEsRUFDYixVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxHQUFHLEVBQ0gsUUFBUSxFQUNSLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFDTCxvQkFBb0IsR0FFckIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUtMLG1CQUFtQixFQUNuQixjQUFjLEVBQ2QsZUFBZSxHQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFHL0MsTUFBTSxPQUFPLGFBQWMsU0FBUSxPQUFZOzs7Ozs7SUFDN0MsWUFDVSxZQUEwQixFQUMxQixLQUFpQixFQUVqQixtQkFBd0M7UUFFaEQsS0FBSyxFQUFFLENBQUM7UUFMQSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBRWpCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFHbEQsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsb0JBQXlCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUtELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQzdCLFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDeEIsR0FBRzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNQLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7aUJBQ3REO1lBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsRUFBQyxFQUNGLFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUNqQixPQUFPLENBQUMsSUFBSSxDQUNWLFVBQVUsQ0FDUixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUNqRSxFQUNELEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNYLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDaEQsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFDSixDQUFDLFlBQVksRUFBd0MsRUFBRSxDQUNyRCxZQUFZLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFDNUIsRUFDRCxhQUFhLEVBQUUsQ0FDaEIsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7WUFoREYsVUFBVTs7OztZQS9CRixZQUFZO1lBQ0osS0FBSzs0Q0FtQ2pCLE1BQU0sU0FBQyxxQkFBcUI7Ozs7Ozs7SUFGN0IscUNBQWtDOzs7OztJQUNsQyw4QkFBeUI7Ozs7O0lBQ3pCLDRDQUNnRDs7Ozs7O0FBNkNwRCxTQUFTLGVBQWUsQ0FBQyxjQUFtQjtJQUMxQyxJQUFJLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDL0M7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7Ozs7OztBQUVELFNBQVMsbUJBQW1CLENBQzFCLFlBQTBCLEVBQzFCLG1CQUF3QztJQUV4Qzs7OztJQUFPLGNBQWMsQ0FBQyxFQUFFOztjQUNoQixjQUFjLEdBQUcsWUFBWSxDQUNqQyxjQUFjLEVBQ2QsWUFBWSxFQUNaLG1CQUFtQixDQUNwQjs7Y0FFSyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZW1hdGVyaWFsaXplLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICByZXBvcnRJbnZhbGlkQWN0aW9ucyxcbiAgRWZmZWN0Tm90aWZpY2F0aW9uLFxufSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgRWZmZWN0c0Vycm9ySGFuZGxlciB9IGZyb20gJy4vZWZmZWN0c19lcnJvcl9oYW5kbGVyJztcbmltcG9ydCB7IG1lcmdlRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0c19yZXNvbHZlcic7XG5pbXBvcnQge1xuICBvbklkZW50aWZ5RWZmZWN0c0tleSxcbiAgb25SdW5FZmZlY3RzS2V5LFxuICBPblJ1bkVmZmVjdHMsXG4gIG9uSW5pdEVmZmVjdHMsXG4gIGlzT25JZGVudGlmeUVmZmVjdHMsXG4gIGlzT25SdW5FZmZlY3RzLFxuICBpc09uSW5pdEVmZmVjdHMsXG59IGZyb20gJy4vbGlmZWN5Y2xlX2hvb2tzJztcbmltcG9ydCB7IEVGRkVDVFNfRVJST1JfSEFORExFUiB9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZmZlY3RTb3VyY2VzIGV4dGVuZHMgU3ViamVjdDxhbnk+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIEBJbmplY3QoRUZGRUNUU19FUlJPUl9IQU5ETEVSKVxuICAgIHByaXZhdGUgZWZmZWN0c0Vycm9ySGFuZGxlcjogRWZmZWN0c0Vycm9ySGFuZGxlclxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5uZXh0KGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRvQWN0aW9ucygpOiBPYnNlcnZhYmxlPEFjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLnBpcGUoXG4gICAgICBncm91cEJ5KGdldFNvdXJjZUZvckluc3RhbmNlKSxcbiAgICAgIG1lcmdlTWFwKHNvdXJjZSQgPT4ge1xuICAgICAgICByZXR1cm4gc291cmNlJC5waXBlKFxuICAgICAgICAgIGdyb3VwQnkoZWZmZWN0c0luc3RhbmNlKSxcbiAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT25Jbml0RWZmZWN0cyhzb3VyY2UkLmtleSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzb3VyY2UkLmtleS5uZ3J4T25Jbml0RWZmZWN0cygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtZXJnZU1hcChzb3VyY2UkID0+XG4gICAgICAgIHNvdXJjZSQucGlwZShcbiAgICAgICAgICBleGhhdXN0TWFwKFxuICAgICAgICAgICAgcmVzb2x2ZUVmZmVjdFNvdXJjZSh0aGlzLmVycm9ySGFuZGxlciwgdGhpcy5lZmZlY3RzRXJyb3JIYW5kbGVyKVxuICAgICAgICAgICksXG4gICAgICAgICAgbWFwKG91dHB1dCA9PiB7XG4gICAgICAgICAgICByZXBvcnRJbnZhbGlkQWN0aW9ucyhvdXRwdXQsIHRoaXMuZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQubm90aWZpY2F0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIChub3RpZmljYXRpb24pOiBub3RpZmljYXRpb24gaXMgTm90aWZpY2F0aW9uPEFjdGlvbj4gPT5cbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJ1xuICAgICAgICAgICksXG4gICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVmZmVjdHNJbnN0YW5jZShzb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gIGlmIChpc09uSWRlbnRpZnlFZmZlY3RzKHNvdXJjZUluc3RhbmNlKSkge1xuICAgIHJldHVybiBzb3VyY2VJbnN0YW5jZS5uZ3J4T25JZGVudGlmeUVmZmVjdHMoKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUVmZmVjdFNvdXJjZShcbiAgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gIGVmZmVjdHNFcnJvckhhbmRsZXI6IEVmZmVjdHNFcnJvckhhbmRsZXJcbik6IChzb3VyY2VJbnN0YW5jZTogYW55KSA9PiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj4ge1xuICByZXR1cm4gc291cmNlSW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IG1lcmdlZEVmZmVjdHMkID0gbWVyZ2VFZmZlY3RzKFxuICAgICAgc291cmNlSW5zdGFuY2UsXG4gICAgICBlcnJvckhhbmRsZXIsXG4gICAgICBlZmZlY3RzRXJyb3JIYW5kbGVyXG4gICAgKTtcblxuICAgIGNvbnN0IHNvdXJjZSA9IGdldFNvdXJjZUZvckluc3RhbmNlKHNvdXJjZUluc3RhbmNlKTtcbiAgICBpZiAoaXNPblJ1bkVmZmVjdHMoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5uZ3J4T25SdW5FZmZlY3RzKG1lcmdlZEVmZmVjdHMkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkRWZmZWN0cyQ7XG4gIH07XG59XG4iXX0=
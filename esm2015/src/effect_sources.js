/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/effect_sources.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, } from 'rxjs/operators';
import { reportInvalidActions, } from './effect_notification';
import { mergeEffects } from './effects_resolver';
import { onIdentifyEffectsKey, onRunEffectsKey, onInitEffects, } from './lifecycle_hooks';
import { getSourceForInstance } from './utils';
export class EffectSources extends Subject {
    /**
     * @param {?} errorHandler
     * @param {?} store
     */
    constructor(errorHandler, store) {
        super();
        this.errorHandler = errorHandler;
        this.store = store;
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    addEffects(effectSourceInstance) {
        this.next(effectSourceInstance);
        if (onInitEffects in effectSourceInstance &&
            typeof effectSourceInstance[onInitEffects] === 'function') {
            this.store.dispatch(effectSourceInstance[onInitEffects]());
        }
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
        source$ => source$.pipe(groupBy(effectsInstance)))), mergeMap((/**
         * @param {?} source$
         * @return {?}
         */
        source$ => source$.pipe(exhaustMap(resolveEffectSource(this.errorHandler)), map((/**
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
    { type: Store }
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
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function effectsInstance(sourceInstance) {
    if (onIdentifyEffectsKey in sourceInstance &&
        typeof sourceInstance[onIdentifyEffectsKey] === 'function') {
        return sourceInstance[onIdentifyEffectsKey]();
    }
    return '';
}
/**
 * @param {?} errorHandler
 * @return {?}
 */
function resolveEffectSource(errorHandler) {
    return (/**
     * @param {?} sourceInstance
     * @return {?}
     */
    sourceInstance => {
        /** @type {?} */
        const mergedEffects$ = mergeEffects(sourceInstance, errorHandler);
        if (isOnRunEffects(sourceInstance)) {
            return sourceInstance.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    });
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function isOnRunEffects(sourceInstance) {
    /** @type {?} */
    const source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFVLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQTRCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQ0wsYUFBYSxFQUNiLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEdBQ1QsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQ0wsb0JBQW9CLEdBRXJCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsZUFBZSxFQUVmLGFBQWEsR0FDZCxNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUcvQyxNQUFNLE9BQU8sYUFBYyxTQUFRLE9BQVk7Ozs7O0lBQzdDLFlBQW9CLFlBQTBCLEVBQVUsS0FBaUI7UUFDdkUsS0FBSyxFQUFFLENBQUM7UUFEVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7SUFFekUsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsb0JBQXlCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVoQyxJQUNFLGFBQWEsSUFBSSxvQkFBb0I7WUFDckMsT0FBTyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQ3pEO1lBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNkLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUM3QixRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFDLEVBQzNELFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUNqQixPQUFPLENBQUMsSUFBSSxDQUNWLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFDbEQsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsb0JBQW9CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUNKLENBQUMsWUFBWSxFQUF3QyxFQUFFLENBQ3JELFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUM1QixFQUNELGFBQWEsRUFBRSxDQUNoQixFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXZDRixVQUFVOzs7O1lBekJGLFlBQVk7WUFDSixLQUFLOzs7Ozs7O0lBMEJSLHFDQUFrQzs7Ozs7SUFBRSw4QkFBeUI7Ozs7OztBQXdDM0UsU0FBUyxlQUFlLENBQUMsY0FBbUI7SUFDMUMsSUFDRSxvQkFBb0IsSUFBSSxjQUFjO1FBQ3RDLE9BQU8sY0FBYyxDQUFDLG9CQUFvQixDQUFDLEtBQUssVUFBVSxFQUMxRDtRQUNBLE9BQU8sY0FBYyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztLQUMvQztJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQzs7Ozs7QUFFRCxTQUFTLG1CQUFtQixDQUMxQixZQUEwQjtJQUUxQjs7OztJQUFPLGNBQWMsQ0FBQyxFQUFFOztjQUNoQixjQUFjLEdBQUcsWUFBWSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUM7UUFFakUsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDeEQ7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDLEVBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsY0FBYyxDQUNyQixjQUFxQzs7VUFFL0IsTUFBTSxHQUFHLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztJQUVuRCxPQUFPLENBQ0wsZUFBZSxJQUFJLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxVQUFVLENBQzNFLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZW1hdGVyaWFsaXplLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgcmVwb3J0SW52YWxpZEFjdGlvbnMsXG4gIEVmZmVjdE5vdGlmaWNhdGlvbixcbn0gZnJvbSAnLi9lZmZlY3Rfbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IG1lcmdlRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0c19yZXNvbHZlcic7XG5pbXBvcnQge1xuICBvbklkZW50aWZ5RWZmZWN0c0tleSxcbiAgb25SdW5FZmZlY3RzS2V5LFxuICBPblJ1bkVmZmVjdHMsXG4gIG9uSW5pdEVmZmVjdHMsXG59IGZyb20gJy4vbGlmZWN5Y2xlX2hvb2tzJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZmZlY3RTb3VyY2VzIGV4dGVuZHMgU3ViamVjdDxhbnk+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm5leHQoZWZmZWN0U291cmNlSW5zdGFuY2UpO1xuXG4gICAgaWYgKFxuICAgICAgb25Jbml0RWZmZWN0cyBpbiBlZmZlY3RTb3VyY2VJbnN0YW5jZSAmJlxuICAgICAgdHlwZW9mIGVmZmVjdFNvdXJjZUluc3RhbmNlW29uSW5pdEVmZmVjdHNdID09PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGVmZmVjdFNvdXJjZUluc3RhbmNlW29uSW5pdEVmZmVjdHNdKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRvQWN0aW9ucygpOiBPYnNlcnZhYmxlPEFjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLnBpcGUoXG4gICAgICBncm91cEJ5KGdldFNvdXJjZUZvckluc3RhbmNlKSxcbiAgICAgIG1lcmdlTWFwKHNvdXJjZSQgPT4gc291cmNlJC5waXBlKGdyb3VwQnkoZWZmZWN0c0luc3RhbmNlKSkpLFxuICAgICAgbWVyZ2VNYXAoc291cmNlJCA9PlxuICAgICAgICBzb3VyY2UkLnBpcGUoXG4gICAgICAgICAgZXhoYXVzdE1hcChyZXNvbHZlRWZmZWN0U291cmNlKHRoaXMuZXJyb3JIYW5kbGVyKSksXG4gICAgICAgICAgbWFwKG91dHB1dCA9PiB7XG4gICAgICAgICAgICByZXBvcnRJbnZhbGlkQWN0aW9ucyhvdXRwdXQsIHRoaXMuZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQubm90aWZpY2F0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIChub3RpZmljYXRpb24pOiBub3RpZmljYXRpb24gaXMgTm90aWZpY2F0aW9uPEFjdGlvbj4gPT5cbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJ1xuICAgICAgICAgICksXG4gICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVmZmVjdHNJbnN0YW5jZShzb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gIGlmIChcbiAgICBvbklkZW50aWZ5RWZmZWN0c0tleSBpbiBzb3VyY2VJbnN0YW5jZSAmJlxuICAgIHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtvbklkZW50aWZ5RWZmZWN0c0tleV0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIHNvdXJjZUluc3RhbmNlW29uSWRlbnRpZnlFZmZlY3RzS2V5XSgpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRWZmZWN0U291cmNlKFxuICBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlclxuKTogKHNvdXJjZUluc3RhbmNlOiBhbnkpID0+IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPiB7XG4gIHJldHVybiBzb3VyY2VJbnN0YW5jZSA9PiB7XG4gICAgY29uc3QgbWVyZ2VkRWZmZWN0cyQgPSBtZXJnZUVmZmVjdHMoc291cmNlSW5zdGFuY2UsIGVycm9ySGFuZGxlcik7XG5cbiAgICBpZiAoaXNPblJ1bkVmZmVjdHMoc291cmNlSW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlSW5zdGFuY2UubmdyeE9uUnVuRWZmZWN0cyhtZXJnZWRFZmZlY3RzJCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZEVmZmVjdHMkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc09uUnVuRWZmZWN0cyhcbiAgc291cmNlSW5zdGFuY2U6IFBhcnRpYWw8T25SdW5FZmZlY3RzPlxuKTogc291cmNlSW5zdGFuY2UgaXMgT25SdW5FZmZlY3RzIHtcbiAgY29uc3Qgc291cmNlID0gZ2V0U291cmNlRm9ySW5zdGFuY2Uoc291cmNlSW5zdGFuY2UpO1xuXG4gIHJldHVybiAoXG4gICAgb25SdW5FZmZlY3RzS2V5IGluIHNvdXJjZSAmJiB0eXBlb2Ygc291cmNlW29uUnVuRWZmZWN0c0tleV0gPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cbiJdfQ==
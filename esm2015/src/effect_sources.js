/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/effect_sources.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, tap, } from 'rxjs/operators';
import { reportInvalidActions, } from './effect_notification';
import { mergeEffects } from './effects_resolver';
import { isOnIdentifyEffects, isOnRunEffects, isOnInitEffects, } from './lifecycle_hooks';
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
    if (isOnIdentifyEffects(sourceInstance)) {
        return sourceInstance.ngrxOnIdentifyEffects();
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
        /** @type {?} */
        const source = getSourceForInstance(sourceInstance);
        if (isOnRunEffects(source)) {
            return source.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFVLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQTRCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQ0wsYUFBYSxFQUNiLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUNMLG9CQUFvQixHQUVyQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBS0wsbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxlQUFlLEdBQ2hCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRy9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsT0FBWTs7Ozs7SUFDN0MsWUFBb0IsWUFBMEIsRUFBVSxLQUFpQjtRQUN2RSxLQUFLLEVBQUUsQ0FBQztRQURVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUV6RSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxvQkFBeUI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBS0QsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FDZCxPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFDN0IsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDakIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUN4QixHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztpQkFDdEQ7WUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxFQUFDLEVBQ0YsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUNsRCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDWCxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hELE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQ0osQ0FBQyxZQUFZLEVBQXdDLEVBQUUsQ0FDckQsWUFBWSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQzVCLEVBQ0QsYUFBYSxFQUFFLENBQ2hCLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBekNGLFVBQVU7Ozs7WUE3QkYsWUFBWTtZQUNKLEtBQUs7Ozs7Ozs7SUE4QlIscUNBQWtDOzs7OztJQUFFLDhCQUF5Qjs7Ozs7O0FBMEMzRSxTQUFTLGVBQWUsQ0FBQyxjQUFtQjtJQUMxQyxJQUFJLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDL0M7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7Ozs7O0FBRUQsU0FBUyxtQkFBbUIsQ0FDMUIsWUFBMEI7SUFFMUI7Ozs7SUFBTyxjQUFjLENBQUMsRUFBRTs7Y0FDaEIsY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDOztjQUUzRCxNQUFNLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uLCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVtYXRlcmlhbGl6ZSxcbiAgZXhoYXVzdE1hcCxcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgcmVwb3J0SW52YWxpZEFjdGlvbnMsXG4gIEVmZmVjdE5vdGlmaWNhdGlvbixcbn0gZnJvbSAnLi9lZmZlY3Rfbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IG1lcmdlRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0c19yZXNvbHZlcic7XG5pbXBvcnQge1xuICBvbklkZW50aWZ5RWZmZWN0c0tleSxcbiAgb25SdW5FZmZlY3RzS2V5LFxuICBPblJ1bkVmZmVjdHMsXG4gIG9uSW5pdEVmZmVjdHMsXG4gIGlzT25JZGVudGlmeUVmZmVjdHMsXG4gIGlzT25SdW5FZmZlY3RzLFxuICBpc09uSW5pdEVmZmVjdHMsXG59IGZyb20gJy4vbGlmZWN5Y2xlX2hvb2tzJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZmZlY3RTb3VyY2VzIGV4dGVuZHMgU3ViamVjdDxhbnk+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm5leHQoZWZmZWN0U291cmNlSW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdG9BY3Rpb25zKCk6IE9ic2VydmFibGU8QWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMucGlwZShcbiAgICAgIGdyb3VwQnkoZ2V0U291cmNlRm9ySW5zdGFuY2UpLFxuICAgICAgbWVyZ2VNYXAoc291cmNlJCA9PiB7XG4gICAgICAgIHJldHVybiBzb3VyY2UkLnBpcGUoXG4gICAgICAgICAgZ3JvdXBCeShlZmZlY3RzSW5zdGFuY2UpLFxuICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPbkluaXRFZmZlY3RzKHNvdXJjZSQua2V5KSkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHNvdXJjZSQua2V5Lm5ncnhPbkluaXRFZmZlY3RzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1lcmdlTWFwKHNvdXJjZSQgPT5cbiAgICAgICAgc291cmNlJC5waXBlKFxuICAgICAgICAgIGV4aGF1c3RNYXAocmVzb2x2ZUVmZmVjdFNvdXJjZSh0aGlzLmVycm9ySGFuZGxlcikpLFxuICAgICAgICAgIG1hcChvdXRwdXQgPT4ge1xuICAgICAgICAgICAgcmVwb3J0SW52YWxpZEFjdGlvbnMob3V0cHV0LCB0aGlzLmVycm9ySGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0Lm5vdGlmaWNhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAobm90aWZpY2F0aW9uKTogbm90aWZpY2F0aW9uIGlzIE5vdGlmaWNhdGlvbjxBY3Rpb24+ID0+XG4gICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5raW5kID09PSAnTidcbiAgICAgICAgICApLFxuICAgICAgICAgIGRlbWF0ZXJpYWxpemUoKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZmZlY3RzSW5zdGFuY2Uoc291cmNlSW5zdGFuY2U6IGFueSkge1xuICBpZiAoaXNPbklkZW50aWZ5RWZmZWN0cyhzb3VyY2VJbnN0YW5jZSkpIHtcbiAgICByZXR1cm4gc291cmNlSW5zdGFuY2UubmdyeE9uSWRlbnRpZnlFZmZlY3RzKCk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVFZmZlY3RTb3VyY2UoXG4gIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyXG4pOiAoc291cmNlSW5zdGFuY2U6IGFueSkgPT4gT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+IHtcbiAgcmV0dXJuIHNvdXJjZUluc3RhbmNlID0+IHtcbiAgICBjb25zdCBtZXJnZWRFZmZlY3RzJCA9IG1lcmdlRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSwgZXJyb3JIYW5kbGVyKTtcblxuICAgIGNvbnN0IHNvdXJjZSA9IGdldFNvdXJjZUZvckluc3RhbmNlKHNvdXJjZUluc3RhbmNlKTtcbiAgICBpZiAoaXNPblJ1bkVmZmVjdHMoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5uZ3J4T25SdW5FZmZlY3RzKG1lcmdlZEVmZmVjdHMkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkRWZmZWN0cyQ7XG4gIH07XG59XG4iXX0=
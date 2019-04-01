/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, } from 'rxjs/operators';
import { verifyOutput } from './effect_notification';
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
        source$ => source$.pipe(exhaustMap(resolveEffectSource), map((/**
         * @param {?} output
         * @return {?}
         */
        output => {
            verifyOutput(output, this.errorHandler);
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
 * @param {?} sourceInstance
 * @return {?}
 */
function resolveEffectSource(sourceInstance) {
    /** @type {?} */
    const mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBNEIsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxhQUFhLEVBQ2IsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsR0FDVCxNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixlQUFlLEVBR2YsYUFBYSxHQUNkLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRy9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsT0FBWTs7Ozs7SUFDN0MsWUFBb0IsWUFBMEIsRUFBVSxLQUFpQjtRQUN2RSxLQUFLLEVBQUUsQ0FBQztRQURVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUV6RSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxvQkFBeUI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRWhDLElBQ0UsYUFBYSxJQUFJLG9CQUFvQjtZQUNyQyxPQUFPLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxLQUFLLFVBQVUsRUFDekQ7WUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7OztJQUtELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQzdCLFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUMsRUFDM0QsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQy9CLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNYLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXhDLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQ0osQ0FBQyxZQUFZLEVBQXdDLEVBQUUsQ0FDckQsWUFBWSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQzVCLEVBQ0QsYUFBYSxFQUFFLENBQ2hCLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBeENGLFVBQVU7Ozs7WUF2QkYsWUFBWTtZQUNKLEtBQUs7Ozs7Ozs7SUF3QlIscUNBQWtDOzs7OztJQUFFLDhCQUF5Qjs7Ozs7O0FBeUMzRSxTQUFTLGVBQWUsQ0FBQyxjQUFtQjtJQUMxQyxJQUNFLG9CQUFvQixJQUFJLGNBQWM7UUFDdEMsT0FBTyxjQUFjLENBQUMsb0JBQW9CLENBQUMsS0FBSyxVQUFVLEVBQzFEO1FBQ0EsT0FBTyxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDO0tBQy9DO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDOzs7OztBQUVELFNBQVMsbUJBQW1CLENBQUMsY0FBbUI7O1VBQ3hDLGNBQWMsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDO0lBRW5ELElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ2xDLE9BQU8sY0FBYyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3hEO0lBRUQsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQzs7Ozs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxjQUV2Qjs7VUFDTyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUFDO0lBRW5ELE9BQU8sQ0FDTCxlQUFlLElBQUksTUFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLFVBQVUsQ0FDM0UsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24sIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlbWF0ZXJpYWxpemUsXG4gIGV4aGF1c3RNYXAsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB2ZXJpZnlPdXRwdXQgfSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgbWVyZ2VFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzX3Jlc29sdmVyJztcbmltcG9ydCB7XG4gIG9uSWRlbnRpZnlFZmZlY3RzS2V5LFxuICBvblJ1bkVmZmVjdHNLZXksXG4gIG9uUnVuRWZmZWN0c0ZuLFxuICBPblJ1bkVmZmVjdHMsXG4gIG9uSW5pdEVmZmVjdHMsXG59IGZyb20gJy4vbGlmZWN5Y2xlX2hvb2tzJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZmZlY3RTb3VyY2VzIGV4dGVuZHMgU3ViamVjdDxhbnk+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlOiBhbnkpIHtcbiAgICB0aGlzLm5leHQoZWZmZWN0U291cmNlSW5zdGFuY2UpO1xuXG4gICAgaWYgKFxuICAgICAgb25Jbml0RWZmZWN0cyBpbiBlZmZlY3RTb3VyY2VJbnN0YW5jZSAmJlxuICAgICAgdHlwZW9mIGVmZmVjdFNvdXJjZUluc3RhbmNlW29uSW5pdEVmZmVjdHNdID09PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGVmZmVjdFNvdXJjZUluc3RhbmNlW29uSW5pdEVmZmVjdHNdKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRvQWN0aW9ucygpOiBPYnNlcnZhYmxlPEFjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLnBpcGUoXG4gICAgICBncm91cEJ5KGdldFNvdXJjZUZvckluc3RhbmNlKSxcbiAgICAgIG1lcmdlTWFwKHNvdXJjZSQgPT4gc291cmNlJC5waXBlKGdyb3VwQnkoZWZmZWN0c0luc3RhbmNlKSkpLFxuICAgICAgbWVyZ2VNYXAoc291cmNlJCA9PlxuICAgICAgICBzb3VyY2UkLnBpcGUoXG4gICAgICAgICAgZXhoYXVzdE1hcChyZXNvbHZlRWZmZWN0U291cmNlKSxcbiAgICAgICAgICBtYXAob3V0cHV0ID0+IHtcbiAgICAgICAgICAgIHZlcmlmeU91dHB1dChvdXRwdXQsIHRoaXMuZXJyb3JIYW5kbGVyKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dC5ub3RpZmljYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgKG5vdGlmaWNhdGlvbik6IG5vdGlmaWNhdGlvbiBpcyBOb3RpZmljYXRpb248QWN0aW9uPiA9PlxuICAgICAgICAgICAgICBub3RpZmljYXRpb24ua2luZCA9PT0gJ04nXG4gICAgICAgICAgKSxcbiAgICAgICAgICBkZW1hdGVyaWFsaXplKClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWZmZWN0c0luc3RhbmNlKHNvdXJjZUluc3RhbmNlOiBhbnkpIHtcbiAgaWYgKFxuICAgIG9uSWRlbnRpZnlFZmZlY3RzS2V5IGluIHNvdXJjZUluc3RhbmNlICYmXG4gICAgdHlwZW9mIHNvdXJjZUluc3RhbmNlW29uSWRlbnRpZnlFZmZlY3RzS2V5XSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gc291cmNlSW5zdGFuY2Vbb25JZGVudGlmeUVmZmVjdHNLZXldKCk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVFZmZlY3RTb3VyY2Uoc291cmNlSW5zdGFuY2U6IGFueSkge1xuICBjb25zdCBtZXJnZWRFZmZlY3RzJCA9IG1lcmdlRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSk7XG5cbiAgaWYgKGlzT25SdW5FZmZlY3RzKHNvdXJjZUluc3RhbmNlKSkge1xuICAgIHJldHVybiBzb3VyY2VJbnN0YW5jZS5uZ3J4T25SdW5FZmZlY3RzKG1lcmdlZEVmZmVjdHMkKTtcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRFZmZlY3RzJDtcbn1cblxuZnVuY3Rpb24gaXNPblJ1bkVmZmVjdHMoc291cmNlSW5zdGFuY2U6IHtcbiAgW29uUnVuRWZmZWN0c0tleV0/OiBvblJ1bkVmZmVjdHNGbjtcbn0pOiBzb3VyY2VJbnN0YW5jZSBpcyBPblJ1bkVmZmVjdHMge1xuICBjb25zdCBzb3VyY2UgPSBnZXRTb3VyY2VGb3JJbnN0YW5jZShzb3VyY2VJbnN0YW5jZSk7XG5cbiAgcmV0dXJuIChcbiAgICBvblJ1bkVmZmVjdHNLZXkgaW4gc291cmNlICYmIHR5cGVvZiBzb3VyY2Vbb25SdW5FZmZlY3RzS2V5XSA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuIl19
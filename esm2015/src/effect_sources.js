/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ErrorHandler, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, } from 'rxjs/operators';
import { verifyOutput } from './effect_notification';
import { resolveEffectSource } from './effects_resolver';
export class EffectSources extends Subject {
    /**
     * @param {?} errorHandler
     */
    constructor(errorHandler) {
        super();
        this.errorHandler = errorHandler;
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
        return this.pipe(groupBy(source => source), mergeMap(source$ => source$.pipe(exhaustMap(resolveEffectSource), map(output => {
            verifyOutput(output, this.errorHandler);
            return output.notification;
        }), filter((notification) => notification.kind === 'N'), dematerialize())));
    }
}
EffectSources.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EffectSources.ctorParameters = () => [
    { type: ErrorHandler }
];
if (false) {
    /** @type {?} */
    EffectSources.prototype.errorHandler;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQTRCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQ0wsYUFBYSxFQUNiLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEdBQ1QsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHekQsTUFBTSxvQkFBcUIsU0FBUSxPQUFZOzs7O0lBQzdDLFlBQW9CLFlBQTBCO1FBQzVDLEtBQUssRUFBRSxDQUFDO1FBRFUsaUJBQVksR0FBWixZQUFZLENBQWM7S0FFN0M7Ozs7O0lBRUQsVUFBVSxDQUFDLG9CQUF5QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDakM7Ozs7O0lBS0QsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FDZCxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFDekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNYLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXhDLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQztTQUM1QixDQUFDLEVBQ0YsTUFBTSxDQUNKLENBQUMsWUFBWSxFQUF3QyxFQUFFLENBQ3JELFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUM1QixFQUNELGFBQWEsRUFBRSxDQUNoQixDQUNGLENBQ0YsQ0FBQztLQUNIOzs7WUFoQ0YsVUFBVTs7OztZQWZGLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVtYXRlcmlhbGl6ZSxcbiAgZXhoYXVzdE1hcCxcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHZlcmlmeU91dHB1dCB9IGZyb20gJy4vZWZmZWN0X25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyByZXNvbHZlRWZmZWN0U291cmNlIH0gZnJvbSAnLi9lZmZlY3RzX3Jlc29sdmVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVmZmVjdFNvdXJjZXMgZXh0ZW5kcyBTdWJqZWN0PGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFkZEVmZmVjdHMoZWZmZWN0U291cmNlSW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMubmV4dChlZmZlY3RTb3VyY2VJbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICB0b0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxBY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5waXBlKFxuICAgICAgZ3JvdXBCeShzb3VyY2UgPT4gc291cmNlKSxcbiAgICAgIG1lcmdlTWFwKHNvdXJjZSQgPT5cbiAgICAgICAgc291cmNlJC5waXBlKFxuICAgICAgICAgIGV4aGF1c3RNYXAocmVzb2x2ZUVmZmVjdFNvdXJjZSksXG4gICAgICAgICAgbWFwKG91dHB1dCA9PiB7XG4gICAgICAgICAgICB2ZXJpZnlPdXRwdXQob3V0cHV0LCB0aGlzLmVycm9ySGFuZGxlcik7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQubm90aWZpY2F0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIChub3RpZmljYXRpb24pOiBub3RpZmljYXRpb24gaXMgTm90aWZpY2F0aW9uPEFjdGlvbj4gPT5cbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJ1xuICAgICAgICAgICksXG4gICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=
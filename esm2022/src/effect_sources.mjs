import { Inject, Injectable } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, take, } from 'rxjs/operators';
import { reportInvalidActions, } from './effect_notification';
import { mergeEffects } from './effects_resolver';
import { isOnIdentifyEffects, isOnRunEffects, isOnInitEffects, } from './lifecycle_hooks';
import { EFFECTS_ERROR_HANDLER } from './tokens';
import { getSourceForInstance, isClassInstance, } from './utils';
import * as i0 from "@angular/core";
export class EffectSources extends Subject {
    constructor(errorHandler, effectsErrorHandler) {
        super();
        this.errorHandler = errorHandler;
        this.effectsErrorHandler = effectsErrorHandler;
    }
    addEffects(effectSourceInstance) {
        this.next(effectSourceInstance);
    }
    /**
     * @internal
     */
    toActions() {
        return this.pipe(groupBy((effectsInstance) => isClassInstance(effectsInstance)
            ? getSourceForInstance(effectsInstance)
            : effectsInstance), mergeMap((source$) => {
            return source$.pipe(groupBy(effectsInstance));
        }), mergeMap((source$) => {
            const effect$ = source$.pipe(exhaustMap((sourceInstance) => {
                return resolveEffectSource(this.errorHandler, this.effectsErrorHandler)(sourceInstance);
            }), map((output) => {
                reportInvalidActions(output, this.errorHandler);
                return output.notification;
            }), filter((notification) => notification.kind === 'N' && notification.value != null), dematerialize());
            // start the stream with an INIT action
            // do this only for the first Effect instance
            const init$ = source$.pipe(take(1), filter(isOnInitEffects), map((instance) => instance.ngrxOnInitEffects()));
            return merge(effect$, init$);
        }));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.8", ngImport: i0, type: EffectSources, deps: [{ token: i0.ErrorHandler }, { token: EFFECTS_ERROR_HANDLER }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.0-next.8", ngImport: i0, type: EffectSources, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.8", ngImport: i0, type: EffectSources, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i0.ErrorHandler }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [EFFECTS_ERROR_HANDLER]
                }] }] });
function effectsInstance(sourceInstance) {
    if (isOnIdentifyEffects(sourceInstance)) {
        return sourceInstance.ngrxOnIdentifyEffects();
    }
    return '';
}
function resolveEffectSource(errorHandler, effectsErrorHandler) {
    return (sourceInstance) => {
        const mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
        if (isOnRunEffects(sourceInstance)) {
            return sourceInstance.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQWMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsSUFBSSxHQUNMLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUNMLG9CQUFvQixHQUVyQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxlQUFlLEdBQ2hCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsZUFBZSxHQUVoQixNQUFNLFNBQVMsQ0FBQzs7QUFHakIsTUFBTSxPQUFPLGFBQWMsU0FBUSxPQUFZO0lBQzdDLFlBQ1UsWUFBMEIsRUFFMUIsbUJBQXdDO1FBRWhELEtBQUssRUFBRSxDQUFDO1FBSkEsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFMUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUdsRCxDQUFDO0lBRUQsVUFBVSxDQUFDLG9CQUF5QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FDZCxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUMxQixlQUFlLENBQUMsZUFBZSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUM7WUFDdkMsQ0FBQyxDQUFDLGVBQWUsQ0FDcEIsRUFDRCxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLEVBQ0YsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FDMUIsVUFBVSxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQzVCLE9BQU8sbUJBQW1CLENBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDYixvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUNKLENBQUMsWUFBWSxFQUFrRCxFQUFFLENBQy9ELFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUMxRCxFQUNELGFBQWEsRUFBRSxDQUNoQixDQUFDO1lBRUYsdUNBQXVDO1lBQ3ZDLDZDQUE2QztZQUM3QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUN2QixHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQ2hELENBQUM7WUFFRixPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7d0lBeERVLGFBQWEsOENBR2QscUJBQXFCOzRJQUhwQixhQUFhLGNBREEsTUFBTTs7a0dBQ25CLGFBQWE7a0JBRHpCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFJN0IsTUFBTTsyQkFBQyxxQkFBcUI7O0FBd0RqQyxTQUFTLGVBQWUsQ0FBQyxjQUFtQjtJQUMxQyxJQUFJLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDL0M7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUMxQixZQUEwQixFQUMxQixtQkFBd0M7SUFFeEMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO1FBQ3hCLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FDakMsY0FBYyxFQUNkLFlBQVksRUFDWixtQkFBbUIsQ0FDcEIsQ0FBQztRQUVGLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sY0FBYyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVtYXRlcmlhbGl6ZSxcbiAgZXhoYXVzdE1hcCxcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIHJlcG9ydEludmFsaWRBY3Rpb25zLFxuICBFZmZlY3ROb3RpZmljYXRpb24sXG59IGZyb20gJy4vZWZmZWN0X25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBFZmZlY3RzRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9lZmZlY3RzX2Vycm9yX2hhbmRsZXInO1xuaW1wb3J0IHsgbWVyZ2VFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzX3Jlc29sdmVyJztcbmltcG9ydCB7XG4gIGlzT25JZGVudGlmeUVmZmVjdHMsXG4gIGlzT25SdW5FZmZlY3RzLFxuICBpc09uSW5pdEVmZmVjdHMsXG59IGZyb20gJy4vbGlmZWN5Y2xlX2hvb2tzJztcbmltcG9ydCB7IEVGRkVDVFNfRVJST1JfSEFORExFUiB9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7XG4gIGdldFNvdXJjZUZvckluc3RhbmNlLFxuICBpc0NsYXNzSW5zdGFuY2UsXG4gIE9ic2VydmFibGVOb3RpZmljYXRpb24sXG59IGZyb20gJy4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEVmZmVjdFNvdXJjZXMgZXh0ZW5kcyBTdWJqZWN0PGFueT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgIEBJbmplY3QoRUZGRUNUU19FUlJPUl9IQU5ETEVSKVxuICAgIHByaXZhdGUgZWZmZWN0c0Vycm9ySGFuZGxlcjogRWZmZWN0c0Vycm9ySGFuZGxlclxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5uZXh0KGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRvQWN0aW9ucygpOiBPYnNlcnZhYmxlPEFjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLnBpcGUoXG4gICAgICBncm91cEJ5KChlZmZlY3RzSW5zdGFuY2UpID0+XG4gICAgICAgIGlzQ2xhc3NJbnN0YW5jZShlZmZlY3RzSW5zdGFuY2UpXG4gICAgICAgICAgPyBnZXRTb3VyY2VGb3JJbnN0YW5jZShlZmZlY3RzSW5zdGFuY2UpXG4gICAgICAgICAgOiBlZmZlY3RzSW5zdGFuY2VcbiAgICAgICksXG4gICAgICBtZXJnZU1hcCgoc291cmNlJCkgPT4ge1xuICAgICAgICByZXR1cm4gc291cmNlJC5waXBlKGdyb3VwQnkoZWZmZWN0c0luc3RhbmNlKSk7XG4gICAgICB9KSxcbiAgICAgIG1lcmdlTWFwKChzb3VyY2UkKSA9PiB7XG4gICAgICAgIGNvbnN0IGVmZmVjdCQgPSBzb3VyY2UkLnBpcGUoXG4gICAgICAgICAgZXhoYXVzdE1hcCgoc291cmNlSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlRWZmZWN0U291cmNlKFxuICAgICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlcixcbiAgICAgICAgICAgICAgdGhpcy5lZmZlY3RzRXJyb3JIYW5kbGVyXG4gICAgICAgICAgICApKHNvdXJjZUluc3RhbmNlKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAoKG91dHB1dCkgPT4ge1xuICAgICAgICAgICAgcmVwb3J0SW52YWxpZEFjdGlvbnMob3V0cHV0LCB0aGlzLmVycm9ySGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0Lm5vdGlmaWNhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAobm90aWZpY2F0aW9uKTogbm90aWZpY2F0aW9uIGlzIE9ic2VydmFibGVOb3RpZmljYXRpb248QWN0aW9uPiA9PlxuICAgICAgICAgICAgICBub3RpZmljYXRpb24ua2luZCA9PT0gJ04nICYmIG5vdGlmaWNhdGlvbi52YWx1ZSAhPSBudWxsXG4gICAgICAgICAgKSxcbiAgICAgICAgICBkZW1hdGVyaWFsaXplKClcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzdGFydCB0aGUgc3RyZWFtIHdpdGggYW4gSU5JVCBhY3Rpb25cbiAgICAgICAgLy8gZG8gdGhpcyBvbmx5IGZvciB0aGUgZmlyc3QgRWZmZWN0IGluc3RhbmNlXG4gICAgICAgIGNvbnN0IGluaXQkID0gc291cmNlJC5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgZmlsdGVyKGlzT25Jbml0RWZmZWN0cyksXG4gICAgICAgICAgbWFwKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UubmdyeE9uSW5pdEVmZmVjdHMoKSlcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbWVyZ2UoZWZmZWN0JCwgaW5pdCQpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVmZmVjdHNJbnN0YW5jZShzb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gIGlmIChpc09uSWRlbnRpZnlFZmZlY3RzKHNvdXJjZUluc3RhbmNlKSkge1xuICAgIHJldHVybiBzb3VyY2VJbnN0YW5jZS5uZ3J4T25JZGVudGlmeUVmZmVjdHMoKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUVmZmVjdFNvdXJjZShcbiAgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gIGVmZmVjdHNFcnJvckhhbmRsZXI6IEVmZmVjdHNFcnJvckhhbmRsZXJcbik6IChzb3VyY2VJbnN0YW5jZTogYW55KSA9PiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj4ge1xuICByZXR1cm4gKHNvdXJjZUluc3RhbmNlKSA9PiB7XG4gICAgY29uc3QgbWVyZ2VkRWZmZWN0cyQgPSBtZXJnZUVmZmVjdHMoXG4gICAgICBzb3VyY2VJbnN0YW5jZSxcbiAgICAgIGVycm9ySGFuZGxlcixcbiAgICAgIGVmZmVjdHNFcnJvckhhbmRsZXJcbiAgICApO1xuXG4gICAgaWYgKGlzT25SdW5FZmZlY3RzKHNvdXJjZUluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZUluc3RhbmNlLm5ncnhPblJ1bkVmZmVjdHMobWVyZ2VkRWZmZWN0cyQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRFZmZlY3RzJDtcbiAgfTtcbn1cbiJdfQ==
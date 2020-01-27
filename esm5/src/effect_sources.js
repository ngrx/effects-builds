import { __decorate, __extends, __metadata, __param } from "tslib";
import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, tap, } from 'rxjs/operators';
import { reportInvalidActions, } from './effect_notification';
import { mergeEffects } from './effects_resolver';
import { isOnIdentifyEffects, isOnRunEffects, isOnInitEffects, } from './lifecycle_hooks';
import { EFFECTS_ERROR_HANDLER } from './tokens';
import { getSourceForInstance } from './utils';
var EffectSources = /** @class */ (function (_super) {
    __extends(EffectSources, _super);
    function EffectSources(errorHandler, store, effectsErrorHandler) {
        var _this = _super.call(this) || this;
        _this.errorHandler = errorHandler;
        _this.store = store;
        _this.effectsErrorHandler = effectsErrorHandler;
        return _this;
    }
    EffectSources.prototype.addEffects = function (effectSourceInstance) {
        this.next(effectSourceInstance);
    };
    /**
     * @internal
     */
    EffectSources.prototype.toActions = function () {
        var _this = this;
        return this.pipe(groupBy(getSourceForInstance), mergeMap(function (source$) {
            return source$.pipe(groupBy(effectsInstance), tap(function () {
                if (isOnInitEffects(source$.key)) {
                    _this.store.dispatch(source$.key.ngrxOnInitEffects());
                }
            }));
        }), mergeMap(function (source$) {
            return source$.pipe(exhaustMap(resolveEffectSource(_this.errorHandler, _this.effectsErrorHandler)), map(function (output) {
                reportInvalidActions(output, _this.errorHandler);
                return output.notification;
            }), filter(function (notification) {
                return notification.kind === 'N';
            }), dematerialize());
        }));
    };
    EffectSources = __decorate([
        Injectable(),
        __param(2, Inject(EFFECTS_ERROR_HANDLER)),
        __metadata("design:paramtypes", [ErrorHandler,
            Store, Function])
    ], EffectSources);
    return EffectSources;
}(Subject));
export { EffectSources };
function effectsInstance(sourceInstance) {
    if (isOnIdentifyEffects(sourceInstance)) {
        return sourceInstance.ngrxOnIdentifyEffects();
    }
    return '';
}
function resolveEffectSource(errorHandler, effectsErrorHandler) {
    return function (sourceInstance) {
        var mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
        var source = getSourceForInstance(sourceInstance);
        if (isOnRunEffects(source)) {
            return source.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFVLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQTRCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQ0wsYUFBYSxFQUNiLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUNMLG9CQUFvQixHQUVyQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBS0wsbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxlQUFlLEdBQ2hCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUcvQztJQUFtQyxpQ0FBWTtJQUM3Qyx1QkFDVSxZQUEwQixFQUMxQixLQUFpQixFQUVqQixtQkFBd0M7UUFKbEQsWUFNRSxpQkFBTyxTQUNSO1FBTlMsa0JBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUVqQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCOztJQUdsRCxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLG9CQUF5QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVMsR0FBVDtRQUFBLGlCQThCQztRQTdCQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQzdCLFFBQVEsQ0FBQyxVQUFBLE9BQU87WUFDZCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDeEIsR0FBRyxDQUFDO2dCQUNGLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDaEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7aUJBQ3REO1lBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxFQUNGLFFBQVEsQ0FBQyxVQUFBLE9BQU87WUFDZCxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQ1YsVUFBVSxDQUNSLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLG1CQUFtQixDQUFDLENBQ2pFLEVBQ0QsR0FBRyxDQUFDLFVBQUEsTUFBTTtnQkFDUixvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUNKLFVBQUMsWUFBWTtnQkFDWCxPQUFBLFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRztZQUF6QixDQUF5QixDQUM1QixFQUNELGFBQWEsRUFBRSxDQUNoQjtRQWJELENBYUMsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBL0NVLGFBQWE7UUFEekIsVUFBVSxFQUFFO1FBS1IsV0FBQSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQTt5Q0FGUixZQUFZO1lBQ25CLEtBQUs7T0FIWCxhQUFhLENBZ0R6QjtJQUFELG9CQUFDO0NBQUEsQUFoREQsQ0FBbUMsT0FBTyxHQWdEekM7U0FoRFksYUFBYTtBQWtEMUIsU0FBUyxlQUFlLENBQUMsY0FBbUI7SUFDMUMsSUFBSSxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUN2QyxPQUFPLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQy9DO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FDMUIsWUFBMEIsRUFDMUIsbUJBQXdDO0lBRXhDLE9BQU8sVUFBQSxjQUFjO1FBQ25CLElBQU0sY0FBYyxHQUFHLFlBQVksQ0FDakMsY0FBYyxFQUNkLFlBQVksRUFDWixtQkFBbUIsQ0FDcEIsQ0FBQztRQUVGLElBQU0sTUFBTSxHQUFHLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZW1hdGVyaWFsaXplLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICByZXBvcnRJbnZhbGlkQWN0aW9ucyxcbiAgRWZmZWN0Tm90aWZpY2F0aW9uLFxufSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgRWZmZWN0c0Vycm9ySGFuZGxlciB9IGZyb20gJy4vZWZmZWN0c19lcnJvcl9oYW5kbGVyJztcbmltcG9ydCB7IG1lcmdlRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0c19yZXNvbHZlcic7XG5pbXBvcnQge1xuICBvbklkZW50aWZ5RWZmZWN0c0tleSxcbiAgb25SdW5FZmZlY3RzS2V5LFxuICBPblJ1bkVmZmVjdHMsXG4gIG9uSW5pdEVmZmVjdHMsXG4gIGlzT25JZGVudGlmeUVmZmVjdHMsXG4gIGlzT25SdW5FZmZlY3RzLFxuICBpc09uSW5pdEVmZmVjdHMsXG59IGZyb20gJy4vbGlmZWN5Y2xlX2hvb2tzJztcbmltcG9ydCB7IEVGRkVDVFNfRVJST1JfSEFORExFUiB9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZmZlY3RTb3VyY2VzIGV4dGVuZHMgU3ViamVjdDxhbnk+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIEBJbmplY3QoRUZGRUNUU19FUlJPUl9IQU5ETEVSKVxuICAgIHByaXZhdGUgZWZmZWN0c0Vycm9ySGFuZGxlcjogRWZmZWN0c0Vycm9ySGFuZGxlclxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5uZXh0KGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRvQWN0aW9ucygpOiBPYnNlcnZhYmxlPEFjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLnBpcGUoXG4gICAgICBncm91cEJ5KGdldFNvdXJjZUZvckluc3RhbmNlKSxcbiAgICAgIG1lcmdlTWFwKHNvdXJjZSQgPT4ge1xuICAgICAgICByZXR1cm4gc291cmNlJC5waXBlKFxuICAgICAgICAgIGdyb3VwQnkoZWZmZWN0c0luc3RhbmNlKSxcbiAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT25Jbml0RWZmZWN0cyhzb3VyY2UkLmtleSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzb3VyY2UkLmtleS5uZ3J4T25Jbml0RWZmZWN0cygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtZXJnZU1hcChzb3VyY2UkID0+XG4gICAgICAgIHNvdXJjZSQucGlwZShcbiAgICAgICAgICBleGhhdXN0TWFwKFxuICAgICAgICAgICAgcmVzb2x2ZUVmZmVjdFNvdXJjZSh0aGlzLmVycm9ySGFuZGxlciwgdGhpcy5lZmZlY3RzRXJyb3JIYW5kbGVyKVxuICAgICAgICAgICksXG4gICAgICAgICAgbWFwKG91dHB1dCA9PiB7XG4gICAgICAgICAgICByZXBvcnRJbnZhbGlkQWN0aW9ucyhvdXRwdXQsIHRoaXMuZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQubm90aWZpY2F0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIChub3RpZmljYXRpb24pOiBub3RpZmljYXRpb24gaXMgTm90aWZpY2F0aW9uPEFjdGlvbj4gPT5cbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJ1xuICAgICAgICAgICksXG4gICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVmZmVjdHNJbnN0YW5jZShzb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gIGlmIChpc09uSWRlbnRpZnlFZmZlY3RzKHNvdXJjZUluc3RhbmNlKSkge1xuICAgIHJldHVybiBzb3VyY2VJbnN0YW5jZS5uZ3J4T25JZGVudGlmeUVmZmVjdHMoKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUVmZmVjdFNvdXJjZShcbiAgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gIGVmZmVjdHNFcnJvckhhbmRsZXI6IEVmZmVjdHNFcnJvckhhbmRsZXJcbik6IChzb3VyY2VJbnN0YW5jZTogYW55KSA9PiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj4ge1xuICByZXR1cm4gc291cmNlSW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IG1lcmdlZEVmZmVjdHMkID0gbWVyZ2VFZmZlY3RzKFxuICAgICAgc291cmNlSW5zdGFuY2UsXG4gICAgICBlcnJvckhhbmRsZXIsXG4gICAgICBlZmZlY3RzRXJyb3JIYW5kbGVyXG4gICAgKTtcblxuICAgIGNvbnN0IHNvdXJjZSA9IGdldFNvdXJjZUZvckluc3RhbmNlKHNvdXJjZUluc3RhbmNlKTtcbiAgICBpZiAoaXNPblJ1bkVmZmVjdHMoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5uZ3J4T25SdW5FZmZlY3RzKG1lcmdlZEVmZmVjdHMkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkRWZmZWN0cyQ7XG4gIH07XG59XG4iXX0=
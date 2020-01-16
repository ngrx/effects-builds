import { __decorate, __extends, __metadata } from "tslib";
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, tap, } from 'rxjs/operators';
import { reportInvalidActions, } from './effect_notification';
import { mergeEffects } from './effects_resolver';
import { onIdentifyEffectsKey, onRunEffectsKey, onInitEffects, } from './lifecycle_hooks';
import { getSourceForInstance } from './utils';
var EffectSources = /** @class */ (function (_super) {
    __extends(EffectSources, _super);
    function EffectSources(errorHandler, store) {
        var _this = _super.call(this) || this;
        _this.errorHandler = errorHandler;
        _this.store = store;
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
                if (onInitEffects in source$.key &&
                    typeof source$.key[onInitEffects] === 'function') {
                    _this.store.dispatch(source$.key.ngrxOnInitEffects());
                }
            }));
        }), mergeMap(function (source$) {
            return source$.pipe(exhaustMap(resolveEffectSource(_this.errorHandler)), map(function (output) {
                reportInvalidActions(output, _this.errorHandler);
                return output.notification;
            }), filter(function (notification) {
                return notification.kind === 'N';
            }), dematerialize());
        }));
    };
    EffectSources = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ErrorHandler, Store])
    ], EffectSources);
    return EffectSources;
}(Subject));
export { EffectSources };
function effectsInstance(sourceInstance) {
    if (onIdentifyEffectsKey in sourceInstance &&
        typeof sourceInstance[onIdentifyEffectsKey] === 'function') {
        return sourceInstance[onIdentifyEffectsKey]();
    }
    return '';
}
function resolveEffectSource(errorHandler) {
    return function (sourceInstance) {
        var mergedEffects$ = mergeEffects(sourceInstance, errorHandler);
        if (isOnRunEffects(sourceInstance)) {
            return sourceInstance.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    };
}
function isOnRunEffects(sourceInstance) {
    var source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBNEIsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxhQUFhLEVBQ2IsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQ0wsb0JBQW9CLEdBRXJCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsZUFBZSxFQUVmLGFBQWEsR0FDZCxNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUcvQztJQUFtQyxpQ0FBWTtJQUM3Qyx1QkFBb0IsWUFBMEIsRUFBVSxLQUFpQjtRQUF6RSxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsa0JBQVksR0FBWixZQUFZLENBQWM7UUFBVSxXQUFLLEdBQUwsS0FBSyxDQUFZOztJQUV6RSxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLG9CQUF5QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVMsR0FBVDtRQUFBLGlCQStCQztRQTlCQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQzdCLFFBQVEsQ0FBQyxVQUFBLE9BQU87WUFDZCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDeEIsR0FBRyxDQUFDO2dCQUNGLElBQ0UsYUFBYSxJQUFJLE9BQU8sQ0FBQyxHQUFHO29CQUM1QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssVUFBVSxFQUNoRDtvQkFDQSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztpQkFDdEQ7WUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQ0YsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FDVixVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQ2xELEdBQUcsQ0FBQyxVQUFBLE1BQU07Z0JBQ1Isb0JBQW9CLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FDSixVQUFDLFlBQVk7Z0JBQ1gsT0FBQSxZQUFZLENBQUMsSUFBSSxLQUFLLEdBQUc7WUFBekIsQ0FBeUIsQ0FDNUIsRUFDRCxhQUFhLEVBQUUsQ0FDaEI7UUFYRCxDQVdDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQTNDVSxhQUFhO1FBRHpCLFVBQVUsRUFBRTt5Q0FFdUIsWUFBWSxFQUFpQixLQUFLO09BRHpELGFBQWEsQ0E0Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTVDRCxDQUFtQyxPQUFPLEdBNEN6QztTQTVDWSxhQUFhO0FBOEMxQixTQUFTLGVBQWUsQ0FBQyxjQUFtQjtJQUMxQyxJQUNFLG9CQUFvQixJQUFJLGNBQWM7UUFDdEMsT0FBTyxjQUFjLENBQUMsb0JBQW9CLENBQUMsS0FBSyxVQUFVLEVBQzFEO1FBQ0EsT0FBTyxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDO0tBQy9DO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FDMUIsWUFBMEI7SUFFMUIsT0FBTyxVQUFBLGNBQWM7UUFDbkIsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVsRSxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNsQyxPQUFPLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4RDtRQUVELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FDckIsY0FBcUM7SUFFckMsSUFBTSxNQUFNLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFcEQsT0FBTyxDQUNMLGVBQWUsSUFBSSxNQUFNLElBQUksT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssVUFBVSxDQUMzRSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uLCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVtYXRlcmlhbGl6ZSxcbiAgZXhoYXVzdE1hcCxcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgcmVwb3J0SW52YWxpZEFjdGlvbnMsXG4gIEVmZmVjdE5vdGlmaWNhdGlvbixcbn0gZnJvbSAnLi9lZmZlY3Rfbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IG1lcmdlRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0c19yZXNvbHZlcic7XG5pbXBvcnQge1xuICBvbklkZW50aWZ5RWZmZWN0c0tleSxcbiAgb25SdW5FZmZlY3RzS2V5LFxuICBPblJ1bkVmZmVjdHMsXG4gIG9uSW5pdEVmZmVjdHMsXG59IGZyb20gJy4vbGlmZWN5Y2xlX2hvb2tzJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZmZlY3RTb3VyY2VzIGV4dGVuZHMgU3ViamVjdDxhbnk+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm5leHQoZWZmZWN0U291cmNlSW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdG9BY3Rpb25zKCk6IE9ic2VydmFibGU8QWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMucGlwZShcbiAgICAgIGdyb3VwQnkoZ2V0U291cmNlRm9ySW5zdGFuY2UpLFxuICAgICAgbWVyZ2VNYXAoc291cmNlJCA9PiB7XG4gICAgICAgIHJldHVybiBzb3VyY2UkLnBpcGUoXG4gICAgICAgICAgZ3JvdXBCeShlZmZlY3RzSW5zdGFuY2UpLFxuICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIG9uSW5pdEVmZmVjdHMgaW4gc291cmNlJC5rZXkgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIHNvdXJjZSQua2V5W29uSW5pdEVmZmVjdHNdID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzb3VyY2UkLmtleS5uZ3J4T25Jbml0RWZmZWN0cygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtZXJnZU1hcChzb3VyY2UkID0+XG4gICAgICAgIHNvdXJjZSQucGlwZShcbiAgICAgICAgICBleGhhdXN0TWFwKHJlc29sdmVFZmZlY3RTb3VyY2UodGhpcy5lcnJvckhhbmRsZXIpKSxcbiAgICAgICAgICBtYXAob3V0cHV0ID0+IHtcbiAgICAgICAgICAgIHJlcG9ydEludmFsaWRBY3Rpb25zKG91dHB1dCwgdGhpcy5lcnJvckhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dC5ub3RpZmljYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgKG5vdGlmaWNhdGlvbik6IG5vdGlmaWNhdGlvbiBpcyBOb3RpZmljYXRpb248QWN0aW9uPiA9PlxuICAgICAgICAgICAgICBub3RpZmljYXRpb24ua2luZCA9PT0gJ04nXG4gICAgICAgICAgKSxcbiAgICAgICAgICBkZW1hdGVyaWFsaXplKClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWZmZWN0c0luc3RhbmNlKHNvdXJjZUluc3RhbmNlOiBhbnkpIHtcbiAgaWYgKFxuICAgIG9uSWRlbnRpZnlFZmZlY3RzS2V5IGluIHNvdXJjZUluc3RhbmNlICYmXG4gICAgdHlwZW9mIHNvdXJjZUluc3RhbmNlW29uSWRlbnRpZnlFZmZlY3RzS2V5XSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gc291cmNlSW5zdGFuY2Vbb25JZGVudGlmeUVmZmVjdHNLZXldKCk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVFZmZlY3RTb3VyY2UoXG4gIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyXG4pOiAoc291cmNlSW5zdGFuY2U6IGFueSkgPT4gT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+IHtcbiAgcmV0dXJuIHNvdXJjZUluc3RhbmNlID0+IHtcbiAgICBjb25zdCBtZXJnZWRFZmZlY3RzJCA9IG1lcmdlRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSwgZXJyb3JIYW5kbGVyKTtcblxuICAgIGlmIChpc09uUnVuRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2VJbnN0YW5jZS5uZ3J4T25SdW5FZmZlY3RzKG1lcmdlZEVmZmVjdHMkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkRWZmZWN0cyQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzT25SdW5FZmZlY3RzKFxuICBzb3VyY2VJbnN0YW5jZTogUGFydGlhbDxPblJ1bkVmZmVjdHM+XG4pOiBzb3VyY2VJbnN0YW5jZSBpcyBPblJ1bkVmZmVjdHMge1xuICBjb25zdCBzb3VyY2UgPSBnZXRTb3VyY2VGb3JJbnN0YW5jZShzb3VyY2VJbnN0YW5jZSk7XG5cbiAgcmV0dXJuIChcbiAgICBvblJ1bkVmZmVjdHNLZXkgaW4gc291cmNlICYmIHR5cGVvZiBzb3VyY2Vbb25SdW5FZmZlY3RzS2V5XSA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuIl19
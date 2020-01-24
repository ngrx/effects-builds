import { __decorate, __extends, __metadata } from "tslib";
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, tap, } from 'rxjs/operators';
import { reportInvalidActions, } from './effect_notification';
import { mergeEffects } from './effects_resolver';
import { isOnIdentifyEffects, isOnRunEffects, isOnInitEffects, } from './lifecycle_hooks';
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
                if (isOnInitEffects(source$.key)) {
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
    if (isOnIdentifyEffects(sourceInstance)) {
        return sourceInstance.ngrxOnIdentifyEffects();
    }
    return '';
}
function resolveEffectSource(errorHandler) {
    return function (sourceInstance) {
        var mergedEffects$ = mergeEffects(sourceInstance, errorHandler);
        var source = getSourceForInstance(sourceInstance);
        if (isOnRunEffects(source)) {
            return source.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBNEIsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxhQUFhLEVBQ2IsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQ0wsb0JBQW9CLEdBRXJCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFLTCxtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGVBQWUsR0FDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFHL0M7SUFBbUMsaUNBQVk7SUFDN0MsdUJBQW9CLFlBQTBCLEVBQVUsS0FBaUI7UUFBekUsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBSyxHQUFMLEtBQUssQ0FBWTs7SUFFekUsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxvQkFBeUI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILGlDQUFTLEdBQVQ7UUFBQSxpQkE0QkM7UUEzQkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNkLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUM3QixRQUFRLENBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUNqQixPQUFPLENBQUMsZUFBZSxDQUFDLEVBQ3hCLEdBQUcsQ0FBQztnQkFDRixJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2hDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtZQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsRUFDRixRQUFRLENBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBQSxPQUFPLENBQUMsSUFBSSxDQUNWLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFDbEQsR0FBRyxDQUFDLFVBQUEsTUFBTTtnQkFDUixvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUNKLFVBQUMsWUFBWTtnQkFDWCxPQUFBLFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRztZQUF6QixDQUF5QixDQUM1QixFQUNELGFBQWEsRUFBRSxDQUNoQjtRQVhELENBV0MsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBeENVLGFBQWE7UUFEekIsVUFBVSxFQUFFO3lDQUV1QixZQUFZLEVBQWlCLEtBQUs7T0FEekQsYUFBYSxDQXlDekI7SUFBRCxvQkFBQztDQUFBLEFBekNELENBQW1DLE9BQU8sR0F5Q3pDO1NBekNZLGFBQWE7QUEyQzFCLFNBQVMsZUFBZSxDQUFDLGNBQW1CO0lBQzFDLElBQUksbUJBQW1CLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDdkMsT0FBTyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztLQUMvQztJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQzFCLFlBQTBCO0lBRTFCLE9BQU8sVUFBQSxjQUFjO1FBQ25CLElBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFbEUsSUFBTSxNQUFNLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZW1hdGVyaWFsaXplLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICByZXBvcnRJbnZhbGlkQWN0aW9ucyxcbiAgRWZmZWN0Tm90aWZpY2F0aW9uLFxufSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgbWVyZ2VFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzX3Jlc29sdmVyJztcbmltcG9ydCB7XG4gIG9uSWRlbnRpZnlFZmZlY3RzS2V5LFxuICBvblJ1bkVmZmVjdHNLZXksXG4gIE9uUnVuRWZmZWN0cyxcbiAgb25Jbml0RWZmZWN0cyxcbiAgaXNPbklkZW50aWZ5RWZmZWN0cyxcbiAgaXNPblJ1bkVmZmVjdHMsXG4gIGlzT25Jbml0RWZmZWN0cyxcbn0gZnJvbSAnLi9saWZlY3ljbGVfaG9va3MnO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UgfSBmcm9tICcuL3V0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVmZmVjdFNvdXJjZXMgZXh0ZW5kcyBTdWJqZWN0PGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFkZEVmZmVjdHMoZWZmZWN0U291cmNlSW5zdGFuY2U6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubmV4dChlZmZlY3RTb3VyY2VJbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICB0b0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxBY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5waXBlKFxuICAgICAgZ3JvdXBCeShnZXRTb3VyY2VGb3JJbnN0YW5jZSksXG4gICAgICBtZXJnZU1hcChzb3VyY2UkID0+IHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZSQucGlwZShcbiAgICAgICAgICBncm91cEJ5KGVmZmVjdHNJbnN0YW5jZSksXG4gICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc09uSW5pdEVmZmVjdHMoc291cmNlJC5rZXkpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goc291cmNlJC5rZXkubmdyeE9uSW5pdEVmZmVjdHMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgbWVyZ2VNYXAoc291cmNlJCA9PlxuICAgICAgICBzb3VyY2UkLnBpcGUoXG4gICAgICAgICAgZXhoYXVzdE1hcChyZXNvbHZlRWZmZWN0U291cmNlKHRoaXMuZXJyb3JIYW5kbGVyKSksXG4gICAgICAgICAgbWFwKG91dHB1dCA9PiB7XG4gICAgICAgICAgICByZXBvcnRJbnZhbGlkQWN0aW9ucyhvdXRwdXQsIHRoaXMuZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQubm90aWZpY2F0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIChub3RpZmljYXRpb24pOiBub3RpZmljYXRpb24gaXMgTm90aWZpY2F0aW9uPEFjdGlvbj4gPT5cbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJ1xuICAgICAgICAgICksXG4gICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVmZmVjdHNJbnN0YW5jZShzb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gIGlmIChpc09uSWRlbnRpZnlFZmZlY3RzKHNvdXJjZUluc3RhbmNlKSkge1xuICAgIHJldHVybiBzb3VyY2VJbnN0YW5jZS5uZ3J4T25JZGVudGlmeUVmZmVjdHMoKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUVmZmVjdFNvdXJjZShcbiAgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJcbik6IChzb3VyY2VJbnN0YW5jZTogYW55KSA9PiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj4ge1xuICByZXR1cm4gc291cmNlSW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IG1lcmdlZEVmZmVjdHMkID0gbWVyZ2VFZmZlY3RzKHNvdXJjZUluc3RhbmNlLCBlcnJvckhhbmRsZXIpO1xuXG4gICAgY29uc3Qgc291cmNlID0gZ2V0U291cmNlRm9ySW5zdGFuY2Uoc291cmNlSW5zdGFuY2UpO1xuICAgIGlmIChpc09uUnVuRWZmZWN0cyhzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLm5ncnhPblJ1bkVmZmVjdHMobWVyZ2VkRWZmZWN0cyQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRFZmZlY3RzJDtcbiAgfTtcbn1cbiJdfQ==
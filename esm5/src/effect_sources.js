var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, } from 'rxjs/operators';
import { verifyOutput } from './effect_notification';
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
        if (onInitEffects in effectSourceInstance &&
            typeof effectSourceInstance[onInitEffects] === 'function') {
            this.store.dispatch(effectSourceInstance[onInitEffects]());
        }
    };
    /**
     * @internal
     */
    EffectSources.prototype.toActions = function () {
        var _this = this;
        return this.pipe(groupBy(getSourceForInstance), mergeMap(function (source$) { return source$.pipe(groupBy(effectsInstance)); }), mergeMap(function (source$) {
            return source$.pipe(exhaustMap(resolveEffectSource), map(function (output) {
                verifyOutput(output, _this.errorHandler);
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
function resolveEffectSource(sourceInstance) {
    var mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
}
function isOnRunEffects(sourceInstance) {
    var source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBNEIsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxhQUFhLEVBQ2IsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsR0FDVCxNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixlQUFlLEVBR2YsYUFBYSxHQUNkLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRy9DO0lBQW1DLGlDQUFZO0lBQzdDLHVCQUFvQixZQUEwQixFQUFVLEtBQWlCO1FBQXpFLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixrQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQUssR0FBTCxLQUFLLENBQVk7O0lBRXpFLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsb0JBQXlCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVoQyxJQUNFLGFBQWEsSUFBSSxvQkFBb0I7WUFDckMsT0FBTyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQ3pEO1lBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVMsR0FBVDtRQUFBLGlCQW9CQztRQW5CQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQzdCLFFBQVEsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLENBQUMsRUFDM0QsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FDVixVQUFVLENBQUMsbUJBQW1CLENBQUMsRUFDL0IsR0FBRyxDQUFDLFVBQUEsTUFBTTtnQkFDUixZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFeEMsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FDSixVQUFDLFlBQVk7Z0JBQ1gsT0FBQSxZQUFZLENBQUMsSUFBSSxLQUFLLEdBQUc7WUFBekIsQ0FBeUIsQ0FDNUIsRUFDRCxhQUFhLEVBQUUsQ0FDaEI7UUFaRCxDQVlDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQXZDVSxhQUFhO1FBRHpCLFVBQVUsRUFBRTt5Q0FFdUIsWUFBWSxFQUFpQixLQUFLO09BRHpELGFBQWEsQ0F3Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXhDRCxDQUFtQyxPQUFPLEdBd0N6QztTQXhDWSxhQUFhO0FBMEMxQixTQUFTLGVBQWUsQ0FBQyxjQUFtQjtJQUMxQyxJQUNFLG9CQUFvQixJQUFJLGNBQWM7UUFDdEMsT0FBTyxjQUFjLENBQUMsb0JBQW9CLENBQUMsS0FBSyxVQUFVLEVBQzFEO1FBQ0EsT0FBTyxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDO0tBQy9DO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxjQUFtQjtJQUM5QyxJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFcEQsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDbEMsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsY0FFdkI7SUFDQyxJQUFNLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVwRCxPQUFPLENBQ0wsZUFBZSxJQUFJLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxVQUFVLENBQzNFLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZW1hdGVyaWFsaXplLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdmVyaWZ5T3V0cHV0IH0gZnJvbSAnLi9lZmZlY3Rfbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IG1lcmdlRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0c19yZXNvbHZlcic7XG5pbXBvcnQge1xuICBvbklkZW50aWZ5RWZmZWN0c0tleSxcbiAgb25SdW5FZmZlY3RzS2V5LFxuICBvblJ1bkVmZmVjdHNGbixcbiAgT25SdW5FZmZlY3RzLFxuICBvbkluaXRFZmZlY3RzLFxufSBmcm9tICcuL2xpZmVjeWNsZV9ob29rcyc7XG5pbXBvcnQgeyBnZXRTb3VyY2VGb3JJbnN0YW5jZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWZmZWN0U291cmNlcyBleHRlbmRzIFN1YmplY3Q8YW55PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gICAgdGhpcy5uZXh0KGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcblxuICAgIGlmIChcbiAgICAgIG9uSW5pdEVmZmVjdHMgaW4gZWZmZWN0U291cmNlSW5zdGFuY2UgJiZcbiAgICAgIHR5cGVvZiBlZmZlY3RTb3VyY2VJbnN0YW5jZVtvbkluaXRFZmZlY3RzXSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChlZmZlY3RTb3VyY2VJbnN0YW5jZVtvbkluaXRFZmZlY3RzXSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICB0b0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxBY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5waXBlKFxuICAgICAgZ3JvdXBCeShnZXRTb3VyY2VGb3JJbnN0YW5jZSksXG4gICAgICBtZXJnZU1hcChzb3VyY2UkID0+IHNvdXJjZSQucGlwZShncm91cEJ5KGVmZmVjdHNJbnN0YW5jZSkpKSxcbiAgICAgIG1lcmdlTWFwKHNvdXJjZSQgPT5cbiAgICAgICAgc291cmNlJC5waXBlKFxuICAgICAgICAgIGV4aGF1c3RNYXAocmVzb2x2ZUVmZmVjdFNvdXJjZSksXG4gICAgICAgICAgbWFwKG91dHB1dCA9PiB7XG4gICAgICAgICAgICB2ZXJpZnlPdXRwdXQob3V0cHV0LCB0aGlzLmVycm9ySGFuZGxlcik7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQubm90aWZpY2F0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIChub3RpZmljYXRpb24pOiBub3RpZmljYXRpb24gaXMgTm90aWZpY2F0aW9uPEFjdGlvbj4gPT5cbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJ1xuICAgICAgICAgICksXG4gICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVmZmVjdHNJbnN0YW5jZShzb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gIGlmIChcbiAgICBvbklkZW50aWZ5RWZmZWN0c0tleSBpbiBzb3VyY2VJbnN0YW5jZSAmJlxuICAgIHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtvbklkZW50aWZ5RWZmZWN0c0tleV0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIHNvdXJjZUluc3RhbmNlW29uSWRlbnRpZnlFZmZlY3RzS2V5XSgpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRWZmZWN0U291cmNlKHNvdXJjZUluc3RhbmNlOiBhbnkpIHtcbiAgY29uc3QgbWVyZ2VkRWZmZWN0cyQgPSBtZXJnZUVmZmVjdHMoc291cmNlSW5zdGFuY2UpO1xuXG4gIGlmIChpc09uUnVuRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSkpIHtcbiAgICByZXR1cm4gc291cmNlSW5zdGFuY2UubmdyeE9uUnVuRWZmZWN0cyhtZXJnZWRFZmZlY3RzJCk7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkRWZmZWN0cyQ7XG59XG5cbmZ1bmN0aW9uIGlzT25SdW5FZmZlY3RzKHNvdXJjZUluc3RhbmNlOiB7XG4gIFtvblJ1bkVmZmVjdHNLZXldPzogb25SdW5FZmZlY3RzRm47XG59KTogc291cmNlSW5zdGFuY2UgaXMgT25SdW5FZmZlY3RzIHtcbiAgY29uc3Qgc291cmNlID0gZ2V0U291cmNlRm9ySW5zdGFuY2Uoc291cmNlSW5zdGFuY2UpO1xuXG4gIHJldHVybiAoXG4gICAgb25SdW5FZmZlY3RzS2V5IGluIHNvdXJjZSAmJiB0eXBlb2Ygc291cmNlW29uUnVuRWZmZWN0c0tleV0gPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cbiJdfQ==
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
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, } from 'rxjs/operators';
import { verifyOutput } from './effect_notification';
import { resolveEffectSource } from './effects_resolver';
var EffectSources = /** @class */ (function (_super) {
    __extends(EffectSources, _super);
    function EffectSources(errorHandler) {
        var _this = _super.call(this) || this;
        _this.errorHandler = errorHandler;
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
        return this.pipe(groupBy(function (source) { return source; }), mergeMap(function (source$) {
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
        __metadata("design:paramtypes", [ErrorHandler])
    ], EffectSources);
    return EffectSources;
}(Subject));
export { EffectSources };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQTRCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQ0wsYUFBYSxFQUNiLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEdBQ1QsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHekQ7SUFBbUMsaUNBQVk7SUFDN0MsdUJBQW9CLFlBQTBCO1FBQTlDLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixrQkFBWSxHQUFaLFlBQVksQ0FBYzs7SUFFOUMsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxvQkFBeUI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILGlDQUFTLEdBQVQ7UUFBQSxpQkFtQkM7UUFsQkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNkLE9BQU8sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sRUFBTixDQUFNLENBQUMsRUFDekIsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FDVixVQUFVLENBQUMsbUJBQW1CLENBQUMsRUFDL0IsR0FBRyxDQUFDLFVBQUEsTUFBTTtnQkFDUixZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFeEMsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FDSixVQUFDLFlBQVk7Z0JBQ1gsT0FBQSxZQUFZLENBQUMsSUFBSSxLQUFLLEdBQUc7WUFBekIsQ0FBeUIsQ0FDNUIsRUFDRCxhQUFhLEVBQUUsQ0FDaEI7UUFaRCxDQVlDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQS9CVSxhQUFhO1FBRHpCLFVBQVUsRUFBRTt5Q0FFdUIsWUFBWTtPQURuQyxhQUFhLENBZ0N6QjtJQUFELG9CQUFDO0NBQUEsQUFoQ0QsQ0FBbUMsT0FBTyxHQWdDekM7U0FoQ1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZW1hdGVyaWFsaXplLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdmVyaWZ5T3V0cHV0IH0gZnJvbSAnLi9lZmZlY3Rfbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IHJlc29sdmVFZmZlY3RTb3VyY2UgfSBmcm9tICcuL2VmZmVjdHNfcmVzb2x2ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWZmZWN0U291cmNlcyBleHRlbmRzIFN1YmplY3Q8YW55PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gICAgdGhpcy5uZXh0KGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRvQWN0aW9ucygpOiBPYnNlcnZhYmxlPEFjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLnBpcGUoXG4gICAgICBncm91cEJ5KHNvdXJjZSA9PiBzb3VyY2UpLFxuICAgICAgbWVyZ2VNYXAoc291cmNlJCA9PlxuICAgICAgICBzb3VyY2UkLnBpcGUoXG4gICAgICAgICAgZXhoYXVzdE1hcChyZXNvbHZlRWZmZWN0U291cmNlKSxcbiAgICAgICAgICBtYXAob3V0cHV0ID0+IHtcbiAgICAgICAgICAgIHZlcmlmeU91dHB1dChvdXRwdXQsIHRoaXMuZXJyb3JIYW5kbGVyKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dC5ub3RpZmljYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgKG5vdGlmaWNhdGlvbik6IG5vdGlmaWNhdGlvbiBpcyBOb3RpZmljYXRpb248QWN0aW9uPiA9PlxuICAgICAgICAgICAgICBub3RpZmljYXRpb24ua2luZCA9PT0gJ04nXG4gICAgICAgICAgKSxcbiAgICAgICAgICBkZW1hdGVyaWFsaXplKClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
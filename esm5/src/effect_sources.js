var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * Generated from: src/effect_sources.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, take, } from 'rxjs/operators';
import { reportInvalidActions, } from './effect_notification';
import { mergeEffects } from './effects_resolver';
import { isOnIdentifyEffects, isOnRunEffects, isOnInitEffects, } from './lifecycle_hooks';
import { EFFECTS_ERROR_HANDLER } from './tokens';
import { getSourceForInstance } from './utils';
var EffectSources = /** @class */ (function (_super) {
    __extends(EffectSources, _super);
    function EffectSources(errorHandler, effectsErrorHandler) {
        var _this = _super.call(this) || this;
        _this.errorHandler = errorHandler;
        _this.effectsErrorHandler = effectsErrorHandler;
        return _this;
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    EffectSources.prototype.addEffects = /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    function (effectSourceInstance) {
        this.next(effectSourceInstance);
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    EffectSources.prototype.toActions = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        return this.pipe(groupBy(getSourceForInstance), mergeMap((/**
         * @param {?} source$
         * @return {?}
         */
        function (source$) {
            return source$.pipe(groupBy(effectsInstance));
        })), mergeMap((/**
         * @param {?} source$
         * @return {?}
         */
        function (source$) {
            /** @type {?} */
            var effect$ = source$.pipe(exhaustMap((/**
             * @param {?} sourceInstance
             * @return {?}
             */
            function (sourceInstance) {
                return resolveEffectSource(_this.errorHandler, _this.effectsErrorHandler)(sourceInstance);
            })), map((/**
             * @param {?} output
             * @return {?}
             */
            function (output) {
                reportInvalidActions(output, _this.errorHandler);
                return output.notification;
            })), filter((/**
             * @param {?} notification
             * @return {?}
             */
            function (notification) {
                return notification.kind === 'N';
            })), dematerialize());
            // start the stream with an INIT action
            // do this only for the first Effect instance
            /** @type {?} */
            var init$ = source$.pipe(take(1), filter(isOnInitEffects), map((/**
             * @param {?} instance
             * @return {?}
             */
            function (instance) { return instance.ngrxOnInitEffects(); })));
            return merge(effect$, init$);
        })));
    };
    EffectSources.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EffectSources.ctorParameters = function () { return [
        { type: ErrorHandler },
        { type: undefined, decorators: [{ type: Inject, args: [EFFECTS_ERROR_HANDLER,] }] }
    ]; };
    return EffectSources;
}(Subject));
export { EffectSources };
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
    EffectSources.prototype.effectsErrorHandler;
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
 * @param {?} effectsErrorHandler
 * @return {?}
 */
function resolveEffectSource(errorHandler, effectsErrorHandler) {
    return (/**
     * @param {?} sourceInstance
     * @return {?}
     */
    function (sourceInstance) {
        /** @type {?} */
        var mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
        if (isOnRunEffects(sourceInstance)) {
            return sourceInstance.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmdyeC9lZmZlY3RzLyIsInNvdXJjZXMiOlsic3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQTRCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEUsT0FBTyxFQUNMLGFBQWEsRUFDYixVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxHQUFHLEVBQ0gsUUFBUSxFQUNSLElBQUksR0FDTCxNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFDTCxvQkFBb0IsR0FFckIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUtMLG1CQUFtQixFQUNuQixjQUFjLEVBQ2QsZUFBZSxHQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFL0M7SUFDbUMsaUNBQVk7SUFDN0MsdUJBQ1UsWUFBMEIsRUFFMUIsbUJBQXdDO1FBSGxELFlBS0UsaUJBQU8sU0FDUjtRQUxTLGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBRTFCLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7O0lBR2xELENBQUM7Ozs7O0lBRUQsa0NBQVU7Ozs7SUFBVixVQUFXLG9CQUF5QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGlDQUFTOzs7O0lBQVQ7UUFBQSxpQkFvQ0M7UUFuQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNkLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUM3QixRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFBQyxFQUNGLFFBQVE7Ozs7UUFBQyxVQUFBLE9BQU87O2dCQUNSLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUMxQixVQUFVOzs7O1lBQUMsVUFBQSxjQUFjO2dCQUN2QixPQUFPLG1CQUFtQixDQUN4QixLQUFJLENBQUMsWUFBWSxFQUNqQixLQUFJLENBQUMsbUJBQW1CLENBQ3pCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztZQUFDLFVBQUEsTUFBTTtnQkFDUixvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztZQUNKLFVBQUMsWUFBWTtnQkFDWCxPQUFBLFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRztZQUF6QixDQUF5QixFQUM1QixFQUNELGFBQWEsRUFBRSxDQUNoQjs7OztnQkFJSyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFDdkIsR0FBRzs7OztZQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEVBQTVCLENBQTRCLEVBQUMsQ0FDOUM7WUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXJERixVQUFVOzs7O2dCQS9CRixZQUFZO2dEQW1DaEIsTUFBTSxTQUFDLHFCQUFxQjs7SUFrRGpDLG9CQUFDO0NBQUEsQUF0REQsQ0FDbUMsT0FBTyxHQXFEekM7U0FyRFksYUFBYTs7Ozs7O0lBRXRCLHFDQUFrQzs7Ozs7SUFDbEMsNENBQ2dEOzs7Ozs7QUFtRHBELFNBQVMsZUFBZSxDQUFDLGNBQW1CO0lBQzFDLElBQUksbUJBQW1CLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDdkMsT0FBTyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztLQUMvQztJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQzs7Ozs7O0FBRUQsU0FBUyxtQkFBbUIsQ0FDMUIsWUFBMEIsRUFDMUIsbUJBQXdDO0lBRXhDOzs7O0lBQU8sVUFBQSxjQUFjOztZQUNiLGNBQWMsR0FBRyxZQUFZLENBQ2pDLGNBQWMsRUFDZCxZQUFZLEVBQ1osbUJBQW1CLENBQ3BCO1FBRUQsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDeEQ7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlbWF0ZXJpYWxpemUsXG4gIGV4aGF1c3RNYXAsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgdGFrZSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICByZXBvcnRJbnZhbGlkQWN0aW9ucyxcbiAgRWZmZWN0Tm90aWZpY2F0aW9uLFxufSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgRWZmZWN0c0Vycm9ySGFuZGxlciB9IGZyb20gJy4vZWZmZWN0c19lcnJvcl9oYW5kbGVyJztcbmltcG9ydCB7IG1lcmdlRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0c19yZXNvbHZlcic7XG5pbXBvcnQge1xuICBvbklkZW50aWZ5RWZmZWN0c0tleSxcbiAgb25SdW5FZmZlY3RzS2V5LFxuICBPblJ1bkVmZmVjdHMsXG4gIG9uSW5pdEVmZmVjdHMsXG4gIGlzT25JZGVudGlmeUVmZmVjdHMsXG4gIGlzT25SdW5FZmZlY3RzLFxuICBpc09uSW5pdEVmZmVjdHMsXG59IGZyb20gJy4vbGlmZWN5Y2xlX2hvb2tzJztcbmltcG9ydCB7IEVGRkVDVFNfRVJST1JfSEFORExFUiB9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZmZlY3RTb3VyY2VzIGV4dGVuZHMgU3ViamVjdDxhbnk+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICBASW5qZWN0KEVGRkVDVFNfRVJST1JfSEFORExFUilcbiAgICBwcml2YXRlIGVmZmVjdHNFcnJvckhhbmRsZXI6IEVmZmVjdHNFcnJvckhhbmRsZXJcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFkZEVmZmVjdHMoZWZmZWN0U291cmNlSW5zdGFuY2U6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubmV4dChlZmZlY3RTb3VyY2VJbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICB0b0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxBY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5waXBlKFxuICAgICAgZ3JvdXBCeShnZXRTb3VyY2VGb3JJbnN0YW5jZSksXG4gICAgICBtZXJnZU1hcChzb3VyY2UkID0+IHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZSQucGlwZShncm91cEJ5KGVmZmVjdHNJbnN0YW5jZSkpO1xuICAgICAgfSksXG4gICAgICBtZXJnZU1hcChzb3VyY2UkID0+IHtcbiAgICAgICAgY29uc3QgZWZmZWN0JCA9IHNvdXJjZSQucGlwZShcbiAgICAgICAgICBleGhhdXN0TWFwKHNvdXJjZUluc3RhbmNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlRWZmZWN0U291cmNlKFxuICAgICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlcixcbiAgICAgICAgICAgICAgdGhpcy5lZmZlY3RzRXJyb3JIYW5kbGVyXG4gICAgICAgICAgICApKHNvdXJjZUluc3RhbmNlKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAob3V0cHV0ID0+IHtcbiAgICAgICAgICAgIHJlcG9ydEludmFsaWRBY3Rpb25zKG91dHB1dCwgdGhpcy5lcnJvckhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dC5ub3RpZmljYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgKG5vdGlmaWNhdGlvbik6IG5vdGlmaWNhdGlvbiBpcyBOb3RpZmljYXRpb248QWN0aW9uPiA9PlxuICAgICAgICAgICAgICBub3RpZmljYXRpb24ua2luZCA9PT0gJ04nXG4gICAgICAgICAgKSxcbiAgICAgICAgICBkZW1hdGVyaWFsaXplKClcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzdGFydCB0aGUgc3RyZWFtIHdpdGggYW4gSU5JVCBhY3Rpb25cbiAgICAgICAgLy8gZG8gdGhpcyBvbmx5IGZvciB0aGUgZmlyc3QgRWZmZWN0IGluc3RhbmNlXG4gICAgICAgIGNvbnN0IGluaXQkID0gc291cmNlJC5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgZmlsdGVyKGlzT25Jbml0RWZmZWN0cyksXG4gICAgICAgICAgbWFwKGluc3RhbmNlID0+IGluc3RhbmNlLm5ncnhPbkluaXRFZmZlY3RzKCkpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG1lcmdlKGVmZmVjdCQsIGluaXQkKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZmZlY3RzSW5zdGFuY2Uoc291cmNlSW5zdGFuY2U6IGFueSkge1xuICBpZiAoaXNPbklkZW50aWZ5RWZmZWN0cyhzb3VyY2VJbnN0YW5jZSkpIHtcbiAgICByZXR1cm4gc291cmNlSW5zdGFuY2UubmdyeE9uSWRlbnRpZnlFZmZlY3RzKCk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVFZmZlY3RTb3VyY2UoXG4gIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICBlZmZlY3RzRXJyb3JIYW5kbGVyOiBFZmZlY3RzRXJyb3JIYW5kbGVyXG4pOiAoc291cmNlSW5zdGFuY2U6IGFueSkgPT4gT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+IHtcbiAgcmV0dXJuIHNvdXJjZUluc3RhbmNlID0+IHtcbiAgICBjb25zdCBtZXJnZWRFZmZlY3RzJCA9IG1lcmdlRWZmZWN0cyhcbiAgICAgIHNvdXJjZUluc3RhbmNlLFxuICAgICAgZXJyb3JIYW5kbGVyLFxuICAgICAgZWZmZWN0c0Vycm9ySGFuZGxlclxuICAgICk7XG5cbiAgICBpZiAoaXNPblJ1bkVmZmVjdHMoc291cmNlSW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlSW5zdGFuY2UubmdyeE9uUnVuRWZmZWN0cyhtZXJnZWRFZmZlY3RzJCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZEVmZmVjdHMkO1xuICB9O1xufVxuIl19
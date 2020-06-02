/**
 * @fileoverview added by tsickle
 * Generated from: src/effects_runner.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EffectSources } from './effect_sources';
var EffectsRunner = /** @class */ (function () {
    function EffectsRunner(effectSources, store) {
        this.effectSources = effectSources;
        this.store = store;
        this.effectsSubscription = null;
    }
    /**
     * @return {?}
     */
    EffectsRunner.prototype.start = /**
     * @return {?}
     */
    function () {
        if (!this.effectsSubscription) {
            this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store);
        }
    };
    /**
     * @return {?}
     */
    EffectsRunner.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.effectsSubscription) {
            this.effectsSubscription.unsubscribe();
            this.effectsSubscription = null;
        }
    };
    EffectsRunner.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EffectsRunner.ctorParameters = function () { return [
        { type: EffectSources },
        { type: Store }
    ]; };
    return EffectsRunner;
}());
export { EffectsRunner };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EffectsRunner.prototype.effectsSubscription;
    /**
     * @type {?}
     * @private
     */
    EffectsRunner.prototype.effectSources;
    /**
     * @type {?}
     * @private
     */
    EffectsRunner.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19ydW5uZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmdyeC9lZmZlY3RzLyIsInNvdXJjZXMiOlsic3JjL2VmZmVjdHNfcnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQUlFLHVCQUNVLGFBQTRCLEVBQzVCLEtBQWlCO1FBRGpCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFKbkIsd0JBQW1CLEdBQXdCLElBQUksQ0FBQztJQUtyRCxDQUFDOzs7O0lBRUosNkJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWE7aUJBQzFDLFNBQVMsRUFBRTtpQkFDWCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBdEJGLFVBQVU7Ozs7Z0JBRkYsYUFBYTtnQkFIYixLQUFLOztJQTRCZCxvQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLGFBQWE7Ozs7OztJQUN4Qiw0Q0FBd0Q7Ozs7O0lBR3RELHNDQUFvQzs7Ozs7SUFDcEMsOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFZmZlY3RTb3VyY2VzIH0gZnJvbSAnLi9lZmZlY3Rfc291cmNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZmZlY3RzUnVubmVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlZmZlY3RzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVmZmVjdFNvdXJjZXM6IEVmZmVjdFNvdXJjZXMsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PlxuICApIHt9XG5cbiAgc3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmVmZmVjdHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZWZmZWN0c1N1YnNjcmlwdGlvbiA9IHRoaXMuZWZmZWN0U291cmNlc1xuICAgICAgICAudG9BY3Rpb25zKClcbiAgICAgICAgLnN1YnNjcmliZSh0aGlzLnN0b3JlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lZmZlY3RzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVmZmVjdHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZWZmZWN0c1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=
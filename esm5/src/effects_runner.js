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
        { type: Injectable },
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
//# sourceMappingURL=effects_runner.js.map
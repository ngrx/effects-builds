/**
 * @fileoverview added by tsickle
 * Generated from: src/effects_root_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Inject, Optional } from '@angular/core';
import { createAction, Store, StoreRootModule, StoreFeatureModule, } from '@ngrx/store';
import { EffectsRunner } from './effects_runner';
import { EffectSources } from './effect_sources';
import { ROOT_EFFECTS, _ROOT_EFFECTS_GUARD } from './tokens';
/** @type {?} */
export const ROOT_EFFECTS_INIT = '@ngrx/effects/init';
/** @type {?} */
export const rootEffectsInit = createAction(ROOT_EFFECTS_INIT);
export class EffectsRootModule {
    /**
     * @param {?} sources
     * @param {?} runner
     * @param {?} store
     * @param {?} rootEffects
     * @param {?} storeRootModule
     * @param {?} storeFeatureModule
     * @param {?} guard
     */
    constructor(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule, guard) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach((/**
         * @param {?} effectSourceInstance
         * @return {?}
         */
        effectSourceInstance => sources.addEffects(effectSourceInstance)));
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    addEffects(effectSourceInstance) {
        this.sources.addEffects(effectSourceInstance);
    }
}
EffectsRootModule.decorators = [
    { type: NgModule, args: [{},] },
];
/** @nocollapse */
EffectsRootModule.ctorParameters = () => [
    { type: EffectSources },
    { type: EffectsRunner },
    { type: Store },
    { type: Array, decorators: [{ type: Inject, args: [ROOT_EFFECTS,] }] },
    { type: StoreRootModule, decorators: [{ type: Optional }] },
    { type: StoreFeatureModule, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [_ROOT_EFFECTS_GUARD,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EffectsRootModule.prototype.sources;
}
//# sourceMappingURL=effects_root_module.js.map
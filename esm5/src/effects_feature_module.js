/**
 * @fileoverview added by tsickle
 * Generated from: src/effects_feature_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Inject, Optional } from '@angular/core';
import { StoreRootModule, StoreFeatureModule } from '@ngrx/store';
import { EffectsRootModule } from './effects_root_module';
import { FEATURE_EFFECTS } from './tokens';
var EffectsFeatureModule = /** @class */ (function () {
    function EffectsFeatureModule(root, effectSourceGroups, storeRootModule, storeFeatureModule) {
        effectSourceGroups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            return group.forEach((/**
             * @param {?} effectSourceInstance
             * @return {?}
             */
            function (effectSourceInstance) {
                return root.addEffects(effectSourceInstance);
            }));
        }));
    }
    EffectsFeatureModule.decorators = [
        { type: NgModule, args: [{},] },
    ];
    /** @nocollapse */
    EffectsFeatureModule.ctorParameters = function () { return [
        { type: EffectsRootModule },
        { type: Array, decorators: [{ type: Inject, args: [FEATURE_EFFECTS,] }] },
        { type: StoreRootModule, decorators: [{ type: Optional }] },
        { type: StoreFeatureModule, decorators: [{ type: Optional }] }
    ]; };
    return EffectsFeatureModule;
}());
export { EffectsFeatureModule };
//# sourceMappingURL=effects_feature_module.js.map
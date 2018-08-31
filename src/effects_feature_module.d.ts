import { StoreRootModule, StoreFeatureModule, Store } from '@ngrx/store';
import { EffectsRootModule } from './effects_root_module';
export declare const UPDATE_EFFECTS = "@ngrx/effects/update-effects";
export declare type UpdateEffects = {
    type: typeof UPDATE_EFFECTS;
    effects: string[];
};
export declare class EffectsFeatureModule {
    constructor(root: EffectsRootModule, store: Store<any>, effectSourceGroups: any[][], storeRootModule: StoreRootModule, storeFeatureModule: StoreFeatureModule);
}

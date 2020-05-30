import { Store, StoreRootModule, StoreFeatureModule } from '@ngrx/store';
import { EffectsRunner } from './effects_runner';
import { EffectSources } from './effect_sources';
export declare const ROOT_EFFECTS_INIT = "@ngrx/effects/init";
export declare const rootEffectsInit: import("../../../dist/modules/store/ngrx-store").ActionCreator<"@ngrx/effects/init", () => import("../../../dist/modules/store/src/models").TypedAction<"@ngrx/effects/init">>;
export declare class EffectsRootModule {
    private sources;
    constructor(sources: EffectSources, runner: EffectsRunner, store: Store<any>, rootEffects: any[], storeRootModule: StoreRootModule, storeFeatureModule: StoreFeatureModule, guard: any);
    addEffects(effectSourceInstance: any): void;
}

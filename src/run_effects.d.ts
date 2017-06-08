import { Provider } from '@angular/core';
import { EffectsRunner } from './effects_runner';
import { EffectSources } from './effect_sources';
export declare function createRunEffects(effectSources: EffectSources, runner: EffectsRunner, rootEffects: any[]): () => void;
export declare const RUN_EFFECTS: Provider;

import { Observable } from 'rxjs';
import { EffectNotification } from './effect_notification';
export declare type onRunEffectsFn = (resolvedEffects$: Observable<EffectNotification>) => Observable<EffectNotification>;
export interface OnRunEffects {
    ngrxOnRunEffects: onRunEffectsFn;
}
export declare const onRunEffectsKey: keyof OnRunEffects;
export declare function isOnRunEffects(sourceInstance: {
    [onRunEffectsKey]?: onRunEffectsFn;
}): sourceInstance is OnRunEffects;

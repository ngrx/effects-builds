import { EffectConfig, EffectMetadata } from './models';
export declare function Effect({ dispatch, resubscribeOnError, }?: EffectConfig): <T extends Object, K extends Exclude<keyof T, "constructor" | "toString" | "toLocaleString" | "valueOf" | "hasOwnProperty" | "isPrototypeOf" | "propertyIsEnumerable" | "should">>(target: T, propertyName: K) => void;
export declare function getEffectDecoratorMetadata<T>(instance: T): EffectMetadata<T>[];

import { EffectMetadata } from './models';
export declare function Effect<T>({ dispatch }?: {
    dispatch?: boolean | undefined;
}): PropertyDecorator;
export declare function getEffectDecoratorMetadata<T>(instance: T): EffectMetadata<T>[];

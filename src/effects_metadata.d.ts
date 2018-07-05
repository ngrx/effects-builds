export interface EffectMetadata<T> {
    propertyName: keyof T;
    dispatch: boolean;
}
export declare function Effect<T>({dispatch}?: {
    dispatch?: boolean;
}): PropertyDecorator;
export declare function getSourceForInstance<T>(instance: T): T;
export declare function getSourceMetadata<T>(instance: T): Array<EffectMetadata<T>>;
export declare type EffectsMetadata<T> = {
    [key in keyof T]?: {
        dispatch: boolean;
    };
};
export declare function getEffectsMetadata<T>(instance: T): EffectsMetadata<T>;

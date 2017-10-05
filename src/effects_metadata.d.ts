export interface EffectMetadata {
    propertyName: string;
    dispatch: boolean;
}
/**
 * @ExportDecoratedItems
 */
export declare function Effect({dispatch}?: {
    dispatch: boolean;
}): PropertyDecorator;
export declare function getSourceForInstance(instance: Object): any;
export declare const getSourceMetadata: (i: Object) => EffectMetadata[];

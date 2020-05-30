/**
 * @fileoverview added by tsickle
 * Generated from: src/lifecycle_hooks.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const onIdentifyEffectsKey = 'ngrxOnIdentifyEffects';
/**
 * @param {?} instance
 * @return {?}
 */
export function isOnIdentifyEffects(instance) {
    return isFunction(instance, onIdentifyEffectsKey);
}
/** @type {?} */
export const onRunEffectsKey = 'ngrxOnRunEffects';
/**
 * @param {?} instance
 * @return {?}
 */
export function isOnRunEffects(instance) {
    return isFunction(instance, onRunEffectsKey);
}
/** @type {?} */
export const onInitEffects = 'ngrxOnInitEffects';
/**
 * @param {?} instance
 * @return {?}
 */
export function isOnInitEffects(instance) {
    return isFunction(instance, onInitEffects);
}
/**
 * @param {?} instance
 * @param {?} functionName
 * @return {?}
 */
function isFunction(instance, functionName) {
    return (instance &&
        functionName in instance &&
        typeof instance[functionName] === 'function');
}
//# sourceMappingURL=lifecycle_hooks.js.map
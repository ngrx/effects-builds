import { compose } from '@ngrx/store';
const /** @type {?} */ METADATA_KEY = '__@ngrx/effects__';
const /** @type {?} */ r = Reflect;
/**
 * @param {?} sourceProto
 * @return {?}
 */
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor[METADATA_KEY] || [];
}
/**
 * @param {?} sourceProto
 * @param {?} entries
 * @return {?}
 */
function setEffectMetadataEntries(sourceProto, entries) {
    const /** @type {?} */ constructor = sourceProto.constructor;
    const /** @type {?} */ meta = constructor.hasOwnProperty(METADATA_KEY)
        ? ((constructor))[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
/**
 * \@ExportDecoratedItems
 * @param {?=} __0
 * @return {?}
 */
export function Effect({ dispatch } = { dispatch: true }) {
    return function (target, propertyName) {
        const /** @type {?} */ metadata = { propertyName, dispatch };
        setEffectMetadataEntries(target, [metadata]);
    };
}
/**
 * @param {?} instance
 * @return {?}
 */
export function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}
export const /** @type {?} */ getSourceMetadata = compose(getEffectMetadataEntries, getSourceForInstance);
//# sourceMappingURL=effects_metadata.js.map
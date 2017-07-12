import { compose } from '@ngrx/store';
const /** @type {?} */ METADATA_KEY = '@ngrx/effects';
const /** @type {?} */ r = Reflect;
/**
 * @param {?} sourceProto
 * @return {?}
 */
function getEffectMetadataEntries(sourceProto) {
    if (r.hasOwnMetadata(METADATA_KEY, sourceProto)) {
        return r.getOwnMetadata(METADATA_KEY, sourceProto);
    }
    return [];
}
/**
 * @param {?} sourceProto
 * @param {?} entries
 * @return {?}
 */
function setEffectMetadataEntries(sourceProto, entries) {
    r.defineMetadata(METADATA_KEY, entries, sourceProto);
}
/**
 * @param {?=} __0
 * @return {?}
 */
export function Effect({ dispatch } = { dispatch: true }) {
    return function (target, propertyName) {
        const /** @type {?} */ effects = getEffectMetadataEntries(target);
        const /** @type {?} */ metadata = { propertyName, dispatch };
        setEffectMetadataEntries(target, [...effects, metadata]);
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
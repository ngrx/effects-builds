/**
 * @license NgRx 9.0.0-beta.0+15.sha-1c7872c
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */
import { Actions } from '@ngrx/effects';
import { defer } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/testing/src/testing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} factoryOrSource
 * @return {?}
 */
function provideMockActions(factoryOrSource) {
    return {
        provide: Actions,
        useFactory: (/**
         * @return {?}
         */
        () => {
            if (typeof factoryOrSource === 'function') {
                return new Actions(defer(factoryOrSource));
            }
            return new Actions(factoryOrSource);
        }),
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/testing/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { provideMockActions };
//# sourceMappingURL=testing.js.map

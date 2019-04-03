/**
 * @license NgRx 7.4.0+16.sha-3b9b890
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */
import { Actions } from '@ngrx/effects';
import { defer } from 'rxjs';

function provideMockActions(factoryOrSource) {
    return {
        provide: Actions,
        useFactory: function () {
            if (typeof factoryOrSource === 'function') {
                return new Actions(defer(factoryOrSource));
            }
            return new Actions(factoryOrSource);
        },
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { provideMockActions };
//# sourceMappingURL=testing.js.map

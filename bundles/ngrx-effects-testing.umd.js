(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/effects'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@ngrx/effects/testing', ['exports', '@ngrx/effects', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngrx = global.ngrx || {}, global.ngrx.effects = global.ngrx.effects || {}, global.ngrx.effects.testing = {}), global.ngrx.effects, global.rxjs));
}(this, (function (exports, effects, rxjs) { 'use strict';

    function provideMockActions(factoryOrSource) {
        return {
            provide: effects.Actions,
            useFactory: function () {
                if (typeof factoryOrSource === 'function') {
                    return new effects.Actions(rxjs.defer(factoryOrSource));
                }
                return new effects.Actions(factoryOrSource);
            },
            deps: [],
        };
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.provideMockActions = provideMockActions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngrx-effects-testing.umd.js.map

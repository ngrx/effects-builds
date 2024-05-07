// testing.mjs
import { Actions } from "@ngrx/effects";
import { defer } from "rxjs";
function provideMockActions(factoryOrSource) {
  return {
    provide: Actions,
    useFactory: () => {
      if (typeof factoryOrSource === "function") {
        return new Actions(defer(factoryOrSource));
      }
      return new Actions(factoryOrSource);
    },
    deps: []
  };
}
export {
  provideMockActions
};
//# sourceMappingURL=ngrx-effects-testing.mjs.map

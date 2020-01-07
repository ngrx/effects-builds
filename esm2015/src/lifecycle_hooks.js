/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/lifecycle_hooks.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * Interface to set an identifier for effect instances.
 *
 * By default, each Effects class is registered
 * once regardless of how many times the Effect class
 * is loaded. By implementing this interface, you define
 * a unique identifier to register an Effects class instance
 * multiple times.
 *
 * \@usageNotes
 *
 * ### Set an identifier for an Effects class
 *
 * ```ts
 * class EffectWithIdentifier implements OnIdentifyEffects {
 *  constructor(private effectIdentifier: string) {}
 *
 *  ngrxOnIdentifyEffects() {
 *    return this.effectIdentifier;
 *  }
 *
 * ```
 * @record
 */
export function OnIdentifyEffects() { }
if (false) {
    /**
     * \@description
     * String identifier to differentiate effect instances.
     * @return {?}
     */
    OnIdentifyEffects.prototype.ngrxOnIdentifyEffects = function () { };
}
/** @type {?} */
export const onIdentifyEffectsKey = 'ngrxOnIdentifyEffects';
/**
 * \@description
 * Interface to control the lifecycle of effects.
 *
 * By default, effects are merged and subscribed to the store. Implement the OnRunEffects interface to control the lifecycle of the resolved effects.
 *
 * \@usageNotes
 *
 * ### Implement the OnRunEffects interface on an Effects class
 *
 * ```ts
 * export class UserEffects implements OnRunEffects {
 *   constructor(private actions$: Actions) {}
 *
 *   ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
 *     return this.actions$.pipe(
 *       ofType('LOGGED_IN'),
 *       exhaustMap(() =>
 *         resolvedEffects$.pipe(
 *           takeUntil(this.actions$.pipe(ofType('LOGGED_OUT')))
 *         )
 *       )
 *     );
 *   }
 * }
 * ```
 * @record
 */
export function OnRunEffects() { }
if (false) {
    /**
     * \@description
     * Method to control the lifecycle of effects.
     * @param {?} resolvedEffects$
     * @return {?}
     */
    OnRunEffects.prototype.ngrxOnRunEffects = function (resolvedEffects$) { };
}
/** @type {?} */
export const onRunEffectsKey = 'ngrxOnRunEffects';
/**
 * \@description
 * Interface to dispatch an action after effect registration.
 *
 * Implement this interface to dispatch a custom action after
 * the effect has been added. You can listen to this action
 * in the rest of the application to execute something after
 * the effect is registered.
 *
 * \@usageNotes
 *
 * ### Set an identifier for an Effects class
 *
 * ```ts
 * class EffectWithInitAction implements OnInitEffects {
 *  ngrxOnInitEffects() {
 *    return { type: '[EffectWithInitAction] Init' };
 *  }
 * ```
 * @record
 */
export function OnInitEffects() { }
if (false) {
    /**
     * \@description
     * Action to be dispatched after the effect is registered.
     * @return {?}
     */
    OnInitEffects.prototype.ngrxOnInitEffects = function () { };
}
/** @type {?} */
export const onInitEffects = 'ngrxOnInitEffects';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX2hvb2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lZmZlY3RzL3NyYy9saWZlY3ljbGVfaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLHVDQU1DOzs7Ozs7O0lBREMsb0VBQWdDOzs7QUFHbEMsTUFBTSxPQUFPLG9CQUFvQixHQUMvQix1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJ6QixrQ0FRQzs7Ozs7Ozs7SUFIQywwRUFFa0M7OztBQUdwQyxNQUFNLE9BQU8sZUFBZSxHQUF1QixrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQnJFLG1DQU1DOzs7Ozs7O0lBREMsNERBQTRCOzs7QUFHOUIsTUFBTSxPQUFPLGFBQWEsR0FBd0IsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRWZmZWN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJbnRlcmZhY2UgdG8gc2V0IGFuIGlkZW50aWZpZXIgZm9yIGVmZmVjdCBpbnN0YW5jZXMuXG4gKlxuICogQnkgZGVmYXVsdCwgZWFjaCBFZmZlY3RzIGNsYXNzIGlzIHJlZ2lzdGVyZWRcbiAqIG9uY2UgcmVnYXJkbGVzcyBvZiBob3cgbWFueSB0aW1lcyB0aGUgRWZmZWN0IGNsYXNzXG4gKiBpcyBsb2FkZWQuIEJ5IGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSwgeW91IGRlZmluZVxuICogYSB1bmlxdWUgaWRlbnRpZmllciB0byByZWdpc3RlciBhbiBFZmZlY3RzIGNsYXNzIGluc3RhbmNlXG4gKiBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICMjIyBTZXQgYW4gaWRlbnRpZmllciBmb3IgYW4gRWZmZWN0cyBjbGFzc1xuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBFZmZlY3RXaXRoSWRlbnRpZmllciBpbXBsZW1lbnRzIE9uSWRlbnRpZnlFZmZlY3RzIHtcbiAqICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVmZmVjdElkZW50aWZpZXI6IHN0cmluZykge31cbiAqXG4gKiAgbmdyeE9uSWRlbnRpZnlFZmZlY3RzKCkge1xuICogICAgcmV0dXJuIHRoaXMuZWZmZWN0SWRlbnRpZmllcjtcbiAqICB9XG4gKlxuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT25JZGVudGlmeUVmZmVjdHMge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFN0cmluZyBpZGVudGlmaWVyIHRvIGRpZmZlcmVudGlhdGUgZWZmZWN0IGluc3RhbmNlcy5cbiAgICovXG4gIG5ncnhPbklkZW50aWZ5RWZmZWN0cygpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBvbklkZW50aWZ5RWZmZWN0c0tleToga2V5b2YgT25JZGVudGlmeUVmZmVjdHMgPVxuICAnbmdyeE9uSWRlbnRpZnlFZmZlY3RzJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEludGVyZmFjZSB0byBjb250cm9sIHRoZSBsaWZlY3ljbGUgb2YgZWZmZWN0cy5cbiAqXG4gKiBCeSBkZWZhdWx0LCBlZmZlY3RzIGFyZSBtZXJnZWQgYW5kIHN1YnNjcmliZWQgdG8gdGhlIHN0b3JlLiBJbXBsZW1lbnQgdGhlIE9uUnVuRWZmZWN0cyBpbnRlcmZhY2UgdG8gY29udHJvbCB0aGUgbGlmZWN5Y2xlIG9mIHRoZSByZXNvbHZlZCBlZmZlY3RzLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIEltcGxlbWVudCB0aGUgT25SdW5FZmZlY3RzIGludGVyZmFjZSBvbiBhbiBFZmZlY3RzIGNsYXNzXG4gKlxuICogYGBgdHNcbiAqIGV4cG9ydCBjbGFzcyBVc2VyRWZmZWN0cyBpbXBsZW1lbnRzIE9uUnVuRWZmZWN0cyB7XG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMpIHt9XG4gKlxuICogICBuZ3J4T25SdW5FZmZlY3RzKHJlc29sdmVkRWZmZWN0cyQ6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPikge1xuICogICAgIHJldHVybiB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gKiAgICAgICBvZlR5cGUoJ0xPR0dFRF9JTicpLFxuICogICAgICAgZXhoYXVzdE1hcCgoKSA9PlxuICogICAgICAgICByZXNvbHZlZEVmZmVjdHMkLnBpcGUoXG4gKiAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuYWN0aW9ucyQucGlwZShvZlR5cGUoJ0xPR0dFRF9PVVQnKSkpXG4gKiAgICAgICAgIClcbiAqICAgICAgIClcbiAqICAgICApO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPblJ1bkVmZmVjdHMge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIE1ldGhvZCB0byBjb250cm9sIHRoZSBsaWZlY3ljbGUgb2YgZWZmZWN0cy5cbiAgICovXG4gIG5ncnhPblJ1bkVmZmVjdHMoXG4gICAgcmVzb2x2ZWRFZmZlY3RzJDogT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+XG4gICk6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPjtcbn1cblxuZXhwb3J0IGNvbnN0IG9uUnVuRWZmZWN0c0tleToga2V5b2YgT25SdW5FZmZlY3RzID0gJ25ncnhPblJ1bkVmZmVjdHMnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogSW50ZXJmYWNlIHRvIGRpc3BhdGNoIGFuIGFjdGlvbiBhZnRlciBlZmZlY3QgcmVnaXN0cmF0aW9uLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBkaXNwYXRjaCBhIGN1c3RvbSBhY3Rpb24gYWZ0ZXJcbiAqIHRoZSBlZmZlY3QgaGFzIGJlZW4gYWRkZWQuIFlvdSBjYW4gbGlzdGVuIHRvIHRoaXMgYWN0aW9uXG4gKiBpbiB0aGUgcmVzdCBvZiB0aGUgYXBwbGljYXRpb24gdG8gZXhlY3V0ZSBzb21ldGhpbmcgYWZ0ZXJcbiAqIHRoZSBlZmZlY3QgaXMgcmVnaXN0ZXJlZC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICMjIyBTZXQgYW4gaWRlbnRpZmllciBmb3IgYW4gRWZmZWN0cyBjbGFzc1xuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBFZmZlY3RXaXRoSW5pdEFjdGlvbiBpbXBsZW1lbnRzIE9uSW5pdEVmZmVjdHMge1xuICogIG5ncnhPbkluaXRFZmZlY3RzKCkge1xuICogICAgcmV0dXJuIHsgdHlwZTogJ1tFZmZlY3RXaXRoSW5pdEFjdGlvbl0gSW5pdCcgfTtcbiAqICB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPbkluaXRFZmZlY3RzIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBY3Rpb24gdG8gYmUgZGlzcGF0Y2hlZCBhZnRlciB0aGUgZWZmZWN0IGlzIHJlZ2lzdGVyZWQuXG4gICAqL1xuICBuZ3J4T25Jbml0RWZmZWN0cygpOiBBY3Rpb247XG59XG5cbmV4cG9ydCBjb25zdCBvbkluaXRFZmZlY3RzOiBrZXlvZiBPbkluaXRFZmZlY3RzID0gJ25ncnhPbkluaXRFZmZlY3RzJztcbiJdfQ==
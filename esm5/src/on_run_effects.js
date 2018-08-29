import { getSourceForInstance } from './effects_metadata';
export var onRunEffectsKey = 'ngrxOnRunEffects';
export function isOnRunEffects(sourceInstance) {
    var source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25fcnVuX2VmZmVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL29uX3J1bl9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVTFELE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBdUIsa0JBQWtCLENBQUM7QUFFdEUsTUFBTSx5QkFBeUIsY0FFOUI7SUFDQyxJQUFNLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVwRCxPQUFPLENBQ0wsZUFBZSxJQUFJLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxVQUFVLENBQzNFLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFZmZlY3ROb3RpZmljYXRpb24gfSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UgfSBmcm9tICcuL2VmZmVjdHNfbWV0YWRhdGEnO1xuXG5leHBvcnQgdHlwZSBvblJ1bkVmZmVjdHNGbiA9IChcbiAgcmVzb2x2ZWRFZmZlY3RzJDogT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+XG4pID0+IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPjtcblxuZXhwb3J0IGludGVyZmFjZSBPblJ1bkVmZmVjdHMge1xuICBuZ3J4T25SdW5FZmZlY3RzOiBvblJ1bkVmZmVjdHNGbjtcbn1cblxuZXhwb3J0IGNvbnN0IG9uUnVuRWZmZWN0c0tleToga2V5b2YgT25SdW5FZmZlY3RzID0gJ25ncnhPblJ1bkVmZmVjdHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPblJ1bkVmZmVjdHMoc291cmNlSW5zdGFuY2U6IHtcbiAgW29uUnVuRWZmZWN0c0tleV0/OiBvblJ1bkVmZmVjdHNGbjtcbn0pOiBzb3VyY2VJbnN0YW5jZSBpcyBPblJ1bkVmZmVjdHMge1xuICBjb25zdCBzb3VyY2UgPSBnZXRTb3VyY2VGb3JJbnN0YW5jZShzb3VyY2VJbnN0YW5jZSk7XG5cbiAgcmV0dXJuIChcbiAgICBvblJ1bkVmZmVjdHNLZXkgaW4gc291cmNlICYmIHR5cGVvZiBzb3VyY2Vbb25SdW5FZmZlY3RzS2V5XSA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuIl19
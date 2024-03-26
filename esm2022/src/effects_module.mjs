import { inject, NgModule, } from '@angular/core';
import { EffectsFeatureModule } from './effects_feature_module';
import { EffectsRootModule } from './effects_root_module';
import { EffectsRunner } from './effects_runner';
import { _FEATURE_EFFECTS, _ROOT_EFFECTS, _ROOT_EFFECTS_GUARD, _FEATURE_EFFECTS_INSTANCE_GROUPS, _ROOT_EFFECTS_INSTANCES, USER_PROVIDED_EFFECTS, } from './tokens';
import { getClasses, isToken } from './utils';
import * as i0 from "@angular/core";
export class EffectsModule {
    static forFeature(...featureEffects) {
        const effects = featureEffects.flat();
        const effectsClasses = getClasses(effects);
        return {
            ngModule: EffectsFeatureModule,
            providers: [
                effectsClasses,
                {
                    provide: _FEATURE_EFFECTS,
                    multi: true,
                    useValue: effects,
                },
                {
                    provide: USER_PROVIDED_EFFECTS,
                    multi: true,
                    useValue: [],
                },
                {
                    provide: _FEATURE_EFFECTS_INSTANCE_GROUPS,
                    multi: true,
                    useFactory: createEffectsInstances,
                    deps: [_FEATURE_EFFECTS, USER_PROVIDED_EFFECTS],
                },
            ],
        };
    }
    static forRoot(...rootEffects) {
        const effects = rootEffects.flat();
        const effectsClasses = getClasses(effects);
        return {
            ngModule: EffectsRootModule,
            providers: [
                effectsClasses,
                {
                    provide: _ROOT_EFFECTS,
                    useValue: [effects],
                },
                {
                    provide: _ROOT_EFFECTS_GUARD,
                    useFactory: _provideForRootGuard,
                },
                {
                    provide: USER_PROVIDED_EFFECTS,
                    multi: true,
                    useValue: [],
                },
                {
                    provide: _ROOT_EFFECTS_INSTANCES,
                    useFactory: createEffectsInstances,
                    deps: [_ROOT_EFFECTS, USER_PROVIDED_EFFECTS],
                },
            ],
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.0", ngImport: i0, type: EffectsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.0", ngImport: i0, type: EffectsModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.0", ngImport: i0, type: EffectsModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.0", ngImport: i0, type: EffectsModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
function createEffectsInstances(effectsGroups, userProvidedEffectsGroups) {
    const effects = [];
    for (const effectsGroup of effectsGroups) {
        effects.push(...effectsGroup);
    }
    for (const userProvidedEffectsGroup of userProvidedEffectsGroups) {
        effects.push(...userProvidedEffectsGroup);
    }
    return effects.map((effectsTokenOrRecord) => isToken(effectsTokenOrRecord)
        ? inject(effectsTokenOrRecord)
        : effectsTokenOrRecord);
}
function _provideForRootGuard() {
    const runner = inject(EffectsRunner, { optional: true, skipSelf: true });
    const rootEffects = inject(_ROOT_EFFECTS, { self: true });
    // check whether any effects are actually passed
    const hasEffects = !(rootEffects.length === 1 && rootEffects[0].length === 0);
    if (hasEffects && runner) {
        throw new TypeError(`EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.`);
    }
    return 'guarded';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdHNfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxNQUFNLEVBR04sUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsZ0NBQWdDLEVBQ2hDLHVCQUF1QixFQUN2QixxQkFBcUIsR0FDdEIsTUFBTSxVQUFVLENBQUM7QUFFbEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRzlDLE1BQU0sT0FBTyxhQUFhO0lBT3hCLE1BQU0sQ0FBQyxVQUFVLENBQ2YsR0FBRyxjQUUwRDtRQUU3RCxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsTUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxjQUFjO2dCQUNkO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUUsRUFBRTtpQkFDYjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZ0NBQWdDO29CQUN6QyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxVQUFVLEVBQUUsc0JBQXNCO29CQUNsQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQztpQkFDaEQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBUUQsTUFBTSxDQUFDLE9BQU8sQ0FDWixHQUFHLFdBRTBEO1FBRTdELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULGNBQWM7Z0JBQ2Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQztpQkFDcEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsVUFBVSxFQUFFLG9CQUFvQjtpQkFDakM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsVUFBVSxFQUFFLHNCQUFzQjtvQkFDbEMsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDO2lCQUM3QzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7aUlBM0VVLGFBQWE7a0lBQWIsYUFBYTtrSUFBYixhQUFhOzsyRkFBYixhQUFhO2tCQUR6QixRQUFRO21CQUFDLEVBQUU7O0FBK0VaLFNBQVMsc0JBQXNCLENBQzdCLGFBQXdFLEVBQ3hFLHlCQUEyRTtJQUUzRSxNQUFNLE9BQU8sR0FFVCxFQUFFLENBQUM7SUFFUCxLQUFLLE1BQU0sWUFBWSxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsS0FBSyxNQUFNLHdCQUF3QixJQUFJLHlCQUF5QixFQUFFLENBQUM7UUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLHdCQUF3QixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FDMUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1FBQzNCLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDOUIsQ0FBQyxDQUFDLG9CQUFvQixDQUN6QixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsb0JBQW9CO0lBQzNCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUUxRCxnREFBZ0Q7SUFDaEQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUUsSUFBSSxVQUFVLElBQUksTUFBTSxFQUFFLENBQUM7UUFDekIsTUFBTSxJQUFJLFNBQVMsQ0FDakIsc0dBQXNHLENBQ3ZHLENBQUM7SUFDSixDQUFDO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi9lZmZlY3RzX2ZlYXR1cmVfbW9kdWxlJztcbmltcG9ydCB7IEVmZmVjdHNSb290TW9kdWxlIH0gZnJvbSAnLi9lZmZlY3RzX3Jvb3RfbW9kdWxlJztcbmltcG9ydCB7IEVmZmVjdHNSdW5uZXIgfSBmcm9tICcuL2VmZmVjdHNfcnVubmVyJztcbmltcG9ydCB7XG4gIF9GRUFUVVJFX0VGRkVDVFMsXG4gIF9ST09UX0VGRkVDVFMsXG4gIF9ST09UX0VGRkVDVFNfR1VBUkQsXG4gIF9GRUFUVVJFX0VGRkVDVFNfSU5TVEFOQ0VfR1JPVVBTLFxuICBfUk9PVF9FRkZFQ1RTX0lOU1RBTkNFUyxcbiAgVVNFUl9QUk9WSURFRF9FRkZFQ1RTLFxufSBmcm9tICcuL3Rva2Vucyc7XG5pbXBvcnQgeyBGdW5jdGlvbmFsRWZmZWN0IH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NlcywgaXNUb2tlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRWZmZWN0c01vZHVsZSB7XG4gIHN0YXRpYyBmb3JGZWF0dXJlKFxuICAgIGZlYXR1cmVFZmZlY3RzOiBBcnJheTxUeXBlPHVua25vd24+IHwgUmVjb3JkPHN0cmluZywgRnVuY3Rpb25hbEVmZmVjdD4+XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RWZmZWN0c0ZlYXR1cmVNb2R1bGU+O1xuICBzdGF0aWMgZm9yRmVhdHVyZShcbiAgICAuLi5mZWF0dXJlRWZmZWN0czogQXJyYXk8VHlwZTx1bmtub3duPiB8IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uYWxFZmZlY3Q+PlxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEVmZmVjdHNGZWF0dXJlTW9kdWxlPjtcbiAgc3RhdGljIGZvckZlYXR1cmUoXG4gICAgLi4uZmVhdHVyZUVmZmVjdHM6XG4gICAgICB8IEFycmF5PFR5cGU8dW5rbm93bj4gfCBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbmFsRWZmZWN0Pj5cbiAgICAgIHwgW0FycmF5PFR5cGU8dW5rbm93bj4gfCBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbmFsRWZmZWN0Pj5dXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RWZmZWN0c0ZlYXR1cmVNb2R1bGU+IHtcbiAgICBjb25zdCBlZmZlY3RzID0gZmVhdHVyZUVmZmVjdHMuZmxhdCgpO1xuICAgIGNvbnN0IGVmZmVjdHNDbGFzc2VzID0gZ2V0Q2xhc3NlcyhlZmZlY3RzKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVmZmVjdHNGZWF0dXJlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGVmZmVjdHNDbGFzc2VzLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogX0ZFQVRVUkVfRUZGRUNUUyxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VWYWx1ZTogZWZmZWN0cyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfUFJPVklERURfRUZGRUNUUyxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VWYWx1ZTogW10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBfRkVBVFVSRV9FRkZFQ1RTX0lOU1RBTkNFX0dST1VQUyxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVFZmZlY3RzSW5zdGFuY2VzLFxuICAgICAgICAgIGRlcHM6IFtfRkVBVFVSRV9FRkZFQ1RTLCBVU0VSX1BST1ZJREVEX0VGRkVDVFNdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgcm9vdEVmZmVjdHM6IEFycmF5PFR5cGU8dW5rbm93bj4gfCBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbmFsRWZmZWN0Pj5cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFZmZlY3RzUm9vdE1vZHVsZT47XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIC4uLnJvb3RFZmZlY3RzOiBBcnJheTxUeXBlPHVua25vd24+IHwgUmVjb3JkPHN0cmluZywgRnVuY3Rpb25hbEVmZmVjdD4+XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RWZmZWN0c1Jvb3RNb2R1bGU+O1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICAuLi5yb290RWZmZWN0czpcbiAgICAgIHwgQXJyYXk8VHlwZTx1bmtub3duPiB8IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uYWxFZmZlY3Q+PlxuICAgICAgfCBbQXJyYXk8VHlwZTx1bmtub3duPiB8IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uYWxFZmZlY3Q+Pl1cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFZmZlY3RzUm9vdE1vZHVsZT4ge1xuICAgIGNvbnN0IGVmZmVjdHMgPSByb290RWZmZWN0cy5mbGF0KCk7XG4gICAgY29uc3QgZWZmZWN0c0NsYXNzZXMgPSBnZXRDbGFzc2VzKGVmZmVjdHMpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRWZmZWN0c1Jvb3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgZWZmZWN0c0NsYXNzZXMsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBfUk9PVF9FRkZFQ1RTLFxuICAgICAgICAgIHVzZVZhbHVlOiBbZWZmZWN0c10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBfUk9PVF9FRkZFQ1RTX0dVQVJELFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IF9wcm92aWRlRm9yUm9vdEd1YXJkLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVVNFUl9QUk9WSURFRF9FRkZFQ1RTLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZVZhbHVlOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IF9ST09UX0VGRkVDVFNfSU5TVEFOQ0VTLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZUVmZmVjdHNJbnN0YW5jZXMsXG4gICAgICAgICAgZGVwczogW19ST09UX0VGRkVDVFMsIFVTRVJfUFJPVklERURfRUZGRUNUU10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWZmZWN0c0luc3RhbmNlcyhcbiAgZWZmZWN0c0dyb3VwczogQXJyYXk8VHlwZTx1bmtub3duPiB8IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uYWxFZmZlY3Q+PltdLFxuICB1c2VyUHJvdmlkZWRFZmZlY3RzR3JvdXBzOiBBcnJheTxUeXBlPHVua25vd24+IHwgSW5qZWN0aW9uVG9rZW48dW5rbm93bj4+W11cbik6IHVua25vd25bXSB7XG4gIGNvbnN0IGVmZmVjdHM6IEFycmF5PFxuICAgIFR5cGU8dW5rbm93bj4gfCBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbmFsRWZmZWN0PiB8IEluamVjdGlvblRva2VuPHVua25vd24+XG4gID4gPSBbXTtcblxuICBmb3IgKGNvbnN0IGVmZmVjdHNHcm91cCBvZiBlZmZlY3RzR3JvdXBzKSB7XG4gICAgZWZmZWN0cy5wdXNoKC4uLmVmZmVjdHNHcm91cCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHVzZXJQcm92aWRlZEVmZmVjdHNHcm91cCBvZiB1c2VyUHJvdmlkZWRFZmZlY3RzR3JvdXBzKSB7XG4gICAgZWZmZWN0cy5wdXNoKC4uLnVzZXJQcm92aWRlZEVmZmVjdHNHcm91cCk7XG4gIH1cblxuICByZXR1cm4gZWZmZWN0cy5tYXAoKGVmZmVjdHNUb2tlbk9yUmVjb3JkKSA9PlxuICAgIGlzVG9rZW4oZWZmZWN0c1Rva2VuT3JSZWNvcmQpXG4gICAgICA/IGluamVjdChlZmZlY3RzVG9rZW5PclJlY29yZClcbiAgICAgIDogZWZmZWN0c1Rva2VuT3JSZWNvcmRcbiAgKTtcbn1cblxuZnVuY3Rpb24gX3Byb3ZpZGVGb3JSb290R3VhcmQoKTogdW5rbm93biB7XG4gIGNvbnN0IHJ1bm5lciA9IGluamVjdChFZmZlY3RzUnVubmVyLCB7IG9wdGlvbmFsOiB0cnVlLCBza2lwU2VsZjogdHJ1ZSB9KTtcbiAgY29uc3Qgcm9vdEVmZmVjdHMgPSBpbmplY3QoX1JPT1RfRUZGRUNUUywgeyBzZWxmOiB0cnVlIH0pO1xuXG4gIC8vIGNoZWNrIHdoZXRoZXIgYW55IGVmZmVjdHMgYXJlIGFjdHVhbGx5IHBhc3NlZFxuICBjb25zdCBoYXNFZmZlY3RzID0gIShyb290RWZmZWN0cy5sZW5ndGggPT09IDEgJiYgcm9vdEVmZmVjdHNbMF0ubGVuZ3RoID09PSAwKTtcbiAgaWYgKGhhc0VmZmVjdHMgJiYgcnVubmVyKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIGBFZmZlY3RzTW9kdWxlLmZvclJvb3QoKSBjYWxsZWQgdHdpY2UuIEZlYXR1cmUgbW9kdWxlcyBzaG91bGQgdXNlIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZSgpIGluc3RlYWQuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuICdndWFyZGVkJztcbn1cbiJdfQ==
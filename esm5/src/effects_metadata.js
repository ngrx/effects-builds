var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
import { getCreateEffectMetadata } from './effect_creator';
import { getEffectDecoratorMetadata } from './effect_decorator';
export function getEffectsMetadata(instance) {
    var e_1, _a;
    var metadata = {};
    try {
        for (var _b = __values(getSourceMetadata(instance)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = _c.value, propertyName = _d.propertyName, dispatch = _d.dispatch;
            metadata[propertyName] = { dispatch: dispatch };
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return metadata;
}
export function getSourceMetadata(instance) {
    var effects = [
        getEffectDecoratorMetadata,
        getCreateEffectMetadata,
    ];
    return effects.reduce(function (sources, source) { return sources.concat(source(instance)); }, []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsTUFBTSxVQUFVLGtCQUFrQixDQUFJLFFBQVc7O0lBQy9DLElBQU0sUUFBUSxHQUF1QixFQUFFLENBQUM7O1FBRXhDLEtBQXlDLElBQUEsS0FBQSxTQUFBLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO1lBQTNELElBQUEsYUFBMEIsRUFBeEIsOEJBQVksRUFBRSxzQkFBUTtZQUNqQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO1NBQ3ZDOzs7Ozs7Ozs7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFJLFFBQVc7SUFDOUMsSUFBTSxPQUFPLEdBQWdEO1FBQzNELDBCQUEwQjtRQUMxQix1QkFBdUI7S0FDeEIsQ0FBQztJQUVGLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FDbkIsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsRUFDckQsRUFBRSxDQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWZmZWN0TWV0YWRhdGEsIEVmZmVjdHNNZXRhZGF0YSB9IGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCB7IGdldENyZWF0ZUVmZmVjdE1ldGFkYXRhIH0gZnJvbSAnLi9lZmZlY3RfY3JlYXRvcic7XG5pbXBvcnQgeyBnZXRFZmZlY3REZWNvcmF0b3JNZXRhZGF0YSB9IGZyb20gJy4vZWZmZWN0X2RlY29yYXRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RzTWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBFZmZlY3RzTWV0YWRhdGE8VD4ge1xuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0c01ldGFkYXRhPFQ+ID0ge307XG5cbiAgZm9yIChjb25zdCB7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfSBvZiBnZXRTb3VyY2VNZXRhZGF0YShpbnN0YW5jZSkpIHtcbiAgICBtZXRhZGF0YVtwcm9wZXJ0eU5hbWVdID0geyBkaXNwYXRjaCB9O1xuICB9XG5cbiAgcmV0dXJuIG1ldGFkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlTWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgY29uc3QgZWZmZWN0czogQXJyYXk8KGluc3RhbmNlOiBUKSA9PiBFZmZlY3RNZXRhZGF0YTxUPltdPiA9IFtcbiAgICBnZXRFZmZlY3REZWNvcmF0b3JNZXRhZGF0YSxcbiAgICBnZXRDcmVhdGVFZmZlY3RNZXRhZGF0YSxcbiAgXTtcblxuICByZXR1cm4gZWZmZWN0cy5yZWR1Y2U8RWZmZWN0TWV0YWRhdGE8VD5bXT4oXG4gICAgKHNvdXJjZXMsIHNvdXJjZSkgPT4gc291cmNlcy5jb25jYXQoc291cmNlKGluc3RhbmNlKSksXG4gICAgW11cbiAgKTtcbn1cbiJdfQ==
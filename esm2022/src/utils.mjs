import { InjectionToken } from '@angular/core';
export function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}
export function isClassInstance(obj) {
    return (!!obj.constructor &&
        obj.constructor.name !== 'Object' &&
        obj.constructor.name !== 'Function');
}
export function isClass(classOrRecord) {
    return typeof classOrRecord === 'function';
}
export function getClasses(classesAndRecords) {
    return classesAndRecords.filter(isClass);
}
export function isToken(tokenOrRecord) {
    return tokenOrRecord instanceof InjectionToken || isClass(tokenOrRecord);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFckQsTUFBTSxVQUFVLG9CQUFvQixDQUFJLFFBQVc7SUFDakQsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQVc7SUFDekMsT0FBTyxDQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVztRQUNqQixHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRO1FBQ2pDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FDcEMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixhQUFzRDtJQUV0RCxPQUFPLE9BQU8sYUFBYSxLQUFLLFVBQVUsQ0FBQztBQUM3QyxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsaUJBQWlFO0lBRWpFLE9BQU8saUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixhQUcyQjtJQUUzQixPQUFPLGFBQWEsWUFBWSxjQUFjLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlRm9ySW5zdGFuY2U8VD4oaW5zdGFuY2U6IFQpOiBUIHtcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NsYXNzSW5zdGFuY2Uob2JqOiBvYmplY3QpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAhIW9iai5jb25zdHJ1Y3RvciAmJlxuICAgIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnT2JqZWN0JyAmJlxuICAgIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnRnVuY3Rpb24nXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NsYXNzKFxuICBjbGFzc09yUmVjb3JkOiBUeXBlPHVua25vd24+IHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbik6IGNsYXNzT3JSZWNvcmQgaXMgVHlwZTx1bmtub3duPiB7XG4gIHJldHVybiB0eXBlb2YgY2xhc3NPclJlY29yZCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzZXMoXG4gIGNsYXNzZXNBbmRSZWNvcmRzOiBBcnJheTxUeXBlPHVua25vd24+IHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+XG4pOiBUeXBlPHVua25vd24+W10ge1xuICByZXR1cm4gY2xhc3Nlc0FuZFJlY29yZHMuZmlsdGVyKGlzQ2xhc3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb2tlbihcbiAgdG9rZW5PclJlY29yZDpcbiAgICB8IFR5cGU8dW5rbm93bj5cbiAgICB8IEluamVjdGlvblRva2VuPHVua25vd24+XG4gICAgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuKTogdG9rZW5PclJlY29yZCBpcyBUeXBlPHVua25vd24+IHwgSW5qZWN0aW9uVG9rZW48dW5rbm93bj4ge1xuICByZXR1cm4gdG9rZW5PclJlY29yZCBpbnN0YW5jZW9mIEluamVjdGlvblRva2VuIHx8IGlzQ2xhc3ModG9rZW5PclJlY29yZCk7XG59XG5cbi8vIFRPRE86IHJlcGxhY2Ugd2l0aCBSeEpTIGludGVyZmFjZXMgd2hlbiBwb3NzaWJsZVxuLy8gbmVlZHMgZGVwZW5kZW5jeSBvbiBSeEpTID49N1xuZXhwb3J0IGludGVyZmFjZSBOZXh0Tm90aWZpY2F0aW9uPFQ+IHtcbiAga2luZDogJ04nO1xuICB2YWx1ZTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvck5vdGlmaWNhdGlvbiB7XG4gIGtpbmQ6ICdFJztcbiAgZXJyb3I6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV0ZU5vdGlmaWNhdGlvbiB7XG4gIGtpbmQ6ICdDJztcbn1cblxuZXhwb3J0IHR5cGUgT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxUPiA9XG4gIHwgTmV4dE5vdGlmaWNhdGlvbjxUPlxuICB8IEVycm9yTm90aWZpY2F0aW9uXG4gIHwgQ29tcGxldGVOb3RpZmljYXRpb247XG4iXX0=
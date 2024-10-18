function findIndex<T>(
    sources: T[] = [],
    predicate: ((item: T) => boolean) | Partial<T>,
    fromIndex: number = 0
  ): number {
    const isFunctionPredicate:boolean = typeof predicate === 'function';
    const n:number = sources.length
    
    for (let i:number = fromIndex; i < n; i++) {
      const item = sources[i];
  
      if (isFunctionPredicate && (predicate as (item: T) => boolean)(item)) {
        return i;
      }
  
      if (!isFunctionPredicate && Object.keys(predicate).every(key => (item as any)[key] === (predicate as any)[key])) {
        return i;
      }
    }
    
    return -1;
  }

  export default findIndex;
  
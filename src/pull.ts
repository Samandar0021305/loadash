function pull<T>(arrays: T[][], ...args: T[]): T[] {
    const hasSet = new Set(args);
    return arrays.flat().filter(item => !hasSet.has(item));
}

export default pull;

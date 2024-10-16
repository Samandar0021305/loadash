function cloneDeep<T>(obj: T, map: Map<object, any> = new Map()): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (map.has(obj as object)) {
        return map.get(obj as object);
    }
    const output: any = Array.isArray(obj) ? [] : {} as T;
    map.set(obj as object, output);
    const keys = [...Object.getOwnPropertySymbols(obj), ...Object.keys(obj)] as (keyof T)[];
    for (const key of keys) {
        const val = obj[key];
        output[key] = cloneDeep(val, map);
    }
    return output;
}

export default cloneDeep;

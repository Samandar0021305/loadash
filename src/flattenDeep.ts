export default function flattenDeep<T>(arr: (T | T[])[] = []): T[] {
  const helperFlat = (arr: (T | T[])[]): T[] => {
    const result: T[] = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        result.push(...helperFlat(item));
      } else if (item !== null && item !== undefined) {
        result.push(item);
      }
    }
    return result;
  };
  return helperFlat(arr);
}

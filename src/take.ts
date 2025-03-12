function take<T>(arr: T[] | null | undefined, num: number = 1): T[] {
  if (!Array.isArray(arr) || num <= 0) return [];
  return arr.slice(0, Math.min(num, arr.length));
}

export default take;

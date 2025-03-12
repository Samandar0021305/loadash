function uniq<T>(arr: T[] | null | undefined): T[] {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

export default uniq;

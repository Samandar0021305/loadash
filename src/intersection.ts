export default function intersection<T>(...args: T[][]): T[] {
  if (args.length === 0) {
    return [];
  }

  const set = new Set<T>(args[0]);
  const len = args.length;

  for (let i = 1; i < len; i++) {
    for (let item of args[i]) {
      if (!set.has(item)) {
        set.delete(item);
      }
    }
  }

  return Array.from(set);
}

export default function concat<T>(arr: T[] = [], ...args: (T | T[])[]): T[] {
  for (let item of args) {
    if (Array.isArray(item)) {
      arr.push(...item);
    } else {
      arr.push(item);
    }
  }
  return arr;
}

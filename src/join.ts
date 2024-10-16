export default function join<T>(arr: T[] = [], str?: string): string {
  if (arr.length === 0) return '';
  if (str === undefined) return arr.join(',');

  let res = '';
  for (let item of arr) {
    res += `${item}${str}`;
  }
  return res;
}

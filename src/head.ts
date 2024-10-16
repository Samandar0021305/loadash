export default function head<T>(arr: T[]): T | undefined {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return arr[0];
}

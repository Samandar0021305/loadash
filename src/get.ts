export default function get<T>(source: T, path: string | (string[]), defaultValue: any = undefined): any {
  if (!source || (Array.isArray(path) ? path.length : path.length === 0)) {
    return defaultValue;
  }

  const newArr = Array.isArray(path)
    ? path
    : path.replaceAll("[", ".").replaceAll("]", "").split(".");

  let current: any = source;

  for (const item of newArr) {
    if (current === null || !(item in current)) {
      return defaultValue;
    }
    current = current[item as keyof typeof current]; 
  }

  return current;
}

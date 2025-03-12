function forEach<T>(
  obj: T[] | Record<string | symbol, T>,
  func: (value: T, key: string | number | symbol) => void
) {
  if (!obj || typeof obj !== "object") return;
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      func(obj[i], i);
    }
  } else {
    for (const key of Reflect.ownKeys(obj)) {
      func(obj[key as keyof typeof obj], key);
    }
  }
}

export default forEach;

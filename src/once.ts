export default function once<T extends (...args: any[]) => any>(func: T): T {
  let result: ReturnType<T> | null = null;
  let isCalled = false;

  return function (...args: Parameters<T>): ReturnType<T> {
    if (!isCalled) {
      result = func.apply(this, args);
      isCalled = true;
    }
    return result as ReturnType<T>;
  } as T;
}

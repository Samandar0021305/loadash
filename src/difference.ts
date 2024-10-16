export default function difference<T>(arr: T[], ...args: (T | T[])[]): T[] {
  const set = new Set(arr);
  args.forEach(arg => {
    if (Array.isArray(arg)) {
      arg.forEach(item => set.delete(item));
    } else {
      set.delete(arg);
    }
  });

  return [...set];
}

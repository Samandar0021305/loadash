export default function once<T extends (...args: any[]) => any>(func: T): T;

export default function fill<T>(arr: T[] = [], modif: T, start?: number, end?: number): T[] {
  if (start === undefined && end === undefined) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      arr[i] = modif;
    }
  } 
  else if (start !== undefined && end === undefined) {
    for (let i = start; i < arr.length; i++) {
      arr[i] = modif;
    }
  } 
  else if (start !== undefined && end !== undefined) {
    for (let i = start; i < end; i++) {
      arr[i] = modif;
    }
  }
  
  return arr;
}

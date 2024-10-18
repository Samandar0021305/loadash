export default function drop<T>(arr: T[] = [], num: number = 1): T[] {
   if (!num) return arr;
   const newArr: T[] = [];
   const n:number = arr.length
   for (let i:number = 0; i < n; i++) {
     if (num < i + 1) {
       newArr.push(arr[i]);
     }
   }
   
   return newArr;
 }
 
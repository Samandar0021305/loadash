export default function drop<T>(arr: T[] = [], num: number = 1): T[] {
   if (!num) return arr;
   const newArr: T[] = [];
   for (let i = 0; i < arr.length; i++) {
     if (num < i + 1) {
       newArr.push(arr[i]);
     }
   }
   
   return newArr;
 }
 
function reverse<T>(array: T[]): T[] {
    let left:number = 0;
    let right:number = array.length - 1;
    while (left < right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
    return array;
  }
  
  export default reverse;
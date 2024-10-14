function fill(arr = [], modif, start, end) {
    if (start === undefined && end === undefined) {
      for (let i = 0; i < arr.length; i++) {
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
  
  module.exports = fill;
  
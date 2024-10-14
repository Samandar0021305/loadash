function difference(arr, ...args) {
   const set = new Set(arr);
   args.forEach(arg => {
     arg.forEach(item => {
       set.delete(item); 
     });
   });
 
   return [...set];
  }
  module.exports = difference;
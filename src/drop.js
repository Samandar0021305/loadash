function drop(arr = [],num = 1){
    if(!num) return arr;
   const newArr = [];
   for(let i = 0; i < arr.length;i++){
     if(num < i+1){
        newArr.push(arr[i]);
     }
   }
   return newArr;
};

module.exports = drop
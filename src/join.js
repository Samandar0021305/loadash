function join(arr = [],str){
    if(!arr.length) return arr;
    if(str === undefined) return arr.join(',');
    let res = "";
    for(let item of arr){
      res+=`${item}${str}`
    }
    return res;
 }

 module.exports = join;
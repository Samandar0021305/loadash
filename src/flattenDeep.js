function flattenDeep(arr = []) {
    const helperFlat = (arr = []) => {
      const result = [];
      for (let item of arr) {
        if (Array.isArray(item)) {
          result.push(...helperFlat(item));  
        } else if (item !== null && item !== undefined) {  
          result.push(item);
        }
      }
      return result;
    };
    return helperFlat(arr);
  }
  
  module.exports = flattenDeep;
  
function head(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return undefined;
    }
    return arr[0];
  }
  
  module.exports = head;
  
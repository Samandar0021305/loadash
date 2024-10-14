function concat(arr = [], ...args) {
  for (let item of args) {
    if (Array.isArray(item)) {
      arr.push(...item);
    } else {
      arr.push(item);
    }
  }
  return arr;
}
module.exports = concat;
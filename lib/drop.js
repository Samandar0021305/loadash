"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = drop;
function drop() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (!num) return arr;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (num < i + 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
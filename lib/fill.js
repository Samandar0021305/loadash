"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fill;
function fill() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var modif = arguments.length > 1 ? arguments[1] : undefined;
  var start = arguments.length > 2 ? arguments[2] : undefined;
  var end = arguments.length > 3 ? arguments[3] : undefined;
  if (start === undefined && end === undefined) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = modif;
    }
  } else if (start !== undefined && end === undefined) {
    for (var _i = start; _i < arr.length; _i++) {
      arr[_i] = modif;
    }
  } else if (start !== undefined && end !== undefined) {
    for (var _i2 = start; _i2 < end; _i2++) {
      arr[_i2] = modif;
    }
  }
  return arr;
}
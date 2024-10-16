"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initial;
function initial(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  return arr.slice(0, arr.length - 1);
}
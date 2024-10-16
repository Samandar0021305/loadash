"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = head;
function head(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return arr[0];
}
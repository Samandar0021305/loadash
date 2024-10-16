"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = once;
function once(func) {
  var result = null;
  var isCalled = false;
  return function () {
    if (!isCalled) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      result = func.apply(this, args);
      isCalled = true;
    }
    return result;
  };
}
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/number-to-bn@1.7.0";
exports.ids = ["vendor-chunks/number-to-bn@1.7.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/number-to-bn@1.7.0/node_modules/number-to-bn/src/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/number-to-bn@1.7.0/node_modules/number-to-bn/src/index.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var BN = __webpack_require__(/*! bn.js */ \"(ssr)/./node_modules/.pnpm/bn.js@4.11.6/node_modules/bn.js/lib/bn.js\");\nvar stripHexPrefix = __webpack_require__(/*! strip-hex-prefix */ \"(ssr)/./node_modules/.pnpm/strip-hex-prefix@1.0.0/node_modules/strip-hex-prefix/src/index.js\");\n\n/**\n * Returns a BN object, converts a number value to a BN\n * @param {String|Number|Object} `arg` input a string number, hex string number, number, BigNumber or BN object\n * @return {Object} `output` BN object of the number\n * @throws if the argument is not an array, object that isn't a bignumber, not a string number or number\n */\nmodule.exports = function numberToBN(arg) {\n  if (typeof arg === 'string' || typeof arg === 'number') {\n    var multiplier = new BN(1); // eslint-disable-line\n    var formattedString = String(arg).toLowerCase().trim();\n    var isHexPrefixed = formattedString.substr(0, 2) === '0x' || formattedString.substr(0, 3) === '-0x';\n    var stringArg = stripHexPrefix(formattedString); // eslint-disable-line\n    if (stringArg.substr(0, 1) === '-') {\n      stringArg = stripHexPrefix(stringArg.slice(1));\n      multiplier = new BN(-1, 10);\n    }\n    stringArg = stringArg === '' ? '0' : stringArg;\n\n    if ((!stringArg.match(/^-?[0-9]+$/) && stringArg.match(/^[0-9A-Fa-f]+$/))\n      || stringArg.match(/^[a-fA-F]+$/)\n      || (isHexPrefixed === true && stringArg.match(/^[0-9A-Fa-f]+$/))) {\n      return new BN(stringArg, 16).mul(multiplier);\n    }\n\n    if ((stringArg.match(/^-?[0-9]+$/) || stringArg === '') && isHexPrefixed === false) {\n      return new BN(stringArg, 10).mul(multiplier);\n    }\n  } else if (typeof arg === 'object' && arg.toString && (!arg.pop && !arg.push)) {\n    if (arg.toString(10).match(/^-?[0-9]+$/) && (arg.mul || arg.dividedToIntegerBy)) {\n      return new BN(arg.toString(10), 10);\n    }\n  }\n\n  throw new Error('[number-to-bn] while converting number ' + JSON.stringify(arg) + ' to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported.');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbnVtYmVyLXRvLWJuQDEuNy4wL25vZGVfbW9kdWxlcy9udW1iZXItdG8tYm4vc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLFNBQVMsbUJBQU8sQ0FBQyxtRkFBTztBQUN4QixxQkFBcUIsbUJBQU8sQ0FBQyxzSEFBa0I7O0FBRS9DO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9ub2RlX21vZHVsZXMvLnBucG0vbnVtYmVyLXRvLWJuQDEuNy4wL25vZGVfbW9kdWxlcy9udW1iZXItdG8tYm4vc3JjL2luZGV4LmpzP2IxMzYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEJOID0gcmVxdWlyZSgnYm4uanMnKTtcbnZhciBzdHJpcEhleFByZWZpeCA9IHJlcXVpcmUoJ3N0cmlwLWhleC1wcmVmaXgnKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgQk4gb2JqZWN0LCBjb252ZXJ0cyBhIG51bWJlciB2YWx1ZSB0byBhIEJOXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ8T2JqZWN0fSBgYXJnYCBpbnB1dCBhIHN0cmluZyBudW1iZXIsIGhleCBzdHJpbmcgbnVtYmVyLCBudW1iZXIsIEJpZ051bWJlciBvciBCTiBvYmplY3RcbiAqIEByZXR1cm4ge09iamVjdH0gYG91dHB1dGAgQk4gb2JqZWN0IG9mIHRoZSBudW1iZXJcbiAqIEB0aHJvd3MgaWYgdGhlIGFyZ3VtZW50IGlzIG5vdCBhbiBhcnJheSwgb2JqZWN0IHRoYXQgaXNuJ3QgYSBiaWdudW1iZXIsIG5vdCBhIHN0cmluZyBudW1iZXIgb3IgbnVtYmVyXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbnVtYmVyVG9CTihhcmcpIHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIG11bHRpcGxpZXIgPSBuZXcgQk4oMSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB2YXIgZm9ybWF0dGVkU3RyaW5nID0gU3RyaW5nKGFyZykudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgdmFyIGlzSGV4UHJlZml4ZWQgPSBmb3JtYXR0ZWRTdHJpbmcuc3Vic3RyKDAsIDIpID09PSAnMHgnIHx8IGZvcm1hdHRlZFN0cmluZy5zdWJzdHIoMCwgMykgPT09ICctMHgnO1xuICAgIHZhciBzdHJpbmdBcmcgPSBzdHJpcEhleFByZWZpeChmb3JtYXR0ZWRTdHJpbmcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKHN0cmluZ0FyZy5zdWJzdHIoMCwgMSkgPT09ICctJykge1xuICAgICAgc3RyaW5nQXJnID0gc3RyaXBIZXhQcmVmaXgoc3RyaW5nQXJnLnNsaWNlKDEpKTtcbiAgICAgIG11bHRpcGxpZXIgPSBuZXcgQk4oLTEsIDEwKTtcbiAgICB9XG4gICAgc3RyaW5nQXJnID0gc3RyaW5nQXJnID09PSAnJyA/ICcwJyA6IHN0cmluZ0FyZztcblxuICAgIGlmICgoIXN0cmluZ0FyZy5tYXRjaCgvXi0/WzAtOV0rJC8pICYmIHN0cmluZ0FyZy5tYXRjaCgvXlswLTlBLUZhLWZdKyQvKSlcbiAgICAgIHx8IHN0cmluZ0FyZy5tYXRjaCgvXlthLWZBLUZdKyQvKVxuICAgICAgfHwgKGlzSGV4UHJlZml4ZWQgPT09IHRydWUgJiYgc3RyaW5nQXJnLm1hdGNoKC9eWzAtOUEtRmEtZl0rJC8pKSkge1xuICAgICAgcmV0dXJuIG5ldyBCTihzdHJpbmdBcmcsIDE2KS5tdWwobXVsdGlwbGllcik7XG4gICAgfVxuXG4gICAgaWYgKChzdHJpbmdBcmcubWF0Y2goL14tP1swLTldKyQvKSB8fCBzdHJpbmdBcmcgPT09ICcnKSAmJiBpc0hleFByZWZpeGVkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG5ldyBCTihzdHJpbmdBcmcsIDEwKS5tdWwobXVsdGlwbGllcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZy50b1N0cmluZyAmJiAoIWFyZy5wb3AgJiYgIWFyZy5wdXNoKSkge1xuICAgIGlmIChhcmcudG9TdHJpbmcoMTApLm1hdGNoKC9eLT9bMC05XSskLykgJiYgKGFyZy5tdWwgfHwgYXJnLmRpdmlkZWRUb0ludGVnZXJCeSkpIHtcbiAgICAgIHJldHVybiBuZXcgQk4oYXJnLnRvU3RyaW5nKDEwKSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignW251bWJlci10by1ibl0gd2hpbGUgY29udmVydGluZyBudW1iZXIgJyArIEpTT04uc3RyaW5naWZ5KGFyZykgKyAnIHRvIEJOLmpzIGluc3RhbmNlLCBlcnJvcjogaW52YWxpZCBudW1iZXIgdmFsdWUuIFZhbHVlIG11c3QgYmUgYW4gaW50ZWdlciwgaGV4IHN0cmluZywgQk4gb3IgQmlnTnVtYmVyIGluc3RhbmNlLiBOb3RlLCBkZWNpbWFscyBhcmUgbm90IHN1cHBvcnRlZC4nKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/number-to-bn@1.7.0/node_modules/number-to-bn/src/index.js\n");

/***/ })

};
;
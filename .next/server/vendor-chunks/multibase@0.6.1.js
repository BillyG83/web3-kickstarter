"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/multibase@0.6.1";
exports.ids = ["vendor-chunks/multibase@0.6.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("\n\nclass Base {\n  constructor (name, code, implementation, alphabet) {\n    this.name = name\n    this.code = code\n    this.alphabet = alphabet\n    if (implementation && alphabet) {\n      this.engine = implementation(alphabet)\n    }\n  }\n\n  encode (stringOrBuffer) {\n    return this.engine.encode(stringOrBuffer)\n  }\n\n  decode (stringOrBuffer) {\n    return this.engine.decode(stringOrBuffer)\n  }\n\n  isImplemented () {\n    return this.engine\n  }\n}\n\nmodule.exports = Base\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbXVsdGliYXNlQDAuNi4xL25vZGVfbW9kdWxlcy9tdWx0aWJhc2Uvc3JjL2Jhc2UuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9ub2RlX21vZHVsZXMvLnBucG0vbXVsdGliYXNlQDAuNi4xL25vZGVfbW9kdWxlcy9tdWx0aWJhc2Uvc3JjL2Jhc2UuanM/ZDRkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBjb2RlLCBpbXBsZW1lbnRhdGlvbiwgYWxwaGFiZXQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5jb2RlID0gY29kZVxuICAgIHRoaXMuYWxwaGFiZXQgPSBhbHBoYWJldFxuICAgIGlmIChpbXBsZW1lbnRhdGlvbiAmJiBhbHBoYWJldCkge1xuICAgICAgdGhpcy5lbmdpbmUgPSBpbXBsZW1lbnRhdGlvbihhbHBoYWJldClcbiAgICB9XG4gIH1cblxuICBlbmNvZGUgKHN0cmluZ09yQnVmZmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLmVuY29kZShzdHJpbmdPckJ1ZmZlcilcbiAgfVxuXG4gIGRlY29kZSAoc3RyaW5nT3JCdWZmZXIpIHtcbiAgICByZXR1cm4gdGhpcy5lbmdpbmUuZGVjb2RlKHN0cmluZ09yQnVmZmVyKVxuICB9XG5cbiAgaXNJbXBsZW1lbnRlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5naW5lXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base16.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base16.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { Buffer } = __webpack_require__(/*! buffer */ \"buffer\")\n\nmodule.exports = function base16 (alphabet) {\n  return {\n    encode (input) {\n      if (typeof input === 'string') {\n        return Buffer.from(input).toString('hex')\n      }\n      return input.toString('hex')\n    },\n    decode (input) {\n      for (const char of input) {\n        if (alphabet.indexOf(char) < 0) {\n          throw new Error('invalid base16 character')\n        }\n      }\n      return Buffer.from(input, 'hex')\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbXVsdGliYXNlQDAuNi4xL25vZGVfbW9kdWxlcy9tdWx0aWJhc2Uvc3JjL2Jhc2UxNi5qcyIsIm1hcHBpbmdzIjoiQUFBWTtBQUNaLFFBQVEsU0FBUyxFQUFFLG1CQUFPLENBQUMsc0JBQVE7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL211bHRpYmFzZUAwLjYuMS9ub2RlX21vZHVsZXMvbXVsdGliYXNlL3NyYy9iYXNlMTYuanM/NzA3YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmNvbnN0IHsgQnVmZmVyIH0gPSByZXF1aXJlKCdidWZmZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2UxNiAoYWxwaGFiZXQpIHtcbiAgcmV0dXJuIHtcbiAgICBlbmNvZGUgKGlucHV0KSB7XG4gICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oaW5wdXQpLnRvU3RyaW5nKCdoZXgnKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlucHV0LnRvU3RyaW5nKCdoZXgnKVxuICAgIH0sXG4gICAgZGVjb2RlIChpbnB1dCkge1xuICAgICAgZm9yIChjb25zdCBjaGFyIG9mIGlucHV0KSB7XG4gICAgICAgIGlmIChhbHBoYWJldC5pbmRleE9mKGNoYXIpIDwgMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBiYXNlMTYgY2hhcmFjdGVyJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGlucHV0LCAnaGV4JylcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base16.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base32.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base32.js ***!
  \*********************************************************************************/
/***/ ((module) => {

eval("\n\nfunction decode (input, alphabet) {\n  input = input.replace(new RegExp('=', 'g'), '')\n  const length = input.length\n\n  let bits = 0\n  let value = 0\n\n  let index = 0\n  const output = new Uint8Array((length * 5 / 8) | 0)\n\n  for (let i = 0; i < length; i++) {\n    value = (value << 5) | alphabet.indexOf(input[i])\n    bits += 5\n\n    if (bits >= 8) {\n      output[index++] = (value >>> (bits - 8)) & 255\n      bits -= 8\n    }\n  }\n\n  return output.buffer\n}\n\nfunction encode (buffer, alphabet) {\n  const length = buffer.byteLength\n  const view = new Uint8Array(buffer)\n  const padding = alphabet.indexOf('=') === alphabet.length - 1\n\n  if (padding) {\n    alphabet = alphabet.substring(0, alphabet.length - 1)\n  }\n\n  let bits = 0\n  let value = 0\n  let output = ''\n\n  for (let i = 0; i < length; i++) {\n    value = (value << 8) | view[i]\n    bits += 8\n\n    while (bits >= 5) {\n      output += alphabet[(value >>> (bits - 5)) & 31]\n      bits -= 5\n    }\n  }\n\n  if (bits > 0) {\n    output += alphabet[(value << (5 - bits)) & 31]\n  }\n\n  if (padding) {\n    while ((output.length % 8) !== 0) {\n      output += '='\n    }\n  }\n\n  return output\n}\n\nmodule.exports = function base32 (alphabet) {\n  return {\n    encode (input) {\n      if (typeof input === 'string') {\n        return encode(Uint8Array.from(input), alphabet)\n      }\n\n      return encode(input, alphabet)\n    },\n    decode (input) {\n      for (const char of input) {\n        if (alphabet.indexOf(char) < 0) {\n          throw new Error('invalid base32 character')\n        }\n      }\n\n      return decode(input, alphabet)\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbXVsdGliYXNlQDAuNi4xL25vZGVfbW9kdWxlcy9tdWx0aWJhc2Uvc3JjL2Jhc2UzMi5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tpY2tzdGFydC8uL25vZGVfbW9kdWxlcy8ucG5wbS9tdWx0aWJhc2VAMC42LjEvbm9kZV9tb2R1bGVzL211bHRpYmFzZS9zcmMvYmFzZTMyLmpzP2IwNjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGRlY29kZSAoaW5wdXQsIGFscGhhYmV0KSB7XG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZShuZXcgUmVnRXhwKCc9JywgJ2cnKSwgJycpXG4gIGNvbnN0IGxlbmd0aCA9IGlucHV0Lmxlbmd0aFxuXG4gIGxldCBiaXRzID0gMFxuICBsZXQgdmFsdWUgPSAwXG5cbiAgbGV0IGluZGV4ID0gMFxuICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDhBcnJheSgobGVuZ3RoICogNSAvIDgpIHwgMClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWUgPSAodmFsdWUgPDwgNSkgfCBhbHBoYWJldC5pbmRleE9mKGlucHV0W2ldKVxuICAgIGJpdHMgKz0gNVxuXG4gICAgaWYgKGJpdHMgPj0gOCkge1xuICAgICAgb3V0cHV0W2luZGV4KytdID0gKHZhbHVlID4+PiAoYml0cyAtIDgpKSAmIDI1NVxuICAgICAgYml0cyAtPSA4XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dC5idWZmZXJcbn1cblxuZnVuY3Rpb24gZW5jb2RlIChidWZmZXIsIGFscGhhYmV0KSB7XG4gIGNvbnN0IGxlbmd0aCA9IGJ1ZmZlci5ieXRlTGVuZ3RoXG4gIGNvbnN0IHZpZXcgPSBuZXcgVWludDhBcnJheShidWZmZXIpXG4gIGNvbnN0IHBhZGRpbmcgPSBhbHBoYWJldC5pbmRleE9mKCc9JykgPT09IGFscGhhYmV0Lmxlbmd0aCAtIDFcblxuICBpZiAocGFkZGluZykge1xuICAgIGFscGhhYmV0ID0gYWxwaGFiZXQuc3Vic3RyaW5nKDAsIGFscGhhYmV0Lmxlbmd0aCAtIDEpXG4gIH1cblxuICBsZXQgYml0cyA9IDBcbiAgbGV0IHZhbHVlID0gMFxuICBsZXQgb3V0cHV0ID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWUgPSAodmFsdWUgPDwgOCkgfCB2aWV3W2ldXG4gICAgYml0cyArPSA4XG5cbiAgICB3aGlsZSAoYml0cyA+PSA1KSB7XG4gICAgICBvdXRwdXQgKz0gYWxwaGFiZXRbKHZhbHVlID4+PiAoYml0cyAtIDUpKSAmIDMxXVxuICAgICAgYml0cyAtPSA1XG4gICAgfVxuICB9XG5cbiAgaWYgKGJpdHMgPiAwKSB7XG4gICAgb3V0cHV0ICs9IGFscGhhYmV0Wyh2YWx1ZSA8PCAoNSAtIGJpdHMpKSAmIDMxXVxuICB9XG5cbiAgaWYgKHBhZGRpbmcpIHtcbiAgICB3aGlsZSAoKG91dHB1dC5sZW5ndGggJSA4KSAhPT0gMCkge1xuICAgICAgb3V0cHV0ICs9ICc9J1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlMzIgKGFscGhhYmV0KSB7XG4gIHJldHVybiB7XG4gICAgZW5jb2RlIChpbnB1dCkge1xuICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZShVaW50OEFycmF5LmZyb20oaW5wdXQpLCBhbHBoYWJldClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVuY29kZShpbnB1dCwgYWxwaGFiZXQpXG4gICAgfSxcbiAgICBkZWNvZGUgKGlucHV0KSB7XG4gICAgICBmb3IgKGNvbnN0IGNoYXIgb2YgaW5wdXQpIHtcbiAgICAgICAgaWYgKGFscGhhYmV0LmluZGV4T2YoY2hhcikgPCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGJhc2UzMiBjaGFyYWN0ZXInKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWNvZGUoaW5wdXQsIGFscGhhYmV0KVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base32.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base64.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base64.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { Buffer } = __webpack_require__(/*! buffer */ \"buffer\")\n\nmodule.exports = function base64 (alphabet) {\n  // The alphabet is only used to know:\n  //   1. If padding is enabled (must contain '=')\n  //   2. If the output must be url-safe (must contain '-' and '_')\n  //   3. If the input of the output function is valid\n  // The alphabets from RFC 4648 are always used.\n  const padding = alphabet.indexOf('=') > -1\n  const url = alphabet.indexOf('-') > -1 && alphabet.indexOf('_') > -1\n\n  return {\n    encode (input) {\n      let output = ''\n\n      if (typeof input === 'string') {\n        output = Buffer.from(input).toString('base64')\n      } else {\n        output = input.toString('base64')\n      }\n\n      if (url) {\n        output = output.replace(/\\+/g, '-').replace(/\\//g, '_')\n      }\n\n      const pad = output.indexOf('=')\n      if (pad > 0 && !padding) {\n        output = output.substring(0, pad)\n      }\n\n      return output\n    },\n    decode (input) {\n      for (const char of input) {\n        if (alphabet.indexOf(char) < 0) {\n          throw new Error('invalid base64 character')\n        }\n      }\n\n      return Buffer.from(input, 'base64')\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbXVsdGliYXNlQDAuNi4xL25vZGVfbW9kdWxlcy9tdWx0aWJhc2Uvc3JjL2Jhc2U2NC5qcyIsIm1hcHBpbmdzIjoiQUFBWTtBQUNaLFFBQVEsU0FBUyxFQUFFLG1CQUFPLENBQUMsc0JBQVE7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL211bHRpYmFzZUAwLjYuMS9ub2RlX21vZHVsZXMvbXVsdGliYXNlL3NyYy9iYXNlNjQuanM/MzA2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmNvbnN0IHsgQnVmZmVyIH0gPSByZXF1aXJlKCdidWZmZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NCAoYWxwaGFiZXQpIHtcbiAgLy8gVGhlIGFscGhhYmV0IGlzIG9ubHkgdXNlZCB0byBrbm93OlxuICAvLyAgIDEuIElmIHBhZGRpbmcgaXMgZW5hYmxlZCAobXVzdCBjb250YWluICc9JylcbiAgLy8gICAyLiBJZiB0aGUgb3V0cHV0IG11c3QgYmUgdXJsLXNhZmUgKG11c3QgY29udGFpbiAnLScgYW5kICdfJylcbiAgLy8gICAzLiBJZiB0aGUgaW5wdXQgb2YgdGhlIG91dHB1dCBmdW5jdGlvbiBpcyB2YWxpZFxuICAvLyBUaGUgYWxwaGFiZXRzIGZyb20gUkZDIDQ2NDggYXJlIGFsd2F5cyB1c2VkLlxuICBjb25zdCBwYWRkaW5nID0gYWxwaGFiZXQuaW5kZXhPZignPScpID4gLTFcbiAgY29uc3QgdXJsID0gYWxwaGFiZXQuaW5kZXhPZignLScpID4gLTEgJiYgYWxwaGFiZXQuaW5kZXhPZignXycpID4gLTFcblxuICByZXR1cm4ge1xuICAgIGVuY29kZSAoaW5wdXQpIHtcbiAgICAgIGxldCBvdXRwdXQgPSAnJ1xuXG4gICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBvdXRwdXQgPSBCdWZmZXIuZnJvbShpbnB1dCkudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgPSBpbnB1dC50b1N0cmluZygnYmFzZTY0JylcbiAgICAgIH1cblxuICAgICAgaWYgKHVybCkge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFkID0gb3V0cHV0LmluZGV4T2YoJz0nKVxuICAgICAgaWYgKHBhZCA+IDAgJiYgIXBhZGRpbmcpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnN1YnN0cmluZygwLCBwYWQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXRcbiAgICB9LFxuICAgIGRlY29kZSAoaW5wdXQpIHtcbiAgICAgIGZvciAoY29uc3QgY2hhciBvZiBpbnB1dCkge1xuICAgICAgICBpZiAoYWxwaGFiZXQuaW5kZXhPZihjaGFyKSA8IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYmFzZTY0IGNoYXJhY3RlcicpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGlucHV0LCAnYmFzZTY0JylcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base64.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/constants.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/constants.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst Base = __webpack_require__(/*! ./base.js */ \"(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base.js\")\nconst baseX = __webpack_require__(/*! base-x */ \"(ssr)/./node_modules/.pnpm/base-x@3.0.9/node_modules/base-x/src/index.js\")\nconst base16 = __webpack_require__(/*! ./base16 */ \"(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base16.js\")\nconst base32 = __webpack_require__(/*! ./base32 */ \"(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base32.js\")\nconst base64 = __webpack_require__(/*! ./base64 */ \"(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/base64.js\")\n\n// name, code, implementation, alphabet\nconst constants = [\n  ['base1', '1', '', '1'],\n  ['base2', '0', baseX, '01'],\n  ['base8', '7', baseX, '01234567'],\n  ['base10', '9', baseX, '0123456789'],\n  ['base16', 'f', base16, '0123456789abcdef'],\n  ['base32', 'b', base32, 'abcdefghijklmnopqrstuvwxyz234567'],\n  ['base32pad', 'c', base32, 'abcdefghijklmnopqrstuvwxyz234567='],\n  ['base32hex', 'v', base32, '0123456789abcdefghijklmnopqrstuv'],\n  ['base32hexpad', 't', base32, '0123456789abcdefghijklmnopqrstuv='],\n  ['base32z', 'h', base32, 'ybndrfg8ejkmcpqxot1uwisza345h769'],\n  ['base58flickr', 'Z', baseX, '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'],\n  ['base58btc', 'z', baseX, '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'],\n  ['base64', 'm', base64, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'],\n  ['base64pad', 'M', base64, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='],\n  ['base64url', 'u', base64, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'],\n  ['base64urlpad', 'U', base64, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=']\n]\n\nconst names = constants.reduce((prev, tupple) => {\n  prev[tupple[0]] = new Base(tupple[0], tupple[1], tupple[2], tupple[3])\n  return prev\n}, {})\n\nconst codes = constants.reduce((prev, tupple) => {\n  prev[tupple[1]] = names[tupple[0]]\n  return prev\n}, {})\n\nmodule.exports = {\n  names: names,\n  codes: codes\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbXVsdGliYXNlQDAuNi4xL25vZGVfbW9kdWxlcy9tdWx0aWJhc2Uvc3JjL2NvbnN0YW50cy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsZ0dBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLHdGQUFRO0FBQzlCLGVBQWUsbUJBQU8sQ0FBQyxpR0FBVTtBQUNqQyxlQUFlLG1CQUFPLENBQUMsaUdBQVU7QUFDakMsZUFBZSxtQkFBTyxDQUFDLGlHQUFVOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJOztBQUVMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL211bHRpYmFzZUAwLjYuMS9ub2RlX21vZHVsZXMvbXVsdGliYXNlL3NyYy9jb25zdGFudHMuanM/YjdhNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgQmFzZSA9IHJlcXVpcmUoJy4vYmFzZS5qcycpXG5jb25zdCBiYXNlWCA9IHJlcXVpcmUoJ2Jhc2UteCcpXG5jb25zdCBiYXNlMTYgPSByZXF1aXJlKCcuL2Jhc2UxNicpXG5jb25zdCBiYXNlMzIgPSByZXF1aXJlKCcuL2Jhc2UzMicpXG5jb25zdCBiYXNlNjQgPSByZXF1aXJlKCcuL2Jhc2U2NCcpXG5cbi8vIG5hbWUsIGNvZGUsIGltcGxlbWVudGF0aW9uLCBhbHBoYWJldFxuY29uc3QgY29uc3RhbnRzID0gW1xuICBbJ2Jhc2UxJywgJzEnLCAnJywgJzEnXSxcbiAgWydiYXNlMicsICcwJywgYmFzZVgsICcwMSddLFxuICBbJ2Jhc2U4JywgJzcnLCBiYXNlWCwgJzAxMjM0NTY3J10sXG4gIFsnYmFzZTEwJywgJzknLCBiYXNlWCwgJzAxMjM0NTY3ODknXSxcbiAgWydiYXNlMTYnLCAnZicsIGJhc2UxNiwgJzAxMjM0NTY3ODlhYmNkZWYnXSxcbiAgWydiYXNlMzInLCAnYicsIGJhc2UzMiwgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MjM0NTY3J10sXG4gIFsnYmFzZTMycGFkJywgJ2MnLCBiYXNlMzIsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejIzNDU2Nz0nXSxcbiAgWydiYXNlMzJoZXgnLCAndicsIGJhc2UzMiwgJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2J10sXG4gIFsnYmFzZTMyaGV4cGFkJywgJ3QnLCBiYXNlMzIsICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dj0nXSxcbiAgWydiYXNlMzJ6JywgJ2gnLCBiYXNlMzIsICd5Ym5kcmZnOGVqa21jcHF4b3QxdXdpc3phMzQ1aDc2OSddLFxuICBbJ2Jhc2U1OGZsaWNrcicsICdaJywgYmFzZVgsICcxMjM0NTY3ODlhYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaJ10sXG4gIFsnYmFzZTU4YnRjJywgJ3onLCBiYXNlWCwgJzEyMzQ1Njc4OUFCQ0RFRkdISktMTU5QUVJTVFVWV1hZWmFiY2RlZmdoaWprbW5vcHFyc3R1dnd4eXonXSxcbiAgWydiYXNlNjQnLCAnbScsIGJhc2U2NCwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXSxcbiAgWydiYXNlNjRwYWQnLCAnTScsIGJhc2U2NCwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89J10sXG4gIFsnYmFzZTY0dXJsJywgJ3UnLCBiYXNlNjQsICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS1fJ10sXG4gIFsnYmFzZTY0dXJscGFkJywgJ1UnLCBiYXNlNjQsICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS1fPSddXG5dXG5cbmNvbnN0IG5hbWVzID0gY29uc3RhbnRzLnJlZHVjZSgocHJldiwgdHVwcGxlKSA9PiB7XG4gIHByZXZbdHVwcGxlWzBdXSA9IG5ldyBCYXNlKHR1cHBsZVswXSwgdHVwcGxlWzFdLCB0dXBwbGVbMl0sIHR1cHBsZVszXSlcbiAgcmV0dXJuIHByZXZcbn0sIHt9KVxuXG5jb25zdCBjb2RlcyA9IGNvbnN0YW50cy5yZWR1Y2UoKHByZXYsIHR1cHBsZSkgPT4ge1xuICBwcmV2W3R1cHBsZVsxXV0gPSBuYW1lc1t0dXBwbGVbMF1dXG4gIHJldHVybiBwcmV2XG59LCB7fSlcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWVzOiBuYW1lcyxcbiAgY29kZXM6IGNvZGVzXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/index.js ***!
  \********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/**\n * Implementation of the [multibase](https://github.com/multiformats/multibase) specification.\n * @module Multibase\n */\n\n\nconst { Buffer } = __webpack_require__(/*! buffer */ \"buffer\")\nconst constants = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/constants.js\")\n\nexports = module.exports = multibase\nexports.encode = encode\nexports.decode = decode\nexports.isEncoded = isEncoded\nexports.names = Object.freeze(Object.keys(constants.names))\nexports.codes = Object.freeze(Object.keys(constants.codes))\n\nconst errNotSupported = new Error('Unsupported encoding')\n\n/**\n * Create a new buffer with the multibase varint+code.\n *\n * @param {string|number} nameOrCode - The multibase name or code number.\n * @param {Buffer} buf - The data to be prefixed with multibase.\n * @memberof Multibase\n * @returns {Buffer}\n */\nfunction multibase (nameOrCode, buf) {\n  if (!buf) {\n    throw new Error('requires an encoded buffer')\n  }\n  const base = getBase(nameOrCode)\n  const codeBuf = Buffer.from(base.code)\n\n  const name = base.name\n  validEncode(name, buf)\n  return Buffer.concat([codeBuf, buf])\n}\n\n/**\n * Encode data with the specified base and add the multibase prefix.\n *\n * @param {string|number} nameOrCode - The multibase name or code number.\n * @param {Buffer} buf - The data to be encoded.\n * @returns {Buffer}\n * @memberof Multibase\n */\nfunction encode (nameOrCode, buf) {\n  const base = getBase(nameOrCode)\n  const name = base.name\n\n  return multibase(name, Buffer.from(base.encode(buf)))\n}\n\n/**\n * Takes a buffer or string encoded with multibase header, decodes it and\n * returns the decoded buffer\n *\n * @param {Buffer|string} bufOrString\n * @returns {Buffer}\n * @memberof Multibase\n *\n */\nfunction decode (bufOrString) {\n  if (Buffer.isBuffer(bufOrString)) {\n    bufOrString = bufOrString.toString()\n  }\n\n  const code = bufOrString.substring(0, 1)\n  bufOrString = bufOrString.substring(1, bufOrString.length)\n\n  if (typeof bufOrString === 'string') {\n    bufOrString = Buffer.from(bufOrString)\n  }\n\n  const base = getBase(code)\n  return Buffer.from(base.decode(bufOrString.toString()))\n}\n\n/**\n * Is the given data multibase encoded?\n *\n * @param {Buffer|string} bufOrString\n * @returns {boolean}\n * @memberof Multibase\n */\nfunction isEncoded (bufOrString) {\n  if (Buffer.isBuffer(bufOrString)) {\n    bufOrString = bufOrString.toString()\n  }\n\n  // Ensure bufOrString is a string\n  if (Object.prototype.toString.call(bufOrString) !== '[object String]') {\n    return false\n  }\n\n  const code = bufOrString.substring(0, 1)\n  try {\n    const base = getBase(code)\n    return base.name\n  } catch (err) {\n    return false\n  }\n}\n\n/**\n * @param {string} name\n * @param {Buffer} buf\n * @private\n * @returns {undefined}\n */\nfunction validEncode (name, buf) {\n  const base = getBase(name)\n  base.decode(buf.toString())\n}\n\nfunction getBase (nameOrCode) {\n  let base\n\n  if (constants.names[nameOrCode]) {\n    base = constants.names[nameOrCode]\n  } else if (constants.codes[nameOrCode]) {\n    base = constants.codes[nameOrCode]\n  } else {\n    throw errNotSupported\n  }\n\n  if (!base.isImplemented()) {\n    throw new Error('Base ' + nameOrCode + ' is not implemented yet')\n  }\n\n  return base\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbXVsdGliYXNlQDAuNi4xL25vZGVfbW9kdWxlcy9tdWx0aWJhc2Uvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ1k7O0FBRVosUUFBUSxTQUFTLEVBQUUsbUJBQU8sQ0FBQyxzQkFBUTtBQUNuQyxrQkFBa0IsbUJBQU8sQ0FBQyx1R0FBYTs7QUFFdkM7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tpY2tzdGFydC8uL25vZGVfbW9kdWxlcy8ucG5wbS9tdWx0aWJhc2VAMC42LjEvbm9kZV9tb2R1bGVzL211bHRpYmFzZS9zcmMvaW5kZXguanM/MGE3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBbbXVsdGliYXNlXShodHRwczovL2dpdGh1Yi5jb20vbXVsdGlmb3JtYXRzL211bHRpYmFzZSkgc3BlY2lmaWNhdGlvbi5cbiAqIEBtb2R1bGUgTXVsdGliYXNlXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEJ1ZmZlciB9ID0gcmVxdWlyZSgnYnVmZmVyJylcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJylcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbXVsdGliYXNlXG5leHBvcnRzLmVuY29kZSA9IGVuY29kZVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGVcbmV4cG9ydHMuaXNFbmNvZGVkID0gaXNFbmNvZGVkXG5leHBvcnRzLm5hbWVzID0gT2JqZWN0LmZyZWV6ZShPYmplY3Qua2V5cyhjb25zdGFudHMubmFtZXMpKVxuZXhwb3J0cy5jb2RlcyA9IE9iamVjdC5mcmVlemUoT2JqZWN0LmtleXMoY29uc3RhbnRzLmNvZGVzKSlcblxuY29uc3QgZXJyTm90U3VwcG9ydGVkID0gbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBlbmNvZGluZycpXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGJ1ZmZlciB3aXRoIHRoZSBtdWx0aWJhc2UgdmFyaW50K2NvZGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBuYW1lT3JDb2RlIC0gVGhlIG11bHRpYmFzZSBuYW1lIG9yIGNvZGUgbnVtYmVyLlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZiAtIFRoZSBkYXRhIHRvIGJlIHByZWZpeGVkIHdpdGggbXVsdGliYXNlLlxuICogQG1lbWJlcm9mIE11bHRpYmFzZVxuICogQHJldHVybnMge0J1ZmZlcn1cbiAqL1xuZnVuY3Rpb24gbXVsdGliYXNlIChuYW1lT3JDb2RlLCBidWYpIHtcbiAgaWYgKCFidWYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcXVpcmVzIGFuIGVuY29kZWQgYnVmZmVyJylcbiAgfVxuICBjb25zdCBiYXNlID0gZ2V0QmFzZShuYW1lT3JDb2RlKVxuICBjb25zdCBjb2RlQnVmID0gQnVmZmVyLmZyb20oYmFzZS5jb2RlKVxuXG4gIGNvbnN0IG5hbWUgPSBiYXNlLm5hbWVcbiAgdmFsaWRFbmNvZGUobmFtZSwgYnVmKVxuICByZXR1cm4gQnVmZmVyLmNvbmNhdChbY29kZUJ1ZiwgYnVmXSlcbn1cblxuLyoqXG4gKiBFbmNvZGUgZGF0YSB3aXRoIHRoZSBzcGVjaWZpZWQgYmFzZSBhbmQgYWRkIHRoZSBtdWx0aWJhc2UgcHJlZml4LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gbmFtZU9yQ29kZSAtIFRoZSBtdWx0aWJhc2UgbmFtZSBvciBjb2RlIG51bWJlci5cbiAqIEBwYXJhbSB7QnVmZmVyfSBidWYgLSBUaGUgZGF0YSB0byBiZSBlbmNvZGVkLlxuICogQHJldHVybnMge0J1ZmZlcn1cbiAqIEBtZW1iZXJvZiBNdWx0aWJhc2VcbiAqL1xuZnVuY3Rpb24gZW5jb2RlIChuYW1lT3JDb2RlLCBidWYpIHtcbiAgY29uc3QgYmFzZSA9IGdldEJhc2UobmFtZU9yQ29kZSlcbiAgY29uc3QgbmFtZSA9IGJhc2UubmFtZVxuXG4gIHJldHVybiBtdWx0aWJhc2UobmFtZSwgQnVmZmVyLmZyb20oYmFzZS5lbmNvZGUoYnVmKSkpXG59XG5cbi8qKlxuICogVGFrZXMgYSBidWZmZXIgb3Igc3RyaW5nIGVuY29kZWQgd2l0aCBtdWx0aWJhc2UgaGVhZGVyLCBkZWNvZGVzIGl0IGFuZFxuICogcmV0dXJucyB0aGUgZGVjb2RlZCBidWZmZXJcbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcnxzdHJpbmd9IGJ1Zk9yU3RyaW5nXG4gKiBAcmV0dXJucyB7QnVmZmVyfVxuICogQG1lbWJlcm9mIE11bHRpYmFzZVxuICpcbiAqL1xuZnVuY3Rpb24gZGVjb2RlIChidWZPclN0cmluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGJ1Zk9yU3RyaW5nKSkge1xuICAgIGJ1Zk9yU3RyaW5nID0gYnVmT3JTdHJpbmcudG9TdHJpbmcoKVxuICB9XG5cbiAgY29uc3QgY29kZSA9IGJ1Zk9yU3RyaW5nLnN1YnN0cmluZygwLCAxKVxuICBidWZPclN0cmluZyA9IGJ1Zk9yU3RyaW5nLnN1YnN0cmluZygxLCBidWZPclN0cmluZy5sZW5ndGgpXG5cbiAgaWYgKHR5cGVvZiBidWZPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICBidWZPclN0cmluZyA9IEJ1ZmZlci5mcm9tKGJ1Zk9yU3RyaW5nKVxuICB9XG5cbiAgY29uc3QgYmFzZSA9IGdldEJhc2UoY29kZSlcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJhc2UuZGVjb2RlKGJ1Zk9yU3RyaW5nLnRvU3RyaW5nKCkpKVxufVxuXG4vKipcbiAqIElzIHRoZSBnaXZlbiBkYXRhIG11bHRpYmFzZSBlbmNvZGVkP1xuICpcbiAqIEBwYXJhbSB7QnVmZmVyfHN0cmluZ30gYnVmT3JTdHJpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogQG1lbWJlcm9mIE11bHRpYmFzZVxuICovXG5mdW5jdGlvbiBpc0VuY29kZWQgKGJ1Zk9yU3RyaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoYnVmT3JTdHJpbmcpKSB7XG4gICAgYnVmT3JTdHJpbmcgPSBidWZPclN0cmluZy50b1N0cmluZygpXG4gIH1cblxuICAvLyBFbnN1cmUgYnVmT3JTdHJpbmcgaXMgYSBzdHJpbmdcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChidWZPclN0cmluZykgIT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBjb2RlID0gYnVmT3JTdHJpbmcuc3Vic3RyaW5nKDAsIDEpXG4gIHRyeSB7XG4gICAgY29uc3QgYmFzZSA9IGdldEJhc2UoY29kZSlcbiAgICByZXR1cm4gYmFzZS5uYW1lXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiB2YWxpZEVuY29kZSAobmFtZSwgYnVmKSB7XG4gIGNvbnN0IGJhc2UgPSBnZXRCYXNlKG5hbWUpXG4gIGJhc2UuZGVjb2RlKGJ1Zi50b1N0cmluZygpKVxufVxuXG5mdW5jdGlvbiBnZXRCYXNlIChuYW1lT3JDb2RlKSB7XG4gIGxldCBiYXNlXG5cbiAgaWYgKGNvbnN0YW50cy5uYW1lc1tuYW1lT3JDb2RlXSkge1xuICAgIGJhc2UgPSBjb25zdGFudHMubmFtZXNbbmFtZU9yQ29kZV1cbiAgfSBlbHNlIGlmIChjb25zdGFudHMuY29kZXNbbmFtZU9yQ29kZV0pIHtcbiAgICBiYXNlID0gY29uc3RhbnRzLmNvZGVzW25hbWVPckNvZGVdXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZXJyTm90U3VwcG9ydGVkXG4gIH1cblxuICBpZiAoIWJhc2UuaXNJbXBsZW1lbnRlZCgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCYXNlICcgKyBuYW1lT3JDb2RlICsgJyBpcyBub3QgaW1wbGVtZW50ZWQgeWV0JylcbiAgfVxuXG4gIHJldHVybiBiYXNlXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/multibase@0.6.1/node_modules/multibase/src/index.js\n");

/***/ })

};
;
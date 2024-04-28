/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/varint@5.0.2";
exports.ids = ["vendor-chunks/varint@5.0.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/decode.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/varint@5.0.2/node_modules/varint/decode.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("module.exports = read\n\nvar MSB = 0x80\n  , REST = 0x7F\n\nfunction read(buf, offset) {\n  var res    = 0\n    , offset = offset || 0\n    , shift  = 0\n    , counter = offset\n    , b\n    , l = buf.length\n\n  do {\n    if (counter >= l) {\n      read.bytes = 0\n      throw new RangeError('Could not decode varint')\n    }\n    b = buf[counter++]\n    res += shift < 28\n      ? (b & REST) << shift\n      : (b & REST) * Math.pow(2, shift)\n    shift += 7\n  } while (b >= MSB)\n\n  read.bytes = counter - offset\n\n  return res\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvZGVjb2RlLmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvZGVjb2RlLmpzPzg4ZTQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZWFkXG5cbnZhciBNU0IgPSAweDgwXG4gICwgUkVTVCA9IDB4N0ZcblxuZnVuY3Rpb24gcmVhZChidWYsIG9mZnNldCkge1xuICB2YXIgcmVzICAgID0gMFxuICAgICwgb2Zmc2V0ID0gb2Zmc2V0IHx8IDBcbiAgICAsIHNoaWZ0ICA9IDBcbiAgICAsIGNvdW50ZXIgPSBvZmZzZXRcbiAgICAsIGJcbiAgICAsIGwgPSBidWYubGVuZ3RoXG5cbiAgZG8ge1xuICAgIGlmIChjb3VudGVyID49IGwpIHtcbiAgICAgIHJlYWQuYnl0ZXMgPSAwXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ291bGQgbm90IGRlY29kZSB2YXJpbnQnKVxuICAgIH1cbiAgICBiID0gYnVmW2NvdW50ZXIrK11cbiAgICByZXMgKz0gc2hpZnQgPCAyOFxuICAgICAgPyAoYiAmIFJFU1QpIDw8IHNoaWZ0XG4gICAgICA6IChiICYgUkVTVCkgKiBNYXRoLnBvdygyLCBzaGlmdClcbiAgICBzaGlmdCArPSA3XG4gIH0gd2hpbGUgKGIgPj0gTVNCKVxuXG4gIHJlYWQuYnl0ZXMgPSBjb3VudGVyIC0gb2Zmc2V0XG5cbiAgcmV0dXJuIHJlc1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/decode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/encode.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/varint@5.0.2/node_modules/varint/encode.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("module.exports = encode\n\nvar MSB = 0x80\n  , REST = 0x7F\n  , MSBALL = ~REST\n  , INT = Math.pow(2, 31)\n\nfunction encode(num, out, offset) {\n  out = out || []\n  offset = offset || 0\n  var oldOffset = offset\n\n  while(num >= INT) {\n    out[offset++] = (num & 0xFF) | MSB\n    num /= 128\n  }\n  while(num & MSBALL) {\n    out[offset++] = (num & 0xFF) | MSB\n    num >>>= 7\n  }\n  out[offset] = num | 0\n  \n  encode.bytes = offset - oldOffset + 1\n  \n  return out\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvZW5jb2RlLmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvZW5jb2RlLmpzP2JjZDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBlbmNvZGVcblxudmFyIE1TQiA9IDB4ODBcbiAgLCBSRVNUID0gMHg3RlxuICAsIE1TQkFMTCA9IH5SRVNUXG4gICwgSU5UID0gTWF0aC5wb3coMiwgMzEpXG5cbmZ1bmN0aW9uIGVuY29kZShudW0sIG91dCwgb2Zmc2V0KSB7XG4gIG91dCA9IG91dCB8fCBbXVxuICBvZmZzZXQgPSBvZmZzZXQgfHwgMFxuICB2YXIgb2xkT2Zmc2V0ID0gb2Zmc2V0XG5cbiAgd2hpbGUobnVtID49IElOVCkge1xuICAgIG91dFtvZmZzZXQrK10gPSAobnVtICYgMHhGRikgfCBNU0JcbiAgICBudW0gLz0gMTI4XG4gIH1cbiAgd2hpbGUobnVtICYgTVNCQUxMKSB7XG4gICAgb3V0W29mZnNldCsrXSA9IChudW0gJiAweEZGKSB8IE1TQlxuICAgIG51bSA+Pj49IDdcbiAgfVxuICBvdXRbb2Zmc2V0XSA9IG51bSB8IDBcbiAgXG4gIGVuY29kZS5ieXRlcyA9IG9mZnNldCAtIG9sZE9mZnNldCArIDFcbiAgXG4gIHJldHVybiBvdXRcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/encode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/varint@5.0.2/node_modules/varint/index.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n    encode: __webpack_require__(/*! ./encode.js */ \"(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/encode.js\")\n  , decode: __webpack_require__(/*! ./decode.js */ \"(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/decode.js\")\n  , encodingLength: __webpack_require__(/*! ./length.js */ \"(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/length.js\")\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxZQUFZLG1CQUFPLENBQUMsMEZBQWE7QUFDakMsWUFBWSxtQkFBTyxDQUFDLDBGQUFhO0FBQ2pDLG9CQUFvQixtQkFBTyxDQUFDLDBGQUFhO0FBQ3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3ZhcmludEA1LjAuMi9ub2RlX21vZHVsZXMvdmFyaW50L2luZGV4LmpzPzVhMjIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZW5jb2RlOiByZXF1aXJlKCcuL2VuY29kZS5qcycpXG4gICwgZGVjb2RlOiByZXF1aXJlKCcuL2RlY29kZS5qcycpXG4gICwgZW5jb2RpbmdMZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoLmpzJylcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/varint@5.0.2/node_modules/varint/length.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\nvar N1 = Math.pow(2,  7)\nvar N2 = Math.pow(2, 14)\nvar N3 = Math.pow(2, 21)\nvar N4 = Math.pow(2, 28)\nvar N5 = Math.pow(2, 35)\nvar N6 = Math.pow(2, 42)\nvar N7 = Math.pow(2, 49)\nvar N8 = Math.pow(2, 56)\nvar N9 = Math.pow(2, 63)\n\nmodule.exports = function (value) {\n  return (\n    value < N1 ? 1\n  : value < N2 ? 2\n  : value < N3 ? 3\n  : value < N4 ? 4\n  : value < N5 ? 5\n  : value < N6 ? 6\n  : value < N7 ? 7\n  : value < N8 ? 8\n  : value < N9 ? 9\n  :              10\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvbGVuZ3RoLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tpY2tzdGFydC8uL25vZGVfbW9kdWxlcy8ucG5wbS92YXJpbnRANS4wLjIvbm9kZV9tb2R1bGVzL3ZhcmludC9sZW5ndGguanM/OTkyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBOMSA9IE1hdGgucG93KDIsICA3KVxudmFyIE4yID0gTWF0aC5wb3coMiwgMTQpXG52YXIgTjMgPSBNYXRoLnBvdygyLCAyMSlcbnZhciBONCA9IE1hdGgucG93KDIsIDI4KVxudmFyIE41ID0gTWF0aC5wb3coMiwgMzUpXG52YXIgTjYgPSBNYXRoLnBvdygyLCA0MilcbnZhciBONyA9IE1hdGgucG93KDIsIDQ5KVxudmFyIE44ID0gTWF0aC5wb3coMiwgNTYpXG52YXIgTjkgPSBNYXRoLnBvdygyLCA2MylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSA8IE4xID8gMVxuICA6IHZhbHVlIDwgTjIgPyAyXG4gIDogdmFsdWUgPCBOMyA/IDNcbiAgOiB2YWx1ZSA8IE40ID8gNFxuICA6IHZhbHVlIDwgTjUgPyA1XG4gIDogdmFsdWUgPCBONiA/IDZcbiAgOiB2YWx1ZSA8IE43ID8gN1xuICA6IHZhbHVlIDwgTjggPyA4XG4gIDogdmFsdWUgPCBOOSA/IDlcbiAgOiAgICAgICAgICAgICAgMTBcbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/length.js\n");

/***/ })

};
;
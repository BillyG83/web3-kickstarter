/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/eth-ens-namehash@2.0.8";
exports.ids = ["vendor-chunks/eth-ens-namehash@2.0.8"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/eth-ens-namehash@2.0.8/node_modules/eth-ens-namehash/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/eth-ens-namehash@2.0.8/node_modules/eth-ens-namehash/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var sha3 = (__webpack_require__(/*! js-sha3 */ \"(ssr)/./node_modules/.pnpm/js-sha3@0.5.7/node_modules/js-sha3/src/sha3.js\").keccak_256)\nvar uts46 = __webpack_require__(/*! idna-uts46-hx */ \"(ssr)/./node_modules/.pnpm/idna-uts46-hx@2.3.1/node_modules/idna-uts46-hx/uts46.js\")\n\nfunction namehash (inputName) {\n  // Reject empty names:\n  var node = ''\n  for (var i = 0; i < 32; i++) {\n    node += '00'\n  }\n\n  name = normalize(inputName)\n\n  if (name) {\n    var labels = name.split('.')\n\n    for(var i = labels.length - 1; i >= 0; i--) {\n      var labelSha = sha3(labels[i])\n      node = sha3(new Buffer(node + labelSha, 'hex'))\n    }\n  }\n\n  return '0x' + node\n}\n\nfunction normalize(name) {\n  return name ? uts46.toUnicode(name, {useStd3ASCII: true, transitional: false}) : name\n}\n\nexports.hash = namehash\nexports.normalize = normalize\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZXRoLWVucy1uYW1laGFzaEAyLjAuOC9ub2RlX21vZHVsZXMvZXRoLWVucy1uYW1laGFzaC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxXQUFXLDRIQUE2QjtBQUN4QyxZQUFZLG1CQUFPLENBQUMseUdBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLHdDQUF3QztBQUMvRTs7QUFFQSxZQUFZO0FBQ1osaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL2V0aC1lbnMtbmFtZWhhc2hAMi4wLjgvbm9kZV9tb2R1bGVzL2V0aC1lbnMtbmFtZWhhc2gvaW5kZXguanM/YmIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2hhMyA9IHJlcXVpcmUoJ2pzLXNoYTMnKS5rZWNjYWtfMjU2XG52YXIgdXRzNDYgPSByZXF1aXJlKCdpZG5hLXV0czQ2LWh4JylcblxuZnVuY3Rpb24gbmFtZWhhc2ggKGlucHV0TmFtZSkge1xuICAvLyBSZWplY3QgZW1wdHkgbmFtZXM6XG4gIHZhciBub2RlID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgbm9kZSArPSAnMDAnXG4gIH1cblxuICBuYW1lID0gbm9ybWFsaXplKGlucHV0TmFtZSlcblxuICBpZiAobmFtZSkge1xuICAgIHZhciBsYWJlbHMgPSBuYW1lLnNwbGl0KCcuJylcblxuICAgIGZvcih2YXIgaSA9IGxhYmVscy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGxhYmVsU2hhID0gc2hhMyhsYWJlbHNbaV0pXG4gICAgICBub2RlID0gc2hhMyhuZXcgQnVmZmVyKG5vZGUgKyBsYWJlbFNoYSwgJ2hleCcpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnMHgnICsgbm9kZVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemUobmFtZSkge1xuICByZXR1cm4gbmFtZSA/IHV0czQ2LnRvVW5pY29kZShuYW1lLCB7dXNlU3RkM0FTQ0lJOiB0cnVlLCB0cmFuc2l0aW9uYWw6IGZhbHNlfSkgOiBuYW1lXG59XG5cbmV4cG9ydHMuaGFzaCA9IG5hbWVoYXNoXG5leHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/eth-ens-namehash@2.0.8/node_modules/eth-ens-namehash/index.js\n");

/***/ })

};
;
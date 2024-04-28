/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/simple-concat@1.0.1";
exports.ids = ["vendor-chunks/simple-concat@1.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/simple-concat@1.0.1/node_modules/simple-concat/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/simple-concat@1.0.1/node_modules/simple-concat/index.js ***!
  \************************************************************************************/
/***/ ((module) => {

eval("/*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */\nmodule.exports = function (stream, cb) {\n  var chunks = []\n  stream.on('data', function (chunk) {\n    chunks.push(chunk)\n  })\n  stream.once('end', function () {\n    if (cb) cb(null, Buffer.concat(chunks))\n    cb = null\n  })\n  stream.once('error', function (err) {\n    if (cb) cb(err)\n    cb = null\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vc2ltcGxlLWNvbmNhdEAxLjAuMS9ub2RlX21vZHVsZXMvc2ltcGxlLWNvbmNhdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9ub2RlX21vZHVsZXMvLnBucG0vc2ltcGxlLWNvbmNhdEAxLjAuMS9ub2RlX21vZHVsZXMvc2ltcGxlLWNvbmNhdC9pbmRleC5qcz9hOTExIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBzaW1wbGUtY29uY2F0LiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJlYW0sIGNiKSB7XG4gIHZhciBjaHVua3MgPSBbXVxuICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICBjaHVua3MucHVzaChjaHVuaylcbiAgfSlcbiAgc3RyZWFtLm9uY2UoJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2IpIGNiKG51bGwsIEJ1ZmZlci5jb25jYXQoY2h1bmtzKSlcbiAgICBjYiA9IG51bGxcbiAgfSlcbiAgc3RyZWFtLm9uY2UoJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChjYikgY2IoZXJyKVxuICAgIGNiID0gbnVsbFxuICB9KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/simple-concat@1.0.1/node_modules/simple-concat/index.js\n");

/***/ })

};
;
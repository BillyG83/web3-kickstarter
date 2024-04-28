"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/decompress-response@3.3.0";
exports.ids = ["vendor-chunks/decompress-response@3.3.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/decompress-response@3.3.0/node_modules/decompress-response/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/decompress-response@3.3.0/node_modules/decompress-response/index.js ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst PassThrough = (__webpack_require__(/*! stream */ \"stream\").PassThrough);\nconst zlib = __webpack_require__(/*! zlib */ \"zlib\");\nconst mimicResponse = __webpack_require__(/*! mimic-response */ \"(ssr)/./node_modules/.pnpm/mimic-response@1.0.1/node_modules/mimic-response/index.js\");\n\nmodule.exports = response => {\n\t// TODO: Use Array#includes when targeting Node.js 6\n\tif (['gzip', 'deflate'].indexOf(response.headers['content-encoding']) === -1) {\n\t\treturn response;\n\t}\n\n\tconst unzip = zlib.createUnzip();\n\tconst stream = new PassThrough();\n\n\tmimicResponse(response, stream);\n\n\tunzip.on('error', err => {\n\t\tif (err.code === 'Z_BUF_ERROR') {\n\t\t\tstream.end();\n\t\t\treturn;\n\t\t}\n\n\t\tstream.emit('error', err);\n\t});\n\n\tresponse.pipe(unzip).pipe(stream);\n\n\treturn stream;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZGVjb21wcmVzcy1yZXNwb25zZUAzLjMuMC9ub2RlX21vZHVsZXMvZGVjb21wcmVzcy1yZXNwb25zZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLG9CQUFvQix5REFBNkI7QUFDakQsYUFBYSxtQkFBTyxDQUFDLGtCQUFNO0FBQzNCLHNCQUFzQixtQkFBTyxDQUFDLDRHQUFnQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9ub2RlX21vZHVsZXMvLnBucG0vZGVjb21wcmVzcy1yZXNwb25zZUAzLjMuMC9ub2RlX21vZHVsZXMvZGVjb21wcmVzcy1yZXNwb25zZS9pbmRleC5qcz83Y2I0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IFBhc3NUaHJvdWdoID0gcmVxdWlyZSgnc3RyZWFtJykuUGFzc1Rocm91Z2g7XG5jb25zdCB6bGliID0gcmVxdWlyZSgnemxpYicpO1xuY29uc3QgbWltaWNSZXNwb25zZSA9IHJlcXVpcmUoJ21pbWljLXJlc3BvbnNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzcG9uc2UgPT4ge1xuXHQvLyBUT0RPOiBVc2UgQXJyYXkjaW5jbHVkZXMgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyA2XG5cdGlmIChbJ2d6aXAnLCAnZGVmbGF0ZSddLmluZGV4T2YocmVzcG9uc2UuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddKSA9PT0gLTEpIHtcblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH1cblxuXHRjb25zdCB1bnppcCA9IHpsaWIuY3JlYXRlVW56aXAoKTtcblx0Y29uc3Qgc3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cblx0bWltaWNSZXNwb25zZShyZXNwb25zZSwgc3RyZWFtKTtcblxuXHR1bnppcC5vbignZXJyb3InLCBlcnIgPT4ge1xuXHRcdGlmIChlcnIuY29kZSA9PT0gJ1pfQlVGX0VSUk9SJykge1xuXHRcdFx0c3RyZWFtLmVuZCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN0cmVhbS5lbWl0KCdlcnJvcicsIGVycik7XG5cdH0pO1xuXG5cdHJlc3BvbnNlLnBpcGUodW56aXApLnBpcGUoc3RyZWFtKTtcblxuXHRyZXR1cm4gc3RyZWFtO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/decompress-response@3.3.0/node_modules/decompress-response/index.js\n");

/***/ })

};
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/strict-uri-encode@1.1.0";
exports.ids = ["vendor-chunks/strict-uri-encode@1.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/strict-uri-encode@1.1.0/node_modules/strict-uri-encode/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/strict-uri-encode@1.1.0/node_modules/strict-uri-encode/index.js ***!
  \********************************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (str) {\n\treturn encodeURIComponent(str).replace(/[!'()*]/g, function (c) {\n\t\treturn '%' + c.charCodeAt(0).toString(16).toUpperCase();\n\t});\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vc3RyaWN0LXVyaS1lbmNvZGVAMS4xLjAvbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0cmljdC11cmktZW5jb2RlQDEuMS4wL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcz82NzIyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/strict-uri-encode@1.1.0/node_modules/strict-uri-encode/index.js\n");

/***/ })

};
;
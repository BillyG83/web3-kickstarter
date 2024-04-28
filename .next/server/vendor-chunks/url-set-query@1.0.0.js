/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/url-set-query@1.0.0";
exports.ids = ["vendor-chunks/url-set-query@1.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/url-set-query@1.0.0/node_modules/url-set-query/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-set-query@1.0.0/node_modules/url-set-query/index.js ***!
  \************************************************************************************/
/***/ ((module) => {

eval("module.exports = urlSetQuery\nfunction urlSetQuery (url, query) {\n  if (query) {\n    // remove optional leading symbols\n    query = query.trim().replace(/^(\\?|#|&)/, '')\n\n    // don't append empty query\n    query = query ? ('?' + query) : query\n\n    var parts = url.split(/[\\?\\#]/)\n    var start = parts[0]\n    if (query && /\\:\\/\\/[^\\/]*$/.test(start)) {\n      // e.g. http://foo.com -> http://foo.com/\n      start = start + '/'\n    }\n    var match = url.match(/(\\#.*)$/)\n    url = start + query\n    if (match) { // add hash back in\n      url = url + match[0]\n    }\n  }\n  return url\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdXJsLXNldC1xdWVyeUAxLjAuMC9ub2RlX21vZHVsZXMvdXJsLXNldC1xdWVyeS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3VybC1zZXQtcXVlcnlAMS4wLjAvbm9kZV9tb2R1bGVzL3VybC1zZXQtcXVlcnkvaW5kZXguanM/YmRlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHVybFNldFF1ZXJ5XG5mdW5jdGlvbiB1cmxTZXRRdWVyeSAodXJsLCBxdWVyeSkge1xuICBpZiAocXVlcnkpIHtcbiAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyBzeW1ib2xzXG4gICAgcXVlcnkgPSBxdWVyeS50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKVxuXG4gICAgLy8gZG9uJ3QgYXBwZW5kIGVtcHR5IHF1ZXJ5XG4gICAgcXVlcnkgPSBxdWVyeSA/ICgnPycgKyBxdWVyeSkgOiBxdWVyeVxuXG4gICAgdmFyIHBhcnRzID0gdXJsLnNwbGl0KC9bXFw/XFwjXS8pXG4gICAgdmFyIHN0YXJ0ID0gcGFydHNbMF1cbiAgICBpZiAocXVlcnkgJiYgL1xcOlxcL1xcL1teXFwvXSokLy50ZXN0KHN0YXJ0KSkge1xuICAgICAgLy8gZS5nLiBodHRwOi8vZm9vLmNvbSAtPiBodHRwOi8vZm9vLmNvbS9cbiAgICAgIHN0YXJ0ID0gc3RhcnQgKyAnLydcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gdXJsLm1hdGNoKC8oXFwjLiopJC8pXG4gICAgdXJsID0gc3RhcnQgKyBxdWVyeVxuICAgIGlmIChtYXRjaCkgeyAvLyBhZGQgaGFzaCBiYWNrIGluXG4gICAgICB1cmwgPSB1cmwgKyBtYXRjaFswXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdXJsXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/url-set-query@1.0.0/node_modules/url-set-query/index.js\n");

/***/ })

};
;
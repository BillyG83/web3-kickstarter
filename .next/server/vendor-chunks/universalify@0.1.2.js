"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/universalify@0.1.2";
exports.ids = ["vendor-chunks/universalify@0.1.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/universalify@0.1.2/node_modules/universalify/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/universalify@0.1.2/node_modules/universalify/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.fromCallback = function (fn) {\n  return Object.defineProperty(function () {\n    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments)\n    else {\n      return new Promise((resolve, reject) => {\n        arguments[arguments.length] = (err, res) => {\n          if (err) return reject(err)\n          resolve(res)\n        }\n        arguments.length++\n        fn.apply(this, arguments)\n      })\n    }\n  }, 'name', { value: fn.name })\n}\n\nexports.fromPromise = function (fn) {\n  return Object.defineProperty(function () {\n    const cb = arguments[arguments.length - 1]\n    if (typeof cb !== 'function') return fn.apply(this, arguments)\n    else fn.apply(this, arguments).then(r => cb(null, r), cb)\n  }, 'name', { value: fn.name })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pdmVyc2FsaWZ5QDAuMS4yL25vZGVfbW9kdWxlcy91bml2ZXJzYWxpZnkvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRyxZQUFZLGdCQUFnQjtBQUMvQjs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVksZ0JBQWdCO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXZlcnNhbGlmeUAwLjEuMi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsaWZ5L2luZGV4LmpzPzFlYTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuZnJvbUNhbGxiYWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGhdID0gKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH1cbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCsrXG4gICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH0pXG4gICAgfVxuICB9LCAnbmFtZScsIHsgdmFsdWU6IGZuLm5hbWUgfSlcbn1cblxuZXhwb3J0cy5mcm9tUHJvbWlzZSA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYiA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV1cbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIGVsc2UgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKS50aGVuKHIgPT4gY2IobnVsbCwgciksIGNiKVxuICB9LCAnbmFtZScsIHsgdmFsdWU6IGZuLm5hbWUgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/universalify@0.1.2/node_modules/universalify/index.js\n");

/***/ })

};
;
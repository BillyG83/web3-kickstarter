"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-stream@5.2.0";
exports.ids = ["vendor-chunks/get-stream@5.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/get-stream@5.2.0/node_modules/get-stream/buffer-stream.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/get-stream@5.2.0/node_modules/get-stream/buffer-stream.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst {PassThrough: PassThroughStream} = __webpack_require__(/*! stream */ \"stream\");\n\nmodule.exports = options => {\n\toptions = {...options};\n\n\tconst {array} = options;\n\tlet {encoding} = options;\n\tconst isBuffer = encoding === 'buffer';\n\tlet objectMode = false;\n\n\tif (array) {\n\t\tobjectMode = !(encoding || isBuffer);\n\t} else {\n\t\tencoding = encoding || 'utf8';\n\t}\n\n\tif (isBuffer) {\n\t\tencoding = null;\n\t}\n\n\tconst stream = new PassThroughStream({objectMode});\n\n\tif (encoding) {\n\t\tstream.setEncoding(encoding);\n\t}\n\n\tlet length = 0;\n\tconst chunks = [];\n\n\tstream.on('data', chunk => {\n\t\tchunks.push(chunk);\n\n\t\tif (objectMode) {\n\t\t\tlength = chunks.length;\n\t\t} else {\n\t\t\tlength += chunk.length;\n\t\t}\n\t});\n\n\tstream.getBufferedValue = () => {\n\t\tif (array) {\n\t\t\treturn chunks;\n\t\t}\n\n\t\treturn isBuffer ? Buffer.concat(chunks, length) : chunks.join('');\n\t};\n\n\tstream.getBufferedLength = () => length;\n\n\treturn stream;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZ2V0LXN0cmVhbUA1LjIuMC9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9idWZmZXItc3RyZWFtLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsT0FBTyxnQ0FBZ0MsRUFBRSxtQkFBTyxDQUFDLHNCQUFROztBQUV6RDtBQUNBLFlBQVk7O0FBRVosUUFBUSxPQUFPO0FBQ2YsTUFBTSxVQUFVO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsV0FBVzs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tpY2tzdGFydC8uL25vZGVfbW9kdWxlcy8ucG5wbS9nZXQtc3RyZWFtQDUuMi4wL25vZGVfbW9kdWxlcy9nZXQtc3RyZWFtL2J1ZmZlci1zdHJlYW0uanM/NTFkOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCB7UGFzc1Rocm91Z2g6IFBhc3NUaHJvdWdoU3RyZWFtfSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9wdGlvbnMgPT4ge1xuXHRvcHRpb25zID0gey4uLm9wdGlvbnN9O1xuXG5cdGNvbnN0IHthcnJheX0gPSBvcHRpb25zO1xuXHRsZXQge2VuY29kaW5nfSA9IG9wdGlvbnM7XG5cdGNvbnN0IGlzQnVmZmVyID0gZW5jb2RpbmcgPT09ICdidWZmZXInO1xuXHRsZXQgb2JqZWN0TW9kZSA9IGZhbHNlO1xuXG5cdGlmIChhcnJheSkge1xuXHRcdG9iamVjdE1vZGUgPSAhKGVuY29kaW5nIHx8IGlzQnVmZmVyKTtcblx0fSBlbHNlIHtcblx0XHRlbmNvZGluZyA9IGVuY29kaW5nIHx8ICd1dGY4Jztcblx0fVxuXG5cdGlmIChpc0J1ZmZlcikge1xuXHRcdGVuY29kaW5nID0gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHN0cmVhbSA9IG5ldyBQYXNzVGhyb3VnaFN0cmVhbSh7b2JqZWN0TW9kZX0pO1xuXG5cdGlmIChlbmNvZGluZykge1xuXHRcdHN0cmVhbS5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cdH1cblxuXHRsZXQgbGVuZ3RoID0gMDtcblx0Y29uc3QgY2h1bmtzID0gW107XG5cblx0c3RyZWFtLm9uKCdkYXRhJywgY2h1bmsgPT4ge1xuXHRcdGNodW5rcy5wdXNoKGNodW5rKTtcblxuXHRcdGlmIChvYmplY3RNb2RlKSB7XG5cdFx0XHRsZW5ndGggPSBjaHVua3MubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZW5ndGggKz0gY2h1bmsubGVuZ3RoO1xuXHRcdH1cblx0fSk7XG5cblx0c3RyZWFtLmdldEJ1ZmZlcmVkVmFsdWUgPSAoKSA9PiB7XG5cdFx0aWYgKGFycmF5KSB7XG5cdFx0XHRyZXR1cm4gY2h1bmtzO1xuXHRcdH1cblxuXHRcdHJldHVybiBpc0J1ZmZlciA/IEJ1ZmZlci5jb25jYXQoY2h1bmtzLCBsZW5ndGgpIDogY2h1bmtzLmpvaW4oJycpO1xuXHR9O1xuXG5cdHN0cmVhbS5nZXRCdWZmZXJlZExlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuXHRyZXR1cm4gc3RyZWFtO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/get-stream@5.2.0/node_modules/get-stream/buffer-stream.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/get-stream@5.2.0/node_modules/get-stream/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/get-stream@5.2.0/node_modules/get-stream/index.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst {constants: BufferConstants} = __webpack_require__(/*! buffer */ \"buffer\");\nconst pump = __webpack_require__(/*! pump */ \"(ssr)/./node_modules/.pnpm/pump@3.0.0/node_modules/pump/index.js\");\nconst bufferStream = __webpack_require__(/*! ./buffer-stream */ \"(ssr)/./node_modules/.pnpm/get-stream@5.2.0/node_modules/get-stream/buffer-stream.js\");\n\nclass MaxBufferError extends Error {\n\tconstructor() {\n\t\tsuper('maxBuffer exceeded');\n\t\tthis.name = 'MaxBufferError';\n\t}\n}\n\nasync function getStream(inputStream, options) {\n\tif (!inputStream) {\n\t\treturn Promise.reject(new Error('Expected a stream'));\n\t}\n\n\toptions = {\n\t\tmaxBuffer: Infinity,\n\t\t...options\n\t};\n\n\tconst {maxBuffer} = options;\n\n\tlet stream;\n\tawait new Promise((resolve, reject) => {\n\t\tconst rejectPromise = error => {\n\t\t\t// Don't retrieve an oversized buffer.\n\t\t\tif (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {\n\t\t\t\terror.bufferedData = stream.getBufferedValue();\n\t\t\t}\n\n\t\t\treject(error);\n\t\t};\n\n\t\tstream = pump(inputStream, bufferStream(options), error => {\n\t\t\tif (error) {\n\t\t\t\trejectPromise(error);\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tresolve();\n\t\t});\n\n\t\tstream.on('data', () => {\n\t\t\tif (stream.getBufferedLength() > maxBuffer) {\n\t\t\t\trejectPromise(new MaxBufferError());\n\t\t\t}\n\t\t});\n\t});\n\n\treturn stream.getBufferedValue();\n}\n\nmodule.exports = getStream;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = getStream;\nmodule.exports.buffer = (stream, options) => getStream(stream, {...options, encoding: 'buffer'});\nmodule.exports.array = (stream, options) => getStream(stream, {...options, array: true});\nmodule.exports.MaxBufferError = MaxBufferError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZ2V0LXN0cmVhbUA1LjIuMC9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLE9BQU8sNEJBQTRCLEVBQUUsbUJBQU8sQ0FBQyxzQkFBUTtBQUNyRCxhQUFhLG1CQUFPLENBQUMsOEVBQU07QUFDM0IscUJBQXFCLG1CQUFPLENBQUMsNkdBQWlCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXNCO0FBQ3RCLHFCQUFxQiwyQ0FBMkMsK0JBQStCO0FBQy9GLG9CQUFvQiwyQ0FBMkMsd0JBQXdCO0FBQ3ZGLDZCQUE2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2tpY2tzdGFydC8uL25vZGVfbW9kdWxlcy8ucG5wbS9nZXQtc3RyZWFtQDUuMi4wL25vZGVfbW9kdWxlcy9nZXQtc3RyZWFtL2luZGV4LmpzPzljMDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge2NvbnN0YW50czogQnVmZmVyQ29uc3RhbnRzfSA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuY29uc3QgcHVtcCA9IHJlcXVpcmUoJ3B1bXAnKTtcbmNvbnN0IGJ1ZmZlclN0cmVhbSA9IHJlcXVpcmUoJy4vYnVmZmVyLXN0cmVhbScpO1xuXG5jbGFzcyBNYXhCdWZmZXJFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ21heEJ1ZmZlciBleGNlZWRlZCcpO1xuXHRcdHRoaXMubmFtZSA9ICdNYXhCdWZmZXJFcnJvcic7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U3RyZWFtKGlucHV0U3RyZWFtLCBvcHRpb25zKSB7XG5cdGlmICghaW5wdXRTdHJlYW0pIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdFeHBlY3RlZCBhIHN0cmVhbScpKTtcblx0fVxuXG5cdG9wdGlvbnMgPSB7XG5cdFx0bWF4QnVmZmVyOiBJbmZpbml0eSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0Y29uc3Qge21heEJ1ZmZlcn0gPSBvcHRpb25zO1xuXG5cdGxldCBzdHJlYW07XG5cdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRjb25zdCByZWplY3RQcm9taXNlID0gZXJyb3IgPT4ge1xuXHRcdFx0Ly8gRG9uJ3QgcmV0cmlldmUgYW4gb3ZlcnNpemVkIGJ1ZmZlci5cblx0XHRcdGlmIChlcnJvciAmJiBzdHJlYW0uZ2V0QnVmZmVyZWRMZW5ndGgoKSA8PSBCdWZmZXJDb25zdGFudHMuTUFYX0xFTkdUSCkge1xuXHRcdFx0XHRlcnJvci5idWZmZXJlZERhdGEgPSBzdHJlYW0uZ2V0QnVmZmVyZWRWYWx1ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdH07XG5cblx0XHRzdHJlYW0gPSBwdW1wKGlucHV0U3RyZWFtLCBidWZmZXJTdHJlYW0ob3B0aW9ucyksIGVycm9yID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRyZWplY3RQcm9taXNlKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSk7XG5cblx0XHRzdHJlYW0ub24oJ2RhdGEnLCAoKSA9PiB7XG5cdFx0XHRpZiAoc3RyZWFtLmdldEJ1ZmZlcmVkTGVuZ3RoKCkgPiBtYXhCdWZmZXIpIHtcblx0XHRcdFx0cmVqZWN0UHJvbWlzZShuZXcgTWF4QnVmZmVyRXJyb3IoKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHJldHVybiBzdHJlYW0uZ2V0QnVmZmVyZWRWYWx1ZSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN0cmVhbTtcbi8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0U3RyZWFtO1xubW9kdWxlLmV4cG9ydHMuYnVmZmVyID0gKHN0cmVhbSwgb3B0aW9ucykgPT4gZ2V0U3RyZWFtKHN0cmVhbSwgey4uLm9wdGlvbnMsIGVuY29kaW5nOiAnYnVmZmVyJ30pO1xubW9kdWxlLmV4cG9ydHMuYXJyYXkgPSAoc3RyZWFtLCBvcHRpb25zKSA9PiBnZXRTdHJlYW0oc3RyZWFtLCB7Li4ub3B0aW9ucywgYXJyYXk6IHRydWV9KTtcbm1vZHVsZS5leHBvcnRzLk1heEJ1ZmZlckVycm9yID0gTWF4QnVmZmVyRXJyb3I7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/get-stream@5.2.0/node_modules/get-stream/index.js\n");

/***/ })

};
;
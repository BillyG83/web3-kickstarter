"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/timed-out@4.0.1";
exports.ids = ["vendor-chunks/timed-out@4.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/timed-out@4.0.1/node_modules/timed-out/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/timed-out@4.0.1/node_modules/timed-out/index.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (req, time) {\n\tif (req.timeoutTimer) {\n\t\treturn req;\n\t}\n\n\tvar delays = isNaN(time) ? time : {socket: time, connect: time};\n\tvar host = req._headers ? (' to ' + req._headers.host) : '';\n\n\tif (delays.connect !== undefined) {\n\t\treq.timeoutTimer = setTimeout(function timeoutHandler() {\n\t\t\treq.abort();\n\t\t\tvar e = new Error('Connection timed out on request' + host);\n\t\t\te.code = 'ETIMEDOUT';\n\t\t\treq.emit('error', e);\n\t\t}, delays.connect);\n\t}\n\n\t// Clear the connection timeout timer once a socket is assigned to the\n\t// request and is connected.\n\treq.on('socket', function assign(socket) {\n\t\t// Socket may come from Agent pool and may be already connected.\n\t\tif (!(socket.connecting || socket._connecting)) {\n\t\t\tconnect();\n\t\t\treturn;\n\t\t}\n\n\t\tsocket.once('connect', connect);\n\t});\n\n\tfunction clear() {\n\t\tif (req.timeoutTimer) {\n\t\t\tclearTimeout(req.timeoutTimer);\n\t\t\treq.timeoutTimer = null;\n\t\t}\n\t}\n\n\tfunction connect() {\n\t\tclear();\n\n\t\tif (delays.socket !== undefined) {\n\t\t\t// Abort the request if there is no activity on the socket for more\n\t\t\t// than `delays.socket` milliseconds.\n\t\t\treq.setTimeout(delays.socket, function socketTimeoutHandler() {\n\t\t\t\treq.abort();\n\t\t\t\tvar e = new Error('Socket timed out on request' + host);\n\t\t\t\te.code = 'ESOCKETTIMEDOUT';\n\t\t\t\treq.emit('error', e);\n\t\t\t});\n\t\t}\n\t}\n\n\treturn req.on('error', clear);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdGltZWQtb3V0QDQuMC4xL25vZGVfbW9kdWxlcy90aW1lZC1vdXQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tpY2tzdGFydC8uL25vZGVfbW9kdWxlcy8ucG5wbS90aW1lZC1vdXRANC4wLjEvbm9kZV9tb2R1bGVzL3RpbWVkLW91dC9pbmRleC5qcz8xMmJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVxLCB0aW1lKSB7XG5cdGlmIChyZXEudGltZW91dFRpbWVyKSB7XG5cdFx0cmV0dXJuIHJlcTtcblx0fVxuXG5cdHZhciBkZWxheXMgPSBpc05hTih0aW1lKSA/IHRpbWUgOiB7c29ja2V0OiB0aW1lLCBjb25uZWN0OiB0aW1lfTtcblx0dmFyIGhvc3QgPSByZXEuX2hlYWRlcnMgPyAoJyB0byAnICsgcmVxLl9oZWFkZXJzLmhvc3QpIDogJyc7XG5cblx0aWYgKGRlbGF5cy5jb25uZWN0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXEudGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0SGFuZGxlcigpIHtcblx0XHRcdHJlcS5hYm9ydCgpO1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoJ0Nvbm5lY3Rpb24gdGltZWQgb3V0IG9uIHJlcXVlc3QnICsgaG9zdCk7XG5cdFx0XHRlLmNvZGUgPSAnRVRJTUVET1VUJztcblx0XHRcdHJlcS5lbWl0KCdlcnJvcicsIGUpO1xuXHRcdH0sIGRlbGF5cy5jb25uZWN0KTtcblx0fVxuXG5cdC8vIENsZWFyIHRoZSBjb25uZWN0aW9uIHRpbWVvdXQgdGltZXIgb25jZSBhIHNvY2tldCBpcyBhc3NpZ25lZCB0byB0aGVcblx0Ly8gcmVxdWVzdCBhbmQgaXMgY29ubmVjdGVkLlxuXHRyZXEub24oJ3NvY2tldCcsIGZ1bmN0aW9uIGFzc2lnbihzb2NrZXQpIHtcblx0XHQvLyBTb2NrZXQgbWF5IGNvbWUgZnJvbSBBZ2VudCBwb29sIGFuZCBtYXkgYmUgYWxyZWFkeSBjb25uZWN0ZWQuXG5cdFx0aWYgKCEoc29ja2V0LmNvbm5lY3RpbmcgfHwgc29ja2V0Ll9jb25uZWN0aW5nKSkge1xuXHRcdFx0Y29ubmVjdCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHNvY2tldC5vbmNlKCdjb25uZWN0JywgY29ubmVjdCk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIGNsZWFyKCkge1xuXHRcdGlmIChyZXEudGltZW91dFRpbWVyKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQocmVxLnRpbWVvdXRUaW1lcik7XG5cdFx0XHRyZXEudGltZW91dFRpbWVyID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjb25uZWN0KCkge1xuXHRcdGNsZWFyKCk7XG5cblx0XHRpZiAoZGVsYXlzLnNvY2tldCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBBYm9ydCB0aGUgcmVxdWVzdCBpZiB0aGVyZSBpcyBubyBhY3Rpdml0eSBvbiB0aGUgc29ja2V0IGZvciBtb3JlXG5cdFx0XHQvLyB0aGFuIGBkZWxheXMuc29ja2V0YCBtaWxsaXNlY29uZHMuXG5cdFx0XHRyZXEuc2V0VGltZW91dChkZWxheXMuc29ja2V0LCBmdW5jdGlvbiBzb2NrZXRUaW1lb3V0SGFuZGxlcigpIHtcblx0XHRcdFx0cmVxLmFib3J0KCk7XG5cdFx0XHRcdHZhciBlID0gbmV3IEVycm9yKCdTb2NrZXQgdGltZWQgb3V0IG9uIHJlcXVlc3QnICsgaG9zdCk7XG5cdFx0XHRcdGUuY29kZSA9ICdFU09DS0VUVElNRURPVVQnO1xuXHRcdFx0XHRyZXEuZW1pdCgnZXJyb3InLCBlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXEub24oJ2Vycm9yJywgY2xlYXIpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/timed-out@4.0.1/node_modules/timed-out/index.js\n");

/***/ })

};
;
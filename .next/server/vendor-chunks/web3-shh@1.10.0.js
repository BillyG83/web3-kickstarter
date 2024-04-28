"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/web3-shh@1.10.0";
exports.ids = ["vendor-chunks/web3-shh@1.10.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/web3-shh@1.10.0/node_modules/web3-shh/lib/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/web3-shh@1.10.0/node_modules/web3-shh/lib/index.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n    This file is part of web3.js.\n\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * @file index.js\n * @author Fabian Vogelsteller <fabian@ethereum.org>\n * @date 2017\n */\n\nvar core = __webpack_require__(/*! web3-core */ \"(ssr)/./node_modules/.pnpm/web3-core@1.10.0/node_modules/web3-core/lib/index.js\");\nvar Subscriptions = (__webpack_require__(/*! web3-core-subscriptions */ \"(ssr)/./node_modules/.pnpm/web3-core-subscriptions@1.10.0/node_modules/web3-core-subscriptions/lib/index.js\").subscriptions);\nvar Method = __webpack_require__(/*! web3-core-method */ \"(ssr)/./node_modules/.pnpm/web3-core-method@1.10.0/node_modules/web3-core-method/lib/index.js\");\n// var formatters = require('web3-core-helpers').formatters;\nvar Net = __webpack_require__(/*! web3-net */ \"(ssr)/./node_modules/.pnpm/web3-net@1.10.0/node_modules/web3-net/lib/index.js\");\nvar Shh = function Shh() {\n    var _this = this;\n    // sets _requestmanager\n    core.packageInit(this, arguments);\n    // overwrite package setRequestManager\n    var setRequestManager = this.setRequestManager;\n    this.setRequestManager = function (manager) {\n        setRequestManager(manager);\n        _this.net.setRequestManager(manager);\n        return true;\n    };\n    // overwrite setProvider\n    var setProvider = this.setProvider;\n    this.setProvider = function () {\n        setProvider.apply(_this, arguments);\n        _this.setRequestManager(_this._requestManager);\n    };\n    this.net = new Net(this);\n    [\n        new Subscriptions({\n            name: 'subscribe',\n            type: 'shh',\n            subscriptions: {\n                'messages': {\n                    params: 1\n                    // inputFormatter: [formatters.inputPostFormatter],\n                    // outputFormatter: formatters.outputPostFormatter\n                }\n            }\n        }),\n        new Method({\n            name: 'getVersion',\n            call: 'shh_version',\n            params: 0\n        }),\n        new Method({\n            name: 'getInfo',\n            call: 'shh_info',\n            params: 0\n        }),\n        new Method({\n            name: 'setMaxMessageSize',\n            call: 'shh_setMaxMessageSize',\n            params: 1\n        }),\n        new Method({\n            name: 'setMinPoW',\n            call: 'shh_setMinPoW',\n            params: 1\n        }),\n        new Method({\n            name: 'markTrustedPeer',\n            call: 'shh_markTrustedPeer',\n            params: 1\n        }),\n        new Method({\n            name: 'newKeyPair',\n            call: 'shh_newKeyPair',\n            params: 0\n        }),\n        new Method({\n            name: 'addPrivateKey',\n            call: 'shh_addPrivateKey',\n            params: 1\n        }),\n        new Method({\n            name: 'deleteKeyPair',\n            call: 'shh_deleteKeyPair',\n            params: 1\n        }),\n        new Method({\n            name: 'hasKeyPair',\n            call: 'shh_hasKeyPair',\n            params: 1\n        }),\n        new Method({\n            name: 'getPublicKey',\n            call: 'shh_getPublicKey',\n            params: 1\n        }),\n        new Method({\n            name: 'getPrivateKey',\n            call: 'shh_getPrivateKey',\n            params: 1\n        }),\n        new Method({\n            name: 'newSymKey',\n            call: 'shh_newSymKey',\n            params: 0\n        }),\n        new Method({\n            name: 'addSymKey',\n            call: 'shh_addSymKey',\n            params: 1\n        }),\n        new Method({\n            name: 'generateSymKeyFromPassword',\n            call: 'shh_generateSymKeyFromPassword',\n            params: 1\n        }),\n        new Method({\n            name: 'hasSymKey',\n            call: 'shh_hasSymKey',\n            params: 1\n        }),\n        new Method({\n            name: 'getSymKey',\n            call: 'shh_getSymKey',\n            params: 1\n        }),\n        new Method({\n            name: 'deleteSymKey',\n            call: 'shh_deleteSymKey',\n            params: 1\n        }),\n        new Method({\n            name: 'newMessageFilter',\n            call: 'shh_newMessageFilter',\n            params: 1\n        }),\n        new Method({\n            name: 'getFilterMessages',\n            call: 'shh_getFilterMessages',\n            params: 1\n        }),\n        new Method({\n            name: 'deleteMessageFilter',\n            call: 'shh_deleteMessageFilter',\n            params: 1\n        }),\n        new Method({\n            name: 'post',\n            call: 'shh_post',\n            params: 1,\n            inputFormatter: [null]\n        }),\n        new Method({\n            name: 'unsubscribe',\n            call: 'shh_unsubscribe',\n            params: 1\n        })\n    ].forEach(function (method) {\n        method.attachToObject(_this);\n        method.setRequestManager(_this._requestManager);\n    });\n};\nShh.prototype.clearSubscriptions = function () {\n    this._requestManager.clearSubscriptions();\n};\ncore.addProviders(Shh);\nmodule.exports = Shh;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vd2ViMy1zaGhAMS4xMC4wL25vZGVfbW9kdWxlcy93ZWIzLXNoaC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyxrR0FBVztBQUM5QixvQkFBb0IsaUxBQWdEO0FBQ3BFLGFBQWEsbUJBQU8sQ0FBQyx1SEFBa0I7QUFDdkM7QUFDQSxVQUFVLG1CQUFPLENBQUMsK0ZBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2ViMy1zaGhAMS4xMC4wL25vZGVfbW9kdWxlcy93ZWIzLXNoaC9saWIvaW5kZXguanM/YTJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiAgICB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAgICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAgICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICAgIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAgICB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gICAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAgICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gICAgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiAgICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAgICBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4qL1xuLyoqXG4gKiBAZmlsZSBpbmRleC5qc1xuICogQGF1dGhvciBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBjb3JlID0gcmVxdWlyZSgnd2ViMy1jb3JlJyk7XG52YXIgU3Vic2NyaXB0aW9ucyA9IHJlcXVpcmUoJ3dlYjMtY29yZS1zdWJzY3JpcHRpb25zJykuc3Vic2NyaXB0aW9ucztcbnZhciBNZXRob2QgPSByZXF1aXJlKCd3ZWIzLWNvcmUtbWV0aG9kJyk7XG4vLyB2YXIgZm9ybWF0dGVycyA9IHJlcXVpcmUoJ3dlYjMtY29yZS1oZWxwZXJzJykuZm9ybWF0dGVycztcbnZhciBOZXQgPSByZXF1aXJlKCd3ZWIzLW5ldCcpO1xudmFyIFNoaCA9IGZ1bmN0aW9uIFNoaCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIC8vIHNldHMgX3JlcXVlc3RtYW5hZ2VyXG4gICAgY29yZS5wYWNrYWdlSW5pdCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIG92ZXJ3cml0ZSBwYWNrYWdlIHNldFJlcXVlc3RNYW5hZ2VyXG4gICAgdmFyIHNldFJlcXVlc3RNYW5hZ2VyID0gdGhpcy5zZXRSZXF1ZXN0TWFuYWdlcjtcbiAgICB0aGlzLnNldFJlcXVlc3RNYW5hZ2VyID0gZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgc2V0UmVxdWVzdE1hbmFnZXIobWFuYWdlcik7XG4gICAgICAgIF90aGlzLm5ldC5zZXRSZXF1ZXN0TWFuYWdlcihtYW5hZ2VyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvLyBvdmVyd3JpdGUgc2V0UHJvdmlkZXJcbiAgICB2YXIgc2V0UHJvdmlkZXIgPSB0aGlzLnNldFByb3ZpZGVyO1xuICAgIHRoaXMuc2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFByb3ZpZGVyLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBfdGhpcy5zZXRSZXF1ZXN0TWFuYWdlcihfdGhpcy5fcmVxdWVzdE1hbmFnZXIpO1xuICAgIH07XG4gICAgdGhpcy5uZXQgPSBuZXcgTmV0KHRoaXMpO1xuICAgIFtcbiAgICAgICAgbmV3IFN1YnNjcmlwdGlvbnMoe1xuICAgICAgICAgICAgbmFtZTogJ3N1YnNjcmliZScsXG4gICAgICAgICAgICB0eXBlOiAnc2hoJyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAnbWVzc2FnZXMnOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRQb3N0Rm9ybWF0dGVyXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gb3V0cHV0Rm9ybWF0dGVyOiBmb3JtYXR0ZXJzLm91dHB1dFBvc3RGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRWZXJzaW9uJyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfdmVyc2lvbicsXG4gICAgICAgICAgICBwYXJhbXM6IDBcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2dldEluZm8nLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9pbmZvJyxcbiAgICAgICAgICAgIHBhcmFtczogMFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnc2V0TWF4TWVzc2FnZVNpemUnLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9zZXRNYXhNZXNzYWdlU2l6ZScsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ3NldE1pblBvVycsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX3NldE1pblBvVycsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ21hcmtUcnVzdGVkUGVlcicsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX21hcmtUcnVzdGVkUGVlcicsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ25ld0tleVBhaXInLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9uZXdLZXlQYWlyJyxcbiAgICAgICAgICAgIHBhcmFtczogMFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnYWRkUHJpdmF0ZUtleScsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2FkZFByaXZhdGVLZXknLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGVLZXlQYWlyJyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfZGVsZXRlS2V5UGFpcicsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2hhc0tleVBhaXInLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9oYXNLZXlQYWlyJyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0UHVibGljS2V5JyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfZ2V0UHVibGljS2V5JyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0UHJpdmF0ZUtleScsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2dldFByaXZhdGVLZXknLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICduZXdTeW1LZXknLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9uZXdTeW1LZXknLFxuICAgICAgICAgICAgcGFyYW1zOiAwXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdhZGRTeW1LZXknLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9hZGRTeW1LZXknLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdnZW5lcmF0ZVN5bUtleUZyb21QYXNzd29yZCcsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2dlbmVyYXRlU3ltS2V5RnJvbVBhc3N3b3JkJyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnaGFzU3ltS2V5JyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfaGFzU3ltS2V5JyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0U3ltS2V5JyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfZ2V0U3ltS2V5JyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlU3ltS2V5JyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfZGVsZXRlU3ltS2V5JyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnbmV3TWVzc2FnZUZpbHRlcicsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX25ld01lc3NhZ2VGaWx0ZXInLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRGaWx0ZXJNZXNzYWdlcycsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2dldEZpbHRlck1lc3NhZ2VzJyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlTWVzc2FnZUZpbHRlcicsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2RlbGV0ZU1lc3NhZ2VGaWx0ZXInLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdwb3N0JyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfcG9zdCcsXG4gICAgICAgICAgICBwYXJhbXM6IDEsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogW251bGxdXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICd1bnN1YnNjcmliZScsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KVxuICAgIF0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIG1ldGhvZC5hdHRhY2hUb09iamVjdChfdGhpcyk7XG4gICAgICAgIG1ldGhvZC5zZXRSZXF1ZXN0TWFuYWdlcihfdGhpcy5fcmVxdWVzdE1hbmFnZXIpO1xuICAgIH0pO1xufTtcblNoaC5wcm90b3R5cGUuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3JlcXVlc3RNYW5hZ2VyLmNsZWFyU3Vic2NyaXB0aW9ucygpO1xufTtcbmNvcmUuYWRkUHJvdmlkZXJzKFNoaCk7XG5tb2R1bGUuZXhwb3J0cyA9IFNoaDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/web3-shh@1.10.0/node_modules/web3-shh/lib/index.js\n");

/***/ })

};
;
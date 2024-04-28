"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create/page",{

/***/ "(app-pages-browser)/./app/components/CreateForm/CreateForm.jsx":
/*!**************************************************!*\
  !*** ./app/components/CreateForm/CreateForm.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ethereum/web3 */ \"(app-pages-browser)/./ethereum/web3.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ethereum/factory */ \"(app-pages-browser)/./ethereum/factory.js\");\n\n\n\nconst CreateForm = async ()=>{\n    const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eth.getAccounts();\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        const minDonation = Number(e.currentTarget.elements[\"min-donation\"].value);\n        await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.createCampaign(minDonation).send({\n            from: accounts[0]\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: (e)=>onSubmit(e),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"camp-name\",\n                name: \"camp-name\",\n                placeholder: \"Campaign Name\",\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/Users/billgilmore/dev/eth-kickstart/app/components/CreateForm/CreateForm.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"camp-description\",\n                id: \"camp-description\",\n                placeholder: \"Campaign description\"\n            }, void 0, false, {\n                fileName: \"/Users/billgilmore/dev/eth-kickstart/app/components/CreateForm/CreateForm.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"min-donation\",\n                id: \"min-donation\",\n                placeholder: \"Minium donation\",\n                type: \"number\"\n            }, void 0, false, {\n                fileName: \"/Users/billgilmore/dev/eth-kickstart/app/components/CreateForm/CreateForm.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Lets go\"\n            }, void 0, false, {\n                fileName: \"/Users/billgilmore/dev/eth-kickstart/app/components/CreateForm/CreateForm.jsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billgilmore/dev/eth-kickstart/app/components/CreateForm/CreateForm.jsx\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, undefined);\n};\n_c = CreateForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateForm);\nvar _c;\n$RefreshReg$(_c, \"CreateForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NyZWF0ZUZvcm0vQ3JlYXRlRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFDSztBQUUvQyxNQUFNRSxhQUFhO0lBQ2pCLE1BQU1DLFdBQVcsTUFBTUgsc0RBQUlBLENBQUNJLEdBQUcsQ0FBQ0MsV0FBVztJQUUzQyxNQUFNQyxXQUFXLE9BQU9DO1FBQ3RCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLGNBQWNDLE9BQU9ILEVBQUVJLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDLGVBQWUsQ0FBQ0MsS0FBSztRQUV6RSxNQUFNWix5REFBT0EsQ0FBQ2EsT0FBTyxDQUFDQyxjQUFjLENBQUNOLGFBQWFPLElBQUksQ0FBQztZQUNyREMsTUFBTWQsUUFBUSxDQUFDLEVBQUU7UUFDbkI7SUFDRjtJQUNBLHFCQUNJLDhEQUFDZTtRQUFLWixVQUFVQyxDQUFBQSxJQUFLRCxTQUFTQzs7MEJBQzVCLDhEQUFDWTtnQkFDQ0MsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsTUFBSzs7Ozs7OzBCQUVQLDhEQUFDQztnQkFDQ0gsTUFBSztnQkFDTEQsSUFBRztnQkFDSEUsYUFBWTs7Ozs7OzBCQUVkLDhEQUFDSDtnQkFDQ0UsTUFBSztnQkFDTEQsSUFBRztnQkFDSEUsYUFBWTtnQkFDWkMsTUFBSzs7Ozs7OzBCQUVQLDhEQUFDRTtnQkFBT0YsTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0tBakNNckI7QUFtQ04sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ3JlYXRlRm9ybS9DcmVhdGVGb3JtLmpzeD84NDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vZmFjdG9yeSdcblxuY29uc3QgQ3JlYXRlRm9ybSA9IGFzeW5jKCkgPT4ge1xuICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtaW5Eb25hdGlvbiA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZWxlbWVudHNbJ21pbi1kb25hdGlvbiddLnZhbHVlKTtcblxuICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5jcmVhdGVDYW1wYWlnbihtaW5Eb25hdGlvbikuc2VuZCh7XG4gICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgIH0pO1xuICB9XG4gIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBvblN1Ym1pdChlKX0+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICBpZD1cImNhbXAtbmFtZVwiXG4gICAgICAgICAgbmFtZT1cImNhbXAtbmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYW1wYWlnbiBOYW1lXCIgXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgIG5hbWU9XCJjYW1wLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBpZD1cImNhbXAtZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FtcGFpZ24gZGVzY3JpcHRpb25cIiBcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIG5hbWU9XCJtaW4tZG9uYXRpb25cIlxuICAgICAgICAgIGlkPVwibWluLWRvbmF0aW9uXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pbml1bSBkb25hdGlvblwiIFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TGV0cyBnbzwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUZvcm0iXSwibmFtZXMiOlsid2ViMyIsImZhY3RvcnkiLCJDcmVhdGVGb3JtIiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibWluRG9uYXRpb24iLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwiZm9ybSIsImlucHV0IiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CreateForm/CreateForm.jsx\n"));

/***/ })

});
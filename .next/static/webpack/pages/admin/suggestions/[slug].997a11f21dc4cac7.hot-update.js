"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/suggestions/[slug]",{

/***/ "./components/SuggestionFeed.js":
/*!**************************************!*\
  !*** ./components/SuggestionFeed.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionFeed; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SuggestionFeed(param) {\n    let { suggestions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: suggestions ? suggestions.map((suggestion)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SuggestionItem, {\n                suggestion: suggestion\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)) : null\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = SuggestionFeed;\nfunction SuggestionItem(param) {\n    let { suggestion } = param;\n    const createdAt = typeof (suggestion === null || suggestion === void 0 ? void 0 : suggestion.createdAt) === \"number\" ? new Date(suggestion.createdAt) : suggestion.createdAt.toDate();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\".concat(suggestion.username),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: [\n                            \"Written by @\",\n                            suggestion.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: suggestion.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-red\",\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Created at \",\n                            createdAt.toString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SuggestionItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"SuggestionFeed\");\n$RefreshReg$(_c1, \"SuggestionItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1Z2dlc3Rpb25GZWVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUVkLFNBQVNDLGVBQWUsS0FBZTtRQUFmLEVBQUVDLFdBQVcsRUFBRSxHQUFmO0lBQ3JDLHFCQUNFLDhEQUFDQztrQkFDRUQsY0FDR0EsWUFBWUUsR0FBRyxDQUFDLENBQUNDLDJCQUNmLDhEQUFDQztnQkFBZUQsWUFBWUE7Ozs7O3dCQUU5Qjs7Ozs7O0FBR1Y7S0FWd0JKO0FBWXhCLFNBQVNLLGVBQWUsS0FBYztRQUFkLEVBQUVELFVBQVUsRUFBRSxHQUFkO0lBQ3RCLE1BQU1FLFlBQ0osUUFBT0YsdUJBQUFBLGlDQUFBQSxXQUFZRSxTQUFTLE1BQUssV0FDN0IsSUFBSUMsS0FBS0gsV0FBV0UsU0FBUyxJQUM3QkYsV0FBV0UsU0FBUyxDQUFDRSxNQUFNO0lBRWpDLHFCQUNFLDhEQUFDTjtRQUFJTyxXQUFVO2tCQUNiLDRFQUFDUDtZQUFJTyxXQUFVOzs4QkFDYiw4REFBQ1Ysa0RBQUlBO29CQUFDVyxNQUFNLElBQXdCLE9BQXBCTixXQUFXTyxRQUFROzhCQUNqQyw0RUFBQ0M7OzRCQUFPOzRCQUFhUixXQUFXTyxRQUFROzs7Ozs7Ozs7Ozs7OEJBRzFDLDhEQUFDVDtvQkFDQ1csT0FBTzt3QkFDTEMsU0FBUzt3QkFDVEMsZ0JBQWdCO3dCQUNoQkMsWUFBWTtvQkFDZDs7c0NBRUEsOERBQUNDOzRCQUFFSixPQUFPO2dDQUFFSyxXQUFXOzRCQUFTO3NDQUFJZCxXQUFXZSxPQUFPOzs7Ozs7c0NBQ3RELDhEQUFDQzs0QkFBT1gsV0FBVTtzQ0FBVTs7Ozs7Ozs7Ozs7OzhCQUc5Qiw4REFBQ1k7OEJBQ0MsNEVBQUNDOzs0QkFBSzs0QkFBWWhCLFVBQVVpQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QztNQTlCU2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3VnZ2VzdGlvbkZlZWQuanM/ODE3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWdnZXN0aW9uRmVlZCh7IHN1Z2dlc3Rpb25zIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3N1Z2dlc3Rpb25zXHJcbiAgICAgICAgPyBzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24pID0+IChcclxuICAgICAgICAgICAgPFN1Z2dlc3Rpb25JdGVtIHN1Z2dlc3Rpb249e3N1Z2dlc3Rpb259IC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1Z2dlc3Rpb25JdGVtKHsgc3VnZ2VzdGlvbiB9KSB7XHJcbiAgY29uc3QgY3JlYXRlZEF0ID1cclxuICAgIHR5cGVvZiBzdWdnZXN0aW9uPy5jcmVhdGVkQXQgPT09IFwibnVtYmVyXCJcclxuICAgICAgPyBuZXcgRGF0ZShzdWdnZXN0aW9uLmNyZWF0ZWRBdClcclxuICAgICAgOiBzdWdnZXN0aW9uLmNyZWF0ZWRBdC50b0RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtzdWdnZXN0aW9uLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgPHN0cm9uZz5Xcml0dGVuIGJ5IEB7c3VnZ2VzdGlvbi51c2VybmFtZX08L3N0cm9uZz5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57c3VnZ2VzdGlvbi5jb250ZW50fTwvcD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXJlZFwiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPHNwYW4+Q3JlYXRlZCBhdCB7Y3JlYXRlZEF0LnRvU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJTdWdnZXN0aW9uRmVlZCIsInN1Z2dlc3Rpb25zIiwiZGl2IiwibWFwIiwic3VnZ2VzdGlvbiIsIlN1Z2dlc3Rpb25JdGVtIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInRvRGF0ZSIsImNsYXNzTmFtZSIsImhyZWYiLCJ1c2VybmFtZSIsInN0cm9uZyIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInAiLCJ0ZXh0QWxpZ24iLCJjb250ZW50IiwiYnV0dG9uIiwiZm9vdGVyIiwic3BhbiIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SuggestionFeed.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tags/looking-for-feedback",{

/***/ "./components/PopularTechCard.js":
/*!***************************************!*\
  !*** ./components/PopularTechCard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PopularTechCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/context */ \"./lib/context.js\");\n/* harmony import */ var _lib_tech__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/tech */ \"./lib/tech.js\");\n// components/PopularTechCard.js\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PopularTechCard() {\n    _s();\n    const { popularTech } = (0,_lib_context__WEBPACK_IMPORTED_MODULE_2__.usePopularTech)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-tech\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Top Tech\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    marginBottom: \"1rem\"\n                },\n                children: \"What your peers are building with.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: popularTech.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: tech.link,\n                            children: [\n                                tech.icon,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"tech-button\",\n                                    children: [\n                                        tech.name,\n                                        \" \",\n                                        tech.count == 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"frequency\",\n                                            children: \"\".concat(tech.count, \" project\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                                            lineNumber: 21,\n                                            columnNumber: 19\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"frequency\",\n                                            children: \"\".concat(tech.count, \" projects\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this)\n                    }, tech.name, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(PopularTechCard, \"OJqw1Sb//YahnQG4I0aJojWbhHI=\", false, function() {\n    return [\n        _lib_context__WEBPACK_IMPORTED_MODULE_2__.usePopularTech\n    ];\n});\n_c = PopularTechCard;\nvar _c;\n$RefreshReg$(_c, \"PopularTechCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcHVsYXJUZWNoQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0NBQWdDOzs7QUFDSDtBQUNtQjtBQUNHO0FBRXBDLFNBQVNHOztJQUN0QixNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHSCw0REFBY0E7SUFFdEMscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBRUMsT0FBTztvQkFBRUMsY0FBYztnQkFBTzswQkFBRzs7Ozs7OzBCQUNwQyw4REFBQ0M7MEJBQ0VQLFlBQVlRLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEIsOERBQUNDO2tDQUNDLDRFQUFDZCxrREFBSUE7NEJBQUNlLE1BQU1GLEtBQUtHLElBQUk7O2dDQUNsQkgsS0FBS0ksSUFBSTs4Q0FDViw4REFBQ0M7b0NBQU9aLFdBQVU7O3dDQUNmTyxLQUFLTSxJQUFJO3dDQUFFO3dDQUNYTixLQUFLTyxLQUFLLElBQUksa0JBQ2IsOERBQUNaOzRDQUFFRixXQUFVO3NEQUFhLEdBQWMsT0FBWE8sS0FBS08sS0FBSyxFQUFDOzs7OztpRUFFeEMsOERBQUNaOzRDQUFFRixXQUFVO3NEQUFhLEdBQWMsT0FBWE8sS0FBS08sS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBUnZDUCxLQUFLTSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUI1QjtHQTFCd0JoQjs7UUFDRUYsd0RBQWNBOzs7S0FEaEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9wdWxhclRlY2hDYXJkLmpzP2Y1ODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Qb3B1bGFyVGVjaENhcmQuanNcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VQb3B1bGFyVGVjaCB9IGZyb20gXCIuLi9saWIvY29udGV4dFwiO1xyXG5pbXBvcnQgeyB0ZWNoTGFiZWxUb0tlYmFiQ2FzZSB9IGZyb20gXCIuLi9saWIvdGVjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wdWxhclRlY2hDYXJkKCkge1xyXG4gIGNvbnN0IHsgcG9wdWxhclRlY2ggfSA9IHVzZVBvcHVsYXJUZWNoKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGVjaFwiPlxyXG4gICAgICA8aDI+VG9wIFRlY2g8L2gyPlxyXG4gICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19PldoYXQgeW91ciBwZWVycyBhcmUgYnVpbGRpbmcgd2l0aC48L3A+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cG9wdWxhclRlY2gubWFwKCh0ZWNoKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXt0ZWNoLm5hbWV9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt0ZWNoLmxpbmt9PlxyXG4gICAgICAgICAgICAgIHt0ZWNoLmljb259XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZWNoLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAge3RlY2gubmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7dGVjaC5jb3VudCA9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmcmVxdWVuY3lcIj57YCR7dGVjaC5jb3VudH0gcHJvamVjdGB9PC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnJlcXVlbmN5XCI+e2Ake3RlY2guY291bnR9IHByb2plY3RzYH08L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBvcHVsYXJUZWNoIiwidGVjaExhYmVsVG9LZWJhYkNhc2UiLCJQb3B1bGFyVGVjaENhcmQiLCJwb3B1bGFyVGVjaCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwidWwiLCJtYXAiLCJ0ZWNoIiwibGkiLCJocmVmIiwibGluayIsImljb24iLCJidXR0b24iLCJuYW1lIiwiY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PopularTechCard.js\n"));

/***/ })

});
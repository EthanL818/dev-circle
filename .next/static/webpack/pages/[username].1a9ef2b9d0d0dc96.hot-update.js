"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[username]",{

/***/ "./pages/[username]/index.js":
/*!***********************************!*\
  !*** ./pages/[username]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ UserProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UserProfile */ \"./components/UserProfile.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n\n\n\n\nvar __N_SSP = true;\nfunction UserProfilePage(param) {\n    let { user, posts, admin = false } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            flexDirection: \"column\",\n            width: \"100%\"\n        },\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                user: user\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    marginTop: \"3rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    posts: posts,\n                    filterBar: false,\n                    admin: admin\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_c = UserProfilePage;\nvar _c;\n$RefreshReg$(_c, \"UserProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ047QUFDMEI7O0FBK0M1RCxTQUFTRyxnQkFBZ0IsS0FBOEI7UUFBOUIsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsS0FBSyxFQUFFLEdBQTlCO0lBQ3RDLHFCQUNFLDhEQUFDQztRQUNDQyxPQUFPO1lBQ0xDLGVBQWU7WUFDZkMsT0FBTztRQUNUOztZQUVDOzBCQUNELDhEQUFDViwrREFBV0E7Z0JBQUNJLE1BQU1BOzs7Ozs7MEJBQ25CLDhEQUFDRztnQkFDQ0MsT0FBTztvQkFDTEcsU0FBUztvQkFDVEMsZ0JBQWdCO29CQUNoQkMsWUFBWTtvQkFDWkMsV0FBVztnQkFDYjswQkFFQSw0RUFBQ2IsNERBQVFBO29CQUFDSSxPQUFPQTtvQkFBT1UsV0FBVztvQkFBT1QsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpEO0tBdEJ3QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJuYW1lXS9pbmRleC5qcz9hZWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZVwiO1xyXG5pbXBvcnQgUG9zdEZlZWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdEZlZWRcIjtcclxuaW1wb3J0IHsgZ2V0VXNlcldpdGhVc2VybmFtZSwgcG9zdFRvSlNPTiwgYXV0aCB9IGZyb20gXCIuLi8uLi9saWIvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgd2hlcmUsIG9yZGVyQnksIGdldERvY3MsIHF1ZXJ5IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9saWIvY29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU2VydmVyLXNpZGUgcmVuZGVyaW5nIGZ1bmN0aW9uIHRvIGZldGNoIGRhdGEgYmFzZWQgb24gdGhlIHVzZXJuYW1lIHF1ZXJ5XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeTogY29udGV4dFF1ZXJ5IH0pIHtcclxuICAvLyBJbml0aWFsaXplIHVzZXIgdG8gbnVsbCBhbmQgcG9zdHMgdG8gYW4gZW1wdHkgYXJyYXlcclxuICBsZXQgdXNlciA9IG51bGw7XHJcbiAgbGV0IGFkbWluID0gbnVsbDtcclxuICBsZXQgcG9zdHMgPSBbXTtcclxuICBjb25zdCB7IHVzZXJuYW1lIH0gPSBjb250ZXh0UXVlcnk7IC8vIEV4dHJhY3QgdGhlIHVzZXJuYW1lIGZyb20gdGhlIHF1ZXJ5IHBhcmFtZXRlcnNcclxuICBjb25zdCB7IGN1cnJlbnRVc2VybmFtZSB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIGlmICh1c2VybmFtZSA9PSBjdXJyZW50VXNlcm5hbWUpIHtcclxuICAgIGFkbWluID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0VXNlcldpdGhVc2VybmFtZSh1c2VybmFtZSk7IC8vIEdldCB0aGUgdXNlciBkb2N1bWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgdXNlcm5hbWVcclxuXHJcbiAgICAvLyBJZiB0aGUgdXNlcidzIGRvY3VtZW50IGV4aXN0cyxcclxuICAgIGlmICh1c2VyRG9jKSB7XHJcbiAgICAgIHVzZXIgPSB1c2VyRG9jLmRhdGEoKTsgLy8gR2V0IHRoZSB1c2VyJ3MgZGF0YVxyXG4gICAgICBjb25zdCBwb3N0c1JlZiA9IGNvbGxlY3Rpb24odXNlckRvYy5yZWYsIFwicG9zdHNcIik7IC8vIFJlZmVyZW5jZSB0aGUgXCJwb3N0c1wiIGNvbGxlY3Rpb24gb2YgdGhlIHVzZXJcclxuXHJcbiAgICAgIC8vIFF1ZXJ5IGZvciB1c2VycycgcHVibGlzaGVkIHBvc3RzIG9yZGVlcmVkIGJ5IGNyZWF0aW9uIGRhdGUgaW4gZGVzY2VuZGluZyBvcmRlciwgd2l0aCBhIGxpbWl0IG9mIDUgcG9zdHNcclxuICAgICAgY29uc3QgcG9zdHNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICAgIHBvc3RzUmVmLFxyXG4gICAgICAgIHdoZXJlKFwicHVibGlzaGVkXCIsIFwiPT1cIiwgdHJ1ZSksXHJcbiAgICAgICAgb3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIEV4ZWN1dGUgdGhlIHF1ZXJ5IGFuZCBtYXAgdGhlIHBvc3RzIHRvIEpTT04gZm9ybWF0XHJcbiAgICAgIGNvbnN0IHBvc3RzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHBvc3RzUXVlcnkpO1xyXG4gICAgICBwb3N0cyA9IHBvc3RzU25hcHNob3QuZG9jcy5tYXAocG9zdFRvSlNPTik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIG9yIHBvc3RzOlwiLCBlcnJvcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgdXNlciwgcG9zdHMgfSwgLy8gUGFzcyB0aGUgdXNlciBhbmQgcG9zdHMgYXMgcHJvcHMgdG8gdGhlIHBhZ2UgY29tcG9uZW50XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGVQYWdlKHsgdXNlciwgcG9zdHMsIGFkbWluID0gZmFsc2UgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtcIiBcIn1cclxuICAgICAgPFVzZXJQcm9maWxlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8UG9zdEZlZWQgcG9zdHM9e3Bvc3RzfSBmaWx0ZXJCYXI9e2ZhbHNlfSBhZG1pbj17YWRtaW59IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJQb3N0RmVlZCIsImF1dGgiLCJVc2VyUHJvZmlsZVBhZ2UiLCJ1c2VyIiwicG9zdHMiLCJhZG1pbiIsImRpdiIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsImZpbHRlckJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[username]/index.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ UserProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UserProfile */ \"./components/UserProfile.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/context */ \"./lib/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction UserProfilePage(param) {\n    let { initialUser, posts } = param;\n    _s();\n    const { username } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialUser);\n    const [admin, setAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // Check if the current user is the same as the user being viewed\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setAdmin(initialUser.username === username);\n    }, [\n        initialUser,\n        username\n    ]);\n    console.log(initialUser.username);\n    console.log(username);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            flexDirection: \"column\",\n            width: \"100%\"\n        },\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                user: user,\n                admin: admin,\n                setUser: setUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    marginTop: \"3rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    posts: posts,\n                    filterBar: false\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfilePage, \"sz7oRwjFR7fiL1oV9vMvLvFDj/E=\");\n_c = UserProfilePage;\nvar _c;\n$RefreshReg$(_c, \"UserProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ047QUFHRDtBQUNROztBQXFDekMsU0FBU00sZ0JBQWdCLEtBQXNCO1FBQXRCLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFLEdBQXRCOztJQUN0QyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHTixpREFBVUEsQ0FBQ0QscURBQVdBO0lBQzNDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQ0c7SUFDakMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBRW5DLGlFQUFpRTtJQUNqRUMsZ0RBQVNBLENBQUM7UUFDUlEsU0FBU04sWUFBWUUsUUFBUSxLQUFLQTtJQUNwQyxHQUFHO1FBQUNGO1FBQWFFO0tBQVM7SUFFMUJLLFFBQVFDLEdBQUcsQ0FBQ1IsWUFBWUUsUUFBUTtJQUNoQ0ssUUFBUUMsR0FBRyxDQUFDTjtJQUVaLHFCQUNFLDhEQUFDTztRQUNDQyxPQUFPO1lBQ0xDLGVBQWU7WUFDZkMsT0FBTztRQUNUOztZQUVDOzBCQUNELDhEQUFDbkIsK0RBQVdBO2dCQUFDVSxNQUFNQTtnQkFBTUUsT0FBT0E7Z0JBQU9ELFNBQVNBOzs7Ozs7MEJBQ2hELDhEQUFDSztnQkFDQ0MsT0FBTztvQkFDTEcsU0FBUztvQkFDVEMsZ0JBQWdCO29CQUNoQkMsWUFBWTtvQkFDWkMsV0FBVztnQkFDYjswQkFFQSw0RUFBQ3RCLDREQUFRQTtvQkFBQ08sT0FBT0E7b0JBQU9nQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQztHQWxDd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdXNlcm5hbWVdL2luZGV4LmpzP2FlZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJQcm9maWxlXCI7XHJcbmltcG9ydCBQb3N0RmVlZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0RmVlZFwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyV2l0aFVzZXJuYW1lLCBwb3N0VG9KU09OIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCB3aGVyZSwgb3JkZXJCeSwgZ2V0RG9jcywgcXVlcnkgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2xpYi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFNlcnZlci1zaWRlIHJlbmRlcmluZyBmdW5jdGlvbiB0byBmZXRjaCBkYXRhIGJhc2VkIG9uIHRoZSB1c2VybmFtZSBxdWVyeVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnk6IGNvbnRleHRRdWVyeSB9KSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB1c2VyIHRvIG51bGwgYW5kIHBvc3RzIHRvIGFuIGVtcHR5IGFycmF5XHJcbiAgbGV0IGluaXRpYWxVc2VyID0gbnVsbDtcclxuICBsZXQgcG9zdHMgPSBbXTtcclxuICBjb25zdCB7IHVzZXJuYW1lIH0gPSBjb250ZXh0UXVlcnk7IC8vIEV4dHJhY3QgdGhlIHVzZXJuYW1lIGZyb20gdGhlIHF1ZXJ5IHBhcmFtZXRlcnNcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXRVc2VyV2l0aFVzZXJuYW1lKHVzZXJuYW1lKTsgLy8gR2V0IHRoZSB1c2VyIGRvY3VtZW50IHdpdGggdGhlIHNwZWNpZmllZCB1c2VybmFtZVxyXG5cclxuICAgIC8vIElmIHRoZSB1c2VyJ3MgZG9jdW1lbnQgZXhpc3RzLFxyXG4gICAgaWYgKHVzZXJEb2MpIHtcclxuICAgICAgaW5pdGlhbFVzZXIgPSB1c2VyRG9jLmRhdGEoKTsgLy8gR2V0IHRoZSB1c2VyJ3MgZGF0YVxyXG4gICAgICBjb25zdCBwb3N0c1JlZiA9IGNvbGxlY3Rpb24odXNlckRvYy5yZWYsIFwicG9zdHNcIik7IC8vIFJlZmVyZW5jZSB0aGUgXCJwb3N0c1wiIGNvbGxlY3Rpb24gb2YgdGhlIHVzZXJcclxuXHJcbiAgICAgIC8vIFF1ZXJ5IGZvciB1c2VycycgcHVibGlzaGVkIHBvc3RzIG9yZGVlcmVkIGJ5IGNyZWF0aW9uIGRhdGUgaW4gZGVzY2VuZGluZyBvcmRlciwgd2l0aCBhIGxpbWl0IG9mIDUgcG9zdHNcclxuICAgICAgY29uc3QgcG9zdHNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICAgIHBvc3RzUmVmLFxyXG4gICAgICAgIHdoZXJlKFwicHVibGlzaGVkXCIsIFwiPT1cIiwgdHJ1ZSksXHJcbiAgICAgICAgb3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIEV4ZWN1dGUgdGhlIHF1ZXJ5IGFuZCBtYXAgdGhlIHBvc3RzIHRvIEpTT04gZm9ybWF0XHJcbiAgICAgIGNvbnN0IHBvc3RzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHBvc3RzUXVlcnkpO1xyXG4gICAgICBwb3N0cyA9IHBvc3RzU25hcHNob3QuZG9jcy5tYXAocG9zdFRvSlNPTik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIG9yIHBvc3RzOlwiLCBlcnJvcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgaW5pdGlhbFVzZXIsIHBvc3RzIH0sIC8vIFBhc3MgdGhlIHVzZXIgYW5kIHBvc3RzIGFzIHByb3BzIHRvIHRoZSBwYWdlIGNvbXBvbmVudFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQcm9maWxlUGFnZSh7IGluaXRpYWxVc2VyLCBwb3N0cyB9KSB7XHJcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoaW5pdGlhbFVzZXIpO1xyXG4gIGNvbnN0IFthZG1pbiwgc2V0QWRtaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGlzIHRoZSBzYW1lIGFzIHRoZSB1c2VyIGJlaW5nIHZpZXdlZFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRBZG1pbihpbml0aWFsVXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUpO1xyXG4gIH0sIFtpbml0aWFsVXNlciwgdXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc29sZS5sb2coaW5pdGlhbFVzZXIudXNlcm5hbWUpO1xyXG4gIGNvbnNvbGUubG9nKHVzZXJuYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge1wiIFwifVxyXG4gICAgICA8VXNlclByb2ZpbGUgdXNlcj17dXNlcn0gYWRtaW49e2FkbWlufSBzZXRVc2VyPXtzZXRVc2VyfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBvc3RGZWVkIHBvc3RzPXtwb3N0c30gZmlsdGVyQmFyPXtmYWxzZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsIlBvc3RGZWVkIiwiVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyUHJvZmlsZVBhZ2UiLCJpbml0aWFsVXNlciIsInBvc3RzIiwidXNlcm5hbWUiLCJ1c2VyIiwic2V0VXNlciIsImFkbWluIiwic2V0QWRtaW4iLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwiZmlsdGVyQmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[username]/index.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ UserProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UserProfile */ \"./components/UserProfile.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _components_AdditionalDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AdditionalDetails */ \"./components/AdditionalDetails.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/context */ \"./lib/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction UserProfilePage(param) {\n    let { initialUser, posts } = param;\n    _s();\n    const { username } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialUser);\n    const [admin, setAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    // Check if the current user is the same as the user being viewed\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setUser(initialUser);\n        setAdmin((initialUser === null || initialUser === void 0 ? void 0 : initialUser.username) === username);\n    }, [\n        initialUser,\n        username\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            flexDirection: \"column\",\n            width: \"100%\"\n        },\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                user: user,\n                admin: admin,\n                setUser: setUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AdditionalDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                user: user,\n                setUser: setUser,\n                admin: admin\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    posts: posts,\n                    filterBar: false\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfilePage, \"sz7oRwjFR7fiL1oV9vMvLvFDj/E=\");\n_c = UserProfilePage;\nvar _c;\n$RefreshReg$(_c, \"UserProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNOO0FBRXNCO0FBR3ZCO0FBQ1E7O0FBcUN6QyxTQUFTTyxnQkFBZ0IsS0FBc0I7UUFBdEIsRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUUsR0FBdEI7O0lBQ3RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdOLGlEQUFVQSxDQUFDRCxxREFBV0E7SUFDM0MsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDRztJQUNqQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFFbkMsaUVBQWlFO0lBQ2pFQyxnREFBU0EsQ0FBQztRQUNSTSxRQUFRSjtRQUNSTSxTQUFTTixDQUFBQSx3QkFBQUEsa0NBQUFBLFlBQWFFLFFBQVEsTUFBS0E7SUFDckMsR0FBRztRQUFDRjtRQUFhRTtLQUFTO0lBRTFCLHFCQUNFLDhEQUFDSztRQUNDQyxPQUFPO1lBQ0xDLGVBQWU7WUFDZkMsT0FBTztRQUNUOztZQUVDOzBCQUNELDhEQUFDbEIsK0RBQVdBO2dCQUFDVyxNQUFNQTtnQkFBTUUsT0FBT0E7Z0JBQU9ELFNBQVNBOzs7Ozs7MEJBQ2hELDhEQUFDVixxRUFBcUJBO2dCQUFDUyxNQUFNQTtnQkFBTUMsU0FBU0E7Z0JBQVNDLE9BQU9BOzs7Ozs7MEJBQzVELDhEQUFDRTtnQkFDQ0MsT0FBTztvQkFDTEcsU0FBUztvQkFDVEMsZ0JBQWdCO29CQUNoQkMsWUFBWTtnQkFDZDswQkFFQSw0RUFBQ3BCLDREQUFRQTtvQkFBQ1EsT0FBT0E7b0JBQU9hLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNDO0dBaEN3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJuYW1lXS9pbmRleC5qcz9hZWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZVwiO1xyXG5pbXBvcnQgUG9zdEZlZWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdEZlZWRcIjtcclxuaW1wb3J0IHsgZ2V0VXNlcldpdGhVc2VybmFtZSwgcG9zdFRvSlNPTiB9IGZyb20gXCIuLi8uLi9saWIvZmlyZWJhc2VcIjtcclxuaW1wb3J0IEFkZGl0aW9uYWxVc2VyRGV0YWlscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BZGRpdGlvbmFsRGV0YWlsc1wiO1xyXG5cclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgd2hlcmUsIG9yZGVyQnksIGdldERvY3MsIHF1ZXJ5IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9saWIvY29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTZXJ2ZXItc2lkZSByZW5kZXJpbmcgZnVuY3Rpb24gdG8gZmV0Y2ggZGF0YSBiYXNlZCBvbiB0aGUgdXNlcm5hbWUgcXVlcnlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5OiBjb250ZXh0UXVlcnkgfSkge1xyXG4gIC8vIEluaXRpYWxpemUgdXNlciB0byBudWxsIGFuZCBwb3N0cyB0byBhbiBlbXB0eSBhcnJheVxyXG4gIGxldCBpbml0aWFsVXNlciA9IG51bGw7XHJcbiAgbGV0IHBvc3RzID0gW107XHJcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gY29udGV4dFF1ZXJ5OyAvLyBFeHRyYWN0IHRoZSB1c2VybmFtZSBmcm9tIHRoZSBxdWVyeSBwYXJhbWV0ZXJzXHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0VXNlcldpdGhVc2VybmFtZSh1c2VybmFtZSk7IC8vIEdldCB0aGUgdXNlciBkb2N1bWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgdXNlcm5hbWVcclxuXHJcbiAgICAvLyBJZiB0aGUgdXNlcidzIGRvY3VtZW50IGV4aXN0cyxcclxuICAgIGlmICh1c2VyRG9jKSB7XHJcbiAgICAgIGluaXRpYWxVc2VyID0gdXNlckRvYy5kYXRhKCk7IC8vIEdldCB0aGUgdXNlcidzIGRhdGFcclxuICAgICAgY29uc3QgcG9zdHNSZWYgPSBjb2xsZWN0aW9uKHVzZXJEb2MucmVmLCBcInBvc3RzXCIpOyAvLyBSZWZlcmVuY2UgdGhlIFwicG9zdHNcIiBjb2xsZWN0aW9uIG9mIHRoZSB1c2VyXHJcblxyXG4gICAgICAvLyBRdWVyeSBmb3IgdXNlcnMnIHB1Ymxpc2hlZCBwb3N0cyBvcmRlZXJlZCBieSBjcmVhdGlvbiBkYXRlIGluIGRlc2NlbmRpbmcgb3JkZXIsIHdpdGggYSBsaW1pdCBvZiA1IHBvc3RzXHJcbiAgICAgIGNvbnN0IHBvc3RzUXVlcnkgPSBxdWVyeShcclxuICAgICAgICBwb3N0c1JlZixcclxuICAgICAgICB3aGVyZShcInB1Ymxpc2hlZFwiLCBcIj09XCIsIHRydWUpLFxyXG4gICAgICAgIG9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBFeGVjdXRlIHRoZSBxdWVyeSBhbmQgbWFwIHRoZSBwb3N0cyB0byBKU09OIGZvcm1hdFxyXG4gICAgICBjb25zdCBwb3N0c1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhwb3N0c1F1ZXJ5KTtcclxuICAgICAgcG9zdHMgPSBwb3N0c1NuYXBzaG90LmRvY3MubWFwKHBvc3RUb0pTT04pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBvciBwb3N0czpcIiwgZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGluaXRpYWxVc2VyLCBwb3N0cyB9LCAvLyBQYXNzIHRoZSB1c2VyIGFuZCBwb3N0cyBhcyBwcm9wcyB0byB0aGUgcGFnZSBjb21wb25lbnRcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUHJvZmlsZVBhZ2UoeyBpbml0aWFsVXNlciwgcG9zdHMgfSkge1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGluaXRpYWxVc2VyKTtcclxuICBjb25zdCBbYWRtaW4sIHNldEFkbWluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyB0aGUgc2FtZSBhcyB0aGUgdXNlciBiZWluZyB2aWV3ZWRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VXNlcihpbml0aWFsVXNlcik7XHJcbiAgICBzZXRBZG1pbihpbml0aWFsVXNlcj8udXNlcm5hbWUgPT09IHVzZXJuYW1lKTtcclxuICB9LCBbaW5pdGlhbFVzZXIsIHVzZXJuYW1lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtcIiBcIn1cclxuICAgICAgPFVzZXJQcm9maWxlIHVzZXI9e3VzZXJ9IGFkbWluPXthZG1pbn0gc2V0VXNlcj17c2V0VXNlcn0gLz5cclxuICAgICAgPEFkZGl0aW9uYWxVc2VyRGV0YWlscyB1c2VyPXt1c2VyfSBzZXRVc2VyPXtzZXRVc2VyfSBhZG1pbj17YWRtaW59IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxQb3N0RmVlZCBwb3N0cz17cG9zdHN9IGZpbHRlckJhcj17ZmFsc2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJQb3N0RmVlZCIsIkFkZGl0aW9uYWxVc2VyRGV0YWlscyIsIlVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlclByb2ZpbGVQYWdlIiwiaW5pdGlhbFVzZXIiLCJwb3N0cyIsInVzZXJuYW1lIiwidXNlciIsInNldFVzZXIiLCJhZG1pbiIsInNldEFkbWluIiwiZGl2Iiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmlsdGVyQmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[username]/index.js\n"));

/***/ })

});
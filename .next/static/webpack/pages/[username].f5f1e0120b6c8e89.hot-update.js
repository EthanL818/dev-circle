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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ UserProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UserProfile */ \"./components/UserProfile.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/context */ \"./lib/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction UserProfilePage(param) {\n    let { initialUser, posts, admin = false } = param;\n    _s();\n    const { username } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const [user, setUser] = useState(initialUser);\n    // Check if the current user is the same as the user being viewed\n    if (user.username == username) {\n        admin = true;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            flexDirection: \"column\",\n            width: \"100%\"\n        },\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                user: user,\n                admin: admin,\n                setUser: setUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    marginTop: \"3rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    posts: posts,\n                    filterBar: false\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\index.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfilePage, \"uipJQnsDp2+mXxPaA0v8NBA1koY=\");\n_c = UserProfilePage;\nvar _c;\n$RefreshReg$(_c, \"UserProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNOO0FBQzBCO0FBRTNCO0FBQ2I7O0FBcUNwQixTQUFTSyxnQkFBZ0IsS0FBcUM7UUFBckMsRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsS0FBSyxFQUFFLEdBQXJDOztJQUN0QyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHTCxpREFBVUEsQ0FBQ0QscURBQVdBO0lBQzNDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHQyxTQUFTTjtJQUVqQyxpRUFBaUU7SUFDakUsSUFBSUksS0FBS0QsUUFBUSxJQUFJQSxVQUFVO1FBQzdCRCxRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ0s7UUFDQ0MsT0FBTztZQUNMQyxlQUFlO1lBQ2ZDLE9BQU87UUFDVDs7WUFFQzswQkFDRCw4REFBQ2hCLCtEQUFXQTtnQkFBQ1UsTUFBTUE7Z0JBQU1GLE9BQU9BO2dCQUFPRyxTQUFTQTs7Ozs7OzBCQUNoRCw4REFBQ0U7Z0JBQ0NDLE9BQU87b0JBQ0xHLFNBQVM7b0JBQ1RDLGdCQUFnQjtvQkFDaEJDLFlBQVk7b0JBQ1pDLFdBQVc7Z0JBQ2I7MEJBRUEsNEVBQUNuQiw0REFBUUE7b0JBQUNNLE9BQU9BO29CQUFPYyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQztHQTlCd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdXNlcm5hbWVdL2luZGV4LmpzP2FlZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJQcm9maWxlXCI7XHJcbmltcG9ydCBQb3N0RmVlZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0RmVlZFwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyV2l0aFVzZXJuYW1lLCBwb3N0VG9KU09OLCBhdXRoIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCB3aGVyZSwgb3JkZXJCeSwgZ2V0RG9jcywgcXVlcnkgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2xpYi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFNlcnZlci1zaWRlIHJlbmRlcmluZyBmdW5jdGlvbiB0byBmZXRjaCBkYXRhIGJhc2VkIG9uIHRoZSB1c2VybmFtZSBxdWVyeVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnk6IGNvbnRleHRRdWVyeSB9KSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB1c2VyIHRvIG51bGwgYW5kIHBvc3RzIHRvIGFuIGVtcHR5IGFycmF5XHJcbiAgbGV0IHVzZXIgPSBudWxsO1xyXG4gIGxldCBwb3N0cyA9IFtdO1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IGNvbnRleHRRdWVyeTsgLy8gRXh0cmFjdCB0aGUgdXNlcm5hbWUgZnJvbSB0aGUgcXVlcnkgcGFyYW1ldGVyc1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGdldFVzZXJXaXRoVXNlcm5hbWUodXNlcm5hbWUpOyAvLyBHZXQgdGhlIHVzZXIgZG9jdW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIHVzZXJuYW1lXHJcblxyXG4gICAgLy8gSWYgdGhlIHVzZXIncyBkb2N1bWVudCBleGlzdHMsXHJcbiAgICBpZiAodXNlckRvYykge1xyXG4gICAgICB1c2VyID0gdXNlckRvYy5kYXRhKCk7IC8vIEdldCB0aGUgdXNlcidzIGRhdGFcclxuICAgICAgY29uc3QgcG9zdHNSZWYgPSBjb2xsZWN0aW9uKHVzZXJEb2MucmVmLCBcInBvc3RzXCIpOyAvLyBSZWZlcmVuY2UgdGhlIFwicG9zdHNcIiBjb2xsZWN0aW9uIG9mIHRoZSB1c2VyXHJcblxyXG4gICAgICAvLyBRdWVyeSBmb3IgdXNlcnMnIHB1Ymxpc2hlZCBwb3N0cyBvcmRlZXJlZCBieSBjcmVhdGlvbiBkYXRlIGluIGRlc2NlbmRpbmcgb3JkZXIsIHdpdGggYSBsaW1pdCBvZiA1IHBvc3RzXHJcbiAgICAgIGNvbnN0IHBvc3RzUXVlcnkgPSBxdWVyeShcclxuICAgICAgICBwb3N0c1JlZixcclxuICAgICAgICB3aGVyZShcInB1Ymxpc2hlZFwiLCBcIj09XCIsIHRydWUpLFxyXG4gICAgICAgIG9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBFeGVjdXRlIHRoZSBxdWVyeSBhbmQgbWFwIHRoZSBwb3N0cyB0byBKU09OIGZvcm1hdFxyXG4gICAgICBjb25zdCBwb3N0c1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhwb3N0c1F1ZXJ5KTtcclxuICAgICAgcG9zdHMgPSBwb3N0c1NuYXBzaG90LmRvY3MubWFwKHBvc3RUb0pTT04pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBvciBwb3N0czpcIiwgZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGluaXRpYWxVc2VyLCBwb3N0cyB9LCAvLyBQYXNzIHRoZSB1c2VyIGFuZCBwb3N0cyBhcyBwcm9wcyB0byB0aGUgcGFnZSBjb21wb25lbnRcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUHJvZmlsZVBhZ2UoeyBpbml0aWFsVXNlciwgcG9zdHMsIGFkbWluID0gZmFsc2UgfSkge1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGluaXRpYWxVc2VyKTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyB0aGUgc2FtZSBhcyB0aGUgdXNlciBiZWluZyB2aWV3ZWRcclxuICBpZiAodXNlci51c2VybmFtZSA9PSB1c2VybmFtZSkge1xyXG4gICAgYWRtaW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge1wiIFwifVxyXG4gICAgICA8VXNlclByb2ZpbGUgdXNlcj17dXNlcn0gYWRtaW49e2FkbWlufSBzZXRVc2VyPXtzZXRVc2VyfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBvc3RGZWVkIHBvc3RzPXtwb3N0c30gZmlsdGVyQmFyPXtmYWxzZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsIlBvc3RGZWVkIiwiYXV0aCIsIlVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJQcm9maWxlUGFnZSIsImluaXRpYWxVc2VyIiwicG9zdHMiLCJhZG1pbiIsInVzZXJuYW1lIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImRpdiIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsImZpbHRlckJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[username]/index.js\n"));

/***/ })

});
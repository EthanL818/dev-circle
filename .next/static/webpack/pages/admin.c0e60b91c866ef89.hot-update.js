"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminPostsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AdminPostsPage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flexDirection: \"column\",\n                    width: \"100%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"box-center\",\n                        children: \"Manage Posts\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostList, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = AdminPostsPage;\n// Displays all posts that a user has created\nfunction PostList() {\n    _s();\n    // Reference to the \"posts\" collection for the current user\n    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid, \"posts\");\n    // Create a query to order posts by date created\n    const postsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)(ref, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.orderBy)(\"createdAt\"));\n    // Use the query with useCollection hook\n    const [querySnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection)(postsQuery);\n    // Map the querySnapshot to extract post data\n    const posts = querySnapshot === null || querySnapshot === void 0 ? void 0 : querySnapshot.docs.map((doc)=>doc.data());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            posts: posts,\n            admin: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(PostList, \"2ulVYHv4RF0dlsUeVWaCdrI3LGw=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection\n    ];\n});\n_c1 = PostList;\nvar _c, _c1;\n$RefreshReg$(_c, \"AdminPostsPage\");\n$RefreshReg$(_c1, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0Y7QUFDSTtBQUVVO0FBTW5DO0FBRWIsU0FBU1MsZUFBZUMsS0FBSztJQUMxQyxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNYLDZEQUFTQTtzQkFDUiw0RUFBQ1k7Z0JBQ0NDLE9BQU87b0JBQ0xDLGVBQWU7b0JBQ2ZDLE9BQU87Z0JBQ1Q7O2tDQUVBLDhEQUFDQzt3QkFBR0MsV0FBVTtrQ0FBYTs7Ozs7O2tDQUMzQiw4REFBQ0w7d0JBQUlLLFdBQVU7a0NBQ2IsNEVBQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0tBbEJ3QlQ7QUFvQnhCLDZDQUE2QztBQUM3QyxTQUFTUzs7SUFDUCwyREFBMkQ7SUFDM0QsTUFBTUMsTUFBTWQsOERBQVVBLENBQUNILG9EQUFTQSxFQUFFLFNBQVNDLCtDQUFJQSxDQUFDaUIsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFFakUsZ0RBQWdEO0lBQ2hELE1BQU1DLGFBQWFmLHlEQUFjQSxDQUFDWSxLQUFLWCwyREFBT0EsQ0FBQztJQUUvQyx3Q0FBd0M7SUFDeEMsTUFBTSxDQUFDZSxjQUFjLEdBQUduQiw2RUFBYUEsQ0FBQ2tCO0lBRXRDLDZDQUE2QztJQUM3QyxNQUFNRSxRQUFRRCwwQkFBQUEsb0NBQUFBLGNBQWVFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFFdkQscUJBQ0UsOERBQUNoQjtRQUNDQyxPQUFPO1lBQ0xnQixTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNkO2tCQUVBLDRFQUFDOUIsNERBQVFBO1lBQUN1QixPQUFPQTtZQUFPUSxLQUFLOzs7Ozs7Ozs7OztBQUduQztHQXhCU2Q7O1FBUWlCZCx5RUFBYUE7OztNQVI5QmMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXguanM/OGMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aENoZWNrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0F1dGhDaGVja1wiO1xyXG5pbXBvcnQgUG9zdEZlZWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdEZlZWRcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlLCBhdXRoIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZVwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgY29sbGVjdGlvbixcclxuICBxdWVyeSBhcyBmaXJlc3RvcmVRdWVyeSxcclxuICBvcmRlckJ5LFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluUG9zdHNQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8QXV0aENoZWNrPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJveC1jZW50ZXJcIj5NYW5hZ2UgUG9zdHM8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8UG9zdExpc3QgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0F1dGhDaGVjaz5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG4vLyBEaXNwbGF5cyBhbGwgcG9zdHMgdGhhdCBhIHVzZXIgaGFzIGNyZWF0ZWRcclxuZnVuY3Rpb24gUG9zdExpc3QoKSB7XHJcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBcInBvc3RzXCIgY29sbGVjdGlvbiBmb3IgdGhlIGN1cnJlbnQgdXNlclxyXG4gIGNvbnN0IHJlZiA9IGNvbGxlY3Rpb24oZmlyZXN0b3JlLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkLCBcInBvc3RzXCIpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBxdWVyeSB0byBvcmRlciBwb3N0cyBieSBkYXRlIGNyZWF0ZWRcclxuICBjb25zdCBwb3N0c1F1ZXJ5ID0gZmlyZXN0b3JlUXVlcnkocmVmLCBvcmRlckJ5KFwiY3JlYXRlZEF0XCIpKTtcclxuXHJcbiAgLy8gVXNlIHRoZSBxdWVyeSB3aXRoIHVzZUNvbGxlY3Rpb24gaG9va1xyXG4gIGNvbnN0IFtxdWVyeVNuYXBzaG90XSA9IHVzZUNvbGxlY3Rpb24ocG9zdHNRdWVyeSk7XHJcblxyXG4gIC8vIE1hcCB0aGUgcXVlcnlTbmFwc2hvdCB0byBleHRyYWN0IHBvc3QgZGF0YVxyXG4gIGNvbnN0IHBvc3RzID0gcXVlcnlTbmFwc2hvdD8uZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFBvc3RGZWVkIHBvc3RzPXtwb3N0c30gYWRtaW4gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkF1dGhDaGVjayIsIlBvc3RGZWVkIiwiZmlyZXN0b3JlIiwiYXV0aCIsInVzZUNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJmaXJlc3RvcmVRdWVyeSIsIm9yZGVyQnkiLCJBZG1pblBvc3RzUGFnZSIsInByb3BzIiwibWFpbiIsImRpdiIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiaDEiLCJjbGFzc05hbWUiLCJQb3N0TGlzdCIsInJlZiIsImN1cnJlbnRVc2VyIiwidWlkIiwicG9zdHNRdWVyeSIsInF1ZXJ5U25hcHNob3QiLCJwb3N0cyIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImFkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n"));

/***/ })

});
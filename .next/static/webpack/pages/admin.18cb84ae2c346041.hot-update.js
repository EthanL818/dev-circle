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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminPostsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Admin.module.css */ \"./styles/Admin.module.css\");\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/context */ \"./lib/context.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.kebabcase */ \"./node_modules/lodash.kebabcase/index.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction AdminPostsPage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flexDirection: \"column\",\n                    width: \"100%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Manage your Posts\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostList, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = AdminPostsPage;\n// Displays all posts that a user has created\nfunction PostList() {\n    _s();\n    // Reference to the \"posts\" collection for the current user\n    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_5__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_5__.auth.currentUser.uid, \"posts\");\n    // Create a query to order posts by date created\n    const postsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.query)(ref, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.orderBy)(\"createdAt\"));\n    // Use the query with useCollection hook\n    const [querySnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useCollection)(postsQuery);\n    // Map the querySnapshot to extract post data\n    const posts = querySnapshot === null || querySnapshot === void 0 ? void 0 : querySnapshot.docs.map((doc)=>doc.data());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            posts: posts,\n            admin: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(PostList, \"2ulVYHv4RF0dlsUeVWaCdrI3LGw=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useCollection\n    ];\n});\n_c1 = PostList;\nvar _c, _c1;\n$RefreshReg$(_c, \"AdminPostsPage\");\n$RefreshReg$(_c1, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNBO0FBQ0Y7QUFDRDtBQUNzQjtBQUV6QjtBQUNMO0FBRXVCO0FBQ3RCO0FBQ0w7QUFRUjtBQUViLFNBQVNtQixlQUFlQyxLQUFLO0lBQzFDLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ3BCLDZEQUFTQTtzQkFDUiw0RUFBQ3FCO2dCQUNDQyxPQUFPO29CQUNMQyxlQUFlO29CQUNmQyxPQUFPO2dCQUNUOztrQ0FFQSw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0tBaEJ3QlI7QUFrQnhCLDZDQUE2QztBQUM3QyxTQUFTUTs7SUFDUCwyREFBMkQ7SUFDM0QsTUFBTUMsTUFBTWYsK0RBQVVBLENBQUNULG9EQUFTQSxFQUFFLFNBQVNDLCtDQUFJQSxDQUFDd0IsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFFakUsZ0RBQWdEO0lBQ2hELE1BQU1DLGFBQWFmLDBEQUFjQSxDQUFDWSxLQUFLWCw0REFBT0EsQ0FBQztJQUUvQyx3Q0FBd0M7SUFDeEMsTUFBTSxDQUFDZSxjQUFjLEdBQUd0Qiw2RUFBYUEsQ0FBQ3FCO0lBRXRDLDZDQUE2QztJQUM3QyxNQUFNRSxRQUFRRCwwQkFBQUEsb0NBQUFBLGNBQWVFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNyQixNQUFRQSxJQUFJc0IsSUFBSTtJQUV2RCxxQkFDRSw4REFBQ2Q7UUFDQ0MsT0FBTztZQUNMYyxTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNkO2tCQUVBLDRFQUFDckMsNERBQVFBO1lBQUMrQixPQUFPQTtZQUFPTyxLQUFLOzs7Ozs7Ozs7OztBQUduQztHQXhCU2I7O1FBUWlCakIseUVBQWFBOzs7TUFSOUJpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9pbmRleC5qcz84YzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9BZG1pbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXV0aENoZWNrXCI7XHJcbmltcG9ydCBQb3N0RmVlZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0RmVlZFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9saWIvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGF1dGgsIHNlcnZlclRpbWVzdGFtcCB9IGZyb20gXCIuLi8uLi9saWIvZmlyZWJhc2VcIjtcclxuXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IGtlYmFiQ2FzZSBmcm9tIFwibG9kYXNoLmtlYmFiY2FzZVwiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBjb2xsZWN0aW9uLFxyXG4gIGRvYyxcclxuICBxdWVyeSBhcyBmaXJlc3RvcmVRdWVyeSxcclxuICBvcmRlckJ5LFxyXG4gIHNldERvYyxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pblBvc3RzUGFnZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPEF1dGhDaGVjaz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMT5NYW5hZ2UgeW91ciBQb3N0czwvaDE+XHJcbiAgICAgICAgICA8UG9zdExpc3QgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9BdXRoQ2hlY2s+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gRGlzcGxheXMgYWxsIHBvc3RzIHRoYXQgYSB1c2VyIGhhcyBjcmVhdGVkXHJcbmZ1bmN0aW9uIFBvc3RMaXN0KCkge1xyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgXCJwb3N0c1wiIGNvbGxlY3Rpb24gZm9yIHRoZSBjdXJyZW50IHVzZXJcclxuICBjb25zdCByZWYgPSBjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJ1c2Vyc1wiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCwgXCJwb3N0c1wiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgcXVlcnkgdG8gb3JkZXIgcG9zdHMgYnkgZGF0ZSBjcmVhdGVkXHJcbiAgY29uc3QgcG9zdHNRdWVyeSA9IGZpcmVzdG9yZVF1ZXJ5KHJlZiwgb3JkZXJCeShcImNyZWF0ZWRBdFwiKSk7XHJcblxyXG4gIC8vIFVzZSB0aGUgcXVlcnkgd2l0aCB1c2VDb2xsZWN0aW9uIGhvb2tcclxuICBjb25zdCBbcXVlcnlTbmFwc2hvdF0gPSB1c2VDb2xsZWN0aW9uKHBvc3RzUXVlcnkpO1xyXG5cclxuICAvLyBNYXAgdGhlIHF1ZXJ5U25hcHNob3QgdG8gZXh0cmFjdCBwb3N0IGRhdGFcclxuICBjb25zdCBwb3N0cyA9IHF1ZXJ5U25hcHNob3Q/LmRvY3MubWFwKChkb2MpID0+IGRvYy5kYXRhKCkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxQb3N0RmVlZCBwb3N0cz17cG9zdHN9IGFkbWluIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJBdXRoQ2hlY2siLCJQb3N0RmVlZCIsIlVzZXJDb250ZXh0IiwiZmlyZXN0b3JlIiwiYXV0aCIsInNlcnZlclRpbWVzdGFtcCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZUNvbGxlY3Rpb24iLCJrZWJhYkNhc2UiLCJ0b2FzdCIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImZpcmVzdG9yZVF1ZXJ5Iiwib3JkZXJCeSIsInNldERvYyIsIkFkbWluUG9zdHNQYWdlIiwicHJvcHMiLCJtYWluIiwiZGl2Iiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJoMSIsIlBvc3RMaXN0IiwicmVmIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJwb3N0c1F1ZXJ5IiwicXVlcnlTbmFwc2hvdCIsInBvc3RzIiwiZG9jcyIsIm1hcCIsImRhdGEiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWRtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n"));

/***/ })

});
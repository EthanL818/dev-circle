"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[username]/[slug]",{

/***/ "./pages/[username]/[slug].js":
/*!************************************!*\
  !*** ./pages/[username]/[slug].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Post.module.css */ \"./styles/Post.module.css\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostContent */ \"./components/PostContent.js\");\n/* harmony import */ var _components_LikeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LikeButton */ \"./components/LikeButton.js\");\n/* harmony import */ var _components_SuggestionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SuggestionBar */ \"./components/SuggestionBar.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/context */ \"./lib/context.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction UserCard() {\n    _s();\n    // Grab the user from the global context\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    return;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-side\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"card-img-top\",\n            src: user.photoURL\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n            lineNumber: 75,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n        lineNumber: 74,\n        columnNumber: 3\n    }, this);\n}\n_s(UserCard, \"y3FQDew7UyrSqYkvQcTdCsLbAB8=\");\n_c = UserCard;\nvar __N_SSG = true;\nfunction Post(props) {\n    _s1();\n    const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_9__.firestore, props.path);\n    const [realtimePost] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__.useDocumentData)(postRef);\n    const post = realtimePost || props.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: post\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                color: \"#B3B3B3\",\n                                fontSize: \"16px\",\n                                lineHeight: \"1.5\",\n                                margin: \"10px 0 20px\"\n                            },\n                            children: [\n                                \"Sign in to leave a suggestion for the author.\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    href: \"/enter\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn-blue\",\n                                        children: \"Log in\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, void 0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SuggestionBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            postRef: postRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: \"card\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    post.likeCount || 0,\n                                    \" \\uD83D\\uDC4D\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                href: \"/enter\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"\\uD83D\\uDC4D Sign Up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 118,\n                                    columnNumber: 17\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                lineNumber: 117,\n                                columnNumber: 15\n                            }, void 0),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LikeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                postRef: postRef\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserCard, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s1(Post, \"A8c8JBLofASK3VqHZChsZpYIh5Q=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__.useDocumentData\n    ];\n});\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"UserCard\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNLO0FBQ0Y7QUFDTTtBQUNSO0FBQ1A7QUFDZjtBQU9EO0FBQ29EO0FBQ2Y7QUFDOUI7QUFvRG5DLFNBQVNXOztJQUNQLHdDQUF3QztJQUN4QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRixrREFBVUEsQ0FBQ0wsb0RBQVdBO0lBRXZDO2tCQUNBLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVO1lBQWVFLEtBQUtKLEtBQUtLLFFBQVE7Ozs7Ozs7Ozs7O0FBRXBEO0dBUlNOO0tBQUFBOztBQVVNLFNBQVNPLEtBQUtDLEtBQUs7O0lBQ2hDLE1BQU1DLFVBQVViLHVEQUFHQSxDQUFDQyxvREFBU0EsRUFBRVcsTUFBTUUsSUFBSTtJQUN6QyxNQUFNLENBQUNDLGFBQWEsR0FBR2IsZ0ZBQWVBLENBQUNXO0lBRXZDLE1BQU1HLE9BQU9ELGdCQUFnQkgsTUFBTUksSUFBSTtJQUV2QyxxQkFDRSw4REFBQ0M7UUFBS1YsV0FBV2QsMEVBQWdCOzswQkFDL0IsOERBQUMwQjs7a0NBQ0MsOERBQUN6QiwrREFBV0E7d0JBQUNzQixNQUFNQTs7Ozs7O2tDQUNuQiw4REFBQ25CLDZEQUFTQTt3QkFDUnVCLHdCQUNFLDhEQUFDQzs0QkFDQ0MsT0FBTztnQ0FDTEMsT0FBTztnQ0FDUEMsVUFBVTtnQ0FDVkMsWUFBWTtnQ0FDWkMsUUFBUTs0QkFDVjs7Z0NBQ0Q7Z0NBQytDOzhDQUM5Qyw4REFBQzNCLGtEQUFJQTtvQ0FBQzRCLE1BQUs7OENBQ1QsNEVBQUNDO3dDQUFPckIsV0FBVTtrREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS25DLDRFQUFDWCxpRUFBYUE7NEJBQUNpQixTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTVCLDhEQUFDZ0I7Z0JBQU10QixXQUFVOzBCQUNmLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNjO3NDQUNDLDRFQUFDUzs7b0NBQVFkLEtBQUtlLFNBQVMsSUFBSTtvQ0FBRTs7Ozs7Ozs7Ozs7O3NDQUUvQiw4REFBQ2xDLDZEQUFTQTs0QkFDUnVCLHdCQUNFLDhEQUFDckIsa0RBQUlBO2dDQUFDNEIsTUFBSzswQ0FDVCw0RUFBQ0M7OENBQU87Ozs7Ozs7Ozs7O3NDQUlaLDRFQUFDakMsOERBQVVBO2dDQUFDa0IsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzNCLDhEQUFDVDs7Ozs7Ozs7Ozs7QUFHUDtJQW5Ed0JPOztRQUVDVCw0RUFBZUE7OztNQUZoQlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJuYW1lXS9bc2x1Z10uanM/ZGVmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUG9zdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBQb3N0Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0Q29udGVudFwiO1xyXG5pbXBvcnQgTGlrZUJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MaWtlQnV0dG9uXCI7XHJcbmltcG9ydCBTdWdnZXN0aW9uQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1N1Z2dlc3Rpb25CYXJcIjtcclxuaW1wb3J0IEF1dGhDaGVjayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BdXRoQ2hlY2tcIjtcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gXCIuLi8uLi9saWIvY29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgZG9jLFxyXG4gIGdldERvYyxcclxuICBjb2xsZWN0aW9uLFxyXG4gIGNvbGxlY3Rpb25Hcm91cCxcclxuICBnZXREb2NzLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0VXNlcldpdGhVc2VybmFtZSwgcG9zdFRvSlNPTiwgZmlyZXN0b3JlIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VEb2N1bWVudERhdGEgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgLy8gR3JhYiB0aGUgdXNlcm5hbWUgYW5kIHNsdWcgZnJvbSB0aGUgVVJMIHBhcmFtZXRlcnNcclxuICBjb25zdCB7IHVzZXJuYW1lLCBzbHVnIH0gPSBwYXJhbXM7XHJcblxyXG4gIC8vIFJldHJpZXZlIHRoZSB1c2VyIGZyb20gdGhlIHVzZXJuYW1lXHJcbiAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGdldFVzZXJXaXRoVXNlcm5hbWUodXNlcm5hbWUpO1xyXG5cclxuICBsZXQgcG9zdDtcclxuICBsZXQgcGF0aDtcclxuXHJcbiAgLy8gSWYgdGhlIHVzZXIgZXhpc3RzXHJcbiAgaWYgKHVzZXJEb2MpIHtcclxuICAgIC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgcG9zdCB1c2luZyB0aGUgc2x1ZyBhcyBpdHMgSURcclxuICAgIGNvbnN0IHBvc3RSZWYgPSBkb2MoY29sbGVjdGlvbih1c2VyRG9jLnJlZiwgXCJwb3N0c1wiKSwgc2x1Zyk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBwb3N0IGZyb20gdGhlIHJlZmVyZW5jZSBhbmQgY29udmVydCB0aGUgcG9zdCB0byBKU09OIGZvcm1hdFxyXG4gICAgcG9zdCA9IHBvc3RUb0pTT04oYXdhaXQgZ2V0RG9jKHBvc3RSZWYpKTtcclxuXHJcbiAgICAvLyBTYXZlIHRoZSBwYXRoXHJcbiAgICBwYXRoID0gcG9zdFJlZi5wYXRoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3QsIHBhdGggfSxcclxuICAgIHJldmFsaWRhdGU6IDUwMDAsIC8vIFJlZ2VuZXJhdGVzIHRoaXMgcGFnZSBvbiB0aGUgc2VydmVyIGV2ZXJ5IDUwMDBtc1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAvLyBRdWVyeSB0byByZXRyaWV2ZSBhbGwgcG9zdHMgZnJvbSB0aGUgZGF0YWJhc2VcclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbkdyb3VwKGZpcmVzdG9yZSwgXCJwb3N0c1wiKSk7XHJcblxyXG4gIC8qIFRha2VzIGFsbCBwb3N0cyBmcm9tIEZpcmVzdG9yZSBzbmFwc2hvdCBhbmQgZXh0cmFjdHMgdGhlIHNsdWcgYW5kIHVzZXJuYW1lIGZyb20gZWFjaCBwb3N0LCB0aGVuIGZvcm1hdHMgXHJcbiAgICAgdGhlbSBpbnRvIHRoZSByZXF1aXJlZCBzdHJ1Y3R1cmUgZm9yIE5leHQuanMgdG8gZ2VuZXJhdGUgc3RhdGljIHBhdGhzICovXHJcbiAgY29uc3QgcGF0aHMgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICBjb25zdCB7IHNsdWcsIHVzZXJuYW1lIH0gPSBkb2MuZGF0YSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7IHVzZXJuYW1lLCBzbHVnIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcblxyXG4gICAgLyogV2hlbiBhIHVzZXIgbmF2aWdhdGVzIHRvIGEgcGFnZSB0aGF0IGhhcyBub3QgYmVlbiByZW5kZXJlZCB5ZXQsIGFkZGluZyBhIGZhbGxiYWNrIHZhbHVlIG9mIGJsb2NraW5nIFxyXG4gICAgICAgdGVsbHMgTmV4dCB0byBmYWxsYmFjayB0byByZWd1bGFyIHNlcnZlciBzaWRlIHJlbmRlcmluZy4gT25jZSByZW5kZXJlZCwgaXQgY2FuIGJlIGNhY2hlZCB0byB0aGUgQ0ROICovXHJcbiAgICBmYWxsYmFjazogXCJibG9ja2luZ1wiLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVzZXJDYXJkKCkge1xyXG4gIC8vIEdyYWIgdGhlIHVzZXIgZnJvbSB0aGUgZ2xvYmFsIGNvbnRleHRcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICByZXR1cm47XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNpZGVcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXt1c2VyLnBob3RvVVJMfSAvPlxyXG4gIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdChwcm9wcykge1xyXG4gIGNvbnN0IHBvc3RSZWYgPSBkb2MoZmlyZXN0b3JlLCBwcm9wcy5wYXRoKTtcclxuICBjb25zdCBbcmVhbHRpbWVQb3N0XSA9IHVzZURvY3VtZW50RGF0YShwb3N0UmVmKTtcclxuXHJcbiAgY29uc3QgcG9zdCA9IHJlYWx0aW1lUG9zdCB8fCBwcm9wcy5wb3N0O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPFBvc3RDb250ZW50IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgPEF1dGhDaGVja1xyXG4gICAgICAgICAgZmFsbGJhY2s9e1xyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjQjNCM0IzXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMCAyMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpZ24gaW4gdG8gbGVhdmUgYSBzdWdnZXN0aW9uIGZvciB0aGUgYXV0aG9yLntcIiBcIn1cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ibHVlXCI+TG9nIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN1Z2dlc3Rpb25CYXIgcG9zdFJlZj17cG9zdFJlZn0gLz5cclxuICAgICAgICA8L0F1dGhDaGVjaz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3Bvc3QubGlrZUNvdW50IHx8IDB9IPCfkY08L3N0cm9uZz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxBdXRoQ2hlY2tcclxuICAgICAgICAgICAgZmFsbGJhY2s9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+8J+RjSBTaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaWtlQnV0dG9uIHBvc3RSZWY9e3Bvc3RSZWZ9IC8+XHJcbiAgICAgICAgICA8L0F1dGhDaGVjaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICAgIDxVc2VyQ2FyZCAvPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlBvc3RDb250ZW50IiwiTGlrZUJ1dHRvbiIsIlN1Z2dlc3Rpb25CYXIiLCJBdXRoQ2hlY2siLCJVc2VyQ29udGV4dCIsIkxpbmsiLCJkb2MiLCJmaXJlc3RvcmUiLCJ1c2VEb2N1bWVudERhdGEiLCJ1c2VDb250ZXh0IiwiVXNlckNhcmQiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicGhvdG9VUkwiLCJQb3N0IiwicHJvcHMiLCJwb3N0UmVmIiwicGF0aCIsInJlYWx0aW1lUG9zdCIsInBvc3QiLCJtYWluIiwiY29udGFpbmVyIiwic2VjdGlvbiIsImZhbGxiYWNrIiwicCIsInN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJtYXJnaW4iLCJocmVmIiwiYnV0dG9uIiwiYXNpZGUiLCJzdHJvbmciLCJsaWtlQ291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[username]/[slug].js\n"));

/***/ })

});